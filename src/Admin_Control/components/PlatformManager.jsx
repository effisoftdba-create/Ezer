import React, { useState } from 'react';
import { useSiteData } from '../context/SiteContext';
import ImagePickerModal from './ImagePickerModal';
import { resolveImageSrc } from '../../utils/imageUtils';
import { HiCheck, HiPhotograph, HiSparkles } from 'react-icons/hi';

export default function PlatformManager() {
  const { ezerDefinition, updateEzerDefinition } = useSiteData();
  const safeDef = (ezerDefinition && typeof ezerDefinition === 'object') ? ezerDefinition : {};
  const [formData, setFormData] = useState({
    tag: safeDef.tag || 'Empowering Career Switchers',
    headline: safeDef.headline || 'Leading EdTech Platform for Learning in Native Languages & Real IT Skills.',
    description: safeDef.description || '',
    image: safeDef.image || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=700&h=800',
    acronymText: safeDef.acronymText || '',
    imageFit: safeDef.imageFit || 'cover',
    imagePosition: safeDef.imagePosition || 'center center'
  });
  const [isImagePickerOpen, setIsImagePickerOpen] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEzerDefinition(formData);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: '24px', paddingBottom: '16px', borderBottom: '1.5px solid #e2e8f0'
      }}>
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#000648', margin: 0 }}>
            "Why EZER" Platform Definition Showcase
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
            Edit the main platform headline, description text, acronym banner, and featured section image.
          </p>
        </div>
      </div>

      {saveSuccess && (
        <div style={{
          padding: '12px 16px', background: '#f0fdf4', border: '1px solid #86efac',
          color: '#166534', borderRadius: '8px', marginBottom: '20px', fontWeight: 700,
          display: 'flex', alignItems: 'center', gap: '8px'
        }}>
          <HiCheck size={18} /> Platform definition updated successfully! Changes are live on the Home page.
        </div>
      )}

      <form onSubmit={handleSubmit} style={{
        background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '14px',
        padding: '24px', boxShadow: '0 4px 14px rgba(0,0,0,0.02)'
      }}>
        {/* Main Section Showcase Preview Matching Live Website Graphic */}
        <div style={{ marginBottom: '24px', display: 'grid', gridTemplateColumns: '260px 1fr', gap: '24px', alignItems: 'center' }}>
          <div>
            <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#000648', marginBottom: '8px' }}>
              Live Section Portrait Photo Preview (4:5 Ratio)
            </span>
            
            {/* Live Showcase Single Photo Preview matching EzerDefinition.jsx vertical portrait card */}
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '16px 12px', background: '#050b1c', borderRadius: '16px', border: '1.5px solid #cbd5e1' }}>
              <div 
                style={{
                  position: 'relative', zIndex: 2, width: '100%', maxWidth: '200px',
                  aspectRatio: '4 / 5', height: '250px',
                  borderRadius: '16px', overflow: 'hidden', border: '2.5px solid #000648',
                  boxShadow: '0 12px 28px rgba(0,0,0,0.3)', background: '#ffffff'
                }}
              >
                <img 
                  src={resolveImageSrc(formData.image)} 
                  alt={formData.headline} 
                  style={{ width: '100%', height: '100%', objectFit: formData.imageFit || 'cover', objectPosition: formData.imagePosition || 'center center', display: 'block' }} 
                />
              </div>
              <span style={{ position: 'relative', zIndex: 3, fontSize: '0.72rem', color: '#f2b733', fontWeight: 800, textAlign: 'center', marginTop: '10px' }}>
                Live Section Portrait Photo Preview
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="platform_photo_url" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
              Section Photo Source / URL
            </label>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
              <input
                id="platform_photo_url"
                type="text"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                placeholder="Image URL or local path"
                style={{ flex: 1, padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.875rem' }}
                required
              />
              <button
                type="button"
                onClick={() => setIsImagePickerOpen(true)}
                aria-label="Choose photo from gallery"
                style={{
                  padding: '10px 16px', background: '#115DFC', color: '#fff', border: 'none',
                  borderRadius: '8px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px'
                }}
              >
                <HiPhotograph size={16} /> Choose Photo
              </button>
            </div>
            <p style={{ fontSize: '0.78rem', color: '#64748b', margin: 0, lineHeight: 1.4 }}>
              Click <strong>Choose Photo</strong> to select or crop your picture with vertical portrait (4:5 ratio) matching the live website display.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
          <div>
            <label htmlFor="platform_tag_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
              Section Tag / Badge
            </label>
            <input
              id="platform_tag_input"
              type="text"
              value={formData.tag}
              onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
              placeholder="e.g. Empowering Career Switchers"
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.875rem' }}
              required
            />
          </div>

          <div>
            <label htmlFor="platform_acronym_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
              EZER Acronym Banner Text
            </label>
            <input
              id="platform_acronym_input"
              type="text"
              value={formData.acronymText}
              onChange={(e) => setFormData({ ...formData, acronymText: e.target.value })}
              placeholder="e.g. EZER — Empowering Zero-to-Hero Education..."
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.875rem' }}
              required
            />
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="platform_headline_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
            Main Section Headline
          </label>
          <input
            id="platform_headline_input"
            type="text"
            value={formData.headline}
            onChange={(e) => setFormData({ ...formData, headline: e.target.value })}
            placeholder="e.g. Leading EdTech Platform for Learning in Native Languages..."
            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.875rem' }}
            required
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="platform_description_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
            Full Description Text
          </label>
          <textarea
            id="platform_description_input"
            rows={3}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Detailed description of EZER Learning Solution..."
            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.875rem' }}
            required
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button
            type="submit"
            aria-label="Save platform definition changes"
            style={{
              padding: '12px 28px', background: '#000648', color: '#f2b733',
              border: 'none', borderRadius: '10px', fontWeight: 800, fontSize: '0.9rem',
              cursor: 'pointer', boxShadow: '0 4px 14px rgba(0,6,72,0.2)', display: 'flex', alignItems: 'center', gap: '8px'
            }}
          >
            <HiSparkles size={18} /> Update Platform Showcase
          </button>
        </div>
      </form>

      <ImagePickerModal
        isOpen={isImagePickerOpen}
        onClose={() => setIsImagePickerOpen(false)}
        currentImage={formData.image}
        currentPosition={formData.position}
        currentFit={formData.fit}
        onSelectImage={(url, pos, fit) => setFormData((prev) => ({ ...prev, image: url, position: pos || 'center center', fit: fit || 'cover' }))}
        targetArea="Platform Showcase Main Photo"
        aspectRatio="Portrait / Vertical (4:5)"
        recommendedDimensions="600 x 750 px"
      />
    </div>
  );
}
