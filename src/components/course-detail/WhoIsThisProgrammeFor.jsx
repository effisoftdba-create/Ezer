import React, { useRef } from 'react';
import { HiUserGroup, HiBriefcase, HiAcademicCap, HiDesktopComputer, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const programAudienceData = [
  {
    title: 'Aspiring IT & Tech Professionals',
    desc: 'Working Engineers seeking transition into cloud, DevOps, AI, testing & infra roles',
    icon: <HiUserGroup size={20} style={{ color: '#2563eb' }} />,
  },
  {
    title: 'Working Engineers & Technologists',
    desc: 'Software engineers, QA analysts, sysadmins & technical support professionals',
    icon: <HiBriefcase size={20} style={{ color: '#2563eb' }} />,
  },
  {
    title: 'Graduates & Career Switchers',
    desc: 'Fresh graduates & career gap switchers aiming to build industry-relevant technical expertise',
    icon: <HiAcademicCap size={20} style={{ color: '#2563eb' }} />,
  },
  {
    title: 'System & Infra Engineers',
    desc: 'Infrastructure teams aiming for cloud automation & production sandbox expertise',
    icon: <HiDesktopComputer size={20} style={{ color: '#2563eb' }} />,
  },
];

export default function WhoIsThisProgrammeFor({ audienceList }) {
  const scrollTrackRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollTrackRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollTrackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const cardsToRender = audienceList && audienceList.length > 0 ? audienceList.map((item, idx) => {
    if (typeof item === 'string') {
      const defaultItem = programAudienceData[idx % programAudienceData.length];
      return {
        title: defaultItem.title,
        desc: item,
        icon: defaultItem.icon,
      };
    }
    return item;
  }) : programAudienceData;

  return (
    <section className="section-alt" style={{ padding: '24px 0' }}>
      <div className="container">
        {/* Header & Scroll Controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '32px',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <span className="section-tag">
              Target Profiles
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                fontWeight: 700,
                color: '#0f172a',
                marginTop: '8px',
              }}
            >
              Who is this Program For?
            </h2>
          </div>

          {/* Centered Navigation Controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', width: '100%', maxWidth: 'fit-content' }}>
            <button
              type="button"
              onClick={() => handleScroll('left')}
              aria-label="Scroll left"
              style={{
                width: '38px', height: '38px', borderRadius: '50%',
                border: '1.5px solid #000648', background: '#ffffff',
                color: '#000648', display: 'flex', alignItems: 'center',
                justifyContent: 'center', cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(0, 6, 72, 0.08)'
              }}
            >
              <HiChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              aria-label="Scroll right"
              style={{
                width: '38px', height: '38px', borderRadius: '50%',
                border: '1.5px solid #000648', background: '#000648',
                color: '#ffffff', display: 'flex', alignItems: 'center',
                justifyContent: 'center', cursor: 'pointer',
                boxShadow: '0 4px 10px rgba(0, 6, 72, 0.2)'
              }}
            >
              <HiChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Audience Cards Track */}
        <div
          ref={scrollTrackRef}
          className="no-scrollbar"
          style={{
            display: 'flex',
            gap: '24px',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            paddingBottom: '16px',
          }}
        >
          {cardsToRender.map((card) => (
            <div
              key={card.title}
              style={{
                flex: '0 0 min(280px, 85vw)',
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
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: '#eff6ff',
                  border: '1px solid #dbeafe',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}
              >
                {card.icon}
              </div>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                {card.title}
              </h3>

              <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
