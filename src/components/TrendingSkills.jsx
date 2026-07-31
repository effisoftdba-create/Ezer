import React, { useState, useRef } from 'react';
import { phase1Courses } from '../data/courses';
import CourseCard from './CourseCard';
import { HiChevronLeft, HiChevronRight, HiAcademicCap } from 'react-icons/hi';

const tabs = ['All Courses', 'Cloud & DevOps', 'Testing & QA', 'AI & Data', 'IT Infrastructure'];

export default function TrendingSkills({ onOpenDemoModal }) {
  const [activeTab, setActiveTab] = useState(0);
  const sliderRef = useRef(null);

  const getFilteredCourses = () => {
    if (activeTab === 0) return phase1Courses;
    if (activeTab === 1) return phase1Courses.filter(c => c.slug?.includes('devops') || c.slug?.includes('cloud'));
    if (activeTab === 2) return phase1Courses.filter(c => c.slug?.includes('testing') || c.slug?.includes('playwright'));
    if (activeTab === 3) return phase1Courses.filter(c => c.slug?.includes('ai') || c.slug?.includes('ml') || c.slug?.includes('data'));
    if (activeTab === 4) return phase1Courses.filter(c => c.slug?.includes('infrastructure') || c.slug?.includes('sysadmin'));
    return phase1Courses;
  };

  const filtered = getFilteredCourses();
  const display = filtered.length > 0 ? filtered : phase1Courses;

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 300;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="courses" className="section-alt" style={{ padding: '56px 0', borderBottom: '1px solid #e2e8f0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <span className="section-tag">
            <HiAcademicCap size={15} style={{ color: '#f2b733' }} />
            LIVE Cohort Programs
          </span>
          <h2 style={{ fontSize: 'clamp(1.35rem, 2.2vw, 1.7rem)', color: '#000648', marginBottom: '6px' }}>
            Live Online IT Courses with Placement Support
          </h2>
          <p style={{ color: '#475569', fontSize: '0.86rem', maxWidth: '560px', margin: '0 auto' }}>
            Every course combines hands-on labs, real-world projects, and industry-standard tools — backed by up to 1 year of placement assistance.
          </p>
        </div>

        {/* Filter Tabs & Scroll Arrow Controls Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginBottom: '20px', flexWrap: 'wrap', gap: '16px'
        }}>
          {/* Tabs List */}
          <div className="no-scrollbar" style={{
            display: 'flex', gap: '8px', overflowX: 'auto', padding: '4px 0'
          }}>
            {tabs.map((tab, i) => (
              <button 
                key={tab} 
                type="button" 
                onClick={() => setActiveTab(i)}
                style={{
                  padding: '7px 16px', borderRadius: '50px',
                  border: activeTab === i ? '1.5px solid #000648' : '1.5px solid #cbd5e1',
                  background: activeTab === i ? '#000648' : '#ffffff',
                  color: activeTab === i ? '#f2b733' : '#334155',
                  fontWeight: 800, fontSize: '0.76rem', whiteSpace: 'nowrap',
                  cursor: 'pointer', transition: 'border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease',
                  boxShadow: activeTab === i ? '0 4px 12px rgba(0,6,72,0.15)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== i) {
                    e.currentTarget.style.borderColor = '#000648';
                    e.currentTarget.style.color = '#000648';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== i) {
                    e.currentTarget.style.borderColor = '#cbd5e1';
                    e.currentTarget.style.color = '#334155';
                  }
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Left & Right Scroll Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
            <button
              type="button"
              onClick={() => handleScroll('left')}
              aria-label="Scroll left"
              style={{
                width: '38px', height: '38px', borderRadius: '50%',
                border: '1.5px solid #000648', background: '#ffffff',
                color: '#000648', display: 'flex', alignItems: 'center',
                justifyContent: 'center', cursor: 'pointer', transition: 'background-color 0.2s ease, color 0.2s ease',
                boxShadow: '0 2px 8px rgba(0,6,72,0.08)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#000648';
                e.currentTarget.style.color = '#f2b733';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.color = '#000648';
              }}
            >
              <HiChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={() => handleScroll('right')}
              aria-label="Scroll right"
              style={{
                width: '38px', height: '38px', borderRadius: '50%',
                border: '1.5px solid #000648', background: '#000648',
                color: '#f2b733', display: 'flex', alignItems: 'center',
                justifyContent: 'center', cursor: 'pointer', transition: 'background-color 0.2s ease, color 0.2s ease',
                boxShadow: '0 2px 8px rgba(0,6,72,0.15)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f2b733';
                e.currentTarget.style.color = '#000648';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#000648';
                e.currentTarget.style.color = '#f2b733';
              }}
            >
              <HiChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Single Line Scrollable Track (Strictly NO multi-line grid wrapping as requested) */}
        <div
          ref={sliderRef}
          className="no-scrollbar"
          style={{
            display: 'flex',
            gap: '20px',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            padding: '12px 8px 24px 8px', // Space for hover border & shadow
            width: '100%',
            boxSizing: 'border-box',
            scrollBehavior: 'smooth',
          }}
        >
          {display.map((course) => (
            <div
              key={course.id}
              style={{
                flex: '0 0 clamp(280px, 30vw, 320px)',
                scrollSnapAlign: 'start',
                minWidth: '280px',
              }}
            >
              <CourseCard course={course} onOpenDemoModal={onOpenDemoModal} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

