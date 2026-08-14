import React, { useState } from 'react';
import {
  HiDesktopComputer,
  HiDeviceMobile,
  HiViewGrid,
  HiSelector,
  HiSparkles,
  HiRefresh
} from 'react-icons/hi';
import { resolveImageSrc } from '../utils/imageUtils';

// 3x3 grid cell IDs for the Rule of Thirds overlay
const GRID_CELLS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function ImagePickerPreviewBox({
  currentImage,
  currentFit,
  currentPosition,
  previewDims,
  activeSelectedUrl,
  fitMode,
  dragOffset = { x: 0, y: 0 },
  zoomScale = 1,
  mobileDragOffset = { x: 0, y: 0 },
  mobileZoom = 1,
  activeTarget = 'desktop',
  setActiveTarget,
  isDragging,
  handleMouseDown
}) {
  const [devicePreviewMode, setDevicePreviewMode] = useState('dual');
  const [showGridLines, setShowGridLines] = useState(true);
  const [aspectRatioMode, setAspectRatioMode] = useState(null);

  const activeSrc = resolveImageSrc(activeSelectedUrl);
  const currentRatio = aspectRatioMode || previewDims.ratio;

  const desktopPosX = Math.min(100, Math.max(0, 50 - dragOffset.x));
  const desktopPosY = Math.min(100, Math.max(0, 50 - dragOffset.y));
  const desktopPosStr = `${desktopPosX}% ${desktopPosY}%`;

  const mobPosX = Math.min(100, Math.max(0, 50 - mobileDragOffset.x));
  const mobPosY = Math.min(100, Math.max(0, 50 - mobileDragOffset.y));
  const mobilePosStr = `${mobPosX}% ${mobPosY}%`;

  const onMouseDownDesktop = (e) => {
    e.preventDefault();
    if (typeof handleMouseDown === 'function') handleMouseDown(e.clientX, e.clientY, 'desktop');
  };

  const onTouchStartDesktop = (e) => {
    if (e.touches && e.touches[0]) {
      if (typeof handleMouseDown === 'function') handleMouseDown(e.touches[0].clientX, e.touches[0].clientY, 'desktop');
    }
  };

  const onMouseDownMobile = (e) => {
    e.preventDefault();
    if (typeof handleMouseDown === 'function') handleMouseDown(e.clientX, e.clientY, 'mobile');
  };

  const onTouchStartMobile = (e) => {
    if (e.touches && e.touches[0]) {
      if (typeof handleMouseDown === 'function') handleMouseDown(e.touches[0].clientX, e.touches[0].clientY, 'mobile');
    }
  };

  return (
    <div style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '16px', padding: '18px', marginBottom: '20px' }}>
      {/* Device View & Grid Overlay Header Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 900, color: '#000648', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'flex', alignItems: 'center', gap: '6px' }}>
            Device Screen Adjustment & Live Preview
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          {/* Rule of Thirds Grid Toggle */}
          <button
            type="button"
            onClick={() => setShowGridLines((prev) => !prev)}
            aria-label="Toggle rule of thirds grid lines overlay"
            style={{
              padding: '4px 10px', borderRadius: '6px',
              border: showGridLines ? '1.5px solid #115DFC' : '1px solid #cbd5e1',
              background: showGridLines ? '#eff6ff' : '#ffffff',
              color: showGridLines ? '#115DFC' : '#475569',
              fontWeight: 700, fontSize: '0.73rem', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '4px'
            }}
          >
            <HiViewGrid size={14} /> Grid {showGridLines ? 'ON' : 'OFF'}
          </button>

          {/* Device Preview Mode Switcher */}
          <div style={{ display: 'flex', background: '#e2e8f0', borderRadius: '8px', padding: '3px', gap: '3px' }}>
            <button
              type="button"
              onClick={() => setDevicePreviewMode('desktop')}
              style={{
                padding: '4px 10px', borderRadius: '6px', border: 'none',
                background: devicePreviewMode === 'desktop' ? '#000648' : 'transparent',
                color: devicePreviewMode === 'desktop' ? '#f2b733' : '#475569',
                fontWeight: devicePreviewMode === 'desktop' ? 800 : 600,
                fontSize: '0.73rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px'
              }}
            >
              <HiDesktopComputer size={14} /> Desktop
            </button>

            <button
              type="button"
              onClick={() => setDevicePreviewMode('mobile')}
              style={{
                padding: '4px 10px', borderRadius: '6px', border: 'none',
                background: devicePreviewMode === 'mobile' ? '#000648' : 'transparent',
                color: devicePreviewMode === 'mobile' ? '#f2b733' : '#475569',
                fontWeight: devicePreviewMode === 'mobile' ? 800 : 600,
                fontSize: '0.73rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px'
              }}
            >
              <HiDeviceMobile size={14} /> Mobile Phone
            </button>

            <button
              type="button"
              onClick={() => setDevicePreviewMode('dual')}
              style={{
                padding: '4px 10px', borderRadius: '6px', border: 'none',
                background: devicePreviewMode === 'dual' ? '#000648' : 'transparent',
                color: devicePreviewMode === 'dual' ? '#f2b733' : '#475569',
                fontWeight: devicePreviewMode === 'dual' ? 800 : 600,
                fontSize: '0.73rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px'
              }}
            >
              <HiRefresh size={14} /> Dual Both
            </button>
          </div>
        </div>
      </div>

      {/* Main Interactive Drag & Preview Area */}
      <div style={{ display: 'grid', gridTemplateColumns: devicePreviewMode === 'dual' ? '1fr 1fr' : '1fr', gap: '16px', alignItems: 'start' }}>
        
        {/* DESKTOP VIEW CONTAINER */}
        {(devicePreviewMode === 'desktop' || devicePreviewMode === 'dual') && (
          <div 
            style={{ 
              background: '#ffffff', 
              border: activeTarget === 'desktop' ? '2px solid #000648' : '1.5px solid #cbd5e1', 
              borderRadius: '12px', 
              padding: '14px',
              boxShadow: activeTarget === 'desktop' ? '0 4px 14px rgba(0,6,72,0.1)' : 'none'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#000648', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <HiDesktopComputer color="#115DFC" size={16} /> Desktop View ({currentRatio})
              </span>
              <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#166534', background: '#dcfce7', padding: '1px 6px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '3px' }}>
                <HiSelector size={12} /> Drag image to adjust PC focus
              </span>
            </div>

            <div
              role="button"
              tabIndex={0}
              aria-label="Desktop screen preview - drag image to adjust position"
              onMouseDown={onMouseDownDesktop}
              onTouchStart={onTouchStartDesktop}
              onKeyDown={(e) => {
                if (e.key === 'ArrowLeft') handleMouseDown(0, 0, 'desktop');
              }}
              style={{
                aspectRatio: currentRatio,
                maxHeight: '260px',
                borderRadius: '10px',
                overflow: 'hidden',
                border: '2px solid #115DFC',
                background: (previewDims.ratio === '180/48' || previewDims.ratio.includes('180')) ? '#ffffff' : '#000648',
                boxShadow: '0 4px 14px rgba(17,93,252,0.2)',
                position: 'relative',
                cursor: (isDragging && activeTarget === 'desktop') ? 'grabbing' : 'grab',
                userSelect: 'none',
                touchAction: 'none'
              }}
            >
              <img
                src={activeSrc}
                alt="Desktop preview"
                style={{
                  width: (previewDims.ratio === '180/48' || previewDims.ratio.includes('180')) ? 'auto' : '100%',
                  height: (previewDims.ratio === '180/48' || previewDims.ratio.includes('180')) ? 'auto' : '100%',
                  maxWidth: (previewDims.ratio === '180/48' || previewDims.ratio.includes('180')) ? '80%' : '100%',
                  maxHeight: (previewDims.ratio === '180/48' || previewDims.ratio.includes('180')) ? '65%' : '100%',
                  margin: 'auto',
                  display: 'block',
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  objectFit: fitMode,
                  objectPosition: desktopPosStr,
                  transform: `scale(${zoomScale})`,
                  transformOrigin: desktopPosStr,
                  pointerEvents: 'none',
                  transition: isDragging ? 'none' : 'transform 0.15s ease, object-position 0.15s ease'
                }}
              />

              {/* Rule of Thirds Grid Overlay */}
              {showGridLines && (() => {
                const is180Ratio = (previewDims.ratio === '180/48' || previewDims.ratio.includes('180'));
                const cellBorder = is180Ratio ? '0.5px dashed rgba(0,0,0,0.15)' : '0.5px dashed rgba(255,255,255,0.2)';
                const gridBorder = is180Ratio ? '1px dashed rgba(0,0,0,0.2)' : '1px dashed rgba(255,255,255,0.25)';
                return (
                  <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', border: gridBorder, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '1fr 1fr 1fr' }}>
                    {GRID_CELLS.map((cellId) => (
                      <div key={cellId} style={{ border: cellBorder }} />
                    ))}
                  </div>
                );
              })()}

              <div style={{
                position: 'absolute', bottom: '6px', right: '6px', background: 'rgba(0,6,72,0.85)',
                color: '#f2b733', fontSize: '0.65rem', padding: '3px 8px', borderRadius: '4px',
                pointerEvents: 'none', fontWeight: 700, border: '1px solid rgba(242,183,51,0.4)'
              }}>
                PC Pos: {desktopPosStr} | Zoom: {Math.round(zoomScale * 100)}%
              </div>
            </div>
          </div>
        )}

        {/* MOBILE PHONE FRAME SCREEN MOCKUP */}
        {(devicePreviewMode === 'mobile' || devicePreviewMode === 'dual') && (
          <div 
            style={{ 
              background: '#ffffff', 
              border: activeTarget === 'mobile' ? '2px solid #000648' : '1.5px solid #cbd5e1', 
              borderRadius: '12px', 
              padding: '14px', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              boxShadow: activeTarget === 'mobile' ? '0 4px 14px rgba(0,6,72,0.1)' : 'none'
            }}
          >
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#000648', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <HiDeviceMobile color="#115DFC" size={16} /> Mobile View ({previewDims.label || currentRatio})
              </span>
              <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#115DFC', background: '#e0e7ff', padding: '1px 6px', borderRadius: '4px' }}>
                Separate Mobile Zoom
              </span>
            </div>

            {/* REALISTIC SMARTPHONE MOCKUP BODY */}
            <div
              style={{
                width: '190px',
                height: '260px',
                background: '#0f172a',
                borderRadius: '24px',
                padding: '10px 8px 12px',
                boxShadow: '0 12px 28px rgba(0,6,72,0.3)',
                border: '3.5px solid #334155',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              {/* Phone Speaker Notch */}
              <div style={{ width: '50px', height: '10px', background: '#1e293b', borderRadius: '0 0 8px 8px', marginBottom: '6px', position: 'relative', zIndex: 10 }}>
                <div style={{ width: '12px', height: '2.5px', background: '#475569', borderRadius: '2px', margin: '3px auto 0' }} />
              </div>

              {/* Screen Area with Drag Event Handlers */}
              <div
                role="button"
                tabIndex={0}
                aria-label="Mobile screen preview - drag image to adjust position"
                onMouseDown={onMouseDownMobile}
                onTouchStart={onTouchStartMobile}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowLeft') handleMouseDown(0, 0, 'mobile');
                }}
                style={{
                  width: '100%',
                  aspectRatio: currentRatio,
                  maxHeight: '190px',
                  background: (previewDims.ratio === '180/48' || previewDims.ratio.includes('180')) ? '#ffffff' : '#000648',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  position: 'relative',
                  border: '1.5px solid #115DFC',
                  cursor: (isDragging && activeTarget === 'mobile') ? 'grabbing' : 'grab',
                  userSelect: 'none',
                  touchAction: 'none',
                  margin: 'auto 0'
                }}
              >
                <img
                  src={activeSrc}
                  alt="Mobile screen preview"
                  style={{
                    width: (previewDims.ratio === '180/48' || previewDims.ratio.includes('180')) ? 'auto' : '100%',
                    height: (previewDims.ratio === '180/48' || previewDims.ratio.includes('180')) ? 'auto' : '100%',
                    maxWidth: (previewDims.ratio === '180/48' || previewDims.ratio.includes('180')) ? '80%' : '100%',
                    maxHeight: (previewDims.ratio === '180/48' || previewDims.ratio.includes('180')) ? '65%' : '100%',
                    margin: 'auto',
                    display: 'block',
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    objectFit: fitMode,
                    objectPosition: mobilePosStr,
                    transform: `scale(${mobileZoom})`,
                    transformOrigin: mobilePosStr,
                    pointerEvents: 'none',
                    transition: isDragging ? 'none' : 'transform 0.15s ease, object-position 0.15s ease'
                  }}
                />

                {/* Simulated Overlay Badge Pill */}
                <div
                  style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    background: 'rgba(0,6,56,0.85)',
                    color: '#ffffff',
                    padding: '2px 6px',
                    borderRadius: '50px',
                    border: '1px solid #f2b733',
                    fontSize: '0.55rem',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '3px',
                    pointerEvents: 'none',
                    zIndex: 5
                  }}
                >
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#f2b733' }} />
                  <span>EZER</span>
                </div>

                {/* Grid Overlay on Mobile Frame */}
                {showGridLines && (
                  <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '1fr 1fr 1fr' }}>
                    {[...Array(9)].map((_, i) => (
                      <div key={i} style={{ border: '0.5px dashed rgba(255,255,255,0.2)' }} />
                    ))}
                  </div>
                )}
              </div>

              <div style={{ fontSize: '0.62rem', color: '#f2b733', marginTop: '6px', fontWeight: 800 }}>
                Mobile Pos: {mobilePosStr} | {Math.round(mobileZoom * 100)}%
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
