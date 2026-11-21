import React from 'react';
import SlideContainer from '../components/layout/SlideContainer';
import '../styles/slides/slide-09.css';

const currentItems = [
  'گزارش‌دهی از مسیر معاونت مارکتینگ',
  'مشارکت در پروژه‌های چند واحد سازمانی',
  'اختیار مستقل در بخشی از تصمیم‌های طراحی',
  'نیاز به تأیید سایر ذی‌نفعان در برخی تصمیم‌ها',
];

const proposedItems = [
  'جایگاه تخصصی و بین‌واحدی',
  'مشارکت از ابتدای تصمیم‌سازی محصول و مارکتینگ',
  'حدود اختیار روشن برای تصمیم‌های طراحی',
  'تعریف اولویت‌ها با حضور ذی‌نفعان کلیدی',
];

export default function Slide09OrganizationalPosition() {
  return (
    <SlideContainer
      slideNumber={9}
      totalSlides={12}
      eyebrow="08 / ORGANIZATIONAL POSITION"
      title="جایگاه سازمانی باید بازتاب‌دهنده نقش واقعی تیم باشد"
      description="پیشنهاد برای هم‌راستاسازی جایگاه، اختیار و دامنه اثرگذاری تیم خلاقیت و طراحی محصول"
    >
      <section className="org-position">
        <div className="org-comparison">
          <article className="org-panel org-panel--current">
            <div className="org-panel-head">
              <div>
                <span className="org-kicker">CURRENT MODEL</span>
                <h3>وضعیت فعلی</h3>
              </div>
              <span className="org-state">ساختار موجود</span>
            </div>

            <div className="org-reporting">
              <span>مسیر گزارش‌دهی فعلی</span>
              <div className="org-node org-node--parent">
                <span className="org-node-icon">M</span>
                <div>
                  <strong>معاونت مارکتینگ</strong>
                  <small>مسیر گزارش‌دهی فعلی</small>
                </div>
              </div>
              <div className="org-tree-line" />
              <div className="org-node org-node--team">
                <span className="org-node-icon">D</span>
                <div>
                  <strong>تیم خلاقیت و طراحی محصول</strong>
                  <small>نقش اجرایی و تخصصی</small>
                </div>
              </div>
            </div>

            <ul className="org-feature-list">
              {currentItems.map((item, index) => (
                <li key={item}>
                  <span className="org-feature-number">
                    {new Intl.NumberFormat('fa-IR', {
                      minimumIntegerDigits: 2,
                      useGrouping: false,
                    }).format(index + 1)}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <div className="org-transition">
            <div className="org-transition-icon">
              <svg viewBox="0 0 48 48" aria-hidden="true">
                <path d="M8 24h30M28 13l11 11-11 11" />
              </svg>
            </div>
            <span>پیشنهاد تحول</span>
          </div>

          <article className="org-panel org-panel--proposed">
            <div className="org-panel-head">
              <div>
                <span className="org-kicker">PROPOSED MODEL</span>
                <h3>مدل پیشنهادی</h3>
              </div>
              <span className="org-state">مدل هدف</span>
            </div>

            <div className="org-target">
              <div className="org-target-core">
                <span className="org-target-symbol">✳</span>
                <strong>تیم خلاقیت و طراحی محصول</strong>
                <small>قابلیت تخصصی بین‌واحدی</small>
              </div>
              <div className="org-target-connections">
                <span>محصول</span>
                <span>مارکتینگ</span>
                <span>سایر واحدها</span>
              </div>
            </div>

            <ul className="org-feature-list">
              {proposedItems.map((item, index) => (
                <li key={item}>
                  <span className="org-feature-number">
                    {new Intl.NumberFormat('fa-IR', {
                      minimumIntegerDigits: 2,
                      useGrouping: false,
                    }).format(index + 1)}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="org-principle">
          <div className="org-principle-mark">↗</div>
          <div className="org-principle-copy">
            <span>اصل پیشنهادی</span>
            <strong>
              استقلال حرفه‌ای در طراحی، همراه با پاسخ‌گویی و هم‌راستایی سازمانی
            </strong>
          </div>
          <p>
            هدف، حذف ارتباط با مارکتینگ نیست؛ هدف، فراهم‌کردن دسترسی و اختیار
            متناسب با مسئولیت‌های بین‌واحدی تیم است.
          </p>
        </div>
      </section>
    </SlideContainer>
  );
}
