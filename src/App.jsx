import React from 'react';

import usePresentation from './hooks/usePresentation';
import SlideContainer from './components/layout/SlideContainer';
import ProgressBar from './components/navigation/ProgressBar';
import SlideNavigation from './components/navigation/SlideNavigation';

function App() {
  const slides = [
    {
      id: 'cover',
      eyebrow: 'گزارش عملکرد و جایگاه سازمانی',
      title: (
        <>
          تیم خلاقیت
          <br />
          <span className="text-gradient">و طراحی محصول</span>
        </>
      ),
      description:
        'از اجرای درخواست‌ها تا خلق ارزش برای کسب‌وکار؛ روایتی از عملکرد، دامنه اثرگذاری و نقش تیم خلاقیت و طراحی محصول.',
      content: (
        <div className="mt-10 flex items-center gap-4">
          <div className="w-12 h-[3px] bg-secondary rounded-full" />
          <span className="text-sm text-white/50">
            فروردین ۱۴۰۴ — آبان ۱۴۰۵
          </span>
        </div>
      ),
    },

    {
      id: 'introduction',
      eyebrow: '01 / EXECUTIVE SUMMARY',
      title: 'خلاقیت، فراتر از یک واحد اجرایی',
      description:
        'تیم خلاقیت و طراحی محصول، یک ظرفیت تخصصی میان‌سازمانی است که تجربه محصول، هویت بصری و ارتباطات برند را به هم متصل می‌کند.',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
          <div className="surface-card p-6">
            <div className="metric-value">856</div>
            <div className="metric-label">درخواست تخصیص‌یافته به اعضای تیم</div>
          </div>

          <div className="surface-card p-6">
            <div className="metric-value">11</div>
            <div className="metric-label">واحد سازمانی دریافت‌کننده خدمات</div>
          </div>
        </div>
      ),
    },

    {
      id: 'team',
      eyebrow: '02 / TEAM',
      title: 'متخصصانی با مسئولیت‌های مکمل',
      description:
        'ترکیبی از مدیریت خلاقیت، طراحی محصول، طراحی گرافیک و موشن گرافیک.',
      content: (
        <div className="surface-card p-6 mt-8">
          <p className="text-white/70">تیم هشت‌نفره خلاقیت و طراحی محصول</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
            {[
              'صدرا بهبودی',
              'علیرضا خطیبی',
              'امیرحسام خالویی',
              'مینا شافعی',
              'افسانه میررستمی',
              'امیرحسین فراهانی',
              'مهران سلطان محمدی',
              'پارسا نوایی',
            ].map((name) => (
              <div
                key={name}
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-center"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  const presentation = usePresentation(slides.length);

  const current = slides[presentation.currentSlide];

  return (
    <main className="presentation">
      <ProgressBar progress={presentation.progress} />

      <div className="slide-glow slide-glow-primary" />
      <div className="slide-glow slide-glow-secondary" />

      <div className="slide-viewport">
        <SlideContainer
          key={current.id}
          slideNumber={presentation.currentSlide + 1}
          totalSlides={slides.length}
          eyebrow={current.eyebrow}
          title={current.title}
          description={current.description}
        >
          {current.content}
        </SlideContainer>
      </div>

      <SlideNavigation
        currentSlide={presentation.currentSlide}
        totalSlides={presentation.totalSlides}
        nextSlide={presentation.nextSlide}
        previousSlide={presentation.previousSlide}
        isFirstSlide={presentation.isFirstSlide}
        isLastSlide={presentation.isLastSlide}
      />
    </main>
  );
}

export default App;
