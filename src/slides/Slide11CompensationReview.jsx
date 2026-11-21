import React from 'react';
import SlideContainer from '../components/layout/SlideContainer';
import '../styles/slides/slide-11.css';

const principles = [
  {
    number: '01',
    title: 'سطح تخصص و تجربه',
    description: 'تناسب جبران خدمات با سطح حرفه‌ای و عمق تخصص هر نقش',
  },
  {
    number: '02',
    title: 'دامنه مسئولیت',
    description: 'میزان مالکیت کار، پیچیدگی تصمیم‌ها و پاسخ‌گویی',
  },
  {
    number: '03',
    title: 'اثرگذاری سازمانی',
    description: 'دامنه همکاری بین‌واحدی و تأثیر نقش بر محصول و برند',
  },
  {
    number: '04',
    title: 'عدالت درون‌تیمی',
    description: 'تناسب دریافتی‌ها با تفاوت نقش‌ها و مسیر رشد حرفه‌ای',
  },
];

const roles = [
  {
    title: 'مدیریت و راهبری',
    people: 'صدرا بهبودی',
    note: 'هدایت تیم و هم‌راستاسازی',
    color: '#8B9CF6',
  },
  {
    title: 'لید طراحی محصول',
    people: 'علیرضا خطیبی',
    note: 'راهبری تخصصی و هدایت طراحی محصول',
    color: '#53CBB7',
  },
  {
    title: 'طراحی محصول',
    people: 'امیرحسام خالویی · مینا شافعی · افسانه میررستمی',
    note: 'طراحی تجربه و راهکارهای محصول',
    color: '#00A693',
  },
  {
    title: 'طراحی گرافیک',
    people: 'امیرحسین فراهانی · مهران سلطان محمدی',
    note: 'هویت و ارتباطات بصری',
    color: '#FF8A34',
  },
  {
    title: 'موشن گرافیک',
    people: 'پارسا نوایی',
    note: 'تجربه‌های متحرک و روایت بصری',
    color: '#D78BCB',
  },
];

export default function Slide11CompensationReview() {
  return (
    <SlideContainer
      slideNumber={11}
      totalSlides={12}
      eyebrow="10 / COMPENSATION REVIEW"
      title="بازنگری حقوق؛ متناسب با نقش و سطح مسئولیت"
      description="پیشنهاد بازبینی جبران خدمات تمام اعضای تیم، با رویکردی متمایز و مبتنی بر نقش"
    >
      <section className="comp-review">
        <div className="comp-review-request">
          <div className="comp-request-copy">
            <span className="comp-kicker">THE PROPOSAL</span>
            <h3>بازنگری برای تمام اعضای تیم</h3>
            <p>
              نه یک درصد یکسان؛ بلکه تصمیمی متناسب با سطح حرفه‌ای، مسئولیت و
              ارزش هر نقش.
            </p>
          </div>

          <div className="comp-request-visual">
            <div className="comp-request-number">
              {new Intl.NumberFormat('fa-IR', {
                useGrouping: false,
              }).format(8)}
            </div>
            <div className="comp-request-caption">
              <strong>عضو تیم</strong>
              <span>در دامنه بازنگری</span>
            </div>
          </div>
        </div>

        <div className="comp-review-content">
          <div className="comp-principles">
            <div className="comp-section-heading">
              <span className="comp-kicker">REVIEW CRITERIA</span>
              <h3>مبنای تصمیم‌گیری</h3>
            </div>

            {principles.map((item) => (
              <div className="comp-principle" key={item.number}>
                <span>{item.number}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="comp-role-map">
            <div className="comp-section-heading">
              <span className="comp-kicker">ROLE DIFFERENTIATION</span>
              <h3>تنوع نقش‌های تخصصی تیم</h3>
            </div>

            <div className="comp-role-list">
              {roles.map((role) => (
                <div className="comp-role" key={role.title}>
                  <span
                    className="comp-role-marker"
                    style={{ background: role.color }}
                  />
                  <div className="comp-role-main">
                    <strong>{role.title}</strong>
                    <span>{role.people}</span>
                    <small>{role.note}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="comp-review-bottom">
          <div className="comp-review-bottom-mark">✓</div>
          <div>
            <span>درخواست مشخص</span>
            <strong>
              بررسی و اصلاح سطح حقوق تمام اعضا بر اساس ارزیابی تفکیکی نقش‌ها
            </strong>
          </div>
          <p>
            تعیین درصد نهایی پس از بررسی سطح فعلی حقوق، بازه‌های بازار و ساختار
            جبران خدمات شرکت انجام شود.
          </p>
        </div>
      </section>
    </SlideContainer>
  );
}
