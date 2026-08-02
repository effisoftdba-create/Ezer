import React from 'react';
import { Link } from 'react-router-dom';
import { HiClock, HiArrowRight, HiGlobeAlt, HiStar } from 'react-icons/hi';

export default function CourseCard({ course, onOpenDemoModal }) {
  const languagesDisplay = course.languages || 'Tamil, English & Hindi';
  const shortDesc = course.subtitle || course.description || 'Learn from active corporate engineers with real hands-on production labs & job referrals.';

  return (
    <div 
      style={{
        background: '#000648', 
        borderRadius: '16px', 
        border: '1.5px solid rgba(242, 183, 51, 0.25)',
        overflow: 'hidden', 
        display: 'flex', 
        flexDirection: 'column',
        height: '100%',
        minHeight: '450px',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
        boxShadow: '0 8px 24px rgba(0, 6, 72, 0.3)',
        position: 'relative',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 6, 72, 0.45)';
        e.currentTarget.style.borderColor = '#f2b733';
        e.currentTarget.style.transform = 'translateY(-5px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 6, 72, 0.3)';
        e.currentTarget.style.borderColor = 'rgba(242, 183, 51, 0.25)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Clear Image Banner Header */}
      <div style={{ position: 'relative', height: '175px', overflow: 'hidden', background: '#000326' }}>
        <img 
          src={course.image?.startsWith('http') ? course.image : `${import.meta.env.BASE_URL || '/'}${course.image?.replace(/^\//, '')}`} 
          alt={course.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }}
        />

        {/* Bestseller Badge matching Reference Image */}
        <span style={{
          position: 'absolute', top: '12px', left: '12px',
          background: '#f2b733', color: '#000648',
          fontSize: '0.68rem', fontWeight: 900, padding: '4px 12px',
          borderRadius: '6px', textTransform: 'uppercase', letterSpacing: '0.06em',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
        }}>
          {course.badge || 'Bestseller'}
        </span>
      </div>

      {/* Dark Card Body matching Reference Image */}
      <div style={{ padding: '20px 18px 18px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between', background: '#000648' }}>
        <div>
          {/* Course Title matching Reference Image Typography */}
          <h3 style={{
            fontSize: '1.08rem', fontWeight: 800, color: '#ffffff',
            lineHeight: 1.35, marginBottom: '8px',
            display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
            overflow: 'hidden', minHeight: '2.8em'
          }}>
            {course.title}
          </h3>

          {/* Subtitle / Language Line matching Reference Image */}
          <div style={{ 
            display: 'flex', alignItems: 'center', gap: '6px', 
            fontSize: '0.82rem', color: '#f2b733', marginBottom: '10px', fontWeight: 700
          }}>
            <HiGlobeAlt size={16} style={{ color: '#f2b733', flexShrink: 0 }} />
            <span>{languagesDisplay}</span>
          </div>

          {/* Short Description matching Reference Image */}
          <p style={{
            fontSize: '0.8rem', color: '#cbd5e1', lineHeight: 1.5, marginBottom: '14px',
            display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
            overflow: 'hidden', minHeight: '2.4em'
          }}>
            {shortDesc}
          </p>

          {/* Rating Row matching Reference Image (5.0 ★★★★★ (2,566)) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
            <span style={{ fontSize: '0.92rem', fontWeight: 900, color: '#ffffff' }}>5.0</span>
            <div style={{ display: 'flex', color: '#f2b733', gap: '2px', fontSize: '0.9rem' }}>
              <HiStar /><HiStar /><HiStar /><HiStar /><HiStar />
            </div>
            <span style={{ fontSize: '0.78rem', color: '#94a3b8', marginLeft: '4px' }}>(2,566)</span>
          </div>
        </div>

        {/* 2 Action Buttons (Syllabus & Know More) Replaces Amount in #000648 & #f2b733 Palette */}
        <div style={{ display: 'flex', gap: '10px', marginTop: 'auto', paddingTop: '10px' }}>
          <button 
            type="button"
            onClick={() => onOpenDemoModal(course.title)}
            style={{
              flex: 1, padding: '10px 0', borderRadius: '8px',
              fontSize: '0.86rem', fontWeight: 800, textAlign: 'center',
              background: 'transparent', border: '1.5px solid #f2b733',
              color: '#f2b733', cursor: 'pointer',
              transition: 'background-color 0.2s ease, color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f2b733';
              e.currentTarget.style.color = '#000648';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#f2b733';
            }}
          >
            Syllabus
          </button>
          
          <Link 
            to={`/courses/${course.slug}`} 
            style={{
              flex: 1.1, padding: '10px 0', borderRadius: '8px',
              fontSize: '0.86rem', fontWeight: 900, textAlign: 'center',
              background: '#f2b733', color: '#000648',
              border: '1.5px solid #f2b733', textDecoration: 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px',
              boxShadow: '0 4px 12px rgba(242, 183, 51, 0.25)',
              transition: 'background-color 0.2s ease, color 0.2s ease, transform 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#000648';
              e.currentTarget.style.color = '#f2b733';
              e.currentTarget.style.borderColor = '#f2b733';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#f2b733';
              e.currentTarget.style.color = '#000648';
              e.currentTarget.style.borderColor = '#f2b733';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
}



