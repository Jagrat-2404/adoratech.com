import React, { useState, useEffect } from 'react';
import { 
  Bot, 
  Cloud, 
  Code2, 
  ShieldCheck, 
  Zap, 
  Terminal, 
  Globe, 
  Activity, 
  CheckCircle2, 
  Play, 
  RotateCcw,
  Sparkles,
  Server,
  Layers,
  ArrowRight,
  Wifi,
  Lock,
  Cpu
} from 'lucide-react';

export default function PlanetaryInnovationStage() {
  const [activeTab, setActiveTab] = useState('ai');
  const [aiRunning, setAiRunning] = useState(false);
  const [aiStep, setAiStep] = useState(0);
  const [selectedCity, setSelectedCity] = useState('San Francisco');
  const [codeSnippet, setCodeSnippet] = useState('react');

  // Simulated AI multi-agent workflow
  useEffect(() => {
    let timer;
    if (aiRunning) {
      if (aiStep < 4) {
        timer = setTimeout(() => {
          setAiStep(prev => prev + 1);
        }, 1200);
      } else {
        timer = setTimeout(() => {
          setAiRunning(false);
        }, 2000);
      }
    }
    return () => clearTimeout(timer);
  }, [aiRunning, aiStep]);

  const handleStartAiSimulation = () => {
    setAiStep(1);
    setAiRunning(true);
  };

  const cities = [
    { name: 'San Francisco', latency: '2ms', status: 'Primary Nexus', load: '38%' },
    { name: 'New York', latency: '4ms', status: 'Active Region', load: '52%' },
    { name: 'London', latency: '7ms', status: 'EU Central Hub', load: '64%' },
    { name: 'Frankfurt', latency: '9ms', status: 'Secured Enclave', load: '41%' },
    { name: 'Tokyo', latency: '14ms', status: 'APAC East', load: '47%' },
    { name: 'Singapore', latency: '11ms', status: 'APAC South', load: '59%' }
  ];

  const currentCityData = cities.find(c => c.name === selectedCity) || cities[0];

  return (
    <div 
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '100%',
        margin: '0 auto'
      }}
    >
      {/* Ambient Aurora Glow Backdrop (Stripe & Linear Inspired) */}
      <div 
        style={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          height: '420px',
          background: 'radial-gradient(ellipse at center, rgba(37, 99, 235, 0.15) 0%, rgba(124, 58, 237, 0.12) 40%, rgba(6, 182, 212, 0.08) 70%, transparent 80%)',
          filter: 'blur(70px)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Main Studio Frame */}
      <div 
        style={{
          position: 'relative',
          zIndex: 1,
          background: '#ffffff',
          borderRadius: '24px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 30px 80px -20px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(37, 99, 235, 0.06)',
          overflow: 'hidden',
          transition: 'transform 0.4s ease'
        }}
      >
        {/* ===================================================================
            STUDIO HEADER CHROME BAR
            =================================================================== */}
        <div 
          style={{
            padding: '14px 22px',
            background: '#f8fafc',
            borderBottom: '1px solid #e2e8f0',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px'
          }}
        >
          {/* Traffic Dots & URL */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f87171' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#fbbf24' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#34d399' }} />
            </div>
            
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                fontSize: '0.78rem',
                color: '#64748b',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <Lock size={12} color="#059669" />
              <span>adoratech.internal/production-mesh-v3</span>
              <span style={{ color: '#94a3b8' }}>•</span>
              <span style={{ color: '#059669', fontWeight: 600 }}>TLS 1.3 Active</span>
            </div>
          </div>

          {/* Live Ping Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
            <span style={{ fontSize: '0.78rem', color: '#0f172a', fontWeight: 700 }}>
              Cluster Status: <strong style={{ color: '#059669' }}>100% Operational (3ms)</strong>
            </span>
          </div>
        </div>

        {/* ===================================================================
            INTERACTIVE CAPABILITY NAVIGATION TABS
            =================================================================== */}
        <div 
          style={{
            padding: '12px 22px',
            background: '#ffffff',
            borderBottom: '1px solid #f1f5f9',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            overflowX: 'auto'
          }}
        >
          {[
            { id: 'ai', label: 'Autonomous AI Swarm', icon: <Bot size={16} /> },
            { id: 'edge', label: 'Planetary Edge Mesh', icon: <Globe size={16} /> },
            { id: 'web', label: 'High-Velocity WASM & Web', icon: <Code2 size={16} /> },
            { id: 'security', label: 'Quantum-Safe Defense', icon: <ShieldCheck size={16} /> }
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 18px',
                  borderRadius: '12px',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  color: isActive ? '#ffffff' : '#475569',
                  background: isActive ? 'linear-gradient(135deg, #2563eb 0%, #6366f1 100%)' : '#f8fafc',
                  border: '1px solid ' + (isActive ? 'transparent' : '#e2e8f0'),
                  boxShadow: isActive ? '0 4px 14px rgba(37, 99, 235, 0.3)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap'
                }}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ===================================================================
            INTERACTIVE STAGE BODY
            =================================================================== */}
        <div style={{ padding: '28px 24px', minHeight: '380px' }}>
          
          {/* TAB 1: AUTONOMOUS AI SWARM SIMULATOR */}
          {activeTab === 'ai' && (
            <div style={{ animation: 'fadeIn 0.25s ease' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                
                {/* Left: Interactive Multi-Agent Coordinator */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: '#2563eb', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        Cognitive Multi-Agent Pipeline
                      </div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>
                        Autonomous Engineering Swarm
                      </h3>
                    </div>

                    <button
                      onClick={handleStartAiSimulation}
                      disabled={aiRunning}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '8px 16px',
                        borderRadius: 'var(--radius-full)',
                        background: aiRunning ? '#94a3b8' : 'linear-gradient(135deg, #2563eb 0%, #6366f1 100%)',
                        color: '#ffffff',
                        fontSize: '0.84rem',
                        fontWeight: 700,
                        boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
                        cursor: aiRunning ? 'default' : 'pointer'
                      }}
                    >
                      <Play size={14} fill="#ffffff" />
                      <span>{aiRunning ? 'Executing Swarm...' : 'Run Autonomous Sprint'}</span>
                    </button>
                  </div>

                  <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                    AdoraTech orchestrates specialized AI agents that collaborate in real time to design system schemas, generate production code, verify test coverage, and auto-deploy.
                  </p>

                  {/* 3 Active Agents Cards */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {[
                      { role: 'Systems Architect Agent', model: 'Claude 3.7 Sonnet', status: aiStep >= 1 ? 'Synthesizing GraphQL AST & Schema' : 'Standby / Ready', active: aiStep === 1 },
                      { role: 'Full-Stack Code Synthesizer', model: 'GPT-4o DeepCode', status: aiStep >= 2 ? 'Generated 14 Next.js React 19 modules' : 'Awaiting schema handoff', active: aiStep === 2 },
                      { role: 'Autonomous SRE & QA Bot', model: 'Adora-Hardened v4', status: aiStep >= 3 ? '100% test pass • Zero regressions • Deployed' : 'Monitoring pipeline', active: aiStep >= 3 }
                    ].map((agent, idx) => (
                      <div 
                        key={idx}
                        style={{
                          padding: '12px 16px',
                          borderRadius: '12px',
                          background: agent.active ? '#eff6ff' : '#f8fafc',
                          border: `1px solid ${agent.active ? '#3b82f6' : '#e2e8f0'}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: agent.active ? '#2563eb' : '#94a3b8', boxShadow: agent.active ? '0 0 8px #2563eb' : 'none' }} />
                          <div>
                            <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#0f172a' }}>{agent.role}</div>
                            <div style={{ fontSize: '0.74rem', color: agent.active ? '#2563eb' : '#64748b' }}>{agent.status}</div>
                          </div>
                        </div>
                        <span style={{ fontSize: '0.72rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>{agent.model}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Live Execution Console Stream */}
                <div 
                  style={{
                    background: '#090d1a',
                    borderRadius: '16px',
                    border: '1px solid #1e293b',
                    padding: '20px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    color: '#cbd5e1',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '260px'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #1e293b', paddingBottom: '10px', marginBottom: '14px', fontSize: '0.74rem', color: '#94a3b8' }}>
                      <span>adoratech-agent-runtime.log</span>
                      <span style={{ color: '#34d399' }}>● STREAMING</span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', lineHeight: 1.6 }}>
                      <div style={{ color: '#94a3b8' }}>[00:00.01] Initializing multi-agent consensus fabric...</div>
                      <div style={{ color: aiStep >= 1 ? '#60a5fa' : '#475569' }}>
                        [00:01.20] Architect: Generated clean database topology & Prisma schema.
                      </div>
                      <div style={{ color: aiStep >= 2 ? '#34d399' : '#475569' }}>
                        [00:02.45] Synthesizer: 14 TypeScript components emitted with 0 lint errors.
                      </div>
                      <div style={{ color: aiStep >= 3 ? '#a78bfa' : '#475569' }}>
                        [00:03.60] SRE Bot: Automated E2E testing completed: 48/48 tests passed (100%).
                      </div>
                      {aiStep >= 4 && (
                        <div style={{ color: '#38bdf8', fontWeight: 700 }}>
                          [00:04.10] Edge deployment completed in 240ms. Production canary healthy.
                        </div>
                      )}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#94a3b8', fontSize: '0.78rem' }}>
                        <span>[00:0{4 + (aiStep > 0 ? aiStep : 1)}.20] awaiting next agent consensus</span>
                        <span className="animate-cursor" style={{ display: 'inline-block', width: '7px', height: '13px', background: '#38bdf8' }} />
                      </div>
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid #1e293b', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748b' }}>
                    <span>Inference Velocity: 4.8M tokens/s</span>
                    <span style={{ color: '#34d399' }}>P99 Latency: 18ms</span>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: PLANETARY EDGE MESH VISUALIZER */}
          {activeTab === 'edge' && (
            <div style={{ animation: 'fadeIn 0.25s ease' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#2563eb', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Sub-Millisecond Global Routing
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                    Planetary Anycast Edge Fabric
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                    Our distributed cloud architecture spans over 320 points of presence globally. Requests are automatically terminated and processed at the nearest edge datacenter with zero cold-starts.
                  </p>

                  {/* City Selector Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                    {cities.map((city) => {
                      const isSelected = selectedCity === city.name;
                      return (
                        <button
                          key={city.name}
                          onClick={() => setSelectedCity(city.name)}
                          style={{
                            padding: '12px 14px',
                            borderRadius: '12px',
                            background: isSelected ? '#eff6ff' : '#f8fafc',
                            border: `1px solid ${isSelected ? '#3b82f6' : '#e2e8f0'}`,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            cursor: 'pointer',
                            textAlign: 'left',
                            transition: 'all 0.2s ease',
                            position: 'relative',
                            overflow: 'hidden'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            {isSelected && (
                              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span className="animate-radar-ring" style={{ position: 'absolute', width: '16px', height: '16px', borderRadius: '50%', background: 'rgba(37, 99, 235, 0.4)' }} />
                                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#2563eb' }} />
                              </div>
                            )}
                            <div>
                              <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#0f172a' }}>{city.name}</div>
                              <div style={{ fontSize: '0.72rem', color: '#64748b' }}>{city.status}</div>
                            </div>
                          </div>
                          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: isSelected ? '#2563eb' : '#059669', fontFamily: 'var(--font-mono)' }}>
                            {city.latency}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Right: Edge Telemetry Spotlight */}
                <div 
                  style={{
                    padding: '24px',
                    borderRadius: '18px',
                    background: 'linear-gradient(135deg, #090d1a 0%, #1e1b4b 100%)',
                    color: '#ffffff',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    boxShadow: '0 20px 45px rgba(15, 23, 42, 0.25)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Wifi size={16} color="#38bdf8" />
                      <span style={{ fontSize: '0.84rem', fontWeight: 700 }}>{currentCityData.name} Edge Node</span>
                    </div>
                    <span style={{ fontSize: '0.74rem', padding: '3px 10px', borderRadius: 'var(--radius-full)', background: 'rgba(16, 185, 129, 0.2)', color: '#34d399', fontWeight: 700 }}>
                      ● Active Anycast
                    </span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px', marginBottom: '20px' }}>
                    <div style={{ padding: '12px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '10px' }}>
                      <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Real-Time Latency</div>
                      <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#38bdf8' }}>{currentCityData.latency}</div>
                    </div>
                    <div style={{ padding: '12px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '10px' }}>
                      <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Load Capacity</div>
                      <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#34d399' }}>{currentCityData.load}</div>
                    </div>
                  </div>

                  <div style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                    ✓ Automatic multi-region failover active.<br />
                    ✓ Zero-downtime database replication with sub-5ms sync.<br />
                    ✓ Global Cloudflare Tier-1 interconnects.
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 3: HIGH-VELOCITY WASM & WEB */}
          {activeTab === 'web' && (
            <div style={{ animation: 'fadeIn 0.25s ease' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#2563eb', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Engineered for Instantaneous Interaction
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                    Micro-Frontends & WASM Runtimes
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                    We build mission-critical web applications with React 19, Next.js App Router, and high-performance WebAssembly compilation, achieving flawless 100/100 Lighthouse metrics.
                  </p>

                  {/* Lighthouse 100 Benchmark Badge Bar */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '20px' }}>
                    {[
                      { label: 'Performance', score: '100' },
                      { label: 'Accessibility', score: '100' },
                      { label: 'Best Practices', score: '100' },
                      { label: 'SEO', score: '100' }
                    ].map((item, idx) => (
                      <div key={idx} style={{ textAlign: 'center', padding: '10px 6px', background: '#ecfdf5', borderRadius: '10px', border: '1px solid #a7f3d0' }}>
                        <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#059669' }}>{item.score}</div>
                        <div style={{ fontSize: '0.68rem', color: '#047857', fontWeight: 700 }}>{item.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Code selector buttons */}
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {['react', 'rust-wasm', 'graphql'].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setCodeSnippet(lang)}
                        style={{
                          padding: '6px 14px',
                          borderRadius: '8px',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          background: codeSnippet === lang ? '#0f172a' : '#f1f5f9',
                          color: codeSnippet === lang ? '#ffffff' : '#64748b',
                          cursor: 'pointer'
                        }}
                      >
                        {lang.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right: Code Preview Container */}
                <div 
                  style={{
                    background: '#090d1a',
                    borderRadius: '16px',
                    border: '1px solid #1e293b',
                    padding: '18px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    color: '#cbd5e1',
                    lineHeight: 1.65,
                    overflowX: 'auto'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #1e293b', paddingBottom: '8px', marginBottom: '12px', fontSize: '0.74rem', color: '#94a3b8' }}>
                    <span>{codeSnippet === 'react' ? 'page.tsx (React 19 Server Component)' : codeSnippet === 'rust-wasm' ? 'engine.rs (WASM 120 FPS)' : 'schema.graphql'}</span>
                    <span style={{ color: '#38bdf8' }}>Optimized</span>
                  </div>

                  {codeSnippet === 'react' && (
                    <pre style={{ margin: 0 }}>
                      <span style={{ color: '#60a5fa' }}>export default async function</span> EnterprisePortal() &#123;<br />
                      &nbsp;&nbsp;<span style={{ color: '#94a3b8' }}>// Direct edge streaming without waterfalls</span><br />
                      &nbsp;&nbsp;<span style={{ color: '#60a5fa' }}>const</span> telemetry = <span style={{ color: '#60a5fa' }}>await</span> fetchClusterData();<br />
                      &nbsp;&nbsp;<span style={{ color: '#60a5fa' }}>return</span> (<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style={{ color: '#34d399' }}>LiveTelemetryView</span> data=&#123;telemetry&#125; /&gt;<br />
                      &nbsp;&nbsp;);<br />
                      &#125;
                    </pre>
                  )}

                  {codeSnippet === 'rust-wasm' && (
                    <pre style={{ margin: 0 }}>
                      <span style={{ color: '#c084fc' }}>#[wasm_bindgen]</span><br />
                      <span style={{ color: '#60a5fa' }}>pub fn</span> compute_high_frequency_delta(matrix: &amp;[f64]) -&gt; f64 &#123;<br />
                      &nbsp;&nbsp;<span style={{ color: '#94a3b8' }}>// SIMD vectorization at 120 frames/sec</span><br />
                      &nbsp;&nbsp;matrix.iter().sum::&lt;f64&gt;() * 1.048596<br />
                      &#125;
                    </pre>
                  )}

                  {codeSnippet === 'graphql' && (
                    <pre style={{ margin: 0 }}>
                      <span style={{ color: '#60a5fa' }}>type</span> AutonomousCluster &#123;<br />
                      &nbsp;&nbsp;id: ID!<br />
                      &nbsp;&nbsp;edgeNodes: [EdgeNode!]!<br />
                      &nbsp;&nbsp;throughputTokensPerSec: Float!<br />
                      &nbsp;&nbsp;p99LatencyMs: Float!<br />
                      &#125;
                    </pre>
                  )}
                </div>

              </div>
            </div>
          )}

          {/* TAB 4: QUANTUM ZERO-TRUST DEFENSE */}
          {activeTab === 'security' && (
            <div style={{ animation: 'fadeIn 0.25s ease' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#2563eb', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Military-Grade Architectural Hardening
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                    Post-Quantum Zero-Trust Core
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                    Security is not an afterthought. Every AdoraTech deployment integrates Kyber-1024 post-quantum key encapsulation, continuous OWASP vulnerability testing, and SOC 2 Type II controls.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {[
                      { title: 'SOC 2 Type II & ISO 27001 Certified', desc: 'Independent annual third-party verification.' },
                      { title: 'Post-Quantum Lattice Cryptography', desc: 'Immune to future quantum computer decryption.' },
                      { title: 'Zero-Trust Granular RBAC & MFA', desc: 'Continuous identity authentication on every RPC.' }
                    ].map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <CheckCircle2 size={18} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <div>
                          <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a' }}>{item.title}</div>
                          <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Security Inspector Radar */}
                <div 
                  style={{
                    background: '#090d1a',
                    borderRadius: '16px',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    padding: '24px',
                    color: '#ffffff',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', border: '2px solid #10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', boxShadow: '0 0 25px rgba(16, 185, 129, 0.3)' }}>
                    <Lock size={28} color="#34d399" />
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
                    Zero Security Vulnerabilities
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#94a3b8', marginBottom: '20px' }}>
                    Continuous SAST / DAST pipeline running on every commit
                  </div>

                  <div style={{ padding: '12px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '10px', display: 'flex', justifyContent: 'space-around', fontSize: '0.8rem' }}>
                    <div>
                      <span style={{ color: '#94a3b8' }}>DDoS Mitigation:</span> <strong style={{ color: '#34d399' }}>Instant</strong>
                    </div>
                    <div>
                      <span style={{ color: '#94a3b8' }}>IP Protection:</span> <strong style={{ color: '#38bdf8' }}>100% Client Owned</strong>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
