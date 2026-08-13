import React from 'react';
import { HiAcademicCap, HiCheckCircle } from 'react-icons/hi';

export default function CampusImmersionBanner({ immersion }) {
  if (!immersion) return null;

  return (
    <section style={{ margin: '64px 0' }}>
      <div
        style={{
          background: '#0f172a',
          borderRadius: '16px',
          padding: '36px 32px',
          color: '#ffffff',
          boxShadow: '0 12px 28px -4px rgba(15, 23, 42, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
          gap: '32px',
          alignItems: 'center',
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
        }}
      >
        <div>
          <span className="section-tag" style={{ background: 'rgba(37, 99, 235, 0.15)', borderColor: 'rgba(37, 99, 235, 0.3)', color: '#93c5fd', marginBottom: '12px' }}>
            Campus Exposure
          </span>
          <h3 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 700, color: '#ffffff', marginTop: '10px', marginBottom: '12px' }}>
            {immersion.title}
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.6, marginBottom: '24px' }}>
            Experience real academic immersion with physical lab visits, direct faculty mentorship sessions, and invaluable peer networking right at the campus.
          </p>

          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0 }}>
            {immersion.highlights?.map((item) => (
              <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', fontWeight: 500, color: '#e2e8f0' }}>
                <HiCheckCircle style={{ color: '#10b981', fontSize: '1.2rem', flexShrink: 0 }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ background: 'rgba(255, 255, 255, 0.04)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '28px', textAlign: 'center' }}>
          <HiAcademicCap style={{ fontSize: '3rem', color: '#2563eb', marginBottom: '12px' }} />
          <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
            Campus Immersion Experience
          </h4>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5, marginBottom: '14px' }}>
            Interact with leading research faculty and corporate engineering mentors face-to-face.
          </p>
          <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
            {immersion.disclaimer}
          </div>
        </div>
      </div>
    </section>
  );
}
