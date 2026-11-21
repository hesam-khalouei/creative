import React from 'react';
import SlideContainer from '../components/layout/SlideContainer';
import { teamWorkload } from '../data/metrics';
import '../styles/slides/slide-07.css';

const roleMap = {
  'امیرحسین فراهانی': 'طراحی گرافیک',
  'پارسا نوایی': 'موشن گرافیک',
  'مهران سلطان محمدی': 'طراحی گرافیک',
  'امیرحسام خالویی': 'طراحی محصول',
  'مینا شافعی': 'طراحی محصول',
  'صدرا بهبودی': 'مدیریت تیم',
  'علیرضا خطیبی': 'لید طراحی محصول',
  'افسانه میررستمی': 'طراحی محصول',
};

const formatNumber = (value) => new Intl.NumberFormat('fa-IR').format(value);

export default function Slide07TeamContribution() {
  const members = [...teamWorkload].sort((a, b) => b.value - a.value);
  const total = members.reduce((sum, member) => sum + member.value, 0);
  const maxValue = Math.max(...members.map((member) => member.value));
  const highest = members[0];
  const lowest = members[members.length - 1];

  const groups = [
    {
      name: 'طراحی محصول',
      members: members.filter((m) => roleMap[m.name] === 'طراحی محصول'),
      color: '#00A693',
    },
    {
      name: 'طراحی گرافیک و موشن',
      members: members.filter((m) =>
        ['طراحی گرافیک', 'موشن گرافیک'].includes(roleMap[m.name]),
      ),
      color: '#FF8A34',
    },
    {
      name: 'مدیریت و راهبری',
      members: members.filter((m) =>
        ['مدیریت تیم', 'لید طراحی محصول'].includes(roleMap[m.name]),
      ),
      color: '#8B9CF6',
    },
  ];

  return (
    <SlideContainer
      slideNumber={7}
      totalSlides={12}
      eyebrow="06 / TEAM CONTRIBUTION"
      title="مشارکت اعضا در جریان کار"
      description="نمایی از درخواست‌های تخصیص‌یافته به هر یک از اعضای تیم در بازه بررسی‌شده"
    >
      <section className="contribution-dashboard">
        <div className="contribution-overview">
          <div className="contribution-total">
            <span className="contribution-kicker">TEAM ACTIVITY</span>
            <strong>{formatNumber(total)}</strong>
            <span>درخواست تخصیص‌یافته به اعضای تیم</span>
          </div>

          <div className="contribution-insight">
            <div className="contribution-insight-item">
              <span className="contribution-insight-number">
                {formatNumber(members.length)}
              </span>
              <span>عضو تیم</span>
            </div>
            <div className="contribution-insight-divider" />
            <div className="contribution-insight-item">
              <span className="contribution-insight-number">
                {formatNumber(highest.value)}
              </span>
              <span>بیشترین تعداد تخصیص</span>
            </div>
            <div className="contribution-insight-divider" />
            <div className="contribution-insight-item">
              <span className="contribution-insight-number">
                {formatNumber(Math.round(total / members.length))}
              </span>
              <span>میانگین تخصیص به هر نفر</span>
            </div>
          </div>
        </div>

        <div className="contribution-content">
          <div className="contribution-chart">
            <div className="contribution-section-heading">
              <div>
                <span className="contribution-kicker">
                  INDIVIDUAL DISTRIBUTION
                </span>
                <h3>توزیع درخواست‌ها بین اعضا</h3>
              </div>
              <span className="contribution-unit">تعداد درخواست</span>
            </div>

            <div className="contribution-member-list">
              {members.map((member, index) => {
                const share = (member.value / total) * 100;
                const width = (member.value / maxValue) * 100;

                return (
                  <div className="contribution-member" key={member.name}>
                    <div className="contribution-member-meta">
                      <span className="contribution-rank">
                        {formatNumber(index + 1).padStart(2, '۰')}
                      </span>
                      <div className="contribution-member-name">
                        <strong>{member.name}</strong>
                        <span>{roleMap[member.name]}</span>
                      </div>
                    </div>

                    <div className="contribution-bar-area">
                      <div className="contribution-bar-track">
                        <div
                          className={`contribution-bar-fill contribution-bar-fill--${index < 3 ? 'accent' : 'default'}`}
                          style={{ width: `${width}%` }}
                        />
                      </div>
                    </div>

                    <div className="contribution-member-value">
                      <strong>{formatNumber(member.value)}</strong>
                      <span>{formatNumber(share.toFixed(1))}٪</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <aside className="contribution-groups">
            <div className="contribution-section-heading">
              <div>
                <span className="contribution-kicker">DISCIPLINES</span>
                <h3>حوزه‌های تخصصی</h3>
              </div>
            </div>

            {groups.map((group) => {
              const groupTotal = group.members.reduce(
                (sum, member) => sum + member.value,
                0,
              );

              return (
                <div className="contribution-group" key={group.name}>
                  <div className="contribution-group-top">
                    <span
                      className="contribution-group-dot"
                      style={{ background: group.color }}
                    />
                    <strong>{group.name}</strong>
                    <span>{formatNumber(groupTotal)}</span>
                  </div>
                  <div className="contribution-group-track">
                    <div
                      style={{
                        width: `${(groupTotal / total) * 100}%`,
                        background: group.color,
                      }}
                    />
                  </div>
                  <span className="contribution-group-members">
                    {group.members.map((m) => m.name).join('، ')}
                  </span>
                </div>
              );
            })}

            <div className="contribution-range">
              <span>دامنه تعداد تخصیص</span>
              <strong>
                {formatNumber(lowest.value)}
                <span> تا </span>
                {formatNumber(highest.value)}
              </strong>
              <small>درخواست برای هر عضو</small>
            </div>
          </aside>
        </div>

        <div className="contribution-footnote">
          <span />
          <p>
            تعداد درخواست‌های تخصیص‌یافته، شاخصی از حجم ثبت‌شده در Jira است؛ نه
            معادل ساعات کار، پیچیدگی وظایف یا ارزیابی عملکرد افراد.
          </p>
        </div>
      </section>
    </SlideContainer>
  );
}
