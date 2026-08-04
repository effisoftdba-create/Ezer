import React from 'react';
import { HiZoomIn, HiZoomOut } from 'react-icons/hi';

export default function ImagePickerControls({
  POSITION_PRESETS,
  dragOffset,
  zoomScale,
  setZoomScale,
  handlePresetPosition
}) {
  return (
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
              aria-label="Image zoom level slider"
              style={{ flex: 1, accentColor: '#115DFC', cursor: 'pointer' }}
            />
            <button
              type="button"
              onClick={() => setZoomScale((z) => Math.min(2.5, +(z + 0.15).toFixed(2)))}
              aria-label="Zoom in"
              style={{
                padding: '6px 10px', background: '#ffffff', border: '1.5px solid #cbd5e1',
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
  );
}
