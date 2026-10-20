import React, { useEffect, useState } from 'react';

export default function AmbientBackground() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = Math.round((e.clientX / window.innerWidth) * 100);
      const y = Math.round((e.clientY / window.innerHeight) * 100);
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="ambient-bg" aria-hidden="true" style={{ overflow: 'hidden' }}>
      {/* Subtle Hairline Architecture Grid */}
      <div className="subtle-grid" />

      {/* Iridescent Aurora Mesh Orbs (Stripe / Linear Inspired) */}
      <div 
        style={{
          position: 'absolute',
          top: '-15%',
          left: '20%',
          width: '750px',
          height: '750px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, rgba(99, 102, 241, 0.08) 45%, transparent 70%)',
          filter: 'blur(100px)',
          animation: 'float 9s ease-in-out infinite'
        }}
      />

      <div 
        style={{
          position: 'absolute',
          top: '30%',
          right: '-10%',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, rgba(6, 182, 212, 0.06) 50%, transparent 70%)',
          filter: 'blur(120px)',
          animation: 'float 12s ease-in-out infinite reverse'
        }}
      />

      {/* Reactive Mouse Interactive Spotlight */}
      <div 
        style={{
          position: 'absolute',
          top: `${mousePos.y}%`,
          left: `${mousePos.x}%`,
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, rgba(99, 102, 241, 0.04) 40%, transparent 65%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
          transition: 'top 0.3s ease-out, left 0.3s ease-out'
        }}
      />
    </div>
  );
}
