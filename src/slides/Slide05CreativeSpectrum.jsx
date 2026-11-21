import React from 'react';
import SlideContainer from '../components/layout/SlideContainer';
import { requestTypes } from '../data/metrics';
import '../styles/slides/slide-05.css';

const fa = (value) => Number(value).toLocaleString('fa-IR');

const serviceDetails = [
  {
    title: 'اصلاحات',
    subtitle: 'بهبود و اصلاح خروجی‌های طراحی',
    icon: '↗',
    tone: 'mint',
  },
  {
    title: 'گرافیک سوشال',
    subtitle: 'محتوای بصری شبکه‌های اجتماعی',
    icon: '✳',
    tone: 'orange',
  },
  {
    title: 'طراحی سرویس',
    subtitle: 'طراحی راهکار و تجربه خدمات',
    icon: '⌘',
    tone: 'blue',
  },
];

function Slide05CreativeSpectrum() {
  const services = [...requestTypes]
    .filter((item) => item.value > 0)
    .sort((a, b) => b.value - a.value);

  const featured = services.slice(0, 3);
  const remaining = services.slice(3, 12);
  const total = services.reduce((sum, item) => sum + item.value, 0);

  return (
    <SlideContainer
      slideNumber={5}
      totalSlides={12}
      eyebrow="04 / CREATIVE SPECTRUM"
      title="طیف خدمات؛ از تجربه محصول تا ارتباطات بصری"
      description="تنوع درخواست‌های ثبت‌شده، گستره‌ای از خدمات طراحی محصول، گرافیک، تصویرسازی و تولید محتوای بصری را نشان می‌دهد."
    >
      <div className="spectrum-layout">
        {/* Featured services */}
        <div className="spectrum-featured">
          {featured.map((service, index) => {
            const detail = serviceDetails[index];

            return (
              <article
                className={`spectrum-feature spectrum-${detail.tone}`}
                key={service.name}
              >
                <div className="spectrum-feature-top">
                  <span className="spectrum-feature-index">0{index + 1}</span>
                  <span className="spectrum-feature-icon">{detail.icon}</span>
                </div>

                <div className="spectrum-feature-bottom">
                  <span className="spectrum-feature-label">TOP SERVICE</span>
                  <h3>{service.name}</h3>
                  <p>{detail.subtitle}</p>
                  <div className="spectrum-feature-count">
                    <strong>{fa(service.value)}</strong>
                    <span>درخواست</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Other services */}
        <section className="spectrum-catalog">
          <div className="spectrum-catalog-heading">
            <div>
              <span className="spectrum-kicker">SERVICE CATALOG</span>
              <h3>دیگر حوزه‌های تخصصی</h3>
            </div>
            <span className="spectrum-catalog-count">
              {fa(services.length)} دسته خدمت
            </span>
          </div>

          <div className="spectrum-service-grid">
            {remaining.map((service, index) => (
              <div className="spectrum-service-item" key={service.name}>
                <span className="spectrum-service-index">
                  {fa(index + 4).padStart(2, '۰')}
                </span>
                <span className="spectrum-service-name">{service.name}</span>
                <strong>{fa(service.value)}</strong>
              </div>
            ))}
          </div>

          <div className="spectrum-catalog-footer">
            <span>بر اساس تعداد درخواست‌های ثبت‌شده</span>
            <span>۱۲ خدمت پرتکرار</span>
          </div>
        </section>

        {/* Summary strip */}
        <div className="spectrum-summary">
          <div className="spectrum-summary-intro">
            <span className="spectrum-summary-mark">✳</span>
            <div>
              <strong>تنوع تخصص، یک ظرفیت مشترک</strong>
              <span>مجموعه‌ای از مهارت‌های مکمل در خدمت نیازهای سازمان</span>
            </div>
          </div>

          <div className="spectrum-summary-stat">
            <strong>{fa(total)}</strong>
            <span>درخواست در دسته‌های دارای ثبت</span>
          </div>
        </div>

        <p className="spectrum-note">
          این نمایش، ۱۲ دسته پرتکرار از میان دسته‌های ثبت‌شده در Jira را نشان
          می‌دهد؛ تعداد درخواست‌ها معادل تعداد پروژه‌های مستقل نیست.
        </p>
      </div>
    </SlideContainer>
  );
}

export default Slide05CreativeSpectrum;
