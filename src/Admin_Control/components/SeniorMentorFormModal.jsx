import React from 'react';
import { HiCheck, HiPhotograph } from 'react-icons/hi';

export default function SeniorMentorFormModal({
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
        {editingId ? 'Edit Senior Mentor Profile' : 'Add New Senior Mentor'}
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label htmlFor="mentor_name_field" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
            Mentor Full Name *
          </label>
          <input
            id="mentor_name_field"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.875rem' }}
          />
        </div>

        <div>
          <label htmlFor="mentor_designation_field" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
            Designation & Current Firm *
          </label>
          <input
            id="mentor_designation_field"
            type="text"
            required
            placeholder="e.g. Principal Cloud Architect @ TechCorp"
            value={formData.designation}
            onChange={(e) => setFormData((prev) => ({ ...prev, designation: e.target.value }))}
            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.875rem' }}
          />
        </div>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label htmlFor="mentor_bio_field" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
          Industry Bio & Experience Overview
        </label>
        <textarea
          id="mentor_bio_field"
          rows={3}
          value={formData.bio}
          onChange={(e) => setFormData((prev) => ({ ...prev, bio: e.target.value }))}
          style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.875rem' }}
        />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label htmlFor="mentor_tags_field" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
          Expertise Badges / Tags (Comma-separated)
        </label>
        <input
          id="mentor_tags_field"
          type="text"
          placeholder="AWS Certified, Kubernetes Lead, DevOps Veteran"
          value={formData.tags}
          onChange={(e) => setFormData((prev) => ({ ...prev, tags: e.target.value }))}
          style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.875rem' }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="mentor_photo_field" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
          Mentor Profile Picture (Rec. Square 1:1 format)
        </label>
        <div style={{ display: 'flex', gap: '8px' }}>
          <input
            id="mentor_photo_field"
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
            <HiPhotograph size={16} /> Select Picture
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
          <HiCheck size={18} /> Save Mentor Profile
        </button>
      </div>
    </form>
  );
}
