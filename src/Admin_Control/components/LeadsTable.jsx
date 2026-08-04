import React from 'react';
import { HiAcademicCap, HiPhone, HiMail, HiLocationMarker, HiChatAlt2, HiTrash } from 'react-icons/hi';

const STATUS_COLORS = {
  Pending: { bg: '#fef3c7', color: '#92400e', border: '#fde68a' },
  Contacted: { bg: '#e0f2fe', color: '#075985', border: '#bae6fd' },
  'In Progress': { bg: '#f3e8ff', color: '#6b21a8', border: '#e9d5ff' },
  Resolved: { bg: '#dcfce7', color: '#166534', border: '#bbf7d0' },
  Closed: { bg: '#f1f5f9', color: '#475569', border: '#e2e8f0' }
};

export default function LeadsTable({ filteredLeads, handleStatusChange, setSelectedLeadId, handleDeleteLeadClick }) {
  return (
    <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '14px', overflow: 'hidden' }}>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.84rem' }}>
          <thead>
            <tr style={{ background: '#f8fafc', borderBottom: '1.5px solid #e2e8f0', color: '#475569', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase' }}>
              <th style={{ padding: '12px 16px' }}>Student Info</th>
              <th style={{ padding: '12px 16px' }}>Target Course / Custom Goal</th>
              <th style={{ padding: '12px 16px' }}>Contact & Location</th>
              <th style={{ padding: '12px 16px' }}>Status</th>
              <th style={{ padding: '12px 16px', textAlign: 'right' }}>Actions</th>
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
                const statusInfo = STATUS_COLORS[lead.status] || STATUS_COLORS.Pending;
                const isOthers = lead.course === 'Others' || lead.course === 'Other';
                return (
                  <tr key={lead.id} style={{ borderBottom: '1px solid #f1f5f9', transition: 'background-color 0.15s ease' }}>
                    <td style={{ padding: '14px 16px' }}>
                      <div style={{ fontWeight: 800, color: '#000648' }}>{lead.name}</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px' }}>
                        {new Date(lead.timestamp).toLocaleString()}
                      </div>
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
                      {(lead.city || lead.state) && (
                        <div style={{ fontSize: '0.72rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                          <HiLocationMarker size={12} /> {[lead.city, lead.state, lead.country].filter(Boolean).join(', ')}
                        </div>
                      )}
                    </td>

                    <td style={{ padding: '14px 16px' }}>
                      <select
                        aria-label={`Change status for ${lead.name}`}
                        value={lead.status}
                        onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                        style={{
                          padding: '4px 10px', borderRadius: '50px',
                          border: `1px solid ${statusInfo.border}`,
                          background: statusInfo.bg, color: statusInfo.color,
                          fontWeight: 800, fontSize: '0.75rem', cursor: 'pointer', outline: 'none'
                        }}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Contacted">Contacted</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Resolved">Resolved</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </td>

                    <td style={{ padding: '14px 16px', textAlign: 'right' }}>
                      <div style={{ display: 'flex', gap: '6px', justifyContent: 'flex-end' }}>
                        <button
                          type="button"
                          aria-label={`View comments for ${lead.name}`}
                          onClick={() => setSelectedLeadId(lead.id)}
                          style={{ padding: '6px 12px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                        >
                          <HiChatAlt2 size={14} /> Comments ({(lead.comments || []).length})
                        </button>
                        <button
                          type="button"
                          aria-label={`Delete lead for ${lead.name}`}
                          onClick={() => handleDeleteLeadClick(lead.id, lead.name)}
                          style={{ padding: '6px 10px', background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}
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
