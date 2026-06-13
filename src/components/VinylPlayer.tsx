"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const VinylPlayer: React.FC = () => {
  const { language, t } = useLanguage();
  const [show, setShow] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Show player widget after 1.5 seconds delay
    const timer = setTimeout(() => {
      setShow(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handlePlayToggle = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.error("Playback failed: ", err);
        alert("กรุณากดเล่นอีกครั้ง / Please click play again (Browser security policy requires user gesture).");
      });
    }
  };

  const handleMuteToggle = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const playLabel = {
    th: isPlaying ? "หยุด" : "เปิดเพลงไวนิล",
    en: isPlaying ? "Pause" : "Play Vinyl",
    ja: isPlaying ? "一時停止" : "レコード再生",
    ko: isPlaying ? "정지" : "바이닐 재생"
  }[language] || (isPlaying ? "Pause" : "Play Vinyl");

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-4 bg-bg-panel/90 border border-ink/20 backdrop-blur-md py-2.5 px-4 pr-5 rounded-full shadow-2xl transition-transform duration-700 ease-out ${
        show ? 'translate-x-0' : 'translate-x-[150%]'
      }`}
    >
      {/* Vinyl Disc Section */}
      <div 
        onClick={handlePlayToggle}
        className="w-12 h-12 relative cursor-pointer group select-none"
      >
        {/* Record sleeve background */}
        <div 
          className={`w-full h-full rounded-full border border-neutral-900 bg-radial from-[#333] via-[#050505] to-[#000] relative shadow-lg ${
            isPlaying ? 'animate-rotate-vinyl' : 'transition-transform duration-300 group-hover:scale-105'
          }`}
          style={{
            backgroundImage: "radial-gradient(circle, #333 15%, #050505 40%, #1a1a1a 45%, #0d0d0d 65%, #262626 70%, #000 100%)"
          }}
        >
          {/* Gold label */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-bluebird border border-black flex items-center justify-center">
            {/* Center hole */}
            <div className="w-1 h-1 rounded-full bg-black"></div>
          </div>
        </div>

        {/* Tonearm */}
        <div 
          className={`absolute -top-1 -right-1.5 w-6 h-6 border-l-2 border-t-2 border-accent rounded-tl-xl origin-top-right transition-transform duration-500 pointer-events-none ${
            isPlaying ? 'rotate-[8deg]' : 'rotate-[-25deg]'
          }`}
          style={{ transformOrigin: 'top right' }}
        >
          {/* Cartridge */}
          <div 
            className="absolute bottom-0 -left-1 w-1.5 h-2.5 bg-neutral-400 rounded-sm rotate-[35deg]"
          />
        </div>
      </div>

      {/* Track Info */}
      <div className="flex flex-col select-none">
        <span className="font-semibold text-[11px] text-ink whitespace-nowrap tracking-wide leading-none">{playLabel}</span>
        <span className="text-[10px] text-ink-muted whitespace-nowrap mt-0.5">{t('vinyl.artist')}</span>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2 border-l border-ink/10 pl-3.5 ml-1">
        <button 
          onClick={handlePlayToggle}
          aria-label="Play/Pause Vinyl Music"
          className="w-7 h-7 flex items-center justify-center rounded-full border border-accent/30 text-accent hover:bg-accent hover:text-bg-deep transition-all duration-300 cursor-pointer"
        >
          {isPlaying ? (
            <i className="fas fa-pause text-xs"></i>
          ) : (
            <i className="fas fa-play text-[10px] ml-0.5"></i>
          )}
        </button>
        <button 
          onClick={handleMuteToggle}
          aria-label="Mute/Unmute Music"
          className="text-ink-muted hover:text-ink transition-colors cursor-pointer"
        >
          {isMuted ? (
            <i className="fas fa-volume-mute text-sm"></i>
          ) : (
            <i className="fas fa-volume-up text-sm"></i>
          )}
        </button>
        {/* Close Widget */}
        <button 
          onClick={() => setShow(false)}
          aria-label="Close Vinyl Player"
          className="text-ink-muted hover:text-accent transition-colors ml-1 cursor-pointer focus:outline-none"
        >
          <i className="fas fa-times text-xs"></i>
        </button>
      </div>

      {/* Hidden audio element */}
      <audio 
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" 
        preload="none"
        loop
      />
    </div>
  );
};
