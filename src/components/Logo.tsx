import React from 'react';

type LogoProps = {
  className?: string;
  size?: number; // Maps to height to keep compatibility with existing components
};

export const Logo: React.FC<LogoProps> = ({ className = '', size = 52 }) => {
  // The aspect ratio of the SVG is 520:240
  const calculatedWidth = Math.round(size * (520 / 240));

  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        width={calculatedWidth}
        height={size}
        viewBox="0 0 520 240" 
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Bluebird Jazz Bar logo"
        className="select-none transition-transform duration-300 hover:scale-[1.03]"
      >
        <defs>
          <linearGradient id="bird-body-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#89C6C9"/>
            <stop offset="1" stopColor="#649C9E"/>
          </linearGradient>
          
          {/* Paths for arched texts */}
          <path id="thai-arc" d="M 130 52 A 165 165 0 0 1 390 52" fill="none" />
          <path id="bluebird-arc" d="M 100 80 A 185 185 0 0 1 420 80" fill="none" />
          <path id="jazzbar-arc" d="M 160 102 A 200 200 0 0 1 360 102" fill="none" />
        </defs>

        {/* 1. Curved Wordmarks (Top Arch) */}
        {/* Thai Text */}
        <text 
          fontFamily="'Inter', sans-serif" 
          fontSize="14.5" 
          fontWeight="400"
          letterSpacing="2.5"
          fill="#F4EFE6"
          opacity="0.85"
        >
          <textPath href="#thai-arc" startOffset="50%" textAnchor="middle">
            บลูเบิร์ดแจ๊สบาร์
          </textPath>
        </text>

        {/* English BLUEBIRD Arched Text */}
        <text 
          fontFamily="'Playfair Display', Georgia, serif" 
          fontSize="46" 
          fontWeight="900"
          letterSpacing="4" 
          fill="#F4EFE6"
        >
          <textPath href="#bluebird-arc" startOffset="50%" textAnchor="middle">
            BLUEBIRD
          </textPath>
        </text>

        {/* English JAZZ BAR Arched Text */}
        <text 
          fontFamily="'Inter', sans-serif" 
          fontSize="17.5" 
          fontWeight="700"
          letterSpacing="8" 
          fill="#C9A24B"
        >
          <textPath href="#jazzbar-arc" startOffset="50%" textAnchor="middle">
            JAZZ BAR
          </textPath>
        </text>

        {/* 2. Official Bluebird Mascot (Teardrop shape playing saxophone & holding vinyl) */}
        <g transform="translate(260,135)">
          {/* A. Long Skinny Black Legs */}
          <line x1="-12" y1="35" x2="-12" y2="62" stroke="#000000" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="-17" y1="62" x2="-11" y2="62" stroke="#000000" strokeWidth="2.5" strokeLinecap="round"/>
          
          <line x1="12" y1="35" x2="12" y2="62" stroke="#000000" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="11" y1="62" x2="17" y2="62" stroke="#000000" strokeWidth="2.5" strokeLinecap="round"/>

          {/* B. Vinyl Record (Held on Left Wing / Right Side of Logo) */}
          <g transform="translate(68, 15)">
            <circle cx="0" cy="0" r="32" fill="#111111" stroke="#000000" strokeWidth="2.5"/>
            <circle cx="0" cy="0" r="26" fill="none" stroke="#222222" strokeWidth="0.75"/>
            <circle cx="0" cy="0" r="20" fill="none" stroke="#222222" strokeWidth="0.75"/>
            <circle cx="0" cy="0" r="14" fill="none" stroke="#222222" strokeWidth="0.75"/>
            <circle cx="0" cy="0" r="10" fill="#FFFFFF" stroke="#000000" strokeWidth="1.5"/>
            <circle cx="0" cy="0" r="3" fill="#000000"/>
          </g>

          {/* C. Saxophone (Held on Right Wing / Left Side of Logo) */}
          <g>
            {/* Saxophone Black Outline (for backdrop shadow effect) */}
            <path 
              d="M -5 0 C -25 5, -60 15, -72 30 C -82 42, -92 48, -99 38 C -106 28, -104 10, -86 -10" 
              fill="none" 
              stroke="#000000" 
              strokeWidth="7" 
              strokeLinecap="round"
            />
            {/* Saxophone Yellow Body */}
            <path 
              d="M -5 0 C -25 5, -60 15, -72 30 C -82 42, -92 48, -99 38 C -106 28, -104 10, -86 -10" 
              fill="none" 
              stroke="#FFCE44" 
              strokeWidth="4.5" 
              strokeLinecap="round"
            />
            {/* Bell Flare */}
            <path d="M -86 -10 C -80 -16, -69 -20, -64 -16 C -72 -5, -79 -4, -86 -10 Z" fill="#FFCE44" stroke="#000000" strokeWidth="2"/>
            
            {/* Mouthpiece Red Connector Tape */}
            <rect x="-10" y="-4" width="7" height="4.5" fill="#C93B2B" stroke="#000000" strokeWidth="1.5" transform="rotate(10, -10, -4)"/>
            
            {/* Saxophone Black Keys */}
            <circle cx="-59" cy="22" r="1.5" fill="#000000"/>
            <circle cx="-49" cy="18" r="1.5" fill="#000000"/>
            <circle cx="-39" cy="14" r="1.5" fill="#000000"/>
            <circle cx="-29" cy="10" r="1.5" fill="#000000"/>
          </g>

          {/* D. Main Bird Body (Egg/Teardrop shape) */}
          <path 
            d="M 0 -85 C 40 -85, 60 -50, 60 -5 C 60 30, 35 35, 0 35 C -35 35, -60 30, -60 -5 C -60 -50, -40 -85, 0 -85 Z" 
            fill="url(#bird-body-gradient)" 
            stroke="#000000" 
            strokeWidth="2.5"
          />

          {/* E. 3 Top-Head Feathers */}
          <path d="M 0 -85 C 0 -95, 3 -99, 5 -99 C 7 -99, 2 -91, 2 -85 Z" fill="#7BB3B5" stroke="#000000" strokeWidth="1.5"/>
          <path d="M -5 -83 C -8 -93, -12 -95, -10 -95 C -8 -95, -4 -89, -3 -83 Z" fill="#7BB3B5" stroke="#000000" strokeWidth="1.5"/>
          <path d="M 5 -83 C 8 -93, 12 -95, 10 -95 C 8 -95, 4 -89, 3 -83 Z" fill="#7BB3B5" stroke="#000000" strokeWidth="1.5"/>

          {/* F. Body Feather Texture (U-shaped mini arcs) */}
          <path d="M -25 -40 Q -21 -36, -17 -40" fill="none" stroke="#A6CECF" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M 17 -40 Q 21 -36, 25 -40" fill="none" stroke="#A6CECF" strokeWidth="1.5" strokeLinecap="round"/>
          
          <path d="M -35 -20 Q -31 -16, -27 -20" fill="none" stroke="#A6CECF" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M -2 -13 Q 2 -9, 6 -13" fill="none" stroke="#A6CECF" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M 27 -20 Q 31 -16, 35 -20" fill="none" stroke="#A6CECF" strokeWidth="1.5" strokeLinecap="round"/>
          
          <path d="M -20 3 Q -16 7, -12 3" fill="none" stroke="#A6CECF" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M 12 3 Q 16 7, 20 3" fill="none" stroke="#A6CECF" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M -4 17 Q 0 21, 4 17" fill="none" stroke="#A6CECF" strokeWidth="1.5" strokeLinecap="round"/>

          {/* G. Big Cartoon Eyes */}
          <circle cx="-13" cy="-40" r="9.5" fill="#FFFFFF" stroke="#000000" strokeWidth="2"/>
          <circle cx="-13" cy="-40" r="2.5" fill="#000000"/>
          
          <circle cx="13" cy="-40" r="9.5" fill="#FFFFFF" stroke="#000000" strokeWidth="2"/>
          <circle cx="13" cy="-40" r="2.5" fill="#000000"/>

          {/* H. Black Triangle Beak */}
          <polygon points="-5,-32 5,-32 0,-20" fill="#000000"/>

          {/* I. Wings Holding Items */}
          {/* Right Wing (Left side of drawing - holding Saxophone) */}
          <path d="M -35 -13 C -50 -13, -55 0, -40 5 C -30 5, -25 -5, -35 -13 Z" fill="#7BB3B5" stroke="#000000" strokeWidth="2"/>
          {/* Left Wing (Right side of drawing - holding Vinyl) */}
          <path d="M 38 -15 C 70 -10, 60 10, 45 10 C 35 10, 30 -5, 38 -15 Z" fill="#7BB3B5" stroke="#000000" strokeWidth="2"/>
        </g>

        {/* 3. Floating Music Notes */}
        <g transform="translate(90, 110)">
          <circle cx="0" cy="15" r="3" fill="#3FA7D6"/>
          <line x1="3" y1="15" x2="3" y2="0" stroke="#3FA7D6" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M 3 2 Q 8 2, 10 -2" fill="none" stroke="#3FA7D6" strokeWidth="1.5" strokeLinecap="round"/>
        </g>
        <g transform="translate(110, 85)">
          <circle cx="0" cy="15" r="3" fill="#3FA7D6"/>
          <line x1="3" y1="15" x2="3" y2="0" stroke="#3FA7D6" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M 3 2 Q 8 2, 10 -2" fill="none" stroke="#3FA7D6" strokeWidth="1.5" strokeLinecap="round"/>
        </g>

        {/* 4. Japanese Katakana Wordmark (Bottom Center) */}
        <text 
          x="260" 
          y="226" 
          textAnchor="middle"
          fontFamily="'Noto Sans JP', sans-serif" 
          fontWeight="900"
          fontSize="18" 
          letterSpacing="8" 
          fill="#C9A24B"
        >
          ジャズ・バー
        </text>
      </svg>
    </div>
  );
};
