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
    <nav className="slide-navigation" aria-label="ناوبری اسلایدها" dir="ltr">
      {/* LEFT BUTTON: NEXT SLIDE */}
      <button
        type="button"
        className="nav-button nav-button-next"
        onClick={nextSlide}
        disabled={isLastSlide}
        aria-label="اسلاید بعدی"
        title="اسلاید بعدی"
      >
        <svg
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

      {/* CENTER: SLIDE COUNTER */}
      <span
        className="slide-counter numeric"
        aria-live="polite"
        aria-atomic="true"
        dir="ltr"
      >
        <span className="counter-current">
          {String(currentSlide + 1).padStart(2, '0')}
        </span>

        <span className="counter-divider" aria-hidden="true">
          /
        </span>

        <span className="counter-total">
          {String(totalSlides).padStart(2, '0')}
        </span>
      </span>

      {/* RIGHT BUTTON: PREVIOUS SLIDE */}
      <button
        type="button"
        className="nav-button nav-button-previous"
        onClick={previousSlide}
        disabled={isFirstSlide}
        aria-label="اسلاید قبلی"
        title="اسلاید قبلی"
      >
        <svg
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
    </nav>
  );
}

export default SlideNavigation;
