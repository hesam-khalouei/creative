import React from 'react';
import SlideContainer from '../components/layout/SlideContainer';
import { jiraMetrics } from '../data/metrics';

function Slide06Performance() {
  const statuses = [
    { name: 'Done', value: 757, color: 'bg-primary' },
    { name: 'Closed', value: 24, color: 'bg-primary-700' },
    { name: 'Canceled', value: 48, color: 'bg-secondary' },
    { name: 'In Progress', value: 15, color: 'bg-blue-400' },
    { name: 'QUEUE', value: 6, color: 'bg-purple-400' },
    { name: 'New', value: 3, color: 'bg-white/50' },
    { name: 'Pending', value: 3, color: 'bg-white/30' },
  ];

  return (
    <SlideContainer
      slideNumber={6}
      totalSlides={12}
      eyebrow="05 / PERFORMANCE"
      title="تصویر عملکرد در جریان کار"
      description="وضعیت فعلی درخواست‌های تخصیص‌یافته به تیم در Jira، نمایی از حجم کارهای تعیین‌تکلیف‌شده و درخواست‌های باز ارائه می‌کند."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-7">
        <div className="surface-card p-6">
          <div className="text-primary-300 text-sm font-bold">DONE</div>
          <div className="text-4xl font-black mt-4">
            {jiraMetrics.completedStatus.toLocaleString('fa-IR')}
          </div>
          <p className="text-sm text-white/45 mt-2">درخواست با وضعیت Done</p>
        </div>

        <div className="surface-card p-6">
          <div className="text-primary-300 text-sm font-bold">CLOSED</div>
          <div className="text-4xl font-black mt-4">
            {jiraMetrics.closedStatus.toLocaleString('fa-IR')}
          </div>
          <p className="text-sm text-white/45 mt-2">درخواست با وضعیت Closed</p>
        </div>

        <div className="surface-card p-6">
          <div className="text-secondary text-sm font-bold">DONE + CLOSED</div>
          <div className="text-4xl font-black mt-4 text-secondary">
            {jiraMetrics.doneOrClosedRatio.toLocaleString('fa-IR')}٪
          </div>
          <p className="text-sm text-white/45 mt-2">
            سهم درخواست‌های دارای یکی از این دو وضعیت
          </p>
        </div>
      </div>

      <div className="surface-card p-6 mt-6">
        <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
          <h3 className="font-black text-lg">توزیع وضعیت درخواست‌ها</h3>
          <span className="text-xs text-white/40">مجموع: ۸۵۶ درخواست</span>
        </div>

        <div className="flex h-5 overflow-hidden rounded-full bg-white/10">
          {statuses.map((status) => (
            <div
              key={status.name}
              className={`${status.color} h-full`}
              style={{ width: `${(status.value / 856) * 100}%` }}
              title={`${status.name}: ${status.value}`}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-7">
          {statuses.map((status) => (
            <div key={status.name} className="flex items-center gap-3">
              <span className={`w-3 h-3 rounded-sm shrink-0 ${status.color}`} />
              <div>
                <div className="text-sm text-white/65">{status.name}</div>
                <div className="font-bold tabular-nums">
                  {status.value.toLocaleString('fa-IR')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs text-white/35 mt-5 leading-6">
        وضعیت‌ها، آخرین وضعیت ثبت‌شده در داده‌های Jira هستند. Done و Closed
        به‌تنهایی نشان‌دهنده کیفیت خروجی یا موفقیت تجاری نیستند.
      </p>
    </SlideContainer>
  );
}

export default Slide06Performance;
