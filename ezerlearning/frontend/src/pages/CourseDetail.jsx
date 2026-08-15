import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { HiChevronLeft, HiChevronRight, HiCheckCircle, HiSparkles, HiAcademicCap } from 'react-icons/hi';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { getCourseBySlug } from '../data/courses';
import { useSiteData } from '../context/SiteContext';
import { handleImgError, resolveImageSrc } from '../utils/imageUtils';
import { cleanModuleTitle } from '../utils/courseUtils';

import VideoPlayer from '../components/VideoPlayer';
import PaymentCard from '../components/PaymentCard';
import CampusImmersionBanner from '../components/CampusImmersionBanner';
import FacultyShowcase from '../components/FacultyShowcase';
import CourseAdmissionSteps from '../components/CourseAdmissionSteps';
import CourseComparisonTable from '../components/CourseComparisonTable';
import FeeInstallmentSchedule from '../components/FeeInstallmentSchedule';
import FAQAccordion from '../components/FAQAccordion';

import CourseHeroHeader from '../components/course-detail/CourseHeroHeader';
import CourseApplicationCard from '../components/course-detail/CourseApplicationCard';
import HiredCompaniesGrid from '../components/course-detail/HiredCompaniesGrid';
import CapstoneProjectsSlider from '../components/course-detail/CapstoneProjectsSlider';
import VerifiableCertificateBanner from '../components/course-detail/VerifiableCertificateBanner';
import WhoIsThisProgrammeFor from '../components/course-detail/WhoIsThisProgrammeFor';
import CoursePurchaseModal from '../components/course-detail/CoursePurchaseModal';

const learnerTransitions = [
  {
    name: "Balasubramani",
    beforeRole: "Support Associate",
    company: "ClarityTTS",
    afterRole: "VLSI Physical Design Engineer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    name: "Padmini Kadhirvel",
    beforeRole: "Non-IT Graduate",
    company: "TachoMind",
    afterRole: "Automation Testing Engineer",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    name: "Hasna Raza",
    beforeRole: "Fresher, B.Sc (Physics)",
    company: "Fipsar Tech",
    afterRole: "ASIC Verification Engineer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    name: "Subathra N",
    beforeRole: "Quality Analyst",
    company: "Standard Chartered",
    afterRole: "Senior Automation Engineer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300",
  },
];

