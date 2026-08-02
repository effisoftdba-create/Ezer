import React, { useState, useRef } from 'react';
import { HiPlay, HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi';
import { videoStories } from '../data/testimonials';

export default function VideoTestimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const trackRef = useRef(null);
  const currentVideo = videoStories[activeIdx] || videoStories[0];

  const handleSelectVideo = (idx) => {
    setActiveIdx(idx);
    setIsPlaying(false);
  };

  const handleNext = () => {
    const nextIdx = (activeIdx + 1) % videoStories.length;
    setActiveIdx(nextIdx);
    setIsPlaying(false);
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: nextIdx * 200, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    const prevIdx = (activeIdx - 1 + videoStories.length) % videoStories.length;
    setActiveIdx(prevIdx);
    setIsPlaying(false);
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: prevIdx * 200, behavior: 'smooth' });
    }
  };

  return (
    <section className="section-alt" style={{ padding: '64px 0', background: '#f8fafc' }}>
      <div className="container">
        {/* Section Header with Right-Aligned Controls */}
        <div style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          marginBottom: '28px', flexWrap: 'wrap', gap: '16px'
        }}>
          <div>
            <span className="section-tag">Alumni Video Reviews</span>
            <h2 style={{ color: '#000648', marginTop: '4px' }}>Hear Directly From Our Learners</h2>
            <p style={{ color: '#475569', fontSize: '0.88rem', maxWidth: '560px', marginTop: '4px' }}>
              Watch video testimonials from engineers who completed EZER live cohorts.
            </p>
          </div>

          {/* Right-Aligned Arrow Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous video testimonial"
              style={{
                width: '38px', height: '38px', borderRadius: '50%',
                border: '1.5px solid #000648', background: '#ffffff',
                color: '#000648', display: 'flex', alignItems: 'center',
                justifyContent: 'center', cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(0, 6, 72, 0.08)',
              }}
            >
              <HiChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next video testimonial"
              style={{
                width: '38px', height: '38px', borderRadius: '50%',
                border: '1.5px solid #000648', background: '#000648',
                color: '#f2b733', display: 'flex', alignItems: 'center',
                justifyContent: 'center', cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(0, 6, 72, 0.15)',
              }}
            >
              <HiChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Featured Main Video Player Container with YouTube iFrame */}
        <div
          style={{
            maxWidth: '850px',
            margin: '0 auto 28px',
            background: '#ffffff',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '2px solid #000648',
            boxShadow: '0 12px 28px rgba(0, 6, 72, 0.1)',
          }}
        >
          <div style={{ position: 'relative', paddingBottom: '52%', background: '#000326' }}>
            {isPlaying ? (
              <iframe
                src={`${currentVideo.embedUrl}?autoplay=1&rel=0`}
                title={currentVideo.title}
                style={{
                  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                <img
                  src={currentVideo.thumbnail}
                  alt={currentVideo.title}
                  style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    objectFit: 'cover', opacity: 0.88,
                  }}
                />
                <div
                  style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'linear-gradient(180deg, rgba(0, 6, 72, 0.3) 0%, rgba(0, 6, 72, 0.7) 100%)',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    style={{
                      width: '72px', height: '72px', borderRadius: '50%',
                      background: '#f2b733', color: '#000648',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 8px 24px rgba(242, 183, 51, 0.5)',
                      cursor: 'pointer', border: 'none',
                      transition: 'transform 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    aria-label="Play testimonial video"
                  >
                    <HiPlay size={36} style={{ marginLeft: '4px' }} />
                  </button>
                </div>
              </>
            )}
          </div>

          <div style={{ padding: '20px 24px', background: '#000648', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: '#ffffff', marginBottom: '4px', fontWeight: 800 }}>
                {currentVideo.title}
              </h3>
              <p style={{ color: '#f2b733', fontSize: '0.85rem', margin: 0, fontWeight: 700 }}>
                {currentVideo.name} • {currentVideo.company}
              </p>
            </div>
            <div style={{ display: 'flex', color: '#f2b733', gap: '4px', fontSize: '1rem' }}>
              <HiStar /><HiStar /><HiStar /><HiStar /><HiStar />
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Track */}
        <div
          ref={trackRef}
          className="no-scrollbar"
          style={{
            display: 'flex', gap: '14px', overflowX: 'auto',
            scrollBehavior: 'smooth', padding: '6px 0', maxWidth: '850px', margin: '0 auto',
          }}
        >
          {videoStories.map((story, idx) => (
            <button
              key={story.id}
              type="button"
              onClick={() => handleSelectVideo(idx)}
              style={{
                flex: '0 0 200px', background: activeIdx === idx ? '#000648' : '#ffffff',
                border: activeIdx === idx ? '2px solid #f2b733' : '1.5px solid #e2e8f0',
                borderRadius: '12px', padding: '10px', textAlign: 'left',
                cursor: 'pointer', transition: 'background-color 0.2s ease, border-color 0.2s ease',
              }}
            >
              <div style={{ fontSize: '0.82rem', fontWeight: 800, color: activeIdx === idx ? '#ffffff' : '#000648', marginBottom: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {story.name}
              </div>
              <div style={{ fontSize: '0.72rem', color: activeIdx === idx ? '#f2b733' : '#64748b' }}>
                Placed @ {story.company}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
