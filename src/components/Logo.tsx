import React from 'react';

type LogoProps = {
  className?: string;
  size?: number; // Maps to height/width for the 1:1 square logo
};

export const Logo: React.FC<LogoProps> = ({ className = '', size = 52 }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/logo_transparent.png" 
        alt="Bluebird Jazz Bar Logo"
        width={size}
        height={size}
        className="select-none transition-transform duration-300 hover:scale-[1.05] object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] w-full h-full"
        style={{ 
          imageRendering: '-webkit-optimize-contrast',
          display: 'block'
        }}
      />
    </div>
  );
};
