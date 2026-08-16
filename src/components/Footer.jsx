import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { IconYouTube, IconLinkedIn, IconInstagram, IconTwitterX, IconGitHub } from './SocialIcons';

export default function Footer({ onOpenContact, onOpenNewsletter }) {
  const services = [
    'Car Cinematics',
    'TV Commercial',
    'Online Class Production',
    'Company Profile',
  ];

  const quickLinks = [
    { name: 'Blog', href: '#blog' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer style={{ background: '#ffffff', borderTop: '1px solid var(--border-light)', paddingTop: '80px', paddingBottom: '40px' }}>
      <div className="container">
        
        {/* Top Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '48px',
            marginBottom: '64px'
          }}
        >
          {/* Brand & Bio Column */}
          <div style={{ gridColumn: 'span 1' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: '700', letterSpacing: '-0.03em', marginBottom: '12px' }}>
              {personalInfo.name}
            </h3>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '24px', maxWidth: '360px' }}>
              A creator exploring tech and AI. Building digital experiences and sharing the journey.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={15} color="var(--text-muted)" />
                <span>{personalInfo.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={15} color="var(--text-muted)" />
                <a href={`mailto:${personalInfo.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {personalInfo.email}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={15} color="var(--text-muted)" />
                <span>{personalInfo.phone}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              <a
                href={personalInfo.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'var(--bg-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  transition: 'background var(--transition-fast)'
                }}
                aria-label="YouTube"
              >
                <IconYouTube size={16} fill="var(--text-primary)" />
              </a>

              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'var(--bg-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  transition: 'background var(--transition-fast)'
                }}
                aria-label="GitHub"
              >
                <IconGitHub size={16} fill="var(--text-primary)" />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'var(--bg-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  transition: 'background var(--transition-fast)'
                }}
                aria-label="LinkedIn"
              >
                <IconLinkedIn size={16} fill="var(--text-primary)" />
              </a>

              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'var(--bg-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  transition: 'background var(--transition-fast)'
                }}
                aria-label="Instagram"
              >
                <IconInstagram size={16} color="var(--text-primary)" />
              </a>

              <a
                href={personalInfo.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'var(--bg-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  transition: 'background var(--transition-fast)'
                }}
                aria-label="Twitter X"
              >
                <IconTwitterX size={15} fill="var(--text-primary)" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '20px', color: 'var(--text-primary)' }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {services.map((srv, idx) => (
                <li key={idx}>
                  <button
                    onClick={onOpenContact}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      font: 'inherit',
                      cursor: 'pointer',
                      fontSize: '0.9375rem',
                      color: 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <span>{srv}</span>
                    <ArrowUpRight size={12} color="var(--text-muted)" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '20px', color: 'var(--text-primary)' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: '0.9375rem',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      transition: 'color var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '16px', color: 'var(--text-primary)' }}>
              Stay Updated
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.55', marginBottom: '16px' }}>
              Dapatkan update mingguan seputar AI prompt, workflow otomasi, dan studi kasus video.
            </p>
            <button
              onClick={onOpenNewsletter}
              className="btn btn-primary"
              style={{ width: '100%', padding: '10px 18px', fontSize: '0.875rem' }}
            >
              Join my Newsletter
            </button>
          </div>

        </div>

        {/* Bottom Legal Notice */}
        <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '28px' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '16px' }}>
            This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px',
              fontSize: '0.8125rem',
              color: 'var(--text-secondary)'
            }}
          >
            <span>© 2026 {personalInfo.name}. All rights reserved.</span>

            <div style={{ display: 'flex', gap: '20px' }}>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
