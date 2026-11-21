import React from 'react';
import SlideContainer from '../components/layout/SlideContainer';
import { organizationalDistribution } from '../data/metrics';
import '../styles/slides/slide-04.css';

const formatNumber = (value) => Number(value || 0).toLocaleString('fa-IR');

const formatPercent = (value) =>
  Number(value || 0).toLocaleString('fa-IR', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

function Slide04BusinessReach() {
  const sortedUnits = [...organizationalDistribution].sort(
    (a, b) => b.value - a.value,
  );

  const total = sortedUnits.reduce((sum, item) => sum + item.value, 0);
  const topTwo = sortedUnits.slice(0, 2);
  const topTwoTotal = topTwo.reduce((sum, item) => sum + item.value, 0);
  const share = total > 0 ? (topTwoTotal / total) * 100 : 0;
  const maxValue = sortedUnits[0]?.value || 1;

  return (
    <SlideContainer
      slideNumber={4}
      totalSlides={12}
      eyebrow="03 / ORGANIZATIONAL REACH"
      title="اثرگذاری تیم، محدود به یک واحد سازمانی نیست"
      description="درخواست‌های ثبت‌شده در Jira از ۱۱ واحد سازمانی دریافت شده‌اند؛ نشانه‌ای از گستره خدمات تیم در بخش‌های مختلف کسب‌وکار."
    >
      <div className="reach-layout">
        <section className="reach-insight">
          <div className="reach-insight-top">
            <span className="reach-kicker">CROSS-FUNCTIONAL IMPACT</span>
            <span className="reach-index">01 / 02</span>
          </div>

          <div className="reach-insight-main">
            <span className="reach-insight-label">
              سهم دو واحد با بیشترین درخواست
            </span>

            <div className="reach-share">
              {formatPercent(share)}
              <span>٪</span>
            </div>

            <h3>بیش از سه‌چهارم درخواست‌ها از دو واحد اصلی می‌آید.</h3>

            <p>
              دو واحد نخست در مجموع {formatNumber(topTwoTotal)} درخواست به تیم
              خلاقیت و طراحی محصول تخصیص داده‌اند.
            </p>
          </div>

          <div className="reach-focus-units">
            {topTwo.map((unit, index) => {
              const percentage = total > 0 ? (unit.value / total) * 100 : 0;

              return (
                <div
                  className={`reach-focus-unit ${
                    index === 0
                      ? 'reach-focus-unit--mint'
                      : 'reach-focus-unit--orange'
                  }`}
                  key={unit.name}
                >
                  <span className="reach-unit-dot" />

                  <div className="reach-focus-copy">
                    <strong>{unit.name}</strong>
                    <span>{formatNumber(unit.value)} درخواست</span>
                  </div>

                  <b>{formatPercent(percentage)}٪</b>
                </div>
              );
            })}
          </div>

          <div className="reach-insight-footer">
            <span>از مجموع {formatNumber(total)} درخواست تخصیص‌یافته</span>
            <strong>{formatNumber(sortedUnits.length)} واحد سازمانی</strong>
          </div>
        </section>

        <section className="reach-chart-panel">
          <div className="reach-chart-header">
            <div>
              <span className="reach-kicker">REQUEST DISTRIBUTION</span>
              <h3>توزیع درخواست‌ها بین واحدها</h3>
              <p>رتبه‌بندی بر اساس تعداد درخواست تخصیص‌یافته</p>
            </div>

            <div className="reach-total">
              <strong>{formatNumber(total)}</strong>
              <span>درخواست</span>
            </div>
          </div>

          <div className="reach-bars">
            {sortedUnits.map((unit, index) => {
              const width = (unit.value / maxValue) * 100;
              const percentage = total > 0 ? (unit.value / total) * 100 : 0;

              return (
                <div className="reach-bar-row" key={unit.name}>
                  <div className="reach-bar-meta">
                    <div className="reach-bar-name">
                      <span
                        className={`reach-rank ${index < 2 ? 'primary' : ''}`}
                      >
                        {formatNumber(index + 1)}
                      </span>

                      <span>{unit.name}</span>
                    </div>

                    <div className="reach-bar-value">
                      <strong>{formatNumber(unit.value)}</strong>
                      <span>{formatPercent(percentage)}٪</span>
                    </div>
                  </div>

                  <div className="reach-track">
                    <div
                      className={`reach-fill ${
                        index === 0 ? 'mint' : index === 1 ? 'orange' : ''
                      }`}
                      style={{ width: `${width}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="reach-chart-footer">
            <span>مبنای مقایسه: درخواست‌های تخصیص‌یافته به تیم</span>
            <span>{formatNumber(sortedUnits.length)} واحد</span>
          </div>
        </section>

        <div className="reach-bottom-line">
          <span className="reach-bottom-symbol">↗</span>
          <p>
            گستره دریافت درخواست‌ها نشان می‌دهد ظرفیت طراحی و خلاقیت در خدمت
            نیازهای چندین بخش سازمان قرار دارد؛ نه فقط یک واحد.
          </p>
        </div>
      </div>
    </SlideContainer>
  );
}

export default Slide04BusinessReach;
