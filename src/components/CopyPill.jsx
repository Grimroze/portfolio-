import React, { useState } from 'react';
import { Terminal, Copy, Check } from 'lucide-react';

export default function CopyPill({ command = 'pip install decmas' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="sv-copy-pill ui-card" style={{ 
      display: 'inline-flex', alignItems: 'center', gap: '16px', padding: '12px 24px', 
      borderRadius: 'var(--r-pill)', background: 'var(--panel-row)', border: '1px solid var(--line)'
    }}>
      <Terminal size={18} style={{ color: 'var(--ink-3)' }} />
      <code style={{ fontFamily: 'var(--mono)', fontSize: '15px', color: 'var(--ink)' }}>{command}</code>
      <button 
        onClick={handleCopy} 
        className="sv-btn sv-btn--ghost" 
        style={{ padding: '6px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--line)', border: 'none', cursor: 'pointer', transition: 'background var(--dur-2)' }} 
        title={copied ? 'Copied!' : 'Copy to clipboard'}
      >
        {copied ? <Check size={16} color="#10b981" /> : <Copy size={16} color="var(--ink)" />}
      </button>
    </div>
  );
}
