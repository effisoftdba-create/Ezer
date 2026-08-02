import React from 'react';
import TrendingSkills from '../components/TrendingSkills';
import EzerDefinition from '../components/EzerDefinition';
import CTABanner from '../components/CTABanner';
import CompanyLogos from '../components/CompanyLogos';
import { phase2Courses } from '../data/courses';

export default function Courses({ onOpenDemoModal }) {
  return (
    <div>
      {/* Header Banner */}
      <section
        style={{
          background: '#000648',
          color: '#ffffff',
          padding: '56px 0 44px',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <span
            style={{
              background: 'rgba(242, 183, 51, 0.15)',
              border: '1px solid rgba(242, 183, 51, 0.3)',
              color: '#f2b733',
              fontSize: '0.72rem',
              fontWeight: 700,
              padding: '4px 14px',
              borderRadius: '50px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              display: 'inline-block',
              marginBottom: '12px',
            }}
          >
            Live Online IT Courses
          </span>
          <h1 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
            Job-Oriented IT Certification Courses
          </h1>
          <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.82)', maxWidth: '680px', margin: '0 auto', lineHeight: 1.6 }}>
            "Whether you're switching careers or upgrading your current skill set, EZER Learning Solution's live online IT courses are built around one goal: making you job-ready. Every course combines hands-on labs, real-world projects, and industry-standard tools — backed by placement support that continues for a full year after you graduate."
          </p>
        </div>
      </section>

      {/* Main Course Listing Grid */}
      <TrendingSkills onOpenDemoModal={onOpenDemoModal} />

      {/* EZER Platform Definition Section (Reference Image 2) */}
      <EzerDefinition />

      {/* Phase 2 Upcoming Courses Grid */}
      <section className="section-alt" style={{ padding: '56px 0', background: '#f7f8fa' }}>
        <div className="container">
          <div className="section-title">
            <span className="section-tag">
              Phase 2 Tracks
            </span>
            <h2>Upcoming Specialized IT Cohorts</h2>
            <p>Additional domain specializations opening for enrollment soon.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px',
            }}
          >
            {phase2Courses.map((course) => (
              <div
                key={course.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '10px',
                  padding: '20px',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <span
                    style={{
                      background: 'rgba(0, 6, 72, 0.06)',
                      color: '#000648',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      padding: '3px 8px',
                      borderRadius: '4px',
                      textTransform: 'uppercase',
                      marginBottom: '10px',
                      display: 'inline-block',
                    }}
                  >
                    {course.badge}
                  </span>
                  <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#000648', marginBottom: '6px' }}>
                    {course.title}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.5, marginBottom: '16px' }}>
                    {course.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenDemoModal(course.title)}
                  style={{
                    width: '100%',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    padding: '9px',
                    borderRadius: '6px',
                    background: '#000648',
                    color: '#f2b733',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Join Waitlist
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CompanyLogos />
      <CTABanner onOpenDemoModal={onOpenDemoModal} />
    </div>
  );
}
