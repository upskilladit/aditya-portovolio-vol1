import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowRight, Award, Compass, Video, Cpu } from 'lucide-react';

export default function AboutSection({ onOpenContact }) {
  const pillars = [
    { icon: <Cpu size={20} />, title: 'AI Workflows', desc: 'Real-world prompt engineering, autonomous agents, and tool reviews.' },
    { icon: <Video size={20} />, title: 'Visual Storytelling', desc: 'Cinematography and high-retention video formats tailored for tech.' },
    { icon: <Compass size={20} />, title: 'Market Entry GTM', desc: 'Connecting global tech products with Indonesian digital consumers.' },
  ];

  return (
    <section id="about" style={{ padding: '90px 0', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        
        <div style={{ maxWidth: '980px', marginBottom: '48px' }}>
          <span className="section-tag font-mono">(03) ABOUT ME</span>
          <h2 className="section-title">About me.</h2>

          <p
            style={{
              fontSize: 'clamp(1.35rem, 2.8vw, 2.1rem)',
              fontWeight: '500',
              lineHeight: '1.4',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              marginBottom: '36px'
            }}
          >
            {personalInfo.aboutDetailed}
          </p>

          <button onClick={onOpenContact} className="btn btn-outline" style={{ gap: '10px' }}>
            <span>Full profile & Collab</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* 3 Core Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginTop: '40px'
          }}
        >
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="card-clean"
              style={{ padding: '28px' }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  marginBottom: '20px'
                }}
              >
                {item.icon}
              </div>

              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}>
                {item.title}
              </h3>

              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
