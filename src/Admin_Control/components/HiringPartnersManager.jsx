import React, { useState, useMemo } from 'react';
import { useSiteData } from '../context/SiteContext';
import ImagePickerModal from './ImagePickerModal';
import { resolveImageSrc } from '../../utils/imageUtils';
import {
  HiPlus,
  HiTrash,
  HiPencil,
  HiPhotograph,
  HiSearch,
  HiOfficeBuilding,
  HiEye,
  HiEyeOff,
  HiX
} from 'react-icons/hi';

// Clean, 100% reliable vector SVG corporate logo presets
const CORPORATE_LOGO_PRESETS = [
  { name: 'TCS Tata', svg: '<svg viewBox="0 0 190 50" style="height:28px"><path d="M10 12 L45 12 M27.5 12 L27.5 40" stroke="#000648" stroke-width="6" stroke-linecap="square"/><text x="50" y="38" font-family="sans-serif" font-size="30" font-weight="900" fill="#000648" letter-spacing="-0.5px">TCS</text><rect x="115" y="16" width="3" height="24" fill="#f2b733"/><text x="126" y="36" font-family="sans-serif" font-size="16" font-weight="900" fill="#000648" letter-spacing="1px">TATA</text></svg>' },
  { name: 'Infosys', svg: '<svg viewBox="0 0 150 50" style="height:28px"><text x="5" y="36" font-family="sans-serif" font-size="32" font-weight="900" fill="#006699" letter-spacing="-1px">Infosys</text></svg>' },
  { name: 'Wipro', svg: '<svg viewBox="0 0 150 50" style="height:28px"><circle cx="16" cy="18" r="5" fill="#e42528"/><circle cx="28" cy="18" r="5" fill="#f2b733"/><circle cx="16" cy="30" r="5" fill="#006699"/><circle cx="28" cy="30" r="5" fill="#0dba4b"/><text x="42" y="36" font-family="sans-serif" font-size="28" font-weight="900" fill="#000648">wipro</text></svg>' },
  { name: 'HCLTech', svg: '<svg viewBox="0 0 170 50" style="height:28px"><text x="5" y="36" font-family="sans-serif" font-size="32" font-weight="900" fill="#00529b">HCL</text><text x="80" y="36" font-family="sans-serif" font-size="24" font-weight="800" fill="#f2b733">Tech</text></svg>' },
  { name: 'Zoho', svg: '<svg viewBox="0 0 160 50" style="height:28px"><rect x="4" y="10" width="28" height="28" rx="6" fill="#e42528"/><text x="11" y="32" font-family="sans-serif" font-size="20" font-weight="900" fill="#fff">Z</text><rect x="36" y="10" width="28" height="28" rx="6" fill="#006699"/><text x="42" y="32" font-family="sans-serif" font-size="20" font-weight="900" fill="#fff">O</text><rect x="68" y="10" width="28" height="28" rx="6" fill="#0dba4b"/><text x="74" y="32" font-family="sans-serif" font-size="20" font-weight="900" fill="#fff">H</text><rect x="100" y="10" width="28" height="28" rx="6" fill="#f2b733"/><text x="106" y="32" font-family="sans-serif" font-size="20" font-weight="900" fill="#000648">O</text></svg>' },
  { name: 'Capgemini', svg: '<svg viewBox="0 0 190 50" style="height:28px"><path d="M12 25 C12 15, 25 10, 25 25 C25 40, 38 35, 38 25" stroke="#0070ad" stroke-width="5" fill="none" stroke-linecap="round"/><text x="48" y="34" font-family="sans-serif" font-size="26" font-weight="900" fill="#0070ad">Capgemini</text></svg>' },
  { name: 'Accenture', svg: '<svg viewBox="0 0 180 50" style="height:28px"><text x="5" y="36" font-family="sans-serif" font-size="28" font-weight="900" fill="#000648">accenture</text><path d="M136 12 L150 22 L136 32" stroke="#a100ff" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
  { name: 'Cognizant', svg: '<svg viewBox="0 0 170 50" style="height:28px"><text x="5" y="35" font-family="sans-serif" font-size="27" font-weight="900" fill="#0033a0">Cognizant</text></svg>' },
  { name: 'Amazon', svg: '<svg viewBox="0 0 150 50" style="height:28px"><text x="5" y="32" font-family="sans-serif" font-size="28" font-weight="900" fill="#131921">amazon</text><path d="M10 38 Q 55 46, 95 35" fill="none" stroke="#ff9900" stroke-width="3.5" stroke-linecap="round"/><path d="M90 32 L98 35 L93 40" fill="none" stroke="#ff9900" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
  { name: 'Google Cloud', svg: '<svg viewBox="0 0 150 50" style="height:28px"><text x="5" y="36" font-family="sans-serif" font-size="32" font-weight="900" fill="#4285F4">G</text><text x="34" y="36" font-family="sans-serif" font-size="32" font-weight="900" fill="#EA4335">o</text><text x="56" y="36" font-family="sans-serif" font-size="32" font-weight="900" fill="#FBBC05">o</text><text x="78" y="36" font-family="sans-serif" font-size="32" font-weight="900" fill="#4285F4">g</text><text x="100" y="36" font-family="sans-serif" font-size="32" font-weight="900" fill="#34A853">l</text><text x="110" y="36" font-family="sans-serif" font-size="32" font-weight="900" fill="#EA4335">e</text></svg>' },
  { name: 'Microsoft', svg: '<svg viewBox="0 0 170 50" style="height:28px"><rect x="5" y="10" width="13" height="13" fill="#f25022"/><rect x="21" y="10" width="13" height="13" fill="#7fba00"/><rect x="5" y="26" width="13" height="13" fill="#00a4ef"/><rect x="21" y="26" width="13" height="13" fill="#ffb900"/><text x="42" y="34" font-family="sans-serif" font-size="26" font-weight="800" fill="#475569">Microsoft</text></svg>' },
  { name: 'IBM', svg: '<svg viewBox="0 0 130 50" style="height:28px"><text x="5" y="36" font-family="monospace" font-size="36" font-weight="900" fill="#052FAD" letter-spacing="2px">IBM</text></svg>' },
  { name: 'Freshworks', svg: '<svg viewBox="0 0 180 50" style="height:28px"><circle cx="18" cy="25" r="12" fill="#ff5a5f"/><text x="36" y="34" font-family="sans-serif" font-size="24" font-weight="900" fill="#000648">freshworks</text></svg>' },
  { name: 'L&T Services', svg: '<svg viewBox="0 0 160 50" style="height:28px"><text x="5" y="36" font-family="sans-serif" font-size="32" font-weight="900" fill="#0033a0">L&T</text><text x="70" y="36" font-family="sans-serif" font-size="22" font-weight="800" fill="#f2b733">Tech</text></svg>' },
  { name: 'Tech Mahindra', svg: '<svg viewBox="0 0 210 50" style="height:28px"><text x="5" y="36" font-family="sans-serif" font-size="26" font-weight="900" fill="#e42528">Tech</text><text x="75" y="36" font-family="sans-serif" font-size="26" font-weight="900" fill="#000648">Mahindra</text></svg>' }
];

export default function HiringPartnersManager() {
  const { hiringPartners, addHiringPartner, updateHiringPartner, deleteHiringPartner } = useSiteData();
  const safePartners = Array.isArray(hiringPartners) ? hiringPartners : [];

  const [searchTerm, setSearchTerm] = useState('');
  const [rowFilter, setRowFilter] = useState('All');
  const [failedImages, setFailedImages] = useState({});

  // Form State for Add / Edit Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    row: 'Row 1',
    status: 'Active',
    imagePosition: 'center center',
    imageFit: 'contain',
    imageZoom: 1
  });

  const [isImagePickerOpen, setIsImagePickerOpen] = useState(false);

  // Statistics
  const activeCount = safePartners.filter((p) => p.status === 'Active').length;
  const row1Count = safePartners.filter((p) => p.row === 'Row 1').length;
  const row2Count = safePartners.filter((p) => p.row === 'Row 2').length;
  const row3Count = safePartners.filter((p) => p.row === 'Row 3').length;

  const filteredPartners = useMemo(() => {
    return safePartners.filter((p) => {
      const matchSearch = (p.name || '').toLowerCase().includes(searchTerm.toLowerCase());
      const matchRow = rowFilter === 'All' || p.row === rowFilter;
      return matchSearch && matchRow;
    });
  }, [safePartners, searchTerm, rowFilter]);

  const handleOpenAddModal = () => {
    setEditingId(null);
    setFormData({
      name: '',
      image: '',
      row: 'Row 1',
      status: 'Active',
      imagePosition: 'center center',
      imageFit: 'contain',
      imageZoom: 1
    });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (partner) => {
    setEditingId(partner.id);
    setFormData({
      name: partner.name || '',
      image: partner.image || '',
      row: partner.row || 'Row 1',
      status: partner.status || 'Active',
      imagePosition: partner.imagePosition || 'center center',
      imageFit: partner.imageFit || 'contain',
      imageZoom: partner.imageZoom || 1
    });
    setIsModalOpen(true);
  };

  const handleSelectPreset = (preset) => {
    setFormData((prev) => ({
      ...prev,
      name: prev.name || preset.name,
      image: preset.svg
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('Company Name is required.');
      return;
    }
    if (editingId) {
      updateHiringPartner(editingId, formData);
    } else {
      addHiringPartner(formData);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to remove "${name}" from Hiring Partners?`)) {
      deleteHiringPartner(id);
    }
  };

  const handleToggleStatus = (partner) => {
    const nextStatus = partner.status === 'Active' ? 'Hidden' : 'Active';
    updateHiringPartner(partner.id, { status: nextStatus });
  };

  const handleImageError = (idKey) => {
    setFailedImages((prev) => ({ ...prev, [idKey]: true }));
  };

  return (
    <div>
      {/* Header Bar */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: '24px', paddingBottom: '16px', borderBottom: '1.5px solid #e2e8f0',
        flexWrap: 'wrap', gap: '12px'
      }}>
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#000648', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <HiOfficeBuilding color="#115DFC" size={24} /> Corporate Hiring Partners Manager
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
            Add, edit, crop, and manage hiring partner logos in the live homepage marquee ticker.
          </p>
        </div>

        <button
          type="button"
          onClick={handleOpenAddModal}
          style={{
            padding: '10px 18px', background: '#000648', color: '#f2b733',
            border: 'none', borderRadius: '10px', fontWeight: 800, fontSize: '0.85rem',
            cursor: 'pointer', boxShadow: '0 4px 14px rgba(0,6,72,0.2)', display: 'flex', alignItems: 'center', gap: '6px'
          }}
        >
          <HiPlus size={16} /> Add New Company
        </button>
      </div>

      {/* Stats Bar */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '14px', marginBottom: '24px' }}>
        <div style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '12px', padding: '12px 14px' }}>
          <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Total Partners</div>
          <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#000648', marginTop: '2px' }}>{safePartners.length}</div>
        </div>
        <div style={{ background: '#f0fdf4', border: '1.5px solid #bbf7d0', borderRadius: '12px', padding: '12px 14px' }}>
          <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#166534', textTransform: 'uppercase' }}>Active on Site</div>
          <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#15803d', marginTop: '2px' }}>{activeCount}</div>
        </div>
        <div style={{ background: '#eff6ff', border: '1.5px solid #bfdbfe', borderRadius: '12px', padding: '12px 14px' }}>
          <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#1e40af', textTransform: 'uppercase' }}>Row 1 (Top)</div>
          <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#1d4ed8', marginTop: '2px' }}>{row1Count}</div>
        </div>
        <div style={{ background: '#faf5ff', border: '1.5px solid #e9d5ff', borderRadius: '12px', padding: '12px 14px' }}>
          <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#6b21a8', textTransform: 'uppercase' }}>Row 2 (Middle)</div>
          <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#7e22ce', marginTop: '2px' }}>{row2Count}</div>
        </div>
        <div style={{ background: '#fff7ed', border: '1.5px solid #fed7aa', borderRadius: '12px', padding: '12px 14px' }}>
          <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#9a3412', textTransform: 'uppercase' }}>Row 3 (Bottom)</div>
          <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#c2410c', marginTop: '2px' }}>{row3Count}</div>
        </div>
      </div>

      {/* Search & Row Filter Bar */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ flex: 1, minWidth: '220px', position: 'relative' }}>
          <HiSearch size={16} color="#94a3b8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder="Search company by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', padding: '9px 12px 9px 36px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
          />
        </div>

        {/* Row Selector Tabs */}
        <div style={{ display: 'flex', background: '#e2e8f0', borderRadius: '8px', padding: '3px', gap: '3px' }}>
          {['All', 'Row 1', 'Row 2', 'Row 3'].map((row) => (
            <button
              key={row}
              type="button"
              onClick={() => setRowFilter(row)}
              style={{
                padding: '6px 12px', borderRadius: '6px', border: 'none',
                background: rowFilter === row ? '#000648' : 'transparent',
                color: rowFilter === row ? '#f2b733' : '#475569',
                fontWeight: rowFilter === row ? 800 : 600,
                fontSize: '0.75rem', cursor: 'pointer'
              }}
            >
              {row}
            </button>
          ))}
        </div>
      </div>

      {/* Partners Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
        {filteredPartners.map((partner) => {
          const isSvgStr = typeof partner.image === 'string' && partner.image.startsWith('<svg');
          const isFailed = failedImages[partner.id];

          return (
            <div
              key={partner.id}
              style={{
                background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '14px',
                padding: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.02)', display: 'flex',
                flexDirection: 'column', justifyContent: 'space-between', gap: '12px',
                opacity: partner.status === 'Hidden' ? 0.65 : 1
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#115DFC', background: '#eff6ff', padding: '2px 8px', borderRadius: '6px' }}>
                    {partner.row || 'Row 1'}
                  </span>

                  <button
                    type="button"
                    onClick={() => handleToggleStatus(partner)}
                    title={partner.status === 'Active' ? 'Hide logo on site' : 'Show logo on site'}
                    style={{
                      padding: '3px 8px', borderRadius: '6px', border: '1px solid #cbd5e1',
                      background: partner.status === 'Active' ? '#f0fdf4' : '#fef2f2',
                      color: partner.status === 'Active' ? '#166534' : '#dc2626',
                      fontSize: '0.7rem', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px'
                    }}
                  >
                    {partner.status === 'Active' ? <HiEye size={12} /> : <HiEyeOff size={12} />}
                    {partner.status || 'Active'}
                  </button>
                </div>

                {/* Live Pill Logo Card Matching Live Website (180:48 ratio) */}
                <div
                  style={{
                    height: '52px',
                    width: '100%',
                    background: '#ffffff',
                    borderRadius: '12px',
                    border: '1.5px solid #cbd5e1',
                    boxShadow: '0 2px 8px rgba(0, 6, 72, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '6px 14px',
                    marginBottom: '10px',
                    overflow: 'hidden'
                  }}
                >
                  {isSvgStr ? (
                    <div dangerouslySetInnerHTML={{ __html: partner.image }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
                  ) : isFailed || !partner.image ? (
                    <div style={{ fontWeight: 900, color: '#000648', fontSize: '0.95rem', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ color: '#115DFC', fontSize: '1.1rem' }}>●</span> {partner.name}
                    </div>
                  ) : (
                    <img
                      src={resolveImageSrc(partner.image)}
                      alt={partner.name}
                      onError={() => handleImageError(partner.id)}
                      style={{
                        maxHeight: '32px',
                        maxWidth: '100%',
                        objectFit: partner.imageFit || 'contain',
                        objectPosition: partner.imagePosition || 'center center',
                        transform: partner.imageZoom ? `scale(${partner.imageZoom})` : 'none',
                        transformOrigin: partner.imagePosition || 'center center'
                      }}
                    />
                  )}
                </div>

                <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#000648' }}>
                  {partner.name}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '8px', borderTop: '1px solid #f1f5f9', paddingTop: '10px' }}>
                <button
                  type="button"
                  onClick={() => handleOpenEditModal(partner)}
                  style={{
                    flex: 1, padding: '6px 10px', borderRadius: '6px', border: '1px solid #cbd5e1',
                    background: '#ffffff', color: '#000648', fontWeight: 800, fontSize: '0.75rem',
                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px'
                  }}
                >
                  <HiPencil size={14} /> Edit Logo & Info
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(partner.id, partner.name)}
                  style={{
                    padding: '6px 10px', borderRadius: '6px', border: '1px solid #fecaca',
                    background: '#fef2f2', color: '#dc2626', fontWeight: 800, fontSize: '0.75rem',
                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}
                >
                  <HiTrash size={14} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Clean Compact Centered Edit/Add Modal */}
      {isModalOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 10000, background: 'rgba(0, 6, 72, 0.75)',
          backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '16px'
        }}>
          <div style={{
            background: '#ffffff', borderRadius: '20px', maxWidth: '520px', width: '100%',
            boxShadow: '0 25px 50px -12px rgba(0, 6, 72, 0.35)', border: '2px solid #000648',
            overflow: 'hidden', display: 'flex', flexDirection: 'column'
          }}>
            {/* Modal Header */}
            <div style={{
              padding: '16px 20px', background: '#000648', color: '#ffffff',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center'
            }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f2b733', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <HiOfficeBuilding size={18} /> {editingId ? 'Edit Partner Logo' : 'Add Corporate Partner'}
              </h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '4px' }}
              >
                <HiX size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              
              {/* Company Name */}
              <div>
                <label htmlFor="modal_company_name" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                  Company Name*
                </label>
                <input
                  id="modal_company_name"
                  type="text"
                  placeholder="e.g. TCS, Infosys, Zoho, Nvidia..."
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
                  required
                />
              </div>

              {/* Quick Select Presets Grid */}
              <div>
                <span style={{ fontSize: '0.73rem', fontWeight: 800, color: '#115DFC', display: 'block', marginBottom: '6px' }}>
                  ⚡ Quick Vector Logo Presets (1-Click Fill):
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', maxHeight: '90px', overflowY: 'auto', padding: '6px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  {CORPORATE_LOGO_PRESETS.map((preset) => (
                    <button
                      key={preset.name}
                      type="button"
                      onClick={() => handleSelectPreset(preset)}
                      style={{
                        padding: '4px 8px', borderRadius: '6px', border: '1px solid #cbd5e1',
                        background: '#ffffff', color: '#000648', fontSize: '0.7rem', fontWeight: 800,
                        cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '3px'
                      }}
                    >
                      {preset.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Logo URL Input & Image Picker */}
              <div>
                <label htmlFor="modal_company_logo" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                  Company Logo Image Source or SVG*
                </label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input
                    id="modal_company_logo"
                    type="text"
                    placeholder="https://... image link or SVG code"
                    value={formData.image}
                    onChange={(e) => setFormData((prev) => ({ ...prev, image: e.target.value }))}
                    style={{ flex: 1, padding: '9px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.82rem' }}
                  />
                  <button
                    type="button"
                    onClick={() => setIsImagePickerOpen(true)}
                    style={{
                      padding: '9px 12px', background: '#000648', color: '#f2b733',
                      border: 'none', borderRadius: '8px', fontWeight: 800, fontSize: '0.75rem', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0
                    }}
                  >
                    <HiPhotograph size={14} /> Crop & Align
                  </button>
                </div>
              </div>

              {/* Live Pill Preview inside Modal */}
              <div>
                <span style={{ fontSize: '0.73rem', fontWeight: 800, color: '#64748b', display: 'block', marginBottom: '4px' }}>
                  Homepage Pill Badge Live Preview (Exact 180:48 ratio):
                </span>
                <div style={{
                  height: '48px', width: '100%', background: '#ffffff', borderRadius: '12px',
                  border: '1.5px solid #cbd5e1', boxShadow: '0 2px 8px rgba(0, 6, 72, 0.06)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px 18px', overflow: 'hidden'
                }}>
                  {formData.image.startsWith('<svg') ? (
                    <div dangerouslySetInnerHTML={{ __html: formData.image }} />
                  ) : (
                    <img
                      src={resolveImageSrc(formData.image || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe')}
                      alt="Logo preview"
                      onError={(e) => { e.target.style.display = 'none'; }}
                      style={{
                        maxHeight: '30px', maxWidth: '100%',
                        objectFit: formData.imageFit || 'contain',
                        objectPosition: formData.imagePosition || 'center center',
                        transform: formData.imageZoom ? `scale(${formData.imageZoom})` : 'none',
                        transformOrigin: formData.imagePosition || 'center center'
                      }}
                    />
                  )}
                </div>
              </div>

              {/* Marquee Row & Active Status */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label htmlFor="modal_row_select" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                    Marquee Row Ticker*
                  </label>
                  <select
                    id="modal_row_select"
                    value={formData.row}
                    onChange={(e) => setFormData((prev) => ({ ...prev, row: e.target.value }))}
                    style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.82rem' }}
                  >
                    <option value="Row 1">Row 1 (Top Left Scroll)</option>
                    <option value="Row 2">Row 2 (Middle Right Scroll)</option>
                    <option value="Row 3">Row 3 (Bottom Left Scroll)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="modal_status_select" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                    Display Status*
                  </label>
                  <select
                    id="modal_status_select"
                    value={formData.status}
                    onChange={(e) => setFormData((prev) => ({ ...prev, status: e.target.value }))}
                    style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.82rem' }}
                  >
                    <option value="Active">Active (Visible on Site)</option>
                    <option value="Hidden">Hidden (Draft)</option>
                  </select>
                </div>
              </div>

              {/* Modal Actions */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #f1f5f9' }}>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  style={{
                    padding: '8px 16px', background: '#ffffff', border: '1.5px solid #cbd5e1',
                    borderRadius: '8px', color: '#475569', fontWeight: 700, fontSize: '0.82rem', cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    padding: '8px 20px', background: '#000648', color: '#f2b733',
                    border: 'none', borderRadius: '8px', fontWeight: 800, fontSize: '0.82rem', cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0,6,72,0.2)'
                  }}
                >
                  {editingId ? 'Save Changes' : 'Add Corporate Partner'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Integrated Image Picker Modal locked to Company Logo Pill (180:48) ratio */}
      {isImagePickerOpen && (
        <ImagePickerModal
          isOpen={isImagePickerOpen}
          onClose={() => setIsImagePickerOpen(false)}
          currentImage={formData.image}
          currentPosition={formData.imagePosition}
          currentFit={formData.imageFit}
          currentZoom={formData.imageZoom || 1}
          onSelectImage={(url, pos, fit, zoom) => {
            setFormData((prev) => ({
              ...prev,
              image: url,
              imagePosition: pos || 'center center',
              imageFit: fit || 'contain',
              imageZoom: zoom || prev.imageZoom || 1
            }));
            setIsImagePickerOpen(false);
          }}
          targetArea={`Company Logo Pill (${formData.name || 'New Logo'})`}
          aspectRatio="Company Logo Pill (180:48)"
          recommendedDimensions="180 x 48 px"
        />
      )}
    </div>
  );
}
