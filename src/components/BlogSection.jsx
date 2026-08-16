import React from 'react';
import { blogArticles } from '../data/portfolioData';
import { ArrowRight, Clock, BookOpen, Rss, Terminal, Flame, ShieldCheck } from 'lucide-react';

export default function BlogSection({ onSelectArticle }) {
  const getCoverIcon = (theme) => {
    switch (theme) {
      case 'dark-terminal':
        return <Terminal size={28} color="#38bdf8" />;
      case 'fire-crawl':
        return <Flame size={28} color="#f97316" />;
      case 'emerald-matrix':
        return <ShieldCheck size={28} color="#10b981" />;
      default:
        return <BookOpen size={28} />;
    }
  };

  const getCoverGradient = (theme) => {
    switch (theme) {
      case 'dark-terminal':
        return 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)';
      case 'fire-crawl':
        return 'linear-gradient(135deg, #18181b 0%, #27272a 100%)';
      case 'emerald-matrix':
        return 'linear-gradient(135deg, #064e3b 0%, #022c22 100%)';
      default:
        return 'linear-gradient(135deg, #18181b 0%, #09090b 100%)';
    }
  };

  return (
    <section id="blog" style={{ padding: '80px 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginBottom: '48px', alignItems: 'flex-end' }}>
          <div>
            <span className="section-tag font-mono">(01) Blog AI & Tech</span>
            <h2 className="section-title">Insight for Indonesian audiences.</h2>
            <p className="section-desc">
              The blog is published primarily in Bahasa Indonesia and turns practical experiments, benchmarks, and tool reviews into searchable articles for creators, founders, and curious tech builders.
            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-start' }}>
            <a
              href="#blog"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.9375rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                textDecoration: 'none'
              }}
            >
              <span>Lihat semua artikel</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Articles Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '28px',
            marginBottom: '40px'
          }}
        >
          {blogArticles.map((article) => (
            <article
              key={article.id}
              className="card-clean"
              onClick={() => onSelectArticle(article)}
              style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                height: '100%'
              }}
            >
              {/* Graphic Header Preview */}
              <div
                style={{
                  height: '190px',
                  background: getCoverGradient(article.coverTheme),
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  color: '#ffffff',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      background: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(6px)',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}
                  >
                    {article.category}
                  </span>
                  {getCoverIcon(article.coverTheme)}
                </div>

                <div>
                  <span className="font-mono" style={{ fontSize: '0.8125rem', opacity: 0.85 }}>
                    {article.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: 'var(--text-muted)', fontSize: '0.8125rem' }}>
                  <Clock size={13} />
                  <span>{article.readTime}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    lineHeight: '1.35',
                    letterSpacing: '-0.02em',
                    color: 'var(--text-primary)',
                    marginBottom: '12px'
                  }}
                >
                  {article.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    marginBottom: '20px',
                    flex: 1
                  }}
                >
                  {article.excerpt}
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)'
                  }}
                >
                  <span>Baca artikel</span>
                  <ArrowRight size={15} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
          <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            Diperbarui berkala dengan studi kasus dan panduan teknis.
          </span>

          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#blog" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-primary)', textDecoration: 'none' }}>
              <span>Buka Blog</span>
              <ArrowRight size={14} />
            </a>
            <a href="#rss" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-secondary)', textDecoration: 'none' }}>
              <Rss size={14} />
              <span>RSS Feed</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
