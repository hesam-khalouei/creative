import React from 'react';
import SlideContainer from '../components/layout/SlideContainer';
import { jiraMetrics } from '../data/metrics';
import '../styles/slides/slide-03.css';

const formatNumber = (value) => new Intl.NumberFormat('fa-IR').format(value);

function Slide03TheScale() {
  const coverage = jiraMetrics.teamCoverage;
  const remaining =
    jiraMetrics.totalRequests - jiraMetrics.teamAssignedRequests;

  const coverageStyle = {
    background: `conic-gradient(
      #72d9bd 0%,
      #72d9bd ${coverage}%,
      rgba(255,255,255,.09) ${coverage}%,
      rgba(255,255,255,.09) 100%
    )`,
  };

  return (
    <SlideContainer
      slideNumber={3}
      totalSlides={12}
      eyebrow="02 / THE SCALE"
      title="مقیاس فعالیت؛ فراتر از چند درخواست طراحی"
      description="داده‌های Jira نشان می‌دهد تیم خلاقیت در یک بازه زمانی ۲۰ماهه، مسئولیت بخش قابل‌توجهی از درخواست‌های ثبت‌شده سازمان را بر عهده داشته است."
    >
      <section className="scale-layout">
        {/* Primary metric */}
        <article className="scale-hero">
          <div className="scale-hero-top">
            <span className="scale-kicker">TEAM ASSIGNED REQUESTS</span>
            <span className="scale-index">01 — 03</span>
          </div>

          <div className="scale-hero-main">
            <div className="scale-main-number">
              {formatNumber(jiraMetrics.teamAssignedRequests)}
            </div>

            <h3>درخواست تخصیص‌یافته به تیم</h3>

            <p>
              بخشی از جریان درخواست‌های سازمان که برای انجام به اعضای تیم خلاقیت
              و طراحی محصول تخصیص داده شده است.
            </p>
          </div>

          <div className="scale-hero-footer">
            <span>JIRA DATA</span>
            <span>۱۴۰۴ — ۱۴۰۵</span>
          </div>
        </article>

        {/* Supporting metrics */}
        <div className="scale-side">
          <article className="scale-coverage-card">
            <div className="scale-card-heading">
              <span className="scale-kicker">TEAM COVERAGE</span>
              <span className="scale-small-mark">02</span>
            </div>

            <div className="scale-ring-wrap">
              <div
                className="scale-ring"
                style={coverageStyle}
                role="img"
                aria-label={`سهم تیم از کل درخواست‌ها ${formatNumber(coverage)} درصد`}
              >
                <div className="scale-ring-center">
                  <strong>{formatNumber(coverage)}٪</strong>
                  <span>از کل درخواست‌ها</span>
                </div>
              </div>
            </div>

            <div className="scale-coverage-caption">
              <span className="scale-legend-dot" />
              <span>سهم درخواست‌های تخصیص‌یافته به تیم</span>
            </div>
          </article>

          <article className="scale-total-card">
            <div className="scale-total-copy">
              <span className="scale-kicker">TOTAL JIRA REQUESTS</span>

              <strong>{formatNumber(jiraMetrics.totalRequests)}</strong>

              <span>کل درخواست‌های ثبت‌شده</span>
            </div>

            <div className="scale-total-decoration" aria-hidden="true">
              ↗
            </div>
          </article>
        </div>

        {/* Supporting facts */}
        <section className="scale-facts" aria-label="واقعیت‌های تکمیلی">
          <article className="scale-fact">
            <span className="scale-fact-number">۲۰</span>
            <div>
              <strong>ماه فعالیت ثبت‌شده</strong>
              <span>از فروردین ۱۴۰۴ تا آبان ۱۴۰۵</span>
            </div>
          </article>

          <span className="scale-fact-divider" aria-hidden="true" />

          <article className="scale-fact">
            <span className="scale-fact-number">۱۱</span>
            <div>
              <strong>واحد سازمانی</strong>
              <span>واحدهای مختلف دریافت‌کننده خدمات تیم</span>
            </div>
          </article>

          <span className="scale-fact-divider" aria-hidden="true" />

          <article className="scale-fact">
            <span className="scale-fact-number">{formatNumber(remaining)}</span>
            <div>
              <strong>درخواست خارج از تخصیص تیم</strong>
              <span>از مجموع درخواست‌های ثبت‌شده در Jira</span>
            </div>
          </article>
        </section>

        {/* Methodology note */}
        <div className="scale-note">
          <span className="scale-note-icon" aria-hidden="true">
            i
          </span>

          <p>
            مبنای تحلیل، داده‌های ثبت‌شده در Jira است. تعداد درخواست‌ها
            نشان‌دهنده حجم ثبت و تخصیص کار است و به‌تنهایی معادل ساعات کار،
            تعداد پروژه‌های مستقل یا میزان تلاش نیست.
          </p>
        </div>
      </section>
    </SlideContainer>
  );
}

export default Slide03TheScale;
