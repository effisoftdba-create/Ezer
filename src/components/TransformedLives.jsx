import React, { useRef } from 'react';
import { HiChevronLeft, HiChevronRight, HiArrowDown } from 'react-icons/hi';

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
    <section className="section-alt" style={{ padding: '64px 0', background: '#f8fafc' }}>
      <div className="container">
        {/* Section Header with Right-Aligned Controls */}
        <div style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          marginBottom: '28px', flexWrap: 'wrap', gap: '16px'
        }}>
          <div>
            <span className="section-tag">Career Outcomes</span>
            <h2 style={{ color: '#000648', marginTop: '4px' }}>Alumni Career Transformations</h2>
            <p style={{ color: '#475569', fontSize: '0.88rem', maxWidth: '560px', marginTop: '4px' }}>
              Enabling non-IT graduates and career gap switchers to secure high-growth software engineering roles.
            </p>
          </div>

          {/* Right-Aligned Arrow Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
            <button
              type="button"
              onClick={() => handleScroll('left')}
              aria-label="Previous story"
              style={{
                width: '38px', height: '38px', borderRadius: '50%',
                border: '1.5px solid #000648', background: '#ffffff',
                color: '#000648', display: 'flex', alignItems: 'center',
                justifyContent: 'center', cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(0, 6, 72, 0.08)',
              }}
            >
              <HiChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              aria-label="Next story"
              style={{
                width: '38px', height: '38px', borderRadius: '50%',
                border: '1.5px solid #000648', background: '#000648',
                color: '#f2b733', display: 'flex', alignItems: 'center',
                justifyContent: 'center', cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(0, 6, 72, 0.15)',
              }}
            >
              <HiChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Slider Track */}
        <div
          ref={sliderRef}
          className="no-scrollbar"
          style={{
            display: 'flex', gap: '20px', overflowX: 'auto',
            scrollBehavior: 'smooth', padding: '6px 0 16px', width: '100%',
          }}
        >
          {learnerJourneys.map((item) => (
            <div
              key={item.id}
              style={{
                flex: '0 0 280px', background: '#ffffff', borderRadius: '16px',
                border: '1.5px solid #e2e8f0', padding: '24px 20px', textAlign: 'center',
                boxShadow: '0 4px 14px rgba(0, 6, 72, 0.05)',
                display: 'flex', flexDirection: 'column', alignItems: 'center'
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: '76px', height: '76px', borderRadius: '50%',
                  objectFit: 'cover', border: '3px solid #f2b733', marginBottom: '12px'
                }}
              />
              <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#000648', marginBottom: '2px' }}>
                {item.name}
              </h3>
              <span style={{
                fontSize: '0.7rem', fontWeight: 800, background: '#000648', color: '#f2b733',
                padding: '2px 10px', borderRadius: '50px', marginBottom: '16px', display: 'inline-block'
              }}>
                Placed @ {item.company}
              </span>

              <div style={{
                background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px',
                padding: '12px', width: '100%', display: 'flex', flexDirection: 'column', gap: '4px'
              }}>
                <div style={{ fontSize: '0.68rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Previous Role
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#334155' }}>
                  {item.beforeRole}
                </div>
                <HiArrowDown size={12} style={{ color: '#f2b733', margin: '2px auto' }} />
                <div style={{ fontSize: '0.68rem', color: '#000648', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Placed Role
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#000648' }}>
                  {item.afterRole}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
