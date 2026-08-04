import React from 'react';
import { HiCheck, HiPhotograph } from 'react-icons/hi';

export default function TestimonialFormModal({
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
        {editingId ? 'Edit Testimonial' : 'Add New Written Testimonial'}
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label htmlFor="testi_author_field" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
            Alumni / Author Name *
          </label>
          <input
            id="testi_author_field"
            type="text"
            required
            value={formData.author}
            onChange={(e) => setFormData((prev) => ({ ...prev, author: e.target.value }))}
            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.875rem' }}
          />
        </div>

        <div>
          <label htmlFor="testi_role_field" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
            Current Designation & Firm *
          </label>
          <input
            id="testi_role_field"
            type="text"
            required
            placeholder="e.g. Cloud Engineer @ Wipro"
            value={formData.role}
            onChange={(e) => setFormData((prev) => ({ ...prev, role: e.target.value }))}
            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.875rem' }}
          />
        </div>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label htmlFor="testi_text_field" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
          Testimonial Review Content *
        </label>
        <textarea
          id="testi_text_field"
          rows={3}
          required
          value={formData.text}
          onChange={(e) => setFormData((prev) => ({ ...prev, text: e.target.value }))}
          style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.875rem' }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="testi_avatar_field" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
          Alumni Avatar Picture (Rec. Square 1:1 format)
        </label>
        <div style={{ display: 'flex', gap: '8px' }}>
          <input
            id="testi_avatar_field"
            type="text"
            value={formData.avatar}
            onChange={(e) => setFormData((prev) => ({ ...prev, avatar: e.target.value }))}
            style={{ flex: 1, padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.875rem' }}
          />
          <button
            type="button"
            onClick={onOpenImagePicker}
            style={{ padding: '10px 14px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <HiPhotograph size={16} /> Select Avatar
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
          <HiCheck size={18} /> Save Testimonial
        </button>
      </div>
    </form>
  );
}
