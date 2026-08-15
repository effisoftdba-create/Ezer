import React, { useState } from 'react';
import { useSiteData } from '../context/SiteContext';
import ImagePickerModal from './ImagePickerModal';
import CourseFormModal from './CourseFormModal';
import { HiPlus, HiTrash, HiPencil, HiSearch } from 'react-icons/hi';
import { resolveImageSrc } from '../utils/imageUtils';
import { cleanModuleTitle } from '../utils/courseUtils';

const DEFAULT_COURSE_STATE = {
  title: '',
  slug: '',
  badge: 'Popular',
  tagline: '',
  description: '',
  image: 'images/hero/devops.avif',
  imagePosition: 'center center',
  imageFit: 'cover',
  videoUrl: 'https://www.youtube.com/watch?v=aircAruvnKk',
  duration: '3 Months',
  schedule: 'Weekday & Weekend batches available',
  startDate: 'New Cohort Starting Next Week',
  languages: 'Tamil, English, Hindi',
  fee: '₹45,000 + 18% GST',
  price: '₹29,999',
  originalPrice: '₹42,000',
  hashLink: '#DevOps_course',
  tools: 'AWS, Docker, Kubernetes, Jenkins, Python',
  projectsList: [
    'Multi-Region AWS VPC Infrastructure Automation with Terraform',
    'High-Availability Kubernetes Microservices Deployment with Helm & Ingress',
    'Automated End-to-End CI/CD Pipeline using Jenkins & GitHub Actions'
  ],
  whoIsItForList: [
    'Freshers looking to enter Cloud & DevOps engineering roles',
    'Software Developers & QA Engineers transitioning to Infrastructure & Automation',
    'System Administrators moving toward cloud-native automation'
  ],
  admissionStepsList: [
    { step: '01', title: 'Select Batch & Register', desc: 'Fill contact details and choose weekday or weekend batch.' },
    { step: '02', title: 'Free Counseling & Profile Evaluation', desc: 'Speak with senior tech advisors.' },
    { step: '03', title: 'Demo Class Attendance', desc: 'Experience interactive live training sessions.' },
    { step: '04', title: 'Enrollment & Seat Lock', desc: 'Confirm your seat with flexible EMI options.' },
    { step: '05', title: 'LMS Access & Lab Setup', desc: 'Get full access to live cloud sandboxes & repos.' },
    { step: '06', title: 'Live Cohort & Placement Support', desc: 'Start live classes and unlock placement support.' }
  ],
  curriculumModulesList: []
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const mainEl = document.querySelector('main');
  if (mainEl) mainEl.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function CourseManager() {
  const { courses, addCourse, updateCourse, deleteCourse } = useSiteData();

  const [searchTerm, setSearchTerm] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [isImagePickerOpen, setIsImagePickerOpen] = useState(false);
  const [formData, setFormData] = useState(DEFAULT_COURSE_STATE);
  const [formErrors, setFormErrors] = useState({});

  const handleOpenAdd = () => {
    setEditingId(null);
    setFormData(DEFAULT_COURSE_STATE);
    setFormErrors({});
    setIsEditing(true);
    scrollToTop();
  };

  const handleOpenEdit = (course) => {
    setEditingId(course.id || course.slug);
    setFormErrors({});

    const safeCurriculumModules = Array.isArray(course.curriculumModules)
      ? course.curriculumModules.map((m, idx) => {
          const rawTitle = typeof m === 'object' ? m.title : String(m);
          const cleanedTitle = cleanModuleTitle(rawTitle);
          return {
            id: (typeof m === 'object' && m.id) ? m.id : `mod-${idx}`,
            num: (typeof m === 'object' && m.num) ? m.num : (idx < 9 ? `0${idx + 1}` : `${idx + 1}`),
            title: cleanedTitle || `Module ${idx + 1}`,
            badge: (typeof m === 'object' && m.badge) ? m.badge : `MODULE ${idx + 1}`,
            image: (typeof m === 'object' && m.image) ? m.image : '',
            topics: (typeof m === 'object' && Array.isArray(m.topics))
              ? m.topics
              : (typeof m?.topics === 'string' ? m.topics.split('\n').map((t) => t.trim()).filter(Boolean) : ['Hands-on Lab Exercises', 'Live Industry Scenarios'])
          };
        })
      : [];

    setFormData({
      title: course.title || '',
      slug: course.slug || '',
      badge: course.badge || 'Featured',
      tagline: course.tagline || '',
      description: course.description || '',
      image: course.image || 'images/hero/cloud_deveops.png',
      position: course.position || course.imagePosition || '50% 50%',
      imagePosition: course.position || course.imagePosition || '50% 50%',
      fit: course.fit || course.imageFit || 'cover',
      imageFit: course.fit || course.imageFit || 'cover',
      zoom: course.zoom || course.imageZoom || 1,
      imageZoom: course.zoom || course.imageZoom || 1,
      mobilePosition: course.mobilePosition || course.position || '50% 50%',
      mobileZoom: course.mobileZoom || course.zoom || 1,
      videoUrl: course.videoUrl || '',
      duration: course.duration || '3 Months',
      schedule: course.schedule || 'Weekday & Weekend batches',
      startDate: course.startDate || 'Next Week',
      languages: course.languages || 'Tamil, English, Hindi',
      fee: course.fee || '₹45,000 + 18% GST',
      price: course.price || '₹9',
      originalPrice: course.originalPrice || '₹42,000',
      hashLink: course.hashLink || `#${(course.title || 'course').replace(/[^a-zA-Z0-9]/g, '')}_course`,
      tools: Array.isArray(course.tools) ? course.tools.join(', ') : (course.tools || ''),
      projectsList: Array.isArray(course.projects) ? course.projects : (DEFAULT_COURSE_STATE.projectsList),
      whoIsItForList: Array.isArray(course.whoIsItFor) ? course.whoIsItFor : (DEFAULT_COURSE_STATE.whoIsItForList),
      admissionStepsList: Array.isArray(course.admissionSteps) ? course.admissionSteps : (DEFAULT_COURSE_STATE.admissionStepsList),
      curriculumModulesList: safeCurriculumModules
    });
    setIsEditing(true);
    scrollToTop();
  };

  const handleSave = (e) => {
    e.preventDefault();
    const rawTitle = (formData.title || '').trim();
    const computedSlug = (formData.slug || '')
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/[\s_]+/g, '-')
      .replace(/^-+|-+$/g, '') ||
      rawTitle
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/[\s_]+/g, '-')
        .replace(/^-+|-+$/g, '');

    const errors = {};
    if (!rawTitle) errors.title = true;
    if (!formData.price?.trim()) errors.price = true;
    if (!formData.image?.trim()) errors.image = true;
    if (!formData.duration?.trim()) errors.duration = true;
    if (!formData.languages?.trim()) errors.languages = true;
    if (!formData.tagline?.trim() && !formData.description?.trim()) errors.tagline = true;

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});

    const courseId = editingId || computedSlug || `course-${Date.now()}`;
    const toolsArray = typeof formData.tools === 'string'
      ? formData.tools.split(',').map((t) => t.trim()).filter(Boolean)
      : (Array.isArray(formData.tools) ? formData.tools : ['AWS', 'Docker']);

    const normalizedModules = (formData.curriculumModulesList || []).map((m, idx) => {
      const rawTitle = typeof m === 'object' ? m.title : String(m);
      const cleanedTitle = cleanModuleTitle(rawTitle);
      return {
        id: (typeof m === 'object' && m.id) ? m.id : `mod-${idx}`,
        num: (typeof m === 'object' && m.num) ? m.num : (idx < 9 ? `0${idx + 1}` : `${idx + 1}`),
        title: cleanedTitle || `Module ${idx + 1}`,
        badge: (typeof m === 'object' && m.badge) ? m.badge : `MODULE ${idx + 1}`,
        image: (typeof m === 'object' && m.image) ? m.image : '',
        topics: (typeof m === 'object' && Array.isArray(m.topics))
          ? m.topics
          : (typeof m?.topics === 'string' ? m.topics.split('\n').map((t) => t.trim()).filter(Boolean) : ['Hands-on Lab Exercises', 'Live Industry Scenarios'])
      };
    });

    const normalizedProjects = (formData.projectsList || []).map((p) => {
      if (typeof p === 'string') return p;
      const toolsArr = typeof p.tools === 'string'
        ? p.tools.split(',').map((t) => t.trim()).filter(Boolean)
        : (Array.isArray(p.tools) ? p.tools : []);
      return {
        ...p,
        tools: toolsArr
      };
    });

    const taglineText = (formData.tagline || formData.description || `Master ${rawTitle} with live hands-on projects and placement support.`).trim();
    const descText = (formData.description || formData.tagline || `Comprehensive training in ${rawTitle} with live interactive labs.`).trim();

    const payload = {
      ...formData,
      id: courseId,
      title: rawTitle,
      tagline: taglineText,
      description: descText,
      slug: computedSlug,
      hashLink: formData.hashLink || `#${computedSlug}_course`,
      position: formData.imagePosition,
      fit: formData.imageFit,
      tools: toolsArray.length > 0 ? toolsArray : ['AWS', 'Docker'],
      projects: normalizedProjects,
      whoIsItFor: formData.whoIsItForList || [],
      admissionSteps: formData.admissionStepsList || [],
      curriculumModules: normalizedModules.length > 0 ? normalizedModules : [{ num: '01', title: 'Fundamentals & Core Concepts', badge: 'MODULE 1', topics: ['Core Concepts', 'Hands-on Labs'] }]
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

  const safeCourses = Array.isArray(courses) ? courses : [];
  const filteredCourses = safeCourses.filter((c) => {
    const titleMatch = (c.title || '').toLowerCase().includes(searchTerm.toLowerCase());
    const slugMatch = (c.slug || '').toLowerCase().includes(searchTerm.toLowerCase());
    return titleMatch || slugMatch;
  });

  return (
    <div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: '24px', paddingBottom: '16px', borderBottom: '1.5px solid #e2e8f0'
      }}>
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#000648', margin: 0 }}>
            Course Catalog & Complete Page Manager
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
            Edit catalog cards, capstones, 6 admission steps, and audience profiles for all course pages.
          </p>
        </div>

        <button
          type="button"
          onClick={handleOpenAdd}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '10px 20px', background: '#000648', color: '#f2b733',
            borderRadius: '10px', fontWeight: 800, border: 'none', cursor: 'pointer',
            fontSize: '0.875rem'
          }}
        >
          <HiPlus size={18} /> Add New Course
        </button>
      </div>

      {/* Course Form Modal */}
      <CourseFormModal
        isEditing={isEditing}
        editingId={editingId}
        formData={formData}
        setFormData={setFormData}
        formErrors={formErrors}
        setFormErrors={setFormErrors}
        onSave={handleSave}
        onCancel={() => setIsEditing(false)}
        onOpenImagePicker={() => setIsImagePickerOpen(true)}
      />

      {/* Search Input */}
      <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <label htmlFor="course_search_input" style={{ fontSize: '0.75rem', fontWeight: 700, color: '#475569', display: 'none' }}>
          Filter Course Catalog
        </label>
        <div style={{ position: 'relative', flex: 1, maxWidth: '400px' }}>
          <HiSearch size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
          <input
            id="course_search_input"
            type="text"
            aria-label="Search catalog by title or slug"
            placeholder="Search catalog by title or slug..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%', padding: '10px 14px 10px 38px', borderRadius: '8px',
              border: '1.5px solid #cbd5e1', fontSize: '0.875rem', outline: 'none'
            }}
          />
        </div>
        <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>
          Showing {filteredCourses.length} of {courses.length} courses
        </span>
      </div>

      {/* Courses Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {filteredCourses.map((c) => (
          <div key={c.id || c.slug} style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ height: '175px', position: 'relative', overflow: 'hidden', background: '#ffffff' }}>
                <img
                  loading="lazy"
                  src={resolveImageSrc(c.image)}
                  alt={c.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: c.fit || c.imageFit || 'cover',
                    objectPosition: c.position || c.imagePosition || 'center center'
                  }}
                />
                <span style={{ position: 'absolute', top: '10px', right: '10px', background: '#000648', color: '#f2b733', padding: '3px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 800 }}>
                  {c.badge || 'Popular'}
                </span>
              </div>

              <div style={{ padding: '16px' }}>
                <h4 style={{ margin: '0 0 6px 0', fontSize: '1rem', fontWeight: 800, color: '#000648' }}>{c.title}</h4>
                <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b', lineHeight: 1.4 }}>{c.tagline || c.description}</p>
                <div style={{ marginTop: '8px', fontSize: '0.75rem', fontWeight: 700, color: '#000648' }}>
                  Duration: {c.duration} | Languages: {c.languages}
                </div>
              </div>
            </div>

            <div style={{ padding: '12px 16px', borderTop: '1px solid #f1f5f9', display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
              <button
                type="button"
                onClick={() => handleOpenEdit(c)}
                style={{ padding: '6px 12px', background: '#f1f5f9', border: '1px solid #cbd5e1', color: '#000648', borderRadius: '6px', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <HiPencil size={14} /> Edit Course Sections
              </button>
              <button
                type="button"
                onClick={() => handleDelete(c.id || c.slug, c.title)}
                style={{ padding: '6px 12px', background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', borderRadius: '6px', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <HiTrash size={14} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <ImagePickerModal
        isOpen={isImagePickerOpen}
        onClose={() => setIsImagePickerOpen(false)}
        currentImage={formData.image}
        currentPosition={formData.position || formData.imagePosition}
        currentFit={formData.fit || formData.imageFit}
        currentZoom={formData.zoom || formData.imageZoom || 1}
        currentMobilePosition={formData.mobilePosition}
        currentMobileZoom={formData.mobileZoom || 1}
        onSelectImage={(url, pos, fit, zoom, mobileOpts) => {
          setFormData((prev) => ({
            ...prev,
            image: url,
            position: pos || '50% 50%',
            imagePosition: pos || '50% 50%',
            fit: fit || 'cover',
            imageFit: fit || 'cover',
            zoom: zoom || 1,
            imageZoom: zoom || 1,
            mobilePosition: mobileOpts?.mobilePosition || pos || '50% 50%',
            mobileZoom: mobileOpts?.mobileZoom || zoom || 1
          }));
        }}
        targetArea="Course Card Banner"
        aspectRatio="Rectangle / Landscape (16:9)"
        recommendedDimensions="1200 x 675 px"
      />
    </div>
  );
}
