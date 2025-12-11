// src/components/Logo.js
import React from 'react';

const Logo = () => {
  return (
    <div className="d-flex align-items-center gap-2">
      {/* 1. The Icon */}
      <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
            d="M50 10L10 45H20V90H40V60H60V90H80V45H90L50 10Z" 
            fill="url(#logo_gradient)" 
            stroke="white" 
            strokeWidth="3"
        />
        <defs>
          {/* Defined the gradient here to reuse it */}
          <linearGradient id="logo_gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6c5ce7" />
            <stop offset="1" stopColor="#a29bfe" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* 2. The Text (Now matches the icon color) */}
      <span 
        className="fs-3 fw-bold" 
        style={{ 
            fontFamily: "'Nunito', sans-serif", 
            letterSpacing: '-0.5px',
            background: 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
        }}
      >
        Urban Retreat
      </span>
    </div>
  );
};

export default Logo;