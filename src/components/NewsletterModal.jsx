import React, { useState } from 'react';
import { X, Sparkles, Check, Send } from 'lucide-react';

export default function NewsletterModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '480px' }} onClick={(e) => e.stopPropagation()}>
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
            cursor: 'pointer'
          }}
        >
          <X size={16} />
        </button>

        {subscribed ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.1)',
                color: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}
            >
              <Check size={28} />
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '6px' }}>Selamat Bergabung!</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              Anda telah terdaftar ke newsletter mingguan. Cek inbox Anda untuk materi perdana.
            </p>
          </div>
        ) : (
          <>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'var(--bg-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 14px',
                  color: 'var(--text-primary)'
                }}
              >
                <Sparkles size={22} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', letterSpacing: '-0.02em', marginBottom: '8px' }}>
                Join my Newsletter
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                Dapatkan ulasan AI tools, breakdown video rahasia, prompt engineering kit, dan insight teknologi langsung di inbox Anda.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <input
                type="email"
                required
                placeholder="Masukkan alamat email Anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-medium)',
                  fontSize: '0.9375rem',
                  outline: 'none'
                }}
              />
              <button type="submit" className="btn btn-primary" style={{ padding: '12px', fontSize: '0.9375rem' }}>
                <span>Langganan Gratis</span>
                <Send size={15} />
              </button>
            </form>

            <span style={{ display: 'block', textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '16px' }}>
              Bebas spam, bisa unsubscribe kapan saja dengan satu klik.
            </span>
          </>
        )}
      </div>
    </div>
  );
}
