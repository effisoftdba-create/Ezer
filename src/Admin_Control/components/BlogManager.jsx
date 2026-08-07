import React, { useState } from 'react';
import { useSiteData } from '../context/SiteContext';
import { HiPlus, HiTrash, HiPencil, HiNewspaper, HiBadgeCheck, HiPhotograph, HiCalendar } from 'react-icons/hi';
import ImagePickerModal from './ImagePickerModal';
import ArticleFormModal from './ArticleFormModal';

/* ────────────────────────────────────────────────────────────
   ACHIEVEMENT SECTION (unchanged logic, kept compact)
   ──────────────────────────────────────────────────────────── */
function AchievementSection({ achievements, addAchievement, deleteAchievement, onOpenPicker, externalImage }) {
  const [achTitle, setAchTitle] = useState('');
  const [achIssuer, setAchIssuer] = useState('');
  const [achYear, setAchYear] = useState(() => new Date().getFullYear().toString());
  const [achCategory, setAchCategory] = useState('Excellence Award');
  const [achImage, setAchImage] = useState('https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=800');
  const [achDesc, setAchDesc] = useState('');

  const currentImage = externalImage || achImage;

  const handleAddAchievement = (e) => {
    e.preventDefault();
    if (!achTitle.trim()) return alert('Please enter achievement title');
    addAchievement({
      title: achTitle.trim(),
      issuer: achIssuer.trim() || 'EZER Learning Solutions',
      year: achYear.trim() || '2025',
      category: achCategory,
      image: currentImage.trim(),
      description: achDesc.trim() || 'Awarded for tech training excellence and verified student outcomes.'
    });
    setAchTitle('');
    setAchIssuer('');
    setAchDesc('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      <form onSubmit={handleAddAchievement} style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#000648', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <HiPlus size={18} /> Add New EZER Award / Achievement
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 120px', gap: '14px' }}>
          <div>
            <label htmlFor="ach-title-input" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569', display: 'block', marginBottom: '4px' }}>Award / Achievement Title*</label>
            <input id="ach-title-input" type="text" placeholder="e.g. EdTech Excellence & Innovation Award 2025" value={achTitle} onChange={(e) => setAchTitle(e.target.value)} style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} required />
          </div>
          <div>
            <label htmlFor="ach-issuer-input" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569', display: 'block', marginBottom: '4px' }}>Issuing Authority</label>
            <input id="ach-issuer-input" type="text" placeholder="e.g. National Skill Development Forum" value={achIssuer} onChange={(e) => setAchIssuer(e.target.value)} style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} />
          </div>
          <div>
            <label htmlFor="ach-year-input" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569', display: 'block', marginBottom: '4px' }}>Year</label>
            <input id="ach-year-input" type="text" value={achYear} onChange={(e) => setAchYear(e.target.value)} style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr auto', gap: '14px', alignItems: 'flex-end' }}>
          <div>
            <label htmlFor="ach-category-select" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569', display: 'block', marginBottom: '4px' }}>Category</label>
            <select id="ach-category-select" value={achCategory} onChange={(e) => setAchCategory(e.target.value)} style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem', background: '#fff' }}>
              <option value="Excellence Award">Excellence Award</option>
              <option value="Placement Award">Placement Award</option>
              <option value="Innovation Award">Innovation Award</option>
              <option value="Milestone Honor">Milestone Honor</option>
            </select>
          </div>
          <div>
            <label htmlFor="ach-image-input" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569', display: 'block', marginBottom: '4px' }}>Achievement Image URL</label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input id="ach-image-input" type="text" placeholder="https://images.unsplash.com/..." value={currentImage} onChange={(e) => setAchImage(e.target.value)} style={{ flex: 1, padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} />
              <button type="button" onClick={onOpenPicker} style={{ padding: '10px 14px', borderRadius: '8px', background: '#e2e8f0', color: '#000648', fontWeight: 800, fontSize: '0.8rem', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <HiPhotograph size={16} /> Choose
              </button>
            </div>
          </div>
          <button type="submit" style={{ padding: '10px 20px', background: '#000648', color: '#f2b733', fontWeight: 900, borderRadius: '8px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <HiBadgeCheck size={18} /> Add Award
          </button>
        </div>

        <div>
          <label htmlFor="ach-desc-textarea" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569', display: 'block', marginBottom: '4px' }}>Description</label>
          <textarea id="ach-desc-textarea" rows={2} placeholder="Brief description of the award or achievement..." value={achDesc} onChange={(e) => setAchDesc(e.target.value)} style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }} />
        </div>
      </form>

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
              <button type="button" onClick={() => deleteAchievement(ach.id)} style={{ marginTop: '14px', padding: '6px 12px', background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', borderRadius: '6px', fontSize: '0.76rem', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', alignSelf: 'flex-end' }}>
                <HiTrash size={14} /> Remove Award
              </button>
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
      const newPayload = {
        ...payload,
        id: `blog-${Date.now()}`,
        date: payload.date || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        featured: true
      };
      addBlog(newPayload);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header with Add Button */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 900, color: '#000648' }}>
            Published Magazine Articles ({(blogs || []).length})
          </h3>
          <span style={{ fontSize: '0.78rem', color: '#64748b' }}>
            Create, edit, or remove full editorial magazine articles with multi-section content and inline photos.
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

      {/* Blog Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '18px' }}>
        {(blogs || []).map((blog) => (
          <div key={blog.id} style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', background: '#000' }}>
              <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <span style={{ position: 'absolute', top: '10px', left: '10px', background: '#000648', color: '#f2b733', fontSize: '0.7rem', fontWeight: 900, padding: '3px 10px', borderRadius: '50px' }}>
                {blog.category}
              </span>
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

              <div style={{ display: 'flex', gap: '8px', marginTop: '14px', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  onClick={() => handleOpenEdit(blog)}
                  style={{ padding: '6px 14px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  <HiPencil size={14} /> Edit Article
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm(`Delete article "${blog.title}"?`)) deleteBlog(blog.id);
                  }}
                  style={{ padding: '6px 12px', background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', borderRadius: '6px', fontSize: '0.76rem', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  <HiTrash size={14} /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Article Form Modal (Portal-based) */}
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
function ExecutiveSection({ executiveLeaders, updateExecutiveLeader }) {
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    roleTag: 'CEO', roleName: 'Chief Executive Officer',
    name: '', image: '', bio: '',
    tagline: 'From problem to solution.',
    headline: 'A creative and strategic transformation partner for bold businesses.'
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
      headline: exec.headline || 'A creative and strategic transformation partner for bold businesses.'
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
        <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#000648', marginBottom: '12px' }}>
          Edit Executive Leaders (CEO, CFO, CTHM) Photo, Editorial Headline & Details
        </h3>
        <p style={{ fontSize: '0.82rem', color: '#64748b', margin: '0 0 16px 0' }}>
          Update executive board photos, editorial taglines, serif headlines, role names, and leadership bios displayed in the luxury editorial showcase section.
        </p>

        {editingId ? (
          <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '14px', background: '#ffffff', padding: '16px', borderRadius: '12px', border: '1.5px solid #000648' }}>
            <h4 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#000648', margin: 0 }}>
              Editing: {formData.roleTag} ({formData.roleName})
            </h4>

            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr 1fr', gap: '12px' }}>
              <div>
                <label htmlFor="exec_role_tag" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569', display: 'block', marginBottom: '4px' }}>Role Tag*</label>
                <input id="exec_role_tag" type="text" value={formData.roleTag} onChange={(e) => setFormData((prev) => ({ ...prev, roleTag: e.target.value }))} style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.84rem' }} required />
              </div>
              <div>
                <label htmlFor="exec_role_name" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569', display: 'block', marginBottom: '4px' }}>Full Role Name*</label>
                <input id="exec_role_name" type="text" value={formData.roleName} onChange={(e) => setFormData((prev) => ({ ...prev, roleName: e.target.value }))} style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.84rem' }} required />
              </div>
              <div>
                <label htmlFor="exec_officer_name" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569', display: 'block', marginBottom: '4px' }}>Executive Officer Name*</label>
                <input id="exec_officer_name" type="text" value={formData.name} onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))} style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.84rem' }} required />
              </div>
            </div>

            {/* New Editorial Tagline & Headline Fields */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label htmlFor="exec_tagline" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569', display: 'block', marginBottom: '4px' }}>Editorial Tagline (Italic Intro)</label>
                <input id="exec_tagline" type="text" value={formData.tagline} onChange={(e) => setFormData((prev) => ({ ...prev, tagline: e.target.value }))} placeholder="e.g. From problem to solution." style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.84rem' }} />
              </div>
              <div>
                <label htmlFor="exec_headline" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569', display: 'block', marginBottom: '4px' }}>Serif Headline (Big Text)</label>
                <input id="exec_headline" type="text" value={formData.headline} onChange={(e) => setFormData((prev) => ({ ...prev, headline: e.target.value }))} placeholder="e.g. A creative and strategic transformation partner..." style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.84rem' }} />
              </div>
            </div>

            <div>
              <label htmlFor="exec_photo_url" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569', display: 'block', marginBottom: '4px' }}>Photo Source / URL</label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input id="exec_photo_url" type="text" value={formData.image} onChange={(e) => setFormData((prev) => ({ ...prev, image: e.target.value }))} style={{ flex: 1, padding: '8px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.84rem' }} required />
                <button type="button" onClick={() => setPickerOpen(true)} style={{ padding: '8px 14px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '6px', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer' }}>
                  Choose Photo
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="exec_bio" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569', display: 'block', marginBottom: '4px' }}>Leadership Bio</label>
              <textarea id="exec_bio" rows={2} value={formData.bio} onChange={(e) => setFormData((prev) => ({ ...prev, bio: e.target.value }))} placeholder="Brief leadership bio..." style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.84rem' }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '8px' }}>
              <button type="button" onClick={() => setEditingId(null)} style={{ padding: '6px 14px', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '6px', color: '#64748b', fontWeight: 700, cursor: 'pointer' }}>
                Cancel
              </button>
              <button type="submit" style={{ padding: '6px 18px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '6px', fontWeight: 800, cursor: 'pointer' }}>
                Save Executive Details
              </button>
            </div>

            {pickerOpen && (
              <ImagePickerModal
                isOpen={pickerOpen}
                onClose={() => setPickerOpen(false)}
                currentImage={formData.image}
                onSelectImage={(url) => { setFormData((prev) => ({ ...prev, image: url })); setPickerOpen(false); }}
                targetArea={`Executive Photo (${formData.roleTag})`}
                aspectRatio="Square (1:1)"
                recommendedDimensions="700 x 700 px"
              />
            )}
          </form>
        ) : (
          <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
            Select an executive card below to edit their photo, tagline, headline, and role details.
          </div>
        )}
      </div>

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

/* ────────────────────────────────────────────────────────────
   MAIN BLOG MANAGER COMPONENT
   ──────────────────────────────────────────────────────────── */
export default function BlogManager() {
  const { blogs, addBlog, updateBlog, deleteBlog, achievements, addAchievement, deleteAchievement, executiveLeaders, updateExecutiveLeader } = useSiteData();
  const [activeSubTab, setActiveSubTab] = useState('executive');
  const [achPickerOpen, setAchPickerOpen] = useState(false);
  const [achPickedImage, setAchPickedImage] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1.5px solid #e2e8f0', paddingBottom: '16px' }}>
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#000648', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <HiBadgeCheck size={26} style={{ color: '#f2b733' }} />
            Blog, Achievements & Leadership Manager
          </h2>
          <p style={{ fontSize: '0.84rem', color: '#64748b', marginTop: '4px' }}>
            Manage executive board photos (CEO, CFO, CTHM), awards, honors, and magazine articles.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '8px', background: '#f1f5f9', padding: '4px', borderRadius: '10px' }}>
          <button type="button" onClick={() => setActiveSubTab('executive')} style={{ padding: '8px 16px', borderRadius: '8px', border: 'none', fontWeight: 800, fontSize: '0.82rem', cursor: 'pointer', background: activeSubTab === 'executive' ? '#000648' : 'transparent', color: activeSubTab === 'executive' ? '#f2b733' : '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}>
            Executive Board (CEO, CFO, CTHM)
          </button>

          <button type="button" onClick={() => setActiveSubTab('achievements')} style={{ padding: '8px 16px', borderRadius: '8px', border: 'none', fontWeight: 800, fontSize: '0.82rem', cursor: 'pointer', background: activeSubTab === 'achievements' ? '#000648' : 'transparent', color: activeSubTab === 'achievements' ? '#f2b733' : '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <HiBadgeCheck size={16} /> EZER Achievements ({ (achievements || []).length })
          </button>

          <button type="button" onClick={() => setActiveSubTab('blogs')} style={{ padding: '8px 16px', borderRadius: '8px', border: 'none', fontWeight: 800, fontSize: '0.82rem', cursor: 'pointer', background: activeSubTab === 'blogs' ? '#000648' : 'transparent', color: activeSubTab === 'blogs' ? '#f2b733' : '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <HiNewspaper size={16} /> Blog Posts ({ (blogs || []).length })
          </button>
        </div>
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
