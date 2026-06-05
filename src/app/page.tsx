"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import weeklyLineup from '../../content/whats-on.json';

export default function Home() {
  const { t } = useLanguage();
  
  // Get tonight's show (first item in the lineup)
  const tonightShow = weeklyLineup.lineup[0];

  return (
    <div className="flex flex-col w-full animate-fade-in-up">
      
      {/* 1. Immersive Editorial Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center px-6 py-24 bg-bg-deep overflow-hidden">
        {/* Full-bleed background image with heavy vintage styling */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/premium_bar_hero.png" 
            alt="Bluebird Live" 
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
              "{t('hero.tagline')}"
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
          {tonightShow && (
            <div className="lg:col-span-5 bg-bg-panel/40 backdrop-blur-md border border-accent/20 p-8 sm:p-10 rounded-sm relative overflow-hidden shadow-2xl hover:border-accent/40 transition-all duration-500 group">
              {/* Decorative vintage borders */}
              <div className="absolute top-4 left-4 right-4 bottom-4 border border-accent/5 pointer-events-none" />
              
              <div className="flex justify-between items-start mb-8 relative z-10">
                <span className="bg-accent/10 border border-accent/30 text-accent font-bold text-[9px] tracking-[4px] uppercase py-1.5 px-4 rounded-full">
                  TONIGHT
                </span>
                <span className="text-[10px] text-ink-muted/70 tracking-widest uppercase">
                  {tonightShow.time} PM
                </span>
              </div>

              <div className="relative z-10">
                <span className="text-[11px] font-bold text-bluebird tracking-widest uppercase block mb-3">
                  {tonightShow.date} · {tonightShow.dayName}
                </span>
                <h3 className="font-display font-bold text-3xl sm:text-4xl text-ink uppercase tracking-wide leading-tight mb-4 group-hover:text-accent transition-colors duration-300">
                  {tonightShow.artist}
                </h3>
                <span className="inline-block text-[9px] font-bold tracking-[3px] text-accent border border-accent/30 rounded-full px-4 py-1.5 uppercase mb-8">
                  {tonightShow.genre}
                </span>
                
                <p className="text-[13px] text-ink-muted leading-relaxed font-light mb-8 border-l border-accent/20 pl-4 italic">
                  "Every night, we pay homage to the classic recordings of the vinyl era. Experience authentic live jazz standards in a cozy third-floor room."
                </p>

                <div className="flex items-center justify-between border-t border-line/10 pt-6">
                  <div className="flex flex-col">
                    <span className="text-[9px] text-ink-muted/60 uppercase tracking-widest">Cover Charge</span>
                    <span className="text-xs text-accent font-semibold">{weeklyLineup.coverCharge}</span>
                  </div>
                  <Link 
                    href="/visit#reserve-form-section" 
                    className="text-xs font-bold text-bluebird hover:text-ink tracking-widest uppercase flex items-center gap-1.5 group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Reserve Table <i className="fas fa-arrow-right text-[10px]" />
                  </Link>
                </div>
              </div>
            </div>
          )}
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
              THE WEEKLY <br />
              <span className="text-accent">LINEUP</span>
            </h2>
            <p className="text-sm text-ink-muted/80 leading-relaxed font-light mb-8 max-w-md">
              Our venue features world-class musicians, vinyl record listening sessions, and historic jam sessions. Browse our lineup for this week.
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
                    {show.time} PM · {show.genre}
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-ink uppercase tracking-wide group-hover:text-accent transition-colors duration-300">
                    {show.artist}
                  </h3>
                </div>

                {/* Action button */}
                <div className="min-w-[130px] text-right">
                  <Link 
                    href="/visit#reserve-form-section" 
                    className="border border-line/50 text-ink group-hover:bg-accent group-hover:text-bg-deep group-hover:border-accent font-bold text-[10px] tracking-widest uppercase py-3 px-6 rounded-sm transition-all duration-300 inline-block"
                  >
                    Reserve Table
                  </Link>
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
              THE STORIES OF <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-bluebird">OUR NEST</span>
            </h2>
            <div className="h-[2px] bg-accent w-20 mx-auto mt-4"></div>
          </div>

          {/* Story 1: Acoustic Sanctuary */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Image Left */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[16/10] w-full border border-accent/20 shadow-2xl rounded-sm overflow-hidden z-10">
                <img 
                  src="/premium_jazz_sax.png" 
                  alt="Bluebird Acoustic Sanctuary" 
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
                Unlike commercial venues, Bluebird is an intimate space hidden on the 3rd floor in Thonglor. It's a sanctuary designed for pure listening, where vinyl records and live acoustic jazz merge in warm, analog harmony.
              </p>
              <p className="text-sm text-ink-muted leading-relaxed font-light italic border-l-2 border-accent pl-4">
                "We believe that jazz is best experienced up close. In our nest, you're not just watching a performance—you're sharing a living room with the musicians."
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
                  src="/premium_tube_amp.png" 
                  alt="Custom Vacuum Tube Amplification" 
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
                  src="/premium_vinyl_turntable.png" 
                  alt="Golden Era Vinyl Collection" 
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
                src="/premium_blue_cocktail.png" 
                alt="Bluebird Signature Cocktail" 
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
            VISUAL <span className="text-accent">STORIES</span>
          </h2>
          <p className="text-sm text-ink-muted/80 max-w-xl mx-auto font-light leading-relaxed">
            Take a look inside the nest. Experience the visual details of our live sessions, art pieces, and curated vinyl corner.
          </p>
        </div>

        {/* Elegant Asymmetric Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4 aspect-square rounded-sm overflow-hidden border border-line shadow-md group relative">
            <img src="/premium_vinyl_turntable.png" alt="Vinyl Records Turntable" className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <span className="text-xs font-bold text-accent uppercase tracking-widest">Vinyl Archive</span>
            </div>
          </div>
          <div className="md:col-span-8 aspect-[21/10] rounded-sm overflow-hidden border border-line shadow-md group relative">
            <img src="/premium_bar_hero.png" alt="Live Jazz Venue" className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <span className="text-xs font-bold text-accent uppercase tracking-widest">Live Jazz Sanctuary</span>
            </div>
          </div>
          <div className="md:col-span-6 aspect-square md:aspect-[4/3] rounded-sm overflow-hidden border border-line shadow-md group relative">
            <img src="/premium_bar_counter.png" alt="Premium Bar Lounge" className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <span className="text-xs font-bold text-accent uppercase tracking-widest">Bar Lounge &amp; Spirits</span>
            </div>
          </div>
          <div className="md:col-span-6 aspect-square md:aspect-[4/3] rounded-sm overflow-hidden border border-line shadow-md group relative">
            <img src="/premium_blue_cocktail.png" alt="Bluebird Signature Cocktail" className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
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
            <h2 className="font-display font-bold text-4xl text-ink uppercase tracking-tight">
              JOIN US IN <br />
              <span className="text-accent">THE NEST</span>
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
