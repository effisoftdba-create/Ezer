import React, { useState, useEffect, useRef, useCallback } from 'react';
import { HiUpload, HiArrowRight, HiSelector } from 'react-icons/hi';
import { resolveImageSrc } from '../../utils/imageUtils';
import ImagePickerGalleryGrid from './ImagePickerGalleryGrid';
import ImagePickerControls from './ImagePickerControls';
import ImagePickerHeaderBanner from './ImagePickerHeaderBanner';

const STORAGE_UPLOADED_IMAGES_KEY = 'ezer_uploaded_images:v2';

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
  { label: 'Top Focus', value: 'center top', x: 0, y: -40 },
  { label: 'Bottom Focus', value: 'center bottom', x: 0, y: 40 },
  { label: 'Left Focus', value: 'left center', x: -40, y: 0 },
  { label: 'Right Focus', value: 'right center', x: 40, y: 0 }
];

/**
 * Compute the CSS aspect-ratio from the human-readable aspectRatio prop.
 * Returns { ratio, height } where ratio is used for CSS aspect-ratio
 * and height is a fallback value.
 */
function getPreviewDimensions(aspectRatio) {
  if (!aspectRatio) return { ratio: '16/9', height: '160px' };
  const lower = aspectRatio.toLowerCase();
  if (lower.includes('1:1') || lower.includes('square')) return { ratio: '1/1', height: '200px' };
  if (lower.includes('4:3')) return { ratio: '4/3', height: '180px' };
  if (lower.includes('3:2')) return { ratio: '3/2', height: '170px' };
  if (lower.includes('portrait') || lower.includes('9:16')) return { ratio: '9/16', height: '240px' };
  // Default to 16:9 rectangle
  return { ratio: '16/9', height: '160px' };
}

/**
 * Compress an image data URI to a thumbnail for gallery storage.
 * This prevents localStorage quota overflow.
 */
function compressImageForStorage(dataUri, maxWidth = 200) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const scale = Math.min(1, maxWidth / img.width);
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL('image/jpeg', 0.6));
    };
    img.onerror = () => resolve(dataUri);
    img.src = dataUri;
  });
}

