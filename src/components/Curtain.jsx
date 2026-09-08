import React, { useEffect } from 'react';

export default function Curtain({ state, onCovered }) {
  useEffect(() => {
    if (state === 'cover' && onCovered) {
      const timer = setTimeout(() => {
        onCovered();
      }, 500); 
      return () => clearTimeout(timer);
    }
  }, [state, onCovered]);

  const columns = Array.from({ length: 8 });
  const isDark = typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme') === 'dark';

  if (state === 'idle') return null;

  return (
    <div className="sv-curtain-container" style={{
      position: 'fixed', inset: 0, zIndex: 9999, pointerEvents: 'none', display: 'flex'
    }}>
      {columns.map((_, i) => {
        let ty = '-101%';
        if (state === 'cover' || state === 'covered') ty = '0%';
        if (state === 'reveal') ty = '-101%';
        
        return (
          <div key={i} className="sv-curtain-col" style={{
            flex: 1,
            height: '100%',
            background: isDark ? '#17160e' : '#fbf7e6',
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(0,0,0,0.05) 20px)',
            borderBottom: '4px solid #f3b44a',
            borderRight: '1px solid rgba(0,0,0,0.05)',
            transform: `translateY(${ty})`,
            transition: 'transform .48s cubic-bezier(.72, 0, .22, 1)',
            transitionDelay: `${state === 'reveal' ? (7 - i) * 38 : i * 38}ms`
          }} />
        );
      })}
      <div className="sv-curtain-label" style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        opacity: (state === 'cover' || state === 'covered') ? 1 : 0,
        transition: 'opacity .25s ease .2s',
        fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 'bold', fontFamily: 'var(--sans)', color: isDark ? '#EFEDE2' : '#0F1524',
        letterSpacing: '-0.03em', pointerEvents: 'none'
      }}>
        <span style={{ color: '#f3b44a' }}>G</span>oldi Soni
      </div>
    </div>
  );
}
