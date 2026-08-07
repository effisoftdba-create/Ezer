import React, { useState, useEffect, useRef } from 'react';
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
import BlogManager from '../components/BlogManager';
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
  HiOutlineMailOpen,
  HiOutlineNewspaper
} from 'react-icons/hi';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('leads');
  const mainRef = useRef(null);

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
    blogs,
    achievements,
    executiveLeaders,
    resetToDefault
  } = useSiteData();

  const isAuth = isAuthenticated();

  useEffect(() => {
    if (!isAuth) {
      const timer = setTimeout(() => navigate('/admin/login'), 2500);
      return () => clearTimeout(timer);
    }
  }, [isAuth, navigate]);

  // Reset main content scroll position on tab click/change
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeTab]);

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

  const totalFaqs = (faqList || []).reduce((acc, cat) => acc + (cat.items?.length || 0), 0);

  const tabs = [
    { id: 'leads', label: 'Lead Submissions', icon: HiOutlineMailOpen, count: (leads || []).length },
    { id: 'hero', label: 'Hero Slider', icon: HiOutlinePhotograph, count: (heroSlides || []).length },
    { id: 'courses', label: 'Course Catalog', icon: HiOutlineAcademicCap, count: (courses || []).length },
    { id: 'platform', label: 'Empowering Switchers', icon: HiOutlineSparkles },
    { id: 'support', label: 'Why EZER Support', icon: HiOutlineBadgeCheck, count: (supportCards || []).length },
    { id: 'executive', label: 'Executive Board (CEO / Leaders)', icon: HiOutlineUserGroup, count: (executiveLeaders || []).length },
    { id: 'blog', label: 'Blog & Magazine Articles', icon: HiOutlineNewspaper, count: (blogs || []).length },
    { id: 'achievements', label: 'EZER Awards & Honors', icon: HiOutlineBadgeCheck, count: (achievements || []).length },
    { id: 'outcomes', label: 'Graduate Outcomes', icon: HiOutlineUserGroup, count: (transformedLives || []).length },
    { id: 'mentors', label: 'Senior Mentors', icon: HiOutlineUser, count: (seniorMentors || []).length },
    { id: 'videos', label: 'Video Reviews', icon: HiOutlineVideoCamera, count: (videoTestimonials || []).length },
    { id: 'testimonials', label: 'Testimonials Page', icon: HiOutlineChatAlt, count: (writtenTestimonials || []).length },
    { id: 'popup', label: 'Lead Popup Modal', icon: HiOutlineTemplate },
    { id: 'faq', label: 'FAQ Manager', icon: HiOutlineQuestionMarkCircle, count: totalFaqs },
    { id: 'contact', label: 'Contact Details', icon: HiOutlinePhone }
  ];

  return (
    <div style={{ height: '100vh', maxHeight: '100vh', background: '#f4f6f9', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ flexShrink: 0 }}>
        <AdminHeaderNav
          handleReset={handleReset}
          handleLogout={handleLogout}
        />
      </div>

      <div style={{ display: 'flex', flex: 1, height: 'calc(100vh - 72px)', overflow: 'hidden', padding: '24px', gap: '24px', maxWidth: '1540px', width: '100%', margin: '0 auto' }}>
        <AdminSidebarNav
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <main ref={mainRef} key={activeTab} className="uipro-fade-in" style={{ flex: 1, height: '100%', overflowY: 'auto', background: '#ffffff', borderRadius: '16px', padding: '32px', boxShadow: '0 8px 30px rgba(0,0,0,0.03)', border: '1.5px solid #e2e8f0' }}>
          {activeTab === 'leads' && <LeadsManager />}
          {activeTab === 'hero' && <HeroManager />}
          {activeTab === 'courses' && <CourseManager />}
          {activeTab === 'platform' && <PlatformManager />}
          {activeTab === 'support' && <SupportCardsManager />}
          {activeTab === 'executive' && <BlogManager initialSubTab="executive" />}
          {activeTab === 'blog' && <BlogManager initialSubTab="blogs" />}
          {activeTab === 'achievements' && <BlogManager initialSubTab="achievements" />}
          {activeTab === 'outcomes' && <GraduateOutcomesManager />}
          {activeTab === 'mentors' && <SeniorMentorsManager />}
          {activeTab === 'videos' && <VideoReviewsManager />}
          {activeTab === 'testimonials' && <TestimonialsManager />}
          {activeTab === 'popup' && <PopupManager />}
          {activeTab === 'faq' && <FaqManager />}
          {activeTab === 'contact' && <ContactInfoManager />}
        </main>
      </div>
    </div>
  );
}
