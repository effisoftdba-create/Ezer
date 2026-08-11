import React, { useState } from 'react';
import { useSiteData } from '../context/SiteContext';
import ImagePickerModal from './ImagePickerModal';
import PopupBannerPhotoControls from './PopupBannerPhotoControls';
import PopupFormFieldsManager from './PopupFormFieldsManager';
import PopupLivePreviewBox from './PopupLivePreviewBox';
import { HiCheck, HiSparkles, HiCode } from 'react-icons/hi';

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
    showPhoto: true,
    bodyBgImage: 'images/hero/hero_section_1.jpg',
    bodyBgOpacity: 15,
    showStateCity: true,
    nameLabel: 'Full Name*',
    emailLabel: 'Email Address*',
    phoneLabel: 'Mobile Number*',
    countryLabel: 'Country',
    courseLabel: 'Target Course*',
    termsLabel: 'I hereby accept and agree to the terms and conditions and privacy policy of EZER Learning Solutions.',
    coursesList: [
      'Cloud DevOps with AI',
      'Software Testing – Playwright',
      'AI & Machine Learning',
      'IT Infrastructure & System Administration'
    ],
    countriesList: [
      'India',
      'United States',
      'UAE',
      'Singapore',
      'Other'
    ]
  });

  const [pickerTarget, setPickerTarget] = useState(null);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [showCodeModal, setShowCodeModal] = useState(false);

  const [previewFormData, setPreviewFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: 'India',
    state: '',
    city: '',
    course: 'Cloud DevOps with AI',
    agreeTerms: true
  });

  const handleSave = (e) => {
    e.preventDefault();
    updatePopupConfig(formData);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3500);
  };

  return (
    <div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: '24px', paddingBottom: '16px', borderBottom: '1.5px solid #e2e8f0'
      }}>
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#000648', margin: 0 }}>
            Lead Registration Popup & Form Fields Manager
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
            Customize title, subtitle, header photo, body watermark opacity, field labels, state/city toggles, and dropdown options.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button
            type="button"
            aria-label="Sync and export popup config JSON"
            onClick={() => setShowCodeModal(true)}
            style={{
              padding: '8px 14px', background: '#f1f5f9', border: '1px solid #cbd5e1',
              color: '#000648', borderRadius: '8px', fontWeight: 800, fontSize: '0.8rem',
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px'
            }}
          >
            <HiCode size={16} /> Sync / Export JSON
          </button>

          {saveSuccess && (
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#166534', background: '#dcfce7', padding: '6px 14px', borderRadius: '50px' }}>
              Saved & Live!
            </span>
          )}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '24px', alignItems: 'start' }}>
        
        {/* LEFT COLUMN: EDITOR FORM */}
        <form onSubmit={handleSave} style={{
          background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '16px', padding: '24px',
          boxShadow: '0 4px 16px rgba(0,6,72,0.06)'
        }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '1.05rem', fontWeight: 800, color: '#000648', display: 'flex', alignItems: 'center', gap: '8px' }}>
            Modal Headers & Submit Button Text
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

          {/* Watermark Background Photo Controls */}
          <PopupBannerPhotoControls
            formData={formData}
            setFormData={setFormData}
            onOpenBodyPicker={() => setPickerTarget('body')}
          />

          {/* Form Fields & Dropdown Options Manager */}
          <PopupFormFieldsManager
            formData={formData}
            setFormData={setFormData}
          />

          <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '16px', borderTop: '1px solid #e2e8f0' }}>
            <button
              type="submit"
              aria-label="Save all popup configuration changes button"
              style={{
                padding: '12px 28px', background: '#000648', color: '#f2b733',
                border: 'none', borderRadius: '10px', fontWeight: 900, cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem',
                boxShadow: '0 4px 14px rgba(0,6,72,0.2)'
              }}
            >
              <HiCheck size={20} /> Save All Popup Changes
            </button>
          </div>
        </form>

        {/* RIGHT COLUMN: FULL HIGH DEFINITION REALTIME LIVE PREVIEW */}
        <PopupLivePreviewBox
          formData={formData}
          previewFormData={previewFormData}
          setPreviewFormData={setPreviewFormData}
        />
      </div>

      {/* Image Picker Modal */}
      <ImagePickerModal
        isOpen={Boolean(pickerTarget)}
        onClose={() => setPickerTarget(null)}
        currentImage={pickerTarget === 'header' ? formData.image : (formData.bodyBgImage || formData.image)}
        currentPosition={formData.imagePosition}
        currentFit={formData.imageFit}
        onSelectImage={(url, pos, fit, zoom) => {
          setFormData((prev) => ({
            ...prev,
            image: url,
            bodyBgImage: url,
            imagePosition: pos || 'center center',
            imageFit: fit || 'cover',
            imageZoom: zoom || 1,
            bodyBgPosition: pos || 'center center',
            bodyBgFit: fit || 'cover',
            bodyBgZoom: zoom || 1
          }));
        }}

        targetArea="Popup Form Body Watermark Photo"
        aspectRatio="Portrait / Vertical (3:4)"
        recommendedDimensions="600 x 800 px"
      />

      {/* Export JSON Sync Modal */}
      {showCodeModal && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,6,72,0.8)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'
        }}>
          <div style={{ background: '#fff', borderRadius: '16px', padding: '24px', maxWidth: '600px', width: '100%' }}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '1.1rem', color: '#000648' }}>Popup Config Data (JSON Sync)</h3>
            <p style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '12px' }}>
              Copy this JSON configuration to save into your project defaults or sync across devices.
            </p>
            <textarea
              readOnly
              rows={12}
              aria-label="Export JSON Popup Configuration Data"
              value={JSON.stringify(formData, null, 2)}
              style={{ width: '100%', fontFamily: 'monospace', fontSize: '0.78rem', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1' }}
            />
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '16px' }}>
              <button
                type="button"
                aria-label="Copy JSON code button"
                onClick={() => {
                  navigator.clipboard.writeText(JSON.stringify(formData, null, 2));
                  alert('Popup Configuration JSON copied to clipboard!');
                }}
                style={{ padding: '8px 16px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer' }}
              >
                Copy JSON
              </button>
              <button
                type="button"
                aria-label="Close export modal button"
                onClick={() => setShowCodeModal(false)}
                style={{ padding: '8px 16px', background: '#e2e8f0', color: '#475569', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
