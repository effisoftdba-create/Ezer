import React, { useRef, useState } from 'react';
import { HiAcademicCap, HiCheckCircle, HiBriefcase } from 'react-icons/hi';
import { useSiteData } from '../context/SiteContext';
import { resolveImageSrc } from '../utils/imageUtils';
import CarouselDotsNav from './CarouselDotsNav';

export default function FacultyShowcase({ faculty: propFaculty, title: propTitle }) {
  const { seniorMentors, mentorsHeader } = useSiteData();
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const displayFaculty = (seniorMentors && seniorMentors.length > 0) ? seniorMentors : (propFaculty || []);
  const headerData = {
    tag: mentorsHeader?.tag || 'EXPERT FACULTY',
    headline: propTitle || mentorsHeader?.headline || mentorsHeader?.title || 'Learn Live From Working Corporate Professionals',
    sub: mentorsHeader?.sub || 'Our instructors work at top tech firms, bringing real production scenarios into every live class.'
  };

  if (!displayFaculty || displayFaculty.length === 0) return null;

  const handlePrev = () => {
    if (!displayFaculty.length) return;
    const next = (activeIndex - 1 + displayFaculty.length) % displayFaculty.length;
    setActiveIndex(next);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: next * 360, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (!displayFaculty.length) return;
    const next = (activeIndex + 1) % displayFaculty.length;
    setActiveIndex(next);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: next * 360, behavior: 'smooth' });
    }
  };

  const handleSelect = (idx) => {
    setActiveIndex(idx);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: idx * 360, behavior: 'smooth' });
    }
  };

  return (
    <section style={{ margin: '32px 0 24px', width: '100%', maxWidth: '100%' }}>
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '32px', width: '100%' }}>
        <span
          style={{
            background: 'rgba(0, 6, 72, 0.06)',
            color: '#000648',
            fontSize: '0.76rem',
            fontWeight: 800,
            padding: '5px 16px',
            borderRadius: '50px',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '10px',
            border: '1.5px solid rgba(0, 6, 72, 0.12)'
          }}
        >
          <HiAcademicCap size={15} color="#000648" />
          <span>{headerData.tag}</span>
        </span>

        <h3
          style={{
            fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
            fontWeight: 900,
            color: '#000648',
            margin: '4px 0 10px 0',
            letterSpacing: '-0.02em',
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
          }}
        >
          {headerData.headline}
        </h3>

        <p style={{ color: '#475569', fontSize: '0.96rem', maxWidth: '680px', margin: '0 auto 16px', lineHeight: 1.6 }}>
          {headerData.sub}
        </p>

        {/* Standardized Centered Navigation Controls */}
        <CarouselDotsNav
          totalItems={displayFaculty.length}
          activeIndex={activeIndex}
          onPrev={handlePrev}
          onNext={handleNext}
          onSelectIndex={handleSelect}
          style={{ margin: '8px auto 0' }}
        />
      </div>

      {/* Modern Faculty Cards Grid */}
      <div
        ref={sliderRef}
        style={{
          display: 'grid',
          gridTemplateColumns: displayFaculty.length === 2
            ? 'repeat(2, minmax(0, 1fr))'
            : 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
          gap: '24px',
          width: '100%',
        }}
        className="faculty-cards-grid"
      >
        {displayFaculty.map((prof, pIdx) => {
          const mentorName = prof.name || 'Corporate Mentor';
          const mentorRole = prof.designation || prof.role || 'Principal Lead';
          const mentorCompany = prof.company || '';
          const mentorExp = prof.exp || prof.experience || '';
          const mentorBio = prof.bio || prof.desc || prof.description || 'Senior industry practitioner specializing in production tech architectures and student mentorship.';
          const mentorTags = Array.isArray(prof.tags) ? prof.tags : (prof.tags ? String(prof.tags).split(',').map(t => t.trim()) : []);

          return (
            <div
              key={prof.id || pIdx}
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                border: '1.5px solid #e2e8f0',
                padding: '24px',
                boxShadow: '0 4px 20px rgba(0, 6, 72, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 6, 72, 0.12)';
                e.currentTarget.style.borderColor = '#000648';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 6, 72, 0.05)';
                e.currentTarget.style.borderColor = '#e2e8f0';
              }}
            >
              <div>
                {/* Profile Header Row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '18px' }}>
                  {/* Clean Framed Avatar Wrapper */}
                  <div
                    style={{
                      width: '68px',
                      height: '68px',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      background: '#000648',
                      border: '2px solid #000648',
                      flexShrink: 0,
                      position: 'relative',
                      boxShadow: '0 4px 12px rgba(0, 6, 72, 0.15)',
                    }}
                  >
                    <img
                      src={resolveImageSrc(prof.image)}
                      alt={mentorName}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: prof.fit || prof.imageFit || 'cover',
                        objectPosition: prof.position || prof.imagePosition || 'center 20%',
                        transform: (prof.zoom || prof.imageZoom) && (prof.zoom || prof.imageZoom) !== 1
                          ? `scale(${prof.zoom || prof.imageZoom})`
                          : 'none',
                        transformOrigin: prof.position || prof.imagePosition || 'center 20%',
                        display: 'block',
                      }}
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300';
                      }}
                    />
                  </div>

                  {/* Name & Role */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <h4
                        style={{
                          fontSize: '1.08rem',
                          fontWeight: 900,
                          color: '#000648',
                          margin: 0,
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {mentorName}
                      </h4>
                      <HiCheckCircle size={16} color="#16a34a" title="Verified Practitioner" style={{ flexShrink: 0 }} />
                    </div>

                    <div
                      style={{
                        fontSize: '0.82rem',
                        color: '#115DFC',
                        fontWeight: 800,
                        marginTop: '3px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        flexWrap: 'wrap',
                      }}
                    >
                      <span>{mentorRole}</span>
                      {mentorCompany && (
                        <span
                          style={{
                            background: 'rgba(0, 6, 72, 0.06)',
                            color: '#000648',
                            padding: '1px 6px',
                            borderRadius: '4px',
                            fontWeight: 800,
                            fontSize: '0.74rem',
                          }}
                        >
                          @{mentorCompany}
                        </span>
                      )}
                    </div>

                    {mentorExp && (
                      <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700, marginTop: '2px' }}>
                        ⭐ {mentorExp}
                      </div>
                    )}
                  </div>
                </div>

                {/* Mentor Bio */}
                <p style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.62, margin: 0, fontWeight: 500 }}>
                  {mentorBio}
                </p>
              </div>

              {/* Skills & Expertise Chips Footer */}
              {mentorTags.length > 0 && (
                <div
                  style={{
                    display: 'flex',
                    gap: '6px',
                    flexWrap: 'wrap',
                    marginTop: '18px',
                    paddingTop: '14px',
                    borderTop: '1px solid #f1f5f9',
                  }}
                >
                  {mentorTags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        background: '#eff6ff',
                        border: '1px solid #dbeafe',
                        color: '#1e40af',
                        padding: '3px 10px',
                        borderRadius: '6px',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .faculty-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