export default function ImagePickerModal({
  isOpen,
  onClose,
  onSelectImage,
  currentImage = '',
  currentPosition = 'center center',
  currentFit = 'cover',
  onSelectPosition,
  targetArea = 'Website Image',
  aspectRatio = 'Rectangle (16:9)',
  recommendedDimensions = '1200 x 675 px'
}) {
  const [selectedUrl, setSelectedUrl] = useState(currentImage || DEFAULT_PRESET_IMAGES[0].url);
  const [customUrl, setCustomUrl] = useState('');
  const [position, setPosition] = useState(currentPosition || 'center center');
  const [fitMode, setFitMode] = useState(currentFit || 'cover');
  const [zoomScale, setZoomScale] = useState(1);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  // Store full-res data URI temporarily (session only) for selection
  const fullResMapRef = useRef({});

  const [uploadedImages, setUploadedImages] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_UPLOADED_IMAGES_KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return [];
  });

  useEffect(() => {
    if (currentImage) setSelectedUrl(currentImage);
  }, [currentImage]);

  useEffect(() => {
    if (currentPosition) setPosition(currentPosition);
  }, [currentPosition]);

  useEffect(() => {
    if (currentFit) setFitMode(currentFit);
  }, [currentFit]);

  // Persist uploaded thumbnails to localStorage safely
  useEffect(() => {
    try {
      const serialized = JSON.stringify(uploadedImages);
      // Only store if under 4MB to avoid quota errors
      if (serialized.length < 4 * 1024 * 1024) {
        localStorage.setItem(STORAGE_UPLOADED_IMAGES_KEY, serialized);
      }
    } catch (e) {
      console.warn('ImagePicker: localStorage quota exceeded for uploaded images. Gallery thumbnails may not persist.');
    }
  }, [uploadedImages]);

  if (!isOpen) return null;

  const activeSelectedUrl = customUrl.trim() || selectedUrl;
  const previewDims = getPreviewDimensions(aspectRatio);

  const combinedGalleryImages = [
    ...uploadedImages.map((img) => ({ label: img.label || 'Uploaded Image', url: img.url, fullUrl: img.fullUrl || img.url, isUploaded: true })),
    ...DEFAULT_PRESET_IMAGES
  ];

  const handleConfirm = () => {
    if (activeSelectedUrl) {
      // Resolve the full-resolution URL if it's from an upload
      let resolvedUrl = activeSelectedUrl;
      if (fullResMapRef.current[activeSelectedUrl]) {
        resolvedUrl = fullResMapRef.current[activeSelectedUrl];
      }
      // Check if the gallery entry has a fullUrl
      const matchGallery = combinedGalleryImages.find((img) => img.url === activeSelectedUrl);
      if (matchGallery?.fullUrl) {
        resolvedUrl = matchGallery.fullUrl;
      }

      const computedPosStr = (dragOffset.x !== 0 || dragOffset.y !== 0)
        ? `${50 + dragOffset.x}% ${50 + dragOffset.y}%`
        : position;

      onSelectImage(resolvedUrl, computedPosStr, fitMode);
      if (onSelectPosition) onSelectPosition(computedPosStr, fitMode);
      onClose();
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      alert('Image file size exceeds 10MB limit.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = async () => {
      const fullDataUri = reader.result;

      // Set the full-res image as the selected one immediately
      setCustomUrl(fullDataUri);
      setSelectedUrl(fullDataUri);

      // Generate compressed thumbnail for gallery persistence
      const thumbnail = await compressImageForStorage(fullDataUri, 200);

      // Map thumbnail -> full res for later retrieval
      fullResMapRef.current[thumbnail] = fullDataUri;
      fullResMapRef.current[fullDataUri] = fullDataUri;

      setUploadedImages((prev) => [
        { label: `Upload ${prev.length + 1}`, url: thumbnail, fullUrl: fullDataUri, date: new Date().toLocaleTimeString() },
        ...prev
      ]);
    };
    reader.readAsDataURL(file);
  };

  const handleDeleteUploadedImage = (url, e) => {
    e.stopPropagation();
    setUploadedImages((prev) => prev.filter((img) => img.url !== url));
    if (selectedUrl === url) {
      setSelectedUrl(DEFAULT_PRESET_IMAGES[0].url);
    }
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX - dragOffset.x, y: e.clientY - dragOffset.y };
  };

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    const newX = Math.min(80, Math.max(-80, Math.round((e.clientX - dragStartRef.current.x))));
    const newY = Math.min(80, Math.max(-80, Math.round((e.clientY - dragStartRef.current.y))));
    setDragOffset({ x: newX, y: newY });
    setPosition(`${50 + newX}% ${50 + newY}%`);
  }, [isDragging]);

  const handleMouseUp = () => setIsDragging(false);

  const handlePresetPosition = (preset) => {
    setPosition(preset.value);
    setDragOffset({ x: preset.x, y: preset.y });
  };

  const handleGallerySelect = (url) => {
    // If the gallery entry has a fullUrl, use that for preview
    const matchGallery = combinedGalleryImages.find((img) => img.url === url);
    if (matchGallery?.fullUrl) {
      setSelectedUrl(matchGallery.fullUrl);
      fullResMapRef.current[matchGallery.fullUrl] = matchGallery.fullUrl;
    } else {
      setSelectedUrl(url);
    }
    setCustomUrl('');
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      background: 'rgba(0, 6, 72, 0.75)', backdropFilter: 'blur(6px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'
    }}>
      <div style={{
        background: '#ffffff', borderRadius: '16px', width: '100%', maxWidth: '820px',
        maxHeight: '94vh', overflowY: 'auto', padding: '24px', boxShadow: '0 25px 50px rgba(0,0,0,0.35)'
      }}>
        <ImagePickerHeaderBanner
          targetArea={targetArea}
          aspectRatio={aspectRatio}
          recommendedDimensions={recommendedDimensions}
          onClose={onClose}
        />

        {/* Dual Image Preview — aspect ratio matches target section */}
        <div style={{
          background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '14px',
          padding: '16px', marginBottom: '20px', display: 'grid', gridTemplateColumns: '1fr auto 1fr',
          gap: '16px', alignItems: 'center'
        }}>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '6px' }}>
              Current Active Image
            </div>
            <div style={{
              aspectRatio: previewDims.ratio,
              maxHeight: '220px',
              borderRadius: '10px', overflow: 'hidden', border: '2px solid #cbd5e1', background: '#e2e8f0'
            }}>
              {currentImage ? (
                <img src={resolveImageSrc(currentImage)} alt="Current active" style={{ width: '100%', height: '100%', objectFit: currentFit || 'cover', objectPosition: currentPosition }} />
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
                <HiSelector size={12} /> Drag image to position
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
                aspectRatio: previewDims.ratio,
                maxHeight: '220px',
                borderRadius: '10px', overflow: 'hidden',
                border: '2.5px solid #115DFC', background: '#000648',
                boxShadow: '0 4px 14px rgba(17,93,252,0.25)', position: 'relative',
                cursor: isDragging ? 'grabbing' : 'grab', userSelect: 'none'
              }}
            >
              <img
                src={resolveImageSrc(activeSelectedUrl)}
                alt="Newly chosen preview"
                style={{
                  width: '100%', height: '100%',
                  objectFit: fitMode,
                  objectPosition: `${50 + dragOffset.x}% ${50 + dragOffset.y}%`,
                  transform: `scale(${zoomScale})`, pointerEvents: 'none',
                  transition: isDragging ? 'none' : 'transform 0.15s ease, object-position 0.15s ease'
                }}
              />
              <div style={{
                position: 'absolute', bottom: '6px', right: '6px', background: 'rgba(0,0,0,0.75)',
                color: '#fff', fontSize: '0.65rem', padding: '2px 7px', borderRadius: '4px', pointerEvents: 'none'
              }}>
                Pos: {position} | Fit: {fitMode}
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
          fitMode={fitMode}
          setFitMode={setFitMode}
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
              value={customUrl.startsWith('data:') ? '(Uploaded image data)' : customUrl}
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
              <HiUpload size={16} /> Upload New Image
              <input id="image_file_upload_input" type="file" accept="image/*" onChange={handleFileUpload} style={{ display: 'none' }} />
            </label>
          </div>
        </div>

        {/* Option 2: Gallery Grid */}
        <ImagePickerGalleryGrid
          combinedGalleryImages={combinedGalleryImages}
          activeSelectedUrl={activeSelectedUrl}
          uploadedImages={uploadedImages}
          onSelectUrl={handleGallerySelect}
          onDeleteUploaded={handleDeleteUploadedImage}
          aspectRatio={aspectRatio}
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
