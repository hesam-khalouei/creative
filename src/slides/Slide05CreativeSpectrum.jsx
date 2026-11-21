import React from 'react';
import SlideContainer from '../components/layout/SlideContainer';
import { requestTypes } from '../data/metrics';

function Slide05CreativeSpectrum() {
  const topRequests = requestTypes.slice(0, 12);
  const maxValue = Math.max(...topRequests.map((item) => item.value));

  return (
    <SlideContainer
      slideNumber={5}
      totalSlides={12}
      eyebrow="04 / CREATIVE SPECTRUM"
      title="یک تیم، طیفی از تخصص‌های خلاق"
      description="تنوع درخواست‌ها نشان می‌دهد دامنه فعالیت تیم از طراحی محصول تا هویت بصری، گرافیک، تصویرسازی و محتوای متحرک امتداد دارد."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-7">
        <div className="lg:col-span-8 surface-card p-6">
          <div className="flex items-center justify-between gap-3 mb-6">
            <h3 className="font-black text-lg">پرتکرارترین انواع درخواست</h3>
            <span className="text-xs text-white/40">
              ۱۲ دسته اول از ۲۸ نوع درخواست
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-5">
            {topRequests.map((item, index) => (
              <div key={item.name}>
                <div className="flex justify-between gap-3 text-sm mb-2">
                  <span className="text-white/75">{item.name}</span>
                  <strong className="text-white tabular-nums">
                    {item.value.toLocaleString('fa-IR')}
                  </strong>
                </div>
                <div className="h-2 rounded-full bg-white/8 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      index < 3 ? 'bg-secondary' : 'bg-primary'
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

        <div className="lg:col-span-4 flex flex-col gap-5">
          <div className="surface-card p-6 flex-1">
            <div className="text-secondary text-sm font-bold">
              PRODUCT DESIGN
            </div>
            <h3 className="text-2xl font-black mt-4">طراحی تجربه محصول</h3>
            <p className="text-sm text-white/55 leading-8 mt-3">
              طراحی سرویس، آیکون، یوزرفلو، رابط کاربری، لندینگ پیج و طراحی
              سیستم.
            </p>
          </div>

          <div className="surface-card p-6 flex-1">
            <div className="text-primary-300 text-sm font-bold">
              VISUAL & CONTENT
            </div>
            <h3 className="text-2xl font-black mt-4">هویت بصری و محتوا</h3>
            <p className="text-sm text-white/55 leading-8 mt-3">
              گرافیک سوشال، تصویرسازی، پوستر، طراحی کارت، موشن و دارایی‌های بصری
              برند.
            </p>
          </div>
        </div>
      </div>

      <p className="text-xs text-white/35 mt-5 leading-6">
        نمودار، ۱۲ نوع پرتکرار از مجموع ۲۸ نوع درخواست ثبت‌شده را نمایش می‌دهد.
        تعداد درخواست‌ها نشان‌دهنده فراوانی ثبت هر نوع خدمت است، نه پیچیدگی یا
        زمان موردنیاز آن.
      </p>
    </SlideContainer>
  );
}

export default Slide05CreativeSpectrum;
