import React, { useState } from 'react';
import { X, Check, ShoppingBag, ShieldCheck, Zap } from 'lucide-react';

export default function ProductModal({ product, onClose }) {
  const [purchased, setPurchased] = useState(false);

  if (!product) return null;

  const handleCheckout = (e) => {
    e.preventDefault();
    setPurchased(true);
    setTimeout(() => {
      setPurchased(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '520px' }} onClick={(e) => e.stopPropagation()}>
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

        {purchased ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.1)',
                color: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}
            >
              <Check size={32} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '8px' }}>Pesanan Berhasil!</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
              Link akses produk digital telah dikirimkan ke email Anda. Selamat berkarya!
            </p>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    padding: '3px 10px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--bg-subtle)',
                    color: 'var(--text-secondary)'
                  }}
                >
                  {product.category}
                </span>
                <span style={{ fontSize: '0.75rem', fontWeight: '600', color: '#10b981' }}>
                  ● {product.badge}
                </span>
              </div>

              <h3 style={{ fontSize: '1.65rem', fontWeight: '700', letterSpacing: '-0.02em', marginBottom: '10px' }}>
                {product.title}
              </h3>

              <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '12px' }}>
                {product.price}
              </div>

              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {product.description}
              </p>
            </div>

            {/* Features Checklist */}
            <div style={{ background: 'var(--bg-subtle)', padding: '16px 20px', borderRadius: 'var(--radius-md)', marginBottom: '24px' }}>
              <h4 style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '10px' }}>Yang Anda Dapatkan:</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={15} color="#10b981" />
                  <span>Full source code & asset files digital</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={15} color="#10b981" />
                  <span>Panduan instalasi & video tutorial penggunaan</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={15} color="#10b981" />
                  <span>Free future updates & license commercial</span>
                </li>
              </ul>
            </div>

            {/* Checkout Action */}
            <form onSubmit={handleCheckout} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <input
                type="email"
                required
                placeholder="Masukkan email untuk pengiriman file"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-medium)',
                  fontSize: '0.9375rem',
                  outline: 'none'
                }}
              />
              <button type="submit" className="btn btn-primary" style={{ padding: '13px', fontSize: '1rem' }}>
                <ShoppingBag size={18} />
                <span>Beli Sekarang ({product.price})</span>
              </button>
            </form>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '16px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <ShieldCheck size={14} color="#10b981" /> Garansi 100% Aman
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Zap size={14} color="#f59e0b" /> Akses Instan Langsung
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
