import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX, HiPhone, HiChevronDown, HiSparkles, HiCloud, HiTerminal, HiChip, HiServer } from 'react-icons/hi';
import { phase1Courses } from '../data/courses';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Courses', path: '/courses', isDropdown: true },
  { name: 'About Us', path: '/about' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

const courseIcons = {
  'iitd-vlsi-design': <HiChip size={18} />,
  'cloud-devops-ai': <HiCloud size={18} />,
  'software-testing-playwright': <HiTerminal size={18} />,
  'ai-machine-learning': <HiSparkles size={18} />,
  'it-infrastructure-sysadmin': <HiServer size={18} />,
};

export default function Navbar({ onOpenDemoModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'sticky', top: 0, zIndex: 1000,
        background: '#ffffff',
        borderBottom: isScrolled ? '1px solid #e2e8f0' : '1px solid #f1f5f9',
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 6, 72, 0.08)' : 'none',
        transition: 'box-shadow 0.25s ease, border-bottom-color 0.25s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

        {/* Brand Logo (Removed "Incubated by IIT Madras" badge as requested) */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <img 
              src={`${import.meta.env.BASE_URL || '/'}logo.jpg`} 
              alt="EZER Learning Solutions" 
              style={{ height: '42px', width: 'auto', objectFit: 'contain', borderRadius: '4px' }} 
              onError={(e) => {
                // Fallback to text logo if image fails
                e.target.style.display = 'none';
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 900, color: '#000648', letterSpacing: '0.04em', lineHeight: 1 }}>
                EZER
              </span>
              <span style={{ fontSize: '0.62rem', fontWeight: 800, color: '#f2b733', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Learning Solutions
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.isDropdown && location.pathname.startsWith('/courses'));

            if (link.isDropdown) {
              return (
                <div key={link.name} style={{ position: 'relative' }}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link to={link.path} style={{
                    color: isActive ? '#000648' : '#334155',
                    fontWeight: isActive ? 800 : 600, fontSize: '0.85rem',
                    display: 'flex', alignItems: 'center', gap: '4px',
                    borderBottom: isActive ? '2px solid #f2b733' : '2px solid transparent',
                    padding: '8px 0', transition: 'color 0.15s ease, border-bottom-color 0.15s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#000648'; }}
                  onMouseLeave={(e) => { if(!isActive) e.currentTarget.style.color = '#334155'; }}
                  >
                    {link.name}
                    <HiChevronDown size={14} style={{
                      transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.2s ease', color: '#f2b733',
                    }} />
                  </Link>

                  {/* Enhanced Styled LIVE Classes Dropdown */}
                  {dropdownOpen && (
                    <div style={{
                      position: 'absolute', top: '100%', left: '-12px', width: '360px',
                      background: '#000648', border: '1.5px solid #f2b733', borderRadius: '12px',
                      boxShadow: '0 16px 40px rgba(0, 6, 72, 0.35)', padding: '12px', zIndex: 100,
                      animation: 'fadeIn 0.2s ease-in-out',
                    }}>
                      <div style={{
                        fontSize: '0.68rem', fontWeight: 800, color: '#f2b733',
                        padding: '6px 12px 10px', textTransform: 'uppercase', letterSpacing: '0.08em',
                        borderBottom: '1px solid rgba(242, 183, 51, 0.2)', marginBottom: '8px',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      }}>
                        <span>LIVE Cohort Programs</span>
                        <span style={{ fontSize: '0.6rem', background: '#f2b733', color: '#000648', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>2026 Batches</span>
                      </div>
                      
                      {phase1Courses.map((course) => {
                        const icon = courseIcons[course.slug] || <HiSparkles size={18} />;
                        return (
                          <Link key={course.id} to={`/courses/${course.slug}`}
                            onClick={() => { setDropdownOpen(false); setMobileMenuOpen(false); }}
                            style={{
                              display: 'flex', alignItems: 'flex-start', gap: '10px',
                              padding: '10px 12px', borderRadius: '8px',
                              transition: 'background-color 0.15s ease, border-left-color 0.15s ease, transform 0.15s ease', textDecoration: 'none',
                              borderLeft: '3px solid transparent',
                              marginBottom: '2px',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = 'rgba(242, 183, 51, 0.14)';
                              e.currentTarget.style.borderLeftColor = '#f2b733';
                              e.currentTarget.style.transform = 'translateX(2px)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'transparent';
                              e.currentTarget.style.borderLeftColor = 'transparent';
                              e.currentTarget.style.transform = 'translateX(0)';
                            }}
                          >
                            <div style={{
                              color: '#f2b733', marginTop: '2px', flexShrink: 0,
                              background: 'rgba(242, 183, 51, 0.15)', padding: '6px', borderRadius: '6px'
                            }}>
                              {icon}
                            </div>
                            <div>
                              <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.2 }}>
                                {course.title}
                              </div>
                              <div style={{ fontSize: '0.72rem', color: '#cbd5e1', marginTop: '3px', lineHeight: 1.3 }}>
                                {course.tagline}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link key={link.name} to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: isActive ? '#000648' : '#334155',
                  fontWeight: isActive ? 800 : 600, fontSize: '0.85rem',
                  borderBottom: isActive ? '2px solid #f2b733' : '2px solid transparent',
                  padding: '8px 0', transition: 'color 0.15s ease, border-bottom-color 0.15s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#000648'; }}
                onMouseLeave={(e) => { if(!isActive) e.currentTarget.style.color = '#334155'; }}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions with High-Contrast Hover Styles */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <button 
            type="button" 
            onClick={onOpenDemoModal} 
            className="btn btn-secondary"
            style={{
              padding: '9px 18px', fontSize: '0.8rem', fontWeight: 800,
              borderRadius: '7px', cursor: 'pointer',
            }}
          >
            Book Free Demo Class
          </button>

          <button 
            type="button" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={{ background: 'none', border: 'none', color: '#000648', display: 'none', cursor: 'pointer', padding: '4px' }}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{ background: '#000648', borderTop: '1px solid #f2b733', padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} onClick={() => setMobileMenuOpen(false)}
              style={{ color: location.pathname === link.path ? '#f2b733' : '#ffffff', fontWeight: 700, fontSize: '0.92rem', textDecoration: 'none' }}
            >
              {link.name}
            </Link>
          ))}
          <button 
            type="button" 
            onClick={() => { setMobileMenuOpen(false); onOpenDemoModal(); }}
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '6px', padding: '12px', borderRadius: '8px', fontWeight: 800, fontSize: '0.88rem' }}
          >
            Book Free Demo Class
          </button>
        </div>
      )}
    </header>
  );
}

