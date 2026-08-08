import React from 'react';

export const FlowerMandala = ({ className = "w-8 h-8", color = "#E6007E", spin = false }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} transition-transform duration-500`}
    >
      <g fill={color}>
        {/* Outer dots */}
        <circle cx="100" cy="15" r="5" />
        <circle cx="160" cy="40" r="5" />
        <circle cx="185" cy="100" r="5" />
        <circle cx="160" cy="160" r="5" />
        <circle cx="100" cy="185" r="5" />
        <circle cx="40" cy="160" r="5" />
        <circle cx="15" cy="100" r="5" />
        <circle cx="40" cy="40" r="5" />

        {/* 8 Main Petals pointing outwards */}
        {/* Top */}
        <path d="M100 25 C112 45, 120 70, 100 92 C80 70, 88 45, 100 25 Z" />
        {/* Top Right */}
        <path d="M153 47 C142 66, 126 84, 106 94 C116 74, 134 58, 153 47 Z" />
        {/* Right */}
        <path d="M175 100 C155 112, 130 120, 108 100 C130 80, 155 88, 175 100 Z" />
        {/* Bottom Right */}
        <path d="M153 153 C134 142, 116 126, 106 106 C126 116, 142 134, 153 153 Z" />
        {/* Bottom */}
        <path d="M100 175 C88 155, 80 130, 100 108 C120 130, 112 155, 100 175 Z" />
        {/* Bottom Left */}
        <path d="M47 153 C58 134, 74 116, 94 106 C84 126, 66 142, 47 153 Z" />
        {/* Left */}
        <path d="M25 100 C45 88, 70 80, 92 100 C70 120, 45 112, 25 100 Z" />
        {/* Top Left */}
        <path d="M47 47 C66 58, 84 74, 94 94 C74 84, 58 66, 47 47 Z" />

        {/* Inner Star / Flower Core */}
        <circle cx="100" cy="100" r="12" fill="#0A0A0A" />
        <circle cx="100" cy="100" r="6" fill={color} />
      </g>
    </svg>
  );
};
