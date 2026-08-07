import React from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

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

  if (!displayProjects || displayProjects.length === 0) return null;

  return (
    <section className="section" style={{ background: '#f8fafc', padding: '32px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span className="badge badge-primary" style={{ marginBottom: '8px' }}>Hands-On Labs</span>
            <h2 style={{ color: '#000648', margin: 0, fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 900 }}>
              Build Industry-Ready Capstone Projects
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '4px' }}>
              Create portfolio-ready projects using production-grade tools and industry workflows.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', width: '100%', maxWidth: 'fit-content' }}>
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('projects-slider-track');
                if (el) el.scrollBy({ left: -340, behavior: 'smooth' });
              }}
              aria-label="Scroll projects left"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: '#ffffff',
                border: '1.5px solid #000648',
                color: '#000648',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(0, 6, 72, 0.08)'
              }}
            >
              <HiChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('projects-slider-track');
                if (el) el.scrollBy({ left: 340, behavior: 'smooth' });
              }}
              aria-label="Scroll projects right"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: '#000648',
                border: '1.5px solid #000648',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 10px rgba(0, 6, 72, 0.2)'
              }}
            >
              <HiChevronRight size={20} />
            </button>
          </div>
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
            const tools = (typeof proj === 'object' && proj.tools) ? proj.tools : (courseTools ? courseTools.slice(0, 4) : ['AWS', 'Docker', 'Linux']);

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
