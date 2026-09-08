import React, { useState } from 'react';
import { Mail, Linkedin, Github, Award, ArrowUpRight, Check } from 'lucide-react';
import { socials } from '../data/projects';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "grimissher@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="sv-page sv-page-contact" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div className="sv-wrap" style={{ width: '100%', maxWidth: '600px', textAlign: 'center', paddingTop: '4rem' }}>
        
        <div style={{ margin: '0 auto 2rem auto', maxWidth: '300px' }}>
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <g stroke="var(--ink-3)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              {/* Ground */}
              <line x1="20" y1="180" x2="380" y2="180" />
              {/* Path */}
              <path d="M200 180 c -20 20, -50 20, -80 0" stroke="var(--lime)" />
              {/* Fence */}
              <path d="M40 180 v -30 m 20 30 v -30 m 20 30 v -30" />
              <line x1="30" y1="165" x2="90" y2="165" />
              {/* House outline in bg */}
              <path d="M260 180 v -60 l 40 -30 l 40 30 v 60 z" strokeOpacity="0.5" />
              <path d="M290 180 v -20 h 20 v 20" strokeOpacity="0.5" />
              {/* Tree */}
              <path d="M360 180 v -40" />
              <circle cx="360" cy="120" r="20" stroke="var(--lime)" />
              <circle cx="375" cy="135" r="15" stroke="var(--lime)" />
              <circle cx="345" cy="135" r="15" stroke="var(--lime)" />
              {/* Mailbox */}
              <line x1="150" y1="180" x2="150" y2="130" strokeWidth="4" />
              <rect x="130" y="110" width="40" height="20" rx="10" />
              <path d="M170 120 h 10" />
              <path d="M165 110 v -10" stroke="var(--lime)" />
            </g>
          </svg>
        </div>

        <section className="sv-cn-hero ui-card" style={{ padding: '3rem 2rem', border: '1px solid var(--line)', borderRadius: 'var(--radius-card)', background: 'var(--panel-row)', backdropFilter: 'blur(10px)', marginBottom: '2rem' }}>
          <h1 className="ui-h ui-h-display" style={{ marginBottom: '1rem' }}>Let's Talk</h1>
          <p className="ui-text ui-text-lead" style={{ marginBottom: '2.5rem', color: 'var(--ink-2)' }}>
            Have an ambitious project or want to talk distributed AI agents?
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            <button onClick={handleCopyEmail} className="sv-btn sv-btn--amber hv-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', width: '100%', maxWidth: '300px', justifyContent: 'center', cursor: 'pointer', border: 'none', fontSize: '1rem', padding: '0.75rem 1.5rem' }}>
              {copied ? <Check size={20} /> : <Mail size={20} />}
              {copied ? 'Copied!' : email}
            </button>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1rem' }}>
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="sv-btn sv-btn--ghost hv-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                <Linkedin size={18} />
                LinkedIn
                <ArrowUpRight size={16} />
              </a>
              <a href={socials.github} target="_blank" rel="noopener noreferrer" className="sv-btn sv-btn--ghost hv-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                <Github size={18} />
                GitHub
                <ArrowUpRight size={16} />
              </a>
              <a href={socials.leetcode} target="_blank" rel="noopener noreferrer" className="sv-btn sv-btn--ghost hv-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                <Award size={18} />
                LeetCode
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <p className="ui-text-micro" style={{ color: 'var(--ink-3)' }}>
          Based in Delhi, India · DTU '27 · Available for internships & collaborations
        </p>
      </div>
    </div>
  );
}
