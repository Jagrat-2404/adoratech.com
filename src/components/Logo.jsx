import React from 'react';

export default function Logo({ size = 'default', showTagline = false, lightMode = false }) {
  const isLarge = size === 'large';
  const isSmall = size === 'small';

  const markSize = isLarge ? 42 : isSmall ? 28 : 36;

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: isSmall ? '10px' : '14px', userSelect: 'none' }}>
      {/* Corporate High-Trust Geometric Hexagon/Shield Symbol */}
      <div 
        style={{ 
          width: markSize, 
          height: markSize, 
          borderRadius: isSmall ? '8px' : '10px',
          background: 'linear-gradient(135deg, #0B1F3A 0%, #2F6FED 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 14px rgba(47, 111, 237, 0.3)',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <svg width={markSize * 0.62} height={markSize * 0.62} viewBox="0 0 24 24" fill="none">
          <path d="M12 2L3 7V12C3 17.5 6.8 22.7 12 24C17.2 22.7 21 17.5 21 12V7L12 2Z" fill="rgba(255, 255, 255, 0.15)" />
          <path d="M12 4.5L5 8.4V12.1C5 16.4 8 20.4 12 21.5C16 20.4 19 16.4 19 12.1V8.4L12 4.5Z" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 12L11 14L15 10" stroke="#2F6FED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Corporate Wordmark */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
          <span 
            style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 800, 
              fontSize: isLarge ? '1.8rem' : isSmall ? '1.18rem' : '1.42rem',
              letterSpacing: '-0.03em',
              color: lightMode ? '#ffffff' : '#0B1F3A'
            }}
          >
            Adora
          </span>
          <span 
            style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 800, 
              fontSize: isLarge ? '1.8rem' : isSmall ? '1.18rem' : '1.42rem',
              letterSpacing: '-0.03em',
              color: '#2F6FED'
            }}
          >
            Tech
          </span>
        </div>
        {showTagline && (
          <span 
            style={{ 
              fontSize: '0.7rem', 
              letterSpacing: '0.04em', 
              color: lightMode ? '#94A3B8' : '#4B5563',
              fontWeight: 600,
              marginTop: '-1px'
            }}
          >
            Reliable IT solutions for growing businesses.
          </span>
        )}
      </div>
    </div>
  );
}
