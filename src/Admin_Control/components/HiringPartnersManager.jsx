import React, { useState, useMemo } from 'react';
import { useSiteData } from '../context/SiteContext';
import ImagePickerModal from './ImagePickerModal';
import { resolveImageSrc } from '../../utils/imageUtils';
import {
  HiPlus,
  HiTrash,
  HiPencil,
  HiCheck,
  HiPhotograph,
  HiSparkles,
  HiSearch,
  HiFilter,
  HiExternalLink,
  HiOfficeBuilding,
  HiEye,
  HiEyeOff
} from 'react-icons/hi';

export default function HiringPartnersManager() {
  const { hiringPartners, addHiringPartner, updateHiringPartner, deleteHiringPartner } = useSiteData();
  const safePartners = Array.isArray(hiringPartners) ? hiringPartners : [];

  const [searchTerm, setSearchTerm] = useState('');
  const [rowFilter, setRowFilter] = useState('All');

  // Form State for Add / Edit Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    row: 'Row 1',
    status: 'Active',
    website: '',
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
      website: '',
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
      website: partner.website || '',
      imagePosition: partner.imagePosition || 'center center',
      imageFit: partner.imageFit || 'contain',
      imageZoom: partner.imageZoom || 1
    });
    setIsModalOpen(true);
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
            <HiOfficeBuilding color="#115DFC" size={24} /> Corporate Hiring Partners & Logos Manager
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
            Add, edit, crop, and manage tech corporate hiring partners displayed in the smooth homepage marquee ticker.
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
          <HiPlus size={16} /> Add New Company Tie-up
        </button>
      </div>

      {/* Stats Cards Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px', marginBottom: '24px' }}>
        <div style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '12px', padding: '14px 16px' }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Total Partners</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#000648', marginTop: '2px' }}>{safePartners.length}</div>
        </div>
        <div style={{ background: '#f0fdf4', border: '1.5px solid #bbf7d0', borderRadius: '12px', padding: '14px 16px' }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#166534', textTransform: 'uppercase' }}>Active on Site</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#15803d', marginTop: '2px' }}>{activeCount}</div>
        </div>
        <div style={{ background: '#eff6ff', border: '1.5px solid #bfdbfe', borderRadius: '12px', padding: '14px 16px' }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#1e40af', textTransform: 'uppercase' }}>Row 1 (Top)</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#1d4ed8', marginTop: '2px' }}>{row1Count}</div>
        </div>
        <div style={{ background: '#faf5ff', border: '1.5px solid #e9d5ff', borderRadius: '12px', padding: '14px 16px' }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#6b21a8', textTransform: 'uppercase' }}>Row 2 (Middle)</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#7e22ce', marginTop: '2px' }}>{row2Count}</div>
        </div>
        <div style={{ background: '#fff7ed', border: '1.5px solid #fed7aa', borderRadius: '12px', padding: '14px 16px' }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#9a3412', textTransform: 'uppercase' }}>Row 3 (Bottom)</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#c2410c', marginTop: '2px' }}>{row3Count}</div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ flex: 1, minWidth: '240px', position: 'relative' }}>
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

      {/* Corporate Partners Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
        {filteredPartners.map((partner) => {
          const isSvgStr = typeof partner.image === 'string' && partner.image.startsWith('<svg');
          return (
            <div
              key={partner.id}
              style={{
                background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '14px',
                padding: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.02)', display: 'flex',
                flexDirection: 'column', justifyContent: 'space-between', gap: '14px',
                opacity: partner.status === 'Hidden' ? 0.65 : 1
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#115DFC', background: '#eff6ff', padding: '2px 8px', borderRadius: '6px' }}>
                    {partner.row || 'Row 1'}
                  </span>

                  <button
                    type="button"
                    onClick={() => handleToggleStatus(partner)}
                    title={partner.status === 'Active' ? 'Hide company logo from homepage' : 'Show company logo on homepage'}
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

                {/* Live Pill Logo Badge Display Matching Live Site */}
                <div
                  style={{
                    height: '52px',
                    width: '100%',
                    background: '#f8fafc',
                    borderRadius: '12px',
                    border: '1.5px solid #cbd5e1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '8px 14px',
                    marginBottom: '12px',
                    overflow: 'hidden'
                  }}
                >
                  {isSvgStr ? (
                    <div dangerouslySetInnerHTML={{ __html: partner.image }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
                  ) : (
                    <img
                      src={resolveImageSrc(partner.image || 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg')}
                      alt={partner.name}
                      style={{
                        maxHeight: '34px',
                        maxWidth: '100%',
                        objectFit: partner.imageFit || 'contain',
                        objectPosition: partner.imagePosition || 'center center',
                        transform: partner.imageZoom ? `scale(${partner.imageZoom})` : 'none',
                        transformOrigin: partner.imagePosition || 'center center'
                      }}
                    />
                  )}
                </div>

                <div style={{ fontWeight: 800, fontSize: '0.92rem', color: '#000648' }}>
                  {partner.name}
                </div>

                {partner.website && (
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.72rem', color: '#115DFC', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '3px', marginTop: '4px' }}
                  >
                    {partner.website} <HiExternalLink size={12} />
                  </a>
                )}
              </div>

              {/* Card Action Buttons */}
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

      {/* Add / Edit Company Tie-up Modal */}
      {isModalOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,6,72,0.6)',
          backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px'
        }}>
          <div style={{
            background: '#ffffff', borderRadius: '16px', maxWidth: '520px', width: '100%',
            padding: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', border: '2px solid #000648'
          }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#000648', marginTop: 0, marginBottom: '16px' }}>
              {editingId ? 'Edit Company Tie-up Logo' : 'Add New Corporate Hiring Partner'}
            </h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label htmlFor="company_name_input" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                  Company Name*
                </label>
                <input
                  id="company_name_input"
                  type="text"
                  placeholder="e.g. Nvidia, TCS, Infosys, Wipro..."
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                  required
                />
              </div>

              {/* Logo Source & Image Picker Button */}
              <div>
                <label htmlFor="company_logo_input" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                  Company Logo URL or Image Source*
                </label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input
                    id="company_logo_input"
                    type="text"
                    placeholder="https://... image link or upload"
                    value={formData.image}
                    onChange={(e) => setFormData((prev) => ({ ...prev, image: e.target.value }))}
                    style={{ flex: 1, padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                  />
                  <button
                    type="button"
                    onClick={() => setIsImagePickerOpen(true)}
                    style={{
                      padding: '9px 14px', background: '#000648', color: '#f2b733',
                      border: 'none', borderRadius: '8px', fontWeight: 800, fontSize: '0.78rem', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', gap: '4px'
                    }}
                  >
                    <HiPhotograph size={14} /> Choose Logo & Align
                  </button>
                </div>
              </div>

              {/* Live Preview Badge Pill in Modal */}
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', display: 'block', marginBottom: '6px' }}>
                  Logo Marquee Pill Live Preview:
                </span>
                <div style={{
                  height: '48px', width: '100%', background: '#ffffff', borderRadius: '12px',
                  border: '1.5px solid #cbd5e1', boxShadow: '0 2px 8px rgba(0,6,72,0.06)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px 18px', overflow: 'hidden'
                }}>
                  {formData.image.startsWith('<svg') ? (
                    <div dangerouslySetInnerHTML={{ __html: formData.image }} />
                  ) : (
                    <img
                      src={resolveImageSrc(formData.image || 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg')}
                      alt="Logo preview"
                      style={{
                        maxHeight: '32px', maxWidth: '100%',
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
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label htmlFor="company_row_select" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                    Marquee Row Ticker*
                  </label>
                  <select
                    id="company_row_select"
                    value={formData.row}
                    onChange={(e) => setFormData((prev) => ({ ...prev, row: e.target.value }))}
                    style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                  >
                    <option value="Row 1">Row 1 (Top Left Scroll)</option>
                    <option value="Row 2">Row 2 (Middle Right Scroll)</option>
                    <option value="Row 3">Row 3 (Bottom Left Scroll)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="company_status_select" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                    Display Status*
                  </label>
                  <select
                    id="company_status_select"
                    value={formData.status}
                    onChange={(e) => setFormData((prev) => ({ ...prev, status: e.target.value }))}
                    style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                  >
                    <option value="Active">Active (Visible on Homepage)</option>
                    <option value="Hidden">Hidden (Draft)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="company_website_input" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                  Company Official Website URL (Optional)
                </label>
                <input
                  id="company_website_input"
                  type="url"
                  placeholder="https://www.company.com"
                  value={formData.website}
                  onChange={(e) => setFormData((prev) => ({ ...prev, website: e.target.value }))}
                  style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                />
              </div>

              {/* Action Bar */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '12px' }}>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  style={{ padding: '8px 16px', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '8px', color: '#64748b', fontWeight: 700, cursor: 'pointer' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{ padding: '8px 20px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer' }}
                >
                  {editingId ? 'Save Changes' : 'Add Corporate Partner'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Integrated Image Picker Modal for Corporate Logos */}
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
          targetArea={`Company Logo (${formData.name || 'New Logo'})`}
          aspectRatio="Standard (4:3)"
          recommendedDimensions="400 x 150 px"
        />
      )}
    </div>
  );
}
