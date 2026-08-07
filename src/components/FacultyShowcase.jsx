import React, { useRef } from 'react';
import { HiAcademicCap, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useSiteData } from '../Admin_Control/context/SiteContext';
import { resolveImageSrc } from '../utils/imageUtils';

export default function FacultyShowcase({ faculty: propFaculty, title: propTitle }) {
  const { seniorMentors, mentorsHeader } = useSiteData();
  const sliderRef = useRef(null);

  const displayFaculty = (seniorMentors && seniorMentors.length > 0) ? seniorMentors : (propFaculty || []);
  const headerData = mentorsHeader || {
    tag: 'SENIOR MENTORS',
    headline: propTitle || 'Learn Directly From Senior Engineers & Academic Mentors',
    sub: 'Gain real-world insights from instructors with years of industry tenure across top technology firms.'
  };

  if (!displayFaculty || displayFaculty.length === 0) return null;

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section style={{ margin: '20px 0', width: '100%', maxWidth: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <span className="section-tag" style={{ background: 'rgba(0, 6, 56, 0.06)', color: '#000638', border: '1px solid rgba(0, 6, 56, 0.12)' }}>
            <HiAcademicCap size={14} color="#000638" /> {headerData.tag || 'Senior Mentors'}
          </span>
          <h3 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 900, color: '#000638', marginTop: '8px', marginBottom: '6px' }}>
            {propTitle || headerData.headline}
          </h3>
          <p style={{ color: '#475569', fontSize: '0.95rem', maxWidth: '680px', margin: 0 }}>
            {headerData.sub}
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
              border: '1.5px solid #000638',
              color: '#000638',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 6px rgba(0,6,56,0.08)'
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
              background: '#000638',
              border: '1.5px solid #000638',
              color: '#f2b733',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(0,6,56,0.18)'
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
        {displayFaculty.map((prof) => (
          <div
            key={prof.id || prof.name}
            style={{
              flex: '0 0 min(330px, 85vw)',
              scrollSnapAlign: 'start',
              background: '#ffffff',
              borderRadius: '16px',
              border: '2px solid #000638',
              padding: '24px',
              boxShadow: '0 8px 24px rgba(0, 6, 56, 0.08)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <img
                src={resolveImageSrc(prof.image)}
                alt={prof.name}
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  objectFit: prof.fit || prof.imageFit || 'cover',
                  objectPosition: prof.position || prof.imagePosition || 'center center',
                  border: '3px solid #f2b733',
                  boxShadow: '0 4px 10px rgba(242, 183, 51, 0.3)'
                }}
              />
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#000638', marginBottom: '3px' }}>
                  {prof.name}
                </h4>
                <div style={{ fontSize: '0.8rem', color: '#115DFC', fontWeight: 800 }}>
                  {prof.designation || prof.role}
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.55, margin: 0, flexGrow: 1 }}>
              {prof.bio || prof.experience}
            </p>

            {prof.tags && prof.tags.length > 0 && (
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '16px', paddingTop: '12px', borderTop: '1px solid #f1f5f9' }}>
                {prof.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      background: 'rgba(0, 6, 56, 0.06)',
                      color: '#000638',
                      padding: '3px 9px',
                      borderRadius: '50px'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
