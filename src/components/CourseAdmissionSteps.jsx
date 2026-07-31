import React, { useState, useEffect, useRef } from 'react';
import AdmissionStepCard from './admission/AdmissionStepCard';

export default function CourseAdmissionSteps({ steps, title }) {
  const [visibleRows, setVisibleRows] = useState({});
  const containerRef = useRef(null);

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
  }, [steps]);

  if (!steps || steps.length === 0) return null;

  return (
    <section
      style={{
        background: '#ffffff',
        padding: '72px 0',
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
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '36px',
              left: '50%',
              width: '2px',
              borderLeft: '2px dashed #cbd5e1',
              transform: 'translateX(-50%)',
              zIndex: 1,
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 2 }}>
            {steps.map((item, idx) => (
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
  );
}
