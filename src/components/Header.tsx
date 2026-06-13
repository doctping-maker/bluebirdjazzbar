"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage, Language } from '../context/LanguageContext';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/whats-on', label: t('nav.whatsOn') },
    { href: '/drinks', label: t('nav.drinks') },
    { href: '/gallery', label: t('nav.gallery') },
    { href: '/visit', label: t('nav.visit') }
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'th', label: 'ภาษาไทย', flag: 'TH' },
    { code: 'en', label: 'English', flag: 'EN' },
    { code: 'ja', label: '日本語', flag: 'JA' },
    { code: 'ko', label: '한국어', flag: 'KO' }
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 px-5 md:px-[8%] py-5 flex justify-between items-center transition-all duration-300 ${
        isScrolled 
          ? 'bg-bg-deep/85 border-b border-accent/15 backdrop-blur-md py-3.5 shadow-lg' 
          : 'bg-gradient-to-b from-bg-deep/80 to-transparent'
      }`}
    >
      {/* Brand logo */}
      <Link href="/" className="transition-all duration-300 block">
        <Logo size={isScrolled ? 60 : 90} className="w-[60px] h-[60px] md:w-[90px] md:h-[90px] transition-all duration-300" />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link 
                  href={item.href}
                  className={`text-[13px] font-semibold tracking-wider uppercase relative py-1.5 transition-colors duration-300 ${
                    isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {item.label}
                  <span 
                    className={`absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 hover:w-full'
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Header Actions */}
      <div className="hidden md:flex items-center gap-6">
        {/* Desktop Language Switcher Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setIsLangOpen(!isLangOpen)}
            aria-label="Select Language"
            className="flex items-center gap-2 text-xs font-bold tracking-wider text-ink-muted hover:text-ink transition-colors uppercase border border-ink/15 rounded-full px-3.5 py-1.5 cursor-pointer select-none bg-bg-panel/40 hover:bg-bg-panel/85"
          >
            <span>{languages.find(l => l.code === language)?.flag || 'EN'}</span>
            <i className={`fas fa-chevron-down text-[8px] transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
          </button>

          {isLangOpen && (
            <>
              {/* Overlay back to close */}
              <div className="fixed inset-0 z-40" onClick={() => setIsLangOpen(false)} />
              
              <ul className="absolute right-0 mt-2.5 w-36 bg-bg-panel/95 backdrop-blur-md border border-accent/20 rounded-sm py-2 shadow-2xl z-50 animate-fade-in-up">
                {languages.map((lang) => (
                  <li key={lang.code}>
                    <button
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-[11px] font-medium tracking-wide transition-colors cursor-pointer ${
                        language === lang.code 
                          ? 'text-accent bg-accent/5 font-semibold' 
                          : 'text-ink-muted hover:text-ink hover:bg-ink/5'
                      }`}
                    >
                      {lang.label} ({lang.flag})
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Book table btn */}
        <Link 
          href="/visit#reserve-form-section" 
          className="border border-accent text-accent hover:bg-accent hover:text-bg-deep py-2 px-5 rounded-sm text-[11px] font-bold tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-accent/10 hover:-translate-y-0.5 active:translate-y-0"
        >
          {t('nav.book')}
        </Link>
      </div>

      {/* Mobile Actions: Hamburguer Toggle */}
      <div className="flex md:hidden items-center gap-4">
        {/* Mobile Menu Hamburger Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle mobile menu"
          className="w-7 h-5 flex flex-col justify-between relative cursor-pointer z-50 group"
        >
          <span className={`w-full h-[2px] bg-ink rounded transition-all duration-300 origin-center ${
            isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''
          }`} />
          <span className={`w-full h-[2px] bg-ink rounded transition-all duration-300 ${
            isMenuOpen ? 'opacity-0 scale-x-0' : ''
          }`} />
          <span className={`w-full h-[2px] bg-ink rounded transition-all duration-300 origin-center ${
            isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''
          }`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed top-0 right-0 w-72 h-screen bg-bg-panel border-l border-accent/20 backdrop-blur-xl z-40 flex flex-col justify-between p-10 pt-24 transition-transform duration-500 ease-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-8">
          <nav>
            <ul className="flex flex-col gap-5">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link 
                      href={item.href}
                      onClick={handleLinkClick}
                      className={`text-[15px] font-semibold tracking-widest uppercase transition-colors block ${
                        isActive ? 'text-accent' : 'text-ink-muted hover:text-ink'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Language Grid inside mobile drawer */}
          <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-line/10">
            <span className="text-[10px] font-bold tracking-widest text-accent uppercase">Language</span>
            <div className="grid grid-cols-3 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                  }}
                  className={`py-2 text-[10px] font-bold rounded-sm border text-center transition-all ${
                    language === lang.code
                      ? 'border-accent bg-accent/10 text-accent'
                      : 'border-line/30 text-ink-muted hover:text-ink'
                  }`}
                >
                  {lang.flag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile menu CTA */}
        <div className="flex flex-col gap-6">
          <Link 
            href="/visit#reserve-form-section" 
            onClick={handleLinkClick}
            className="w-full text-center border border-accent text-accent hover:bg-accent hover:text-bg-deep py-3.5 rounded-sm text-xs font-bold tracking-widest uppercase transition-colors"
          >
            {t('nav.book')}
          </Link>
          <span className="text-[10px] text-ink-muted/50 text-center tracking-wider font-medium">
            Bluebird Jazz Bar Thonglor
          </span>
        </div>
      </div>
    </header>
  );
};
