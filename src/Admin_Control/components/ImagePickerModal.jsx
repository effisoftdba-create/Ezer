import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
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
  { label: 'Center', value: '50% 50%', x: 0, y: 0 },
  { label: 'Top Focus', value: '50% 15%', x: 0, y: -35 },
  { label: 'Bottom Focus', value: '50% 85%', x: 0, y: 35 },
  { label: 'Left Focus', value: '15% 50%', x: -35, y: 0 },
  { label: 'Right Focus', value: '85% 50%', x: 35, y: 0 }
];

function getPreviewDimensions(aspectRatio) {
  if (!aspectRatio) return { ratio: '16/9', height: '160px' };
  const lower = aspectRatio.toLowerCase();
  if (lower.includes('340:360') || lower.includes('340x360')) return { ratio: '340/360', height: '220px' };
  if (lower.includes('1:1') || lower.includes('square')) return { ratio: '1/1', height: '200px' };
  if (lower.includes('4:3')) return { ratio: '4/3', height: '180px' };
  if (lower.includes('3:2')) return { ratio: '3/2', height: '170px' };
  if (lower.includes('3:4') || lower.includes('vertical')) return { ratio: '3/4', height: '240px' };
  if (lower.includes('4:5')) return { ratio: '4/5', height: '250px' };
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
  currentPosition = '50% 50%',
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
  const presetPosRef = useRef(currentPosition || '50% 50%');

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

  // Parse initial position on mount or when currentPosition changes
  useEffect(() => {
    if (currentPosition) {
      presetPosRef.current = currentPosition;
      if (currentPosition.includes('top')) setDragOffset({ x: 0, y: -35 });
      else if (currentPosition.includes('bottom')) setDragOffset({ x: 0, y: 35 });
      else if (currentPosition.includes('left')) setDragOffset({ x: -35, y: 0 });
      else if (currentPosition.includes('right')) setDragOffset({ x: 35, y: 0 });
      else if (currentPosition.includes('%')) {
        const parts = currentPosition.split(' ');
        const xPct = parseFloat(parts[0]) || 50;
        const yPct = parseFloat(parts[1]) || 50;
        setDragOffset({ x: Math.round(xPct - 50), y: Math.round(yPct - 50) });
      }
    }
  }, [currentPosition, isOpen]);

  // Smooth dragging across window
  const handlePointerDown = (clientX, clientY) => {
    setIsDragging(true);
    dragStartRef.current = { x: clientX - (dragOffset.x * 2), y: clientY - (dragOffset.y * 2) };
  };

  const handlePointerMove = useCallback((clientX, clientY) => {
    if (!isDragging) return;
    const deltaX = Math.round((clientX - dragStartRef.current.x) / 2);
    const deltaY = Math.round((clientY - dragStartRef.current.y) / 2);
    const clampedX = Math.min(48, Math.max(-48, deltaX));
    const clampedY = Math.min(48, Math.max(-48, deltaY));
    setDragOffset({ x: clampedX, y: clampedY });
  }, [isDragging]);


  useEffect(() => {
    if (!isDragging) return;
    const onMouseMove = (e) => handlePointerMove(e.clientX, e.clientY);
    const onTouchMove = (e) => {
      if (e.touches && e.touches[0]) handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
    };
    const onMouseUp = () => setIsDragging(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchend', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchend', onMouseUp);
    };
  }, [isDragging, handlePointerMove]);

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

  const posX = Math.min(100, Math.max(0, 50 + dragOffset.x));
  const posY = Math.min(100, Math.max(0, 50 + dragOffset.y));
  const computedPosStr = `${posX}% ${posY}%`;

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

  const handlePresetPosition = (preset) => {
    presetPosRef.current = preset.value;
    setDragOffset({ x: preset.x, y: preset.y });
  };

  const handleGallerySelect = (url) => {
    setSelectedUrlOverride(url);
    setCustomUrl('');
  };

  const modalJSX = (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 999999,
      background: 'rgba(0, 6, 72, 0.88)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      overflow: 'hidden'
    }}>
      <div style={{
        background: '#ffffff',
        borderRadius: '20px',
        width: '100%',
        maxWidth: '840px',
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: '24px',
        boxShadow: '0 25px 60px rgba(0,6,72,0.5)',
        border: '2px solid #f2b733',
        margin: 0
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
          handleMouseDown={handlePointerDown}
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
              placeholder="Paste image web URL..."
              value={customUrl}
              onChange={(e) => setCustomUrl(e.target.value)}
              style={{
                flex: 1,
                minWidth: '220px',
                padding: '10px 14px',
                borderRadius: '8px',
                border: '1.5px solid #cbd5e1',
                fontSize: '0.85rem'
              }}
            />
            <label
              htmlFor="file_upload_input"
              style={{
                padding: '10px 16px',
                background: '#000648',
                color: '#ffffff',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.82rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <HiUpload size={16} color="#f2b733" />
              {isUploading ? 'Uploading...' : 'Browse Local PC Image'}
            </label>
            <input
              id="file_upload_input"
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              style={{ display: 'none' }}
            />
          </div>
        </div>

        <ImagePickerGalleryGrid
          combinedGalleryImages={combinedGalleryImages}
          uploadedImages={uploadedImages}
          selectedUrl={selectedUrl}
          activeSelectedUrl={activeSelectedUrl}
          handleGallerySelect={handleGallerySelect}
          handleDeleteUploadedImage={handleDeleteUploadedImage}
          aspectRatio={activeRatio}
        />


        {/* BOTTOM ACTION BUTTON BAR */}
        <div style={{
          display: 'flex',
          justify: 'flex-end',
          gap: '12px',
          borderTop: '1.5px solid #cbd5e1',
          paddingTop: '16px',
          marginTop: '16px'
        }}>
          <button
            type="button"
            onClick={onClose}
            style={{
              padding: '10px 20px',
              borderRadius: '8px',
              border: '1.5px solid #cbd5e1',
              background: '#ffffff',
              color: '#475569',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            style={{
              padding: '10px 24px',
              borderRadius: '8px',
              border: 'none',
              background: '#000648',
              color: '#f2b733',
              fontWeight: 800,
              fontSize: '0.9rem',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(0,6,72,0.2)'
            }}
          >
            Confirm Image & Alignments
          </button>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalJSX, document.body);
}
