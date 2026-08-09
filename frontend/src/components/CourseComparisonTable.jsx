import React from 'react';
import { HiCheck, HiX, HiStar } from 'react-icons/hi';

export default function CourseComparisonTable({ comparisonData }) {
  if (!comparisonData || comparisonData.length === 0) return null;

  return (
    <section style={{ margin: '64px 0', background: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '32px 24px', boxShadow: '0 1px 3px rgba(15, 23, 42, 0.05)' }}>
      <div className="section-title">
        <span className="section-tag">
          Program Benchmark
        </span>
        <h2>Why Our Executive Program Stands Out</h2>
        <p>
          See how our hands-on engineering lab ecosystem compares with traditional recorded courses.
        </p>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0', borderRadius: '8px', overflow: 'hidden' }}>
          <thead>
            <tr>
              <th style={{ background: '#f8fafc', padding: '16px 20px', textAlign: 'left', fontSize: '0.875rem', fontWeight: 600, color: '#0f172a', borderBottom: '1px solid #e2e8f0' }}>
                Key Comparison Feature
              </th>
              <th style={{ background: '#0f172a', color: '#ffffff', padding: '16px 20px', textAlign: 'left', fontSize: '0.95rem', fontWeight: 700, borderBottom: '1px solid #0f172a', width: '42%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <HiStar style={{ color: '#2563eb', fontSize: '1.1rem' }} /> Our EZER Live Cohort
                </div>
              </th>
              <th style={{ background: '#f1f5f9', color: '#64748b', padding: '16px 20px', textAlign: 'left', fontSize: '0.875rem', fontWeight: 600, borderBottom: '1px solid #e2e8f0', width: '38%' }}>
                Generic Online Bootcamps
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, idx) => (
              <tr key={row.feature} style={{ background: idx % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                <td style={{ padding: '14px 20px', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#0f172a', fontSize: '0.875rem' }}>
                  {row.feature}
                </td>
                <td style={{ padding: '14px 20px', borderBottom: '1px solid #e2e8f0', background: '#eff6ff', fontWeight: 600, color: '#1e40af', fontSize: '0.875rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ background: '#2563eb', color: '#ffffff', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 700 }}>
                      <HiCheck size={12} />
                    </div>
                    <span>{row.us}</span>
                  </div>
                </td>
                <td style={{ padding: '14px 20px', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ background: '#cbd5e1', color: '#475569', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <HiX size={12} />
                    </div>
                    <span>{row.others}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
