import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSiteData } from '../context/SiteContext';
import { defaultExecutiveLeaders, defaultHomeTrainers } from '../context/siteDefaults';
import ImagePickerModal from './ImagePickerModal';
import { HiPlus, HiTrash, HiPencil, HiX, HiAcademicCap, HiUserGroup } from 'react-icons/hi';
import { resolveImageSrc } from '../../../utils/imageUtils';

export default function ManagementAndTrainersManager({ initialScroll }) {
  const {
    executiveLeaders,
    updateExecutiveLeader,
    addExecutiveLeader,
    deleteExecutiveLeader,
    homeTrainers,
    updateHomeTrainer,
    addHomeTrainer,
    deleteHomeTrainer
  } = useSiteData();

  const trainersSectionRef = useRef(null);

  // Scroll to trainers section if requested
  useEffect(() => {
    if (initialScroll === 'trainers' && trainersSectionRef.current) {
      trainersSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [initialScroll]);

  const activeLeaders = (executiveLeaders && executiveLeaders.length > 0)
    ? executiveLeaders
    : defaultExecutiveLeaders;

  const activeTrainers = (homeTrainers && homeTrainers.length > 0)
    ? homeTrainers
    : defaultHomeTrainers;

  /* ────────────────────────────────────────────────────────────
     1. LEADERSHIP STATE & HANDLERS
     ──────────────────────────────────────────────────────────── */
  const [editingLeaderId, setEditingLeaderId] = useState(null);
  const [leaderPickerOpen, setLeaderPickerOpen] = useState(false);
  const [leaderForm, setLeaderForm] = useState({
    name: '',
    roleTag: 'FOUNDER • MANAGING DIRECTOR',
    roleName: 'Managing Director',
    tagline: 'From Problem to Solution',
    headline: 'Building Skills. Shaping Careers. Creating Futures',
    image: '',
    bio: '',
    imagePosition: 'center top',
    imageFit: 'cover',
    imageZoom: 1
  });

  const handleOpenAddLeader = () => {
    setEditingLeaderId('new');
    setLeaderForm({
      name: '',
      roleTag: 'EXECUTIVE DIRECTOR',
      roleName: 'Executive Director',
      tagline: 'From Problem to Solution',
      headline: 'Building Skills. Shaping Careers. Creating Futures',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500&h=500',
      bio: '',
      imagePosition: 'center top',
      imageFit: 'cover',
      imageZoom: 1
    });
  };

  const handleOpenEditLeader = (leader) => {
    setEditingLeaderId(leader.id || leader.roleTag);
    setLeaderForm({
      name: leader.name || '',
      roleTag: leader.roleTag || leader.roleName || 'LEADERSHIP',
      roleName: leader.roleName || leader.roleTag || 'Executive',
      tagline: leader.tagline || '',
      headline: leader.headline || '',
      image: leader.image || '',
      bio: leader.bio || '',
      imagePosition: leader.imagePosition || leader.position || 'center top',
      imageFit: leader.imageFit || leader.fit || 'cover',
      imageZoom: leader.imageZoom || leader.zoom || 1
    });
  };

  const handleSaveLeader = (e) => {
    e.preventDefault();
    if (!leaderForm.name.trim() || !leaderForm.image.trim()) {
      alert('Leadership Member Name and Photo URL are required.');
      return;
    }
    const payload = {
      ...leaderForm,
      name: leaderForm.name.trim(),
      roleTag: leaderForm.roleTag.trim(),
      roleName: leaderForm.roleName.trim(),
      tagline: leaderForm.tagline.trim(),
      headline: leaderForm.headline.trim(),
      bio: leaderForm.bio.trim()
    };

    if (editingLeaderId && editingLeaderId !== 'new') {
      if (updateExecutiveLeader) updateExecutiveLeader(editingLeaderId, payload);
    } else {
      if (addExecutiveLeader) addExecutiveLeader(payload);
    }
    setEditingLeaderId(null);
  };

  const handleDeleteLeader = (leader) => {
    if (window.confirm(`Are you sure you want to remove ${leader.name} from the Management & Leadership Team?`)) {
      if (deleteExecutiveLeader) deleteExecutiveLeader(leader.id || leader.roleTag);
    }
  };

  /* ────────────────────────────────────────────────────────────
     2. TRAINER STATE & HANDLERS
     ──────────────────────────────────────────────────────────── */
  const [editingTrainerId, setEditingTrainerId] = useState(null);
  const [trainerPickerOpen, setTrainerPickerOpen] = useState(false);
  const [trainerForm, setTrainerForm] = useState({
    name: '',
    roleTag: 'EXPERT TRAINER',
    designation: '',
    tagline: '',
    headline: '',
    exp: '',
    tags: '',
    image: '',
    bio: '',
    imagePosition: 'center center',
    imageFit: 'cover',
    imageZoom: 1
  });

  const handleOpenAddTrainer = () => {
    setEditingTrainerId('new');
    setTrainerForm({
      name: '',
      roleTag: 'SENIOR ENGLISH TRAINER',
      designation: 'Senior Technical Trainer | EZER Learning Solution',
      tagline: 'Fluency & Professional Confidence',
      headline: 'Mastering Spoken & Corporate Communication',
      exp: '10+ Yrs Exp',
      tags: 'Spoken English, Corporate Communication, Interview Prep',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400',
      bio: '',
      imagePosition: 'center center',
      imageFit: 'cover',
      imageZoom: 1
    });
  };

  const handleOpenEditTrainer = (trainer) => {
    setEditingTrainerId(trainer.id);
    const tagsString = Array.isArray(trainer.tags)
      ? trainer.tags.join(', ')
      : (trainer.tags || '');
    setTrainerForm({
      name: trainer.name || '',
      roleTag: trainer.roleTag || trainer.role || 'EXPERT TRAINER',
      designation: trainer.designation || [trainer.role, trainer.company].filter(Boolean).join(' @ ') || '',
      tagline: trainer.tagline || '',
      headline: trainer.headline || '',
      exp: trainer.exp || '',
      tags: tagsString,
      image: trainer.image || '',
      bio: trainer.bio || trainer.experience || '',
      imagePosition: trainer.imagePosition || trainer.position || 'center center',
      imageFit: trainer.imageFit || trainer.fit || 'cover',
      imageZoom: trainer.imageZoom || trainer.zoom || 1
    });
  };

  const handleSaveTrainer = (e) => {
    e.preventDefault();
    if (!trainerForm.name.trim() || !trainerForm.designation.trim() || !trainerForm.bio.trim()) {
      alert('Please fill out all required fields: Trainer Name, Designation & Firm, and Bio summary.');
      return;
    }
    const tagsArray = typeof trainerForm.tags === 'string'
      ? trainerForm.tags.split(',').map(s => s.trim()).filter(Boolean)
      : (trainerForm.tags || []);

    const payload = {
      name: trainerForm.name.trim(),
      roleTag: trainerForm.roleTag.trim() || 'EXPERT TRAINER',
      designation: trainerForm.designation.trim(),
      tagline: trainerForm.tagline.trim(),
      headline: trainerForm.headline.trim(),
      exp: trainerForm.exp.trim(),
      tags: tagsArray,
      image: trainerForm.image,
      bio: trainerForm.bio.trim(),
      imagePosition: trainerForm.imagePosition || 'center center',
      position: trainerForm.imagePosition || 'center center',
      imageFit: trainerForm.imageFit || 'cover',
      fit: trainerForm.imageFit || 'cover',
      imageZoom: trainerForm.imageZoom || 1,
      zoom: trainerForm.imageZoom || 1
    };

    if (editingTrainerId && editingTrainerId !== 'new') {
      if (updateHomeTrainer) updateHomeTrainer(editingTrainerId, payload);
    } else {
      if (addHomeTrainer) addHomeTrainer(payload);
    }
    setEditingTrainerId(null);
  };

  const handleDeleteTrainer = (trainer) => {
    if (window.confirm(`Are you sure you want to remove ${trainer.name} from Home Page Trainers?`)) {
      if (deleteHomeTrainer) deleteHomeTrainer(trainer.id);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>

      {/* ════════════════════════════════════════════════════════════
          SECTION 1: OUR MANAGEMENT & LEADERSHIP TEAM
          ════════════════════════════════════════════════════════════ */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Banner */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '16px', padding: '24px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span style={{ fontSize: '0.72rem', fontWeight: 900, color: '#000648', background: '#f2b733', padding: '4px 12px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              OUR MANAGEMENT & LEADERSHIP TEAM
            </span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#000648', marginTop: '8px', marginBottom: '4px' }}>
              Guided by Corporate Visionaries & EdTech Pioneers
            </h3>
            <p style={{ fontSize: '0.84rem', color: '#64748b', margin: 0, maxWidth: '650px' }}>
              Create, edit, or remove management & leadership profiles, circular photos, taglines, and bios for the Home page.
            </p>
          </div>

          <button
            type="button"
            onClick={handleOpenAddLeader}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '12px 22px', background: '#000648', color: '#f2b733',
              borderRadius: '10px', fontWeight: 800, border: 'none', cursor: 'pointer',
              fontSize: '0.88rem', boxShadow: '0 4px 14px rgba(0,6,72,0.2)'
            }}
          >
            <HiPlus size={18} /> Add Leadership Member
          </button>
        </div>

        {/* Leadership Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '22px' }}>
          {activeLeaders.map((leader) => (
            <div key={leader.id || leader.roleTag} style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '18px', padding: '24px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'space-between', boxShadow: '0 8px 20px rgba(0,0,0,0.04)' }}>
              {/* Role Badge */}
              <span style={{ background: '#000648', color: '#f2b733', fontWeight: 900, fontSize: '0.7rem', padding: '5px 14px', borderRadius: '50px', border: '1px solid rgba(242, 183, 51, 0.4)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '16px', maxWidth: '95%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {leader.roleTag || leader.roleName || 'LEADERSHIP'}
              </span>

              {/* Circular Avatar */}
              <div style={{ width: '115px', height: '115px', borderRadius: '50%', padding: '3.5px', background: 'linear-gradient(135deg, #f2b733 0%, #f89b29 50%, #d97706 100%)', boxShadow: '0 8px 22px rgba(242, 183, 51, 0.35)', marginBottom: '16px', flexShrink: 0 }}>
                <img
                  src={resolveImageSrc(leader.image)}
                  alt={leader.name}
                  style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', width: '100%' }}>
                {leader.tagline && <div style={{ fontSize: '0.78rem', color: '#d97706', fontStyle: 'italic', fontWeight: 700, marginBottom: '6px' }}>"{leader.tagline}"</div>}
                {leader.headline && <div style={{ fontSize: '0.86rem', color: '#000648', fontWeight: 800, marginBottom: '10px' }}>{leader.headline}</div>}
                <h4 style={{ margin: '0 0 2px 0', fontSize: '1.15rem', fontWeight: 900, color: '#000648' }}>{leader.name}</h4>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#115DFC', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '10px' }}>
                  {leader.roleName || leader.roleTag}
                </div>
                {leader.bio && <p style={{ fontSize: '0.8rem', color: '#475569', lineHeight: 1.5, margin: '0 0 16px 0' }}>{leader.bio.length > 140 ? `${leader.bio.slice(0, 140)}...` : leader.bio}</p>}
              </div>

              <div style={{ display: 'flex', gap: '8px', width: '100%', paddingTop: '14px', borderTop: '1px solid #f1f5f9' }}>
                <button
                  type="button"
                  onClick={() => handleOpenEditLeader(leader)}
                  style={{ flex: 1, padding: '9px 14px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                >
                  <HiPencil size={15} /> Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteLeader(leader)}
                  style={{ padding: '9px 14px', background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', borderRadius: '8px', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                >
                  <HiTrash size={15} /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════
          SEPARATION DIVIDER
          ════════════════════════════════════════════════════════════ */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '8px 0' }}>
        <div style={{ flex: 1, height: '2px', background: 'linear-gradient(to right, transparent, #f2b733, #000648)' }} />
        <span style={{ fontSize: '0.82rem', fontWeight: 900, color: '#000648', background: '#fef3c7', border: '1.5px solid #f2b733', padding: '6px 18px', borderRadius: '50px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          Home Page • Section 2 (Trainers Below Leadership)
        </span>
        <div style={{ flex: 1, height: '2px', background: 'linear-gradient(to left, transparent, #f2b733, #000648)' }} />
      </div>

      {/* ════════════════════════════════════════════════════════════
          SECTION 2: EXPERT INDUSTRY TRAINERS
          ════════════════════════════════════════════════════════════ */}
      <div ref={trainersSectionRef} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Banner */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '16px', padding: '24px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span style={{ fontSize: '0.72rem', fontWeight: 900, color: '#000648', background: '#f2b733', padding: '4px 12px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              EXPERT INDUSTRY TRAINERS
            </span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#000648', marginTop: '8px', marginBottom: '4px' }}>
              Learn Live From Seasoned Tech Leaders & Corporate Mentors
            </h3>
            <p style={{ fontSize: '0.84rem', color: '#64748b', margin: 0, maxWidth: '650px' }}>
              Create, edit, or remove trainer profiles, circular photos, taglines, experience, and bios for the Home page.
            </p>
          </div>

          <button
            type="button"
            onClick={handleOpenAddTrainer}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '12px 22px', background: '#000648', color: '#f2b733',
              borderRadius: '10px', fontWeight: 800, border: 'none', cursor: 'pointer',
              fontSize: '0.88rem', boxShadow: '0 4px 14px rgba(0,6,72,0.2)'
            }}
          >
            <HiPlus size={18} /> Add Trainer
          </button>
        </div>

        {/* Trainer Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '22px' }}>
          {activeTrainers.map((trainer) => {
            const tagsList = Array.isArray(trainer.tags)
              ? trainer.tags
              : (typeof trainer.tags === 'string' ? trainer.tags.split(',').map(s => s.trim()).filter(Boolean) : []);

            return (
              <div key={trainer.id || trainer.name} style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '18px', padding: '24px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'space-between', boxShadow: '0 8px 20px rgba(0,0,0,0.04)' }}>
                {/* Role Badge */}
                <span style={{ background: '#000648', color: '#f2b733', fontWeight: 900, fontSize: '0.7rem', padding: '5px 14px', borderRadius: '50px', border: '1px solid rgba(242, 183, 51, 0.4)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '16px', maxWidth: '95%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {trainer.roleTag || trainer.role || 'EXPERT TRAINER'}
                </span>

                {/* Circular Avatar */}
                <div style={{ width: '115px', height: '115px', borderRadius: '50%', padding: '3.5px', background: 'linear-gradient(135deg, #f2b733 0%, #f89b29 50%, #d97706 100%)', boxShadow: '0 8px 22px rgba(242, 183, 51, 0.35)', marginBottom: '16px', flexShrink: 0 }}>
                  <img
                    src={resolveImageSrc(trainer.image)}
                    alt={trainer.name}
                    style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', display: 'block' }}
                  />
                </div>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', width: '100%' }}>
                  <h4 style={{ margin: '0 0 2px 0', fontSize: '1.15rem', fontWeight: 900, color: '#000648' }}>{trainer.name}</h4>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#115DFC', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
                    {trainer.designation || [trainer.role, trainer.company].filter(Boolean).join(' @ ') || 'Senior Corporate Trainer'}
                  </div>
                  {trainer.tagline && <div style={{ fontSize: '0.76rem', color: '#d97706', fontStyle: 'italic', fontWeight: 700, marginBottom: '6px' }}>"{trainer.tagline}"</div>}
                  {trainer.headline && <div style={{ fontSize: '0.84rem', color: '#000648', fontWeight: 800, marginBottom: '8px' }}>{trainer.headline}</div>}
                  {trainer.exp && (
                    <span style={{ display: 'inline-block', alignSelf: 'center', background: '#fef3c7', color: '#92400e', fontSize: '0.72rem', fontWeight: 800, padding: '2px 10px', borderRadius: '50px', marginBottom: '10px' }}>
                      {trainer.exp}
                    </span>
                  )}
                  {trainer.bio && <p style={{ fontSize: '0.8rem', color: '#475569', lineHeight: 1.5, margin: '0 0 14px 0' }}>{trainer.bio.length > 130 ? `${trainer.bio.slice(0, 130)}...` : trainer.bio}</p>}

                  {tagsList.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', justifyContent: 'center', marginBottom: '14px' }}>
                      {tagsList.slice(0, 4).map((tag) => (
                        <span key={tag} style={{ fontSize: '0.68rem', fontWeight: 700, background: 'rgba(0,6,72,0.05)', color: '#000648', padding: '2px 8px', borderRadius: '50px' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', gap: '8px', width: '100%', paddingTop: '14px', borderTop: '1px solid #f1f5f9' }}>
                  <button
                    type="button"
                    onClick={() => handleOpenEditTrainer(trainer)}
                    style={{ flex: 1, padding: '9px 14px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                  >
                    <HiPencil size={15} /> Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteTrainer(trainer)}
                    style={{ padding: '9px 14px', background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', borderRadius: '8px', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                  >
                    <HiTrash size={15} /> Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════
          MODAL 1: LEADERSHIP MEMBER (ADD / EDIT)
          ════════════════════════════════════════════════════════════ */}
      {editingLeaderId && ReactDOM.createPortal(
        <div
          role="presentation"
          onClick={(e) => { if (e.target === e.currentTarget) setEditingLeaderId(null); }}
          style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0, 6, 72, 0.82)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', animation: 'fadeIn 0.2s ease' }}
        >
          <div style={{ background: '#ffffff', borderRadius: '16px', width: '100%', maxWidth: '620px', boxShadow: '0 25px 50px -12px rgba(0, 6, 72, 0.4)', border: '1.5px solid #e2e8f0', overflow: 'hidden', display: 'flex', flexDirection: 'column', maxHeight: '90vh' }}>
            <div style={{ background: '#000648', padding: '16px 22px', color: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.7rem', fontWeight: 900, color: '#f2b733', textTransform: 'uppercase', letterSpacing: '0.08em' }}>MANAGEMENT & LEADERSHIP EDITOR</span>
                <h3 style={{ margin: '2px 0 0 0', fontSize: '1.15rem', fontWeight: 900, color: '#ffffff' }}>
                  {editingLeaderId === 'new' ? 'Add New Leadership Member' : `Editing: ${leaderForm.roleTag || leaderForm.roleName} (${leaderForm.name})`}
                </h3>
              </div>
              <button
                type="button"
                aria-label="Close modal"
                onClick={() => setEditingLeaderId(null)}
                style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#ffffff', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <HiX size={18} />
              </button>
            </div>

            <form onSubmit={handleSaveLeader} style={{ padding: '22px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '130px 1fr 1fr', gap: '12px' }}>
                <div>
                  <label htmlFor="ldr_role_tag" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Role Badge / Tag*</label>
                  <input id="ldr_role_tag" type="text" value={leaderForm.roleTag} onChange={(e) => setLeaderForm((prev) => ({ ...prev, roleTag: e.target.value }))} placeholder="e.g. FOUNDER" style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} required />
                </div>
                <div>
                  <label htmlFor="ldr_role_name" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Designation / Title*</label>
                  <input id="ldr_role_name" type="text" value={leaderForm.roleName} onChange={(e) => setLeaderForm((prev) => ({ ...prev, roleName: e.target.value }))} placeholder="e.g. Managing Director" style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} required />
                </div>
                <div>
                  <label htmlFor="ldr_name" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Full Name*</label>
                  <input id="ldr_name" type="text" value={leaderForm.name} onChange={(e) => setLeaderForm((prev) => ({ ...prev, name: e.target.value }))} placeholder="e.g. Vivekkumar S" style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} required />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label htmlFor="ldr_tagline" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Editorial Tagline</label>
                  <input id="ldr_tagline" type="text" value={leaderForm.tagline} onChange={(e) => setLeaderForm((prev) => ({ ...prev, tagline: e.target.value }))} placeholder="e.g. From Problem to Solution" style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} />
                </div>
                <div>
                  <label htmlFor="ldr_headline" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Card Headline</label>
                  <input id="ldr_headline" type="text" value={leaderForm.headline} onChange={(e) => setLeaderForm((prev) => ({ ...prev, headline: e.target.value }))} placeholder="e.g. Building Skills. Shaping Careers..." style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} />
                </div>
              </div>

              <div>
                <label htmlFor="ldr_photo" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Photo Source / URL*</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input id="ldr_photo" type="text" value={leaderForm.image} onChange={(e) => setLeaderForm((prev) => ({ ...prev, image: e.target.value }))} style={{ flex: 1, minWidth: 0, padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} required />
                  <button type="button" onClick={() => setLeaderPickerOpen(true)} style={{ padding: '8px 14px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '6px', fontWeight: 800, fontSize: '0.78rem', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                    Choose Photo
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setLeaderForm((prev) => ({ ...prev, imagePosition: 'center top', imageFit: 'cover', imageZoom: 1 }));
                      alert('Photo alignment reset.');
                    }}
                    style={{ padding: '8px 12px', background: '#f1f5f9', color: '#000648', border: '1.5px solid #cbd5e1', borderRadius: '6px', fontWeight: 700, fontSize: '0.78rem', cursor: 'pointer', whiteSpace: 'nowrap' }}
                  >
                    ↺ Reset
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="ldr_bio" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Leadership Bio*</label>
                <textarea id="ldr_bio" rows={3} value={leaderForm.bio} onChange={(e) => setLeaderForm((prev) => ({ ...prev, bio: e.target.value }))} placeholder="Brief leadership bio..." style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} required />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', paddingTop: '14px', borderTop: '1px solid #e2e8f0', marginTop: '4px' }}>
                <button type="button" onClick={() => setEditingLeaderId(null)} style={{ padding: '8px 16px', background: '#f1f5f9', color: '#475569', border: '1px solid #cbd5e1', borderRadius: '6px', fontWeight: 700, fontSize: '0.84rem', cursor: 'pointer' }}>
                  Cancel
                </button>
                <button type="submit" style={{ padding: '9px 22px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '6px', fontWeight: 900, fontSize: '0.84rem', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,6,72,0.2)' }}>
                  Save Leadership Details
                </button>
              </div>

              {leaderPickerOpen && (
                <ImagePickerModal
                  isOpen={leaderPickerOpen}
                  onClose={() => setLeaderPickerOpen(false)}
                  currentImage={leaderForm.image}
                  currentPosition={leaderForm.imagePosition}
                  currentFit={leaderForm.imageFit}
                  currentZoom={leaderForm.imageZoom || 1}
                  onSelectImage={(url, pos, fit, zoom) => {
                    setLeaderForm((prev) => ({
                      ...prev,
                      image: url,
                      imagePosition: pos || 'center top',
                      imageFit: fit || 'cover',
                      imageZoom: zoom || 1
                    }));
                    setLeaderPickerOpen(false);
                  }}
                  targetArea="Leadership Photo"
                  aspectRatio="Square (1:1)"
                  recommendedDimensions="500 x 500 px"
                />
              )}
            </form>
          </div>
        </div>,
        document.body
      )}

      {/* ════════════════════════════════════════════════════════════
          MODAL 2: TRAINER (ADD / EDIT)
          ════════════════════════════════════════════════════════════ */}
      {editingTrainerId && ReactDOM.createPortal(
        <div
          role="presentation"
          onClick={(e) => { if (e.target === e.currentTarget) setEditingTrainerId(null); }}
          style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0, 6, 72, 0.82)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', animation: 'fadeIn 0.2s ease' }}
        >
          <div style={{ background: '#ffffff', borderRadius: '16px', width: '100%', maxWidth: '620px', boxShadow: '0 25px 50px -12px rgba(0, 6, 72, 0.4)', border: '1.5px solid #e2e8f0', overflow: 'hidden', display: 'flex', flexDirection: 'column', maxHeight: '90vh' }}>
            <div style={{ background: '#000648', padding: '16px 22px', color: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.7rem', fontWeight: 900, color: '#f2b733', textTransform: 'uppercase', letterSpacing: '0.08em' }}>EXPERT TRAINER EDITOR</span>
                <h3 style={{ margin: '2px 0 0 0', fontSize: '1.15rem', fontWeight: 900, color: '#ffffff' }}>
                  {editingTrainerId === 'new' ? 'Add New Expert Trainer' : `Editing: ${trainerForm.name || 'Trainer'}`}
                </h3>
              </div>
              <button
                type="button"
                aria-label="Close modal"
                onClick={() => setEditingTrainerId(null)}
                style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#ffffff', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <HiX size={18} />
              </button>
            </div>

            <form onSubmit={handleSaveTrainer} style={{ padding: '22px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label htmlFor="trn_name" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Trainer Full Name*</label>
                  <input id="trn_name" type="text" value={trainerForm.name} onChange={(e) => setTrainerForm((prev) => ({ ...prev, name: e.target.value }))} placeholder="e.g. Princy Julite" style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} required />
                </div>
                <div>
                  <label htmlFor="trn_badge" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Role Badge / Tag*</label>
                  <input id="trn_badge" type="text" value={trainerForm.roleTag} onChange={(e) => setTrainerForm((prev) => ({ ...prev, roleTag: e.target.value }))} placeholder="e.g. SENIOR ENGLISH TRAINER" style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} required />
                </div>
              </div>

              <div>
                <label htmlFor="trn_designation" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Designation & Firm / Institution*</label>
                <input id="trn_designation" type="text" value={trainerForm.designation} onChange={(e) => setTrainerForm((prev) => ({ ...prev, designation: e.target.value }))} placeholder="e.g. SENIOR ENGLISH TRAINER | EZER LEARNING SOLUTION" style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} required />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label htmlFor="trn_tagline" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Specialization Tagline</label>
                  <input id="trn_tagline" type="text" value={trainerForm.tagline} onChange={(e) => setTrainerForm((prev) => ({ ...prev, tagline: e.target.value }))} placeholder="e.g. Fluency & Professional Confidence" style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} />
                </div>
                <div>
                  <label htmlFor="trn_headline" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Headline / Focus Area</label>
                  <input id="trn_headline" type="text" value={trainerForm.headline} onChange={(e) => setTrainerForm((prev) => ({ ...prev, headline: e.target.value }))} placeholder="e.g. Mastering Spoken & Corporate Communication" style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '130px 1fr', gap: '12px' }}>
                <div>
                  <label htmlFor="trn_exp" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Experience Tag</label>
                  <input id="trn_exp" type="text" value={trainerForm.exp} onChange={(e) => setTrainerForm((prev) => ({ ...prev, exp: e.target.value }))} placeholder="e.g. 12+ Yrs Exp" style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} />
                </div>
                <div>
                  <label htmlFor="trn_tags" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Skill Pills (comma-separated)</label>
                  <input id="trn_tags" type="text" value={trainerForm.tags} onChange={(e) => setTrainerForm((prev) => ({ ...prev, tags: e.target.value }))} placeholder="e.g. Spoken English, Business English, Interview Prep" style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} />
                </div>
              </div>

              <div>
                <label htmlFor="trn_photo" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Photo Source / URL*</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input id="trn_photo" type="text" value={trainerForm.image} onChange={(e) => setTrainerForm((prev) => ({ ...prev, image: e.target.value }))} style={{ flex: 1, minWidth: 0, padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} required />
                  <button type="button" onClick={() => setTrainerPickerOpen(true)} style={{ padding: '8px 14px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '6px', fontWeight: 800, fontSize: '0.78rem', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                    Choose Photo
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setTrainerForm((prev) => ({ ...prev, imagePosition: 'center center', imageFit: 'cover', imageZoom: 1 }));
                      alert('Photo alignment reset.');
                    }}
                    style={{ padding: '8px 12px', background: '#f1f5f9', color: '#000648', border: '1.5px solid #cbd5e1', borderRadius: '6px', fontWeight: 700, fontSize: '0.78rem', cursor: 'pointer', whiteSpace: 'nowrap' }}
                  >
                    ↺ Reset
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="trn_bio" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Trainer Biography*</label>
                <textarea id="trn_bio" rows={3} value={trainerForm.bio} onChange={(e) => setTrainerForm((prev) => ({ ...prev, bio: e.target.value }))} placeholder="Detailed biography explaining trainer's background, mentoring experience, and teaching impact..." style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} required />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', paddingTop: '14px', borderTop: '1px solid #e2e8f0', marginTop: '4px' }}>
                <button type="button" onClick={() => setEditingTrainerId(null)} style={{ padding: '8px 16px', background: '#f1f5f9', color: '#475569', border: '1px solid #cbd5e1', borderRadius: '6px', fontWeight: 700, fontSize: '0.84rem', cursor: 'pointer' }}>
                  Cancel
                </button>
                <button type="submit" style={{ padding: '9px 22px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '6px', fontWeight: 900, fontSize: '0.84rem', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,6,72,0.2)' }}>
                  Save Trainer Details
                </button>
              </div>

              {trainerPickerOpen && (
                <ImagePickerModal
                  isOpen={trainerPickerOpen}
                  onClose={() => setTrainerPickerOpen(false)}
                  currentImage={trainerForm.image}
                  currentPosition={trainerForm.imagePosition}
                  currentFit={trainerForm.imageFit}
                  currentZoom={trainerForm.imageZoom || 1}
                  onSelectImage={(url, pos, fit, zoom) => {
                    setTrainerForm((prev) => ({
                      ...prev,
                      image: url,
                      imagePosition: pos || 'center center',
                      imageFit: fit || 'cover',
                      imageZoom: zoom || 1
                    }));
                    setTrainerPickerOpen(false);
                  }}
                  targetArea="Trainer Photo"
                  aspectRatio="Square (1:1)"
                  recommendedDimensions="400 x 400 px"
                />
              )}
            </form>
          </div>
        </div>,
        document.body
      )}

    </div>
  );
}
