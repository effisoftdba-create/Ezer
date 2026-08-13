import React, { useState } from 'react';
import CarouselDotsNav from '../CarouselDotsNav';

const DEFAULT_CAPSTONES = [
  {
    id: 'cap-1',
    title: 'Multi-Cloud Automated Infrastructure Sandbox',
    desc: 'Design and provision multi-region infrastructure on AWS and Azure using Terraform modules, Ansible, and Kubernetes.',
    category: 'Cloud & DevOps Capstone',
    tools: ['AWS', 'Terraform', 'Kubernetes', 'Docker']
  },
  {
    id: 'cap-2',
    title: 'Playwright E2E Test Automation Framework',
    desc: 'Build cross-browser automated testing suite integrated into CI/CD pipelines with real-time HTML execution reports.',
    category: 'Testing Automation Capstone',
    tools: ['Playwright', 'TypeScript', 'GitHub Actions', 'Docker']
  },
  {
    id: 'cap-3',
    title: 'Enterprise AI Customer RAG Engine',
    desc: 'Deploy high-performance retrieval-augmented generation engine using Python, LangChain, and vector embeddings database.',
    category: 'AI & Data Science Capstone',
    tools: ['Python', 'LangChain', 'OpenAI', 'Pinecone']
  }
];

export default function CapstoneProjectsSlider({ projects, courseTools }) {
  const displayProjects = (projects && projects.length > 0) ? projects : DEFAULT_CAPSTONES;
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    if (!displayProjects.length) return;
    const next = (activeIndex - 1 + displayProjects.length) % displayProjects.length;
    setActiveIndex(next);
    const el = document.getElementById('projects-slider-track');
    if (el) el.scrollTo({ left: next * 340, behavior: 'smooth' });
  };

  const handleNext = () => {
    if (!displayProjects.length) return;
    const next = (activeIndex + 1) % displayProjects.length;
    setActiveIndex(next);
    const el = document.getElementById('projects-slider-track');
    if (el) el.scrollTo({ left: next * 340, behavior: 'smooth' });
  };

  const handleSelect = (idx) => {
    setActiveIndex(idx);
    const el = document.getElementById('projects-slider-track');
    if (el) el.scrollTo({ left: idx * 340, behavior: 'smooth' });
  };

  if (!displayProjects || displayProjects.length === 0) return null;

  return (
    <section className="section" style={{ background: '#f8fafc', padding: '32px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '28px', width: '100%' }}>
          <div>
            <span className="badge badge-primary" style={{ marginBottom: '8px' }}>Hands-On Labs</span>
            <h2 style={{ color: '#000648', margin: 0, fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 900 }}>
              Build Industry-Ready Capstone Projects
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '4px' }}>
              Create portfolio-ready projects using production-grade tools and industry workflows.
            </p>
          </div>

          {/* Standardized Centered < . . . > Controls */}
          <CarouselDotsNav
            totalItems={displayProjects.length}
            activeIndex={activeIndex}
            onPrev={handlePrev}
            onNext={handleNext}
            onSelectIndex={handleSelect}
            style={{ margin: '16px auto 0' }}
          />
        </div>

        <div
          id="projects-slider-track"
          className="no-scrollbar"
          style={{
            display: 'flex',
            gap: '24px',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            paddingBottom: '16px',
          }}
        >
          {displayProjects.map((proj) => {
            const title = typeof proj === 'string' ? proj : (proj.title || 'Production Capstone Lab');
            const desc = typeof proj === 'string'
              ? 'Build end-to-end production lab infrastructure evaluated by senior corporate mentors for portfolio readiness.'
              : (proj.desc || proj.description || 'Hands-on production capstone project evaluated by corporate mentors.');
            const category = typeof proj === 'object' && proj.category ? proj.category : 'Capstone Project';
            const rawTools = (typeof proj === 'object' && proj.tools) ? proj.tools : (courseTools ? courseTools.slice(0, 4) : ['AWS', 'Docker', 'Linux']);
            const tools = Array.isArray(rawTools)
              ? rawTools
              : (typeof rawTools === 'string' ? rawTools.split(',').map((t) => t.trim()).filter(Boolean) : []);

            return (
              <div
                key={proj.id || title}
                style={{
                  flex: '0 0 min(340px, 85vw)',
                  scrollSnapAlign: 'start',
                  background: '#ffffff',
                  borderRadius: '20px',
                  border: '1.5px solid #cbd5e1',
                  padding: '24px',
                  boxShadow: '0 8px 24px rgba(0,6,72,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#000648', background: 'rgba(242, 183, 51, 0.2)', padding: '4px 10px', borderRadius: '6px', marginBottom: '12px', display: 'inline-block' }}>
                    {category}
                  </span>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 900, color: '#000648', marginBottom: '8px', lineHeight: 1.35 }}>
                    {title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.55, marginBottom: '16px', fontWeight: 500 }}>
                    {desc}
                  </p>
                </div>

                {tools && tools.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '12px', borderTop: '1px solid #f1f5f9' }}>
                    {tools.map((t) => (
                      <span key={t} style={{ fontSize: '0.725rem', background: '#000648', color: '#f2b733', fontWeight: 800, padding: '4px 10px', borderRadius: '6px' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
