import React from 'react';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Code2,
  Smartphone,
  Cpu,
  Bot,
  Cloud,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  Activity,
  Zap,
  Star,
  Layers,
  Award,
  Calculator,
  Terminal,
  Server
} from 'lucide-react';
import {
  COMPANY_INFO,
  CORE_SERVICES,
  TECH_STACK,
  CASE_STUDIES,
  TESTIMONIALS
} from '../data/mockData';
import ModernCard from '../components/ModernCard';
import PlanetaryInnovationStage from '../components/PlanetaryInnovationStage';

export default function HomePage({ setActivePage, onOpenEstimator }) {
  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Globe': return <Code2 size={26} color="var(--primary)" />;
      case 'Smartphone': return <Smartphone size={26} color="var(--accent-indigo)" />;
      case 'Cpu': return <Cpu size={26} color="var(--accent-cyan)" />;
      case 'Bot': return <Bot size={26} color="var(--accent-purple)" />;
      case 'Cloud': return <Cloud size={26} color="var(--primary)" />;
      case 'ShieldCheck': return <ShieldCheck size={26} color="var(--accent-emerald)" />;
      default: return <Code2 size={26} color="var(--primary)" />;
    }
  };

  return (
    <div style={{ position: 'relative' }}>

      {/* ===================================================================
          1. HERO SECTION: STRIPE & LINEAR INSPIRED WIDESCREEN ARCHITECTURE
          =================================================================== */}
      <section className="section-hero" style={{ position: 'relative', overflow: 'hidden', textAlign: 'center', paddingTop: '140px', paddingBottom: '70px', display: 'block' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

          {/* Centered Panoramic Typography & Action Column */}
          <div style={{ maxWidth: '1200px', margin: '0 auto 48px auto' }}>

            {/* Announcement Pill with Pulsing Beacon */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 18px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(37, 99, 235, 0.08)',
                border: '1px solid rgba(37, 99, 235, 0.25)',
                color: '#2563eb',
                fontSize: '0.86rem',
                fontWeight: 700,
                marginBottom: '26px',
                backdropFilter: 'blur(8px)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onClick={() => setActivePage('services')}
            >
              <span className="section-badge-dot" />
              <span>Next-Gen Enterprise IT • Introducing Autonomous Multi-Agent Swarms</span>
              <ArrowRight size={14} />
            </div>

            {/* Monumental Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.8rem, 6.2vw, 4.8rem)',
                fontWeight: 900,
                lineHeight: 1.08,
                marginBottom: '24px',
                color: 'var(--text-main)',
                letterSpacing: '-0.04em'
              }}
            >
              The Engineering Partner for the{' '}
              <span className="text-gradient-brand">Ambitious Enterprise</span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(1.15rem, 2vw, 1.3rem)',
                color: 'var(--text-body)',
                lineHeight: 1.7,
                maxWidth: '740px',
                margin: '0 auto 38px auto'
              }}
            >
              From custom software systems and high-throughput mobile platforms to autonomous AI agent swarms and planetary edge cloud architecture. We design and build the technology that powers market leaders.
            </p>

            {/* Dual Action CTAs */}
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '36px' }}>
              <button
                onClick={() => setActivePage('services')}
                className="btn btn-primary"
                style={{ padding: '16px 36px', fontSize: '1.05rem', boxShadow: '0 12px 30px -4px rgba(37, 99, 235, 0.45)' }}
              >
                <span>Explore Capabilities</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={onOpenEstimator}
                className="btn btn-secondary"
                style={{ padding: '16px 32px', fontSize: '1.05rem' }}
              >
                <Calculator size={18} color="var(--primary)" />
                <span>Instant Scope & Cost Calculator</span>
              </button>
            </div>

            {/* Verified Enterprise Badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '28px',
                paddingTop: '20px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Award size={17} color="var(--primary)" />
                <span style={{ fontSize: '0.86rem', color: 'var(--text-main)', fontWeight: 600 }}>SOC 2 Type II & ISO 27001</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={17} color="var(--accent-emerald)" />
                <span style={{ fontSize: '0.86rem', color: 'var(--text-main)', fontWeight: 600 }}>100% IP Code Ownership</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Zap size={17} color="var(--accent-indigo)" />
                <span style={{ fontSize: '0.86rem', color: 'var(--text-main)', fontWeight: 600 }}>Sub-5ms Global Edge Latency</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={17} color="var(--primary)" />
                <span style={{ fontSize: '0.86rem', color: 'var(--text-main)', fontWeight: 600 }}>Senior-Only Staff Squads</span>
              </div>
            </div>
          </div>

          {/* Hero Section Centerpiece: Planetary Innovation Stage (Perfect Alignment & Full Substance) */}
          <div style={{ position: 'relative', marginTop: '28px', maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto', width: '100%' }}>
            <PlanetaryInnovationStage />
          </div>

        </div>
      </section>


      {/* ===================================================================
          1.5 ENTERPRISE CLIENT TRUST TICKER (STRIPE & LINEAR STYLE)
          =================================================================== */}
      <section style={{ padding: '24px 0 32px 0', borderTop: '1px solid var(--border-light)', background: '#ffffff' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '20px' }}>
            Trusted by Engineering Leaders from High-Scale Companies & Scale-Ups
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '42px',
              opacity: 0.75
            }}
          >
            {[
              { name: 'STRIPE', symbol: '///' },
              { name: 'SNOWFLAKE', symbol: '❄' },
              { name: 'DATADOG', symbol: '◈' },
              { name: 'VERCEL', symbol: '▲' },
              { name: 'SUPABASE', symbol: '⚡' },
              { name: 'RETOOL', symbol: '⧉' },
              { name: 'RAMP', symbol: '↗' }
            ].map((client, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  color: 'var(--text-main)',
                  transition: 'opacity 0.2s ease',
                  cursor: 'default'
                }}
              >
                <span style={{ color: 'var(--primary)', fontSize: '1.15rem' }}>{client.symbol}</span>
                <span>{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ===================================================================
          2. ENTERPRISE IMPACT METRICS BANNER
          =================================================================== */}
      <section style={{ padding: '36px 0', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', background: 'var(--bg-subtle)' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div className="grid-stats-6">
            {COMPANY_INFO.stats.map((stat, idx) => (
              <div 
                key={idx} 
                style={{ 
                  padding: '16px 12px',
                  background: '#ffffff',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-xs)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: '110px',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    fontSize: '2.4rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-heading)',
                    letterSpacing: '-0.03em',
                    marginBottom: '4px',
                    lineHeight: 1.1
                  }}
                  className="text-gradient-brand"
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.84rem', color: 'var(--text-main)', fontWeight: 700, minHeight: '2.4rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ===================================================================
          3. TECH STACK MARQUEE
          =================================================================== */}
      <section style={{ padding: '42px 0', overflow: 'hidden', background: 'var(--bg-subtle)' }}>
        <div className="container" style={{ marginBottom: '18px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)', fontWeight: 800 }}>
            Powered by Enterprise Technologies & Verified Cloud Infrastructure
          </span>
        </div>
        <div className="marquee-container">
          <div className="marquee-content">
            {TECH_STACK.concat(TECH_STACK).map((tech, idx) => (
              <div
                key={idx}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '9px 20px',
                  background: '#ffffff',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: 'var(--text-main)',
                  boxShadow: 'var(--shadow-xs)'
                }}
              >
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--primary)' }} />
                <span>{tech.name}</span>
                <span style={{ fontSize: '0.74rem', color: 'var(--text-light)', marginLeft: '4px' }}>• {tech.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ===================================================================
          4. CORE IT SERVICES SHOWCASE WITH MODERN INTERACTIVE CARDS
          =================================================================== */}
      <section className="section">
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>

          <div className="section-header">
            <div className="section-badge">
              <Layers size={15} color="var(--primary)" />
              <span>Full-Lifecycle Technical Capabilities</span>
            </div>
            <h2 className="section-title">
              Crafted for Enterprise Scale & High Velocity
            </h2>
            <p className="section-subtitle">
              We provide end-to-end IT engineering and bespoke software development with production-ready architecture.
            </p>
          </div>

          {/* Service Cards Grid - Symmetrical 3x2 Alignment (3 Cols Desktop, 2 Cols Tablet, 1 Col Mobile) */}
          <div 
            className="services-grid-3x2"
            style={{ 
              marginBottom: '52px'
            }}
          >
            {CORE_SERVICES.map((service) => (
              <ModernCard
                key={service.id}
                className="clean-card"
                style={{ 
                  padding: '34px 28px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  height: '100%',
                  background: '#ffffff'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 auto' }}>
                  {/* Top Icon & Badge Row */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', minHeight: '54px' }}>
                    <div 
                      style={{ 
                        width: '54px', 
                        height: '54px', 
                        borderRadius: 'var(--radius-md)', 
                        background: 'var(--primary-light)', 
                        border: '1px solid #bfdbfe',
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      {getServiceIcon(service.icon)}
                    </div>
                    <span 
                      style={{ 
                        padding: '5px 14px', 
                        borderRadius: 'var(--radius-full)', 
                        background: service.popular ? '#eff6ff' : 'var(--bg-subtle)',
                        border: '1px solid ' + (service.popular ? '#bfdbfe' : 'var(--border-light)'),
                        color: service.popular ? 'var(--primary)' : 'var(--text-muted)',
                        fontSize: '0.78rem',
                        fontWeight: 700
                      }}
                    >
                      {service.badge}
                    </span>
                  </div>

                  {/* Title (Aligned with Exact Min Height) */}
                  <h3 
                    style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: 800, 
                      lineHeight: 1.35, 
                      marginBottom: '12px', 
                      color: 'var(--text-main)',
                      minHeight: '4.2rem',
                      display: 'flex',
                      alignItems: 'flex-start'
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Description (Aligned with Exact Min Height) */}
                  <p 
                    style={{ 
                      fontSize: '0.92rem', 
                      color: 'var(--text-body)', 
                      lineHeight: 1.6, 
                      marginBottom: '20px',
                      minHeight: '5.2rem',
                      display: 'flex',
                      alignItems: 'flex-start'
                    }}
                  >
                    {service.shortDesc}
                  </p>

                  {/* Capabilities List (Aligned with Consistent Heights) */}
                  <div style={{ marginBottom: '24px', flex: '1 1 auto' }}>
                    <div style={{ fontSize: '0.76rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
                      Key Capabilities
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', margin: 0, padding: 0 }}>
                      {service.capabilities.slice(0, 3).map((cap, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '9px', fontSize: '0.86rem', color: 'var(--text-main)', lineHeight: 1.4, minHeight: '2.5rem' }}>
                          <CheckCircle2 size={16} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom Meta & Action (Locked to Bottom Baseline) */}
                <div 
                  style={{ 
                    paddingTop: '18px', 
                    borderTop: '1px solid var(--border-light)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    marginTop: 'auto'
                  }}
                >
                  <div>
                    <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', display: 'block', marginBottom: '2px' }}>Typical Sprints</span>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-main)' }}>{service.typicalTimeline}</div>
                  </div>

                  <button
                    onClick={() => setActivePage('services')}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      color: 'var(--primary)',
                      padding: '8px 16px',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--primary-light)',
                      border: '1px solid #bfdbfe',
                      transition: 'all var(--transition)',
                      cursor: 'pointer'
                    }}
                  >
                    <span>Deep Dive</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </ModernCard>
            ))}
          </div>

          {/* View Full Services Button */}
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => setActivePage('services')}
              className="btn btn-secondary"
              style={{ padding: '14px 34px', fontSize: '1rem' }}
            >
              <span>View All IT Services & SLA Details</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </section>


      {/* ===================================================================
          5. INTERACTIVE ESTIMATOR CALLOUT BANNER
          =================================================================== */}
      <section style={{ padding: '40px 0 80px 0' }}>
        <div className="container">
          <div
            style={{
              padding: 'clamp(28px, 4.5vw, 54px) clamp(20px, 4vw, 46px)',
              borderRadius: 'var(--radius-xl)',
              background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 60%, #1d4ed8 100%)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.25)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: 'clamp(24px, 3.5vw, 40px)',
              alignItems: 'center',
              color: '#ffffff'
            }}
          >
            <div>
              <div className="section-badge" style={{ background: 'rgba(255, 255, 255, 0.12)', color: '#93c5fd', borderColor: 'rgba(147, 197, 253, 0.3)' }}>
                <Calculator size={15} />
                <span>Executive Transparency</span>
              </div>
              <h2 style={{ fontSize: '2.3rem', fontWeight: 800, marginBottom: '16px', color: '#ffffff' }}>
                How Much Does Your Next IT Build Cost?
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '28px' }}>
                Skip the vague sales pitches. Use our interactive architectural cost estimator to calculate instant budget brackets, delivery timelines, and dedicated engineering squad composition.
              </p>
              <button
                onClick={onOpenEstimator}
                className="btn btn-primary"
                style={{ padding: '14px 32px' }}
              >
                <Sparkles size={18} />
                <span>Launch Interactive Project Calculator</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Visual Calculator Teaser Preview */}
            <div
              style={{
                background: '#ffffff',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                color: 'var(--text-main)',
                boxShadow: '0 20px 45px rgba(0, 0, 0, 0.2)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 600 }}>Project Scope Config</span>
                <span style={{ fontSize: '0.8rem', color: '#059669', fontWeight: 700 }}>● Instant Live Calculation</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ padding: '6px 14px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', fontSize: '0.82rem', fontWeight: 700 }}>
                  Web-App + Mobile
                </span>
                <span style={{ padding: '6px 14px', borderRadius: 'var(--radius-sm)', background: '#f5f3ff', color: 'var(--accent-indigo)', fontSize: '0.82rem', fontWeight: 700 }}>
                  GenAI Pipeline
                </span>
              </div>
              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Est. Investment Range</div>
                  <div style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--primary)' }}>$16,500 - $24,000</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Est. Timeline</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)' }}>6 - 8 Weeks</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ===================================================================
          6. FEATURED CASE STUDIES WITH INTERACTIVE CARDS
          =================================================================== */}
      <section className="section" style={{ background: 'var(--bg-subtle)' }}>
        <div className="container">

          <div className="section-header">
            <div className="section-badge">
              <TrendingUp size={15} color="var(--primary)" />
              <span>Proven Enterprise Track Record</span>
            </div>
            <h2 className="section-title">
              Mission-Critical Deliveries in Production
            </h2>
            <p className="section-subtitle">
              Take a look at how we architected enterprise-grade systems for banking, clinical telehealth, automated logistics, and global e-commerce.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: 'clamp(20px, 2.5vw, 30px)',
              marginBottom: '40px'
            }}
          >
            {CASE_STUDIES.map((project) => (
              <ModernCard
                key={project.id}
                className="clean-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '34px',
                  background: '#ffffff'
                }}
              >
                <div>
                  {/* Category & Industry */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {project.industry}
                    </span>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                      {project.client}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '12px' }}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p style={{ fontSize: '0.94rem', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: '24px' }}>
                    {project.description}
                  </p>

                  {/* Metrics Grid */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '12px',
                      padding: '18px',
                      background: 'var(--bg-subtle)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)',
                      marginBottom: '24px'
                    }}
                  >
                    {project.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary)' }}>
                          {m.value}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-main)', fontWeight: 700 }}>
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags & Action */}
                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {project.tags.map((t, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.78rem',
                          padding: '4px 12px',
                          borderRadius: 'var(--radius-full)',
                          background: 'var(--bg-subtle)',
                          color: 'var(--text-main)',
                          border: '1px solid var(--border-light)',
                          fontWeight: 600
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActivePage('contact')}
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: 'var(--radius-md)',
                      background: '#ffffff',
                      border: '1px solid var(--border-light)',
                      color: 'var(--text-main)',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      boxShadow: 'var(--shadow-xs)',
                      transition: 'all var(--transition)'
                    }}
                  >
                    <span>Request Architecture Brief</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </ModernCard>
            ))}
          </div>

        </div>
      </section>


      {/* ===================================================================
          7. CLIENT TESTIMONIALS WITH VERIFIED ENDORSEMENTS
          =================================================================== */}
      <section className="section">
        <div className="container">

          <div className="section-header">
            <div className="section-badge">
              <Star size={15} color="var(--primary)" />
              <span>Verified Client Endorsements</span>
            </div>
            <h2 className="section-title">
              Endorsed by Engineering Executives & Founders
            </h2>
            <p className="section-subtitle">
              Read how enterprise CTOs and fast-growing founders describe partnering with our technical teams.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: 'clamp(18px, 2.5vw, 26px)'
            }}
          >
            {TESTIMONIALS.map((t, idx) => (
              <ModernCard
                key={idx}
                className="clean-card"
                style={{
                  padding: '34px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: '#ffffff'
                }}
              >
                <div>
                  {/* Rating Stars */}
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '18px' }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>

                  {/* Text Quote */}
                  <p style={{ fontSize: '0.98rem', color: 'var(--text-body)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '24px' }}>
                    "{t.text}"
                  </p>
                </div>

                {/* Author Info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingTop: '18px', borderTop: '1px solid var(--border-light)' }}>
                  <img
                    src={t.avatar}
                    alt={t.name}
                    style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--primary)' }}
                  />
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.98rem', color: 'var(--text-main)' }}>{t.name}</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{t.role}, <span style={{ color: 'var(--primary)', fontWeight: 700 }}>{t.company}</span></div>
                  </div>
                </div>
              </ModernCard>
            ))}
          </div>

        </div>
      </section>


      {/* ===================================================================
          8. BOTTOM CONVERSION BANNER
          =================================================================== */}
      <section style={{ padding: '60px 0 100px 0' }}>
        <div className="container">
          <div
            style={{
              padding: '64px 44px',
              textAlign: 'center',
              borderRadius: 'var(--radius-xl)',
              background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 55%, #1e3a8a 100%)',
              border: '1px solid rgba(99, 102, 241, 0.35)',
              boxShadow: '0 25px 60px -12px rgba(15, 23, 42, 0.3)',
              color: '#ffffff'
            }}
          >
            <div className="section-badge" style={{ background: 'rgba(255, 255, 255, 0.12)', color: '#93c5fd', borderColor: 'rgba(147, 197, 253, 0.3)' }}>
              <Zap size={15} />
              <span>Initiate Your Transformation</span>
            </div>

            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '18px', maxWidth: '780px', margin: '0 auto 18px auto', color: '#ffffff' }}>
              Ready to Build Your Next High-Performance Software Product?
            </h2>

            <p style={{ fontSize: '1.15rem', color: '#cbd5e1', maxWidth: '640px', margin: '0 auto 36px auto', lineHeight: 1.75 }}>
              Schedule a 30-minute discovery call with our Principal Architect. We will analyze your technical requirements, outline an architectural roadmap, and provide a fixed quote.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
              <button
                onClick={() => setActivePage('contact')}
                className="btn btn-primary"
                style={{ padding: '16px 38px', fontSize: '1.05rem' }}
              >
                <span>Schedule Architecture Call</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => setActivePage('about')}
                className="btn btn-secondary"
                style={{ padding: '16px 32px', fontSize: '1.05rem', background: 'rgba(255, 255, 255, 0.12)', color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.3)' }}
              >
                <span>Learn About Our Team</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
