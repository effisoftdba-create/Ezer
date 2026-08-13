import React from 'react';
import { HiCheckCircle, HiPaperAirplane } from 'react-icons/hi';
import { useSiteData } from '../../context/SiteContext';

const BASE_COURSES = [
  'AI/ML',
  'Full stack development with AI',
  'Data Analyst',
  'Cloud DevOps with AI',
  'Cyber Security',
  'Spoken English (International standard)'
];

export default function ContactFormCard({ formData, setFormData, submitted, handleSubmit }) {
  const { courses } = useSiteData() || {};

  const dynamicTitles = Array.isArray(courses)
    ? courses.flatMap((c) => (c && c.title ? [c.title] : []))
    : [];

  const catalogOptions = Array.from(new Set([...dynamicTitles, ...BASE_COURSES]));
  return (
    <div
      style={{
        background: '#ffffff',
        borderRadius: '16px',
        padding: '32px',
        border: '1.5px solid #e2e8f0',
        boxShadow: '0 4px 16px rgba(0, 6, 72, 0.05)',
      }}
    >
      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#000648', marginBottom: '6px' }}>
        Send Us a Message
      </h3>
      <p style={{ fontSize: '0.875rem', color: '#475569', marginBottom: '24px' }}>
        Fill out the form below and an EZER Learning Solution academic advisor will contact you within 24 hours.
      </p>

      {submitted ? (
        <div style={{ textAlign: 'center', padding: '36px 0' }}>
          <HiCheckCircle style={{ fontSize: '2.5rem', color: '#f2b733', margin: '0 auto 12px' }} />
          <h4 style={{ color: '#000648', fontSize: '1.2rem', marginBottom: '8px', fontWeight: 800 }}>Inquiry Received!</h4>
          <p style={{ color: '#475569', fontSize: '0.9rem' }}>
            Our admissions consultant will reach out to confirm your demo class session.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label htmlFor="contact-fullname" style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#000648', marginBottom: '6px' }}>
              Full Name*
            </label>
            <input
              id="contact-fullname"
              aria-label="Full Name"
              type="text"
              required
              placeholder="Enter your full name"
              style={{ width: '100%', padding: '11px 14px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.9rem', outline: 'none' }}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(180px, 100%), 1fr))', gap: '14px' }}>
            <div>
              <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#000648', marginBottom: '6px' }}>
                Email Address*
              </label>
              <input
                id="contact-email"
                aria-label="Email Address"
                type="email"
                required
                placeholder="you@example.com"
                style={{ width: '100%', padding: '11px 14px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.9rem', outline: 'none' }}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="contact-phone" style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#000648', marginBottom: '6px' }}>
                Phone Number*
              </label>
              <input
                id="contact-phone"
                aria-label="Phone Number"
                type="tel"
                required
                placeholder="+91 98765 43210"
                style={{ width: '100%', padding: '11px 14px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.9rem', outline: 'none' }}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-course" style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#000648', marginBottom: '6px' }}>
              Program of Interest
            </label>
            <select
              id="contact-course"
              aria-label="Program of Interest"
              style={{ width: '100%', padding: '11px 14px', borderRadius: '8px', border: '1.5px solid #cbd5e1', background: '#fff', fontSize: '0.9rem', outline: 'none' }}
              value={formData.course}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
            >
              {catalogOptions.map((title) => (
                <option key={title} value={title}>{title}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#000648', marginBottom: '6px' }}>
              Your Query
            </label>
            <textarea
              id="contact-message"
              aria-label="Your Query"
              rows={4}
              placeholder="Tell us about your background and learning objectives..."
              style={{
                width: '100%',
                padding: '11px 14px',
                borderRadius: '8px',
                border: '1.5px solid #cbd5e1',
                fontSize: '0.9rem',
                fontFamily: "Inter, 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
                color: '#000648',
                outline: 'none',
                resize: 'vertical'
              }}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="btn btn-secondary"
            style={{ padding: '13px', width: '100%', borderRadius: '8px', fontWeight: 900, fontSize: '0.95rem' }}
          >
            Submit Message <HiPaperAirplane size={16} />
          </button>
        </form>
      )}
    </div>
  );
}
