import React, { useState, useEffect, useRef } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import AdmissionStepCard from './admission/AdmissionStepCard';

const DEFAULT_6_STEPS = [
  { step: '01', title: 'Application & Profile Assessment', desc: 'Submit your background details for cohort track alignment and eligibility evaluation.' },
  { step: '02', title: 'Live Technical & Career Counseling', desc: '1-on-1 session with senior tech advisors to map your syllabus path and schedule.' },
  { step: '03', title: 'Cohort Enrollment & Sandbox Access', desc: 'Confirm registration and get immediate access to preparatory LMS & lab environments.' },
  { step: '04', title: '100% Live Online Masterclasses', desc: 'Interactive weekend/weekday live classes taught by corporate practitioner engineers.' },
  { step: '05', title: 'Production Labs & Capstone Projects', desc: 'Build portfolio-ready projects evaluated by senior engineers with 1-on-1 feedback.' },
  { step: '06', title: '1-Year Placement Support & Mock Interviews', desc: 'Resume optimization, technical mock interviews, and continuous job referrals.' }
];

export default function CourseAdmissionSteps({ steps, title }) {
  const [visibleRows, setVisibleRows] = useState({});
  const containerRef = useRef(null);

  const displaySteps = (steps && steps.length > 0) ? steps : DEFAULT_6_STEPS;

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = entry.target.getAttribute('data-step-idx');
            if (idx !== null) {
              setVisibleRows((prev) => ({ ...prev, [idx]: true }));
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    const rows = node.querySelectorAll('.timeline-step-row');
    rows.forEach((row) => observer.observe(row));

    return () => {
      rows.forEach((row) => observer.unobserve(row));
      observer.disconnect();
    };
  }, [displaySteps]);

  if (!displaySteps || displaySteps.length === 0) return null;

  return (
    <LazyMotion features={domAnimation}>
      <section
        style={{
          background: '#ffffff',
          padding: '24px 0',
          width: '100%',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container">
          <div className="section-title">
            <span className="section-tag">Program Roadmap</span>
            <h2>{title || 'How the Program Works'}</h2>
            <p>A structured step-by-step roadmap from onboarding to final career placement.</p>
          </div>

          {/* Vertical Timeline Container */}
          <div
            ref={containerRef}
            style={{
              position: 'relative',
              maxWidth: '920px',
              margin: '0 auto',
              padding: '0 12px',
            }}
          >
            {/* Central Vertical Line */}
            <div
              className="timeline-line"
              style={{
                position: 'absolute',
                top: '20px',
                bottom: '36px',
                left: '50%',
                width: '2px',
                borderLeft: '2.5px dashed #f2b733',
                transform: 'translateX(-50%)',
                zIndex: 1,
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 2 }}>
              {displaySteps.map((item, idx) => (
                <AdmissionStepCard
                  key={item.title}
                  item={item}
                  idx={idx}
                  isVisible={!!visibleRows[idx]}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
