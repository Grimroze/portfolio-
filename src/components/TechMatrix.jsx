import React from 'react';
import { skills } from '../data/projects';

export default function TechMatrix() {
  const categories = Array.isArray(skills) 
    ? skills 
    : Object.entries(skills || {}).map(([title, items]) => ({ title, items }));

  return (
    <div className="sv-tech-matrix" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      {categories.map((category, i) => (
        <div key={i} className="sv-tech-category">
          <h4 className="ui-eyebrow" style={{ marginBottom: '16px', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-3)', borderBottom: '1px solid var(--line)', paddingBottom: '10px' }}>
            {category.title}
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {(category.items || []).map((skill, j) => (
              <span key={j} className="ui-tag" style={{ 
                padding: '6px 14px', border: '1px solid var(--line)', borderRadius: 'var(--r-pill)', 
                fontSize: '13.5px', color: 'var(--ink)', background: 'var(--panel-row)',
                transition: 'border-color var(--dur-2) var(--ease)'
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
