import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { isAuthenticated, logoutAdmin } from '../utils/authService';
import { useSiteData } from '../context/SiteContext';
import HeroManager from '../components/HeroManager';
import CourseManager from '../components/CourseManager';
import {
  HiOutlinePhotograph,
  HiOutlineAcademicCap,
  HiOutlineExternalLink,
  HiOutlineLogout,
  HiOutlineRefresh,
  HiOutlineShieldCheck
} from 'react-icons/hi';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('hero');
  const navigate = useNavigate();
  const { heroSlides, courses, resetToDefault } = useSiteData();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    logoutAdmin();
    navigate('/admin/login');
  };

  const handleReset = () => {
    if (window.confirm('Reset all hero slides and courses back to initial default data?')) {
      resetToDefault();
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f4f6f9', display: 'flex', flexDirection: 'column' }}>
      <header style={{
        background: '#000648', color: '#ffffff', padding: '16px 28px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        boxShadow: '0 4px 15px rgba(0,6,72,0.2)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            background: '#f2b733', color: '#000648', fontWeight: 900,
            padding: '6px 12px', borderRadius: '8px', fontSize: '1.1rem'
          }}>
            EZ
          </div>
          <div>
            <h1 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 800, color: '#ffffff' }}>
              Admin Control Panel
            </h1>
            <div style={{ fontSize: '0.725rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <HiOutlineShieldCheck color="#22c55e" size={14} /> Session Active • Protected Management Console
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link
            to="/"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '8px 14px', background: 'rgba(255,255,255,0.1)', color: '#ffffff',
              borderRadius: '8px', textDecoration: 'none', fontSize: '0.825rem', fontWeight: 700,
              border: '1px solid rgba(255,255,255,0.2)'
            }}
          >
            View Live Site <HiOutlineExternalLink size={15} />
          </Link>

          <button
            type="button"
            onClick={handleReset}
            title="Reset site content to default data"
            aria-label="Reset site content to default data"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '8px 14px', background: 'rgba(255,255,255,0.05)', color: '#cbd5e1',
              borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '0.825rem',
              fontWeight: 600, cursor: 'pointer'
            }}
          >
            <HiOutlineRefresh size={15} /> Reset Defaults
          </button>

          <button
            type="button"
            onClick={handleLogout}
            aria-label="Logout from admin panel"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '8px 16px', background: '#dc2626', color: '#ffffff',
              borderRadius: '8px', border: 'none', fontSize: '0.825rem', fontWeight: 800,
              cursor: 'pointer', boxShadow: '0 2px 8px rgba(220, 38, 38, 0.3)'
            }}
          >
            <HiOutlineLogout size={16} /> Logout
          </button>
        </div>
      </header>

      <div style={{ flex: 1, display: 'flex', maxWidth: '1400px', width: '100%', margin: '0 auto', padding: '24px 20px', gap: '24px' }}>
        <aside style={{ width: '260px', flexShrink: 0 }}>
          <div style={{ background: '#ffffff', borderRadius: '14px', padding: '16px', boxShadow: '0 4px 14px rgba(0,0,0,0.03)', border: '1px solid #e2e8f0' }}>
            <div style={{ fontSize: '0.725rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px', paddingLeft: '8px' }}>
              Management Sections
            </div>

            <button
              type="button"
              onClick={() => setActiveTab('hero')}
              aria-label="Switch to Hero Slider Manager"
              style={{
                width: '100%', display: 'flex', alignItems: 'center', gap: '10px',
                padding: '12px 14px', borderRadius: '10px', border: 'none',
                background: activeTab === 'hero' ? '#000648' : 'transparent',
                color: activeTab === 'hero' ? '#f2b733' : '#475569',
                fontWeight: activeTab === 'hero' ? 800 : 600,
                fontSize: '0.875rem', cursor: 'pointer', marginBottom: '6px',
                textAlign: 'left', transition: 'background-color 0.2s ease, color 0.2s ease'
              }}
            >
              <HiOutlinePhotograph size={20} />
              <div style={{ flex: 1 }}>Hero Slider</div>
              <span style={{
                background: activeTab === 'hero' ? '#f2b733' : '#f1f5f9',
                color: activeTab === 'hero' ? '#000648' : '#475569',
                fontSize: '0.7rem', fontWeight: 800, padding: '2px 8px', borderRadius: '50px'
              }}>
                {heroSlides.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('courses')}
              aria-label="Switch to Course Catalog Manager"
              style={{
                width: '100%', display: 'flex', alignItems: 'center', gap: '10px',
                padding: '12px 14px', borderRadius: '10px', border: 'none',
                background: activeTab === 'courses' ? '#000648' : 'transparent',
                color: activeTab === 'courses' ? '#f2b733' : '#475569',
                fontWeight: activeTab === 'courses' ? 800 : 600,
                fontSize: '0.875rem', cursor: 'pointer', marginBottom: '6px',
                textAlign: 'left', transition: 'background-color 0.2s ease, color 0.2s ease'
              }}
            >
              <HiOutlineAcademicCap size={20} />
              <div style={{ flex: 1 }}>Course Catalog</div>
              <span style={{
                background: activeTab === 'courses' ? '#f2b733' : '#f1f5f9',
                color: activeTab === 'courses' ? '#000648' : '#475569',
                fontSize: '0.7rem', fontWeight: 800, padding: '2px 8px', borderRadius: '50px'
              }}>
                {courses.length}
              </span>
            </button>

            <div style={{ borderTop: '1px solid #e2e8f0', margin: '16px 0' }} />

            <div style={{ padding: '12px', background: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#000648', marginBottom: '4px' }}>
                ⚡ Instant Site Sync
              </div>
              <div style={{ fontSize: '0.725rem', color: '#64748b', lineHeight: 1.4 }}>
                All edits made here instantly propagate to live site components without rebuilding.
              </div>
            </div>
          </div>
        </aside>

        <main style={{ flex: 1, background: '#ffffff', borderRadius: '14px', padding: '28px', boxShadow: '0 4px 14px rgba(0,0,0,0.03)', border: '1px solid #e2e8f0' }}>
          {activeTab === 'hero' && <HeroManager />}
          {activeTab === 'courses' && <CourseManager />}
        </main>
      </div>
    </div>
  );
}
