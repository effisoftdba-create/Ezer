import React from 'react';
import { HiCheck, HiTrash } from 'react-icons/hi';
import { resolveImageSrc } from '../../utils/imageUtils';

export default function ImagePickerGalleryGrid({
  combinedGalleryImages,
  activeSelectedUrl,
  uploadedImages,
  onSelectUrl,
  onDeleteUploaded
}) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ fontSize: '0.825rem', fontWeight: 800, color: '#000648' }}>
          Option 2: Select from Curated Gallery Presets & Your Uploads ({combinedGalleryImages.length})
        </span>
        {uploadedImages.length > 0 && (
          <span style={{ fontSize: '0.725rem', color: '#166534', fontWeight: 700 }}>
            Includes {uploadedImages.length} uploaded picture{uploadedImages.length > 1 ? 's' : ''}
          </span>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(135px, 1fr))', gap: '12px' }}>
        {combinedGalleryImages.map((img) => {
          const isSelected = activeSelectedUrl === img.url;
          return (
            <div
              key={img.url}
              style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden' }}
            >
              <button
                type="button"
                onClick={() => onSelectUrl(img.url)}
                aria-label={`Select image: ${img.label}`}
                style={{
                  width: '100%',
                  position: 'relative', borderRadius: '10px', overflow: 'hidden', cursor: 'pointer',
                  border: isSelected ? '3px solid #115DFC' : '1.5px solid #e2e8f0',
                  boxShadow: isSelected ? '0 4px 12px rgba(17, 93, 252, 0.3)' : 'none',
                  height: '90px', background: '#f8fafc', padding: 0, textAlign: 'left'
                }}
              >
                <img src={resolveImageSrc(img.url)} alt={img.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute', bottom: 0, insetX: 0, background: 'rgba(0,6,72,0.85)',
                  color: '#fff', fontSize: '0.68rem', padding: '3px 6px', fontWeight: 700,
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
                }}>
                  {img.label}
                </div>
                {isSelected && (
                  <div style={{
                    position: 'absolute', top: '6px', right: '6px', background: '#115DFC',
                    color: '#fff', borderRadius: '50%', padding: '2px', display: 'flex'
                  }}>
                    <HiCheck size={14} />
                  </div>
                )}
              </button>

              {img.isUploaded && (
                <button
                  type="button"
                  onClick={(e) => onDeleteUploaded(img.url, e)}
                  title="Remove uploaded image from storage"
                  aria-label={`Delete uploaded image ${img.label}`}
                  style={{
                    position: 'absolute', top: '6px', left: '6px', background: 'rgba(220,38,38,0.9)',
                    color: '#ffffff', border: 'none', borderRadius: '4px', padding: '3px 5px',
                    cursor: 'pointer', display: 'flex', alignItems: 'center', zIndex: 10
                  }}
                >
                  <HiTrash size={12} />
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
