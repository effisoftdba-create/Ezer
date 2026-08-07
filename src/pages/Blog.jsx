import React from 'react';
import { Link } from 'react-router-dom';
import { useSiteData } from '../Admin_Control/context/SiteContext';
import { HiBadgeCheck, HiNewspaper, HiArrowRight, HiSparkles, HiChevronLeft, HiChevronRight, HiCalendar, HiClock } from 'react-icons/hi';
import { handleImgError } from '../utils/imageUtils';
import CTABanner from '../components/CTABanner';

export default function Blog({ onOpenDemoModal }) {
  const { blogs, achievements } = useSiteData();

  const featuredCoverArticle = (blogs && blogs[0]) || {
    id: 'blog-1',
    slug: 'how-non-it-professionals-transition-into-ai',
    title: 'How Non-IT Professionals Are Transitioning Into AI & Software Development in 2026',
    category: 'Career Guide',
    author: 'EZER Academic Board',
    date: 'August 2026 Edition',
    readTime: '6 min read',
    summary: 'Discover the step-by-step roadmap used by non-tech switchers to master Full Stack AI engineering and land high-growth tech roles.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200'
  };

  const defaultArticles = [
    {
      id: 'blog-default-1',
      slug: 'native-language-learning-breaking-barriers',
      title: 'Native Language Learning: Breaking Barriers for Non-IT Career Aspirants',
      category: 'Education Impact',
      date: 'July 2026',
      readTime: '4 min read',
      summary: 'How learning complex software concepts in Tamil, Hindi, and English accelerates comprehension and boosts interview confidence.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'blog-default-2',
      slug: 'rise-of-ai-assisted-full-stack-developers',
      title: 'The Rise of AI-Assisted Full Stack Developers in Top Tech Corporates',
      category: 'Industry Trends',
      date: 'July 2026',
      readTime: '5 min read',
      summary: 'Why modern engineering teams look for developers who leverage AI tools to build scalable production apps in record time.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'blog-default-3',
      slug: '12-month-placement-assistance-framework',
      title: '12-Month Placement Assistance: How EZER Prepares Students for Tech Interviews',
      category: 'Career Success',
      date: 'June 2026',
      readTime: '4 min read',
      summary: 'Inside EZER’s mentorship framework: mock technical interviews, resume building, and direct corporate referral pathways.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800'
    }
  ];

  // Guarantee 3+ articles are rendered in grid
  const userBlogList = (blogs && blogs.length > 1) ? blogs.slice(1) : [];
  const articlesToDisplay = userBlogList.length >= 3 
    ? userBlogList 
    : [...userBlogList, ...defaultArticles.slice(0, 3 - userBlogList.length)];

  return (
    <div style={{ background: '#ffffff', color: '#0f172a', minHeight: '100vh', paddingBottom: 0, position: 'relative' }}>
      
      {/* 1. CLEAN EDITORIAL HEADER */}
      <section style={{ padding: '56px 20px 36px', textAlign: 'center', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: 'rgba(0, 6, 72, 0.06)', color: '#000648',
            padding: '5px 18px', borderRadius: '50px', fontWeight: 800,
            fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.08em',
            marginBottom: '14px', border: '1px solid rgba(0, 6, 72, 0.12)'
          }}>
            EZER MAGAZINE & HONORS
          </span>

          <h1 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
            fontWeight: 900,
            lineHeight: 1.15,
            marginBottom: '16px',
            letterSpacing: '-0.02em',
            color: '#000648'
          }}>
            Catch Up with Our Latest Articles & Honors
          </h1>

          <p style={{
            fontSize: '1.05rem',
            color: '#475569',
            maxWidth: '680px',
            margin: '0 auto',
            lineHeight: 1.65
          }}>
            Catch up with our latest news and stay in the loop on recent updates, insightful tech stories, career transition roadmaps, and verified national honors.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT BODY */}
      <div style={{ maxWidth: '1240px', margin: '40px auto 0', padding: '0 20px' }}>
        
        {/* RECENT POST / FEATURED COVER STORY (2-COLUMN HERO CARD MATCHING DESIGN REF) */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{ fontSize: '1rem', fontWeight: 900, color: '#000648', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Recent Featured Story
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(400px, 100%), 1fr))',
              gap: '28px',
              alignItems: 'stretch'
            }}
          >
            {/* Left Image Box */}
            <div style={{ borderRadius: '20px', overflow: 'hidden', height: '100%', minHeight: '320px', background: '#000648', boxShadow: '0 10px 30px rgba(0,6,72,0.08)' }}>
              <img
                src={featuredCoverArticle.image}
                alt={featuredCoverArticle.title}
                onError={handleImgError}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* Right Card Container */}
            <div 
              style={{
                background: '#f8fafc',
                border: '1.5px solid #cbd5e1',
                borderRadius: '20px',
                padding: 'clamp(24px, 4vw, 36px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 8px 24px rgba(0, 6, 72, 0.04)'
              }}
            >
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#64748b', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <HiCalendar size={15} style={{ color: '#f2b733' }} />
                  <span>{featuredCoverArticle.date || 'August 2026'}</span>
                  <span>•</span>
                  <HiClock size={15} style={{ color: '#000648' }} />
                  <span>{featuredCoverArticle.readTime || '5 min read'}</span>
                </div>

                <h2 style={{ fontSize: 'clamp(1.35rem, 2.2vw, 1.75rem)', fontWeight: 900, color: '#000648', lineHeight: 1.28, marginBottom: '14px' }}>
                  {featuredCoverArticle.title}
                </h2>

                <p style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.65, marginBottom: '24px' }}>
                  {featuredCoverArticle.summary}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', paddingTop: '16px', borderTop: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{ background: '#ffffff', border: '1px solid #cbd5e1', color: '#000648', padding: '4px 14px', borderRadius: '50px', fontSize: '0.76rem', fontWeight: 800 }}>
                    {featuredCoverArticle.category || 'Cover Story'}
                  </span>
                  <span style={{ background: '#ffffff', border: '1px solid #cbd5e1', color: '#000648', padding: '4px 14px', borderRadius: '50px', fontSize: '0.76rem', fontWeight: 800 }}>
                    EdTech
                  </span>
                </div>

                <Link
                  to={`/blog/${featuredCoverArticle.slug || featuredCoverArticle.id}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 22px',
                    background: '#000648',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.84rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    boxShadow: '0 4px 12px rgba(0,6,72,0.18)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <span>Read Article</span>
                  <HiArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 3. WEEKLY MOST READ / LATEST ARTICLES (3-COLUMN GRID MATCHING REFERENCE SCREENSHOT) */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#000648', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              Weekly Most Read 🔥
            </h2>
            <span style={{ fontSize: '0.86rem', fontWeight: 700, color: '#64748b' }}>
              Showing {articlesToDisplay.length} Articles
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: '28px' }}>
            {(articlesToDisplay || []).map((blog) => (
              <article
                key={blog.id}
                style={{
                  background: '#ffffff',
                  border: '1.5px solid #e2e8f0',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 6px 20px rgba(0, 6, 72, 0.04)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease'
                }}
              >
                <div>
                  <div style={{ position: 'relative', height: '210px', overflow: 'hidden', background: '#000648' }}>
                    <img
                      src={blog.image}
                      alt={blog.title}
                      onError={handleImgError}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>

                  <div style={{ padding: '20px 22px 14px' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748b', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span>{blog.date || 'July 2026'}</span>
                      <span>•</span>
                      <span>{blog.readTime || '4 min read'}</span>
                    </div>

                    <h3 style={{ fontSize: '1.1rem', fontWeight: 900, color: '#000648', lineHeight: 1.35, marginBottom: '10px' }}>
                      {blog.title}
                    </h3>

                    <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, margin: 0, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {blog.summary}
                    </p>
                  </div>
                </div>

                <div style={{ padding: '14px 22px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f1f5f9' }}>
                  <span style={{ background: '#f8fafc', border: '1px solid #cbd5e1', color: '#000648', padding: '4px 12px', borderRadius: '50px', fontSize: '0.74rem', fontWeight: 800 }}>
                    {blog.category || 'Tech Article'}
                  </span>

                  <Link
                    to={`/blog/${blog.slug || blog.id}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: '#000648',
                      fontWeight: 800,
                      fontSize: '0.82rem',
                      textDecoration: 'none'
                    }}
                  >
                    <span>Read Story</span>
                    <HiArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* 4. NATIONAL AWARDS & ACHIEVEMENTS SECTION (3-COLUMN GRID MATCHING REFERENCE STYLE) */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#000648', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <HiBadgeCheck size={26} style={{ color: '#f2b733' }} /> Verified National Awards & Honors
            </h2>
            <span style={{ fontSize: '0.86rem', fontWeight: 700, color: '#64748b' }}>
              Showing { (achievements || []).length } Awards
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: '28px' }}>
            {(achievements || []).map((ach) => (
              <div
                key={ach.id}
                style={{
                  background: '#f8fafc',
                  border: '1.5px solid #cbd5e1',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 6px 20px rgba(0, 6, 72, 0.04)'
                }}
              >
                <div>
                  <div style={{ position: 'relative', height: '200px', overflow: 'hidden', background: '#000648' }}>
                    <img src={ach.image} alt={ach.title} onError={handleImgError} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <span style={{ position: 'absolute', top: '12px', right: '12px', background: '#000648', color: '#f2b733', fontWeight: 900, fontSize: '0.74rem', padding: '4px 12px', borderRadius: '50px', border: '1.5px solid #f2b733' }}>
                      {ach.year}
                    </span>
                  </div>

                  <div style={{ padding: '20px 22px 14px' }}>
                    <span style={{ fontSize: '0.74rem', fontWeight: 900, color: '#115DFC', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {ach.category || 'Excellence Award'}
                    </span>

                    <h3 style={{ fontSize: '1.12rem', fontWeight: 900, color: '#000648', lineHeight: 1.35, margin: '6px 0 8px 0' }}>
                      {ach.title}
                    </h3>

                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748b', marginBottom: '10px' }}>
                      Issued by: {ach.issuer}
                    </div>

                    <p style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.6, margin: 0 }}>
                      {ach.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 5. CTA BANNER AT BOTTOM */}
      <div style={{ marginTop: '40px', marginBottom: 0, position: 'relative', zIndex: 2 }}>
        <CTABanner onOpenDemoModal={onOpenDemoModal} />
      </div>

    </div>
  );
}
