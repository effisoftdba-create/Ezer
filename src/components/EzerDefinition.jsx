import React from 'react';
import { HiSparkles, HiCheckCircle } from 'react-icons/hi';
import { useSiteData } from '../Admin_Control/context/SiteContext';
import ExecutiveLeadership from './ExecutiveLeadership';

export default function EzerDefinition() {
  const { ezerDefinition, executiveLeaders } = useSiteData();

  const leaders = (executiveLeaders && executiveLeaders.length >= 3)
    ? executiveLeaders.slice(0, 3)
    : [
        {
          id: 'exec-1',
          roleTag: 'CEO',
          roleName: 'Chief Executive Officer',
          name: 'Dr. Subramanian R',
          image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=700',
          rotationDeg: -12,
        },
        {
          id: 'exec-2',
          roleTag: 'CFO',
          roleName: 'Chief Financial Officer',
          name: 'Meenakshi Sundaram',
          image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=700',
          rotationDeg: 4,
        },
        {
          id: 'exec-3',
          roleTag: 'CTHM',
          roleName: 'Chief Tech & Academic Officer',
          name: 'Anand Kumar K',
          image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=700',
          rotationDeg: 16,
        }
      ];

  return (
    <>
      <section 
        id="ezer-definition"
        style={{
          padding: '72px 0',
          background: '#ffffff',
          overflow: 'hidden',
          position: 'relative',
          borderBottom: '1px solid #e2e8f0'
        }}
      >
        <div className="container">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center'
            }}
          >
            {/* Left Side: 3 Executive Glass Cards Stack (CEO, CFO, CTHM) */}
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div 
                style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '5%',
                  width: '90%',
                  height: '105%',
                  background: 'linear-gradient(135deg, rgba(242, 183, 51, 0.22) 0%, rgba(0, 6, 72, 0.08) 100%)',
                  clipPath: 'polygon(15% 0%, 100% 10%, 85% 100%, 0% 85%)',
                  borderRadius: '24px',
                  zIndex: 1
                }} 
              />

              <div 
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '2%',
                  width: '80%',
                  height: '95%',
                  border: '2.5px solid #f2b733',
                  clipPath: 'polygon(20% 0%, 100% 20%, 80% 100%, 0% 80%)',
                  borderRadius: '24px',
                  zIndex: 1
                }} 
              />

              {/* 3 Executive Overlapping Glass Cards */}
              <div className="glass-stack-container" style={{ position: 'relative', zIndex: 2, padding: '24px 0' }}>
                {leaders.map((exec, idx) => {
                  const rotDeg = exec.rotationDeg !== undefined ? exec.rotationDeg : (-12 + idx * 14);
                  const tagText = `${exec.roleTag || 'EXEC'} • ${exec.name || ''}`;

                  return (
                    <div
                      key={exec.id || idx}
                      className="glass"
                      data-text={tagText}
                      style={{ '--r': rotDeg }}
                      title={`${exec.roleName || exec.roleTag} — ${exec.name}`}
                    >
                      <img src={exec.image} alt={exec.name || exec.roleTag} />
                    </div>
                  );
                })}
              </div>

              <span style={{ position: 'relative', zIndex: 2, fontSize: '0.78rem', color: '#000648', fontWeight: 800, marginTop: '8px', textAlign: 'center' }}>
                ★ Hover cards to expand Executive Leaders (CEO, CFO, CTHM)
              </span>

              {/* Floating Language Badges */}
              <div 
                title="Tamil Medium & Bilingual Support"
                style={{
                  position: 'absolute', top: '2%', left: '-2%', zIndex: 3,
                  width: '44px', height: '44px', borderRadius: '50%',
                  background: '#000648', color: '#f2b733', fontWeight: 900, fontSize: '1.1rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 6px 18px rgba(0,6,72,0.25)', border: '2.5px solid #f2b733'
                }}
              >
                அ
              </div>

              <div 
                title="English Medium Support"
                style={{
                  position: 'absolute', top: '40%', right: '-4%', zIndex: 3,
                  width: '44px', height: '44px', borderRadius: '50%',
                  background: '#000648', color: '#f2b733', fontWeight: 900, fontSize: '1.1rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 6px 18px rgba(0,6,72,0.25)', border: '2.5px solid #f2b733'
                }}
              >
                A
              </div>

              <div 
                title="Hindi Medium Support"
                style={{
                  position: 'absolute', bottom: '8%', left: '-3%', zIndex: 3,
                  width: '44px', height: '44px', borderRadius: '50%',
                  background: '#000648', color: '#f2b733', fontWeight: 900, fontSize: '1.15rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 6px 18px rgba(0,6,72,0.25)', border: '2.5px solid #f2b733'
                }}
              >
                அ
              </div>
            </div>

            {/* Right Side: Headline, Copy, and EZER Definition Tagline */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <span 
                  style={{
                    background: 'rgba(0, 6, 72, 0.08)',
                    color: '#000648',
                    fontSize: '0.74rem',
                    fontWeight: 800,
                    padding: '5px 14px',
                    borderRadius: '50px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <HiSparkles size={14} style={{ color: '#f2b733' }} />
                  {ezerDefinition?.tag || 'EMPOWERING CAREER SWITCHERS'}
                </span>
              </div>

              <h2 
                style={{
                  fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)',
                  fontWeight: 900,
                  color: '#000648',
                  lineHeight: 1.25,
                  marginBottom: '18px'
                }}
              >
                {ezerDefinition?.headline || 'Leading EdTech Platform for Learning in Native Languages & Real IT Skills.'}
              </h2>

              <p 
                style={{
                  fontSize: '0.96rem',
                  color: '#334155',
                  lineHeight: 1.7,
                  marginBottom: '26px'
                }}
              >
                {ezerDefinition?.description || "EZER Learning Solutions is India's top tech-driven EdTech platform delivering live online, practical, job-oriented IT courses."}
              </p>

              {/* Key Trust Highlights */}
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '14px',
                  marginBottom: '32px'
                }}
              >
                {(ezerDefinition?.highlights || [
                  'Live Online Instructor-Led',
                  '12-Month Placement Support',
                  'Mentorship by Industry Practitioners',
                  'Alumni & Peer Community'
                ]).map((feat) => (
                  <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <HiCheckCircle size={20} style={{ color: '#000648', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#000648' }}>{feat}</span>
                  </div>
                ))}
              </div>

              {/* EZER Definition Box */}
              <div 
                style={{
                  background: '#000648',
                  color: '#ffffff',
                  padding: '18px 22px',
                  borderRadius: '12px',
                  borderLeft: '4px solid #f2b733',
                  fontSize: '0.94rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  boxShadow: '0 4px 16px rgba(0, 6, 72, 0.15)'
                }}
              >
                <HiSparkles size={24} style={{ color: '#f2b733', flexShrink: 0 }} />
                <div>
                  <span style={{ color: '#f2b733', fontWeight: 900, fontSize: '0.98rem' }}>Meaning of EZER: </span>
                  <span style={{ lineHeight: 1.5 }}>
                    {ezerDefinition?.acronymText || 'Ezer means "Helper, Strength, and Support" — acting as a dependable support system that helps students, aspirants, and professionals become job-ready and corporate-relevant.'}
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* User Specified Glassmorphism Stack CSS */}
        <style>{`
          .glass-stack-container {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .glass-stack-container .glass {
            position: relative;
            width: 180px;
            height: 210px;
            background: linear-gradient(135deg, rgba(0, 6, 72, 0.85) 0%, rgba(15, 23, 42, 0.95) 100%);
            border: 1px solid rgba(242, 183, 51, 0.4);
            box-shadow: 0 25px 25px rgba(0, 0, 0, 0.35);
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.5s ease;
            border-radius: 12px;
            margin: 0 -45px;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            transform: rotate(calc(var(--r) * 1deg));
            overflow: hidden;
            cursor: pointer;
          }

          .glass-stack-container:hover .glass {
            transform: rotate(0deg);
            margin: 0 10px;
          }

          .glass-stack-container .glass img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          .glass-stack-container .glass::before {
            content: attr(data-text);
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 40px;
            background: rgba(0, 6, 72, 0.92);
            border-top: 1.5px solid #f2b733;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ffffff;
            font-weight: 800;
            font-size: 0.72rem;
            text-align: center;
            padding: 2px 6px;
            z-index: 5;
          }

          @media (max-width: 768px) {
            .glass-stack-container .glass {
              width: 135px;
              height: 165px;
              margin: 0 -25px;
            }
          }
        `}</style>
      </section>

      {/* EXECUTIVE LEADERSHIP BOARD EMBEDDED INSIDE EZER DEFINITION */}
      <ExecutiveLeadership />
    </>
  );
}

