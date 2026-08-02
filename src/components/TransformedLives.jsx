import React, { useRef } from 'react';
import { HiChevronLeft, HiChevronRight, HiArrowDown, HiSparkles } from 'react-icons/hi';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const learnerJourneys = [
  {
    id: 1,
    name: "B Swathy",
    company: "SmartHealth",
    beforeRole: "Associate",
    afterRole: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    id: 2,
    name: "Balasubramani",
    company: "ClarityTTS",
    beforeRole: "Support Associate",
    afterRole: "VLSI Physical Design Engineer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    id: 3,
    name: "Padmini Kadhirvel",
    company: "TachoMind",
    beforeRole: "Non-IT Graduate",
    afterRole: "Automation Testing Engineer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    id: 4,
    name: "Hasna Raza",
    company: "Fipsar Tech",
    beforeRole: "Fresher, B.Sc (Physics)",
    afterRole: "ASIC Verification Engineer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    id: 5,
    name: "Subathra N",
    company: "Standard Chartered",
    beforeRole: "Quality Analyst",
    afterRole: "Senior Automation Engineer",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=300&h=300",
  },
];

export default function TransformedLives() {
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 320;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <section className="section-alt" style={{ padding: '72px 0', background: '#f8fafc' }}>
        <div className="container">
          {/* Section Header matching Reference Image 4 */}
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span 
              style={{
                background: 'rgba(0, 6, 72, 0.06)',
                color: '#000648',
                fontSize: '0.72rem',
                fontWeight: 800,
                padding: '5px 16px',
                borderRadius: '50px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                display: 'inline-block',
                marginBottom: '12px'
              }}
            >
              CAREER PLACEMENT OUTCOMES
            </span>

            <h2 style={{ color: '#000648', fontSize: 'clamp(1.6rem, 2.8vw, 2.3rem)', fontWeight: 900, marginBottom: '8px' }}>
              Our Graduates Get Hired by Leading Tech Firms
            </h2>

            <p style={{ color: '#475569', fontSize: '0.94rem', maxWidth: '640px', margin: '0 auto' }}>
              Join a community of engineers building impactful, high-growth software careers.
            </p>
          </div>

          {/* Controls & Track Wrapper */}
          <div style={{ position: 'relative' }}>
            {/* Scroll Buttons Header Bar */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginBottom: '16px' }}>
              <m.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                type="button"
                onClick={() => handleScroll('left')}
                aria-label="Previous story"
                style={{
                  width: '38px', height: '38px', borderRadius: '50%',
                  border: '1.5px solid #cbd5e1', background: '#ffffff',
                  color: '#000648', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', cursor: 'pointer',
                  boxShadow: '0 2px 6px rgba(0, 6, 72, 0.06)',
                }}
              >
                <HiChevronLeft size={20} />
              </m.button>

              <m.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                type="button"
                onClick={() => handleScroll('right')}
                aria-label="Next story"
                style={{
                  width: '38px', height: '38px', borderRadius: '50%',
                  border: '1.5px solid #000648', background: '#000648',
                  color: '#f2b733', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', cursor: 'pointer',
                  boxShadow: '0 4px 10px rgba(0, 6, 72, 0.18)',
                }}
              >
                <HiChevronRight size={20} />
              </m.button>
            </div>

            {/* Horizontal Slider Track matching Reference Images 3 & 4 Cards */}
            <div
              ref={sliderRef}
              className="no-scrollbar"
              style={{
                display: 'flex', gap: '20px', overflowX: 'auto',
                scrollBehavior: 'smooth', padding: '12px 4px 24px', width: '100%',
              }}
            >
              {learnerJourneys.map((item) => (
                <m.div
                  key={item.id}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  style={{
                    flex: '0 0 280px',
                    background: '#ffffff',
                    borderRadius: '16px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 20px rgba(0, 6, 72, 0.05)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Top Avatar Header with Subtle Grid Pattern matching Reference Image 3 */}
                  <div 
                    style={{
                      padding: '24px 20px 18px',
                      textAlign: 'center',
                      backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)',
                      backgroundSize: '14px 14px',
                      backgroundColor: '#ffffff',
                      borderBottom: '1px solid #f1f5f9'
                    }}
                  >
                    {/* Circle Avatar with Gold Ring */}
                    <div style={{ position: 'relative', display: 'inline-block', marginBottom: '12px' }}>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: '84px', height: '84px', borderRadius: '50%',
                          objectFit: 'cover', border: '3.5px solid #f2b733',
                          boxShadow: '0 4px 14px rgba(242, 183, 51, 0.35)'
                        }}
                      />
                    </div>

                    {/* Student Name matching Reference Image 3 */}
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#000648', marginBottom: '4px' }}>
                      {item.name}
                    </h3>

                    {/* Placed @ Company Subtitle */}
                    <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#000648' }}>
                      Placed @ {item.company}
                    </div>
                  </div>

                  {/* Career Transition Vertical Flow Container matching Reference Image 3 */}
                  <div style={{ padding: '18px 16px 20px', background: '#ffffff', flexGrow: 1 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      
                      {/* Top Node: Before Role */}
                      <div 
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: '12px',
                          border: '1px solid #e2e8f0',
                          background: '#f8fafc',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px'
                        }}
                      >
                        <div 
                          style={{
                            width: '16px', height: '16px', borderRadius: '50%',
                            border: '2px solid #cbd5e1', background: '#ffffff', flexShrink: 0
                          }} 
                        />
                        <span style={{ fontSize: '0.86rem', fontWeight: 700, color: '#334155' }}>
                          {item.beforeRole}
                        </span>
                      </div>

                      {/* Vertical Dashed Line Connector */}
                      <div style={{ height: '16px', borderLeft: '2px dashed #cbd5e1', margin: '2px 0' }} />

                      {/* Middle Node: After EZER Badge */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '2px 0' }}>
                        <div 
                          style={{
                            width: '24px', height: '24px', borderRadius: '50%',
                            background: '#000648', color: '#f2b733', fontWeight: 900,
                            fontSize: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            border: '1px solid #f2b733', boxShadow: '0 2px 6px rgba(0,6,72,0.2)'
                          }}
                        >
                          e
                        </div>
                        <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#000648' }}>
                          After EZER
                        </span>
                      </div>

                      {/* Vertical Dashed Line Connector with Arrow */}
                      <div style={{ height: '12px', borderLeft: '2px dashed #000648' }} />
                      <div style={{ color: '#000648', marginTop: '-4px', marginBottom: '2px' }}>
                        <HiArrowDown size={14} />
                      </div>

                      {/* Bottom Node: Placed Role (Selected State in EZER #000648 & #f2b733 Palette) */}
                      <div 
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: '12px',
                          border: '1.5px solid #000648',
                          background: 'rgba(0, 6, 72, 0.05)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px'
                        }}
                      >
                        <div 
                          style={{
                            width: '16px', height: '16px', borderRadius: '50%',
                            border: '4px solid #000648', background: '#f2b733', flexShrink: 0
                          }} 
                        />
                        <span style={{ fontSize: '0.88rem', fontWeight: 900, color: '#000648' }}>
                          {item.afterRole}
                        </span>
                      </div>

                    </div>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
