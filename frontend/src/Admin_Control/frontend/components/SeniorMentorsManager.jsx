import React, { useState } from 'react';
import { useSiteData } from '../context/SiteContext';
import ImagePickerModal from './ImagePickerModal';
import SeniorMentorFormModal from './SeniorMentorFormModal';
import { HiPlus, HiTrash, HiPencil, HiCheck, HiSparkles } from 'react-icons/hi';
import { resolveImageSrc } from '../../../utils/imageUtils';

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
            Senior Mentors & Faculty Manager
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
            Update the instructor showcase section and senior mentors profiles.
          </p>
        </div>

        {!isEditing && (
          <button
            type="button"
            onClick={handleOpenAdd}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '10px 20px', background: '#000648', color: '#f2b733',
              borderRadius: '10px', fontWeight: 800, border: 'none', cursor: 'pointer',
              fontSize: '0.875rem'
            }}
          >
            <HiPlus size={18} /> Add Senior Mentor
          </button>
        )}
      </div>

      {/* Section Header Editor */}
      <form onSubmit={handleHeaderSave} style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '16px', padding: '20px', marginBottom: '24px' }}>
        <h3 style={{ margin: '0 0 12px 0', fontSize: '1rem', fontWeight: 800, color: '#000648', display: 'flex', alignItems: 'center', gap: '6px' }}>
          Edit Section Title & Tagline
        </h3>


        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '16px', marginBottom: '12px' }}>
          <div>
            <label htmlFor="mentor_tag_field" style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', display: 'block', marginBottom: '4px' }}>Section Tag</label>
            <input
              id="mentor_tag_field"
              type="text"
              value={headerFormData.tag}
              onChange={(e) => setHeaderFormData((prev) => ({ ...prev, tag: e.target.value }))}
              style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
            />
          </div>
          <div>
            <label htmlFor="mentor_headline_field" style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', display: 'block', marginBottom: '4px' }}>Main Headline</label>
            <input
              id="mentor_headline_field"
              type="text"
              value={headerFormData.headline}
              onChange={(e) => setHeaderFormData((prev) => ({ ...prev, headline: e.target.value }))}
              style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
            />
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="mentor_sub_field" style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', display: 'block', marginBottom: '4px' }}>Subtitle / Description</label>
          <input
            id="mentor_sub_field"
            type="text"
            value={headerFormData.sub}
            onChange={(e) => setHeaderFormData((prev) => ({ ...prev, sub: e.target.value }))}
            style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '12px' }}>
          {saveHeaderSuccess && <span style={{ color: '#166534', fontWeight: 700, fontSize: '0.8rem' }}>Mentors Header Saved!</span>}
          <button
            type="submit"
            style={{ padding: '8px 16px', background: '#000648', color: '#ffffff', border: 'none', borderRadius: '8px', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <HiCheck size={16} color="#f2b733" /> Save Header Info
          </button>
        </div>
      </form>

      {/* Senior Mentor Form Modal */}
      <SeniorMentorFormModal
        isEditing={isEditing}
        editingId={editingId}
        formData={formData}
        setFormData={setFormData}
        onSave={handleSave}
        onCancel={() => setIsEditing(false)}
        onOpenImagePicker={() => setIsImagePickerOpen(true)}
      />

      {/* Senior Mentors List */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
        {seniorMentors.map((item) => (
          <div key={item.id} style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <img src={resolveImageSrc(item.image)} alt={item.name} style={{ width: '52px', height: '52px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #000648' }} />
                <div>
                  <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 800, color: '#000648' }}>{item.name}</h4>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748b' }}>{item.designation}</div>
                </div>
              </div>

              <p style={{ fontSize: '0.8rem', color: '#475569', lineHeight: 1.4, margin: '0 0 10px 0' }}>
                {item.bio}
              </p>

              <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                {Array.isArray(item.tags) && item.tags.map((tg) => (
                  <span key={tg} style={{ fontSize: '0.68rem', fontWeight: 700, color: '#000648', background: '#f1f5f9', padding: '2px 6px', borderRadius: '4px' }}>
                    {tg}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px', marginTop: '14px', paddingTop: '10px', borderTop: '1px solid #f1f5f9' }}>
              <button
                type="button"
                onClick={() => handleOpenEdit(item)}
                style={{ padding: '6px 10px', background: '#f1f5f9', border: '1px solid #cbd5e1', color: '#000648', borderRadius: '6px', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <HiPencil size={14} /> Edit
              </button>
              <button
                type="button"
                onClick={() => handleDelete(item.id, item.name)}
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
        currentPosition={formData.position}
        currentFit={formData.fit}
        onSelectImage={(url, pos, fit) => setFormData((prev) => ({ ...prev, image: url, position: pos || 'center center', fit: fit || 'cover' }))}
        targetArea="Senior Mentor Profile"
        aspectRatio="Square (1:1)"
        recommendedDimensions="400 x 400 px"
      />
    </div>
  );
}
