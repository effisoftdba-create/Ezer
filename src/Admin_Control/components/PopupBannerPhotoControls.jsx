import React from 'react';
import { HiPhotograph, HiEye, HiAdjustments, HiTemplate } from 'react-icons/hi';

export default function PopupBannerPhotoControls({ formData, setFormData, onOpenHeaderPicker, onOpenBodyPicker }) {
  return (
    <div>
      {/* SECTION 1: HEADER BANNER PHOTO */}
      <div style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '12px', padding: '16px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#000648', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <HiPhotograph color="#115DFC" size={18} /> Top Header Photo Banner Settings
          </span>
          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 800, color: '#000648', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={formData.showPhoto}
              onChange={(e) => setFormData((prev) => ({ ...prev, showPhoto: e.target.checked }))}
              style={{ accentColor: '#000648', width: '16px', height: '16px' }}
            />
            Show Header Photo
          </label>
        </div>

        {formData.showPhoto && (
          <>
            <div style={{ marginBottom: '12px' }}>
              <label htmlFor="popup_image_url" style={{ fontSize: '0.78rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                Header Photo URL or Upload
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  id="popup_image_url"
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData((prev) => ({ ...prev, image: e.target.value }))}
                  style={{ flex: 1, padding: '8px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
                />
                <button
                  type="button"
                  onClick={onOpenHeaderPicker}
                  style={{ padding: '8px 14px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem' }}
                >
                  <HiPhotograph size={16} /> Choose Header Photo
                </button>
              </div>
            </div>

            {/* Header Photo Visibility Opacity Slider */}
            <div style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <label htmlFor="photo_visibility_slider" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#000648', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <HiEye color="#115DFC" size={15} /> Header Photo Visibility / Opacity
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
            </div>

            {/* Header Banner Height Slider */}
            <div style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <label htmlFor="photo_height_slider" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#000648', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <HiAdjustments color="#115DFC" size={15} /> Header Banner Height
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
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                Header Fit Mode (Crop vs Full Image)
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, imageFit: 'cover' }))}
                  style={{
                    flex: 1, padding: '6px 10px', borderRadius: '6px',
                    border: formData.imageFit === 'cover' ? '2px solid #115DFC' : '1px solid #cbd5e1',
                    background: formData.imageFit === 'cover' ? '#000648' : '#ffffff',
                    color: formData.imageFit === 'cover' ? '#f2b733' : '#334155',
                    fontWeight: 800, fontSize: '0.75rem', cursor: 'pointer'
                  }}
                >
                  Cover (Fill)
                </button>
                <button
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, imageFit: 'contain' }))}
                  style={{
                    flex: 1, padding: '6px 10px', borderRadius: '6px',
                    border: formData.imageFit === 'contain' ? '2px solid #115DFC' : '1px solid #cbd5e1',
                    background: formData.imageFit === 'contain' ? '#000648' : '#ffffff',
                    color: formData.imageFit === 'contain' ? '#f2b733' : '#334155',
                    fontWeight: 800, fontSize: '0.75rem', cursor: 'pointer'
                  }}
                >
                  Contain (Full)
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* SECTION 2: FORM BODY WATERMARK BACKGROUND PHOTO */}
      <div style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '12px', padding: '16px', marginBottom: '16px' }}>
        <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#000648', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <HiTemplate color="#115DFC" size={18} /> Form Body Watermark Background Photo
        </div>

        <div style={{ marginBottom: '12px' }}>
          <label htmlFor="body_bg_image_input" style={{ fontSize: '0.78rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
            Watermark Photo Source URL
          </label>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input
              id="body_bg_image_input"
              type="text"
              value={formData.bodyBgImage || formData.image}
              onChange={(e) => setFormData((prev) => ({ ...prev, bodyBgImage: e.target.value }))}
              style={{ flex: 1, padding: '8px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
            />
            <button
              type="button"
              onClick={onOpenBodyPicker}
              style={{ padding: '8px 14px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem' }}
            >
              <HiPhotograph size={16} /> Choose Watermark Photo
            </button>
          </div>
        </div>

        {/* Form Body Watermark Visibility Opacity Slider */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
            <label htmlFor="body_bg_opacity_slider" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#000648', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <HiEye color="#115DFC" size={15} /> Watermark Visibility / Opacity
            </label>
            <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#115DFC', background: '#e0e7ff', padding: '2px 8px', borderRadius: '4px' }}>
              {formData.bodyBgOpacity !== undefined ? formData.bodyBgOpacity : 15}%
            </span>
          </div>
          <input
            id="body_bg_opacity_slider"
            type="range"
            min="0"
            max="100"
            step="5"
            value={formData.bodyBgOpacity !== undefined ? formData.bodyBgOpacity : 15}
            onChange={(e) => setFormData((prev) => ({ ...prev, bodyBgOpacity: parseInt(e.target.value, 10) }))}
            style={{ width: '100%', accentColor: '#115DFC', cursor: 'pointer' }}
          />
          <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '2px' }}>
            0% = pure solid white form body background. 100% = full vivid background photo behind form fields!
          </div>
        </div>
      </div>
    </div>
  );
}
