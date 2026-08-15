import React from 'react';
import { HiTrash, HiPlus, HiAcademicCap } from 'react-icons/hi';
import { cleanModuleTitle } from '../utils/courseUtils';
import { getCourseBySlug, phase1Courses } from '../data/courses';

const DEFAULT_MODULE_IMAGES = [
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600"
];

/**
 * Checks if modules contain outdated/generic placeholder content
 * that should be replaced with the master course data.
 */
function hasValidCurriculum(modules) {
  if (!Array.isArray(modules) || modules.length === 0) return false;
  // Check the first module - if it has a real title with specific content, it's valid
  const first = modules[0];
  if (!first || typeof first !== 'object') return false;
  const title = (first.title || '').toLowerCase();
  // Generic placeholder titles that indicate outdated data
  const genericTitles = [
    'foundations & core architecture',
    'advanced practical engineering',
    'capstone project & placement preparation',
    'module 1 specialization',
    'fundamentals & core concepts'
  ];
  if (genericTitles.some(g => title.includes(g))) return false;
  // Check topics - generic topics indicate outdated data
  if (Array.isArray(first.topics) && first.topics.length > 0) {
    const genericTopics = ['Environment Setup & Tooling', 'Hands-on Lab Exercises', 'Core Concepts'];
    if (first.topics.every(t => genericTopics.includes(t))) return false;
  }
  return true;
}

/**
 * Gets the master curriculum modules for a course by trying multiple lookup strategies.
 */
