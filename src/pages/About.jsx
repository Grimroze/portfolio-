import React from 'react';
import { Award, BookOpen, Monitor } from 'lucide-react';
import TechMatrix from '../components/TechMatrix';

export default function About() {
  return (
    <div className="sv-page sv-page-about">
      <div className="sv-wrap">
        <section className="sv-ab-hero" style={{ padding: '4rem 0' }}>
          <div style={{ marginBottom: '2rem', maxWidth: '300px' }}>
            <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
              <g stroke="var(--ink-3)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                {/* Desk */}
                <line x1="20" y1="180" x2="380" y2="180" />
                <line x1="40" y1="180" x2="40" y2="200" />
                <line x1="360" y1="180" x2="360" y2="200" />
                {/* Monitor */}
                <rect x="120" y="70" width="160" height="90" rx="4" />
                <line x1="180" y1="160" x2="220" y2="160" />
                <line x1="200" y1="160" x2="200" y2="180" />
                {/* Keyboard */}
                <rect x="140" y="170" width="120" height="10" rx="2" stroke="var(--lime)" />
                {/* Coffee Cup */}
                <path d="M300 160 v 20 h 20 v -20 z" />
                <path d="M320 165 a 5 5 0 0 1 0 10" />
                <path d="M305 150 c 0 -10, 10 -10, 10 -20" stroke="var(--lime)" />
                <path d="M315 150 c 0 -10, 10 -10, 10 -20" stroke="var(--lime)" />
                {/* Plant */}
                <path d="M80 180 l -10 -40 c 0 -10, 20 -10, 20 0 z" />
                <path d="M75 160 l -15 -20 c -5 -10, 15 -10, 15 0 z" />
                <path d="M85 160 l 15 -20 c 5 -10, -15 -10, -15 0 z" />
                <path d="M70 180 h 20 v -20 h -20 z" stroke="var(--lime)" />
              </g>
            </svg>
          </div>
          <h1 className="ui-h ui-h-display">About</h1>
        </section>
        
        <section className="sv-ab-bio" style={{ marginBottom: '4rem' }}>
          <p className="ui-text ui-text-lead" style={{ marginBottom: '1.5rem', color: 'var(--ink)' }}>
            I'm Goldi Soni — a systems engineer and AI builder based in Delhi, currently pursuing B.Tech in Computer Science at Delhi Technological University (DTU, 2023-2027).
          </p>
          <p className="ui-text" style={{ marginBottom: '1.5rem' }}>
            I specialize in building autonomous multi-agent systems that eliminate human bottlenecks. From publishing decmas on PyPI (a decentralized multi-agent execution framework inspired by Stanford's DeLM research) to architecting adversarial QA pipelines inspired by Meta FAIR — I focus on systems that think, verify, and scale.
          </p>
          <p className="ui-text">
            When I'm not debugging distributed consensus algorithms, you'll find me conquering LeetCode (Knight, 1900+ rating), leading my team as IGL in competitive Valorant, or writing poetry.
          </p>
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <h2 className="ui-h ui-h-h2" style={{ marginBottom: '1.5rem' }}>Education</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="ui-card" style={{ padding: '1.5rem', border: '1px solid var(--line)', borderRadius: 'var(--radius-card)', background: 'var(--panel-row)' }}>
              <h3 className="ui-h ui-h-h4" style={{ marginBottom: '0.5rem' }}>Delhi Technological University (DTU)</h3>
              <p className="ui-text-small" style={{ color: 'var(--ink-2)' }}>B.Tech in Computer Science • 2023-2027</p>
              <div className="ui-badge" style={{ marginTop: '1rem', display: 'inline-block' }}>CGPA: 7.65</div>
            </div>
            <div className="ui-card" style={{ padding: '1.5rem', border: '1px solid var(--line)', borderRadius: 'var(--radius-card)', background: 'var(--panel-row)' }}>
              <h3 className="ui-h ui-h-h4" style={{ marginBottom: '0.5rem' }}>CBSE Class XII</h3>
              <p className="ui-text-small" style={{ color: 'var(--ink-2)' }}>Completed with 93.4%</p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <h2 className="ui-h ui-h-h2" style={{ marginBottom: '1.5rem' }}>Skills</h2>
          <TechMatrix />
        </section>

        <section style={{ marginBottom: '4rem', paddingBottom: '4rem' }}>
          <h2 className="ui-h ui-h-h2" style={{ marginBottom: '1.5rem' }}>Extracurriculars</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            <div className="ui-card" style={{ padding: '1.5rem', border: '1px solid var(--line)', borderRadius: 'var(--radius-card)', background: 'var(--panel-row)', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <Monitor size={24} color="var(--lime)" />
              <div>
                <h4 className="ui-h ui-h-h5">HACKJMI '25</h4>
                <p className="ui-text-small" style={{ color: 'var(--ink-2)' }}>AI Mental Health System</p>
              </div>
            </div>
            <div className="ui-card" style={{ padding: '1.5rem', border: '1px solid var(--line)', borderRadius: 'var(--radius-card)', background: 'var(--panel-row)', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <Award size={24} color="var(--lime)" />
              <div>
                <h4 className="ui-h ui-h-h5">Valorant IGL</h4>
                <p className="ui-text-small" style={{ color: 'var(--ink-2)' }}>Team Captain & Champion</p>
              </div>
            </div>
            <div className="ui-card" style={{ padding: '1.5rem', border: '1px solid var(--line)', borderRadius: 'var(--radius-card)', background: 'var(--panel-row)', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <BookOpen size={24} color="var(--lime)" />
              <div>
                <h4 className="ui-h ui-h-h5">Art & Poetry Society</h4>
                <p className="ui-text-small" style={{ color: 'var(--ink-2)' }}>Creative writing & arts</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
