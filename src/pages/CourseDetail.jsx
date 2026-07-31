import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { HiChevronLeft, HiChevronRight, HiCheckCircle } from 'react-icons/hi';
import { getCourseBySlug } from '../data/courses';

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
  const course = getCourseBySlug(slug);

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
            <CourseHeroHeader course={course} onOpenDemoModal={onOpenDemoModal} />
            <CourseApplicationCard course={course} />
          </div>
        </div>
      </section>

      {/* 2. OUR STUDENTS GET HIRED BY TOP COMPANIES */}
      <HiredCompaniesGrid transitions={learnerTransitions} />

      {/* 3. CAPSTONE PROJECTS SLIDER */}
      <CapstoneProjectsSlider projects={course.projects} courseTools={course.tools} />

      {/* 4. OFFICIAL CERTIFICATION TRUST SEAL */}
      <VerifiableCertificateBanner courseTitle={course.title} onOpenDemoModal={onOpenDemoModal} />

      {/* 5. ADDITIONAL SECTIONS (CURRICULUM, ADMISSION, WHO IS IT FOR, FACULTY, FEES, FAQ) */}
      <section className="section" style={{ background: '#f8fafc', padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: '1140px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', width: '100%' }}>
            
            {course.campusImmersion && (
              <CampusImmersionBanner immersion={course.campusImmersion} />
            )}

            {/* CURRICULUM BREAKDOWN */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <span className="section-tag" style={{ marginBottom: '8px' }}>Course Curriculum</span>
                  <h3 style={{ color: '#000648', margin: 0, fontSize: '1.8rem', fontWeight: 900 }}>
                    Comprehensive Programme Curriculum
                  </h3>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    type="button"
                    onClick={() => {
                      const el = document.getElementById('curriculum-scroll-track');
                      if (el) el.scrollBy({ left: -320, behavior: 'smooth' });
                    }}
                    aria-label="Scroll curriculum left"
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: '#ffffff',
                      border: '1.5px solid #000648',
                      color: '#000648',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <HiChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const el = document.getElementById('curriculum-scroll-track');
                      if (el) el.scrollBy({ left: 320, behavior: 'smooth' });
                    }}
                    aria-label="Scroll curriculum right"
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: '#000648',
                      border: '1.5px solid #000648',
                      color: '#f2b733',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <HiChevronRight size={20} />
                  </button>
                </div>
              </div>

              <div
                id="curriculum-scroll-track"
                className="no-scrollbar"
                style={{
                  display: 'flex',
                  gap: '20px',
                  overflowX: 'auto',
                  scrollSnapType: 'x mandatory',
                  paddingBottom: '16px',
                  width: '100%',
                }}
              >
                {course.modules && course.modules.length > 0 ? (
                  course.modules.map((mod) => (
                    <div
                      key={mod.title}
                      style={{
                        flex: '0 0 min(300px, 85vw)',
                        scrollSnapAlign: 'start',
                        background: '#ffffff',
                        borderRadius: '16px',
                        padding: '24px',
                        boxShadow: '0 4px 16px rgba(0, 6, 72, 0.05)',
                        borderTop: '4px solid #000648',
                        borderLeft: '1.5px solid #e2e8f0',
                        borderRight: '1.5px solid #e2e8f0',
                        borderBottom: '1.5px solid #e2e8f0',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                          <span
                            style={{
                              background: '#000648',
                              color: '#f2b733',
                              fontWeight: 900,
                              width: '32px',
                              height: '32px',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '0.85rem',
                              lineHeight: 1,
                              flexShrink: 0,
                            }}
                          >
                            {mod.module || 'M'}
                          </span>
                          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b' }}>
                            {mod.duration || '2-3 Weeks'}
                          </span>
                        </div>

                        <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#000648', marginBottom: '12px', lineHeight: 1.35 }}>
                          {mod.title}
                        </h4>

                        <ul style={{ paddingLeft: '0', listStyle: 'none', margin: 0, fontSize: '0.85rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          {mod.topics?.map((tp) => (
                            <li key={tp} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                              <HiCheckCircle style={{ color: '#f2b733', fontSize: '1rem', flexShrink: 0, marginTop: '3px' }} />
                              <span>{tp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))
                ) : (
                  course.curriculum?.map((modTitle) => (
                    <div
                      key={modTitle}
                      style={{
                        flex: '0 0 min(280px, 80vw)',
                        scrollSnapAlign: 'start',
                        background: '#ffffff',
                        borderRadius: '16px',
                        padding: '22px 20px',
                        boxShadow: '0 4px 16px rgba(0,6,72,0.05)',
                        borderTop: '4px solid #000648',
                        border: '1.5px solid #e2e8f0',
                      }}
                    >
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#000648', marginBottom: '8px' }}>
                        {modTitle}
                      </h4>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* ADMISSION STEPS (HOW IT WORKS TIMELINE) */}
            {course.admissionSteps && (
              <CourseAdmissionSteps steps={course.admissionSteps} />
            )}

            {/* WHO IS THIS PROGRAMME FOR? */}
            <WhoIsThisProgrammeFor audienceList={course.whoIsItFor} />

            {/* FACULTY SHOWCASE */}
            {course.faculty && (
              <FacultyShowcase faculty={course.faculty} />
            )}

            {/* BENCHMARK COMPARISON TABLE */}
            {course.comparisonData && (
              <CourseComparisonTable comparisonData={course.comparisonData} />
            )}

            <FeeInstallmentSchedule
              schedule={course.feeSchedule}
              fee={course.price}
              applicationFee="₹1,000 + GST"
              referral={{ title: "Learner Referral Scheme", desc: "Refer a friend to receive ₹5,000 instant cashback on your fee." }}
              onOpenDemoModal={onOpenDemoModal}
            />

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
    </div>
  );
}
