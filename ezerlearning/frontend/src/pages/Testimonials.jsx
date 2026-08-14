import React from 'react';
import TestimonialsHero from '../components/testimonials/TestimonialsHero';
import TestimonialsGrid from '../components/testimonials/TestimonialsGrid';
import TransformedLives from '../components/TransformedLives';
import VideoTestimonials from '../components/VideoTestimonials';
import CompanyLogos from '../components/CompanyLogos';
import CTABanner from '../components/CTABanner';

export default function Testimonials({ onOpenDemoModal }) {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      <TestimonialsHero onOpenDemoModal={onOpenDemoModal} />
      <CompanyLogos />
      <TestimonialsGrid />
      <TransformedLives />
      <VideoTestimonials />
      <CTABanner onOpenDemoModal={onOpenDemoModal} />
    </div>
  );
}
