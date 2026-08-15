import React, { useState, useEffect } from 'react';
import { useSiteData } from '../context/SiteContext';
import ImagePickerModal from './ImagePickerModal';
import TestimonialFormModal from './TestimonialFormModal';
import { HiPlus, HiTrash, HiPencil, HiCheck, HiStar, HiPhotograph, HiAdjustments } from 'react-icons/hi';
import { resolveImageSrc } from '../utils/imageUtils';

const DEFAULT_TESTIMONIAL_STATE = {
  author: '',
  role: '',
  company: '',
  track: 'Software Testing – Playwright',
  text: '',
  rating: 5,
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
  position: '50% 50%',
  fit: 'cover',
  zoom: 1,
  mobilePosition: '50% 50%',
  mobileZoom: 1
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

  const [heroFormData, setHeroFormData] = useState({
    tag: testimonialsHero?.tag || testimonialsHero?.badge || 'STUDENT SUCCESS STORIES',
    badge: testimonialsHero?.badge || testimonialsHero?.tag || 'STUDENT SUCCESS STORIES',
    headline: testimonialsHero?.headline || 'Real Learners. Real High-Growth IT Careers.',
    sub: testimonialsHero?.sub || 'Discover how EZER Learning Solutions empowers freshers, career switchers, and non-IT professionals to land high-growth tech roles through live online practical training and 12-month dedicated placement support.',
    image: testimonialsHero?.image || testimonialsHero?.url || 'images/hero/hero_section_1.jpg',
    position: testimonialsHero?.position || testimonialsHero?.imagePosition || 'center 20%',
    fit: testimonialsHero?.fit || testimonialsHero?.imageFit || 'cover',
    zoom: testimonialsHero?.zoom || testimonialsHero?.imageZoom || 1,
    mobilePosition: testimonialsHero?.mobilePosition || testimonialsHero?.position || 'center 20%',
    mobileZoom: testimonialsHero?.mobileZoom || testimonialsHero?.zoom || 1,
    ratingBadge: testimonialsHero?.ratingBadge || '4.9/5 Rating (2,500+ Reviews)',
    assistanceBadge: testimonialsHero?.assistanceBadge || '12-Month Dedicated Placement Support'
  });

  const [heroFormErrors, setHeroFormErrors] = useState({});
  const [saveHeroSuccess, setSaveHeroSuccess] = useState(false);
  const [isHeroImagePickerOpen, setIsHeroImagePickerOpen] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [isImagePickerOpen, setIsImagePickerOpen] = useState(false);
  const [formData, setFormData] = useState(DEFAULT_TESTIMONIAL_STATE);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (testimonialsHero) {
      setHeroFormData({
        tag: testimonialsHero.tag || testimonialsHero.badge || 'STUDENT SUCCESS STORIES',
        badge: testimonialsHero.badge || testimonialsHero.tag || 'STUDENT SUCCESS STORIES',
        headline: testimonialsHero.headline || 'Real Learners. Real High-Growth IT Careers.',
        sub: testimonialsHero.sub || 'Discover how EZER Learning Solutions empowers freshers, career switchers, and non-IT professionals to land high-growth tech roles through live online practical training and 12-month dedicated placement support.',
        image: testimonialsHero.image || testimonialsHero.url || 'images/hero/hero_section_1.jpg',
        position: testimonialsHero.position || testimonialsHero.imagePosition || 'center 20%',
        fit: testimonialsHero.fit || testimonialsHero.imageFit || 'cover',
        zoom: testimonialsHero.zoom || testimonialsHero.imageZoom || 1,
        mobilePosition: testimonialsHero.mobilePosition || testimonialsHero.position || 'center 20%',
        mobileZoom: testimonialsHero.mobileZoom || testimonialsHero.zoom || 1,
        ratingBadge: testimonialsHero.ratingBadge || '4.9/5 Rating (2,500+ Reviews)',
        assistanceBadge: testimonialsHero.assistanceBadge || '12-Month Dedicated Placement Support'
      });
    }
  }, [testimonialsHero]);

  const handleHeroSave = (e) => {
    e.preventDefault();
    const errors = {};
    if (!heroFormData.tag?.trim()) errors.tag = true;
    if (!heroFormData.headline?.trim()) errors.headline = true;
    if (!heroFormData.sub?.trim()) errors.sub = true;
    if (!heroFormData.image?.trim()) errors.image = true;

    if (Object.keys(errors).length > 0) {
      setHeroFormErrors(errors);
      alert('Please fill out all required header areas highlighted in RED below.');
      return;
    }

    setHeroFormErrors({});
    const payload = {
      ...heroFormData,
      tag: heroFormData.tag.trim(),
      badge: heroFormData.tag.trim(),
      headline: heroFormData.headline.trim(),
      sub: heroFormData.sub.trim(),
      image: heroFormData.image.trim(),
      url: heroFormData.image.trim(),
      ratingBadge: heroFormData.ratingBadge?.trim() || '4.9/5 Rating (2,500+ Reviews)',
      assistanceBadge: heroFormData.assistanceBadge?.trim() || '12-Month Dedicated Placement Support'
    };
    updateTestimonialsHero(payload);
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
      alert('Please fill out all required fields highlighted in RED.');
      return;
    }

    setFormErrors({});
    const payload = {
      ...formData,
      name: formData.author,
      author: formData.author,
      role: formData.role,
      designation: formData.role,
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
      updateWrittenTestimonial(editingId, { ...payload, id: editingId });
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
            Manage the `/testimonials` hero banner spotlight photo, copy, trust badges, and student reviews.
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

      {/* Hero Header & Spotlight Image Editor */}
      <form onSubmit={handleHeroSave} style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '16px', padding: '24px', marginBottom: '28px', boxShadow: '0 4px 16px rgba(0,6,72,0.04)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 900, color: '#000648' }}>
              Testimonials Page Header & Spotlight Image
            </h3>
            <p style={{ margin: '4px 0 0 0', fontSize: '0.8rem', color: '#64748b' }}>
              Customize the title, subtitle, badges, and right spotlight photo displayed at the top of the `/testimonials` page.
            </p>
          </div>
          {saveHeroSuccess && (
            <span style={{ color: '#166534', background: '#dcfce7', padding: '4px 12px', borderRadius: '6px', fontWeight: 800, fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <HiCheck size={14} /> Saved Successfully!
            </span>
          )}
        </div>

        {Object.keys(heroFormErrors).length > 0 && (
          <div style={{ background: '#fef2f2', border: '1.5px solid #f87171', color: '#b91c1c', padding: '10px 14px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 700, marginBottom: '16px' }}>
            ⚠️ Please fill in all required header fields highlighted in red below before saving.
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '24px', marginBottom: '18px' }}>
          {/* Left Inputs Column */}
          <div>
            <div style={{ marginBottom: '14px' }}>
              <label htmlFor="testi_hero_tag" style={{ fontSize: '0.78rem', fontWeight: 800, color: heroFormErrors.tag ? '#dc2626' : '#334155', display: 'block', marginBottom: '4px' }}>
                Badge Tagline *
              </label>
              <input
                id="testi_hero_tag"
                type="text"
                value={heroFormData.tag || ''}
                onChange={(e) => {
                  const val = e.target.value;
                  setHeroFormData((prev) => ({ ...prev, tag: val, badge: val }));
                  if (heroFormErrors.tag) setHeroFormErrors((prev) => ({ ...prev, tag: false }));
                }}
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  borderRadius: '8px',
                  border: heroFormErrors.tag ? '2px solid #dc2626' : '1.5px solid #cbd5e1',
                  background: heroFormErrors.tag ? '#fff5f5' : '#ffffff',
                  fontSize: '0.85rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '14px' }}>
              <label htmlFor="testi_hero_headline" style={{ fontSize: '0.78rem', fontWeight: 800, color: heroFormErrors.headline ? '#dc2626' : '#334155', display: 'block', marginBottom: '4px' }}>
                Headline *
              </label>
              <input
                id="testi_hero_headline"
                type="text"
                value={heroFormData.headline || ''}
                onChange={(e) => {
                  setHeroFormData((prev) => ({ ...prev, headline: e.target.value }));
                  if (heroFormErrors.headline) setHeroFormErrors((prev) => ({ ...prev, headline: false }));
                }}
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  borderRadius: '8px',
                  border: heroFormErrors.headline ? '2px solid #dc2626' : '1.5px solid #cbd5e1',
                  background: heroFormErrors.headline ? '#fff5f5' : '#ffffff',
                  fontSize: '0.85rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '14px' }}>
              <label htmlFor="testi_hero_sub" style={{ fontSize: '0.78rem', fontWeight: 800, color: heroFormErrors.sub ? '#dc2626' : '#334155', display: 'block', marginBottom: '4px' }}>
                Subheadline Description *
              </label>
              <textarea
                id="testi_hero_sub"
                rows={3}
                value={heroFormData.sub || ''}
                onChange={(e) => {
                  setHeroFormData((prev) => ({ ...prev, sub: e.target.value }));
                  if (heroFormErrors.sub) setHeroFormErrors((prev) => ({ ...prev, sub: false }));
                }}
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  borderRadius: '8px',
                  border: heroFormErrors.sub ? '2px solid #dc2626' : '1.5px solid #cbd5e1',
                  background: heroFormErrors.sub ? '#fff5f5' : '#ffffff',
                  fontSize: '0.85rem',
                  resize: 'vertical'
                }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
              <div>
                <label htmlFor="testi_hero_rating" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                  Rating Trust Badge
                </label>
                <input
                  id="testi_hero_rating"
                  type="text"
                  value={heroFormData.ratingBadge || ''}
                  onChange={(e) => setHeroFormData((prev) => ({ ...prev, ratingBadge: e.target.value }))}
                  placeholder="4.9/5 Rating (2,500+ Reviews)"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: '1.5px solid #cbd5e1',
                    fontSize: '0.84rem'
                  }}
                />
              </div>

              <div>
                <label htmlFor="testi_hero_assistance" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                  Placement Support Badge
                </label>
                <input
                  id="testi_hero_assistance"
                  type="text"
                  value={heroFormData.assistanceBadge || ''}
                  onChange={(e) => setHeroFormData((prev) => ({ ...prev, assistanceBadge: e.target.value }))}
                  placeholder="12-Month Dedicated Placement Support"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: '1.5px solid #cbd5e1',
                    fontSize: '0.84rem'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Spotlight Image Editor Box */}
          <div style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#000648', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Header Spotlight Photo *
                </span>
                <span style={{ fontSize: '0.72rem', color: '#64748b' }}>
                  Ratio: 4:3 / Landscape
                </span>
              </div>

              {/* Image Preview Box */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '4/3',
                  maxHeight: '190px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  background: '#000648',
                  position: 'relative',
                  border: heroFormErrors.image ? '2px solid #dc2626' : '1.5px solid #cbd5e1',
                  marginBottom: '10px'
                }}
              >
                <img
                  src={resolveImageSrc(heroFormData.image)}
                  alt="Testimonials Header Preview"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: heroFormData.fit || 'cover',
                    objectPosition: heroFormData.position || 'center 20%',
                    transform: (heroFormData.zoom && heroFormData.zoom !== 1) ? `scale(${heroFormData.zoom})` : 'none',
                    transformOrigin: heroFormData.position || 'center 20%',
                    display: 'block'
                  }}
                />
              </div>

              <div style={{ marginBottom: '10px' }}>
                <input
                  type="text"
                  value={heroFormData.image || ''}
                  onChange={(e) => {
                    setHeroFormData((prev) => ({ ...prev, image: e.target.value, url: e.target.value }));
                    if (heroFormErrors.image) setHeroFormErrors((prev) => ({ ...prev, image: false }));
                  }}
                  placeholder="Enter image URL or choose from gallery below"
                  style={{
                    width: '100%',
                    padding: '7px 10px',
                    borderRadius: '6px',
                    border: '1.5px solid #cbd5e1',
                    fontSize: '0.8rem'
                  }}
                />
              </div>
            </div>

            {/* Change & Adjust Image Buttons */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                onClick={() => setIsHeroImagePickerOpen(true)}
                style={{
                  flex: 1,
                  padding: '8px 12px',
                  background: '#000648',
                  color: '#f2b733',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 800,
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <HiPhotograph size={16} /> Choose Image
              </button>

              <button
                type="button"
                onClick={() => setIsHeroImagePickerOpen(true)}
                style={{
                  padding: '8px 12px',
                  background: '#f1f5f9',
                  color: '#334155',
                  border: '1.5px solid #cbd5e1',
                  borderRadius: '8px',
                  fontWeight: 800,
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <HiAdjustments size={16} /> Adjust Crop
              </button>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '12px' }}>
          <button
            type="submit"
            style={{
              padding: '10px 24px',
              background: '#000648',
              color: '#f2b733',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 900,
              fontSize: '0.86rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 4px 12px rgba(0,6,72,0.18)'
            }}
          >
            <HiCheck size={16} /> Save Testimonials Header
          </button>
        </div>
      </form>

      {/* Review Modal Form for Adding/Editing individual written reviews */}
      {isEditing && (
        <TestimonialFormModal
          isOpen={isEditing}
          isEditing={isEditing}
          onClose={() => setIsEditing(false)}
          onCancel={() => setIsEditing(false)}
          formData={formData}
          setFormData={setFormData}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
          handleSave={handleSave}
          onSave={handleSave}
          editingId={editingId}
          onOpenImagePicker={() => setIsImagePickerOpen(true)}
        />
      )}

      {/* Written Reviews List */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 800, color: '#000648' }}>
          Student Written Reviews ({writtenTestimonials?.length || 0})
        </h3>
        <button
          type="button"
          onClick={handleOpenAdd}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 16px',
            background: '#000648',
            color: '#f2b733',
            borderRadius: '8px',
            fontWeight: 800,
            border: 'none',
            cursor: 'pointer',
            fontSize: '0.82rem',
            boxShadow: '0 2px 8px rgba(0,6,72,0.15)'
          }}
        >
          <HiPlus size={16} /> Add New Review
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '18px' }}>
        {(writtenTestimonials || []).map((item, idx) => {
          const authorName = item.author || item.name || `Review #${idx + 1}`;
          const reviewRating = Number(item.rating) || 5;

          return (
            <div
              key={item.id || idx}
              style={{
                background: '#ffffff', border: '1.5px solid #e2e8f0',
                borderRadius: '16px', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                boxShadow: '0 2px 8px rgba(0,6,72,0.04)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '50%', overflow: 'hidden', background: '#000648', flexShrink: 0 }}>
                      <img
                        src={resolveImageSrc(item.avatar || item.image)}
                        alt={authorName}
                        style={{
                          width: '100%', height: '100%', objectFit: item.fit || 'cover',
                          objectPosition: item.position || '50% 50%',
                          transform: item.zoom !== 1 ? `scale(${item.zoom})` : 'none',
                          transformOrigin: item.position || '50% 50%'
                        }}
                      />
                    </div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 800, color: '#000648' }}>
                        {authorName}
                      </h4>
                      <p style={{ margin: 0, fontSize: '0.78rem', color: '#64748b' }}>
                        {item.role || item.designation} {item.company ? `@ ${item.company}` : ''}
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', color: '#f59e0b', gap: '2px' }}>
                    {[...Array(reviewRating)].map((_, i) => (
                      <HiStar key={i} size={14} />
                    ))}
                  </div>
                </div>

                <div style={{
                  background: '#eff6ff', color: '#1e40af', padding: '3px 8px', borderRadius: '4px',
                  fontSize: '0.7rem', fontWeight: 800, width: 'fit-content', marginBottom: '10px'
                }}>
                  {item.track || item.course || 'Cloud & AI'}
                </div>

                <p style={{ fontSize: '0.85rem', color: '#334155', lineHeight: 1.55, margin: 0, fontStyle: 'italic' }}>
                  "{item.text || item.quote || item.review}"
                </p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '16px', paddingTop: '12px', borderTop: '1px solid #f1f5f9' }}>
                <button
                  type="button"
                  onClick={() => handleOpenEdit(item)}
                  style={{
                    padding: '6px 12px', background: '#f8fafc', color: '#000648',
                    border: '1.5px solid #cbd5e1', borderRadius: '6px', fontWeight: 700,
                    fontSize: '0.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px'
                  }}
                >
                  <HiPencil size={13} /> Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(item.id || item.author, authorName)}
                  style={{
                    padding: '6px 12px', background: '#fef2f2', color: '#dc2626',
                    border: '1.5px solid #fecaca', borderRadius: '6px', fontWeight: 700,
                    fontSize: '0.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px'
                  }}
                >
                  <HiTrash size={13} /> Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Image Picker for Testimonials Header Spotlight Photo */}
      <ImagePickerModal
        isOpen={isHeroImagePickerOpen}
        onClose={() => setIsHeroImagePickerOpen(false)}
        currentImage={heroFormData.image}
        currentPosition={heroFormData.position}
        currentFit={heroFormData.fit}
        currentZoom={heroFormData.zoom}
        currentMobilePosition={heroFormData.mobilePosition}
        currentMobileZoom={heroFormData.mobileZoom}
        onSelectImage={(url, pos, fit, zoom, mobileOpts) =>
          setHeroFormData((prev) => ({
            ...prev,
            image: url,
            url: url,
            position: pos || 'center 20%',
            imagePosition: pos || 'center 20%',
            fit: fit || 'cover',
            imageFit: fit || 'cover',
            zoom: zoom || 1,
            imageZoom: zoom || 1,
            mobilePosition: mobileOpts?.mobilePosition || pos || 'center 20%',
            mobileZoom: mobileOpts?.mobileZoom || zoom || 1
          }))
        }
        targetArea="Testimonials Page Spotlight Image"
        aspectRatio="Hero Right Frame (4:3)"
        recommendedDimensions="1200 x 900 px"
      />

      {/* Image Picker for Individual Review Avatar */}
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
