import React from 'react';
import SlideContainer from '../components/layout/SlideContainer';
import '../styles/slides/slide-12.css';

const decisions = [
  {
    number: '01',
    title: 'بازنگری حقوق اعضای تیم',
    description:
      'بررسی و اصلاح جبران خدمات هر ۸ عضو، متناسب با نقش، سطح تخصص و مسئولیت',
    tag: 'COMPENSATION',
    accent: 'teal',
  },
  {
    number: '02',
    title: 'تعیین جایگاه سازمانی',
    description:
      'به‌رسمیت‌شناختن تیم به‌عنوان یک ظرفیت تخصصی فرابخشی در سازمان',
    tag: 'ORGANIZATION',
    accent: 'orange',
  },
  {
    number: '03',
    title: 'تعریف اختیارات و مسئولیت‌ها',
    description:
      'شفاف‌سازی مرز تصمیم‌گیری، تأییدها و مالکیت استانداردهای طراحی',
    tag: 'AUTHORITY',
    accent: 'blue',
  },
  {
    number: '04',
    title: 'تثبیت مشارکت در تصمیم‌ها',
    description:
      'حضور به‌موقع تیم در تصمیم‌های مرتبط با محصول، مارکتینگ و تجربه مشتری',
    tag: 'COLLABORATION',
    accent: 'purple',
  },
];

export default function Slide12Decision() {
  return (
    <SlideContainer
      slideNumber={12}
      totalSlides={12}
      eyebrow="11 / THE WAY FORWARD"
      title="برای قدم بعدی، به چهار تصمیم روشن نیاز داریم"
      description="هدف، فقط تقویت یک تیم نیست؛ استفاده مؤثرتر از ظرفیت طراحی در کل سازمان است."
    >
      <section className="decision-slide">
        <div className="decision-main">
          <div className="decision-list">
            {decisions.map((item) => (
              <article
                className={`decision-item decision-item--${item.accent}`}
                key={item.number}
              >
                <div className="decision-number">{item.number}</div>
                <div className="decision-copy">
                  <span className="decision-tag">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="decision-arrow">←</div>
              </article>
            ))}
          </div>

          <aside className="decision-aside">
            <div className="decision-aside-top">
              <span className="decision-kicker">THE REQUEST</span>
              <div className="decision-orbit">
                <div className="decision-orbit-inner">
                  <span>DESIGN</span>
                  <strong>+</strong>
                  <span>BUSINESS</span>
                </div>
              </div>
            </div>

            <div className="decision-aside-copy">
              <span>از اجرا تا اثرگذاری</span>
              <h3>
                طراحی باید
                <br />
                در زمان درست،
                <br />
                در تصمیم درست
                <br />
                حضور داشته باشد.
              </h3>
            </div>

            <div className="decision-aside-footer">
              <span className="decision-dot" />
              <span>یک ظرفیت تخصصی برای تمام سازمان</span>
            </div>
          </aside>
        </div>

        <div className="decision-next-step">
          <div className="decision-next-icon">→</div>
          <div className="decision-next-copy">
            <span>گام اجرایی پیشنهادی</span>
            <strong>
              تشکیل جلسه مشترک مدیریت، منابع انسانی، مالی، محصول و مارکتینگ
            </strong>
          </div>
          <div className="decision-next-label">NEXT STEP</div>
        </div>

        <div className="decision-closing">
          <span>CREATIVE & PRODUCT DESIGN</span>
          <strong>از طراحی خروجی، به طراحی ارزش.</strong>
        </div>
      </section>
    </SlideContainer>
  );
}
