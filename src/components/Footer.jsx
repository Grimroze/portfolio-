import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, Award } from 'lucide-react';
import { socials } from '../data/projects';

export default function Footer({ navigate }) {
  const socialList = [
    { name: 'GitHub', url: socials?.github || 'https://github.com/Grimroze', icon: Github },
    { name: 'LinkedIn', url: socials?.linkedin || 'https://www.linkedin.com/in/goldi-soni/', icon: Linkedin },
    { name: 'LeetCode', url: socials?.leetcode || 'https://leetcode.com/u/grimrose/', icon: Award },
    { name: 'Email', url: `mailto:${socials?.email || 'grimissher@gmail.com'}`, icon: Mail },
  ];

  return (
    <footer className="sv-footer" style={{ padding: '80px 0 40px', borderTop: '1px solid var(--line)', background: 'var(--bg)', marginTop: '80px' }}>
      <div className="sv-footer-inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', flexDirection: 'column', gap: '48px' }}>
        
        <div onClick={() => navigate && navigate('/contact')} style={{ cursor: 'pointer', display: 'inline-block', width: 'fit-content' }}>
          <h2 className="ui-h-h2" style={{ textDecoration: 'underline', textUnderlineOffset: '12px', fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 'bold' }}>
            Have an ambitious project?
          </h2>
        </div>

        <div style={{ height: '2px', background: 'repeating-linear-gradient(90deg, var(--line) 0, var(--line) 4px, transparent 4px, transparent 8px)' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
          <p className="ui-text-small" style={{ color: 'var(--ink-2)', fontFamily: 'var(--mono)' }}>© 2026 Goldi Soni</p>
          
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {socialList.map((social, i) => {
              const Icon = social.icon;
              return (
                <a key={i} href={social.url} target="_blank" rel="noreferrer" className="ui-text-body hv-pill" style={{ 
                  display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--ink)', textDecoration: 'none', fontWeight: 500,
                  transition: 'transform var(--dur-2) var(--ease)' 
                }}>
                  <Icon size={18} />
                  <span>{social.name}</span>
                  <ArrowUpRight size={16} style={{ opacity: 0.5 }} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
