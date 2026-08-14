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

  const handleScroll = (e) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const firstChild = scrollTrackRef.current?.children[0];
    const cardWidth = (firstChild?.offsetWidth || 280) + 20;
    const newIdx = Math.round(scrollLeft / cardWidth);
    if (newIdx !== activeIndex && newIdx >= 0 && newIdx < cardsToRender.length) {
      setActiveIndex(newIdx);
    }
  };

  const handlePrev = () => {
    if (!cardsToRender.length) return;
    const next = (activeIndex - 1 + cardsToRender.length) % cardsToRender.length;
    setActiveIndex(next);
    if (scrollTrackRef.current) {
      const firstChild = scrollTrackRef.current?.children[0];
      const cardWidth = (firstChild?.offsetWidth || 280) + 20;
      scrollTrackRef.current.scrollTo({ left: next * cardWidth, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (!cardsToRender.length) return;
    const next = (activeIndex + 1) % cardsToRender.length;
    setActiveIndex(next);
    if (scrollTrackRef.current) {
      const firstChild = scrollTrackRef.current?.children[0];
      const cardWidth = (firstChild?.offsetWidth || 280) + 20;
      scrollTrackRef.current.scrollTo({ left: next * cardWidth, behavior: 'smooth' });
    }
  };

  const handleSelect = (idx) => {
    setActiveIndex(idx);
    if (scrollTrackRef.current) {
      const firstChild = scrollTrackRef.current?.children[0];
      const cardWidth = (firstChild?.offsetWidth || 280) + 20;
      scrollTrackRef.current.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
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
            display: flex !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            padding-bottom: 16px !important;
            scroll-behavior: smooth;
          }
          .who-is-it-for-track > div {
            flex: 0 0 min(290px, 85vw) !important;
            scroll-snap-align: start !important;
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

        {/* Audience Cards Track — 1 Row Grid on Desktop & Horizontal Swipe Track on Mobile */}
        <div
          ref={scrollTrackRef}
          onScroll={handleScroll}
          className="who-is-it-for-track no-scrollbar"
        >
          {cardsToRender.map((card) => (
            <div
              key={card.title}
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                border: '1.5px solid #e2e8f0',
                padding: '24px',
                boxShadow: '0 4px 16px rgba(15, 23, 42, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: '#eff6ff',
                  border: '1.5px solid #dbeafe',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}
              >
                {card.icon}
              </div>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#000648', marginBottom: '8px', lineHeight: 1.35 }}>
                {card.title}
              </h3>

              <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.55, margin: 0, fontWeight: 500 }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
