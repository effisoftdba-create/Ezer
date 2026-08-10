import React from 'react';
import { useSiteData } from '../../Admin_Control/context/SiteContext';

const inputStyle = {
  width: '100%',
  padding: '10px 14px',
  borderRadius: '8px',
  border: '1.5px solid #cbd5e1',
  background: '#ffffff',
  color: '#000648',
  fontSize: '0.92rem',
  fontWeight: 500,
  outline: 'none',
  boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.03)',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
};

const handleFocus = (e) => {
  e.target.style.borderColor = '#000648';
  e.target.style.boxShadow = '0 0 0 3px rgba(0,6,72,0.1)';
};

const handleBlur = (e) => {
  e.target.style.borderColor = '#cbd5e1';
  e.target.style.boxShadow = 'inset 0 1px 2px rgba(0,0,0,0.03)';
};

export default function PopupFormFields({
  formData,
  handleChange,
  handleSubmit,
  status,
  overrideConfig
}) {
  const { courses } = useSiteData() || {};

  const config = overrideConfig || {
    submitBtnText: 'Register Now',
    showStateCity: true,
    nameLabel: 'Full Name*',
    emailLabel: 'Email Address*',
    phoneLabel: 'Mobile Number*',
    countryLabel: 'Country',
    courseLabel: 'Target Course*',
    termsLabel: 'I hereby accept and agree to the terms and conditions and privacy policy of EZER Learning Solutions.',
    coursesList: [
      'Cloud DevOps with AI',
      'Software Testing – Playwright',
      'AI & Machine Learning',
      'IT Infrastructure & System Administration'
    ],
    countriesList: [
      'India',
      'United States',
      'UAE',
      'Singapore',
      'Other'
    ]
  };

  const dynamicCatalogTitles = Array.isArray(courses) && courses.length > 0
    ? courses.map((c) => c.title).filter(Boolean)
    : [];

  const baseCourses = (config.coursesList && config.coursesList.length > 0) ? config.coursesList : [
    'Cloud DevOps with AI',
    'Software Testing – Playwright',
    'AI & Machine Learning',
    'IT Infrastructure & System Administration'
  ];

  // Combine live catalog courses with base fallback list to ensure all new courses automatically show in dropdown
  const coursesArray = Array.from(new Set([...dynamicCatalogTitles, ...baseCourses]));

  const countriesArray = (config.countriesList && config.countriesList.length > 0) ? config.countriesList : [
    'India',
    'United States',
    'UAE',
    'Singapore',
    'Other'
  ];

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {status?.error && (
        <div style={{ background: '#fee2e2', color: '#dc2626', padding: '10px 14px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600 }}>
          {status.error}
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="popup-name" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#000648', marginBottom: '4px' }}>
          {config.nameLabel || 'Full Name*'}
        </label>
        <input
          id="popup-name"
          aria-label="Full Name"
          type="text"
          name="name"
          required
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="popup-email" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#000648', marginBottom: '4px' }}>
          {config.emailLabel || 'Email Address*'}
        </label>
        <input
          id="popup-email"
          aria-label="Email Address"
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>

      {/* Mobile Phone */}
      <div>
        <label htmlFor="popup-phone" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#000648', marginBottom: '4px' }}>
          {config.phoneLabel || 'Mobile Number*'}
        </label>
        <div style={{ display: 'flex', gap: '8px' }}>
          <div
            style={{
              padding: '10px 14px',
              background: '#f1f5f9',
              border: '1.5px solid #cbd5e1',
              borderRadius: '8px',
              fontSize: '0.88rem',
              fontWeight: 800,
              color: '#000648',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            +91
          </div>
          <input
            id="popup-phone"
            aria-label="Mobile Phone Number"
            type="tel"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={10}
            name="phone"
            required
            placeholder="Enter 10-digit mobile number"
            value={formData.phone || ''}
            onChange={(e) => {
              const onlyNums = e.target.value.replace(/\D/g, '').slice(0, 10);
              handleChange({
                target: {
                  name: 'phone',
                  value: onlyNums
                }
              });
            }}
            style={{
              ...inputStyle,
              flexGrow: 1,
              borderColor: formData.phone && formData.phone.length > 0 && formData.phone.length < 10 ? '#dc2626' : '#cbd5e1'
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        {formData.phone && formData.phone.length > 0 && formData.phone.length < 10 && (
          <div style={{ color: '#dc2626', fontSize: '0.74rem', marginTop: '4px', fontWeight: 700 }}>
            ⚠️ Please enter a valid 10-digit mobile number ({formData.phone.length}/10 digits)
          </div>
        )}
      </div>


      {/* Country */}
      <div>
        <label htmlFor="popup-country" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#000648', marginBottom: '4px' }}>
          {config.countryLabel || 'Country'}
        </label>
        <select
          id="popup-country"
          aria-label="Select Country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          style={{ ...inputStyle, cursor: 'pointer' }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {countriesArray.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* State & City Grid */}
      {config.showStateCity !== false && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <div>
            <label htmlFor="popup-state" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#000648', marginBottom: '4px' }}>
              State
            </label>
            <input
              id="popup-state"
              aria-label="State"
              type="text"
              name="state"
              placeholder="e.g. Tamil Nadu"
              value={formData.state}
              onChange={handleChange}
              style={inputStyle}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <label htmlFor="popup-city" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#000648', marginBottom: '4px' }}>
              City
            </label>
            <input
              id="popup-city"
              aria-label="City"
              type="text"
              name="city"
              placeholder="e.g. Chennai"
              value={formData.city}
              onChange={handleChange}
              style={inputStyle}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
        </div>
      )}

      {/* Target Course */}
      <div>
        <label htmlFor="popup-course" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#000648', marginBottom: '4px' }}>
          {config.courseLabel || 'Target Course*'}
        </label>
        <select
          id="popup-course"
          aria-label="Select Target Course"
          name="course"
          value={formData.course}
          onChange={handleChange}
          style={{ ...inputStyle, cursor: 'pointer' }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {coursesArray.map((crs) => (
            <option key={crs} value={crs}>{crs}</option>
          ))}
          {!coursesArray.includes('Others') && !coursesArray.includes('Other') && (
            <option value="Others">Others</option>
          )}
        </select>
      </div>

      {/* Custom Target Course Input when 'Others' or 'Other' is Selected */}
      {(formData.course === 'Others' || formData.course === 'Other') && (
        <div style={{ animation: 'fadeIn 0.2s ease' }}>
          <label htmlFor="popup-other-course-text" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#115DFC', marginBottom: '4px' }}>
            Specify Your Target Course / Learning Goal *
          </label>
          <input
            id="popup-other-course-text"
            aria-label="Specify Your Target Course or Learning Goal"
            type="text"
            name="otherCourseText"
            required
            placeholder="e.g. Flutter Development, PowerBI & SQL Analytics..."
            value={formData.otherCourseText || ''}
            onChange={handleChange}
            style={{ ...inputStyle, borderColor: '#115DFC', background: '#f8fafc' }}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
      )}

      {/* Terms Checkbox */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginTop: '2px' }}>
        <input
          type="checkbox"
          id="agreeTerms"
          name="agreeTerms"
          checked={formData.agreeTerms}
          onChange={handleChange}
          style={{ marginTop: '3px', cursor: 'pointer', accentColor: '#000648' }}
        />
        <label htmlFor="agreeTerms" style={{ fontSize: '0.75rem', color: '#475569', lineHeight: 1.4 }}>
          {config.termsLabel || 'I hereby accept and agree to the terms and conditions and privacy policy of EZER Learning Solutions.'}
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status?.submitting}
        className="btn btn-secondary"
        style={{
          width: '100%',
          padding: '12px',
          fontSize: '0.92rem',
          marginTop: '6px',
          fontWeight: 900,
          borderRadius: '8px'
        }}
      >
        {status?.submitting ? 'Registering...' : (config.submitBtnText || 'Register Now')}
      </button>
    </form>
  );
}
