import React from 'react';
import { Link } from 'react-router-dom';
import { HiClock, HiArrowRight, HiGlobeAlt, HiStar } from 'react-icons/hi';

export default function CourseCard({ course, onOpenDemoModal }) {
  // Extract up to 3 short tool names
  const displayTools = course.tools ? course.tools.slice(0, 3) : [];

  return (
    <div 
      style={{
        background: '#ffffff', 
        borderRadius: '14px', 
        border: '1.5px solid #cbd5e1',
        overflow: 'hidden', 
        display: 'flex', 
        flexDirection: 'column',
        height: '100%',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
        boxShadow: '0 4px 14px rgba(0, 6, 72, 0.05)',
        position: 'relative',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 6, 72, 0.12)';
        e.currentTarget.style.borderColor = '#000648';
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 6, 72, 0.05)';
        e.currentTarget.style.borderColor = '#cbd5e1';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Compact Image Banner Header */}
      <div style={{ position: 'relative', height: '120px', overflow: 'hidden', background: '#000648' }}>
        <img 
          src={course.image} 
          alt={course.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.92 }}
        />

        {/* Category Badge */}
        <span style={{
          position: 'absolute', top: '8px', left: '10px',
          background: '#000648', color: '#f2b733',
          fontSize: '0.62rem', fontWeight: 800, padding: '3px 10px',
          borderRadius: '50px', textTransform: 'uppercase', letterSpacing: '0.04em',
          border: '1px solid #f2b733',
          boxShadow: '0 2px 6px rgba(0, 6, 72, 0.3)'
        }}>
          {course.badge || 'Live Cohort'}
        </span>

        {/* Rating Badge */}
        <div style={{
          position: 'absolute', top: '8px', right: '10px',
          background: 'rgba(0, 6, 72, 0.85)', backdropFilter: 'blur(4px)',
          color: '#ffffff', fontSize: '0.68rem', fontWeight: 800,
          padding: '2px 8px', borderRadius: '50px',
          display: 'flex', alignItems: 'center', gap: '3px',
          border: '1px solid rgba(242, 183, 51, 0.4)',
        }}>
          <HiStar style={{ color: '#f2b733' }} /> 4.9
        </div>
      </div>

      {/* Compact Body Content */}
      <div style={{ padding: '14px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
        <div>
          {/* Course Title */}
          <h3 style={{
            fontSize: '0.96rem', fontWeight: 800, color: '#000648',
            lineHeight: 1.3, marginBottom: '8px',
            display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
            overflow: 'hidden', minHeight: '2.5em'
          }}>
            {course.title}
          </h3>

          {/* Meta Info Row */}
          <div style={{ 
            display: 'flex', alignItems: 'center', gap: '10px', 
            fontSize: '0.74rem', color: '#475569', marginBottom: '10px', 
            flexWrap: 'wrap'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 800, color: '#000648' }}>
              <HiClock size={13} style={{ color: '#f2b733' }} />
              {course.duration || '3 Months'}
            </span>
            <span>•</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
              <HiGlobeAlt size={13} style={{ color: '#000648' }} />
              {course.languages || 'English'}
            </span>
          </div>

          {/* Tools Pill Row (1-Line Compact) */}
          {displayTools.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '12px' }}>
              {displayTools.map((tool) => (
                <span 
                  key={tool}
                  style={{
                    fontSize: '0.64rem', fontWeight: 700,
                    background: '#f1f5f9', color: '#000648',
                    padding: '2px 7px', borderRadius: '4px',
                    border: '1px solid #e2e8f0'
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '8px', marginTop: 'auto', paddingTop: '8px', borderTop: '1px solid #f1f5f9' }}>
          <button 
            type="button"
            onClick={() => onOpenDemoModal(course.title)}
            className="btn btn-outline"
            style={{
              flex: 1, padding: '7px 0', borderRadius: '6px',
              fontSize: '0.76rem', fontWeight: 800, textAlign: 'center'
            }}
          >
            Syllabus
          </button>
          
          <Link 
            to={`/courses/${course.slug}`} 
            className="btn btn-secondary"
            style={{
              flex: 1.1, padding: '7px 0', borderRadius: '6px',
              fontSize: '0.76rem', fontWeight: 900, textAlign: 'center',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px'
            }}
          >
            Know More <HiArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}



