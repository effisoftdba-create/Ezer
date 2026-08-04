import React from 'react';
import { HiPhotograph, HiEye, HiAdjustments } from 'react-icons/hi';

export default function PopupBannerPhotoControls({ formData, setFormData, onOpenImagePicker }) {
  return (
    <div style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '12px', padding: '16px', marginBottom: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#000648', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <HiPhotograph color="#115DFC" size={18} /> Header Banner Photo Settings
        </span>
        <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 800, color: '#000648', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={formData.showPhoto}
            onChange={(e) => setFormData((prev) => ({ ...prev, showPhoto: e.target.checked }))}
            style={{ accentColor: '#000648', width: '16px', height: '16px' }}
          />
          Show Banner Photo
        </label>
      </div>

      {formData.showPhoto && (
        <>
          <div style={{ marginBottom: '14px' }}>
            <label htmlFor="popup_image_url" style={{ fontSize: '0.78rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
              Photo Source URL or Upload
            </label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                id="popup_image_url"
                type="text"
                value={formData.image}
                onChange={(e) => setFormData((prev) => ({ ...prev, image: e.target.value }))}
                style={{ flex: 1, padding: '9px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
              />
              <button
                type="button"
                onClick={onOpenImagePicker}
                style={{ padding: '9px 14px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem' }}
              >
                <HiPhotograph size={16} /> Choose Photo
              </button>
            </div>
          </div>

          {/* Photo Visibility Opacity Slider */}
          <div style={{ marginBottom: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <label htmlFor="photo_visibility_slider" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#000648', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <HiEye color="#115DFC" size={15} /> Photo Visibility / Opacity
              </label>
              <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#115DFC', background: '#e0e7ff', padding: '2px 8px', borderRadius: '4px' }}>
                {formData.photoVisibility}%
              </span>
            </div>
            <input
              id="photo_visibility_slider"
              type="range"
              min="10"
              max="100"
              step="5"
              value={formData.photoVisibility}
              onChange={(e) => setFormData((prev) => ({ ...prev, photoVisibility: parseInt(e.target.value, 10) }))}
              style={{ width: '100%', accentColor: '#115DFC', cursor: 'pointer' }}
            />
            <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '2px' }}>
              Controls how clear or transparent the banner photo displays over the navy background.
            </div>
          </div>

          {/* Photo Banner Height Slider */}
          <div style={{ marginBottom: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <label htmlFor="photo_height_slider" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#000648', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <HiAdjustments color="#115DFC" size={15} /> Banner Photo Height
              </label>
              <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#166534', background: '#dcfce7', padding: '2px 8px', borderRadius: '4px' }}>
                {formData.photoHeight}px
              </span>
            </div>
            <input
              id="photo_height_slider"
              type="range"
              min="40"
              max="240"
              step="10"
              value={formData.photoHeight}
              onChange={(e) => setFormData((prev) => ({ ...prev, photoHeight: parseInt(e.target.value, 10) }))}
              style={{ width: '100%', accentColor: '#166534', cursor: 'pointer' }}
            />
          </div>

          {/* Image Fit Mode Buttons */}
          <div>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
              Fit Mode (Crop vs Full Image)
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, imageFit: 'cover' }))}
                style={{
                  flex: 1, padding: '7px 10px', borderRadius: '6px',
                  border: formData.imageFit === 'cover' ? '2px solid #115DFC' : '1px solid #cbd5e1',
                  background: formData.imageFit === 'cover' ? '#000648' : '#ffffff',
                  color: formData.imageFit === 'cover' ? '#f2b733' : '#334155',
                  fontWeight: 800, fontSize: '0.75rem', cursor: 'pointer'
                }}
              >
                Cover (Fill Banner)
              </button>
              <button
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, imageFit: 'contain' }))}
                style={{
                  flex: 1, padding: '7px 10px', borderRadius: '6px',
                  border: formData.imageFit === 'contain' ? '2px solid #115DFC' : '1px solid #cbd5e1',
                  background: formData.imageFit === 'contain' ? '#000648' : '#ffffff',
                  color: formData.imageFit === 'contain' ? '#f2b733' : '#334155',
                  fontWeight: 800, fontSize: '0.75rem', cursor: 'pointer'
                }}
              >
                Contain (Full Image)
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
