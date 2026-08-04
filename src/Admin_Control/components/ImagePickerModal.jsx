import React, { useState, useEffect, useRef } from 'react';
import { HiX, HiPhotograph, HiUpload, HiArrowRight, HiSelector } from 'react-icons/hi';
import { resolveImageSrc } from '../../utils/imageUtils';
import ImagePickerGalleryGrid from './ImagePickerGalleryGrid';
import ImagePickerControls from './ImagePickerControls';

const STORAGE_UPLOADED_IMAGES_KEY = 'ezer_uploaded_images:v1';

const DEFAULT_PRESET_IMAGES = [
  { label: 'Hero Default', url: 'images/hero/hero_section_1.jpg' },
  { label: 'Cloud & DevOps', url: 'images/hero/cloud_deveops.png' },
  { label: 'Software Testing / Playwright', url: 'images/hero/software_testing_playwright.jpg' },
  { label: 'AI & Data Science', url: 'images/hero/AI_machine_learning.png' },
  { label: 'Fullstack Engineering', url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800' },
  { label: 'Cyber Security', url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800' },
  { label: 'Mobile App Dev', url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800' },
  { label: 'Data Analytics & PowerBI', url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' }
];

const POSITION_PRESETS = [
  { label: 'Center', value: 'center center', x: 0, y: 0 },
  { label: 'Top Focus', value: 'center top', x: 0, y: -25 },
  { label: 'Bottom Focus', value: 'center bottom', x: 0, y: 25 },
  { label: 'Left Focus', value: 'left center', x: -25, y: 0 },
  { label: 'Right Focus', value: 'right center', x: 25, y: 0 }
];

export default function ImagePickerModal({
  isOpen,
  onClose,
  onSelectImage,
  currentImage = '',
  currentPosition = 'center center',
  onSelectPosition,
  targetArea = 'Website Image',
  aspectRatio = 'Rectangle (16:9)',
  recommendedDimensions = '1200 x 675 px'
}) {
  const [selectedUrl, setSelectedUrl] = useState(currentImage || DEFAULT_PRESET_IMAGES[0].url);
  const [customUrl, setCustomUrl] = useState('');
  const [position, setPosition] = useState(currentPosition || 'center center');
  const [zoomScale, setZoomScale] = useState(1);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  const [uploadedImages, setUploadedImages] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_UPLOADED_IMAGES_KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_UPLOADED_IMAGES_KEY, JSON.stringify(uploadedImages));
    } catch (e) {}
  }, [uploadedImages]);

  if (!isOpen) return null;

  const activeSelectedUrl = customUrl.trim() || selectedUrl;

  const combinedGalleryImages = [
    ...uploadedImages.map((img) => ({ label: img.label || 'Uploaded Image', url: img.url, isUploaded: true })),
    ...DEFAULT_PRESET_IMAGES
  ];

  const handleConfirm = () => {
    if (activeSelectedUrl) {
      const computedPosStr = (dragOffset.x !== 0 || dragOffset.y !== 0)
        ? `${50 + dragOffset.x}% ${50 + dragOffset.y}%`
        : position;

      onSelectImage(activeSelectedUrl, computedPosStr);
      if (onSelectPosition) onSelectPosition(computedPosStr);
      onClose();
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size exceeds 5MB limit.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUri = reader.result;
        setCustomUrl(dataUri);
        setSelectedUrl(dataUri);
        setUploadedImages((prev) => {
          if (prev.some((img) => img.url === dataUri)) return prev;
          return [{ label: `My Upload ${prev.length + 1}`, url: dataUri, date: new Date().toLocaleTimeString() }, ...prev];
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteUploadedImage = (url, e) => {
    e.stopPropagation();
    setUploadedImages((prev) => prev.filter((img) => img.url !== url));
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX - dragOffset.x, y: e.clientY - dragOffset.y };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const newX = Math.min(50, Math.max(-50, Math.round((e.clientX - dragStartRef.current.x) / 3)));
    const newY = Math.min(50, Math.max(-50, Math.round((e.clientY - dragStartRef.current.y) / 3)));
    setDragOffset({ x: newX, y: newY });
    setPosition(`${50 + newX}% ${50 + newY}%`);
  };

  const handleMouseUp = () => setIsDragging(false);

  const handlePresetPosition = (preset) => {
    setPosition(preset.value);
    setDragOffset({ x: preset.x, y: preset.y });
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      background: 'rgba(0, 6, 72, 0.7)', backdropFilter: 'blur(5px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'
    }}>
      <div style={{
        background: '#ffffff', borderRadius: '16px', width: '100%', maxWidth: '780px',
        maxHeight: '94vh', overflowY: 'auto', padding: '24px', boxShadow: '0 25px 50px rgba(0,0,0,0.3)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800, color: '#000648', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <HiPhotograph color="#115DFC" size={22} /> Upload, Drag to Move & Zoom Image
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

        {/* Aspect Ratio Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #000638 0%, #1e293b 100%)',
          color: '#ffffff', borderRadius: '12px', padding: '10px 16px', marginBottom: '16px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px',
          borderLeft: '4px solid #f2b733'
        }}>
          <div>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#f2b733', fontWeight: 800 }}>
              Target Section: {targetArea}
            </span>
            <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>
              Required Format: <span style={{ color: '#60a5fa' }}>{aspectRatio}</span>
            </div>
          </div>
          <div style={{
            background: 'rgba(242, 183, 51, 0.15)', border: '1px solid #f2b733', color: '#f2b733',
            fontSize: '0.75rem', fontWeight: 800, padding: '4px 10px', borderRadius: '6px'
          }}>
            Rec. Size: {recommendedDimensions}
          </div>
        </div>

        {/* Dual Image Preview */}
        <div style={{
          background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '14px',
          padding: '16px', marginBottom: '20px', display: 'grid', gridTemplateColumns: '1fr auto 1fr',
          gap: '16px', alignItems: 'center'
        }}>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '6px' }}>
              Current Active Image
            </div>
            <div style={{ height: '130px', borderRadius: '10px', overflow: 'hidden', border: '2px solid #cbd5e1', background: '#e2e8f0' }}>
              {currentImage ? (
                <img src={resolveImageSrc(currentImage)} alt="Current active" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: '#94a3b8' }}>
                  No Image Set
                </div>
              )}
            </div>
          </div>

          <div style={{ color: '#000648', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HiArrowRight size={22} />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#115DFC', textTransform: 'uppercase' }}>
                Newly Chosen Image Preview
              </span>
              <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#166534', background: '#dcfce7', padding: '1px 6px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '3px' }}>
                <HiSelector size={12} /> Drag image to move
              </span>
            </div>
            
            <div
              role="region"
              aria-label="Drag image to reposition focal point"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              style={{
                height: '130px', borderRadius: '10px', overflow: 'hidden',
                border: '2.5px solid #115DFC', background: '#000648',
                boxShadow: '0 4px 14px rgba(17,93,252,0.25)', position: 'relative',
                cursor: isDragging ? 'grabbing' : 'grab', userSelect: 'none'
              }}
            >
              <img
                src={resolveImageSrc(activeSelectedUrl)}
                alt="Newly chosen preview"
                style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  objectPosition: `${50 + dragOffset.x}% ${50 + dragOffset.y}%`,
                  transform: `scale(${zoomScale})`, pointerEvents: 'none',
                  transition: isDragging ? 'none' : 'transform 0.15s ease, object-position 0.15s ease'
                }}
              />
              <div style={{
                position: 'absolute', bottom: '6px', right: '6px', background: 'rgba(0,0,0,0.65)',
                color: '#fff', fontSize: '0.65rem', padding: '2px 7px', borderRadius: '4px', pointerEvents: 'none'
              }}>
                Pos: {position} | Offset: X:{dragOffset.x}% Y:{dragOffset.y}%
              </div>
            </div>
          </div>
        </div>

        {/* Move & Zoom Controls */}
        <ImagePickerControls
          POSITION_PRESETS={POSITION_PRESETS}
          dragOffset={dragOffset}
          zoomScale={zoomScale}
          setZoomScale={setZoomScale}
          handlePresetPosition={handlePresetPosition}
        />

        {/* Custom URL or Upload Input */}
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
              background: '#000648', color: '#f2b733', border: 'none', padding: '10px 16px',
              borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px',
              fontSize: '0.825rem', fontWeight: 800
            }}>
              <HiUpload size={16} /> Upload Image
              <input id="image_file_upload_input" type="file" accept="image/*" onChange={handleFileUpload} style={{ display: 'none' }} />
            </label>
          </div>
        </div>

        {/* Option 2: Gallery Grid */}
        <ImagePickerGalleryGrid
          combinedGalleryImages={combinedGalleryImages}
          activeSelectedUrl={activeSelectedUrl}
          uploadedImages={uploadedImages}
          onSelectUrl={(url) => { setSelectedUrl(url); setCustomUrl(''); }}
          onDeleteUploaded={handleDeleteUploadedImage}
        />

        {/* Modal Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #e2e8f0' }}>
          <button
            type="button"
            onClick={onClose}
            style={{
              padding: '10px 20px', borderRadius: '8px', border: '1px solid #cbd5e1',
              background: '#ffffff', color: '#475569', fontWeight: 700, cursor: 'pointer'
            }}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            style={{
              padding: '10px 24px', borderRadius: '8px', border: 'none',
              background: '#000648', color: '#f2b733', fontWeight: 800, cursor: 'pointer'
            }}
          >
            Use Selected Image
          </button>
        </div>
      </div>
    </div>
  );
}
