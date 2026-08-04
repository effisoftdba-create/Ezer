import React from 'react';
import { HiArrowRight, HiSelector } from 'react-icons/hi';
import { resolveImageSrc } from '../../utils/imageUtils';

export default function ImagePickerPreviewBox({
  currentImage,
  currentFit,
  currentPosition,
  previewDims,
  activeSelectedUrl,
  fitMode,
  dragOffset,
  zoomScale,
  isDragging,
  handleMouseDown,
  handleMouseMove,
  handleMouseUp
}) {
  return (
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
            Pos: {50 + dragOffset.x}% {50 + dragOffset.y}% | Fit: {fitMode}
          </div>
        </div>
      </div>
    </div>
  );
}
