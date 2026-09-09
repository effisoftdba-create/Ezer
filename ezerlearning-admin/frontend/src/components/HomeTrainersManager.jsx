import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useSiteData } from '../context/SiteContext';
import ImagePickerModal from './ImagePickerModal';
import { HiPlus, HiTrash, HiPencil, HiX } from 'react-icons/hi';
import { resolveImageSrc } from '../utils/imageUtils';

const DEFAULT_TRAINER_FORM = {
  name: '',
  roleTag: 'EXPERT TRAINER',
  designation: '',
  tagline: '',
  headline: '',
  exp: '10+ Yrs Exp',
  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400',
  bio: '',
  tags: 'Industry Mentorship, Live Labs, Career Guidance',
  imagePosition: 'center center',
  position: 'center center',
  imageFit: 'cover',
  fit: 'cover',
  imageZoom: 1,
  zoom: 1
};

export default function HomeTrainersManager() {
  const {
    homeTrainers,
    addHomeTrainer,
    updateHomeTrainer,
    deleteHomeTrainer
  } = useSiteData();

  const [editingId, setEditingId] = useState(null);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [formData, setFormData] = useState(DEFAULT_TRAINER_FORM);

  const handleAddNew = () => {
    setEditingId('new');
    setFormData(DEFAULT_TRAINER_FORM);
  };

  const handleEdit = (trainer) => {
    setEditingId(trainer.id);
    setFormData({
      name: trainer.name || '',
      roleTag: trainer.roleTag || trainer.role || 'EXPERT TRAINER',
      designation: trainer.designation || [trainer.role, trainer.company].filter(Boolean).join(' @ ') || '',
      tagline: trainer.tagline || '',
      headline: trainer.headline || '',
      exp: trainer.exp || '10+ Yrs Exp',
      image: trainer.image || '',
      bio: trainer.bio || trainer.experience || '',
      tags: Array.isArray(trainer.tags) ? trainer.tags.join(', ') : (trainer.tags || ''),
      imagePosition: trainer.imagePosition || trainer.position || 'center center',
      position: trainer.imagePosition || trainer.position || 'center center',
      imageFit: trainer.imageFit || trainer.fit || 'cover',
      fit: trainer.imageFit || trainer.fit || 'cover',
      imageZoom: trainer.imageZoom || trainer.zoom || 1,
      zoom: trainer.imageZoom || trainer.zoom || 1
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!formData.name?.trim() || !formData.designation?.trim() || !formData.bio?.trim()) {
      alert('Please fill out all required fields: Trainer Name, Designation & Firm, and Bio summary.');
      return;
    }

    const tagList = (formData.tags || '')
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const payload = {
      name: formData.name.trim(),
      roleTag: formData.roleTag?.trim() || 'EXPERT TRAINER',
      designation: formData.designation.trim(),
      tagline: formData.tagline?.trim() || '',
      headline: formData.headline?.trim() || '',
      exp: formData.exp?.trim() || '',
      image: formData.image,
      bio: formData.bio.trim(),
      tags: tagList,
      imagePosition: formData.imagePosition || 'center center',
      position: formData.imagePosition || 'center center',
      imageFit: formData.imageFit || 'cover',
      fit: formData.imageFit || 'cover',
      imageZoom: formData.imageZoom || 1,
      zoom: formData.imageZoom || 1
    };

    if (editingId && editingId !== 'new') {
      if (updateHomeTrainer) updateHomeTrainer(editingId, payload);
    } else {
      if (addHomeTrainer) addHomeTrainer(payload);
    }
    setEditingId(null);
  };

  const handleDelete = (trainer) => {
    if (window.confirm(`Are you sure you want to remove ${trainer.name} from Home Page Trainers?`)) {
      if (deleteHomeTrainer) deleteHomeTrainer(trainer.id);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header Banner */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '14px', padding: '20px', flexWrap: 'wrap', gap: '14px' }}>
        <div>
          <span style={{ fontSize: '0.72rem', fontWeight: 900, color: '#000648', background: '#f2b733', padding: '3px 10px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            HOME PAGE EXCLUSIVE
          </span>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#000648', marginTop: '6px', marginBottom: '4px' }}>
            Home Page Trainers (EXPERT INDUSTRY TRAINERS)
          </h3>
          <p style={{ fontSize: '0.82rem', color: '#64748b', margin: 0 }}>
            Dedicated management area for Home Page trainers. Add, edit, or delete trainers without affecting any other courses or pages.
          </p>
        </div>

        <button
          type="button"
          onClick={handleAddNew}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '10px 20px', background: '#000648', color: '#f2b733',
            borderRadius: '10px', fontWeight: 800, border: 'none', cursor: 'pointer',
            fontSize: '0.875rem', boxShadow: '0 4px 14px rgba(0,6,72,0.2)'
          }}
        >
          <HiPlus size={18} /> Add New Trainer
        </button>
      </div>

      {/* Trainer Form Modal Portal */}
      {editingId && ReactDOM.createPortal(
        <div
          role="presentation"
          onClick={(e) => { if (e.target === e.currentTarget) setEditingId(null); }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0, 6, 72, 0.82)', backdropFilter: 'blur(6px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '16px', animation: 'fadeIn 0.2s ease'
          }}
        >
          <div style={{
            background: '#ffffff', borderRadius: '16px', width: '100%', maxWidth: '620px',
            boxShadow: '0 25px 50px -12px rgba(0, 6, 72, 0.4)', border: '1.5px solid #e2e8f0',
            overflow: 'hidden', display: 'flex', flexDirection: 'column', maxHeight: '90vh'
          }}>
            <div style={{ background: '#000648', padding: '16px 20px', color: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.7rem', fontWeight: 900, color: '#f2b733', textTransform: 'uppercase', letterSpacing: '0.08em' }}>TRAINER PROFILE EDITOR</span>
                <h3 style={{ margin: '2px 0 0 0', fontSize: '1.1rem', fontWeight: 900, color: '#ffffff' }}>
                  {editingId === 'new' ? 'Add New Home Page Trainer' : `Editing: ${formData.name || 'Trainer'}`}
                </h3>
              </div>
              <button
                type="button"
                aria-label="Close trainer editor modal"
                onClick={() => setEditingId(null)}
                style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#ffffff', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <HiX size={18} />
              </button>
            </div>

            <form onSubmit={handleSave} style={{ padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label htmlFor="trainer_name" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Trainer Full Name*</label>
                  <input id="trainer_name" type="text" value={formData.name} onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))} placeholder="e.g. Princy Julite" style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} required />
                </div>
                <div>
                  <label htmlFor="trainer_badge" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Role Badge / Tag*</label>
                  <input id="trainer_badge" type="text" value={formData.roleTag} onChange={(e) => setFormData((prev) => ({ ...prev, roleTag: e.target.value }))} placeholder="e.g. SENIOR ENGLISH TRAINER" style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} required />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '12px' }}>
                <div>
                  <label htmlFor="trainer_designation" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Designation & Firm / Institution*</label>
                  <input id="trainer_designation" type="text" value={formData.designation} onChange={(e) => setFormData((prev) => ({ ...prev, designation: e.target.value }))} placeholder="e.g. Senior English Trainer | EZER Learning Solution" style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} required />
                </div>
                <div>
                  <label htmlFor="trainer_exp" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Experience Badge</label>
                  <input id="trainer_exp" type="text" value={formData.exp} onChange={(e) => setFormData((prev) => ({ ...prev, exp: e.target.value }))} placeholder="e.g. 12+ Yrs Exp" style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label htmlFor="trainer_tagline" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Specialization Tagline</label>
                  <input id="trainer_tagline" type="text" value={formData.tagline} onChange={(e) => setFormData((prev) => ({ ...prev, tagline: e.target.value }))} placeholder="e.g. Fluency & Professional Confidence" style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} />
                </div>
                <div>
                  <label htmlFor="trainer_headline" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Headline / Area of Focus</label>
                  <input id="trainer_headline" type="text" value={formData.headline} onChange={(e) => setFormData((prev) => ({ ...prev, headline: e.target.value }))} placeholder="e.g. Mastering Spoken & Corporate Communication" style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} />
                </div>
              </div>

              <div>
                <label htmlFor="trainer_photo_url" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Photo Source / URL*</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input id="trainer_photo_url" type="text" value={formData.image} onChange={(e) => setFormData((prev) => ({ ...prev, image: e.target.value }))} style={{ flex: 1, minWidth: 0, padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} required />
                  <button type="button" onClick={() => setPickerOpen(true)} style={{ padding: '8px 14px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '6px', fontWeight: 800, fontSize: '0.78rem', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                    Choose Photo
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        imagePosition: 'center center',
                        position: 'center center',
                        imageFit: 'cover',
                        fit: 'cover',
                        imageZoom: 1,
                        zoom: 1
                      }));
                      alert('Trainer photo alignment reset to center.');
                    }}
                    title="Reset photo alignment"
                    style={{ padding: '8px 12px', background: '#f1f5f9', color: '#000648', border: '1.5px solid #cbd5e1', borderRadius: '6px', fontWeight: 700, fontSize: '0.78rem', cursor: 'pointer', whiteSpace: 'nowrap' }}
                  >
                    ↺ Reset
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="trainer_bio" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Trainer Biography*</label>
                <textarea id="trainer_bio" rows={3} value={formData.bio} onChange={(e) => setFormData((prev) => ({ ...prev, bio: e.target.value }))} placeholder="Detailed biography explaining trainer's background, mentoring experience, and teaching impact..." style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} required />
              </div>

              <div>
                <label htmlFor="trainer_tags" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Skills & Topics (Comma-separated)</label>
                <input id="trainer_tags" type="text" value={formData.tags} onChange={(e) => setFormData((prev) => ({ ...prev, tags: e.target.value }))} placeholder="e.g. Spoken English, Business English, Grammar, Fluency" style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', paddingTop: '12px', borderTop: '1px solid #e2e8f0', marginTop: '4px' }}>
                <button type="button" onClick={() => setEditingId(null)} style={{ padding: '8px 16px', background: '#f1f5f9', color: '#475569', border: '1px solid #cbd5e1', borderRadius: '6px', fontWeight: 700, fontSize: '0.84rem', cursor: 'pointer' }}>
                  Cancel
                </button>
                <button type="submit" style={{ padding: '8px 20px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '6px', fontWeight: 900, fontSize: '0.84rem', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,6,72,0.2)' }}>
                  Save Trainer Details
                </button>
              </div>

              {pickerOpen && (
                <ImagePickerModal
                  isOpen={pickerOpen}
                  onClose={() => setPickerOpen(false)}
                  currentImage={formData.image}
                  currentPosition={formData.imagePosition}
                  currentFit={formData.imageFit}
                  currentZoom={formData.imageZoom || 1}
                  onSelectImage={(url, pos, fit, zoom) => {
                    setFormData((prev) => ({
                      ...prev,
                      image: url,
                      imagePosition: pos || prev.imagePosition || 'center center',
                      imageFit: fit || prev.imageFit || 'cover',
                      imageZoom: zoom || prev.imageZoom || 1
                    }));
                    setPickerOpen(false);
                  }}
                  targetArea={`Trainer Photo (${formData.name || 'New'})`}
                  aspectRatio="Square (1:1)"
                  recommendedDimensions="400 x 400 px"
                />
              )}
            </form>
          </div>
        </div>,
        document.body
      )}

      {/* Grid of Trainer Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {(homeTrainers || []).map((trainer) => (
          <div key={trainer.id} style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '16px', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'space-between', boxShadow: '0 6px 18px rgba(0,0,0,0.04)', position: 'relative' }}>
            {/* Role Badge */}
            <span style={{ background: '#000648', color: '#f2b733', fontWeight: 900, fontSize: '0.7rem', padding: '4px 12px', borderRadius: '50px', border: '1px solid rgba(242, 183, 51, 0.4)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '14px', maxWidth: '95%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {trainer.roleTag || trainer.role || 'EXPERT TRAINER'}
            </span>

            {/* Circular Profile Avatar with Gold Ring */}
            <div style={{ width: '110px', height: '110px', borderRadius: '50%', padding: '3px', background: 'linear-gradient(135deg, #f2b733 0%, #f89b29 50%, #d97706 100%)', boxShadow: '0 6px 18px rgba(242, 183, 51, 0.35)', marginBottom: '14px', flexShrink: 0 }}>
              <img
                src={resolveImageSrc(trainer.image)}
                alt={trainer.name}
                style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', width: '100%' }}>
              <h4 style={{ margin: '0 0 2px 0', fontSize: '1.1rem', fontWeight: 900, color: '#000648' }}>{trainer.name}</h4>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#115DFC', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
                {trainer.designation || [trainer.role, trainer.company].filter(Boolean).join(' @ ') || 'Senior Corporate Trainer'}
              </div>
              {trainer.exp && (
                <span style={{ display: 'inline-block', alignSelf: 'center', background: '#fef3c7', color: '#92400e', fontSize: '0.7rem', fontWeight: 800, padding: '2px 8px', borderRadius: '50px', marginBottom: '6px' }}>
                  {trainer.exp}
                </span>
              )}
              {trainer.tagline && <div style={{ fontSize: '0.76rem', color: '#d97706', fontStyle: 'italic', fontWeight: 700, marginBottom: '6px' }}>"{trainer.tagline}"</div>}
              {trainer.headline && <div style={{ fontSize: '0.84rem', color: '#000648', fontWeight: 800, marginBottom: '8px' }}>{trainer.headline}</div>}
              {trainer.bio && <p style={{ fontSize: '0.78rem', color: '#475569', lineHeight: 1.45, margin: '0 0 12px 0' }}>{trainer.bio.length > 130 ? `${trainer.bio.slice(0, 130)}...` : trainer.bio}</p>}
            </div>

            <div style={{ display: 'flex', gap: '8px', width: '100%', paddingTop: '12px', borderTop: '1px solid #f1f5f9' }}>
              <button
                type="button"
                onClick={() => handleEdit(trainer)}
                style={{ flex: 1, padding: '8px 12px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 800, fontSize: '0.78rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}
              >
                <HiPencil size={14} /> Edit
              </button>
              <button
                type="button"
                onClick={() => handleDelete(trainer)}
                style={{ padding: '8px 14px', background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', borderRadius: '8px', fontWeight: 800, fontSize: '0.78rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}
              >
                <HiTrash size={14} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
