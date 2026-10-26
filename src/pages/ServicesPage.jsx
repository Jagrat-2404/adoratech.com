import React, { useState } from 'react';
import { 
  Server, 
  Cloud, 
  ShieldCheck, 
  Code2, 
  Lightbulb, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  Check, 
  Layers, 
  Zap, 
  HelpCircle,
  Calendar,
  Sparkles
} from 'lucide-react';
import { CORE_SERVICES, PROCESS_STEPS, FAQ_ITEMS } from '../data/mockData';

export default function ServicesPage({ 
  setActivePage, 
  onOpenEstimator, 
  onSelectServiceForContact 
}) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'managed-it', label: 'Managed IT' },
    { id: 'cloud-solutions', label: 'Cloud Solutions' },
    { id: 'cybersecurity', label: 'Cybersecurity' },
    { id: 'software-development', label: 'Software Dev' },
    { id: 'it-consulting', label: 'IT Consulting' },
    { id: 'data-analytics', label: 'Data & Analytics' }
  ];

  const filteredServices = activeCategory === 'all' 
    ? CORE_SERVICES 
    : CORE_SERVICES.filter(s => s.id === activeCategory);

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Server': return <Server size={30} color="#2F6FED" />;
      case 'Cloud': return <Cloud size={30} color="#2F6FED" />;
      case 'ShieldCheck': return <ShieldCheck size={30} color="#2F6FED" />;
      case 'Code2': return <Code2 size={30} color="#2F6FED" />;
      case 'Lightbulb': return <Lightbulb size={30} color="#2F6FED" />;
      case 'BarChart3': return <BarChart3 size={30} color="#2F6FED" />;
      default: return <Server size={30} color="#2F6FED" />;
    }
  };

  const handleRequestService = (serviceTitle) => {
    if (onSelectServiceForContact) {
      onSelectServiceForContact(serviceTitle);
    }
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? -1 : idx);
  };

  return (
    <div style={{ position: 'relative' }}>
      
      {/* ===================================================================
          1. SERVICES PAGE HERO
          =================================================================== */}
      <section 
        className="section-hero"
        style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E5E7EB',
          paddingTop: 'clamp(90px, 11vw, 130px)',
          paddingBottom: 'clamp(50px, 7vw, 80px)',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '880px', margin: '0 auto' }}>
            <div className="section-badge">
              <span className="section-badge-dot" />
              <span>Enterprise IT Services</span>
            </div>

            {/* Exact Hero Headline */}
            <h1 
              style={{ 
                fontSize: 'clamp(2.4rem, 4.4vw, 3.8rem)', 
                fontWeight: 800, 
                lineHeight: 1.15, 
                marginBottom: '22px',
                color: '#0B1F3A',
                letterSpacing: '-0.035em'
              }}
            >
              End-to-End IT Services for Modern Businesses
            </h1>

            <p style={{ fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)', color: '#4B5563', lineHeight: 1.7, marginBottom: '36px' }}>
              We deliver managed IT support, multi-cloud migrations, zero-trust cybersecurity, and custom engineering designed to scale frictionlessly as your company grows.
            </p>

            {/* Category Filter Chips */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    style={{
                      padding: '8px 18px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.88rem',
                      fontWeight: isActive ? 700 : 600,
                      backgroundColor: isActive ? '#0B1F3A' : '#F5F7FA',
                      color: isActive ? '#FFFFFF' : '#4B5563',
                      border: isActive ? '1px solid #0B1F3A' : '1px solid #E5E7EB',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          2. DETAILED SERVICE SECTIONS / CARDS (ALL 6 SERVICES)
          =================================================================== */}
      <section className="section" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="container">
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {filteredServices.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={service.id}
                  id={service.id}
                  className="clean-card"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid #E5E7EB',
                    padding: 'clamp(28px, 4vw, 44px)',
                    boxShadow: '0 10px 30px rgba(11, 31, 58, 0.05)'
                  }}
                >
                  <div 
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
                      gap: 'clamp(30px, 4vw, 48px)',
                      alignItems: 'center'
                    }}
                  >
                    {/* Column 1: Info, Features & Request Button */}
                    <div style={{ order: isEven ? 1 : 2 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                        <div 
                          style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '14px',
                            backgroundColor: '#EEF4FE',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          {getServiceIcon(service.icon)}
                        </div>
                        <div>
                          <span 
                            style={{
                              fontSize: '0.74rem',
                              fontWeight: 700,
                              color: '#2F6FED',
                              textTransform: 'uppercase',
                              letterSpacing: '0.06em'
                            }}
                          >
                            {service.badge}
                          </span>
                          <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0B1F3A', margin: 0 }}>
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <p style={{ fontSize: '1.02rem', color: '#374151', lineHeight: 1.7, marginBottom: '22px' }}>
                        {service.longDesc}
                      </p>

                      {/* Key Features (6 bullets) */}
                      <div style={{ marginBottom: '26px' }}>
                        <h4 style={{ fontSize: '0.94rem', fontWeight: 800, color: '#0B1F3A', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>
                          Key Service Features
                        </h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '10px' }}>
                          {service.keyFeatures.map((feat, fIdx) => (
                            <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: '#1F2937' }}>
                              <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: '3px' }} />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies / Tools Tags */}
                      <div style={{ marginBottom: '28px' }}>
                        <h4 style={{ fontSize: '0.86rem', fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                          Technologies & Frameworks
                        </h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                          {service.techStack.map((tech, tIdx) => (
                            <span 
                              key={tIdx}
                              style={{
                                padding: '4px 12px',
                                backgroundColor: '#F5F7FA',
                                border: '1px solid #E5E7EB',
                                borderRadius: '6px',
                                fontSize: '0.82rem',
                                color: '#1F2937',
                                fontWeight: 600
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Mandatory "Request a Service" Button */}
                      <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                        <button
                          onClick={() => handleRequestService(service.title)}
                          className="btn btn-primary"
                          style={{
                            padding: '13px 28px',
                            backgroundColor: '#2F6FED',
                            color: '#FFFFFF',
                            fontSize: '0.95rem'
                          }}
                          id={`btn-request-${service.id}`}
                        >
                          <span>Request a Service</span>
                          <ArrowRight size={16} />
                        </button>

                        <button
                          onClick={onOpenEstimator}
                          className="btn btn-secondary"
                          style={{
                            padding: '13px 22px',
                            fontSize: '0.92rem',
                            border: '1px solid #D1D5DB',
                            color: '#0B1F3A'
                          }}
                        >
                          <Calendar size={15} color="#2F6FED" />
                          <span>Estimate Costs</span>
                        </button>
                      </div>
                    </div>

                    {/* Column 2: Service Deliverables & SLA Card */}
                    <div style={{ order: isEven ? 2 : 1 }}>
                      <div 
                        style={{
                          backgroundColor: '#F5F7FA',
                          border: '1px solid #E5E7EB',
                          borderRadius: 'var(--radius-lg)',
                          padding: '30px 26px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '20px'
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '14px', borderBottom: '1px solid #E5E7EB' }}>
                          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#6B7280', textTransform: 'uppercase' }}>Engagement Tier</span>
                          <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0B1F3A' }}>Dedicated Squad</span>
                        </div>

                        <div>
                          <div style={{ fontSize: '0.8rem', color: '#6B7280', fontWeight: 600 }}>Expected Rollout SLA</div>
                          <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0B1F3A', marginTop: '2px' }}>{service.typicalTimeline}</div>
                        </div>

                        <div>
                          <div style={{ fontSize: '0.8rem', color: '#6B7280', fontWeight: 600 }}>Standard Deliverables</div>
                          <div style={{ fontSize: '0.92rem', color: '#374151', marginTop: '4px', lineHeight: 1.5 }}>
                            {service.deliverables}
                          </div>
                        </div>

                        {/* Recent Impact Snippet */}
                        <div 
                          style={{
                            backgroundColor: '#FFFFFF',
                            border: '1px solid #E5E7EB',
                            borderRadius: '8px',
                            padding: '16px',
                            borderLeft: '4px solid #2F6FED'
                          }}
                        >
                          <div style={{ fontSize: '0.78rem', color: '#2F6FED', fontWeight: 700, textTransform: 'uppercase' }}>Verified Client Result</div>
                          <div style={{ fontSize: '0.88rem', color: '#1F2937', marginTop: '4px', fontStyle: 'italic', lineHeight: 1.5 }}>
                            “{service.caseSnippet}”
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#10B981', fontWeight: 700 }}>
                          <CheckCircle2 size={16} />
                          <span>Includes 24/7 Tier-3 Response SLA</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ===================================================================
          3. OUR PROCESS (4 STEPS: DISCOVER, PLAN, IMPLEMENT, SUPPORT)
          =================================================================== */}
      <section className="section" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
        <div className="container">
          
          <div className="section-header">
            <div className="section-badge">
              <span className="section-badge-dot" />
              <span>Proven Methodology</span>
            </div>
            <h2 className="section-title">
              Our 4-Step Engineering Process
            </h2>
            <p className="section-subtitle">
              Every project follows an audited, repeatable lifecycle to eliminate surprises, ensure compliance, and achieve zero downtime.
            </p>
          </div>

          {/* 4 Process Cards */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', 
              gap: '24px' 
            }}
          >
            {PROCESS_STEPS.map((step, idx) => (
              <div 
                key={idx}
                className="clean-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '32px 24px',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid #E5E7EB',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}
              >
                <div>
                  <div 
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      backgroundColor: '#EEF4FE',
                      color: '#2F6FED',
                      fontSize: '1.2rem',
                      fontWeight: 900,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                      fontFamily: 'var(--font-heading)',
                      border: '1px solid #BFDBFE'
                    }}
                  >
                    {step.step}
                  </div>

                  <span 
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#2F6FED',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      display: 'block',
                      marginBottom: '6px'
                    }}
                  >
                    Phase {step.step}: {step.name}
                  </span>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0B1F3A', marginBottom: '14px' }}>
                    {step.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: '#4B5563', lineHeight: 1.65, margin: 0 }}>
                    {step.desc}
                  </p>
                </div>

                <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', gap: '6px', color: '#10B981', fontSize: '0.84rem', fontWeight: 600 }}>
                  <CheckCircle2 size={16} />
                  <span>Quality Gated</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================================================================
          4. FAQ ACCORDION (5 COMMON QUESTIONS)
          =================================================================== */}
      <section className="section" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="container">
          
          <div className="section-header">
            <div className="section-badge">
              <span className="section-badge-dot" />
              <span>Got Questions?</span>
            </div>
            <h2 className="section-title">
              Frequently Asked Questions
            </h2>
            <p className="section-subtitle">
              Straightforward answers regarding our engagement models, security standards, and onboarding timelines.
            </p>
          </div>

          {/* Accordion container */}
          <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  className="clean-card"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: 'var(--radius-md)',
                    border: isOpen ? '1px solid #2F6FED' : '1px solid #E5E7EB',
                    overflow: 'hidden',
                    transition: 'border-color 0.2s ease'
                  }}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer'
                    }}
                  >
                    <span style={{ fontSize: '1.05rem', fontWeight: 700, color: isOpen ? '#2F6FED' : '#0B1F3A', paddingRight: '16px' }}>
                      {item.question}
                    </span>
                    <div 
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: isOpen ? '#EEF4FE' : '#F5F7FA',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      {isOpen ? <ChevronUp size={18} color="#2F6FED" /> : <ChevronDown size={18} color="#6B7280" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 24px 22px 24px', color: '#4B5563', fontSize: '0.96rem', lineHeight: 1.7, borderTop: '1px solid #F5F7FA' }}>
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ===================================================================
          5. FINAL SERVICES CTA SECTION
          =================================================================== */}
      <section 
        style={{ 
          backgroundColor: '#0B1F3A', 
          color: '#FFFFFF', 
          padding: 'clamp(60px, 8vw, 90px) 0',
          textAlign: 'center' 
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            
            <h2 
              style={{ 
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', 
                fontWeight: 900, 
                lineHeight: 1.2, 
                marginBottom: '20px',
                color: '#FFFFFF',
                letterSpacing: '-0.03em'
              }}
            >
              Need a custom IT solution? Talk to our experts.
            </h2>

            <p style={{ fontSize: '1.15rem', color: '#94A3B8', lineHeight: 1.7, marginBottom: '36px' }}>
              Whether you need 24/7 managed helpdesk, full cloud migration, SOC 2 compliance readiness, or custom software development, our senior architects will construct a proposal tailored to your commercial objectives.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setActivePage('contact')}
                className="btn btn-primary"
                style={{ padding: '16px 36px', fontSize: '1.05rem', backgroundColor: '#2F6FED', color: '#FFFFFF' }}
              >
                <span>Get a Consultation</span>
                <ArrowRight size={18} />
              </button>
              <button
                onClick={onOpenEstimator}
                className="btn btn-secondary"
                style={{ padding: '16px 30px', fontSize: '1.05rem', backgroundColor: '#FFFFFF', color: '#0B1F3A' }}
              >
                <Calendar size={18} color="#2F6FED" />
                <span>Calculate Project Timeline</span>
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
