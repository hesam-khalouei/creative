import React from 'react';
import SlideContainer from '../components/layout/SlideContainer';

function Slide10BusinessCase() {
  const valueDrivers = [
    {
      title: 'انسجام تجربه مشتری',
      description:
        'هماهنگی تجربه محصول، ارتباطات بصری و نقاط تماس برند در تعامل با مخاطب.',
      number: '01',
    },
    {
      title: 'کاهش دوباره‌کاری',
      description:
        'توسعه استانداردها و راهکارهای طراحی مشترک برای افزایش انسجام و استفاده مجدد از خروجی‌ها.',
      number: '02',
    },
    {
      title: 'تصمیم‌گیری بهتر',
      description:
        'ورود تخصص طراحی به مراحل اولیه تعریف مسئله و انتخاب راهکارهای محصول و بازاریابی.',
      number: '03',
    },
    {
      title: 'مدیریت هدفمند منابع',
      description:
        'اولویت‌بندی درخواست‌ها متناسب با اهمیت، پیچیدگی و ظرفیت تخصصی اعضای تیم.',
      number: '04',
    },
  ];

  return (
    <SlideContainer
      slideNumber={10}
      totalSlides={12}
      eyebrow="09 / BUSINESS CASE"
      title="سرمایه‌گذاری روی طراحی، سرمایه‌گذاری روی کیفیت تصمیم‌هاست"
      description="ارزش تیم فقط در تعداد خروجی‌ها خلاصه نمی‌شود؛ بخش مهمی از ارزش آن در بهبود فرایندها، انسجام تجربه و کیفیت تصمیم‌های سازمان شکل می‌گیرد."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
        {valueDrivers.map((item, index) => (
          <div key={item.number} className="surface-card p-6 md:p-7">
            <div className="flex justify-between items-center">
              <span className="text-3xl font-black text-primary-300">
                {item.number}
              </span>
              <span
                className={`w-10 h-1 rounded-full ${
                  index % 2 === 0 ? 'bg-primary' : 'bg-secondary'
                }`}
              />
            </div>
            <h3 className="text-xl font-black mt-5">{item.title}</h3>
            <p className="text-sm text-white/55 leading-8 mt-3">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl bg-primary/10 border border-primary/25 p-6">
        <div className="text-primary-300 text-sm font-bold mb-3">
          THE BUSINESS CASE
        </div>
        <p className="text-lg md:text-xl font-bold leading-9">
          با تعریف جایگاه روشن‌تر و مشارکت زودهنگام تیم در تصمیم‌ها، می‌توان از
          ظرفیت تخصصی موجود برای خلق تجربه منسجم‌تر و استفاده مؤثرتر از منابع
          سازمان بهره گرفت.
        </p>
      </div>

      <p className="text-xs text-white/35 mt-4 leading-6">
        موارد بالا مسیرهای ارزش‌آفرینی مورد انتظار هستند؛ برای سنجش اثر واقعی
        آن‌ها باید شاخص‌هایی مانند دوباره‌کاری، زمان تحویل، کیفیت تجربه و رضایت
        ذی‌نفعان در آینده اندازه‌گیری شوند.
      </p>
    </SlideContainer>
  );
}

export default Slide10BusinessCase;
