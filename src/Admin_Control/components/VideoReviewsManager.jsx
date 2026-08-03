import React, { useState } from 'react';
import { useSiteData } from '../context/SiteContext';
import ImagePickerModal from './ImagePickerModal';
import { HiPlus, HiTrash, HiPencil, HiPhotograph, HiCheck, HiPlay } from 'react-icons/hi';

function formatYouTubeEmbedUrl(urlStr) {
  if (!urlStr) return '';
  let videoId = '';

  if (urlStr.includes('youtu.be/')) {
    videoId = urlStr.split('youtu.be/')[1]?.split('?')[0];
  } else if (urlStr.includes('youtube.com/watch')) {
    const searchParams = new URLSearchParams(urlStr.split('?')[1]);
    videoId = searchParams.get('v');
  } else if (urlStr.includes('youtube.com/embed/')) {
    videoId = urlStr.split('youtube.com/embed/')[1]?.split('?')[0];
  }

  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return urlStr;
}

const DEFAULT_VIDEO_STATE = {
  title: 'How I Landed an IT Role — Student Career Switch Story',
  name: 'Kavitha R',
  company: 'Cloud DevOps Graduate',
  embedUrl: 'https://www.youtube.com/embed/hQcFE0RD0cQ',
  thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
};

export default function VideoReviewsManager() {
  const { videoTestimonials, addVideoTestimonial, updateVideoTestimonial, deleteVideoTestimonial } = useSiteData();

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [isImagePickerOpen, setIsImagePickerOpen] = useState(false);

  const [formData, setFormData] = useState(DEFAULT_VIDEO_STATE);

  const handleOpenAdd = () => {
    setEditingId(null);
    setFormData(DEFAULT_VIDEO_STATE);
    setIsEditing(true);
  };

  const handleOpenEdit = (video) => {
    setEditingId(video.id);
    setFormData({
      title: video.title || '',
      name: video.name || '',
      company: video.company || '',
      embedUrl: video.embedUrl || '',
      thumbnail: video.thumbnail || ''
    });
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.embedUrl) {
      alert('Learner Name and YouTube Video URL are required.');
      return;
    }

    const cleanEmbedUrl = formatYouTubeEmbedUrl(formData.embedUrl);

    const payload = {
      ...formData,
      embedUrl: cleanEmbedUrl
    };

    if (editingId) {
      updateVideoTestimonial(editingId, payload);
    } else {
      addVideoTestimonial(payload);
    }

    setIsEditing(false);
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to remove ${name}'s video testimonial?`)) {
      deleteVideoTestimonial(id);
    }
  };

  return (
    <div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: '24px', paddingBottom: '16px', borderBottom: '1.5px solid #e2e8f0'
      }}>
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#000648', margin: 0 }}>
            "Hear Directly From Our Learners" Video Reviews
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
            Add, update, or paste YouTube video links, learner names, roles, and custom thumbnail photos.
          </p>
        </div>

        <button
          type="button"
          onClick={handleOpenAdd}
          aria-label="Add new video review"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '10px 20px', background: '#000648', color: '#f2b733',
            border: 'none', borderRadius: '10px', fontWeight: 800, fontSize: '0.875rem',
            cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,6,72,0.15)'
          }}
        >
          <HiPlus size={18} /> Add Video Review
        </button>
      </div>

      {/* Editor Modal / Form inline */}
      {isEditing && (
        <form onSubmit={handleSave} style={{
          background: '#f8fafc', border: '2px solid #cbd5e1', borderRadius: '14px',
          padding: '24px', marginBottom: '28px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '1.1rem', fontWeight: 800, color: '#000648' }}>
            {editingId ? 'Edit Video Review' : 'Add New YouTube Video Review'}
          </h3>

          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="youtube_url_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
              YouTube Video Link (Paste standard YouTube watch link or embed link) *
            </label>
            <input
              id="youtube_url_input"
              type="text"
              value={formData.embedUrl}
              onChange={(e) => setFormData({ ...formData, embedUrl: e.target.value })}
              placeholder="e.g. https://www.youtube.com/watch?v=hQcFE0RD0cQ or https://youtu.be/hQcFE0RD0cQ"
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.875rem' }}
              required
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label htmlFor="video_learner_name" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                Learner Full Name *
              </label>
              <input
                id="video_learner_name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Mohammed Esa Khan J"
                style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                required
              />
            </div>

            <div>
              <label htmlFor="video_learner_company" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                Learner Role / Placed Company
              </label>
              <input
                id="video_learner_company"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g. Cloud DevOps Graduate"
                style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="video_title_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
              Video Review Title
            </label>
            <input
              id="video_title_input"
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g. How I Landed a Cloud & DevOps Role — Real Career Switch Story"
              style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
              required
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="video_thumbnail_input" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
              Video Thumbnail Image URL
            </label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                id="video_thumbnail_input"
                type="text"
                value={formData.thumbnail}
                onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
                placeholder="Image path or URL"
                style={{ flex: 1, padding: '9px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
              />
              <button
                type="button"
                onClick={() => setIsImagePickerOpen(true)}
                aria-label="Choose thumbnail photo"
                style={{ padding: '9px 14px', background: '#115DFC', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <HiPhotograph size={16} /> Choose
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              aria-label="Cancel editing"
              style={{ padding: '9px 16px', background: '#e2e8f0', color: '#475569', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}
            >
              Cancel
            </button>
            <button
              type="submit"
              aria-label="Save video review"
              style={{ padding: '9px 20px', background: '#000648', color: '#f2b733', border: 'none', borderRadius: '8px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <HiCheck size={18} /> Save Video Review
            </button>
          </div>
        </form>
      )}

      {/* Videos List */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
        {videoTestimonials.map((story) => (
          <div
            key={story.id}
            style={{
              background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '14px',
              overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column'
            }}
          >
            <div style={{ height: '140px', background: '#000648', position: 'relative' }}>
              <img src={story.thumbnail} alt={story.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '42px', height: '30px', background: '#ff0000', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <HiPlay size={20} />
                </div>
              </div>
            </div>

            <div style={{ padding: '14px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h4 style={{ margin: '0 0 4px 0', fontSize: '0.95rem', fontWeight: 800, color: '#000648', lineHeight: 1.3 }}>
                  {story.title}
                </h4>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f2b733', background: '#000648', display: 'inline-block', padding: '2px 8px', borderRadius: '4px', marginTop: '6px' }}>
                  {story.name} • {story.company}
                </div>
              </div>

              <div style={{ marginTop: '14px', display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => handleOpenEdit(story)}
                  aria-label={`Edit video story ${story.name}`}
                  style={{ padding: '6px 10px', background: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '6px', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  <HiPencil size={14} /> Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(story.id, story.name)}
                  aria-label={`Delete video story ${story.name}`}
                  style={{ padding: '6px 10px', background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', borderRadius: '6px', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  <HiTrash size={14} /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ImagePickerModal
        isOpen={isImagePickerOpen}
        onClose={() => setIsImagePickerOpen(false)}
        currentImage={formData.thumbnail}
        onSelectImage={(url) => setFormData((prev) => ({ ...prev, thumbnail: url }))}
      />
    </div>
  );
}
