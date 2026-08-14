import React, { useState, useEffect } from 'react';
import { useSiteData } from '../context/SiteContext';
import ImagePickerModal from './ImagePickerModal';
import { resolveImageSrc } from '../../../utils/imageUtils';
import {
  HiPlus,
  HiTrash,
  HiCheck,
  HiPhotograph,
  HiSparkles,
  HiOutlineBadgeCheck,
  HiOutlineEye,
  HiOutlinePencilAlt
} from 'react-icons/hi';

const DEFAULT_POINTS = [
  'Live Industry-Standard Toolchains',
  'Real Enterprise Project Simulation',
  'Continuous Feedback on Code Quality'
];

export default function AboutShowcaseManager() {
  const {
    aboutShowcaseCards,
    updateAboutShowcaseCards,
    addAboutShowcaseCard,
    updateAboutShowcaseCard,
    deleteAboutShowcaseCard
  } = useSiteData();

  const [cardsList, setCardsList] = useState([]);
  const [pickerTargetIdx, setPickerTargetIdx] = useState(null);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [newPointInputs, setNewPointInputs] = useState({});

  useEffect(() => {
    if (Array.isArray(aboutShowcaseCards) && aboutShowcaseCards.length > 0) {
      setCardsList(aboutShowcaseCards);
    }
  }, [aboutShowcaseCards]);

  const handleFieldChange = (index, field, value) => {
    const updated = [...cardsList];
    updated[index] = { ...updated[index], [field]: value };
    setCardsList(updated);
  };

  const handleAddPoint = (cardIdx) => {
    const text = (newPointInputs[cardIdx] || '').trim();
    if (!text) return;
    const updated = [...cardsList];
    const currentPoints = Array.isArray(updated[cardIdx].points) ? updated[cardIdx].points : [];
    updated[cardIdx] = { ...updated[cardIdx], points: [...currentPoints, text] };
    setCardsList(updated);
    setNewPointInputs((prev) => ({ ...prev, [cardIdx]: '' }));
  };

  const handleDeletePoint = (cardIdx, pointIdx) => {
    const updated = [...cardsList];
    const currentPoints = Array.isArray(updated[cardIdx].points) ? updated[cardIdx].points : [];
    updated[cardIdx] = {
      ...updated[cardIdx],
      points: currentPoints.filter((_, idx) => idx !== pointIdx)
    };
    setCardsList(updated);
  };

  const handleAddNewCard = () => {
    const newCard = {
      id: `showcase-${Date.now()}`,
      tag: 'NEW EZER ADVANTAGE',
      title: 'Practical Learning & Corporate Excellence',
      description: 'Describe the key learning experience, mentor interaction, or placement advantage that helps learners succeed.',
      badge: 'CAREER ADVANTAGE',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=900&h=600',
      imagePosition: 'center center',
      imageFit: 'cover',
      points: [
        'Real-world curriculum crafted by industry leads',
        'Direct mentor support and practical assignments',
        'Structured interview readiness and career grooming'
      ]
    };
    setCardsList((prev) => [...prev, newCard]);
  };

  const handleDeleteCard = (id, idx) => {
    if (cardsList.length <= 1) {
      alert('You must keep at least 1 showcase story card.');
      return;
    }
    if (window.confirm('Are you sure you want to delete this story card?')) {
      const updated = cardsList.filter((c, i) => (c.id ? c.id !== id : i !== idx));
      setCardsList(updated);
      deleteAboutShowcaseCard(id);
    }
  };

  const handleSaveAll = (e) => {
    if (e) e.preventDefault();
    updateAboutShowcaseCards(cardsList);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3500);
  };

  return (
    <div>
      {/* Top Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px',
          paddingBottom: '16px',
          borderBottom: '1.5px solid #e2e8f0',
          flexWrap: 'wrap',
          gap: '12px'
        }}
      >
        <div>
          <h2
            style={{
              fontSize: '1.4rem',
              fontWeight: 800,
              color: '#000648',
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <HiPhotograph color="#115DFC" size={24} />
            About Us Zig-Zag Story & Culture Showcase Manager
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
            Customize the alternating zig-zag cards displayed below Core Objectives on the About Us page. Manage photos, tags, headlines, and bullet highlights.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button
            type="button"
            onClick={handleAddNewCard}
            style={{
              padding: '8px 16px',
              background: '#000648',
              color: '#f2b733',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 800,
              fontSize: '0.82rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <HiPlus size={16} /> Add Story Card
          </button>

          <button
            type="button"
            onClick={handleSaveAll}
            style={{
              padding: '8px 18px',
              background: '#166534',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 800,
              fontSize: '0.82rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <HiCheck size={16} /> Save All Changes
          </button>
        </div>
      </div>

      {saveSuccess && (
        <div
          style={{
            padding: '12px 16px',
            background: '#f0fdf4',
            border: '1px solid #86efac',
            color: '#166534',
            borderRadius: '8px',
            marginBottom: '20px',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <HiCheck size={18} /> About Us Story Cards saved successfully! Changes are now live on the website.
        </div>
      )}

      {/* Cards List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        {cardsList.map((card, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={card.id || idx}
              style={{
                background: '#ffffff',
                border: '1.5px solid #cbd5e1',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 4px 16px rgba(0, 6, 72, 0.04)',
                position: 'relative'
              }}
            >
              {/* Card Header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '18px',
                  paddingBottom: '12px',
                  borderBottom: '1px solid #e2e8f0',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span
                    style={{
                      background: '#000648',
                      color: '#f2b733',
                      fontWeight: 900,
                      fontSize: '0.82rem',
                      padding: '4px 12px',
                      borderRadius: '50px'
                    }}
                  >
                    Story Card #{idx + 1}
                  </span>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: '#475569',
                      background: '#f1f5f9',
                      padding: '4px 10px',
                      borderRadius: '6px'
                    }}
                  >
                    Layout: {isEven ? '🖼️ Photo Left → 📝 Text Right' : '📝 Text Left → 🖼️ Photo Right'}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleDeleteCard(card.id, idx)}
                  style={{
                    padding: '5px 10px',
                    background: '#fef2f2',
                    border: '1px solid #fecaca',
                    color: '#dc2626',
                    borderRadius: '6px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <HiTrash size={14} /> Delete Card
                </button>
              </div>

              {/* Form Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#000648', marginBottom: '4px' }}>
                    Top Eyebrow / Tag Text
                  </label>
                  <input
                    type="text"
                    value={card.tag || ''}
                    onChange={(e) => handleFieldChange(idx, 'tag', e.target.value)}
                    placeholder="e.g. PRACTICAL LABS & CODE ENCLAVES"
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '0.85rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#000648', marginBottom: '4px' }}>
                    Right Pill Badge
                  </label>
                  <input
                    type="text"
                    value={card.badge || ''}
                    onChange={(e) => handleFieldChange(idx, 'badge', e.target.value)}
                    placeholder="e.g. HANDS-ON SIMULATION"
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '0.85rem'
                    }}
                  />
                </div>
              </div>

              {/* Main Headline & Description */}
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#000648', marginBottom: '4px' }}>
                  Headline Title
                </label>
                <input
                  type="text"
                  value={card.title || ''}
                  onChange={(e) => handleFieldChange(idx, 'title', e.target.value)}
                  placeholder="e.g. Enterprise-Grade Practical Labs & Production Workspaces"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1.5px solid #cbd5e1',
                    fontSize: '0.9rem',
                    fontWeight: 700
                  }}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#000648', marginBottom: '4px' }}>
                  Detailed Description
                </label>
                <textarea
                  rows={3}
                  value={card.description || ''}
                  onChange={(e) => handleFieldChange(idx, 'description', e.target.value)}
                  placeholder="Explain the experience and benefits for learners..."
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1.5px solid #cbd5e1',
                    fontSize: '0.85rem',
                    lineHeight: 1.5
                  }}
                />
              </div>

              {/* Photo & Position Controls */}
              <div
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  padding: '14px',
                  marginBottom: '16px'
                }}
              >
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#000648', marginBottom: '8px' }}>
                  📸 Card Photo & Position
                </label>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap' }}>
                  {/* Photo Preview Thumbnail */}
                  <div
                    style={{
                      width: '120px',
                      height: '80px',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      border: '1.5px solid #cbd5e1',
                      background: '#000648',
                      flexShrink: 0
                    }}
                  >
                    <img
                      src={resolveImageSrc(card.image || 'images/hero/hero_section_1.jpg')}
                      alt={card.title || 'Story Image'}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: card.imageFit || 'cover',
                        objectPosition: card.imagePosition || 'center center'
                      }}
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=900&h=600';
                      }}
                    />
                  </div>

                  {/* URL Input & Picker Button */}
                  <div style={{ flex: 1, minWidth: '220px' }}>
                    <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
                      <input
                        type="text"
                        value={card.image || ''}
                        onChange={(e) => handleFieldChange(idx, 'image', e.target.value)}
                        placeholder="Image URL or relative path..."
                        style={{
                          flex: 1,
                          padding: '7px 10px',
                          borderRadius: '6px',
                          border: '1.5px solid #cbd5e1',
                          fontSize: '0.8rem'
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => setPickerTargetIdx(idx)}
                        style={{
                          padding: '7px 12px',
                          background: '#000648',
                          color: '#f2b733',
                          border: 'none',
                          borderRadius: '6px',
                          fontSize: '0.78rem',
                          fontWeight: 800,
                          cursor: 'pointer',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        Choose Photo
                      </button>
                    </div>

                    <div style={{ display: 'flex', gap: '10px' }}>
                      <div style={{ flex: 1 }}>
                        <label style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b' }}>Position</label>
                        <select
                          value={card.imagePosition || 'center center'}
                          onChange={(e) => handleFieldChange(idx, 'imagePosition', e.target.value)}
                          style={{
                            width: '100%',
                            padding: '5px 8px',
                            borderRadius: '4px',
                            border: '1px solid #cbd5e1',
                            fontSize: '0.78rem'
                          }}
                        >
                          <option value="center center">Center</option>
                          <option value="center top">Top</option>
                          <option value="center bottom">Bottom</option>
                        </select>
                      </div>

                      <div style={{ flex: 1 }}>
                        <label style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b' }}>Fit</label>
                        <select
                          value={card.imageFit || 'cover'}
                          onChange={(e) => handleFieldChange(idx, 'imageFit', e.target.value)}
                          style={{
                            width: '100%',
                            padding: '5px 8px',
                            borderRadius: '4px',
                            border: '1px solid #cbd5e1',
                            fontSize: '0.78rem'
                          }}
                        >
                          <option value="cover">Cover (Fill)</option>
                          <option value="contain">Contain</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Highlight Bullet Points */}
              <div
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  padding: '14px'
                }}
              >
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#000648', marginBottom: '8px' }}>
                  ✨ Key Feature Bullet Points ({Array.isArray(card.points) ? card.points.length : 0})
                </label>

                {/* Existing Points */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '10px' }}>
                  {(card.points || []).map((pt, pIdx) => (
                    <div
                      key={pIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '6px 10px',
                        background: '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '6px',
                        fontSize: '0.82rem'
                      }}
                    >
                      <span style={{ color: '#334155', fontWeight: 600 }}>• {pt}</span>
                      <button
                        type="button"
                        onClick={() => handleDeletePoint(idx, pIdx)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#dc2626',
                          cursor: 'pointer',
                          padding: '2px 4px'
                        }}
                      >
                        <HiTrash size={14} />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Add New Point Input */}
                <div style={{ display: 'flex', gap: '6px' }}>
                  <input
                    type="text"
                    placeholder="Add bullet highlight point..."
                    value={newPointInputs[idx] || ''}
                    onChange={(e) => setNewPointInputs((prev) => ({ ...prev, [idx]: e.target.value }))}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddPoint(idx);
                      }
                    }}
                    style={{
                      flex: 1,
                      padding: '6px 10px',
                      borderRadius: '6px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '0.8rem'
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => handleAddPoint(idx)}
                    style={{
                      padding: '6px 12px',
                      background: '#000648',
                      color: '#f2b733',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      cursor: 'pointer'
                    }}
                  >
                    + Add Point
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Save Bottom Button */}
      <div style={{ marginTop: '24px', textAlign: 'right' }}>
        <button
          type="button"
          onClick={handleSaveAll}
          style={{
            padding: '12px 24px',
            background: '#166534',
            color: '#ffffff',
            border: 'none',
            borderRadius: '10px',
            fontWeight: 800,
            fontSize: '0.92rem',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(22, 101, 52, 0.2)'
          }}
        >
          Save All Story Cards & Publish Live
        </button>
      </div>

      {/* Image Picker Modal */}
      {pickerTargetIdx !== null && (
        <ImagePickerModal
          onSelect={(img) => {
            handleFieldChange(pickerTargetIdx, 'image', img);
            setPickerTargetIdx(null);
          }}
          onClose={() => setPickerTargetIdx(null)}
        />
      )}
    </div>
  );
}
