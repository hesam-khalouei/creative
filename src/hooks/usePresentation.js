import { useState, useCallback, useEffect } from 'react';

function usePresentation(totalSlides) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = useCallback(
    (index) => {
      if (index < 0 || index >= totalSlides) return;

      setCurrentSlide(index);
    },
    [totalSlides],
  );

  const nextSlide = useCallback(() => {
    setCurrentSlide((current) => Math.min(current + 1, totalSlides - 1));
  }, [totalSlides]);

  const previousSlide = useCallback(() => {
    setCurrentSlide((current) => Math.max(current - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.repeat || event.defaultPrevented) return;

      const target = event.target;

      if (
        target instanceof HTMLElement &&
        target.closest(
          'input, textarea, select, button, a, [contenteditable="true"], [role="button"]',
        )
      ) {
        return;
      }

      const viewport = document.querySelector('.slide-viewport');

      const canScrollUp = viewport && viewport.scrollTop > 2;

      const canScrollDown =
        viewport &&
        viewport.scrollTop + viewport.clientHeight < viewport.scrollHeight - 2;

      switch (event.code) {
        case 'Space':
        case 'ArrowLeft':
          event.preventDefault();
          nextSlide();
          break;

        case 'ArrowRight':
          event.preventDefault();
          previousSlide();
          break;

        case 'ArrowUp':
        case 'PageUp':
          if (canScrollUp) return;

          event.preventDefault();
          previousSlide();
          break;

        case 'ArrowDown':
        case 'PageDown':
          if (canScrollDown) return;

          event.preventDefault();
          nextSlide();
          break;

        case 'Home':
          event.preventDefault();
          goToSlide(0);
          break;

        case 'End':
          event.preventDefault();
          goToSlide(totalSlides - 1);
          break;

        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [nextSlide, previousSlide, goToSlide, totalSlides]);

  return {
    currentSlide,
    totalSlides,
    nextSlide,
    previousSlide,
    goToSlide,

    isFirstSlide: currentSlide === 0,
    isLastSlide: currentSlide === totalSlides - 1,

    progress: totalSlides > 1 ? ((currentSlide + 1) / totalSlides) * 100 : 100,
  };
}

export default usePresentation;
