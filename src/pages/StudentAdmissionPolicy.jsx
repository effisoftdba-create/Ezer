import React, { useState } from 'react';
import { HiDocumentText, HiCheckCircle, HiPrinter, HiClipboardList, HiShieldCheck } from 'react-icons/hi';
import CTABanner from '../components/CTABanner';

function AdmissionPoliciesTab() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* 1. Student Admission Agreement */}
      <div style={{ background: '#ffffff', borderRadius: '16px', border: '1.5px solid #e2e8f0', padding: '28px', boxShadow: '0 4px 14px rgba(0,6,72,0.04)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{ background: '#000648', color: '#f2b733', padding: '8px', borderRadius: '8px' }}>
            <HiShieldCheck size={22} />
          </div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#000648', margin: 0 }}>
            1. Student Admission Agreement
          </h2>
        </div>
        <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
          Student agrees to follow institute rules, maintain required attendance, complete course fees on schedule, submit assignments punctually, and abide by the institute code of conduct. The Institute agrees to provide structured live training, LMS portal access, interactive assessments, capstone lab evaluations, and placement guidance.
        </p>
      </div>

      {/* 2. Fee Payment Agreement */}
      <div style={{ background: '#ffffff', borderRadius: '16px', border: '1.5px solid #e2e8f0', padding: '28px', boxShadow: '0 4px 14px rgba(0,6,72,0.04)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{ background: '#000648', color: '#f2b733', padding: '8px', borderRadius: '8px' }}>
            <HiDocumentText size={22} />
          </div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#000648', margin: 0 }}>
            2. Fee Payment Agreement
          </h2>
        </div>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: '#475569', fontSize: '0.92rem', lineHeight: 1.6, paddingLeft: 0, margin: 0 }}>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <HiCheckCircle size={18} style={{ color: '#000648', flexShrink: 0, marginTop: '2px' }} />
            <span>Fees shall be paid strictly as per the agreed installment schedule prior to milestone dates.</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <HiCheckCircle size={18} style={{ color: '#000648', flexShrink: 0, marginTop: '2px' }} />
            <span>Certificates of Completion and formal placement credentials are issued only after full payment settlement.</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <HiCheckCircle size={18} style={{ color: '#000648', flexShrink: 0, marginTop: '2px' }} />
            <span>Initial seat reservation and registration fees are non-refundable once cohort seat reservation is issued.</span>
          </li>
        </ul>
      </div>

      {/* 3. Student Registration Checklist */}
      <div style={{ background: '#ffffff', borderRadius: '16px', border: '1.5px solid #e2e8f0', padding: '28px', boxShadow: '0 4px 14px rgba(0,6,72,0.04)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
          <div style={{ background: '#000648', color: '#f2b733', padding: '8px', borderRadius: '8px' }}>
            <HiClipboardList size={22} />
          </div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#000648', margin: 0 }}>
            3. Student Registration Checklist
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
          {[
            "Admission Form Submitted",
            "Government ID Proof Verified",
            "Educational Certificates Uploaded",
            "Passport Photos Received",
            "Registration Fee Paid",
            "Admission Agreement Signed",
            "LMS Created & ID Generated",
            "Live Training Batch Assigned"
          ].map((check) => (
            <div key={check} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#f8fafc', padding: '10px 14px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.84rem', fontWeight: 700, color: '#000648' }}>
              <HiCheckCircle size={16} style={{ color: '#f2b733' }} /> {check}
            </div>
          ))}
        </div>
      </div>

      {/* 4. Student Handbook Outline */}
      <div style={{ background: '#ffffff', borderRadius: '16px', border: '1.5px solid #e2e8f0', padding: '28px', boxShadow: '0 4px 14px rgba(0,6,72,0.04)' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#000648', marginBottom: '16px' }}>
          4. Student Handbook Outline
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
          {[
            "1. Welcome & Onboarding",
            "2. Vision & Mission",
            "3. Admission Process",
            "4. Code of Conduct",
            "5. Attendance Rules",
            "6. LMS & Lab Rules",
            "7. Assignments & Projects",
            "8. Certification Criteria",
            "9. Fee Policy & Schedule",
            "10. Placement Assistance",
            "11. Grievance Procedure",
            "12. Official Contacts"
          ].map((chapter) => (
            <div key={chapter} style={{ padding: '10px 12px', background: '#f1f5f9', borderRadius: '6px', fontSize: '0.82rem', fontWeight: 700, color: '#334155' }}>
              {chapter}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AdmissionAgreementTab({ formData, handleInputChange }) {
  return (
    <div style={{
      background: '#ffffff', border: '2px solid #000648', borderRadius: '16px',
      padding: 'clamp(14px, 3.5vw, 36px)', boxShadow: '0 12px 32px rgba(0,6,72,0.08)',
      boxSizing: 'border-box', width: '100%', maxWidth: '100%', overflow: 'hidden'
    }}>
      <div style={{ textAlign: 'center', borderBottom: '2px solid #000648', paddingBottom: '20px', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#000648', letterSpacing: '0.04em', margin: 0 }}>
          EZER LEARNING SOLUTIONS
        </h2>
        <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#d9a02a', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Student Admission Agreement
        </div>
        <p style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '6px' }}>
          This Admission Agreement is entered into between EZER Learning Solutions and the undersigned student.
        </p>
      </div>

      {/* Interactive Student Details Form Block */}
      <div style={{
        background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '12px',
        padding: 'clamp(12px, 2.5vw, 20px)', marginBottom: '24px', boxSizing: 'border-box',
        width: '100%', overflow: 'hidden'
      }}>
        <h3 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#000648', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Student Details (Fillable Form)
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(180px, 100%), 1fr))',
          gap: '14px', width: '100%', boxSizing: 'border-box'
        }}>
          <div style={{ width: '100%', boxSizing: 'border-box' }}>
            <label htmlFor="studentName" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#000648', marginBottom: '4px' }}>
              Student Name *
            </label>
            <input
              id="studentName"
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleInputChange}
              placeholder="Enter your full legal name"
              style={{
                width: '100%', boxSizing: 'border-box', padding: '9px 12px', borderRadius: '8px',
                border: '1.5px solid #000648', fontSize: '0.88rem', fontWeight: 700,
                color: '#000648', outline: 'none', background: '#ffffff', maxWidth: '100%'
              }}
            />
          </div>

          <div style={{ width: '100%', boxSizing: 'border-box' }}>
            <label htmlFor="admissionNo" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#000648', marginBottom: '4px' }}>
              Admission No.
            </label>
            <input
              id="admissionNo"
              type="text"
              name="admissionNo"
              value={formData.admissionNo}
              onChange={handleInputChange}
              style={{
                width: '100%', boxSizing: 'border-box', padding: '9px 12px', borderRadius: '8px',
                border: '1.5px solid #cbd5e1', fontSize: '0.88rem', fontWeight: 700,
                color: '#000648', outline: 'none', background: '#f1f5f9', maxWidth: '100%'
              }}
            />
          </div>

          <div style={{ width: '100%', boxSizing: 'border-box' }}>
            <label htmlFor="courseName" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#000648', marginBottom: '4px' }}>
              Course Name *
            </label>
            <select
              id="courseName"
              name="courseName"
              value={formData.courseName}
              onChange={handleInputChange}
              style={{
                width: '100%', boxSizing: 'border-box', padding: '9px 12px', borderRadius: '8px',
                border: '1.5px solid #000648', fontSize: '0.88rem', fontWeight: 700,
                color: '#000648', outline: 'none', background: '#ffffff', maxWidth: '100%'
              }}
            >
              <option value="Cloud DevOps with AI">Cloud DevOps with AI</option>
              <option value="IITD VLSI Physical Design">IITD VLSI Physical Design</option>
              <option value="Software Testing – Playwright">Software Testing – Playwright</option>
              <option value="AI & Machine Learning">AI & Machine Learning</option>
              <option value="IT Infrastructure & SysAdmin">IT Infrastructure & SysAdmin</option>
            </select>
          </div>

          <div style={{ width: '100%', boxSizing: 'border-box' }}>
            <label htmlFor="batchCode" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#000648', marginBottom: '4px' }}>
              Batch Code
            </label>
            <input
              id="batchCode"
              type="text"
              name="batchCode"
              value={formData.batchCode}
              onChange={handleInputChange}
              style={{
                width: '100%', boxSizing: 'border-box', padding: '9px 12px', borderRadius: '8px',
                border: '1.5px solid #cbd5e1', fontSize: '0.88rem', fontWeight: 700,
                color: '#000648', outline: 'none', background: '#f1f5f9', maxWidth: '100%'
              }}
            />
          </div>

          <div style={{ gridColumn: 'span 1', width: '100%', boxSizing: 'border-box' }}>
            <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#000648', marginBottom: '4px' }}>
              Admission Date (Auto Real-time)
            </span>
            <div style={{
              width: '100%', boxSizing: 'border-box',
              padding: '9px 12px', borderRadius: '8px',
              background: 'rgba(242, 183, 51, 0.15)', border: '1.5px solid #f2b733',
              fontSize: '0.88rem', fontWeight: 900, color: '#000648', maxWidth: '100%'
            }}>
              📅 {formData.admissionDate}
            </div>
          </div>
        </div>
      </div>

      {/* Institute Responsibilities */}
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#000648', marginBottom: '8px' }}>
          Institute Responsibilities
        </h3>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.88rem', color: '#475569', paddingLeft: '20px', margin: 0 }}>
          <li>Deliver training according to the official course curriculum.</li>
          <li>Provide access to LMS portal and session recordings (where applicable).</li>
          <li>Conduct practical assessments, projects, and corporate mock interviews.</li>
          <li>Maintain confidentiality of student personal and academic information.</li>
        </ul>
      </div>

      {/* Student Responsibilities */}
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#000648', marginBottom: '8px' }}>
          Student Responsibilities
        </h3>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.88rem', color: '#475569', paddingLeft: '20px', margin: 0 }}>
          <li>Attend classes regularly. Maintain a minimum of 80% attendance.</li>
          <li>Complete assignments and capstone lab projects on time.</li>
          <li>Follow all institute rules & Maintain respectful behavior.</li>
          <li>Follow all institute rules. Avoid sharing LMS credentials or proprietary course materials.</li>
        </ul>
      </div>

      {/* Cancellation Policy */}
      <div style={{ marginBottom: '24px', background: '#fffbeb', border: '1px solid #fef3c7', padding: '14px', borderRadius: '8px' }}>
        <h3 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#92400e', marginBottom: '4px' }}>
          Cancellation & Termination Policy
        </h3>
        <p style={{ fontSize: '0.85rem', color: '#78350f', margin: 0, lineHeight: 1.6 }}>
          The institute reserves the right to cancel admission for academic misconduct, non-payment of agreed fees, or violation of institute code of conduct.
        </p>
      </div>

      {/* Declaration & Digital Signatures */}
      <div style={{ borderTop: '2px solid #e2e8f0', paddingTop: '20px' }}>
        <h3 style={{ fontSize: '0.94rem', fontWeight: 800, color: '#000648', marginBottom: '8px' }}>
          Declaration
        </h3>
        <p style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.6, marginBottom: '24px' }}>
          I have read and understood the Institute’s policies and agree to abide by all rules and regulations set forth in this agreement.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(180px, 100%), 1fr))',
          gap: '16px', paddingTop: '16px', borderTop: '1px dashed #cbd5e1', fontSize: '0.84rem', color: '#334155',
          boxSizing: 'border-box', width: '100%'
        }}>
          <div style={{ width: '100%', boxSizing: 'border-box' }}>
            <label htmlFor="studentSignature" style={{ display: 'block', fontWeight: 800, color: '#000648', marginBottom: '6px' }}>
              Student Digital Signature *
            </label>
            <input
              id="studentSignature"
              type="text"
              name="studentSignature"
              value={formData.studentSignature}
              onChange={handleInputChange}
              placeholder="Type your name to sign"
              style={{
                width: '100%', boxSizing: 'border-box', padding: '8px 12px', borderRadius: '6px',
                border: '1.5px solid #000648',
                fontSize: '1rem', fontWeight: 700, color: '#000648', outline: 'none', maxWidth: '100%'
              }}
            />
            <div style={{ borderBottom: '1.5px solid #000648', marginTop: '6px', width: '100%' }}></div>
            <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '4px' }}>
              Signed by: {formData.studentSignature || '________________________'}
            </div>
          </div>

          <div style={{ width: '100%', boxSizing: 'border-box' }}>
            <span style={{ display: 'block', fontWeight: 800, color: '#000648', marginBottom: '6px' }}>
              Authorized Signatory
            </span>
            <div style={{ width: '100%', boxSizing: 'border-box', padding: '8px 12px', background: '#f1f5f9', borderRadius: '6px', fontWeight: 800, color: '#000648', fontSize: '0.88rem' }}>
              {formData.authorizedSignatory}
            </div>
            <div style={{ borderBottom: '1.5px solid #000648', marginTop: '6px', width: '100%' }}></div>
          </div>

          <div style={{ width: '100%', boxSizing: 'border-box' }}>
            <span style={{ display: 'block', fontWeight: 800, color: '#000648', marginBottom: '6px' }}>
              Agreement Execution Date (Auto)
            </span>
            <div style={{ width: '100%', boxSizing: 'border-box', padding: '8px 12px', background: 'rgba(242,183,51,0.15)', border: '1px solid #f2b733', borderRadius: '6px', fontWeight: 900, color: '#000648', fontSize: '0.88rem' }}>
              📅 {formData.admissionDate}
            </div>
            <div style={{ borderBottom: '1.5px solid #000648', marginTop: '6px', width: '100%' }}></div>
          </div>
        </div>
      </div>

      {/* Action Buttons: Print / Save Document */}
      <div style={{ textAlign: 'center', marginTop: '32px', display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
        <button
          type="button"
          onClick={() => window.print()}
          className="btn btn-secondary"
          style={{ padding: '12px 28px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <HiPrinter size={20} /> Print Signed Agreement
        </button>
      </div>

    </div>
  );
}

export default function StudentAdmissionPolicy({ onOpenDemoModal }) {
  const [activeTab, setActiveTab] = useState('policy'); // 'policy' | 'agreement'
  
  // Real-time automatic date calculation
  const todayDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const [formData, setFormData] = useState({
    studentName: '',
    admissionNo: `EZER-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
    courseName: 'Cloud DevOps with AI',
    batchCode: `COHORT-${new Date().toLocaleString('en-US', { month: 'short' }).toUpperCase()}-${new Date().getFullYear()}`,
    admissionDate: todayDate,
    studentSignature: '',
    authorizedSignatory: 'EZER Academic Admissions Desk'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div style={{ background: '#ffffff' }}>

      {/* Header Banner */}
      <section style={{
        background: '#000648', padding: '64px 0 48px', color: '#ffffff', textAlign: 'center',
        borderBottom: '3px solid #f2b733'
      }}>
        <div className="container">
          <span style={{
            background: 'rgba(242,183,51,0.15)', border: '1px solid rgba(242,183,51,0.4)',
            color: '#f2b733', fontSize: '0.75rem', fontWeight: 800, padding: '4px 14px',
            borderRadius: '50px', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'inline-block', marginBottom: '12px'
          }}>
            Official Institute Governance
          </span>
          <h1 style={{ color: '#ffffff', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 900, marginBottom: '12px' }}>
            Student Admission Policy & Agreement
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.96rem', maxWidth: '650px', margin: '0 auto', lineHeight: 1.6 }}>
            Comprehensive admission regulations, fee terms, registration checklist, handbook guidelines, and formal student admission agreement for EZER Learning Solutions.
          </p>

          {/* Tab Selector */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '28px' }}>
            <button
              type="button"
              onClick={() => setActiveTab('policy')}
              style={{
                padding: '10px 24px', borderRadius: '8px', fontWeight: 800, fontSize: '0.86rem',
                background: activeTab === 'policy' ? '#f2b733' : 'rgba(255,255,255,0.1)',
                color: activeTab === 'policy' ? '#000648' : '#ffffff',
                border: activeTab === 'policy' ? 'none' : '1px solid rgba(255,255,255,0.3)',
                cursor: 'pointer', transition: 'background-color 0.2s ease, color 0.2s ease',
              }}
            >
              Institute Admission Policies
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('agreement')}
              style={{
                padding: '10px 24px', borderRadius: '8px', fontWeight: 800, fontSize: '0.86rem',
                background: activeTab === 'agreement' ? '#f2b733' : 'rgba(255,255,255,0.1)',
                color: activeTab === 'agreement' ? '#000648' : '#ffffff',
                border: activeTab === 'agreement' ? 'none' : '1px solid rgba(255,255,255,0.3)',
                cursor: 'pointer', transition: 'background-color 0.2s ease, color 0.2s ease',
              }}
            >
              Student Admission Agreement Document
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section" style={{ padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: '920px', margin: '0 auto' }}>

          {activeTab === 'policy' ? (
            <AdmissionPoliciesTab />
          ) : (
            <AdmissionAgreementTab formData={formData} handleInputChange={handleInputChange} />
          )}

        </div>
      </section>

      <CTABanner onOpenDemoModal={onOpenDemoModal} />
    </div>
  );
}
