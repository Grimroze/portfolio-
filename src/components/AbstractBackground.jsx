import React from 'react';

export default function AbstractBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 1. LAYER 1: FLUID AMBIENT AURORA MESH (Slow morphing CSS gradient orbs) */}
      <div className="abstract-bg-container">
        <div className="abstract-blob abstract-blob-1" />
        <div className="abstract-blob abstract-blob-2" />
        <div className="abstract-blob abstract-blob-3" />
        <div className="abstract-blob abstract-blob-4" />
      </div>

      {/* 2. LAYER 2: ABSTRACT NEURAL TOPOGRAPHY & MANIFOLD CONTOURS */}
      <svg 
        className="abstract-topography-svg" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 900" 
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="topo-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="topo-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.65" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.25" />
          </linearGradient>
          <pattern id="abstract-grid-pattern" width="48" height="48" patternUnits="userSpaceOnUse">
            <circle cx="24" cy="24" r="0.75" fill="var(--dot-color)" />
            <path d="M 0 24 L 4 24 M 44 24 L 48 24 M 24 0 L 24 4 M 24 44 L 24 48" stroke="var(--dot-color)" strokeWidth="0.5" opacity="0.35" />
          </pattern>
        </defs>

        {/* Subtle Cyber Grid with Crosshairs */}
        <rect width="100%" height="100%" fill="url(#abstract-grid-pattern)" opacity="0.7" />

        {/* Contour Wave Lines (Vector Neural Latent Manifold) */}
        <g fill="none" strokeLinecap="round">
          {/* Wave Layer 1 */}
          <path 
            d="M-100,220 C240,140 480,310 800,210 C1120,110 1320,290 1600,200" 
            stroke="url(#topo-grad-1)" 
            strokeWidth="1"
            strokeDasharray="4 6"
            className="animate-pulse"
            style={{ animationDuration: '14s' }}
          />
          <path 
            d="M-100,280 C260,190 510,360 830,260 C1150,160 1340,340 1600,260" 
            stroke="url(#topo-grad-1)" 
            strokeWidth="1"
            opacity="0.5"
          />
          <path 
            d="M-100,340 C280,240 540,410 860,310 C1180,210 1360,390 1600,320" 
            stroke="url(#topo-grad-2)" 
            strokeWidth="1.2"
          />
          <path 
            d="M-100,400 C300,290 570,460 890,360 C1210,260 1380,440 1600,380" 
            stroke="url(#topo-grad-1)" 
            strokeWidth="0.9"
            opacity="0.35"
          />
          
          {/* Inverse Counter-Wave Layer (Interference Pattern) */}
          <path 
            d="M-100,680 C320,780 600,560 920,680 C1240,800 1390,620 1600,710" 
            stroke="url(#topo-grad-2)" 
            strokeWidth="1.1"
            strokeDasharray="8 8"
            opacity="0.45"
          />
          <path 
            d="M-100,740 C340,830 630,620 950,730 C1270,840 1410,670 1600,760" 
            stroke="url(#topo-grad-1)" 
            strokeWidth="1"
            opacity="0.6"
          />
          <path 
            d="M-100,800 C360,880 660,670 980,780 C1300,890 1430,720 1600,820" 
            stroke="url(#topo-grad-2)" 
            strokeWidth="0.8"
            opacity="0.35"
          />

          {/* Deep Manifold Horizon Curves */}
          <path 
            d="M0,450 Q 360,380 720,490 T 1440,430" 
            stroke="var(--accent)" 
            strokeWidth="1.2"
            opacity="0.22"
          />
          <path 
            d="M0,490 Q 360,420 720,530 T 1440,470" 
            stroke="var(--accent)" 
            strokeWidth="0.8"
            opacity="0.15"
            strokeDasharray="3 5"
          />
        </g>

        {/* Abstract Corner Telemetry / Systems Topology */}
        <g className="font-mono text-[9px] select-none" fill="var(--text-muted)" opacity="0.28">
          <text x="32" y="44">LATENT_CANVAS // FIELD_2D</text>
          <text x="32" y="58">COORD: [40.7128° N, 74.0060° W] • EPOCH: 2026.3</text>
          <text x="1408" y="44" textAnchor="end">SYS_TOPOLOGY // ADVERSARIAL</text>
          <text x="1408" y="58" textAnchor="end">CONTOUR_RESOLUTION: 64-BIT FP</text>
        </g>
      </svg>

      {/* 3. LAYER 3: INTERACTIVE CURSOR SPOTLIGHT */}
      <div className="abstract-spotlight pointer-events-none" />

      {/* 4. LAYER 4: INTERACTIVE MICRO-BLOAT FROM MOUSE PROXIMITY */}
      <div className="fixed inset-0 dot-grid-bloat-mid pointer-events-none z-0" />
      <div className="fixed inset-0 dot-grid-bloat-core pointer-events-none z-0" />

      {/* 5. LAYER 5: DELICATE VIGNETTE MASK (Soft radial focal fade) */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none opacity-40" />
    </div>
  );
}
