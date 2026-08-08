import React from 'react';
import ReactDOM from 'react-dom';
import { HiX, HiCheck, HiPhotograph } from 'react-icons/hi';
import { resolveImageSrc } from '../../utils/imageUtils';

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

  const modalContent = (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onCancel();
      }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(0, 6, 72, 0.82)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        animation: 'fadeIn 0.2s ease'
      }}
    >
      <div
        style={{
          background: '#ffffff',
          borderRadius: '16px',
          width: '100%',
          maxWidth: '560px',
          boxShadow: '0 25px 50px -12px rgba(0, 6, 72, 0.4)',
          border: '1.5px solid #e2e8f0',
          overflow: 'hidden',
          animation: 'modalPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '90vh'
        }}
      >
        {/* Header */}
        <div style={{ background: '#000648', padding: '16px 20px', color: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '0.7rem', fontWeight: 900, color: '#f2b733', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              GRADUATE OUTCOME EDITOR
            </span>
            <h3 style={{ margin: '2px 0 0 0', fontSize: '1.15rem', fontWeight: 900, color: '#ffffff' }}>
              {editingId ? 'Edit Graduate Outcome Card' : 'Add New Graduate Outcome Card'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onCancel}
            aria-label="Close modal button"
            style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#ffffff', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <HiX size={18} />
          </button>
        </div>

        {/* Body Form */}
        <form onSubmit={onSave} style={{ padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div>
              <label htmlFor="student_name_field" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                Graduate / Student Name *
              </label>
              <input
                id="student_name_field"
                type="text"
                required
                placeholder="e.g. Vignesh G"
                value={formData.name || ''}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
              />
            </div>

            <div>
              <label htmlFor="student_company_field" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                Hired Company Name *
              </label>
              <input
                id="student_company_field"
                type="text"
                required
                placeholder="e.g. Agnikul Cosmos"
                value={formData.company || ''}
                onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div>
              <label htmlFor="student_before_role" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                Role Before Program
              </label>
              <input
                id="student_before_role"
                type="text"
                placeholder="e.g. Non-IT / Fresher"
                value={formData.beforeRole || ''}
                onChange={(e) => setFormData((prev) => ({ ...prev, beforeRole: e.target.value }))}
                style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
              />
            </div>

            <div>
              <label htmlFor="student_after_role" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                Hired Role After Program
              </label>
              <input
                id="student_after_role"
                type="text"
                placeholder="e.g. Junior DevOps Developer"
                value={formData.afterRole || ''}
                onChange={(e) => setFormData((prev) => ({ ...prev, afterRole: e.target.value }))}
                style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
              />
            </div>
          </div>

          <div>
            <label htmlFor="student_photo_input" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
              Graduate Photo URL (Rec. Square 1:1)
            </label>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              {formData.image && (
                <img
                  src={resolveImageSrc(formData.image)}
                  alt="Graduate preview"
                  style={{ width: '38px', height: '38px', borderRadius: '8px', objectFit: 'cover', border: '1px solid #cbd5e1', flexShrink: 0 }}
                />
              )}
              <input
                id="student_photo_input"
                type="text"
                placeholder="https://..."
                value={formData.image || ''}
                onChange={(e) => setFormData((prev) => ({ ...prev, image: e.target.value }))}
                style={{ flex: 1, minWidth: 0, padding: '9px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
              />
              <button
                type="button"
                onClick={onOpenImagePicker}
                style={{ padding: '9px 14px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.78rem', whiteSpace: 'nowrap', flexShrink: 0 }}
              >
                <HiPhotograph size={15} /> Choose Photo
              </button>
            </div>
          </div>

          {/* Footer Buttons */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', paddingTop: '12px', borderTop: '1px solid #e2e8f0', marginTop: '4px' }}>
            <button
              type="button"
              onClick={onCancel}
              style={{ padding: '9px 18px', background: '#f1f5f9', color: '#475569', border: '1px solid #cbd5e1', borderRadius: '8px', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer' }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{ padding: '9px 22px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 900, fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', boxShadow: '0 4px 12px rgba(0,6,72,0.2)' }}
            >
              <HiCheck size={18} /> Save Graduate Card
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
}
