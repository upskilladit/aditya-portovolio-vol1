import React from 'react';
import { experienceTimeline } from '../data/portfolioData';
import { Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" style={{ padding: '80px 0', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        
        <div style={{ marginBottom: '48px' }}>
          <span className="section-tag font-mono">(04) WORK HISTORY</span>
          <h2 className="section-title">Experience.</h2>
          <p className="section-desc">
            Track record across media production, venture marketing, crypto education, and entrepreneurship.
          </p>
        </div>

        {/* Timeline List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {experienceTimeline.map((item, index) => (
            <div
              key={index}
              className="card-clean"
              style={{
                padding: '32px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px',
                alignItems: 'start'
              }}
            >
              {/* Left Column: Role & Company */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  {item.company.includes('ITB') ? (
                    <GraduationCap size={20} color="var(--text-muted)" />
                  ) : (
                    <Briefcase size={20} color="var(--text-muted)" />
                  )}
                  <span
                    style={{
                      fontSize: '0.8125rem',
                      fontWeight: '600',
                      padding: '3px 10px',
                      background: 'var(--bg-subtle)',
                      borderRadius: 'var(--radius-full)',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {item.period}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '4px',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {item.role}
                </h3>

                <p style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--text-secondary)' }}>
                  {item.company} <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>• {item.type}</span>
                </p>
              </div>

              {/* Right Column: Achievements / Bullets */}
              <div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {item.highlights.map((bullet, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontSize: '0.9375rem',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.55'
                      }}
                    >
                      <CheckCircle2 size={16} color="#10b981" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
