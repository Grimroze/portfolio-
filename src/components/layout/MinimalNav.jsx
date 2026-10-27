import React, { useState, useEffect } from 'react';
import { FileText, Sun, Moon, Sparkles } from 'lucide-react';

export default function MinimalNav({ theme, toggleTheme, onOpenResume }) {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'product', 'studio', 'metrics', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Manifesto', href: '#hero' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'product', label: 'Engine', href: '#product' },
    { id: 'studio', label: 'Work', href: '#studio' },
    { id: 'metrics', label: 'Metrics', href: '#metrics' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full h-16 bg-[#040406]/85 backdrop-blur-xl border-b border-white/[0.08] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 h-full flex items-center justify-between gap-4">
        
        {/* Brand Identity */}
        <div className="flex items-center gap-3 shrink-0">
          <a 
            href="#hero" 
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="font-mono text-xs font-bold tracking-[0.18em] text-white group-hover:text-violet-400 transition-colors">
              GOLDI SONI
            </span>
          </a>

          <span className="w-1 h-1 rounded-full bg-neutral-700 hidden sm:block" />

          {/* Clean Status Pill */}
          <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium">DTU '27</span>
          </div>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                  isActive 
                    ? 'text-white font-semibold bg-white/[0.08]' 
                    : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Actions: Resume (Logo-only) + Theme Switcher */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Resume Trigger - Logo Only */}
          <button
            onClick={onOpenResume}
            className="w-8 h-8 rounded-lg border border-white/10 hover:border-violet-400/50 bg-white/[0.03] hover:bg-violet-500/10 flex items-center justify-center text-violet-400 hover:text-violet-300 transition-all cursor-pointer group"
            title="Curriculum Vitae (PDF)"
            aria-label="Curriculum Vitae (PDF)"
          >
            <FileText size={15} className="group-hover:scale-110 transition-transform" />
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-lg border border-white/10 hover:border-white/30 bg-white/[0.03] hover:bg-white/[0.08] flex items-center justify-center text-neutral-300 hover:text-white transition-all cursor-pointer group"
            title="Switch to Editorial Light Mode"
            aria-label="Toggle theme"
          >
            <Sun size={15} className="text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </header>
  );
}
