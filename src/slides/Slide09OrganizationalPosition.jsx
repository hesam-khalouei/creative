import React from 'react';
import SlideContainer from '../components/layout/SlideContainer';
import { organizationalPosition } from '../data/presentationData';

function Slide09OrganizationalPosition() {
  return (
    <SlideContainer
      slideNumber={9}
      totalSlides={12}
      eyebrow="08 / ORGANIZATIONAL POSITION"
      title="ساختار فعلی، ظرفیت آینده"
      description="برای بهره‌برداری بهتر از تخصص تیم، لازم است جایگاه آن متناسب با دامنه اثرگذاری و ارتباطات میان‌سازمانی‌اش تعریف شود."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8">
        <div className="surface-card p-6 md:p-7">
          <div className="text-white/45 text-sm font-bold">
            CURRENT STRUCTURE
          </div>

          <h3 className="text-xl font-black mt-4">ساختار گزارش‌دهی فعلی</h3>

          <div className="flex flex-col items-center mt-7">
            <div className="w-full max-w-xs rounded-xl border border-white/15 bg-white/5 p-5 text-center">
              <div className="text-white/45 text-xs mb-2">گزارش‌دهی به</div>
              <div className="font-bold text-lg">
                {organizationalPosition.currentReportingLine}
              </div>
            </div>

            <div className="h-9 w-px bg-white/20" />

            <div className="w-full max-w-xs rounded-xl border border-primary/40 bg-primary/10 p-5 text-center">
              <div className="text-primary-300 text-xs mb-2">واحد تخصصی</div>
              <div className="font-black text-lg">تیم خلاقیت و طراحی محصول</div>
            </div>
          </div>

          <div className="mt-7 border-t border-white/10 pt-5">
            <div className="text-sm font-bold mb-2">سطح اختیار تصمیم‌گیری</div>
            <p className="text-sm text-white/55 leading-8">
              {organizationalPosition.decisionAuthority}
            </p>
          </div>
        </div>

        <div className="surface-card p-6 md:p-7">
          <div className="text-secondary text-sm font-bold">
            PROPOSED DEVELOPMENT
          </div>

          <h3 className="text-xl font-black mt-4">جایگاه پیشنهادی</h3>

          <div className="mt-7 rounded-xl border border-secondary/30 bg-secondary/8 p-5">
            <div className="text-secondary text-xs font-bold mb-2">
              PROPOSED ROLE
            </div>
            <div className="text-xl font-black leading-9">
              ظرفیت تخصصی و راهبردی مشترک در سطح سازمان
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {organizationalPosition.strategicResponsibilities.map(
              (item, index) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-secondary font-black text-sm mt-1">
                    0{index + 1}
                  </span>
                  <p className="text-sm text-white/65 leading-7">{item}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 surface-card p-5">
        <p className="text-sm md:text-base text-white/75 leading-8">
          <strong className="text-primary-300">پیشنهاد کلیدی:</strong> حفظ
          ساختار مدیریتی روشن، همراه با دسترسی مستقیم‌تر تیم به تصمیم‌گیران
          محصول و مارکتینگ، مشارکت در اولویت‌بندی و تعریف استانداردهای مشترک
          طراحی.
        </p>
      </div>

      <p className="text-xs text-white/35 mt-4">
        ساختار پیشنهادی، یک مسیر توسعه سازمانی است؛ نه توصیف ساختار گزارش‌دهی
        فعلی.
      </p>
    </SlideContainer>
  );
}

export default Slide09OrganizationalPosition;
