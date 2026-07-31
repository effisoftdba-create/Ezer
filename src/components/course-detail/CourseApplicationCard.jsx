import React, { useState } from 'react';
import { HiBadgeCheck } from 'react-icons/hi';

export default function CourseApplicationCard({ course }) {
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    const existing = JSON.parse(localStorage.getItem('ezer_leads:v1') || '[]');
    existing.push({ ...formData, course: course?.title, timestamp: new Date().toISOString() });
    localStorage.setItem('ezer_leads:v1', JSON.stringify(existing));
  };

  return (
    <div
      style={{
        background: '#ffffff',
        borderRadius: '12px',
        padding: '28px',
        boxShadow: '0 1px 3px rgba(15, 23, 42, 0.05)',
        border: '1px solid #e2e8f0',
        color: '#0f172a',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <span style={{ fontSize: '0.725rem', fontWeight: 600, textTransform: 'uppercase', background: '#eff6ff', color: '#2563eb', padding: '4px 10px', borderRadius: '6px', border: '1px solid #dbeafe' }}>
          Cohort Application
        </span>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginTop: '10px' }}>
          Apply For Upcoming Cohort
        </h3>
        <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0' }}>
          Limited seats per batch for 1:1 code reviews.
        </p>
      </div>

      {formSubmitted ? (
        <div style={{ textAlign: 'center', padding: '24px 0' }}>
          <HiBadgeCheck style={{ fontSize: '2.5rem', color: '#10b981', margin: '0 auto 10px' }} />
          <h4 style={{ color: '#0f172a', fontSize: '1.15rem', fontWeight: 700, marginBottom: '6px' }}>
            Application Submitted!
          </h4>
          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
            Thank you <strong>{formData.name}</strong>. Our admissions counselor will reach out to confirm your slot.
          </p>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <label htmlFor="cd-name" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#0f172a', marginBottom: '4px' }}>
              Full Name*
            </label>
            <input
              id="cd-name"
              aria-label="Full Name"
              type="text"
              required
              placeholder="Enter full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.875rem', outline: 'none', background: '#ffffff' }}
            />
          </div>

          <div>
            <label htmlFor="cd-email" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#0f172a', marginBottom: '4px' }}>
              Email Address*
            </label>
            <input
              id="cd-email"
              aria-label="Email Address"
              type="email"
              required
              placeholder="Enter email address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.875rem', outline: 'none', background: '#ffffff' }}
            />
          </div>

          <div>
            <label htmlFor="cd-phone" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#0f172a', marginBottom: '4px' }}>
              Mobile Phone*
            </label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ padding: '10px 12px', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600, color: '#0f172a', display: 'flex', alignItems: 'center' }}>
                +91
              </div>
              <input
                id="cd-phone"
                aria-label="Mobile Phone Number"
                type="tel"
                required
                placeholder="10-digit number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.875rem', outline: 'none', background: '#ffffff' }}
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', padding: '11px', borderRadius: '8px', fontWeight: 600, marginTop: '8px' }}
          >
            Submit Application
          </button>
        </form>
      )}
    </div>
  );
}
