import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUpRight, Copy, Check, Mail, Phone, Sparkles } from 'lucide-react';

export default function Hero({ onOpenContact }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section style={{ paddingTop: '140px', paddingBottom: '80px', position: 'relative' }}>
      <div className="container">
        
        {/* Playful greeting */}
        <div style={{ marginBottom: '-8px' }}>
          <span
            className="font-handwriting"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--text-secondary)',
              display: 'inline-block',
              transform: 'rotate(-2deg)'
            }}
          >
            hi, i'm
          </span>
        </div>

        {/* Massive Name */}
        <h1
          style={{
            fontSize: 'clamp(3.5rem, 11vw, 10.5rem)',
            fontWeight: '700',
            letterSpacing: '-0.04em',
            lineHeight: '0.92',
            color: 'var(--text-primary)',
            marginBottom: '40px',
            textTransform: 'none'
          }}
        >
          {personalInfo.name}
        </h1>

        {/* Two Column Layout for Tagline & Story */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'start',
            marginBottom: '48px'
          }}
        >
          {/* Main Statement */}
          <div>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                fontWeight: '500',
                letterSpacing: '-0.025em',
                lineHeight: '1.2',
                color: 'var(--text-primary)',
                marginBottom: '16px'
              }}
            >
              {personalInfo.tagline}
            </h2>
          </div>

          {/* Detailed Paragraph & Collab CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p
              style={{
                fontSize: '1.125rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.65'
              }}
            >
              {personalInfo.bio}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px' }}>
              <button onClick={onOpenContact} className="btn btn-primary" style={{ padding: '12px 26px', fontSize: '1rem' }}>
                <span>Inquiry/Collab</span>
                <ArrowUpRight size={18} />
              </button>

              {/* Status Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: 'var(--text-primary)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <span className="pulse-active"></span>
                <span>{personalInfo.status}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact & Role Bar */}
        <div
          style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-md)',
            padding: '18px 24px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          {/* Persona */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '0.9375rem', fontWeight: '600', color: 'var(--text-primary)' }}>
              {personalInfo.nickname || 'Garry'}
            </span>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              {personalInfo.title}
            </span>
          </div>

          {/* Quick Copy Contact Chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' }}>
            {/* Phone */}
            <button
              onClick={() => handleCopy(personalInfo.phone, 'phone')}
              className="btn btn-pill-subtle"
              style={{ gap: '6px', border: 'none' }}
              title="Click to copy phone number"
            >
              <Phone size={14} />
              <span>{personalInfo.phone}</span>
              {copiedPhone ? <Check size={14} color="#10b981" /> : <Copy size={12} color="var(--text-muted)" />}
            </button>

            {/* Email */}
            <button
              onClick={() => handleCopy(personalInfo.email, 'email')}
              className="btn btn-pill-subtle"
              style={{ gap: '6px', border: 'none' }}
              title="Click to copy email address"
            >
              <Mail size={14} />
              <span>{personalInfo.email}</span>
              {copiedEmail ? <Check size={14} color="#10b981" /> : <Copy size={12} color="var(--text-muted)" />}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
