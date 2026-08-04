import React from 'react';
import { HiCheck, HiPhotograph } from 'react-icons/hi';

export default function CourseFormModal({
  isEditing,
  editingId,
  formData,
  setFormData,
  onSave,
  onCancel,
  onOpenImagePicker
}) {
  if (!isEditing) return null;

  return (
    <form
      onSubmit={onSave}
      style={{
        background: '#f8fafc',
        border: '1.5px solid #cbd5e1',
        borderRadius: '16px',
        padding: '24px',
        marginBottom: '28px',
        boxShadow: '0 8px 24px rgba(0, 6, 72, 0.08)'
      }}
    >
      <h3 style={{ margin: '0 0 16px 0', fontSize: '1.1rem', fontWeight: 800, color: '#000648' }}>
        {editingId ? 'Edit Course Program' : 'Add New Course Program'}
      </h3>

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
          Course Card Image URL (Rec. Rectangle 16:9 format)
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
            <HiPhotograph size={16} /> Select Image
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
        <button
          type="button"
          onClick={onCancel}
          style={{ padding: '8px 16px', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '8px', color: '#64748b', fontWeight: 700, cursor: 'pointer' }}
        >
          Cancel
        </button>
        <button
          type="submit"
          style={{ padding: '8px 20px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <HiCheck size={18} /> Save Course Program
        </button>
      </div>
    </form>
  );
}
