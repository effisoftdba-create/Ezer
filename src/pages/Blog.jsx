import React from 'react';
import { useSiteData } from '../Admin_Control/context/SiteContext';
import { HiBadgeCheck, HiNewspaper, HiArrowRight, HiSparkles, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import CTABanner from '../components/CTABanner';

export default function Blog({ onOpenDemoModal }) {
  const { blogs, achievements } = useSiteData();

  const featuredCoverArticle = (blogs && blogs[0]) || {
    title: 'How Non-IT Professionals Are Transitioning Into AI & Software Development in 2025',
    category: 'Cover Story',
    author: 'EZER Academic Board',
    date: 'August 2025 Edition',
    summary: 'Discover the step-by-step roadmap used by non-tech switchers to master Full Stack AI engineering and land high-growth tech roles.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200'
  };

  const rawBlogList = (blogs || []).slice(1);
  const defaultArticles = [
    {
      id: 'blog-default-1',
      title: 'Native Language Learning: Breaking Barriers for Non-IT Career Aspirants',
      category: 'Education Impact',
      summary: 'How learning complex software concepts in Tamil, Hindi, and English accelerates comprehension and boosts interview confidence.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'blog-default-2',
      title: 'The Rise of AI-Assisted Full Stack Developers in Top Tech Corporates',
      category: 'Industry Trends',
      summary: 'Why modern engineering teams look for developers who leverage AI tools to build scalable production apps in record time.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'blog-default-3',
      title: '12-Month Placement Assistance: How EZER Prepares Students for Tech Interviews',
      category: 'Career Success',
      summary: 'Inside EZER’s mentorship framework: mock technical interviews, resume building, and direct corporate referral pathways.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const articlesToDisplay = (rawBlogList && rawBlogList.length > 0) ? rawBlogList : defaultArticles;

  return (
    <div style={{ background: '#030712', color: '#f8fafc', minHeight: '100vh', paddingBottom: '60px' }}>
      {/* Magazine Hero Header */}
      <section style={{
        background: 'radial-gradient(circle at 50% 0%, #1e1b4b 0%, #000648 65%, #030712 100%)',
        color: '#ffffff',
        padding: '64px 20px 48px',
        textAlign: 'center',
        position: 'relative',
        borderBottom: '2px solid rgba(242, 183, 51, 0.3)'
      }}>
        <div className="container" style={{ maxWidth: '1080px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: 'rgba(242, 183, 51, 0.18)', color: '#f2b733',
            padding: '6px 22px', borderRadius: '50px', fontWeight: 900,
            fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em',
            marginBottom: '16px', border: '1.5px solid rgba(242, 183, 51, 0.4)',
            boxShadow: '0 0 24px rgba(242, 183, 51, 0.25)'
          }}>
            <HiSparkles size={16} /> EZER TECH MAGAZINE • VOL. 2026 EDITION
          </span>

          {/* CRISP HIGH-CONTRAST VISIBLE HERO TITLE */}
          <h1 style={{
            fontSize: 'clamp(2.2rem, 4.2vw, 3.6rem)',
            fontWeight: 900,
            lineHeight: 1.18,
            marginBottom: '16px',
            letterSpacing: '-0.02em',
            color: '#ffffff',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.9)'
          }}>
            Tech Insights, Academic Excellence & Verified National Honors
          </h1>

          <p style={{
            fontSize: '1.08rem',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '740px',
            margin: '0 auto',
            lineHeight: 1.65,
            textShadow: '0 2px 10px rgba(0,0,0,0.8)'
          }}>
            Explore verified national awards, corporate placement roadmaps, and editorial insights from EZER Learning Solutions.
          </p>
        </div>
      </section>

      <div className="container" style={{ maxWidth: '1200px', margin: '48px auto 0', padding: '0 20px' }}>
        
        {/* FEATURED MAGAZINE COVER STORY */}
        <div className="featured-cover-card">
          <div className="featured-cover-image">
            <img
              src={featuredCoverArticle.image}
              alt={featuredCoverArticle.title}
            />
            <span className="cover-story-tag">
              <HiSparkles size={14} /> COVER STORY
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

            <button
              type="button"
              onClick={() => onOpenDemoModal(featuredCoverArticle.title)}
              className="cover-btn"
            >
              Read Full Cover Story <HiArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* SECTION 1: EDITORIAL TECH ARTICLES & GUIDES (GRID FILLED WITH CARDS, NO EMPTY SPACE) */}
        <div style={{ marginBottom: '56px' }}>
          <div className="section-header-bar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <HiNewspaper size={24} color="#f2b733" />
              <h3>Editorial Tech Articles & Guides</h3>
            </div>
          </div>

          <div className="articles-grid">
            {(articlesToDisplay || []).map((blog) => (
              <article key={blog.id} className="magazine-card">
                <div className="card-image-box">
                  <img src={blog.image} alt={blog.title} />
                  <span className="card-cat-tag">
                    {blog.category || 'Tech Article'}
                  </span>
                </div>

                <div className="card-body">
                  <div>
                    <h4 className="card-title">{blog.title}</h4>
                    <p className="card-summary">{blog.summary}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenDemoModal(blog.title)}
                    className="card-read-btn"
                  >
                    Read Article <HiArrowRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* SECTION 2: NATIONAL AWARDS & ACHIEVEMENTS (HORIZONTAL LEFT-RIGHT SCROLL CAROUSEL) */}
        <div style={{ marginBottom: '40px' }}>
          <div className="section-header-bar" style={{ justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <HiBadgeCheck size={24} color="#f2b733" />
              <h3>National Awards & Achievements</h3>
            </div>

            {/* Left & Right Scroll Buttons */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                onClick={() => {
                  const track = document.getElementById('awards-scroll-track');
                  if (track) track.scrollBy({ left: -340, behavior: 'smooth' });
                }}
                aria-label="Scroll left"
                className="award-scroll-btn"
              >
                <HiChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={() => {
                  const track = document.getElementById('awards-scroll-track');
                  if (track) track.scrollBy({ left: 340, behavior: 'smooth' });
                }}
                aria-label="Scroll right"
                className="award-scroll-btn"
              >
                <HiChevronRight size={22} />
              </button>
            </div>
          </div>

          {/* Horizontal Scroll Track */}
          <div id="awards-scroll-track" className="awards-scroll-track">
            {(achievements || []).map((ach) => (
              <div key={ach.id} className="award-horizontal-card">
                <div className="card-image-box">
                  <img src={ach.image} alt={ach.title} />
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

      <div style={{ marginTop: '64px' }}>
        <CTABanner onOpenDemoModal={onOpenDemoModal} />
      </div>

      {/* UI/UX Pro Max Responsive Styles */}
      <style>{`
        .featured-cover-card {
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(0, 6, 72, 0.95) 100%);
          border-radius: 24px;
          border: 2px solid rgba(242, 183, 51, 0.4);
          overflow: hidden;
          box-shadow: 0 24px 50px rgba(0, 0, 0, 0.5);
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
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4);
        }

        .featured-cover-content {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .cover-meta {
          font-size: 0.82rem;
          color: #94a3b8;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .cover-title {
          font-size: clamp(1.6rem, 2.6vw, 2.2rem);
          font-weight: 900;
          color: #ffffff;
          line-height: 1.28;
          margin: 0 0 16px 0;
        }

        .cover-summary {
          font-size: 0.95rem;
          color: #cbd5e1;
          line-height: 1.65;
          margin: 0 0 24px 0;
        }

        .cover-btn {
          align-self: flex-start;
          padding: 12px 28px;
          border-radius: 50px;
          background: #f2b733;
          color: #000648;
          font-weight: 900;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          box-shadow: 0 6px 20px rgba(242, 183, 51, 0.3);
          transition: transform 0.25s ease, background-color 0.25s ease;
        }

        .cover-btn:hover {
          transform: translateY(-2px);
          background: #ffffff;
        }

        .section-header-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
          border-bottom: 2px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 14px;
        }

        .section-header-bar h3 {
          margin: 0;
          font-size: 1.4rem;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -0.01em;
        }

        .award-scroll-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(0, 6, 72, 0.9);
          border: 1.5px solid #f2b733;
          color: #f2b733;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.4);
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
          scrollbar-color: #f2b733 #050b1c;
        }

        .awards-scroll-track::-webkit-scrollbar {
          height: 6px;
        }

        .awards-scroll-track::-webkit-scrollbar-track {
          background: #050b1c;
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
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 20px;
          border: 1.5px solid rgba(242, 183, 51, 0.35);
          overflow: hidden;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
          transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
          display: flex;
          flex-direction: column;
        }

        .award-horizontal-card:hover {
          transform: translateY(-6px);
          border-color: #f2b733;
          box-shadow: 0 20px 44px rgba(242, 183, 51, 0.25);
        }

        .magazine-card {
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 20px;
          border: 1.5px solid rgba(242, 183, 51, 0.3);
          overflow: hidden;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
          transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
          display: flex;
          flex-direction: column;
        }

        .magazine-card:hover {
          transform: translateY(-6px);
          border-color: #f2b733;
          box-shadow: 0 20px 44px rgba(242, 183, 51, 0.2);
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
          background: rgba(0, 6, 72, 0.92);
          color: #38bdf8;
          font-size: 0.72rem;
          font-weight: 900;
          padding: 4px 14px;
          border-radius: 50px;
          border: 1.5px solid #38bdf8;
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
          color: #ffffff;
          margin: 0 0 10px 0;
          line-height: 1.35;
        }

        .card-summary {
          font-size: 0.86rem;
          color: #94a3b8;
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
          color: #f2b733;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .award-issuer {
          font-size: 0.8rem;
          color: #38bdf8;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .card-read-btn {
          background: none;
          border: none;
          color: #f2b733;
          font-weight: 800;
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
          color: #ffffff;
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
