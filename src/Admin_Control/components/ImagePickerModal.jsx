import React, { useState } from 'react';
import { HiX, HiCheck, HiPhotograph, HiUpload } from 'react-icons/hi';

const PRESET_IMAGES = [
  { label: 'Hero Default', url: 'images/hero/hero_section_1.jpg' },
  { label: 'Cloud & DevOps', url: 'images/hero/cloud_deveops.png' },
  { label: 'Software Testing / Playwright', url: 'images/hero/software_testing_playwright.jpg' },
  { label: 'AI & Data Science', url: 'images/hero/AI_machine_learning.png' },
  { label: 'Fullstack Engineering', url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800' },
  { label: 'Cyber Security', url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800' },
  { label: 'Mobile App Dev', url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800' },
  { label: 'Data Analytics & PowerBI', url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' }
];

export default function ImagePickerModal({ isOpen, onClose, onSelectImage, currentImage = '' }) {
  const [selectedUrl, setSelectedUrl] = useState(currentImage);
  const [customUrl, setCustomUrl] = useState('');

  if (!isOpen) return null;

  const handleConfirm = () => {
    const finalUrl = customUrl.trim() || selectedUrl;
    if (finalUrl) {
      onSelectImage(finalUrl);
      onClose();
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert('Image size exceeds 2MB limit for client upload.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setCustomUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      background: 'rgba(0, 6, 72, 0.6)', backdropFilter: 'blur(4px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'
    }}>
      <div style={{
        background: '#ffffff', borderRadius: '16px', width: '100%', maxWidth: '640px',
        maxHeight: '90vh', overflowY: 'auto', padding: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800, color: '#000648', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <HiPhotograph color="#115DFC" /> Select or Upload Image
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close image picker modal"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}
          >
            <HiX size={24} />
          </button>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="custom_image_url_picker" style={{ fontSize: '0.825rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '6px' }}>
            Option 1: Enter Custom Image URL or Upload File
          </label>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input
              id="custom_image_url_picker"
              type="text"
              placeholder="https://example.com/image.jpg or local path"
              value={customUrl}
              onChange={(e) => setCustomUrl(e.target.value)}
              style={{
                flex: 1, padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #cbd5e1',
                fontSize: '0.875rem', outline: 'none'
              }}
            />
            <label htmlFor="image_file_upload_input" style={{
              background: '#f1f5f9', border: '1.5px solid #cbd5e1', padding: '10px 14px',
              borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px',
              fontSize: '0.825rem', fontWeight: 700, color: '#334155'
            }}>
              <HiUpload size={16} /> Upload
              <input id="image_file_upload_input" type="file" accept="image/*" onChange={handleFileUpload} style={{ display: 'none' }} />
            </label>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #e2e8f0', margin: '20px 0' }} />

        <div>
          <span style={{ fontSize: '0.825rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '10px' }}>
            Option 2: Select from Curated Gallery Presets
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '12px' }}>
            {PRESET_IMAGES.map((img) => {
              const isSelected = (customUrl === '' && selectedUrl === img.url) || customUrl === img.url;
              return (
                <button
                  type="button"
                  key={img.label}
                  onClick={() => {
                    setSelectedUrl(img.url);
                    setCustomUrl('');
                  }}
                  aria-label={`Select preset image: ${img.label}`}
                  style={{
                    position: 'relative', borderRadius: '10px', overflow: 'hidden', cursor: 'pointer',
                    border: isSelected ? '3px solid #115DFC' : '1.5px solid #e2e8f0',
                    boxShadow: isSelected ? '0 4px 12px rgba(17, 93, 252, 0.3)' : 'none',
                    height: '90px', background: '#f8fafc', padding: 0, textAlign: 'left'
                  }}
                >
                  <img src={img.url} alt={img.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute', bottom: 0, inset: 'auto 0 0 0', background: 'rgba(0,0,0,0.7)',
                    color: '#fff', fontSize: '0.65rem', padding: '3px 4px', textAlign: 'center', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'
                  }}>
                    {img.label}
                  </div>
                  {isSelected && (
                    <div style={{
                      position: 'absolute', top: '4px', right: '4px', background: '#115DFC', color: '#fff',
                      borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <HiCheck size={14} />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
            Selected: <strong style={{ color: '#000648' }}>{(customUrl || selectedUrl).substring(0, 35)}...</strong>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              type="button"
              onClick={onClose}
              aria-label="Cancel image selection"
              style={{
                padding: '10px 18px', borderRadius: '8px', border: '1.5px solid #cbd5e1',
                background: '#ffffff', color: '#475569', fontWeight: 700, cursor: 'pointer'
              }}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleConfirm}
              aria-label="Confirm image selection"
              style={{
                padding: '10px 20px', borderRadius: '8px', border: 'none',
                background: '#115DFC', color: '#ffffff', fontWeight: 700, cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(17, 93, 252, 0.3)'
              }}
            >
              Confirm Selection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
