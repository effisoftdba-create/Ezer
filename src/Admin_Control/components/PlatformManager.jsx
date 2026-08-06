import React, { useState } from 'react';
import { useSiteData } from '../context/SiteContext';
import ImagePickerModal from './ImagePickerModal';
import { HiCheck, HiPhotograph, HiSparkles } from 'react-icons/hi';

export default function PlatformManager() {
  const { ezerDefinition, updateEzerDefinition } = useSiteData();
  const [formData, setFormData] = useState(ezerDefinition);
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
        <div style={{ marginBottom: '24px', display: 'grid', gridTemplateColumns: '340px 1fr', gap: '24px', alignItems: 'center' }}>
          <div>
            <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#000648', marginBottom: '8px' }}>
              Live Executive Showcase Preview (3 Glass Cards: CEO, CFO, CTHM)
            </span>
            
            {/* Live Glass Stack Preview matching EzerDefinition.jsx */}
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '16px 12px', background: '#050b1c', borderRadius: '16px', border: '1.5px solid #cbd5e1' }}>
              <div 
                style={{
                  position: 'absolute', top: '4px', left: '5%', width: '90%', height: '95%',
                  background: 'linear-gradient(135deg, rgba(242, 183, 51, 0.22) 0%, rgba(0, 6, 72, 0.08) 100%)',
                  clipPath: 'polygon(15% 0%, 100% 10%, 85% 100%, 0% 85%)', borderRadius: '14px', zIndex: 1
                }} 
              />
              <div 
                style={{
                  position: 'absolute', top: '10px', right: '2%', width: '80%', height: '90%',
                  border: '2px solid #f2b733', clipPath: 'polygon(20% 0%, 100% 20%, 80% 100%, 0% 80%)',
                  borderRadius: '14px', zIndex: 1
                }} 
              />

              <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '16px 0' }}>
                <div style={{ display: 'flex', margin: '0 -24px' }}>
                  <div style={{ width: '80px', height: '96px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #f2b733', boxShadow: '0 8px 16px rgba(0,0,0,0.4)', transform: 'rotate(-10deg)', background: '#000648' }}>
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300" alt="CEO" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ width: '80px', height: '96px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #f2b733', boxShadow: '0 8px 16px rgba(0,0,0,0.4)', transform: 'rotate(2deg)', margin: '0 -20px', zIndex: 3, background: '#000648' }}>
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300" alt="CFO" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ width: '80px', height: '96px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #f2b733', boxShadow: '0 8px 16px rgba(0,0,0,0.4)', transform: 'rotate(12deg)', background: '#000648' }}>
                    <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300" alt="CTHM" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
              </div>

              <span style={{ position: 'relative', zIndex: 3, fontSize: '0.72rem', color: '#f2b733', fontWeight: 800, textAlign: 'center', marginTop: '6px' }}>
                Executive Board: CEO • CFO • CTHM
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
              Click <strong>Choose Photo</strong> to select or crop your picture with live 4:3 landscape ratio matching the live website display.
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
        aspectRatio="Landscape / Rounded (4:3)"
        recommendedDimensions="800 x 600 px"
      />
    </div>
  );
}
