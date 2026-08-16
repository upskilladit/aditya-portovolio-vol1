import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { X, Send, Mail, Phone, MessageSquare, Check } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', type: 'Collaboration' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
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

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '40px 10px' }}>
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
                margin: '0 auto 20px'
              }}
            >
              <Check size={32} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '8px' }}>Pesan Terkirim!</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Terima kasih telah menghubungi. Saya akan segera membalas email Anda.</p>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '24px' }}>
              <span className="section-tag font-mono">Let's Connect</span>
              <h3 style={{ fontSize: '1.65rem', fontWeight: '700', letterSpacing: '-0.02em', marginBottom: '8px' }}>
                Inquiry & Collaboration
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                Mari diskusikan campaign, creator sponsorship, pembuatan video, atau konsultasi AI.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', marginBottom: '6px' }}>
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nama atau Company Anda"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-medium)',
                    fontSize: '0.9375rem',
                    fontFamily: 'inherit',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', marginBottom: '6px' }}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="nama@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-medium)',
                    fontSize: '0.9375rem',
                    fontFamily: 'inherit',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', marginBottom: '6px' }}>
                  Tipe Kerjasama
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-medium)',
                    fontSize: '0.9375rem',
                    fontFamily: 'inherit',
                    outline: 'none',
                    background: '#ffffff'
                  }}
                >
                  <option value="Collaboration">Creator Collaboration & Sponsorship</option>
                  <option value="Video Production">AdPlay Video Production</option>
                  <option value="AI Consultation">AI Workflow Consultation</option>
                  <option value="Other">Lainnya</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', marginBottom: '6px' }}>
                  Pesan / Detail Project
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Ceritakan gambaran singkat tentang project atau kerjasama yang diinginkan..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-medium)',
                    fontSize: '0.9375rem',
                    fontFamily: 'inherit',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '12px', marginTop: '8px' }}>
                <Send size={16} />
                <span>Kirim Pesan</span>
              </button>
            </form>

            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              <span>Atau hubungi via WhatsApp:</span>
              <a
                href={`https://wa.me/6285176785180?text=Halo%20Garry,%20saya%20tertarik%20untuk%20inquiry%20project`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#10b981', fontWeight: '600', textDecoration: 'none' }}
              >
                Chat WhatsApp →
              </a>
            </div>
          </>
        )}

      </div>
    </div>
  );
}
