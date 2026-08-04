import React from 'react';
import PopupHeader from '../../components/popup/PopupHeader';
import PopupFormFields from '../../components/popup/PopupFormFields';
import { resolveImageSrc } from '../../utils/imageUtils';
import { HiEye } from 'react-icons/hi';

export default function PopupLivePreviewBox({ formData, previewFormData, setPreviewFormData }) {
  const bgOpacity = formData.bodyBgOpacity !== undefined ? formData.bodyBgOpacity : 15;
  const overlayAlpha = (100 - bgOpacity) / 100;
  const bodyBgUrl = resolveImageSrc(formData.bodyBgImage || formData.image || 'images/hero/hero_section_1.jpg');

  return (
    <div>
      <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#000648', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
        <HiEye color="#115DFC" size={18} /> Full Realtime Popup Preview (Exact Modal Details)
      </div>

      <div style={{
        background: 'rgba(0, 6, 72, 0.85)', backdropFilter: 'blur(4px)',
        borderRadius: '20px', padding: '20px', display: 'flex', justifyContent: 'center'
      }}>
        <div style={{
          background: `linear-gradient(rgba(255, 255, 255, ${overlayAlpha}), rgba(255, 255, 255, ${overlayAlpha})), url("${bodyBgUrl}")`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          borderRadius: '16px', width: '100%', maxWidth: '400px',
          border: '3px solid #000648', outline: '2px solid #f2b733', outlineOffset: '-5px',
          overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
        }}>
          <PopupHeader onClose={() => {}} overrideConfig={formData} />

          <div style={{ padding: '18px 20px', maxHeight: '520px', overflowY: 'auto' }}>
            <PopupFormFields
              formData={previewFormData}
              handleChange={(e) => setPreviewFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
              handleSubmit={(e) => e.preventDefault()}
              status={{ submitting: false, error: '' }}
              overrideConfig={formData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
