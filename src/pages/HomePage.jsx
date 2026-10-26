import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Server,
  Cloud,
  Code2,
  Lightbulb,
  BarChart3,
  CheckCircle2,
  Headphones,
  Award,
  Shield,
  Maximize2,
  Star,
  Calendar,
  ExternalLink,
  ChevronRight,
  Activity,
  Zap,
  Lock,
  Clock
} from 'lucide-react';
import {
  COMPANY_INFO,
  CORE_SERVICES,
  WHY_CHOOSE_US,
  CLIENT_LOGOS,
  CASE_STUDIES,
  TESTIMONIALS,
  BLOG_POSTS
} from '../data/mockData';

export default function HomePage({ 
  setActivePage, 
  onOpenEstimator, 
  onSelectCaseStudy, 
  onSelectBlogPost 
}) {
  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Server': return <Server size={28} color="#2F6FED" />;
      case 'Cloud': return <Cloud size={28} color="#2F6FED" />;
      case 'ShieldCheck': return <ShieldCheck size={28} color="#2F6FED" />;
      case 'Code2': return <Code2 size={28} color="#2F6FED" />;
      case 'Lightbulb': return <Lightbulb size={28} color="#2F6FED" />;
      case 'BarChart3': return <BarChart3 size={28} color="#2F6FED" />;
      default: return <Server size={28} color="#2F6FED" />;
    }
  };

  const getWhyIcon = (iconName) => {
    switch (iconName) {
      case 'Headphones': return <Headphones size={26} color="#2F6FED" />;
      case 'Award': return <Award size={26} color="#2F6FED" />;
      case 'Shield': return <Shield size={26} color="#2F6FED" />;
      case 'Maximize2': return <Maximize2 size={26} color="#2F6FED" />;
      default: return <CheckCircle2 size={26} color="#2F6FED" />;
    }
  };

  const latestPosts = BLOG_POSTS.slice(0, 3);
  const featuredCases = CASE_STUDIES.slice(0, 3);

  return (
    <div style={{ position: 'relative' }}>

      {/* ===================================================================
          1. HERO SECTION
          =================================================================== */}
      <section 
        className="section-hero" 
        style={{ 
          position: 'relative', 
          overflow: 'hidden', 
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E5E7EB',
          paddingTop: 'clamp(90px, 11vw, 130px)',
          paddingBottom: 'clamp(60px, 8vw, 100px)'
        }}
      >
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 540px), 1fr))', 
              gap: 'clamp(36px, 5vw, 64px)', 
              alignItems: 'center' 
            }}
          >
            {/* Left Column: Headlines & Actions */}
            <div>
              {/* Trust Badge */}
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 16px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: '#EEF4FE',
                  border: '1px solid #BFDBFE',
                  color: '#2F6FED',
                  fontSize: '0.84rem',
                  fontWeight: 700,
                  marginBottom: '20px'
                }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#2F6FED' }} />
                <span>Enterprise Managed IT & Cybersecurity</span>
              </div>

              {/* Exact Hero Headline */}
              <h1 
                style={{ 
                  fontSize: 'clamp(2.4rem, 4.4vw, 3.8rem)', 
                  fontWeight: 800, 
                  lineHeight: 1.14, 
                  marginBottom: '20px',
                  color: '#0B1F3A',
                  letterSpacing: '-0.035em'
                }}
              >
                Reliable IT Solutions That Help Your Business Scale Securely
              </h1>

              {/* Supporting Paragraph */}
              <p 
                style={{ 
                  fontSize: 'clamp(1.05rem, 1.6vw, 1.2rem)', 
                  color: '#4B5563', 
                  lineHeight: 1.7, 
                  marginBottom: '32px',
                  maxWidth: '580px'
                }}
              >
                We empower growing businesses with proactive 24/7 managed IT services, cloud migration, zero-trust cybersecurity, and custom engineering. Partner with certified experts dedicated to zero downtime, continuous compliance, and predictable IT budgets.
              </p>

              {/* Two Mandatory Buttons */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                <button
                  onClick={() => setActivePage('contact')}
                  className="btn btn-primary"
                  style={{ 
                    padding: '14px 32px', 
                    fontSize: '1rem',
                    backgroundColor: '#2F6FED',
                    color: '#FFFFFF',
                    boxShadow: '0 8px 24px -4px rgba(47, 111, 237, 0.45)'
                  }}
                  id="hero-get-consultation-btn"
                >
                  <span>Get a Consultation</span>
                  <ArrowRight size={18} />
                </button>

                <button
                  onClick={() => setActivePage('services')}
                  className="btn btn-secondary"
                  style={{ 
                    padding: '14px 28px', 
                    fontSize: '1rem',
                    border: '1px solid #D1D5DB',
                    color: '#0B1F3A',
                    backgroundColor: '#FFFFFF'
                  }}
                  id="hero-explore-services-btn"
                >
                  <span>Explore Services</span>
                </button>
              </div>

              {/* Trust Checkmarks */}
              <div 
                style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '18px', 
                  marginTop: '36px', 
                  paddingTop: '24px', 
                  borderTop: '1px solid #E5E7EB' 
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#1F2937', fontWeight: 600 }}>
                  <CheckCircle2 size={18} color="#10B981" />
                  <span>Sub-15 Min SLA Response</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#1F2937', fontWeight: 600 }}>
                  <CheckCircle2 size={18} color="#10B981" />
                  <span>ISO 27001 & SOC 2 Certified</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#1F2937', fontWeight: 600 }}>
                  <CheckCircle2 size={18} color="#10B981" />
                  <span>Multi-Cloud Certified Architects</span>
                </div>
              </div>
            </div>

            {/* Right Column: Corporate Interactive IT Telemetry Card */}
            <div>
              <div 
                className="clean-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'clamp(24px, 3.5vw, 36px)',
                  boxShadow: '0 20px 45px -10px rgba(11, 31, 58, 0.12)'
                }}
              >
                {/* Header row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid #E5E7EB' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10B981', boxShadow: '0 0 10px #10B981' }} />
                    <span style={{ fontWeight: 800, color: '#0B1F3A', fontSize: '1.05rem' }}>Active IT Operations Center</span>
                  </div>
                  <span style={{ fontSize: '0.82rem', color: '#4B5563', backgroundColor: '#F5F7FA', padding: '4px 10px', borderRadius: '6px', fontWeight: 600 }}>
                    Global NOC
                  </span>
                </div>

                {/* Telemetry Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ backgroundColor: '#F5F7FA', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid #E5E7EB' }}>
                    <div style={{ fontSize: '0.8rem', color: '#6B7280', fontWeight: 600 }}>Overall Network Health</div>
                    <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0B1F3A', marginTop: '4px' }}>99.98%</div>
                    <div style={{ fontSize: '0.78rem', color: '#10B981', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                      <Activity size={12} /> All nodes operational
                    </div>
                  </div>

                  <div style={{ backgroundColor: '#F5F7FA', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid #E5E7EB' }}>
                    <div style={{ fontSize: '0.8rem', color: '#6B7280', fontWeight: 600 }}>Threat Defense Status</div>
                    <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#2F6FED', marginTop: '4px' }}>Zero Breach</div>
                    <div style={{ fontSize: '0.78rem', color: '#10B981', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                      <ShieldCheck size={12} /> 24/7 SOC Sentinel Active
                    </div>
                  </div>
                </div>

                {/* Live Service Matrix */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    { label: 'Cloud Infrastructure & Kubernetes', latency: '< 18ms', status: 'Optimal', color: '#10B981' },
                    { label: 'Workstation Remote Helpdesk Tier 1-3', latency: '4m Avg Queue', status: 'Available', color: '#10B981' },
                    { label: 'Automated Offsite Cloud Backup', latency: 'Continuous Sync', status: '100% Protected', color: '#10B981' }
                  ].map((item, idx) => (
                    <div 
                      key={idx}
                      style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        padding: '10px 14px',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E5E7EB',
                        borderRadius: '8px',
                        fontSize: '0.88rem'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1F2937', fontWeight: 600 }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: item.color }} />
                        <span>{item.label}</span>
                      </div>
                      <span style={{ fontSize: '0.8rem', color: '#2F6FED', fontWeight: 700 }}>
                        {item.latency}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Quick Consultation Callout inside hero card */}
                <div 
                  style={{
                    marginTop: '22px',
                    padding: '14px 18px',
                    backgroundColor: '#EEF4FE',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid #BFDBFE',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ fontSize: '0.86rem', color: '#0B1F3A' }}>
                    Need immediate technical support or IT audit?
                  </div>
                  <button
                    onClick={() => setActivePage('contact')}
                    style={{
                      backgroundColor: '#2F6FED',
                      color: '#FFFFFF',
                      padding: '8px 16px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    Speak with Architect
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================================================================
          2. TRUST BAR
          =================================================================== */}
      <section 
        style={{ 
          backgroundColor: '#F5F7FA', 
          borderBottom: '1px solid #E5E7EB',
          padding: '34px 0' 
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '18px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6B7280' }}>
              Trusted by 120+ High-Growth Enterprises, Healthcare Networks, and Fintechs
            </span>
          </div>

          <div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: 'clamp(20px, 4vw, 48px)' 
            }}
          >
            {CLIENT_LOGOS.map((client, idx) => (
              <div 
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid #E5E7EB',
                  boxShadow: 'var(--shadow-xs)'
                }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#2F6FED' }} />
                <span style={{ fontWeight: 800, fontSize: '0.94rem', color: '#0B1F3A', letterSpacing: '0.02em' }}>
                  {client.logoText}
                </span>
                <span style={{ fontSize: '0.72rem', color: '#6B7280', borderLeft: '1px solid #E5E7EB', paddingLeft: '8px' }}>
                  {client.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          3. SERVICES OVERVIEW (6 CARDS)
          =================================================================== */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }} id="services-overview">
        <div className="container">
          
          <div className="section-header">
            <div className="section-badge">
              <span className="section-badge-dot" />
              <span>Full-Spectrum Solutions</span>
            </div>
            <h2 className="section-title">
              Enterprise IT Services Tailored for Growth
            </h2>
            <p className="section-subtitle">
              From day-to-day managed helpdesk to complex multi-cloud migrations and cybersecurity compliance, our certified squads provide end-to-end technology stewardship.
            </p>
          </div>

          {/* Symmetrical 3x2 Grid for 6 Service Cards */}
          <div className="services-grid-3x2">
            {CORE_SERVICES.map((service) => (
              <div 
                key={service.id}
                className="clean-card"
                style={{
                  padding: 'clamp(24px, 3vw, 32px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: 'var(--radius-lg)'
                }}
              >
                <div>
                  {/* Card Icon & Badge */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                    <div 
                      style={{ 
                        width: '54px', 
                        height: '54px', 
                        borderRadius: '12px', 
                        backgroundColor: '#EEF4FE', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center' 
                      }}
                    >
                      {getServiceIcon(service.icon)}
                    </div>
                    <span 
                      style={{ 
                        padding: '4px 12px', 
                        borderRadius: 'var(--radius-full)', 
                        fontSize: '0.75rem', 
                        fontWeight: 700, 
                        backgroundColor: '#F5F7FA', 
                        border: '1px solid #E5E7EB',
                        color: '#4B5563'
                      }}
                    >
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0B1F3A', marginBottom: '12px' }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: '0.94rem', color: '#4B5563', lineHeight: 1.6, marginBottom: '20px' }}>
                    {service.shortDesc}
                  </p>

                  {/* Key Highlights list */}
                  <div style={{ marginBottom: '24px' }}>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {service.keyFeatures.slice(0, 3).map((feat, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.86rem', color: '#1F2937' }}>
                          <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer link to Services Page */}
                <div style={{ paddingTop: '16px', borderTop: '1px solid #E5E7EB', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.84rem', color: '#6B7280', fontWeight: 600 }}>
                    {service.typicalTimeline}
                  </span>
                  <button
                    onClick={() => {
                      setActivePage('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#2F6FED',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    <span>Learn More</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Central Call to Action Bar */}
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <button
              onClick={() => setActivePage('services')}
              className="btn btn-primary"
              style={{ padding: '14px 34px', fontSize: '1rem', backgroundColor: '#0B1F3A', color: '#FFFFFF' }}
            >
              <span>Explore Complete Services Catalog</span>
              <ArrowRight size={17} />
            </button>
          </div>

        </div>
      </section>

      {/* ===================================================================
          4. WHY CHOOSE US (4 BENEFIT CARDS)
          =================================================================== */}
      <section className="section" style={{ backgroundColor: '#F5F7FA', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
        <div className="container">
          
          <div className="section-header">
            <div className="section-badge">
              <span className="section-badge-dot" />
              <span>The AdoraTech Difference</span>
            </div>
            <h2 className="section-title">
              Why High-Growth Companies Choose Us
            </h2>
            <p className="section-subtitle">
              We treat your corporate systems as our own. Discover how our proactive support, certified engineering squads, and unbending security standards keep your business moving forward.
            </p>
          </div>

          {/* 4 Benefit Cards Grid */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', 
              gap: '24px' 
            }}
          >
            {WHY_CHOOSE_US.map((item, idx) => (
              <div 
                key={idx}
                className="clean-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '30px 26px',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid #E5E7EB',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div 
                    style={{ 
                      width: '52px', 
                      height: '52px', 
                      borderRadius: '12px', 
                      backgroundColor: '#EEF4FE', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      marginBottom: '20px'
                    }}
                  >
                    {getWhyIcon(item.icon)}
                  </div>

                  <span 
                    style={{
                      display: 'inline-block',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: '#2F6FED',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '8px'
                    }}
                  >
                    {item.badge}
                  </span>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0B1F3A', marginBottom: '12px' }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: '#4B5563', lineHeight: 1.6, margin: 0 }}>
                    {item.shortDesc}
                  </p>
                </div>

                <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', gap: '6px', color: '#10B981', fontSize: '0.84rem', fontWeight: 600 }}>
                  <CheckCircle2 size={15} />
                  <span>Verified Standard</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================================================================
          5. STATS SECTION (250+ projects, 120+ clients, 15+ years, 99.9% uptime)
          =================================================================== */}
      <section 
        style={{ 
          backgroundColor: '#0B1F3A', 
          color: '#FFFFFF', 
          padding: 'clamp(50px, 6vw, 80px) 0',
          position: 'relative'
        }}
      >
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', 
              gap: 'clamp(24px, 3.5vw, 40px)',
              textAlign: 'center'
            }}
          >
            {COMPANY_INFO.stats.map((stat, idx) => (
              <div 
                key={idx}
                style={{
                  padding: '24px 16px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div 
                  style={{ 
                    fontSize: 'clamp(2.8rem, 4.5vw, 3.6rem)', 
                    fontWeight: 900, 
                    color: '#60A5FA',
                    lineHeight: 1,
                    marginBottom: '10px',
                    fontFamily: 'var(--font-heading)'
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.82rem', color: '#94A3B8' }}>
                  Audited & Verified SLA
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          6. FEATURED CASE STUDIES (3 PROJECT CARDS)
          =================================================================== */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          
          <div className="section-header">
            <div className="section-badge">
              <span className="section-badge-dot" />
              <span>Proven Business Results</span>
            </div>
            <h2 className="section-title">
              Featured Case Studies
            </h2>
            <p className="section-subtitle">
              Explore how we have modernized core infrastructures, enforced regulatory compliance, and unlocked scalable operational capacity for enterprise market leaders.
            </p>
          </div>

          {/* 3 Case Study Cards */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', 
              gap: '30px' 
            }}
          >
            {featuredCases.map((cs) => (
              <div 
                key={cs.id}
                className="clean-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                {/* Image & Category Overlay */}
                <div style={{ position: 'relative', height: '210px', overflow: 'hidden' }}>
                  <img 
                    src={cs.image} 
                    alt={cs.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div 
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      backgroundColor: '#0B1F3A',
                      color: '#FFFFFF',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-full)',
                      letterSpacing: '0.04em'
                    }}
                  >
                    {cs.category}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '0.82rem', color: '#6B7280', fontWeight: 600, marginBottom: '6px' }}>
                      {cs.client}
                    </div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B1F3A', marginBottom: '12px', lineHeight: 1.35 }}>
                      {cs.title}
                    </h3>
                    <p style={{ fontSize: '0.92rem', color: '#4B5563', lineHeight: 1.6, marginBottom: '20px' }}>
                      {cs.description}
                    </p>
                  </div>

                  {/* Metrics preview */}
                  <div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '20px', padding: '12px', backgroundColor: '#F5F7FA', borderRadius: '8px' }}>
                      {cs.metrics.slice(0, 2).map((m, i) => (
                        <div key={i}>
                          <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#2F6FED' }}>{m.value}</div>
                          <div style={{ fontSize: '0.75rem', color: '#6B7280', fontWeight: 600 }}>{m.label}</div>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => onSelectCaseStudy && onSelectCaseStudy(cs)}
                      style={{
                        width: '100%',
                        padding: '12px',
                        backgroundColor: '#EEF4FE',
                        color: '#2F6FED',
                        border: '1px solid #BFDBFE',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <span>View Case Study</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================================================================
          7. TESTIMONIALS (3 CLIENT TESTIMONIALS)
          =================================================================== */}
      <section className="section" style={{ backgroundColor: '#F5F7FA', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
        <div className="container">
          
          <div className="section-header">
            <div className="section-badge">
              <span className="section-badge-dot" />
              <span>Executive Endorsements</span>
            </div>
            <h2 className="section-title">
              What Our Clients Say
            </h2>
            <p className="section-subtitle">
              Read how enterprise executives trust AdoraTech as their ongoing IT managed services, cloud, and cybersecurity ally.
            </p>
          </div>

          {/* 3 Testimonials Grid */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', 
              gap: '28px' 
            }}
          >
            {TESTIMONIALS.map((t, idx) => (
              <div 
                key={idx}
                className="clean-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '32px 28px',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid #E5E7EB',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  {/* Rating Stars */}
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p style={{ fontSize: '0.98rem', color: '#1F2937', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '24px' }}>
                    “{t.text}”
                  </p>
                </div>

                {/* Author Info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingTop: '18px', borderTop: '1px solid #E5E7EB' }}>
                  <img 
                    src={t.avatar} 
                    alt={t.name}
                    style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #BFDBFE' }}
                  />
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0B1F3A' }}>
                      {t.name}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#4B5563' }}>
                      {t.role}, <strong style={{ color: '#2F6FED' }}>{t.company}</strong>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================================================================
          8. CALL-TO-ACTION (CTA) SECTION
          =================================================================== */}
      <section 
        style={{ 
          backgroundColor: '#0B1F3A', 
          color: '#FFFFFF', 
          padding: 'clamp(64px, 8vw, 100px) 0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Subtle geometric background overlay */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(47, 111, 237, 0.25) 0%, transparent 60%)',
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#60A5FA',
                fontSize: '0.84rem',
                fontWeight: 700,
                marginBottom: '20px'
              }}
            >
              <ShieldCheck size={16} />
              <span>Free 30-Minute Architecture & Security Review</span>
            </div>

            <h2 
              style={{ 
                fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', 
                fontWeight: 900, 
                lineHeight: 1.18, 
                marginBottom: '20px',
                color: '#FFFFFF',
                letterSpacing: '-0.03em'
              }}
            >
              Ready to modernize your IT infrastructure?
            </h2>

            <p 
              style={{ 
                fontSize: 'clamp(1.05rem, 1.8vw, 1.22rem)', 
                color: '#94A3B8', 
                lineHeight: 1.7, 
                marginBottom: '36px',
                maxWidth: '680px',
                margin: '0 auto 36px auto'
              }}
            >
              Schedule a consultation with our Principal IT Architects. We will review your current infrastructure, identify security vulnerabilities, and outline a realistic roadmap to support your business expansion.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setActivePage('contact')}
                className="btn btn-primary"
                style={{ 
                  padding: '16px 38px', 
                  fontSize: '1.05rem', 
                  backgroundColor: '#2F6FED',
                  color: '#FFFFFF',
                  boxShadow: '0 10px 30px rgba(47, 111, 237, 0.45)'
                }}
                id="cta-get-consultation-btn"
              >
                <span>Get a Consultation</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={onOpenEstimator}
                className="btn btn-secondary"
                style={{ 
                  padding: '16px 32px', 
                  fontSize: '1.05rem',
                  backgroundColor: '#FFFFFF',
                  color: '#0B1F3A'
                }}
              >
                <Calendar size={18} color="#2F6FED" />
                <span>Estimate Project Cost</span>
              </button>
            </div>

            <div style={{ marginTop: '28px', fontSize: '0.85rem', color: '#94A3B8' }}>
              No obligation • Mutual NDA signed upon request • Sub-1 business day response
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          9. BLOG PREVIEW (3 LATEST ARTICLES)
          =================================================================== */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          
          <div className="section-header">
            <div className="section-badge">
              <span className="section-badge-dot" />
              <span>Knowledge Base & Insights</span>
            </div>
            <h2 className="section-title">
              Latest Technology Insights
            </h2>
            <p className="section-subtitle">
              Practical guides, cloud migration playbooks, and cybersecurity blueprints written directly by our technical leadership.
            </p>
          </div>

          {/* 3 Blog Cards */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', 
              gap: '30px' 
            }}
          >
            {latestPosts.map((post) => (
              <div 
                key={post.id}
                className="clean-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                {/* Article Image & Category Badge */}
                <div style={{ position: 'relative', height: '190px', overflow: 'hidden' }}>
                  <img 
                    src={post.image} 
                    alt={post.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div 
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: '#2F6FED',
                      color: '#FFFFFF',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}
                  >
                    {post.category}
                  </div>
                </div>

                {/* Article Body */}
                <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#6B7280', marginBottom: '8px' }}>
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span>{post.publishDate}</span>
                    </div>

                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0B1F3A', marginBottom: '10px', lineHeight: 1.38 }}>
                      {post.title}
                    </h3>

                    <p style={{ fontSize: '0.9rem', color: '#4B5563', lineHeight: 1.6, marginBottom: '20px' }}>
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <div style={{ paddingTop: '16px', borderTop: '1px solid #E5E7EB', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <img 
                        src={post.author.avatar} 
                        alt={post.author.name}
                        style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }}
                      />
                      <span style={{ fontSize: '0.84rem', fontWeight: 600, color: '#1F2937' }}>
                        {post.author.name}
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectBlogPost && onSelectBlogPost(post)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#2F6FED',
                        fontWeight: 700,
                        fontSize: '0.88rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        cursor: 'pointer'
                      }}
                    >
                      <span>Read More</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Blog Posts Link */}
          <div style={{ textAlign: 'center', marginTop: '44px' }}>
            <button
              onClick={() => {
                setActivePage('blog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn btn-secondary"
              style={{ padding: '12px 28px', fontSize: '0.95rem', border: '1px solid #D1D5DB' }}
            >
              <span>View All Insights & Articles</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
