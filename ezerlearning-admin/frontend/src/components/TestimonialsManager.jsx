import React, { useState } from 'react';
import { useSiteData } from '../context/SiteContext';
import ImagePickerModal from './ImagePickerModal';
import TestimonialFormModal from './TestimonialFormModal';
import { HiPlus, HiTrash, HiPencil, HiCheck, HiStar } from 'react-icons/hi';
import { resolveImageSrc } from '../utils/imageUtils';

const DEFAULT_TESTIMONIAL_STATE = {
  author: '',
  role: '',
  company: '',
  track: 'Software Testing – Playwright',
  text: '',
  rating: 5,
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
};

export default function TestimonialsManager() {
  const {
    testimonialsHero,
    writtenTestimonials,
    updateTestimonialsHero,
    addWrittenTestimonial,
    updateWrittenTestimonial,
    deleteWrittenTestimonial
  } = useSiteData();

  const [heroFormData, setHeroFormData] = useState(testimonialsHero || {
    tag: 'ALUMNI SUCCESS & REVIEWS',
    headline: 'Proven Outcomes & Real Alumni Stories',
    sub: 'Explore career switch journeys from our graduates who secured engineering roles.'
  });

  const [saveHeroSuccess, setSaveHeroSuccess] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [isImagePickerOpen, setIsImagePickerOpen] = useState(false);
  const [formData, setFormData] = useState(DEFAULT_TESTIMONIAL_STATE);
  const [formErrors, setFormErrors] = useState({});

  const handleHeroSave = (e) => {
    e.preventDefault();
    updateTestimonialsHero(heroFormData);
    setSaveHeroSuccess(true);
    setTimeout(() => setSaveHeroSuccess(false), 3000);
  };

  const handleOpenAdd = () => {
    setEditingId(null);
    setFormData(DEFAULT_TESTIMONIAL_STATE);
    setFormErrors({});
    setIsEditing(true);
  };

  const handleOpenEdit = (item) => {
    setEditingId(item.id || item.author || item.name);
    setFormData({
      author: item.author || item.name || '',
      role: item.role || item.designation || '',
      company: item.company || '',
      track: item.track || item.course || 'Software Testing – Playwright',
      text: item.text || item.quote || item.content || item.review || '',
      rating: item.rating || 5,
      avatar: item.avatar || item.image || '',
      position: item.position || item.imagePosition || '50% 50%',
      imagePosition: item.position || item.imagePosition || '50% 50%',
      fit: item.fit || item.imageFit || 'cover',
      imageFit: item.fit || item.imageFit || 'cover',
      zoom: item.zoom || item.imageZoom || 1,
      imageZoom: item.zoom || item.imageZoom || 1,
      mobilePosition: item.mobilePosition || item.position || '50% 50%',
      mobileZoom: item.mobileZoom || item.zoom || 1
    });
    setFormErrors({});
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.author?.trim()) errors.author = true;
    if (!formData.role?.trim()) errors.role = true;
    if (!formData.company?.trim()) errors.company = true;
    if (!formData.track?.trim()) errors.track = true;
    if (!formData.text?.trim()) errors.text = true;

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      alert('Please fill out all required fields highlighted in RED (including Firm / Company Name).');
      return;
    }

    const payload = {
      ...formData,
      id: editingId || `testi-${Date.now()}`,
      name: formData.author,
      author: formData.author,
      role: formData.role,
      company: formData.company,
      course: formData.track,
      track: formData.track,
      quote: formData.text,
      text: formData.text,
      review: formData.text,
      content: formData.text,
      image: formData.avatar,
      avatar: formData.avatar,
      rating: formData.rating || 5
    };

    if (editingId) {
      updateWrittenTestimonial(editingId, payload);
    } else {
      addWrittenTestimonial(payload);
    }
    setIsEditing(false);
  };


  const handleDelete = (id, author) => {
    if (window.confirm(`Are you sure you want to remove ${author}'s review?`)) {
      deleteWrittenTestimonial(id);
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
            Testimonials Page Manager
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
            Update the `/testimonials` page header hero and manage written student reviews.
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
            <HiPlus size={18} /> Add New Review
          </button>
        )}
      </div>

      {/* Hero Header Editor */}
      <form onSubmit={handleHeroSave} style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '16px', padding: '20px', marginBottom: '24px' }}>
        <h3 style={{ margin: '0 0 12px 0', fontSize: '1rem', fontWeight: 800, color: '#000648' }}>
          Edit Testimonials Page Header
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
          <div>
            <label htmlFor="testi_hero_tag" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
              Badge Tagline
            </label>
            <input
              id="testi_hero_tag"
              type="text"
              value={heroFormData.tag || ''}
              onChange={(e) => setHeroFormData((prev) => ({ ...prev, tag: e.target.value }))}
              style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
            />
          </div>

          <div>
            <label htmlFor="testi_hero_headline" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
              Headline
            </label>
            <input
              id="testi_hero_headline"
              type="text"
              value={heroFormData.headline || ''}
              onChange={(e) => setHeroFormData((prev) => ({ ...prev, headline: e.target.value }))}
              style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
            />
          </div>
        </div>

        <div style={{ marginBottom: '14px' }}>
          <label htmlFor="testi_hero_sub" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
            Subheadline Description
          </label>
          <input
            id="testi_hero_sub"
            type="text"
            value={heroFormData.sub || ''}
            onChange={(e) => setHeroFormData((prev) => ({ ...prev, sub: e.target.value }))}
            style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '12px' }}>
          {saveHeroSuccess && <span style={{ color: '#166534', fontWeight: 700, fontSize: '0.8rem' }}>Header Updated!</span>}
          <button
            type="submit"
            style={{ padding: '8px 16px', background: '#000648', color: '#ffffff', border: 'none', borderRadius: '8px', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <HiCheck size={16} color="#f2b733" /> Save Header Info
          </button>
        </div>
      </form>

      {/* Testimonial Form Modal */}
      <TestimonialFormModal
        isEditing={isEditing}
        editingId={editingId}
        formData={formData}
        setFormData={setFormData}
        formErrors={formErrors}
        setFormErrors={setFormErrors}
        onSave={handleSave}
        onCancel={() => setIsEditing(false)}
        onOpenImagePicker={() => setIsImagePickerOpen(true)}
      />

      {/* Written Reviews List */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
        {writtenTestimonials.map((item) => (
          <div key={item.id || item.author} style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <img src={resolveImageSrc(item.avatar || item.image)} alt={item.author || item.name} style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <h4 style={{ margin: 0, fontSize: '0.9rem', fontWeight: 800, color: '#000648' }}>{item.author || item.name}</h4>
                  <div style={{ fontSize: '0.725rem', color: '#64748b', fontWeight: 600 }}>
                    {item.role || item.designation} {item.company ? `@ ${item.company}` : ''}
                  </div>
                  {(item.track || item.course) && (
                    <div style={{ fontSize: '0.68rem', color: '#000648', background: '#eff6ff', border: '1px solid #bfdbfe', padding: '1px 7px', borderRadius: '50px', fontWeight: 700, marginTop: '3px', display: 'inline-block' }}>
                      Track: {item.track || item.course}
                    </div>
                  )}

                </div>
              </div>


              <div style={{ display: 'flex', gap: '2px', color: '#f2b733', marginBottom: '8px' }}>
                {[...Array(item.rating || 5)].map((_, i) => (
                  <HiStar key={i} size={14} />
                ))}
              </div>

              <p style={{ fontSize: '0.8rem', color: '#475569', lineHeight: 1.4, margin: 0 }}>
                "{item.text || item.quote || item.content || item.review}"
              </p>
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
                onClick={() => handleDelete(item.id, item.author || item.name)}
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
        currentImage={formData.avatar}
        currentPosition={formData.position || formData.imagePosition}
        currentFit={formData.fit || formData.imageFit}
        currentZoom={formData.zoom || formData.imageZoom || 1}
        currentMobilePosition={formData.mobilePosition}
        currentMobileZoom={formData.mobileZoom || 1}
        onSelectImage={(url, pos, fit, zoom, mobileOpts) =>
          setFormData((prev) => ({
            ...prev,
            avatar: url,
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
        targetArea="Alumni Review Avatar"
        aspectRatio="Square (1:1)"
        recommendedDimensions="200 x 200 px"
      />
    </div>
  );
}
