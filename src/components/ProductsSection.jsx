import React, { useState } from 'react';
import { digitalProducts, codeSnippets } from '../data/portfolioData';
import { ArrowRight, Code2, ShoppingBag, Sparkles, Check, Copy } from 'lucide-react';

export default function ProductsSection({ onSelectProduct }) {
  const [activeTab, setActiveTab] = useState('prompt.ts');
  const [copiedCode, setCopiedCode] = useState(false);

  const tabs = ['prompt.ts', 'layout.tsx', 'deploy.ts'];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="products" style={{ padding: '90px 0', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <span className="section-tag font-mono">Digital Offerings</span>
          <h2 className="section-title">My Products.</h2>
          <p className="section-desc">
            Production-ready digital assets, prompt engineering templates, LUT packs, and operating frameworks for creators and founders.
          </p>
        </div>

        {/* Featured Drop Banner / Code Showcase */}
        <div
          className="card-clean"
          style={{
            padding: 'clamp(28px, 4vw, 48px)',
            background: 'var(--bg-surface)',
            marginBottom: '48px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}
          >
            {/* Left Info Column */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 12px',
                  background: 'rgba(59, 130, 246, 0.1)',
                  color: '#2563eb',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '18px'
                }}
              >
                <Sparkles size={13} />
                <span>Featured Drop</span>
              </div>

              <h3
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: '700',
                  letterSpacing: '-0.03em',
                  lineHeight: '1.1',
                  color: 'var(--text-primary)',
                  marginBottom: '16px'
                }}
              >
                AI-Website Prompt Code Templates
              </h3>

              <p
                style={{
                  fontSize: '1rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.65',
                  marginBottom: '28px'
                }}
              >
                Don't build from zero. Give your AI the right foundation — stunning components, proven layouts, high-conversion structures — and ship faster than you ever thought possible.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
                <button
                  onClick={() => onSelectProduct(digitalProducts[0])}
                  className="btn btn-primary"
                  style={{ padding: '12px 24px' }}
                >
                  <ShoppingBag size={16} />
                  <span>See Templates</span>
                </button>
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                  ⚡ Instant digital access
                </span>
              </div>
            </div>

            {/* Right Interactive Code Terminal */}
            <div
              style={{
                background: '#0d1117',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Window Bar / Tabs */}
              <div
                style={{
                  background: '#161b22',
                  padding: '10px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div style={{ display: 'flex', gap: '8px' }}>
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className="font-mono"
                      style={{
                        padding: '4px 12px',
                        fontSize: '0.8125rem',
                        borderRadius: '6px',
                        border: 'none',
                        background: activeTab === tab ? '#21262d' : 'transparent',
                        color: activeTab === tab ? '#58a6ff' : '#8b949e',
                        cursor: 'pointer',
                        transition: 'all 0.15s'
                      }}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleCopyCode}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: copiedCode ? '#3fb950' : '#8b949e',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.75rem'
                  }}
                  title="Copy snippet"
                >
                  {copiedCode ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Code Lines Display */}
              <div
                className="font-mono"
                style={{
                  padding: '20px',
                  fontSize: '0.8125rem',
                  lineHeight: '1.7',
                  color: '#e6edf3',
                  overflowX: 'auto'
                }}
              >
                <pre style={{ margin: 0, fontFamily: 'inherit' }}>
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Terminal Footer Info */}
              <div
                style={{
                  background: '#161b22',
                  padding: '10px 16px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.75rem',
                  color: '#8b949e'
                }}
              >
                <span>Prompt-to-website using your AI</span>
                <span style={{ color: '#3fb950' }}>● Ready to deploy</span>
              </div>
            </div>

          </div>
        </div>

        {/* Digital Products 6-Card Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px'
          }}
        >
          {digitalProducts.map((product) => (
            <div
              key={product.id}
              className="card-clean"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)'
                    }}
                  >
                    {product.category}
                  </span>

                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--bg-subtle)',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {product.badge}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '8px'
                  }}
                >
                  {product.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.55',
                    marginBottom: '24px'
                  }}
                >
                  {product.description}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--border-light)'
                }}
              >
                <div>
                  <span style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                    {product.price}
                  </span>
                </div>

                <button
                  onClick={() => onSelectProduct(product)}
                  className="btn btn-primary"
                  style={{ padding: '8px 18px', fontSize: '0.875rem' }}
                >
                  <span>Get Now</span>
                  <ArrowRight size={14} />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
