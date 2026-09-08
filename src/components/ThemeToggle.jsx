import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button 
      className="sv-btn sv-nav-theme" 
      onClick={toggleTheme} 
      aria-label="Toggle theme"
      style={{ 
        display: 'flex', alignItems: 'center', justifyContent: 'center', 
        padding: '8px', borderRadius: '50%', background: 'transparent', border: 'none',
        cursor: 'pointer', transition: 'transform var(--dur-3) var(--ease)' 
      }}
    >
      <div style={{ transform: theme === 'dark' ? 'rotate(0deg)' : 'rotate(360deg)', transition: 'transform 0.5s var(--ease)', display: 'flex' }}>
        {theme === 'dark' ? <Sun size={20} color="var(--ink)" /> : <Moon size={20} color="var(--ink)" />}
      </div>
    </button>
  );
}
