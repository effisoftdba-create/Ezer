import React from 'react';
import { Link } from 'react-router-dom';
import { HiClock, HiGlobeAlt, HiCheckCircle } from 'react-icons/hi';
import { resolveImageSrc } from '../utils/imageUtils';

export default function CourseCard({ course, onOpenDemoModal }) {
  const displayTools = course.tools ? course.tools.slice(0, 3) : ['AWS', 'Docker', 'Kubernetes'];
  const languagesDisplay = course.languages || 'Tamil, English & Hindi';
  const badgeText = course.badgeTag || course.badge || 'Live Cohort';
  const coursePrice = course.price || '₹29,999';
  const originalPrice = course.originalPrice || '₹42,000';
  const deliverables = (course.whoIsItFor && course.whoIsItFor.length > 0)
    ? course.whoIsItFor.slice(0, 3)
    : [
        'Live 1:1 Corporate Mentor Sessions',
        'Hands-on Lab Projects & Code Reviews',
        '100% Guaranteed 1-Year Placement Support'
      ];

  const hashAnchor = course.hashLink || `#${(course.title || 'course').replace(/[^a-zA-Z0-9]/g, '')}_course`;

  return (
    <div 
      className="dark-course-card"
      style={{
        maxWidth: '320px',
        width: '100%',
        display: 'flex', 
        flexDirection: 'column',
        borderRadius: '1.5rem',
        backgroundColor: '#050b1c',
        padding: '1.5rem',
        boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.4)',
        border: '1.5px solid rgba(242, 183, 51, 0.3)',
        position: 'relative',
        height: '100%',
        justifyCumulative: 'space-between'
      }}
    >
      {/* Banner Photo Header */}
      <div style={{ position: 'relative', height: '145px', borderRadius: '1rem', overflow: 'hidden', marginBottom: '1.25rem', border: '1px solid rgba(255,255,255,0.1)' }}>
        <img 
          src={resolveImageSrc(course.image)} 
          alt={course.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: course.fit || course.imageFit || 'cover',
            objectPosition: course.position || course.imagePosition || 'center center'
          }}
        />
        <span style={{
          position: 'absolute', top: '10px', right: '10px',
          background: '#000648', color: '#f2b733', fontSize: '0.68rem',
          fontWeight: 900, padding: '3px 10px', borderRadius: '50px',
          border: '1px solid #f2b733', textTransform: 'uppercase'
        }}>
          {badgeText}
        </span>
      </div>

      <div>
        <h3 style={{
          fontSize: '1.15rem', fontWeight: 800, color: '#ffffff',
          lineHeight: 1.3, marginBottom: '6px', minHeight: '2.6em',
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'
        }}>
          {course.title}
        </h3>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: '#f2b733', fontWeight: 700, marginBottom: '12px' }}>
          <HiGlobeAlt size={15} />
          <span>{languagesDisplay}</span>
        </div>

        {/* Pricing Display */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '8px' }}>
          <span className="price" style={{ fontSize: '2.4rem', fontWeight: 700, color: '#ffffff', lineHeight: 1 }}>
            {coursePrice}
          </span>
          {originalPrice && (
            <span style={{ fontSize: '0.9rem', color: '#64748b', textDecoration: 'line-through', fontWeight: 600 }}>
              {originalPrice}
            </span>
          )}
        </div>

        <div style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
          <HiClock size={14} color="#f2b733" />
          <span>{course.duration || '3 Months'} • Live Online Cohort</span>
        </div>

        {/* Deliverables List */}
        <div className="lists" style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', rowGap: '0.75rem', fontSize: '0.825rem', color: '#ffffff' }}>
          {deliverables.map((item, idx) => (
            <div key={idx} className="list" style={{ display: 'flex', alignItems: 'flex-start' }}>
              <HiCheckCircle style={{ height: '1.1rem', width: '1.1rem', color: '#f2b733', flexShrink: 0, marginTop: '2px' }} />
              <span style={{ marginLeft: '0.75rem', lineHeight: 1.35, color: '#e2e8f0' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Purchase / Know More Buttons */}
      <div style={{ marginTop: '1.75rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Link 
          to={`/courses/${course.slug}${hashAnchor}`}
          className="action"
          style={{
            width: '100%',
            border: '2px solid #f2b733',
            borderRadius: '9999px',
            backgroundColor: '#f2b733',
            padding: '0.625rem 1.5rem',
            fontWeight: 800,
            textAlign: 'center',
            fontSize: '0.875rem',
            color: '#000648',
            outline: 'none',
            textDecoration: 'none',
            transition: 'all .2s ease',
            display: 'block'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#f2b733';
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#000648';
            e.currentTarget.style.backgroundColor = '#f2b733';
          }}
        >
          Enroll & Buy Course Now
        </Link>

        <button 
          type="button"
          onClick={() => onOpenDemoModal(course.title)}
          style={{
            background: 'none', border: 'none', color: '#94a3b8', fontSize: '0.78rem',
            fontWeight: 700, cursor: 'pointer', textAlign: 'center', textDecoration: 'underline',
            marginTop: '4px'
          }}
        >
          Request Free Demo Class & Syllabus
        </button>
      </div>
    </div>
  );
}
