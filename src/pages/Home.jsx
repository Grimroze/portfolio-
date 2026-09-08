import React from 'react';
import { ArrowUpRight, Github, Linkedin, Award } from 'lucide-react';
import Skyline from '../components/Skyline';
import CopyPill from '../components/CopyPill';
import BentoGrid from '../components/BentoGrid';
import Console from '../components/Console';
import ProjectCard from '../components/ProjectCard';
import TechMatrix from '../components/TechMatrix';
import { projects, profile, socials } from '../data/projects';

export default function Home({ navigate }) {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="sv-page sv-page-home">
      <div className="sv-wrap" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 48px)' }}>
        <Skyline />
      </div>

      <div className="sv-wrap" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 48px)' }}>
        <section className="sv-hero" style={{ padding: 'clamp(40px, 6vh, 80px) 0 40px 0' }}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <span className="ui-badge" style={{ padding: '5px 12px', borderRadius: 'var(--r-pill)', background: 'var(--line)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-2)' }}>
              Agentic AI Systems
            </span>
            <span className="ui-badge" style={{ padding: '5px 12px', borderRadius: 'var(--r-pill)', background: 'var(--line)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-2)' }}>
              Distributed Architectures
            </span>
            <span className="ui-badge" style={{ padding: '5px 12px', borderRadius: 'var(--r-pill)', background: 'var(--lime)', color: 'var(--lime-deep)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              DTU '27
            </span>
          </div>
          
          <h1 className="ui-h ui-h-display-lg" style={{ 
            fontSize: 'clamp(2.5rem, 5.5vw, 4.75rem)', 
            lineHeight: 0.98, 
            letterSpacing: '-0.04em',
            marginBottom: '1.5rem', 
            maxWidth: '960px',
            color: 'var(--ink)'
          }}>
            Architecting Autonomous Multi-Agent Workflows &amp; Scalable Systems.
          </h1>
          
          <p className="ui-text ui-text-lead" style={{ 
            fontSize: 'clamp(1rem, 1.4vw, 1.25rem)', 
            lineHeight: 1.6, 
            maxWidth: '680px', 
            marginBottom: '2rem', 
            color: 'var(--ink-2)' 
          }}>
            {profile.subheadline || profile.headline}
          </p>

          <div style={{ marginBottom: '2rem' }}>
            <CopyPill command="pip install decmas" />
          </div>

          <div className="sv-hero-ctas" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href={socials.github} target="_blank" rel="noopener noreferrer" className="sv-btn sv-btn--amber hv-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: 'var(--r-pill)', background: 'var(--lime)', color: 'var(--lime-deep)', fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}>
              <Github size={17} />
              <span>Explore GitHub</span>
              <ArrowUpRight size={17} />
            </a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="sv-btn sv-btn--ghost hv-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: 'var(--r-pill)', border: '1px solid var(--line)', color: 'var(--ink)', fontSize: '14px', textDecoration: 'none' }}>
              <Linkedin size={17} />
              <span>LinkedIn</span>
            </a>
            <a href={socials.leetcode} target="_blank" rel="noopener noreferrer" className="sv-btn sv-btn--ghost hv-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: 'var(--r-pill)', border: '1px solid var(--line)', color: 'var(--ink)', fontSize: '14px', textDecoration: 'none' }}>
              <Award size={17} />
              <span>LeetCode (Knight 1900+)</span>
            </a>
          </div>
        </section>
      </div>

      <div className="sv-wrap" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 48px)' }}>
        <section className="sv-section" style={{ padding: 'clamp(40px, 6vh, 60px) 0' }}>
          <div className="ui-eyebrow" style={{ marginBottom: '1.25rem', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--ink-3)' }}>
            At a glance
          </div>
          <BentoGrid />
        </section>
      </div>

      <div className="sv-wrap" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 48px)' }}>
        <section className="sv-section" style={{ padding: 'clamp(40px, 6vh, 60px) 0' }}>
          <div className="ui-eyebrow" style={{ marginBottom: '1.25rem', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--ink-3)' }}>
            Execution Trace
          </div>
          <Console />
        </section>
      </div>

      <div className="sv-wrap" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 48px)' }}>
        <section className="sv-section" style={{ padding: 'clamp(40px, 6vh, 60px) 0' }}>
          <div className="ui-eyebrow" style={{ marginBottom: '0.75rem', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--ink-3)' }}>
            Selected work
          </div>
          <h2 className="ui-h ui-h-h2" style={{ marginBottom: '2rem', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--ink)' }}>
            Featured Projects
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '2rem' }}>
            {featuredProjects.map(p => (
              <ProjectCard project={p} key={p.id} />
            ))}
          </div>
          <button 
            onClick={() => navigate && navigate('/work')} 
            className="sv-btn sv-btn--line" 
            style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '8px', 
              cursor: 'pointer', background: 'transparent', border: 'none', 
              color: 'var(--ink)', fontSize: '15px', fontWeight: 600, padding: 0,
              textDecoration: 'underline', textUnderlineOffset: '6px'
            }}
          >
            Explore all work →
          </button>
        </section>
      </div>

      <div className="sv-wrap" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 48px)' }}>
        <section className="sv-section" style={{ padding: 'clamp(40px, 6vh, 60px) 0' }}>
          <div className="ui-eyebrow" style={{ marginBottom: '1.25rem', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--ink-3)' }}>
            Core Capabilities
          </div>
          <TechMatrix />
        </section>
      </div>
    </div>
  );
}
