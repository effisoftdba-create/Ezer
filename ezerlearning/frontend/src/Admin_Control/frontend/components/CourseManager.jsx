import React, { useState } from 'react';
import { useSiteData } from '../context/SiteContext';
import ImagePickerModal from './ImagePickerModal';
import CourseFormModal from './CourseFormModal';
import { HiPlus, HiTrash, HiPencil, HiSearch } from 'react-icons/hi';
import { resolveImageSrc } from '../utils/imageUtils';
import { cleanModuleTitle } from '../utils/courseUtils';
import { getCourseBySlug } from '../../../data/courses';

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

    const defaultCourseData = getCourseBySlug(course.slug || course.id || course.title) || {};
    const defaultModules = Array.isArray(defaultCourseData.curriculumModules) ? defaultCourseData.curriculumModules : [];
    const defaultProjects = Array.isArray(defaultCourseData.projects) ? defaultCourseData.projects : [];

    // Check if the current course has valid custom curriculum modules or if it has stale placeholder topics
    const hasStaleOrEmptyTopics = !Array.isArray(course.curriculumModules) || 
      course.curriculumModules.length === 0 || 
      course.curriculumModules.every((m) => !m.topics || m.topics.length <= 2 && m.topics.includes('Hands-on Lab Exercises'));

    const sourceModules = (!hasStaleOrEmptyTopics && course.curriculumModules.length > 0)
      ? course.curriculumModules
      : defaultModules;

    const safeCurriculumModules = sourceModules.map((m, idx) => {
      const rawTitle = typeof m === 'object' ? m.title : String(m);
      const cleanedTitle = cleanModuleTitle(rawTitle);
      const defMod = defaultModules[idx] || {};
      const defTopics = Array.isArray(defMod.topics) ? defMod.topics : ['Hands-on Lab Exercises', 'Live Industry Scenarios'];

      const currentTopics = (typeof m === 'object' && Array.isArray(m.topics) && m.topics.length > 0 && !m.topics.includes('Hands-on Lab Exercises'))
        ? m.topics
        : (typeof m?.topics === 'string' && !m.topics.includes('Hands-on Lab Exercises')
            ? m.topics.split('\n').map((t) => t.trim()).filter(Boolean)
            : defTopics);

      return {
        id: (typeof m === 'object' && m.id) ? m.id : `mod-${idx}`,
        num: (typeof m === 'object' && m.num) ? m.num : (defMod.num || (idx < 9 ? `0${idx + 1}` : `${idx + 1}`)),
        title: cleanedTitle || defMod.title || `Module ${idx + 1}`,
        badge: (typeof m === 'object' && m.badge && !m.badge.startsWith('MODULE ')) ? m.badge : (defMod.badge || `MODULE ${idx + 1}`),
        image: (typeof m === 'object' && m.image) ? m.image : (defMod.image || ''),
        topics: currentTopics
      };
    });

    const courseTools = Array.isArray(course.tools)
      ? course.tools
      : (typeof course.tools === 'string' && course.tools.trim()
          ? course.tools.split(',').map((t) => t.trim()).filter(Boolean)
          : (defaultCourseData.tools || ['Python', 'TensorFlow', 'PyTorch', 'Scikit-Learn']));

    const sourceProjects = (Array.isArray(course.projects) && course.projects.length > 0)
      ? course.projects
      : (defaultProjects.length > 0 ? defaultProjects : DEFAULT_COURSE_STATE.projectsList);

    const safeProjectsList = sourceProjects.map((p, idx) => {
      if (typeof p === 'string') {
        return {
          id: `proj-${idx}`,
          title: p,
          desc: 'Build end-to-end production lab infrastructure evaluated by senior corporate mentors for portfolio readiness.',
          category: 'Capstone Project',
          tools: courseTools.slice(0, 4)
        };
      }
      return {
        id: p.id || `proj-${idx}`,
        title: p.title || `Capstone Project #${idx + 1}`,
        desc: p.desc || p.description || 'Build end-to-end production lab infrastructure evaluated by senior corporate mentors for portfolio readiness.',
        category: p.category || 'Capstone Project',
        tools: Array.isArray(p.tools) 
          ? p.tools 
          : (typeof p.tools === 'string' && p.tools.trim() ? p.tools.split(',').map((t) => t.trim()).filter(Boolean) : courseTools.slice(0, 4))
      };
    });

    const sourceWhoIsItFor = (Array.isArray(course.whoIsItFor) && course.whoIsItFor.length > 0)
      ? course.whoIsItFor
      : (defaultCourseData.whoIsItFor || DEFAULT_COURSE_STATE.whoIsItForList);

    const sourceAdmissionSteps = (Array.isArray(course.admissionSteps) && course.admissionSteps.length > 0)
      ? course.admissionSteps
      : (defaultCourseData.admissionSteps || DEFAULT_COURSE_STATE.admissionStepsList);

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
      tools: courseTools.join(', '),
      projectsList: safeProjectsList,
      whoIsItForList: sourceWhoIsItFor,
      admissionStepsList: sourceAdmissionSteps,
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

    const normalizedProjects = (formData.projectsList || []).map((p, idx) => {
      if (typeof p === 'string') {
        return {
          id: `proj-${idx}`,
          title: p,
          desc: 'Build end-to-end production lab infrastructure evaluated by senior corporate mentors for portfolio readiness.',
          category: 'Capstone Project',
          tools: toolsArray.slice(0, 4)
        };
      }
      const toolsArr = typeof p.tools === 'string'
        ? p.tools.split(',').map((t) => t.trim()).filter(Boolean)
        : (Array.isArray(p.tools) ? p.tools : toolsArray.slice(0, 4));
      return {
        ...p,
        id: p.id || `proj-${idx}`,
        title: p.title || `Capstone Project #${idx + 1}`,
        desc: p.desc || p.description || 'Build end-to-end production lab infrastructure evaluated by senior corporate mentors for portfolio readiness.',
        category: p.category || 'Capstone Project',
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

  const filteredCourses = (courses || []).filter((c) =>
    (c.title || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (c.tagline || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#000648', margin: '0 0 4px 0' }}>
            Course Program Management
          </h2>
          <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>
            Configure live cohort syllabi, tuition fees, capstone projects, curriculum modules, and admission steps.
          </p>
        </div>
        <button
          onClick={handleOpenAdd}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: '#000648',
            color: '#f2b733',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '10px',
            fontWeight: 800,
            fontSize: '0.9rem',
            cursor: 'pointer'
          }}
        >
          <HiPlus size={18} /> Add New Course
        </button>
      </div>

      <div style={{ position: 'relative', marginBottom: '20px' }}>
        <HiSearch size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
        <input
          type="text"
          placeholder="Search courses by title or tagline..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '10px 14px 10px 42px',
            borderRadius: '10px',
            border: '1.5px solid #cbd5e1',
            fontSize: '0.9rem',
            background: '#ffffff'
          }}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
        {filteredCourses.map((c) => (
          <div
            key={c.id || c.slug}
            style={{
              background: '#ffffff',
              borderRadius: '14px',
              border: '1.5px solid #e2e8f0',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
            }}
          >
            <div>
              <div style={{ height: '140px', background: '#000648', position: 'relative', overflow: 'hidden' }}>
                <img
                  src={resolveImageSrc(c.image)}
                  alt={c.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: c.fit || c.imageFit || 'cover',
                    objectPosition: c.position || c.imagePosition || 'center center',
                    transform: `scale(${c.zoom || c.imageZoom || 1})`
                  }}
                  onError={(e) => { e.target.src = resolveImageSrc('images/hero/cloud_deveops.png'); }}
                />
                <span style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: '#f2b733',
                  color: '#000648',
                  padding: '3px 10px',
                  borderRadius: '20px',
                  fontSize: '0.72rem',
                  fontWeight: 800
                }}>
                  {c.badge || 'Live Cohort'}
                </span>
              </div>
              <div style={{ padding: '16px' }}>
                <h3 style={{ margin: '0 0 6px 0', fontSize: '1.1rem', fontWeight: 800, color: '#000648' }}>
                  {c.title}
                </h3>
                <p style={{ margin: '0 0 12px 0', fontSize: '0.8rem', color: '#64748b', lineClamp: 2, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {c.tagline || c.description}
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.75rem', background: '#f1f5f9', padding: '2px 8px', borderRadius: '4px', color: '#475569', fontWeight: 600 }}>
                    ⏱ {c.duration || '3 Months'}
                  </span>
                  <span style={{ fontSize: '0.75rem', background: '#f1f5f9', padding: '2px 8px', borderRadius: '4px', color: '#475569', fontWeight: 600 }}>
                    💰 {c.price || c.fee || '₹29,999'}
                  </span>
                </div>
              </div>
            </div>

            <div style={{ padding: '12px 16px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
              <button
                onClick={() => handleOpenEdit(c)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  background: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#000648',
                  cursor: 'pointer'
                }}
              >
                <HiPencil size={14} /> Edit
              </button>
              <button
                onClick={() => handleDelete(c.id || c.slug, c.title)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  background: '#fff1f2',
                  border: '1px solid #fecdd3',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#e11d48',
                  cursor: 'pointer'
                }}
              >
                <HiTrash size={14} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

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

      <ImagePickerModal
        isOpen={isImagePickerOpen}
        onClose={() => setIsImagePickerOpen(false)}
        onSelectImage={(url) => {
          setFormData((prev) => ({ ...prev, image: url }));
          setIsImagePickerOpen(false);
        }}
        currentImage={formData.image}
      />
    </div>
  );
}
