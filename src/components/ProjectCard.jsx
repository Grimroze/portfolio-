import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight, Github, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);
  const githubLink = project.links?.github || project.github;
  const liveLink = project.links?.live || project.links?.pypi || project.live;
  const isPypi = project.links?.pypi ? 'PyPI' : 'Live Demo';

  return (
    <div className="ui-card sv-project-card" style={{ 
      padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px', 
      background: 'var(--panel-row)', border: '1px solid var(--line)', 
      borderRadius: 'var(--radius-card)', transition: 'transform var(--dur-2) var(--ease), border-color var(--dur-2)' 
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="ui-badge" style={{ padding: '4px 12px', borderRadius: 'var(--r-pill)', background: 'var(--line)', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {project.tag || 'Project'}
        </div>
        <span className="ui-text-micro" style={{ color: 'var(--ink-3)', fontFamily: 'var(--mono)' }}>{project.year}</span>
      </div>
      
      <div>
        <h3 className="ui-h ui-h-h3" style={{ marginBottom: '6px' }}>{project.title}</h3>
        <p className="ui-text-lead" style={{ color: 'var(--ink-2)' }}>{project.subtitle}</p>
      </div>
      
      <p className="ui-text-body">{project.desc || project.description}</p>
      
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {project.stack?.map((tech, i) => (
          <span key={i} className="ui-tag" style={{ padding: '4px 12px', border: '1px solid var(--line)', borderRadius: 'var(--r-pill)', fontSize: '13px' }}>
            {tech}
          </span>
        ))}
      </div>

      {project.research && (
        <p className="ui-text-small" style={{ color: 'var(--ink-3)', fontStyle: 'italic' }}>
          Research Lineage: {project.research}
        </p>
      )}

      {project.architecture && (
        <div className="sv-project-arch" style={{ borderTop: '1px solid var(--line)', paddingTop: '20px', marginTop: '4px' }}>
          <button 
            className="sv-btn sv-btn--ghost" 
            onClick={() => setIsOpen(!isOpen)}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%', justifyContent: 'space-between', padding: '8px 0', background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--ink)' }}
          >
            <span style={{ fontWeight: 600, fontSize: '14px' }}>View Architecture &amp; State Flow</span>
            <ChevronDown size={18} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform var(--dur-2) var(--ease)' }} />
          </button>
          
          <div style={{ 
            maxHeight: isOpen ? '1000px' : '0', 
            overflow: 'hidden', 
            transition: 'max-height var(--dur-3) var(--ease), opacity var(--dur-2)',
            opacity: isOpen ? 1 : 0
          }}>
            <div style={{ padding: '16px 0 8px 0' }}>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--ink-2)' }}>
                {project.architecture.map((point, i) => (
                  <li key={i} className="ui-text-body" style={{ listStyleType: 'square' }}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <div style={{ display: 'flex', gap: '12px', marginTop: 'auto', paddingTop: '16px' }}>
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noreferrer" className="hv-pill sv-btn sv-btn--line" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: 'var(--r-pill)', border: '1px solid var(--line)', textDecoration: 'none', color: 'var(--ink)', fontSize: '13px' }}>
            <Github size={15} /> <span style={{ fontWeight: 500 }}>GitHub</span> <ArrowUpRight size={15} />
          </a>
        )}
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noreferrer" className="hv-pill sv-btn sv-btn--amber" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: 'var(--r-pill)', background: 'var(--lime)', color: 'var(--lime-deep)', textDecoration: 'none', fontWeight: 600, fontSize: '13px' }}>
            <ExternalLink size={15} /> <span>{isPypi}</span> <ArrowUpRight size={15} />
          </a>
        )}
      </div>
      <style>{`.sv-project-card:hover { transform: translateY(var(--lift)); border-color: var(--line-2); }`}</style>
    </div>
  );
}
