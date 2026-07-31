import React, { useRef, useState } from 'react';
import { testimonials } from '../../data/testimonials';
import { HiChevronLeft, HiChevronRight, HiStar, HiSparkles } from 'react-icons/hi';
import { FaLinkedin, FaQuoteLeft } from 'react-icons/fa';

export default function TestimonialsSliderTrack() {
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 360;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="section" style={{ background: '#ffffff', padding: '72px 0', borderBottom: '1px solid #e2e8f0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          marginBottom: '36px', flexWrap: 'wrap', gap: '16px'
        }}>
          <div>
            <span className="section-tag">
              <HiSparkles size={14} style={{ color: '#f2b733' }} />
              Verified Alumni Reviews
            </span>
            <h2 style={{ color: '#000648', fontSize: 'clamp(1.6rem, 2.8vw, 2.1rem)', marginTop: '6px' }}>
              Detailed Written Experiences
            </h2>
            <p style={{ color: '#475569', fontSize: '0.92rem', maxWidth: '560px', marginTop: '6px' }}>
              Read authentic feedback from our cohort graduates across leading engineering tracks.
            </p>
          </div>

          {/* Navigation Controls */}
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              type="button"
              onClick={() => handleScroll('left')}
              aria-label="Previous Testimonial"
              style={{
                width: '42px', height: '42px', borderRadius: '50%',
                border: '1.5px solid #000648', background: '#ffffff',
                color: '#000648', display: 'flex', alignItems: 'center',
                justifyContent: 'center', cursor: 'pointer', transition: 'background-color 0.2s ease, color 0.2s ease',
                boxShadow: '0 2px 8px rgba(0,6,72,0.08)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#000648';
                e.currentTarget.style.color = '#f2b733';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.color = '#000648';
              }}
            >
              <HiChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              aria-label="Next Testimonial"
              style={{
                width: '42px', height: '42px', borderRadius: '50%',
                border: '1.5px solid #000648', background: '#000648',
                color: '#f2b733', display: 'flex', alignItems: 'center',
                justifyContent: 'center', cursor: 'pointer', transition: 'background-color 0.2s ease, color 0.2s ease',
                boxShadow: '0 2px 8px rgba(0,6,72,0.15)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f2b733';
                e.currentTarget.style.color = '#000648';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#000648';
                e.currentTarget.style.color = '#f2b733';
              }}
            >
              <HiChevronRight size={22} />
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
            padding: '12px 8px 24px 8px', // Space for hover border & shadow
            width: '100%',
            boxSizing: 'border-box',
            scrollBehavior: 'smooth',
          }}
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              style={{
                flex: '0 0 clamp(310px, 32vw, 360px)',
                minWidth: '310px',
                scrollSnapAlign: 'start',
                background: '#ffffff',
                border: '2px solid #cbd5e1',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 4px 16px rgba(0, 6, 72, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 6, 72, 0.16)';
                e.currentTarget.style.borderColor = '#000648';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 6, 72, 0.05)';
                e.currentTarget.style.borderColor = '#cbd5e1';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                {/* Header: Avatar, Name, Role Badge, LinkedIn */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '2px solid #f2b733',
                        flexShrink: 0
                      }}
                    />
                    <div>
                      <div style={{ fontSize: '1rem', fontWeight: 800, color: '#000648', lineHeight: 1.2 }}>{item.name}</div>
                      <div style={{ 
                        fontSize: '0.72rem', color: '#f2b733', background: '#000648', 
                        padding: '3px 8px', borderRadius: '50px', fontWeight: 700, 
                        marginTop: '4px', display: 'inline-block', lineHeight: 1.2
                      }}>
                        {item.role} @ {item.company}
                      </div>
                    </div>
                  </div>

                  <a
                    href={item.linkedIn}
                    target="_blank"
                    rel="noreferrer"
                    style={{ 
                      color: '#000648', fontSize: '1.25rem', padding: '6px', 
                      background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 
                    }}
                    aria-label={`${item.name}'s LinkedIn Profile`}
                  >
                    <FaLinkedin />
                  </a>
                </div>

                {/* Rating Stars & Quote Icon */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', color: '#f2b733', gap: '2px', fontSize: '0.95rem' }}>
                    <HiStar /><HiStar /><HiStar /><HiStar /><HiStar />
                  </div>
                  <FaQuoteLeft style={{ color: 'rgba(0,6,72,0.12)', fontSize: '1.1rem' }} />
                </div>

                {/* Quote Text */}
                <p style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.65, marginBottom: '20px', fontStyle: 'normal' }}>
                  "{item.quote}"
                </p>
              </div>

              {/* Course Track Footer Badge */}
              <div
                style={{
                  background: '#f8fafc',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  fontSize: '0.76rem',
                  fontWeight: 800,
                  color: '#000648',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f2b733' }}></span>
                Track: {item.course}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

