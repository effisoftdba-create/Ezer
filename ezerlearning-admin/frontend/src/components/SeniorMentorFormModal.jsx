import React from 'react';
import ReactDOM from 'react-dom';
import { HiX, HiCheck, HiPhotograph } from 'react-icons/hi';
import { resolveImageSrc } from '../utils/imageUtils';

export default function SeniorMentorFormModal({
  isEditing,
  editingId,
  formData,
  setFormData,
  formErrors = {},
  setFormErrors = () => {},
  onSave,
  onCancel,
  onOpenImagePicker
}) {
  if (!isEditing) return null;

  const modalContent = (
    <div
      role="presentation"
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
              MENTOR PROFILE EDITOR
            </span>
            <h3 style={{ margin: '2px 0 0 0', fontSize: '1.15rem', fontWeight: 900, color: '#ffffff' }}>
              {editingId ? 'Edit Senior Mentor Profile' : 'Add New Senior Mentor'}
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
          {Object.keys(formErrors).length > 0 && (
            <div style={{ background: '#fef2f2', border: '1.5px solid #f87171', color: '#b91c1c', padding: '10px 14px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 800 }}>
              ⚠️ Please fill in all required fields highlighted in red below before saving.
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div>
              <label htmlFor="mentor_name_field" style={{ fontSize: '0.78rem', fontWeight: 800, color: formErrors.name ? '#dc2626' : '#334155', display: 'block', marginBottom: '4px' }}>
                Mentor Full Name *
              </label>
              <input
                id="mentor_name_field"
                type="text"
                placeholder="e.g. Vignesh Waran"
                value={formData.name || ''}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, name: e.target.value }));
                  if (formErrors.name) setFormErrors((prev) => ({ ...prev, name: false }));
                }}
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  borderRadius: '8px',
                  border: formErrors.name ? '2px solid #dc2626' : '1.5px solid #cbd5e1',
                  background: formErrors.name ? '#fff5f5' : '#ffffff',
                  fontSize: '0.85rem'
                }}
              />
              {formErrors.name && <span style={{ color: '#dc2626', fontSize: '0.72rem', fontWeight: 700, marginTop: '3px', display: 'block' }}>Mentor name is required</span>}
            </div>

            <div>
              <label htmlFor="mentor_designation_field" style={{ fontSize: '0.78rem', fontWeight: 800, color: formErrors.designation ? '#dc2626' : '#334155', display: 'block', marginBottom: '4px' }}>
                Designation & Current Firm *
              </label>
              <input
                id="mentor_designation_field"
                type="text"
                placeholder="e.g. Principal Cloud Architect @ TechCorp"
                value={formData.designation || ''}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, designation: e.target.value }));
                  if (formErrors.designation) setFormErrors((prev) => ({ ...prev, designation: false }));
                }}
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  borderRadius: '8px',
                  border: formErrors.designation ? '2px solid #dc2626' : '1.5px solid #cbd5e1',
                  background: formErrors.designation ? '#fff5f5' : '#ffffff',
                  fontSize: '0.85rem'
                }}
              />
              {formErrors.designation && <span style={{ color: '#dc2626', fontSize: '0.72rem', fontWeight: 700, marginTop: '3px', display: 'block' }}>Designation is required</span>}
            </div>
          </div>

          <div>
            <label htmlFor="mentor_bio_field" style={{ fontSize: '0.78rem', fontWeight: 800, color: formErrors.bio ? '#dc2626' : '#334155', display: 'block', marginBottom: '4px' }}>
              Industry Bio & Experience Overview *
            </label>
            <textarea
              id="mentor_bio_field"
              rows={3}
              placeholder="Overview of corporate expertise..."
              value={formData.bio || ''}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, bio: e.target.value }));
                if (formErrors.bio) setFormErrors((prev) => ({ ...prev, bio: false }));
              }}
              style={{
                width: '100%',
                padding: '9px 12px',
                borderRadius: '8px',
                border: formErrors.bio ? '2px solid #dc2626' : '1.5px solid #cbd5e1',
                background: formErrors.bio ? '#fff5f5' : '#ffffff',
                fontSize: '0.85rem',
                lineHeight: 1.5
              }}
            />
            {formErrors.bio && <span style={{ color: '#dc2626', fontSize: '0.72rem', fontWeight: 700, marginTop: '3px', display: 'block' }}>Bio is required</span>}
          </div>

          <div>
            <label htmlFor="mentor_tags_field" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
              Expertise Badges / Tags (Comma-separated)
            </label>
            <input
              id="mentor_tags_field"
              type="text"
              placeholder="AWS Certified, Kubernetes Lead, DevOps Veteran"
              value={formData.tags || ''}
              onChange={(e) => setFormData((prev) => ({ ...prev, tags: e.target.value }))}
              style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
            />
          </div>

          <div>
            <label htmlFor="mentor_photo_field" style={{ fontSize: '0.78rem', fontWeight: 800, color: formErrors.image ? '#dc2626' : '#334155', display: 'block', marginBottom: '4px' }}>
              Mentor Profile Picture (Rec. Square 1:1) *
            </label>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              {formData.image && (
                <img
                  src={resolveImageSrc(formData.image)}
                  alt="Preview"
                  style={{ width: '38px', height: '38px', borderRadius: '8px', objectFit: 'cover', border: '1px solid #cbd5e1', flexShrink: 0 }}
                />
              )}
              <input
                id="mentor_photo_field"
                type="text"
                placeholder="https://images.unsplash.com/..."
                value={formData.image || ''}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, image: e.target.value }));
                  if (formErrors.image) setFormErrors((prev) => ({ ...prev, image: false }));
                }}
                style={{
                  flex: 1,
                  minWidth: 0,
                  padding: '9px 12px',
                  borderRadius: '8px',
                  border: formErrors.image ? '2px solid #dc2626' : '1.5px solid #cbd5e1',
                  background: formErrors.image ? '#fff5f5' : '#ffffff',
                  fontSize: '0.85rem'
                }}
              />
              <button
                type="button"
                onClick={onOpenImagePicker}
                aria-label="Choose mentor photo"
                style={{ padding: '9px 14px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.78rem', whiteSpace: 'nowrap', flexShrink: 0 }}
              >
                <HiPhotograph size={15} /> Choose
              </button>
            </div>
            {formErrors.image && <span style={{ color: '#dc2626', fontSize: '0.72rem', fontWeight: 700, marginTop: '3px', display: 'block' }}>Profile picture is required</span>}
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
              <HiCheck size={18} /> Save Mentor Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
}
