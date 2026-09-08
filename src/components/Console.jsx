import React, { useState, useEffect, useRef } from 'react';
import { consoleLines } from '../data/projects';
import { Check } from 'lucide-react';

export default function Console() {
  const [lines, setLines] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.5 });
    
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let currentIdx = 0;
    setLines([]);
    setIsDone(false);

    const typeLine = () => {
      if (!consoleLines || currentIdx >= consoleLines.length) {
        setIsDone(true);
        return;
      }
      
      setLines(prev => [...prev, consoleLines[currentIdx]]);
      currentIdx++;
      const delay = Math.floor(Math.random() * 400) + 400;
      setTimeout(typeLine, delay);
    };

    const timer = setTimeout(typeLine, 500);
    return () => clearTimeout(timer);
  }, [isVisible]);

  return (
    <div ref={containerRef} className="sv-console ui-card" style={{ background: 'var(--panel-row)', border: '1px solid var(--line)', borderRadius: 'var(--radius-card)', overflow: 'hidden' }}>
      <div className="sv-console-topbar" style={{ display: 'flex', gap: '8px', padding: '12px 16px', borderBottom: '1px solid var(--line)', background: 'var(--bg)' }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ef4444' }} />
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#f59e0b' }} />
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#10b981' }} />
        <span className="ui-text-micro" style={{ marginLeft: 'auto', opacity: 0.5, fontFamily: 'var(--mono)' }}>terminal</span>
      </div>
      <div className="sv-console-content" style={{ padding: '24px', fontFamily: 'var(--mono)', fontSize: '14px', lineHeight: 1.6, minHeight: '200px' }}>
        {lines.map((l, i) => (
          <div key={i} className={`sv-console-line type-${l.type}`} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '8px' }}>
            <div style={{ marginTop: '4px' }}>
              {l.type === 'cmd' && <span style={{ color: 'var(--ink)' }}>&gt;</span>}
              {l.type === 'step' && <Check size={14} className="sv-console-check" style={{ color: 'var(--ink-3)' }} />}
              {l.type === 'ok' && <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981' }} />}
              {l.type === 'warn' && <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#f59e0b' }} />}
              {l.type === 'done' && <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981' }} />}
            </div>
            
            <span style={{ 
              color: l.type === 'cmd' ? 'var(--ink)' : 
                     l.type === 'step' ? 'var(--ink-3)' : 
                     l.type === 'done' ? 'var(--ink)' : 'var(--ink-2)',
              fontWeight: l.type === 'done' ? 'bold' : 'normal',
              wordBreak: 'break-word'
            }}>
              {l.text}
            </span>
          </div>
        ))}
        {isDone && <div className="sv-console-cursor" style={{ animation: 'blink 1s step-end infinite', color: 'var(--lime)', marginTop: '8px' }}>█</div>}
      </div>
      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </div>
  );
}
