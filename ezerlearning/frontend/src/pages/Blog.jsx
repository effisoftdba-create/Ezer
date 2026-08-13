import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSiteData } from '../context/SiteContext';
import { HiBadgeCheck, HiNewspaper, HiArrowRight, HiSparkles } from 'react-icons/hi';
import { handleImgError } from '../utils/imageUtils';
import CTABanner from '../components/CTABanner';
import CarouselDotsNav from '../components/CarouselDotsNav';

const DEFAULT_ARTICLES = [
  {
    id: 'blog-default-1',
    slug: 'native-language-learning-breaking-barriers',
    title: 'Native Language Learning: Breaking Barriers for Non-IT Career Aspirants',
    category: 'Education Impact',
    summary: 'How learning complex software concepts in Tamil, Hindi, and English accelerates comprehension and boosts interview confidence.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'blog-default-2',
    slug: 'rise-of-ai-assisted-full-stack-developers',
    title: 'The Rise of AI-Assisted Full Stack Developers in Top Tech Corporates',
    category: 'Industry Trends',
    summary: 'Why modern engineering teams look for developers who leverage AI tools to build scalable production apps in record time.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'blog-default-3',
    slug: '12-month-placement-assistance-framework',
    title: '12-Month Placement Assistance: How EZER Prepares Students for Tech Interviews',
    category: 'Career Success',
    summary: 'Inside EZER’s mentorship framework: mock technical interviews, resume building, and direct corporate referral pathways.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Blog({ onOpenDemoModal }) {
  const { blogs, achievements } = useSiteData();
  const [awardActiveIdx, setAwardActiveIdx] = useState(0);

  const featuredCoverArticle = (blogs && Array.isArray(blogs) && (blogs.find(b => b && b.featured) || blogs[0])) || {
    id: 'blog-1',
    slug: 'how-non-it-professionals-transition-into-ai',
    title: 'How Non-IT Professionals Are Transitioning Into AI & Software Development in 2026',
    category: 'Cover Story',
    author: 'EZER Academic Board',
    date: 'August 2026 Edition',
    summary: 'Discover the step-by-step roadmap used by non-tech switchers to master Full Stack AI engineering and land high-growth tech roles.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200'
  };

  // Filter out the cover story so remaining articles are rendered in grid
  const userBlogList = (blogs && Array.isArray(blogs) && blogs.length > 0) ? blogs.filter((b) => b && b.id !== featuredCoverArticle.id) : [];
  const articlesToDisplay = userBlogList.length >= 3 
    ? userBlogList 
    : [...userBlogList, ...DEFAULT_ARTICLES.slice(0, 3 - userBlogList.length)];

  return (
    <div style={{ background: '#f8fafc', color: '#0f172a', minHeight: '100vh', paddingBottom: 0, position: 'relative', overflow: 'hidden' }}>
      
      {/* FLOATING BACKGROUND ANIMATION EFFECTS */}
      <div style={{ pointerEvents: 'none', position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
        <div className="bg-anim-blob blob-1" />
        <div className="bg-anim-blob blob-2" />
        <div className="bg-anim-blob blob-3" />
      </div>

      {/* Magazine Hero Header */}
      <section style={{
        background: 'radial-gradient(circle at 50% 0%, #000648 0%, #0a192f 70%, #020b26 100%)',
        color: '#ffffff',
        padding: '64px 20px 54px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2,
        borderBottom: '3px solid #f2b733',
        boxShadow: '0 10px 30px rgba(0, 6, 72, 0.2)'
      }}>
        <div className="container" style={{ maxWidth: '1080px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: 'rgba(242, 183, 51, 0.18)', color: '#f2b733',
            padding: '6px 24px', borderRadius: '50px', fontWeight: 900,
            fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em',
            marginBottom: '18px', border: '1.5px solid rgba(242, 183, 51, 0.4)',
            boxShadow: '0 0 24px rgba(242, 183, 51, 0.3)'
          }}>
            EZER TECH MAGAZINE • VOL. 2026 EDITION
          </span>


          <h1 style={{
            fontSize: 'clamp(2.2rem, 4.2vw, 3.6rem)',
            fontWeight: 900,
            lineHeight: 1.18,
            marginBottom: '16px',
            letterSpacing: '-0.02em',
            color: '#ffffff',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)'
          }}>
            Tech Insights, Academic Excellence & Verified National Honors
          </h1>

          <p style={{
            fontSize: '1.08rem',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '740px',
            margin: '0 auto',
            lineHeight: 1.65,
            textShadow: '0 2px 8px rgba(0,0,0,0.8)'
          }}>
            Explore verified national awards, corporate placement roadmaps, and editorial insights from EZER Learning Solutions.
          </p>
        </div>
      </section>

      <div className="container" style={{ maxWidth: '1200px', margin: '48px auto 0', padding: '0 20px', position: 'relative', zIndex: 2 }}>
        
        {/* FEATURED MAGAZINE COVER STORY */}
        <div className="featured-cover-card">
          <div className="featured-cover-image">
            <img
              src={featuredCoverArticle.image}
              alt={featuredCoverArticle.title}
              onError={handleImgError}
              style={{
                objectFit: featuredCoverArticle.fit || featuredCoverArticle.imageFit || 'cover',
                objectPosition: featuredCoverArticle.position || featuredCoverArticle.imagePosition || 'center center',
                transform: (featuredCoverArticle.zoom || featuredCoverArticle.imageZoom || 1) !== 1 ? `scale(${featuredCoverArticle.zoom || featuredCoverArticle.imageZoom})` : 'none',
                transformOrigin: featuredCoverArticle.position || featuredCoverArticle.imagePosition || 'center center'
              }}
            />
            <span className="cover-story-tag">
              COVER STORY
            </span>
          </div>

          <div className="featured-cover-content">
            <div className="cover-meta">
              {featuredCoverArticle.date} • By {featuredCoverArticle.author}
            </div>

            <h2 className="cover-title">
              {featuredCoverArticle.title}
            </h2>

            <p className="cover-summary">
              {featuredCoverArticle.summary}
            </p>

            <Link
              to={`/blog/${featuredCoverArticle.slug || featuredCoverArticle.id}`}
              className="cover-btn"
              style={{ textDecoration: 'none' }}
            >
              Read Full Cover Story <HiArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* SECTION 1: EDITORIAL TECH ARTICLES & GUIDES */}
        <div style={{ marginBottom: '56px' }}>
          <div className="section-header-bar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <HiNewspaper size={26} color="#000648" />
              <h3 style={{ color: '#000648' }}>Editorial Tech Articles & Guides</h3>
            </div>
          </div>

          <div className="articles-grid">
            {(articlesToDisplay || []).map((blog) => (
              <article key={blog.id} className="magazine-card">
                <div className="card-image-box">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    onError={handleImgError}
                    style={{
                      objectFit: blog.fit || blog.imageFit || 'cover',
                      objectPosition: blog.position || blog.imagePosition || 'center center',
                      transform: (blog.zoom || blog.imageZoom || 1) !== 1 ? `scale(${blog.zoom || blog.imageZoom})` : 'none',
                      transformOrigin: blog.position || blog.imagePosition || 'center center'
                    }}
                  />
                  <span className="card-cat-tag">
                    {blog.category || 'Tech Article'}
                  </span>
                </div>

                <div className="card-body">
                  <div>
                    <h4 className="card-title">{blog.title}</h4>
                    <p className="card-summary">{blog.summary}</p>
                  </div>

                  <Link
                    to={`/blog/${blog.slug || blog.id}`}
                    className="card-read-btn"
                    style={{ textDecoration: 'none' }}
                  >
                    Read Full Story <HiArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* SECTION 2: NATIONAL AWARDS & ACHIEVEMENTS (HORIZONTAL LEFT-RIGHT SCROLL CAROUSEL) */}
        <div style={{ marginBottom: '40px' }}>
          <div className="section-header-bar" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <HiBadgeCheck size={26} color="#000648" />
              <h3 style={{ color: '#000648', margin: 0, fontSize: '1.4rem', fontWeight: 900 }}>National Awards & Achievements</h3>
            </div>

            {/* Standardized Centered < . . . > Controls */}
            <CarouselDotsNav
              totalItems={(achievements || []).length}
              activeIndex={awardActiveIdx}
              onPrev={() => {
                const list = achievements || [];
                if (!list.length) return;
                const next = (awardActiveIdx - 1 + list.length) % list.length;
                setAwardActiveIdx(next);
                const track = document.getElementById('awards-scroll-track');
                if (track) track.scrollTo({ left: next * 340, behavior: 'smooth' });
              }}
              onNext={() => {
                const list = achievements || [];
                if (!list.length) return;
                const next = (awardActiveIdx + 1) % list.length;
                setAwardActiveIdx(next);
                const track = document.getElementById('awards-scroll-track');
                if (track) track.scrollTo({ left: next * 340, behavior: 'smooth' });
              }}
              onSelectIndex={(idx) => {
                setAwardActiveIdx(idx);
                const track = document.getElementById('awards-scroll-track');
                if (track) track.scrollTo({ left: idx * 340, behavior: 'smooth' });
              }}
              style={{ margin: '8px auto 0' }}
            />
          </div>

          {/* Horizontal Scroll Track */}
          <div id="awards-scroll-track" className="awards-scroll-track">
            {(achievements || []).map((ach) => (
              <div key={ach.id} className="award-horizontal-card">
                <div className="card-image-box">
                  <img
                    src={ach.image}
                    alt={ach.title}
                    style={{
                      objectFit: ach.fit || ach.imageFit || 'cover',
                      objectPosition: ach.position || ach.imagePosition || 'center center',
                      transform: (ach.zoom || ach.imageZoom || 1) !== 1 ? `scale(${ach.zoom || ach.imageZoom})` : 'none',
                      transformOrigin: ach.position || ach.imagePosition || 'center center'
                    }}
                  />
                  <span className="award-year-tag">
                    {ach.year}
                  </span>
                </div>

                <div className="card-body">
                  <div>
                    <span className="award-cat-text">
                      {ach.category || 'Excellence Award'}
                    </span>
                    <h4 className="card-title" style={{ marginTop: '4px' }}>{ach.title}</h4>
                    <div className="award-issuer">
                      Issued by: {ach.issuer}
                    </div>
                    <p className="card-summary">{ach.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div style={{ marginTop: '56px', marginBottom: 0, position: 'relative', zIndex: 2 }}>
        <CTABanner onOpenDemoModal={onOpenDemoModal} />
      </div>

      {/* UI/UX Pro Max Responsive & Animation Styles */}
      <style>{`
        /* BACKGROUND FLOATING ANIMATION BLOBS */
        .bg-anim-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.45;
          animation: floatGlow 14s ease-in-out infinite alternate;
        }

        .blob-1 {
          top: 5%;
          left: -5%;
          width: 450px;
          height: 450px;
          background: rgba(242, 183, 51, 0.25);
        }

        .blob-2 {
          top: 45%;
          right: -8%;
          width: 500px;
          height: 500px;
          background: rgba(0, 6, 72, 0.15);
          animation-delay: -5s;
        }

        .blob-3 {
          bottom: 5%;
          left: 20%;
          width: 400px;
          height: 400px;
          background: rgba(17, 93, 252, 0.15);
          animation-delay: -9s;
        }

        @keyframes floatGlow {
          0% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(40px, 50px) scale(1.1);
          }
          100% {
            transform: translate(-30px, 30px) scale(0.95);
          }
        }

        .featured-cover-card {
          background: #ffffff;
          border-radius: 24px;
          border: 2.5px solid #000648;
          overflow: hidden;
          box-shadow: 0 20px 45px rgba(0, 6, 72, 0.12);
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          margin-bottom: 56px;
        }

        .featured-cover-image {
          position: relative;
          min-height: 340px;
          background: #000;
        }

        .featured-cover-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .cover-story-tag {
          position: absolute;
          top: 20px;
          left: 20px;
          background: #f2b733;
          color: #000648;
          font-weight: 900;
          font-size: 0.78rem;
          padding: 6px 18px;
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
        }

        .featured-cover-content {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #ffffff;
        }

        .cover-meta {
          font-size: 0.82rem;
          color: #64748b;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .cover-title {
          font-size: clamp(1.6rem, 2.6vw, 2.2rem);
          font-weight: 900;
          color: #000648;
          line-height: 1.28;
          margin: 0 0 16px 0;
        }

        .cover-summary {
          font-size: 0.95rem;
          color: #334155;
          line-height: 1.65;
          margin: 0 0 24px 0;
        }

        .cover-btn {
          align-self: flex-start;
          padding: 12px 28px;
          border-radius: 50px;
          background: #000648;
          color: #f2b733;
          font-weight: 900;
          border: 2px solid #000648;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          box-shadow: 0 6px 20px rgba(0, 6, 72, 0.25);
          transition: transform 0.25s ease, background-color 0.25s ease, color 0.25s ease;
        }

        .cover-btn:hover {
          transform: translateY(-2px);
          background: #f2b733;
          color: #000648;
        }

        .section-header-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
          border-bottom: 2.5px solid #000648;
          padding-bottom: 14px;
        }

        .section-header-bar h3 {
          margin: 0;
          font-size: 1.4rem;
          font-weight: 900;
          letter-spacing: -0.01em;
        }

        .award-scroll-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #000648;
          border: 2px solid #f2b733;
          color: #f2b733;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,6,72,0.2);
          transition: background-color 0.25s ease, color 0.25s ease, transform 0.25s ease;
        }

        .award-scroll-btn:hover {
          background: #f2b733;
          color: #000648;
          transform: scale(1.08);
        }

        .articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 28px;
        }

        /* HORIZONTAL SCROLL CAROUSEL TRACK */
        .awards-scroll-track {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding: 8px 4px 20px;
          scrollbar-width: thin;
          scrollbar-color: #f2b733 #e2e8f0;
        }

        .awards-scroll-track::-webkit-scrollbar {
          height: 6px;
        }

        .awards-scroll-track::-webkit-scrollbar-track {
          background: #e2e8f0;
          border-radius: 10px;
        }

        .awards-scroll-track::-webkit-scrollbar-thumb {
          background: #f2b733;
          border-radius: 10px;
        }

        .award-horizontal-card {
          width: 350px;
          min-width: 320px;
          flex-shrink: 0;
          scroll-snap-align: start;
          background: #ffffff;
          border-radius: 20px;
          border: 1.5px solid #cbd5e1;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 6, 72, 0.08);
          transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
          display: flex;
          flex-direction: column;
        }

        .award-horizontal-card:hover {
          transform: translateY(-6px);
          border-color: #000648;
          box-shadow: 0 18px 40px rgba(0, 6, 72, 0.18);
        }

        .magazine-card {
          background: #ffffff;
          border-radius: 20px;
          border: 1.5px solid #cbd5e1;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 6, 72, 0.08);
          transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
          display: flex;
          flex-direction: column;
        }

        .magazine-card:hover {
          transform: translateY(-6px);
          border-color: #000648;
          box-shadow: 0 18px 40px rgba(0, 6, 72, 0.18);
        }

        .card-image-box {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background: #000;
          overflow: hidden;
        }

        .card-image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .magazine-card:hover .card-image-box img,
        .award-horizontal-card:hover .card-image-box img {
          transform: scale(1.04);
        }

        .card-cat-tag {
          position: absolute;
          top: 12px;
          right: 12px;
          background: #000648;
          color: #f2b733;
          font-size: 0.72rem;
          font-weight: 900;
          padding: 4px 14px;
          border-radius: 50px;
          border: 1.5px solid #f2b733;
        }

        .award-year-tag {
          position: absolute;
          top: 12px;
          right: 12px;
          background: #000648;
          color: #f2b733;
          font-size: 0.72rem;
          font-weight: 900;
          padding: 4px 14px;
          border-radius: 50px;
          border: 1.5px solid #f2b733;
        }

        .card-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex-grow: 1;
        }

        .card-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #000648;
          margin: 0 0 10px 0;
          line-height: 1.35;
        }

        .card-summary {
          font-size: 0.86rem;
          color: #475569;
          margin: 0;
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .award-cat-text {
          font-size: 0.72rem;
          font-weight: 900;
          color: #d97706;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .award-issuer {
          font-size: 0.8rem;
          color: #0284c7;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .card-read-btn {
          background: none;
          border: none;
          color: #000648;
          font-weight: 900;
          font-size: 0.84rem;
          cursor: pointer;
          padding: 0;
          margin-top: 18px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s ease;
        }

        .card-read-btn:hover {
          color: #d97706;
        }

        @media (max-width: 900px) {
          .featured-cover-card {
            grid-template-columns: 1fr;
          }

          .articles-grid {
            grid-template-columns: 1fr;
          }

          .award-horizontal-card {
            width: 290px;
            min-width: 270px;
          }
        }
      `}</style>
    </div>
  );
}
