import React, { useState } from 'react';
import { useSiteData } from '../context/SiteContext';
import ImagePickerModal from './ImagePickerModal';
import { HiPlus, HiTrash, HiPencil, HiPhotograph, HiCheck } from 'react-icons/hi';

export default function HeroManager() {
  const { heroSlides, addHeroSlide, updateHeroSlide, deleteHeroSlide } = useSiteData();

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    badge: '',
    headline: '',
    sub: '',
    url: ''
  });

  const [isImagePickerOpen, setIsImagePickerOpen] = useState(false);

  const handleOpenAdd = () => {
    setEditingId(null);
    setFormData({
      badge: 'New IT Program',
      headline: 'Master Cutting-Edge Tech Skills Live',
      sub: 'Join live online cohorts led by corporate practitioners with guaranteed career mentorship.',
      url: 'images/hero/hero_section_1.jpg'
    });
    setIsEditing(true);
  };

  const handleOpenEdit = (slide) => {
    setEditingId(slide.id || slide.badge);
    setFormData({
      badge: slide.badge || '',
      headline: slide.headline || '',
      sub: slide.sub || '',
      url: slide.url || ''
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
      alert('You must keep at least 1 Hero slide active.');
      return;
    }
    if (window.confirm('Are you sure you want to remove this slide from the Hero Banner?')) {
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
            Add, update, or remove hero banner slides. Changes update live across the home page immediately.
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

      {isEditing && (
        <form onSubmit={handleSave} style={{
          background: '#f8fafc', border: '2px solid #cbd5e1', borderRadius: '14px',
          padding: '24px', marginBottom: '28px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '1.1rem', fontWeight: 800, color: '#000648' }}>
            {editingId ? 'Edit Hero Slide' : 'Create New Hero Banner Slide'}
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label htmlFor="hero_badge_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                Badge Label (Category Tag)
              </label>
              <input
                id="hero_badge_input"
                type="text"
                value={formData.badge}
                onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                placeholder="e.g. Cloud & DevOps Masterclass"
                style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.875rem' }}
                required
              />
            </div>

            <div>
              <label htmlFor="hero_url_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                Image Source / URL
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  id="hero_url_input"
                  type="text"
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  placeholder="Image path or URL"
                  style={{ flex: 1, padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.875rem' }}
                  required
                />
                <button
                  type="button"
                  onClick={() => setIsImagePickerOpen(true)}
                  aria-label="Choose image from picker"
                  style={{
                    padding: '10px 14px', background: '#115DFC', color: '#fff', border: 'none',
                    borderRadius: '8px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px'
                  }}
                >
                  <HiPhotograph size={16} /> Choose
                </button>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="hero_headline_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
              Headline Text
            </label>
            <input
              id="hero_headline_input"
              type="text"
              value={formData.headline}
              onChange={(e) => setFormData({ ...formData, headline: e.target.value })}
              placeholder="e.g. Deploy, Automate, and Scale Like a Real DevOps Engineer"
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.875rem' }}
              required
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="hero_sub_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
              Sub-description Text
            </label>
            <textarea
              id="hero_sub_input"
              rows={2}
              value={formData.sub}
              onChange={(e) => setFormData({ ...formData, sub: e.target.value })}
              placeholder="Detailed summary line shown below headline..."
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.875rem' }}
              required
            />
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              aria-label="Cancel editing"
              style={{ padding: '10px 18px', background: '#e2e8f0', color: '#475569', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}
            >
              Cancel
            </button>
            <button
              type="submit"
              aria-label="Save slide"
              style={{ padding: '10px 22px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <HiCheck size={18} /> Save Slide
            </button>
          </div>
        </form>
      )}

      <div style={{ display: 'grid', gap: '16px' }}>
        {heroSlides.map((slide, idx) => {
          const keyId = slide.id || slide.headline || slide.badge;
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
                  src={slide.url}
                  alt={slide.headline || slide.badge || 'Hero Slide Image'}
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
                <div style={{
                  display: 'inline-block', background: '#e0e7ff', color: '#3730a3',
                  fontSize: '0.7rem', fontWeight: 800, padding: '2px 8px', borderRadius: '50px', marginBottom: '6px'
                }}>
                  {slide.badge}
                </div>
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
                  aria-label={`Edit slide ${slide.badge}`}
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
                  onClick={() => handleDelete(slide.id || slide.badge)}
                  aria-label={`Delete slide ${slide.badge}`}
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
        onSelectImage={(url, position, fit) => setFormData((prev) => ({ ...prev, url, position: position || 'center center', fit: fit || 'cover' }))}
        targetArea="Hero Slide Banner"
        aspectRatio="Rectangle / Widescreen (16:9)"
        recommendedDimensions="1200 x 675 px"
      />
    </div>
  );
}
