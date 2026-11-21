import React from 'react';
import SlideContainer from '../components/layout/SlideContainer';
import '../styles/slides/slide-10.css';

const valueDrivers = [
  {
    id: '01',
    title: 'تصمیم‌گیری بهتر',
    subtitle: 'BETTER DECISIONS',
    description:
      'ورود تخصص طراحی به مراحل اولیه، کمک می‌کند مسئله و تجربه موردنظر پیش از اجرا روشن‌تر شوند.',
    impact: 'از اجرای سفارش به مشارکت در تصمیم',
    color: '#00A693',
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="21" cy="21" r="12" />
        <path d="m30 30 10 10M16 21h10M21 16v10" />
      </svg>
    ),
  },
  {
    id: '02',
    title: 'تجربه یکپارچه',
    subtitle: 'CONSISTENT EXPERIENCE',
    description:
      'استانداردهای مشترک، تجربه محصول و ارتباطات بصری را در نقاط تماس مختلف هماهنگ می‌کنند.',
    impact: 'از خروجی‌های پراکنده به زبان مشترک',
    color: '#8B9CF6',
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="6" y="7" width="15" height="15" rx="4" />
        <rect x="27" y="7" width="15" height="15" rx="4" />
        <rect x="6" y="28" width="15" height="13" rx="4" />
        <rect x="27" y="28" width="15" height="13" rx="4" />
      </svg>
    ),
  },
  {
    id: '03',
    title: 'کاهش دوباره‌کاری',
    subtitle: 'LESS REWORK',
    description:
      'تعریف مسئله، معیارها و مسیر تأیید از ابتدا، احتمال بازگشت‌های غیرضروری در فرایند طراحی را کاهش می‌دهد.',
    impact: 'از اصلاحات تکراری به مسیر روشن',
    color: '#FF8A34',
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M9 17a16 16 0 0 1 27-5l4 4M40 8v8h-8M39 31a16 16 0 0 1-27 5l-4-4M8 40v-8h8" />
      </svg>
    ),
  },
  {
    id: '04',
    title: 'آمادگی برای رشد',
    subtitle: 'READY TO SCALE',
    description:
      'تقویت سیستم‌ها و استانداردهای طراحی، توسعه محصولات و ارتباطات را در مقیاس بزرگ‌تر قابل مدیریت‌تر می‌کند.',
    impact: 'از راه‌حل موردی به قابلیت پایدار',
    color: '#D78BCB',
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M8 38 19 27l7 6 14-17" />
        <path d="M29 16h11v11" />
      </svg>
    ),
  },
];

export default function Slide10BusinessCase() {
  return (
    <SlideContainer
      slideNumber={10}
      totalSlides={12}
      eyebrow="09 / BUSINESS CASE"
      title="توان طراحی، یک سرمایه‌گذاری در کیفیت تصمیم‌هاست"
      description="چهار مسیر اثرگذاری که با تقویت نقش راهبردی تیم می‌توانند در سطح سازمان فعال‌تر شوند"
    >
      <section className="business-case">
        <div className="business-case-lead">
          <div className="business-case-lead-mark">
            <span>DESIGN</span>
            <strong>×</strong>
            <span>BUSINESS</span>
          </div>
          <p>
            وقتی طراحی در زمان درست و در سطح درست وارد فرایند شود، خروجی آن فقط
            یک فایل یا صفحه نیست؛ بخشی از کیفیت تصمیم سازمان است.
          </p>
        </div>

        <div className="business-case-grid">
          {valueDrivers.map((item, index) => (
            <article
              className={`business-case-item business-case-item--${index + 1}`}
              key={item.id}
              style={{ '--value-color': item.color }}
            >
              <div className="business-case-item-top">
                <span>{item.id}</span>
                <small>{item.subtitle}</small>
              </div>

              <div className="business-case-icon">{item.icon}</div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <div className="business-case-impact">
                <span>تغییر مورد انتظار</span>
                <strong>{item.impact}</strong>
              </div>
            </article>
          ))}
        </div>

        <div className="business-case-conclusion">
          <div className="business-case-conclusion-symbol">↗</div>
          <div>
            <span>جمع‌بندی مدیریتی</span>
            <strong>
              تقویت جایگاه تیم، برای افزایش ظرفیت اثرگذاری طراحی در کل سازمان
            </strong>
          </div>
        </div>

        <p className="business-case-disclaimer">
          این موارد، ارزش‌های مورد انتظار از مدل پیشنهادی هستند؛ سنجش تحقق آن‌ها
          به تعریف شاخص و اندازه‌گیری در دوره‌های بعد نیاز دارد.
        </p>
      </section>
    </SlideContainer>
  );
}
