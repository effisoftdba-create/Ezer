import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { SiteProvider } from './Admin_Control/context/SiteContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PopupForm from './components/PopupForm';

import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import TestimonialsPage from './pages/Testimonials';
import FAQPage from './pages/FAQ';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import StudentAdmissionPolicy from './pages/StudentAdmissionPolicy';

import AdminLogin from './Admin_Control/pages/AdminLogin';
import AdminDashboard from './Admin_Control/pages/AdminDashboard';

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState('');
  const location = useLocation();

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
    }, 60000); // 60 Seconds delay auto-popup

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
      <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {!isAdminRoute && <Navbar onOpenDemoModal={() => handleOpenDemoModal()} />}

        <main style={{ flexGrow: 1 }}>
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
              <Route path="/contact" element={<Contact onOpenDemoModal={handleOpenDemoModal} />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy onOpenDemoModal={handleOpenDemoModal} />} />
              <Route path="/student-admission-policy" element={<StudentAdmissionPolicy onOpenDemoModal={handleOpenDemoModal} />} />

              {/* Isolated Admin Routes fallback */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard/*" element={<AdminDashboard />} />
              <Route path="/admin" element={<AdminLogin />} />
            </Routes>
          )}
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
