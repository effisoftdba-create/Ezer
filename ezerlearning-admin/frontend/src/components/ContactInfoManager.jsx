import React, { useState } from 'react';
import { useSiteData } from '../context/SiteContext';
import { HiCheck, HiPhone, HiMail, HiLocationMarker, HiClock } from 'react-icons/hi';

export default function ContactInfoManager() {
  const { contactInfo, updateContactInfo } = useSiteData();
  const [formData, setFormData] = useState(contactInfo || {});
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.phone?.trim()) errors.phone = true;
    if (!formData.email?.trim()) errors.email = true;
    if (!formData.address?.trim()) errors.address = true;
    if (!formData.whatsappGroupUrl?.trim()) errors.whatsappGroupUrl = true;

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
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

      {Object.keys(formErrors).length > 0 && (
        <div style={{ background: '#fef2f2', border: '1.5px solid #f87171', color: '#b91c1c', padding: '10px 14px', borderRadius: '8px', marginBottom: '20px', fontSize: '0.82rem', fontWeight: 800 }}>
          ⚠️ Please fill in all required fields highlighted in red below before saving.
        </div>
      )}

      <form onSubmit={handleSubmit} style={{
        background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '14px',
        padding: '24px', boxShadow: '0 4px 14px rgba(0,0,0,0.02)'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
          <div>
            <label htmlFor="contact_phone_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: formErrors.phone ? '#dc2626' : '#334155', marginBottom: '4px' }}>
              <HiPhone size={14} style={{ display: 'inline', marginRight: '4px' }} /> Phone Number *
            </label>
            <input
              id="contact_phone_input"
              type="text"
              value={formData.phone || ''}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                if (formErrors.phone) setFormErrors((prev) => ({ ...prev, phone: false }));
              }}
              placeholder="e.g. +91 98765 43210"
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '8px',
                border: formErrors.phone ? '2px solid #dc2626' : '1px solid #cbd5e1',
                background: formErrors.phone ? '#fff5f5' : '#ffffff',
                fontSize: '0.875rem'
              }}
            />
            {formErrors.phone && <span style={{ color: '#dc2626', fontSize: '0.72rem', fontWeight: 700, marginTop: '3px', display: 'block' }}>Phone number is required</span>}
          </div>

          <div>
            <label htmlFor="contact_email_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: formErrors.email ? '#dc2626' : '#334155', marginBottom: '4px' }}>
              <HiMail size={14} style={{ display: 'inline', marginRight: '4px' }} /> Official Email Address *
            </label>
            <input
              id="contact_email_input"
              type="email"
              value={formData.email || ''}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (formErrors.email) setFormErrors((prev) => ({ ...prev, email: false }));
              }}
              placeholder="e.g. admissions@ezerlearn.com"
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '8px',
                border: formErrors.email ? '2px solid #dc2626' : '1px solid #cbd5e1',
                background: formErrors.email ? '#fff5f5' : '#ffffff',
                fontSize: '0.875rem'
              }}
            />
            {formErrors.email && <span style={{ color: '#dc2626', fontSize: '0.72rem', fontWeight: 700, marginTop: '3px', display: 'block' }}>Official email is required</span>}
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="contact_address_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: formErrors.address ? '#dc2626' : '#334155', marginBottom: '4px' }}>
            <HiLocationMarker size={14} style={{ display: 'inline', marginRight: '4px' }} /> Office Address *
          </label>
          <input
            id="contact_address_input"
            type="text"
            value={formData.address || ''}
            onChange={(e) => {
              setFormData({ ...formData, address: e.target.value });
              if (formErrors.address) setFormErrors((prev) => ({ ...prev, address: false }));
            }}
            placeholder="e.g. No. 42, Tech Park Avenue, Guindy, Chennai..."
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '8px',
              border: formErrors.address ? '2px solid #dc2626' : '1px solid #cbd5e1',
              background: formErrors.address ? '#fff5f5' : '#ffffff',
              fontSize: '0.875rem'
            }}
          />
          {formErrors.address && <span style={{ color: '#dc2626', fontSize: '0.72rem', fontWeight: 700, marginTop: '3px', display: 'block' }}>Office address is required</span>}
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="contact_hours_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
            <HiClock size={14} style={{ display: 'inline', marginRight: '4px' }} /> Support & Business Hours
          </label>
          <input
            id="contact_hours_input"
            type="text"
            value={formData.hours || formData.workingHours || ''}
            onChange={(e) => setFormData({ ...formData, hours: e.target.value, workingHours: e.target.value })}
            placeholder="e.g. Mon - Sat: 9:00 AM - 8:00 PM IST"
            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.875rem' }}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label htmlFor="whatsapp_group_url_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: formErrors.whatsappGroupUrl ? '#dc2626' : '#166534', marginBottom: '4px' }}>
            Official Student WhatsApp Group Link (Post-Payment Redirect) *
          </label>
          <input
            id="whatsapp_group_url_input"
            type="url"
            value={formData.whatsappGroupUrl || ''}
            onChange={(e) => {
              setFormData({ ...formData, whatsappGroupUrl: e.target.value });
              if (formErrors.whatsappGroupUrl) setFormErrors((prev) => ({ ...prev, whatsappGroupUrl: false }));
            }}
            placeholder="e.g. https://chat.whatsapp.com/EZERStudentCohortOfficial"
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '8px',
              border: formErrors.whatsappGroupUrl ? '2px solid #dc2626' : '1.5px solid #22c55e',
              background: formErrors.whatsappGroupUrl ? '#fff5f5' : '#ffffff',
              fontSize: '0.875rem',
              fontWeight: 700
            }}
          />
          {formErrors.whatsappGroupUrl && <span style={{ color: '#dc2626', fontSize: '0.72rem', fontWeight: 700, marginTop: '3px', display: 'block' }}>WhatsApp group URL is required</span>}
          <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block', marginTop: '4px' }}>
            Students will be automatically redirected to this WhatsApp group immediately after completing course payment.
          </span>
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
