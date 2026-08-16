import React, { useState } from 'react';
import { latestVideo, personalInfo } from '../data/portfolioData';
import { Play, Eye, Clock, Check } from 'lucide-react';
import { IconYouTube } from './SocialIcons';

export default function LatestVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section id="video" style={{ padding: '60px 0' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '32px' }}>
          <div>
            <span className="section-tag font-mono">({latestVideo.id}) Latest Video</span>
            <h2 className="section-title" style={{ marginBottom: 0 }}>{latestVideo.title}</h2>
          </div>
          
          {/* Subscribe Button */}
          <a
            href={personalInfo.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setSubscribed(true)}
            className="btn btn-outline"
            style={{
              borderColor: subscribed ? '#10b981' : 'var(--border-medium)',
              color: subscribed ? '#10b981' : 'inherit'
            }}
          >
            {subscribed ? <Check size={16} /> : <IconYouTube size={18} fill="#ef4444" />}
            <span>{subscribed ? 'Subscribed' : 'Subscribe to YouTube'}</span>
          </a>
        </div>

        {/* Video Player Box */}
        <div
          className="card-clean"
          style={{
            position: 'relative',
            overflow: 'hidden',
            aspectRatio: '16 / 9',
            maxHeight: '620px',
            width: '100%',
            background: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: isPlaying ? 'default' : 'pointer'
          }}
          onClick={() => !isPlaying && setIsPlaying(true)}
        >
          {isPlaying ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${latestVideo.youtubeId}?autoplay=1&rel=0`}
              title="YouTube video player"
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              {/* Thumbnail with overlay gradient */}
              <img
                src={latestVideo.thumbnailUrl}
                alt="Latest Video Preview"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.85,
                  transition: 'transform 0.4s ease'
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.4) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '32px'
                }}
              >
                {/* Top Badges */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(8px)',
                      color: '#ffffff',
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.8125rem',
                      fontWeight: '600'
                    }}
                  >
                    {latestVideo.topic}
                  </span>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <span
                      style={{
                        background: 'rgba(0, 0, 0, 0.6)',
                        backdropFilter: 'blur(8px)',
                        color: '#ffffff',
                        padding: '6px 12px',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.8125rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <Eye size={14} />
                      {latestVideo.views}
                    </span>
                    <span
                      style={{
                        background: 'rgba(0, 0, 0, 0.6)',
                        backdropFilter: 'blur(8px)',
                        color: '#ffffff',
                        padding: '6px 12px',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.8125rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <Clock size={14} />
                      {latestVideo.duration}
                    </span>
                  </div>
                </div>

                {/* Center Play Icon */}
                <div style={{ alignSelf: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '76px',
                      height: '76px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.95)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                      transition: 'transform 0.2s ease',
                    }}
                  >
                    <Play size={32} fill="#111111" color="#111111" style={{ marginLeft: '4px' }} />
                  </div>
                  <span
                    style={{
                      background: 'rgba(0, 0, 0, 0.7)',
                      backdropFilter: 'blur(10px)',
                      color: '#ffffff',
                      padding: '6px 16px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.875rem',
                      fontWeight: '500'
                    }}
                  >
                    Tap to load video
                  </span>
                </div>

                {/* Bottom info */}
                <div style={{ color: '#ffffff' }}>
                  <p style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                    {latestVideo.subtitle}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

      </div>
    </section>
  );
}
