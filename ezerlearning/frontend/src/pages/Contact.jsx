import React, { useState } from 'react';
import ContactHeader from '../components/contact/ContactHeader';
import ContactInfoCards from '../components/contact/ContactInfoCards';
import ContactFormCard from '../components/contact/ContactFormCard';
import { useSiteData } from '../context/SiteContext';

export default function Contact() {
  const { addLead } = useSiteData() || {};
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
    if (!formData.name?.trim() || !formData.email?.trim() || !formData.phone?.trim()) {
      alert('Please fill in your name, email, and mobile phone number.');
      return;
    }
    setSubmitted(true);
    if (addLead) {
      addLead({ ...formData, timestamp: new Date().toISOString(), type: 'contact_page' });
    }
  };

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: 0 }}>
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
