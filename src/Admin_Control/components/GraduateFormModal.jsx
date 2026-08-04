import React from 'react';
import { HiCheck, HiPhotograph } from 'react-icons/hi';

export default function GraduateFormModal({
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
        {editingId ? 'Edit Graduate Outcome Card' : 'Add New Graduate Outcome Card'}
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label htmlFor="student_name_field" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
            Graduate / Student Name *
          </label>
          <input
            id="student_name_field"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.875rem' }}
          />
        </div>

        <div>
          <label htmlFor="student_company_field" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
            Hired Company Name *
          </label>
          <input
            id="student_company_field"
            type="text"
            required
            value={formData.company}
            onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.875rem' }}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label htmlFor="student_before_role" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
            Role Before Program
          </label>
          <input
            id="student_before_role"
            type="text"
            value={formData.beforeRole}
            onChange={(e) => setFormData((prev) => ({ ...prev, beforeRole: e.target.value }))}
            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.875rem' }}
          />
        </div>

        <div>
          <label htmlFor="student_after_role" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
            Hired Role After Program
          </label>
          <input
            id="student_after_role"
            type="text"
            value={formData.afterRole}
            onChange={(e) => setFormData((prev) => ({ ...prev, afterRole: e.target.value }))}
            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.875rem' }}
          />
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="student_photo_input" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
          Graduate Photo URL (Rec. Square 1:1 format)
        </label>
        <div style={{ display: 'flex', gap: '8px' }}>
          <input
            id="student_photo_input"
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
            <HiPhotograph size={16} /> Select Photo
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
          <HiCheck size={18} /> Save Graduate Card
        </button>
      </div>
    </form>
  );
}
