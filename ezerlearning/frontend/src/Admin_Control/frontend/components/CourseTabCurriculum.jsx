import React from 'react';
import { HiTrash, HiPlus, HiAcademicCap } from 'react-icons/hi';
import { cleanModuleTitle } from '../utils/courseUtils';
import { getCourseBySlug } from '../../../data/courses';

const DEFAULT_MODULE_IMAGES = [
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600"
];

export default function CourseTabCurriculum({ formData, setFormData }) {
  const defaultCourse = getCourseBySlug(formData.slug || formData.id || formData.title) || {};
  const defaultModules = Array.isArray(defaultCourse.curriculumModules) && defaultCourse.curriculumModules.length > 0
    ? defaultCourse.curriculumModules
    : [
        {
          num: "01",
          title: "Foundations & Core Architecture",
          badge: "CORE FOUNDATIONS",
          image: DEFAULT_MODULE_IMAGES[0],
          topics: [
            "Environment Setup & Tooling",
            "Core Fundamentals & Architecture",
            "Hands-on Practical Exercises",
            "Real-World Best Practices"
          ]
        },
        {
          num: "02",
          title: "Advanced Practical Engineering & Implementation",
          badge: "ADVANCED IMPLEMENTATION",
          image: DEFAULT_MODULE_IMAGES[1],
          topics: [
            "Building Production Modules",
            "Debugging & Error Handling",
            "Performance Optimization",
            "Code Reviews & Mentorship"
          ]
        },
        {
          num: "03",
          title: "Capstone Project & Placement Preparation",
          badge: "CAPSTONE & CAREER",
          image: DEFAULT_MODULE_IMAGES[2],
          topics: [
            "Live Industry Capstone Build",
            "CI/CD & Cloud Deployment",
            "Mock Technical Interviews",
            "12-Month Placement Support"
          ]
        }
      ];

  const rawList = (Array.isArray(formData.curriculumModulesList) && formData.curriculumModulesList.length > 0)
    ? formData.curriculumModulesList
    : defaultModules;

  const modules = rawList.map((m, idx) => {
    const rawTitle = typeof m === 'object' ? m.title : String(m);
    const cleanedTitle = cleanModuleTitle(rawTitle);
    const defMod = defaultModules[idx] || {};
    const num = (typeof m === 'object' && m.num) ? m.num : (defMod.num || (idx < 9 ? `0${idx + 1}` : `${idx + 1}`));
    const badge = (typeof m === 'object' && m.badge) ? m.badge : (defMod.badge || `MODULE ${idx + 1}`);
    const image = (typeof m === 'object' && m.image) ? m.image : (defMod.image || DEFAULT_MODULE_IMAGES[idx % DEFAULT_MODULE_IMAGES.length]);
    const topics = (typeof m === 'object' && Array.isArray(m.topics))
      ? m.topics
      : (typeof m?.topics === 'string'
          ? m.topics.split('\n').map((t) => t.trim()).filter(Boolean)
          : (defMod.topics || ['Hands-on Lab Exercises', 'Live Industry Scenarios']));

    return {
      id: (typeof m === 'object' && m.id) ? m.id : `mod-${idx}`,
      origIdx: idx,
      num,
      title: cleanedTitle || defMod.title || `Module ${idx + 1}`,
      badge,
      image,
      topics
    };
  });

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

    setFormData((prev) => ({
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
        : String(value).split('\n').map((t) => t.trim()).filter(Boolean);
    } else {
      updatedObj[field] = value;
    }

    list[idx] = updatedObj;
    setFormData((prev) => ({ ...prev, curriculumModulesList: list }));
  };

  const handleDeleteModule = (idx) => {
    const list = rawList.filter((_, i) => i !== idx);
    setFormData((prev) => ({ ...prev, curriculumModulesList: list }));
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div>
          <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 800, color: '#000648', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <HiAcademicCap size={18} color="#000648" />
            "In-Depth Curriculum & Learning Modules" Editor
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
              {/* Card Header with Module Index and Delete Action */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      background: '#000648',
                      color: '#f2b733',
                      fontWeight: 800,
                      fontSize: '0.75rem',
                      padding: '2px 8px',
                      borderRadius: '6px'
                    }}
                  >
                    {mod.num || `0${idx + 1}`}
                  </span>
                  <span style={{ fontWeight: 800, color: '#000648', fontSize: '0.88rem' }}>
                    Module #{idx + 1}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleDeleteModule(idx)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#ef4444',
                    cursor: 'pointer',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <HiTrash size={14} /> Remove Card
                </button>
              </div>

              {/* Grid for Number, Title, Badge */}
              <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 180px', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                    Number
                  </label>
                  <input
                    type="text"
                    value={mod.num}
                    onChange={(e) => handleUpdateField(idx, 'num', e.target.value)}
                    placeholder="01"
                    style={{
                      width: '100%',
                      padding: '8px 10px',
                      borderRadius: '6px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '0.85rem',
                      textAlign: 'center',
                      fontWeight: 700
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                    Module Title (No duplicate numbers needed)
                  </label>
                  <input
                    type="text"
                    value={mod.title}
                    onChange={(e) => handleUpdateField(idx, 'title', e.target.value)}
                    placeholder="e.g. Python Programming & Applied Mathematics for AI"
                    style={{
                      width: '100%',
                      padding: '8px 10px',
                      borderRadius: '6px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '0.85rem',
                      fontWeight: 700
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                    Badge Tag
                  </label>
                  <input
                    type="text"
                    value={mod.badge}
                    onChange={(e) => handleUpdateField(idx, 'badge', e.target.value)}
                    placeholder="e.g. CORE FOUNDATIONS"
                    style={{
                      width: '100%',
                      padding: '8px 10px',
                      borderRadius: '6px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      textTransform: 'uppercase'
                    }}
                  />
                </div>
              </div>

              {/* Cover Image URL */}
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                  Cover Image URL (Unsplash or direct image link)
                </label>
                <input
                  type="text"
                  value={mod.image}
                  onChange={(e) => handleUpdateField(idx, 'image', e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                  style={{
                    width: '100%',
                    padding: '8px 10px',
                    borderRadius: '6px',
                    border: '1.5px solid #cbd5e1',
                    fontSize: '0.82rem',
                    fontFamily: 'monospace'
                  }}
                />
              </div>

              {/* Topics / Bullet Points */}
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                  Key Topics & Lab Highlights (One topic per line)
                </label>
                <textarea
                  rows={4}
                  value={topicsText}
                  onChange={(e) => handleUpdateField(idx, 'topics', e.target.value)}
                  placeholder={"Topic 1: Environment Setup\nTopic 2: Core Fundamentals\nTopic 3: Hands-on Lab Project"}
                  style={{
                    width: '100%',
                    padding: '8px 10px',
                    borderRadius: '6px',
                    border: '1.5px solid #cbd5e1',
                    fontSize: '0.82rem',
                    lineHeight: 1.5,
                    fontFamily: 'inherit'
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
