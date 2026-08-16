import React from 'react';
import { X, Clock, Calendar, Tag, Share2, ArrowLeft } from 'lucide-react';

export default function ArticleModal({ article, onClose }) {
  if (!article) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        style={{ maxWidth: '740px', maxHeight: '85vh', overflowY: 'auto' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'var(--bg-subtle)',
            border: 'none',
            borderRadius: '50%',
            width: '34px',
            height: '34px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <X size={18} />
        </button>

        {/* Header Details */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                padding: '4px 10px',
                background: 'var(--bg-subtle)',
                borderRadius: 'var(--radius-full)',
                color: 'var(--text-primary)'
              }}
            >
              {article.category}
            </span>
            <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>•</span>
            <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>{article.readTime}</span>
            <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>•</span>
            <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>{article.date}</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              fontWeight: '700',
              lineHeight: '1.25',
              letterSpacing: '-0.025em',
              color: 'var(--text-primary)',
              marginBottom: '16px'
            }}
          >
            {article.title}
          </h2>

          <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: '1.6', fontStyle: 'italic', borderLeft: '3px solid var(--text-primary)', paddingLeft: '16px', margin: '20px 0' }}>
            {article.excerpt}
          </p>
        </div>

        {/* Article Body */}
        <div
          style={{
            fontSize: '1rem',
            lineHeight: '1.75',
            color: 'var(--text-primary)',
            borderTop: '1px solid var(--border-light)',
            paddingTop: '24px'
          }}
        >
          <p style={{ marginBottom: '18px' }}>
            Dalam lanskap kecerdasan buatan yang bergerak sangat cepat, kunci diferensiasi bukan hanya terletak pada model apa yang Anda gunakan, melainkan pada <strong>orkestrasi alur kerja (workflow orchestration)</strong> dan pemahaman konteks spesifik.
          </p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', margin: '24px 0 12px' }}>
            Struktur & Penerapan Praktis
          </h3>

          <p style={{ marginBottom: '18px' }}>
            Ketika mengeksekusi integrasi tools modern, kita membagi sistem menjadi tiga pilar utama:
          </p>

          <ul style={{ paddingLeft: '24px', marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><strong>Input Parsing:</strong> Menangkap sinyal eksplisit dan implisit dari kebutuhan user.</li>
            <li><strong>Reasoning Pipeline:</strong> Memanfaatkan model berkecepatan tinggi dengan thinking mode terpisah.</li>
            <li><strong>Action Dispatch:</strong> Menjalankan perubahan ke dalam repositori atau platform target secara otomatis.</li>
          </ul>

          <div
            style={{
              background: '#161b22',
              color: '#e6edf3',
              padding: '18px',
              borderRadius: 'var(--radius-sm)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.875rem',
              overflowX: 'auto',
              marginBottom: '24px'
            }}
          >
            <code>{`// Contoh implementasi workflow
const executeWorkflow = async (task) => {
  const plan = await ai.think(task);
  const code = await ai.generate(plan);
  return deployToGitHub(code);
};`}</code>
          </div>

          <p>
            Dengan menerapkan alur ini secara konsisten, proses iterasi dari ide/desain hingga live deployment dapat dipersingkat dari hitungan hari menjadi hanya hitungan menit.
          </p>
        </div>

        {/* Footer */}
        <div style={{ marginTop: '32px', paddingTop: '20px', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button onClick={onClose} className="btn btn-outline" style={{ fontSize: '0.875rem' }}>
            <ArrowLeft size={16} />
            <span>Kembali ke Website</span>
          </button>
          
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: article.title, text: article.excerpt, url: window.location.href });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert('Link artikel berhasil disalin!');
              }
            }}
            className="btn btn-pill-subtle"
            style={{ fontSize: '0.875rem' }}
          >
            <Share2 size={14} />
            <span>Share</span>
          </button>
        </div>

      </div>
    </div>
  );
}
