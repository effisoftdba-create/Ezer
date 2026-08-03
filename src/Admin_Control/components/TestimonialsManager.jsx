import React, { useState } from 'react';
import { useSiteData } from '../context/SiteContext';
import ImagePickerModal from './ImagePickerModal';
import { HiPlus, HiTrash, HiPencil, HiPhotograph, HiCheck, HiSparkles } from 'react-icons/hi';

export default function TestimonialsManager() {
  const {
    testimonialsHero,
    updateTestimonialsHero,
    writtenTestimonials,
    addWrittenTestimonial,
    updateWrittenTestimonial,
    deleteWrittenTestimonial
  } = useSiteData();

  const [heroData, setHeroData] = useState(testimonialsHero);
  const [saveHeroSuccess, setSaveHeroSuccess] = useState(false);

  const [isEditingCard, setIsEditingCard] = useState(false);
  const [editingCardId, setEditingCardId] = useState(null);
  const [isImagePickerOpen, setIsImagePickerOpen] = useState(false);
  const [imageFieldTarget, setImageFieldTarget] = useState('hero');

  const defaultCardState = {
    name: 'Anand Kumar',
    role: 'DevOps Specialist',
    company: 'Freshworks',
    background: 'Fresher, B.E. CSE',
    course: 'Cloud DevOps with AI',
    quote: 'EZER Learning Solution gave me practical, real-world project skills.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
  };

  const [cardData, setCardData] = useState(defaultCardState);

  const handleHeroSubmit = (e) => {
    e.preventDefault();
    updateTestimonialsHero(heroData);
    setSaveHeroSuccess(true);
    setTimeout(() => setSaveHeroSuccess(false), 3000);
  };

  const handleOpenAddCard = () => {
    setEditingCardId(null);
    setCardData(defaultCardState);
    setIsEditingCard(true);
  };

  const handleOpenEditCard = (item) => {
    setEditingCardId(item.id);
    setCardData({
      name: item.name || '',
      role: item.role || '',
      company: item.company || '',
      background: item.background || '',
      course: item.course || '',
      quote: item.quote || '',
      image: item.image || ''
    });
    setIsEditingCard(true);
  };

  const handleSaveCard = (e) => {
    e.preventDefault();
    if (!cardData.name || !cardData.quote) {
      alert('Student Name and Testimonial Quote are required.');
      return;
    }

    if (editingCardId) {
      updateWrittenTestimonial(editingCardId, cardData);
    } else {
      addWrittenTestimonial(cardData);
    }

    setIsEditingCard(false);
  };

  const handleDeleteCard = (id, name) => {
    if (window.confirm(`Are you sure you want to remove ${name}'s written review?`)) {
      deleteWrittenTestimonial(id);
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
            Testimonials Page & Reviews Control
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
            Edit the Testimonials Page Hero banner text and manage written alumni review cards.
          </p>
        </div>
      </div>

      {saveHeroSuccess && (
        <div style={{
          padding: '12px 16px', background: '#f0fdf4', border: '1px solid #86efac',
          color: '#166534', borderRadius: '8px', marginBottom: '20px', fontWeight: 700,
          display: 'flex', alignItems: 'center', gap: '8px'
        }}>
          <HiCheck size={18} /> Testimonials Page Hero updated successfully!
        </div>
      )}

      {/* Section 1: Hero Banner Config */}
      <form onSubmit={handleHeroSubmit} style={{
        background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '14px',
        padding: '20px', marginBottom: '32px'
      }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '1.1rem', fontWeight: 800, color: '#000648', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <HiSparkles color="#f2b733" /> Testimonials Page Header Section
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
          <div>
            <label htmlFor="test_hero_tag" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
              Tagline Badge Text
            </label>
            <input
              id="test_hero_tag"
              type="text"
              value={heroData.tag}
              onChange={(e) => setHeroData({ ...heroData, tag: e.target.value })}
              style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
              required
            />
          </div>

          <div>
            <label htmlFor="test_hero_headline" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
              Page Headline
            </label>
            <input
              id="test_hero_headline"
              type="text"
              value={heroData.headline}
              onChange={(e) => setHeroData({ ...heroData, headline: e.target.value })}
              style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
              required
            />
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="test_hero_sub" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
            Subtitle Description
          </label>
          <textarea
            id="test_hero_sub"
            rows={2}
            value={heroData.sub}
            onChange={(e) => setHeroData({ ...heroData, sub: e.target.value })}
            style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
            required
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button
            type="submit"
            aria-label="Save testimonials hero header"
            style={{ padding: '9px 20px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer' }}
          >
            Save Header Text
          </button>
        </div>
      </form>

      {/* Section 2: Written Reviews List */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 800, color: '#000648' }}>
          Written Student Reviews ({writtenTestimonials.length})
        </h3>
        <button
          type="button"
          onClick={handleOpenAddCard}
          aria-label="Add new written testimonial"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '8px 16px', background: '#000648', color: '#f2b733',
            border: 'none', borderRadius: '8px', fontWeight: 800, fontSize: '0.825rem',
            cursor: 'pointer'
          }}
        >
          <HiPlus size={16} /> Add Student Review
        </button>
      </div>

      {isEditingCard && (
        <form onSubmit={handleSaveCard} style={{
          background: '#ffffff', border: '2px solid #000648', borderRadius: '14px',
          padding: '20px', marginBottom: '24px', boxShadow: '0 8px 24px rgba(0,6,72,0.1)'
        }}>
          <h4 style={{ margin: '0 0 16px 0', fontSize: '1rem', fontWeight: 800, color: '#000648' }}>
            {editingCardId ? 'Edit Student Review' : 'Add New Written Testimonial'}
          </h4>

          <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ width: '70px', height: '70px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #f2b733', background: '#000648' }}>
              <img src={cardData.image} alt={cardData.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <label htmlFor="written_test_photo" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                Student Photo URL
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  id="written_test_photo"
                  type="text"
                  value={cardData.image}
                  onChange={(e) => setCardData({ ...cardData, image: e.target.value })}
                  style={{ flex: 1, padding: '8px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                  required
                />
                <button
                  type="button"
                  onClick={() => {
                    setImageFieldTarget('card');
                    setIsImagePickerOpen(true);
                  }}
                  aria-label="Choose photo"
                  style={{ padding: '8px 12px', background: '#115DFC', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
                >
                  <HiPhotograph size={16} />
                </button>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label htmlFor="written_test_name" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                Student Full Name *
              </label>
              <input
                id="written_test_name"
                type="text"
                value={cardData.name}
                onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
                style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                required
              />
            </div>

            <div>
              <label htmlFor="written_test_role" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                Job Role & Company
              </label>
              <input
                id="written_test_role"
                type="text"
                value={cardData.role}
                onChange={(e) => setCardData({ ...cardData, role: e.target.value })}
                placeholder="e.g. Junior DevOps Developer @ Agnikul"
                style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                required
              />
            </div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="written_test_quote" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
              Testimonial Review Quote *
            </label>
            <textarea
              id="written_test_quote"
              rows={3}
              value={cardData.quote}
              onChange={(e) => setCardData({ ...cardData, quote: e.target.value })}
              style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
              required
            />
          </div>

          <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
            <button
              type="button"
              onClick={() => setIsEditingCard(false)}
              aria-label="Cancel editing"
              style={{ padding: '8px 14px', background: '#e2e8f0', color: '#475569', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}
            >
              Cancel
            </button>
            <button
              type="submit"
              aria-label="Save review"
              style={{ padding: '8px 18px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer' }}
            >
              Save Review
            </button>
          </div>
        </form>
      )}

      {/* Review Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
        {writtenTestimonials.map((item) => (
          <div
            key={item.id}
            style={{
              background: '#ffffff', border: '1.5px solid #cbd5e1', borderRadius: '14px',
              padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <img src={item.image} alt={item.name} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #f2b733' }} />
                <div>
                  <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 800, color: '#000648' }}>{item.name}</h4>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>{item.role}</div>
                </div>
              </div>
              <p style={{ fontSize: '0.82rem', color: '#334155', lineHeight: 1.45, margin: 0, fontStyle: 'italic' }}>
                "{item.quote}"
              </p>
            </div>

            <div style={{ marginTop: '14px', paddingTop: '10px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
              <button
                type="button"
                onClick={() => handleOpenEditCard(item)}
                aria-label={`Edit ${item.name}`}
                style={{ padding: '5px 10px', background: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '6px', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 700 }}
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => handleDeleteCard(item.id, item.name)}
                aria-label={`Delete ${item.name}`}
                style={{ padding: '5px 10px', background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', borderRadius: '6px', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 700 }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <ImagePickerModal
        isOpen={isImagePickerOpen}
        onClose={() => setIsImagePickerOpen(false)}
        currentImage={cardData.image}
        onSelectImage={(url) => setCardData((prev) => ({ ...prev, image: url }))}
      />
    </div>
  );
}
