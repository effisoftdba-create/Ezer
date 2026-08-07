import React from 'react';
import { HiShieldCheck, HiBadgeCheck } from 'react-icons/hi';

export default function VerifiableCertificateBanner({ courseTitle, onOpenDemoModal }) {
  return (
    <section className="section" style={{ background: '#ffffff', padding: '32px 0' }}>
      <div className="container">
        <div style={{ background: '#0f172a', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '36px 32px', color: '#ffffff', boxShadow: '0 12px 28px -4px rgba(15, 23, 42, 0.15)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: '36px', alignItems: 'center' }}>
            <div>
              <span className="section-tag" style={{ background: 'rgba(37, 99, 235, 0.15)', borderColor: 'rgba(37, 99, 235, 0.3)', color: '#93c5fd', marginBottom: '12px' }}>
                Verifiable Credential
              </span>
              <h2 style={{ color: '#ffffff', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 700, marginBottom: '12px', lineHeight: 1.25 }}>
                Earn Your Verifiable Executive Certification
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                Add an official QR-verifiable credential to your resume and LinkedIn profile. Validated directly by corporate mentors upon production lab evaluations.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem', fontWeight: 500, color: '#e2e8f0' }}>
                  <HiShieldCheck style={{ color: '#2563eb', fontSize: '1.25rem' }} /> Shareable digital badge with permanent web verification link
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem', fontWeight: 500, color: '#e2e8f0' }}>
                  <HiShieldCheck style={{ color: '#2563eb', fontSize: '1.25rem' }} /> Accepted by corporate hiring partners across India
                </div>
              </div>
            </div>

            {/* Clean Corporate Certification Card */}
            <div style={{ background: '#ffffff', borderRadius: '12px', padding: '24px', color: '#0f172a', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <img src={`${import.meta.env.BASE_URL || '/'}images/logo_navy.png`} alt="EZER Logo" style={{ height: '42px', width: 'auto', objectFit: 'contain' }} />
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#000648' }}>EZER Learning Solutions</div>
                  <div style={{ fontSize: '0.785rem', color: '#64748b' }}>Executive Certification Program</div>
                </div>
              </div>

              <div style={{ padding: '14px 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', marginBottom: '16px' }}>
                <div style={{ fontSize: '0.725rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Program Credential</div>
                <h3 style={{ fontSize: '1.1rem', color: '#0f172a', margin: '4px 0', fontWeight: 700 }}>{courseTitle}</h3>
                <div style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 600 }}>Validated on Live Production Projects</div>
              </div>

              <button type="button" onClick={() => onOpenDemoModal(courseTitle)} className="btn btn-primary" style={{ width: '100%', fontSize: '0.875rem', padding: '10px 16px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', borderRadius: '8px' }}>
                <HiBadgeCheck size={18} /> Claim Certification
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
