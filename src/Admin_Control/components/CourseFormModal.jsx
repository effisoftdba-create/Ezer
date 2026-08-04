import React, { useState } from 'react';
import { HiCheck, HiPhotograph, HiBookOpen, HiLightningBolt, HiUserGroup, HiAcademicCap, HiSparkles } from 'react-icons/hi';
import CourseTabProjects from './CourseTabProjects';
import CourseTabSteps from './CourseTabSteps';

const TABS = [
  { id: 'basic', label: 'Basic Info & Banner', icon: <HiBookOpen size={16} /> },
  { id: 'capstones', label: 'Capstone Projects', icon: <HiLightningBolt size={16} /> },
  { id: 'steps', label: '6 Program Steps', icon: <HiAcademicCap size={16} /> },
  { id: 'audience', label: 'Who is this For?', icon: <HiUserGroup size={16} /> },
];

export default function CourseFormModal({
  isEditing,
  editingId,
  formData,
  setFormData,
  onSave,
  onCancel,
  onOpenImagePicker
}) {
  const [activeTab, setActiveTab] = useState('basic');

  if (!isEditing) return null;

  const handleAddWhoFor = () => {
    const list = formData.whoIsItForList || [];
    setFormData((prev) => ({
      ...prev,
      whoIsItForList: [...list, 'Target audience profile description']
    }));
  };

  const handleUpdateWhoFor = (index, value) => {
    const list = [...(formData.whoIsItForList || [])];
    list[index] = value;
    setFormData((prev) => ({ ...prev, whoIsItForList: list }));
  };

  const handleDeleteWhoFor = (index) => {
    const list = (formData.whoIsItForList || []).filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, whoIsItForList: list }));
  };

  const audienceItems = (formData.whoIsItForList || []).map((item, idx) =>
    typeof item === 'string' ? { id: `aud-${idx}`, text: item, origIdx: idx } : item
  );

  return (
    <form
      onSubmit={onSave}
      style={{
        background: '#ffffff',
        border: '2px solid #000648',
        borderRadius: '16px',
        padding: '24px',
        marginBottom: '28px',
        boxShadow: '0 12px 32px rgba(0, 6, 72, 0.12)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800, color: '#000648', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <HiSparkles color="#f2b733" size={20} />
          {editingId ? 'Edit Course Program & All Page Sections' : 'Add New Course Program & Page Sections'}
        </h3>
        <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#166534', background: '#dcfce7', padding: '4px 10px', borderRadius: '50px' }}>
          Live Admin Editing
        </span>
      </div>

      {/* Navigation Tabs */}
      <div style={{ display: 'flex', gap: '8px', borderBottom: '2px solid #e2e8f0', marginBottom: '20px', flexWrap: 'wrap' }}>
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '10px 16px',
              border: 'none',
              borderBottom: activeTab === tab.id ? '3px solid #000648' : '3px solid transparent',
              background: activeTab === tab.id ? '#f1f5f9' : 'transparent',
              color: activeTab === tab.id ? '#000648' : '#64748b',
              fontWeight: activeTab === tab.id ? 800 : 600,
              fontSize: '0.825rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              borderRadius: '8px 8px 0 0',
              transition: 'background-color 0.2s ease, color 0.2s ease'
            }}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {/* TAB 1: BASIC INFO */}
      {activeTab === 'basic' && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label htmlFor="course_title_field" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                Course Title *
              </label>
              <input
                id="course_title_field"
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.875rem' }}
              />
            </div>

            <div>
              <label htmlFor="course_slug_field" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                URL Slug * (e.g. cloud-devops-masterclass)
              </label>
              <input
                id="course_slug_field"
                type="text"
                required
                value={formData.slug}
                onChange={(e) => setFormData((prev) => ({ ...prev, slug: e.target.value }))}
                style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.875rem' }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label htmlFor="course_badge_field" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                Badge Tag
              </label>
              <input
                id="course_badge_field"
                type="text"
                value={formData.badge}
                onChange={(e) => setFormData((prev) => ({ ...prev, badge: e.target.value }))}
                style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.875rem' }}
              />
            </div>

            <div>
              <label htmlFor="course_duration_field" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                Duration
              </label>
              <input
                id="course_duration_field"
                type="text"
                value={formData.duration}
                onChange={(e) => setFormData((prev) => ({ ...prev, duration: e.target.value }))}
                style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.875rem' }}
              />
            </div>

            <div>
              <label htmlFor="course_languages_field" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                Languages Offered
              </label>
              <input
                id="course_languages_field"
                type="text"
                value={formData.languages}
                onChange={(e) => setFormData((prev) => ({ ...prev, languages: e.target.value }))}
                style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.875rem' }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="course_tagline_field" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
              Tagline / Summary
            </label>
            <input
              id="course_tagline_field"
              type="text"
              value={formData.tagline}
              onChange={(e) => setFormData((prev) => ({ ...prev, tagline: e.target.value }))}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.875rem' }}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="course_tools_field" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
              Tools Covered (Comma-separated)
            </label>
            <input
              id="course_tools_field"
              type="text"
              value={formData.tools}
              onChange={(e) => setFormData((prev) => ({ ...prev, tools: e.target.value }))}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.875rem' }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="course_image_field" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
              Course Card Image & Fit (Rec. Rectangle 16:9 format)
            </label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                id="course_image_field"
                type="text"
                value={formData.image}
                onChange={(e) => setFormData((prev) => ({ ...prev, image: e.target.value }))}
                style={{ flex: 1, padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.875rem' }}
              />
              <button
                type="button"
                onClick={onOpenImagePicker}
                style={{ padding: '10px 14px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <HiPhotograph size={16} /> Select / Crop Image
              </button>
            </div>
            <div style={{ fontSize: '0.725rem', color: '#64748b', marginTop: '4px' }}>
              Active Position: <strong>{formData.imagePosition || 'center center'}</strong> | Fit Mode: <strong>{formData.imageFit || 'cover'}</strong>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: CAPSTONE PROJECTS */}
      {activeTab === 'capstones' && (
        <CourseTabProjects formData={formData} setFormData={setFormData} />
      )}

      {/* TAB 3: 6 PROGRAM STEPS */}
      {activeTab === 'steps' && (
        <CourseTabSteps formData={formData} setFormData={setFormData} />
      )}

      {/* TAB 4: TARGET AUDIENCE */}
      {activeTab === 'audience' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <div>
              <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 800, color: '#000648' }}>
                "Who is this Program For?" Audience Profiles
              </h4>
              <p style={{ margin: '2px 0 0 0', fontSize: '0.78rem', color: '#64748b' }}>
                Define target student profiles eligible for this program.
              </p>
            </div>
            <button
              type="button"
              onClick={handleAddWhoFor}
              style={{ padding: '6px 12px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 800, cursor: 'pointer' }}
            >
              + Add Profile Bullet
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
            {audienceItems.map((item, idx) => (
              <div key={item.id} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <label htmlFor={`audience_input_${item.id}`} style={{ fontSize: '0.75rem', fontWeight: 800, color: '#000648', width: '24px' }}>
                  #{idx + 1}
                </label>
                <input
                  id={`audience_input_${item.id}`}
                  type="text"
                  value={item.text}
                  onChange={(e) => handleUpdateWhoFor(item.origIdx !== undefined ? item.origIdx : idx, e.target.value)}
                  placeholder={`Audience Profile #${idx + 1}`}
                  style={{ flex: 1, padding: '8px 12px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
                />
                <button
                  type="button"
                  onClick={() => handleDeleteWhoFor(item.origIdx !== undefined ? item.origIdx : idx)}
                  style={{ padding: '6px 10px', background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FORM ACTION BUTTONS */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', paddingTop: '16px', borderTop: '1px solid #e2e8f0' }}>
        <button
          type="button"
          onClick={onCancel}
          style={{ padding: '10px 20px', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '8px', color: '#64748b', fontWeight: 700, cursor: 'pointer' }}
        >
          Cancel
        </button>
        <button
          type="submit"
          style={{ padding: '10px 24px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <HiCheck size={18} /> Save All Course Sections
        </button>
      </div>
    </form>
  );
}
