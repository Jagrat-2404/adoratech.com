import React, { useState, useEffect, useRef } from 'react';
import { 
  Cpu, 
  Bot, 
  Cloud, 
  Globe, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  Layers, 
  Code2, 
  Lock, 
  Activity, 
  Radio, 
  Server,
  ArrowRight
} from 'lucide-react';
import { useMouseTilt } from '../hooks/useParallax';

export default function InnovationNexus({ onSelectInnovation }) {
  const [activeInnovation, setActiveInnovation] = useState('ai');
  const [pulseCounter, setPulseCounter] = useState(0);
  const canvasRef = useRef(null);
  const { tilt, isHovered, bind, style: tiltStyle } = useMouseTilt(6);

  // Innovation Breakthrough Nodes Data
  const innovations = {
    ai: {
      id: 'ai',
      title: 'Autonomous Multi-Agent AI',
      category: 'Cognitive Computing',
      tagline: 'Self-governing LLM swarms orchestrating enterprise operations',
      icon: <Bot size={22} color="#06b6d4" />,
      accentColor: '#06b6d4',
      badge: 'Neural Core v5.8',
      metrics: [
        { label: 'Token Throughput', value: '4.8M / sec' },
        { label: 'Inference Latency', value: '18ms P99' },
        { label: 'Context Horizon', value: '2M Vector DB' }
      ],
      features: ['Autonomous Code Synthesis', 'RAG Neural Memory', 'Multi-Agent Consensus Protocol']
    },
    cloud: {
      id: 'cloud',
      title: 'Planetary Serverless Edge Mesh',
      category: 'Cloud Infrastructure',
      tagline: 'Global Anycast fabric executing logic sub-5ms from end users',
      icon: <Cloud size={22} color="#3b82f6" />,
      accentColor: '#3b82f6',
      badge: 'Zero-Cold-Start',
      metrics: [
        { label: 'Edge Availability', value: '99.999%' },
        { label: 'Global PoPs', value: '320+ Cities' },
        { label: 'Failover Speed', value: '12ms Auto-heal' }
      ],
      features: ['Anycast Distributed Routing', 'Micro-Cluster Auto-Scaling', 'Multi-Region Replication']
    },
    web: {
      id: 'web',
      title: 'Reactive Hyper-Web & WASM',
      category: 'Next-Gen Software',
      tagline: 'Micro-frontend architecture running high-frequency WASM modules',
      icon: <Code2 size={22} color="#6366f1" />,
      accentColor: '#6366f1',
      badge: 'React 19 Core',
      metrics: [
        { label: 'Lighthouse Score', value: '100 / 100' },
        { label: 'Frame Budget', value: '120 FPS Native' },
        { label: 'Bundle Hydration', value: '< 20ms' }
      ],
      features: ['Edge SSR Streaming', 'WebAssembly Compilers', 'Zero-Bundle Micro-Frontends']
    },
    security: {
      id: 'security',
      title: 'Quantum-Safe Zero-Trust Core',
      category: 'Cybersecurity',
      tagline: 'Lattice-based cryptography shielding enterprise digital assets',
      icon: <ShieldCheck size={22} color="#10b981" />,
      accentColor: '#10b981',
      badge: 'Post-Quantum Defense',
      metrics: [
        { label: 'Audit Grade', value: 'SOC2 Type II' },
        { label: 'Threat Mitigation', value: '0.00s Real-time' },
        { label: 'Encryption', value: 'Kyber 1024-bit' }
      ],
      features: ['Post-Quantum Key Exchange', 'Continuous SAST CI/CD', 'Automated Penetration Guard']
    }
  };

  const current = innovations[activeInnovation] || innovations.ai;

  // Real-Time Synapse Particle Canvas Background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes
    const particleCount = 28;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.6 + 0.2
      });
    }

    let pulseTime = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      pulseTime += 0.02;

      // Draw connecting energy lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${p1.alpha * 0.8})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - dist / 110) * 0.25;
            ctx.strokeStyle = `rgba(99, 102, 241, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const triggerSurge = (key) => {
    setActiveInnovation(key);
    setPulseCounter(prev => prev + 1);
  };

  return (
    <div 
      {...bind}
      style={{
        ...tiltStyle,
        position: 'relative',
        width: '100%',
        maxWidth: '620px',
        margin: '0 auto',
        transformStyle: 'preserve-3d',
        userSelect: 'none'
      }}
    >
      {/* Outer Innovation Reactor Shell */}
      <div 
        style={{
          position: 'relative',
          background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
          borderRadius: '28px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 30px 70px -15px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(37, 99, 235, 0.08)',
          overflow: 'hidden',
          padding: '28px'
        }}
      >
        {/* Real-time HTML5 Particle Synapse Canvas Background */}
        <canvas 
          ref={canvasRef} 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

        {/* Ambient Glow Aura */}
        <div 
          style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '380px',
            height: '380px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${current.accentColor}22 0%, transparent 70%)`,
            filter: 'blur(50px)',
            pointerEvents: 'none',
            transition: 'background 0.5s ease'
          }}
        />

        {/* Top Innovation Reactor Header */}
        <div 
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
            borderBottom: '1px solid #e2e8f0',
            paddingBottom: '14px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div 
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: current.accentColor,
                boxShadow: `0 0 10px ${current.accentColor}`,
                animation: 'pulseDot 2s infinite ease-in-out'
              }}
            />
            <span style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#0f172a' }}>
              IT Innovation Nexus • Live Synapse Engine
            </span>
          </div>

          <span 
            style={{
              padding: '4px 12px',
              borderRadius: 'var(--radius-full)',
              background: '#eff6ff',
              border: '1px solid #bfdbfe',
              fontSize: '0.74rem',
              fontWeight: 700,
              color: '#2563eb'
            }}
          >
            ● High-Throughput Matrix
          </span>
        </div>

        {/* ===================================================================
            CENTRAL INNOVATION ARCHITECTURE VISUAL (Interactive Core & Pods)
            =================================================================== */}
        <div 
          style={{
            position: 'relative',
            zIndex: 2,
            minHeight: '260px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '22px'
          }}
        >
          {/* Animated SVG Synapse Lasers Connecting Center to 4 Orbs */}
          <svg 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none'
            }}
            viewBox="0 0 540 260"
          >
            <defs>
              <linearGradient id="laserGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#6366f1" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Connecting Beams to Top Left (AI) */}
            <line x1="270" y1="130" x2="80" y2="45" stroke="url(#laserGrad)" strokeWidth="1.8" strokeDasharray="4 4" opacity="0.6" />
            
            {/* Connecting Beams to Top Right (Cloud) */}
            <line x1="270" y1="130" x2="460" y2="45" stroke="url(#laserGrad)" strokeWidth="1.8" strokeDasharray="4 4" opacity="0.6" />
            
            {/* Connecting Beams to Bottom Left (Web) */}
            <line x1="270" y1="130" x2="80" y2="215" stroke="url(#laserGrad)" strokeWidth="1.8" strokeDasharray="4 4" opacity="0.6" />
            
            {/* Connecting Beams to Bottom Right (Security) */}
            <line x1="270" y1="130" x2="460" y2="215" stroke="url(#laserGrad)" strokeWidth="1.8" strokeDasharray="4 4" opacity="0.6" />

            {/* Core Circular Radar Waves */}
            <circle cx="270" cy="130" r="50" fill="none" stroke="#e2e8f0" strokeWidth="1" />
            <circle cx="270" cy="130" r="78" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />
            <circle cx="270" cy="130" r="105" fill="none" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="2 6" opacity="0.5" />
          </svg>

          {/* SATELLITE POD 1: Top Left (Autonomous AI) */}
          <button
            onClick={() => triggerSurge('ai')}
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              padding: '10px 16px',
              borderRadius: '16px',
              background: activeInnovation === 'ai' ? '#ffffff' : '#ffffff',
              border: `2px solid ${activeInnovation === 'ai' ? '#06b6d4' : '#e2e8f0'}`,
              boxShadow: activeInnovation === 'ai' ? '0 10px 25px -4px rgba(6, 182, 212, 0.35)' : '0 4px 12px rgba(15, 23, 42, 0.05)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: activeInnovation === 'ai' ? 'scale(1.06)' : 'scale(1)'
            }}
          >
            <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: '#ecfeff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Bot size={18} color="#06b6d4" />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0f172a' }}>AI Swarms</div>
              <div style={{ fontSize: '0.68rem', color: '#06b6d4', fontWeight: 700 }}>● Autonomous</div>
            </div>
          </button>

          {/* SATELLITE POD 2: Top Right (Cloud & Edge) */}
          <button
            onClick={() => triggerSurge('cloud')}
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              padding: '10px 16px',
              borderRadius: '16px',
              background: '#ffffff',
              border: `2px solid ${activeInnovation === 'cloud' ? '#3b82f6' : '#e2e8f0'}`,
              boxShadow: activeInnovation === 'cloud' ? '0 10px 25px -4px rgba(59, 130, 246, 0.35)' : '0 4px 12px rgba(15, 23, 42, 0.05)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: activeInnovation === 'cloud' ? 'scale(1.06)' : 'scale(1)'
            }}
          >
            <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Cloud size={18} color="#3b82f6" />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0f172a' }}>Edge Mesh</div>
              <div style={{ fontSize: '0.68rem', color: '#3b82f6', fontWeight: 700 }}>● Anycast</div>
            </div>
          </button>

          {/* SATELLITE POD 3: Bottom Left (Hyper Web) */}
          <button
            onClick={() => triggerSurge('web')}
            style={{
              position: 'absolute',
              bottom: '12px',
              left: '12px',
              padding: '10px 16px',
              borderRadius: '16px',
              background: '#ffffff',
              border: `2px solid ${activeInnovation === 'web' ? '#6366f1' : '#e2e8f0'}`,
              boxShadow: activeInnovation === 'web' ? '0 10px 25px -4px rgba(99, 102, 241, 0.35)' : '0 4px 12px rgba(15, 23, 42, 0.05)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: activeInnovation === 'web' ? 'scale(1.06)' : 'scale(1)'
            }}
          >
            <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: '#f5f3ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Code2 size={18} color="#6366f1" />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0f172a' }}>WASM Web</div>
              <div style={{ fontSize: '0.68rem', color: '#6366f1', fontWeight: 700 }}>● 120 FPS</div>
            </div>
          </button>

          {/* SATELLITE POD 4: Bottom Right (Quantum Security) */}
          <button
            onClick={() => triggerSurge('security')}
            style={{
              position: 'absolute',
              bottom: '12px',
              right: '12px',
              padding: '10px 16px',
              borderRadius: '16px',
              background: '#ffffff',
              border: `2px solid ${activeInnovation === 'security' ? '#10b981' : '#e2e8f0'}`,
              boxShadow: activeInnovation === 'security' ? '0 10px 25px -4px rgba(16, 185, 129, 0.35)' : '0 4px 12px rgba(15, 23, 42, 0.05)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: activeInnovation === 'security' ? 'scale(1.06)' : 'scale(1)'
            }}
          >
            <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: '#ecfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={18} color="#10b981" />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0f172a' }}>Zero-Trust</div>
              <div style={{ fontSize: '0.68rem', color: '#10b981', fontWeight: 700 }}>● Quantum-Safe</div>
            </div>
          </button>

          {/* CENTRAL QUANTUM INNOVATION NEXUS REACTOR */}
          <div 
            style={{
              position: 'relative',
              width: '104px',
              height: '104px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            onClick={() => {
              const keys = ['ai', 'cloud', 'web', 'security'];
              const next = keys[(keys.indexOf(activeInnovation) + 1) % keys.length];
              triggerSurge(next);
            }}
            title="Click to cycle IT Innovation Matrix"
          >
            {/* Outer Rotating Glowing Ring */}
            <div 
              style={{
                position: 'absolute',
                inset: '-6px',
                borderRadius: '50%',
                border: `2px dashed ${current.accentColor}`,
                animation: 'spin 18s linear infinite',
                opacity: 0.8
              }}
            />

            {/* Glowing Core Sphere */}
            <div 
              style={{
                width: '84px',
                height: '84px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, #0f172a 0%, ${current.accentColor} 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 0 35px ${current.accentColor}66, inset 0 0 15px rgba(255,255,255,0.4)`,
                color: '#ffffff',
                transition: 'all 0.4s ease'
              }}
            >
              <Cpu size={36} color="#ffffff" style={{ animation: 'pulseDot 2.5s infinite ease-in-out' }} />
            </div>
          </div>
        </div>

        {/* ===================================================================
            HOLOGRAPHIC INNOVATION SPOTLIGHT & TELEMETRY
            =================================================================== */}
        <div 
          style={{
            position: 'relative',
            zIndex: 2,
            padding: '20px 22px',
            borderRadius: '20px',
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            boxShadow: '0 8px 24px -4px rgba(15, 23, 42, 0.06)'
          }}
        >
          {/* Top Title & Tagline */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: current.accentColor, fontWeight: 800 }}>
                  {current.category}
                </span>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>•</span>
                <span style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: 600 }}>{current.badge}</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginTop: '2px' }}>
                {current.title}
              </h3>
            </div>

            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: `${current.accentColor}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {current.icon}
            </div>
          </div>

          <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.55, marginBottom: '16px' }}>
            {current.tagline}
          </p>

          {/* Innovation Real-time Telemetry Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '16px' }}>
            {current.metrics.map((m, idx) => (
              <div key={idx} style={{ padding: '10px 12px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.7rem', color: '#64748b' }}>{m.label}</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginTop: '2px' }}>{m.value}</div>
              </div>
            ))}
          </div>

          {/* Interactive Feature Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {current.features.map((feat, idx) => (
              <span 
                key={idx}
                style={{
                  fontSize: '0.76rem',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  background: `${current.accentColor}12`,
                  color: '#0f172a',
                  border: `1px solid ${current.accentColor}33`,
                  fontWeight: 600
                }}
              >
                ✓ {feat}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Interactive Navigation Mode Switcher */}
        <div 
          style={{
            position: 'relative',
            zIndex: 2,
            marginTop: '16px',
            display: 'flex',
            gap: '8px'
          }}
        >
          {Object.keys(innovations).map((key) => {
            const item = innovations[key];
            const isSelected = activeInnovation === key;
            return (
              <button
                key={key}
                onClick={() => triggerSurge(key)}
                style={{
                  flex: 1,
                  padding: '9px 8px',
                  borderRadius: '12px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  background: isSelected ? '#0f172a' : '#f1f5f9',
                  color: isSelected ? '#ffffff' : '#475569',
                  border: '1px solid ' + (isSelected ? '#0f172a' : '#e2e8f0'),
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
              >
                <span>{item.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

      </div>

      {/* Floating Innovation Accreditations */}
      <div 
        style={{
          position: 'absolute',
          top: '-14px',
          right: '24px',
          padding: '6px 14px',
          borderRadius: 'var(--radius-full)',
          background: '#0f172a',
          color: '#ffffff',
          fontSize: '0.74rem',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          boxShadow: '0 8px 20px rgba(15, 23, 42, 0.25)',
          zIndex: 10
        }}
      >
        <Sparkles size={14} color="#38bdf8" />
        <span>R&D Breakthrough Lab</span>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
