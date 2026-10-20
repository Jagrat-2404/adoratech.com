import React from 'react';

export default function Logo({ size = 'default', showTagline = false }) {
  const isLarge = size === 'large';
  const isSmall = size === 'small';

  const markSize = isLarge ? 42 : isSmall ? 28 : 34;

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: isSmall ? '8px' : '12px', userSelect: 'none' }}>
      {/* Modern High-Tech Gradient Symbol */}
      <div 
        style={{ 
          width: markSize, 
          height: markSize, 
          borderRadius: isSmall ? '8px' : '10px',
          background: 'linear-gradient(135deg, #2563eb 0%, #6366f1 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 14px rgba(37, 99, 235, 0.35)',
          color: '#ffffff',
          fontWeight: 900,
          fontFamily: 'var(--font-heading)'
        }}
      >
        <svg width={markSize * 0.6} height={markSize * 0.6} viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 22H7L12 11L17 22H22L12 2Z" fill="#ffffff" />
          <circle cx="12" cy="16" r="2.5" fill="#38bdf8" />
        </svg>
      </div>

      {/* Clean Wordmark */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
          <span 
            style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 800, 
              fontSize: isLarge ? '1.8rem' : isSmall ? '1.18rem' : '1.4rem',
              letterSpacing: '-0.03em',
              color: 'var(--text-main)'
            }}
          >
            Adora
          </span>
          <span 
            style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 800, 
              fontSize: isLarge ? '1.8rem' : isSmall ? '1.18rem' : '1.4rem',
              letterSpacing: '-0.03em',
              background: 'linear-gradient(135deg, #2563eb 0%, #6366f1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}
          >
            Tech
          </span>
        </div>
        {showTagline && (
          <span 
            style={{ 
              fontSize: '0.68rem', 
              letterSpacing: '0.1em', 
              textTransform: 'uppercase', 
              color: 'var(--primary)',
              fontWeight: 700,
              marginTop: '-2px'
            }}
          >
            Enterprise IT & Software Engineering
          </span>
        )}
      </div>
    </div>
  );
}
