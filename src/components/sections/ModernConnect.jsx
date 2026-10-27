import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, ArrowUpRight, FileText, Download } from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const LeetCodeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.874 5.874 0 0 0 .749 1.621 5.967 5.967 0 0 0 1.624 1.772l4.908 3.511a5.617 5.617 0 0 0 3.328 1.077 5.69 5.69 0 0 0 3.375-1.135l4.316-3.411a1.38 1.38 0 0 0 .285-1.92 1.38 1.38 0 0 0-1.92-.285l-4.316 3.411a2.93 2.93 0 0 1-1.737.585 2.89 2.89 0 0 1-1.713-.555L5.856 16.93a3.197 3.197 0 0 1-.871-.954 3.12 3.12 0 0 1-.4-.866 2.99 2.99 0 0 1-.033-1.272 2.94 2.94 0 0 1 .647-1.132l3.854-4.126 5.406-5.788a1.374 1.374 0 0 0-.976-2.793z"/>
    <path d="M9.833 10.924a1.38 1.38 0 0 0 0 2.76h12.788a1.38 1.38 0 0 0 0-2.76H9.833z"/>
  </svg>
);

const PyPIIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0L1.6 6v12L12 24l10.4-6V6L12 0zm-1.04 2.22l8.32 4.8-3.12 1.8-8.32-4.8 3.12-1.8zm-1.04 1.8l-3.12 1.8v6l3.12-1.8V4.02zm10.4 3.6l-3.12 1.8v6l3.12-1.8V7.62zm-9.36 1.8l8.32 4.8-3.12 1.8-8.32-4.8 3.12-1.8zm-4.16 3.6l3.12 1.8v6l-3.12-1.8V13.02zm10.4 0l3.12 1.8v6l-3.12-1.8V13.02zm-5.2 3.01l8.32 4.8-3.12 1.8-8.32-4.8 3.12-1.8z" />
  </svg>
);

export default function ModernConnect({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleEmailClick = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText("grimissher@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const channels = [
    {
      name: 'GitHub',
      handle: '@Grimroze',
      meta: '33 Repositories • Open Source',
      href: 'https://github.com/Grimroze',
      icon: GithubIcon
    },
    {
      name: 'LinkedIn',
      handle: 'Goldi Soni',
      meta: '500+ Connections • DTU CSE',
      href: 'https://www.linkedin.com/in/goldi-soni/',
      icon: LinkedinIcon
    },
    {
      name: 'LeetCode Knight',
      handle: 'Rating 1900+ (Top 3%)',
      meta: '1200+ Questions Solved',
      href: 'https://leetcode.com/u/grimrose/',
      icon: LeetCodeIcon,
      badge: 'Knight'
    },
    {
      name: 'PyPI Package',
      handle: 'pip install decmas',
      meta: 'Decentralized Swarm Framework',
      href: 'https://pypi.org/project/decmas/',
      icon: PyPIIcon,
      badge: 'v0.1.1'
    }
  ];

  return (
    <motion.section 
      id="contact"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="pt-6 pb-2 scroll-mt-24 sm:scroll-mt-28"
    >
      {/* Section Header */}
      <div className="mb-10">
        <div className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--accent)] font-semibold mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-ping" />
          <span>06 // CONNECT & ENGINEERING NETWORK</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.15]">
          Let's construct ambitious systems.
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-muted)] font-normal mt-2.5 max-w-2xl leading-relaxed">
          Open to high-impact software engineering roles, autonomous agent research, and distributed systems. Feel free to reach out directly or explore my engineering footprint.
        </p>
      </div>

      {/* World-Class Connect Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-10">
        
        {/* Primary Left Card: Direct Transceiver & Resume Terminal (7 cols on lg) */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] shadow-sm hover:border-[var(--border-card-hover)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
          <div>
            <div className="flex items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-[var(--text-primary)]">Direct Transmission</h3>
                  <p className="text-[11px] font-mono text-[var(--text-muted)]">Primary Communication Line</p>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Active Inquiries</span>
              </span>
            </div>

            {/* Interactive Email Copy Box */}
            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[var(--bg-card-inner)] border border-[var(--border-card)] flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[var(--bg-card)] border border-[var(--border-card)] flex items-center justify-center text-[var(--accent)] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] block tracking-wider">Email Address</span>
                  <span className="font-mono text-xs sm:text-sm font-semibold text-[var(--text-primary)] select-all">
                    grimissher@gmail.com
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleEmailClick}
                  className="px-3.5 py-2 rounded-xl bg-[var(--bg-page)] hover:bg-[var(--border-divider)] border border-[var(--border-card)] text-xs font-mono font-medium text-[var(--text-primary)] flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <a
                  href="mailto:grimissher@gmail.com"
                  className="px-4 py-2 rounded-xl bg-[var(--accent)] hover:brightness-110 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
                >
                  <span>Send Mail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6">
              Interested in discussing autonomous agent architectures, distributed infrastructure, or scheduling a technical conversation? Reach out directly via email or inspect my credentials below.
            </p>
          </div>

          {/* Resume & Verification Dock inside Left Card */}
          <div className="pt-5 border-t border-[var(--border-divider)] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--text-primary)] text-[var(--bg-page)] font-semibold text-xs shadow-sm hover:opacity-90 transition-all cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Inspect Resume (GOLDI_23CS158_AI)</span>
              </button>

              <a
                href="/GOLDI_23CS158_AI.pdf"
                download="GOLDI_23CS158_AI.pdf"
                className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-[var(--border-card)] hover:border-[var(--text-muted)] bg-[var(--bg-page)] text-[var(--text-primary)] font-medium text-xs transition-all shadow-xs"
              >
                <Download className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                <span>PDF</span>
              </a>
            </div>

            <div className="text-[11px] font-mono text-[var(--text-muted)] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              <span>DTU CSE '27 • New Delhi</span>
            </div>
          </div>
        </div>

        {/* Right Bento Grid: 4 Interactive Verified Engineering Channels (5 cols on lg) */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {channels.map((c, idx) => {
            const Icon = c.icon;
            return (
              <a
                key={idx}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--accent)] transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-md cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[var(--bg-card-inner)] border border-[var(--border-card)] flex items-center justify-center text-[var(--text-primary)]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div>
                  <div className="font-bold text-sm text-[var(--text-primary)] flex items-center gap-1.5">
                    <span>{c.name}</span>
                    {c.badge && (
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--accent)]/15 text-[var(--accent)]">
                        {c.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-[var(--accent)] font-mono font-medium mt-0.5">
                    {c.handle}
                  </div>
                  <div className="text-[11px] text-[var(--text-muted)] mt-1.5">
                    {c.meta}
                  </div>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </motion.section>
  );
}
