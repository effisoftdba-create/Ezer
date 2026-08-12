import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated, logoutAdmin, getCurrentAdminUser } from '../utils/authService';
import { useSiteData } from '../context/SiteContext';

import HeroManager from '../components/HeroManager';
import HiringPartnersManager from '../components/HiringPartnersManager';
import CourseManager from '../components/CourseManager';
import CoursePaymentManager from '../components/CoursePaymentManager';
import PaymentsReceivedManager from '../components/PaymentsReceivedManager';
import PlatformManager from '../components/PlatformManager';
import AboutVideoManager from '../components/AboutVideoManager';
import SupportCardsManager from '../components/SupportCardsManager';
import GraduateOutcomesManager from '../components/GraduateOutcomesManager';
import SeniorMentorsManager from '../components/SeniorMentorsManager';
import VideoReviewsManager from '../components/VideoReviewsManager';
import TestimonialsManager from '../components/TestimonialsManager';
import FaqManager from '../components/FaqManager';
import ContactInfoManager from '../components/ContactInfoManager';
import PopupManager from '../components/PopupManager';
import LeadsManager from '../components/LeadsManager';
import BlogManager, { ExecutiveSection } from '../components/BlogManager';
import AdminSettingsManager from '../components/AdminSettingsManager';
import AdminHeaderNav from '../components/AdminHeaderNav';
import AdminSidebarNav from '../components/AdminSidebarNav';
import './AdminDashboard.css';

import UIStateDisplay, { STATE_TYPES } from '../../../components/UIStateDisplay';
import {
  HiOutlinePhotograph,
  HiOutlineAcademicCap,
  HiOutlineCurrencyRupee,
  HiOutlineSwitchHorizontal,
  HiOutlineBadgeCheck,
  HiOutlineUserGroup,
  HiOutlineUser,
  HiOutlineVideoCamera,
  HiOutlineChatAlt,
  HiOutlineQuestionMarkCircle,
  HiOutlinePhone,
  HiOutlineTemplate,
  HiOutlineMailOpen,
  HiOutlineNewspaper,
  HiOutlineOfficeBuilding,
  HiOutlineCog
} from 'react-icons/hi';

class TabErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.warn('[Admin Tab Error Caught]:', error, info);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.tabId !== this.props.tabId && this.state.hasError) {
      this.setState({ hasError: false, error: null });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          background: '#ffffff', border: '1.5px solid #fecaca', borderRadius: '16px',
          padding: '36px 24px', textAlign: 'center', margin: '20px 0',
          boxShadow: '0 4px 12px rgba(220, 38, 38, 0.05)'
        }}>
          <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#dc2626', marginBottom: '8px' }}>
            Notice: Unable to display section contents
          </div>
          <p style={{ fontSize: '0.82rem', color: '#64748b', marginBottom: '16px', maxWidth: '440px', margin: '0 auto 16px' }}>
            A temporary data formatting glitch occurred. You can retry loading this section or select any other option from the sidebar navigation.
          </p>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false, error: null })}
            style={{
              padding: '8px 20px', background: '#000648', color: '#f2b733',
              border: 'none', borderRadius: '8px', fontWeight: 800, fontSize: '0.82rem', cursor: 'pointer'
            }}
          >
            Retry Loading Section
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function AdminDashboard() {
  const currentUser = getCurrentAdminUser();
  const isSuperAdmin = !currentUser || currentUser.role === 'SUPER_ADMIN' || currentUser.allowedTabs === '*';
  const allowedTabsSet = useMemo(
    () => new Set(Array.isArray(currentUser?.allowedTabs) ? currentUser.allowedTabs : []),
    [currentUser?.allowedTabs]
  );

  const [activeTab, setActiveTab] = useState(() => {
    if (isSuperAdmin) return 'leads';
    const firstAllowed = Array.from(allowedTabsSet)[0];
    return firstAllowed || 'leads';
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);
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
    hiringPartners,
    payments,
    adminUsers,
    updateExecutiveLeader,
    resetToDefault
  } = useSiteData();

  const isAuth = isAuthenticated();

  useEffect(() => {
    if (!isAuth) {
      const timer = setTimeout(() => navigate('/admin/login'), 2500);
      return () => clearTimeout(timer);
    }
  }, [isAuth, navigate]);

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

  const allTabs = [
    { id: 'leads', label: 'Lead Submissions', icon: HiOutlineMailOpen, count: (leads || []).length },
    { id: 'payments-received', label: 'Payments Received', icon: HiOutlineCurrencyRupee, count: (payments || []).length },
    { id: 'payment', label: 'Course Fees & Gateway Config', icon: HiOutlineCurrencyRupee },
    { id: 'courses', label: 'Course Catalog', icon: HiOutlineAcademicCap, count: (courses || []).length },
    { id: 'hero', label: 'Hero Slider', icon: HiOutlinePhotograph, count: (heroSlides || []).length },
    { id: 'partners', label: 'Hiring Partners & Logos', icon: HiOutlineOfficeBuilding, count: (hiringPartners || []).length },
    { id: 'platform', label: 'Empowering Switchers', icon: HiOutlineSwitchHorizontal },
    { id: 'about-videos', label: 'About Us Brand Videos (2 Links)', icon: HiOutlineVideoCamera },
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
    { id: 'contact', label: 'Contact Details', icon: HiOutlinePhone },
    { id: 'settings', label: 'Admin Settings & RBAC Users', icon: HiOutlineCog, count: (adminUsers || []).length }
  ];

  // Dynamically filter tabs visible to current logged-in user based on RBAC permissions
  const tabs = allTabs.filter((tab) => {
    if (isSuperAdmin) return true;
    return allowedTabsSet.has(tab.id);
  });

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setSidebarOpen(false);
  };

  return (
    <div className="admin-shell">
      <div style={{ flexShrink: 0 }}>
        <AdminHeaderNav
          handleReset={handleReset}
          handleLogout={handleLogout}
          onMenuClick={() => setSidebarOpen(true)}
        />
      </div>

      <div className="admin-body">
        <AdminSidebarNav
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={handleTabChange}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main ref={mainRef} key={activeTab} className="uipro-fade-in admin-main">
          <TabErrorBoundary tabId={activeTab}>
            {activeTab === 'leads' && <LeadsManager onNavigateToPayments={() => setActiveTab('payments-received')} />}
            {activeTab === 'payments-received' && <PaymentsReceivedManager />}
            {activeTab === 'payment' && <CoursePaymentManager />}
            {activeTab === 'hero' && <HeroManager />}
            {activeTab === 'partners' && <HiringPartnersManager />}
            {activeTab === 'courses' && <CourseManager />}
            {activeTab === 'platform' && <PlatformManager />}
            {activeTab === 'about-videos' && <AboutVideoManager />}
            {activeTab === 'support' && <SupportCardsManager />}
            {activeTab === 'executive' && <ExecutiveSection executiveLeaders={executiveLeaders} updateExecutiveLeader={updateExecutiveLeader} />}
            {activeTab === 'blog' && <BlogManager initialSubTab="blogs" hideSubTabs={true} />}
            {activeTab === 'achievements' && <BlogManager initialSubTab="achievements" hideSubTabs={true} />}
            {activeTab === 'outcomes' && <GraduateOutcomesManager />}
            {activeTab === 'mentors' && <SeniorMentorsManager />}
            {activeTab === 'videos' && <VideoReviewsManager />}
            {activeTab === 'testimonials' && <TestimonialsManager />}
            {activeTab === 'popup' && <PopupManager />}
            {activeTab === 'faq' && <FaqManager />}
            {activeTab === 'contact' && <ContactInfoManager />}
            {activeTab === 'settings' && <AdminSettingsManager />}
          </TabErrorBoundary>
        </main>
      </div>
    </div>
  );
}
