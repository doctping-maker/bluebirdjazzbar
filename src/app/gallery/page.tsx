"use client";

import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function Gallery() {
  const { t } = useLanguage();

  const gallerySlots = [
    {
      id: 1,
      src: "/gallery-1.jpg",
      name: "vinyl-turntable",
      altTH: "เครื่องเล่นแผ่นเสียงและคอลเลกชันแผ่นเสียงคลาสสิก",
      descEN: "Vintage high-end turntable spinning a classic jazz record in front of record stacks",
      gridClass: "md:col-span-4 aspect-square"
    },
    {
      id: 2,
      src: "/gallery-2.jpg",
      name: "live-venue",
      altTH: "เวทีคอนเสิร์ตแจ๊สท่ามกลางแสงไฟนีออนและสปอตไลต์อบอุ่น",
      descEN: "The glowing stage at Bluebird Jazz Bar, featuring a grand piano and saxophone under moody amber spotlights",
      gridClass: "md:col-span-8 aspect-[21/10]"
    },
    {
      id: 3,
      src: "/gallery-3.jpg",
      name: "saxophone-spotlight",
      altTH: "แซกโซโฟนทองเหลืองสะท้อนแสงไฟสปอตไลต์อันอบอุ่นบนเวที",
      descEN: "Sleek brass saxophone detailed under warm stage spotlights",
      gridClass: "md:col-span-6 aspect-[4/3]"
    },
    {
      id: 4,
      src: "/gallery-4.jpg",
      name: "signature-cocktail",
      altTH: "ค็อกเทลซิกเนเจอร์สีฟ้าตกแต่งด้วยดอกไม้ทานได้ในแก้วคริสตัลระยิบระยับ",
      descEN: "The Bluebird signature cocktail with clean botanical notes and lemon twist garnish",
      gridClass: "md:col-span-6 aspect-[4/3]"
    },
    {
      id: 5,
      src: "/gallery-5.jpg",
      name: "bar-counter",
      altTH: "เคาน์เตอร์บาร์ไม้ขัดเงาสะท้อนแสงไฟพร้อมค็อกเทลคลาสสิกและขวดวิสกี้เกรดพรีเมียม",
      descEN: "Luxurious polished wood bar counter showcasing premium spirits, whiskey bottles, and signature crafts",
      gridClass: "md:col-span-7 aspect-[16/10]"
    },
    {
      id: 6,
      src: "/gallery-6.jpg",
      name: "cozy-seating",
      altTH: "มุมนั่งเล่นโซฟาสไตล์เรโทรไฟสลัวบรรยากาศอบอุ่น",
      descEN: "Cozy retro velvet sofa seating area under moody amber lamps showing the actual room layout",
      gridClass: "md:col-span-5 aspect-square"
    }
  ];

  return (
    <div className="w-full py-20 px-6 md:px-[8%] bg-bg-deep animate-fade-in-up">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Block */}
        <div className="mb-16 text-center md:text-left">
          <span className="text-xs font-bold tracking-[8px] text-bluebird uppercase mb-2 block animate-pulse">
            {t('gallery.subtitle')}
          </span>
          <h1 className="font-display font-black text-5xl sm:text-7xl text-ink uppercase tracking-tight leading-none">
            GALLERY <span className="text-accent">WALL</span>
          </h1>
          <p className="text-ink-muted text-sm font-light mt-4 max-w-xl leading-relaxed">
            {t('gallery.desc')}
          </p>
          <div className="h-[2px] bg-accent w-24 mt-6 mx-auto md:mx-0"></div>
        </div>

        {/* Responsive Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
          {gallerySlots.map((slot) => (
            <div 
              key={slot.id}
              className={`bg-bg-panel border border-line rounded-sm relative flex items-center justify-center hover:border-accent transition-colors duration-300 overflow-hidden group shadow-xl ${slot.gridClass}`}
            >
              <img 
                src={slot.src} 
                alt={slot.altTH} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              {/* Info overlay on hover */}
              <div className="absolute inset-0 bg-bg-deep/85 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6 text-left pointer-events-none">
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-1">
                  {slot.name}
                </span>
                <p className="text-sm text-ink font-semibold leading-snug mb-1">
                  {slot.altTH}
                </p>
                <p className="text-[11px] text-ink-muted leading-relaxed font-light">
                  {slot.descEN}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
