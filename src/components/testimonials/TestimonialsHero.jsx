import React from 'react';
import { HiStar, HiUserGroup } from 'react-icons/hi';

export default function TestimonialsHero({ onOpenDemoModal }) {
  return (
    <section
      style={{
        background: '#000648',
        color: '#ffffff',
        padding: '72px 0',
        borderBottom: '3px solid #f2b733',
        position: 'relative',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(450px, 100%), 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* Left Copy Column */}
          <div>
            <span
              style={{
                background: 'rgba(242, 183, 51, 0.15)',
                border: '1.5px solid rgba(242, 183, 51, 0.4)',
                color: '#f2b733',
                fontSize: '0.8rem',
                fontWeight: 800,
                padding: '6px 16px',
                borderRadius: '50px',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                display: 'inline-block',
                marginBottom: '16px',
              }}
            >
              Alumni Success & Reviews
            </span>
            <h1 style={{ color: '#ffffff', marginBottom: '16px', fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', fontWeight: 900, lineHeight: 1.15 }}>
              Proven Outcomes & Real Alumni Stories
            </h1>
            <p style={{ fontSize: '0.94rem', color: 'rgba(255, 255, 255, 0.88)', lineHeight: 1.6, marginBottom: '24px' }}>
              Explore career switch journeys from our graduates who secured engineering roles across leading IT companies after completing EZER live online cohorts.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '28px' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1.5px solid #f2b733', padding: '7px 16px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 800, color: '#f2b733', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <HiStar size={16} style={{ color: '#f2b733' }} /> 4.9 / 5 Rating (1,200+ Reviews)
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1.5px solid #f2b733', padding: '7px 16px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 800, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <HiUserGroup size={16} style={{ color: '#f2b733' }} /> Up to 1-Year Placement Assistance
              </div>
            </div>

            <div>
              <button type="button" onClick={() => onOpenDemoModal()} className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '0.88rem', fontWeight: 900, borderRadius: '8px' }}>
                Book Free Demo Class
              </button>
            </div>
          </div>

          {/* Right Picture Column - Properly Framed High-Res Image */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: '18px',
                overflow: 'hidden',
                border: '2.5px solid #f2b733',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.45)',
                position: 'relative',
                height: 'clamp(280px, 40vh, 340px)',
                background: '#000648',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000&h=700"
                alt="EZER Placed Alumni Team"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
