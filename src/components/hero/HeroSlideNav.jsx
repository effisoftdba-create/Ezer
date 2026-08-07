import React from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

export default function HeroSlideNav({ slides, safeActive, handlePrev, handleNext, setActive }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: 'auto', width: '100%' }}>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center' }}>
        <button
          type="button"
          onClick={handlePrev}
          style={{
            width: '36px', height: '36px', borderRadius: '50%',
            border: '1.5px solid #000648', background: '#ffffff',
            color: '#000648', cursor: 'pointer', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 6px rgba(0,6,72,0.08)'
          }}
          aria-label="Previous slide"
        >
          <HiChevronLeft size={18} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(0,6,72,0.06)', padding: '6px 12px', borderRadius: '50px' }}>
          {slides.map((s, i) => (
            <button
              key={s.id || s.badge || s.headline}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                padding: 0,
                border: 'none',
                width: safeActive === i ? '22px' : '8px',
                height: '8px',
                borderRadius: '50px',
                cursor: 'pointer',
                background: safeActive === i ? '#000648' : '#cbd5e1',
                transition: 'width 0.3s ease, background-color 0.3s ease',
              }}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={handleNext}
          style={{
            width: '36px', height: '36px', borderRadius: '50%',
            border: '1.5px solid #000648', background: '#000648',
            color: '#ffffff', cursor: 'pointer', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 10px rgba(0,6,72,0.2)'
          }}
          aria-label="Next slide"
        >
          <HiChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
