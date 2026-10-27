import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, FileText, CircuitBoard, Copy, Check, ArrowUpRight, Sparkles, ExternalLink } from 'lucide-react';
import FluidWordSwitch from '../shared/FluidWordSwitch';

export default function ModernHero({ theme, onOpenResume }) {
  const [copied, setCopied] = useState(false);
  const [isDecmasHovered, setIsDecmasHovered] = useState(false);

  const handleCopy = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText("pip install decmas");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="hero" className="pt-8 sm:pt-16 pb-20 sm:pb-32 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Subtle Micro-Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-card)] bg-[var(--bg-card)]/60 text-xs font-mono text-[var(--text-muted)] mb-6 shadow-2xs"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          <span className="uppercase tracking-[0.2em] font-semibold text-[10px]">
            {theme === 'dark' ? 'AUTONOMOUS SWARMS // FIRST PRINCIPLES' : 'AI SYSTEMS ARCHITECTURE // FIRST PRINCIPLES'}
          </span>
        </motion.div>

        {/* Sculptural Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-[-0.035em] text-[var(--text-primary)] leading-[1.08] mb-8"
        >
          {theme === 'dark' ? (
            <>
              Architecting autonomous <br className="hidden sm:inline" />
              <FluidWordSwitch /> beyond frontiers.
            </>
          ) : (
            <>
              Building intelligent <br className="hidden sm:inline" />
              <FluidWordSwitch /> from the ground up.
            </>
          )}
        </motion.h1>

        {/* Editorial Philosophical Quote */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-10 pl-5 border-l-2 border-[var(--accent)] py-1"
        >
          <AnimatePresence mode="wait">
            {theme === 'dark' ? (
              <motion.div
                key="quote-dark"
                initial={{ opacity: 0, filter: 'blur(4px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(4px)' }}
                transition={{ duration: 0.3 }}
              >
                <blockquote className="text-xl sm:text-2xl font-serif italic text-[var(--text-primary)] leading-snug tracking-tight">
                  &ldquo;We can only see a short distance ahead, but we can see plenty there that needs to be done.&rdquo;
                </blockquote>
                <div className="text-xs font-mono text-[var(--accent)] font-semibold mt-2 tracking-wide">
                  — Alan Turing (1950)
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="quote-light"
                initial={{ opacity: 0, filter: 'blur(4px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(4px)' }}
                transition={{ duration: 0.3 }}
              >
                <blockquote className="text-xl sm:text-2xl font-serif italic text-[var(--text-primary)] leading-snug tracking-tight">
                  &ldquo;What I cannot create, I do not understand.&rdquo;
                </blockquote>
                <div className="text-xs font-mono text-[var(--accent)] font-semibold mt-2 tracking-wide">
                  — Richard Feynman
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Tactile Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-3 mb-10"
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--text-primary)] text-[var(--bg-page)] font-semibold text-xs tracking-wide hover:opacity-90 transition-all shadow-md cursor-pointer"
          >
            <span>Meet Goldi Soni</span>
            <ArrowRight size={14} />
          </a>

          {/* Resume Launcher - Logo Only (Dark mode; in light mode it lives exclusively in the persistent left dock) */}
          {theme === 'dark' && (
            <button
              onClick={onOpenResume}
              className="w-10 h-10 rounded-full border border-[var(--border-card)] hover:border-[var(--accent)] bg-[var(--bg-card)]/80 flex items-center justify-center text-[var(--accent)] hover:text-white transition-all shadow-2xs cursor-pointer group"
              title="Curriculum Vitae (PDF)"
              aria-label="Curriculum Vitae (PDF)"
            >
              <FileText size={16} className="group-hover:scale-110 transition-transform" />
            </button>
          )}

          <a
            href="#studio"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-[var(--border-card)] hover:border-[var(--text-muted)] bg-[var(--bg-card)]/50 text-[var(--text-primary)] font-medium text-xs transition-all"
          >
            <CircuitBoard size={14} className="text-[var(--accent)]" />
            <span>Architecture Studio</span>
          </a>

          <a
            href="https://github.com/Grimroze"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full border border-[var(--border-card)] hover:border-[var(--text-muted)] bg-[var(--bg-card)]/50 text-[var(--text-muted)] hover:text-[var(--text-primary)] font-mono text-xs transition-all"
          >
            <span>GitHub (33 Repos)</span>
            <ArrowUpRight size={12} className="opacity-60" />
          </a>
        </motion.div>

        {/* Minimalist PyPI Package Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onMouseEnter={() => setIsDecmasHovered(true)}
          onMouseLeave={() => setIsDecmasHovered(false)}
          className="max-w-xl rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--border-card-hover)] p-4 backdrop-blur-md shadow-sm transition-all duration-300"
        >
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[var(--border-divider)] font-mono text-[11px] text-[var(--text-muted)]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              <span className="text-[var(--text-primary)] font-medium ml-1">decmas-engine // v0.1.1</span>
            </div>
            <a
              href="https://pypi.org/project/decmas/"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--accent)] hover:underline flex items-center gap-1"
            >
              <span>pypi.org/decmas</span>
              <ExternalLink size={10} />
            </a>
          </div>

          <div className="flex items-center justify-between gap-4 font-mono text-xs sm:text-sm py-1">
            <div className="flex items-center gap-2 text-[var(--text-primary)]">
              <span className="text-[var(--accent)] font-bold select-none">$</span>
              <code>pip install decmas</code>
            </div>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-[var(--border-card)] hover:border-[var(--text-muted)] bg-[var(--bg-page)] text-[11px] font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all shrink-0 cursor-pointer"
            >
              {copied ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Micro Telemetry Drawer */}
          <div className={`overflow-hidden transition-all duration-300 font-mono text-[11px] ${isDecmasHovered ? 'max-h-16 opacity-100 mt-2.5 pt-2 border-t border-[var(--border-divider)]' : 'max-h-0 opacity-0'}`}>
            <div className="flex items-center justify-between text-[var(--text-muted)]">
              <span>Distributed Agent Swarm Framework</span>
              <span className="text-[var(--accent)]">Stanford DeLM Protocols</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
