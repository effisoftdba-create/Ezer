import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { HiUpload, HiZoomIn, HiZoomOut, HiRefresh } from 'react-icons/hi';
import ImagePickerPreviewBox from './ImagePickerPreviewBox';
import { removeImageBackground } from '../../../utils/backgroundRemover';


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
  if (lower.includes('180:48') || lower.includes('180/48') || lower.includes('logo') || lower.includes('company')) return { ratio: '180/48', height: '100px' };
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
  currentZoom = 1,
  currentMobilePosition,
  currentMobileZoom,
  onSelectPosition,
  targetArea = 'Website Image',
  aspectRatio = 'Rectangle (16:9)',
  recommendedDimensions = '1200 x 675 px'
}) {
  const [selectedUrlOverride, setSelectedUrlOverride] = useState(null);
  const [customUrl, setCustomUrl] = useState('');
  const originalUncutUrlRef = useRef(currentImage || '');
  const [fitModeOverride, setFitModeOverride] = useState(null);

  const [uploadedImages, setUploadedImages] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_UPLOADED_IMAGES_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_UPLOADED_IMAGES_KEY, JSON.stringify(uploadedImages));
    } catch (e) {
      // ignore
    }
  }, [uploadedImages]);

  // Independent PC (desktop) and Mobile alignment state
  const [activeTarget, setActiveTarget] = useState('desktop'); // 'desktop' or 'mobile'
  const [desktopZoom, setDesktopZoom] = useState(currentZoom || 1);
  const [desktopDragOffset, setDesktopDragOffset] = useState({ x: 0, y: 0 });
  const [mobileZoom, setMobileZoom] = useState(currentMobileZoom || currentZoom || 1);
  const [mobileDragOffset, setMobileDragOffset] = useState({ x: 0, y: 0 });

  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  // Track open state in effect
  const prevIsOpenRef = useRef(false);
  useEffect(() => {
    prevIsOpenRef.current = isOpen;
  }, [isOpen]);

  // Dynamic active target getters and setters
  const activeZoom = activeTarget === 'mobile' ? mobileZoom : desktopZoom;
  const setActiveZoom = activeTarget === 'mobile' ? setMobileZoom : setDesktopZoom;
  const activeOffset = activeTarget === 'mobile' ? mobileDragOffset : desktopDragOffset;
  const setActiveOffset = activeTarget === 'mobile' ? setMobileDragOffset : setDesktopDragOffset;

  // Pointer drag gesture handling with NATURAL direction physics
  const handlePointerDown = (clientX, clientY, targetMode = 'desktop') => {
    setActiveTarget(targetMode);
    setIsDragging(true);
    const currOffset = targetMode === 'mobile' ? mobileDragOffset : desktopDragOffset;
    dragStartRef.current = { x: clientX - currOffset.x, y: clientY - currOffset.y };
  };

  const handlePointerMove = useCallback((clientX, clientY) => {
    if (!isDragging) return;
    const deltaX = Math.round(clientX - dragStartRef.current.x);
    const deltaY = Math.round(clientY - dragStartRef.current.y);
    const clampedX = Math.min(48, Math.max(-48, deltaX));
    const clampedY = Math.min(48, Math.max(-48, deltaY));
    if (activeTarget === 'mobile') {
      setMobileDragOffset({ x: clampedX, y: clampedY });
    } else {
      setDesktopDragOffset({ x: clampedX, y: clampedY });
    }
  }, [isDragging, activeTarget]);

  useEffect(() => {
    if (!isDragging) return;
    const onMouseMove = (e) => handlePointerMove(e.clientX, e.clientY);
    const onTouchMove = (e) => {
      if (e.touches && e.touches[0]) handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
    };
    const onMouseUp = () => setIsDragging(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
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
  const activeSelectedUrl = customUrl.trim() || selectedUrl;
  const previewDims = getPreviewDimensions(aspectRatio);

  const combinedGalleryImages = [
    ...uploadedImages.map((img) => ({ label: img.label || 'Uploaded Image', url: img.url, isUploaded: true })),
    ...DEFAULT_PRESET_IMAGES
  ];

  const desktopPosX = Math.min(100, Math.max(0, 50 - desktopDragOffset.x));
  const desktopPosY = Math.min(100, Math.max(0, 50 - desktopDragOffset.y));
  const desktopPosStr = `${desktopPosX}% ${desktopPosY}%`;

  const mobilePosX = Math.min(100, Math.max(0, 50 - mobileDragOffset.x));
  const mobilePosY = Math.min(100, Math.max(0, 50 - mobileDragOffset.y));
  const mobilePosStr = `${mobilePosX}% ${mobilePosY}%`;

  const handleConfirm = () => {
    if (activeSelectedUrl) {
      if (typeof onSelectImage === 'function') {
        onSelectImage(activeSelectedUrl, desktopPosStr, fitMode, desktopZoom, {
          mobilePosition: mobilePosStr,
          mobileZoom: mobileZoom
        });
      }
      if (typeof onSelectPosition === 'function') {
        onSelectPosition(desktopPosStr, fitMode, desktopZoom, {
          mobilePosition: mobilePosStr,
          mobileZoom: mobileZoom
        });
      }
      if (typeof onClose === 'function') onClose();
    }
  };

  const handleAutoRemoveBackground = async () => {
    if (!activeSelectedUrl) return;
    if (!originalUncutUrlRef.current || originalUncutUrlRef.current === activeSelectedUrl) {
      originalUncutUrlRef.current = activeSelectedUrl;
    }
    setIsUploading(true);
    try {
      const transparentUri = await removeImageBackground(activeSelectedUrl);
      setSelectedUrlOverride(transparentUri);
      setCustomUrl(transparentUri);
    } catch (err) {
      console.warn('Background removal failed:', err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleUndoBackgroundCut = () => {
    if (originalUncutUrlRef.current) {
      setSelectedUrlOverride(originalUncutUrlRef.current);
      setCustomUrl(originalUncutUrlRef.current);
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
      const compressedUri = await compressImageForWeb(rawDataUri, 600, 0.6);
      originalUncutUrlRef.current = compressedUri;

      let finalUri = compressedUri;
      if (previewDims.ratio === '180/48') {
        finalUri = await removeImageBackground(compressedUri);
      }

      setCustomUrl(finalUri);
      setSelectedUrlOverride(finalUri);

      setUploadedImages((prev) => [
        { label: `Upload ${prev.length + 1}`, url: finalUri, date: new Date().toLocaleTimeString() },
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
    setActiveOffset({ x: preset.x, y: preset.y });
  };

  const handleGallerySelect = (url) => {
    originalUncutUrlRef.current = url;
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
        maxWidth: '860px',
        maxHeight: '92vh',
        overflowY: 'auto',
        padding: '24px',
        boxShadow: '0 25px 60px rgba(0,6,72,0.5)',
        border: '2px solid #f2b733',
        margin: 0
      }}>
        {/* HEADER BANNER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1.5px solid #cbd5e1', paddingBottom: '12px' }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 900, color: '#000648' }}>
              Select &amp; Focus Image for {targetArea}
            </h3>
            <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '2px' }}>
              Aspect Ratio: <strong>{aspectRatio}</strong> | Recommended: <strong>{recommendedDimensions}</strong>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            style={{ background: '#e2e8f0', border: 'none', color: '#334155', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', fontWeight: 800 }}
          >
            ✕
          </button>
        </div>

        {/* TOP IMAGE CHOOSER / DRAG & DROP & URL INPUT (REORGANIZED TO TOP) */}
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
            marginBottom: '16px',
            border: isDragOver ? '2.5px dashed #f2b733' : '2px dashed #cbd5e1',
            background: isDragOver ? 'rgba(242, 183, 51, 0.12)' : '#f8fafc',
            borderRadius: '12px',
            padding: '14px 16px',
            transition: 'border-color 0.2s ease, background-color 0.2s ease'
          }}
        >
          <label htmlFor="custom_image_url_picker" style={{ fontSize: '0.825rem', fontWeight: 800, color: '#000648', display: 'block', marginBottom: '6px' }}>
            Option 1: Enter Custom Image URL or Drag & Drop Image File Here
          </label>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <input
              id="custom_image_url_picker"
              type="text"
              placeholder="Paste image web URL..."
              value={customUrl}
              onChange={(e) => {
                const val = e.target.value;
                setCustomUrl(val);
                setSelectedUrlOverride(val);
              }}
              style={{
                flex: 1,
                minWidth: '240px',
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

        {/* IMAGE PREVIEW BOX (WITH SEPARATE PC & MOBILE DRAG/ZOOM HANDLERS) */}
        <ImagePickerPreviewBox
          currentImage={currentImage}
          currentFit={currentFit}
          currentPosition={currentPosition}
          previewDims={previewDims}
          activeSelectedUrl={activeSelectedUrl}
          fitMode={fitMode}
          dragOffset={desktopDragOffset}
          zoomScale={desktopZoom}
          mobileDragOffset={mobileDragOffset}
          mobileZoom={mobileZoom}
          activeTarget={activeTarget}
          setActiveTarget={setActiveTarget}
          isDragging={isDragging}
          handleMouseDown={handlePointerDown}
        />

        {/* ZOOM & POSITION ALIGNMENT TOOLBAR */}
        <div style={{
          background: '#f8fafc',
          border: '1.5px solid #cbd5e1',
          borderRadius: '12px',
          padding: '14px 16px',
          marginBottom: '16px',
          marginTop: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 900, color: '#000648', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Active Screen Mode:
              </span>
              <div style={{ display: 'flex', background: '#cbd5e1', borderRadius: '8px', padding: '3px', gap: '3px' }}>
                <button
                  type="button"
                  onClick={() => setActiveTarget('desktop')}
                  style={{
                    padding: '5px 12px', borderRadius: '6px', border: 'none',
                    background: activeTarget === 'desktop' ? '#000648' : 'transparent',
                    color: activeTarget === 'desktop' ? '#f2b733' : '#334155',
                    fontWeight: activeTarget === 'desktop' ? 900 : 700,
                    fontSize: '0.78rem', cursor: 'pointer'
                  }}
                >
                  🖥️ PC Screen Focus
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTarget('mobile')}
                  style={{
                    padding: '5px 12px', borderRadius: '6px', border: 'none',
                    background: activeTarget === 'mobile' ? '#000648' : 'transparent',
                    color: activeTarget === 'mobile' ? '#f2b733' : '#334155',
                    fontWeight: activeTarget === 'mobile' ? 900 : 700,
                    fontSize: '0.78rem', cursor: 'pointer'
                  }}
                >
                  📱 Mobile Screen Focus
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setActiveZoom(1);
                setActiveOffset({ x: 0, y: 0 });
              }}
              style={{
                padding: '5px 12px', background: '#ffffff', border: '1px solid #cbd5e1',
                borderRadius: '6px', color: '#000648', fontWeight: 800, fontSize: '0.75rem',
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px'
              }}
            >
              <HiRefresh size={14} /> Reset Zoom &amp; Position
            </button>
          </div>

          {/* ZOOM SLIDER & ZOOM IN/OUT CONTROLS */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#334155', minWidth: '95px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <HiZoomIn size={16} color="#000648" /> Zoom Scale:
            </span>

            <button
              type="button"
              onClick={() => setActiveZoom((prev) => Math.max(1, Math.round((prev - 0.1) * 100) / 100))}
              disabled={activeZoom <= 1}
              style={{
                width: '32px', height: '32px', borderRadius: '6px', border: '1px solid #cbd5e1',
                background: activeZoom <= 1 ? '#e2e8f0' : '#ffffff', color: '#000648',
                fontWeight: 900, fontSize: '1rem', cursor: activeZoom <= 1 ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}
              title="Zoom Out (-10%)"
            >
              <HiZoomOut size={16} />
            </button>

            <input
              type="range"
              min="1"
              max="2.5"
              step="0.05"
              value={activeZoom}
              onChange={(e) => setActiveZoom(parseFloat(e.target.value))}
              style={{ flex: 1, minWidth: '120px', accentColor: '#000648', cursor: 'pointer' }}
            />

            <button
              type="button"
              onClick={() => setActiveZoom((prev) => Math.min(2.5, Math.round((prev + 0.1) * 100) / 100))}
              disabled={activeZoom >= 2.5}
              style={{
                width: '32px', height: '32px', borderRadius: '6px', border: '1px solid #cbd5e1',
                background: activeZoom >= 2.5 ? '#e2e8f0' : '#ffffff', color: '#000648',
                fontWeight: 900, fontSize: '1rem', cursor: activeZoom >= 2.5 ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}
              title="Zoom In (+10%)"
            >
              <HiZoomIn size={16} />
            </button>

            <span style={{
              background: '#000648', color: '#f2b733', padding: '3px 10px',
              borderRadius: '20px', fontWeight: 900, fontSize: '0.8rem', minWidth: '55px', textAlign: 'center'
            }}>
              {Math.round(activeZoom * 100)}%
            </span>
          </div>

          {/* QUICK POSITION ALIGNMENTS */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569' }}>Quick Align:</span>
            {POSITION_PRESETS.map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => handlePresetPosition(preset)}
                style={{
                  padding: '3px 9px', borderRadius: '6px', border: '1px solid #cbd5e1',
                  background: '#ffffff', color: '#334155', fontSize: '0.72rem', fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>
        <div style={{
          display: 'flex',
          justify: 'flex-end',
          gap: '12px',
          borderTop: '1.5px solid #cbd5e1',
          paddingTop: '14px',
          marginBottom: '16px'
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

        {/* PRESET GALLERY GRID (SHOWN AT BOTTOM) */}
        <div style={{ marginTop: '16px' }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '0.9rem', color: '#000648', fontWeight: 800 }}>
            Choose from Gallery Presets &amp; Uploads ({combinedGalleryImages.length})
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '8px', maxHeight: '180px', overflowY: 'auto', padding: '4px' }}>
            {combinedGalleryImages.map((img, galleryPos) => {
              const isSelected = activeSelectedUrl === img.url;
              return (
                <button
                  type="button"
                  key={img.url ? `gal-${img.url}` : `gal-pos-${galleryPos}`}
                  aria-label={`Select gallery image ${img.label || galleryPos + 1}`}
                  onClick={() => handleGallerySelect(img.url)}
                  style={{
                    position: 'relative',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: isSelected ? '2.5px solid #f2b733' : '1.5px solid #cbd5e1',
                    cursor: 'pointer',
                    aspectRatio: '4/3',
                    background: '#f1f5f9',
                    padding: 0
                  }}
                >
                  <img src={img.url} alt={img.label || 'preset'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  {isSelected && (
                    <div style={{ position: 'absolute', top: 2, right: 2, background: '#f2b733', color: '#000648', borderRadius: '50%', width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 900 }}>
                      ✓
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalJSX, document.body);
}
