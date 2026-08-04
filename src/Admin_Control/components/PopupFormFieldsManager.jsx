import React, { useState } from 'react';
import { HiPlus, HiTrash, HiPencil, HiCheck, HiOutlineDocumentText } from 'react-icons/hi';

export default function PopupFormFieldsManager({ formData, setFormData }) {
  const [newCourseInput, setNewCourseInput] = useState('');
  const [newCountryInput, setNewCountryInput] = useState('');
  const [editingCourseIdx, setEditingCourseIdx] = useState(null);
  const [editingCourseValue, setEditingCourseValue] = useState('');

  const courses = formData.coursesList || [
    'Cloud DevOps with AI',
    'Software Testing – Playwright',
    'AI & Machine Learning',
    'IT Infrastructure & System Administration'
  ];

  const countries = formData.countriesList || [
    'India',
    'United States',
    'UAE',
    'Singapore',
    'Other'
  ];

  const handleAddCourse = () => {
    if (!newCourseInput.trim()) return;
    setFormData((prev) => ({
      ...prev,
      coursesList: [...(prev.coursesList || courses), newCourseInput.trim()]
    }));
    setNewCourseInput('');
  };

  const handleDeleteCourse = (index) => {
    setFormData((prev) => ({
      ...prev,
      coursesList: (prev.coursesList || courses).filter((_, idx) => idx !== index)
    }));
  };

  const handleSaveCourseEdit = (index) => {
    if (!editingCourseValue.trim()) return;
    const updated = [...(formData.coursesList || courses)];
    updated[index] = editingCourseValue.trim();
    setFormData((prev) => ({ ...prev, coursesList: updated }));
    setEditingCourseIdx(null);
  };

  const handleAddCountry = () => {
    if (!newCountryInput.trim()) return;
    setFormData((prev) => ({
      ...prev,
      countriesList: [...(prev.countriesList || countries), newCountryInput.trim()]
    }));
    setNewCountryInput('');
  };

  const handleDeleteCountry = (index) => {
    setFormData((prev) => ({
      ...prev,
      countriesList: (prev.countriesList || countries).filter((_, idx) => idx !== index)
    }));
  };

  return (
    <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '12px', padding: '16px', marginBottom: '20px' }}>
      <h4 style={{ margin: '0 0 14px 0', fontSize: '0.95rem', fontWeight: 800, color: '#000648', display: 'flex', alignItems: 'center', gap: '6px' }}>
        <HiOutlineDocumentText size={18} color="#115DFC" /> Form Labels, Toggles & Dropdown Options
      </h4>

      {/* State & City Toggle */}
      <div style={{ marginBottom: '14px', background: '#f8fafc', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <span style={{ fontSize: '0.825rem', fontWeight: 800, color: '#000648', display: 'block' }}>
            Show State & City Form Fields
          </span>
          <span style={{ fontSize: '0.725rem', color: '#64748b' }}>
            Toggle whether State and City inputs appear in the popup form.
          </span>
        </div>
        <input
          id="toggle-state-city-input"
          aria-label="Toggle state and city form fields display"
          type="checkbox"
          checked={formData.showStateCity !== false}
          onChange={(e) => setFormData((prev) => ({ ...prev, showStateCity: e.target.checked }))}
          style={{ width: '18px', height: '18px', accentColor: '#000648', cursor: 'pointer' }}
        />
      </div>

      {/* Customizable Field Labels */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
        <div>
          <label htmlFor="label_name" style={{ fontSize: '0.75rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '3px' }}>
            Full Name Label
          </label>
          <input
            id="label_name"
            aria-label="Full Name Label"
            type="text"
            value={formData.nameLabel || 'Full Name*'}
            onChange={(e) => setFormData((prev) => ({ ...prev, nameLabel: e.target.value }))}
            style={{ width: '100%', padding: '7px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.825rem' }}
          />
        </div>

        <div>
          <label htmlFor="label_email" style={{ fontSize: '0.75rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '3px' }}>
            Email Address Label
          </label>
          <input
            id="label_email"
            aria-label="Email Address Label"
            type="text"
            value={formData.emailLabel || 'Email Address*'}
            onChange={(e) => setFormData((prev) => ({ ...prev, emailLabel: e.target.value }))}
            style={{ width: '100%', padding: '7px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.825rem' }}
          />
        </div>

        <div>
          <label htmlFor="label_phone" style={{ fontSize: '0.75rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '3px' }}>
            Mobile Number Label
          </label>
          <input
            id="label_phone"
            aria-label="Mobile Number Label"
            type="text"
            value={formData.phoneLabel || 'Mobile Number*'}
            onChange={(e) => setFormData((prev) => ({ ...prev, phoneLabel: e.target.value }))}
            style={{ width: '100%', padding: '7px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.825rem' }}
          />
        </div>

        <div>
          <label htmlFor="label_country" style={{ fontSize: '0.75rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '3px' }}>
            Country Field Label
          </label>
          <input
            id="label_country"
            aria-label="Country Field Label"
            type="text"
            value={formData.countryLabel || 'Country'}
            onChange={(e) => setFormData((prev) => ({ ...prev, countryLabel: e.target.value }))}
            style={{ width: '100%', padding: '7px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.825rem' }}
          />
        </div>
      </div>

      {/* Target Course Label & Terms */}
      <div style={{ marginBottom: '16px' }}>
        <label htmlFor="label_course" style={{ fontSize: '0.75rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '3px' }}>
          Target Course Field Label
        </label>
        <input
          id="label_course"
          aria-label="Target Course Field Label"
          type="text"
          value={formData.courseLabel || 'Target Course*'}
          onChange={(e) => setFormData((prev) => ({ ...prev, courseLabel: e.target.value }))}
          style={{ width: '100%', padding: '7px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.825rem' }}
        />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label htmlFor="label_terms" style={{ fontSize: '0.75rem', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '3px' }}>
          Terms & Conditions Checkbox Text
        </label>
        <textarea
          id="label_terms"
          aria-label="Terms and Conditions Checkbox Text"
          rows={2}
          value={formData.termsLabel || 'I hereby accept and agree to the terms and conditions and privacy policy of EZER Learning Solutions.'}
          onChange={(e) => setFormData((prev) => ({ ...prev, termsLabel: e.target.value }))}
          style={{ width: '100%', padding: '7px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.8rem' }}
        />
      </div>

      {/* MANAGER FOR TARGET COURSES DROPDOWN OPTIONS */}
      <div style={{ marginBottom: '16px', background: '#f8fafc', padding: '12px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
        <label htmlFor="add_new_course_input" style={{ fontSize: '0.825rem', fontWeight: 800, color: '#000648', display: 'block', marginBottom: '8px' }}>
          Target Course Dropdown Options ({courses.length}) — Add / Edit / Delete
        </label>

        <div style={{ display: 'flex', gap: '6px', marginBottom: '10px' }}>
          <input
            id="add_new_course_input"
            aria-label="Add new target course program option"
            type="text"
            placeholder="Add new course program option..."
            value={newCourseInput}
            onChange={(e) => setNewCourseInput(e.target.value)}
            style={{ flex: 1, padding: '7px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.8rem' }}
          />
          <button
            type="button"
            aria-label="Add course option button"
            onClick={handleAddCourse}
            style={{ padding: '7px 12px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '6px', fontWeight: 800, cursor: 'pointer', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <HiPlus size={14} /> Add Option
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxHeight: '140px', overflowY: 'auto' }}>
          {courses.map((crs, idx) => (
            <div key={crs + idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 10px', background: '#ffffff', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '0.8rem' }}>
              {editingCourseIdx === idx ? (
                <div style={{ display: 'flex', gap: '6px', flex: 1 }}>
                  <input
                    type="text"
                    aria-label={`Editing course option ${crs}`}
                    value={editingCourseValue}
                    onChange={(e) => setEditingCourseValue(e.target.value)}
                    style={{ flex: 1, padding: '3px 6px', fontSize: '0.8rem', borderRadius: '4px', border: '1px solid #cbd5e1' }}
                  />
                  <button type="button" aria-label="Save edited course option" onClick={() => handleSaveCourseEdit(idx)} style={{ background: '#166534', color: '#fff', border: 'none', borderRadius: '4px', padding: '3px 8px', fontSize: '0.75rem', fontWeight: 800, cursor: 'pointer' }}>
                    <HiCheck size={12} />
                  </button>
                </div>
              ) : (
                <>
                  <span style={{ fontWeight: 600, color: '#334155' }}>{crs}</span>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button type="button" aria-label={`Edit course option ${crs}`} onClick={() => { setEditingCourseIdx(idx); setEditingCourseValue(crs); }} style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '4px', padding: '3px 6px', cursor: 'pointer', fontSize: '0.725rem' }}>
                      <HiPencil size={12} />
                    </button>
                    <button type="button" aria-label={`Delete course option ${crs}`} onClick={() => handleDeleteCourse(idx)} style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', borderRadius: '4px', padding: '3px 6px', cursor: 'pointer', fontSize: '0.725rem' }}>
                      <HiTrash size={12} />
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* MANAGER FOR COUNTRIES DROPDOWN OPTIONS */}
      <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
        <label htmlFor="add_new_country_input" style={{ fontSize: '0.825rem', fontWeight: 800, color: '#000648', display: 'block', marginBottom: '8px' }}>
          Countries Dropdown Options ({countries.length}) — Add / Delete
        </label>

        <div style={{ display: 'flex', gap: '6px', marginBottom: '10px' }}>
          <input
            id="add_new_country_input"
            aria-label="Add country option"
            type="text"
            placeholder="Add country name..."
            value={newCountryInput}
            onChange={(e) => setNewCountryInput(e.target.value)}
            style={{ flex: 1, padding: '7px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.8rem' }}
          />
          <button
            type="button"
            aria-label="Add country option button"
            onClick={handleAddCountry}
            style={{ padding: '7px 12px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '6px', fontWeight: 800, cursor: 'pointer', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <HiPlus size={14} /> Add Country
          </button>
        </div>

        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {countries.map((cnt, idx) => (
            <span key={cnt + idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '50px', padding: '3px 10px', fontSize: '0.75rem', fontWeight: 700, color: '#000648' }}>
              {cnt}
              <button type="button" aria-label={`Delete country option ${cnt}`} onClick={() => handleDeleteCountry(idx)} style={{ background: 'none', border: 'none', color: '#dc2626', cursor: 'pointer', display: 'flex', padding: 0 }}>
                <HiTrash size={12} />
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
