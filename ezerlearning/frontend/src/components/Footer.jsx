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
    <footer style={{ background: '#000648', color: '#fff', paddingTop: '36px', paddingBottom: '16px', borderTop: '1px solid rgba(242, 183, 51, 0.3)', contain: 'layout style' }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '28px', marginBottom: '24px',
        }}>
          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', marginBottom: '14px' }}>
              <img 
                src={`${import.meta.env.BASE_URL || '/'}images/ezer_full_logo_dark.png`} 
                alt="EZER Learning Solution Logo" 
                width="175"
                height="52"
                loading="lazy"
                decoding="async"
                style={{ height: '48px', width: 'auto', objectFit: 'contain', flexShrink: 0, display: 'block', filter: 'drop-shadow(0 2px 10px rgba(0, 0, 0, 0.4))' }} 
              />
            </Link>

            <p style={{ fontSize: '0.78rem', lineHeight: 1.55, color: '#cbd5e1', marginBottom: '14px', maxWidth: '320px' }}>
              Live online, practical, job-oriented IT training with pre- and post-employment placement support for up to 1 year.
            </p>
            
            <div style={{ display: 'flex', gap: '10px' }}>
              {socialLinks.map(({ name, Icon, url }) => (
                <a
                  key={name}
                  href={url}
                  target={url !== '#' ? '_blank' : '_self'}
                  rel={url !== '#' ? 'noopener noreferrer' : ''}
                  aria-label={name}
                  style={{
                    color: '#000648', background: '#f2b733',
                    width: '38px', height: '38px', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.9rem', transition: 'background-color 0.2s ease, transform 0.2s ease', textDecoration: 'none'
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
            <h3 style={{ color: '#f2b733', fontSize: '0.82rem', fontWeight: 800, marginBottom: '12px', borderLeft: '3px solid #f2b733', paddingLeft: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Live Programs
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.78rem', padding: 0, margin: 0, listStyle: 'none' }}>
              <li>
                <Link to="/courses/ai-machine-learning" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f2b733'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                >
                  AI/ML
                </Link>
              </li>
              <li>
                <Link to="/courses/full-stack-dev-ai" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f2b733'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                >
                  Full Stack Development with AI
                </Link>
              </li>
              <li>
                <Link to="/courses/data-analyst" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f2b733'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                >
                  Data Analyst
                </Link>
              </li>
              <li>
                <Link to="/courses/cloud-devops-ai" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f2b733'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                >
                  Cloud DevOps with AI
                </Link>
              </li>
              <li>
                <Link to="/courses/cyber-security" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f2b733'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                >
                  Cyber Security
                </Link>
              </li>
              <li>
                <Link to="/courses/spoken-english" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s' }}
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
            <h3 style={{ color: '#f2b733', fontSize: '0.82rem', fontWeight: 800, marginBottom: '12px', borderLeft: '3px solid #f2b733', paddingLeft: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Navigation
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.78rem', padding: 0, margin: 0, listStyle: 'none' }}>
              <li>
                <Link to="/about" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f2b733'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f2b733'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                >
                  All Courses
                </Link>
              </li>
              <li>
                <Link to="/testimonials" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f2b733'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/blog" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f2b733'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                >
                  Blogs & Awards
                </Link>
              </li>
              <li>
                <Link to="/faq" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f2b733'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s' }}
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
            <h3 style={{ color: '#f2b733', fontSize: '0.82rem', fontWeight: 800, marginBottom: '12px', borderLeft: '3px solid #f2b733', paddingLeft: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Contact
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.78rem', color: '#cbd5e1' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <HiLocationMarker style={{ color: '#f2b733', flexShrink: 0, marginTop: '2px' }} size={15} />
                <span>Plot No: 90, 3rd Cross Street, Phase-2, Thirumalai Nagar Annexe, Perungudi, Chennai - 600096, Tamil Nadu, India</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <HiPhone style={{ color: '#f2b733', flexShrink: 0 }} size={15} />
                <a href="tel:+919876543210" style={{ color: '#cbd5e1', textDecoration: 'none' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f2b733'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                >
                  +91 98765 43210
                </a>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <HiMail style={{ color: '#f2b733', flexShrink: 0 }} size={15} />
                <a href="mailto:info@ezerlearning.com" style={{ color: '#cbd5e1', textDecoration: 'none' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f2b733'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                >
                  info@ezerlearning.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Optimized Compact Footer Bottom Bar */}
        <div className="footer-bottom-bar" style={{
          paddingTop: '16px',
          borderTop: '1px solid rgba(242,183,51,0.25)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '10px 20px',
          fontSize: '0.78rem',
          color: '#cbd5e1',
          width: '100%'
        }}>
          <div className="footer-copyright" style={{ color: '#cbd5e1', fontSize: '0.78rem' }}>
            &copy; 2026 EZER Learning Solutions. All rights reserved.
          </div>

          <div className="footer-dev-credit" style={{ fontSize: '0.74rem', color: '#cbd5e1' }}>
            Developed by <a href="https://effisoft.co/" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'underline' }}>Effisoft Technologies</a>
          </div>

          <div className="footer-policy-links" style={{ display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link to="/privacy-policy" style={{ color: '#f2b733', textDecoration: 'none', fontWeight: 600, fontSize: '0.78rem' }}
              onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
            >
              Privacy Policy
            </Link>
            <span style={{ color: 'rgba(242,183,51,0.4)', fontSize: '0.75rem' }}>|</span>
            <Link to="/student-admission-policy" style={{ color: '#f2b733', textDecoration: 'none', fontWeight: 600, fontSize: '0.78rem' }}
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


