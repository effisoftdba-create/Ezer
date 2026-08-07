import React from 'react';
import { HiSparkles, HiCheckCircle } from 'react-icons/hi';
import { useSiteData } from '../Admin_Control/context/SiteContext';
import { resolveImageSrc } from '../utils/imageUtils';
import ExecutiveLeadership from './ExecutiveLeadership';

function ExecutiveGlassStack({ leaders }) {
  return (
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
              key={exec.id || exec.roleTag || exec.name}
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
        Hover cards to expand Executive Leaders (CEO, CFO, CTHM)
      </span>
    </div>
  );
}

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
            {/* Left Side: Single Showcase Photo with Polygon Frame & Floating Language Badges */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div 
                style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '5%',
                  width: '90%',
                  height: '105%',
                  background: 'linear-gradient(135deg, rgba(242, 183, 51, 0.25) 0%, rgba(0, 6, 72, 0.1) 100%)',
                  clipPath: 'polygon(15% 0%, 100% 10%, 85% 100%, 0% 85%)',
                  borderRadius: '24px',
                  zIndex: 1
                }} 
              />

              <div 
                style={{
                  position: 'relative',
                  zIndex: 2,
                  width: '100%',
                  maxWidth: '460px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0, 6, 72, 0.18)',
                  border: '2px solid #000648',
                  background: '#ffffff'
                }}
              >
                <img 
                  src={resolveImageSrc(ezerDefinition.image)} 
                  alt={ezerDefinition.headline}
                  style={{
                    width: '100%',
                    height: 'auto',
                    minHeight: '340px',
                    objectFit: ezerDefinition.imageFit || 'cover',
                    objectPosition: ezerDefinition.imagePosition || 'center center',
                    display: 'block'
                  }}
                />
              </div>

              {/* Floating Language Badges */}
              <div 
                title="Tamil Language Cohort Support"
                style={{
                  position: 'absolute', top: '4%', left: '-2%', zIndex: 3,
                  padding: '8px 18px', borderRadius: '50px',
                  background: '#000648', color: '#f2b733', fontWeight: 900, fontSize: '0.85rem',
                  display: 'flex', alignItems: 'center', gap: '6px',
                  boxShadow: '0 6px 18px rgba(0,6,72,0.3)', border: '2px solid #f2b733'
                }}
              >
                <HiGlobeAlt size={16} /> Tamil (தமிழ்)
              </div>

              <div 
                title="English Language Cohort Support"
                style={{
                  position: 'absolute', top: '42%', right: '-4%', zIndex: 3,
                  padding: '8px 18px', borderRadius: '50px',
                  background: '#000648', color: '#f2b733', fontWeight: 900, fontSize: '0.85rem',
                  display: 'flex', alignItems: 'center', gap: '6px',
                  boxShadow: '0 6px 18px rgba(0,6,72,0.3)', border: '2px solid #f2b733'
                }}
              >
                <HiGlobeAlt size={16} /> English
              </div>

              <div 
                title="Hindi Language Cohort Support"
                style={{
                  position: 'absolute', bottom: '6%', left: '-2%', zIndex: 3,
                  padding: '8px 18px', borderRadius: '50px',
                  background: '#000648', color: '#f2b733', fontWeight: 900, fontSize: '0.85rem',
                  display: 'flex', alignItems: 'center', gap: '6px',
                  boxShadow: '0 6px 18px rgba(0,6,72,0.3)', border: '2px solid #f2b733'
                }}
              >
                <HiGlobeAlt size={16} /> Hindi (हिन्दी)
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
                  {ezerDefinition.tag}
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
                {ezerDefinition.headline}
              </h2>

              <p 
                style={{
                  fontSize: '0.96rem',
                  color: '#334155',
                  lineHeight: 1.7,
                  marginBottom: '26px'
                }}
              >
                {ezerDefinition.description}
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
                {ezerDefinition.highlights?.map((feat) => (
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
                    Ezer means "Helper, Strength, and Support" — acting as a dependable support system that helps students, aspirants, and professionals become job-ready and corporate-relevant.
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
