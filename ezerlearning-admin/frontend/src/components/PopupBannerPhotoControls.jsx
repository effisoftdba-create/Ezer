import React from 'react';
import { HiPhotograph, HiEye, HiTemplate } from 'react-icons/hi';

export default function PopupBannerPhotoControls({ formData, setFormData, onOpenBodyPicker }) {
  return (
    <div style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '12px', padding: '16px', marginBottom: '16px' }}>
      <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#000648', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
        <HiTemplate color="#115DFC" size={18} /> Form Body Watermark Background Photo & Visibility
      </div>

      <div style={{ marginBottom: '12px' }}>
        <label htmlFor="body_bg_image_input" style={{ fontSize: '0.78rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
          Watermark Photo Source URL or Upload
        </label>
        <div style={{ display: 'flex', gap: '8px' }}>
          <input
            id="body_bg_image_input"
            type="text"
            value={formData.bodyBgImage || formData.image || ''}
            onChange={(e) => setFormData((prev) => ({ ...prev, bodyBgImage: e.target.value }))}
            placeholder="e.g. images/hero/hero_section_1.jpg"
            style={{ flex: 1, padding: '8px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
          />
          <button
            type="button"
            onClick={onOpenBodyPicker}
            style={{ padding: '8px 14px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem' }}
          >
            <HiPhotograph size={16} /> Choose Photo
          </button>
        </div>
      </div>

      {/* Form Body Watermark Visibility Opacity Slider */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
          <label htmlFor="body_bg_opacity_slider" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#000648', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <HiEye color="#115DFC" size={15} /> Photo Visibility / Opacity Level
          </label>
          <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#115DFC', background: '#e0e7ff', padding: '2px 8px', borderRadius: '4px' }}>
            {formData.bodyBgOpacity !== undefined ? formData.bodyBgOpacity : 15}%
          </span>
        </div>
        <input
          id="body_bg_opacity_slider"
          aria-label="Watermark background photo visibility slider"
          type="range"
          min="0"
          max="100"
          step="5"
          value={formData.bodyBgOpacity !== undefined ? formData.bodyBgOpacity : 15}
          onChange={(e) => setFormData((prev) => ({ ...prev, bodyBgOpacity: parseInt(e.target.value, 10) }))}
          style={{ width: '100%', accentColor: '#115DFC', cursor: 'pointer' }}
        />
        <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '3px' }}>
          0% = solid white form background. 100% = full vivid background photo showing behind fields.
        </div>
      </div>
    </div>
  );
}
