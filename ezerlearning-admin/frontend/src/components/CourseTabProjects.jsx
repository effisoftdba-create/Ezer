import React from 'react';
import { getCourseBySlug, phase1Courses } from '../data/courses';

const STALE_PROJECT_TITLES = [
  'predictive customer churn analytics',
  'computer vision automated medical image diagnostics',
  'real-time house price prediction api',
  'customer segmentation engine using k-means',
  'interactive streamlit ai web app',
  'multi-cloud automated infrastructure sandbox',
  'playwright e2e test automation framework',
  'enterprise ai customer rag engine',
  'multi-region aws vpc infrastructure automation',
  'new capstone project'
];

/**
 * Checks if a projects list contains old placeholder dummy projects
 */
function isStaleProjectList(projects, defaultProjects = []) {
  if (!Array.isArray(projects) || projects.length === 0) return true;
  
  // If the list contains any known stale dummy titles
  const hasStaleTitle = projects.some((p) => {
    const title = (typeof p === 'string' ? p : (p?.title || '')).toLowerCase();
    return STALE_PROJECT_TITLES.some((stale) => title.includes(stale));
  });
  if (hasStaleTitle) return true;

  // If projects have wrong generic tools like ['AWS', 'Docker'] or ['AIcourse']
  const hasStaleTools = projects.some((p) => {
    if (typeof p === 'object' && Array.isArray(p.tools)) {
      if (p.tools.includes('AIcourse') || (p.tools.length === 2 && p.tools.includes('AWS') && p.tools.includes('Docker') && !defaultProjects.some(dp => String(dp).includes('AWS')))) {
        return true;
      }
    }
    return false;
  });
  if (hasStaleTools) return true;

  return false;
}

/**
 * Gets the master projects and tools for a course by trying multiple lookup strategies.
 */
function getMasterProjects(slug, id, title) {
  const keys = [slug, id, title].filter(Boolean);
  for (const key of keys) {
    const course = getCourseBySlug(key);
    if (course && Array.isArray(course.projects) && course.projects.length > 0) {
      return { projects: course.projects, tools: course.tools || [] };
    }
  }
  // Absolute fallback: search phase1Courses directly
  if (Array.isArray(phase1Courses)) {
    const normalized = String(slug || id || title || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const found = phase1Courses.find((c) => {
      const cSlug = (c.slug || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      const cId = (c.id || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      const cTitle = (c.title || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      return cSlug === normalized || cId === normalized || cTitle === normalized;
    });
    if (found) {
      return { projects: found.projects || [], tools: found.tools || [] };
    }
  }
  return { projects: [], tools: [] };
}

export default function CourseTabProjects({ formData, setFormData }) {
  const master = getMasterProjects(formData.slug, formData.id, formData.title);
  const defaultTools = (master.tools && master.tools.length > 0)
    ? master.tools
    : ['Python', 'TensorFlow', 'PyTorch', 'Scikit-Learn'];

  const courseTools = Array.isArray(formData.tools)
    ? formData.tools
    : (typeof formData.tools === 'string' && formData.tools.trim()
        ? formData.tools.split(',').map((t) => t.trim()).filter(Boolean)
        : defaultTools);

  const isStale = isStaleProjectList(formData.projectsList, master.projects);
  const rawList = (!isStale && Array.isArray(formData.projectsList) && formData.projectsList.length > 0)
    ? formData.projectsList
    : master.projects;

  const projects = (rawList || []).map((p, idx) => {
    if (typeof p === 'string') {
      return {
        id: `proj-${idx}`,
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
      title: `Capstone Project #${nextIdx + 1}`,
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
      const isTarget = p.id === targetKey || index === targetKey || p.origIdx === targetKey;
      if (!isTarget) return p;

      let baseObj = { ...p };
      if (field === 'tools') {
        baseObj[field] = typeof val === 'string'
          ? val.split(',').map((t) => t.trim()).filter(Boolean)
          : (Array.isArray(val) ? val : []);
      } else {
        baseObj[field] = val;
      }
      return baseObj;
    });

    setFormData((prev) => ({ ...prev, projectsList: list }));
  };

  const handleDeleteProject = (targetKey) => {
    const list = projects.filter((p, index) => p.id !== targetKey && index !== targetKey && p.origIdx !== targetKey);
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
            Edit project titles, descriptions, category badges, and technology stack tags.
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

      {projects.length === 0 && (
        <div style={{ padding: '20px', background: '#fef3c7', borderRadius: '8px', textAlign: 'center', marginBottom: '16px' }}>
          <p style={{ margin: 0, color: '#92400e', fontWeight: 700, fontSize: '0.85rem' }}>
            No capstone projects found. Click "+ Add Capstone Project Card" to create new projects.
          </p>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
        {projects.map((proj, idx) => {
          const keyId = proj.origIdx !== undefined ? proj.origIdx : proj.id;
          const toolsStr = Array.isArray(proj.tools) ? proj.tools.join(', ') : (proj.tools || '');

          return (
            <div
              key={proj.id || `proj-idx-${idx}`}
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
                  onClick={() => handleDeleteProject(keyId)}
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
                    onChange={(e) => handleUpdateProjectField(keyId, 'title', e.target.value)}
                    placeholder="e.g. Customer Churn Prediction & Retention Modeling System"
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
                    Category Badge
                  </label>
                  <input
                    type="text"
                    value={proj.category || 'Capstone Project'}
                    onChange={(e) => handleUpdateProjectField(keyId, 'category', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '8px 10px',
                      borderRadius: '6px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '0.85rem'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                  Description *
                </label>
                <textarea
                  rows={2}
                  value={proj.desc || ''}
                  onChange={(e) => handleUpdateProjectField(keyId, 'desc', e.target.value)}
                  placeholder="Build end-to-end production lab infrastructure evaluated by senior corporate mentors for portfolio readiness."
                  style={{
                    width: '100%',
                    padding: '8px 10px',
                    borderRadius: '6px',
                    border: '1.5px solid #cbd5e1',
                    fontSize: '0.82rem',
                    lineHeight: 1.4
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                  Technologies (Comma Separated)
                </label>
                <input
                  type="text"
                  value={toolsStr}
                  onChange={(e) => handleUpdateProjectField(keyId, 'tools', e.target.value)}
                  placeholder="Python, TensorFlow, PyTorch, Scikit-Learn"
                  style={{
                    width: '100%',
                    padding: '8px 10px',
                    borderRadius: '6px',
                    border: '1.5px solid #cbd5e1',
                    fontSize: '0.82rem'
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
