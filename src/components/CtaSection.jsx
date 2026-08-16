import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUpRight, Mail, Sparkles, Copy, Check } from 'lucide-react';

export default function CtaSection({ onOpenNewsletter }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" style={{ padding: '120px 0 80px', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        
        <div style={{ maxWidth: '960px' }}>
          
          {/* Main Headline */}
          <h2
            style={{
              fontSize: 'clamp(2.75rem, 7.5vw, 6.5rem)',
              fontWeight: '700',
              letterSpacing: '-0.04em',
              lineHeight: '0.96',
              color: 'var(--text-primary)',
              marginBottom: '28px'
            }}
          >
            Let's build something that travels
          </h2>

          <p
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.35rem)',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              marginBottom: '40px',
              maxWidth: '720px'
            }}
          >
            For partnerships, campaigns, creator collaborations, or market-entry storytelling aimed at Indonesian audiences, reach out directly.
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
            {/* Direct Email Action */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn btn-primary"
              style={{ padding: '14px 28px', fontSize: '1rem' }}
            >
              <Mail size={18} />
              <span>{personalInfo.email}</span>
              <ArrowUpRight size={16} />
            </a>

            {/* Quick Copy email */}
            <button
              onClick={handleCopyEmail}
              className="btn btn-outline"
              style={{ padding: '14px 20px', fontSize: '0.9375rem' }}
              title="Copy email address"
            >
              {copied ? <Check size={18} color="#10b981" /> : <Copy size={16} />}
              <span>{copied ? 'Copied to clipboard' : 'Copy Email'}</span>
            </button>

            {/* Newsletter Button */}
            <button
              onClick={onOpenNewsletter}
              className="btn btn-pill-subtle"
              style={{ padding: '14px 22px', fontSize: '0.9375rem' }}
            >
              <Sparkles size={16} />
              <span>Join my Newsletter</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
