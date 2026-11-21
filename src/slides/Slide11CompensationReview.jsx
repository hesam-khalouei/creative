import React from 'react';
import SlideContainer from '../components/layout/SlideContainer';

function Slide11CompensationReview() {
  const roleGroups = [
    {
      role: 'مدیریت تیم خلاقیت',
      subtitle: 'Creative Leadership',
      criteria: [
        'مسئولیت راهبری و جهت‌دهی تخصصی',
        'مدیریت ظرفیت و اولویت‌های تیم',
        'اثرگذاری بین‌واحدی و پاسخ‌گویی مدیریتی',
      ],
      accent: 'secondary',
    },
    {
      role: 'تیم لید طراحی محصول',
      subtitle: 'Product Design Team Lead',
      criteria: [
        'هدایت تخصصی و هماهنگی اجرای کار',
        'کیفیت تصمیم‌های طراحی و حل مسئله',
        'مربی‌گری و توسعه توانمندی اعضا',
      ],
      accent: 'primary',
    },
    {
      role: 'کارشناسان ارشد تخصصی',
      subtitle: 'Senior Specialists',
      criteria: [
        'عمق تخصص و پیچیدگی مسائل حل‌شده',
        'مالکیت خروجی و کیفیت تحویل',
        'استقلال حرفه‌ای و اثرگذاری تخصصی',
      ],
      accent: 'primary',
    },
  ];

  return (
    <SlideContainer
      slideNumber={11}
      totalSlides={12}
      eyebrow="10 / COMPENSATION REVIEW"
      title="بازنگری حقوق؛ متناسب با نقش، مسئولیت و اثرگذاری"
      description="پیشنهاد می‌شود بازنگری جبران خدمات برای تمام اعضای تیم انجام شود، اما مبنای ارزیابی و میزان تعدیل برای هر نقش متناسب با مسئولیت‌های آن باشد."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
        {roleGroups.map((group) => (
          <div key={group.role} className="surface-card p-6">
            <div
              className={`text-xs font-bold ${
                group.accent === 'secondary'
                  ? 'text-secondary'
                  : 'text-primary-300'
              }`}
            >
              {group.subtitle}
            </div>

            <h3 className="text-xl font-black mt-4 min-h-[3.5rem]">
              {group.role}
            </h3>

            <div className="h-px bg-white/10 my-5" />

            <ul className="space-y-4">
              {group.criteria.map((criterion) => (
                <li
                  key={criterion}
                  className="flex items-start gap-3 text-sm text-white/65 leading-7"
                >
                  <span className="text-primary-300 mt-1">◆</span>
                  <span>{criterion}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="surface-card p-6 mt-6">
        <h3 className="font-black text-lg mb-4">
          مبانی پیشنهادی برای تعیین میزان بازنگری
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'سطح مسئولیت',
            'تخصص و مهارت',
            'پیچیدگی کار',
            'مالکیت و اثرگذاری',
          ].map((item, index) => (
            <div
              key={item}
              className="rounded-xl bg-white/5 border border-white/10 p-4 text-center"
            >
              <div className="text-primary-300 font-black text-xl">
                0{index + 1}
              </div>
              <div className="text-sm font-bold mt-2">{item}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 border border-secondary/25 bg-secondary/8 rounded-2xl p-5">
        <p className="text-sm md:text-base leading-8 text-white/80">
          <strong className="text-secondary">درخواست مشخص:</strong> بررسی حقوق
          تمام اعضای تیم و تعیین تعدیل متناسب با نقش و شرایط هر فرد، بر اساس
          ارزیابی عملکرد، دامنه مسئولیت، ساختار حقوقی سازمان و معیارهای بازار.
        </p>
      </div>

      <p className="text-xs text-white/35 mt-4 leading-6">
        درصد افزایش برای هر فرد در این مرحله تعیین نمی‌شود؛ تعیین عدد نهایی
        نیازمند بررسی حقوق فعلی، بازه‌های حقوقی، بودجه و معیارهای منابع انسانی
        است.
      </p>
    </SlideContainer>
  );
}

export default Slide11CompensationReview;
