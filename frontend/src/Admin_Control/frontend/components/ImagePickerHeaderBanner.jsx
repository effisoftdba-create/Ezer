import React from 'react';
import { HiX, HiPhotograph } from 'react-icons/hi';

export default function ImagePickerHeaderBanner({
  targetArea,
  aspectRatio,
  recommendedDimensions,
  onClose
}) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800, color: '#000648', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <HiPhotograph color="#115DFC" size={22} /> Upload, Drag to Move & Select Fit Mode
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

      <div style={{
        background: 'linear-gradient(135deg, #000638 0%, #1e293b 100%)',
        color: '#ffffff', borderRadius: '12px', padding: '10px 16px', marginBottom: '16px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px',
        borderLeft: '4px solid #f2b733'
      }}>
        <div>
          <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#f2b733', fontWeight: 800 }}>
            Target Section: {targetArea}
          </span>
          <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>
            Required Format: <span style={{ color: '#60a5fa' }}>{aspectRatio}</span>
          </div>
        </div>
        <div style={{
          background: 'rgba(242, 183, 51, 0.15)', border: '1px solid #f2b733', color: '#f2b733',
          fontSize: '0.75rem', fontWeight: 800, padding: '4px 10px', borderRadius: '6px'
        }}>
          Rec. Size: {recommendedDimensions}
        </div>
      </div>
    </div>
  );
}
