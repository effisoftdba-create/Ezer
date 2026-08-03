import React, { useState } from 'react';
import { useSiteData } from '../context/SiteContext';
import { HiCheck, HiPhone, HiMail, HiLocationMarker, HiClock } from 'react-icons/hi';

export default function ContactInfoManager() {
  const { contactInfo, updateContactInfo } = useSiteData();
  const [formData, setFormData] = useState(contactInfo);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateContactInfo(formData);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: '24px', paddingBottom: '16px', borderBottom: '1.5px solid #e2e8f0'
      }}>
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#000648', margin: 0 }}>
            Contact & Office Location Details
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
            Edit official contact numbers, email address, physical location, and working hours.
          </p>
        </div>
      </div>

      {saveSuccess && (
        <div style={{
          padding: '12px 16px', background: '#f0fdf4', border: '1px solid #86efac',
          color: '#166534', borderRadius: '8px', marginBottom: '20px', fontWeight: 700,
          display: 'flex', alignItems: 'center', gap: '8px'
        }}>
          <HiCheck size={18} /> Contact details updated successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} style={{
        background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '14px',
        padding: '24px', boxShadow: '0 4px 14px rgba(0,0,0,0.02)'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
          <div>
            <label htmlFor="contact_phone_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
              <HiPhone size={14} style={{ display: 'inline', marginRight: '4px' }} /> Phone Number *
            </label>
            <input
              id="contact_phone_input"
              type="text"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="e.g. +91 98765 43210"
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.875rem' }}
              required
            />
          </div>

          <div>
            <label htmlFor="contact_email_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
              <HiMail size={14} style={{ display: 'inline', marginRight: '4px' }} /> Official Email Address *
            </label>
            <input
              id="contact_email_input"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. admissions@ezerlearn.com"
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.875rem' }}
              required
            />
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="contact_address_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
            <HiLocationMarker size={14} style={{ display: 'inline', marginRight: '4px' }} /> Office Address
          </label>
          <input
            id="contact_address_input"
            type="text"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            placeholder="e.g. No. 42, Tech Park Avenue, Guindy, Chennai..."
            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.875rem' }}
            required
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label htmlFor="contact_hours_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
            <HiClock size={14} style={{ display: 'inline', marginRight: '4px' }} /> Support & Business Hours
          </label>
          <input
            id="contact_hours_input"
            type="text"
            value={formData.hours}
            onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
            placeholder="e.g. Mon - Sat: 9:00 AM - 8:00 PM IST"
            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.875rem' }}
            required
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button
            type="submit"
            aria-label="Save contact info"
            style={{
              padding: '12px 28px', background: '#000648', color: '#f2b733',
              border: 'none', borderRadius: '10px', fontWeight: 800, fontSize: '0.9rem',
              cursor: 'pointer', boxShadow: '0 4px 14px rgba(0,6,72,0.2)', display: 'flex', alignItems: 'center', gap: '8px'
            }}
          >
            <HiCheck size={18} /> Update Contact Information
          </button>
        </div>
      </form>
    </div>
  );
}
