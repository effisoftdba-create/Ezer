import React, { useRef, useState } from 'react';
import { HiUserGroup, HiBriefcase, HiAcademicCap, HiDesktopComputer } from 'react-icons/hi';
import CarouselDotsNav from '../CarouselDotsNav';

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
  const [activeIndex, setActiveIndex] = useState(0);

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

  const handlePrev = () => {
    if (!cardsToRender.length) return;
    const next = (activeIndex - 1 + cardsToRender.length) % cardsToRender.length;
    setActiveIndex(next);
    if (scrollTrackRef.current) {
      scrollTrackRef.current.scrollTo({ left: next * 320, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (!cardsToRender.length) return;
    const next = (activeIndex + 1) % cardsToRender.length;
    setActiveIndex(next);
    if (scrollTrackRef.current) {
      scrollTrackRef.current.scrollTo({ left: next * 320, behavior: 'smooth' });
    }
  };

  const handleSelect = (idx) => {
    setActiveIndex(idx);
    if (scrollTrackRef.current) {
      scrollTrackRef.current.scrollTo({ left: idx * 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="section-alt" style={{ padding: '32px 0', width: '100%', overflow: 'hidden' }}>
      <style>{`
        .who-is-it-for-container {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 clamp(16px, 3.5vw, 48px);
        }
        .who-is-it-for-track {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
          width: 100%;
        }
        @media (max-width: 860px) {
          .who-is-it-for-track {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            padding-bottom: 12px;
          }
          .who-is-it-for-track > div {
            flex: 0 0 min(280px, 85vw);
            scroll-snap-align: start;
          }
        }
      `}</style>
      <div className="who-is-it-for-container">
        {/* Header & Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '28px',
            width: '100%',
          }}
        >
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

          {/* Standardized Centered < . . . > Controls */}
          <CarouselDotsNav
            totalItems={cardsToRender.length}
            activeIndex={activeIndex}
            onPrev={handlePrev}
            onNext={handleNext}
            onSelectIndex={handleSelect}
            style={{ margin: '16px auto 0' }}
          />
        </div>

        {/* Audience Cards Track — Always 1 Single Line Row on Desktop */}
        <div ref={scrollTrackRef} className="who-is-it-for-track no-scrollbar">
          {cardsToRender.map((card) => (
            <div
              key={card.title}
              style={{
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

              <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px', lineHeight: 1.35 }}>
                {card.title}
              </h3>

              <p style={{ fontSize: '0.86rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
