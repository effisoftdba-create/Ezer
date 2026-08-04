import React, { useState } from 'react';
import PopupHeader from './popup/PopupHeader';
import PopupSuccessState from './popup/PopupSuccessState';
import PopupFormFields from './popup/PopupFormFields';
import { useSiteData } from '../Admin_Control/context/SiteContext';
import { resolveImageSrc } from '../utils/imageUtils';

const GOOGLE_SHEETS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz_EXAMPLE_DEPLOYMENT_ID/exec';

export default function PopupForm({ isOpen, onClose, defaultCourse = '' }) {
  const siteData = useSiteData();
  const [formData, setFormData] = useState(() => ({
    name: '',
    email: '',
    phone: '',
    country: 'India',
    state: '',
    city: '',
    course: defaultCourse || 'Cloud DevOps with AI',
    agreeTerms: true,
  }));

  const [status, setStatus] = useState({ submitting: false, success: false, error: '' });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      setStatus({ submitting: false, success: false, error: 'Please accept terms and conditions.' });
      return;
    }

    setStatus({ submitting: true, success: false, error: '' });

    try {
      const existingLeads = JSON.parse(localStorage.getItem('ezer_leads:v1') || '[]');
      existingLeads.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('ezer_leads:v1', JSON.stringify(existingLeads));

      const formPayload = new FormData();
      formPayload.append('Name', formData.name);
      formPayload.append('Email', formData.email);
      formPayload.append('Phone', formData.phone);
      formPayload.append('Country', formData.country);
      formPayload.append('State', formData.state);
      formPayload.append('City', formData.city);
      formPayload.append('Course', formData.course);
      formPayload.append('Timestamp', new Date().toLocaleString());

      fetch(GOOGLE_SHEETS_SCRIPT_URL, {
        method: 'POST',
        body: formPayload,
        mode: 'no-cors',
      }).catch((err) => console.log('Google Sheets Sync (Fallback logged locally):', err));

      setStatus({ submitting: false, success: true, error: '' });
      sessionStorage.setItem('ezer_popup_submitted', 'true');
    } catch (err) {
      console.error(err);
      setStatus({ submitting: false, success: false, error: 'Failed to submit. Please try again.' });
    }
  };

  const popupConfig = siteData?.popupConfig || {};
  const bgOpacity = popupConfig.bodyBgOpacity !== undefined ? popupConfig.bodyBgOpacity : 15;
  const overlayAlpha = (100 - bgOpacity) / 100;
  const bgImgUrl = resolveImageSrc(popupConfig.bodyBgImage || popupConfig.image || 'images/hero/hero_section_1.jpg');

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        background: 'rgba(0, 6, 72, 0.82)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '12px',
        animation: 'fadeIn 0.3s ease',
      }}
    >
      <div
        style={{
          background: `linear-gradient(rgba(255, 255, 255, ${overlayAlpha}), rgba(255, 255, 255, ${overlayAlpha})), url("${bgImgUrl}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '16px',
          width: '100%',
          maxWidth: 'min(440px, 94vw)',
          boxShadow: '0 25px 60px rgba(0, 6, 72, 0.45)',
          position: 'relative',
          border: '3px solid #000648',
          outline: '2px solid #f2b733',
          outlineOffset: '-5px',
          overflow: 'hidden',
          animation: 'modalPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        <div style={{ maxHeight: 'calc(90vh - 24px)', overflowY: 'auto' }}>
          <PopupHeader onClose={onClose} overrideConfig={popupConfig} />
          <div style={{ padding: 'clamp(16px, 4vw, 22px)' }}>
            {status.success ? (
              <PopupSuccessState onClose={onClose} />
            ) : (
              <PopupFormFields
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                status={status}
                overrideConfig={popupConfig}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
