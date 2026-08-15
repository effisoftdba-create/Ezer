import React from 'react';
import { getCourseBySlug } from '../../../data/courses';

export default function CourseTabProjects({ formData, setFormData }) {
  const defaultCourse = getCourseBySlug(formData.slug || formData.id || formData.title) || {};
  const defaultProjects = Array.isArray(defaultCourse.projects) ? defaultCourse.projects : [];
  
  const courseTools = Array.isArray(formData.tools) 
    ? formData.tools 
    : (typeof formData.tools === 'string' && formData.tools.trim() 
        ? formData.tools.split(',').map((t) => t.trim()).filter(Boolean) 
        : (defaultCourse.tools || ['Python', 'TensorFlow', 'PyTorch', 'Scikit-Learn']));

  const rawList = (Array.isArray(formData.projectsList) && formData.projectsList.length > 0)
    ? formData.projectsList
    : defaultProjects;

  const projects = rawList.map((p, idx) => {
    if (typeof p === 'string') {
      return {
        id: `proj-str-${idx}`,
        origIdx: idx,
        title: p,
        desc: 'Build end-to-end production lab infrastructure evaluated by senior corporate mentors for portfolio readiness.',
        category: 'Capstone Project',
        tools: courseTools.slice(0, 4)
      };
    }
    return {
      ...p,
      origIdx: idx,
      id: p.id || `proj-${idx}`,
      title: p.title || `Capstone Project #${idx + 1}`,
      desc: p.desc || p.description || 'Build end-to-end production lab infrastructure evaluated by senior corporate mentors for portfolio readiness.',
      category: p.category || 'Capstone Project',
      tools: Array.isArray(p.tools) 
        ? p.tools 
        : (typeof p.tools === 'string' && p.tools.trim() ? p.tools.split(',').map((t) => t.trim()).filter(Boolean) : courseTools.slice(0, 4))
    };
  });

  const handleAddProject = () => {
    const nextIdx = projects.length;
    const newProj = {
      id: `proj-${Date.now()}`,
      title: `New Capstone Project #${nextIdx + 1}`,
      desc: 'Build end-to-end production lab infrastructure evaluated by senior corporate mentors for portfolio readiness.',
      category: 'Capstone Project',
      tools: courseTools.slice(0, 4)
    };

    setFormData((prev) => ({
      ...prev,
      projectsList: [...projects, newProj]
    }));
  };

  const handleUpdateProjectField = (targetKey, field, val) => {
    const list = projects.map((p, index) => {
      const isTarget = typeof p === 'string' ? index === targetKey : p.id === targetKey || index === targetKey || p.origIdx === targetKey;
      if (!isTarget) return p;

      let baseObj = typeof p === 'string'
        ? { id: `proj-${index}`, title: p, desc: 'Build end-to-end production lab infrastructure evaluated by senior corporate mentors for portfolio readiness.', category: 'Capstone Project', tools: courseTools.slice(0, 4) }
        : { ...p };

      if (field === 'tools') {
        baseObj[field] = typeof val === 'string' ? val.split(',').map((t) => t.trim()).filter(Boolean) : (Array.isArray(val) ? val : []);
      } else {
        baseObj[field] = val;
      }
      return baseObj;
    });

    setFormData((prev) => ({ ...prev, projectsList: list }));
  };

  const handleDeleteProject = (targetKey) => {
    const list = projects.filter((p, index) => {
      if (typeof p === 'string') return index !== targetKey;
      return p.id !== targetKey && index !== targetKey && p.origIdx !== targetKey;
    });

    setFormData((prev) => ({ ...prev, projectsList: list }));
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div>
          <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 800, color: '#000648' }}>
            "Build Industry-Ready Capstone Projects" Editor
          </h4>
          <p style={{ margin: '2px 0 0 0', fontSize: '0.78rem', color: '#64748b' }}>
            Edit project titles, inner description content, category badges, and technology stack tags.
          </p>
        </div>
        <button
          type="button"
          onClick={handleAddProject}
          style={{
            padding: '8px 14px',
            background: '#000648',
            color: '#f2b733',
            border: 'none',
            borderRadius: '8px',
            fontSize: '0.82rem',
            fontWeight: 800,
            cursor: 'pointer'
          }}
        >
          + Add Capstone Project Card
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
        {projects.map((proj, idx) => {
          const keyIdentifier = proj.origIdx !== undefined ? proj.origIdx : proj.id;
          const toolsStr = typeof proj.tools === 'string'
            ? proj.tools
            : (Array.isArray(proj.tools) ? proj.tools.join(', ') : (proj.tools || ''));

          return (
            <div
              key={proj.id ? `proj-id-${proj.id}` : `proj-idx-${idx}`}
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
                <span style={{ fontSize: '0.8rem', fontWeight: 900, color: '#000648', background: '#e0e7ff', padding: '2px 8px', borderRadius: '4px' }}>
                  Capstone Project #{idx + 1}
                </span>
                <button
                  type="button"
                  onClick={() => handleDeleteProject(keyIdentifier)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#ef4444',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    fontWeight: 700
                  }}
                >
                  Remove Project
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                    Project Title *
                  </label>
                  <input
                    type="text"
                    value={proj.title || ''}
                    onChange={(e) => handleUpdateProjectField(keyIdentifier, 'title', e.target.value)}
                    placeholder="e.g. Customer Churn Prediction & Retention Modeling System"
                    style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem', fontWeight: 700 }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                    Category Badge Tag
                  </label>
                  <input
                    type="text"
                    value={proj.category || 'Capstone Project'}
                    onChange={(e) => handleUpdateProjectField(keyIdentifier, 'category', e.target.value)}
                    placeholder="Capstone Project"
                    style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                  Project Inner Description Content *
                </label>
                <textarea
                  rows={2}
                  value={proj.desc || ''}
                  onChange={(e) => handleUpdateProjectField(keyIdentifier, 'desc', e.target.value)}
                  placeholder="Build end-to-end production lab infrastructure evaluated by senior corporate mentors for portfolio readiness."
                  style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.82rem', lineHeight: 1.4 }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                  Technologies & Tools (Comma Separated)
                </label>
                <input
                  type="text"
                  value={toolsStr}
                  onChange={(e) => handleUpdateProjectField(keyIdentifier, 'tools', e.target.value)}
                  placeholder="Python, TensorFlow, PyTorch, Scikit-Learn"
                  style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.82rem' }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
