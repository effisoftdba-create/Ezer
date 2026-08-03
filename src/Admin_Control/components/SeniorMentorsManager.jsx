import React, { useState } from 'react';
import { useSiteData } from '../context/SiteContext';
import ImagePickerModal from './ImagePickerModal';
import { HiPlus, HiTrash, HiPencil, HiPhotograph, HiCheck, HiSparkles } from 'react-icons/hi';

const DEFAULT_MENTOR_STATE = {
  name: 'Arun Kumar S',
  designation: 'Principal Cloud Architect @ TechCorp',
  image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300',
  bio: '11+ years designing multi-cloud architectures across AWS and Azure. Mentored 2,500+ engineers into DevOps career roles.',
  tags: 'AWS Certified, Kubernetes Lead, DevOps Veteran'
};

export default function SeniorMentorsManager() {
  const {
    seniorMentors,
    mentorsHeader,
    updateMentorsHeader,
    addSeniorMentor,
    updateSeniorMentor,
    deleteSeniorMentor
  } = useSiteData();

  const [headerFormData, setHeaderFormData] = useState(mentorsHeader || {
    tag: 'SENIOR MENTORS',
    headline: 'Learn Directly From Senior Engineers & Academic Mentors',
    sub: 'Gain real-world insights from instructors with years of industry tenure across top technology firms.'
  });

  const [saveHeaderSuccess, setSaveHeaderSuccess] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [isImagePickerOpen, setIsImagePickerOpen] = useState(false);

  const [formData, setFormData] = useState(DEFAULT_MENTOR_STATE);

  const handleHeaderSave = (e) => {
    e.preventDefault();
    updateMentorsHeader(headerFormData);
    setSaveHeaderSuccess(true);
    setTimeout(() => setSaveHeaderSuccess(false), 3000);
  };

  const handleOpenAdd = () => {
    setEditingId(null);
    setFormData(DEFAULT_MENTOR_STATE);
    setIsEditing(true);
  };

  const handleOpenEdit = (item) => {
    setEditingId(item.id);
    setFormData({
      name: item.name || '',
      designation: item.designation || '',
      image: item.image || '',
      bio: item.bio || item.experience || '',
      tags: Array.isArray(item.tags) ? item.tags.join(', ') : item.tags || ''
    });
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.designation) {
      alert('Mentor Name and Designation are required.');
      return;
    }

    const tagList = formData.tags
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const payload = {
      name: formData.name,
      designation: formData.designation,
      image: formData.image,
      bio: formData.bio,
      tags: tagList
    };

    if (editingId) {
      updateSeniorMentor(editingId, payload);
    } else {
      addSeniorMentor(payload);
    }

    setIsEditing(false);
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to remove mentor ${name}?`)) {
      deleteSeniorMentor(id);
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
            Senior Mentors & Faculty Control
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
            Edit the "Learn Directly From Senior Engineers & Academic Mentors" title, subtitle, and mentor profiles shown on course detail pages.
          </p>
        </div>
      </div>

      {saveHeaderSuccess && (
        <div style={{
          padding: '12px 16px', background: '#f0fdf4', border: '1px solid #86efac',
          color: '#166534', borderRadius: '8px', marginBottom: '20px', fontWeight: 700,
          display: 'flex', alignItems: 'center', gap: '8px'
        }}>
          <HiCheck size={18} /> Senior Mentors section header updated successfully!
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
            <label htmlFor="mentor_tag_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
              Section Badge Tag
            </label>
            <input
              id="mentor_tag_input"
              type="text"
              value={headerFormData.tag}
              onChange={(e) => setHeaderFormData({ ...headerFormData, tag: e.target.value })}
              style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
              required
            />
          </div>

          <div>
            <label htmlFor="mentor_headline_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
              Main Section Headline / Title
            </label>
            <input
              id="mentor_headline_input"
              type="text"
              value={headerFormData.headline}
              onChange={(e) => setHeaderFormData({ ...headerFormData, headline: e.target.value })}
              style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
              required
            />
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="mentor_sub_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
            Section Subtitle Description
          </label>
          <input
            id="mentor_sub_input"
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
            aria-label="Save mentors section header"
            style={{ padding: '9px 20px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <HiCheck size={18} /> Update Mentors Header Text
          </button>
        </div>
      </form>

      {/* Mentors List Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 800, color: '#000648' }}>
          Senior Instructors & Mentors ({seniorMentors.length})
        </h3>
        <button
          type="button"
          onClick={handleOpenAdd}
          aria-label="Add new senior mentor"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '9px 18px', background: '#000648', color: '#f2b733',
            border: 'none', borderRadius: '10px', fontWeight: 800, fontSize: '0.85rem',
            cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,6,72,0.15)'
          }}
        >
          <HiPlus size={18} /> Add Mentor Profile
        </button>
      </div>

      {/* Editor Modal / Form inline */}
      {isEditing && (
        <form onSubmit={handleSave} style={{
          background: '#ffffff', border: '2px solid #000648', borderRadius: '14px',
          padding: '24px', marginBottom: '28px', boxShadow: '0 10px 25px rgba(0,0,0,0.08)'
        }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '1.1rem', fontWeight: 800, color: '#000648' }}>
            {editingId ? 'Edit Mentor Profile' : 'Add New Senior Mentor Profile'}
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '20px', alignItems: 'center', marginBottom: '16px' }}>
            <div>
              <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                Photo Preview
              </span>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', border: '3px solid #f2b733', background: '#000648' }}>
                <img src={formData.image} alt={formData.name || 'Mentor Photo'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>

            <div>
              <label htmlFor="mentor_photo_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                Mentor Photo Source / URL
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  id="mentor_photo_input"
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
              <label htmlFor="mentor_name_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                Full Name *
              </label>
              <input
                id="mentor_name_input"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Arun Kumar S"
                style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                required
              />
            </div>

            <div>
              <label htmlFor="mentor_designation_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                Designation & Role *
              </label>
              <input
                id="mentor_designation_input"
                type="text"
                value={formData.designation}
                onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                placeholder="e.g. Principal Cloud Architect @ TechCorp"
                style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                required
              />
            </div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="mentor_bio_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
              Professional Bio / Experience Summary *
            </label>
            <textarea
              id="mentor_bio_input"
              rows={3}
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              placeholder="11+ years designing multi-cloud architectures across AWS and Azure..."
              style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
              required
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="mentor_tags_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
              Expertise Badges (Comma-separated)
            </label>
            <input
              id="mentor_tags_input"
              type="text"
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              placeholder="e.g. AWS Certified, Kubernetes Lead, DevOps Veteran"
              style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
            />
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
              aria-label="Save mentor profile"
              style={{ padding: '9px 20px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <HiCheck size={18} /> Save Mentor Profile
            </button>
          </div>
        </form>
      )}

      {/* Mentors Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
        {seniorMentors.map((item) => (
          <div
            key={item.id || item.name}
            style={{
              background: '#ffffff', border: '1.5px solid #000648', borderRadius: '14px',
              overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,6,72,0.06)', display: 'flex', flexDirection: 'column'
            }}
          >
            <div style={{ background: '#000648', color: '#ffffff', padding: '16px', textAlign: 'center' }}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #f2b733', marginBottom: '8px' }}
              />
              <h4 style={{ margin: '0 0 2px 0', fontSize: '1.05rem', fontWeight: 800, color: '#ffffff' }}>
                {item.name}
              </h4>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f2b733' }}>
                {item.designation}
              </div>
            </div>

            <div style={{ padding: '14px', flex: 1, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.825rem', color: '#475569' }}>
              <p style={{ margin: 0, lineHeight: 1.45 }}>{item.bio || item.experience}</p>
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
