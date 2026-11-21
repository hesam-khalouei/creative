import React from 'react';
import SlideContainer from '../components/layout/SlideContainer';
import MetricCard from '../components/ui/MetricCard';
import { jiraMetrics } from '../data/metrics';

function Slide03TheScale() {
  const coverageWidth = `${jiraMetrics.teamCoverage}%`;

  return (
    <SlideContainer
      slideNumber={3}
      totalSlides={12}
      eyebrow="02 / THE SCALE"
      title="مقیاس فعالیت؛ فراتر از چند درخواست طراحی"
      description="داده‌های Jira نشان می‌دهد تیم خلاقیت در یک بازه زمانی ۲۰ماهه، مسئولیت بخش قابل‌توجهی از درخواست‌های ثبت‌شده سازمان را بر عهده داشته است."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
        <MetricCard
          value={jiraMetrics.totalRequests.toLocaleString('fa-IR')}
          label="کل درخواست‌های ثبت‌شده در Jira"
          accent="secondary"
        />

        <MetricCard
          value={jiraMetrics.teamAssignedRequests.toLocaleString('fa-IR')}
          label="درخواست‌های تخصیص‌یافته به تیم"
          accent="primary"
        />

        <MetricCard
          value={`${jiraMetrics.teamCoverage.toLocaleString('fa-IR')}٪`}
          label="سهم تیم از کل درخواست‌های ثبت‌شده"
          accent="primary"
        />
      </div>

      <div className="surface-card p-6 md:p-8 mt-6">
        <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
          <div>
            <h3 className="text-xl font-black">
              سهم درخواست‌های تخصیص‌یافته به تیم
            </h3>
            <p className="text-sm text-white/45 mt-2">
              نسبت درخواست‌های تخصیص‌یافته به تیم به کل درخواست‌های Jira
            </p>
          </div>

          <div className="text-3xl md:text-4xl font-black text-primary-300">
            {jiraMetrics.teamCoverage.toLocaleString('fa-IR')}٪
          </div>
        </div>

        <div className="h-5 rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-l from-primary-300 to-primary transition-all duration-1000"
            style={{ width: coverageWidth }}
          />
        </div>

        <div className="flex justify-between text-xs text-white/40 mt-3">
          <span>
            {jiraMetrics.teamAssignedRequests.toLocaleString('fa-IR')} درخواست
            تخصیص‌یافته به تیم
          </span>
          <span>
            {(
              jiraMetrics.totalRequests - jiraMetrics.teamAssignedRequests
            ).toLocaleString('fa-IR')}{' '}
            درخواست دیگر
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
        <div className="surface-card p-6">
          <div className="text-primary-300 text-sm font-bold mb-3">
            TIMEFRAME
          </div>
          <div className="text-2xl font-black">۲۰ ماه فعالیت ثبت‌شده</div>
          <p className="text-sm text-white/50 mt-2 leading-7">
            از فروردین ۱۴۰۴ تا آبان ۱۴۰۵
          </p>
        </div>

        <div className="surface-card p-6">
          <div className="text-secondary text-sm font-bold mb-3">
            ORGANIZATIONAL REACH
          </div>
          <div className="text-2xl font-black">۱۱ واحد سازمانی</div>
          <p className="text-sm text-white/50 mt-2 leading-7">
            درخواست‌های ثبت‌شده از واحدهای مختلف سازمان به تیم تخصیص یافته‌اند.
          </p>
        </div>
      </div>

      <p className="text-xs text-white/35 leading-6 mt-5">
        منبع: داده‌های Jira. تعداد درخواست‌ها نشان‌دهنده حجم ثبت و تخصیص کار
        است؛ این شاخص به‌تنهایی معادل ساعات کار، تعداد پروژه‌های مستقل یا میزان
        تلاش نیست.
      </p>
    </SlideContainer>
  );
}

export default Slide03TheScale;
