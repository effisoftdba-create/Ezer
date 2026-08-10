import React, { useState } from 'react';
import { useSiteData } from '../context/SiteContext';
import ImagePickerModal from './ImagePickerModal';
import GraduateFormModal from './GraduateFormModal';
import { HiPlus, HiTrash, HiPencil, HiCheck, HiSparkles } from 'react-icons/hi';
import { resolveImageSrc } from '../../../utils/imageUtils';

const DEFAULT_GRADUATE_STATE = {
  name: '',
  company: '',
  beforeRole: '',
  afterRole: '',
  image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=300&h=300'
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
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=300&h=300'
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
      image: item.image || '',
      position: item.position || item.imagePosition || '50% 50%',
      imagePosition: item.position || item.imagePosition || '50% 50%',
      fit: item.fit || item.imageFit || 'cover',
      imageFit: item.fit || item.imageFit || 'cover',
      zoom: item.zoom || item.imageZoom || 1,
      imageZoom: item.zoom || item.imageZoom || 1,
      mobilePosition: item.mobilePosition || item.position || '50% 50%',
      mobileZoom: item.mobileZoom || item.zoom || 1
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
            Manage the section header and graduate outcome cards visible across all course pages.
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
            <HiPlus size={18} /> Add Graduate Card
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
            <label htmlFor="outcome_tag_field" style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', display: 'block', marginBottom: '4px' }}>Section Tag</label>
            <input
              id="outcome_tag_field"
              type="text"
              value={headerFormData.tag}
              onChange={(e) => setHeaderFormData((prev) => ({ ...prev, tag: e.target.value }))}
              style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
            />
          </div>
          <div>
            <label htmlFor="outcome_headline_field" style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', display: 'block', marginBottom: '4px' }}>Main Headline</label>
            <input
              id="outcome_headline_field"
              type="text"
              value={headerFormData.headline}
              onChange={(e) => setHeaderFormData((prev) => ({ ...prev, headline: e.target.value }))}
              style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
            />
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="outcome_sub_field" style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', display: 'block', marginBottom: '4px' }}>Subtitle / Description</label>
          <input
            id="outcome_sub_field"
            type="text"
            value={headerFormData.sub}
            onChange={(e) => setHeaderFormData((prev) => ({ ...prev, sub: e.target.value }))}
            style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '12px' }}>
          {saveHeaderSuccess && <span style={{ color: '#166534', fontWeight: 700, fontSize: '0.8rem' }}>Section Header Saved!</span>}
          <button
            type="submit"
            style={{ padding: '8px 16px', background: '#000648', color: '#ffffff', border: 'none', borderRadius: '8px', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <HiCheck size={16} color="#f2b733" /> Save Header Info
          </button>
        </div>
      </form>

      {/* Graduate Card Form */}
      <GraduateFormModal
        isEditing={isEditing}
        editingId={editingId}
        formData={formData}
        setFormData={setFormData}
        onSave={handleSave}
        onCancel={() => setIsEditing(false)}
        onOpenImagePicker={() => setIsImagePickerOpen(true)}
      />

      {/* Graduate Cards List */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
        {transformedLives.map((item) => (
          <div key={item.id} style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <img src={resolveImageSrc(item.image)} alt={item.name} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #000648' }} />
                <div>
                  <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 800, color: '#000648' }}>{item.name}</h4>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#166534', background: '#dcfce7', padding: '1px 6px', borderRadius: '4px' }}>
                    {item.company}
                  </span>
                </div>
              </div>

              <div style={{ fontSize: '0.8rem', color: '#475569', lineHeight: 1.4 }}>
                <div><strong>Before:</strong> {item.beforeRole || 'N/A'}</div>
                <div><strong>After:</strong> {item.afterRole || 'Software Engineer'}</div>
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
        currentPosition={formData.position || formData.imagePosition}
        currentFit={formData.fit || formData.imageFit}
        currentZoom={formData.zoom || formData.imageZoom || 1}
        currentMobilePosition={formData.mobilePosition}
        currentMobileZoom={formData.mobileZoom || 1}
        onSelectImage={(url, pos, fit, zoom, mobileOpts) =>
          setFormData((prev) => ({
            ...prev,
            image: url,
            position: pos || '50% 50%',
            imagePosition: pos || '50% 50%',
            fit: fit || 'cover',
            imageFit: fit || 'cover',
            zoom: zoom || 1,
            imageZoom: zoom || 1,
            mobilePosition: mobileOpts?.mobilePosition || pos || '50% 50%',
            mobileZoom: mobileOpts?.mobileZoom || zoom || 1
          }))
        }
        targetArea="Graduate Placement Card Photo"
        aspectRatio="Square (1:1)"
        recommendedDimensions="300 x 300 px"
      />
    </div>
  );
}
