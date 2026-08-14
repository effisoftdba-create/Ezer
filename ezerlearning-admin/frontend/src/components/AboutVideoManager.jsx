import React, { useState } from 'react';
import { useSiteData } from '../context/SiteContext';
import VideoPlayer from './VideoPlayer';
import { resolveImageSrc } from '../utils/imageUtils';
import { HiCheck, HiVideoCamera, HiSparkles } from 'react-icons/hi';

const DEFAULT_TWO_VIDEOS = [
  {
    id: 'vid-1',
    tag: 'VIDEO SHOWCASE 01',
    title: 'Platform & Learning Methodology in Action',
    description: 'Watch how our corporate-experienced instructors deliver live interactive classes, hands-on cloud labs, and personalized career counseling.',
    videoUrl: 'https://www.youtube.com/watch?v=aircAruvnKk',
    poster: 'images/hero/hero_section_1.jpg'
  },
  {
    id: 'vid-2',
    tag: 'VIDEO SHOWCASE 02',
    title: 'Live Hands-On Cloud Labs & Placement Support',
    description: 'Explore how students gain real enterprise experience working with production CI/CD pipelines, AWS sandboxes, and mock technical interviews.',
    videoUrl: 'https://www.youtube.com/watch?v=aircAruvnKk',
    poster: 'images/hero/full-stack-development.jpg'
  }
];

