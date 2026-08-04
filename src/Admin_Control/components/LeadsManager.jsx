import React, { useState, useMemo } from 'react';
import { useSiteData } from '../context/SiteContext';
import LeadDetailsModal from './LeadDetailsModal';
import LeadsAnalyticsCard from './LeadsAnalyticsCard';
import LeadsTable from './LeadsTable';
import {
  HiUserGroup,
  HiClock,
  HiCheckCircle,
  HiChatAlt2,
  HiSearch
} from 'react-icons/hi';

export default function LeadsManager() {
  const { leads, updateLeadStatus, addLeadComment, deleteLead } = useSiteData();
  const leadsList = useMemo(() => leads || [], [leads]);

  const [filterStatus, setFilterStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLeadId, setSelectedLeadId] = useState(null);
  const [newCommentText, setNewCommentText] = useState('');
  const [adminAuthorName, setAdminAuthorName] = useState('Admin Counselor');

  const selectedLead = useMemo(
    () => leadsList.find((l) => l.id === selectedLeadId),
    [leadsList, selectedLeadId]
  );

  // Filtered Leads
  const filteredLeads = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) {
      return filterStatus === 'All'
        ? leadsList
        : leadsList.filter((lead) => lead.status === filterStatus);
    }
    return leadsList.filter((lead) => {
      const matchesStatus = filterStatus === 'All' || lead.status === filterStatus;
      const haystack = `${lead.name || ''} ${lead.email || ''} ${lead.phone || ''} ${lead.city || ''} ${lead.course || ''} ${lead.otherCourseText || ''}`.toLowerCase();
      return matchesStatus && haystack.includes(term);
    });
  }, [leadsList, filterStatus, searchTerm]);

  // Metrics
  const totalCount = leadsList.length;
  const pendingCount = useMemo(() => leadsList.filter((l) => l.status === 'Pending').length, [leadsList]);
  const contactedCount = useMemo(() => leadsList.filter((l) => l.status === 'Contacted' || l.status === 'In Progress').length, [leadsList]);
  const resolvedCount = useMemo(() => leadsList.filter((l) => l.status === 'Resolved' || l.status === 'Closed').length, [leadsList]);

  // Analytics: Course Interest Distribution
  const sortedCourseAnalytics = useMemo(() => {
    const counts = {};
    leadsList.forEach((l) => {
      const courseName = (l.course === 'Others' || l.course === 'Other')
        ? `Others: ${l.otherCourseText || 'Custom Goal'}`
        : (l.course || 'Unspecified');
      counts[courseName] = (counts[courseName] || 0) + 1;
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, [leadsList]);

  const handleStatusChange = (id, newStatus) => {
    updateLeadStatus(id, newStatus);
    addLeadComment(id, `Status updated to "${newStatus}".`, 'System');
  };

  const handleAddCommentSubmit = (e) => {
    e.preventDefault();
    if (!newCommentText.trim() || !selectedLeadId) return;
    addLeadComment(selectedLeadId, newCommentText.trim(), adminAuthorName || 'Admin Counselor');
    setNewCommentText('');
  };

  const handleDeleteLeadClick = (id, name) => {
    if (window.confirm(`Delete lead entry for "${name}"?`)) {
      deleteLead(id);
      if (selectedLeadId === id) setSelectedLeadId(null);
    }
  };

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1.5px solid #e2e8f0' }}>
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#000648', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <HiUserGroup color="#115DFC" size={24} />
            Lead Submissions & Form Enquiries
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
            Track popup form submissions, manage status comments, and analyze student course demand.
          </p>
        </div>
      </div>

      {/* Metric Cards Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ background: '#e0e7ff', color: '#000648', padding: '12px', borderRadius: '10px', display: 'flex' }}>
            <HiUserGroup size={22} />
          </div>
          <div>
            <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#000648' }}>{totalCount}</div>
            <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 700 }}>Total Leads Received</div>
          </div>
        </div>

        <div style={{ background: '#ffffff', border: '1.5px solid #fde68a', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ background: '#fef3c7', color: '#92400e', padding: '12px', borderRadius: '10px', display: 'flex' }}>
            <HiClock size={22} />
          </div>
          <div>
            <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#92400e' }}>{pendingCount}</div>
            <div style={{ fontSize: '0.78rem', color: '#92400e', fontWeight: 700 }}>Pending Action</div>
          </div>
        </div>

        <div style={{ background: '#ffffff', border: '1.5px solid #bae6fd', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ background: '#e0f2fe', color: '#075985', padding: '12px', borderRadius: '10px', display: 'flex' }}>
            <HiChatAlt2 size={22} />
          </div>
          <div>
            <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#075985' }}>{contactedCount}</div>
            <div style={{ fontSize: '0.78rem', color: '#075985', fontWeight: 700 }}>In Discussion</div>
          </div>
        </div>

        <div style={{ background: '#ffffff', border: '1.5px solid #bbf7d0', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ background: '#dcfce7', color: '#166534', padding: '12px', borderRadius: '10px', display: 'flex' }}>
            <HiCheckCircle size={22} />
          </div>
          <div>
            <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#166534' }}>{resolvedCount}</div>
            <div style={{ fontSize: '0.78rem', color: '#166534', fontWeight: 700 }}>Resolved / Enrolled</div>
          </div>
        </div>
      </div>

      <LeadsAnalyticsCard sortedCourseAnalytics={sortedCourseAnalytics} totalCount={totalCount} />

      {/* Search & Status Filter Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {['All', 'Pending', 'Contacted', 'In Progress', 'Resolved', 'Closed'].map((st) => (
            <button
              key={st}
              type="button"
              onClick={() => setFilterStatus(st)}
              style={{
                padding: '6px 14px', borderRadius: '50px', border: '1px solid #cbd5e1',
                background: filterStatus === st ? '#000648' : '#ffffff',
                color: filterStatus === st ? '#f2b733' : '#475569',
                fontWeight: filterStatus === st ? 800 : 600,
                fontSize: '0.78rem', cursor: 'pointer',
                transition: 'background-color 0.2s ease, color 0.2s ease'
              }}
            >
              {st}
            </button>
          ))}
        </div>

        <div style={{ position: 'relative', width: '280px' }}>
          <label htmlFor="lead-search-input" style={{ display: 'none' }}>Search leads</label>
          <HiSearch size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
          <input
            id="lead-search-input"
            type="text"
            placeholder="Search leads by name, email, course..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', padding: '8px 12px 8px 36px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.82rem', outline: 'none' }}
          />
        </div>
      </div>

      <LeadsTable
        filteredLeads={filteredLeads}
        handleStatusChange={handleStatusChange}
        setSelectedLeadId={setSelectedLeadId}
        handleDeleteLeadClick={handleDeleteLeadClick}
      />

      <LeadDetailsModal
        selectedLead={selectedLead}
        setSelectedLeadId={setSelectedLeadId}
        handleStatusChange={handleStatusChange}
        handleAddCommentSubmit={handleAddCommentSubmit}
        adminAuthorName={adminAuthorName}
        setAdminAuthorName={setAdminAuthorName}
        newCommentText={newCommentText}
        setNewCommentText={setNewCommentText}
      />
    </div>
  );
}
