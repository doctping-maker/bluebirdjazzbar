"use client";

import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import menuData from '../../../content/menu.json';

export default function Drinks() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(menuData.categories[0].id);

  return (
    <div className="w-full py-20 px-6 md:px-[8%] bg-bg-deep animate-fade-in-up">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Block */}
        <div className="mb-16 text-center md:text-left">
          <span className="text-xs font-bold tracking-[8px] text-bluebird uppercase mb-2 block animate-pulse">
            {t('menu.subtitle')}
          </span>
          <h1 className="font-display font-black text-5xl sm:text-7xl text-ink uppercase tracking-tight leading-none">
            THE <span className="text-accent">MENU</span>
          </h1>
          <p className="text-ink-muted text-sm font-light mt-4 max-w-xl leading-relaxed">
            {t('menu.desc')}
          </p>
          <div className="h-[2px] bg-accent w-24 mt-6 mx-auto md:mx-0"></div>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-16 border-b border-line/10 pb-8">
          {menuData.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`py-3.5 px-8 text-xs font-bold tracking-widest uppercase rounded-sm border cursor-pointer transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-accent text-bg-deep border-accent shadow-lg shadow-accent/10'
                  : 'bg-bg-panel/40 text-ink-muted border-line/30 hover:text-ink hover:border-line'
              }`}
            >
              {language === 'th' ? cat.nameTH : cat.nameEN}
            </button>
          ))}
        </div>

        {/* Featured signature drink banner (only visible when Cocktails is selected) */}
        {activeCategory === 'cocktails' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-bg-panel/40 backdrop-blur-sm border border-accent/25 p-8 sm:p-10 rounded-sm mb-16 items-center relative shadow-xl">
            <div className="absolute top-4 left-4 right-4 bottom-4 border border-accent/5 pointer-events-none" />
            
            {/* Visual real image */}
            <div className="md:col-span-4 bg-bg-deep border border-line aspect-square rounded-sm relative flex items-center justify-center overflow-hidden z-10 shadow-lg">
              <img 
                src="/cocktail-real.jpg" 
                alt="ค็อกเทลซิกเนเจอร์ของร้านเสิร์ฟในแก้วทรงนก" 
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Info */}
            <div className="lg:col-span-8 flex flex-col gap-3 relative z-10">
              <span className="text-[10px] font-bold tracking-[4px] text-accent uppercase">Featured Libation</span>
              <h3 className="font-display font-bold text-3xl text-ink uppercase tracking-wide">
                The Bluebird
              </h3>
              <p className="text-[13px] text-ink-muted leading-relaxed font-light italic border-l border-accent/20 pl-4 my-1">
                {t('menu.featuredDesc')}
              </p>
              <span className="font-display font-black text-2xl text-accent block mt-1">
                320 {t('menu.thb')}
              </span>
            </div>
          </div>
        )}

        {/* Menu Listings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10 mb-16">
          {menuData.categories
            .find((cat) => cat.id === activeCategory)
            ?.items.map((item, idx) => (
              <div 
                key={idx}
                className="pb-6 flex flex-col justify-between items-stretch hover:border-accent/10 transition-colors"
              >
                <div className="flex items-end justify-between gap-4">
                  <h4 className="font-display font-bold text-base text-ink uppercase tracking-wide flex items-center gap-3">
                    {item.name}
                    {item.tag && (
                      <span className="bg-bluebird/10 border border-bluebird/30 text-bluebird text-[8px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-sm">
                        {item.tag}
                      </span>
                    )}
                  </h4>
                  {/* Leader line dots connecting item name to price */}
                  <div className="flex-grow border-b border-dotted border-accent/20 mx-3 mb-1.5 h-1" />
                  <div className="font-display font-black text-base text-accent whitespace-nowrap">
                    {item.price} {t('menu.thb')}
                  </div>
                </div>
                <p className="text-[12px] text-ink-muted/80 font-light leading-relaxed mt-2.5">
                  {language === 'th' ? item.descTH : item.descEN}
                </p>
              </div>
            ))}
        </div>
 
        {/* Mascot Wine Card at the bottom of the drinks page */}
        <div className="mt-12 bg-bg-panel/40 backdrop-blur-sm border border-accent/25 p-8 sm:p-10 rounded-sm flex flex-col md:flex-row items-center gap-8 relative shadow-xl overflow-hidden">
          <div className="absolute top-4 left-4 right-4 bottom-4 border border-accent/5 pointer-events-none" />
          
          <div className="w-full md:w-1/3 max-w-[200px] flex-shrink-0 z-10">
            <div className="relative aspect-square border border-accent/20 rounded-sm overflow-hidden bg-bg-deep shadow-md">
              <img 
                src="/character_pride.jpg" 
                alt="Bluebird Mascot Toasting Wine" 
                className="w-full h-full object-cover filter brightness-[0.9] hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          <div className="flex-grow z-10 flex flex-col gap-2">
            <span className="text-[10px] font-bold tracking-[4px] text-accent uppercase">Bluebird Cheer</span>
            <h3 className="font-display font-bold text-2xl text-ink uppercase tracking-wide">
              {t('mascot.cheerTitle')}
            </h3>
            <p className="text-sm text-ink-muted leading-relaxed font-light">
              {t('mascot.cheerDesc')}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