export default function AboutVideoManager() {
  const { aboutVideos, updateAboutVideos } = useSiteData();
  const initialList = Array.isArray(aboutVideos) && aboutVideos.length >= 2
    ? aboutVideos
    : DEFAULT_TWO_VIDEOS;

  const [videoList, setVideoList] = useState(initialList);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (targetId, field, value) => {
    const updated = videoList.map((item, idx) => {
      if (item.id === targetId || idx === targetId || item.tag === targetId) {
        return { ...item, [field]: value };
      }
      return item;
    });
    setVideoList(updated);
    const errKey = `${targetId}_${field}`;
    if (formErrors[errKey]) {
      setFormErrors((prev) => ({ ...prev, [errKey]: false }));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    const errors = {};
    videoList.slice(0, 2).forEach((vid, idx) => {
      const key = vid.id || `slot_${idx}`;
      if (!vid.tag?.trim()) errors[`${key}_tag`] = true;
      if (!vid.videoUrl?.trim()) errors[`${key}_videoUrl`] = true;
      if (!vid.title?.trim()) errors[`${key}_title`] = true;
      if (!vid.description?.trim()) errors[`${key}_description`] = true;
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    updateAboutVideos(videoList);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div>
      {/* Header */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: '24px', paddingBottom: '16px', borderBottom: '1.5px solid #e2e8f0'
      }}>
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#000648', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <HiVideoCamera color="#115DFC" size={24} />
            About Us Brand Video Showcase Manager (2 Video Slots)
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
            Configure the 2 brand video players displayed on the About Us page below Vision & Mission. Paste YouTube or Google Drive links.
          </p>
        </div>
      </div>

      {saveSuccess && (
        <div style={{
          padding: '12px 16px', background: '#f0fdf4', border: '1px solid #86efac',
          color: '#166534', borderRadius: '8px', marginBottom: '20px', fontWeight: 700,
          display: 'flex', alignItems: 'center', gap: '8px'
        }}>
          <HiCheck size={18} /> About Us video configuration updated successfully! Both video links are live on the website.
        </div>
      )}

      <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        {Object.keys(formErrors).length > 0 && (
          <div style={{ background: '#fef2f2', border: '1.5px solid #f87171', color: '#b91c1c', padding: '10px 14px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 800 }}>
            ⚠️ Please fill in all required fields highlighted in red below before saving.
          </div>
        )}

        {videoList.slice(0, 2).map((vid, idx) => {
          const videoSlotKey = String(vid.id || vid.tag || vid.title || vid.videoUrl || `video-slot-${idx}`);
          const key = vid.id || `slot_${idx}`;
          return (
            <div
              key={videoSlotKey}
              style={{
                background: '#f8fafc',
                border: '1.5px solid #cbd5e1',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.02)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', paddingBottom: '10px', borderBottom: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 900, color: '#f2b733', background: '#000648', padding: '4px 12px', borderRadius: '50px', letterSpacing: '0.06em' }}>
                  {vid.tag || 'VIDEO SHOWCASE'}
                </span>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b' }}>
                  Supports YouTube & Google Drive URLs
                </span>
              </div>

              {/* Inputs Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label htmlFor={`vid_tag_${vid.id || vid.tag}`} style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: formErrors[`${key}_tag`] ? '#dc2626' : '#334155', marginBottom: '4px' }}>
                    Section Badge / Tag *
                  </label>
                  <input
                    id={`vid_tag_${vid.id || vid.tag}`}
                    type="text"
                    value={vid.tag || ''}
                    onChange={(e) => handleChange(vid.id, 'tag', e.target.value)}
                    placeholder="e.g. VIDEO SHOWCASE 01"
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: formErrors[`${key}_tag`] ? '2px solid #dc2626' : '1.5px solid #cbd5e1',
                      background: formErrors[`${key}_tag`] ? '#fff5f5' : '#ffffff',
                      fontSize: '0.85rem'
                    }}
                  />
                  {formErrors[`${key}_tag`] && <span style={{ color: '#dc2626', fontSize: '0.72rem', fontWeight: 700, marginTop: '3px', display: 'block' }}>Tag is required</span>}
                </div>

                <div>
                  <label htmlFor={`vid_url_${vid.id || vid.tag}`} style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: formErrors[`${key}_videoUrl`] ? '#dc2626' : '#334155', marginBottom: '4px' }}>
                    Video URL (YouTube or Google Drive) *
                  </label>
                  <input
                    id={`vid_url_${vid.id || vid.tag}`}
                    type="text"
                    value={vid.videoUrl || ''}
                    onChange={(e) => handleChange(vid.id, 'videoUrl', e.target.value)}
                    placeholder="https://www.youtube.com/watch?v=... or https://drive.google.com/file/d/..."
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: formErrors[`${key}_videoUrl`] ? '2px solid #dc2626' : '1.5px solid #cbd5e1',
                      background: formErrors[`${key}_videoUrl`] ? '#fff5f5' : '#ffffff',
                      fontSize: '0.85rem'
                    }}
                  />
                  {formErrors[`${key}_videoUrl`] && <span style={{ color: '#dc2626', fontSize: '0.72rem', fontWeight: 700, marginTop: '3px', display: 'block' }}>Video URL is required</span>}
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label htmlFor={`vid_title_${vid.id || vid.tag}`} style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: formErrors[`${key}_title`] ? '#dc2626' : '#334155', marginBottom: '4px' }}>
                  Video Section Title *
                </label>
                <input
                  id={`vid_title_${vid.id || vid.tag}`}
                  type="text"
                  value={vid.title || ''}
                  onChange={(e) => handleChange(vid.id, 'title', e.target.value)}
                  placeholder="e.g. Platform & Learning Methodology in Action"
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: formErrors[`${key}_title`] ? '2px solid #dc2626' : '1.5px solid #cbd5e1',
                    background: formErrors[`${key}_title`] ? '#fff5f5' : '#ffffff',
                    fontSize: '0.85rem'
                  }}
                />
                {formErrors[`${key}_title`] && <span style={{ color: '#dc2626', fontSize: '0.72rem', fontWeight: 700, marginTop: '3px', display: 'block' }}>Title is required</span>}
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label htmlFor={`vid_desc_${vid.id || vid.tag}`} style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: formErrors[`${key}_description`] ? '#dc2626' : '#334155', marginBottom: '4px' }}>
                  Video Subtitle / Description Text *
                </label>
                <textarea
                  id={`vid_desc_${vid.id || vid.tag}`}
                  rows={2}
                  value={vid.description || ''}
                  onChange={(e) => handleChange(vid.id, 'description', e.target.value)}
                  placeholder="Detailed explanation of what learners see in this video..."
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: formErrors[`${key}_description`] ? '2px solid #dc2626' : '1.5px solid #cbd5e1',
                    background: formErrors[`${key}_description`] ? '#fff5f5' : '#ffffff',
                    fontSize: '0.85rem'
                  }}
                />
                {formErrors[`${key}_description`] && <span style={{ color: '#dc2626', fontSize: '0.72rem', fontWeight: 700, marginTop: '3px', display: 'block' }}>Description is required</span>}
              </div>

              {/* Live Video Player Preview */}
              <div>
                <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#000648', marginBottom: '8px' }}>
                  Live Video Player Preview:
                </span>
                <div style={{ width: '100%', maxWidth: '720px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #cbd5e1' }}>
                  <VideoPlayer
                    videoUrl={vid.videoUrl}
                    poster={resolveImageSrc(vid.poster || 'images/hero/hero_section_1.jpg')}
                    title={vid.title}
                  />
                </div>
              </div>
            </div>
          );
        })}

        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '12px' }}>
          <button
            type="submit"
            aria-label="Save both video showcase slots"
            style={{
              padding: '12px 32px', background: '#000648', color: '#f2b733',
              border: 'none', borderRadius: '10px', fontWeight: 900, fontSize: '0.9rem',
              cursor: 'pointer', boxShadow: '0 4px 14px rgba(0,6,72,0.2)', display: 'flex', alignItems: 'center', gap: '8px'
            }}
          >
            <HiCheck size={18} /> Update Both About Us Videos
          </button>
        </div>
      </form>
    </div>
  );
}
