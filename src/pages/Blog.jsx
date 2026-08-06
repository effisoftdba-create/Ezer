import React, { useState } from 'react';
import { useSiteData } from '../Admin_Control/context/SiteContext';
import { HiBadgeCheck, HiNewspaper, HiCalendar, HiArrowRight, HiSparkles } from 'react-icons/hi';
import CTABanner from '../components/CTABanner';

export default function Blog({ onOpenDemoModal }) {
  const { blogs, achievements } = useSiteData();
  const [activeTab, setActiveTab] = useState('blogs'); // 'blogs' | 'achievements'

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', paddingTop: '40px', paddingBottom: '60px' }}>
      {/* Hero Header */}
      <div style={{ background: 'linear-gradient(135deg, #000648 0%, #00127a 100%)', color: '#ffffff', padding: '60px 20px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(242, 183, 51, 0.18)', color: '#f2b733', padding: '6px 18px', borderRadius: '50px', fontWeight: 800, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px', border: '1px solid rgba(242, 183, 51, 0.3)' }}>
            <HiSparkles size={16} /> Industry Recognition & Insights
          </span>

          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.2, marginBottom: '16px' }}>
            EZER Blog, Achievements & Awards
          </h1>

          <p style={{ fontSize: '1.05rem', color: '#cbd5e1', maxWidth: '750px', margin: '0 auto 28px', lineHeight: 1.6 }}>
            Explore our national awards, career transition milestones, and industry articles written by active corporate engineers and tech leaders.
          </p>

          {/* Sub Tab Switcher */}
          <div style={{ display: 'inline-flex', gap: '8px', background: 'rgba(255, 255, 255, 0.1)', padding: '6px', borderRadius: '50px', backdropFilter: 'blur(10px)' }}>
            <button
              type="button"
              onClick={() => setActiveTab('blogs')}
              style={{
                padding: '10px 24px', borderRadius: '50px', border: 'none',
                fontWeight: 800, fontSize: '0.86rem', cursor: 'pointer',
                background: activeTab === 'blogs' ? '#f2b733' : 'transparent',
                color: activeTab === 'blogs' ? '#000648' : '#ffffff',
                transition: 'background-color 0.2s ease, color 0.2s ease', display: 'flex', alignItems: 'center', gap: '6px'
              }}
            >
              <HiNewspaper size={18} /> Tech Articles ({ (blogs || []).length })
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('achievements')}
              style={{
                padding: '10px 24px', borderRadius: '50px', border: 'none',
                fontWeight: 800, fontSize: '0.86rem', cursor: 'pointer',
                background: activeTab === 'achievements' ? '#f2b733' : 'transparent',
                color: activeTab === 'achievements' ? '#000648' : '#ffffff',
                transition: 'background-color 0.2s ease, color 0.2s ease', display: 'flex', alignItems: 'center', gap: '6px'
              }}
            >
              <HiBadgeCheck size={18} /> Achievements & Awards ({ (achievements || []).length })
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="container" style={{ maxWidth: '1240px', margin: '48px auto 0', padding: '0 20px' }}>
        {activeTab === 'blogs' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '28px' }}>
            {(blogs || []).map((blog) => (
              <article key={blog.id} className="dribbble-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <div style={{ height: '210px', overflow: 'hidden', position: 'relative' }}>
                  <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} />
                  <span style={{ position: 'absolute', top: '14px', left: '14px', background: '#000648', color: '#f2b733', fontWeight: 900, fontSize: '0.7rem', padding: '4px 12px', borderRadius: '50px', textTransform: 'uppercase' }}>
                    {blog.category}
                  </span>
                </div>

                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 700, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <HiCalendar size={14} color="#f2b733" /> {blog.date} • {blog.author}
                    </div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#000648', lineHeight: 1.4, marginBottom: '12px' }}>
                      {blog.title}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                      {blog.summary}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenDemoModal(blog.title)}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      color: '#000648', fontWeight: 800, fontSize: '0.86rem',
                      background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginTop: 'auto'
                    }}
                  >
                    <span>Read Full Guide</span>
                    <HiArrowRight size={16} style={{ color: '#f2b733' }} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {activeTab === 'achievements' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '28px' }}>
            {(achievements || []).map((ach) => (
              <div key={ach.id} className="dribbble-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img src={ach.image} alt={ach.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', top: '14px', right: '14px', background: '#000648', color: '#f2b733', fontWeight: 900, fontSize: '0.78rem', padding: '4px 14px', borderRadius: '50px', border: '1px solid #f2b733' }}>
                    {ach.year}
                  </span>
                </div>

                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: '0.74rem', fontWeight: 900, color: '#115DFC', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      {ach.category}
                    </span>
                    <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: '#000648', marginTop: '6px', lineHeight: 1.35 }}>
                      {ach.title}
                    </h3>
                    <p style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 700, marginTop: '4px' }}>
                      Issued by: {ach.issuer}
                    </p>
                    <p style={{ fontSize: '0.88rem', color: '#475569', marginTop: '12px', lineHeight: 1.6 }}>
                      {ach.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={{ marginTop: '60px' }}>
        <CTABanner onOpenDemoModal={onOpenDemoModal} />
      </div>
    </div>
  );
}
