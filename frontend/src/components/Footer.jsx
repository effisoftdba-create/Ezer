import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const socialLinks = [
  { name: 'Facebook', Icon: FaFacebook, url: '#' },
  { name: 'Instagram', Icon: FaInstagram, url: 'https://www.instagram.com/ezerlearning?igsh=eHZ1Y3NyOHF5NGY3' },
  { name: 'LinkedIn', Icon: FaLinkedin, url: 'https://www.linkedin.com/company/ezer-learning-solutions/' },
  { name: 'YouTube', Icon: FaYoutube, url: '#' },
  { name: 'Twitter', Icon: FaTwitter, url: '#' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#000648', color: '#fff', paddingTop: '48px', paddingBottom: '24px', borderTop: '1px solid rgba(242, 183, 51, 0.3)', minHeight: '380px', contain: 'layout style' }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '32px', marginBottom: '36px',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <img 
                src={`${import.meta.env.BASE_URL || '/'}images/logo_white_border.png`} 
                alt="EZER Learning Solutions Crest Logo" 
                width="160"
                height="46"
                loading="lazy"
                decoding="async"
                style={{ height: '46px', width: 'auto', aspectRatio: '160/46', objectFit: 'contain', mixBlendMode: 'screen' }} 
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1 }}>
                  EZER
                </span>
                <span style={{ fontSize: '0.6rem', fontWeight: 800, color: '#f2b733', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '2px' }}>
                  Learning Solutions
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.78rem', lineHeight: 1.6, color: '#cbd5e1', marginBottom: '16px' }}>
              Live online, practical, job-oriented IT training with pre- and post-employment placement support for up to 1 year.
            </p>
            
            <div style={{ display: 'flex', gap: '12px' }}>
              {socialLinks.map(({ name, Icon, url }) => (
                <a
                  key={name}
                  href={url}
                  target={url !== '#' ? '_blank' : '_self'}
                  rel={url !== '#' ? 'noopener noreferrer' : ''}
                  aria-label={name}
                  style={{
                    color: '#000648', background: '#f2b733',
                    width: '44px', height: '44px', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.95rem', transition: 'background-color 0.2s ease, transform 0.2s ease', textDecoration: 'none'
                  }} 
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#ffffff';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#f2b733';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {Icon ? <Icon /> : null}
                </a>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 style={{ color: '#f2b733', fontSize: '0.85rem', fontWeight: 800, marginBottom: '14px', borderLeft: '3px solid #f2b733', paddingLeft: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Live Programs
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.8rem' }}>
              <li>
                <Link to="/courses/ai-machine-learning" style={{ color: '#cbd5e1', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f2b733'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                >
                  AI/ML
                </Link>
              </li>
              <li>
                <Link to="/courses/full-stack-dev-ai" style={{ color: '#cbd5e1', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f2b733'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                >
                  Full Stack Development with AI
                </Link>
              </li>
              <li>
                <Link to="/courses/data-analyst" style={{ color: '#cbd5e1', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f2b733'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                >
                  Data Analyst
                </Link>
              </li>
              <li>
                <Link to="/courses/cloud-devops-ai" style={{ color: '#cbd5e1', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f2b733'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                >
                  Cloud DevOps with AI
                </Link>
              </li>
              <li>
                <Link to="/courses/cyber-security" style={{ color: '#cbd5e1', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f2b733'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                >
                  Cyber Security
                </Link>
              </li>
              <li>
                <Link to="/courses/spoken-english" style={{ color: '#cbd5e1', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f2b733'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                >
                  Spoken English (International Standard)
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ color: '#f2b733', fontSize: '0.85rem', fontWeight: 800, marginBottom: '14px', borderLeft: '3px solid #f2b733', paddingLeft: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Navigation
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.8rem' }}>
              <li>
                <Link to="/about" style={{ color: '#cbd5e1', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f2b733'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" style={{ color: '#cbd5e1', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f2b733'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                >
                  All Courses
                </Link>
              </li>
              <li>
                <Link to="/testimonials" style={{ color: '#cbd5e1', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f2b733'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/blog" style={{ color: '#cbd5e1', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f2b733'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                >
                  Blogs & Awards
                </Link>
              </li>
              <li>
                <Link to="/faq" style={{ color: '#cbd5e1', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f2b733'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: '#cbd5e1', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f2b733'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#f2b733', fontSize: '0.85rem', fontWeight: 800, marginBottom: '14px', borderLeft: '3px solid #f2b733', paddingLeft: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.8rem', color: '#cbd5e1' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <HiLocationMarker style={{ color: '#f2b733', flexShrink: 0, marginTop: '2px' }} size={16} />
                <span>Plot No: 90, 3rd Cross Street, Phase-2, Thirumalai Nagar Annexe, Perungudi, Chennai - 600096, Tamil Nadu, India</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <HiPhone style={{ color: '#f2b733', flexShrink: 0 }} size={16} />
                <a href="tel:+919876543210" style={{ color: '#cbd5e1' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f2b733'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                >
                  +91 98765 43210
                </a>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <HiMail style={{ color: '#f2b733', flexShrink: 0 }} size={16} />
                <a href="mailto:info@ezerlearning.com" style={{ color: '#cbd5e1' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f2b733'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                >
                  info@ezerlearning.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar" style={{
          paddingTop: '20px',
          borderTop: '1px solid rgba(242,183,51,0.2)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '14px',
          fontSize: '0.78rem',
          color: '#cbd5e1',
          width: '100%'
        }}>
          {/* Left Side Corner / Mobile Centered */}
          <div className="footer-copyright" style={{ color: '#cbd5e1', flex: '1 1 280px' }}>
            &copy; 2026 EZER Learning Solutions. All rights reserved.
          </div>

          {/* Center Area / Small Normal White Effisoft Credit */}
          <div className="footer-dev-credit" style={{ fontSize: '0.68rem', color: '#cbd5e1', fontWeight: 400, flex: '1 1 200px' }}>
            Developed by <a href="https://effisoft.co/" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', fontWeight: 400, fontSize: '0.68rem', textDecoration: 'underline' }}>Effisoft Technologies</a>
          </div>

          {/* Right Side Corner / Policy Links */}
          <div className="footer-policy-links" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', flex: '1 1 300px' }}>
            <Link to="/privacy-policy" style={{ color: '#f2b733', textDecoration: 'none', fontWeight: 600 }}
              onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
            >
              Privacy Policy
            </Link>
            <Link to="/student-admission-policy" style={{ color: '#f2b733', textDecoration: 'none', fontWeight: 600 }}
              onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
            >
              Student Admission Policy &amp; Agreement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

