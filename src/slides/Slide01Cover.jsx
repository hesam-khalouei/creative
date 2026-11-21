import React from 'react';
import { presentationInfo } from '../data/presentationData';
import '../styles/slides/slide-01.css';

function Slide01Cover() {
  return (
    <section className="slide slide--1 cover-slide">
      <div className="cover-glow cover-glow-primary" />
      <div className="cover-glow cover-glow-secondary" />

      <div className="slide-inner cover-inner">
        <div className="cover-top">
          <div className="cover-brand">
            <span className="cover-brand-mark" />
            <span>CREATIVE TEAM</span>
          </div>

          <span className="cover-period">{presentationInfo.period}</span>
        </div>

        <div className="cover-content">
          <div className="cover-eyebrow">
            <span className="cover-eyebrow-line" />
            گزارش عملکرد و جایگاه سازمانی
          </div>

          <h1 className="cover-title">
            فراتر از
            <br />
            <span>طراحی و اجرا</span>
          </h1>

          <p className="cover-description">
            روایت نقش تیم خلاقیت و طراحی در خلق تجربه، توسعه محصول و پیشبرد
            اهداف کسب‌وکار
          </p>

          <div className="cover-tagline">
            <span>CREATIVITY IS NOT A SUPPORT FUNCTION.</span>
            <strong>IT'S A BUSINESS DRIVER.</strong>
          </div>
        </div>

        <div className="cover-bottom">
          <div className="cover-team-label">
            <span className="cover-dot" />
            تیم خلاقیت و طراحی محصول
          </div>

          <div className="cover-index">
            <span>01</span>
            <span className="cover-index-divider" />
            <span>12</span>
          </div>
        </div>
      </div>

      <div className="cover-watermark">CREATIVE</div>
    </section>
  );
}

export default Slide01Cover;
