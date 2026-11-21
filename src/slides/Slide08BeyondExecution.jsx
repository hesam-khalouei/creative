import React from 'react';
import SlideContainer from '../components/layout/SlideContainer';
import '../styles/slides/slide-08.css';

const capabilities = [
  {
    number: '01',
    title: 'فهم مسئله',
    subtitle: 'Understand',
    description:
      'شناخت نیاز کاربر و کسب‌وکار، بررسی مسئله و شفاف‌کردن صورت مسئله پیش از طراحی.',
    outputs: ['تحلیل نیاز', 'تعریف مسئله', 'بنچمارک'],
    color: '#00A693',
    size: 'large',
  },
  {
    number: '02',
    title: 'شکل‌دهی راه‌حل',
    subtitle: 'Shape',
    description: 'تبدیل مسئله به مسیرهای قابل بررسی و انتخاب راه‌حل مناسب.',
    outputs: ['ایده‌پردازی', 'طراحی سرویس', 'جریان کاربر'],
    color: '#FF8A34',
    size: 'small',
  },
  {
    number: '03',
    title: 'ساخت تجربه',
    subtitle: 'Build',
    description:
      'طراحی و تولید تجربه‌های قابل استفاده در نقاط تماس محصول و برند.',
    outputs: ['رابط کاربری', 'گرافیک', 'موشن'],
    color: '#8B9CF6',
    size: 'small',
  },
  {
    number: '04',
    title: 'حفظ انسجام',
    subtitle: 'Sustain',
    description:
      'ایجاد استانداردهای مشترک و بهبود مستمر کیفیت تجربه در طول زمان.',
    outputs: ['دیزاین سیستم', 'گایدلاین', 'بهبود و اصلاح'],
    color: '#D78BCB',
    size: 'large',
  },
];

export default function Slide08BeyondExecution() {
  return (
    <SlideContainer
      slideNumber={8}
      totalSlides={12}
      eyebrow="07 / BEYOND EXECUTION"
      title="ارزش طراحی، فراتر از تحویل خروجی است"
      description="نقش تیم در زنجیره شکل‌گیری تجربه؛ از فهم مسئله تا حفظ انسجام در مقیاس سازمان"
    >
      <section className="beyond-dashboard">
        <div className="beyond-intro">
          <div className="beyond-intro-mark">
            <span />
            <span />
            <span />
          </div>
          <p>
            طراحی زمانی بیشترین اثر را دارد که از ابتدای تصمیم‌گیری وارد شود؛ نه
            فقط در انتهای مسیر برای زیباتر کردن خروجی.
          </p>
        </div>

        <div className="beyond-flow">
          {capabilities.map((item, index) => (
            <React.Fragment key={item.number}>
              <article
                className={`beyond-step beyond-step--${item.size}`}
                style={{ '--step-color': item.color }}
              >
                <div className="beyond-step-top">
                  <span className="beyond-step-number">{item.number}</span>
                  <span className="beyond-step-subtitle">{item.subtitle}</span>
                </div>

                <div className="beyond-step-content">
                  <div className="beyond-step-symbol">
                    {index === 0 && (
                      <svg viewBox="0 0 48 48" aria-hidden="true">
                        <circle cx="21" cy="21" r="12" />
                        <path d="m30 30 10 10M15 21h12M21 15v12" />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M24 5 28.5 18.5 42 23 28.5 27.5 24 41 19.5 27.5 6 23 19.5 18.5Z" />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg viewBox="0 0 48 48" aria-hidden="true">
                        <rect x="7" y="7" width="34" height="34" rx="7" />
                        <path d="M7 17h34M17 17v24M23 25h12M23 31h8" />
                      </svg>
                    )}
                    {index === 3 && (
                      <svg viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M8 24a16 16 0 1 0 5-11.5M8 8v9h9" />
                        <path d="M24 14v10l7 4" />
                      </svg>
                    )}
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>

                <div className="beyond-tags">
                  {item.outputs.map((output) => (
                    <span key={output}>{output}</span>
                  ))}
                </div>
              </article>

              {index < capabilities.length - 1 && (
                <div className="beyond-connector" aria-hidden="true">
                  <span />
                  <span />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="beyond-bottom">
          <div className="beyond-bottom-label">
            <span className="beyond-bottom-line" />
            <span>نقطه اثرگذاری طراحی</span>
          </div>
          <div className="beyond-bottom-message">
            <strong>از پاسخ‌گویی به درخواست‌ها</strong>
            <span>به</span>
            <strong>مشارکت در تصمیم‌سازی</strong>
          </div>
          <p>
            این تغییر، تیم طراحی را از یک واحد صرفاً اجرایی به شریک تخصصی محصول
            و کسب‌وکار نزدیک می‌کند.
          </p>
        </div>
      </section>
    </SlideContainer>
  );
}
