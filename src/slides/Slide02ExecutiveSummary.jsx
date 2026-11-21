import React from 'react';
import SlideContainer from '../components/layout/SlideContainer';
import '../styles/slides/slide-02.css';

const formatMetric = (value) =>
  value.replace(/\d+(?:\.\d+)?/g, (number) =>
    new Intl.NumberFormat('fa-IR', {
      maximumFractionDigits: 1,
    }).format(Number(number)),
  );

const metrics = [
  {
    value: '856',
    label: 'درخواست تخصیص‌یافته',
    detail: 'درخواست‌های ثبت‌شده و تخصیص‌یافته به اعضای تیم',
    accent: 'mint',
    index: '01',
  },
  {
    value: '11',
    label: 'واحد سازمانی',
    detail: 'واحدهایی که از تیم خدمات دریافت کرده‌اند',
    accent: 'orange',
    index: '02',
  },
  {
    value: '77.9٪',
    label: 'مارکتینگ و محصول',
    detail: 'سهم این دو واحد از درخواست‌های تیم',
    accent: 'mint',
    index: '03',
  },
  {
    value: '91.2٪',
    label: 'Done یا Closed',
    detail: 'وضعیت فعلی درخواست‌ها در زمان استخراج داده',
    accent: 'orange',
    index: '04',
  },
];

const pillars = [
  {
    number: '01',
    title: 'تجربه محصول',
    description: 'طراحی تجربه، رابط کاربری و جریان‌های تعاملی',
    accent: 'mint',
  },
  {
    number: '02',
    title: 'هویت بصری و برند',
    description: 'طراحی گرافیک، تصویرسازی و ارتباطات بصری',
    accent: 'orange',
  },
  {
    number: '03',
    title: 'محتوا و حرکت',
    description: 'موشن گرافیک و تولید دارایی‌های متحرک',
    accent: 'mint',
  },
];

function Slide02ExecutiveSummary() {
  return (
    <SlideContainer
      slideNumber={2}
      totalSlides={12}
      className="executive-summary-slide"
      eyebrow="01 / EXECUTIVE SUMMARY"
      title="خلاقیت، فراتر از یک واحد اجرایی"
      description="تیم خلاقیت و طراحی محصول، یک ظرفیت تخصصی میان‌سازمانی است که تجربه محصول، هویت بصری و ارتباطات برند را به هم متصل می‌کند."
    >
      <div className="summary-editorial">
        {/* Key metrics */}
        <section className="summary-metrics" aria-label="شاخص‌های کلیدی">
          {metrics.map((metric) => (
            <article
              className={`summary-metric summary-metric--${metric.accent}`}
              key={metric.index}
            >
              <div className="summary-metric-top">
                <span className="summary-metric-index">{metric.index}</span>

                <span className="summary-metric-mark" aria-hidden="true" />
              </div>

              <div className="summary-metric-value">
                {formatMetric(metric.value)}
              </div>

              <h3 className="summary-metric-label">{metric.label}</h3>

              <p className="summary-metric-detail">{metric.detail}</p>
            </article>
          ))}
        </section>

        {/* Editorial lower section */}
        <section className="summary-lower">
          <article className="summary-message">
            <div className="summary-section-kicker">
              <span className="summary-kicker-line" />
              THE CORE MESSAGE
            </div>

            <div className="summary-message-body">
              <span className="summary-message-index" aria-hidden="true">
                01
              </span>

              <h3>
                تیم خلاقیت فقط پاسخ‌گوی درخواست‌ها نیست؛
                <span> در شکل‌گیری تجربه محصول و تصویر برند نقش دارد.</span>
              </h3>

              <p>
                گستره درخواست‌ها از طراحی محصول و رابط کاربری تا گرافیک،
                تصویرسازی و موشن نشان می‌دهد که این تیم با چندین جریان کلیدی
                کسب‌وکار در ارتباط است.
              </p>
            </div>

            <div className="summary-message-footer">
              <span className="summary-footer-dot" />
              یک ظرفیت تخصصی با اثرگذاری میان‌واحدی
            </div>
          </article>

          <aside className="summary-pillars">
            <div className="summary-section-kicker summary-section-kicker--orange">
              <span className="summary-kicker-line" />
              THREE STRATEGIC PILLARS
            </div>

            <div className="summary-pillar-list">
              {pillars.map((pillar) => (
                <div
                  className={`summary-pillar summary-pillar--${pillar.accent}`}
                  key={pillar.number}
                >
                  <span className="summary-pillar-number">{pillar.number}</span>

                  <div className="summary-pillar-copy">
                    <h4>{pillar.title}</h4>
                    <p>{pillar.description}</p>
                  </div>

                  <span className="summary-pillar-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
              ))}
            </div>
          </aside>
        </section>

        {/* Data source */}
        <p className="summary-footnote">
          مبنا: داده‌های ثبت‌شده در Jira از فروردین ۱۴۰۴ تا آبان ۱۴۰۵. وضعیت
          Done و Closed صرفاً وضعیت فعلی درخواست‌هاست و معادل موفقیت تجاری نیست.
        </p>
      </div>
    </SlideContainer>
  );
}

export default Slide02ExecutiveSummary;
