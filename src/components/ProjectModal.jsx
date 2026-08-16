import React from 'react';
import { X, TrendingUp, Eye, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose, onOpenContact }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '640px' }} onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'var(--bg-subtle)',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <X size={16} />
        </button>

        {/* Media Preview */}
        <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '260px', position: 'relative', marginBottom: '24px' }}>
          <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                background: 'rgba(0,0,0,0.75)',
                backdropFilter: 'blur(8px)',
                color: '#10b981',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.8125rem',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <TrendingUp size={14} />
              {project.multiplier}
            </span>
            <span
              style={{
                background: 'rgba(0,0,0,0.75)',
                backdropFilter: 'blur(8px)',
                color: '#ffffff',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.8125rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <Eye size={14} />
              {project.views}
            </span>
          </div>
        </div>

        {/* Project Details */}
        <div>
          <span style={{ fontSize: '0.8125rem', fontWeight: '600', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            {project.category}
          </span>
          <h3 style={{ fontSize: '1.75rem', fontWeight: '700', letterSpacing: '-0.02em', margin: '6px 0 16px' }}>
            {project.title}
          </h3>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.65', marginBottom: '24px' }}>
            {project.description} Proyek ini dirancang dengan standar storytelling visual modern dan strategi konten bernilai tinggi untuk memaksimalkan retensi audiens di berbagai platform media digital.
          </p>

          <div style={{ background: 'var(--bg-subtle)', padding: '16px', borderRadius: 'var(--radius-sm)', marginBottom: '24px' }}>
            <h4 style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '8px' }}>Key Deliverables:</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={15} color="#10b981" /> High-retention video production & creative direction
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={15} color="#10b981" /> Custom motion graphics & sound design
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={15} color="#10b981" /> Full analytics & audience retention audit
              </li>
            </ul>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="btn btn-primary"
              style={{ flex: 1, padding: '12px' }}
            >
              <span>Diskusikan Project Serupa</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
