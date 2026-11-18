import React from 'react';

function MetricCard({
  value,
  label,
  description,
  suffix,
  accent = 'primary',
  index = 0,
}) {
  const accentClasses = {
    primary: 'text-primary-300',
    secondary: 'text-secondary',
    white: 'text-white',
  };

  const accentClass = accentClasses[accent] || accentClasses.primary;

  return (
    <article
      className="metric-card animate-slide-in"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className={`metric-value ${accentClass}`}>
            <span className="numeric">{value}</span>

            {suffix && <span className="text-[0.5em] mr-2">{suffix}</span>}
          </div>

          <h3 className="metric-label font-bold text-white">{label}</h3>

          {description && (
            <p className="mt-2 text-xs sm:text-sm text-white/45 leading-7">
              {description}
            </p>
          )}
        </div>

        <span className="w-2 h-2 shrink-0 mt-2 rounded-full bg-primary-300 opacity-80" />
      </div>
    </article>
  );
}

export default MetricCard;
