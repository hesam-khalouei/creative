import React from 'react';

function SlideContainer({
  children,
  slideNumber,
  totalSlides,
  className = '',
  eyebrow,
  title,
  description,
}) {
  return (
    <section
      className={`slide ${className}`}
      aria-label={`اسلاید ${slideNumber} از ${totalSlides}`}
      aria-roledescription="اسلاید"
    >
      <div className="slide-inner">
        {eyebrow && (
          <div className="slide-eyebrow animate-slide-in">
            <span className="w-2 h-2 rounded-full bg-primary" />
            {eyebrow}
          </div>
        )}

        {title && (
          <h2 className="slide-title animate-slide-in animate-delay-1">
            {title}
          </h2>
        )}

        {description && (
          <p className="slide-description animate-slide-in animate-delay-2">
            {description}
          </p>
        )}

        <div className="slide-content animate-slide-in animate-delay-3">
          {children}
        </div>
      </div>
    </section>
  );
}

export default SlideContainer;
