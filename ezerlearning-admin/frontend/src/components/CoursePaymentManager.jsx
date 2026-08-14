import React, { useState } from 'react';
import { useSiteData } from '../context/SiteContext';
import { HiCurrencyRupee, HiOutlineClock, HiCheck, HiOutlineUserGroup, HiOutlineSparkles } from 'react-icons/hi';

export default function CoursePaymentManager() {
  const { paymentConfig, updatePaymentConfig, leads } = useSiteData();
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [comingSoonNotice, setComingSoonNotice] = useState(
    paymentConfig?.comingSoonNotice || 'Admissions Opening Soon — VIP Priority Cohort Waitlist Active'
  );
  const [hasError, setHasError] = useState(false);

  const waitlistLeads = (leads || []).filter((l) => l.status === 'VIP Waitlist' || l.paymentStatus === 'VIP_WAITLIST');

  const handleSaveConfig = (e) => {
    e.preventDefault();
    if (!comingSoonNotice?.trim()) {
      setHasError(true);
      return;
    }
    setHasError(false);
    updatePaymentConfig({
      ...paymentConfig,
      comingSoonNotice: comingSoonNotice.trim()
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div>
      {/* Header Bar */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: '20px', paddingBottom: '14px', borderBottom: '1.5px solid #e2e8f0'
      }}>
        <div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#000648', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <HiCurrencyRupee color="#f2b733" size={26} />
            Payment Gateway & Enrollment Processing — Coming Soon
          </h2>
          <p style={{ fontSize: '0.82rem', color: '#64748b', margin: '4px 0 0 0' }}>
            Direct online gateway processing is currently transitioning into VIP Cohort Early-Access Intake mode.
          </p>
        </div>
      </div>

      {/* Main Coming Soon Banner Card */}
      <div style={{
        background: 'linear-gradient(135deg, #000648 0%, #07157b 100%)',
        color: '#ffffff', borderRadius: '20px', padding: '36px',
        border: '2px solid #f2b733', boxShadow: '0 20px 40px rgba(0,6,72,0.25)',
        textAlign: 'center', marginBottom: '24px', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          width: '64px', height: '64px', background: 'rgba(242,183,51,0.15)',
          border: '2px solid #f2b733', borderRadius: '50%', color: '#f2b733',
          display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px'
        }}>
          <HiOutlineClock size={36} />
        </div>

        <span style={{ background: '#f2b733', color: '#000648', fontSize: '0.75rem', fontWeight: 900, padding: '4px 14px', borderRadius: '50px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          COMING SOON • VIP WAITLIST MODE ACTIVE
        </span>

        <h3 style={{ fontSize: '1.8rem', fontWeight: 900, margin: '14px 0 8px 0', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
          Direct Online Payment Gateway Integration
        </h3>

        <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.82)', maxWidth: '560px', margin: '0 auto 24px', lineHeight: 1.6 }}>
          Direct card/UPI payment processing is currently undergoing security upgrades. The public website checkout modal has been updated to collect candidate entries for the **VIP Early-Access Priority Cohort Waitlist**.
        </p>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '10px 20px', borderRadius: '50px' }}>
          <HiOutlineUserGroup size={20} color="#f2b733" />
          <span style={{ fontSize: '0.88rem', fontWeight: 800 }}>Total VIP Waitlist Applicants: <strong style={{ color: '#f2b733', fontSize: '1.05rem' }}>{waitlistLeads.length} Candidates</strong></span>
        </div>
      </div>

      {/* Admin Notice Config Form */}
      <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '16px', padding: '24px' }}>
        <h4 style={{ fontSize: '1.05rem', fontWeight: 900, color: '#000648', marginTop: 0, marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <HiOutlineSparkles size={20} color="#115DFC" /> Customize Public Coming Soon Headline
        </h4>

        {hasError && (
          <div style={{ background: '#fef2f2', border: '1.5px solid #f87171', color: '#b91c1c', padding: '10px 14px', borderRadius: '8px', marginBottom: '14px', fontSize: '0.82rem', fontWeight: 800 }}>
            ⚠️ Please enter the announcement text before saving.
          </div>
        )}

        <form onSubmit={handleSaveConfig} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label htmlFor="coming_soon_notice_input" style={{ fontSize: '0.78rem', fontWeight: 800, color: hasError ? '#dc2626' : '#000648', display: 'block', marginBottom: '4px' }}>
              Public Modal Banner Announcement *
            </label>
            <input
              id="coming_soon_notice_input"
              type="text"
              value={comingSoonNotice}
              onChange={(e) => {
                setComingSoonNotice(e.target.value);
                if (hasError) setHasError(false);
              }}
              style={{
                width: '100%',
                padding: '11px 14px',
                borderRadius: '8px',
                border: hasError ? '2px solid #dc2626' : '1.5px solid #cbd5e1',
                background: hasError ? '#fff5f5' : '#ffffff',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
            {hasError && <span style={{ color: '#dc2626', fontSize: '0.72rem', fontWeight: 700, marginTop: '3px', display: 'block' }}>Announcement text is required</span>}
          </div>

          <button
            type="submit"
            style={{
              padding: '10px 20px', background: '#000648', color: '#f2b733',
              border: 'none', borderRadius: '50px', fontWeight: 900, fontSize: '0.88rem',
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', alignSelf: 'flex-start'
            }}
          >
            {savedSuccess ? <HiCheck size={16} /> : null}
            {savedSuccess ? 'Banner Announcement Saved!' : 'Save Coming Soon Notice'}
          </button>
        </form>
      </div>
    </div>
  );
}
