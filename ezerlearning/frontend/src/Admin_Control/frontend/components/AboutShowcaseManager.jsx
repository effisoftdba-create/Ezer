import React, { useState, useEffect } from 'react';
import { useSiteData } from '../context/SiteContext';
import ImagePickerModal from './ImagePickerModal';
import { resolveImageSrc } from '../../../utils/imageUtils';
import {
  HiPlus,
  HiTrash,
  HiPencil,
  HiCheck,
  HiX,
  HiPhotograph,
  HiSparkles,
  HiOutlineCamera
} from 'react-icons/hi';

export default function AboutShowcaseManager() {
  const {
    aboutShowcaseCards,
    updateAboutShowcaseCards,
    deleteAboutShowcaseCard
  } = useSiteData();

  const [cardsList, setCardsList] = useState([]);
  const [pickerTargetIdx, setPickerTargetIdx] = useState(null);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [newPointInputs, setNewPointInputs] = useState({});
  const [editingPoint, setEditingPoint] = useState(null); // { cardIdx, pointIdx, text }

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

  const handleStartEditPoint = (cardIdx, pointIdx, text) => {
    setEditingPoint({ cardIdx, pointIdx, text });
  };

  const handleSaveEditPoint = () => {
    if (!editingPoint) return;
    const { cardIdx, pointIdx, text } = editingPoint;
    const trimmed = (text || '').trim();
    if (!trimmed) return;

    const updated = [...cardsList];
    const currentPoints = Array.isArray(updated[cardIdx].points) ? [...updated[cardIdx].points] : [];
    currentPoints[pointIdx] = trimmed;
    updated[cardIdx] = { ...updated[cardIdx], points: currentPoints };
    setCardsList(updated);
    setEditingPoint(null);
  };

  const handleCancelEditPoint = () => {
    setEditingPoint(null);
  };

  const handleDeletePoint = (cardIdx, pointIdx) => {
    const updated = [...cardsList];
    const currentPoints = Array.isArray(updated[cardIdx].points) ? updated[cardIdx].points : [];
    updated[cardIdx] = {
      ...updated[cardIdx],
      points: currentPoints.filter((_, idx) => idx !== pointIdx)
    };
    setCardsList(updated);
    if (editingPoint && editingPoint.cardIdx === cardIdx && editingPoint.pointIdx === pointIdx) {
      setEditingPoint(null);
    }
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
              fontSize: '1.35rem',
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
            Customize the alternating visual story cards on the About Us page. Click photos to select or upload, edit headlines, and add or modify key highlight points.
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
              gap: '6px',
              boxShadow: '0 2px 8px rgba(22, 101, 52, 0.25)'
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

              {/* Photo & Position Controls with Clickable Image Preview */}
              <div
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '16px',
                  marginBottom: '16px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: 800, color: '#000648', margin: 0 }}>
                    📸 Card Photo & Position
                  </label>
                  <span style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: 600 }}>
                    💡 Tip: Click the image box directly to choose or upload a photo
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                  {/* Interactive Clickable Photo Thumbnail */}
                  <div
                    onClick={() => setPickerTargetIdx(idx)}
                    title="Click to Choose / Upload Photo"
                    style={{
                      width: '140px',
                      height: '92px',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      border: '2px dashed #115DFC',
                      background: '#000648',
                      flexShrink: 0,
                      position: 'relative',
                      cursor: 'pointer',
                      boxShadow: '0 2px 8px rgba(0, 6, 72, 0.08)',
                      transition: 'transform 0.2s ease, border-color 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.02)';
                      e.currentTarget.style.borderColor = '#f2b733';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.borderColor = '#115DFC';
                    }}
                  >
                    <img
                      src={resolveImageSrc(card.image || 'images/hero/hero_section_1.jpg')}
                      alt={card.title || 'Story Image'}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: card.imageFit || 'cover',
                        objectPosition: card.imagePosition || 'center center',
                        display: 'block'
                      }}
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=900&h=600';
                      }}
                    />

                    {/* Hover Camera Overlay */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(0, 6, 72, 0.55)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        gap: '2px',
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        textAlign: 'center',
                        padding: '4px'
                      }}
                    >
                      <HiOutlineCamera size={20} color="#f2b733" />
                      <span>Change Photo</span>
                    </div>
                  </div>

                  {/* URL Input & Picker Button */}
                  <div style={{ flex: 1, minWidth: '240px' }}>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
                      <input
                        type="text"
                        value={card.image || ''}
                        onChange={(e) => handleFieldChange(idx, 'image', e.target.value)}
                        placeholder="Image URL or relative path..."
                        style={{
                          flex: 1,
                          padding: '8px 12px',
                          borderRadius: '6px',
                          border: '1.5px solid #cbd5e1',
                          fontSize: '0.82rem'
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => setPickerTargetIdx(idx)}
                        style={{
                          padding: '8px 14px',
                          background: '#000648',
                          color: '#f2b733',
                          border: 'none',
                          borderRadius: '6px',
                          fontSize: '0.8rem',
                          fontWeight: 800,
                          cursor: 'pointer',
                          whiteSpace: 'nowrap',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <HiPhotograph size={15} /> Choose Photo
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
                            padding: '6px 8px',
                            borderRadius: '6px',
                            border: '1px solid #cbd5e1',
                            fontSize: '0.78rem'
                          }}
                        >
                          <option value="center center">Center (Default)</option>
                          <option value="center top">Top Focus</option>
                          <option value="center bottom">Bottom Focus</option>
                          <option value="left center">Left Focus</option>
                          <option value="right center">Right Focus</option>
                        </select>
                      </div>

                      <div style={{ flex: 1 }}>
                        <label style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b' }}>Fit</label>
                        <select
                          value={card.imageFit || 'cover'}
                          onChange={(e) => handleFieldChange(idx, 'imageFit', e.target.value)}
                          style={{
                            width: '100%',
                            padding: '6px 8px',
                            borderRadius: '6px',
                            border: '1px solid #cbd5e1',
                            fontSize: '0.78rem'
                          }}
                        >
                          <option value="cover">Cover (Fill Container)</option>
                          <option value="contain">Contain (Full Image)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Highlight Bullet Points with Inline Edit & Delete */}
              <div
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '16px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: 800, color: '#000648', margin: 0 }}>
                    ✨ Key Feature Bullet Points ({Array.isArray(card.points) ? card.points.length : 0})
                  </label>
                  <span style={{ fontSize: '0.72rem', color: '#64748b' }}>
                    Click ✏️ to edit or 🗑️ to delete any bullet point
                  </span>
                </div>

                {/* Existing Points List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' }}>
                  {(card.points || []).map((pt, pIdx) => {
                    const isEditing =
                      editingPoint &&
                      editingPoint.cardIdx === idx &&
                      editingPoint.pointIdx === pIdx;

                    if (isEditing) {
                      return (
                        <div
                          key={pIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '8px 10px',
                            background: '#ffffff',
                            border: '2px solid #115DFC',
                            borderRadius: '8px',
                            boxShadow: '0 2px 8px rgba(17, 93, 252, 0.1)'
                          }}
                        >
                          <input
                            type="text"
                            value={editingPoint.text}
                            onChange={(e) =>
                              setEditingPoint((prev) => ({ ...prev, text: e.target.value }))
                            }
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault();
                                handleSaveEditPoint();
                              } else if (e.key === 'Escape') {
                                handleCancelEditPoint();
                              }
                            }}
                            autoFocus
                            style={{
                              flex: 1,
                              border: 'none',
                              outline: 'none',
                              fontSize: '0.85rem',
                              fontWeight: 600,
                              color: '#000648'
                            }}
                          />

                          <button
                            type="button"
                            onClick={handleSaveEditPoint}
                            title="Save changes"
                            style={{
                              padding: '4px 10px',
                              background: '#166534',
                              color: '#ffffff',
                              border: 'none',
                              borderRadius: '6px',
                              fontSize: '0.76rem',
                              fontWeight: 800,
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px'
                            }}
                          >
                            <HiCheck size={14} /> Save
                          </button>

                          <button
                            type="button"
                            onClick={handleCancelEditPoint}
                            title="Cancel editing"
                            style={{
                              padding: '4px 8px',
                              background: '#f1f5f9',
                              color: '#64748b',
                              border: '1px solid #cbd5e1',
                              borderRadius: '6px',
                              fontSize: '0.76rem',
                              fontWeight: 700,
                              cursor: 'pointer'
                            }}
                          >
                            <HiX size={14} />
                          </button>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={pIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '8px 12px',
                          background: '#ffffff',
                          border: '1px solid #e2e8f0',
                          borderRadius: '8px',
                          fontSize: '0.84rem',
                          gap: '10px'
                        }}
                      >
                        <span style={{ color: '#1e293b', fontWeight: 600, flex: 1, lineHeight: 1.4 }}>
                          • {pt}
                        </span>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                          <button
                            type="button"
                            onClick={() => handleStartEditPoint(idx, pIdx, pt)}
                            title="Edit bullet point"
                            style={{
                              padding: '4px 8px',
                              background: '#eff6ff',
                              border: '1px solid #bfdbfe',
                              color: '#1d4ed8',
                              borderRadius: '6px',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px',
                              fontSize: '0.74rem',
                              fontWeight: 700
                            }}
                          >
                            <HiPencil size={13} /> Edit
                          </button>

                          <button
                            type="button"
                            onClick={() => handleDeletePoint(idx, pIdx)}
                            title="Delete bullet point"
                            style={{
                              padding: '4px 8px',
                              background: '#fef2f2',
                              border: '1px solid #fecaca',
                              color: '#dc2626',
                              borderRadius: '6px',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px',
                              fontSize: '0.74rem',
                              fontWeight: 700
                            }}
                          >
                            <HiTrash size={13} /> Delete
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Add New Point Input */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input
                    type="text"
                    placeholder="Type new bullet highlight and click + Add Point..."
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
                      padding: '8px 12px',
                      borderRadius: '6px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '0.82rem'
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => handleAddPoint(idx)}
                    style={{
                      padding: '8px 14px',
                      background: '#000648',
                      color: '#f2b733',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      whiteSpace: 'nowrap'
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
          aspectRatio="16:9"
          currentImage={cardsList[pickerTargetIdx]?.image}
          onSelect={(img, meta) => {
            handleFieldChange(pickerTargetIdx, 'image', img);
            if (meta?.position) {
              handleFieldChange(pickerTargetIdx, 'imagePosition', meta.position);
            }
            if (meta?.fit) {
              handleFieldChange(pickerTargetIdx, 'imageFit', meta.fit);
            }
            setPickerTargetIdx(null);
          }}
          onClose={() => setPickerTargetIdx(null)}
        />
      )}
    </div>
  );
}
