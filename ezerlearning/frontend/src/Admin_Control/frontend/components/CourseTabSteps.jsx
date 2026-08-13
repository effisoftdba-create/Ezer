import React from 'react';

export default function CourseTabSteps({ formData, setFormData }) {
  const steps = (formData.admissionStepsList || [
    { id: 'step-1', step: '01', title: 'Select Batch & Register', desc: 'Fill contact details and choose batch.' },
    { id: 'step-2', step: '02', title: 'Free Counseling & Profile Evaluation', desc: 'Speak with senior advisors.' },
    { id: 'step-3', step: '03', title: 'Demo Class Attendance', desc: 'Experience interactive live training.' },
    { id: 'step-4', step: '04', title: 'Enrollment & Seat Lock', desc: 'Confirm seat with flexible EMI.' },
    { id: 'step-5', step: '05', title: 'LMS Access & Lab Setup', desc: 'Get full access to cloud sandboxes.' },
    { id: 'step-6', step: '06', title: 'Live Cohort & Placement Support', desc: 'Build projects & unlock placement support.' }
  ]).map((s, idx) => ({ ...s, id: s.id || `step-${idx}` }));

  return (
    <div>
      <h4 style={{ margin: '0 0 4px 0', fontSize: '0.95rem', fontWeight: 800, color: '#000648' }}>
        "How the Program Works" (6 Admission Steps Timeline)
      </h4>
      <p style={{ margin: '0 0 14px 0', fontSize: '0.78rem', color: '#64748b' }}>
        Customize step titles and descriptions displayed on the course detail page.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
        {steps.map((step, idx) => (
          <div key={step.id} style={{ background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '10px', padding: '10px' }}>
            <label htmlFor={`step_title_${step.id}`} style={{ fontSize: '0.75rem', fontWeight: 800, color: '#000648', display: 'block', marginBottom: '4px' }}>
              Step {step.step || `0${idx + 1}`} Title
            </label>
            <input
              id={`step_title_${step.id}`}
              type="text"
              value={step.title}
              onChange={(e) => {
                const updated = steps.map((st) => st.id === step.id ? { ...st, title: e.target.value } : st);
                setFormData((prev) => ({ ...prev, admissionStepsList: updated }));
              }}
              placeholder="Step Title"
              style={{ width: '100%', padding: '6px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.8rem', marginBottom: '6px', fontWeight: 700 }}
            />
            <label htmlFor={`step_desc_${step.id}`} style={{ fontSize: '0.7rem', fontWeight: 600, color: '#64748b', display: 'block', marginBottom: '2px' }}>
              Description
            </label>
            <textarea
              id={`step_desc_${step.id}`}
              rows={2}
              value={step.desc}
              onChange={(e) => {
                const updated = steps.map((st) => st.id === step.id ? { ...st, desc: e.target.value } : st);
                setFormData((prev) => ({ ...prev, admissionStepsList: updated }));
              }}
              placeholder="Step Description"
              style={{ width: '100%', padding: '6px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.78rem' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
