import React, { useState } from 'react';
import { useSiteData } from '../context/SiteContext';
import ImagePickerModal from './ImagePickerModal';
import { HiPlus, HiTrash, HiPencil, HiPhotograph, HiCheck, HiSearch } from 'react-icons/hi';

const DEFAULT_COURSE_STATE = {
  title: '',
  slug: '',
  badge: 'Popular',
  tagline: '',
  description: '',
  image: 'images/hero/cloud_deveops.png',
  duration: '3 Months',
  schedule: 'Weekday & Weekend batches available',
  startDate: 'New Cohort Starting Next Week',
  languages: 'Tamil, English, Hindi',
  fee: '₹45,000 + 18% GST',
  tools: 'AWS, Docker, Kubernetes, Jenkins, Python',
  modulesStr: '01: Cloud Architecture, 02: Containerization with Docker, 03: Kubernetes & CI/CD Pipelines'
};

export default function CourseManager() {
  const { courses, addCourse, updateCourse, deleteCourse } = useSiteData();

  const [searchTerm, setSearchTerm] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [isImagePickerOpen, setIsImagePickerOpen] = useState(false);

  const [formData, setFormData] = useState(DEFAULT_COURSE_STATE);

  const handleOpenAdd = () => {
    setEditingId(null);
    setFormData(DEFAULT_COURSE_STATE);
    setIsEditing(true);
  };

  const handleOpenEdit = (course) => {
    setEditingId(course.id || course.slug);
    setFormData({
      title: course.title || '',
      slug: course.slug || '',
      badge: course.badge || 'Featured',
      tagline: course.tagline || '',
      description: course.description || '',
      image: course.image || 'images/hero/cloud_deveops.png',
      duration: course.duration || '3 Months',
      schedule: course.schedule || 'Weekday & Weekend batches',
      startDate: course.startDate || 'Next Week',
      languages: course.languages || 'Tamil, English, Hindi',
      fee: course.fee || '₹45,000 + 18% GST',
      tools: Array.isArray(course.tools) ? course.tools.join(', ') : (course.tools || ''),
      modulesStr: Array.isArray(course.curriculumModules)
        ? course.curriculumModules.map((m) => `${m.num || ''} ${m.title || ''}`).join(', ')
        : ''
    });
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.slug) {
      alert('Course Title and Slug are required.');
      return;
    }

    const toolsArray = formData.tools.split(',').map((t) => t.trim()).filter(Boolean);
    const modulesArray = formData.modulesStr.split(',').map((m, idx) => ({
      num: `0${idx + 1}`,
      title: m.trim(),
      topics: ['Hands-on Lab Exercises', 'Live Industry Scenarios']
    })).filter((m) => m.title);

    const payload = {
      ...formData,
      tools: toolsArray.length > 0 ? toolsArray : ['AWS', 'Docker'],
      curriculumModules: modulesArray.length > 0 ? modulesArray : [{ num: '01', title: 'Fundamentals', topics: ['Core Concepts'] }]
    };

    if (editingId) {
      updateCourse(editingId, payload);
    } else {
      addCourse(payload);
    }

    setIsEditing(false);
  };

  const handleDelete = (id, title) => {
    if (window.confirm(`Are you sure you want to delete the course "${title}"?`)) {
      deleteCourse(id);
    }
  };

  const filteredCourses = courses.filter((c) =>
    c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: '24px', paddingBottom: '16px', borderBottom: '1.5px solid #e2e8f0'
      }}>
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#000648', margin: 0 }}>
            Course Catalog Manager
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
            Add, update, or remove courses. Added courses instantly show on `/courses` and detail pages.
          </p>
        </div>

        <button
          type="button"
          onClick={handleOpenAdd}
          aria-label="Add new course"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '10px 20px', background: '#000648', color: '#f2b733',
            border: 'none', borderRadius: '10px', fontWeight: 800, fontSize: '0.875rem',
            cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,6,72,0.15)'
          }}
        >
          <HiPlus size={18} /> Add New Course
        </button>
      </div>

      <div style={{ marginBottom: '20px', position: 'relative', maxWidth: '400px' }}>
        <HiSearch size={18} style={{ position: 'absolute', left: '12px', top: '11px', color: '#94a3b8' }} />
        <label htmlFor="course_search_input" style={{ display: 'none' }}>Search Courses</label>
        <input
          id="course_search_input"
          type="text"
          placeholder="Search courses by name or slug..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search courses by name or slug"
          style={{
            width: '100%', padding: '9px 12px 9px 38px', borderRadius: '8px',
            border: '1.5px solid #cbd5e1', fontSize: '0.85rem', outline: 'none'
          }}
        />
      </div>

      {isEditing && (
        <form onSubmit={handleSave} style={{
          background: '#f8fafc', border: '2px solid #cbd5e1', borderRadius: '14px',
          padding: '24px', marginBottom: '28px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '1.1rem', fontWeight: 800, color: '#000648' }}>
            {editingId ? 'Edit Course Details' : 'Add New Course'}
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label htmlFor="course_title_field" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>Course Title *</label>
              <input
                id="course_title_field"
                type="text"
                value={formData.title}
                onChange={(e) => {
                  const titleVal = e.target.value;
                  const autoSlug = titleVal.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                  setFormData({ ...formData, title: titleVal, slug: editingId ? formData.slug : autoSlug });
                }}
                placeholder="e.g. AI-Powered Data Engineering"
                style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                required
              />
            </div>

            <div>
              <label htmlFor="course_slug_field" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>URL Slug *</label>
              <input
                id="course_slug_field"
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                placeholder="e.g. ai-data-engineering"
                style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                required
              />
            </div>

            <div>
              <label htmlFor="course_badge_field" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>Badge Label</label>
              <input
                id="course_badge_field"
                type="text"
                value={formData.badge}
                onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                placeholder="Best Seller / Popular"
                style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label htmlFor="course_duration_field" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>Duration</label>
              <input
                id="course_duration_field"
                type="text"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                placeholder="e.g. 3 Months"
                style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
              />
            </div>

            <div>
              <label htmlFor="course_fee_field" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>Total Fee</label>
              <input
                id="course_fee_field"
                type="text"
                value={formData.fee}
                onChange={(e) => setFormData({ ...formData, fee: e.target.value })}
                placeholder="e.g. ₹45,000 + 18% GST"
                style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
              />
            </div>

            <div>
              <label htmlFor="course_image_field" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>Course Image</label>
              <div style={{ display: 'flex', gap: '6px' }}>
                <input
                  id="course_image_field"
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="Image URL or Path"
                  style={{ flex: 1, padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                />
                <button
                  type="button"
                  onClick={() => setIsImagePickerOpen(true)}
                  aria-label="Choose course image"
                  style={{ padding: '9px 12px', background: '#115DFC', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
                >
                  <HiPhotograph size={16} />
                </button>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="course_tagline_field" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>Tagline</label>
            <input
              id="course_tagline_field"
              type="text"
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              placeholder="e.g. Deploy, Automate, and Scale — Like a Real Engineer."
              style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="course_desc_field" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>Full Description</label>
            <textarea
              id="course_desc_field"
              rows={2}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Detailed course overview description..."
              style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
            <div>
              <label htmlFor="course_tools_field" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>Tools & Technologies (Comma Separated)</label>
              <input
                id="course_tools_field"
                type="text"
                value={formData.tools}
                onChange={(e) => setFormData({ ...formData, tools: e.target.value })}
                placeholder="AWS, Docker, Kubernetes, Jenkins, Python"
                style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
              />
            </div>

            <div>
              <label htmlFor="course_modules_field" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>Curriculum Modules (Comma Separated)</label>
              <input
                id="course_modules_field"
                type="text"
                value={formData.modulesStr}
                onChange={(e) => setFormData({ ...formData, modulesStr: e.target.value })}
                placeholder="Module 1 Title, Module 2 Title, Module 3 Title"
                style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              aria-label="Cancel editing course"
              style={{ padding: '9px 16px', background: '#e2e8f0', color: '#475569', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}
            >
              Cancel
            </button>
            <button
              type="submit"
              aria-label="Save course"
              style={{ padding: '9px 20px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <HiCheck size={18} /> Save Course
            </button>
          </div>
        </form>
      )}

      <div style={{ display: 'grid', gap: '14px' }}>
        {filteredCourses.map((course) => (
          <div
            key={course.id || course.slug}
            style={{
              display: 'grid', gridTemplateColumns: '120px 1fr auto', gap: '16px',
              alignItems: 'center', background: '#ffffff', border: '1.5px solid #e2e8f0',
              borderRadius: '12px', padding: '14px', boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
            }}
          >
            <div style={{ height: '75px', borderRadius: '8px', overflow: 'hidden', background: '#f1f5f9' }}>
              <img src={course.image} alt={course.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{
                  background: '#fef3c7', color: '#92400e', fontSize: '0.68rem', fontWeight: 800,
                  padding: '2px 8px', borderRadius: '50px'
                }}>
                  {course.badge || 'Popular'}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                  Slug: <code style={{ color: '#0f172a' }}>/courses/{course.slug}</code>
                </span>
              </div>
              <h4 style={{ margin: '0 0 2px 0', fontSize: '1rem', fontWeight: 800, color: '#000648' }}>
                {course.title}
              </h4>
              <div style={{ fontSize: '0.78rem', color: '#475569' }}>
                Duration: <strong>{course.duration}</strong> | Fee: <strong>{course.fee}</strong>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                onClick={() => handleOpenEdit(course)}
                aria-label={`Edit course ${course.title}`}
                style={{
                  padding: '8px 12px', background: '#f1f5f9', color: '#000648',
                  border: '1.5px solid #cbd5e1', borderRadius: '8px', fontWeight: 700,
                  fontSize: '0.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px'
                }}
              >
                <HiPencil size={15} /> Edit
              </button>

              <button
                type="button"
                onClick={() => handleDelete(course.id || course.slug, course.title)}
                aria-label={`Delete course ${course.title}`}
                style={{
                  padding: '8px 12px', background: '#fef2f2', color: '#dc2626',
                  border: '1.5px solid #fecaca', borderRadius: '8px', fontWeight: 700,
                  fontSize: '0.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px'
                }}
              >
                <HiTrash size={15} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <ImagePickerModal
        isOpen={isImagePickerOpen}
        onClose={() => setIsImagePickerOpen(false)}
        currentImage={formData.image}
        onSelectImage={(url) => setFormData((prev) => ({ ...prev, image: url }))}
      />
    </div>
  );
}
