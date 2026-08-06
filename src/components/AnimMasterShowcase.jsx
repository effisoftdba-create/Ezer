import React from 'react';
import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion';
import { HiShieldCheck, HiAcademicCap, HiLightningBolt, HiArrowRight, HiCheckCircle } from 'react-icons/hi';

const animFeatures = [
  {
    id: 'labs',
    icon: <HiLightningBolt size={24} />,
    title: "Real-Time Cloud Labs",
    desc: "Instant access to AWS, Docker, & Kubernetes sandbox environments with automated grading.",
    tag: "Live Interactive"
  },
  {
    id: 'mentorship',
    icon: <HiAcademicCap size={24} />,
    title: "1-on-1 Senior Mentorship",
    desc: "Direct code reviews & architecture guidance from principal engineers working at FAANG.",
    tag: "Corporate Expert"
  },
  {
    id: 'shield',
    icon: <HiShieldCheck size={24} />,
    title: "1-Year Career Safety Net",
    desc: "Post-hiring workplace onboarding support, resume optimization, and unlimited referral loops.",
    tag: "Guaranteed Guidance"
  }
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export default function AnimMasterShowcase({ 
  onOpenDemoModal,
  title = "Next-Gen Interactive Learning Platform",
  subtitle = "Experience high-performance, hands-on tech education powered by real-time corporate lab simulations.",
  logoSrc = `${import.meta.env.BASE_URL || '/'}images/logo_white_border.png`
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section 
        aria-label="Interactive Platform Features"
        style={{
          background: 'linear-gradient(135deg, #000648 0%, #030c5e 100%)',
          padding: '72px 0',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
          borderTop: '3px solid #f2b733',
          borderBottom: '3px solid #f2b733'
        }}
      >
        {/* Subtle Animated Background Glow */}
        <div 
          aria-hidden="true"
          style={{
            position: 'absolute', top: '-100px', right: '-100px',
            width: '350px', height: '350px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(242, 183, 51, 0.12) 0%, rgba(0, 6, 72, 0) 70%)',
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Header Block with New Logo Shield & White Background Badge for Clear Visibility */}
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(242, 183, 51, 0.12)', border: '1.5px solid rgba(242, 183, 51, 0.4)', padding: '6px 18px', borderRadius: '50px', marginBottom: '16px' }}>
              <img 
                src={logoSrc} 
                alt="EZER Official Shield Logo" 
                style={{ width: '26px', height: '26px', objectFit: 'contain', mixBlendMode: 'screen' }} 
              />
              <span style={{ color: '#f2b733', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                EZER TECH LEARNING ENGINE
              </span>
            </div>

            <h2 style={{ color: '#ffffff', fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', fontWeight: 900, lineHeight: 1.25, marginBottom: '12px' }}>
              {title}
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.96rem', maxWidth: '640px', margin: '0 auto', lineHeight: 1.6 }}>
              {subtitle}
            </p>
          </div>

          {/* Animated Features Grid */}
          <m.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
              gap: '24px'
            }}
          >
            {animFeatures.map((feat) => (
              <m.div
                key={feat.id}
                variants={itemVariants}
                className="ezer-solution-card"
              >
                {/* Hover Expanding Color Bubble Background */}
                <div className="hover_color_bubble" />

                <div style={{ position: 'relative', zIndex: 2 }}>
                  {/* Top Badge & Icon */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                    <div 
                      className="so_top_icon"
                      style={{
                        width: '48px', height: '48px', borderRadius: '12px',
                        background: '#000648', border: '2px solid #f2b733',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#f2b733', boxShadow: '0 4px 12px rgba(0, 6, 72, 0.25)',
                        transition: 'background-color 0.4s ease, color 0.4s ease, border-color 0.4s ease'
                      }}
                    >
                      {feat.icon}
                    </div>

                    <span style={{
                      fontSize: '0.68rem', fontWeight: 800, color: '#f2b733',
                      background: 'rgba(0, 6, 72, 0.85)', border: '1px solid #f2b733',
                      padding: '3px 10px', borderRadius: '50px', textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      {feat.tag}
                    </span>
                  </div>

                  <div className="solu_title">
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#000648', marginBottom: '10px', transition: 'color 0.4s ease' }}>
                      {feat.title}
                    </h3>
                  </div>

                  <div className="solu_description">
                    <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.65, margin: 0, transition: 'color 0.4s ease' }}>
                      {feat.desc}
                    </p>
                  </div>
                </div>

                <div style={{ position: 'relative', zIndex: 2, marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(0, 6, 72, 0.12)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', fontWeight: 800, color: '#f2b733' }}>
                  <HiCheckCircle size={16} /> Accelerated Learning Track
                </div>
              </m.div>
            ))}
          </m.div>

          {/* Call to Action */}
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <m.button
              whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
              type="button"
              onClick={onOpenDemoModal}
              style={{
                background: '#f2b733', color: '#000648',
                padding: '14px 32px', borderRadius: '10px',
                fontSize: '0.94rem', fontWeight: 900, border: 'none',
                cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '10px',
                boxShadow: '0 6px 20px rgba(242, 183, 51, 0.4)'
              }}
            >
              Experience Live Cohort Demo <HiArrowRight size={18} />
            </m.button>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
