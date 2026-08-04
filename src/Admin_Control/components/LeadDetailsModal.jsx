import React from 'react';
import { HiX, HiChatAlt2, HiPlus } from 'react-icons/hi';

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
  if (!selectedLead) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,6,72,0.85)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ background: '#ffffff', borderRadius: '16px', width: '100%', maxWidth: '680px', maxHeight: '90vh', overflowY: 'auto', padding: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.35)', border: '2px solid #000648' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1.5px solid #e2e8f0' }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800, color: '#000648' }}>
              Lead Details & Counselor Notes
            </h3>
            <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
              Submitted on {new Date(selectedLead.timestamp).toLocaleString()}
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
            <div style={{ fontSize: '0.725rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Current Status</div>
            <select
              aria-label="Modal status selector"
              value={selectedLead.status}
              onChange={(e) => handleStatusChange(selectedLead.id, e.target.value)}
              style={{ padding: '4px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.8rem', fontWeight: 800, marginTop: '2px' }}
            >
              <option value="Pending">Pending</option>
              <option value="Contacted">Contacted</option>
              <option value="In Progress">In Progress</option>
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
                    <span>{c.time}</span>
                  </div>
                  <div style={{ fontSize: '0.84rem', color: '#1e293b', lineHeight: 1.4 }}>{c.text}</div>
                </div>
              ))
            )}
          </div>

          {/* Add Comment Form */}
          <form onSubmit={handleAddCommentSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
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
                required
                placeholder="Type internal note or call follow-up comment..."
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                style={{ flex: 1, padding: '8px 12px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }}
              />
              <button
                type="submit"
                aria-label="Add note button"
                style={{ padding: '8px 16px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '6px', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <HiPlus size={16} /> Add Note
              </button>
            </div>
          </form>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '12px', borderTop: '1px solid #e2e8f0' }}>
          <button
            type="button"
            aria-label="Close modal footer button"
            onClick={() => setSelectedLeadId(null)}
            style={{ padding: '8px 20px', background: '#e2e8f0', color: '#475569', border: 'none', borderRadius: '6px', fontWeight: 800, cursor: 'pointer' }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
