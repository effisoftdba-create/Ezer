import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { HiChevronLeft, HiChevronRight, HiCheckCircle, HiSparkles, HiAcademicCap } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { getCourseBySlug } from '../data/courses';
import { useSiteData } from '../Admin_Control/context/SiteContext';

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
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300",
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

  // Modules List for Admin-driven Detailed Breakdown
  const modulesList = course.curriculumModules || [
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

  return (
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
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CourseHeroHeader course={course} onOpenDemoModal={onOpenDemoModal} onOpenPurchaseModal={() => setIsPurchaseModalOpen(true)} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <CourseApplicationCard course={course} onOpenPurchaseModal={() => setIsPurchaseModalOpen(true)} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. FULL-WIDTH VIDEO PLAYER SECTION (NEXT RIGHT AFTER HERO) */}
      <section
        style={{
          width: '100%',
          background: 'radial-gradient(ellipse at 50% 0%, #000a5e 0%, #000428 100%)',
          color: '#ffffff',
          padding: '56px 0',
          position: 'relative',
          borderBottom: '2px solid rgba(242, 183, 51, 0.4)',
        }}
      >
        <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(16px, 3vw, 48px)' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
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
                marginBottom: '12px'
              }}
            >
              <HiSparkles size={16} /> ▶ COURSE LIVE DEMO & PRACTICAL VIDEO PREVIEW
            </span>
            <h2 style={{ color: '#ffffff', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 900, margin: '4px 0 0' }}>
              Watch Live Instructor Training Session
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ width: '100%', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 60px rgba(0,0,0,0.5)' }}
          >
            <VideoPlayer videoUrl={activeVideoUrl} poster={course.image} title={course.title} />
          </motion.div>
        </div>
      </section>

      {/* 3. DETAILED MODULE BREAKDOWN SECTION (MOVED NEXT TO VIDEO PLAYER) */}
      <section className="section" style={{ background: '#ffffff', padding: '72px 0', position: 'relative' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px' }}>
            <span className="section-tag" style={{ marginBottom: '10px' }}>Detailed Module Breakdown</span>
            <h2 style={{ color: '#000648', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 900, marginBottom: '16px' }}>
              In-Depth Curriculum & Learning Modules
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
              {course.description}
            </p>
          </div>

          {/* Module Cards Grid (Admin Editable) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: '28px', width: '100%' }}>
            {modulesList.map((mod, idx) => (
              <motion.div
                key={mod.num || idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{
                  background: '#f8fafc',
                  padding: '32px',
                  borderRadius: '20px',
                  border: '2px solid #000648',
                  boxShadow: '0 12px 32px rgba(0, 6, 72, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                    <span
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        background: '#000648',
                        color: '#f2b733',
                        fontSize: '1rem',
                        fontWeight: 900,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {mod.num || `0${idx + 1}`}
                    </span>
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#000648', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      MODULE {idx + 1}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#000648', marginBottom: '14px', lineHeight: 1.3 }}>
                    {mod.title}
                  </h3>

                  <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {mod.topics?.map((topic, tIdx) => (
                      <li key={tIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: '#334155', lineHeight: 1.5 }}>
                        <HiCheckCircle size={18} style={{ color: '#f2b733', flexShrink: 0, marginTop: '2px' }} />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EZER BRAND PAYMENT SECTION (#000648 Navy & #f2b733 Gold - NO SIDE MARGIN GAPS) */}
      <section className="section" style={{ background: '#000648', padding: '72px 0', borderTop: '3px solid #f2b733', borderBottom: '3px solid #f2b733' }}>
        <div className="container" style={{ width: '100%', maxWidth: '100%', padding: '0 clamp(16px, 4vw, 64px)' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px' }}>
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
                marginBottom: '12px'
              }}
            >
              <HiSparkles size={16} /> OFFICIAL INSTANT ENROLLMENT
            </span>
            <h2 style={{ color: '#ffffff', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 900, marginBottom: '12px' }}>
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

      <section className="section" style={{ background: '#ffffff', padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: '1140px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', width: '100%' }}>
            
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
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
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
      </section>

      <CoursePurchaseModal
        isOpen={isPurchaseModalOpen}
        onClose={() => setIsPurchaseModalOpen(false)}
        course={course}
      />
    </div>
  );
}
