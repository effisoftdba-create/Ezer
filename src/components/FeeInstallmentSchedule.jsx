import React from 'react';
import { HiCalendar, HiGift } from 'react-icons/hi';

export default function FeeInstallmentSchedule({ schedule, fee, applicationFee, referral, onOpenDemoModal }) {
  return (
    <section style={{ margin: '64px 0' }}>
      <div className="section-title">
        <span className="section-tag">
          Investment Roadmap
        </span>
        <h2>Program Fee & Installment Plan</h2>
        <p>
          Transparent fee structure with flexible installment schedules and no-cost EMI options.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '28px', width: '100%', maxWidth: '100%' }}>
        {/* Left Installment Table Card */}
        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(15, 23, 42, 0.05)' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <HiCalendar style={{ color: '#2563eb' }} /> Milestone Payment Schedule
          </h3>

          {schedule && schedule.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {schedule.map((item, idx) => (
                <div
                  key={item.stage}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    background: idx === 0 ? '#eff6ff' : '#f8fafc',
                    border: '1px solid #e2e8f0',
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 600, color: '#0f172a', fontSize: '0.9rem' }}>
                      {item.stage}
                    </div>
                    <div style={{ fontSize: '0.785rem', color: '#64748b' }}>
                      {item.detail}
                    </div>
                  </div>
                  <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '1rem' }}>
                    {item.amount}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ padding: '20px', textAlign: 'center', color: '#64748b' }}>
              Contact program advisor for custom installment schedule options.
            </div>
          )}

          <div style={{ marginTop: '16px', padding: '10px 14px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.785rem', color: '#64748b', lineHeight: 1.5 }}>
            * All fees are payable to the designated statutory program account. Standard terms apply.
          </div>
        </div>

        {/* Right Financial Assist Card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Main Price Card */}
          <div style={{ background: '#0f172a', color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', padding: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: '#93c5fd', letterSpacing: '0.05em' }}>
              Total Program Fee
            </div>
            <div style={{ fontSize: '2.25rem', fontWeight: 800, color: '#ffffff', margin: '8px 0' }}>
              {fee || '₹1,35,000 + GST'}
            </div>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '20px' }}>
              Application Fee: {applicationFee || '₹1,000 + GST'}
            </p>

            <button
              type="button"
              onClick={() => onOpenDemoModal && onOpenDemoModal('Fee & EMI Consultation')}
              className="btn btn-primary"
              style={{ width: '100%', padding: '12px', fontSize: '0.9rem', fontWeight: 600, borderRadius: '8px' }}
            >
              Check EMI & Loan Options
            </button>
          </div>

          {/* Referral Incentive Box */}
          {referral && (
            <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <HiGift style={{ color: '#2563eb', fontSize: '1.25rem' }} />
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1e40af', margin: 0 }}>
                  {referral.title}
                </h4>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#334155', lineHeight: 1.5, margin: 0 }}>
                {referral.desc}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
