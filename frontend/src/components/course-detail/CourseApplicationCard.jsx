import React, { useState } from 'react';
import { HiBadgeCheck } from 'react-icons/hi';

export default function CourseApplicationCard({ course, onOpenPurchaseModal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    qualification: 'B.E. / B.Tech',
    profile: 'Working Professional',
    year: '2024',
    language: 'English & Tamil',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const hashAnchorId = (course?.hashLink || `#${(course?.title || 'course').replace(/[^a-zA-Z0-9]/g, '')}_course`).replace('#', '');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    const existing = JSON.parse(localStorage.getItem('ezer_leads:v1') || '[]');
    existing.push({ ...formData, course: course?.title, timestamp: new Date().toISOString() });
    localStorage.setItem('ezer_leads:v1', JSON.stringify(existing));
    if (onOpenPurchaseModal) {
      onOpenPurchaseModal();
    }
  };

  return (
    <div
      id={hashAnchorId}
      style={{
        background: '#ffffff',
        borderRadius: '16px',
        padding: '28px',
        boxShadow: '0 10px 30px rgba(0, 6, 72, 0.12)',
        border: '1.5px solid #cbd5e1',
        color: '#0f172a',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <span style={{ fontSize: '0.725rem', fontWeight: 800, textTransform: 'uppercase', background: '#eff6ff', color: '#000648', padding: '4px 12px', borderRadius: '50px', border: '1px solid #dbeafe' }}>
          Cohort Application
        </span>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#000648', marginTop: '10px' }}>
          Apply For Live Online Cohort
        </h3>
        <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0' }}>
          Limited seats per batch for 1:1 code reviews & placement.
        </p>
      </div>

      {formSubmitted ? (
        <div style={{ textAlign: 'center', padding: '24px 0' }}>
          <HiBadgeCheck style={{ fontSize: '2.5rem', color: '#10b981', margin: '0 auto 10px' }} />
          <h4 style={{ color: '#000648', fontSize: '1.15rem', fontWeight: 800, marginBottom: '6px' }}>
            Application Submitted!
          </h4>
          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
            Thank you <strong>{formData.name}</strong>. Our admissions counselor will reach out to confirm your slot.
          </p>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label htmlFor="cd-name" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
              Full Name*
            </label>
            <input
              id="cd-name"
              type="text"
              required
              placeholder="Enter full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.875rem', outline: 'none', background: '#ffffff' }}
            />
          </div>

          <div>
            <label htmlFor="cd-email" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
              Email Address*
            </label>
            <input
              id="cd-email"
              type="email"
              required
              placeholder="Enter email address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.875rem', outline: 'none', background: '#ffffff' }}
            />
          </div>

          <div>
            <label htmlFor="cd-phone" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
              Mobile Phone*
            </label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ padding: '10px 12px', background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 800, color: '#000648', display: 'flex', alignItems: 'center' }}>
                +91
              </div>
              <input
                id="cd-phone"
                type="tel"
                required
                placeholder="10-digit number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.875rem', outline: 'none', background: '#ffffff' }}
              />
            </div>
          </div>

          <button
            type="submit"
            style={{ width: '100%', padding: '12px', borderRadius: '8px', background: '#000648', color: '#f2b733', fontWeight: 900, fontSize: '0.9rem', border: 'none', cursor: 'pointer', marginTop: '8px', boxShadow: '0 4px 14px rgba(0,6,72,0.2)' }}
          >
            Submit Application
          </button>
        </form>
      )}
    </div>
  );
}
