import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useSiteData } from '../context/SiteContext';
import ImagePickerModal from './ImagePickerModal';
import ImagePickerPreviewBox from './ImagePickerPreviewBox';
import { resolveImageSrc } from '../../../utils/imageUtils';
import { HiPlus, HiTrash, HiPencil, HiPhotograph, HiCheck, HiX } from 'react-icons/hi';

export default function HeroManager() {
  const { heroSlides, addHeroSlide, updateHeroSlide, deleteHeroSlide } = useSiteData();

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    headline: '',
    sub: '',
    url: ''
  });

  const [isImagePickerOpen, setIsImagePickerOpen] = useState(false);

  const handleOpenAdd = () => {
    setEditingId(null);
    setFormData({ headline: '', sub: '', url: '' });
    setIsEditing(true);
  };

  const handleOpenEdit = (slide) => {
    setEditingId(slide.id);
    setFormData({
      headline: slide.headline || '',
      sub: slide.sub || '',
      url: slide.url || slide.image || '',
      position: slide.position || slide.imagePosition || 'center center',
      fit: slide.fit || slide.imageFit || 'cover',
      zoom: slide.zoom || slide.imageZoom || 1,
      mobilePosition: slide.mobilePosition || 'center center',
      mobileZoom: slide.mobileZoom || 1
    });
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!formData.headline || !formData.url) {
      alert('Headline and Image URL are required.');
      return;
    }

    if (editingId) {
      updateHeroSlide(editingId, formData);
    } else {
      addHeroSlide(formData);
    }

    setIsEditing(false);
  };

  const handleDelete = (id) => {
    if (heroSlides.length <= 1) {
      alert('Cannot delete the last remaining hero slide.');
      return;
    }
    if (window.confirm('Are you sure you want to delete this hero slide?')) {
      deleteHeroSlide(id);
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
            Hero Banner Slider Manager
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
            Manage main homepage slides, background photos, headlines, and call-to-action banners.
          </p>
        </div>

        <button
          type="button"
          onClick={handleOpenAdd}
          aria-label="Add new hero slide"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '10px 20px', background: '#000648', color: '#f2b733',
            border: 'none', borderRadius: '10px', fontWeight: 800, fontSize: '0.875rem',
            cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,6,72,0.15)'
          }}
        >
          <HiPlus size={18} /> Add New Slide
        </button>
      </div>

      {isEditing && ReactDOM.createPortal(
        <div
          role="presentation"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsEditing(false);
          }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0, 6, 72, 0.82)', backdropFilter: 'blur(6px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '16px', animation: 'fadeIn 0.2s ease'
          }}
        >
          <div
            style={{
              background: '#ffffff', borderRadius: '16px', width: '100%', maxWidth: '580px',
              boxShadow: '0 25px 50px -12px rgba(0, 6, 72, 0.4)', border: '1.5px solid #e2e8f0',
              overflow: 'hidden', animation: 'modalPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              display: 'flex', flexDirection: 'column', maxHeight: '90vh'
            }}
          >
            <div style={{ background: '#000648', padding: '16px 20px', color: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.7rem', fontWeight: 900, color: '#f2b733', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  HERO SLIDE EDITOR
                </span>
                <h3 style={{ margin: '2px 0 0 0', fontSize: '1.15rem', fontWeight: 900, color: '#ffffff' }}>
                  {editingId ? 'Edit Hero Banner Slide' : 'Create New Hero Banner Slide'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                aria-label="Close modal button"
                style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#ffffff', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <HiX size={18} />
              </button>
            </div>

            <form onSubmit={handleSave} style={{ padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label htmlFor="hero_url_input" style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#334155', marginBottom: '4px' }}>
                  Image Source / URL *
                </label>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  {formData.url && (
                    <img
                      src={resolveImageSrc(formData.url)}
                      alt="Preview"
                      style={{ width: '38px', height: '38px', borderRadius: '8px', objectFit: 'cover', border: '1px solid #cbd5e1', flexShrink: 0 }}
                    />
                  )}
                  <input
                    id="hero_url_input"
                    type="text"
                    value={formData.url}
                    onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                    placeholder="Image path or URL"
                    style={{ flex: 1, minWidth: 0, padding: '9px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setIsImagePickerOpen(true)}
                    aria-label="Choose image from picker"
                    style={{
                      padding: '9px 14px', background: '#000648', color: '#f2b733', border: 'none',
                      borderRadius: '8px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.78rem', whiteSpace: 'nowrap', flexShrink: 0
                    }}
                  >
                    <HiPhotograph size={15} /> Choose
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        position: 'center center',
                        fit: 'cover',
                        zoom: 1,
                        mobilePosition: 'center center',
                        mobileZoom: 1
                      }));
                      alert('Image alignment & zoom reset to default center (100%). Click Save Slide to apply.');
                    }}
                    title="Reset image alignment and zoom level back to normal default center"
                    style={{
                      padding: '9px 12px', background: '#f1f5f9', color: '#000648', border: '1.5px solid #cbd5e1',
                      borderRadius: '8px', fontWeight: 700, cursor: 'pointer', fontSize: '0.78rem', whiteSpace: 'nowrap', flexShrink: 0
                    }}
                  >
                    ↺ Reset Alignment
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="hero_headline_input" style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#334155', marginBottom: '4px' }}>
                  Headline Text *
                </label>
                <input
                  id="hero_headline_input"
                  type="text"
                  value={formData.headline}
                  onChange={(e) => setFormData({ ...formData, headline: e.target.value })}
                  placeholder="e.g. Deploy, Automate, and Scale Like a Real DevOps Engineer"
                  style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
                  required
                />
              </div>

              <div>
                <label htmlFor="hero_sub_input" style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#334155', marginBottom: '4px' }}>
                  Sub-description Text *
                </label>
                <textarea
                  id="hero_sub_input"
                  rows={3}
                  value={formData.sub}
                  onChange={(e) => setFormData({ ...formData, sub: e.target.value })}
                  placeholder="Detailed summary line shown below headline..."
                  style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem', lineHeight: 1.5 }}
                  required
                />
              </div>

              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', paddingTop: '12px', borderTop: '1px solid #e2e8f0', marginTop: '4px' }}>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  style={{ padding: '9px 18px', background: '#f1f5f9', color: '#475569', border: '1px solid #cbd5e1', borderRadius: '8px', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{ padding: '9px 22px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 900, fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', boxShadow: '0 4px 12px rgba(0,6,72,0.2)' }}
                >
                  <HiCheck size={18} /> Save Slide
                </button>
              </div>
            </form>
          </div>
        </div>,
        document.body
      )}

      <div style={{ display: 'grid', gap: '16px' }}>
        {heroSlides.map((slide, idx) => {
          const keyId = slide.id ? `slide-id-${slide.id}` : (slide.headline ? `slide-hl-${slide.headline}` : `slide-pos-${idx}`);
          return (
            <div
              key={keyId}
              style={{
                display: 'grid', gridTemplateColumns: '160px 1fr auto', gap: '20px',
                alignItems: 'center', background: '#ffffff', border: '1.5px solid #e2e8f0',
                borderRadius: '12px', padding: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
              }}
            >
              <div style={{ height: '95px', borderRadius: '8px', overflow: 'hidden', background: '#000648', position: 'relative' }}>
                <img
                  src={resolveImageSrc(slide.url || slide.image)}
                  alt={slide.headline || 'Hero Slide Image'}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div style={{
                  position: 'absolute', top: '6px', left: '6px', background: '#000648',
                  color: '#f2b733', fontSize: '0.65rem', fontWeight: 800, padding: '2px 6px', borderRadius: '4px'
                }}>
                  Slide #{idx + 1}
                </div>
              </div>

              <div>
                <h4 style={{ margin: '0 0 4px 0', fontSize: '1rem', fontWeight: 800, color: '#000648' }}>
                  {slide.headline}
                </h4>
                <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b', lineHeight: 1.4 }}>
                  {slide.sub}
                </p>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => handleOpenEdit(slide)}
                  aria-label={`Edit slide ${idx + 1}`}
                  style={{
                    padding: '8px 12px', background: '#f1f5f9', color: '#000648',
                    border: '1.5px solid #cbd5e1', borderRadius: '8px', fontWeight: 700,
                    fontSize: '0.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px'
                  }}
                >
                  <HiPencil size={15} /> Edit
                </button>

                <button
                  type="button"
                  onClick={() => handleDelete(slide.id || slide.headline)}
                  aria-label={`Delete slide ${idx + 1}`}
                  style={{
                    padding: '8px 12px', background: '#fef2f2', color: '#dc2626',
                    border: '1.5px solid #fecaca', borderRadius: '8px', fontWeight: 700,
                    fontSize: '0.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px'
                  }}
                >
                  <HiTrash size={15} /> Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <ImagePickerModal
        isOpen={isImagePickerOpen}
        onClose={() => setIsImagePickerOpen(false)}
        currentImage={formData.url}
        currentPosition={formData.position}
        currentFit={formData.fit}
        currentZoom={formData.zoom}
        currentMobilePosition={formData.mobilePosition}
        currentMobileZoom={formData.mobileZoom}
        onSelectImage={(url, position, fit, zoom, mobileOpts) =>
          setFormData((prev) => ({
            ...prev,
            url,
            position: position || prev.position || 'center center',
            fit: fit || prev.fit || 'cover',
            zoom: zoom || prev.zoom || 1,
            mobilePosition: mobileOpts?.mobilePosition || prev.mobilePosition || 'center center',
            mobileZoom: mobileOpts?.mobileZoom || prev.mobileZoom || 1
          }))
        }
        targetArea="Hero Slide Right Photo Frame"
        aspectRatio="Square (1:1)"
        recommendedDimensions="1000 x 1000 px"
      />
    </div>
  );
}
