import React from 'react';
import TransformedLives from '../components/TransformedLives';
import VideoTestimonials from '../components/VideoTestimonials';
import CTABanner from '../components/CTABanner';
import CompanyLogos from '../components/CompanyLogos';
import TestimonialsHero from '../components/testimonials/TestimonialsHero';
import TestimonialsSliderTrack from '../components/testimonials/TestimonialsSliderTrack';

export default function Testimonials({ onOpenDemoModal }) {
  return (
    <div>
      <TestimonialsHero onOpenDemoModal={onOpenDemoModal} />
      <CompanyLogos />
      <TransformedLives />
      <TestimonialsSliderTrack />
      <VideoTestimonials />
      <CTABanner onOpenDemoModal={onOpenDemoModal} />
    </div>
  );
}
