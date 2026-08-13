import React from 'react';
import CarouselDotsNav from '../CarouselDotsNav';

export default function HeroSlideNav({ slides = [], safeActive = 0, handlePrev, handleNext, setActive }) {
  return (
    <div style={{ marginTop: 'auto', width: '100%' }}>
      <CarouselDotsNav
        totalItems={slides.length}
        activeIndex={safeActive}
        onPrev={handlePrev}
        onNext={handleNext}
        onSelectIndex={setActive}
        style={{ margin: '14px auto 0' }}
      />
    </div>
  );
}
