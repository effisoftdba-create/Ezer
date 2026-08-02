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
                border: '1.5px solid #000648',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0, 6, 72, 0.12)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Dark Navy Top Header matching Reference Image 1 */}
              <div style={{ background: '#000648', padding: '24px 20px 20px', color: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    margin: '0 auto 12px',
                    border: '3px solid #f2b733',
                    boxShadow: '0 4px 14px rgba(242, 183, 51, 0.4)',
                  }}
                />
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', marginBottom: '4px' }}>
                  {item.name}
                </h3>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#60a5fa' }}>
                  Placed @ {item.company}
                </div>
              </div>

              {/* White Bottom Body Section matching Reference Image 1 */}
              <div style={{ padding: '20px 18px 22px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '14px', background: '#ffffff' }}>
                <div style={{ fontSize: '0.88rem', color: '#64748b' }}>
                  Before: <strong style={{ color: '#000648', fontWeight: 800 }}>{item.beforeRole}</strong>
                </div>
                <div style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  border: '1.5px solid #000648',
                  background: 'rgba(0, 6, 72, 0.04)',
                  fontSize: '0.9rem',
                  fontWeight: 900,
                  color: '#000648',
                  textAlign: 'center',
                  boxSizing: 'border-box'
                }}>
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
