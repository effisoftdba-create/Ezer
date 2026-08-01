import React from 'react';
import { HiShieldCheck, HiLockClosed, HiCheckCircle } from 'react-icons/hi';
import CTABanner from '../components/CTABanner';

export default function PrivacyPolicy({ onOpenDemoModal }) {
  return (
    <div style={{ background: '#ffffff' }}>

      {/* Header Banner */}
      <section style={{
        background: '#000648', padding: '64px 0 48px', color: '#ffffff', textAlign: 'center',
        borderBottom: '3px solid #f2b733'
      }}>
        <div className="container">
          <span style={{
            background: 'rgba(242,183,51,0.15)', border: '1px solid rgba(242,183,51,0.4)',
            color: '#f2b733', fontSize: '0.75rem', fontWeight: 800, padding: '4px 14px',
            borderRadius: '50px', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'inline-block', marginBottom: '12px'
          }}>
            Data Protection & Compliance
          </span>
          <h1 style={{ color: '#ffffff', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 900, marginBottom: '12px' }}>
            Privacy Policy
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.96rem', maxWidth: '650px', margin: '0 auto', lineHeight: 1.6 }}>
            EZER Learning Solutions is committed to protecting your personal information, LMS user data, and privacy in compliance with Indian IT Act rules.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section" style={{ padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', color: '#334155', fontSize: '0.94rem', lineHeight: 1.75 }}>
            
            <div style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '24px' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#000648', marginBottom: '8px' }}>
                1. Information We Collect
              </h2>
              <p style={{ margin: 0 }}>
                We collect personal information when you register for a course, request a counselling demo call, or access our Learning Management System (LMS). This includes your full name, email address, phone number, academic qualification, payment transaction references, and LMS course progress data.
              </p>
            </div>

            <div style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '24px' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#000648', marginBottom: '8px' }}>
                2. How We Use Your Data
              </h2>
              <p style={{ marginBottom: '10px' }}>
                Your data is exclusively utilized to deliver live online training, configure your LMS portal access, issue accredited certificates of completion, and coordinate post-graduation placement assistance with corporate hiring partners.
              </p>
              <ul style={{ paddingLeft: '20px', margin: 0 }}>
                <li>Course delivery, live class scheduling notifications, and attendance verification.</li>
                <li>LMS portal credential generation and recording access.</li>
                <li>Resume reviews, mock interview scheduling, and job referral submission.</li>
              </ul>
            </div>

            <div style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '24px' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#000648', marginBottom: '8px' }}>
                3. LMS Security & Data Protection
              </h2>
              <p style={{ margin: 0 }}>
                We implement strict technical and organizational measures to safeguard student records against unauthorized access. Student LMS credentials, assignment submissions, and assessment scores are stored in encrypted cloud databases. We do not sell or trade student contact lists to third-party marketing agencies.
              </p>
            </div>

            <div style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '24px' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#000648', marginBottom: '8px' }}>
                4. Third-Party Disclosures
              </h2>
              <p style={{ margin: 0 }}>
                Personal data is shared only with verified service providers necessary for course execution (such as secure payment gateways, LMS hosting infrastructure, and direct corporate recruitment teams upon your explicit permission during placement drives).
              </p>
            </div>

            <div style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '24px' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#000648', marginBottom: '8px' }}>
                5. Contact & Privacy Inquiries
              </h2>
              <p style={{ margin: 0 }}>
                For any data access requests, corrections, or privacy queries, please contact our Data Governance Officer at <strong>support@ezerlearningsolutions.com</strong> or call our institute support line.
              </p>
            </div>

          </div>

        </div>
      </section>

      <CTABanner onOpenDemoModal={onOpenDemoModal} />
    </div>
  );
}
