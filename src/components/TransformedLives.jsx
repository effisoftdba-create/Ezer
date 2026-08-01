import React, { useRef } from 'react';
import { HiChevronLeft, HiChevronRight, HiArrowDown, HiSparkles } from 'react-icons/hi';
import { motion } from 'framer-motion';

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
      const scrollAmount = 320;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="section-alt" style={{ padding: '72px 0', background: '#f8fafc' }}>
      <div className="container">
        {/* Section Header with Right-Aligned Controls */}
        <div style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          marginBottom: '32px', flexWrap: 'wrap', gap: '16px'
        }}>
          <div>
            <span className="section-tag">
              <HiSparkles size={14} style={{ color: '#f2b733' }} />
              Career Outcomes
            </span>
            <h2 style={{ color: '#000648', marginTop: '6px' }}>Alumni Career Transformations</h2>
            <p style={{ color: '#475569', fontSize: '0.9rem', maxWidth: '560px', marginTop: '4px' }}>
              Enabling non-IT graduates and career gap switchers to secure high-growth software engineering roles.
            </p>
          </div>

          {/* Right-Aligned Arrow Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              type="button"
              onClick={() => handleScroll('left')}
              aria-label="Previous story"
              style={{
                width: '40px', height: '40px', borderRadius: '50%',
                border: '1.5px solid #000648', background: '#ffffff',
                color: '#000648', display: 'flex', alignItems: 'center',
                justifyContent: 'center', cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0, 6, 72, 0.08)',
              }}
            >
              <HiChevronLeft size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              type="button"
              onClick={() => handleScroll('right')}
              aria-label="Next story"
              style={{
                width: '40px', height: '40px', borderRadius: '50%',
                border: '1.5px solid #000648', background: '#000648',
                color: '#f2b733', display: 'flex', alignItems: 'center',
                justifyContent: 'center', cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0, 6, 72, 0.2)',
              }}
            >
              <HiChevronRight size={20} />
            </motion.button>
          </div>
        </div>

        {/* Horizontal Slider Track */}
        <div
          ref={sliderRef}
          className="no-scrollbar"
          style={{
            display: 'flex', gap: '24px', overflowX: 'auto',
            scrollBehavior: 'smooth', padding: '12px 6px 24px', width: '100%',
          }}
        >
          {learnerJourneys.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              style={{
                flex: '0 0 290px', background: '#ffffff', borderRadius: '20px',
                border: '1.5px solid #e2e8f0', padding: '28px 22px', textAlign: 'center',
                boxShadow: '0 6px 20px rgba(0, 6, 72, 0.06)',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                position: 'relative'
              }}
            >
              {/* Profile Avatar with Gold Border Ring */}
              <div style={{ position: 'relative', marginBottom: '14px' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '80px', height: '80px', borderRadius: '50%',
                    objectFit: 'cover', border: '3.5px solid #f2b733',
                    boxShadow: '0 4px 14px rgba(242, 183, 51, 0.35)'
                  }}
                />
              </div>

              {/* Student Name & Placed Badge */}
              <h3 style={{ fontSize: '1.08rem', fontWeight: 800, color: '#000648', marginBottom: '6px' }}>
                {item.name}
              </h3>
              <div style={{
                fontSize: '0.74rem', fontWeight: 800, background: '#000648', color: '#f2b733',
                padding: '4px 14px', borderRadius: '50px', marginBottom: '18px', display: 'inline-block',
                boxShadow: '0 2px 8px rgba(0, 6, 72, 0.2)'
              }}>
                Placed @ {item.company}
              </div>

              {/* Detailed Career Transformation Box */}
              <div style={{
                background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '14px',
                padding: '16px 14px', width: '100%', display: 'flex', flexDirection: 'column',
                gap: '2px', textAlign: 'center'
              }}>
                <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  PREVIOUS ROLE
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#334155', marginTop: '2px' }}>
                  {item.beforeRole}
                </div>

                {/* Animated Flowing Gold Arrow */}
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '6px 0', color: '#f2b733'
                  }}
                >
                  <HiArrowDown size={18} style={{ filter: 'drop-shadow(0 2px 4px rgba(242,183,51,0.4))' }} />
                </motion.div>

                <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#000648', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  PLACED ROLE
                </div>
                <div style={{ fontSize: '0.96rem', fontWeight: 900, color: '#000648', marginTop: '2px' }}>
                  {item.afterRole}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
