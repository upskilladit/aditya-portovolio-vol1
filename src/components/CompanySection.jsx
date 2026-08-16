import React from 'react';
import { ArrowUpRight, Film, Sparkles, Building2, Globe } from 'lucide-react';

export default function CompanySection({ onOpenContact }) {
  return (
    <section id="company" style={{ padding: '90px 0', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        
        {/* Massive header */}
        <div style={{ marginBottom: '32px' }}>
          <span className="section-tag font-mono">Creative Media Production</span>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 6.5rem)',
              fontWeight: '700',
              letterSpacing: '-0.04em',
              lineHeight: '0.95',
              color: 'var(--text-primary)',
              marginBottom: '12px'
            }}
          >
            My Company
          </h2>
          <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            (click to explore)
          </span>
        </div>

        {/* Feature Hero Card */}
        <div
          className="card-clean"
          style={{
            background: 'linear-gradient(135deg, #141414 0%, #1f1f1f 100%)',
            color: '#ffffff',
            padding: ' clamp(32px, 5vw, 64px)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle background glow */}
          <div
            style={{
              position: 'absolute',
              top: '-20%',
              right: '-10%',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 70%)',
              pointerEvents: 'none'
            }}
          />

          <div style={{ maxWidth: '720px', position: 'relative', zIndex: 1 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(8px)',
                fontSize: '0.8125rem',
                fontWeight: '600',
                marginBottom: '24px'
              }}
            >
              <Film size={14} color="#f59e0b" />
              <span>Production & Storytelling House</span>
            </div>

            <h3
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '700',
                letterSpacing: '-0.03em',
                marginBottom: '16px',
                lineHeight: '1.1'
              }}
            >
              AdPlay Media
            </h3>

            <p
              style={{
                fontSize: '1.125rem',
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '1.65',
                marginBottom: '36px'
              }}
            >
              AdPlay Media is the company layer: campaign production, branded storytelling, TV commercials, and broader media production for global and regional brands entering or scaling in Indonesia.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <button
                onClick={onOpenContact}
                className="btn"
                style={{
                  background: '#ffffff',
                  color: '#111111',
                  padding: '12px 26px',
                  fontWeight: '600'
                }}
              >
                <span>Visit AdPlay Media</span>
                <ArrowUpRight size={18} />
              </button>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.875rem'
                }}
              >
                <Building2 size={16} />
                <span>150+ Client Projects Completed</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
