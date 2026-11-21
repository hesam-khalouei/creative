import React from 'react';
import SlideContainer from '../components/layout/SlideContainer';
import { organizationalDistribution } from '../data/metrics';

function Slide04BusinessReach() {
  const total = organizationalDistribution.reduce(
    (sum, item) => sum + item.value,
    0,
  );

  const maxValue = Math.max(
    ...organizationalDistribution.map((item) => item.value),
  );

  return (
    <SlideContainer
      slideNumber={4}
      totalSlides={12}
      eyebrow="03 / BUSINESS REACH"
      title="اثرگذاری تیم محدود به مارکتینگ نیست"
      description="درخواست‌های ثبت‌شده نشان می‌دهند خروجی‌های تیم خلاقیت در خدمت بخش‌های مختلف سازمان قرار گرفته‌اند."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-7">
        <div className="surface-card p-6 lg:col-span-4 flex flex-col justify-center">
          <div className="text-primary-300 text-sm font-bold">
            ORGANIZATIONAL REACH
          </div>
          <div className="text-6xl font-black mt-5 text-white">۱۱</div>
          <div className="text-white/70 mt-2">
            واحد سازمانی دریافت‌کننده خدمات
          </div>
          <div className="h-px bg-white/10 my-6" />
          <div className="text-3xl font-black text-secondary">۷۷.۹٪</div>
          <p className="text-sm text-white/50 leading-7 mt-2">
            سهم واحدهای مارکتینگ و محصول از درخواست‌های تخصیص‌یافته به تیم
          </p>
        </div>

        <div className="surface-card p-6 lg:col-span-8">
          <div className="flex items-center justify-between gap-3 mb-6">
            <h3 className="font-black text-lg">
              توزیع درخواست‌ها بر اساس واحد سازمانی
            </h3>
            <span className="text-xs text-white/40">
              مجموع: {total.toLocaleString('fa-IR')}
            </span>
          </div>

          <div className="space-y-4">
            {organizationalDistribution.map((item, index) => (
              <div key={item.name}>
                <div className="flex justify-between items-center text-sm mb-2">
                  <span className="text-white/75">{item.name}</span>
                  <span className="font-bold text-white tabular-nums">
                    {item.value.toLocaleString('fa-IR')}
                  </span>
                </div>
                <div className="h-2.5 rounded-full bg-white/8 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      index < 2
                        ? 'bg-primary'
                        : 'bg-gradient-to-l from-primary-700 to-primary-400'
                    }`}
                    style={{
                      width: `${(item.value / maxValue) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-xs text-white/35 mt-5 leading-6">
        مبنا: ۸۵۶ درخواست تخصیص‌یافته به اعضای تیم در Jira. این توزیع، حجم
        درخواست‌های ثبت‌شده را نشان می‌دهد و معادل ارزش مالی یا میزان اثر تجاری
        هر واحد نیست.
      </p>
    </SlideContainer>
  );
}

export default Slide04BusinessReach;
