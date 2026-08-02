import React from 'react';
import { Link } from 'react-router-dom';
import { HiClock, HiArrowRight, HiGlobeAlt, HiStar } from 'react-icons/hi';

export default function CourseCard({ course, onOpenDemoModal }) {
  // Extract up to 3 short tool names
  const displayTools = course.tools ? course.tools.slice(0, 3) : [];
  const languagesDisplay = course.languages || 'Tamil, English & Hindi';

  return (
    <div 
      style={{
        background: '#ffffff', 
        borderRadius: '16px', 
        border: '1px solid #e2e8f0',
        overflow: 'hidden', 
        display: 'flex', 
        flexDirection: 'column',
        height: '100%',
        minHeight: '430px',
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
      {/* Enhanced Image Banner Header matching Reference Image 1 */}
      <div style={{ position: 'relative', height: '175px', overflow: 'hidden', background: '#000648' }}>
        <img 
          src={course.image?.startsWith('http') ? course.image : `${import.meta.env.BASE_URL || '/'}${course.image?.replace(/^\//, '')}`} 
          alt={course.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.95 }}
        />
        
        {/* Subtle Tech Gradient Overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(0,6,72,0.15) 0%, rgba(0,6,72,0.65) 100%)'
        }} />

        {/* Category Badge */}
        <span style={{
          position: 'absolute', top: '10px', left: '12px',
          background: '#000648', color: '#f2b733',
          fontSize: '0.64rem', fontWeight: 800, padding: '4px 12px',
          borderRadius: '50px', textTransform: 'uppercase', letterSpacing: '0.05em',
          border: '1px solid #f2b733',
          boxShadow: '0 2px 8px rgba(0, 6, 72, 0.4)'
        }}>
          {course.badge || 'Live Cohort'}
        </span>

        {/* Rating Badge */}
        <div style={{
          position: 'absolute', top: '10px', right: '12px',
          background: 'rgba(0, 6, 72, 0.88)', backdropFilter: 'blur(6px)',
          color: '#ffffff', fontSize: '0.7rem', fontWeight: 800,
          padding: '3px 10px', borderRadius: '50px',
          display: 'flex', alignItems: 'center', gap: '4px',
          border: '1px solid rgba(242, 183, 51, 0.5)',
        }}>
          <HiStar style={{ color: '#f2b733' }} /> 4.9
        </div>
      </div>

      {/* Spacious Card Body matching Reference Image 1 */}
      <div style={{ padding: '20px 18px 18px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
        <div>
          {/* Course Title matching Reference Image 1 Typography */}
          <h3 style={{
            fontSize: '1.05rem', fontWeight: 800, color: '#1f2937',
            lineHeight: 1.4, marginBottom: '14px',
            display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical',
            overflow: 'hidden', minHeight: '3.8em'
          }}>
            {course.title}
          </h3>

          {/* Languages & Meta Row matching Reference Image 1 */}
          <div style={{ 
            display: 'flex', alignItems: 'center', gap: '8px', 
            fontSize: '0.84rem', color: '#4b5563', marginBottom: '14px',
          }}>
            <HiGlobeAlt size={18} style={{ color: '#4b5563', flexShrink: 0 }} />
            <span style={{ fontWeight: 600 }}>{languagesDisplay}</span>
          </div>

          {/* Tools / Duration Pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
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

        {/* Reference Image 1 Action Buttons */}
        <div style={{ display: 'flex', gap: '10px', marginTop: 'auto', paddingTop: '14px' }}>
          <button 
            type="button"
            onClick={() => onOpenDemoModal(course.title)}
            style={{
              flex: 1, padding: '10px 0', borderRadius: '8px',
              fontSize: '0.86rem', fontWeight: 700, textAlign: 'center',
              background: 'transparent', border: '1.5px solid #4d4d4d',
              color: '#1f2937', cursor: 'pointer',
              transition: 'background-color 0.2s ease, border-color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f8fafc';
              e.currentTarget.style.borderColor = '#000648';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = '#4d4d4d';
            }}
          >
            Syllabus
          </button>
          
          <Link 
            to={`/courses/${course.slug}`} 
            style={{
              flex: 1.1, padding: '10px 0', borderRadius: '8px',
              fontSize: '0.86rem', fontWeight: 800, textAlign: 'center',
              background: '#0dba4b', color: '#ffffff',
              border: 'none', textDecoration: 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px',
              boxShadow: '0 3px 10px rgba(13, 186, 75, 0.25)',
              transition: 'background-color 0.2s ease, transform 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#099d3e';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#0dba4b';
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



