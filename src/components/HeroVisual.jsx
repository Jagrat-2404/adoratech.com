import React, { useState } from 'react';
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  Bot, 
  TrendingUp, 
  Activity, 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  ArrowUpRight,
  Sparkles,
  Server,
  Layers,
  Database
} from 'lucide-react';
import { useMouseTilt } from '../hooks/useParallax';

export default function HeroVisual() {
  const [activeTab, setActiveTab] = useState('web');
  const { tilt, isHovered, bind, style: tiltStyle } = useMouseTilt(8);

  const tabs = [
    { id: 'web', label: 'Web Applications', icon: <Globe size={16} /> },
    { id: 'mobile', label: 'Mobile Apps', icon: <Smartphone size={16} /> },
    { id: 'cloud', label: 'Cloud & DevOps', icon: <Cloud size={16} /> },
    { id: 'ai', label: 'AI Automation', icon: <Bot size={16} /> }
  ];

  return (
    <div 
      {...bind}
      style={{
        ...tiltStyle,
        position: 'relative',
        width: '100%',
        maxWidth: '580px',
        margin: '0 auto',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Outer Mac/Studio Frame */}
      <div 
        style={{
          background: '#ffffff',
          borderRadius: '24px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.15), 0 0 0 1px rgba(15, 23, 42, 0.05)',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        {/* Frame Window Header */}
        <div 
          style={{
            padding: '14px 20px',
            background: '#f8fafc',
            borderBottom: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Traffic Lights */}
          <div style={{ display: 'flex', gap: '6px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f87171' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#fbbf24' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#34d399' }} />
          </div>

          {/* Interactive Capability Switcher Tabs */}
          <div style={{ display: 'flex', gap: '4px', background: '#e2e8f0', padding: '3px', borderRadius: '10px' }}>
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '5px 12px',
                    borderRadius: '7px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: isActive ? '#2563eb' : '#64748b',
                    background: isActive ? '#ffffff' : 'transparent',
                    boxShadow: isActive ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
                    transition: 'all 0.18s ease'
                  }}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div style={{ width: '28px' }} />
        </div>

        {/* Dynamic Interactive Body Display */}
        <div style={{ padding: '24px', minHeight: '340px', background: '#ffffff' }}>
          
          {/* TAB 1: WEB APPLICATIONS */}
          {activeTab === 'web' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', animation: 'fadeIn 0.25s ease' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Enterprise SaaS Metrics</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>Global Commerce Engine</div>
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 10px', borderRadius: 'var(--radius-full)', background: '#ecfdf5', color: '#059669', fontSize: '0.78rem', fontWeight: 700 }}>
                  <TrendingUp size={14} />
                  <span>+340% Throughput</span>
                </div>
              </div>

              {/* Visual Performance Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                <div style={{ padding: '14px', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Avg Load Time</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#2563eb' }}>240ms</div>
                  <div style={{ fontSize: '0.7rem', color: '#10b981' }}>● 99 Lighthouse</div>
                </div>
                <div style={{ padding: '14px', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Active Users</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>1.4M+</div>
                  <div style={{ fontSize: '0.7rem', color: '#6366f1' }}>Live Real-time</div>
                </div>
                <div style={{ padding: '14px', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Architecture</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>React 19</div>
                  <div style={{ fontSize: '0.7rem', color: '#059669' }}>Next.js SSR</div>
                </div>
              </div>

              {/* Visual Simulated Bar Chart */}
              <div style={{ padding: '16px', borderRadius: '14px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748b', marginBottom: '10px' }}>
                  <span>Concurrent API Traffic Scale</span>
                  <span style={{ color: '#2563eb', fontWeight: 700 }}>Auto-scaled to 50k RPS</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end', height: '60px', gap: '8px' }}>
                  {[35, 48, 62, 55, 78, 69, 85, 92, 98, 88, 96, 100].map((val, idx) => (
                    <div 
                      key={idx}
                      style={{
                        flex: 1,
                        height: `${val}%`,
                        borderRadius: '4px',
                        background: idx === 11 ? 'linear-gradient(180deg, #2563eb 0%, #6366f1 100%)' : '#bfdbfe',
                        transition: 'height 0.3s ease'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: MOBILE APPS */}
          {activeTab === 'mobile' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', animation: 'fadeIn 0.25s ease' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Cross-Platform Mobile</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>iOS & Android Fluidity</div>
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 10px', borderRadius: 'var(--radius-full)', background: '#eff6ff', color: '#2563eb', fontSize: '0.78rem', fontWeight: 700 }}>
                  <Zap size={14} />
                  <span>60 FPS Native</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
                <div style={{ padding: '16px', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.78rem', color: '#64748b' }}>App Store Rating</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a' }}>4.9 ★</div>
                  <div style={{ fontSize: '0.72rem', color: '#059669' }}>Based on 42k+ reviews</div>
                </div>
                <div style={{ padding: '16px', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Framework</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#2563eb' }}>Flutter / Swift</div>
                  <div style={{ fontSize: '0.72rem', color: '#6366f1' }}>Biometric + Offline Sync</div>
                </div>
              </div>

              <div style={{ padding: '14px 18px', borderRadius: '12px', background: '#eff6ff', border: '1px solid #bfdbfe', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="#2563eb" />
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1e40af' }}>Apple Pay & Google Wallet Fully Integrated</span>
                </div>
                <ArrowUpRight size={16} color="#2563eb" />
              </div>
            </div>
          )}

          {/* TAB 3: CLOUD & DEVOPS */}
          {activeTab === 'cloud' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', animation: 'fadeIn 0.25s ease' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Multi-Cloud Infrastructure</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>Kubernetes & GitOps</div>
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 10px', borderRadius: 'var(--radius-full)', background: '#ecfdf5', color: '#059669', fontSize: '0.78rem', fontWeight: 700 }}>
                  <Server size={14} />
                  <span>99.99% SLA</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                <div style={{ padding: '14px', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Terraform IaC</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a' }}>100% Code</div>
                  <div style={{ fontSize: '0.7rem', color: '#10b981' }}>Reproducible</div>
                </div>
                <div style={{ padding: '14px', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Cloud Spend</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#2563eb' }}>-42% Cost</div>
                  <div style={{ fontSize: '0.7rem', color: '#059669' }}>FinOps Tuning</div>
                </div>
                <div style={{ padding: '14px', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Security</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a' }}>Zero Trust</div>
                  <div style={{ fontSize: '0.7rem', color: '#6366f1' }}>mTLS Enabled</div>
                </div>
              </div>

              <div style={{ padding: '14px', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.85rem', color: '#334155' }}>Active Pods: <strong>148 Running</strong> across AWS & GCP</span>
                <span style={{ fontSize: '0.75rem', padding: '3px 8px', borderRadius: 'var(--radius-full)', background: '#dcfce7', color: '#15803d', fontWeight: 700 }}>HEALTHY</span>
              </div>
            </div>
          )}

          {/* TAB 4: AI AUTOMATION */}
          {activeTab === 'ai' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', animation: 'fadeIn 0.25s ease' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Applied Generative AI</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>RAG & Multi-Agent Pipelines</div>
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 10px', borderRadius: 'var(--radius-full)', background: '#f5f3ff', color: '#7c3aed', fontSize: '0.78rem', fontWeight: 700 }}>
                  <Sparkles size={14} />
                  <span>Sub-150ms RAG</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
                <div style={{ padding: '16px', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Vector Database</div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#2563eb' }}>Qdrant / Pinecone</div>
                  <div style={{ fontSize: '0.72rem', color: '#10b981' }}>Hybrid Dense-Sparse</div>
                </div>
                <div style={{ padding: '16px', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Agent Orchestration</div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a' }}>LangChain & Claude</div>
                  <div style={{ fontSize: '0.72rem', color: '#7c3aed' }}>Autonomous Tool Calling</div>
                </div>
              </div>

              <div style={{ padding: '14px 18px', borderRadius: '12px', background: '#f5f3ff', border: '1px solid #ddd6fe', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Sparkles size={18} color="#7c3aed" />
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#6d28d9' }}>Private Enterprise LLM with Zero Data Leakage Guarantee</span>
              </div>
            </div>
          )}

        </div>

        {/* Bottom Status Bar */}
        <div 
          style={{
            padding: '12px 20px',
            background: '#f8fafc',
            borderTop: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.78rem',
            color: '#64748b'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10b981' }} />
            <span>AdoraTech Production Engine v2.4</span>
          </div>
          <span style={{ color: '#2563eb', fontWeight: 600 }}>Click tabs to view real deliverables</span>
        </div>
      </div>

      {/* Floating Parallax Badge 1 (Top Right) */}
      <div 
        className="animate-float"
        style={{
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          background: '#ffffff',
          padding: '12px 18px',
          borderRadius: '14px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 12px 28px -4px rgba(15, 23, 42, 0.12)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          zIndex: 10
        }}
      >
        <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ShieldCheck size={20} color="#2563eb" />
        </div>
        <div>
          <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a' }}>SOC2 Certified</div>
          <div style={{ fontSize: '0.72rem', color: '#64748b' }}>Bank-Grade Security</div>
        </div>
      </div>

      {/* Floating Parallax Badge 2 (Bottom Left) */}
      <div 
        className="animate-float-delayed"
        style={{
          position: 'absolute',
          bottom: '-18px',
          left: '-20px',
          background: '#ffffff',
          padding: '12px 18px',
          borderRadius: '14px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 12px 28px -4px rgba(15, 23, 42, 0.12)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          zIndex: 10
        }}
      >
        <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#ecfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <TrendingUp size={20} color="#059669" />
        </div>
        <div>
          <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a' }}>250+ Products</div>
          <div style={{ fontSize: '0.72rem', color: '#059669' }}>99.8% On-Time Sprints</div>
        </div>
      </div>
    </div>
  );
}
