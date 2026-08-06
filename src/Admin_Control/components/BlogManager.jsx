import React, { useState } from 'react';
import { useSiteData } from '../context/SiteContext';
import { HiPlus, HiTrash, HiNewspaper, HiBadgeCheck, HiPhotograph, HiCalendar } from 'react-icons/hi';
import ImagePickerModal from './ImagePickerModal';

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
            <input
              id="ach-title-input"
              aria-label="Award / Achievement Title"
              type="text"
              placeholder="e.g. EdTech Excellence & Innovation Award 2025"
              value={achTitle}
              onChange={(e) => setAchTitle(e.target.value)}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }}
              required
            />
          </div>

          <div>
            <label htmlFor="ach-issuer-input" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569', display: 'block', marginBottom: '4px' }}>Issuing Authority / Guild</label>
            <input
              id="ach-issuer-input"
              aria-label="Issuing Authority"
              type="text"
              placeholder="e.g. National Skill Development Forum"
              value={achIssuer}
              onChange={(e) => setAchIssuer(e.target.value)}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }}
            />
          </div>

          <div>
            <label htmlFor="ach-year-input" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569', display: 'block', marginBottom: '4px' }}>Year</label>
            <input
              id="ach-year-input"
              aria-label="Year"
              type="text"
              value={achYear}
              onChange={(e) => setAchYear(e.target.value)}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }}
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr auto', gap: '14px', alignItems: 'flex-end' }}>
          <div>
            <label htmlFor="ach-category-select" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569', display: 'block', marginBottom: '4px' }}>Category</label>
            <select
              id="ach-category-select"
              aria-label="Achievement Category"
              value={achCategory}
              onChange={(e) => setAchCategory(e.target.value)}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem', background: '#fff' }}
            >
              <option value="Excellence Award">Excellence Award</option>
              <option value="Placement Award">Placement Award</option>
              <option value="Innovation Award">Innovation Award</option>
              <option value="Milestone Honor">Milestone Honor</option>
            </select>
          </div>

          <div>
            <label htmlFor="ach-image-input" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569', display: 'block', marginBottom: '4px' }}>Achievement Image URL</label>
            <input
              id="ach-image-input"
              aria-label="Achievement Image URL"
              type="text"
              placeholder="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad"
              value={currentImage}
              onChange={(e) => setAchImage(e.target.value)}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }}
            />
          </div>

          <button
            type="button"
            aria-label="Choose image for achievement"
            onClick={onOpenPicker}
            style={{ padding: '10px 14px', borderRadius: '8px', background: '#e2e8f0', color: '#000648', fontWeight: 800, fontSize: '0.8rem', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <HiPhotograph size={16} /> Choose Image
          </button>
        </div>

        <div>
          <label htmlFor="ach-desc-textarea" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569', display: 'block', marginBottom: '4px' }}>Description / Citation</label>
          <textarea
            id="ach-desc-textarea"
            aria-label="Description / Citation"
            rows={2}
            placeholder="Brief citation about the award..."
            value={achDesc}
            onChange={(e) => setAchDesc(e.target.value)}
            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem', resize: 'vertical' }}
          />
        </div>

        <button
          type="submit"
          aria-label="Add Achievement to Gallery"
          style={{ alignSelf: 'flex-start', padding: '10px 24px', background: '#000648', color: '#f2b733', fontWeight: 900, borderRadius: '8px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <HiPlus size={18} /> Add Achievement to Gallery
        </button>
      </form>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '18px' }}>
        {(achievements || []).map((ach) => (
          <div key={ach.id} style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
            <div style={{ position: 'relative', height: '150px', background: '#000' }}>
              <img src={ach.image} alt={ach.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <span style={{ position: 'absolute', top: '10px', right: '10px', background: '#000648', color: '#f2b733', fontSize: '0.7rem', fontWeight: 900, padding: '3px 10px', borderRadius: '50px' }}>
                {ach.year}
              </span>
            </div>

            <div style={{ padding: '14px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#115DFC', textTransform: 'uppercase' }}>{ach.category}</span>
                <h4 style={{ fontSize: '0.94rem', fontWeight: 800, color: '#000648', marginTop: '4px', lineHeight: 1.3 }}>{ach.title}</h4>
                <p style={{ fontSize: '0.76rem', color: '#64748b', marginTop: '2px', fontWeight: 700 }}>Issued by: {ach.issuer}</p>
                <p style={{ fontSize: '0.78rem', color: '#475569', marginTop: '8px', lineHeight: 1.4 }}>{ach.description}</p>
              </div>

              <button
                type="button"
                aria-label={`Remove award ${ach.title}`}
                onClick={() => deleteAchievement(ach.id)}
                style={{ marginTop: '14px', padding: '6px 12px', background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', borderRadius: '6px', fontSize: '0.76rem', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', alignSelf: 'flex-end' }}
              >
                <HiTrash size={14} /> Remove Award
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BlogSection({ blogs, addBlog, deleteBlog, onOpenPicker, externalImage }) {
  const [blogTitle, setBlogTitle] = useState('');
  const [blogCategory, setBlogCategory] = useState('Career Guide');
  const [blogAuthor, setBlogAuthor] = useState('EZER Academic Board');
  const [blogSummary, setBlogSummary] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [blogImage, setBlogImage] = useState('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800');

  const currentImage = externalImage || blogImage;

  const handleAddBlog = (e) => {
    e.preventDefault();
    if (!blogTitle.trim()) return alert('Please enter blog title');
    addBlog({
      title: blogTitle.trim(),
      slug: blogTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
      category: blogCategory,
      author: blogAuthor.trim() || 'EZER Editorial Team',
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      summary: blogSummary.trim() || 'Read the latest insights from EZER tech mentors.',
      content: blogContent.trim() || blogSummary.trim(),
      image: currentImage.trim(),
      featured: true
    });
    setBlogTitle('');
    setBlogSummary('');
    setBlogContent('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      <form onSubmit={handleAddBlog} style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#000648', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <HiPlus size={18} /> Publish New Blog Post
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px 180px', gap: '14px' }}>
          <div>
            <label htmlFor="blog-title-input" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569', display: 'block', marginBottom: '4px' }}>Article Headline / Title*</label>
            <input
              id="blog-title-input"
              aria-label="Article Headline / Title"
              type="text"
              placeholder="e.g. Transitioning Into Software Engineering in 2025"
              value={blogTitle}
              onChange={(e) => setBlogTitle(e.target.value)}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }}
              required
            />
          </div>

          <div>
            <label htmlFor="blog-category-select" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569', display: 'block', marginBottom: '4px' }}>Category</label>
            <select
              id="blog-category-select"
              aria-label="Blog Category"
              value={blogCategory}
              onChange={(e) => setBlogCategory(e.target.value)}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem', background: '#fff' }}
            >
              <option value="Career Guide">Career Guide</option>
              <option value="Company News">Company News</option>
              <option value="AI & Tech">AI & Tech</option>
              <option value="Success Stories">Success Stories</option>
            </select>
          </div>

          <div>
            <label htmlFor="blog-author-input" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569', display: 'block', marginBottom: '4px' }}>Author</label>
            <input
              id="blog-author-input"
              aria-label="Author"
              type="text"
              value={blogAuthor}
              onChange={(e) => setBlogAuthor(e.target.value)}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }}
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '14px', alignItems: 'flex-end' }}>
          <div>
            <label htmlFor="blog-image-input" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569', display: 'block', marginBottom: '4px' }}>Banner Image URL</label>
            <input
              id="blog-image-input"
              aria-label="Banner Image URL"
              type="text"
              placeholder="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
              value={currentImage}
              onChange={(e) => setBlogImage(e.target.value)}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }}
            />
          </div>

          <button
            type="button"
            aria-label="Choose image for blog article"
            onClick={onOpenPicker}
            style={{ padding: '10px 14px', borderRadius: '8px', background: '#e2e8f0', color: '#000648', fontWeight: 800, fontSize: '0.8rem', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <HiPhotograph size={16} /> Choose Image
          </button>
        </div>

        <div>
          <label htmlFor="blog-summary-textarea" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569', display: 'block', marginBottom: '4px' }}>Article Excerpt / Summary</label>
          <textarea
            id="blog-summary-textarea"
            aria-label="Article Excerpt / Summary"
            rows={2}
            placeholder="Short summary displayed on blog card previews..."
            value={blogSummary}
            onChange={(e) => setBlogSummary(e.target.value)}
            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }}
          />
        </div>

        <div>
          <label htmlFor="blog-content-textarea" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569', display: 'block', marginBottom: '4px' }}>Full Article Body Content</label>
          <textarea
            id="blog-content-textarea"
            aria-label="Full Article Body Content"
            rows={4}
            placeholder="Full article body..."
            value={blogContent}
            onChange={(e) => setBlogContent(e.target.value)}
            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem', resize: 'vertical' }}
          />
        </div>

        <button
          type="submit"
          aria-label="Publish Blog Post"
          style={{ alignSelf: 'flex-start', padding: '10px 24px', background: '#000648', color: '#f2b733', fontWeight: 900, borderRadius: '8px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <HiNewspaper size={18} /> Publish Blog Post
        </button>
      </form>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '18px' }}>
        {(blogs || []).map((blog) => (
          <div key={blog.id} style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
            <div style={{ position: 'relative', height: '160px', background: '#000' }}>
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
              </div>

              <button
                type="button"
                aria-label={`Remove blog post ${blog.title}`}
                onClick={() => deleteBlog(blog.id)}
                style={{ marginTop: '14px', padding: '6px 12px', background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', borderRadius: '6px', fontSize: '0.76rem', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', alignSelf: 'flex-end' }}
              >
                <HiTrash size={14} /> Remove Article
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BlogManager() {
  const { blogs, addBlog, deleteBlog, achievements, addAchievement, deleteAchievement } = useSiteData();
  const [activeSubTab, setActiveSubTab] = useState('achievements');
  const [achPickerOpen, setAchPickerOpen] = useState(false);
  const [blogPickerOpen, setBlogPickerOpen] = useState(false);
  const [achPickedImage, setAchPickedImage] = useState('');
  const [blogPickedImage, setBlogPickedImage] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1.5px solid #e2e8f0', paddingBottom: '16px' }}>
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#000648', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <HiBadgeCheck size={26} style={{ color: '#f2b733' }} />
            Blog & EZER Achievements Manager
          </h2>
          <p style={{ fontSize: '0.84rem', color: '#64748b', marginTop: '4px' }}>
            Manage EZER awards, milestones, honors, and public blog articles with high-quality media.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '8px', background: '#f1f5f9', padding: '4px', borderRadius: '10px' }}>
          <button
            type="button"
            aria-label="View Achievements Tab"
            onClick={() => setActiveSubTab('achievements')}
            style={{
              padding: '8px 16px', borderRadius: '8px', border: 'none',
              fontWeight: 800, fontSize: '0.82rem', cursor: 'pointer',
              background: activeSubTab === 'achievements' ? '#000648' : 'transparent',
              color: activeSubTab === 'achievements' ? '#f2b733' : '#64748b',
              display: 'flex', alignItems: 'center', gap: '6px'
            }}
          >
            <HiBadgeCheck size={16} /> EZER Achievements ({ (achievements || []).length })
          </button>
          <button
            type="button"
            aria-label="View Blog Posts Tab"
            onClick={() => setActiveSubTab('blogs')}
            style={{
              padding: '8px 16px', borderRadius: '8px', border: 'none',
              fontWeight: 800, fontSize: '0.82rem', cursor: 'pointer',
              background: activeSubTab === 'blogs' ? '#000648' : 'transparent',
              color: activeSubTab === 'blogs' ? '#f2b733' : '#64748b',
              display: 'flex', alignItems: 'center', gap: '6px'
            }}
          >
            <HiNewspaper size={16} /> Blog Posts ({ (blogs || []).length })
          </button>
        </div>
      </div>

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
          deleteBlog={deleteBlog}
          onOpenPicker={() => setBlogPickerOpen(true)}
          externalImage={blogPickedImage}
        />
      )}

      {achPickerOpen && (
        <ImagePickerModal
          isOpen={achPickerOpen}
          onClose={() => setAchPickerOpen(false)}
          onSelectImage={(url) => { setAchPickedImage(url); setAchPickerOpen(false); }}
        />
      )}

      {blogPickerOpen && (
        <ImagePickerModal
          isOpen={blogPickerOpen}
          onClose={() => setBlogPickerOpen(false)}
          onSelectImage={(url) => { setBlogPickedImage(url); setBlogPickerOpen(false); }}
        />
      )}
    </div>
  );
}
