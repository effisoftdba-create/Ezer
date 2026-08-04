import React from 'react';
import { HiZoomIn, HiZoomOut, HiAdjustments, HiCheck } from 'react-icons/hi';

export default function ImagePickerControls({
  POSITION_PRESETS,
  dragOffset,
  zoomScale,
  setZoomScale,
  fitMode,
  setFitMode,
  handlePresetPosition
}) {
  return (
    <div style={{ background: '#f1f5f9', border: '1.5px solid #cbd5e1', borderRadius: '14px', padding: '16px', marginBottom: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#000648', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <HiAdjustments color="#115DFC" size={18} /> Interactive Fit & Position Controls
        </span>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#115DFC', background: '#e0e7ff', padding: '3px 10px', borderRadius: '6px' }}>
            Zoom: {Math.round(zoomScale * 100)}%
          </span>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#166534', background: '#dcfce7', padding: '3px 10px', borderRadius: '6px' }}>
            Fit Mode: {fitMode === 'contain' ? 'Full Image (Contain)' : 'Cover (Fill)'}
          </span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '16px', alignItems: 'start' }}>
        {/* Fit Mode Toggle & Presets */}
        <div>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
            1. Image Display Fit Mode (Crop vs Full Image)
          </div>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
            <button
              type="button"
              onClick={() => setFitMode('cover')}
              style={{
                flex: 1, padding: '8px 10px', borderRadius: '8px',
                border: fitMode === 'cover' ? '2px solid #115DFC' : '1px solid #cbd5e1',
                background: fitMode === 'cover' ? '#000648' : '#ffffff',
                color: fitMode === 'cover' ? '#f2b733' : '#334155',
                fontWeight: 800, fontSize: '0.75rem', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px'
              }}
            >
              {fitMode === 'cover' && <HiCheck size={14} />} Cover (Fill Container)
            </button>
            <button
              type="button"
              onClick={() => setFitMode('contain')}
              style={{
                flex: 1, padding: '8px 10px', borderRadius: '8px',
                border: fitMode === 'contain' ? '2px solid #115DFC' : '1px solid #cbd5e1',
                background: fitMode === 'contain' ? '#000648' : '#f2b733',
                color: fitMode === 'contain' ? '#f2b733' : '#000648',
                fontWeight: 800, fontSize: '0.75rem', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px'
              }}
            >
              {fitMode === 'contain' && <HiCheck size={14} />} Contain (Full Uncropped Image)
            </button>
          </div>

          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
            2. Quick Alignment Presets
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

        {/* Zoom Slider */}
        <div>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
            3. Zoom Level Control
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
            <button
              type="button"
              onClick={() => setZoomScale((z) => Math.max(0.5, +(z - 0.15).toFixed(2)))}
              aria-label="Zoom out"
              style={{
                padding: '8px 12px', background: '#ffffff', border: '1.5px solid #cbd5e1',
                borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px',
                fontSize: '0.75rem', fontWeight: 800, color: '#000648'
              }}
            >
              <HiZoomOut size={16} /> Out
            </button>
            <input
              type="range"
              min="0.5"
              max="3"
              step="0.05"
              value={zoomScale}
              onChange={(e) => setZoomScale(parseFloat(e.target.value))}
              aria-label="Image zoom level slider"
              style={{ flex: 1, accentColor: '#115DFC', cursor: 'pointer', height: '6px' }}
            />
            <button
              type="button"
              onClick={() => setZoomScale((z) => Math.min(3, +(z + 0.15).toFixed(2)))}
              aria-label="Zoom in"
              style={{
                padding: '8px 12px', background: '#ffffff', border: '1.5px solid #cbd5e1',
                borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px',
                fontSize: '0.75rem', fontWeight: 800, color: '#000648'
              }}
            >
              <HiZoomIn size={16} /> In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