export default function CourseDetail({ onOpenDemoModal }) {
  const { slug } = useParams();
  const { courses } = useSiteData();
  const course = (courses || []).find((c) => c.slug === slug || c.id === slug) || getCourseBySlug(slug);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = React.useState(false);

  React.useEffect(() => {
    let timerId;
    if (window.location.hash) {
      const targetId = window.location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        timerId = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
      }
    }
    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, []);

  if (!course) {
    return (
      <div className="container" style={{ padding: '100px 24px', textAlign: 'center' }}>
        <h2>Course Not Found</h2>
        <p>The requested course program does not exist or has been updated.</p>
        <Link to="/courses" className="btn btn-gold" style={{ marginTop: '20px' }}>
          Explore All Courses
        </Link>
      </div>
    );
  }

  // Active YouTube video URL fallback
  const activeVideoUrl = course.videoUrl || 'https://www.youtube.com/watch?v=aircAruvnKk';

  // Modules List for Admin-driven Detailed Breakdown (Cleaned & Sanitized)
  const defaultCourseData = getCourseBySlug(slug) || {};
  const defaultModules = Array.isArray(defaultCourseData.curriculumModules) && defaultCourseData.curriculumModules.length > 0
    ? defaultCourseData.curriculumModules
    : [
        {
          num: "01",
          title: "Foundations & Core Architecture",
          topics: ["Environment Setup & Tooling", "Core Fundamentals", "Hands-on Practical Exercises", "Real-World Best Practices"]
        },
        {
          num: "02",
          title: "Advanced Practical Engineering & Implementation",
          topics: ["Building Production Modules", "Debugging & Error Handling", "Performance Optimization", "Code Reviews & Mentorship"]
        },
        {
          num: "03",
          title: "Capstone Project & Placement Preparation",
          topics: ["Live Industry Capstone Build", "CI/CD & Cloud Deployment", "Mock Technical Interviews", "12-Month Placement Support"]
        }
      ];

  const rawModules = (Array.isArray(course.curriculumModules) && course.curriculumModules.length > 0 && !course.curriculumModules.every((m) => !m.topics || m.topics.length <= 2 && m.topics.includes('Hands-on Lab Exercises')))
    ? course.curriculumModules
    : defaultModules;

  const modulesList = rawModules.map((m, idx) => ({
    ...m,
    num: m.num || (idx < 9 ? `0${idx + 1}` : `${idx + 1}`),
    title: cleanModuleTitle(m.title) || `Module ${idx + 1}`
  }));

  return (
    <LazyMotion features={domAnimation}>
    <div style={{ background: '#ffffff', color: '#1e293b' }}>
      {/* 1. HERO PROGRAM OVERVIEW SECTION */}
      <section
        style={{
          background: '#000648',
          color: '#ffffff',
          padding: '64px 0 72px',
          position: 'relative',
          borderBottom: '3px solid #f2b733',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(450px, 100%), 1fr))',
              gap: '40px',
              alignItems: 'center',
            }}
          >
            <m.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CourseHeroHeader course={course} onOpenDemoModal={onOpenDemoModal} onOpenPurchaseModal={() => setIsPurchaseModalOpen(true)} />
            </m.div>

            <m.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <CourseApplicationCard course={course} onOpenPurchaseModal={() => setIsPurchaseModalOpen(true)} />
            </m.div>
          </div>
        </div>
      </section>

      {/* 2. FULL-WIDTH VIDEO PLAYER SECTION (NEXT RIGHT AFTER HERO) */}
      <section
        style={{
          width: '100%',
          background: 'radial-gradient(ellipse at 50% 0%, #000a5e 0%, #000428 100%)',
          color: '#ffffff',
          padding: '40px 0',
          position: 'relative',
          borderBottom: '2px solid rgba(242, 183, 51, 0.4)',
        }}
      >
        <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(16px, 3vw, 48px)' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(242, 183, 51, 0.18)',
                color: '#f2b733',
                padding: '6px 20px',
                borderRadius: '50px',
                fontSize: '0.78rem',
                fontWeight: 900,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                border: '1.5px solid rgba(242, 183, 51, 0.4)',
                marginBottom: '10px'
              }}
            >
              COURSE LIVE DEMO & PRACTICAL VIDEO PREVIEW
            </span>

            <h2 style={{ color: '#ffffff', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 900, margin: '4px 0 0' }}>
              Watch Live Instructor Training Session
            </h2>
          </div>

          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ width: '100%', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 60px rgba(0,0,0,0.5)' }}
          >
            <VideoPlayer videoUrl={activeVideoUrl} poster={course.image} title={course.title} />
          </m.div>
        </div>
      </section>

      {/* 3. DETAILED MODULE BREAKDOWN SECTION (MOVED NEXT TO VIDEO PLAYER) */}
      <section className="section" style={{ background: '#ffffff', padding: '44px 0', position: 'relative' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 36px' }}>
            <span className="section-tag" style={{ marginBottom: '10px' }}>Detailed Module Breakdown</span>
            <h2 style={{ color: '#000648', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 900, marginBottom: '14px' }}>
              In-Depth Curriculum & Learning Modules
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
              {course.description}
            </p>
          </div>

          {/* Visual Module Cards Grid with Cover Photos & Framer Motion */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: '28px', width: '100%' }}>
            {modulesList.map((mod, idx) => {
              const coverImg = mod.image || [
                "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600"
              ][idx % 6];

              return (
                <m.div
                  key={mod.id || mod.num || mod.title || 'course-module-card'}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 6, 72, 0.16)', borderColor: '#f2b733' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  style={{
                    background: '#ffffff',
                    borderRadius: '24px',
                    border: '2px solid #000648',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0, 6, 72, 0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'border-color 0.3s ease'
                  }}
                >
                  {/* Photo Header Container */}
                  <div style={{ position: 'relative', height: '180px', overflow: 'hidden', background: '#000648' }}>
                    <img
                      loading="lazy"
                      src={coverImg}
                      alt={mod.title}
                      onError={handleImgError}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(0,6,72,0.85) 100%)' }} />

                    {/* Module Number Circular Badge */}
                    <span
                      style={{
                        position: 'absolute',
                        top: '14px',
                        left: '14px',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: '#000648',
                        color: '#f2b733',
                        border: '2px solid #f2b733',
                        fontSize: '0.95rem',
                        fontWeight: 900,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                      }}
                    >
                      {mod.num || `0${idx + 1}`}
                    </span>

                    {/* Category / Badge Tag */}
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '12px',
                        right: '14px',
                        background: '#f2b733',
                        color: '#000648',
                        padding: '4px 14px',
                        borderRadius: '50px',
                        fontSize: '0.72rem',
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                      }}
                    >
                      {mod.badge || `MODULE ${idx + 1}`}
                    </span>
                  </div>

                  {/* Card Content Body */}
                  <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#000648', marginBottom: '14px', lineHeight: 1.35 }}>
                        {mod.title}
                      </h3>

                      <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {mod.topics?.map((topic, tIdx) => (
                          <li key={tIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#334155', lineHeight: 1.5 }}>
                            <HiCheckCircle size={18} style={{ color: '#f2b733', flexShrink: 0, marginTop: '2px' }} />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ marginTop: '20px', paddingTop: '14px', borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#166534', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <HiCheckCircle size={14} /> Accelerated Learning Track
                      </span>
                    </div>
                  </div>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. EZER BRAND PAYMENT SECTION (#000648 Navy & #f2b733 Gold - NO SIDE MARGIN GAPS) */}
      <section className="section" style={{ background: '#000648', padding: '44px 0', borderTop: '3px solid #f2b733', borderBottom: '3px solid #f2b733' }}>
        <div className="container" style={{ width: '100%', maxWidth: '100%', padding: '0 clamp(16px, 4vw, 64px)' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 28px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(242, 183, 51, 0.18)',
                color: '#f2b733',
                padding: '6px 20px',
                borderRadius: '50px',
                fontSize: '0.78rem',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '10px'
              }}
            >
              OFFICIAL INSTANT ENROLLMENT
            </span>

            <h2 style={{ color: '#ffffff', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 900, marginBottom: '10px' }}>
              Enroll Today & Unlock 12-Month Placement Support
            </h2>
            <p style={{ fontSize: '1rem', color: '#cbd5e1', margin: 0, lineHeight: 1.6 }}>
              Get full access to live classes, hands-on practical labs, 1:1 mentorship, and corporate referral support.
            </p>
          </div>

          {/* Full Container Width Payment Card */}
          <PaymentCard course={course} onEnrollClick={() => setIsPurchaseModalOpen(true)} />
        </div>
      </section>

      {/* 5. ADDITIONAL SECTIONS (HIRED COMPANIES, ADMISSION STEPS, FACULTY, FAQ) */}
      <HiredCompaniesGrid transitions={learnerTransitions} />
      <CapstoneProjectsSlider projects={course.projects} courseTools={course.tools} />
      <VerifiableCertificateBanner courseTitle={course.title} onOpenDemoModal={onOpenDemoModal} />

      <div style={{ background: '#ffffff', padding: '24px 0' }}>
        <div className="container" style={{ maxWidth: '1140px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
            
            {course.campusImmersion && (
              <CampusImmersionBanner immersion={course.campusImmersion} />
            )}

            {/* ADMISSION STEPS */}
            <CourseAdmissionSteps steps={course.admissionSteps} />

            {/* WHO IS THIS PROGRAMME FOR? */}
            <WhoIsThisProgrammeFor audienceList={course.whoIsItFor} />

            {/* SENIOR MENTORS / FACULTY SHOWCASE */}
            <FacultyShowcase faculty={course.faculty} />

            {/* BENCHMARK COMPARISON TABLE */}
            {course.comparisonData && (
              <CourseComparisonTable comparisonData={course.comparisonData} />
            )}

            {course.faqs && (
              <div>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                  <span className="badge badge-gold" style={{ marginBottom: '8px' }}>Got Questions?</span>
                  <h3 style={{ color: '#000648', fontSize: '1.6rem', fontWeight: 900, margin: 0 }}>
                    Frequently Asked Questions
                  </h3>
                </div>
                <FAQAccordion items={course.faqs} />
              </div>
            )}
          </div>
        </div>
      </div>

      <CoursePurchaseModal
        isOpen={isPurchaseModalOpen}
        onClose={() => setIsPurchaseModalOpen(false)}
        course={course}
      />
    </div>
    </LazyMotion>
  );
}
