import React from 'react';
import { Link } from 'react-router-dom';
import { HiClock, HiArrowRight, HiGlobeAlt, HiStar } from 'react-icons/hi';
import { resolveImageSrc } from '../utils/imageUtils';

export default function CourseCard({ course, onOpenDemoModal }) {
  const displayTools = course.tools ? course.tools.slice(0, 3) : ['AWS', 'Docker', 'Kubernetes'];
  const languagesDisplay = course.languages || 'Tamil, English & Hindi';
  const shortDesc = course.subtitle || course.description || 'Learn from active corporate engineers with real hands-on production labs & job referrals.';

  return (
    <div 
      style={{
        background: '#ffffff', 
        borderRadius: '16px', 
        border: '1.5px solid #e2e8f0',
        overflow: 'hidden', 
        display: 'flex', 
        flexDirection: 'column',
        height: '100%',
        minHeight: '440px',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
        boxShadow: '0 4px 18px rgba(0, 6, 72, 0.06)',
        position: 'relative',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 14px 32px rgba(0, 6, 72, 0.14)';
        e.currentTarget.style.borderColor = '#000648';
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 18px rgba(0, 6, 72, 0.06)';
        e.currentTarget.style.borderColor = '#e2e8f0';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Clear Image Banner Header */}
      <div style={{ position: 'relative', height: '175px', overflow: 'hidden', background: '#ffffff' }}>
        <img 
          src={resolveImageSrc(course.image)} 
          alt={course.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: course.imagePosition || 'center center',
            opacity: 1
          }}
        />

        {/* Category / Bestseller Badge */}
        <span style={{
          position: 'absolute', top: '12px', left: '12px',
          background: '#000648', color: '#f2b733',
          fontSize: '0.68rem', fontWeight: 900, padding: '4px 12px',
          borderRadius: '50px', textTransform: 'uppercase', letterSpacing: '0.06em',
          border: '1px solid #f2b733',
          boxShadow: '0 2px 8px rgba(0, 6, 72, 0.3)'
        }}>
          {course.badge || 'Live Cohort'}
        </span>
      </div>

      {/* White Card Body with Rich Details */}
      <div style={{ padding: '20px 18px 18px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between', background: '#ffffff' }}>
        <div>
          {/* Course Title */}
          <h3 style={{
            fontSize: '1.08rem', fontWeight: 800, color: '#000648',
            lineHeight: 1.35, marginBottom: '8px',
            display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
            overflow: 'hidden', minHeight: '2.8em'
          }}>
            {course.title}
          </h3>

          {/* Subtitle / Language Indicator Line */}
          <div style={{ 
            display: 'flex', alignItems: 'center', gap: '6px', 
            fontSize: '0.84rem', color: '#000648', marginBottom: '10px', fontWeight: 700
          }}>
            <HiGlobeAlt size={16} style={{ color: '#000648', flexShrink: 0 }} />
            <span>{languagesDisplay}</span>
          </div>

          {/* Short Description */}
          <p style={{
            fontSize: '0.82rem', color: '#475569', lineHeight: 1.5, marginBottom: '14px',
            display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
            overflow: 'hidden', minHeight: '2.5em'
          }}>
            {shortDesc}
          </p>

          {/* Duration & Tool Tags Pill Row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '4px',
              fontSize: '0.72rem', fontWeight: 800,
              background: 'rgba(0, 6, 72, 0.06)', color: '#000648',
              padding: '3px 10px', borderRadius: '50px'
            }}>
              <HiClock size={13} style={{ color: '#f2b733' }} />
              {course.duration || '3 Months'}
            </span>

            {displayTools.map((tool) => (
              <span 
                key={tool}
                style={{
                  fontSize: '0.68rem', fontWeight: 700,
                  background: '#f1f5f9', color: '#334155',
                  padding: '3px 8px', borderRadius: '6px',
                  border: '1px solid #e2e8f0'
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* 2 Action Buttons (Syllabus & Know More) in Navy & Gold Palette */}
        <div style={{ display: 'flex', gap: '10px', marginTop: 'auto', paddingTop: '10px' }}>
          <button 
            type="button"
            onClick={() => onOpenDemoModal(course.title)}
            style={{
              flex: 1, padding: '10px 0', borderRadius: '8px',
              fontSize: '0.86rem', fontWeight: 800, textAlign: 'center',
              background: '#ffffff', border: '1.5px solid #000648',
              color: '#000648', cursor: 'pointer',
              transition: 'background-color 0.2s ease, border-color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f1f5f9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#ffffff';
            }}
          >
            Syllabus
          </button>
          
          <Link 
            to={`/courses/${course.slug}`} 
            style={{
              flex: 1.1, padding: '10px 0', borderRadius: '8px',
              fontSize: '0.86rem', fontWeight: 900, textAlign: 'center',
              background: '#000648', color: '#f2b733',
              border: '1.5px solid #000648', textDecoration: 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px',
              boxShadow: '0 4px 12px rgba(0, 6, 72, 0.2)',
              transition: 'background-color 0.2s ease, color 0.2s ease, transform 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f2b733';
              e.currentTarget.style.color = '#000648';
              e.currentTarget.style.borderColor = '#f2b733';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#000648';
              e.currentTarget.style.color = '#f2b733';
              e.currentTarget.style.borderColor = '#000648';
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



