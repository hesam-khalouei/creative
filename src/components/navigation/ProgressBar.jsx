import React from 'react';

function ProgressBar({ progress }) {
  return (
    <div
      className="progress-track"
      role="progressbar"
      aria-label="میزان پیشرفت ارائه"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
    >
      <div className="progress-value" style={{ width: `${progress}%` }} />
    </div>
  );
}

export default ProgressBar;
