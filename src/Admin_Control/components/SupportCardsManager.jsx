import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useSiteData } from '../context/SiteContext';
import ImagePickerModal from './ImagePickerModal';
import { HiPlus, HiTrash, HiPencil, HiPhotograph, HiCheck, HiX } from 'react-icons/hi';
import { resolveImageSrc } from '../../utils/imageUtils';

const DEFAULT_CARD_STATE = {
  title: 'Pre-Employment Support',
  subtitle: 'Career Readiness Phase',
  desc: 'Comprehensive guidance before you start applying — build a high-impact profile that catches recruiter attention.',
  bullets: 'Resume & LinkedIn profile optimization\n1-on-1 technical mock interviews\nGitHub portfolio & capstone review',
  image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600&h=400',
  position: 'center center',
  fit: 'cover'
};

export default function SupportCardsManager() {
  const { supportCards, addSupportCard, updateSupportCard, deleteSupportCard } = useSiteData();

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [isImagePickerOpen, setIsImagePickerOpen] = useState(false);

  const [formData, setFormData] = useState(DEFAULT_CARD_STATE);

  const handleOpenAdd = () => {
    setEditingId(null);
    setFormData(DEFAULT_CARD_STATE);
    setIsEditing(true);
  };

  const handleOpenEdit = (card) => {
    setEditingId(card.id || card.title);
    setFormData({
      title: card.title || '',
      subtitle: card.subtitle || '',
      desc: card.desc || '',
      bullets: Array.isArray(card.bullets) ? card.bullets.join('\n') : card.bullets || '',
      image: card.image || '',
      position: card.position || 'center center',
      fit: card.fit || 'cover'
    });
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!formData.title) {
      alert('Card Title is required.');
      return;
    }

    const bulletList = formData.bullets
      .split('\n')
      .map((b) => b.trim())
      .filter(Boolean);

    const payload = {
      title: formData.title,
      subtitle: formData.subtitle,
      desc: formData.desc,
      bullets: bulletList,
      image: formData.image,
      position: formData.position || 'center center',
      fit: formData.fit || 'cover'
    };

    if (editingId) {
      updateSupportCard(editingId, payload);
    } else {
      addSupportCard(payload);
    }

    setIsEditing(false);
  };

  const handleDelete = (id, title) => {
    if (window.confirm(`Are you sure you want to remove ${title}?`)) {
      deleteSupportCard(id || title);
    }
  };

  return (
    <div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: '24px', paddingBottom: '16px', borderBottom: '1.5px solid #e2e8f0'
      }}>
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#000648', margin: 0 }}>
            "Why EZER" Support & Outcome Feature Cards
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
            Edit the Pre-Employment, Post-Employment, 3-Year Community, and Practical Labs feature cards with custom photos, titles, badges, and bullet points.
          </p>
        </div>

        <button
          type="button"
          onClick={handleOpenAdd}
          aria-label="Add new support feature card"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '10px 20px', background: '#000648', color: '#f2b733',
            border: 'none', borderRadius: '10px', fontWeight: 800, fontSize: '0.875rem',
            cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,6,72,0.15)'
          }}
        >
          <HiPlus size={18} /> Add Support Card
        </button>
      </div>

      {/* Editor Modal Portal */}
      {isEditing && ReactDOM.createPortal(
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsEditing(false);
          }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0, 6, 72, 0.82)', backdropFilter: 'blur(6px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '16px', animation: 'fadeIn 0.2s ease'
          }}
        >
          <div
            style={{
              background: '#ffffff', borderRadius: '16px', width: '100%', maxWidth: '580px',
              boxShadow: '0 25px 50px -12px rgba(0, 6, 72, 0.4)', border: '1.5px solid #e2e8f0',
              overflow: 'hidden', animation: 'modalPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              display: 'flex', flexDirection: 'column', maxHeight: '90vh'
            }}
          >
            <div style={{ background: '#000648', padding: '16px 20px', color: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.7rem', fontWeight: 900, color: '#f2b733', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  SUPPORT CARD EDITOR
                </span>
                <h3 style={{ margin: '2px 0 0 0', fontSize: '1.15rem', fontWeight: 900, color: '#ffffff' }}>
                  {editingId ? 'Edit Support Feature Card' : 'Add New Support Feature Card'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                aria-label="Close modal button"
                style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#ffffff', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <HiX size={18} />
              </button>
            </div>

            <form onSubmit={handleSave} style={{ padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label htmlFor="support_card_image_input" style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#334155', marginBottom: '4px' }}>
                  Card Banner Photo Source / URL
                </label>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  {formData.image && (
                    <img
                      src={resolveImageSrc(formData.image)}
                      alt="Card preview"
                      style={{ width: '38px', height: '38px', borderRadius: '8px', objectFit: 'cover', border: '1px solid #cbd5e1', flexShrink: 0 }}
                    />
                  )}
                  <input
                    id="support_card_image_input"
                    type="text"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="Image path or URL"
                    style={{ flex: 1, minWidth: 0, padding: '9px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setIsImagePickerOpen(true)}
                    aria-label="Choose photo"
                    style={{ padding: '9px 14px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.78rem', whiteSpace: 'nowrap', flexShrink: 0 }}
                  >
                    <HiPhotograph size={15} /> Choose Photo
                  </button>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label htmlFor="support_card_title" style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#334155', marginBottom: '4px' }}>
                    Card Title *
                  </label>
                  <input
                    id="support_card_title"
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g. Pre-Employment Support"
                    style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="support_card_subtitle" style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#334155', marginBottom: '4px' }}>
                    Subtitle / Badge Text
                  </label>
                  <input
                    id="support_card_subtitle"
                    type="text"
                    value={formData.subtitle}
                    onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                    placeholder="e.g. Career Readiness Phase"
                    style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="support_card_desc" style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#334155', marginBottom: '4px' }}>
                  Description Text *
                </label>
                <textarea
                  id="support_card_desc"
                  rows={2}
                  value={formData.desc}
                  onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                  placeholder="Detailed explanation..."
                  style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
                  required
                />
              </div>

              <div>
                <label htmlFor="support_card_bullets" style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#334155', marginBottom: '4px' }}>
                  Bullet Highlights (One per line)
                </label>
                <textarea
                  id="support_card_bullets"
                  rows={3}
                  value={formData.bullets}
                  onChange={(e) => setFormData({ ...formData, bullets: e.target.value })}
                  placeholder="Resume & LinkedIn profile optimization&#10;1-on-1 technical mock interviews&#10;GitHub portfolio & capstone review"
                  style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', paddingTop: '12px', borderTop: '1px solid #e2e8f0', marginTop: '4px' }}>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  style={{ padding: '9px 18px', background: '#f1f5f9', color: '#475569', border: '1px solid #cbd5e1', borderRadius: '8px', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{ padding: '9px 22px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 900, fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', boxShadow: '0 4px 12px rgba(0,6,72,0.2)' }}
                >
                  <HiCheck size={18} /> Save Support Card
                </button>
              </div>
            </form>
          </div>
        </div>,
        document.body
      )}

      {/* Cards List */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
        {supportCards.map((card) => (
          <div
            key={card.id || card.title}
            style={{
              background: '#ffffff', border: '1.5px solid #000648', borderRadius: '14px',
              overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,6,72,0.06)', display: 'flex', flexDirection: 'column'
            }}
          >
            <div style={{ height: '130px', background: '#000648', position: 'relative' }}>
              <img src={resolveImageSrc(card.image)} alt={card.title} style={{ width: '100%', height: '100%', objectFit: card.fit || 'cover', objectPosition: card.position || 'center center' }} />
              {card.subtitle && (
                <div style={{ position: 'absolute', top: '8px', right: '8px', background: '#000648', color: '#f2b733', fontSize: '0.65rem', fontWeight: 800, padding: '3px 8px', borderRadius: '50px', border: '1px solid #f2b733' }}>
                  {card.subtitle}
                </div>
              )}
            </div>

            <div style={{ padding: '14px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h4 style={{ margin: '0 0 4px 0', fontSize: '1rem', fontWeight: 800, color: '#000648' }}>
                  {card.title}
                </h4>
                <p style={{ fontSize: '0.8rem', color: '#475569', margin: '0 0 10px 0', lineHeight: 1.4 }}>
                  {card.desc}
                </p>
              </div>

              <div style={{ padding: '8px 10px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.75rem', color: '#000648', fontWeight: 700 }}>
                {card.bullets?.length || 0} Bullet Point(s) Configured
              </div>

              <div style={{ marginTop: '14px', display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => handleOpenEdit(card)}
                  aria-label={`Edit ${card.title}`}
                  style={{ padding: '6px 10px', background: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '6px', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  <HiPencil size={14} /> Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(card.id, card.title)}
                  aria-label={`Delete ${card.title}`}
                  style={{ padding: '6px 10px', background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', borderRadius: '6px', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  <HiTrash size={14} /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ImagePickerModal
        isOpen={isImagePickerOpen}
        onClose={() => setIsImagePickerOpen(false)}
        currentImage={formData.image}
        currentPosition={formData.position}
        currentFit={formData.fit}
        onSelectImage={(url, pos, fit) => setFormData((prev) => ({ ...prev, image: url, position: pos || 'center center', fit: fit || 'cover' }))}
        targetArea="Support Feature Card Banner"
        aspectRatio="Rectangle (16:9)"
        recommendedDimensions="600 x 400 px"
      />
    </div>
  );
}
