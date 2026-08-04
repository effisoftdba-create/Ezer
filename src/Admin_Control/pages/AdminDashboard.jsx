import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated, logoutAdmin } from '../utils/authService';
import { useSiteData } from '../context/SiteContext';

import HeroManager from '../components/HeroManager';
import CourseManager from '../components/CourseManager';
import PlatformManager from '../components/PlatformManager';
import SupportCardsManager from '../components/SupportCardsManager';
import GraduateOutcomesManager from '../components/GraduateOutcomesManager';
import SeniorMentorsManager from '../components/SeniorMentorsManager';
import VideoReviewsManager from '../components/VideoReviewsManager';
import TestimonialsManager from '../components/TestimonialsManager';
import FaqManager from '../components/FaqManager';
import ContactInfoManager from '../components/ContactInfoManager';
import PopupManager from '../components/PopupManager';
import LeadsManager from '../components/LeadsManager';
import AdminSyncModal from '../components/AdminSyncModal';
import AdminHeaderNav from '../components/AdminHeaderNav';
import AdminSidebarNav from '../components/AdminSidebarNav';

import UIStateDisplay, { STATE_TYPES } from '../../components/UIStateDisplay';
import {
  HiOutlinePhotograph,
  HiOutlineAcademicCap,
  HiOutlineSparkles,
  HiOutlineBadgeCheck,
  HiOutlineUserGroup,
  HiOutlineUser,
  HiOutlineVideoCamera,
  HiOutlineChatAlt,
  HiOutlineQuestionMarkCircle,
  HiOutlinePhone,
  HiOutlineTemplate,
  HiOutlineMailOpen
} from 'react-icons/hi';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('leads');
  const [showSyncModal, setShowSyncModal] = useState(false);
  const [copiedSyncLink, setCopiedSyncLink] = useState(false);
  const [copiedJson, setCopiedJson] = useState(false);

  const navigate = useNavigate();
  const {
    heroSlides,
    courses,
    supportCards,
    transformedLives,
    seniorMentors,
    videoTestimonials,
    writtenTestimonials,
    faqList,
    popupConfig,
    leads,
    resetToDefault
  } = useSiteData();

  const isAuth = isAuthenticated();

  useEffect(() => {
    if (!isAuth) {
      const timer = setTimeout(() => navigate('/admin/login'), 2500);
      return () => clearTimeout(timer);
    }
  }, [isAuth, navigate]);

  if (!isAuth) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000648' }}>
        <UIStateDisplay
          type={STATE_TYPES.PERMISSION_DENIED}
          title="Access Permission Denied"
          message="You must log in to access the Admin Control Panel. Redirecting to login..."
          onRetry={() => navigate('/admin/login')}
          actionLabel="Go to Login Now"
        />
      </div>
    );
  }

  const handleLogout = () => {
    logoutAdmin();
    navigate('/admin/login');
  };

  const handleReset = () => {
    if (window.confirm('Reset all website content, slides, courses, and outcomes back to initial default data?')) {
      resetToDefault();
    }
  };

  const currentExportData = {
    popupConfig,
    heroSlides,
    courses
  };

  const buildSyncUrl = () => {
    try {
      const origin = window.location.origin || '';
      const pathname = window.location.pathname || '/';
      const cleanPath = pathname.endsWith('/') ? pathname : `${pathname}/`;
      const serialized = encodeURIComponent(JSON.stringify(currentExportData));
      return `${origin}${cleanPath}#/?syncData=${serialized}`;
    } catch (e) {
      return '';
    }
  };

  const handleCopySyncLink = () => {
    const url = buildSyncUrl();
    if (url) {
      navigator.clipboard.writeText(url);
      setCopiedSyncLink(true);
      setTimeout(() => setCopiedSyncLink(false), 3000);
    }
  };

  const handleCopyJson = () => {
    const jsonStr = JSON.stringify(currentExportData, null, 2);
    navigator.clipboard.writeText(jsonStr);
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 3000);
  };

  const totalFaqs = faqList.reduce((acc, cat) => acc + (cat.items?.length || 0), 0);

  const tabs = [
    { id: 'leads', label: 'Lead Submissions', icon: HiOutlineMailOpen, count: (leads || []).length },
    { id: 'hero', label: 'Hero Slider', icon: HiOutlinePhotograph, count: heroSlides.length },
    { id: 'courses', label: 'Course Catalog', icon: HiOutlineAcademicCap, count: courses.length },
    { id: 'platform', label: 'Empowering Switchers', icon: HiOutlineSparkles },
    { id: 'support', label: 'Why EZER Support', icon: HiOutlineBadgeCheck, count: supportCards.length },
    { id: 'outcomes', label: 'Graduate Outcomes', icon: HiOutlineUserGroup, count: transformedLives.length },
    { id: 'mentors', label: 'Senior Mentors', icon: HiOutlineUser, count: (seniorMentors || []).length },
    { id: 'videos', label: 'Video Reviews', icon: HiOutlineVideoCamera, count: videoTestimonials.length },
    { id: 'testimonials', label: 'Testimonials Page', icon: HiOutlineChatAlt, count: writtenTestimonials.length },
    { id: 'popup', label: 'Lead Popup Modal', icon: HiOutlineTemplate },
    { id: 'faq', label: 'FAQ Manager', icon: HiOutlineQuestionMarkCircle, count: totalFaqs },
    { id: 'contact', label: 'Contact Details', icon: HiOutlinePhone }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f4f6f9', display: 'flex', flexDirection: 'column' }}>
      <AdminHeaderNav
        setShowSyncModal={setShowSyncModal}
        handleReset={handleReset}
        handleLogout={handleLogout}
      />

      <div style={{ display: 'flex', flex: 1, padding: '28px', gap: '28px', maxWidth: '1480px', width: '100%', margin: '0 auto' }}>
        <AdminSidebarNav
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <main key={activeTab} className="uipro-fade-in" style={{ flex: 1, background: '#ffffff', borderRadius: '16px', padding: '32px', boxShadow: '0 8px 30px rgba(0,0,0,0.03)', border: '1.5px solid #e2e8f0' }}>
          {activeTab === 'leads' && <LeadsManager />}
          {activeTab === 'hero' && <HeroManager />}
          {activeTab === 'courses' && <CourseManager />}
          {activeTab === 'platform' && <PlatformManager />}
          {activeTab === 'support' && <SupportCardsManager />}
          {activeTab === 'outcomes' && <GraduateOutcomesManager />}
          {activeTab === 'mentors' && <SeniorMentorsManager />}
          {activeTab === 'videos' && <VideoReviewsManager />}
          {activeTab === 'testimonials' && <TestimonialsManager />}
          {activeTab === 'popup' && <PopupManager />}
          {activeTab === 'faq' && <FaqManager />}
          {activeTab === 'contact' && <ContactInfoManager />}
        </main>
      </div>

      <AdminSyncModal
        showSyncModal={showSyncModal}
        setShowSyncModal={setShowSyncModal}
        buildSyncUrl={buildSyncUrl}
        handleCopySyncLink={handleCopySyncLink}
        copiedSyncLink={copiedSyncLink}
        currentExportData={currentExportData}
        handleCopyJson={handleCopyJson}
        copiedJson={copiedJson}
      />
    </div>
  );
}
