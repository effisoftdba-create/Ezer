import React from 'react';
import { HiAcademicCap, HiPhone, HiMail, HiLocationMarker, HiChatAlt2, HiTrash, HiCheckCircle } from 'react-icons/hi';

const STATUS_COLORS = {
  New: { bg: '#eff6ff', color: '#1d4ed8', border: '#bfdbfe' },
  Pending: { bg: '#fef3c7', color: '#92400e', border: '#fde68a' },
  Contacted: { bg: '#e0f2fe', color: '#075985', border: '#bae6fd' },
  'In Progress': { bg: '#f3e8ff', color: '#6b21a8', border: '#e9d5ff' },
  Enrolled: { bg: '#dcfce7', color: '#166534', border: '#86efac' },
  Resolved: { bg: '#dcfce7', color: '#166534', border: '#bbf7d0' },
  Closed: { bg: '#f1f5f9', color: '#475569', border: '#e2e8f0' }
};

export default function LeadsTable({ filteredLeads, handleStatusChange, setSelectedLeadId, handleDeleteLeadClick }) {
  return (
    <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 4px 14px rgba(0,0,0,0.02)' }}>
      <div 
        className="leads-table-scroll"
        style={{ 
          maxHeight: '560px', 
          overflowY: 'auto', 
          overflowX: 'auto', 
          position: 'relative' 
        }}
      >
        <table style={{ width: '100%', minWidth: '850px', borderCollapse: 'separate', borderSpacing: 0, textAlign: 'left', fontSize: '0.84rem' }}>
          <thead>
            <tr style={{ background: '#f8fafc', color: '#475569', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', position: 'sticky', top: 0, zIndex: 15, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <th style={{ padding: '14px 18px', background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>Student Info</th>
              <th style={{ padding: '14px 18px', background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>Selected Course</th>
              <th style={{ padding: '14px 18px', background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>Contact & Payment</th>
              <th style={{ padding: '14px 18px', background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>Status</th>
              <th style={{ padding: '14px 18px', background: '#f8fafc', borderBottom: '2px solid #e2e8f0', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.length === 0 ? (
              <tr>
                <td colSpan={5} style={{ padding: '32px', textAlign: 'center', color: '#94a3b8' }}>
                  No lead submissions match your current filters.
                </td>
              </tr>
            ) : (
              filteredLeads.map((lead) => {
                const currentSt = lead.status || 'New';
                const statusInfo = STATUS_COLORS[currentSt] || STATUS_COLORS.New;
                const isOthers = lead.course === 'Others' || lead.course === 'Other';
                const isPaid = lead.paymentStatus === 'PAID' || lead.amountPaid || lead.status === 'Enrolled';
                const comments = lead.comments || [];
                const latestComment = comments.length > 0 ? comments[comments.length - 1] : null;

                return (
                  <tr key={lead.id} style={{ borderBottom: '1px solid #f1f5f9', transition: 'background-color 0.15s ease' }}>
                    <td style={{ padding: '14px 16px' }}>
                      <div style={{ fontWeight: 800, color: '#000648', fontSize: '0.92rem' }}>{lead.name}</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px' }}>
                        {new Date(lead.timestamp || lead.date || Date.now()).toLocaleString()}
                      </div>
                      {isPaid && (
                        <div style={{ marginTop: '4px', display: 'inline-flex', alignItems: 'center', gap: '4px', background: '#dcfce7', color: '#166534', border: '1px solid #86efac', padding: '2px 8px', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 900 }}>
                          <HiCheckCircle size={12} /> PAID ({lead.amountPaid || '₹9'})
                        </div>
                      )}
                      {latestComment && (
                        <div style={{ marginTop: '6px', padding: '4px 8px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '0.73rem', color: '#334155', display: 'flex', alignItems: 'center', gap: '5px', maxWidth: '260px' }}>
                          <HiChatAlt2 size={13} color="#115DFC" style={{ flexShrink: 0 }} />
                          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontWeight: 600 }}>
                            <strong style={{ color: '#000648' }}>{latestComment.author}:</strong> "{latestComment.text}"
                          </span>
                        </div>
                      )}
                    </td>

                    <td style={{ padding: '14px 16px' }}>
                      <div style={{ fontWeight: 800, color: isOthers ? '#115DFC' : '#000648', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <HiAcademicCap size={16} />
                        {lead.course}
                      </div>
                      {isOthers && lead.otherCourseText && (
                        <div style={{ fontSize: '0.76rem', color: '#115DFC', fontWeight: 700, marginTop: '2px', background: '#eff6ff', padding: '2px 8px', borderRadius: '4px', display: 'inline-block' }}>
                          Custom: "{lead.otherCourseText}"
                        </div>
                      )}
                    </td>

                    <td style={{ padding: '14px 16px' }}>
                      <div style={{ fontSize: '0.8rem', color: '#334155', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <HiPhone size={14} color="#000648" /> {lead.phone}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                        <HiMail size={14} /> {lead.email}
                      </div>
                      {lead.transactionId && (
                        <div style={{ fontSize: '0.7rem', color: '#166534', fontWeight: 700, marginTop: '2px' }}>
                          TXN: {lead.transactionId}
                        </div>
                      )}
                    </td>

                    <td style={{ padding: '14px 16px' }}>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          padding: '4px 12px',
                          borderRadius: '50px',
                          border: `1px solid ${statusInfo.border}`,
                          background: statusInfo.bg,
                          color: statusInfo.color,
                          fontWeight: 800,
                          fontSize: '0.75rem',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {currentSt}
                      </span>
                    </td>

                    <td style={{ padding: '14px 16px', textAlign: 'right' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px' }}>
                        <button
                          type="button"
                          onClick={() => setSelectedLeadId(lead.id)}
                          style={{
                            padding: '5px 12px', background: '#000648', color: '#f2b733',
                            border: 'none', borderRadius: '6px', fontSize: '0.76rem',
                            fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px'
                          }}
                        >
                          <HiChatAlt2 size={14} /> Notes & Details {comments.length > 0 && <span style={{ background: '#f2b733', color: '#000648', borderRadius: '50px', padding: '1px 6px', fontSize: '0.68rem', fontWeight: 900, marginLeft: '2px' }}>{comments.length}</span>}
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDeleteLeadClick(lead.id, lead.name)}
                          style={{
                            padding: '5px 8px', background: '#fee2e2', color: '#dc2626',
                            border: 'none', borderRadius: '6px', cursor: 'pointer'
                          }}
                          title="Delete Lead Entry"
                        >
                          <HiTrash size={14} />
                        </button>
                      </div>
                    </td>

                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
