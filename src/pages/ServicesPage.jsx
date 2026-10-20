import React, { useState } from 'react';
import { 
  Code2, 
  Smartphone, 
  Cpu, 
  Bot, 
  Cloud, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Check, 
  Zap, 
  Clock, 
  Calculator,
  FileCheck,
  ChevronRight
} from 'lucide-react';
import { CORE_SERVICES } from '../data/mockData';
import ModernCard from '../components/ModernCard';

export default function ServicesPage({ setActivePage, onOpenEstimator, onSelectServiceForContact }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'web', label: 'Web Applications' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'enterprise', label: 'Enterprise Software' },
    { id: 'ai', label: 'GenAI & Automation' },
    { id: 'cloud', label: 'Cloud & DevOps' },
    { id: 'security', label: 'Cybersecurity' }
  ];

  const filteredServices = activeCategory === 'all' 
    ? CORE_SERVICES 
    : CORE_SERVICES.filter(s => s.category === activeCategory);

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Globe': return <Code2 size={28} color="var(--primary)" />;
      case 'Smartphone': return <Smartphone size={28} color="var(--accent-indigo)" />;
      case 'Cpu': return <Cpu size={28} color="var(--accent-cyan)" />;
      case 'Bot': return <Bot size={28} color="var(--accent-purple)" />;
      case 'Cloud': return <Cloud size={28} color="var(--primary)" />;
      case 'ShieldCheck': return <ShieldCheck size={28} color="var(--accent-emerald)" />;
      default: return <Code2 size={28} color="var(--primary)" />;
    }
  };

  const handleBookService = (serviceTitle) => {
    if (onSelectServiceForContact) {
      onSelectServiceForContact(serviceTitle);
    }
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const lifecycleSteps = [
    {
      step: "01",
      title: "Discovery & Architecture Blueprint",
      duration: "Week 1",
      desc: "We analyze your system requirements, define cloud topologies, select database structures, and deliver an interactive technical architecture specification."
    },
    {
      step: "02",
      title: "UI/UX & Design Tokens System",
      duration: "Week 2",
      desc: "High-fidelity Figma wireframes, clickable prototypes, and an accessible CSS design token system aligned with modern enterprise ergonomics."
    },
    {
      step: "03",
      title: "Agile 2-Week Sprint Development",
      duration: "Weeks 3 - 6",
      desc: "Senior engineering squad builds features in 14-day sprints. You receive automated demo links, Loom video walkthroughs, and weekly progress reports."
    },
    {
      step: "04",
      title: "Rigorous QA & Security Penetration",
      duration: "Week 7",
      desc: "Automated regression testing, load testing up to 50k concurrent requests, and comprehensive OWASP vulnerability audits before launch."
    },
    {
      step: "05",
      title: "Zero-Downtime Production Launch",
      duration: "Week 8",
      desc: "Canary deployments, database migrations, DNS cutover, telemetry alerting setup, and 100% intellectual property source code transfer."
    },
    {
      step: "06",
      title: "24/7 Managed SRE & SLA Support",
      duration: "Post-Launch",
      desc: "Guaranteed 15-minute response times for critical anomalies, automated cloud cost optimizations, and ongoing sprint feature extensions."
    }
  ];

  return (
    <div style={{ position: 'relative' }}>
      
      {/* ===================================================================
          1. SERVICES HERO
          =================================================================== */}
      <section className="section-hero">
        <div className="container">
          <div style={{ maxWidth: '1240px', margin: '0 auto', textAlign: 'center' }}>
            <div className="section-badge">
              <span className="section-badge-dot" />
              <span>Full-Stack Engineering Catalog</span>
            </div>

            <h1 
              style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', 
                fontWeight: 800, 
                lineHeight: 1.15, 
                marginBottom: '24px',
                color: 'var(--text-main)'
              }}
            >
              Enterprise IT Services Engineered for{' '}
              <span className="text-gradient-brand">Maximum Velocity</span>
            </h1>

            <p style={{ fontSize: '1.2rem', color: 'var(--text-body)', lineHeight: 1.8, marginBottom: '36px' }}>
              From bespoke web applications and cross-platform mobile apps to autonomous AI agents and cloud infrastructure, explore our comprehensive technical capabilities.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button 
                onClick={onOpenEstimator} 
                className="btn btn-primary"
                style={{ padding: '14px 30px' }}
              >
                <Calculator size={18} />
                <span>Calculate Service Investment</span>
              </button>
              <button 
                onClick={() => setActivePage('contact')} 
                className="btn btn-secondary"
                style={{ padding: '14px 28px' }}
              >
                <span>Book Free Architecture Session</span>
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* ===================================================================
          2. FILTERABLE SERVICE DIRECTORY
          =================================================================== */}
      <section className="section" style={{ background: 'var(--bg-subtle)' }}>
        <div className="container">
          
          {/* Category Filter Pills */}
          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '10px', 
              flexWrap: 'wrap',
              marginBottom: '50px'
            }}
          >
            {categories.map(cat => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '9px 22px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    background: isActive ? 'var(--grad-brand)' : '#ffffff',
                    color: isActive ? '#ffffff' : 'var(--text-main)',
                    border: '1px solid ' + (isActive ? 'transparent' : 'var(--border-light)'),
                    boxShadow: isActive ? 'var(--shadow-brand)' : 'var(--shadow-xs)',
                    transition: 'all var(--transition)'
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Service Cards Deep Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {filteredServices.map(srv => (
              <ModernCard 
                key={srv.id}
                className="clean-card"
                style={{
                  padding: '44px 40px',
                  border: '1px solid var(--border-light)',
                  background: '#ffffff',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'flex-start' }}>
                  
                  {/* Left Column: Details & Capabilities */}
                  <div>
                    {/* Header info */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '18px' }}>
                      <div 
                        style={{
                          width: '56px',
                          height: '56px',
                          borderRadius: 'var(--radius-md)',
                          background: 'var(--primary-light)',
                          border: '1px solid #bfdbfe',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {getServiceIcon(srv.icon)}
                      </div>
                      <div>
                        <span 
                          style={{
                            fontSize: '0.78rem',
                            fontWeight: 800,
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            color: 'var(--primary)'
                          }}
                        >
                          {srv.category.toUpperCase()} ARCHITECTURE
                        </span>
                        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main)' }}>
                          {srv.title}
                        </h2>
                      </div>
                    </div>

                    <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
                      {srv.longDesc}
                    </p>

                    {/* Key Capabilities */}
                    <div style={{ marginBottom: '28px' }}>
                      <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        Architectural Scope & Deliverables:
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px' }}>
                        {srv.capabilities.map((cap, cIdx) => (
                          <div key={cIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: 'var(--text-main)' }}>
                            <CheckCircle2 size={16} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '3px' }} />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Production Case Highlight */}
                    <div 
                      style={{
                        padding: '18px 22px',
                        background: 'var(--bg-subtle)',
                        borderLeft: '4px solid var(--primary)',
                        borderRadius: '0 8px 8px 0',
                        fontSize: '0.92rem',
                        color: 'var(--text-main)'
                      }}
                    >
                      <strong style={{ color: 'var(--primary)' }}>Production Impact: </strong>
                      {srv.caseSnippet}
                    </div>
                  </div>

                  {/* Right Column: Tech Stack & Investment Box */}
                  <div 
                    style={{
                      background: 'var(--bg-subtle)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-light)',
                      padding: '32px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '100%'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
                        Commercial Terms & Tech Stack
                      </div>

                      {/* Pricing Tier */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '18px' }}>
                        <div>
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Engagement Starting At</div>
                          <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-main)' }}>
                            {srv.startingPrice}
                          </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Typical Sprints</div>
                          <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary)' }}>
                            {srv.typicalTimeline}
                          </div>
                        </div>
                      </div>

                      {/* Tech Stack Pills */}
                      <div style={{ marginBottom: '24px' }}>
                        <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
                          Primary Technologies:
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {srv.techStack.map((tech, tIdx) => (
                            <span 
                              key={tIdx}
                              style={{
                                padding: '4px 12px',
                                borderRadius: 'var(--radius-full)',
                                background: '#ffffff',
                                border: '1px solid var(--border-light)',
                                fontSize: '0.8rem',
                                color: 'var(--text-main)',
                                fontWeight: 600,
                                boxShadow: 'var(--shadow-xs)'
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Deliverables summary */}
                      <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '16px', marginBottom: '24px' }}>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Standard Deliverables:</div>
                        <div style={{ fontSize: '0.86rem', color: 'var(--text-body)', lineHeight: 1.5 }}>
                          {srv.deliverables}
                        </div>
                      </div>
                    </div>

                    {/* Book This Service CTA */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <button
                        onClick={() => handleBookService(srv.title)}
                        className="btn btn-primary"
                        style={{ width: '100%', justifyContent: 'center', padding: '13px' }}
                      >
                        <span>Request Architecture Consultation</span>
                        <ArrowRight size={16} />
                      </button>

                      <button
                        onClick={onOpenEstimator}
                        style={{
                          fontSize: '0.85rem',
                          color: 'var(--primary)',
                          fontWeight: 700,
                          textAlign: 'center',
                          padding: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        <Calculator size={15} />
                        <span>Customize scope in interactive calculator</span>
                      </button>
                    </div>

                  </div>

                </div>
              </ModernCard>
            ))}
          </div>

        </div>
      </section>


      {/* ===================================================================
          3. 6-STAGE ENGINEERING LIFECYCLE
          =================================================================== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Zap size={15} color="var(--primary)" />
              <span>Predictable Delivery Framework</span>
            </div>
            <h2 className="section-title">The 6-Stage Engineering Process</h2>
            <p className="section-subtitle">
              We eliminate guesswork. Our structured agile lifecycle guarantees bi-weekly delivery, complete visibility, and zero technical regressions.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {lifecycleSteps.map((item, idx) => (
              <div 
                key={idx}
                className="clean-card"
                style={{ padding: '34px', background: '#ffffff', position: 'relative' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                  <span style={{ fontSize: '2.2rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--primary)' }}>
                    {item.step}
                  </span>
                  <span style={{ fontSize: '0.8rem', padding: '5px 12px', borderRadius: 'var(--radius-full)', background: 'var(--primary-light)', color: 'var(--primary)', fontWeight: 700 }}>
                    {item.duration}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '12px', color: 'var(--text-main)' }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.94rem', color: 'var(--text-body)', lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ===================================================================
          4. SLA & ENGAGEMENT TIERS TABLE
          =================================================================== */}
      <section className="section" style={{ background: 'var(--bg-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Layers size={15} color="var(--primary)" />
              <span>Transparent Service Level Agreements</span>
            </div>
            <h2 className="section-title">Engagement Models & SLA Tiers</h2>
            <p className="section-subtitle">
              Choose the dedicated engineering allocation that matches your product phase and compliance requirements.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
            
            {/* Tier 1: Growth Sprint */}
            <div className="clean-card" style={{ padding: '36px 30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#ffffff' }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase' }}>Seed & Growth</span>
                <h3 style={{ fontSize: '1.65rem', fontWeight: 800, margin: '8px 0 12px 0', color: 'var(--text-main)' }}>Sprint Squad</h3>
                <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
                  $8,500 <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>/ sprint</span>
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', marginBottom: '24px' }}>
                  Ideal for focused feature iterations, MVP builds, and high-velocity prototype validation.
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                  <li style={{ display: 'flex', gap: '8px' }}><Check size={16} color="var(--accent-emerald)" /> 2 Dedicated Senior Developers</li>
                  <li style={{ display: 'flex', gap: '8px' }}><Check size={16} color="var(--accent-emerald)" /> 1 Part-Time UI/UX Designer</li>
                  <li style={{ display: 'flex', gap: '8px' }}><Check size={16} color="var(--accent-emerald)" /> Bi-Weekly Production Deployments</li>
                  <li style={{ display: 'flex', gap: '8px' }}><Check size={16} color="var(--accent-emerald)" /> Standard CI/CD Pipeline Automation</li>
                  <li style={{ display: 'flex', gap: '8px' }}><Check size={16} color="var(--accent-emerald)" /> 48-Hour SLA Ticket Response</li>
                </ul>
              </div>

              <button 
                onClick={() => handleBookService("Sprint Squad Engagement")}
                className="btn btn-secondary" 
                style={{ width: '100%', marginTop: '30px' }}
              >
                Select Sprint Squad
              </button>
            </div>

            {/* Tier 2: Dedicated Squad (Popular) */}
            <div 
              className="clean-card" 
              style={{ 
                padding: '36px 30px', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                background: '#ffffff',
                border: '2px solid var(--primary)',
                boxShadow: 'var(--shadow-brand)',
                position: 'relative'
              }}
            >
              <div 
                style={{ 
                  position: 'absolute', 
                  top: '-13px', 
                  left: '50%', 
                  transform: 'translateX(-50%)',
                  padding: '5px 16px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--grad-brand)',
                  color: '#ffffff',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 12px rgba(37, 99, 235, 0.4)'
                }}
              >
                ⚡ Most Popular for Scale-Ups
              </div>

              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase' }}>Full Engineering Pod</span>
                <h3 style={{ fontSize: '1.65rem', fontWeight: 800, margin: '8px 0 12px 0', color: 'var(--text-main)' }}>Dedicated Squad</h3>
                <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
                  $18,000 <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>/ month</span>
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', marginBottom: '24px' }}>
                  Full-stack engineering squad embedded into your Jira/Slack with rapid daily output.
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                  <li style={{ display: 'flex', gap: '8px' }}><Check size={16} color="var(--accent-emerald)" /> 1 Principal Systems Architect</li>
                  <li style={{ display: 'flex', gap: '8px' }}><Check size={16} color="var(--accent-emerald)" /> 3 Senior Full-Stack Developers</li>
                  <li style={{ display: 'flex', gap: '8px' }}><Check size={16} color="var(--accent-emerald)" /> 1 Dedicated QA Automation Engineer</li>
                  <li style={{ display: 'flex', gap: '8px' }}><Check size={16} color="var(--accent-emerald)" /> Daily Standups & Slack Integration</li>
                  <li style={{ display: 'flex', gap: '8px' }}><Check size={16} color="var(--accent-emerald)" /> 4-Hour Critical Incident SLA</li>
                </ul>
              </div>

              <button 
                onClick={() => handleBookService("Dedicated Engineering Squad")}
                className="btn btn-primary" 
                style={{ width: '100%', marginTop: '30px' }}
              >
                Reserve Dedicated Squad
              </button>
            </div>

            {/* Tier 3: Enterprise Elite */}
            <div className="clean-card" style={{ padding: '36px 30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#ffffff' }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-indigo)', fontWeight: 800, textTransform: 'uppercase' }}>Mission Critical</span>
                <h3 style={{ fontSize: '1.65rem', fontWeight: 800, margin: '8px 0 12px 0', color: 'var(--text-main)' }}>Enterprise Elite</h3>
                <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
                  Custom <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>/ contract</span>
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', marginBottom: '24px' }}>
                  For enterprises demanding 99.99% high-availability, SOC2 compliance, and dedicated SRE.
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                  <li style={{ display: 'flex', gap: '8px' }}><Check size={16} color="var(--accent-emerald)" /> Multi-Squad Scalable Allocation</li>
                  <li style={{ display: 'flex', gap: '8px' }}><Check size={16} color="var(--accent-emerald)" /> 24/7/365 On-Call SRE & Telemetry</li>
                  <li style={{ display: 'flex', gap: '8px' }}><Check size={16} color="var(--accent-emerald)" /> 15-Minute Response Time SLA</li>
                  <li style={{ display: 'flex', gap: '8px' }}><Check size={16} color="var(--accent-emerald)" /> Annual Penetration Test & Security Audit</li>
                  <li style={{ display: 'flex', gap: '8px' }}><Check size={16} color="var(--accent-emerald)" /> Custom Enterprise Master Services Agreement (MSA)</li>
                </ul>
              </div>

              <button 
                onClick={() => handleBookService("Enterprise Elite SLA")}
                className="btn btn-secondary" 
                style={{ width: '100%', marginTop: '30px' }}
              >
                Contact Enterprise Sales
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
