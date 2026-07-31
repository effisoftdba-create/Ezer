import React from 'react';

export default function ContactHeader() {
  return (
    <section
      style={{
        background: '#000648',
        color: '#ffffff',
        padding: '72px 0 60px',
        textAlign: 'center',
        borderBottom: '3px solid #f2b733',
      }}
    >
      <div className="container">
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
          Contact & Admissions Support
        </span>
        <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 900, marginTop: '12px', marginBottom: '12px', color: '#ffffff' }}>
          Get In Touch With EZER Learning Solution
        </h1>
        <p style={{ color: 'rgba(255, 255, 255, 0.88)', fontSize: '1.05rem', maxWidth: '640px', margin: '0 auto', lineHeight: 1.6 }}>
          Have questions about upcoming live online cohorts, course syllabi, or career advisory? Speak directly with our admissions team.
        </p>
      </div>
    </section>
  );
}
