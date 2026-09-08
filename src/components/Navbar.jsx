import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ theme, toggleTheme, navigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (path) => {
    setIsOpen(false);
    if (navigate) navigate(path);
  };

  return (
    <header className="sv-nav-header" style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: isScrolled 
        ? (theme === 'dark' ? 'rgba(5, 7, 17, 0.88)' : 'rgba(247, 247, 247, 0.88)') 
        : 'transparent',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--line)' : '1px solid transparent',
      transition: 'all var(--dur-2) var(--ease)'
    }}>
      <div className="sv-wrap" style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '16px clamp(20px, 4vw, 48px)', height: '68px'
      }}>
        <div 
          onClick={() => handleNav('/')} 
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }}
        >
          <span style={{ 
            fontFamily: 'var(--mono)', fontWeight: 600, fontSize: '13px',
            padding: '3px 8px', borderRadius: '5px',
            background: 'var(--ink)', color: 'var(--bg)', letterSpacing: '0.05em'
          }}>
            GS
          </span>
          <span style={{ 
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: '15px', 
            color: 'var(--ink)', letterSpacing: '-0.02em' 
          }}>
            Goldi Soni
          </span>
        </div>

        <nav className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <button 
            onClick={() => handleNav('/work')}
            style={{ background: 'none', border: 'none', color: 'var(--ink-2)', cursor: 'pointer', fontSize: '14px', fontFamily: 'var(--sans)', fontWeight: 500, transition: 'color var(--dur-1)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--ink)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-2)'}
          >
            Work
          </button>
          <button 
            onClick={() => handleNav('/about')}
            style={{ background: 'none', border: 'none', color: 'var(--ink-2)', cursor: 'pointer', fontSize: '14px', fontFamily: 'var(--sans)', fontWeight: 500, transition: 'color var(--dur-1)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--ink)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-2)'}
          >
            About
          </button>
          <button 
            onClick={() => handleNav('/contact')}
            style={{ background: 'none', border: 'none', color: 'var(--ink-2)', cursor: 'pointer', fontSize: '14px', fontFamily: 'var(--sans)', fontWeight: 500, transition: 'color var(--dur-1)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--ink)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-2)'}
          >
            Contact
          </button>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div className="ui-badge desktop-only" style={{ 
            display: 'flex', alignItems: 'center', gap: '7px', 
            background: 'var(--panel-row)', border: '1px solid var(--line)', 
            padding: '5px 12px', borderRadius: 'var(--r-pill)', fontSize: '12px' 
          }}>
            <span style={{ 
              width: 7, height: 7, borderRadius: '50%', background: 'var(--lime)', 
              boxShadow: '0 0 8px var(--lime)' 
            }} />
            <span style={{ color: 'var(--ink-2)', fontFamily: 'var(--mono)', fontSize: '11px' }}>DTU '27</span>
          </div>

          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          <button 
            className="mobile-only" 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle menu"
            style={{ background: 'none', border: 'none', color: 'var(--ink)', cursor: 'pointer', display: 'none', padding: '4px' }}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div style={{
          padding: '20px 24px', background: 'var(--bg)', borderBottom: '1px solid var(--line)',
          display: 'flex', flexDirection: 'column', gap: '16px'
        }}>
          <button onClick={() => handleNav('/work')} style={{ background: 'none', border: 'none', color: 'var(--ink)', textAlign: 'left', fontSize: '16px', fontWeight: 500, cursor: 'pointer' }}>Work</button>
          <button onClick={() => handleNav('/about')} style={{ background: 'none', border: 'none', color: 'var(--ink)', textAlign: 'left', fontSize: '16px', fontWeight: 500, cursor: 'pointer' }}>About</button>
          <button onClick={() => handleNav('/contact')} style={{ background: 'none', border: 'none', color: 'var(--ink)', textAlign: 'left', fontSize: '16px', fontWeight: 500, cursor: 'pointer' }}>Contact</button>
        </div>
      )}

      <style>{`
        @media (max-width: 720px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: block !important; }
        }
      `}</style>
    </header>
  );
}
