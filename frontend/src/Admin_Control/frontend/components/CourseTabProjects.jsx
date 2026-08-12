import React from 'react';

export default function CourseTabProjects({ formData, setFormData }) {
  const handleAddProject = () => {
    const list = formData.projectsList || [];
    setFormData((prev) => ({
      ...prev,
      projectsList: [
        ...list,
        {
          id: `proj-${Date.now()}`,
          title: 'New Capstone Project',
          desc: 'Build end-to-end production lab infrastructure evaluated by senior corporate mentors.',
          category: 'Hands-On Capstone',
          tools: ['AWS', 'Docker', 'Linux']
        }
      ]
    }));
  };

  const handleUpdateProjectField = (targetKey, field, val) => {
    const list = (formData.projectsList || []).map((p, index) => {
      const isTarget = typeof p === 'string' ? index === targetKey : p.id === targetKey || index === targetKey;
      if (!isTarget) return p;

      let baseObj = typeof p === 'string'
        ? { id: `proj-${index}`, title: p, desc: '', category: 'Capstone Project', tools: [] }
        : { ...p };

      baseObj[field] = val;
      return baseObj;
    });
    setFormData((prev) => ({ ...prev, projectsList: list }));
  };

  const handleDeleteProject = (targetKey) => {
    const list = (formData.projectsList || []).filter((p, index) => {
      if (typeof p === 'string') return index !== targetKey;
      return p.id !== targetKey && index !== targetKey;
    });
    setFormData((prev) => ({ ...prev, projectsList: list }));
  };

  const projects = (formData.projectsList || []).map((p, idx) => {
    if (typeof p === 'string') {
      return {
        id: `proj-str-${idx}`,
        origIdx: idx,
        title: p,
        desc: 'Build end-to-end production lab infrastructure evaluated by senior corporate mentors.',
        category: 'Capstone Project',
        tools: ['AWS', 'Docker']
      };
    }
    return { ...p, origIdx: idx };
  });

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
          style={{ padding: '8px 14px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 800, cursor: 'pointer' }}
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
              key={proj.id ? `proj-id-${proj.id}` : (proj.title ? `proj-t-${proj.title}` : `proj-p-${projPos}`)}
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
                  style={{ padding: '4px 10px', background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}
                >
                  Remove Project
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '12px' }}>
                <div>
                  <label htmlFor={`cap_title_${proj.id}`} style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#334155', marginBottom: '4px' }}>
                    Project Title *
                  </label>
                  <input
                    id={`cap_title_${proj.id}`}
                    type="text"
                    value={proj.title || ''}
                    onChange={(e) => handleUpdateProjectField(keyIdentifier, 'title', e.target.value)}
                    placeholder="e.g. Multi-Cloud Automated Infrastructure Sandbox"
                    style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }}
                  />
                </div>

                <div>
                  <label htmlFor={`cap_cat_${proj.id}`} style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#334155', marginBottom: '4px' }}>
                    Category Badge Tag
                  </label>
                  <input
                    id={`cap_cat_${proj.id}`}
                    type="text"
                    value={proj.category || ''}
                    onChange={(e) => handleUpdateProjectField(keyIdentifier, 'category', e.target.value)}
                    placeholder="e.g. Cloud & DevOps Capstone"
                    style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor={`cap_desc_${proj.id}`} style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#334155', marginBottom: '4px' }}>
                  Project Inner Description Content *
                </label>
                <textarea
                  id={`cap_desc_${proj.id}`}
                  rows={2}
                  value={proj.desc || proj.description || ''}
                  onChange={(e) => handleUpdateProjectField(keyIdentifier, 'desc', e.target.value)}
                  placeholder="Design and provision multi-region infrastructure on AWS and Azure using Terraform modules..."
                  style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }}
                />
              </div>

              <div>
                <label htmlFor={`cap_tools_${proj.id}`} style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#334155', marginBottom: '4px' }}>
                  Technologies & Tools (Comma Separated)
                </label>
                <input
                  id={`cap_tools_${proj.id}`}
                  type="text"
                  value={toolsStr}
                  onChange={(e) => handleUpdateProjectField(keyIdentifier, 'tools', e.target.value)}
                  placeholder="e.g. AWS, Terraform, Kubernetes, Docker"
                  style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
