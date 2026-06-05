"use client";

import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function About() {
  const { language, t } = useLanguage();

  return (
    <div className="w-full py-20 px-6 md:px-[8%] bg-bg-deep animate-fade-in-up">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Block */}
        <div className="mb-20 text-center md:text-left">
          <span className="text-xs font-bold tracking-[8px] text-bluebird uppercase mb-2 block animate-pulse">
            {t('about.subtitle')}
          </span>
          <h1 className="font-display font-black text-5xl sm:text-7xl text-ink uppercase tracking-tight leading-none">
            OUR <span className="text-accent">STORY</span>
          </h1>
          <div className="h-[2px] bg-accent w-24 mt-6 mx-auto md:mx-0"></div>
        </div>

        {/* Two Column Narrative (Editorial Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Main Column */}
          <div className="lg:col-span-8 flex flex-col gap-8 text-[15px] font-light text-ink-muted leading-relaxed text-justify">
            <p className="font-display italic text-2xl text-accent font-light leading-relaxed mb-4 border-l-2 border-accent pl-6">
              "{t('about.p1')}"
            </p>
            <p>
              {t('about.p2')}
            </p>
            <p>
              {t('about.p3')}
            </p>
            <p>
              ทุกค่ำคืนที่นี่ถูกออกแบบมาเพื่อเฉลิมฉลองให้กับความงดงามของเสียงดนตรีแจ๊สอย่างแท้จริง ผ่านการคัดสรรแผ่นเสียงหายากตั้งแต่อัลบั้มคลาสสิกยุค 1950s ไปจนถึงงานแจ๊สร่วมสมัยที่สะท้อนถึงวิวัฒนาการของท่วงทำนองในแต่ละยุคสมัย
            </p>

            {/* Large editorial quote */}
            <div className="my-8 relative py-8 px-6 bg-bg-panel/20 border-y border-accent/10">
              <span className="font-display text-8xl text-accent/10 absolute -top-4 left-4 font-black">“</span>
              <p className="font-display italic text-lg text-ink font-light leading-relaxed relative z-10">
                We wanted to build a sanctuary where music is not just background noise. At Bluebird, you feel the warm vibrations of a sax solo and the needle drops of real vinyl, all while surrounded by modern art.
              </p>
            </div>

            <p>
              นอกจากนี้ Bluebird ยังทำหน้าที่เป็นแกลเลอรีจัดแสดงงานศิลปะร่วมสมัยของศิลปินไทยรุ่นใหม่ เพื่อสร้างพื้นที่สร้างสรรค์ที่หลอมรวมทัศนศิลป์และโสตประสาทเข้าไว้ด้วยกันอย่างกลมกลืน
            </p>
          </div>

          {/* Side Features / Highlights */}
          <div className="lg:col-span-4 flex flex-col gap-10 bg-bg-panel/40 backdrop-blur-sm border border-accent/20 p-8 sm:p-10 rounded-sm relative shadow-xl">
            <div className="absolute top-4 left-4 right-4 bottom-4 border border-accent/5 pointer-events-none" />
            
            <h3 className="font-display font-bold tracking-widest text-ink text-base uppercase border-b border-line/10 pb-4">
              THE EXPERIENCES
            </h3>
            
            <div className="flex flex-col gap-2 relative z-10">
              <h4 className="font-display font-semibold tracking-wide text-accent text-xs uppercase">
                {t('about.feature1.title')}
              </h4>
              <p className="text-[12px] font-light leading-relaxed text-ink-muted/80">
                {t('about.feature1.desc')}
              </p>
            </div>
            
            <div className="flex flex-col gap-2 border-t border-line/10 pt-6 relative z-10">
              <h4 className="font-display font-semibold tracking-wide text-accent text-xs uppercase">
                {t('about.feature2.title')}
              </h4>
              <p className="text-[12px] font-light leading-relaxed text-ink-muted/80">
                {t('about.feature2.desc')}
              </p>
            </div>

            <div className="flex flex-col gap-2 border-t border-line/10 pt-6 relative z-10">
              <h4 className="font-display font-semibold tracking-wide text-accent text-xs uppercase">
                Art &amp; Community
              </h4>
              <p className="text-[12px] font-light leading-relaxed text-ink-muted/80">
                ผนังในร้านนำเสนองานศิลปะคัดสรรจากศิลปินท้องถิ่นที่จัดแสดงหมุนเวียน ให้สัมผัสสุนทรียะแห่งภาพและเสียงดนตรีไปพร้อมๆ กัน
              </p>
            </div>
          </div>
        </div>

        {/* Meet the Bluebird Mascot section on About page */}
        <section className="mt-24 border-t border-line/10 pt-16">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-[8px] text-bluebird uppercase block mb-3">
              Mascot Design
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink uppercase tracking-tight leading-none mb-4">
              {t('mascot.title')}
            </h2>
            <div className="h-[2px] bg-accent w-16 mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Grey Sketch */}
            <div className="lg:col-span-4 relative flex justify-center">
              <div className="relative aspect-square w-full max-w-[280px] border border-accent/20 shadow-xl rounded-sm overflow-hidden bg-bg-panel/40">
                <img 
                  src="/character_grey.jpg" 
                  alt="Mascot original grey hand sketch" 
                  className="w-full h-full object-cover filter contrast-105 brightness-95 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 bg-bg-deep/80 backdrop-blur-sm px-3 py-1 border border-line/20 rounded-sm text-[10px] text-ink-muted uppercase tracking-widest font-semibold">
                  Original Sketch
                </div>
              </div>
            </div>

            {/* Middle Column: Story */}
            <div className="lg:col-span-4 flex flex-col gap-4 text-sm font-light text-ink-muted leading-relaxed text-center lg:text-justify px-4">
              <p>
                {t('mascot.desc')}
              </p>
              <p>
                {language === 'th'
                  ? 'จากภาพร่างดินสอสู่น้องนกแจ๊สสีฟ้าครามตัวจริงที่เป็นตัวแทนความสนุกสนาน ความอบอุ่น และความหลงใหลในเสียงดนตรีอะคูสติกอย่างลงตัว'
                  : 'From pencil sketch to our final brand character, representing joy, warmth, and the organic textures of raw acoustic live jazz.'}
              </p>
            </div>

            {/* Right Column: Colored Version */}
            <div className="lg:col-span-4 relative flex justify-center">
              <div className="relative aspect-square w-full max-w-[280px] border border-accent/20 shadow-xl rounded-sm overflow-hidden bg-bg-panel/40">
                <img 
                  src="/character_color.jpg" 
                  alt="Mascot final color design" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 bg-bg-deep/80 backdrop-blur-sm px-3 py-1 border border-accent/20 rounded-sm text-[10px] text-accent uppercase tracking-widest font-semibold">
                  Final Color
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Big landscape image showing aesthetic detail */}
        <div className="mt-24 bg-bg-panel border border-accent/20 rounded-sm aspect-[21/9] relative flex items-center justify-center shadow-2xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-transparent to-transparent z-10 pointer-events-none" />
          <img 
            src="/premium_vinyl_turntable.png" 
            alt="Bluebird Jazz Bar Vinyl Shelf and Listening Station" 
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
          />
        </div>

      </div>
    </div>
  );
}
