import React, { useState } from 'react';
import { HiBadgeCheck, HiCheckCircle, HiSparkles } from 'react-icons/hi';

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
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const coursePrice = course?.price || '₹29,999';
  const originalPrice = course?.originalPrice || '₹42,000';
  const hashAnchorId = (course?.hashLink || `#${(course?.title || 'course').replace(/[^a-zA-Z0-9]/g, '')}_course`).replace('#', '');

  const deliverables = (course?.whoIsItFor && course?.whoIsItFor.length > 0)
    ? course.whoIsItFor
    : [
        'Live 1:1 Corporate Mentor Sessions',
        'Hands-on Lab Projects & Code Reviews',
        '100% Guaranteed 1-Year Placement Assistance',
        'Official ISO Certified Completion Diploma'
      ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    const existing = JSON.parse(localStorage.getItem('ezer_leads:v1') || '[]');
    existing.push({ ...formData, course: course?.title, timestamp: new Date().toISOString() });
    localStorage.setItem('ezer_leads:v1', JSON.stringify(existing));
  };

  return (
    <div
      id={hashAnchorId}
      className="dark-pricing-card-box"
      style={{
        background: '#050b1c',
        borderRadius: '1.5rem',
        padding: '1.8rem',
        boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.6)',
        border: '2px solid rgba(242, 183, 51, 0.4)',
        color: '#ffffff',
        position: 'relative'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <span style={{ fontSize: '0.72rem', fontWeight: 900, textTransform: 'uppercase', background: 'rgba(242, 183, 51, 0.18)', color: '#f2b733', padding: '4px 12px', borderRadius: '50px', border: '1px solid rgba(242, 183, 51, 0.4)' }}>
          ★ Live Executive Cohort
        </span>
        <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#4ade80', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <HiSparkles size={14} /> Instant Access
        </span>
      </div>

      <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ffffff', marginBottom: '8px' }}>
        {course?.title || 'Course Enrollment'}
      </h3>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', margin: '14px 0' }}>
        <span className="price" style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1, color: '#ffffff' }}>
          {coursePrice}
        </span>
        {originalPrice && (
          <span style={{ fontSize: '1.05rem', color: '#64748b', textDecoration: 'line-through', fontWeight: 600 }}>
            {originalPrice}
          </span>
        )}
      </div>

      <p style={{ fontSize: '0.84rem', color: '#cbd5e1', lineHeight: 1.5, marginBottom: '20px' }}>
        Enroll in the upcoming live cohort with 12-month placement assistance & hands-on lab access.
      </p>

      {/* Deliverables Checklist */}
      <div className="lists" style={{ display: 'flex', flexDirection: 'column', rowGap: '0.75rem', fontSize: '0.875rem', color: '#ffffff', marginBottom: '24px' }}>
        {deliverables.map((item, idx) => (
          <div key={idx} className="list" style={{ display: 'flex', alignItems: 'flex-start' }}>
            <HiCheckCircle style={{ height: '1.2rem', width: '1.2rem', color: '#f2b733', flexShrink: 0, marginTop: '1px' }} />
            <span style={{ marginLeft: '0.85rem', color: '#f8fafc', lineHeight: 1.35 }}>{item}</span>
          </div>
        ))}
      </div>

      {formSubmitted ? (
        <div style={{ textAlign: 'center', padding: '20px 0', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '12px', border: '1px solid #22c55e' }}>
          <HiBadgeCheck style={{ fontSize: '2.5rem', color: '#4ade80', margin: '0 auto 8px' }} />
          <h4 style={{ color: '#ffffff', fontSize: '1.15rem', fontWeight: 800, marginBottom: '4px' }}>
            Enrollment Confirmed!
          </h4>
          <p style={{ fontSize: '0.82rem', color: '#cbd5e1', margin: 0 }}>
            Thank you <strong>{formData.name}</strong>. Our admissions counselor will contact you shortly with your batch timetable.
          </p>
        </div>
      ) : showCheckoutForm ? (
        <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px', background: '#0b132b', padding: '16px', borderRadius: '14px', border: '1px solid #1e293b' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#f2b733', margin: 0 }}>Checkout Details</h4>
            <button type="button" onClick={() => setShowCheckoutForm(false)} style={{ background: 'none', border: 'none', color: '#64748b', fontSize: '0.75rem', cursor: 'pointer' }}>Back</button>
          </div>

          <div>
            <label htmlFor="cd-name-field" style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '3px' }}>Full Name*</label>
            <input
              id="cd-name-field"
              type="text"
              required
              placeholder="Enter full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #334155', fontSize: '0.85rem', background: '#050b1c', color: '#fff' }}
            />
          </div>

          <div>
            <label htmlFor="cd-email-field" style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '3px' }}>Email Address*</label>
            <input
              id="cd-email-field"
              type="email"
              required
              placeholder="Enter email address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #334155', fontSize: '0.85rem', background: '#050b1c', color: '#fff' }}
            />
          </div>

          <div>
            <label htmlFor="cd-phone-field" style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '3px' }}>Mobile Phone*</label>
            <input
              id="cd-phone-field"
              type="tel"
              required
              placeholder="10-digit mobile number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #334155', fontSize: '0.85rem', background: '#050b1c', color: '#fff' }}
            />
          </div>

          <button
            type="submit"
            className="action"
            style={{
              width: '100%',
              border: '2px solid #f2b733',
              borderRadius: '9999px',
              backgroundColor: '#f2b733',
              padding: '0.65rem 1.5rem',
              fontWeight: 900,
              fontSize: '0.875rem',
              color: '#000648',
              cursor: 'pointer',
              marginTop: '8px'
            }}
          >
            Confirm & Pay {coursePrice}
          </button>
        </form>
      ) : (
        <button
          type="button"
          onClick={() => setShowCheckoutForm(true)}
          className="action"
          style={{
            width: '100%',
            border: '2px solid #f2b733',
            borderRadius: '9999px',
            backgroundColor: '#f2b733',
            padding: '0.75rem 1.5rem',
            fontWeight: 900,
            textAlign: 'center',
            fontSize: '0.92rem',
            color: '#000648',
            cursor: 'pointer',
            boxShadow: '0 4px 18px rgba(242, 183, 51, 0.4)',
            transition: 'all .2s ease'
          }}
        >
          Enroll & Purchase Course Now
        </button>
      )}
    </div>
  );
}
