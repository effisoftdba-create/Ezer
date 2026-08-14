import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSiteData } from '../context/SiteContext';
import { HiPlus, HiTrash, HiPencil, HiNewspaper, HiBadgeCheck, HiPhotograph, HiCalendar, HiX, HiSparkles } from 'react-icons/hi';
import ImagePickerModal from './ImagePickerModal';
import ArticleFormModal from './ArticleFormModal';

/* ────────────────────────────────────────────────────────────
   ACHIEVEMENT SECTION (Centered Portal Modal Form)
   ──────────────────────────────────────────────────────────── */
function AchievementSection({ achievements, addAchievement, updateAchievement, deleteAchievement, onOpenPicker, externalImage }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editingAchId, setEditingAchId] = useState(null);
  const [achForm, setAchForm] = useState({
    title: '',
    issuer: '',
    year: new Date().getFullYear().toString(),
    category: 'Excellence Award',
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=800',
    desc: ''
  });

  const achTitle = achForm.title;
  const setAchTitle = (v) => setAchForm((prev) => ({ ...prev, title: v }));
  const achIssuer = achForm.issuer;
  const setAchIssuer = (v) => setAchForm((prev) => ({ ...prev, issuer: v }));
  const achYear = achForm.year;
  const setAchYear = (v) => setAchForm((prev) => ({ ...prev, year: v }));
  const achCategory = achForm.category;
  const setAchCategory = (v) => setAchForm((prev) => ({ ...prev, category: v }));
  const achImage = achForm.image;
  const setAchImage = (v) => setAchForm((prev) => ({ ...prev, image: v }));
  const achDesc = achForm.desc;
  const setAchDesc = (v) => setAchForm((prev) => ({ ...prev, desc: v }));

  const currentImage = externalImage || achImage;

  const handleOpenAdd = () => {
    setEditingAchId(null);
    setAchForm({
      title: '',
      issuer: '',
      year: new Date().getFullYear().toString(),
      category: 'Excellence Award',
      image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=800',
      desc: ''
    });
    setIsEditing(true);
  };

  const handleEditClick = (ach) => {
    setEditingAchId(ach.id);
    setAchForm({
      title: ach.title || '',
      issuer: ach.issuer || '',
      year: ach.year || '',
      category: ach.category || 'Excellence Award',
      image: ach.image || '',
      desc: ach.description || ''
    });
    setIsEditing(true);
  };

  const handleSubmitAchievement = (e) => {
    e.preventDefault();
    if (!achTitle.trim()) return alert('Please enter achievement title');

    const payload = {
      title: achTitle.trim(),
      issuer: achIssuer.trim(),
      year: achYear.trim(),
      category: achCategory,
      image: currentImage ? currentImage.trim() : '',
      description: achDesc.trim()
    };

    if (editingAchId && updateAchievement) {
      updateAchievement(editingAchId, payload);
    } else {
      addAchievement(payload);
    }

    setIsEditing(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#000648', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <HiBadgeCheck size={22} color="#f2b733" /> Honors, Medals & Verified Credentials
        </h3>
        <button
          type="button"
          onClick={handleOpenAdd}
          style={{ padding: '9px 18px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 900, fontSize: '0.84rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <HiPlus size={16} /> Add New Honor / Award
        </button>
      </div>

      {isEditing && ReactDOM.createPortal(
        <div
          role="presentation"
          onClick={(e) => { if (e.target === e.currentTarget) setIsEditing(false); }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0, 6, 72, 0.82)', backdropFilter: 'blur(6px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '16px', animation: 'fadeIn 0.2s ease'
          }}
        >
          <div style={{
            background: '#ffffff', borderRadius: '16px', width: '100%', maxWidth: '580px',
            boxShadow: '0 25px 50px -12px rgba(0, 6, 72, 0.4)', border: '1.5px solid #e2e8f0',
            overflow: 'hidden', display: 'flex', flexDirection: 'column', maxHeight: '90vh'
          }}>
            <div style={{ background: '#000648', padding: '16px 20px', color: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.7rem', fontWeight: 900, color: '#f2b733', textTransform: 'uppercase', letterSpacing: '0.08em' }}>HONORS EDITOR</span>
                <h3 style={{ margin: '2px 0 0 0', fontSize: '1.1rem', fontWeight: 900, color: '#ffffff' }}>
                  {editingAchId ? 'Edit EZER Award / Achievement' : 'Add New EZER Award / Achievement'}
                </h3>
              </div>
              <button
                type="button"
                aria-label="Close honors editor modal"
                onClick={() => setIsEditing(false)}
                style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#ffffff', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <HiX size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmitAchievement} style={{ padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label htmlFor="ach-title-input" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Award / Achievement Title *</label>
                <input id="ach-title-input" type="text" placeholder="e.g. EdTech Excellence & Innovation Award 2025" value={achTitle} onChange={(e) => setAchTitle(e.target.value)} style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }} required />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 120px', gap: '14px' }}>
                <div>
                  <label htmlFor="ach-issuer-input" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Issuing Authority</label>
                  <input id="ach-issuer-input" type="text" placeholder="e.g. National Skill Development Forum" value={achIssuer} onChange={(e) => setAchIssuer(e.target.value)} style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }} />
                </div>
                <div>
                  <label htmlFor="ach-year-input" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Year</label>
                  <input id="ach-year-input" type="text" value={achYear} onChange={(e) => setAchYear(e.target.value)} style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: '14px' }}>
                <div>
                  <label htmlFor="ach-category-select" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Category</label>
                  <select id="ach-category-select" value={achCategory} onChange={(e) => setAchCategory(e.target.value)} style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem', background: '#fff' }}>
                    <option value="Excellence Award">Excellence Award</option>
                    <option value="Placement Award">Placement Award</option>
                    <option value="Innovation Award">Innovation Award</option>
                    <option value="Milestone Honor">Milestone Honor</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="ach-image-input" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Achievement Image URL</label>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <input id="ach-image-input" type="text" placeholder="https://images.unsplash.com/..." value={currentImage} onChange={(e) => setAchImage(e.target.value)} style={{ flex: 1, minWidth: 0, padding: '9px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }} />
                    <button type="button" onClick={onOpenPicker} style={{ padding: '9px 14px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 800, fontSize: '0.78rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', whiteSpace: 'nowrap' }}>
                      <HiPhotograph size={15} /> Choose
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="ach-desc-textarea" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Description</label>
                <textarea id="ach-desc-textarea" rows={3} placeholder="Brief description of the award or achievement..." value={achDesc} onChange={(e) => setAchDesc(e.target.value)} style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }} />
              </div>

              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', paddingTop: '12px', borderTop: '1px solid #e2e8f0', marginTop: '4px' }}>
                <button type="button" onClick={() => setIsEditing(false)} style={{ padding: '9px 18px', background: '#f1f5f9', color: '#475569', border: '1px solid #cbd5e1', borderRadius: '8px', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer' }}>
                  Cancel
                </button>
                <button type="submit" style={{ padding: '9px 22px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 900, fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', boxShadow: '0 4px 12px rgba(0,6,72,0.2)' }}>
                  <HiBadgeCheck size={18} /> Save Honor / Award
                </button>
              </div>
            </form>
          </div>
        </div>,
        document.body
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '18px' }}>
        {(achievements || []).map((ach) => (
          <div key={ach.id} style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', background: '#000' }}>
              <img src={ach.image} alt={ach.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <span style={{ position: 'absolute', top: '10px', left: '10px', background: '#000648', color: '#f2b733', fontWeight: 900, fontSize: '0.7rem', padding: '3px 10px', borderRadius: '50px' }}>
                {ach.year} • {ach.category}
              </span>
            </div>
            <div style={{ padding: '14px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#115DFC', textTransform: 'uppercase' }}>{ach.category}</span>
                <h4 style={{ fontSize: '0.94rem', fontWeight: 800, color: '#000648', marginTop: '4px', lineHeight: 1.3 }}>{ach.title}</h4>
                <p style={{ fontSize: '0.76rem', color: '#64748b', marginTop: '2px', fontWeight: 700 }}>Issued by: {ach.issuer}</p>
                <p style={{ fontSize: '0.78rem', color: '#475569', marginTop: '8px', lineHeight: 1.4 }}>{ach.description}</p>
              </div>

              <div style={{ display: 'flex', gap: '8px', marginTop: '14px', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  onClick={() => handleEditClick(ach)}
                  style={{ padding: '6px 12px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  <HiPencil size={14} /> Edit
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm(`Delete honor "${ach.title}"?`)) deleteAchievement(ach.id);
                  }}
                  style={{ padding: '6px 10px', background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', borderRadius: '6px', fontSize: '0.76rem', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  <HiTrash size={14} /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   BLOG / ARTICLE SECTION — Full CRUD with ArticleFormModal
   ──────────────────────────────────────────────────────────── */
function BlogSection({ blogs, addBlog, updateBlog, deleteBlog }) {
  const [articleModalOpen, setArticleModalOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);

  const handleOpenAdd = () => {
    setEditingArticle(null);
    setArticleModalOpen(true);
  };

  const handleOpenEdit = (blog) => {
    setEditingArticle(blog);
    setArticleModalOpen(true);
  };

  const handleSaveArticle = (payload) => {
    if (payload.id) {
      updateBlog(payload.id, payload);
    } else {
      const hasFeaturedAlready = (blogs || []).some((b) => b && b.featured);
      const newPayload = {
        ...payload,
        id: `blog-${Date.now()}`,
        date: payload.date || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        featured: !hasFeaturedAlready // Only featured if it's the very first article and none exists
      };
      addBlog(newPayload);
    }
  };

  const handleSetCoverStory = (targetBlog) => {
    (blogs || []).forEach((b) => {
      updateBlog(b.id, { ...b, featured: b.id === targetBlog.id });
    });
  };

  const coverBlogId = (blogs && Array.isArray(blogs) && (blogs.find(b => b && b.featured) || blogs[0]))?.id;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 900, color: '#000648' }}>
            Published Magazine Articles ({(blogs || []).length})
          </h3>
          <span style={{ fontSize: '0.78rem', color: '#64748b' }}>
            Manage Hero Cover Story and Editorial Tech Articles rendered on the website.
          </span>
        </div>
        <button
          type="button"
          onClick={handleOpenAdd}
          style={{ padding: '10px 20px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '10px', fontWeight: 900, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.86rem' }}
        >
          <HiPlus size={18} /> Publish New Article
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '18px' }}>
        {(blogs || []).map((blog) => {
          const isCover = blog.id === coverBlogId;
          return (
            <div
              key={blog.id}
              style={{
                background: '#ffffff',
                border: isCover ? '2px solid #f2b733' : '1.5px solid #e2e8f0',
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: isCover ? '0 6px 20px rgba(242, 183, 51, 0.25)' : '0 4px 12px rgba(0,0,0,0.03)',
                position: 'relative'
              }}
            >
              <div style={{ position: 'relative', width: '100%', height: '210px', minHeight: '210px', maxHeight: '210px', aspectRatio: '16 / 9', overflow: 'hidden', background: '#0a0f2d', flexShrink: 0 }}>
                <img
                  loading="lazy"
                  src={blog.image}
                  alt={blog.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: blog.position || blog.imagePosition || 'center center',
                    display: 'block'
                  }}
                />
                <span style={{ position: 'absolute', top: '10px', left: '10px', background: '#000648', color: '#f2b733', fontSize: '0.7rem', fontWeight: 900, padding: '3px 10px', borderRadius: '50px' }}>
                  {blog.category}
                </span>
                {isCover && (
                  <span style={{ position: 'absolute', top: '10px', right: '10px', background: '#f2b733', color: '#000648', fontSize: '0.68rem', fontWeight: 900, padding: '4px 10px', borderRadius: '50px', boxShadow: '0 2px 8px rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <HiSparkles size={12} /> HERO COVER STORY
                  </span>
                )}
              </div>

              <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontSize: '0.98rem', fontWeight: 800, color: '#000648', lineHeight: 1.35 }}>{blog.title}</h4>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <HiCalendar size={13} /> {blog.date} • by {blog.author}
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#475569', marginTop: '10px', lineHeight: 1.5 }}>{blog.summary}</p>
                  {blog.sections && blog.sections.length > 0 && (
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#115DFC', marginTop: '6px', display: 'inline-block' }}>
                      {blog.sections.length} content section{blog.sections.length > 1 ? 's' : ''}
                    </span>
                  )}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '14px', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px', borderTop: '1px solid #f1f5f9' }}>
                  {!isCover ? (
                    <button
                      type="button"
                      onClick={() => handleSetCoverStory(blog)}
                      style={{ padding: '5px 10px', background: '#fef3c7', border: '1px solid #fde68a', color: '#92400e', borderRadius: '6px', fontSize: '0.74rem', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                    >
                      <HiSparkles size={12} /> Set as Cover Story
                    </button>
                  ) : (
                    <span style={{ fontSize: '0.72rem', fontWeight: 900, color: '#d97706', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <HiBadgeCheck size={14} /> Active Cover Story
                    </span>
                  )}

                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button
                      type="button"
                      onClick={() => handleOpenEdit(blog)}
                      style={{ padding: '6px 12px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                    >
                      <HiPencil size={14} /> Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (window.confirm(`Delete article "${blog.title}"?`)) deleteBlog(blog.id);
                      }}
                      style={{ padding: '6px 10px', background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', borderRadius: '6px', fontSize: '0.76rem', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                    >
                      <HiTrash size={14} /> Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <ArticleFormModal
        isOpen={articleModalOpen}
        onClose={() => { setArticleModalOpen(false); setEditingArticle(null); }}
        editingArticle={editingArticle}
        onSave={handleSaveArticle}
      />
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   EXECUTIVE SECTION — CEO Editorial Card Style with tagline/headline
   ──────────────────────────────────────────────────────────── */
export function ExecutiveSection({ executiveLeaders, updateExecutiveLeader }) {
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    roleTag: 'CEO', roleName: 'Chief Executive Officer',
    name: '', image: '', bio: '',
    tagline: 'From problem to solution.',
    headline: 'A creative and strategic transformation partner for bold businesses.',
    imagePosition: 'center top',
    imageFit: 'cover',
    imageTransform: 'none'
  });
  const [pickerOpen, setPickerOpen] = useState(false);

  const handleEdit = (exec) => {
    setEditingId(exec.id || exec.roleTag);
    setFormData({
      roleTag: exec.roleTag || 'CEO',
      roleName: exec.roleName || 'Chief Executive Officer',
      name: exec.name || '',
      image: exec.image || '',
      bio: exec.bio || '',
      tagline: exec.tagline || 'From problem to solution.',
      headline: exec.headline || 'A creative and strategic transformation partner for bold businesses.',
      imagePosition: exec.imagePosition || exec.position || 'center top',
      imageFit: exec.imageFit || exec.fit || 'cover',
      imageZoom: exec.imageZoom || exec.zoom || 1,
      imageTransform: exec.imageTransform || 'none'
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.image.trim()) {
      alert('Executive Name and Photo URL are required.');
      return;
    }
    updateExecutiveLeader(editingId, formData);
    setEditingId(null);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '14px', padding: '20px' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#000648', marginBottom: '4px', margin: 0 }}>
          Executive Leadership Board (CEO, CFO, CMTO)
        </h3>
        <p style={{ fontSize: '0.82rem', color: '#64748b', margin: '4px 0 0 0' }}>
          Click "Edit Executive Photo & Role" on any board member card to update their editorial photos, headlines, and leadership bio.
        </p>
      </div>

      {/* Executive Modal Portal */}
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
            background: '#ffffff', borderRadius: '16px', width: '100%', maxWidth: '600px',
            boxShadow: '0 25px 50px -12px rgba(0, 6, 72, 0.4)', border: '1.5px solid #e2e8f0',
            overflow: 'hidden', display: 'flex', flexDirection: 'column', maxHeight: '90vh'
          }}>
            <div style={{ background: '#000648', padding: '16px 20px', color: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.7rem', fontWeight: 900, color: '#f2b733', textTransform: 'uppercase', letterSpacing: '0.08em' }}>EXECUTIVE BOARD EDITOR</span>
                <h3 style={{ margin: '2px 0 0 0', fontSize: '1.1rem', fontWeight: 900, color: '#ffffff' }}>
                  Editing: {formData.roleTag} ({formData.roleName})
                </h3>
              </div>
              <button
                type="button"
                aria-label="Close executive board editor modal"
                onClick={() => setEditingId(null)}
                style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#ffffff', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <HiX size={18} />
              </button>
            </div>

            <form onSubmit={handleSave} style={{ padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr 1fr', gap: '12px' }}>
                <div>
                  <label htmlFor="exec_role_tag" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Role Tag*</label>
                  <input id="exec_role_tag" type="text" value={formData.roleTag} onChange={(e) => setFormData((prev) => ({ ...prev, roleTag: e.target.value }))} style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} required />
                </div>
                <div>
                  <label htmlFor="exec_role_name" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Full Role Name*</label>
                  <input id="exec_role_name" type="text" value={formData.roleName} onChange={(e) => setFormData((prev) => ({ ...prev, roleName: e.target.value }))} style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} required />
                </div>
                <div>
                  <label htmlFor="exec_officer_name" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Executive Name*</label>
                  <input id="exec_officer_name" type="text" value={formData.name} onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))} style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} required />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label htmlFor="exec_tagline" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Editorial Tagline</label>
                  <input id="exec_tagline" type="text" value={formData.tagline} onChange={(e) => setFormData((prev) => ({ ...prev, tagline: e.target.value }))} placeholder="e.g. From problem to solution." style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} />
                </div>
                <div>
                  <label htmlFor="exec_headline" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Serif Headline</label>
                  <input id="exec_headline" type="text" value={formData.headline} onChange={(e) => setFormData((prev) => ({ ...prev, headline: e.target.value }))} placeholder="e.g. A creative partner..." style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} />
                </div>
              </div>

              <div>
                <label htmlFor="exec_photo_url" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Photo Source / URL</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input id="exec_photo_url" type="text" value={formData.image} onChange={(e) => setFormData((prev) => ({ ...prev, image: e.target.value }))} style={{ flex: 1, minWidth: 0, padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} required />
                  <button type="button" onClick={() => setPickerOpen(true)} style={{ padding: '8px 14px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '6px', fontWeight: 800, fontSize: '0.78rem', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                    Choose Photo
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        imagePosition: 'center top',
                        position: 'center top',
                        imageFit: 'cover',
                        fit: 'cover',
                        imageZoom: 1,
                        zoom: 1
                      }));
                      alert('Executive photo alignment & zoom reset to default center top.');
                    }}
                    title="Reset executive photo alignment to default center top"
                    style={{
                      padding: '8px 12px', background: '#f1f5f9', color: '#000648',
                      border: '1.5px solid #cbd5e1', borderRadius: '6px', fontWeight: 700,
                      fontSize: '0.78rem', cursor: 'pointer', whiteSpace: 'nowrap'
                    }}
                  >
                    ↺ Reset Alignment
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="exec_bio" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '4px' }}>Leadership Bio</label>
                <textarea id="exec_bio" rows={3} value={formData.bio} onChange={(e) => setFormData((prev) => ({ ...prev, bio: e.target.value }))} placeholder="Brief leadership bio..." style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', paddingTop: '12px', borderTop: '1px solid #e2e8f0', marginTop: '4px' }}>
                <button type="button" onClick={() => setEditingId(null)} style={{ padding: '8px 16px', background: '#f1f5f9', color: '#475569', border: '1px solid #cbd5e1', borderRadius: '6px', fontWeight: 700, fontSize: '0.84rem', cursor: 'pointer' }}>
                  Cancel
                </button>
                <button type="submit" style={{ padding: '8px 20px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '6px', fontWeight: 900, fontSize: '0.84rem', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,6,72,0.2)' }}>
                  Save Executive Details
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
                      imagePosition: pos || prev.imagePosition || 'center top',
                      imageFit: fit || prev.imageFit || 'cover',
                      imageZoom: zoom || prev.imageZoom || 1
                    }));
                    setPickerOpen(false);
                  }}
                  targetArea={`Executive Photo (${formData.roleTag})`}
                  aspectRatio="Portrait (340:360)"
                  recommendedDimensions="700 x 740 px"
                />
              )}
            </form>
          </div>
        </div>,
        document.body
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '18px' }}>
        {(executiveLeaders || []).map((exec) => (
          <div key={exec.id || exec.roleTag} style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '14px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
            <div style={{ position: 'relative', height: '220px', background: '#000648' }}>
              <img src={exec.image} alt={exec.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <span style={{ position: 'absolute', top: '10px', left: '10px', background: '#000648', color: '#f2b733', fontWeight: 900, fontSize: '0.72rem', padding: '4px 12px', borderRadius: '50px', border: '1px solid #f2b733' }}>
                {exec.roleTag}
              </span>
            </div>

            <div style={{ padding: '14px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h4 style={{ margin: '0 0 2px 0', fontSize: '1rem', fontWeight: 900, color: '#000648' }}>{exec.name}</h4>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#115DFC', marginBottom: '4px' }}>{exec.roleName}</div>
                {exec.tagline && <div style={{ fontSize: '0.72rem', color: '#64748b', fontStyle: 'italic' }}>{exec.tagline}</div>}
              </div>

              <button
                type="button"
                onClick={() => handleEdit(exec)}
                style={{ marginTop: '10px', padding: '8px 14px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '6px', fontWeight: 800, fontSize: '0.78rem', cursor: 'pointer' }}
              >
                Edit Executive Photo & Role
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BlogManager({ initialSubTab = 'blogs', hideSubTabs = false }) {
  const { blogs, addBlog, updateBlog, deleteBlog, achievements, addAchievement, updateAchievement, deleteAchievement, executiveLeaders, updateExecutiveLeader } = useSiteData();
  const [activeSubTab, setActiveSubTab] = useState(initialSubTab);
  const [achPickerOpen, setAchPickerOpen] = useState(false);
  const [achPickedImage, setAchPickedImage] = useState('');

  useEffect(() => {
    if (initialSubTab) {
      setActiveSubTab(initialSubTab);
    }
  }, [initialSubTab]);

  const isBlogs = activeSubTab === 'blogs';
  const isAchievements = activeSubTab === 'achievements';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1.5px solid #e2e8f0', paddingBottom: '16px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#000648', display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
            {isAchievements ? (
              <>
                <HiBadgeCheck size={26} style={{ color: '#f2b733' }} />
                EZER Awards & Verified Honors Management
              </>
            ) : (
              <>
                <HiNewspaper size={26} style={{ color: '#f2b733' }} />
                Magazine Articles & Editorial Content Management
              </>
            )}
          </h2>
          <p style={{ fontSize: '0.84rem', color: '#64748b', marginTop: '4px', margin: 0 }}>
            {isAchievements ? (
              'Create, edit, or delete national skill development awards, honors, issuer names, and badges displayed on the website.'
            ) : (
              'Create, edit, or delete full editorial magazine articles with multi-section content and inline photos.'
            )}
          </p>
        </div>

        {!hideSubTabs && (
          <div style={{ display: 'flex', gap: '8px', background: '#000648', padding: '6px', borderRadius: '12px', border: '1.5px solid #f2b733' }}>
            <button
              type="button"
              onClick={() => setActiveSubTab('blogs')}
              style={{
                padding: '10px 18px', borderRadius: '8px', border: 'none',
                fontWeight: 900, fontSize: '0.86rem', cursor: 'pointer',
                background: activeSubTab === 'blogs' ? '#f2b733' : 'transparent',
                color: activeSubTab === 'blogs' ? '#000648' : '#ffffff',
                display: 'flex', alignItems: 'center', gap: '6px',
                boxShadow: activeSubTab === 'blogs' ? '0 4px 12px rgba(242,183,51,0.3)' : 'none'
              }}
            >
              <HiNewspaper size={18} /> Blog & Magazine Articles ({ (blogs || []).length })
            </button>

            <button
              type="button"
              onClick={() => setActiveSubTab('achievements')}
              style={{
                padding: '10px 18px', borderRadius: '8px', border: 'none',
                fontWeight: 900, fontSize: '0.86rem', cursor: 'pointer',
                background: activeSubTab === 'achievements' ? '#f2b733' : 'transparent',
                color: activeSubTab === 'achievements' ? '#000648' : '#ffffff',
                display: 'flex', alignItems: 'center', gap: '6px',
                boxShadow: activeSubTab === 'achievements' ? '0 4px 12px rgba(242,183,51,0.3)' : 'none'
              }}
            >
              <HiBadgeCheck size={18} /> EZER Achievements ({ (achievements || []).length })
            </button>
          </div>
        )}
      </div>

      {activeSubTab === 'executive' && (
        <ExecutiveSection
          executiveLeaders={executiveLeaders}
          updateExecutiveLeader={updateExecutiveLeader}
        />
      )}

      {activeSubTab === 'achievements' && (
        <AchievementSection
          achievements={achievements}
          addAchievement={addAchievement}
          updateAchievement={updateAchievement}
          deleteAchievement={deleteAchievement}
          onOpenPicker={() => setAchPickerOpen(true)}
          externalImage={achPickedImage}
        />
      )}

      {activeSubTab === 'blogs' && (
        <BlogSection
          blogs={blogs}
          addBlog={addBlog}
          updateBlog={updateBlog}
          deleteBlog={deleteBlog}
        />
      )}

      {achPickerOpen && (
        <ImagePickerModal
          isOpen={achPickerOpen}
          onClose={() => setAchPickerOpen(false)}
          onSelectImage={(url) => { setAchPickedImage(url); setAchPickerOpen(false); }}
        />
      )}
    </div>
  );
}
