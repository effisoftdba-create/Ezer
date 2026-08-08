import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { HiX, HiChatAlt2, HiCheck, HiCheckCircle } from 'react-icons/hi';

export default function LeadDetailsModal({
  selectedLead,
  setSelectedLeadId,
  handleStatusChange,
  handleAddCommentSubmit,
  adminAuthorName,
  setAdminAuthorName,
  newCommentText,
  setNewCommentText
}) {
  const [localStatus, setLocalStatus] = useState(selectedLead ? selectedLead.status : 'Pending');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (selectedLead) {
      setLocalStatus(selectedLead.status || 'Pending');
      setIsSaved(false);
    }
  }, [selectedLead]);

  if (!selectedLead) return null;

  const handleSaveAll = (e) => {
    e.preventDefault();
    handleStatusChange(selectedLead.id, localStatus);

    if (newCommentText && newCommentText.trim()) {
      handleAddCommentSubmit(e);
    }

    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      setSelectedLeadId(null);
    }, 800);
  };

  const modalContent = (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) setSelectedLeadId(null);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Escape' || e.key === 'Enter') setSelectedLeadId(null);
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 999999,
        background: 'rgba(0, 6, 72, 0.82)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        boxSizing: 'border-box'
      }}
    >
      <div style={{
        background: '#ffffff',
        borderRadius: '20px',
        width: '100%',
        maxWidth: '680px',
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
        border: '2.5px solid #000648',
        position: 'relative',
        overflow: 'hidden'
      }}>
        
        {/* Fixed Header */}
        <div style={{
          background: '#000648',
          color: '#ffffff',
          padding: '18px 24px',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          borderBottom: '2px solid #f2b733',
          flexShrink: 0
        }}>
          <div>
            <span style={{ fontSize: '0.7rem', fontWeight: 900, color: '#f2b733', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              ADMIN LEAD MANAGEMENT
            </span>
            <h3 style={{ margin: '2px 0 0 0', fontSize: '1.25rem', fontWeight: 900, color: '#ffffff' }}>
              Lead & Paid Student Details
            </h3>
          </div>

          <button
            type="button"
            aria-label="Close lead details modal window"
            onClick={() => setSelectedLeadId(null)}
            style={{ background: 'rgba(255,255,255,0.12)', border: 'none', cursor: 'pointer', color: '#ffffff', width: '34px', height: '34px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <HiX size={20} />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div style={{ padding: '24px', overflowY: 'auto', flexGrow: 1, background: '#ffffff' }}>
          
          <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 700, marginBottom: '14px' }}>
            Submitted on {new Date(selectedLead.timestamp || selectedLead.date || Date.now()).toLocaleString()}
          </div>

          {/* Paid Badge Alert */}
          {(selectedLead.amountPaid || selectedLead.paymentStatus === 'PAID') && (
            <div style={{ background: '#f0fdf4', border: '1.5px solid #86efac', color: '#166534', padding: '12px 16px', borderRadius: '12px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 900, fontSize: '0.88rem' }}>
                <HiCheckCircle size={20} color="#166534" /> PAID STUDENT ENROLLMENT ({selectedLead.amountPaid || '₹9'})
              </div>
              {selectedLead.transactionId && (
                <span style={{ fontSize: '0.78rem', background: '#ffffff', padding: '4px 12px', borderRadius: '6px', border: '1px solid #bbf7d0', fontWeight: 900, color: '#000648' }}>
                  TXN: {selectedLead.transactionId}
                </span>
              )}
            </div>
          )}

          {/* Lead Details Grid */}
          <div style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '14px', padding: '18px', marginBottom: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Full Name</div>
              <div style={{ fontSize: '1rem', fontWeight: 900, color: '#000648', marginTop: '2px' }}>{selectedLead.name}</div>
            </div>

            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Target Course</div>
              <div style={{ fontSize: '1rem', fontWeight: 900, color: selectedLead.course === 'Others' ? '#115DFC' : '#000648', marginTop: '2px' }}>
                {selectedLead.course}
              </div>
              {selectedLead.otherCourseText && (
                <div style={{ fontSize: '0.78rem', color: '#115DFC', fontWeight: 700, marginTop: '2px' }}>
                  Goal: "{selectedLead.otherCourseText}"
                </div>
              )}
            </div>

            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Phone</div>
              <a href={`tel:${selectedLead.phone}`} style={{ fontSize: '0.92rem', fontWeight: 900, color: '#115DFC', textDecoration: 'none', display: 'block', marginTop: '2px' }}>
                {selectedLead.phone}
              </a>
            </div>

            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Email</div>
              <a href={`mailto:${selectedLead.email}`} style={{ fontSize: '0.88rem', fontWeight: 800, color: '#334155', textDecoration: 'none', display: 'block', marginTop: '2px' }}>
                {selectedLead.email}
              </a>
            </div>

            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Location</div>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginTop: '2px' }}>
                {[selectedLead.city, selectedLead.state, selectedLead.country].filter(Boolean).join(', ') || 'Online Enrollment'}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Select Lead Status</div>
              <select
                aria-label="Modal status selector"
                value={localStatus}
                onChange={(e) => setLocalStatus(e.target.value)}
                style={{ padding: '8px 12px', borderRadius: '8px', border: '2px solid #000648', fontSize: '0.88rem', fontWeight: 900, marginTop: '4px', width: '100%', background: '#ffffff', color: '#000648' }}
              >
                <option value="Pending">Pending</option>
                <option value="Contacted">Contacted</option>
                <option value="In Progress">In Progress</option>
                <option value="Enrolled">Enrolled</option>
                <option value="Resolved">Resolved</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
          </div>

          {/* Admin Comment History & Counselor Notes Input */}
          <div>
            <h4 style={{ margin: '0 0 12px 0', fontSize: '0.95rem', fontWeight: 900, color: '#000648', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <HiChatAlt2 size={20} color="#115DFC" /> Counselor Internal Notes & History
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '180px', overflowY: 'auto', paddingRight: '4px', marginBottom: '16px' }}>
              {(selectedLead.comments || []).length === 0 ? (
                <div style={{ fontSize: '0.84rem', color: '#94a3b8', fontStyle: 'italic', background: '#f8fafc', padding: '12px', borderRadius: '8px', border: '1px dashed #cbd5e1' }}>
                  No counselor comments recorded yet. Type a note below to save.
                </div>
              ) : (
                (selectedLead.comments || []).map((c) => (
                  <div key={c.id} style={{ background: '#f1f5f9', padding: '10px 14px', borderRadius: '8px', borderLeft: '4px solid #000648' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748b', fontWeight: 700, marginBottom: '4px' }}>
                      <span style={{ fontWeight: 800, color: '#000648' }}>{c.author}</span>
                      <span>{c.date || c.time}</span>
                    </div>
                    <div style={{ fontSize: '0.86rem', color: '#1e293b', lineHeight: 1.45 }}>{c.text}</div>
                  </div>
                ))
              )}
            </div>

            {/* Add Comment Input Fields */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <input
                  aria-label="Admin Counselor Name"
                  type="text"
                  placeholder="Counselor Name"
                  value={adminAuthorName}
                  onChange={(e) => setAdminAuthorName(e.target.value)}
                  style={{ width: '160px', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem', fontWeight: 700 }}
                />
                <input
                  aria-label="Add Internal Note"
                  type="text"
                  placeholder="Type internal note or call follow-up comment..."
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
                  style={{ flex: 1, minWidth: '220px', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.86rem' }}
                />
              </div>
            </div>
          </div>

        </div>

        {/* Fixed Action Footer */}
        <div style={{
          padding: '16px 24px',
          borderTop: '1.5px solid #e2e8f0',
          background: '#f8fafc',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          flexShrink: 0,
          borderRadius: '0 0 18px 18px'
        }}>
          {isSaved ? (
            <span style={{ color: '#166534', fontWeight: 900, fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <HiCheck size={20} /> Lead Status & Counselor Notes Saved!
            </span>
          ) : (
            <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>
              Select status & type notes above then click Save.
            </span>
          )}

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              type="button"
              aria-label="Close modal footer button"
              onClick={() => setSelectedLeadId(null)}
              style={{ padding: '10px 20px', background: '#e2e8f0', color: '#475569', border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer', fontSize: '0.86rem' }}
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleSaveAll}
              style={{
                padding: '10px 24px',
                background: '#000648',
                color: '#f2b733',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 900,
                fontSize: '0.88rem',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,6,72,0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <HiCheck size={18} /> Save Status & Notes
            </button>
          </div>
        </div>

      </div>
    </div>
  );

  return typeof document !== 'undefined'
    ? ReactDOM.createPortal(modalContent, document.body)
    : modalContent;
}
