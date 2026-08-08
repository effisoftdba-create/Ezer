import React from 'react';
import { HiSparkles } from 'react-icons/hi';

export default function LeadsAnalyticsCard({ sortedCourseAnalytics, totalCount }) {
  return (
    <div style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '20px', marginBottom: '28px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
        <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#000648' }}>
          Course Demand & Custom "Others" Interest Breakdown
        </h3>
      </div>


      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
        {sortedCourseAnalytics.map(([cName, count]) => {
          const pct = totalCount > 0 ? Math.round((count / totalCount) * 100) : 0;
          const isOthers = cName.startsWith('Others');
          return (
            <div key={cName} style={{ background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '10px', padding: '12px 14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', fontWeight: 800, color: isOthers ? '#115DFC' : '#000648', marginBottom: '6px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '180px' }} title={cName}>
                  {cName}
                </span>
                <span>{count} ({pct}%)</span>
              </div>
              <div style={{ height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${pct}%`, background: isOthers ? '#115DFC' : '#000648', borderRadius: '4px', transition: 'width 0.4s ease' }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
