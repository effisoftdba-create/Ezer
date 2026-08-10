import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { HiX, HiCheck, HiPhotograph, HiBookOpen, HiLightningBolt, HiUserGroup, HiAcademicCap, HiSparkles } from 'react-icons/hi';
import CourseTabProjects from './CourseTabProjects';
import CourseTabSteps from './CourseTabSteps';

const TABS = [
  { id: 'basic', label: 'Basic Info & Banner', icon: <HiBookOpen size={16} /> },
  { id: 'capstones', label: 'Capstone Projects', icon: <HiLightningBolt size={16} /> },
  { id: 'steps', label: '6 Program Steps', icon: <HiAcademicCap size={16} /> },
  { id: 'audience', label: 'Who is this For?', icon: <HiUserGroup size={16} /> },
];

const slugify = (text) => (text || '')
  .toLowerCase()
  .trim()
  .replace(/[^a-z0-9\s-]/g, '')
  .replace(/[\s_]+/g, '-')
  .replace(/^-+|-+$/g, '');

export default function CourseFormModal({
  isEditing,
  editingId,
  formData,
  setFormData,
  onSave,
  onCancel,
  onOpenImagePicker
}) {
  const [activeTab, setActiveTab] = useState('basic');

  const handleTitleChange = (newTitle) => {
    const currentSlug = formData.slug || '';
    const autoSlugFromPrevTitle = slugify(formData.title || '');
    const isAutoSynced = !currentSlug || currentSlug === autoSlugFromPrevTitle;
    const nextSlug = isAutoSynced ? slugify(newTitle) : currentSlug;

    setFormData((prev) => ({
      ...prev,
      title: newTitle,
      slug: nextSlug,
      hashLink: isAutoSynced ? `#${nextSlug}_course` : prev.hashLink
    }));
  };

  if (!isEditing) return null;

  const handleAddWhoFor = () => {
    const list = formData.whoIsItForList || [];
    setFormData((prev) => ({
      ...prev,
      whoIsItForList: [
        ...list,
        {
          title: 'Target Candidate Profile',
          desc: 'Target audience profile description and career transition goals'
        }
      ]
    }));
  };

  const handleUpdateWhoForField = (index, field, value) => {
    const list = [...(formData.whoIsItForList || [])];
    const curr = list[index];
    let baseObj = typeof curr === 'string'
      ? { title: 'Candidate Profile', desc: curr }
      : { ...curr };

    baseObj[field] = value;
    list[index] = baseObj;
    setFormData((prev) => ({ ...prev, whoIsItForList: list }));
  };

  const handleDeleteWhoFor = (index) => {
    const list = (formData.whoIsItForList || []).filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, whoIsItForList: list }));
  };

  const audienceItems = (formData.whoIsItForList || []).map((item, idx) => {
    if (typeof item === 'string') {
      return { id: `aud-${idx}`, origIdx: idx, title: 'Candidate Profile', desc: item };
    }
    return { ...item, id: `aud-${idx}`, origIdx: idx };
  });

  const modalJSX = (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 999999,
      background: 'rgba(0, 6, 72, 0.85)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        background: '#ffffff',
        borderRadius: '24px',
        width: '100%',
        maxWidth: '920px',
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
        border: '2.5px solid #000648',
        position: 'relative',
        overflow: 'hidden'
      }}>
        
        {/* Fixed Header */}
        <div style={{
          background: '#000648',
          color: '#ffffff',
          padding: '20px 24px',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          borderBottom: '2px solid #f2b733',
          flexShrink: 0
        }}>
          <div>
            <span style={{ fontSize: '0.7rem', fontWeight: 900, color: '#f2b733', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              COURSE CATALOG EDITOR PORTAL
            </span>
            <h3 style={{ margin: '2px 0 0 0', fontSize: '1.25rem', fontWeight: 900, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px' }}>
              {editingId ? `Editing Program: ${formData.title || 'Course'}` : 'Add New Course Program & Page Sections'}
            </h3>

          </div>

          <button
            type="button"
            aria-label="Close course edit modal"
            onClick={onCancel}
            style={{ background: 'rgba(255,255,255,0.12)', border: 'none', cursor: 'pointer', color: '#ffffff', width: '34px', height: '34px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <HiX size={20} />
          </button>
        </div>

        {/* Form Container */}
        <form onSubmit={onSave} style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, overflow: 'hidden' }}>
          
          {/* Navigation Tabs Header */}
          <div style={{ padding: '16px 24px 0', background: '#f8fafc', borderBottom: '2px solid #e2e8f0', flexShrink: 0 }}>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '10px 18px',
                    border: 'none',
                    borderBottom: activeTab === tab.id ? '3px solid #000648' : '3px solid transparent',
                    background: activeTab === tab.id ? '#ffffff' : 'transparent',
                    color: activeTab === tab.id ? '#000648' : '#64748b',
                    fontWeight: activeTab === tab.id ? 900 : 700,
                    cursor: 'pointer',
                    borderRadius: '8px 8px 0 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.88rem'
                  }}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Scrollable Body */}
          <div style={{ padding: '24px', overflowY: 'auto', flexGrow: 1, background: '#ffffff' }}>
            
            {/* TAB 1: BASIC INFO */}
            {activeTab === 'basic' && (
              <div>
                <div style={{ marginBottom: '20px', display: 'grid', gridTemplateColumns: '180px 1fr', gap: '20px', alignItems: 'center' }}>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#000648', marginBottom: '6px' }}>
                      Card Cover Preview
                    </span>
                    <div style={{ width: '100%', height: '110px', borderRadius: '12px', overflow: 'hidden', border: '1.5px solid #cbd5e1', position: 'relative', background: '#000' }}>
                      <img
                        src={formData.image}
                        alt="Preview"
                        style={{ width: '100%', height: '100%', objectFit: formData.imageFit || 'cover', objectPosition: formData.imagePosition || 'center center' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="course_form_image" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                      Program Cover Photo URL / Image
                    </label>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <input
                        id="course_form_image"
                        type="text"
                        value={formData.image || ''}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                        placeholder="Image URL or local asset"
                        style={{ flex: 1, padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
                        required
                      />
                      <button
                        type="button"
                        onClick={onOpenImagePicker}
                        style={{ padding: '10px 16px', background: '#115DFC', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem' }}
                      >
                        <HiPhotograph size={16} /> Choose
                      </button>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 0.8fr', gap: '14px', marginBottom: '14px' }}>
                  <div>
                    <label htmlFor="course_title" style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#334155', marginBottom: '4px' }}>
                      Course Title *
                    </label>
                    <input
                      id="course_title"
                      type="text"
                      required
                      value={formData.title || ''}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      placeholder="e.g. Full Stack Development with AI"
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="course_slug" style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#334155', marginBottom: '4px' }}>
                      Course Slug / URL ID *
                    </label>
                    <input
                      id="course_slug"
                      type="text"
                      required
                      value={formData.slug || ''}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      placeholder="e.g. fullstack-ai-development"
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="course_badge" style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#334155', marginBottom: '4px' }}>
                      Ribbon Badge Tag
                    </label>
                    <input
                      id="course_badge"
                      type="text"
                      value={formData.badge || ''}
                      onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                      placeholder="e.g. Popular, Trending"
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                  <div>
                    <label htmlFor="course_price" style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#334155', marginBottom: '4px' }}>
                      Special Offer Price *
                    </label>
                    <input
                      id="course_price"
                      type="text"
                      required
                      value={formData.price || ''}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      placeholder="e.g. ₹9"
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem', fontWeight: 800, color: '#166534' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="course_duration" style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#334155', marginBottom: '4px' }}>
                      Program Duration
                    </label>
                    <input
                      id="course_duration"
                      type="text"
                      value={formData.duration || ''}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      placeholder="e.g. 4 Months"
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="course_languages" style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#334155', marginBottom: '4px' }}>
                      Teaching Languages
                    </label>
                    <input
                      id="course_languages"
                      type="text"
                      value={formData.languages || ''}
                      onChange={(e) => setFormData({ ...formData, languages: e.target.value })}
                      placeholder="e.g. Tamil, English, Hindi"
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '14px' }}>
                  <label htmlFor="course_tools" style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#334155', marginBottom: '4px' }}>
                    Tools & Technologies Covered (Comma Separated)
                  </label>
                  <input
                    id="course_tools"
                    type="text"
                    value={formData.tools || ''}
                    onChange={(e) => setFormData({ ...formData, tools: e.target.value })}
                    placeholder="e.g. React, Node.js, Python, AWS, Docker"
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
                  />
                </div>

                <div style={{ marginBottom: '14px' }}>
                  <label htmlFor="course_video_url" style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#334155', marginBottom: '4px' }}>
                    YouTube Demo / Practical Training Video Link (videoUrl)
                  </label>
                  <input
                    id="course_video_url"
                    type="text"
                    value={formData.videoUrl || ''}
                    onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                    placeholder="e.g. https://www.youtube.com/watch?v=aircAruvnKk or https://youtu.be/..."
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
                  />
                </div>

                <div>
                  <label htmlFor="course_description" style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#334155', marginBottom: '4px' }}>
                    Course Overview & Subtitle
                  </label>
                  <textarea
                    id="course_description"
                    rows={3}
                    value={formData.description || ''}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Provide a detailed overview of what students will learn..."
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #cbd5e1', fontSize: '0.85rem' }}
                  />
                </div>
              </div>
            )}

            {/* TAB 2: CAPSTONE PROJECTS */}
            {activeTab === 'capstones' && (
              <CourseTabProjects formData={formData} setFormData={setFormData} />
            )}

            {/* TAB 3: 6 PROGRAM STEPS */}
            {activeTab === 'steps' && (
              <CourseTabSteps formData={formData} setFormData={setFormData} />
            )}

            {/* TAB 4: WHO IS IT FOR */}
            {activeTab === 'audience' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 800, color: '#000648' }}>
                      Target Candidate Profiles ("Who Is This Course For?")
                    </h4>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                      Edit titles and inner descriptions for freshers, non-IT switchers, manual testers, etc.
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddWhoFor}
                    style={{ padding: '8px 14px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer', fontSize: '0.82rem' }}
                  >
                    + Add Target Profile
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {audienceItems.map((item, idx) => {
                    const origIndex = item.origIdx !== undefined ? item.origIdx : idx;
                    const itemTitle = item.title || item.name || `Target Profile #${idx + 1}`;
                    const itemDesc = item.desc || item.description || item.text || '';

                    return (
                      <div
                        key={item.id ? `aud-id-${item.id}` : (item.title ? `aud-title-${item.title}` : `aud-pos-${itemPos}`)}
                        style={{
                          background: '#f8fafc',
                          border: '1.5px solid #cbd5e1',
                          borderRadius: '12px',
                          padding: '14px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '10px'
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '0.78rem', fontWeight: 900, color: '#000648', background: '#e0e7ff', padding: '2px 8px', borderRadius: '4px' }}>
                            Profile Card #{idx + 1}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleDeleteWhoFor(origIndex)}
                            style={{ padding: '4px 10px', background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}
                          >
                            Remove Card
                          </button>
                        </div>

                        <div>
                          <label htmlFor={`aud_title_${item.id}`} style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#334155', marginBottom: '4px' }}>
                            Candidate Profile Title *
                          </label>
                          <input
                            id={`aud_title_${item.id}`}
                            type="text"
                            value={itemTitle}
                            onChange={(e) => handleUpdateWhoForField(origIndex, 'title', e.target.value)}
                            placeholder="e.g. Aspiring IT & Tech Professionals"
                            style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }}
                          />
                        </div>

                        <div>
                          <label htmlFor={`aud_desc_${item.id}`} style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#334155', marginBottom: '4px' }}>
                            Profile Description & Inner Content *
                          </label>
                          <textarea
                            id={`aud_desc_${item.id}`}
                            rows={2}
                            value={itemDesc}
                            onChange={(e) => handleUpdateWhoForField(origIndex, 'desc', e.target.value)}
                            placeholder="Working Engineers seeking transition into cloud, DevOps, AI, testing & infra roles..."
                            style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1.5px solid #cbd5e1', fontSize: '0.84rem' }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>

          {/* Fixed Action Footer */}
          <div style={{
            padding: '16px 24px',
            borderTop: '1.5px solid #e2e8f0',
            background: '#f8fafc',
            display: 'flex',
            justify: 'flex-end',
            gap: '12px',
            flexShrink: 0,
            borderRadius: '0 0 20px 20px'
          }}>
            <button
              type="button"
              onClick={onCancel}
              style={{ padding: '10px 20px', background: '#e2e8f0', color: '#475569', border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer', fontSize: '0.86rem' }}
            >
              Cancel
            </button>

            <button
              type="submit"
              style={{
                padding: '10px 24px',
                background: '#000648',
                color: '#f2b733',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 900,
                fontSize: '0.88rem',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,6,72,0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <HiCheck size={18} /> Save All Program Sections
            </button>
          </div>

        </form>
      </div>
    </div>
  );

  return typeof document !== 'undefined'
    ? ReactDOM.createPortal(modalJSX, document.body)
    : modalJSX;
}
