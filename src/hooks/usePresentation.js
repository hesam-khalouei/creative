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
      const target = event.target;

      if (
        target instanceof HTMLElement &&
        (target.isContentEditable ||
          ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName))
      ) {
        return;
      }

      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case 'PageDown':
          event.preventDefault();
          nextSlide();
          break;

        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          event.preventDefault();
          previousSlide();
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
