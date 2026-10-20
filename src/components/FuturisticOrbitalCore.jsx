import React, { useState } from 'react';
import { Terminal, Shield, Zap, Cpu, Sparkles, Activity } from 'lucide-react';

export default function FuturisticOrbitalCore({ scrollY = 0 }) {
  const [activeTab, setActiveTab] = useState('quantum');

  // Parallax offset based on scroll
  const parallaxOffset = scrollY * 0.15;

  return (
    <div 
      style={{ 
        position: 'relative', 
        width: '100%', 
        maxWidth: '560px', 
        margin: '0 auto',
        transform: `translateY(${parallaxOffset}px)`,
        transition: 'transform 0.1s linear',
        perspective: '1200px'
      }}
    >
      {/* 3D Floating Gyroscope / Quantum Core Container */}
      <div 
        style={{
          position: 'relative',
          height: '420px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(circle, rgba(14, 28, 64, 0.95) 0%, rgba(7, 13, 30, 0.98) 80%)',
          border: '1px solid rgba(0, 240, 255, 0.35)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: '0 25px 70px -15px rgba(0, 0, 0, 0.7), 0 0 50px rgba(0, 240, 255, 0.2), inset 0 0 40px rgba(251, 191, 36, 0.1)',
          overflow: 'hidden'
        }}
      >
        {/* Futuristic HUD Top Coordinate Header */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            padding: '12px 20px',
            background: 'rgba(5, 10, 24, 0.85)',
            borderBottom: '1px solid rgba(0, 240, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.74rem',
            color: 'var(--neon-cyan)',
            letterSpacing: '0.08em',
            zIndex: 10
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div className="pulsing-beacon" />
            <span>QUANTUM ENGINE v4.8 • NODE [SF-01]</span>
          </div>

          <div style={{ display: 'flex', gap: '6px' }}>
            {['quantum', 'sre', 'ai-rag'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '3px 10px',
                  borderRadius: '4px',
                  color: activeTab === tab ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
                  background: activeTab === tab ? 'linear-gradient(135deg, #0284c7 0%, #d97706 100%)' : 'transparent',
                  border: '1px solid ' + (activeTab === tab ? 'rgba(251, 191, 36, 0.5)' : 'rgba(255, 255, 255, 0.1)')
                }}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Spinning Orbital Gyroscope Rings */}
        <div className="gyroscope-stage" aria-hidden="true">
          {/* Ring 1 - Cyan Outer */}
          <div className="gyro-ring gyro-ring-1" />
          {/* Ring 2 - Gold Middle */}
          <div className="gyro-ring gyro-ring-2" />
          {/* Ring 3 - Sapphire Inner */}
          <div className="gyro-ring gyro-ring-3" />

          {/* Central Pulsing Quantum Core Orb */}
          <div className="quantum-core-orb">
            <Cpu size={32} color="#ffffff" style={{ filter: 'drop-shadow(0 0 12px #00f0ff)' }} />
          </div>

          {/* Orbiting Satellite Data Particles */}
          <div className="satellite-dot sat-1" />
          <div className="satellite-dot sat-2" />
          <div className="satellite-dot sat-3" />
        </div>

        {/* Live HUD Floating Data Overlays */}
        <div 
          style={{
            position: 'absolute',
            bottom: '16px',
            left: '20px',
            right: '20px',
            background: 'rgba(7, 13, 30, 0.85)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(251, 191, 36, 0.3)',
            borderRadius: 'var(--radius-md)',
            padding: '12px 18px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 10,
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem'
          }}
        >
          {activeTab === 'quantum' && (
            <>
              <div>
                <span style={{ color: '#94a3b8' }}>Throughput: </span>
                <span style={{ color: 'var(--neon-gold)', fontWeight: 700 }}>142,000 req/sec</span>
              </div>
              <div>
                <span style={{ color: '#94a3b8' }}>P99 Latency: </span>
                <span style={{ color: 'var(--neon-cyan)', fontWeight: 700 }}>18.4ms</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981' }}>
                <Activity size={14} />
                <span>ONLINE 99.99%</span>
              </div>
            </>
          )}

          {activeTab === 'sre' && (
            <>
              <div>
                <span style={{ color: '#94a3b8' }}>Cluster: </span>
                <span style={{ color: 'var(--neon-cyan)', fontWeight: 700 }}>Kubernetes 1.32</span>
              </div>
              <div>
                <span style={{ color: '#94a3b8' }}>GitOps: </span>
                <span style={{ color: 'var(--neon-gold)', fontWeight: 700 }}>ArgoCD Synced</span>
              </div>
              <div style={{ color: '#38bdf8' }}>
                <span>ZERO DRIFT</span>
              </div>
            </>
          )}

          {activeTab === 'ai-rag' && (
            <>
              <div>
                <span style={{ color: '#94a3b8' }}>Vector Store: </span>
                <span style={{ color: 'var(--neon-gold)', fontWeight: 700 }}>Qdrant HNSW</span>
              </div>
              <div>
                <span style={{ color: '#94a3b8' }}>Tokens/sec: </span>
                <span style={{ color: 'var(--neon-cyan)', fontWeight: 700 }}>128 t/s stream</span>
              </div>
              <div style={{ color: '#a855f7' }}>
                <span>RAG ACTIVE</span>
              </div>
            </>
          )}
        </div>

        {/* Cyber HUD Corner Brackets */}
        <div className="hud-corner hud-corner-tl" />
        <div className="hud-corner hud-corner-tr" />
        <div className="hud-corner hud-corner-bl" />
        <div className="hud-corner hud-corner-br" />
      </div>

      {/* Floating Hologram Metric Chips with Counter-Parallax */}
      <div 
        className="glass-card"
        style={{
          position: 'absolute',
          top: '-24px',
          right: '-24px',
          padding: '12px 18px',
          background: 'rgba(10, 20, 48, 0.9)',
          border: '1px solid var(--neon-gold)',
          boxShadow: '0 0 25px rgba(217, 119, 6, 0.35)',
          transform: `translateY(${-(scrollY * 0.08)}px)`,
          zIndex: 15
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Sparkles size={18} color="var(--neon-gold)" />
          <div>
            <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff' }}>420%</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--neon-gold)' }}>Peak Throughput Scale</div>
          </div>
        </div>
      </div>

      <div 
        className="glass-card"
        style={{
          position: 'absolute',
          bottom: '-20px',
          left: '-24px',
          padding: '12px 18px',
          background: 'rgba(10, 20, 48, 0.9)',
          border: '1px solid var(--neon-cyan)',
          boxShadow: '0 0 25px rgba(0, 240, 255, 0.35)',
          transform: `translateY(${-(scrollY * 0.06)}px)`,
          zIndex: 15
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Shield size={18} color="var(--neon-cyan)" />
          <div>
            <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff' }}>Zero Trust</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--neon-cyan)' }}>Military-Grade SOC2</div>
          </div>
        </div>
      </div>
    </div>
  );
}
