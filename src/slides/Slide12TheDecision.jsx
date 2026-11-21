import React from 'react';
import SlideContainer from '../components/layout/SlideContainer';

function Slide12TheDecision() {
  const decisions = [
    {
      number: '01',
      title: 'تأیید بازنگری حقوق اعضای تیم',
      description:
        'بررسی حقوق تمام اعضا و تعیین تعدیل متناسب با سطح نقش، مسئولیت و شرایط هر فرد.',
    },
    {
      number: '02',
      title: 'توسعه جایگاه سازمانی تیم',
      description:
        'به‌رسمیت‌شناختن نقش میان‌واحدی تیم و ایجاد دسترسی مؤثرتر به تصمیم‌گیران محصول و مارکتینگ.',
    },
    {
      number: '03',
      title: 'مشارکت در اولویت‌بندی',
      description:
        'تعریف سازوکار مشترک برای تعیین اولویت درخواست‌ها و مدیریت ظرفیت تخصصی تیم.',
    },
    {
      number: '04',
      title: 'تثبیت استانداردهای طراحی',
      description:
        'ایجاد چارچوب مشخص برای کیفیت، انسجام بصری و تجربه محصول در سطح سازمان.',
    },
  ];

  return (
    <SlideContainer
      slideNumber={12}
      totalSlides={12}
      eyebrow="11 / THE DECISION"
      title="برای گام بعدی، به چند تصمیم روشن نیاز داریم"
      description="هدف این ارائه صرفاً گزارش عملکرد گذشته نیست؛ هدف، توافق بر سر مسیر توسعه تیم و استفاده مؤثرتر از ظرفیت تخصصی آن است."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
        {decisions.map((item, index) => (
          <div key={item.number} className="surface-card p-6 md:p-7">
            <div className="flex items-center justify-between">
              <span
                className={`text-3xl font-black ${
                  index === 0 || index === 2
                    ? 'text-secondary'
                    : 'text-primary-300'
                }`}
              >
                {item.number}
              </span>
              <span className="text-xs text-white/35">MANAGEMENT ACTION</span>
            </div>

            <h3 className="text-xl font-black mt-5">{item.title}</h3>
            <p className="text-sm text-white/55 leading-8 mt-3">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-7 rounded-2xl p-7 md:p-9 text-center border border-primary/30 bg-gradient-to-br from-primary/15 to-secondary/5">
        <div className="text-primary-300 text-sm font-bold tracking-widest">
          OUR NEXT CHAPTER
        </div>

        <h2 className="text-2xl md:text-4xl font-black leading-relaxed mt-5">
          از یک تیم پاسخ‌گو
          <br />
          به یک ظرفیت اثرگذار در سازمان
        </h2>

        <p className="text-white/55 mt-5 text-sm md:text-base">
          Creativity is not a support function. It's a business driver.
        </p>
      </div>

      <div className="flex justify-between items-center mt-6 text-xs text-white/40">
        <span>تیم خلاقیت و طراحی محصول</span>
        <span>پایان ارائه | ۱۲ اسلاید</span>
      </div>
    </SlideContainer>
  );
}

export default Slide12TheDecision;
