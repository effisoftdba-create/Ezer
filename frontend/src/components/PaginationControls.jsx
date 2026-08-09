import React from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

export default function PaginationControls({
  currentPage = 1,
  pageSize = 20,
  totalItems = 0,
  onPageChange,
  onPageSizeChange
}) {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(totalItems, currentPage * pageSize);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
        padding: '16px 20px',
        background: '#ffffff',
        border: '1.5px solid #e2e8f0',
        borderRadius: '12px',
        marginTop: '20px',
        boxShadow: '0 2px 8px rgba(0, 6, 72, 0.04)',
      }}
    >
      {/* Item Counter Summary */}
      <div style={{ fontSize: '0.85rem', color: '#475569', fontWeight: 600 }}>
        Showing <span style={{ color: '#000648', fontWeight: 800 }}>{startItem}</span> –{' '}
        <span style={{ color: '#000648', fontWeight: 800 }}>{endItem}</span> of{' '}
        <span style={{ color: '#000648', fontWeight: 800 }}>{totalItems}</span> items
      </div>

      {/* Pagination Controls & Page Size Selector */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {onPageSizeChange && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#475569' }}>
            <span>Per page:</span>
            <select
              aria-label="Select items per page"
              value={pageSize}
              onChange={(e) => onPageSizeChange(Number(e.target.value))}
              style={{
                padding: '4px 8px',
                borderRadius: '6px',
                border: '1.5px solid #cbd5e1',
                fontSize: '0.82rem',
                fontWeight: 700,
                color: '#000648',
                background: '#ffffff',
                cursor: 'pointer'
              }}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>
        )}

        {/* Page Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <button
            type="button"
            disabled={currentPage <= 1}
            onClick={() => onPageChange(currentPage - 1)}
            style={{
              padding: '6px 12px',
              borderRadius: '6px',
              border: '1.5px solid #cbd5e1',
              background: currentPage <= 1 ? '#f1f5f9' : '#ffffff',
              color: currentPage <= 1 ? '#94a3b8' : '#000648',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: currentPage <= 1 ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <HiChevronLeft size={16} /> Prev
          </button>

          <span style={{ fontSize: '0.84rem', fontWeight: 800, color: '#000648', padding: '0 8px' }}>
            Page {currentPage} of {totalPages}
          </span>

          <button
            type="button"
            disabled={currentPage >= totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            style={{
              padding: '6px 12px',
              borderRadius: '6px',
              border: '1.5px solid #cbd5e1',
              background: currentPage >= totalPages ? '#f1f5f9' : '#000648',
              color: currentPage >= totalPages ? '#94a3b8' : '#ffffff',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: currentPage >= totalPages ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            Next <HiChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
