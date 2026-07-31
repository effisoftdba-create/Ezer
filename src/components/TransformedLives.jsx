import React, { useRef, useState } from 'react';
import { HiChevronLeft, HiChevronRight, HiArrowDown, HiBriefcase } from 'react-icons/hi';

const learnerJourneys = [
  {
    id: 1,
    name: "Padmini Kadhirvel",
    company: "TachoMind",
    beforeRole: "Support Associate",
    afterRole: "Automation Test Engineer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    id: 2,
    name: "B Swathy",
    company: "SmartHealth",
    beforeRole: "Non-Tech Associate",
    afterRole: "UI/UX Product Designer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    id: 3,
    name: "Vignesh G",
    company: "Agnikul Cosmos",
    beforeRole: "M.Sc Graduate",
    afterRole: "Junior DevOps Engineer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    id: 4,
    name: "Ramapriya Prasathe",
    company: "RemitBee",
    beforeRole: "Career Gap Switcher",
    afterRole: "Automation Test Engineer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300",
  },
];

export default function TransformedLives() {
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 300;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="section-alt" style={{ padding: '72px 0', background: '#f8fafc' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-title">
          <span className="section-tag">Career Outcomes</span>
          <h2>Alumni Career Transformations</h2>
          <p>Enabling non-IT graduates and career gap switchers to secure high-growth software engineering roles.</p>
        </div>

        {/* Horizontal Slider Cards Track */}
        <div
          ref={sliderRef}
          className="no-scrollbar"
          style={{
            display: 'flex',
            gap: '20px',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            paddingBottom: '16px',
            maxWidth: '100%',
            boxSizing: 'border-box',
          }}
        >
          {learnerJourneys.map((item) => (
            <div
              key={item.id}
              style={{
                flex: '0 0 280px',
                minWidth: '280px',
                scrollSnapAlign: 'start',
                background: '#ffffff',
                border: '1.5px solid #e2e8f0',
                borderRadius: '16px',
                padding: '24px 20px',
                boxShadow: '0 4px 16px rgba(0, 6, 72, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
              }}
            >
              {/* Top Circular Portrait */}
              <div
                style={{
                  width: '76px',
                  height: '76px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  marginBottom: '14px',
                  border: '2.5px solid #f2b733',
                  boxShadow: '0 4px 12px rgba(242, 183, 51, 0.25)',
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Name & Placed Company */}
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#000648', marginBottom: '2px' }}>
                {item.name}
              </h3>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#f2b733', background: '#000648', padding: '3px 10px', borderRadius: '50px', marginBottom: '16px' }}>
                Placed @ {item.company}
              </div>

              {/* Career Transition Path */}
              <div style={{ width: '100%', background: '#f8fafc', padding: '14px 12px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>Previous Role</div>
                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#000648', marginBottom: '6px' }}>{item.beforeRole}</div>
                <HiArrowDown size={14} style={{ color: '#f2b733', margin: '2px 0' }} />
                <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, marginTop: '4px' }}>Placed Role</div>
                <div style={{ fontSize: '0.875rem', fontWeight: 800, color: '#000648' }}>{item.afterRole}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '20px' }}>
          <button
            type="button"
            onClick={() => handleScroll('left')}
            aria-label="Previous"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              border: '1.5px solid #000648',
              background: '#ffffff',
              color: '#000648',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease, color 0.2s ease',
              boxShadow: '0 2px 6px rgba(0, 6, 72, 0.08)',
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
            <HiChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => handleScroll('right')}
            aria-label="Next"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              border: '1.5px solid #000648',
              background: '#000648',
              color: '#f2b733',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease, color 0.2s ease',
              boxShadow: '0 2px 6px rgba(0, 6, 72, 0.15)',
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
            <HiChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

