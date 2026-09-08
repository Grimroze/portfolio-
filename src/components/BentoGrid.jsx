import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { stats } from '../data/projects';

export default function BentoGrid() {
  return (
    <div className="sv-bento-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
      {stats?.map((stat, i) => (
        <div key={i} className="ui-card sv-bento-cell" style={{ 
          padding: '28px', display: 'flex', flexDirection: 'column', gap: '14px', 
          background: 'var(--panel-row)', border: '1px solid var(--line)', borderRadius: 'var(--radius-card)',
          position: 'relative', cursor: stat.link ? 'pointer' : 'default',
          transition: 'transform var(--dur-2) var(--ease), border-color var(--dur-2) var(--ease)'
        }}
        onClick={() => stat.link && window.open(stat.link, '_blank')}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
            <span className="ui-h-display-lg" style={{ fontFamily: 'var(--mono)', fontVariantNumeric: 'tabular-nums', fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--ink)' }}>
              {stat.metric || stat.value}
            </span>
            {stat.unit && <span className="ui-text-lead" style={{ color: 'var(--ink-2)', fontSize: '1.1rem' }}>{stat.unit}</span>}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {stat.badge && (
              <span className="ui-badge" style={{ padding: '3px 10px', background: 'var(--line)', borderRadius: 'var(--r-pill)', fontSize: '11px', fontWeight: 'bold' }}>
                {stat.badge}
              </span>
            )}
            <span className="ui-eyebrow" style={{ fontSize: '11px' }}>{stat.label}</span>
          </div>
          <p className="ui-text-body" style={{ color: 'var(--ink-2)', fontSize: '14px', marginTop: '4px' }}>{stat.detail}</p>
          {stat.link && (
            <div style={{ position: 'absolute', top: '24px', right: '24px', color: 'var(--ink-3)' }}>
              <ArrowUpRight size={20} />
            </div>
          )}
        </div>
      ))}
      <style>{`.sv-bento-cell:hover { transform: translateY(var(--lift)); }`}</style>
    </div>
  );
}
