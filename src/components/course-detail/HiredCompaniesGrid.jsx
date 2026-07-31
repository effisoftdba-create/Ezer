import React from 'react';

export default function HiredCompaniesGrid({ transitions }) {
  return (
    <section className="section" style={{ background: '#ffffff', padding: '72px 0' }}>
      <div className="container">
        <div className="section-title">
          <span className="section-tag">Career Placement Outcomes</span>
          <h2>Our Graduates Get Hired by Leading Tech Firms</h2>
          <p>Join a community of engineers building impactful, high-growth software careers.</p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))',
            gap: '24px',
          }}
        >
          {transitions.map((item) => (
            <div
              key={item.name}
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 1px 3px rgba(15, 23, 42, 0.05)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ background: '#0f172a', padding: '24px 16px 16px', color: '#ffffff' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    margin: '0 auto 12px',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                  }}
                />
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '2px' }}>
                  {item.name}
                </h3>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#93c5fd' }}>
                  Placed @ {item.company}
                </div>
              </div>

              <div style={{ padding: '16px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px', background: '#f8fafc' }}>
                <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 500 }}>
                  Before: <span style={{ color: '#0f172a', fontWeight: 600 }}>{item.beforeRole}</span>
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1e40af', background: '#eff6ff', padding: '6px 10px', borderRadius: '6px', border: '1px solid #bfdbfe' }}>
                  After: {item.afterRole}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
