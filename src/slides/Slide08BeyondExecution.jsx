import React from 'react';
import SlideContainer from '../components/layout/SlideContainer';

function Slide08BeyondExecution() {
  const pillars = [
    {
      number: '01',
      title: 'مشارکت در تصمیم‌سازی محصول',
      description:
        'حضور در مراحل تعریف مسئله، شکل‌گیری تجربه کاربر و ارزیابی راهکارهای طراحی.',
      accent: 'primary',
    },
    {
      number: '02',
      title: 'راهبری هویت و استانداردهای بصری',
      description:
        'ایجاد انسجام در تجربه بصری، توسعه استانداردها و حفظ کیفیت خروجی‌ها در نقاط تماس برند.',
      accent: 'secondary',
    },
    {
      number: '03',
      title: 'اولویت‌بندی و مدیریت ظرفیت',
      description:
        'مشارکت در تعیین اولویت درخواست‌ها بر اساس اهمیت، پیچیدگی و اثر مورد انتظار.',
      accent: 'primary',
    },
    {
      number: '04',
      title: 'هم‌راستایی با اهداف کسب‌وکار',
      description:
        'اتصال تصمیم‌های خلاقانه به نیازهای محصول، مارکتینگ و اهداف کلان سازمان.',
      accent: 'secondary',
    },
  ];

  return (
    <SlideContainer
      slideNumber={8}
      totalSlides={12}
      eyebrow="07 / BEYOND EXECUTION"
      title="از اجرای سفارش تا مشارکت در خلق ارزش"
      description="ظرفیت تخصصی تیم زمانی بیشترین اثر را ایجاد می‌کند که در کنار اجرای حرفه‌ای، در تعریف مسئله و تصمیم‌سازی نیز مشارکت داشته باشد."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
        {pillars.map((pillar) => (
          <div key={pillar.number} className="surface-card p-6 md:p-7">
            <div className="flex items-center justify-between">
              <span
                className={`text-3xl font-black ${
                  pillar.accent === 'secondary'
                    ? 'text-secondary'
                    : 'text-primary-300'
                }`}
              >
                {pillar.number}
              </span>
              <span
                className={`w-10 h-1 rounded-full ${
                  pillar.accent === 'secondary' ? 'bg-secondary' : 'bg-primary'
                }`}
              />
            </div>

            <h3 className="text-xl font-black mt-5">{pillar.title}</h3>

            <p className="text-sm text-white/55 leading-8 mt-3">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-primary/25 bg-primary/8 p-5 md:p-6">
        <div className="text-primary-300 text-sm font-bold mb-2">
          THE STRATEGIC SHIFT
        </div>
        <p className="text-lg md:text-xl font-bold leading-9">
          هدف، حذف نقش اجرایی نیست؛ هدف، اضافه‌کردن نقش مشورتی و تصمیم‌ساز به
          تخصص اجرایی تیم است.
        </p>
      </div>

      <p className="text-xs text-white/35 mt-4">
        موارد این اسلاید، پیشنهاد برای توسعه نقش آینده تیم هستند و نباید
        به‌عنوان اختیارات فعلی آن تلقی شوند.
      </p>
    </SlideContainer>
  );
}

export default Slide08BeyondExecution;
