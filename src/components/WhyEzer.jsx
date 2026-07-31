import React, { useRef } from 'react';
import { 
  HiOutlineBriefcase, 
  HiOutlineBadgeCheck, 
  HiOutlineUserGroup, 
  HiOutlineDesktopComputer, 
  HiOutlineLightBulb,
  HiChevronLeft,
  HiChevronRight,
  HiSparkles,
  HiCheckCircle
} from 'react-icons/hi';

const reasons = [
  {
    title: 'Pre-Employment Support',
    subtitle: 'Career Readiness Phase',
    desc: 'Comprehensive guidance before you start applying — build a high-impact profile that catches recruiter attention.',
    bullets: [
      'Resume & LinkedIn profile optimization',
      '1-on-1 technical mock interviews',
      'GitHub portfolio & capstone review'
    ],
    icon: <HiOutlineBriefcase size={24} />,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=400',
  },
  {
    title: 'Post-Employment Assistance',
    subtitle: '1-Year Placement Safety Net',
    desc: 'Our commitment doesn’t end on graduation day. Receive continuous job referrals and interview prep for 1 full year.',
    bullets: [
      'Up to 1 year continuous job referrals',
      'Post-hiring workplace onboarding support',
      'Salary negotiation & offer review'
    ],
    icon: <HiOutlineBadgeCheck size={24} />,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600&h=400',
  },
  {
    title: '3-Year Community Access',
    subtitle: 'Long-Term Peer Network',
    desc: 'Stay connected with senior mentors, corporate practitioners, and fellow alumni for continuous growth.',
    bullets: [
      '3-year active Slack & Discord access',
      'Monthly expert masterclasses',
      'Peer code reviews & hackathons'
    ],
    icon: <HiOutlineUserGroup size={24} />,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600&h=400',
  },
  {
    title: 'Practical-First Live Labs',
    desc: 'Master industry-standard production tools through hands-on labs and real corporate scenario simulations.',
    subtitle: 'Hands-on Production Depth',
    bullets: [
      'Real cloud & automation environment labs',
      'Industry-standard toolchain exposure',
      'Live scenario troubleshooting'
    ],
    icon: <HiOutlineDesktopComputer size={24} />,
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600&h=400',
  },
  {
    title: 'Corporate Practitioner Faculty',
    subtitle: 'Learn from Active Senior Pros',
    desc: 'Taught by working tech leads and senior architects who manage production systems daily.',
    bullets: [
      'Senior engineers from top tech firms',
      'Real production case studies',
      '1-on-1 mentor guidance sessions'
    ],
    icon: <HiOutlineLightBulb size={24} />,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600&h=400',
  },
];

export default function WhyEzer() {
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 340;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="section" style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '64px 0' }}>
      <div className="container">
        
        {/* Header with Title & Navigation Arrows */}
        <div style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          marginBottom: '36px', flexWrap: 'wrap', gap: '16px'
        }}>
          <div>
            <span className="section-tag">
              <HiSparkles size={14} style={{ color: '#f2b733' }} />
              The EZER Advantage
            </span>
            <h2 style={{ color: '#000648', fontSize: 'clamp(1.35rem, 2.2vw, 1.7rem)', marginTop: '4px' }}>
              Why EZER Learning Solution
            </h2>
            <p style={{ color: '#475569', fontSize: '0.86rem', maxWidth: '520px', marginTop: '4px', lineHeight: 1.6 }}>
              We bridge the gap between classroom theory and real corporate tech jobs through end-to-end outcome support.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              type="button"
              onClick={() => handleScroll('left')}
              aria-label="Scroll left"
              style={{
                width: '40px', height: '40px', borderRadius: '50%',
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
              aria-label="Scroll right"
              style={{
                width: '40px', height: '40px', borderRadius: '50%',
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

        {/* Single-Line Horizontal Scroll Track */}
        <div
          ref={sliderRef}
          className="no-scrollbar"
          style={{
            display: 'flex',
            gap: '24px',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            padding: '12px 8px 24px 8px',
            width: '100%',
            boxSizing: 'border-box',
            scrollBehavior: 'smooth',
          }}
        >
          {reasons.map((r) => (
            <div 
              key={r.title} 
              style={{
                flex: '0 0 clamp(290px, 30vw, 340px)',
                scrollSnapAlign: 'start',
                minWidth: '290px',
                background: '#ffffff', borderRadius: '16px', overflow: 'hidden',
                border: '1.5px solid #e2e8f0', transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                boxShadow: '0 4px 16px rgba(0,6,72,0.06)',
                display: 'flex', flexDirection: 'column',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 14px 36px rgba(0, 6, 72, 0.16)';
                e.currentTarget.style.borderColor = '#000648';
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 6, 72, 0.06)';
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Image Banner Header */}
              <div style={{ height: '140px', overflow: 'hidden', position: 'relative', background: '#000648' }}>
                <img 
                  src={r.image} 
                  alt={r.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9, objectPosition: 'center top' }} 
                />
                
                {/* Floating Glowing Icon Box */}
                <div style={{
                  position: 'absolute', bottom: '12px', left: '16px',
                  width: '42px', height: '42px', borderRadius: '10px',
                  background: '#000648', border: '1.5px solid #f2b733', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  color: '#f2b733', boxShadow: '0 6px 14px rgba(0,6,72,0.4)',
                }}>
                  {r.icon}
                </div>

                <div style={{
                  position: 'absolute', top: '10px', right: '12px',
                  background: 'rgba(0,6,72,0.85)', backdropFilter: 'blur(4px)',
                  color: '#f2b733', fontSize: '0.65rem', fontWeight: 800,
                  padding: '3px 10px', borderRadius: '50px', border: '1px solid rgba(242,183,51,0.4)'
                }}>
                  {r.subtitle}
                </div>
              </div>

              {/* Enhanced Detailed Content Body */}
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#000648', marginBottom: '8px', lineHeight: 1.3 }}>
                    {r.title}
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.6, marginBottom: '16px' }}>
                    {r.desc}
                  </p>
                </div>

                {/* Bullet Points */}
                <div style={{ 
                  background: '#f8fafc', padding: '12px 14px', borderRadius: '10px', 
                  border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '8px' 
                }}>
                  {r.bullets.map((bullet) => (
                    <div key={bullet} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.76rem', fontWeight: 700, color: '#000648' }}>
                      <HiCheckCircle size={15} style={{ color: '#f2b733', flexShrink: 0 }} />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


