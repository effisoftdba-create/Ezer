import React, { useState, useRef } from 'react';
import { HiPlay, HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi';
import { videoStories } from '../data/testimonials';

export default function VideoTestimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const trackRef = useRef(null);
  const currentVideo = videoStories[activeIdx] || videoStories[0];

  const handleNext = () => {
    const nextIdx = (activeIdx + 1) % videoStories.length;
    setActiveIdx(nextIdx);
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: nextIdx * 200, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    const prevIdx = (activeIdx - 1 + videoStories.length) % videoStories.length;
    setActiveIdx(prevIdx);
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: prevIdx * 200, behavior: 'smooth' });
    }
  };

  return (
    <section className="section-alt" style={{ padding: '72px 0', background: '#f8fafc' }}>
      <div className="container">
        <div className="section-title">
          <span className="section-tag">Alumni Video Reviews</span>
          <h2>Hear Directly From Our Learners</h2>
          <p>Watch video testimonials from engineers who completed EZER live cohorts.</p>
        </div>

        {/* Featured Main Video Player Container */}
        <div
          style={{
            maxWidth: '850px',
            margin: '0 auto 32px',
            background: '#ffffff',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '2px solid #000648',
            boxShadow: '0 12px 28px rgba(0, 6, 72, 0.1)',
          }}
        >
          <div style={{ position: 'relative', paddingTop: '46%', background: '#000648' }}>
            <iframe
              src={currentVideo.embedUrl}
              title={currentVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
              }}
            />
          </div>

          <div style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', background: '#000648', color: '#ffffff' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '4px', fontWeight: 800 }}>
                {currentVideo.title}
              </h3>
              <p style={{ color: '#f2b733', fontSize: '0.85rem', margin: 0, fontWeight: 700 }}>
                {currentVideo.name} • {currentVideo.company}
              </p>
            </div>
            <div style={{ display: 'flex', color: '#f2b733', gap: '4px', fontSize: '1.1rem' }}>
              <HiStar /><HiStar /><HiStar /><HiStar /><HiStar />
            </div>
          </div>
        </div>

        {/* Horizontal Scrollable Thumbnails Track */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            maxWidth: '900px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous video testimonial"
            style={{
              background: '#ffffff',
              border: '1.5px solid #000648',
              borderRadius: '50%',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000648',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <HiChevronLeft size={20} />
          </button>

          <div
            ref={trackRef}
            className="no-scrollbar"
            style={{
              display: 'flex',
              gap: '14px',
              overflowX: 'auto',
              scrollBehavior: 'smooth',
              padding: '6px 0',
              flexGrow: 1,
            }}
          >
            {videoStories.map((story, idx) => (
              <button
                key={story.id}
                type="button"
                onClick={() => setActiveIdx(idx)}
                style={{
                  flex: '0 0 200px',
                  background: activeIdx === idx ? '#000648' : '#ffffff',
                  border: activeIdx === idx ? '2px solid #f2b733' : '1.5px solid #cbd5e1',
                  borderRadius: '12px',
                  padding: '12px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease',
                  outline: 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <HiPlay style={{ color: '#f2b733', fontSize: '1.2rem', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: activeIdx === idx ? '#ffffff' : '#000648' }}>
                    {story.name}
                  </span>
                </div>
                <div style={{ fontSize: '0.725rem', color: activeIdx === idx ? '#f2b733' : '#64748b' }}>
                  {story.company}
                </div>
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next video testimonial"
            style={{
              background: '#000648',
              border: '1.5px solid #000648',
              borderRadius: '50%',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#f2b733',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <HiChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
