import React from 'react';

const Logo = ({ size = 40, className = "" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Definitions for the Gradient */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" /> {/* Cyan */}
          <stop offset="100%" stopColor="#a855f7" /> {/* Purple */}
        </linearGradient>
      </defs>

      {/* The Logo Shape: A Stylized 'V' resembling a growth chart/arrow */}
      <path 
        d="M20 30 L50 85 L80 30" 
        stroke="url(#logoGradient)" 
        strokeWidth="12" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      
      {/* The 'Tech' Dot - Represents a target or data point */}
      <circle cx="50" cy="20" r="8" fill="#22d3ee">
        <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
};

export default Logo;