import React, { useState } from 'react';
import ContactHeader from '../components/contact/ContactHeader';
import ContactInfoCards from '../components/contact/ContactInfoCards';
import ContactFormCard from '../components/contact/ContactFormCard';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'Cloud DevOps with AI',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const existing = JSON.parse(localStorage.getItem('ezer_leads:v1') || '[]');
    existing.push({ ...formData, timestamp: new Date().toISOString(), type: 'contact_page' });
    localStorage.setItem('ezer_leads:v1', JSON.stringify(existing));
  };

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: '60px' }}>
      <ContactHeader />
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))',
              gap: '40px',
              alignItems: 'start',
            }}
          >
            <ContactInfoCards />
            <ContactFormCard
              formData={formData}
              setFormData={setFormData}
              submitted={submitted}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
