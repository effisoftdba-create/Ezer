import React, { useState, useEffect } from 'react';
import { HiX, HiChatAlt2, HiPlus, HiCheck, HiCreditCard, HiCheckCircle } from 'react-icons/hi';

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

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,6,72,0.85)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ background: '#ffffff', borderRadius: '16px', width: '100%', maxWidth: '680px', maxHeight: '90vh', overflowY: 'auto', padding: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.35)', border: '2px solid #000648' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1.5px solid #e2e8f0' }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800, color: '#000648' }}>
              Lead & Paid Student Details
            </h3>
            <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
              Submitted on {new Date(selectedLead.timestamp || selectedLead.date || Date.now()).toLocaleString()}
            </span>
          </div>
          <button
            type="button"
            aria-label="Close lead details modal window"
            onClick={() => setSelectedLeadId(null)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}
          >
            <HiX size={24} />
          </button>
        </div>

        {/* Payment / Paid Badge Alert if available */}
        {(selectedLead.amountPaid || selectedLead.paymentStatus === 'PAID') && (
          <div style={{ background: '#dcfce7', border: '1.5px solid #86efac', color: '#166534', padding: '10px 14px', borderRadius: '10px', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, fontSize: '0.85rem' }}>
              <HiCheckCircle size={18} color="#166534" /> PAID STUDENT ENROLLMENT ({selectedLead.amountPaid || '₹9'})
            </div>
            {selectedLead.transactionId && (
              <span style={{ fontSize: '0.75rem', background: '#ffffff', padding: '2px 8px', borderRadius: '4px', border: '1px solid #bbf7d0', fontWeight: 700 }}>
                TXN: {selectedLead.transactionId}
              </span>
            )}
          </div>
        )}

        {/* Lead Details Grid */}
        <div style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '12px', padding: '16px', marginBottom: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div>
            <div style={{ fontSize: '0.725rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Full Name</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#000648' }}>{selectedLead.name}</div>
          </div>

          <div>
            <div style={{ fontSize: '0.725rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Target Course</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 800, color: selectedLead.course === 'Others' ? '#115DFC' : '#000648' }}>
              {selectedLead.course}
            </div>
            {selectedLead.otherCourseText && (
              <div style={{ fontSize: '0.78rem', color: '#115DFC', fontWeight: 700, marginTop: '2px' }}>
                Goal: "{selectedLead.otherCourseText}"
              </div>
            )}
          </div>

          <div>
            <div style={{ fontSize: '0.725rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Phone</div>
            <a href={`tel:${selectedLead.phone}`} style={{ fontSize: '0.9rem', fontWeight: 800, color: '#115DFC', textDecoration: 'none' }}>
              {selectedLead.phone}
            </a>
          </div>

          <div>
            <div style={{ fontSize: '0.725rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Email</div>
            <a href={`mailto:${selectedLead.email}`} style={{ fontSize: '0.88rem', fontWeight: 700, color: '#334155', textDecoration: 'none' }}>
              {selectedLead.email}
            </a>
          </div>

          <div>
            <div style={{ fontSize: '0.725rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Location</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155' }}>
              {[selectedLead.city, selectedLead.state, selectedLead.country].filter(Boolean).join(', ') || 'Not specified'}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.725rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Select Status</div>
            <select
              aria-label="Modal status selector"
              value={localStatus}
              onChange={(e) => setLocalStatus(e.target.value)}
              style={{ padding: '6px 12px', borderRadius: '6px', border: '2px solid #000648', fontSize: '0.82rem', fontWeight: 900, marginTop: '4px', width: '100%', background: '#ffffff' }}
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

        {/* Admin Comment History */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ margin: '0 0 10px 0', fontSize: '0.92rem', fontWeight: 800, color: '#000648', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <HiChatAlt2 size={18} color="#115DFC" /> Counselor Internal Notes & History
          </h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '200px', overflowY: 'auto', paddingRight: '4px', marginBottom: '12px' }}>
            {(selectedLead.comments || []).length === 0 ? (
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontStyle: 'italic' }}>No comments added yet.</div>
            ) : (
              (selectedLead.comments || []).map((c) => (
                <div key={c.id} style={{ background: '#f1f5f9', padding: '10px 12px', borderRadius: '8px', borderLeft: '3.5px solid #000648' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.725rem', color: '#64748b', fontWeight: 700, marginBottom: '2px' }}>
                    <span>{c.author}</span>
                    <span>{c.date || c.time}</span>
                  </div>
                  <div style={{ fontSize: '0.84rem', color: '#1e293b', lineHeight: 1.4 }}>{c.text}</div>
                </div>
              ))
            )}
          </div>

          {/* Add Comment Input */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                aria-label="Admin Counselor Name"
                type="text"
                placeholder="Counselor Name"
                value={adminAuthorName}
                onChange={(e) => setAdminAuthorName(e.target.value)}
                style={{ width: '160px', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.8rem' }}
              />
              <input
                aria-label="Add Internal Note"
                type="text"
                placeholder="Type internal note or call follow-up comment..."
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                style={{ flex: 1, padding: '8px 12px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }}
              />
            </div>
          </div>
        </div>

        {/* Save Status & Notes Action Footer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1.5px solid #e2e8f0' }}>
          {isSaved ? (
            <span style={{ color: '#166534', fontWeight: 800, fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <HiCheck size={18} /> Lead Status & Counselor Notes Saved!
            </span>
          ) : (
            <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
              Select status & type notes above then click Save.
            </span>
          )}

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              type="button"
              aria-label="Close modal footer button"
              onClick={() => setSelectedLeadId(null)}
              style={{ padding: '10px 20px', background: '#e2e8f0', color: '#475569', border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer' }}
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
}
