import React from 'react';

type LogoProps = {
  className?: string;
  size?: number; // Maps to height to keep compatibility with existing components
};

export const Logo: React.FC<LogoProps> = ({ className = '', size = 44 }) => {
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
          <linearGradient id="bird-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#3FA7D6"/>
            <stop offset="1" stopColor="#1E6FA8"/>
          </linearGradient>
        </defs>

        {/* Bird mark: Bluebird holding a vinyl record and a saxophone (Official Brand Concept) */}
        <g transform="translate(260,66)">
          {/* Vinyl Record */}
          <g transform="translate(-40, 10)">
            <circle cx="0" cy="0" r="30" fill="#151A22" stroke="#C9A24B" strokeWidth="1.5" opacity="0.95"/>
            <circle cx="0" cy="0" r="22" fill="none" stroke="#253246" strokeWidth="0.5"/>
            <circle cx="0" cy="0" r="15" fill="none" stroke="#253246" strokeWidth="0.5"/>
            <circle cx="0" cy="0" r="8" fill="#C9A24B"/>
            <circle cx="0" cy="0" r="2" fill="#0A1828"/>
          </g>

          {/* Saxophone */}
          <g>
            <path 
              d="M 22 -6 C 18 -6, 12 -4, 12 12 C 12 28, 20 38, 35 38 C 48 38, 54 26, 54 15 M 54 15 C 54 8, 48 4, 44 4" 
              fill="none" 
              stroke="#C9A24B" 
              strokeWidth="4.5" 
              strokeLinecap="round"
            />
            <path d="M 54 15 C 56 12, 60 10, 66 10 C 66 22, 60 22, 54 15 Z" fill="#C9A24B"/>
            <circle cx="15" cy="18" r="2" fill="#F4EFE6" stroke="#C9A24B" strokeWidth="0.75"/>
            <circle cx="20" cy="26" r="2" fill="#F4EFE6" stroke="#C9A24B" strokeWidth="0.75"/>
            <circle cx="28" cy="32" r="2" fill="#F4EFE6" stroke="#C9A24B" strokeWidth="0.75"/>
          </g>

          {/* Bluebird Body */}
          <path 
            d="M -25 -20 C -10 -35, 15 -35, 25 -20 C 35 -5, 30 15, 15 25 C 0 30, -20 25, -28 10 C -32 -2, -32 -12, -25 -20 Z" 
            fill="url(#bird-gradient)"
          />
          {/* Belly */}
          <path 
            d="M -15 22 C -2 22, 10 15, 15 5 C 10 -5, -2 -10, -15 2 C -20 10, -20 18, -15 22 Z" 
            fill="#3FA7D6" 
            opacity="0.7"
          />
          {/* Beak */}
          <path d="M 24 -15 L 36 -12 L 25 -6 Z" fill="#C9A24B"/>
          {/* Eye */}
          <path d="M 12 -18 Q 16 -22, 20 -18" fill="none" stroke="#0A1828" strokeWidth="2.5" strokeLinecap="round"/>
          {/* Wing */}
          <path 
            d="M -10 -15 C -25 -10, -28 15, -15 15 C -8 15, -2 -5, -10 -15 Z" 
            fill="#1E6FA8" 
            opacity="0.9"
          />
          {/* Tail */}
          <path 
            d="M -28 5 C -38 12, -42 8, -45 15 C -38 15, -34 10, -28 5 Z" 
            fill="url(#bird-gradient)"
          />
          {/* Feet */}
          <path d="M -20 20 L -30 25 M -20 20 L -25 28" stroke="#C9A24B" strokeWidth="2" strokeLinecap="round"/>
          <path d="M 5 22 L 12 28 M 5 22 L 6 30" stroke="#C9A24B" strokeWidth="2" strokeLinecap="round"/>
        </g>

        {/* Wordmark */}
        <text 
          x="260" 
          y="160" 
          textAnchor="middle"
          fontFamily="'Playfair Display', Georgia, serif" 
          fontWeight="700"
          fontSize="52" 
          letterSpacing="2" 
          fill="#F4EFE6"
        >
          BLUEBIRD
        </text>
        <text 
          x="260" 
          y="194" 
          textAnchor="middle"
          fontFamily="'Inter', Arial, sans-serif" 
          fontWeight="500"
          fontSize="18" 
          letterSpacing="11" 
          fill="#C9A24B"
        >
          JAZZ  BAR
        </text>

        {/* thin rule flourishes */}
        <line x1="120" y1="184" x2="178" y2="184" stroke="#C9A24B" strokeWidth="1" opacity="0.6"/>
        <line x1="342" y1="184" x2="400" y2="184" stroke="#C9A24B" strokeWidth="1" opacity="0.6"/>
      </svg>
    </div>
  );
};
