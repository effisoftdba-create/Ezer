import React from 'react';
import { HiTrash, HiPlus, HiAcademicCap } from 'react-icons/hi';
import { cleanModuleTitle } from '../utils/courseUtils';

const DEFAULT_MODULE_IMAGES = [
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600"
];

export default function CourseTabCurriculum({ formData, setFormData }) {
  const rawList = formData.curriculumModulesList || [];
  
  const modules = rawList.map((m, idx) => {
    const rawTitle = typeof m === 'object' ? m.title : String(m);
    const cleanedTitle = cleanModuleTitle(rawTitle);
    const num = (typeof m === 'object' && m.num) ? m.num : (idx < 9 ? `0${idx + 1}` : `${idx + 1}`);
    const badge = (typeof m === 'object' && m.badge) ? m.badge : `MODULE ${idx + 1}`;
    const image = (typeof m === 'object' && m.image) ? m.image : DEFAULT_MODULE_IMAGES[idx % DEFAULT_MODULE_IMAGES.length];
    const topics = (typeof m === 'object' && Array.isArray(m.topics))
      ? m.topics
      : ['Hands-on Lab Exercises', 'Live Industry Scenarios'];

    return {
      id: (typeof m === 'object' && m.id) ? m.id : `mod-${idx}`,
      origIdx: idx,
      num,
      title: cleanedTitle,
      badge,
      image,
      topics
    };
  });

  const handleAddModule = () => {
    const nextIdx = modules.length;
    const newMod = {
      id: `mod-${Date.now()}`,
      num: nextIdx < 9 ? `0${nextIdx + 1}` : `${nextIdx + 1}`,
      title: `Advanced Module ${nextIdx + 1}`,
      badge: `MODULE ${nextIdx + 1}`,
      image: DEFAULT_MODULE_IMAGES[nextIdx % DEFAULT_MODULE_IMAGES.length],
      topics: [
        'Hands-on Lab Exercises',
        'Live Industry Scenarios',
        'Production Architecture Best Practices'
      ]
    };

    setFormData((prev) => ({
      ...prev,
      curriculumModulesList: [...(prev.curriculumModulesList || []), newMod]
    }));
  };

  const handleUpdateField = (idx, field, value) => {
    const list = [...(formData.curriculumModulesList || [])];
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
    const list = (formData.curriculumModulesList || []).filter((_, i) => i !== idx);
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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: '#000648',
                    color: '#f2b733',
                    fontSize: '0.75rem',
                    fontWeight: 900,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {mod.num || `0${idx + 1}`}
                  </span>
                  <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#000648' }}>
                    Module #{idx + 1}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleDeleteModule(idx)}
                  style={{
                    padding: '4px 8px',
                    background: '#fef2f2',
                    border: '1px solid #fecaca',
                    color: '#dc2626',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <HiTrash size={14} /> Remove Card
                </button>
              </div>

              {/* Module Header Controls (Title, Badge, Number) */}
              <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 180px', gap: '12px' }}>
                <div>
                  <label htmlFor={`mod_num_${idx}`} style={{ fontSize: '0.72rem', fontWeight: 800, color: '#000648', display: 'block', marginBottom: '4px' }}>
                    Number
                  </label>
                  <input
                    id={`mod_num_${idx}`}
                    type="text"
                    value={mod.num}
                    onChange={(e) => handleUpdateField(idx, 'num', e.target.value)}
                    placeholder="01"
                    style={{ width: '100%', padding: '7px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.8rem', fontWeight: 700 }}
                  />
                </div>

                <div>
                  <label htmlFor={`mod_title_${idx}`} style={{ fontSize: '0.72rem', fontWeight: 800, color: '#000648', display: 'block', marginBottom: '4px' }}>
                    Module Title (No duplicate numbers needed)
                  </label>
                  <input
                    id={`mod_title_${idx}`}
                    type="text"
                    value={mod.title}
                    onChange={(e) => handleUpdateField(idx, 'title', e.target.value)}
                    placeholder="e.g. Python Programming & Mathematics for AI"
                    style={{ width: '100%', padding: '7px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.82rem', fontWeight: 700 }}
                  />
                </div>

                <div>
                  <label htmlFor={`mod_badge_${idx}`} style={{ fontSize: '0.72rem', fontWeight: 800, color: '#000648', display: 'block', marginBottom: '4px' }}>
                    Badge Tag
                  </label>
                  <input
                    id={`mod_badge_${idx}`}
                    type="text"
                    value={mod.badge}
                    onChange={(e) => handleUpdateField(idx, 'badge', e.target.value)}
                    placeholder="e.g. Core Foundations"
                    style={{ width: '100%', padding: '7px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.8rem', fontWeight: 600 }}
                  />
                </div>
              </div>

              {/* Cover Image URL */}
              <div>
                <label htmlFor={`mod_img_${idx}`} style={{ fontSize: '0.72rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                  Cover Image URL (Unsplash or direct image link)
                </label>
                <input
                  id={`mod_img_${idx}`}
                  type="text"
                  value={mod.image}
                  onChange={(e) => handleUpdateField(idx, 'image', e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                  style={{ width: '100%', padding: '7px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.78rem' }}
                />
              </div>

              {/* Topics / Bullet Points (One per line) */}
              <div>
                <label htmlFor={`mod_topics_${idx}`} style={{ fontSize: '0.72rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                  Key Topics & Lab Highlights (One topic per line)
                </label>
                <textarea
                  id={`mod_topics_${idx}`}
                  rows={3}
                  value={topicsText}
                  onChange={(e) => handleUpdateField(idx, 'topics', e.target.value)}
                  placeholder="Topic 1: Python Fundamentals&#10;Topic 2: NumPy & Pandas&#10;Topic 3: Hands-on Labs"
                  style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.78rem', lineHeight: 1.5 }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
