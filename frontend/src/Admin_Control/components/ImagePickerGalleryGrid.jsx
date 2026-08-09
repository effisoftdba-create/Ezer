import React from 'react';
import { HiCheck, HiTrash } from 'react-icons/hi';
import { resolveImageSrc } from '../../utils/imageUtils';

function getGalleryTileAspect(aspectRatio) {
  if (!aspectRatio) return '16/9';
  const lower = aspectRatio.toLowerCase();
  if (lower.includes('1:1') || lower.includes('square')) return '1/1';
  if (lower.includes('4:3')) return '4/3';
  if (lower.includes('3:2')) return '3/2';
  return '16/9';
}

export default function ImagePickerGalleryGrid({
  combinedGalleryImages = [],
  activeSelectedUrl = '',
  uploadedImages = [],
  onSelectUrl,
  handleGallerySelect,
  onDeleteUploaded,
  handleDeleteUploadedImage,
  aspectRatio
}) {
  const safeCombined = Array.isArray(combinedGalleryImages) ? combinedGalleryImages : [];
  const safeUploaded = Array.isArray(uploadedImages) ? uploadedImages : [];
  const selectFn = onSelectUrl || handleGallerySelect || (() => {});
  const deleteFn = onDeleteUploaded || handleDeleteUploadedImage || (() => {});
  const tileAspect = getGalleryTileAspect(aspectRatio);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ fontSize: '0.825rem', fontWeight: 800, color: '#000648' }}>
          Option 2: Select from Curated Gallery Presets & Your Uploads ({safeCombined.length})
        </span>
        {safeUploaded.length > 0 && (
          <span style={{ fontSize: '0.725rem', color: '#166534', fontWeight: 700 }}>
            Includes {safeUploaded.length} uploaded picture{safeUploaded.length > 1 ? 's' : ''}
          </span>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(135px, 1fr))', gap: '12px' }}>
        {safeCombined.map((img) => {
          const isSelected = activeSelectedUrl === img.url || activeSelectedUrl === img.fullUrl;
          return (
            <div
              key={img.url}
              style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden' }}
            >
              <button
                type="button"
                onClick={() => selectFn(img.url)}
                aria-label={`Select image: ${img.label}`}
                style={{
                  width: '100%',
                  position: 'relative', borderRadius: '10px', overflow: 'hidden', cursor: 'pointer',
                  border: isSelected ? '3px solid #115DFC' : '1.5px solid #e2e8f0',
                  boxShadow: isSelected ? '0 4px 12px rgba(17, 93, 252, 0.3)' : 'none',
                  aspectRatio: tileAspect,
                  background: '#f8fafc', padding: 0, textAlign: 'left'
                }}
              >
                <img src={resolveImageSrc(img.fullUrl || img.url)} alt={img.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(0,6,72,0.85)',
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
                  onClick={(e) => deleteFn(img.url, e)}
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
