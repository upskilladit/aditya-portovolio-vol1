import React, { useState } from 'react';
import { portfolioProjects } from '../data/portfolioData';
import { ArrowUpRight, TrendingUp, Eye } from 'lucide-react';

export default function PortfolioSection({ onSelectProject }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'AI', 'Dev', 'Brand'];

  const filteredProjects = filter === 'All'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.tag === filter);

  return (
    <section id="portfolio" style={{ padding: '80px 0' }}>
      <div className="container">
        
        {/* Header with Filters */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px', marginBottom: '40px' }}>
          <div>
            <span className="section-tag font-mono">(02) Recent Work</span>
            <h2 className="section-title">My Portfolio.</h2>
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  border: '1px solid',
                  borderColor: filter === cat ? 'var(--bg-dark)' : 'var(--border-medium)',
                  background: filter === cat ? 'var(--bg-dark)' : 'var(--bg-surface)',
                  color: filter === cat ? 'var(--text-inverse)' : 'var(--text-primary)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {cat === 'All' ? 'View All Projects' : `${cat} Projects`}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '28px'
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card-clean"
              onClick={() => onSelectProject(project)}
              style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              {/* Media Container */}
              <div
                style={{
                  position: 'relative',
                  height: '240px',
                  overflow: 'hidden',
                  background: '#1a1a1a'
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />

                {/* Floating Metric Badges */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    display: 'flex',
                    gap: '8px'
                  }}
                >
                  <span
                    style={{
                      background: 'rgba(18, 18, 18, 0.75)',
                      backdropFilter: 'blur(8px)',
                      color: '#10b981',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <TrendingUp size={12} />
                    {project.multiplier}
                  </span>

                  <span
                    style={{
                      background: 'rgba(18, 18, 18, 0.75)',
                      backdropFilter: 'blur(8px)',
                      color: '#ffffff',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <Eye size={12} />
                    {project.views}
                  </span>
                </div>

                {/* Top Arrow Icon */}
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#111111',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <ArrowUpRight size={18} />
                </div>
              </div>

              {/* Card Meta */}
              <div style={{ padding: '22px' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    display: 'block',
                    marginBottom: '6px'
                  }}
                >
                  {project.category}
                </span>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    letterSpacing: '-0.02em',
                    color: 'var(--text-primary)',
                    marginBottom: '8px'
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.55'
                  }}
                >
                  {project.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
