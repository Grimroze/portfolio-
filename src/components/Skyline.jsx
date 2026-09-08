import React, { useState, useMemo } from 'react';

export default function Skyline() {
  const [isWaving, setIsWaving] = useState(false);
  
  const buildings = useMemo(() => {
    const b = [];
    let currentX = 50;
    for (let i = 0; i < 5; i++) {
      const width = Math.floor(Math.random() * (82 - 56 + 1)) + 56;
      const height = Math.floor(Math.random() * (138 - 78 + 1)) + 78;
      const styles = ['flat', 'step', 'pitch'];
      const roof = styles[Math.floor(Math.random() * styles.length)];
      b.push({ x: currentX, width, height, roof });
      currentX += width + 20;
    }
    return b;
  }, []);

  const stars = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      x: Math.random() * 1100,
      y: Math.random() * 80,
      r: Math.random() * 1.5 + 0.5,
      delay: Math.random() * 3
    }));
  }, []);

  return (
    <div className="sv-skyline" style={{ width: '100%', overflow: 'hidden' }}>
      <svg viewBox="0 0 1100 180" preserveAspectRatio="xMidYMax meet" style={{ width: '100%', height: 'auto', display: 'block' }}>
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--line-2)" />
            <stop offset="100%" stopColor="var(--bg)" />
          </linearGradient>
        </defs>
        <rect width="1100" height="180" fill="url(#skyGrad)" />
        
        {stars.map((s, i) => (
          <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="var(--ink-2)" className="sv-star" style={{ animation: `twinkle 3s infinite ${s.delay}s` }} />
        ))}
        
        {buildings.map((b, i) => (
          <g key={i} transform={`translate(${b.x}, ${132 - b.height})`}>
            <rect width={b.width} height={b.height} className="sv-building-face" fill="var(--panel-row)" stroke="var(--line)" strokeWidth="1" />
            <rect x="10" y="20" width="10" height="15" fill="var(--lime)" />
            <rect x="30" y="20" width="10" height="15" fill="var(--line)" />
            <rect x="10" y="50" width="10" height="15" fill="var(--line)" />
            <rect x="30" y="50" width="10" height="15" fill="var(--lime)" />
            {b.roof === 'pitch' && <polygon points={`0,0 ${b.width/2},-20 ${b.width},0`} fill="var(--panel-row)" stroke="var(--line)" />}
            {b.roof === 'step' && <rect x="10" y="-15" width={b.width-20} height="15" fill="var(--panel-row)" stroke="var(--line)" />}
          </g>
        ))}
        
        <line x1="0" y1="132" x2="1100" y2="132" stroke="var(--line)" strokeWidth="2" />
        
        <g 
          className="sv-walker" 
          transform="translate(500, 102)" 
          onClick={() => setIsWaving(!isWaving)}
          style={{ cursor: 'pointer' }}
        >
          <circle cx="10" cy="5" r="5" fill="var(--ink)" />
          <line x1="10" y1="10" x2="10" y2="25" stroke="var(--ink)" strokeWidth="2" />
          <line x1="10" y1="25" x2="5" y2="40" stroke="var(--ink)" strokeWidth="2" />
          <line x1="10" y1="25" x2="15" y2="40" stroke="var(--ink)" strokeWidth="2" />
          <line x1="10" y1="15" x2="0" y2="20" stroke="var(--ink)" strokeWidth="2" />
          <line 
            x1="10" y1="15" 
            x2="20" y2={isWaving ? "5" : "20"} 
            stroke="var(--ink)" strokeWidth="2" 
            style={{ transition: 'all var(--dur-2) var(--ease)' }}
          />
          <text x="-30" y="-10" className="ui-text-micro" fill="var(--ink-2)" style={{ opacity: isWaving ? 1 : 0, transition: 'opacity 0.3s' }}>
            Click and the walker says hi.
          </text>
        </g>
      </svg>
      <style>{`@keyframes twinkle { 0%, 100% { opacity: 0.2; } 50% { opacity: 1; } }`}</style>
    </div>
  );
}
