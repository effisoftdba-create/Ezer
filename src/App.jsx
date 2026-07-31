import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState('');
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Timed Lead Registration Popup (Triggers 60 seconds after landing)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 60000); // 60 Seconds delay auto-popup

    return () => clearTimeout(timer);
  }, []);

  const handleOpenDemoModal = (courseName = '') => {
    setSelectedCourseForModal(courseName);
    setIsPopupOpen(true);
  };

  const handleCloseModal = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar onOpenDemoModal={() => handleOpenDemoModal()} />

      <main style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home onOpenDemoModal={handleOpenDemoModal} />} />
          <Route path="/about" element={<About onOpenDemoModal={handleOpenDemoModal} />} />
          <Route path="/courses" element={<Courses onOpenDemoModal={handleOpenDemoModal} />} />
          <Route path="/courses/:slug" element={<CourseDetail onOpenDemoModal={handleOpenDemoModal} />} />
          <Route path="/testimonials" element={<TestimonialsPage onOpenDemoModal={handleOpenDemoModal} />} />
          <Route path="/faq" element={<FAQPage onOpenDemoModal={handleOpenDemoModal} />} />
          <Route path="/contact" element={<Contact onOpenDemoModal={handleOpenDemoModal} />} />
        </Routes>
      </main>

      <Footer />

      <PopupForm
        isOpen={isPopupOpen}
        onClose={handleCloseModal}
        preselectedCourse={selectedCourseForModal}
      />
    </div>
  );
}
