import React, { useState } from 'react';
import { useSiteData } from '../context/SiteContext';
import ImagePickerModal from './ImagePickerModal';
import { HiPlus, HiTrash, HiPencil, HiPhotograph, HiCheck, HiSparkles } from 'react-icons/hi';

const DEFAULT_GRADUATE_STATE = {
  name: '',
  company: '',
  beforeRole: '',
  afterRole: '',
  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300'
};

export default function GraduateOutcomesManager() {
  const {
    transformedLives,
    outcomesHeader,
    updateOutcomesHeader,
    addTransformedLife,
    updateTransformedLife,
    deleteTransformedLife
  } = useSiteData();

  const [headerFormData, setHeaderFormData] = useState(outcomesHeader || {
    tag: 'CAREER PLACEMENT OUTCOMES',
    headline: 'Our Graduates Get Hired by Leading Tech Firms',
    sub: 'Join a community of engineers building impactful, high-growth software careers.'
  });

  const [saveHeaderSuccess, setSaveHeaderSuccess] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [isImagePickerOpen, setIsImagePickerOpen] = useState(false);

  const [formData, setFormData] = useState(DEFAULT_GRADUATE_STATE);

  const handleHeaderSave = (e) => {
    e.preventDefault();
    updateOutcomesHeader(headerFormData);
    setSaveHeaderSuccess(true);
    setTimeout(() => setSaveHeaderSuccess(false), 3000);
  };

  const handleOpenAdd = () => {
    setEditingId(null);
    setFormData({
      name: 'R Anitha',
      company: 'TCS Digital',
      beforeRole: 'Fresher, B.Tech',
      afterRole: 'Cloud Operations Engineer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300'
    });
    setIsEditing(true);
  };

  const handleOpenEdit = (item) => {
    setEditingId(item.id);
    setFormData({
      name: item.name || '',
      company: item.company || '',
      beforeRole: item.beforeRole || '',
      afterRole: item.afterRole || '',
      image: item.image || ''
    });
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.company) {
      alert('Student Name and Placed Company are required.');
      return;
    }

    if (editingId) {
      updateTransformedLife(editingId, formData);
    } else {
      addTransformedLife(formData);
    }

    setIsEditing(false);
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to remove ${name}'s success story?`)) {
      deleteTransformedLife(id);
    }
  };

  return (
    <div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: '24px', paddingBottom: '16px', borderBottom: '1.5px solid #e2e8f0'
      }}>
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#000648', margin: 0 }}>
            "Our Graduates Get Hired" Placement Outcomes
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
            Edit the section headers ("Our Graduates Get Hired by Leading Tech Firms") and manage graduate placement outcome cards.
          </p>
        </div>
      </div>

      {saveHeaderSuccess && (
        <div style={{
          padding: '12px 16px', background: '#f0fdf4', border: '1px solid #86efac',
          color: '#166534', borderRadius: '8px', marginBottom: '20px', fontWeight: 700,
          display: 'flex', alignItems: 'center', gap: '8px'
        }}>
          <HiCheck size={18} /> Placement Outcomes section header updated successfully!
        </div>
      )}

      {/* Section Header Editor */}
      <form onSubmit={handleHeaderSave} style={{
        background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '14px',
        padding: '20px', marginBottom: '28px'
      }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '1.05rem', fontWeight: 800, color: '#000648', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <HiSparkles color="#f2b733" /> Edit Section Title & Tagline
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '16px', marginBottom: '16px' }}>
          <div>
            <label htmlFor="outcomes_tag_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
              Section Tag / Category Badge
            </label>
            <input
              id="outcomes_tag_input"
              type="text"
              value={headerFormData.tag}
              onChange={(e) => setHeaderFormData({ ...headerFormData, tag: e.target.value })}
              style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
              required
            />
          </div>

          <div>
            <label htmlFor="outcomes_headline_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
              Main Section Title / Headline
            </label>
            <input
              id="outcomes_headline_input"
              type="text"
              value={headerFormData.headline}
              onChange={(e) => setHeaderFormData({ ...headerFormData, headline: e.target.value })}
              style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
              required
            />
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="outcomes_sub_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
            Section Subtitle Description
          </label>
          <input
            id="outcomes_sub_input"
            type="text"
            value={headerFormData.sub}
            onChange={(e) => setHeaderFormData({ ...headerFormData, sub: e.target.value })}
            style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
            required
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button
            type="submit"
            aria-label="Save outcomes header"
            style={{ padding: '9px 20px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <HiCheck size={18} /> Update Section Header Text
          </button>
        </div>
      </form>

      {/* Cards List Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 800, color: '#000648' }}>
          Graduate Success Story Cards ({transformedLives.length})
        </h3>
        <button
          type="button"
          onClick={handleOpenAdd}
          aria-label="Add new graduate outcome"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '9px 18px', background: '#000648', color: '#f2b733',
            border: 'none', borderRadius: '10px', fontWeight: 800, fontSize: '0.85rem',
            cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,6,72,0.15)'
          }}
        >
          <HiPlus size={18} /> Add Graduate Story
        </button>
      </div>

      {/* Editor Modal / Form inline */}
      {isEditing && (
        <form onSubmit={handleSave} style={{
          background: '#ffffff', border: '2px solid #000648', borderRadius: '14px',
          padding: '24px', marginBottom: '28px', boxShadow: '0 10px 25px rgba(0,0,0,0.08)'
        }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '1.1rem', fontWeight: 800, color: '#000648' }}>
            {editingId ? 'Edit Graduate Success Story' : 'Add New Graduate Success Story'}
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '20px', alignItems: 'center', marginBottom: '16px' }}>
            <div>
              <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                Photo Preview
              </span>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', border: '3px solid #f2b733', background: '#000648' }}>
                <img src={formData.image} alt={formData.name || 'Graduate Photo'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>

            <div>
              <label htmlFor="student_photo_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                Student Photo Source / URL
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  id="student_photo_input"
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="Image path or URL"
                  style={{ flex: 1, padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                  required
                />
                <button
                  type="button"
                  onClick={() => setIsImagePickerOpen(true)}
                  aria-label="Choose photo"
                  style={{ padding: '9px 14px', background: '#115DFC', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <HiPhotograph size={16} /> Choose
                </button>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label htmlFor="student_name_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                Student Full Name *
              </label>
              <input
                id="student_name_input"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Balasubramani"
                style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                required
              />
            </div>

            <div>
              <label htmlFor="student_company_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                Placed @ Company *
              </label>
              <input
                id="student_company_input"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g. ClarityTTS"
                style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                required
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
            <div>
              <label htmlFor="student_before_role" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                Before Role / Background
              </label>
              <input
                id="student_before_role"
                type="text"
                value={formData.beforeRole}
                onChange={(e) => setFormData({ ...formData, beforeRole: e.target.value })}
                placeholder="e.g. Support Associate / Non-IT Graduate"
                style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                required
              />
            </div>

            <div>
              <label htmlFor="student_after_role" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                After Role (New Job Position)
              </label>
              <input
                id="student_after_role"
                type="text"
                value={formData.afterRole}
                onChange={(e) => setFormData({ ...formData, afterRole: e.target.value })}
                placeholder="e.g. VLSI Physical Design Engineer"
                style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                required
              />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              aria-label="Cancel editing"
              style={{ padding: '9px 16px', background: '#e2e8f0', color: '#475569', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}
            >
              Cancel
            </button>
            <button
              type="submit"
              aria-label="Save graduate story"
              style={{ padding: '9px 20px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <HiCheck size={18} /> Save Outcome Card
            </button>
          </div>
        </form>
      )}

      {/* Cards List */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
        {transformedLives.map((item) => (
          <div
            key={item.id}
            style={{
              background: '#ffffff', border: '1.5px solid #000648', borderRadius: '14px',
              overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,6,72,0.06)', display: 'flex', flexDirection: 'column'
            }}
          >
            <div style={{ background: '#000648', color: '#ffffff', padding: '16px', textAlign: 'center' }}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #f2b733', marginBottom: '8px' }}
              />
              <h4 style={{ margin: '0 0 2px 0', fontSize: '1rem', fontWeight: 800, color: '#ffffff' }}>
                {item.name}
              </h4>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#60a5fa' }}>
                Placed @ {item.company}
              </div>
            </div>

            <div style={{ padding: '14px', flex: 1, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8rem', color: '#475569' }}>
              <div>Before: <strong style={{ color: '#000648' }}>{item.beforeRole}</strong></div>
              <div style={{ background: '#f1f5f9', padding: '8px 10px', borderRadius: '8px', border: '1px solid #cbd5e1', fontWeight: 800, color: '#000648' }}>
                After: {item.afterRole}
              </div>
            </div>

            <div style={{ padding: '10px 14px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'flex-end', gap: '8px', background: '#f8fafc' }}>
              <button
                type="button"
                onClick={() => handleOpenEdit(item)}
                aria-label={`Edit ${item.name}`}
                style={{ padding: '6px 10px', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '6px', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <HiPencil size={14} /> Edit
              </button>
              <button
                type="button"
                onClick={() => handleDelete(item.id, item.name)}
                aria-label={`Delete ${item.name}`}
                style={{ padding: '6px 10px', background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', borderRadius: '6px', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <HiTrash size={14} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <ImagePickerModal
        isOpen={isImagePickerOpen}
        onClose={() => setIsImagePickerOpen(false)}
        currentImage={formData.image}
        onSelectImage={(url) => setFormData((prev) => ({ ...prev, image: url }))}
      />
    </div>
  );
}
