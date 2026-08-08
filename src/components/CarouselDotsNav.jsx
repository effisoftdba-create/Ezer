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
        gap: '12px',
        margin: '20px auto 0',
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
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: '1.5px solid #000648',
          background: '#ffffff',
          color: '#000648',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 2px 6px rgba(0, 6, 72, 0.08)',
          transition: 'background-color 0.2s ease, color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
          padding: 0,
          flexShrink: 0
        }}
      >
        <HiChevronLeft size={18} />
      </button>

      {/* Middle Pill & Dots Container */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          background: 'rgba(0, 6, 72, 0.06)',
          padding: '5px 12px',
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
              padding: 0,
              border: 'none',
              width: activeIndex === i ? '18px' : '6px',
              height: '6px',
              borderRadius: '50px',
              cursor: 'pointer',
              background: activeIndex === i ? '#000648' : '#cbd5e1',
              transition: 'width 0.3s ease, background-color 0.3s ease'
            }}
          />
        ))}
      </div>

      {/* Right Chevron Button */}
      <button
        type="button"
        onClick={onNext}
        aria-label="Next slide"
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: '1.5px solid #000648',
          background: '#000648',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 10px rgba(0, 6, 72, 0.2)',
          transition: 'background-color 0.2s ease, color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
          padding: 0,
          flexShrink: 0
        }}
      >
        <HiChevronRight size={18} />
      </button>
    </div>
  );
}
