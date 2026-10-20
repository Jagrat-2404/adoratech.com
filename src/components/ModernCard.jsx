import React, { useState } from 'react';

/**
 * ModernCard - Premium interactive card component (NO PARALLAX)
 * Features:
 * - Fluid hover elevation with smooth cubic-bezier easing
 * - Shimmering gradient top accent line on hover
 * - Subtle border glow highlight
 * - Zero 3D tilt or scroll parallax for maximum comfort and speed
 */
export default function ModernCard({ 
  children, 
  className = '', 
  style = {}, 
  onClick, 
  hasBorderBeam = false,
  badge = null,
  ...props 
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`clean-card ${hasBorderBeam ? 'border-beam-card' : ''} ${className}`}
      style={{
        position: 'relative',
        borderRadius: 'var(--radius-lg)',
        background: '#ffffff',
        border: `1px solid ${isHovered ? '#93c5fd' : 'var(--border-light)'}`,
        transition: 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.22s ease',
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: isHovered 
          ? '0 22px 50px -10px rgba(37, 99, 235, 0.14), 0 0 0 1px rgba(37, 99, 235, 0.12)' 
          : 'var(--shadow-sm)',
        overflow: 'hidden',
        cursor: onClick ? 'pointer' : 'default',
        ...style
      }}
      {...props}
    >
      {/* Top Animated Gradient Accent Line */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2.5px',
          background: 'linear-gradient(90deg, transparent, #2563eb, #6366f1, #38bdf8, transparent)',
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'scaleX(1)' : 'scaleX(0.7)',
          transition: 'opacity 0.28s ease, transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
          zIndex: 2
        }}
      />

      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </div>
  );
}
