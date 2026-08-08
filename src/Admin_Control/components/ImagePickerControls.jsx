import React from 'react';
import { HiZoomIn, HiZoomOut, HiAdjustments, HiCheck } from 'react-icons/hi';

const ASPECT_RATIO_PRESETS = [
  { label: 'Rectangle (16:9)', value: 'Rectangle (16:9)' },
  { label: 'Standard (4:3)', value: 'Standard (4:3)' },
  { label: 'Square (1:1)', value: 'Square (1:1)' },
  { label: 'Portrait (3:4) 📱', value: 'Portrait / Vertical (3:4)' },
  { label: 'Tall Mobile (9:16)', value: 'Mobile Vertical (9:16)' }
];

export default function ImagePickerControls({
  POSITION_PRESETS,
  dragOffset,
  setDragOffset,
  zoomScale,
  setZoomScale,
  fitMode,
  setFitMode,
  handlePresetPosition,
  aspectRatio,
  onSelectAspectRatio,
  onAutoRemoveBackground
}) {
  return (
    <div style={{ background: '#f1f5f9', border: '1.5px solid #cbd5e1', borderRadius: '14px', padding: '16px', marginBottom: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#000648', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <HiAdjustments color="#115DFC" size={18} /> Interactive Fit, Aspect Ratio & Position Controls
        </span>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
          {onAutoRemoveBackground && (
            <button
              type="button"
              onClick={onAutoRemoveBackground}
              title="Automatically remove white/black/checkerboard background box"
              style={{
                padding: '4px 12px', background: 'linear-gradient(135deg, #115DFC, #7c3aed)',
                color: '#ffffff', border: 'none', borderRadius: '6px',
                fontWeight: 800, fontSize: '0.75rem', cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(17,93,252,0.25)',
                display: 'flex', alignItems: 'center', gap: '4px'
              }}
            >
              ✨ Auto-Remove Background
            </button>
          )}
          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#115DFC', background: '#e0e7ff', padding: '3px 10px', borderRadius: '6px' }}>
            Zoom: {Math.round(zoomScale * 100)}%
          </span>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#166534', background: '#dcfce7', padding: '3px 10px', borderRadius: '6px' }}>
            Fit Mode: {fitMode === 'contain' ? 'Full Image (Contain)' : 'Cover (Fill)'}
          </span>
        </div>
      </div>


      {/* ASPECT RATIO SELECTOR PRESETS BAR */}
      {onSelectAspectRatio && (
        <div style={{ marginBottom: '14px', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '10px', padding: '10px' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#000648', marginBottom: '6px' }}>
            Target Container Aspect Ratio (Choose height high vs width wide preview):
          </div>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {ASPECT_RATIO_PRESETS.map((ar) => {
              const isSel = (aspectRatio || '').toLowerCase().includes(ar.value.toLowerCase().split(' ')[0]);
              return (
                <button
                  key={ar.value}
                  type="button"
                  onClick={() => onSelectAspectRatio(ar.value)}
                  style={{
                    padding: '5px 12px', borderRadius: '6px',
                    border: isSel ? '2px solid #115DFC' : '1px solid #cbd5e1',
                    background: isSel ? '#000648' : '#f8fafc',
                    color: isSel ? '#f2b733' : '#334155',
                    fontWeight: isSel ? 800 : 600, fontSize: '0.75rem', cursor: 'pointer'
                  }}
                >
                  {ar.label}
                </button>
              );
            })}
          </div>
        </div>
      )}

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
            2. Quick Alignment & Manual 4-Way Nudge Controls
          </div>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '10px' }}>
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

          {/* Explicit Directional Nudge Buttons (Left, Right, Up, Down) */}
          {setDragOffset && (
            <div style={{ background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
              <span style={{ fontSize: '0.725rem', fontWeight: 800, color: '#000648' }}>
                Nudge Position:
              </span>
              <div style={{ display: 'flex', gap: '4px' }}>
                <button
                  type="button"
                  onClick={() => setDragOffset((prev) => ({ ...prev, x: prev.x - 15 }))}
                  title="Move Image Left"
                  style={{ padding: '3px 8px', background: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '5px', fontWeight: 800, fontSize: '0.75rem', cursor: 'pointer', color: '#000648' }}
                >
                  ◄ Left
                </button>
                <button
                  type="button"
                  onClick={() => setDragOffset((prev) => ({ ...prev, x: prev.x + 15 }))}
                  title="Move Image Right"
                  style={{ padding: '3px 8px', background: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '5px', fontWeight: 800, fontSize: '0.75rem', cursor: 'pointer', color: '#000648' }}
                >
                  Right ►
                </button>
                <button
                  type="button"
                  onClick={() => setDragOffset((prev) => ({ ...prev, y: prev.y - 15 }))}
                  title="Move Image Up"
                  style={{ padding: '3px 8px', background: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '5px', fontWeight: 800, fontSize: '0.75rem', cursor: 'pointer', color: '#000648' }}
                >
                  ▲ Up
                </button>
                <button
                  type="button"
                  onClick={() => setDragOffset((prev) => ({ ...prev, y: prev.y + 15 }))}
                  title="Move Image Down"
                  style={{ padding: '3px 8px', background: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '5px', fontWeight: 800, fontSize: '0.75rem', cursor: 'pointer', color: '#000648' }}
                >
                  ▼ Down
                </button>
                <button
                  type="button"
                  onClick={() => setDragOffset({ x: 0, y: 0 })}
                  title="Reset to Center"
                  style={{ padding: '3px 8px', background: '#e0e7ff', border: '1px solid #c7d2fe', borderRadius: '5px', fontWeight: 800, fontSize: '0.75rem', cursor: 'pointer', color: '#115DFC' }}
                >
                  ↺ Reset
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Zoom & Direct Position Sliders */}
        <div>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
            3. Zoom Level & Up/Down Position Sliders
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <button
              type="button"
              onClick={() => setZoomScale((z) => Math.max(0.5, +(z - 0.15).toFixed(2)))}
              aria-label="Zoom out"
              style={{
                padding: '6px 10px', background: '#ffffff', border: '1.5px solid #cbd5e1',
                borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px',
                fontSize: '0.75rem', fontWeight: 800, color: '#000648'
              }}
            >
              <HiZoomOut size={14} /> Out
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
                padding: '6px 10px', background: '#ffffff', border: '1.5px solid #cbd5e1',
                borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px',
                fontSize: '0.75rem', fontWeight: 800, color: '#000648'
              }}
            >
              <HiZoomIn size={14} /> In
            </button>
          </div>

          {/* Vertical Up/Down Slider */}
          <div style={{ background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '8px', marginBottom: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.725rem', fontWeight: 800, color: '#000648', marginBottom: '4px' }}>
              <span>▲ Move Up / Down ▼</span>
              <span style={{ color: '#115DFC' }}>Y: {50 + dragOffset.y}%</span>
            </div>
            <input
              type="range"
              min="-45"
              max="45"
              value={dragOffset.y}
              onChange={(e) => setDragOffset((prev) => ({ ...prev, y: parseInt(e.target.value, 10) }))}
              aria-label="Vertical Up Down position slider"
              style={{ width: '100%', accentColor: '#000648', cursor: 'pointer', height: '6px' }}
            />
          </div>

          {/* Horizontal Left/Right Slider */}
          <div style={{ background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.725rem', fontWeight: 800, color: '#000648', marginBottom: '4px' }}>
              <span>◄ Move Left / Right ►</span>
              <span style={{ color: '#115DFC' }}>X: {50 + dragOffset.x}%</span>
            </div>
            <input
              type="range"
              min="-45"
              max="45"
              value={dragOffset.x}
              onChange={(e) => setDragOffset((prev) => ({ ...prev, x: parseInt(e.target.value, 10) }))}
              aria-label="Horizontal Left Right position slider"
              style={{ width: '100%', accentColor: '#000648', cursor: 'pointer', height: '6px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

