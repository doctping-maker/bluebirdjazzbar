"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import weeklyLineup from '../../../content/whats-on.json';

export default function WhatsOn() {
  const { t } = useLanguage();

  return (
    <div className="w-full py-20 px-6 md:px-[8%] bg-bg-deep animate-fade-in-up">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Block */}
        <div className="mb-20 text-center md:text-left">
          <span className="text-xs font-bold tracking-[8px] text-bluebird uppercase mb-2 block animate-pulse">
            {t('whatsOn.subtitle')}
          </span>
          <h1 className="font-display font-black text-5xl sm:text-7xl text-ink uppercase tracking-tight leading-none">
            WEEKLY <span className="text-accent">SCHEDULE</span>
          </h1>
          <p className="text-ink-muted text-sm font-light mt-4 max-w-xl leading-relaxed">
            {t('whatsOn.desc')}
          </p>
          <div className="h-[2px] bg-accent w-24 mt-6 mx-auto md:mx-0"></div>
        </div>

        {/* Dynamic timeline lineup listings */}
        <div className="flex flex-col border-t border-accent/20 mb-20">
          {weeklyLineup.lineup.map((show) => (
            <div 
              key={show.id}
              className="py-10 border-b border-line/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 px-4 hover:bg-bg-panel/15 transition-all duration-300 group"
            >
              {/* Date Marker (Left column) */}
              <div className="flex items-center gap-6 min-w-[150px]">
                <span className="font-display font-black text-6xl text-accent tracking-tighter group-hover:text-bluebird transition-colors duration-300">
                  {show.date.split(' ')[0]}
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-ink uppercase tracking-widest leading-none mb-1">
                    {show.dayName}
                  </span>
                  <span className="text-[11px] text-ink-muted uppercase tracking-wider">
                    {show.date.split(' ')[1]}
                  </span>
                </div>
              </div>

              {/* Show details & Description */}
              <div className="flex-grow max-w-xl">
                <span className="text-[10px] text-bluebird font-bold tracking-widest uppercase block mb-1">
                  {show.time} PM · Live Music
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink uppercase tracking-wide group-hover:text-accent transition-colors duration-300">
                  {show.artist}
                </h3>
                <p className="text-[13px] text-ink-muted/80 font-light leading-relaxed mt-2 uppercase tracking-wider text-[11px]">
                  Genre: <span className="text-ink">{show.genre}</span>
                </p>
              </div>

              {/* Action booking */}
              <div className="min-w-[150px] text-left md:text-right">
                <Link 
                  href="/visit#reserve-form-section"
                  className="bg-accent/10 text-accent hover:bg-accent hover:text-bg-deep border border-accent/25 font-bold text-[10px] tracking-widest uppercase py-3.5 px-8 rounded-sm transition-all duration-300 inline-block shadow-md"
                >
                  Book Seat
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Wednesday Jam Session Details Box */}
        <div className="bg-bg-panel/40 backdrop-blur-sm border border-accent/25 p-8 sm:p-12 rounded-sm mb-16 relative shadow-xl">
          <div className="absolute top-4 left-4 right-4 bottom-4 border border-accent/5 pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
            <div className="text-accent text-3xl mt-1">
              <i className="fas fa-compact-disc animate-spin-slow" />
            </div>
            <div className="flex-grow">
              <h3 className="font-display font-bold text-2xl text-ink uppercase tracking-wide mb-3">
                {t('whatsOn.jamTitle')}
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed font-light mb-6">
                {t('whatsOn.jamDesc')}
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-accent/90 bg-bg-deep/40 px-5 py-3.5 rounded-sm w-fit border border-line/10">
                <span className="uppercase tracking-widest text-[10px] text-ink-muted">Weekly Schedule:</span>
                <span>{weeklyLineup.jamSessionInfo.day} · {weeklyLineup.jamSessionInfo.time}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cover Charge Alert Box */}
        <div className="border border-line/50 p-8 rounded-sm bg-bg-deep/50 text-justify relative">
          <p className="text-xs font-light text-ink-muted/80 leading-relaxed">
            {t('whatsOn.coverChargeDesc')}
          </p>
          <div className="h-[1px] bg-line/10 my-4" />
          <p className="text-xs font-bold text-accent tracking-wide uppercase flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-ping" />
            Cover Charge Reference: {weeklyLineup.coverCharge}
          </p>
        </div>

      </div>
    </div>
  );
}
