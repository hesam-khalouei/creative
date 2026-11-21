import React from 'react';
import SlideContainer from '../components/layout/SlideContainer';
import { jiraMetrics } from '../data/metrics';
import '../styles/slides/slide-06.css';

const statusData = [
  { name: 'Done', label: 'انجام‌شده', value: 757, color: '#00A693' },
  { name: 'Closed', label: 'بسته‌شده', value: 24, color: '#53CBB7' },
  { name: 'Canceled', label: 'لغوشده', value: 48, color: '#FF8A34' },
  { name: 'In Progress', label: 'در حال انجام', value: 15, color: '#6B9CFF' },
  { name: 'QUEUE', label: 'در صف', value: 6, color: '#A78BFA' },
  { name: 'New', label: 'جدید', value: 3, color: '#D5A6E8' },
  { name: 'Pending', label: 'در انتظار', value: 3, color: '#8B929E' },
];

const formatNumber = (value) => new Intl.NumberFormat('fa-IR').format(value);

export default function Slide06Performance() {
  const total = jiraMetrics.teamAssignedRequests;
  const doneOrClosed = jiraMetrics.doneOrClosed;
  const ratio = (doneOrClosed / total) * 100;
  const remaining = total - doneOrClosed;

  let offset = 0;
  const segments = statusData.map((item) => {
    const start = offset;
    offset += (item.value / total) * 100;
    return `${item.color} ${start}% ${offset}%`;
  });

  const ringStyle = {
    background: `conic-gradient(${segments.join(', ')})`,
  };

  return (
    <SlideContainer
      slideNumber={6}
      totalSlides={12}
      eyebrow="05 / DELIVERY STATUS"
      title="وضعیت درخواست‌ها در Jira"
      description="تصویری از وضعیت فعلی ۸۵۶ درخواست تخصیص‌یافته به اعضای تیم"
    >
      <section className="status-dashboard">
        <div className="status-main">
          <div className="status-hero">
            <div className="status-hero-top">
              <span className="status-kicker">وضعیت Done و Closed</span>
              <span className="status-index">01 / 02</span>
            </div>

            <div className="status-ring-wrap">
              <div className="status-ring" style={ringStyle}>
                <div className="status-ring-inner">
                  <strong>{formatNumber(ratio.toFixed(1))}٪</strong>
                  <span>از درخواست‌ها</span>
                </div>
              </div>
            </div>

            <div className="status-hero-bottom">
              <div>
                <strong>{formatNumber(doneOrClosed)}</strong>
                <span>درخواست در وضعیت Done یا Closed</span>
              </div>
              <div className="status-hero-divider" />
              <div>
                <strong>{formatNumber(remaining)}</strong>
                <span>در سایر وضعیت‌ها</span>
              </div>
            </div>
          </div>

          <div className="status-breakdown">
            <div className="status-breakdown-heading">
              <div>
                <span className="status-kicker">BREAKDOWN</span>
                <h3>جزئیات وضعیت‌ها</h3>
              </div>
              <span className="status-total">
                {formatNumber(total)} درخواست
              </span>
            </div>

            <div className="status-list">
              {statusData.map((item, index) => {
                const percentage = (item.value / total) * 100;

                return (
                  <div className="status-row" key={item.name}>
                    <div
                      className="status-dot"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="status-row-name">{item.label}</span>
                    <div className="status-row-track">
                      <div
                        className="status-row-fill"
                        style={{
                          width: `${percentage}%`,
                          backgroundColor: item.color,
                        }}
                      />
                    </div>
                    <strong className="status-row-value">
                      {formatNumber(item.value)}
                    </strong>
                    <span className="status-row-percent">
                      {formatNumber(percentage.toFixed(1))}٪
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="status-footer">
          <div className="status-footer-title">
            <span className="status-kicker">STATUS DISTRIBUTION</span>
            <strong>توزیع کل درخواست‌ها</strong>
          </div>

          <div className="status-segmented-bar">
            {statusData.map((item) => (
              <div
                key={item.name}
                title={`${item.label}: ${formatNumber(item.value)}`}
                style={{
                  width: `${(item.value / total) * 100}%`,
                  backgroundColor: item.color,
                }}
              />
            ))}
          </div>

          <div className="status-footer-note">
            <span className="status-note-mark" />
            <p>
              این اعداد وضعیت ثبت‌شده در Jira را نشان می‌دهند؛ نه به‌تنهایی
              کیفیت خروجی یا موفقیت تجاری پروژه‌ها را.
            </p>
          </div>
        </div>
      </section>
    </SlideContainer>
  );
}
