import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { HiX, HiCheck, HiPlus, HiTrash, HiPhotograph, HiSparkles } from 'react-icons/hi';
import ImagePickerModal from './ImagePickerModal';

export default function ArticleFormModal({
  isOpen,
  onClose,
  editingArticle,
  onSave
}) {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: 'Career Guide',
    author: 'EZER Academic Board',
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    readTime: '8 Min Read',
    seoGeoAeoTag: 'Best AI & Full Stack IT Training Institute in Chennai India',
    summary: '',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1400',
    takeawaysStr: '',
    sections: [
      {
        title: '1. Introduction & Industry Landscape',
        content: 'Type detailed article section content here...',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000',
        caption: 'Interactive native-language cohort masterclass.'
      }
    ]
  });

  const [pickerOpen, setPickerOpen] = useState(false);
  const [activeImageTarget, setActiveImageTarget] = useState(null); // null for cover image, or index for section image

  useEffect(() => {
    if (editingArticle) {
      const existingTakeaways = Array.isArray(editingArticle.takeaways)
        ? editingArticle.takeaways.join('\n')
        : (editingArticle.takeaways || '');

      const existingSections = Array.isArray(editingArticle.sections) && editingArticle.sections.length > 0
        ? editingArticle.sections
        : [
            {
              title: '1. Introduction & Industry Landscape',
              content: editingArticle.content || editingArticle.summary || '',
              image: editingArticle.image || '',
              caption: 'Featured editorial photo.'
            }
          ];

      setFormData({
        id: editingArticle.id,
        title: editingArticle.title || '',
        slug: editingArticle.slug || (editingArticle.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
        category: editingArticle.category || 'Career Guide',
        author: editingArticle.author || 'EZER Academic Board',
        date: editingArticle.date || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        readTime: editingArticle.readTime || '8 Min Read',
        seoGeoAeoTag: editingArticle.seoGeoAeoTag || 'Best AI & Full Stack IT Training Institute in Chennai India',
        summary: editingArticle.summary || '',
        image: editingArticle.image || '',
        takeawaysStr: existingTakeaways,
        sections: existingSections
      });
    }
  }, [editingArticle]);

  if (!isOpen) return null;

  const handleAddSection = () => {
    setFormData((prev) => ({
      ...prev,
      sections: [
        ...prev.sections,
        {
          title: `${prev.sections.length + 1}. New Sub-Section Title`,
          content: 'Add detailed paragraphs and insights for this section...',
          image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000',
          caption: 'Section editorial photo caption.'
        }
      ]
    }));
  };

  const handleUpdateSection = (index, key, val) => {
    const updated = [...formData.sections];
    updated[index] = { ...updated[index], [key]: val };
    setFormData((prev) => ({ ...prev, sections: updated }));
  };

  const handleDeleteSection = (index) => {
    const updated = formData.sections.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, sections: updated }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title?.trim() || !formData.summary?.trim() || !formData.author?.trim()) {
      return alert('Please fill out all required fields: Article Title, Summary & Key Takeaways, and Author Name.');
    }

    const takeawaysArray = formData.takeawaysStr
      .split('\n')
      .map((line) => line.replace(/^[\s•*-]+/, '').trim())
      .filter(Boolean);

    const payload = {
      ...formData,
      title: formData.title.trim(),
      slug: formData.slug.trim() || formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
      takeaways: takeawaysArray.length > 0 ? takeawaysArray : ['Degree requirements are giving way to practical proof-of-work.'],
      sections: formData.sections.length > 0 ? formData.sections : [{ title: 'Overview', content: formData.summary, image: formData.image }]
    };

    onSave(payload);
    onClose();
  };

  const modalJSX = (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 999999,
      background: 'rgba(0, 6, 72, 0.85)', backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', boxSizing: 'border-box'
    }}>
      <div style={{
        background: '#ffffff', borderRadius: '24px', width: '100%', maxWidth: '960px',
        maxHeight: '90vh', display: 'flex', flexDirection: 'column',
        boxShadow: '0 25px 60px rgba(0,0,0,0.5)', border: '2.5px solid #000648',
        position: 'relative', overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{
          background: '#000648', color: '#ffffff', padding: '20px 24px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          borderBottom: '2px solid #f2b733', flexShrink: 0
        }}>
          <div>
            <span style={{ fontSize: '0.7rem', fontWeight: 900, color: '#f2b733', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              EZER TECH MAGAZINE EDITORIAL PORTAL
            </span>
            <h3 style={{ margin: '2px 0 0 0', fontSize: '1.25rem', fontWeight: 900, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px' }}>
              {editingArticle ? `Edit Article: ${formData.title}` : 'Create & Publish New Magazine Article'}
            </h3>

          </div>

          <button
            type="button"
            aria-label="Close article edit modal"
            onClick={onClose}
            style={{ background: 'rgba(255,255,255,0.12)', border: 'none', cursor: 'pointer', color: '#ffffff', width: '34px', height: '34px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <HiX size={20} />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, overflow: 'hidden' }}>
          <div style={{ padding: '24px', overflowY: 'auto', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Basic Metadata */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px 180px', gap: '14px' }}>
              <div>
                <label htmlFor="art_title_input" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                  Article Headline Title *
                </label>
                <input
                  id="art_title_input"
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. How Non-IT Professionals Are Transitioning Into AI in 2026"
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.86rem' }}
                />
              </div>

              <div>
                <label htmlFor="art_category_select" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                  Category Tag
                </label>
                <select
                  id="art_category_select"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.86rem', background: '#fff' }}
                >
                  <option value="Cover Story & EdTech Guide">Cover Story & EdTech Guide</option>
                  <option value="Career Guide">Career Guide</option>
                  <option value="Education Impact & GEO Insights">Education Impact & GEO Insights</option>
                  <option value="Industry Trends & AEO Search">Industry Trends & AEO Search</option>
                  <option value="Placement Success & SEO">Placement Success & SEO</option>
                  <option value="National Recognition & Honors">National Recognition & Honors</option>
                </select>
              </div>

              <div>
                <label htmlFor="art_author_input" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                  Author
                </label>
                <input
                  id="art_author_input"
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.86rem' }}
                />
              </div>
            </div>

            {/* SEO & Cover Image */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div>
                <label htmlFor="art_seo_tag" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                  SEO / GEO / AEO Location Keyword Tag *
                </label>
                <input
                  id="art_seo_tag"
                  type="text"
                  required
                  value={formData.seoGeoAeoTag}
                  onChange={(e) => setFormData({ ...formData, seoGeoAeoTag: e.target.value })}
                  placeholder="e.g. Best AI & Full Stack IT Training Institute in Chennai India"
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.86rem' }}
                />
              </div>

              <div>
                <label htmlFor="art_cover_image" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                  Main Banner Cover Photo URL *
                </label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input
                    id="art_cover_image"
                    type="text"
                    required
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    style={{ flex: 1, padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.86rem' }}
                  />
                  <button
                    type="button"
                    onClick={() => { setActiveImageTarget(null); setPickerOpen(true); }}
                    style={{ padding: '10px 14px', background: '#115DFC', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer', fontSize: '0.82rem' }}
                  >
                    <HiPhotograph size={16} /> Choose
                  </button>
                </div>
              </div>
            </div>

            {/* Excerpt Summary */}
            <div>
              <label htmlFor="art_summary" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                Article Excerpt Summary (Displayed on Magazine Cards)
              </label>
              <textarea
                id="art_summary"
                rows={2}
                value={formData.summary}
                onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                placeholder="High-level overview summary..."
                style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.86rem' }}
              />
            </div>

            {/* Key Takeaways */}
            <div>
              <label htmlFor="art_takeaways" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>
                Executive Key Takeaways (One Bullet Point per Line)
              </label>
              <textarea
                id="art_takeaways"
                rows={3}
                value={formData.takeawaysStr}
                onChange={(e) => setFormData({ ...formData, takeawaysStr: e.target.value })}
                placeholder="Degree requirements are giving way to practical capstone proof-of-work.&#10;Native language instruction accelerates technical mastery by 3x."
                style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.86rem' }}
              />
            </div>

            {/* Custom Multi-Section Content Blocks */}
            <div style={{ borderTop: '2px solid #e2e8f0', paddingTop: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 900, color: '#000648' }}>
                    Article Detailed Sub-Sections & In-Line Photos
                  </h4>
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                    Add multiple custom section headers, detailed paragraphs, inline images, and captions.
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleAddSection}
                  style={{ padding: '8px 16px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer', fontSize: '0.84rem', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <HiPlus size={16} /> Add Sub-Section Block
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {formData.sections.map((sec, idx) => (
                  <div key={sec.id || (sec.title ? `sec-${sec.title.toLowerCase().replace(/[^a-z0-9]/g, '')}` : `sec-block-${sec.content ? sec.content.substring(0, 10) : 'item'}`)} style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '14px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontWeight: 900, fontSize: '0.84rem', color: '#000648' }}>
                        Section #{idx + 1}
                      </span>
                      {formData.sections.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleDeleteSection(idx)}
                          style={{ padding: '4px 10px', background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}
                        >
                          <HiTrash size={14} style={{ display: 'inline', marginRight: '4px' }} /> Delete Section
                        </button>
                      )}
                    </div>

                    <div>
                      <label htmlFor={`sec-title-${idx}`} style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569', display: 'block', marginBottom: '4px' }}>Section Header Title</label>
                      <input
                        id={`sec-title-${idx}`}
                        type="text"
                        value={sec.title || ''}
                        onChange={(e) => handleUpdateSection(idx, 'title', e.target.value)}
                        placeholder={`e.g. ${idx + 1}. The Changing Tech Landscape`}
                        aria-label="Section Header Title"
                        style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem', fontWeight: 800, color: '#000648' }}
                      />
                    </div>

                    <div>
                      <label htmlFor={`sec-content-${idx}`} style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569', display: 'block', marginBottom: '4px' }}>Section Detailed Paragraph Content</label>
                      <textarea
                        id={`sec-content-${idx}`}
                        rows={4}
                        value={sec.content || ''}
                        onChange={(e) => handleUpdateSection(idx, 'content', e.target.value)}
                        placeholder="Write detailed paragraphs, statistics, or case studies for this section..."
                        aria-label="Section Detailed Paragraph Content"
                        style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem', lineHeight: 1.5 }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                      <div>
                        <label htmlFor={`sec-img-${idx}`} style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569', display: 'block', marginBottom: '4px' }}>Section Inline Photo URL</label>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <input
                            id={`sec-img-${idx}`}
                            type="text"
                            value={sec.image || ''}
                            onChange={(e) => handleUpdateSection(idx, 'image', e.target.value)}
                            placeholder="https://images.unsplash.com/photo-..."
                            aria-label="Section Inline Photo URL"
                            style={{ flex: 1, padding: '8px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
                          />
                          <button
                            type="button"
                            onClick={() => { setActiveImageTarget(idx); setPickerOpen(true); }}
                            style={{ padding: '8px 12px', background: '#115DFC', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer', fontSize: '0.78rem' }}
                          >
                            Choose
                          </button>
                        </div>
                      </div>

                      <div>
                        <label htmlFor={`sec-caption-${idx}`} style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569', display: 'block', marginBottom: '4px' }}>Photo Caption</label>
                        <input
                          id={`sec-caption-${idx}`}
                          type="text"
                          value={sec.caption || ''}
                          onChange={(e) => handleUpdateSection(idx, 'caption', e.target.value)}
                          placeholder="e.g. Masterclass in session at Perungudi campus."
                          aria-label="Photo Caption"
                          style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
                        />
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Actions */}
          <div style={{
            padding: '16px 24px', borderTop: '1.5px solid #e2e8f0', background: '#f8fafc',
            display: 'flex', justifyContent: 'flex-end', gap: '12px', flexShrink: 0
          }}>
            <button
              type="button"
              onClick={onClose}
              style={{ padding: '10px 20px', background: '#e2e8f0', color: '#475569', border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer', fontSize: '0.86rem' }}
            >
              Cancel
            </button>

            <button
              type="submit"
              style={{
                padding: '10px 28px', background: '#000648', color: '#f2b733',
                border: 'none', borderRadius: '8px', fontWeight: 900, fontSize: '0.88rem',
                cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,6,72,0.3)', display: 'flex', alignItems: 'center', gap: '6px'
              }}
            >
              <HiCheck size={18} /> Save & Publish Article
            </button>
          </div>
        </form>
      </div>

      {pickerOpen && (
        <ImagePickerModal
          isOpen={pickerOpen}
          onClose={() => setPickerOpen(false)}
          currentImage={activeImageTarget === null ? formData.image : (formData.sections[activeImageTarget]?.image || '')}
          currentPosition={activeImageTarget === null ? (formData.imagePosition || formData.position || 'center center') : (formData.sections[activeImageTarget]?.imagePosition || formData.sections[activeImageTarget]?.position || 'center center')}
          currentFit={activeImageTarget === null ? (formData.imageFit || formData.fit || 'cover') : (formData.sections[activeImageTarget]?.imageFit || formData.sections[activeImageTarget]?.fit || 'cover')}
          currentZoom={activeImageTarget === null ? (formData.imageZoom || formData.zoom || 1) : (formData.sections[activeImageTarget]?.imageZoom || formData.sections[activeImageTarget]?.zoom || 1)}
          onSelectImage={(url, pos, fit, zoom) => {
            if (activeImageTarget === null) {
              setFormData((prev) => ({
                ...prev,
                image: url,
                imagePosition: pos || 'center center',
                position: pos || 'center center',
                imageFit: fit || 'cover',
                fit: fit || 'cover',
                imageZoom: zoom || 1,
                zoom: zoom || 1
              }));
            } else {
              setFormData((prev) => {
                const nextSections = [...(prev.sections || [])];
                if (nextSections[activeImageTarget]) {
                  nextSections[activeImageTarget] = {
                    ...nextSections[activeImageTarget],
                    image: url,
                    imagePosition: pos || 'center center',
                    position: pos || 'center center',
                    imageFit: fit || 'cover',
                    fit: fit || 'cover',
                    imageZoom: zoom || 1,
                    zoom: zoom || 1
                  };
                }
                return { ...prev, sections: nextSections };
              });
            }
            setPickerOpen(false);
          }}
          targetArea="Magazine Article Image"
          aspectRatio="Landscape (16:9)"
          recommendedDimensions="1200 x 675 px"
        />
      )}
    </div>
  );

  return typeof document !== 'undefined'
    ? ReactDOM.createPortal(modalJSX, document.body)
    : modalJSX;
}
