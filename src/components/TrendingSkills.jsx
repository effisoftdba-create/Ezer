import React, { useState, useRef } from 'react';
import { useSiteData } from '../Admin_Control/context/SiteContext';
import CourseCard from './CourseCard';
import UIStateDisplay, { STATE_TYPES } from './UIStateDisplay';
import { HiChevronLeft, HiChevronRight, HiAcademicCap } from 'react-icons/hi';

const tabs = ['All Courses', 'Cloud & DevOps', 'Testing & QA', 'AI & Data', 'IT Infrastructure'];

export default function TrendingSkills({ onOpenDemoModal }) {
  const { courses } = useSiteData();
  const [activeTab, setActiveTab] = useState(0);
  const sliderRef = useRef(null);

  const getFilteredCourses = () => {
    const list = courses || [];
    if (activeTab === 0) return list;
    if (activeTab === 1) return list.filter(c => c.slug?.includes('devops') || c.slug?.includes('cloud'));
    if (activeTab === 2) return list.filter(c => c.slug?.includes('testing') || c.slug?.includes('playwright'));
    if (activeTab === 3) return list.filter(c => c.slug?.includes('ai') || c.slug?.includes('ml') || c.slug?.includes('data'));
    if (activeTab === 4) return list.filter(c => c.slug?.includes('infrastructure') || c.slug?.includes('sysadmin'));
    return list;
  };

  const filtered = getFilteredCourses();

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
            {tabs.map((tab, idx) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(idx)}
                style={{
                  padding: '7px 16px',
                  borderRadius: '50px',
                  fontSize: '0.78rem',
                  fontWeight: activeTab === idx ? 800 : 600,
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  border: activeTab === idx ? '1.5px solid #000648' : '1px solid #cbd5e1',
                  background: activeTab === idx ? '#000648' : '#ffffff',
                  color: activeTab === idx ? '#ffffff' : '#475569',
                  boxShadow: activeTab === idx ? '0 4px 12px rgba(0, 6, 72, 0.15)' : 'none',
                  transition: 'background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease',
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div style={{ display: 'flex', gap: '8px', marginLeft: 'auto' }}>
            <button
              type="button"
              onClick={() => handleScroll('left')}
              aria-label="Scroll left"
              style={{
                width: '36px', height: '36px', borderRadius: '50%',
                border: '1px solid #cbd5e1', background: '#ffffff',
                color: '#000648', display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                transition: 'background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#000648'; e.currentTarget.style.background = '#000648'; e.currentTarget.style.color = '#f2b733'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#cbd5e1'; e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#000648'; }}
            >
              <HiChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              aria-label="Scroll right"
              style={{
                width: '36px', height: '36px', borderRadius: '50%',
                border: '1px solid #cbd5e1', background: '#ffffff',
                color: '#000648', display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                transition: 'background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#000648'; e.currentTarget.style.background = '#000648'; e.currentTarget.style.color = '#f2b733'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#cbd5e1'; e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#000648'; }}
            >
              <HiChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Slider Layout or Empty Search UI State */}
        {filtered.length > 0 ? (
          <div
            ref={sliderRef}
            className="no-scrollbar"
            style={{
              display: 'flex',
              gap: '20px',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              paddingBottom: '16px',
              scrollBehavior: 'smooth',
            }}
          >
            {filtered.map((course) => (
              <div
                key={course.id || course.slug}
                style={{
                  flex: '0 0 320px',
                  scrollSnapAlign: 'start',
                }}
              >
                <CourseCard course={course} onOpenDemoModal={onOpenDemoModal} />
              </div>
            ))}
          </div>
        ) : (
          <UIStateDisplay
            type={STATE_TYPES.NO_SEARCH_RESULTS}
            title="No Courses Found in Selected Category"
            message={`No active programs match the category "${tabs[activeTab]}". Click reset to view all available courses.`}
            onRetry={() => setActiveTab(0)}
            actionLabel="View All Courses"
          />
        )}

      </div>
    </section>
  );
}
