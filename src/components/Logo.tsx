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

        {/* Bird mark: original geometric bluebird in flight over a vinyl arc */}
        <g transform="translate(260,66)">
          {/* vinyl arc / brass */}
          <path 
            d="M -78 28 A 78 78 0 0 1 78 28" 
            fill="none" 
            stroke="#C9A24B" 
            strokeWidth="3" 
            strokeLinecap="round" 
            opacity="0.85"
          />
          <circle cx="0" cy="28" r="4" fill="#C9A24B"/>
          {/* body */}
          <path 
            d="M 0 -34 C 20 -34, 34 -20, 34 0 C 34 14, 24 24, 8 26 C 26 16, 22 -2, 4 -6 C 18 4, 10 18, -6 18 C -26 18, -38 4, -34 -12 C -30 -2, -16 0, -8 -8 C -18 -16, -14 -30, 0 -34 Z" 
            fill="url(#bird-gradient)"
          />
          {/* wing accent */}
          <path 
            d="M -2 -10 C 12 -8, 18 2, 14 12 C 8 2, -2 0, -2 -10 Z" 
            fill="#0A1828" 
            opacity="0.25"
          />
          {/* eye */}
          <circle cx="20" cy="-12" r="2.4" fill="#0A1828"/>
          {/* beak */}
          <path d="M 34 -8 L 46 -4 L 34 0 Z" fill="#C9A24B"/>
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
