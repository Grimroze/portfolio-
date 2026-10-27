import React from 'react';
import { motion } from 'framer-motion';

export default function ModernAbout({ theme = 'dark' }) {
  return (
    <motion.section 
      id="about"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.12 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="mb-28 sm:mb-44 relative overflow-hidden rounded-3xl scroll-mt-24 sm:scroll-mt-28"
    >
      {theme === 'dark' ? (
        /* ============================================================
           DARK MODE: ATMOSPHERIC CELESTIAL BACKGROUND SILHOUETTE
           The sculpture softly emerges from the obsidian void as living backdrop
           ============================================================ */
        <div className="relative p-6 sm:p-10 lg:p-14 rounded-3xl bg-[#070709]/85 border border-white/[0.08] backdrop-blur-xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)]">
          
          {/* 1. ATMOSPHERIC CELESTIAL SCULPTURE IN THE BACKGROUND */}
          <div className="absolute -right-16 sm:-right-8 lg:right-0 top-1/2 -translate-y-1/2 w-[380px] sm:w-[500px] lg:w-[600px] aspect-square pointer-events-none select-none z-0">
            
            {/* Ambient Warm Flame Bloom behind Head */}
            <div className="absolute top-[18%] right-[25%] w-72 h-72 rounded-full bg-gradient-to-tr from-amber-500/20 via-rose-500/20 to-violet-600/15 blur-[90px] pointer-events-none" />

            {/* Living Levitating Ethereal Figure */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full relative"
              style={{
                maskImage: 'radial-gradient(ellipse at 60% 45%, black 30%, rgba(0,0,0,0.5) 55%, transparent 78%)',
                WebkitMaskImage: 'radial-gradient(ellipse at 60% 45%, black 30%, rgba(0,0,0,0.5) 55%, transparent 78%)',
              }}
            >
              <img 
                src="/avatar_dark.png" 
                alt="Goldi Soni — Synthetic Intelligence Operator" 
                className="w-full h-full object-cover object-center opacity-80 mix-blend-screen scale-105"
                style={{
                  filter: 'contrast(1.15) brightness(0.9)',
                }}
              />
            </motion.div>
          </div>

          {/* Left-to-Right Subtle Gradient Falloff to guarantee razor-sharp text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070709] via-[#070709]/90 sm:via-[#070709]/75 to-transparent pointer-events-none z-[1]" />

          {/* 2. FOREGROUND EDITORIAL CONTENT (Crisp, High-Readability) */}
          <div className="relative z-10 max-w-xl lg:max-w-2xl">
            
            {/* Kicker */}
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--accent)] font-semibold mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-ping" />
              <span>00 // OPERATOR IDENTITY</span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-8">
              Engineering Intelligence <br className="hidden sm:inline" />
              From First Principles
            </h2>

            {/* Bio Prose with Glass Backdrop */}
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-8 max-w-2xl">
              <p>
                I am an <strong className="text-white font-semibold">AI Systems & Model Evaluation Engineer</strong> and final year Computer Science undergraduate at <strong className="text-white font-semibold">Delhi Technological University (DTU '27)</strong>.
              </p>
              <p>
                Currently, I work as an <strong className="text-white font-semibold">AI Coding & Model Evaluator (Freelance) at Outlier AI (Scale AI)</strong>, applying Reinforcement Learning from Human Feedback (RLHF) principles to align frontier LLMs, stress-testing complex Python and C++ reasoning paths, and crafting adversarial multi-turn evaluation suites.
              </p>
              <p>
                My work bridges high-level agentic loops with deterministic distributed infrastructure: from the <strong className="text-white font-semibold">AegisGateway</strong> resilient LLM reverse proxy (14ms BGE semantic caching, Redis circuit breaker) to <strong className="text-white font-semibold">SpecuRAG</strong> (ICLR 2025 speculative drafting) and <strong className="text-white font-semibold">decmas</strong> (published on PyPI). I also compete in high-stakes competitive programming (LeetCode Knight, 1900+ rating, top 3%) and captain esports teams as In-Game Leader (IGL).
              </p>
            </div>

            {/* Minimalist 4-Cell Hardware Spec Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/[0.08] font-mono text-xs max-w-2xl">
              <div className="p-3.5 rounded-2xl border border-white/[0.08] bg-black/40 backdrop-blur-md hover:border-violet-400/40 transition-colors">
                <div className="text-neutral-400 text-[10px] uppercase tracking-wider">Campus</div>
                <div className="font-bold text-white mt-1">DTU CSE '27</div>
              </div>
              <div className="p-3.5 rounded-2xl border border-white/[0.08] bg-black/40 backdrop-blur-md hover:border-violet-400/40 transition-colors">
                <div className="text-neutral-400 text-[10px] uppercase tracking-wider">Experience</div>
                <div className="font-bold text-violet-400 mt-1">Outlier AI (Scale)</div>
              </div>
              <div className="p-3.5 rounded-2xl border border-white/[0.08] bg-black/40 backdrop-blur-md hover:border-violet-400/40 transition-colors">
                <div className="text-neutral-400 text-[10px] uppercase tracking-wider">Algorithms</div>
                <div className="font-bold text-white mt-1">1900+ Knight</div>
              </div>
              <div className="p-3.5 rounded-2xl border border-white/[0.08] bg-black/40 backdrop-blur-md hover:border-violet-400/40 transition-colors">
                <div className="text-neutral-400 text-[10px] uppercase tracking-wider">Packages</div>
                <div className="font-bold text-white mt-1">PyPI Author</div>
              </div>
            </div>

          </div>

        </div>
      ) : (
        /* ============================================================
           LIGHT MODE: EDITORIAL CIRCULAR PORTRAIT (CLEAN REAL-PHOTO)
           ============================================================ */
        <div>
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--text-muted)] font-semibold mb-2">
            00 // OPERATOR IDENTITY
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight mb-8">
            Engineering Intelligence From First Principles
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Left Column: Bio Narrative & Stats Grid (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-normal">
                <p>
                  I am an <strong className="text-[var(--text-primary)] font-semibold">AI Systems & Model Evaluation Engineer</strong> and final year Computer Science undergraduate at <strong className="text-[var(--text-primary)] font-semibold">Delhi Technological University (DTU '27)</strong>.
                </p>
                <p>
                  Currently, I work as an <strong className="text-[var(--text-primary)] font-semibold">AI Coding & Model Evaluator (Freelance) at Outlier AI (Scale AI)</strong>, applying Reinforcement Learning from Human Feedback (RLHF) principles to align frontier LLMs, stress-testing complex Python and C++ reasoning paths, and crafting adversarial multi-turn evaluation suites.
                </p>
                <p>
                  My work bridges high-level agentic loops with deterministic distributed infrastructure: from the <strong className="text-[var(--text-primary)] font-semibold">AegisGateway</strong> resilient LLM reverse proxy (14ms BGE semantic caching, Redis circuit breaker) to <strong className="text-[var(--text-primary)] font-semibold">SpecuRAG</strong> (ICLR 2025 speculative drafting) and <strong className="text-[var(--text-primary)] font-semibold">decmas</strong> (published on PyPI). I also compete in high-stakes competitive programming (LeetCode Knight, 1900+ rating, top 3%) and captain esports teams as In-Game Leader (IGL).
                </p>
              </div>

              {/* Minimalist 4-Cell Hardware Spec Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[var(--border-divider)] font-mono text-xs">
                <div className="p-3.5 rounded-xl border border-[var(--border-card)] bg-[var(--bg-card)]/60">
                  <div className="text-[var(--text-muted)] text-[10px] uppercase tracking-wider">Campus</div>
                  <div className="font-bold text-[var(--text-primary)] mt-1">DTU CSE '27</div>
                </div>
                <div className="p-3.5 rounded-xl border border-[var(--border-card)] bg-[var(--bg-card)]/60">
                  <div className="text-[var(--text-muted)] text-[10px] uppercase tracking-wider">Experience</div>
                  <div className="font-bold text-[var(--accent)] mt-1">Outlier AI (Scale)</div>
                </div>
                <div className="p-3.5 rounded-xl border border-[var(--border-card)] bg-[var(--bg-card)]/60">
                  <div className="text-[var(--text-muted)] text-[10px] uppercase tracking-wider">Algorithms</div>
                  <div className="font-bold text-[var(--text-primary)] mt-1">1900+ Knight</div>
                </div>
                <div className="p-3.5 rounded-xl border border-[var(--border-card)] bg-[var(--bg-card)]/60">
                  <div className="text-[var(--text-muted)] text-[10px] uppercase tracking-wider">Packages</div>
                  <div className="font-bold text-[var(--text-primary)] mt-1">PyPI Author</div>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Circular Portrait & Ambient Lighting (5 cols) */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center py-4 select-none">
              <div className="absolute w-[280px] sm:w-[320px] h-[280px] sm:h-[320px] rounded-full bg-gradient-to-tr from-[var(--accent)]/15 via-rose-500/10 to-transparent blur-3xl pointer-events-none" />
              <div className="absolute w-[300px] sm:w-[340px] h-[300px] sm:h-[340px] rounded-full border border-dashed border-[var(--accent)]/20 pointer-events-none" />
              <div className="absolute w-[350px] sm:w-[400px] h-[350px] sm:h-[400px] rounded-full border border-[var(--border-divider)]/40 pointer-events-none" />

              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative group w-[230px] sm:w-[270px] h-[230px] sm:h-[270px] rounded-full p-1.5 border-2 border-[var(--border-card)] hover:border-[var(--accent)] transition-colors duration-300 shadow-xl bg-[var(--bg-card)] flex items-center justify-center"
              >
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img 
                    src="/avatar.jpg" 
                    alt="Goldi Soni - AI Systems Engineer" 
                    className="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                    style={{ filter: "contrast(1.04) saturate(1.08)" }}
                  />
                </div>

                <div className="absolute -bottom-3 px-3.5 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-card)] shadow-lg flex items-center gap-2 text-[11px] font-mono text-[var(--text-secondary)] whitespace-nowrap z-10">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-[var(--text-primary)]">AI Systems</span>
                  <span className="text-[var(--text-muted)]">•</span>
                  <span className="text-[var(--accent)] font-bold">DTU '27</span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      )}
    </motion.section>
  );
}
