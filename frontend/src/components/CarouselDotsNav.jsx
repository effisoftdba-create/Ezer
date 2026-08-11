import React from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

export default function CarouselDotsNav({
  totalItems = 3,
  activeIndex = 0,
  onPrev,
  onNext,
  onSelectIndex,
  style = {}
}) {
  if (totalItems <= 1) return null;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        margin: '12px auto 0',
        width: '100%',
        ...style
      }}
    >
      {/* Left Chevron Button */}
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous slide"
        style={{
          width: '28px',
          height: '28px',
          minWidth: '28px',
          minHeight: '28px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          flexShrink: 0,
          touchAction: 'manipulation'
        }}
      >
        <span
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            border: '1.5px solid #000648',
            background: '#ffffff',
            color: '#000648',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 4px rgba(0, 6, 72, 0.08)',
            transition: 'background-color 0.2s ease, color 0.2s ease, transform 0.2s ease'
          }}
        >
          <HiChevronLeft size={13} />
        </span>
      </button>

      {/* Middle Pill & Dots Container */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          background: 'rgba(0, 6, 72, 0.05)',
          padding: '4px 10px',
          borderRadius: '50px',
          border: '1px solid rgba(0, 6, 72, 0.08)'
        }}
      >
        {Array.from({ length: totalItems }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onSelectIndex && onSelectIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: '20px',
              height: '20px',
              minWidth: '20px',
              minHeight: '20px',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
              touchAction: 'manipulation'
            }}
          >
            <span
              style={{
                display: 'block',
                width: activeIndex === i ? '12px' : '5px',
                height: '5px',
                borderRadius: '50px',
                background: activeIndex === i ? '#000648' : '#cbd5e1',
                transition: 'width 0.25s ease, background-color 0.25s ease'
              }}
            />
          </button>
        ))}
      </div>

      {/* Right Chevron Button */}
      <button
        type="button"
        onClick={onNext}
        aria-label="Next slide"
        style={{
          width: '28px',
          height: '28px',
          minWidth: '28px',
          minHeight: '28px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          flexShrink: 0,
          touchAction: 'manipulation'
        }}
      >
        <span
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            border: '1.5px solid #000648',
            background: '#000648',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 6px rgba(0, 6, 72, 0.2)',
            transition: 'background-color 0.2s ease, color 0.2s ease, transform 0.2s ease'
          }}
        >
          <HiChevronRight size={13} />
        </span>
      </button>
    </div>
  );
}
