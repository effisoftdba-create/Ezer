import React, { useState, useEffect, useRef, useCallback } from 'react';
import { HiUpload } from 'react-icons/hi';
import ImagePickerGalleryGrid from './ImagePickerGalleryGrid';
import ImagePickerControls from './ImagePickerControls';
import ImagePickerHeaderBanner from './ImagePickerHeaderBanner';
import ImagePickerPreviewBox from './ImagePickerPreviewBox';

const STORAGE_UPLOADED_IMAGES_KEY = 'ezer_uploaded_images:v3';

const DEFAULT_PRESET_IMAGES = [
  { label: 'Hero Default', url: 'images/hero/hero_section_1.jpg' },
  { label: 'Cloud & DevOps', url: 'images/hero/devops.avif' },
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

function getPreviewDimensions(aspectRatio) {
  if (!aspectRatio) return { ratio: '16/9', height: '160px' };
  const lower = aspectRatio.toLowerCase();
  if (lower.includes('1:1') || lower.includes('square')) return { ratio: '1/1', height: '200px' };
  if (lower.includes('4:3')) return { ratio: '4/3', height: '180px' };
  if (lower.includes('3:2')) return { ratio: '3/2', height: '170px' };
  if (lower.includes('3:4') || lower.includes('vertical')) return { ratio: '3/4', height: '240px' };
  if (lower.includes('portrait') || lower.includes('9:16')) return { ratio: '9/16', height: '260px' };
  return { ratio: '16/9', height: '160px' };
}

function compressImageForWeb(dataUri, maxDimension = 900, quality = 0.75) {
  return new Promise((resolve) => {
    if (!dataUri || !dataUri.startsWith('data:')) {
      resolve(dataUri);
      return;
    }
    const img = new Image();
    img.onload = () => {
      let width = img.width;
      let height = img.height;

      if (width > maxDimension || height > maxDimension) {
        if (width > height) {
          height = Math.round((height * maxDimension) / width);
          width = maxDimension;
        } else {
          width = Math.round((width * maxDimension) / height);
          height = maxDimension;
        }
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      try {
        const compressedUri = canvas.toDataURL('image/jpeg', quality);
        resolve(compressedUri);
      } catch (e) {
        resolve(dataUri);
      }
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
  const [selectedUrlOverride, setSelectedUrlOverride] = useState(null);
  const [customUrl, setCustomUrl] = useState('');
  const [fitModeOverride, setFitModeOverride] = useState(null);
  const [zoomScale, setZoomScale] = useState(1);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [aspectRatioOverride, setAspectRatioOverride] = useState(null);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const presetPosRef = useRef(currentPosition || 'center center');

  const [uploadedImages, setUploadedImages] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_UPLOADED_IMAGES_KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return [];
  });

  useEffect(() => {
    try {
      const serialized = JSON.stringify(uploadedImages);
      if (serialized.length < 3 * 1024 * 1024) {
        localStorage.setItem(STORAGE_UPLOADED_IMAGES_KEY, serialized);
      }
    } catch (e) {}
  }, [uploadedImages]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    const newX = Math.min(80, Math.max(-80, Math.round((e.clientX - dragStartRef.current.x))));
    const newY = Math.min(80, Math.max(-80, Math.round((e.clientY - dragStartRef.current.y))));
    setDragOffset({ x: newX, y: newY });
  }, [isDragging]);

  if (!isOpen) return null;

  const selectedUrl = selectedUrlOverride !== null ? selectedUrlOverride : (currentImage || DEFAULT_PRESET_IMAGES[0].url);
  const fitMode = fitModeOverride !== null ? fitModeOverride : (currentFit || 'cover');
  const activeRatio = aspectRatioOverride !== null ? aspectRatioOverride : (aspectRatio || 'Rectangle (16:9)');
  const activeSelectedUrl = customUrl.trim() || selectedUrl;
  const previewDims = getPreviewDimensions(activeRatio);

  const combinedGalleryImages = [
    ...uploadedImages.map((img) => ({ label: img.label || 'Uploaded Image', url: img.url, isUploaded: true })),
    ...DEFAULT_PRESET_IMAGES
  ];

  const computedPosStr = (dragOffset.x !== 0 || dragOffset.y !== 0)
    ? `${50 + dragOffset.x}% ${50 + dragOffset.y}%`
    : presetPosRef.current;

  const handleConfirm = () => {
    if (activeSelectedUrl) {
      if (typeof onSelectImage === 'function') onSelectImage(activeSelectedUrl, computedPosStr, fitMode);
      if (typeof onSelectPosition === 'function') onSelectPosition(computedPosStr, fitMode);
      if (typeof onClose === 'function') onClose();
    }
  };

  const handleFileUpload = (e) => {
    const file = e?.target?.files?.[0];
    if (!file) return;

    if (file.size > 15 * 1024 * 1024) {
      alert('Image file size exceeds 15MB limit.');
      return;
    }

    setIsUploading(true);
    const reader = new FileReader();
    reader.onloadend = async () => {
      const rawDataUri = reader.result;
      const compressedWebUri = await compressImageForWeb(rawDataUri, 600, 0.6);

      setCustomUrl(compressedWebUri);
      setSelectedUrlOverride(compressedWebUri);

      setUploadedImages((prev) => [
        { label: `Upload ${prev.length + 1}`, url: compressedWebUri, date: new Date().toLocaleTimeString() },
        ...prev
      ]);
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleDeleteUploadedImage = (url, e) => {
    e.stopPropagation();
    setUploadedImages((prev) => prev.filter((img) => img.url !== url));
    if (selectedUrl === url) {
      setSelectedUrlOverride(DEFAULT_PRESET_IMAGES[0].url);
    }
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX - dragOffset.x, y: e.clientY - dragOffset.y };
  };

  const handleMouseUp = () => setIsDragging(false);

  const handlePresetPosition = (preset) => {
    presetPosRef.current = preset.value;
    setDragOffset({ x: preset.x, y: preset.y });
  };

  const handleGallerySelect = (url) => {
    setSelectedUrlOverride(url);
    setCustomUrl('');
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 99999,
      background: 'rgba(0, 6, 72, 0.85)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '16px',
      overflowY: 'auto'
    }}>
      <div style={{
        background: '#ffffff',
        borderRadius: '18px',
        width: '100%',
        maxWidth: '840px',
        maxHeight: 'calc(100vh - 32px)',
        overflowY: 'auto',
        padding: '24px',
        boxShadow: '0 25px 60px rgba(0,6,72,0.45)',
        border: '1.5px solid rgba(242, 183, 51, 0.4)',
        marginTop: '8px',
        marginBottom: '16px'
      }}>
        <ImagePickerHeaderBanner
          targetArea={targetArea}
          aspectRatio={aspectRatio}
          recommendedDimensions={recommendedDimensions}
          onClose={onClose}
        />

        <ImagePickerPreviewBox
          currentImage={currentImage}
          currentFit={currentFit}
          currentPosition={currentPosition}
          previewDims={previewDims}
          activeSelectedUrl={activeSelectedUrl}
          fitMode={fitMode}
          dragOffset={dragOffset}
          zoomScale={zoomScale}
          isDragging={isDragging}
          handleMouseDown={handleMouseDown}
          handleMouseMove={handleMouseMove}
          handleMouseUp={handleMouseUp}
        />

        <ImagePickerControls
          POSITION_PRESETS={POSITION_PRESETS}
          dragOffset={dragOffset}
          setDragOffset={setDragOffset}
          zoomScale={zoomScale}
          setZoomScale={setZoomScale}
          fitMode={fitMode}
          setFitMode={setFitModeOverride}
          handlePresetPosition={handlePresetPosition}
          aspectRatio={activeRatio}
          onSelectAspectRatio={(val) => setAspectRatioOverride(val)}
        />

        {/* DRAG & DROP FILE UPLOAD ZONE */}
        <div 
          onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
          onDragLeave={(e) => { e.preventDefault(); setIsDragOver(false); }}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragOver(false);
            if (e.dataTransfer.files && e.dataTransfer.files[0]) {
              const file = e.dataTransfer.files[0];
              if (file.type.startsWith('image/')) {
                const fakeEvent = { target: { files: [file] } };
                handleFileUpload(fakeEvent);
              } else {
                alert('Please drop an image file (PNG, JPG, WebP, AVIF).');
              }
            }
          }}
          style={{
            marginBottom: '20px',
            border: isDragOver ? '2.5px dashed #f2b733' : '2px dashed #cbd5e1',
            background: isDragOver ? 'rgba(242, 183, 51, 0.12)' : '#f8fafc',
            borderRadius: '12px',
            padding: '16px',
            textAlign: 'center',
            transition: 'border-color 0.2s ease, background-color 0.2s ease',
            cursor: 'pointer'
          }}
        >
          <label htmlFor="custom_image_url_picker" style={{ fontSize: '0.825rem', fontWeight: 700, color: '#000648', display: 'block', marginBottom: '8px' }}>
            Option 1: Enter Custom Image URL or Drag & Drop Image File Here
          </label>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <input
              id="custom_image_url_picker"
              type="text"
              placeholder="https://example.com/image.jpg or drop image file"
              value={customUrl.startsWith('data:') ? '(Uploaded image compressed & ready)' : customUrl}
              onChange={(e) => setCustomUrl(e.target.value)}
              style={{
                flex: 1, padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #cbd5e1',
                fontSize: '0.875rem', outline: 'none'
              }}
            />
            <label htmlFor="image_file_upload_input" style={{
              background: isUploading ? '#64748b' : '#000648', color: '#f2b733', border: 'none', padding: '10px 16px',
              borderRadius: '8px', cursor: isUploading ? 'wait' : 'pointer', display: 'flex', alignItems: 'center', gap: '6px',
              fontSize: '0.825rem', fontWeight: 800
            }}>
              <HiUpload size={16} /> {isUploading ? 'Optimizing...' : 'Upload / Drop File'}
              <input id="image_file_upload_input" type="file" accept="image/*" disabled={isUploading} onChange={handleFileUpload} style={{ display: 'none' }} />
            </label>
          </div>
          <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, display: 'inline-block', marginTop: '6px' }}>
            💡 Drag & drop any image file directly onto this box to upload with live ratio preview ({activeRatio})
          </span>
        </div>

        <ImagePickerGalleryGrid
          combinedGalleryImages={combinedGalleryImages}
          activeSelectedUrl={activeSelectedUrl}
          uploadedImages={uploadedImages}
          onSelectUrl={handleGallerySelect}
          onDeleteUploaded={handleDeleteUploadedImage}
          aspectRatio={aspectRatio}
        />

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
