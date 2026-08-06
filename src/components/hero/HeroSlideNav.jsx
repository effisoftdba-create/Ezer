import React from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

export default function HeroSlideNav({ slides, safeActive, handlePrev, handleNext, setActive }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: 'auto' }}>
      <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
        <button
          type="button"
          onClick={handlePrev}
          style={{ background: 'none', border: 'none', color: '#000638', cursor: 'pointer', padding: '4px', display: 'flex', alignItems: 'center' }}
          aria-label="Previous slide"
        >
          <HiChevronLeft size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(0,6,56,0.06)', padding: '4px 10px', borderRadius: '50px' }}>
          {slides.map((s, i) => (
            <button
              key={s.id || s.badge || s.headline}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                padding: 0,
                border: 'none',
                width: safeActive === i ? '20px' : '7px',
                height: '7px',
                borderRadius: '4px',
                cursor: 'pointer',
                background: safeActive === i ? '#000638' : '#cbd5e1',
                borderTop: safeActive === i ? '2px solid #f2b733' : 'none',
                transition: 'width 0.3s ease, background-color 0.3s ease',
              }}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={handleNext}
          style={{ background: 'none', border: 'none', color: '#000638', cursor: 'pointer', padding: '4px', display: 'flex', alignItems: 'center' }}
          aria-label="Next slide"
        >
          <HiChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
