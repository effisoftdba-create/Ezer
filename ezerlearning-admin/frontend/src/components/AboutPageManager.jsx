import React, { useState } from 'react';
import { useSiteData } from '../context/SiteContext';
import AboutShowcaseManager from './AboutShowcaseManager';
import AboutVideoManager from './AboutVideoManager';
import {
  HiOutlinePhotograph,
  HiOutlineVideoCamera,
  HiOutlineInformationCircle,
  HiSparkles
} from 'react-icons/hi';

export default function AboutPageManager({ initialSubTab = 'showcase' }) {
  const { aboutShowcaseCards, aboutVideos } = useSiteData() || {};
  const [activeSubTab, setActiveSubTab] = useState(initialSubTab);

  const showcaseCount = (aboutShowcaseCards || []).length;
  const videoCount = (aboutVideos || []).length;

  return (
    <div style={{ paddingBottom: '32px' }}>
      {/* Page Header */}
      <div
        style={{
          background: 'linear-gradient(135deg, #000648 0%, #08126b 100%)',
          borderRadius: '16px',
          padding: '24px 28px',
          color: '#ffffff',
          marginBottom: '24px',
          boxShadow: '0 8px 24px rgba(0, 6, 72, 0.12)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}
      >
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(242, 183, 51, 0.15)',
              border: '1px solid rgba(242, 183, 51, 0.35)',
              color: '#f2b733',
              fontSize: '0.72rem',
              fontWeight: 800,
              padding: '3px 12px',
              borderRadius: '50px',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '8px'
            }}
          >
            <HiSparkles size={13} />
            <span>About Us Page Customizer</span>
          </div>
          <h1
            style={{
              fontSize: 'clamp(1.25rem, 2vw, 1.6rem)',
              fontWeight: 900,
              margin: 0,
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <HiOutlineInformationCircle size={28} color="#f2b733" />
            About Us Page Management Console
          </h1>
          <p style={{ fontSize: '0.86rem', color: '#cbd5e1', margin: '6px 0 0 0', maxWidth: '640px' }}>
            Manage all dynamic interactive content displayed on the About Us page, including the Alternating Zig-Zag Story & Culture Cards and Brand Video Players.
          </p>
        </div>

        {/* Sub-tab Switcher Pill Bar */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            padding: '4px',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            display: 'flex',
            gap: '6px'
          }}
        >
          <button
            type="button"
            onClick={() => setActiveSubTab('showcase')}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 800,
              fontSize: '0.82rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease',
              background: activeSubTab === 'showcase' ? '#f2b733' : 'transparent',
              color: activeSubTab === 'showcase' ? '#000648' : '#ffffff',
              boxShadow: activeSubTab === 'showcase' ? '0 4px 12px rgba(242, 183, 51, 0.3)' : 'none'
            }}
          >
            <HiOutlinePhotograph size={17} />
            <span>Zig-Zag Story & Culture</span>
            <span
              style={{
                fontSize: '0.7rem',
                background: activeSubTab === 'showcase' ? '#000648' : 'rgba(255,255,255,0.2)',
                color: activeSubTab === 'showcase' ? '#f2b733' : '#ffffff',
                padding: '1px 6px',
                borderRadius: '50px',
                fontWeight: 900
              }}
            >
              {showcaseCount}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSubTab('videos')}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 800,
              fontSize: '0.82rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease',
              background: activeSubTab === 'videos' ? '#f2b733' : 'transparent',
              color: activeSubTab === 'videos' ? '#000648' : '#ffffff',
              boxShadow: activeSubTab === 'videos' ? '0 4px 12px rgba(242, 183, 51, 0.3)' : 'none'
            }}
          >
            <HiOutlineVideoCamera size={17} />
            <span>Brand Video Links</span>
            <span
              style={{
                fontSize: '0.7rem',
                background: activeSubTab === 'videos' ? '#000648' : 'rgba(255,255,255,0.2)',
                color: activeSubTab === 'videos' ? '#f2b733' : '#ffffff',
                padding: '1px 6px',
                borderRadius: '50px',
                fontWeight: 900
              }}
            >
              {videoCount >= 2 ? 2 : videoCount}
            </span>
          </button>
        </div>
      </div>

      {/* Render Active Sub-Tab View */}
      {activeSubTab === 'showcase' && <AboutShowcaseManager />}
      {activeSubTab === 'videos' && <AboutVideoManager />}
    </div>
  );
}
