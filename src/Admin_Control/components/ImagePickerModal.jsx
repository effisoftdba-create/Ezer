import React, { useState, useEffect, useRef } from 'react';
import { HiX, HiCheck, HiPhotograph, HiUpload, HiArrowRight, HiTrash, HiZoomIn, HiZoomOut, HiSelector } from 'react-icons/hi';
import { resolveImageSrc } from '../../utils/imageUtils';

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
  onSelectPosition
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

  // Combine user uploaded pictures AND preset images in Gallery Presets so all uploaded images appear everywhere
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
        // Persist uploaded picture into uploadedImages list so it immediately appears in all gallery options
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

  // Drag handlers for mouse/touch interactive panning inside preview box
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

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      const touch = e.touches[0];
      dragStartRef.current = { x: touch.clientX - dragOffset.x, y: touch.clientY - dragOffset.y };
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const touch = e.touches[0];
    const newX = Math.min(50, Math.max(-50, Math.round((touch.clientX - dragStartRef.current.x) / 3)));
    const newY = Math.min(50, Math.max(-50, Math.round((touch.clientY - dragStartRef.current.y) / 3)));
    setDragOffset({ x: newX, y: newY });
    setPosition(`${50 + newX}% ${50 + newY}%`);
  };

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

        {/* Dual Image Preview (Current vs. Newly Selected with Drag-to-Move & Zoom) */}
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
            
            {/* Drag to Move Interactive Container */}
            <div
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleMouseUp}
              style={{
                height: '130px',
                borderRadius: '10px',
                overflow: 'hidden',
                border: '2.5px solid #115DFC',
                background: '#000648',
                boxShadow: '0 4px 14px rgba(17,93,252,0.25)',
                position: 'relative',
                cursor: isDragging ? 'grabbing' : 'grab',
                userSelect: 'none'
              }}
            >
              <img
                src={resolveImageSrc(activeSelectedUrl)}
                alt="Newly chosen preview"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: `${50 + dragOffset.x}% ${50 + dragOffset.y}%`,
                  transform: `scale(${zoomScale})`,
                  pointerEvents: 'none',
                  transition: isDragging ? 'none' : 'transform 0.15s ease, object-position 0.15s ease'
                }}
              />
              <div style={{
                position: 'absolute', bottom: '6px', right: '6px', background: 'rgba(0,0,0,0.65)',
                color: '#fff', fontSize: '0.65rem', padding: '2px 7px', borderRadius: '4px', pointerEvents: 'none'
              }}>
                Offset: X:{dragOffset.x}% Y:{dragOffset.y}%
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Image Drag & Zoom Controls */}
        <div style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '12px', padding: '14px 16px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ fontSize: '0.825rem', fontWeight: 800, color: '#000648' }}>
              Interactive Image Move & Zoom Controls
            </span>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#115DFC', background: '#e0e7ff', padding: '2px 8px', borderRadius: '4px' }}>
              Zoom Level: {Math.round(zoomScale * 100)}%
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', alignItems: 'center' }}>
            {/* Quick Position Alignment Presets */}
            <div>
              <div style={{ fontSize: '0.725rem', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
                Quick Alignment Presets
              </div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {POSITION_PRESETS.map((p) => (
                  <button
                    key={p.value}
                    type="button"
                    onClick={() => handlePresetPosition(p)}
                    aria-label={`Position preset ${p.label}`}
                    style={{
                      padding: '4px 10px', borderRadius: '6px', border: '1px solid #cbd5e1',
                      background: (dragOffset.x === p.x && dragOffset.y === p.y) ? '#000648' : '#ffffff',
                      color: (dragOffset.x === p.x && dragOffset.y === p.y) ? '#f2b733' : '#334155',
                      fontWeight: (dragOffset.x === p.x && dragOffset.y === p.y) ? 800 : 600, fontSize: '0.725rem', cursor: 'pointer'
                    }}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Zoom Controls */}
            <div>
              <div style={{ fontSize: '0.725rem', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
                Zoom In / Zoom Out Controls
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => setZoomScale((z) => Math.max(1, +(z - 0.15).toFixed(2)))}
                  aria-label="Zoom out"
                  style={{
                    padding: '6px 10px', background: '#ffffff', border: '1px solid #cbd5e1',
                    borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px',
                    fontSize: '0.75rem', fontWeight: 700, color: '#000648'
                  }}
                >
                  <HiZoomOut size={15} /> Out
                </button>
                <input
                  type="range"
                  min="1"
                  max="2.5"
                  step="0.05"
                  value={zoomScale}
                  onChange={(e) => setZoomScale(parseFloat(e.target.value))}
                  style={{ flex: 1, accentColor: '#115DFC', cursor: 'pointer' }}
                />
                <button
                  type="button"
                  onClick={() => setZoomScale((z) => Math.min(2.5, +(z + 0.15).toFixed(2)))}
                  aria-label="Zoom in"
                  style={{
                    padding: '6px 10px', background: '#ffffff', border: '1px solid #cbd5e1',
                    borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px',
                    fontSize: '0.75rem', fontWeight: 700, color: '#000648'
                  }}
                >
                  <HiZoomIn size={15} /> In
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Option 1: Custom URL or Upload New Image */}
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

        {/* Option 2: All Uploaded Pictures & Curated Presets combined so user can select any uploaded image everywhere */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ fontSize: '0.825rem', fontWeight: 800, color: '#000648' }}>
              Option 2: Select from Curated Gallery Presets & Your Uploads ({combinedGalleryImages.length})
            </span>
            {uploadedImages.length > 0 && (
              <span style={{ fontSize: '0.725rem', color: '#166534', fontWeight: 700 }}>
                Includes {uploadedImages.length} uploaded picture{uploadedImages.length > 1 ? 's' : ''}
              </span>
            )}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(135px, 1fr))', gap: '12px' }}>
            {combinedGalleryImages.map((img, idx) => {
              const isSelected = activeSelectedUrl === img.url;
              return (
                <div
                  key={`${img.url}-${idx}`}
                  style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden' }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedUrl(img.url);
                      setCustomUrl('');
                    }}
                    aria-label={`Select image: ${img.label}`}
                    style={{
                      width: '100%',
                      position: 'relative', borderRadius: '10px', overflow: 'hidden', cursor: 'pointer',
                      border: isSelected ? '3px solid #115DFC' : '1.5px solid #e2e8f0',
                      boxShadow: isSelected ? '0 4px 12px rgba(17, 93, 252, 0.3)' : 'none',
                      height: '90px', background: '#f8fafc', padding: 0, textAlign: 'left'
                    }}
                  >
                    <img src={resolveImageSrc(img.url)} alt={img.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{
                      position: 'absolute', bottom: 0, inset: 'auto 0 0 0', background: img.isUploaded ? 'rgba(0,6,72,0.85)' : 'rgba(0,0,0,0.7)',
                      color: '#fff', fontSize: '0.65rem', padding: '3px 4px', textAlign: 'center', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'
                    }}>
                      {img.isUploaded ? `⭐ ${img.label}` : img.label}
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

                  {img.isUploaded && (
                    <button
                      type="button"
                      onClick={(e) => handleDeleteUploadedImage(img.url, e)}
                      aria-label="Delete uploaded image"
                      style={{
                        position: 'absolute', top: '4px', left: '4px', background: 'rgba(220, 38, 38, 0.85)',
                        color: '#fff', border: 'none', borderRadius: '50%', width: '20px', height: '20px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10
                      }}
                    >
                      <HiTrash size={11} />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
            Selected: <strong style={{ color: '#000648' }}>{activeSelectedUrl.substring(0, 35)}...</strong>
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
                padding: '10px 22px', borderRadius: '8px', border: 'none',
                background: '#115DFC', color: '#ffffff', fontWeight: 800, cursor: 'pointer',
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
