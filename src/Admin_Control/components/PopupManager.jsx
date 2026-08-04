import React, { useState } from 'react';
import { useSiteData } from '../context/SiteContext';
import ImagePickerModal from './ImagePickerModal';
import PopupHeader from '../../components/popup/PopupHeader';
import PopupBannerPhotoControls from './PopupBannerPhotoControls';
import { HiCheck, HiSparkles, HiEye } from 'react-icons/hi';

export default function PopupManager() {
  const { popupConfig, updatePopupConfig } = useSiteData();

  const [formData, setFormData] = useState(popupConfig || {
    title: 'Register For Free Demo',
    subtitle: 'Book your free live demo class & 1-on-1 career counselling session',
    badge: 'LIMITED SEATS AVAILABLE',
    submitBtnText: 'Register Now',
    image: 'images/hero/hero_section_1.jpg',
    imagePosition: 'center center',
    imageFit: 'cover',
    photoVisibility: 85,
    photoHeight: 120,
    showPhoto: true
  });

  const [isImagePickerOpen, setIsImagePickerOpen] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    updatePopupConfig(formData);
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
            Lead Registration Popup Manager
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
            Customize headline text, banner photo, photo visibility opacity, height, and button labels for the lead modal.
          </p>
        </div>

        {saveSuccess && (
          <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#166534', background: '#dcfce7', padding: '6px 14px', borderRadius: '50px' }}>
            Popup Configuration Saved Live!
          </span>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '24px', alignItems: 'start' }}>
        
        {/* LEFT COLUMN: EDITOR FORM */}
        <form onSubmit={handleSave} style={{
          background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '16px', padding: '24px',
          boxShadow: '0 4px 16px rgba(0,6,72,0.06)'
        }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '1.05rem', fontWeight: 800, color: '#000648', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <HiSparkles color="#f2b733" size={20} /> Popup Modal Text & Photo Controls
          </h3>

          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="popup_title_input" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '4px' }}>
              Popup Headline Title *
            </label>
            <input
              id="popup_title_input"
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
              placeholder="e.g. Register For Free Demo"
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.875rem' }}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="popup_sub_input" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '4px' }}>
              Subtitle / Description Line
            </label>
            <input
              id="popup_sub_input"
              type="text"
              value={formData.subtitle}
              onChange={(e) => setFormData((prev) => ({ ...prev, subtitle: e.target.value }))}
              placeholder="e.g. Book your free live demo class & 1-on-1 career counselling session"
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.875rem' }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label htmlFor="popup_badge_input" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '4px' }}>
                Badge Tagline Text
              </label>
              <input
                id="popup_badge_input"
                type="text"
                value={formData.badge}
                onChange={(e) => setFormData((prev) => ({ ...prev, badge: e.target.value }))}
                placeholder="e.g. LIMITED SEATS AVAILABLE"
                style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.875rem' }}
              />
            </div>

            <div>
              <label htmlFor="popup_btn_input" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '4px' }}>
                Submit Button Label
              </label>
              <input
                id="popup_btn_input"
                type="text"
                value={formData.submitBtnText}
                onChange={(e) => setFormData((prev) => ({ ...prev, submitBtnText: e.target.value }))}
                placeholder="e.g. Register Now"
                style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.875rem' }}
              />
            </div>
          </div>

          <PopupBannerPhotoControls
            formData={formData}
            setFormData={setFormData}
            onOpenImagePicker={() => setIsImagePickerOpen(true)}
          />

          <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '12px', borderTop: '1px solid #e2e8f0' }}>
            <button
              type="submit"
              style={{
                padding: '10px 24px', background: '#000648', color: '#f2b733',
                border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '6px'
              }}
            >
              <HiCheck size={18} /> Save Popup Configuration
            </button>
          </div>
        </form>

        {/* RIGHT COLUMN: REALTIME LIVE PREVIEW */}
        <div>
          <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#000648', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <HiEye color="#115DFC" size={18} /> Live Popup Preview (Updates in Realtime)
          </div>

          <div style={{
            background: 'rgba(0, 6, 72, 0.82)', backdropFilter: 'blur(4px)',
            borderRadius: '20px', padding: '20px', display: 'flex', justifyContent: 'center'
          }}>
            <div style={{
              background: '#ffffff', borderRadius: '16px', width: '100%', maxWidth: '360px',
              border: '3px solid #000648', outline: '2px solid #f2b733', outlineOffset: '-5px',
              overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
            }}>
              <PopupHeader onClose={() => {}} overrideConfig={formData} />

              <div style={{ padding: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', opacity: 0.65, pointerEvents: 'none' }}>
                  <div style={{ height: '32px', background: '#f1f5f9', borderRadius: '6px', border: '1px solid #cbd5e1' }} />
                  <div style={{ height: '32px', background: '#f1f5f9', borderRadius: '6px', border: '1px solid #cbd5e1' }} />
                  <div style={{ height: '32px', background: '#f1f5f9', borderRadius: '6px', border: '1px solid #cbd5e1' }} />
                  <div style={{
                    height: '38px', background: '#000648', color: '#f2b733',
                    borderRadius: '8px', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontWeight: 900, fontSize: '0.85rem'
                  }}>
                    {formData.submitBtnText || 'Register Now'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ImagePickerModal
        isOpen={isImagePickerOpen}
        onClose={() => setIsImagePickerOpen(false)}
        currentImage={formData.image}
        currentPosition={formData.imagePosition}
        currentFit={formData.imageFit}
        onSelectImage={(url, pos, fit) => {
          setFormData((prev) => ({
            ...prev,
            image: url,
            imagePosition: pos || 'center center',
            imageFit: fit || 'cover'
          }));
        }}
        targetArea="Lead Registration Popup Banner Photo"
        aspectRatio="Rectangle (16:9)"
        recommendedDimensions="800 x 450 px"
      />
    </div>
  );
}
