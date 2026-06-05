"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#050B13] border-t border-line py-16 px-5 md:px-[8%] mt-auto text-ink-muted">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Branding & description */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="block select-none -ml-1">
            <Logo size={68} />
          </Link>
          <p className="text-[13px] leading-relaxed mt-2 text-ink-muted/80 font-light">
            {t('hero.tagline')}
          </p>
          <span className="text-[11px] text-accent font-semibold tracking-wider block mt-1">
            {t('common.landmark')}
          </span>
        </div>

        {/* Navigation columns */}
        <div className="flex flex-col gap-5">
          <h4 className="font-display font-semibold tracking-wider text-ink text-sm uppercase">{t('nav.whatsOn')}</h4>
          <ul className="flex flex-col gap-2.5 text-[13px] font-light">
            <li>
              <Link href="/whats-on" className="hover:text-accent transition-colors block">
                {t('whatsOn.title')}
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-accent transition-colors block">
                {t('about.subtitle')}
              </Link>
            </li>
            <li>
              <Link href="/drinks" className="hover:text-accent transition-colors block">
                {t('menu.subtitle')}
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-accent transition-colors block">
                {t('gallery.subtitle')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact info column */}
        <div className="flex flex-col gap-5">
          <h4 className="font-display font-semibold tracking-wider text-ink text-sm uppercase">{t('common.hours')}</h4>
          <div className="flex flex-col gap-3.5 text-[13px] font-light">
            <p className="leading-relaxed">
              {t('common.hoursDetail')}
            </p>
            <p className="border-t border-line/5 pt-3">
              <strong>{t('common.phone')}:</strong> +66 89 777 9248
            </p>
            <p>
              <strong>{t('common.email')}:</strong> bluebirdjazzbar@gmail.com
            </p>
          </div>
        </div>

        {/* Socials / Newsletter Sign Up */}
        <div className="flex flex-col gap-5">
          <h4 className="font-display font-semibold tracking-wider text-ink text-sm uppercase">Follow Us</h4>
          <div className="flex items-center gap-3">
            <a 
              href="https://facebook.com/bluebirdjazzbar" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook Page"
              className="w-9 h-9 rounded-full bg-bg-panel border border-line flex items-center justify-center text-ink-muted hover:bg-accent hover:text-bg-deep hover:border-accent hover:-translate-y-1 transition-all duration-300"
            >
              <i className="fab fa-facebook-f text-sm"></i>
            </a>
            <a 
              href="https://instagram.com/bluebirdjazzbar" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="w-9 h-9 rounded-full bg-bg-panel border border-line flex items-center justify-center text-ink-muted hover:bg-accent hover:text-bg-deep hover:border-accent hover:-translate-y-1 transition-all duration-300"
            >
              <i className="fab fa-instagram text-sm"></i>
            </a>
            <a 
              href="https://tiktok.com/@bluebirdjazzbar" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="TikTok Account"
              className="w-9 h-9 rounded-full bg-bg-panel border border-line flex items-center justify-center text-ink-muted hover:bg-accent hover:text-bg-deep hover:border-accent hover:-translate-y-1 transition-all duration-300"
            >
              <i className="fab fa-tiktok text-sm"></i>
            </a>
          </div>
          <div className="mt-2 flex flex-col gap-2">
            <span className="text-[11px] font-semibold tracking-wider text-ink uppercase">Join the Bluebird Circle</span>
            <a 
              href="https://line.me/ti/p/@bluebirdjazzbar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#06C755] text-white hover:bg-[#05b04b] py-2 px-4 rounded-sm text-xs font-bold tracking-wider uppercase transition-colors"
            >
              <i className="fab fa-line text-lg"></i> Add Friend on LINE
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom copyright */}
      <div className="max-w-6xl mx-auto border-t border-line/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-[11px]">
        <p>{t('vinyl.copyright')}</p>
        <p className="text-ink-muted/50 tracking-wider">
          {t('common.addressDetail')}
        </p>
      </div>
    </footer>
  );
};
