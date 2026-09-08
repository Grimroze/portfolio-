import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'AI Agents', 'Distributed Systems', 'LLM Evaluation', 'Open Source'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.tags && p.tags.includes(activeFilter));

  return (
    <div className="sv-page sv-page-work">
      <div className="sv-wrap">
        <section className="sv-hero" style={{ padding: '4rem 0' }}>
          <div className="ui-eyebrow" style={{ marginBottom: '1rem' }}>Work</div>
          <h1 className="ui-h ui-h-h1" style={{ marginBottom: '1rem' }}>Selected Projects</h1>
          <p className="ui-text" style={{ maxWidth: '600px' }}>
            A collection of systems engineered to push boundaries in autonomous AI, distributed architectures, and evaluation frameworks.
          </p>
        </section>
      </div>

      <div className="sv-wrap">
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`hv-pill sv-btn ${activeFilter === filter ? 'sv-btn--amber' : 'sv-btn--ghost'}`}
              style={{ cursor: 'pointer', border: '1px solid var(--line-2)' }}
            >
              {filter}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', paddingBottom: '4rem' }}>
          {filteredProjects.map(p => (
            <ProjectCard project={p} key={p.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
