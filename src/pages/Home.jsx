import React from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import TrendingSkills from '../components/TrendingSkills';
import CompanyLogos from '../components/CompanyLogos';
import WhyEzer from '../components/WhyEzer';
import TransformedLives from '../components/TransformedLives';
import VideoTestimonials from '../components/VideoTestimonials';
import CTABanner from '../components/CTABanner';

export default function Home({ onOpenDemoModal }) {
  return (
    <div>
      <Hero onOpenDemoModal={onOpenDemoModal} />
      <TrustBar />
      <CompanyLogos />
      <TrendingSkills onOpenDemoModal={onOpenDemoModal} />
      <WhyEzer />
      <TransformedLives />
      <VideoTestimonials />
      <CTABanner onOpenDemoModal={onOpenDemoModal} />
    </div>
  );
}
