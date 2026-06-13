"use client";

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Logo } from './Logo';

export const Maintenance: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const activeLang = (language === 'th' || language === 'en' || language === 'ja' || language === 'ko') 
    ? language 
    : 'en';

  const copy = {
    th: {
      status: "กำลังปรับปรุงเว็บไซต์",
      title: "WEBSITE UNDER RECONSTRUCTION",
      desc: "เรากำลังพัฒนาปรับปรุงเว็บไซต์ใหม่เพื่อมอบประสบการณ์ออนไลน์ที่ดีขึ้น อย่างไรก็ตาม หน้าร้าน Bluebird Jazz Bar (ทองหล่อ) ยังคงเปิดให้บริการเล่นดนตรีสด เสิร์ฟเครื่องดื่มค็อกเทล และเปิดแผ่นเสียงแอนะล็อกตามปกติทุกวัน (ปิดวันอังคาร) ยินดีต้อนรับทุกท่านครับ!",
      contactTitle: "กรุณาติดต่อจองโต๊ะหรือสอบถามทางเบอร์โทรศัพท์ร้าน",
      phoneLabel: "โทรจองโต๊ะสายตรง",
      lineLabel: "แชท LINE OA (สำรอง)",
      backsoon: "ร้านเปิดปกติทุกวันพุธ–จันทร์ (ปิดวันอังคาร)",
      hours: "เวลาทำการ 17:00 – 24:00 น.",
      address: "ชั้น 3, ซอยสุขุมวิท 55 (ทองหล่อ 17), กรุงเทพฯ"
    },
    en: {
      status: "WEBSITE UNDER RECONSTRUCTION",
      title: "TUNING THE ONLINE EXPERIENCE",
      desc: "We are currently reconstructing our website to bring you a better online experience. However, our physical bar in Thonglor remains fully OPEN as usual for live jazz standards, signature cocktails, and warm vinyl record sessions. Welcome back to the nest!",
      contactTitle: "Please contact us directly via phone call for reservations",
      phoneLabel: "Call Direct Reservation",
      lineLabel: "Message LINE OA (Backup)",
      backsoon: "Open as usual Wed–Mon (Closed Tuesdays)",
      hours: "Opening Hours: 5:00 PM – Midnight",
      address: "3rd Floor, Soi Sukhumvit 55 (Thonglor 17), Bangkok"
    },
    ja: {
      status: "ウェブサイト改修中",
      title: "ウェブサイト改修のお知らせ",
      desc: "より良いオンライン体験をお届けするためにウェブサイトを改修中ですが、店舗（トンロー店）は通常通り元気に営業しております！極上のライブジャズ、オリジナルカクテル、温かなアナログレコードとともに皆さまをお待ちしております（火曜定休）。",
      contactTitle: "ご予約・お問い合わせはお電話にて承っております",
      phoneLabel: "お電話で直接予約",
      lineLabel: "LINE公式アカウント (予備)",
      backsoon: "店舗は通常通り営業中（火曜定休）",
      hours: "営業時間: 水曜〜月曜 17:00〜24:00",
      address: "バンコク・トンロー・ソイ17（Sukhumvit 55）ビル3階"
    },
    ko: {
      status: "웹사이트 개편 중",
      title: "WEB UNDER RECONSTRUCTION",
      desc: "더 나은 온라인 경험을 선사하기 위해 웹사이트를 개편 중입니다. 오프라인 매장(통러)은 평소와 다름없이 정상 영업하고 있으니, 생생한 라이브 재즈와 클래식 바이닐 음악, 시그니처 칵테일을 즐기러 언제든 편하게 방문해 주세요! (화요일 휴무)",
      contactTitle: "예약 및 문의는 전화 연락을 이용해 주세요",
      phoneLabel: "전화 예약 바로가기",
      lineLabel: "라인 공식 계정 (예비)",
      backsoon: "오프라인 매장 정상 영업 중 (화요일 휴무)",
      hours: "영업 시간: 수–월 17:00 – 24:00",
      address: "방콕 통러 소이 17 (Sukhumvit 55) 빌딩 3층"
    }
  }[activeLang];

  const languages = [
    { code: 'th', label: 'TH' },
    { code: 'en', label: 'EN' },
    { code: 'ja', label: 'JA' },
    { code: 'ko', label: 'KO' }
  ] as const;

  return (
    <div className="fixed inset-0 z-[100] bg-bg-deep flex flex-col items-center justify-between p-6 overflow-y-auto">
      
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-bluebird/10 rounded-full blur-[120px] pointer-events-none z-0" />
      
      {/* Top Bar */}
      <div className="w-full max-w-5xl flex justify-between items-center z-10 py-2">
        <div className="flex items-center gap-3 select-none">
          <Logo size={52} />
          <div className="flex flex-col">
            <span className="font-display font-black text-sm text-ink uppercase tracking-wider leading-none">BLUEBIRD</span>
            <span className="text-[9px] text-accent tracking-[3px] uppercase mt-0.5 font-bold">JAZZ BAR</span>
          </div>
        </div>

        {/* Minimal Language Switcher */}
        <div className="flex gap-2.5">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-sm border transition-all cursor-pointer ${
                activeLang === lang.code
                  ? 'border-accent bg-accent/15 text-accent font-extrabold'
                  : 'border-line/20 text-ink-muted hover:text-ink hover:border-line'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center text-center max-w-xl my-auto z-10 py-12">
        
        {/* Animated Vinyl Record */}
        <div className="w-32 h-32 md:w-36 md:h-36 relative mb-8 select-none">
          <div 
            className="w-full h-full rounded-full border border-neutral-900 shadow-2xl animate-rotate-vinyl"
            style={{
              backgroundImage: "radial-gradient(circle, #333 15%, #050505 40%, #1a1a1a 45%, #0d0d0d 65%, #262626 70%, #000 100%)"
            }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-bg-panel border border-accent/20 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-bluebird/10 flex items-center justify-center">
                <i className="fas fa-music text-[9px] text-accent animate-pulse" />
              </div>
            </div>
          </div>
          <div className="absolute -top-1 -right-2 w-10 h-10 border-l border-t border-accent/40 rounded-tl-lg origin-top-right rotate-[5deg] pointer-events-none" />
        </div>

        <span className="bg-accent/10 border border-accent/30 text-accent font-bold text-[9px] tracking-[5px] uppercase py-1.5 px-5 rounded-full mb-5 block animate-pulse">
          {copy.status}
        </span>

        <h2 className="font-display font-black text-3xl sm:text-4xl text-ink uppercase tracking-wider mb-6 leading-tight">
          {copy.title}
        </h2>

        <p className="text-sm text-ink-muted/80 leading-relaxed font-light mb-10 text-justify md:text-center">
          {copy.desc}
        </p>

        {/* Contact Links Box (Phone emphasized) */}
        <div className="w-full bg-bg-panel/40 backdrop-blur-md border border-line p-6 sm:p-8 rounded-sm shadow-xl">
          <span className="text-[10px] font-bold tracking-[3px] text-accent uppercase block mb-4">
            {copy.contactTitle}
          </span>
          <div className="flex flex-col gap-4">
            {/* Phone Button - Large and Emphasized */}
            <a 
              href="tel:+66897779248"
              className="flex items-center justify-center gap-3 bg-accent text-bg-deep hover:bg-transparent hover:text-accent border border-accent py-4 px-6 rounded-sm text-sm font-bold tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-accent/15 cursor-pointer"
            >
              <i className="fas fa-phone-alt text-sm" />
              <span>{copy.phoneLabel} (+66 89 777 9248)</span>
            </a>
            
            {/* LINE Button - Secondary */}
            <a 
              href="https://line.me/ti/p/@bluebirdjazzbar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-bg-deep py-3 px-4 rounded-sm text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer"
            >
              <i className="fab fa-line text-sm" />
              <span>{copy.lineLabel}</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-5 mt-6 border-t border-line/10 pt-5">
            <a 
              href="https://facebook.com/bluebirdjazzbar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-ink-muted hover:text-accent transition-colors text-lg"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-square" />
            </a>
            <a 
              href="https://instagram.com/bluebirdjazzbar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-ink-muted hover:text-accent transition-colors text-lg"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>
            <a 
              href="https://tiktok.com/@bluebirdjazzbar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-ink-muted hover:text-accent transition-colors text-lg"
              aria-label="TikTok"
            >
              <i className="fab fa-tiktok" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Footer Details */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center border-t border-line/10 pt-5 pb-2 text-[10px] text-ink-muted/50 gap-3 z-10 text-center md:text-left">
        <span>{copy.backsoon}</span>
        <span className="hidden md:inline">|</span>
        <span>{copy.hours}</span>
        <span className="hidden md:inline">|</span>
        <span>{copy.address}</span>
      </div>

    </div>
  );
};
