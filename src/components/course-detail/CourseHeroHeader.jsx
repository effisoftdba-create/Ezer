import React from 'react';
import { HiClock, HiUserGroup, HiGlobeAlt, HiCalendar, HiDocumentText } from 'react-icons/hi';

export default function CourseHeroHeader({ course, onOpenDemoModal, onOpenPurchaseModal }) {
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
        <span className="section-tag" style={{ background: 'rgba(242, 183, 51, 0.15)', borderColor: 'rgba(242, 183, 51, 0.3)', color: '#f2b733' }}>
          {course.badge || 'Live Executive Cohort'}
        </span>
        <span
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#e2e8f0',
            fontSize: '0.75rem',
            fontWeight: 600,
            padding: '6px 14px',
            borderRadius: '50px',
            textTransform: 'uppercase',
          }}
        >
          Post-Graduate Certification
        </span>
      </div>

      <h1
        style={{
          fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
          fontWeight: 800,
          lineHeight: 1.15,
          color: '#ffffff',
          marginBottom: '18px',
        }}
      >
        {course.title}
      </h1>

      <p style={{ fontSize: '1.05rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '28px' }}>
        {course.description}
      </p>

      {/* Key Specs Bar */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '16px',
          background: 'rgba(255, 255, 255, 0.03)',
          padding: '16px 20px',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          marginBottom: '28px',
        }}
      >
        <div>
          <div style={{ fontSize: '0.725rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Duration</div>
          <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
            <HiClock style={{ color: '#f2b733' }} /> {course.duration}
          </div>
        </div>
        <div>
          <div style={{ fontSize: '0.725rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Format</div>
          <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
            <HiUserGroup style={{ color: '#f2b733' }} /> Live Online Labs
          </div>
        </div>
        <div>
          <div style={{ fontSize: '0.725rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Languages</div>
          <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
            <HiGlobeAlt style={{ color: '#f2b733' }} /> {course.languages || 'Tamil & English'}
          </div>
        </div>
      </div>

      {/* CTA Group */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
        <button
          type="button"
          onClick={() => {
            if (onOpenPurchaseModal) onOpenPurchaseModal();
          }}
          className="btn btn-gold btn-lg"
          style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 900, borderRadius: '50px', background: '#f2b733', color: '#000648', padding: '12px 24px' }}
        >
          Enroll & Buy Course Now
        </button>

        <button
          type="button"
          onClick={() => onOpenDemoModal(course.title)}
          className="btn btn-primary btn-lg"
          style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, borderRadius: '50px' }}
        >
          <HiCalendar size={18} /> Schedule Demo Class
        </button>
      </div>
    </div>
  );
}
