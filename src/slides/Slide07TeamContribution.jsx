import React from 'react';
import SlideContainer from '../components/layout/SlideContainer';
import { teamWorkload } from '../data/metrics';

function Slide07TeamContribution() {
  const sortedMembers = [...teamWorkload].sort((a, b) => b.value - a.value);

  const maxValue = Math.max(...sortedMembers.map((item) => item.value));

  return (
    <SlideContainer
      slideNumber={7}
      totalSlides={12}
      eyebrow="06 / TEAM CONTRIBUTION"
      title="پشتوانه عملکرد، تخصص‌های مکمل اعضای تیم"
      description="توزیع درخواست‌های تخصیص‌یافته، تصویری از پراکندگی حجم ثبت‌شده کار میان اعضای تیم ارائه می‌کند."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-7">
        <div className="surface-card p-6 lg:col-span-8">
          <div className="flex justify-between items-center gap-3 mb-6">
            <h3 className="font-black text-lg">
              درخواست‌های تخصیص‌یافته به هر عضو
            </h3>
            <span className="text-xs text-white/40">۸ عضو تیم</span>
          </div>

          <div className="space-y-5">
            {sortedMembers.map((member, index) => (
              <div key={member.name}>
                <div className="flex justify-between items-center gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-black ${
                        index === 0 ? 'text-secondary' : 'text-white/35'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm text-white/80">{member.name}</span>
                  </div>

                  <strong className="text-sm tabular-nums">
                    {member.value.toLocaleString('fa-IR')}
                  </strong>
                </div>

                <div className="h-3 rounded-full bg-white/8 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      index === 0
                        ? 'bg-secondary'
                        : 'bg-gradient-to-l from-primary-700 to-primary-300'
                    }`}
                    style={{
                      width: `${(member.value / maxValue) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-5">
          <div className="surface-card p-6">
            <div className="text-secondary text-sm font-bold">
              HIGHEST ASSIGNED VOLUME
            </div>
            <div className="text-2xl font-black mt-4">
              {sortedMembers[0].name}
            </div>
            <div className="text-4xl font-black text-secondary mt-3">
              {sortedMembers[0].value.toLocaleString('fa-IR')}
            </div>
            <p className="text-xs text-white/45 mt-2">
              بیشترین تعداد درخواست تخصیص‌یافته در داده‌های بررسی‌شده
            </p>
          </div>

          <div className="surface-card p-6 flex-1">
            <div className="text-primary-300 text-sm font-bold">
              TEAM STRUCTURE
            </div>
            <div className="text-4xl font-black mt-4">۸</div>
            <p className="text-white/65 mt-2">عضو با تخصص‌های مکمل</p>
            <div className="h-px bg-white/10 my-5" />
            <p className="text-sm text-white/50 leading-7">
              مدیریت خلاقیت، طراحی محصول، طراحی گرافیک و موشن گرافیک
            </p>
          </div>
        </div>
      </div>

      <p className="text-xs text-white/35 mt-5 leading-6">
        مبنا: تعداد درخواست‌های تخصیص‌یافته در Jira. این اعداد معیار مستقیمی
        برای ساعات کار، بهره‌وری، کیفیت یا مقایسه عملکرد فردی نیستند.
      </p>
    </SlideContainer>
  );
}

export default Slide07TeamContribution;
