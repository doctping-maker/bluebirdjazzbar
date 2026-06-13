"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import weeklyLineup from '../../content/whats-on.json';

export default function Home() {
  const { language, t } = useLanguage();
  
  // Resolve tonight's show dynamically based on Asia/Bangkok time
  const [showCard, setShowCard] = React.useState<{
    type: 'tonight' | 'next' | 'closed';
    date?: string;
    dayName?: string;
    artist?: string;
    price?: string;
    status?: string;
    time?: string;
  } | null>(null);

  React.useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Bangkok",
      month: "short",
      day: "2-digit",
      weekday: "long"
    });
    const parts = formatter.formatToParts(new Date());
    const month = parts.find(p => p.type === "month")?.value || "";
    const day = parts.find(p => p.type === "day")?.value || "";
    const weekday = parts.find(p => p.type === "weekday")?.value || "";
    const todayDateStr = `${month} ${day}`; // e.g. "Jun 14"

    setTimeout(() => {
      if (weekday === "Tuesday") {
        setShowCard({ type: 'closed' });
      } else {
        const todayShow = weeklyLineup.lineup.find(s => s.date === todayDateStr);
        if (todayShow) {
          setShowCard({
            type: 'tonight',
            date: todayShow.date,
            dayName: todayShow.dayName,
            artist: todayShow.artist,
            price: todayShow.price,
            status: todayShow.status,
            time: todayShow.time
          });
        } else {
          // Find the next show chronologically.
          const todayDayNum = parseInt(day, 10);
          const nextShow = weeklyLineup.lineup.find(s => {
            const showDayNum = parseInt(s.date.split(' ')[1], 10);
            return showDayNum > todayDayNum;
          });

          if (nextShow) {
            setShowCard({
              type: 'next',
              date: nextShow.date,
              dayName: nextShow.dayName,
              artist: nextShow.artist,
              price: nextShow.price,
              status: nextShow.status,
              time: nextShow.time
            });
          } else {
            // Fallback to first show
            setShowCard({
              type: 'next',
              date: weeklyLineup.lineup[0].date,
              dayName: weeklyLineup.lineup[0].dayName,
              artist: weeklyLineup.lineup[0].artist,
              price: weeklyLineup.lineup[0].price,
              status: weeklyLineup.lineup[0].status,
              time: weeklyLineup.lineup[0].time
            });
          }
        }
      }
    }, 0);
  }, []);

  return (
    <div className="flex flex-col w-full animate-fade-in-up">
      
      {/* 1. Immersive Editorial Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center px-6 py-24 bg-bg-deep overflow-hidden">
        {/* Full-bleed background image with heavy vintage styling */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-real.jpg" 
            alt="บรรยากาศทางเข้าและเวทีเล่นดนตรีแจ๊สของร้าน Bluebird" 
            className="w-full h-full object-cover opacity-45 scale-105 filter contrast-110 brightness-[0.6] transition-all duration-700"
          />
          {/* Gradients to blend into dark background */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-bg-deep/75 to-bg-deep/45 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-deep/90 via-transparent to-bg-deep/90 z-10" />
        </div>

        <div className="relative z-20 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Big typography & brand manifesto */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[1px] w-12 bg-accent" />
              <span className="text-[10px] sm:text-xs font-bold tracking-[8px] text-accent uppercase animate-pulse">
                {t('hero.appearing')}
              </span>
            </div>
            
            <h1 className="font-display font-black text-6xl sm:text-8xl text-ink tracking-tight uppercase leading-none mb-6">
              THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ink via-accent to-bluebird">BLUEBIRD</span>
            </h1>
            
            <p className="font-display italic text-xl sm:text-3xl text-ink-muted font-light tracking-wide max-w-xl mb-10 leading-relaxed">
              &ldquo;{t('hero.tagline')}&rdquo;
            </p>

            <div className="flex flex-wrap gap-5">
              <Link 
                href="#lineup" 
                className="bg-accent text-bg-deep hover:bg-transparent hover:text-accent border border-accent font-bold text-[11px] uppercase tracking-widest py-4.5 px-9 rounded-sm transition-all duration-300 shadow-xl hover:shadow-accent/15 hover:-translate-y-0.5 active:translate-y-0"
              >
                {t('hero.cta')}
              </Link>
              <Link 
                href="/visit#reserve-form-section" 
                className="border border-ink-muted/30 text-ink hover:border-accent hover:bg-accent/5 font-bold text-[11px] uppercase tracking-widest py-4.5 px-9 rounded-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                {t('nav.book')}
              </Link>
            </div>
          </div>

          {/* Right Column: Tonight's Spotlight Poster Card */}
          {showCard && (
            <div className="lg:col-span-5 bg-bg-panel/40 backdrop-blur-md border border-accent/20 p-8 sm:p-10 rounded-sm relative overflow-hidden shadow-2xl hover:border-accent/40 transition-all duration-500 group">
              {/* Decorative vintage borders */}
              <div className="absolute top-4 left-4 right-4 bottom-4 border border-accent/5 pointer-events-none" />
              
              <div className="flex justify-between items-start mb-8 relative z-10">
                <span className="bg-accent/10 border border-accent/30 text-accent font-bold text-[9px] tracking-[4px] uppercase py-1.5 px-4 rounded-full">
                  {showCard.type === 'closed'
                    ? (language === 'th' ? 'ปิดทำการ' : 'CLOSED')
                    : showCard.type === 'next'
                      ? (language === 'th' ? 'โชว์ถัดไป' : 'NEXT SHOW')
                      : (language === 'th' ? 'คืนนี้' : 'TONIGHT')}
                </span>
                {showCard.time && (
                  <span className="text-[10px] text-ink-muted/70 tracking-widest uppercase">
                    {showCard.time} PM
                  </span>
                )}
              </div>

              <div className="relative z-10">
                {showCard.type === 'closed' ? (
                  <div className="py-6">
                    <h3 className="font-display font-bold text-2xl text-ink uppercase tracking-wide leading-tight mb-4">
                      {language === 'th' ? 'ปิดทำการวันอังคาร' : 'Closed on Tuesdays'}
                    </h3>
                    <p className="text-[13px] text-ink-muted leading-relaxed font-light">
                      {language === 'th' ? 'พบกันใหม่วันพรุ่งนี้ครับ' : 'See you again tomorrow.'}
                    </p>
                  </div>
                ) : (
                  <>
                    <span className="text-[11px] font-bold text-bluebird tracking-widest uppercase block mb-3">
                      {showCard.date} · {showCard.dayName}
                    </span>
                    <h3 className="font-display font-bold text-3xl sm:text-4xl text-ink uppercase tracking-wide leading-tight mb-4 group-hover:text-accent transition-colors duration-300">
                      {showCard.artist}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2.5 mb-8">
                      {showCard.price ? (
                        <span className="inline-block text-[9px] font-bold tracking-[2px] text-accent border border-accent/30 rounded-full px-4 py-1.5 uppercase bg-accent/5">
                          Cover: {showCard.price === 'FREE' ? 'FREE' : `${showCard.price} THB`}
                        </span>
                      ) : (
                        <span className="inline-block text-[9px] font-bold tracking-[2px] text-ink-muted border border-line rounded-full px-4 py-1.5 uppercase bg-bg-panel/10">
                          Cover: Inquire
                        </span>
                      )}
                      {showCard.status && (
                        <span className={`inline-block text-[9px] font-bold tracking-[2px] rounded-full px-4 py-1.5 uppercase ${
                          showCard.status === 'FULLY BOOKED' 
                            ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                            : 'bg-bluebird/20 text-bluebird border border-bluebird/30'
                        }`}>
                          {showCard.status}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-[13px] text-ink-muted leading-relaxed font-light mb-8 border-l border-accent/20 pl-4 italic">
                      {language === 'th'
                        ? '"เราเชื่อว่าดนตรีแจ๊สเข้าถึงได้ดีที่สุดในระยะใกล้ ที่บาร์ของเราคุณไม่ได้แค่มาดูการแสดง แต่เหมือนได้แชร์ห้องนั่งเล่นร่วมกับนักดนตรี"'
                        : '"Every night, we pay homage to the classic recordings of the vinyl era. Experience authentic live jazz standards in a cozy third-floor room."'}
                    </p>

                    <div className="flex items-center justify-between border-t border-line/10 pt-6">
                      <div className="flex flex-col">
                        <span className="text-[9px] text-ink-muted/60 uppercase tracking-widest">Show Time</span>
                        <span className="text-xs text-accent font-semibold">{showCard.time} PM</span>
                      </div>
                      {showCard.status !== 'FULLY BOOKED' && (
                        <Link 
                          href="/visit#reserve-form-section" 
                          className="text-xs font-bold text-bluebird hover:text-ink tracking-widest uppercase flex items-center gap-1.5 group-hover:translate-x-1 transition-transform duration-300"
                        >
                          Reserve Table <i className="fas fa-arrow-right text-[10px]" />
                        </Link>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Welcome Mascot Banner Section */}
      <section className="relative py-16 px-6 md:px-[8%] bg-bg-panel border-b border-line overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-bluebird/10 rounded-full blur-3xl pointer-events-none z-0" />
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
          {/* Mascot 3D Image (Left) */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative aspect-square w-full max-w-[300px] rounded-full border-4 border-accent/20 shadow-2xl overflow-hidden bg-bg-deep/80 hover:scale-[1.03] transition-transform duration-500 group">
              <img 
                src="/mascot_3d_welcome.png" 
                alt="3D Bluebird Mascot Welcoming You" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          
          {/* Welcome Text (Right) */}
          <div className="md:col-span-7 flex flex-col items-start text-left gap-4">
            <span className="bg-accent/10 border border-accent/30 text-accent font-bold text-[10px] tracking-[4px] uppercase py-1.5 px-4 rounded-full">
              {language === 'th' ? 'ยินดีต้อนรับสู่รังของเรา' : 'Welcome to the Nest'}
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-ink uppercase tracking-wide leading-tight">
              {language === 'th' ? 'สวัสดีครับ! ผมนกฟ้าบลูเบิร์ด ยินดีต้อนรับครับ' : 'Hello! I am the Bluebird. Welcome to our sanctuary.'}
            </h2>
            <p className="text-sm text-ink-muted leading-relaxed font-light">
              {language === 'th' 
                ? 'ยินดีต้อนรับนักรักเสียงเพลงทุกท่านเข้าสู่ห้องนั่งเล่นดนตรีแจ๊สของพวกเรา ที่ซ่อนตัวอยู่ชั้น 3 ย่านทองหล่อครับ! ที่นี่เรามีดนตรีแจ๊สสดอะคูสติก แผ่นเสียงไวนิลคลาสสิกออริจินัล และค็อกเทลสูตรพิเศษรอคุณอยู่ มานั่งฟังดนตรีแบบเป็นกันเองและอบอุ่นไปด้วยกันนะครับ!'
                : 'Welcome to our cozy jazz sanctuary hidden on the 3rd floor in Thonglor. I am here to spin vintage vinyl records, introduce you to intimate live acoustics, and serve our signature cocktails. Make yourself at home in our musical nest!'}
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <Link 
                href="/visit#reserve-form-section" 
                className="bg-accent text-bg-deep hover:bg-transparent hover:text-accent border border-accent font-bold text-[10px] uppercase tracking-widest py-3 px-6 rounded-sm transition-all duration-300 shadow-md"
              >
                {t('nav.book')}
              </Link>
              <Link 
                href="/about" 
                className="border border-line hover:border-accent text-ink hover:bg-accent/5 font-bold text-[10px] uppercase tracking-widest py-3 px-6 rounded-sm transition-all duration-300"
              >
                {t('nav.about')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Calendar of Live Jazz */}
      <section id="lineup" className="py-24 px-6 md:px-[8%] bg-bg-deep max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <span className="text-xs font-bold tracking-[6px] text-bluebird uppercase mb-2 block">
              {t('whatsOn.subtitle')}
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-ink uppercase tracking-tight mb-6">
              {language === 'th' ? (
                <>ตารางดนตรี <br /><span className="text-accent">ประจำสัปดาห์</span></>
              ) : language === 'ja' ? (
                <>今週の <br /><span className="text-accent">ラインナップ</span></>
              ) : language === 'ko' ? (
                <>이번 주 <br /><span className="text-accent">라인업</span></>
              ) : (
                <>THE WEEKLY <br /><span className="text-accent">LINEUP</span></>
              )}
            </h2>
            <p className="text-sm text-ink-muted/80 leading-relaxed font-light mb-8 max-w-md">
              Our cozy lounge features local artists, warm vinyl record sessions, and guest jam sessions. Browse our lineup for this week.
            </p>
            <div className="flex gap-4">
              <Link 
                href="/whats-on" 
                className="bg-accent/10 text-accent hover:bg-accent hover:text-bg-deep border border-accent/20 font-bold text-[10px] tracking-widest uppercase py-3.5 px-7 rounded-sm transition-all duration-300"
              >
                View Full Calendar
              </Link>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col border-t border-accent/20">
            {weeklyLineup.lineup.map((show) => (
              <div 
                key={show.id} 
                className="py-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-b border-line/10 hover:bg-bg-panel/20 px-4 transition-all duration-300 group"
              >
                {/* Date column */}
                <div className="flex items-center gap-4.5 min-w-[120px]">
                  <span className="font-display font-black text-5xl text-accent tracking-tighter group-hover:text-bluebird transition-colors duration-300">
                    {show.date.split(' ')[0]}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-ink uppercase tracking-widest">
                      {show.dayName.substring(0, 3)}
                    </span>
                    <span className="text-[10px] text-ink-muted uppercase tracking-widest">
                      {show.date.split(' ')[1]}
                    </span>
                  </div>
                </div>

                {/* Show Details */}
                <div className="flex-grow">
                  <span className="text-[10px] text-bluebird font-bold tracking-widest uppercase block mb-1">
                    {show.time} PM · Live Music
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-ink uppercase tracking-wide group-hover:text-accent transition-colors duration-300 mb-2">
                    {show.artist}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2.5">
                    {show.price ? (
                      <span className="text-[9px] font-bold text-accent border border-accent/20 rounded-full px-2.5 py-0.5 bg-accent/5">
                        {language === 'th' ? 'ค่าเข้าชม: ' : 'Ticket: '}{show.price === 'FREE' ? 'FREE' : `${show.price} THB`}
                      </span>
                    ) : (
                      <span className="text-[9px] font-bold text-ink-muted border border-line rounded-full px-2.5 py-0.5 bg-bg-panel/10">
                        {language === 'th' ? 'ค่าเข้าชม: สอบถามที่ร้าน' : 'Ticket: Inquire'}
                      </span>
                    )}
                    {show.status && (
                      <span className={`text-[9px] font-bold rounded-full px-2.5 py-0.5 ${
                        show.status === 'FULLY BOOKED' 
                          ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                          : 'bg-bluebird/20 text-bluebird border border-bluebird/30'
                      }`}>
                        {show.status}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action button */}
                <div className="min-w-[130px] text-right">
                  {show.status === 'FULLY BOOKED' ? (
                    <span className="border border-red-500/20 bg-red-500/5 text-red-400/60 font-bold text-[9px] tracking-widest uppercase py-3 px-6 rounded-sm inline-block cursor-not-allowed select-none">
                      Fully Booked
                    </span>
                  ) : (
                    <Link 
                      href="/visit#reserve-form-section" 
                      className="border border-line/50 text-ink group-hover:bg-accent group-hover:text-bg-deep group-hover:border-accent font-bold text-[10px] tracking-widest uppercase py-3 px-6 rounded-sm transition-all duration-300 inline-block"
                    >
                      Reserve Table
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Stories of the Nest (Editorial Storytelling Grid) */}
      <section className="py-24 px-6 md:px-[8%] bg-bg-panel border-y border-line">
        <div className="max-w-7xl mx-auto flex flex-col gap-24">
          
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-4">
            <span className="text-xs font-bold tracking-[8px] text-bluebird uppercase block mb-3">
              {t('about.subtitle')}
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-ink uppercase tracking-tight leading-none mb-4">
              {language === 'th' ? (
                <>เรื่องราวของ <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-bluebird">รังเรา</span></>
              ) : language === 'ja' ? (
                <>私たちの <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-bluebird">物語</span></>
              ) : language === 'ko' ? (
                <>우리 둥지의 <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-bluebird">이야기</span></>
              ) : (
                <>THE STORIES OF <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-bluebird">OUR NEST</span></>
              )}
            </h2>
            <div className="h-[2px] bg-accent w-20 mx-auto mt-4"></div>
          </div>

          {/* Story 1: Acoustic Sanctuary */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Image Left */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[16/10] w-full border border-accent/20 shadow-2xl rounded-sm overflow-hidden z-10">
                <img 
                  src="/musician-real.jpg" 
                  alt="นักดนตรีเป่าแซกโซโฟนเล่นสดบนเวที" 
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="hidden md:block absolute -top-4 -left-4 w-full h-full border border-accent/10 rounded-sm pointer-events-none z-0" />
            </div>
            
            {/* Content Right */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <span className="text-[10px] font-bold tracking-[4px] text-accent uppercase">Sanctuary</span>
              <h3 className="font-display font-bold text-3xl text-ink uppercase tracking-wide">
                A Living Room for Sound
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed font-light">
                {"Unlike commercial venues, Bluebird is an intimate space hidden on the 3rd floor in Thonglor. It's a sanctuary designed for pure listening, where vinyl records and live acoustic jazz merge in warm, analog harmony."}
              </p>
              <p className="text-sm text-ink-muted leading-relaxed font-light italic border-l-2 border-accent pl-4">
                {"\"We believe that jazz is best experienced up close. In our nest, you're not just watching a performance—you're sharing a living room with the musicians.\""}
              </p>
            </div>
          </div>

          {/* Story 2: Audiophile Tube Amplification */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Content Left (on desktop) */}
            <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col gap-4">
              <span className="text-[10px] font-bold tracking-[4px] text-accent uppercase">Pure Analog Path</span>
              <h3 className="font-display font-bold text-3xl text-ink uppercase tracking-wide">
                The Glow of Warm Tubes
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed font-light">
                Our acoustic environment is driven by custom-engineered vacuum tube amplifiers and high-end vintage audio systems. The glass filaments glow with a warm orange light as they reproduce the organic depth, breath, and spatial texture of every performance.
              </p>
              <p className="text-sm text-ink-muted leading-relaxed font-light">
                Every detail is tuned to preserve the acoustic transients of brass instruments and double basses, allowing you to hear the micro-details of a soft brush on a snare drum or the resonance of a double bass.
              </p>
            </div>

            {/* Image Right */}
            <div className="lg:col-span-6 order-1 lg:order-2 relative">
              <div className="relative aspect-[16/10] w-full border border-accent/20 shadow-2xl rounded-sm overflow-hidden z-10">
                <img 
                  src="/tube-amp-real.jpg" 
                  alt="เครื่องขยายเสียงหลอดสุญญากาศสำหรับเครื่องเสียงแอนะล็อก" 
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="hidden md:block absolute -top-4 -right-4 w-full h-full border border-accent/10 rounded-sm pointer-events-none z-0" />
            </div>
          </div>

          {/* Story 3: Crate Digging & Vinyl Heritage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Image Left */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[16/10] w-full border border-accent/20 shadow-2xl rounded-sm overflow-hidden z-10">
                <img 
                  src="/vinyl-real.jpg" 
                  alt="เครื่องเล่นแผ่นเสียงไวนิลคลาสสิกกำลังหมุน" 
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="hidden md:block absolute -top-4 -left-4 w-full h-full border border-accent/10 rounded-sm pointer-events-none z-0" />
            </div>

            {/* Content Right */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <span className="text-[10px] font-bold tracking-[4px] text-accent uppercase">Vinyl Archives</span>
              <h3 className="font-display font-bold text-3xl text-ink uppercase tracking-wide">
                Original Pressings Only
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed font-light">
                Our physical music collection houses thousands of original vintage jazz records from the 1950s vinyl-era. We believe that digital files cannot replicate the warmth, depth, and tangible feeling of a needle tracing the grooves of a physical record.
              </p>
              <div className="flex gap-4.5 mt-2">
                <Link 
                  href="/about" 
                  className="border border-accent text-accent hover:bg-accent hover:text-bg-deep py-3 px-6 rounded-sm text-[10px] font-bold tracking-widest uppercase transition-all duration-300"
                >
                  Read Our Full Story
                </Link>
              </div>
            </div>
          </div>

          {/* Story 4: Meet Our Mascot */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Content Left (on desktop) */}
            <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col gap-4">
              <span className="text-[10px] font-bold tracking-[4px] text-accent uppercase">Brand Mascot</span>
              <h3 className="font-display font-bold text-3xl text-ink uppercase tracking-wide">
                Meet the Bluebird
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed font-light">
                Our official mascot is a cute, egg-shaped teal bird who loves nothing more than classic jazz and vintage vinyl records. You will spot him throughout our bar—on our signboards, our menus, and our custom bird-shaped cocktail glasses.
              </p>
              <p className="text-sm text-ink-muted leading-relaxed font-light">
                He represents the playful, warm, and welcoming spirit of Bluebird Jazz Bar. Whether he is playing his yellow saxophone or spinning a classic record, he is here to make you feel right at home in the nest.
              </p>
            </div>

            {/* Image Right */}
            <div className="lg:col-span-6 order-1 lg:order-2 relative">
              <div className="relative aspect-[16/10] w-full border border-accent/20 shadow-2xl rounded-sm overflow-hidden z-10">
                <img 
                  src="/character_color.jpg" 
                  alt="Official Bluebird Mascot playing Saxophone" 
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="hidden md:block absolute -top-4 -right-4 w-full h-full border border-accent/10 rounded-sm pointer-events-none z-0" />
            </div>
          </div>

        </div>
      </section>

      {/* 4. Curated Pairings Section (Drinks highlight) */}
      <section className="py-24 px-6 md:px-[8%] bg-bg-deep max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-7 flex flex-col gap-6 order-2 lg:order-1">
            <span className="text-xs font-bold tracking-[6px] text-bluebird uppercase block">
              Curated Pairing
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-ink uppercase tracking-tight leading-tight">
              THE BLUEBIRD <br />
              <span className="text-accent">SIGNATURE COCKTAIL</span>
            </h2>
            <div className="h-[2px] bg-accent w-20 my-4"></div>
            
            <p className="text-sm text-ink-muted leading-relaxed font-light">
              {t('menu.featuredDesc')}
            </p>
            
            <p className="text-sm text-ink-muted leading-relaxed font-light">
              Our cocktail menu is curated like a record collection. Each recipe is designed to reflect the moods of legendary jazz albums—featuring clean notes, complex botanical undertones, and warm finishes.
            </p>

            <div className="flex items-center gap-6 mt-6">
              <span className="font-display font-black text-3xl text-accent">320 {t('menu.thb')}</span>
              <span className="h-8 w-[1px] bg-line/20" />
              <Link 
                href="/drinks" 
                className="border border-line hover:border-accent hover:bg-accent/5 py-3.5 px-8 rounded-sm text-[11px] font-bold tracking-widest uppercase transition-all duration-300 text-ink hover:-translate-y-0.5 active:translate-y-0"
              >
                {t('nav.drinks')}
              </Link>
            </div>
          </div>

          {/* Right Column: Framed Image */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <div className="relative aspect-square w-full max-w-md mx-auto border border-accent/20 shadow-2xl rounded-sm overflow-hidden z-10">
              <img 
                src="/cocktail-real.jpg" 
                alt="ค็อกเทลซิกเนเจอร์ของร้านเสิร์ฟในแก้วทรงนก" 
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Background decorative circles representing record grooves */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-accent/5 rounded-full pointer-events-none z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-accent/5 rounded-full pointer-events-none z-0" />
          </div>

        </div>
      </section>

      {/* 5. Gallery Grid Section */}
      <section className="py-24 px-6 md:px-[8%] bg-bg-panel border-t border-line">
        <div className="max-w-7xl mx-auto w-full text-center mb-16">
          <span className="text-xs font-bold tracking-[6px] text-bluebird uppercase mb-2 block">
            {t('gallery.subtitle')}
          </span>
          <h2 className="font-display font-bold text-4xl text-ink uppercase tracking-tight mb-4">
            {language === 'th' ? (
              <>ภาพ <span className="text-accent">บรรยากาศ</span></>
            ) : language === 'ja' ? (
              <>ギャラリー <span className="text-accent">写真</span></>
            ) : language === 'ko' ? (
              <>갤러리 <span className="text-accent">사진</span></>
            ) : (
              <>VISUAL <span className="text-accent">STORIES</span></>
            )}
          </h2>
          <p className="text-sm text-ink-muted/80 max-w-xl mx-auto font-light leading-relaxed">
            Take a look inside the nest. Experience the visual details of our live sessions, art pieces, and curated vinyl corner.
          </p>
        </div>

        {/* Elegant Asymmetric Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4 aspect-square rounded-sm overflow-hidden border border-line shadow-md group relative">
            <img src="/gallery-1.jpg" alt="แผ่นเสียงแจ๊สในชั้นวางคลาสสิก" className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <span className="text-xs font-bold text-accent uppercase tracking-widest">Vinyl Archive</span>
            </div>
          </div>
          <div className="md:col-span-8 aspect-[21/10] rounded-sm overflow-hidden border border-line shadow-md group relative">
            <img src="/gallery-2.jpg" alt="บรรยากาศโต๊ะนั่งและนักดนตรีเล่นสด" className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <span className="text-xs font-bold text-accent uppercase tracking-widest">Live Jazz Sanctuary</span>
            </div>
          </div>
          <div className="md:col-span-6 aspect-square md:aspect-[4/3] rounded-sm overflow-hidden border border-line shadow-md group relative">
            <img src="/gallery-3.jpg" alt="เคาน์เตอร์บาร์แสงไฟสลัวบรรยากาศอบอุ่น" className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <span className="text-xs font-bold text-accent uppercase tracking-widest">Bar Lounge &amp; Spirits</span>
            </div>
          </div>
          <div className="md:col-span-6 aspect-square md:aspect-[4/3] rounded-sm overflow-hidden border border-line shadow-md group relative">
            <img src="/gallery-4.jpg" alt="แก้วค็อกเทล Bluebird ซิกเนเจอร์สีฟ้าสดใส" className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <span className="text-xs font-bold text-accent uppercase tracking-widest">Signature Cocktails</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/gallery" 
            className="text-xs font-semibold text-accent hover:text-ink tracking-widest uppercase transition-colors inline-block border-b border-accent/25 hover:border-ink pb-1"
          >
            Browse Gallery Wall
          </Link>
        </div>
      </section>

      {/* 6. Visit Preview / Stay in the Loop Section */}
      <section className="py-24 px-6 md:px-[8%] bg-bg-deep border-t border-line w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* How to Find Us */}
          <div className="flex flex-col gap-6">
            <span className="text-xs font-bold tracking-[6px] text-bluebird uppercase block">
              {t('visit.subtitle')}
            </span>
            <h2 className="font-display font-bold text-4xl text-ink uppercase tracking-tight animate-on-scroll">
              {language === 'th' ? (
                <>มาที่ <br /><span className="text-accent">รังของเรา</span></>
              ) : language === 'ja' ? (
                <>ネストへ <br /><span className="text-accent">お越しください</span></>
              ) : language === 'ko' ? (
                <>저희 <br /><span className="text-accent">둥지로 오세요</span></>
              ) : (
                <>JOIN US IN <br /><span className="text-accent">THE NEST</span></>
              )}
            </h2>
            <div className="h-[2px] bg-accent w-20 my-2"></div>
            
            <p className="text-base text-accent font-medium mt-1 font-display">
              Thonglor, Soi Sukhumvit 55, Bangkok
            </p>
            
            <p className="text-sm text-ink-muted/80 leading-relaxed font-light">
              {t('visit.findUsDetail')}
            </p>
            
            <div className="flex flex-wrap gap-4 border-t border-line/10 pt-8 mt-2">
              <Link 
                href="/visit" 
                className="bg-accent text-bg-deep hover:bg-transparent hover:text-accent border border-accent font-bold text-[11px] uppercase tracking-widest py-4 px-8 rounded-sm transition-all duration-300 shadow-lg"
              >
                Get Directions
              </Link>
              <a 
                href="tel:+66897779248" 
                className="border border-line/50 hover:border-ink hover:bg-ink/5 text-ink py-4 px-8 rounded-sm text-[11px] font-bold tracking-widest uppercase transition-all duration-300 inline-flex items-center gap-2"
              >
                <i className="fas fa-phone-alt text-[10px]" /> Call Now
              </a>
            </div>
          </div>

          {/* Stay in the Loop (Email & LINE sign up) */}
          <div className="bg-bg-panel/40 backdrop-blur-md border border-accent/20 p-8 md:p-12 rounded-sm shadow-2xl relative">
            <div className="absolute top-4 left-4 right-4 bottom-4 border border-accent/5 pointer-events-none" />
            
            <h3 className="font-display font-bold text-2xl text-ink uppercase tracking-wide mb-2 relative z-10">
              JOIN THE CIRCLE
            </h3>
            <p className="text-[13px] text-ink-muted/80 font-light leading-relaxed mb-8 relative z-10">
              Subscribe to get weekly performance listings, vinyl session alerts, and special event invitations directly in your inbox or LINE app.
            </p>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for signing up to the Bluebird Circle!");
              }} 
              className="flex flex-col gap-4 relative z-10"
            >
              <input 
                type="email" 
                placeholder="Your email address" 
                required 
                className="bg-bg-deep/80 border border-line/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent rounded-sm py-3.5 px-4 text-ink text-sm font-light placeholder:text-ink-muted/40 transition-all duration-300"
              />
              <button 
                type="submit" 
                className="bg-accent text-bg-deep hover:bg-transparent hover:text-accent border border-accent py-3.5 rounded-sm text-[11px] font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-lg hover:shadow-accent/10"
              >
                Subscribe Newsletter
              </button>
            </form>
            <div className="relative flex py-5 items-center z-10">
              <div className="flex-grow border-t border-line/10"></div>
              <span className="flex-shrink mx-4 text-[9px] text-ink-muted/40 uppercase tracking-widest">or</span>
              <div className="flex-grow border-t border-line/10"></div>
            </div>
            <a 
              href="https://line.me/ti/p/@bluebirdjazzbar" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full text-center bg-[#06C755] text-white hover:bg-[#05b04b] py-4 rounded-sm text-[11px] font-bold tracking-widest uppercase transition-colors inline-flex items-center justify-center gap-2 cursor-pointer z-10 shadow-lg"
            >
              <i className="fab fa-line text-lg" /> Connect on LINE OA
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
