import React, { useState, useMemo } from 'react';
import { HiStar, HiCheckCircle, HiBriefcase, HiAcademicCap, HiSearch } from 'react-icons/hi';
import { FaQuoteLeft } from 'react-icons/fa';
import { useSiteData } from '../../context/SiteContext';
import { resolveImageSrc } from '../../utils/imageUtils';
import { testimonials as defaultTestimonials } from '../../data/testimonials';

export default function TestimonialsGrid() {
  const { writtenTestimonials } = useSiteData();
  const [selectedTrack, setSelectedTrack] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Merge context data with default data if empty
  const rawList = Array.isArray(writtenTestimonials) && writtenTestimonials.length > 0
    ? writtenTestimonials
    : defaultTestimonials;

  // Normalize fields across different schema formats
  const normalizedList = useMemo(() => {
    return rawList.map((item, idx) => ({
      id: item.id || `test-${idx}`,
      author: item.author || item.name || 'EZER Graduate',
      role: item.role || item.afterRole || item.designation || 'Software Engineer',
      company: item.company || 'Top Tech Firm',
      track: item.track || item.course || 'Cloud & Full Stack AI',
      text: item.text || item.quote || item.story || item.review || 'The live instructor-led cohort and continuous placement support helped me transition successfully into the tech industry.',
      rating: Number(item.rating) || 5,
      avatar: item.avatar || item.image || `https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200`,
      background: item.background || item.beforeRole || 'Career Transition',
      salaryHike: item.salaryHike || '160% Hike',
      position: item.position || item.imagePosition || '50% 50%',
      zoom: item.zoom || item.imageZoom || 1,
      fit: item.fit || item.imageFit || 'cover',
    }));
  }, [rawList]);

  // Extract unique tracks for filter pills
  const availableTracks = useMemo(() => {
    const tracks = new Set(normalizedList.map((t) => t.track).filter(Boolean));
    return ['ALL', ...Array.from(tracks)];
  }, [normalizedList]);

  // Filtered list
  const filteredList = useMemo(() => {
    return normalizedList.filter((item) => {
      const matchTrack = selectedTrack === 'ALL' || item.track === selectedTrack;
      const matchSearch = !searchQuery.trim() || 
        item.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.track.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.text.toLowerCase().includes(searchQuery.toLowerCase());
      return matchTrack && matchSearch;
    });
  }, [normalizedList, selectedTrack, searchQuery]);

  return (
    <section
      id="testimonials-grid-section"
      style={{
        padding: '72px 0 88px',
        background: '#f8fafc',
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0',
        position: 'relative',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(0, 6, 72, 0.06)',
              border: '1.5px solid rgba(0, 6, 72, 0.12)',
              color: '#000648',
              fontSize: '0.78rem',
              fontWeight: 800,
              padding: '6px 18px',
              borderRadius: '50px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '14px',
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f2b733' }} />
            <span>ALUMNI FEEDBACK & REVIEWS</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.85rem, 3vw, 2.6rem)',
              fontWeight: 900,
              color: '#000648',
              letterSpacing: '-0.02em',
              margin: '0 0 12px 0',
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            }}
          >
            Verified Stories From Real EZER Learners
          </h2>
          <p style={{ color: '#475569', fontSize: '1.02rem', maxWidth: '680px', margin: '0 auto', lineHeight: 1.6 }}>
            Browse authentic feedback, career journeys, and interview experiences shared by students across all course tracks.
          </p>
        </div>

        {/* Filter Bar & Search Box */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            marginBottom: '36px',
            alignItems: 'center',
          }}
        >
          {/* Track Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              justifyContent: 'center',
            }}
          >
            {availableTracks.map((track) => {
              const isSelected = selectedTrack === track;
              const label = track === 'ALL' ? 'All Stories' : track;
              return (
                <button
                  key={track}
                  type="button"
                  onClick={() => setSelectedTrack(track)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '50px',
                    fontSize: '0.82rem',
                    fontWeight: isSelected ? 900 : 700,
                    border: isSelected ? '1.5px solid #000648' : '1.5px solid #cbd5e1',
                    background: isSelected ? '#000648' : '#ffffff',
                    color: isSelected ? '#f2b733' : '#334155',
                    cursor: 'pointer',
                    boxShadow: isSelected ? '0 4px 12px rgba(0,6,72,0.18)' : '0 1px 3px rgba(0,0,0,0.04)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '380px',
            }}
          >
            <HiSearch
              size={18}
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#94a3b8',
              }}
            />
            <input
              type="text"
              placeholder="Search by student, company, or course..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 16px 10px 40px',
                borderRadius: '50px',
                border: '1.5px solid #cbd5e1',
                fontSize: '0.85rem',
                color: '#0f172a',
                outline: 'none',
                background: '#ffffff',
                boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
              }}
            />
          </div>
        </div>

        {/* Results Counter */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', padding: '0 4px' }}>
          <span style={{ fontSize: '0.84rem', fontWeight: 800, color: '#64748b' }}>
            Showing {filteredList.length} of {normalizedList.length} verified testimonials
          </span>
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              style={{ fontSize: '0.8rem', color: '#115DFC', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Clear Search
            </button>
          )}
        </div>

        {/* Multi-Card Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '24px',
          }}
          className="testimonials-cards-grid"
        >
          {filteredList.map((item) => (
            <div
              key={item.id}
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                border: '1.5px solid #e2e8f0',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 4px 20px rgba(0, 6, 72, 0.05)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 6, 72, 0.12)';
                e.currentTarget.style.borderColor = '#000648';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 6, 72, 0.05)';
                e.currentTarget.style.borderColor = '#e2e8f0';
              }}
            >
              <div>
                {/* Header: Star Rating & Quote Icon */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  {/* Star Rating */}
                  <div style={{ display: 'flex', gap: '3px', color: '#f59e0b' }}>
                    {[...Array(item.rating)].map((_, i) => (
                      <HiStar key={i} size={18} />
                    ))}
                  </div>

                  {/* Quote Accent */}
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'rgba(0, 6, 72, 0.05)',
                      color: '#000648',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <FaQuoteLeft size={14} />
                  </div>
                </div>

                {/* Review Text */}
                <p
                  style={{
                    fontSize: '0.94rem',
                    color: '#334155',
                    lineHeight: 1.65,
                    marginBottom: '20px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                  }}
                >
                  "{item.text}"
                </p>

                {/* Course Track Tag */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: '#eff6ff',
                    border: '1px solid #bfdbfe',
                    color: '#1e40af',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '4px 10px',
                    borderRadius: '6px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    marginBottom: '18px',
                  }}
                >
                  <HiAcademicCap size={14} />
                  <span>{item.track}</span>
                </div>
              </div>

              {/* Author Profile Footer */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  paddingTop: '16px',
                  borderTop: '1px solid #f1f5f9',
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    background: '#000648',
                    border: '2px solid #000648',
                    flexShrink: 0,
                    position: 'relative',
                  }}
                >
                  <img
                    src={resolveImageSrc(item.avatar)}
                    alt={item.author}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: item.fit,
                      objectPosition: item.position,
                      transform: item.zoom !== 1 ? `scale(${item.zoom})` : 'none',
                      transformOrigin: item.position,
                      display: 'block',
                    }}
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200';
                    }}
                  />
                </div>

                {/* Author Info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <h4
                      style={{
                        margin: 0,
                        fontSize: '0.96rem',
                        fontWeight: 900,
                        color: '#000648',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {item.author}
                    </h4>
                    <HiCheckCircle
                      size={16}
                      color="#16a34a"
                      title="Verified EZER Alumni"
                      style={{ flexShrink: 0 }}
                    />
                  </div>

                  <div
                    style={{
                      fontSize: '0.78rem',
                      color: '#475569',
                      fontWeight: 700,
                      marginTop: '2px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      flexWrap: 'wrap',
                    }}
                  >
                    <span>{item.role}</span>
                    {item.company && (
                      <span
                        style={{
                          background: 'rgba(0, 6, 72, 0.06)',
                          color: '#000648',
                          padding: '1px 6px',
                          borderRadius: '4px',
                          fontWeight: 800,
                          fontSize: '0.74rem',
                        }}
                      >
                        @{item.company}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredList.length === 0 && (
          <div
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              border: '1.5px dashed #cbd5e1',
              padding: '48px 24px',
              textAlign: 'center',
            }}
          >
            <p style={{ fontSize: '1rem', fontWeight: 800, color: '#475569', margin: '0 0 8px 0' }}>
              No testimonials match your current search or filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedTrack('ALL');
                setSearchQuery('');
              }}
              style={{
                padding: '8px 20px',
                background: '#000648',
                color: '#f2b733',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 800,
                fontSize: '0.84rem',
                cursor: 'pointer',
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .testimonials-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
