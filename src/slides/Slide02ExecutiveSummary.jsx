import React from 'react';
import SlideContainer from '../components/layout/SlideContainer';
import MetricCard from '../components/ui/MetricCard';

function Slide02ExecutiveSummary() {
  return (
    <SlideContainer
      slideNumber={2}
      totalSlides={12}
      eyebrow="01 / EXECUTIVE SUMMARY"
      title="خلاقیت، فراتر از یک واحد اجرایی"
      description="تیم خلاقیت و طراحی محصول، یک ظرفیت تخصصی میان‌سازمانی است که تجربه محصول، هویت بصری و ارتباطات برند را به هم متصل می‌کند."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-8">
        <MetricCard
          value="856"
          label="درخواست تخصیص‌یافته به اعضای تیم"
          accent="primary"
        />

        <MetricCard
          value="11"
          label="واحد سازمانی دریافت‌کننده خدمات"
          accent="secondary"
        />

        <MetricCard
          value="77.9٪"
          label="سهم مارکتینگ و محصول از درخواست‌ها"
          accent="primary"
        />

        <MetricCard
          value="91.2٪"
          label="درخواست‌های دارای وضعیت Done یا Closed"
          accent="secondary"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-6">
        <div className="surface-card p-6 lg:col-span-7">
          <div className="text-primary-300 text-sm font-bold mb-3">
            THE CORE MESSAGE
          </div>

          <h3 className="text-2xl md:text-3xl font-black leading-relaxed">
            تیم خلاقیت فقط پاسخ‌گوی درخواست‌ها نیست؛
            <span className="text-gradient">
              {' '}
              در شکل‌گیری تجربه محصول و تصویر برند نقش دارد.
            </span>
          </h3>

          <p className="text-white/55 text-sm leading-8 mt-5">
            گستره درخواست‌ها از طراحی محصول و رابط کاربری تا گرافیک، تصویرسازی و
            موشن نشان می‌دهد که این تیم با چندین جریان کلیدی کسب‌وکار در ارتباط
            است.
          </p>
        </div>

        <div className="surface-card p-6 lg:col-span-5">
          <div className="text-secondary text-sm font-bold mb-4">
            THREE STRATEGIC PILLARS
          </div>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/15 text-primary-300 flex items-center justify-center font-black">
                01
              </div>
              <div>
                <h4 className="font-bold">تجربه محصول</h4>
                <p className="text-sm text-white/50 mt-1 leading-7">
                  طراحی تجربه، رابط کاربری و جریان‌های تعاملی
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center font-black">
                02
              </div>
              <div>
                <h4 className="font-bold">هویت بصری و برند</h4>
                <p className="text-sm text-white/50 mt-1 leading-7">
                  طراحی گرافیک، تصویرسازی و ارتباطات بصری
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/15 text-primary-300 flex items-center justify-center font-black">
                03
              </div>
              <div>
                <h4 className="font-bold">محتوا و حرکت</h4>
                <p className="text-sm text-white/50 mt-1 leading-7">
                  موشن گرافیک و تولید دارایی‌های متحرک
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-white/35 leading-6 mt-5">
        مبنا: داده‌های ثبت‌شده در Jira از فروردین ۱۴۰۴ تا آبان ۱۴۰۵. وضعیت Done
        و Closed صرفاً وضعیت فعلی درخواست‌هاست و معادل موفقیت تجاری نیست.
      </p>
    </SlideContainer>
  );
}

export default Slide02ExecutiveSummary;
