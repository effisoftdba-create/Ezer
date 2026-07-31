import React, { useRef } from 'react';
import { HiAcademicCap, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

export default function FacultyShowcase({ faculty, title }) {
  const sliderRef = useRef(null);

  if (!faculty || faculty.length === 0) return null;

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section style={{ margin: '64px 0', width: '100%', maxWidth: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <span className="section-tag">
            <HiAcademicCap size={14} /> Senior Mentors
          </span>
          <h3 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, color: '#0f172a', marginTop: '8px', marginBottom: '6px' }}>
            {title || 'Learn Directly From Senior Engineers & Academic Mentors'}
          </h3>
          <p style={{ color: '#64748b', fontSize: '0.95rem', maxWidth: '680px', margin: 0 }}>
            Gain real-world insights from instructors with years of industry tenure across top technology firms.
          </p>
        </div>

        {/* Scroll Navigation Controls */}
        <div style={{ display: 'flex', gap: '8px', marginLeft: 'auto' }}>
          <button
            type="button"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              color: '#0f172a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <HiChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: '#0f172a',
              border: '1px solid #0f172a',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <HiChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div
        ref={sliderRef}
        className="no-scrollbar"
        style={{
          display: 'flex',
          gap: '24px',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          paddingBottom: '16px',
          width: '100%',
          maxWidth: '100%',
        }}
      >
        {faculty.map((prof) => (
          <div
            key={prof.name}
            style={{
              flex: '0 0 min(320px, 85vw)',
              scrollSnapAlign: 'start',
              background: '#ffffff',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              padding: '24px',
              boxShadow: '0 1px 3px rgba(15, 23, 42, 0.05)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <img
                src={prof.image}
                alt={prof.name}
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '1px solid #cbd5e1',
                }}
              />
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '2px' }}>
                  {prof.name}
                </h4>
                <div style={{ fontSize: '0.8rem', color: '#2563eb', fontWeight: 600 }}>
                  {prof.designation}
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5, margin: 0, flexGrow: 1 }}>
              {prof.bio || prof.experience}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
