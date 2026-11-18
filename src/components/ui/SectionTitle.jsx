import React from 'react';

function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'right',
  accent = 'primary',
  compact = false,
}) {
  const accentClasses = {
    primary: 'bg-primary-300',
    secondary: 'bg-secondary',
  };

  const accentClass = accentClasses[accent] || accentClasses.primary;

  const alignmentClasses = {
    right: 'text-right items-start',
    center: 'text-center items-center',
    left: 'text-left items-end',
  };

  const alignmentClass = alignmentClasses[align] || alignmentClasses.right;

  return (
    <header
      className={`
        flex flex-col
        ${alignmentClass}
        ${compact ? 'gap-2' : 'gap-4'}
      `}
    >
      {eyebrow && (
        <div className="flex items-center gap-3">
          <span className={`w-8 h-[2px] rounded-full ${accentClass}`} />

          <span className="text-primary-200 text-xs sm:text-sm font-bold tracking-wide">
            {eyebrow}
          </span>
        </div>
      )}

      <h2
        className={`
          text-white font-black leading-[1.5]
          tracking-tight
          ${
            compact
              ? 'text-2xl md:text-4xl'
              : 'text-3xl md:text-5xl xl:text-6xl'
          }
        `}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`
            text-white/60 leading-8
            max-w-3xl
            ${compact ? 'text-sm md:text-base' : 'text-base md:text-lg'}
          `}
        >
          {description}
        </p>
      )}
    </header>
  );
}

export default SectionTitle;