function getMasterModules(slug, id, title) {
  // Strategy 1: getCourseBySlug with slug
  let course = getCourseBySlug(slug);
  if (course && Array.isArray(course.curriculumModules) && course.curriculumModules.length > 0) {
    return course.curriculumModules;
  }
  // Strategy 2: getCourseBySlug with id
  course = getCourseBySlug(id);
  if (course && Array.isArray(course.curriculumModules) && course.curriculumModules.length > 0) {
    return course.curriculumModules;
  }
  // Strategy 3: getCourseBySlug with title
  course = getCourseBySlug(title);
  if (course && Array.isArray(course.curriculumModules) && course.curriculumModules.length > 0) {
    return course.curriculumModules;
  }
  // Strategy 4: Direct search in phase1Courses array (absolute fallback)
  if (phase1Courses && Array.isArray(phase1Courses)) {
    const normalized = String(slug || id || title || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const found = phase1Courses.find(c => {
      const cSlug = (c.slug || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      const cId = (c.id || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      const cTitle = (c.title || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      return cSlug === normalized || cId === normalized || cTitle === normalized;
    });
    if (found && Array.isArray(found.curriculumModules) && found.curriculumModules.length > 0) {
      return found.curriculumModules;
    }
  }
  return [];
}

export default function CourseTabCurriculum({ formData, setFormData }) {
  // Get the master modules from the static course data
  const masterModules = getMasterModules(formData.slug, formData.id, formData.title);

  // Determine which modules to display:
  // Use formData.curriculumModulesList ONLY if it contains valid (non-generic) data
  // Otherwise always fall back to the master modules
  let rawList;
  if (hasValidCurriculum(formData.curriculumModulesList)) {
    rawList = formData.curriculumModulesList;
  } else {
    rawList = masterModules;
  }

  // If still empty (should never happen), create a minimal fallback
  if (!Array.isArray(rawList) || rawList.length === 0) {
    rawList = masterModules.length > 0 ? masterModules : [];
  }

  const modules = rawList.map((m, idx) => {
    if (!m || (typeof m !== 'object' && typeof m !== 'string')) return null;
    const rawTitle = typeof m === 'object' ? (m.title || '') : String(m);
    const cleanedTitle = cleanModuleTitle(rawTitle);
    const defMod = (masterModules[idx] || {});
    const num = (typeof m === 'object' && m.num) ? m.num : (defMod.num || (idx < 9 ? `0${idx + 1}` : `${idx + 1}`));
    const badge = (typeof m === 'object' && m.badge && !m.badge.startsWith('MODULE ')) ? m.badge : (defMod.badge || `MODULE ${idx + 1}`);
    const image = (typeof m === 'object' && m.image) ? m.image : (defMod.image || DEFAULT_MODULE_IMAGES[idx % DEFAULT_MODULE_IMAGES.length]);

    let topics;
    if (typeof m === 'object' && Array.isArray(m.topics) && m.topics.length > 0) {
      topics = m.topics;
    } else if (typeof m === 'object' && typeof m.topics === 'string') {
      topics = m.topics.split('\n').map(t => t.trim()).filter(Boolean);
    } else {
      topics = defMod.topics || ['Hands-on Lab Exercises', 'Live Industry Scenarios'];
    }

    return {
      id: (typeof m === 'object' && m.id) ? m.id : `mod-${idx}`,
      origIdx: idx,
      num,
      title: cleanedTitle || defMod.title || `Module ${idx + 1}`,
      badge,
      image,
      topics
    };
  }).filter(Boolean);

  const handleAddModule = () => {
    const nextIdx = rawList.length;
    const newMod = {
      id: `mod-${Date.now()}`,
      num: nextIdx < 9 ? `0${nextIdx + 1}` : `${nextIdx + 1}`,
      title: `Module ${nextIdx + 1} Specialization`,
      badge: `MODULE ${nextIdx + 1}`,
      image: DEFAULT_MODULE_IMAGES[nextIdx % DEFAULT_MODULE_IMAGES.length],
      topics: [
        'Hands-on Practical Lab Exercises',
        'Real-Time Industry Case Studies',
        'Enterprise Architecture Best Practices'
      ]
    };

    setFormData(prev => ({
      ...prev,
      curriculumModulesList: [...rawList, newMod]
    }));
  };

  const handleUpdateField = (idx, field, value) => {
    const list = [...rawList];
    const current = list[idx] || {};
    let updatedObj = typeof current === 'object' ? { ...current } : { title: String(current) };

    if (field === 'title') {
      updatedObj[field] = cleanModuleTitle(value);
    } else if (field === 'topics') {
      updatedObj[field] = Array.isArray(value)
        ? value
        : String(value).split('\n').map(t => t.trim()).filter(Boolean);
    } else {
      updatedObj[field] = value;
    }

    list[idx] = updatedObj;
    setFormData(prev => ({ ...prev, curriculumModulesList: list }));
  };

  const handleDeleteModule = (idx) => {
    const list = rawList.filter((_, i) => i !== idx);
    setFormData(prev => ({ ...prev, curriculumModulesList: list }));
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div>
          <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 800, color: '#000648', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <HiAcademicCap size={18} color="#000648" />
            &ldquo;In-Depth Curriculum &amp; Learning Modules&rdquo; Editor
          </h4>
          <p style={{ margin: '2px 0 0 0', fontSize: '0.78rem', color: '#64748b' }}>
            Customize the 6+ detailed module breakdown cards, titles, lab topics, badges, and cover photo URLs.
          </p>
        </div>
        <button
          type="button"
          onClick={handleAddModule}
          style={{
            padding: '8px 14px',
            background: '#000648',
            color: '#f2b733',
            border: 'none',
            borderRadius: '8px',
            fontSize: '0.82rem',
            fontWeight: 800,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <HiPlus size={16} /> Add Module Card
        </button>
      </div>

      {modules.length === 0 && (
        <div style={{ padding: '20px', background: '#fef3c7', borderRadius: '8px', textAlign: 'center', marginBottom: '16px' }}>
          <p style={{ margin: 0, color: '#92400e', fontWeight: 700, fontSize: '0.85rem' }}>
            No curriculum modules found. Click &ldquo;Add Module Card&rdquo; to create new modules.
          </p>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
        {modules.map((mod, idx) => {
          const topicsText = Array.isArray(mod.topics) ? mod.topics.join('\n') : (mod.topics || '');

          return (
            <div
              key={mod.id || `mod-card-${idx}`}
              style={{
                background: '#f8fafc',
                border: '1.5px solid #cbd5e1',
                borderRadius: '12px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ background: '#000648', color: '#f2b733', fontWeight: 800, fontSize: '0.75rem', padding: '2px 8px', borderRadius: '6px' }}>
                    {mod.num || `0${idx + 1}`}
                  </span>
                  <span style={{ fontWeight: 800, color: '#000648', fontSize: '0.88rem' }}>
                    Module #{idx + 1}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleDeleteModule(idx)}
                  style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '0.78rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  <HiTrash size={14} /> Remove Card
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 180px', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>Number</label>
                  <input type="text" value={mod.num} onChange={e => handleUpdateField(idx, 'num', e.target.value)} placeholder="01"
                    style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem', textAlign: 'center', fontWeight: 700 }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>Module Title (No duplicate numbers needed)</label>
                  <input type="text" value={mod.title} onChange={e => handleUpdateField(idx, 'title', e.target.value)} placeholder="e.g. Python Programming & Applied Mathematics for AI"
                    style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem', fontWeight: 700 }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>Badge Tag</label>
                  <input type="text" value={mod.badge} onChange={e => handleUpdateField(idx, 'badge', e.target.value)} placeholder="e.g. CORE FOUNDATIONS"
                    style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase' }} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>Cover Image URL (Unsplash or direct image link)</label>
                <input type="text" value={mod.image} onChange={e => handleUpdateField(idx, 'image', e.target.value)} placeholder="https://images.unsplash.com/..."
                  style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.82rem', fontFamily: 'monospace' }} />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>Key Topics & Lab Highlights (One topic per line)</label>
                <textarea rows={4} value={topicsText} onChange={e => handleUpdateField(idx, 'topics', e.target.value)}
                  placeholder={"Topic 1: Environment Setup\nTopic 2: Core Fundamentals\nTopic 3: Hands-on Lab Project"}
                  style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.82rem', lineHeight: 1.5, fontFamily: 'inherit' }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
