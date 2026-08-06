import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { SiteProvider } from './Admin_Control/context/SiteContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PopupForm from './components/PopupForm';
import UIStateDisplay, { STATE_TYPES } from './components/UIStateDisplay';
import UIToastNotifier from './components/UIToastNotifier';
import EzerBrandPreloader from './components/EzerBrandPreloader';

// Dynamic Code Splitting with React.lazy
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Courses = lazy(() => import('./pages/Courses'));
const CourseDetail = lazy(() => import('./pages/CourseDetail'));
const TestimonialsPage = lazy(() => import('./pages/Testimonials'));
const FAQPage = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const StudentAdmissionPolicy = lazy(() => import('./pages/StudentAdmissionPolicy'));
const Blog = lazy(() => import('./pages/Blog'));

const AdminLogin = lazy(() => import('./Admin_Control/pages/AdminLogin'));
const AdminDashboard = lazy(() => import('./Admin_Control/pages/AdminDashboard'));

// Page Loading Fallback Spinner
function PageLoader() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      width: '100%',
      gap: '16px',
    }}>
      <div style={{
        width: '44px',
        height: '44px',
        border: '4px solid #e2e8f0',
        borderTop: '4px solid #000648',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }} />
      <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#000648', letterSpacing: '0.04em' }}>
        Loading EZER Learning Solutions...
      </span>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState('');
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const location = useLocation();

  // Network Online / Offline Detection for UI Feedback State
  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Robust Admin Route Detection across HashRouter, Query params (?/admin/login), and Pathnames
  const fullSearch = typeof window !== 'undefined' ? window.location.search : '';
  const fullHash = typeof window !== 'undefined' ? window.location.hash : '';
  const fullPath = location.pathname;

  const isSearchAdmin = fullSearch.includes('admin');
  const isHashAdmin = fullHash.includes('admin');
  const isPathAdmin = fullPath.startsWith('/admin') || fullPath.includes('admin');

  const isAdminRoute = isPathAdmin || isHashAdmin || isSearchAdmin;
  const isDashboardRoute = fullSearch.includes('dashboard') || fullHash.includes('dashboard') || fullPath.includes('dashboard');

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Timed Lead Registration Popup (Triggers 60 seconds after landing on public pages)
  useEffect(() => {
    if (isAdminRoute) return;
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, [isAdminRoute]);

  const handleOpenDemoModal = (courseName = '') => {
    setSelectedCourseForModal(courseName);
    setIsPopupOpen(true);
  };

  const handleCloseModal = () => {
    setIsPopupOpen(false);
  };

  return (
    <SiteProvider>
      <EzerBrandPreloader />
      <UIToastNotifier />
      <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Global Offline Network Status Banner */}
        {isOffline && (
          <div style={{ position: 'sticky', top: 0, zIndex: 10000 }}>
            <UIStateDisplay
              type={STATE_TYPES.NO_INTERNET}
              onRetry={() => setIsOffline(!navigator.onLine)}
              actionLabel="Check Network Again"
            />
          </div>
        )}

        {!isAdminRoute && <Navbar onOpenDemoModal={() => handleOpenDemoModal()} />}

        <main style={{ flexGrow: 1 }}>
          <Suspense fallback={<PageLoader />}>
            {isAdminRoute ? (
              isDashboardRoute ? (
                <AdminDashboard />
              ) : (
                <AdminLogin />
              )
            ) : (
              <Routes>
                <Route path="/" element={<Home onOpenDemoModal={handleOpenDemoModal} />} />
                <Route path="/about" element={<About onOpenDemoModal={handleOpenDemoModal} />} />
                <Route path="/courses" element={<Courses onOpenDemoModal={handleOpenDemoModal} />} />
                <Route path="/courses/:slug" element={<CourseDetail onOpenDemoModal={handleOpenDemoModal} />} />
                <Route path="/testimonials" element={<TestimonialsPage onOpenDemoModal={handleOpenDemoModal} />} />
                <Route path="/faq" element={<FAQPage onOpenDemoModal={handleOpenDemoModal} />} />
                <Route path="/blog" element={<Blog onOpenDemoModal={handleOpenDemoModal} />} />
                <Route path="/contact" element={<Contact onOpenDemoModal={handleOpenDemoModal} />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy onOpenDemoModal={handleOpenDemoModal} />} />
                <Route path="/student-admission-policy" element={<StudentAdmissionPolicy onOpenDemoModal={handleOpenDemoModal} />} />

                {/* Isolated Admin Routes fallback */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/dashboard/*" element={<AdminDashboard />} />
                <Route path="/admin" element={<AdminLogin />} />
              </Routes>
            )}
          </Suspense>
        </main>

        {!isAdminRoute && <Footer />}

        {!isAdminRoute && (
          <PopupForm
            isOpen={isPopupOpen}
            onClose={handleCloseModal}
            preselectedCourse={selectedCourseForModal}
          />
        )}
      </div>
    </SiteProvider>
  );
}
