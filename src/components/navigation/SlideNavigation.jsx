import React from 'react';

function SlideNavigation({
  currentSlide,
  totalSlides,
  nextSlide,
  previousSlide,
  isFirstSlide,
  isLastSlide,
}) {
  return (
    <nav className="slide-navigation" aria-label="ناوبری اسلایدها">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="nav-button"
          onClick={previousSlide}
          disabled={isFirstSlide}
          aria-label="اسلاید قبلی"
          title="اسلاید قبلی"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <button
          type="button"
          className="nav-button"
          onClick={nextSlide}
          disabled={isLastSlide}
          aria-label="اسلاید بعدی"
          title="اسلاید بعدی"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

        <span className="text-xs text-white/60 numeric">
          {String(currentSlide + 1).padStart(2, '0')}
          {' / '}
          {String(totalSlides).padStart(2, '0')}
        </span>
      </div>

      <span className="hidden sm:block text-xs text-white/40 tracking-wider">
        CREATIVE & PRODUCT DESIGN
      </span>
    </nav>
  );
}

export default SlideNavigation;
