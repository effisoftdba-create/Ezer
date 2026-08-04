import React from 'react';

export default function CourseTabProjects({ formData, setFormData }) {
  const handleAddProject = () => {
    const list = formData.projectsList || [];
    setFormData((prev) => ({
      ...prev,
      projectsList: [...list, { id: `proj-${Date.now()}`, title: 'New Capstone Project Title' }]
    }));
  };

  const handleUpdateProject = (id, value) => {
    const list = (formData.projectsList || []).map((p, index) => {
      if (typeof p === 'string') return index === id ? value : p;
      return p.id === id ? { ...p, title: value } : p;
    });
    setFormData((prev) => ({ ...prev, projectsList: list }));
  };

  const handleDeleteProject = (id) => {
    const list = (formData.projectsList || []).filter((p, index) => {
      if (typeof p === 'string') return index !== id;
      return p.id !== id;
    });
    setFormData((prev) => ({ ...prev, projectsList: list }));
  };

  const projects = (formData.projectsList || []).map((p, idx) =>
    typeof p === 'string' ? { id: `proj-str-${idx}`, title: p, origIdx: idx } : p
  );

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
        <div>
          <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 800, color: '#000648' }}>
            "Build Industry-Ready Capstone Projects" Editor
          </h4>
          <p style={{ margin: '2px 0 0 0', fontSize: '0.78rem', color: '#64748b' }}>
            Edit or add real production capstone project cards for this course.
          </p>
        </div>
        <button
          type="button"
          onClick={handleAddProject}
          style={{ padding: '6px 12px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 800, cursor: 'pointer' }}
        >
          + Add Project Card
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
        {projects.map((proj, idx) => (
          <div key={proj.id} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <label htmlFor={`capstone_input_${proj.id}`} style={{ fontSize: '0.75rem', fontWeight: 800, color: '#000648', width: '24px' }}>
              #{idx + 1}
            </label>
            <input
              id={`capstone_input_${proj.id}`}
              type="text"
              value={proj.title}
              onChange={(e) => handleUpdateProject(proj.origIdx !== undefined ? proj.origIdx : proj.id, e.target.value)}
              placeholder={`Capstone Project #${idx + 1} Title`}
              style={{ flex: 1, padding: '8px 12px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
            />
            <button
              type="button"
              onClick={() => handleDeleteProject(proj.origIdx !== undefined ? proj.origIdx : proj.id)}
              style={{ padding: '6px 10px', background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
