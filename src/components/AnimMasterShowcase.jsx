import React from 'react';
import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion';
import { HiShieldCheck, HiAcademicCap, HiLightningBolt, HiArrowRight, HiCheckCircle } from 'react-icons/hi';

export default function AnimMasterShowcase({ 
  onOpenDemoModal,
  title = "Next-Gen Interactive Learning Platform",
  subtitle = "Experience high-performance, hands-on tech education powered by real-time corporate lab simulations.",
  logoSrc = `${import.meta.env.BASE_URL || '/'}images/ezer_shield_logo.png`
}) {
  const shouldReduceMotion = useReducedMotion();

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
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
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
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

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
          {/* Header Block with New Logo Shield */}
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(242, 183, 51, 0.12)', border: '1.5px solid rgba(242, 183, 51, 0.4)', padding: '6px 18px', borderRadius: '50px', marginBottom: '16px' }}>
              <img 
                src={logoSrc} 
                alt="EZER Official Shield Logo" 
                style={{ width: '22px', height: '22px', objectFit: 'contain' }} 
              />
              <span style={{ color: '#f2b733', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                ANIMMASTER ENGINE • EZER TECH
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
                whileHover={shouldReduceMotion ? {} : { y: -6, borderColor: '#f2b733', boxShadow: '0 12px 30px rgba(0, 6, 72, 0.5)' }}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(8px)',
                  border: '1.5px solid rgba(242, 183, 51, 0.25)',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
                }}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                    <div style={{
                      width: '48px', height: '48px', borderRadius: '12px',
                      background: '#000648', border: '2px solid #f2b733',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#f2b733', boxShadow: '0 4px 12px rgba(242, 183, 51, 0.25)'
                    }}>
                      {feat.icon}
                    </div>

                    <span style={{
                      fontSize: '0.68rem', fontWeight: 800, color: '#f2b733',
                      background: 'rgba(242, 183, 51, 0.15)', border: '1px solid rgba(242, 183, 51, 0.4)',
                      padding: '3px 10px', borderRadius: '50px', textTransform: 'uppercase'
                    }}>
                      {feat.tag}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
                    {feat.title}
                  </h3>
                  <p style={{ fontSize: '0.86rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6, margin: 0 }}>
                    {feat.desc}
                  </p>
                </div>

                <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', fontWeight: 700, color: '#f2b733' }}>
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
