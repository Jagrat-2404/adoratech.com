import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  Terminal, 
  Users, 
  Globe2, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Lock, 
  Zap, 
  Target
} from 'lucide-react';
import { COMPANY_INFO, TEAM_MEMBERS, MILESTONES, GLOBAL_OFFICES } from '../data/mockData';
import ModernCard from '../components/ModernCard';

export default function AboutPage({ setActivePage, onOpenEstimator }) {
  const [selectedMilestone, setSelectedMilestone] = useState(MILESTONES[MILESTONES.length - 1].year);

  const coreValues = [
    {
      icon: <Terminal size={24} color="var(--primary)" />,
      title: "Engineering Rigor & Clean Code",
      desc: "We write maintainable, self-documenting code with strict automated type safety, 85%+ test coverage, and continuous SAST vulnerability screening."
    },
    {
      icon: <Target size={24} color="var(--accent-indigo)" />,
      title: "Extreme Product Ownership",
      desc: "We do not simply build tickets; we challenge assumptions, optimize unit economics, and ensure every feature contributes directly to business growth."
    },
    {
      icon: <Lock size={24} color="var(--accent-emerald)" />,
      title: "Security-First DNA",
      desc: "Compliance and zero-trust security are built into the initial architectural blueprint, not patched on as an afterthought before launch."
    },
    {
      icon: <Zap size={24} color="var(--accent-cyan)" />,
      title: "Predictable Sprint Velocity",
      desc: "Bi-weekly agile sprint cadences with verifiable staging releases every 14 days, complete transparency, and zero surprise cost overruns."
    }
  ];

  return (
    <div style={{ position: 'relative' }}>
      
      {/* ===================================================================
          1. ABOUT HERO
          =================================================================== */}
      <section className="section-hero">
        <div className="container">
          <div style={{ maxWidth: '1240px', margin: '0 auto', textAlign: 'center' }}>
            <div className="section-badge">
              <span className="section-badge-dot" />
              <span>Our Mission & Architectural Pedigree</span>
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
              Architecting High-Scale Systems for the{' '}
              <span className="text-gradient-brand">World's Most Ambitious Brands</span>
            </h1>

            <p style={{ fontSize: '1.2rem', color: 'var(--text-body)', lineHeight: 1.8, marginBottom: '36px' }}>
              Founded in 2018 in San Francisco, AdoraTech was established with a singular conviction: enterprises deserve senior-only software engineering partners who treat code quality as an immutable art and delivery timelines as sacred commitments.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button 
                onClick={() => setActivePage('services')} 
                className="btn btn-primary"
                style={{ padding: '14px 30px' }}
              >
                <span>View Engineering Capabilities</span>
                <ArrowRight size={17} />
              </button>
              <button 
                onClick={() => setActivePage('contact')} 
                className="btn btn-secondary"
                style={{ padding: '14px 28px' }}
              >
                <span>Meet Our Architects</span>
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* ===================================================================
          2. COMPANY STORY & FOUNDING MANIFESTO
          =================================================================== */}
      <section className="section" style={{ background: 'var(--bg-subtle)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(28px, 4vw, 60px)', alignItems: 'center' }}>
            
            <div>
              <div className="section-badge">
                <Sparkles size={14} color="var(--primary)" />
                <span>The AdoraTech Standard</span>
              </div>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '20px', color: 'var(--text-main)' }}>
                Why Traditional IT Agencies Fail Modern Enterprises
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--text-body)', fontSize: '1.02rem', lineHeight: 1.75 }}>
                <p>
                  Too many traditional IT agencies pitch senior partners during sales meetings, only to quietly offshore delivery to inexperienced junior contractors. The consequence? Fragile architectures, bloated dependencies, and crippling technical debt.
                </p>
                <p>
                  At AdoraTech, we inverted this model. We deploy compact, elite squads composed exclusively of Senior Engineers, Staff Architects, and certified Cloud Specialists.
                </p>
                <p>
                  Whether deploying sub-second React 19 web applications, native cross-platform mobile apps, or autonomous LLM pipelines, we guarantee 100% intellectual property ownership, zero vendor lock-in, and military-grade security.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))', gap: '18px', marginTop: '30px' }}>
                <div style={{ padding: '20px', background: '#ffffff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-xs)' }}>
                  <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary)' }}>60+</div>
                  <div style={{ fontSize: '0.84rem', color: 'var(--text-main)', fontWeight: 600 }}>Senior Full-Time Engineers</div>
                </div>
                <div style={{ padding: '20px', background: '#ffffff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-xs)' }}>
                  <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--accent-emerald)' }}>99.4%</div>
                  <div style={{ fontSize: '0.84rem', color: 'var(--text-main)', fontWeight: 600 }}>Client Contract Retention</div>
                </div>
              </div>
            </div>

            {/* Architecture Manifesto Card */}
            <div 
              className="clean-card"
              style={{
                padding: 'clamp(22px, 4vw, 42px)',
                background: '#ffffff',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '22px', color: 'var(--text-main)' }}>
                Our 5 Engineering Tenets
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { title: "No Junior Offshoring", text: "Every line of code is written and reviewed by senior engineers with 7+ years of industry experience." },
                  { title: "Deterministic Performance", text: "We enforce strict Lighthouse 95+ scores and sub-250ms backend response latency SLAs." },
                  { title: "Immutable Architecture as Code", text: "100% reproducible environments via Terraform, Docker, and Kubernetes GitOps." },
                  { title: "Zero Lock-In Guarantee", text: "You own all code, repositories, documentation, and cloud infrastructure from day one." },
                  { title: "Continuous Automated Verification", text: "Every pull request triggers SAST security scans, unit tests, and end-to-end regression suites." }
                ].map((tenet, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '12px' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--primary-light)', border: '1px solid #bfdbfe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <CheckCircle2 size={16} color="var(--primary)" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.96rem', color: 'var(--text-main)' }}>{tenet.title}</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{tenet.text}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>


      {/* ===================================================================
          3. CORE VALUES
          =================================================================== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Zap size={15} color="var(--primary)" />
              <span>Guiding Principles</span>
            </div>
            <h2 className="section-title">Values That Define Every Sprint</h2>
            <p className="section-subtitle">
              We operate with obsessive technical standards, extreme transparency, and relentless empathy for the end user.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '26px' }}>
            {coreValues.map((val, idx) => (
              <ModernCard 
                key={idx}
                className="clean-card"
                style={{ padding: '34px', background: '#ffffff' }}
              >
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
                    marginBottom: '20px'
                  }}
                >
                  {val.icon}
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '12px', color: 'var(--text-main)' }}>
                  {val.title}
                </h3>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-body)', lineHeight: 1.7 }}>
                  {val.desc}
                </p>
              </ModernCard>
            ))}
          </div>
        </div>
      </section>


      {/* ===================================================================
          4. INTERACTIVE MILESTONES TIMELINE
          =================================================================== */}
      <section className="section" style={{ background: 'var(--bg-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Sparkles size={15} color="var(--primary)" />
              <span>Historical Growth</span>
            </div>
            <h2 className="section-title">The AdoraTech Journey</h2>
            <p className="section-subtitle">
              From a two-person systems engineering studio to an international IT delivery powerhouse.
            </p>
          </div>

          {/* Timeline Year Selectors */}
          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '12px', 
              flexWrap: 'wrap',
              marginBottom: '40px'
            }}
          >
            {MILESTONES.map((m) => {
              const isSelected = selectedMilestone === m.year;
              return (
                <button
                  key={m.year}
                  onClick={() => setSelectedMilestone(m.year)}
                  style={{
                    padding: '10px 24px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '1rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-heading)',
                    background: isSelected ? 'var(--grad-brand)' : '#ffffff',
                    color: isSelected ? '#ffffff' : 'var(--text-main)',
                    border: '1px solid ' + (isSelected ? 'transparent' : 'var(--border-light)'),
                    boxShadow: isSelected ? 'var(--shadow-brand)' : 'var(--shadow-xs)',
                    transition: 'all var(--transition)'
                  }}
                >
                  {m.year}
                </button>
              );
            })}
          </div>

          {/* Milestone Details Card */}
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            {MILESTONES.map((m) => {
              if (m.year !== selectedMilestone) return null;
              return (
                <div 
                  key={m.year}
                  className="clean-card"
                  style={{
                    padding: '44px',
                    textAlign: 'center',
                    background: '#ffffff',
                    border: '1px solid var(--border-light)',
                    boxShadow: 'var(--shadow-lg)'
                  }}
                >
                  <div style={{ fontSize: '3.2rem', fontWeight: 800, fontFamily: 'var(--font-heading)', marginBottom: '8px' }} className="text-gradient-brand">
                    {m.year}
                  </div>
                  <h3 style={{ fontSize: '1.65rem', fontWeight: 800, marginBottom: '16px', color: 'var(--text-main)' }}>
                    {m.title}
                  </h3>
                  <p style={{ fontSize: '1.08rem', color: 'var(--text-body)', lineHeight: 1.8, maxWidth: '620px', margin: '0 auto' }}>
                    {m.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ===================================================================
          5. LEADERSHIP & TECHNICAL ARCHITECTS
          =================================================================== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Users size={15} color="var(--primary)" />
              <span>World-Class Talent</span>
            </div>
            <h2 className="section-title">Leadership & Staff Architects</h2>
            <p className="section-subtitle">
              Headed by former Silicon Valley founders, distributed systems researchers, and cybersecurity pioneers.
            </p>
          </div>

          <div className="grid-cards-3x2" style={{ marginBottom: '40px' }}>
            {TEAM_MEMBERS.map((member, idx) => (
              <ModernCard 
                key={idx}
                className="clean-card"
                style={{ 
                  padding: '32px 28px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between', 
                  height: '100%',
                  background: '#ffffff' 
                }}
              >
                <div>
                  {/* Top Avatar & Location */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', minHeight: '56px' }}>
                    <div 
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--grad-brand)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        fontWeight: 800,
                        fontSize: '1.25rem',
                        boxShadow: 'var(--shadow-brand)',
                        flexShrink: 0
                      }}
                    >
                      {member.avatar}
                    </div>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                      📍 {member.location}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '4px', minHeight: '1.8rem' }}>
                    {member.name}
                  </h3>

                  {/* Role */}
                  <div style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 700, marginBottom: '14px', minHeight: '2.8rem', display: 'flex', alignItems: 'flex-start' }}>
                    {member.role}
                  </div>

                  {/* Bio */}
                  <p style={{ fontSize: '0.94rem', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: '20px', minHeight: '5rem', display: 'flex', alignItems: 'flex-start' }}>
                    {member.bio}
                  </p>
                </div>

                {/* Specialties */}
                <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-light)', display: 'flex', flexWrap: 'wrap', gap: '6px', minHeight: '44px', alignItems: 'center', marginTop: 'auto' }}>
                  {member.specialties.map((spec, sIdx) => (
                    <span 
                      key={sIdx}
                      style={{
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--bg-subtle)',
                        fontSize: '0.78rem',
                        color: 'var(--text-main)',
                        border: '1px solid var(--border-light)',
                        fontWeight: 600
                      }}
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </ModernCard>
            ))}
          </div>

        </div>
      </section>


      {/* ===================================================================
          6. GLOBAL HUBS & ACCREDITATIONS
          =================================================================== */}
      <section className="section" style={{ background: 'var(--bg-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Globe2 size={15} color="var(--primary)" />
              <span>Global Presence</span>
            </div>
            <h2 className="section-title">San Francisco • London • Singapore</h2>
            <p className="section-subtitle">
              With offices spanning three major global financial centers, our distributed teams provide seamless timezone coverage for clients across North America, Europe, and Asia-Pacific.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '26px' }}>
            {GLOBAL_OFFICES.map((office, idx) => (
              <div 
                key={idx}
                className="clean-card"
                style={{ padding: '34px', background: '#ffffff' }}
              >
                <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                  {office.tag}
                </div>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, marginBottom: '12px', color: 'var(--text-main)' }}>
                  {office.city}
                </h3>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-body)', marginBottom: '16px', lineHeight: 1.6 }}>
                  {office.address}
                  <br />
                  {office.postal}, {office.country}
                </p>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  Direct Phone: <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{office.phone}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Career CTA */}
          <div 
            style={{
              marginTop: '60px',
              padding: 'clamp(24px, 4.5vw, 44px)',
              borderRadius: 'var(--radius-xl)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 60%, #1e3a8a 100%)',
              color: '#ffffff',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '8px', color: '#ffffff' }}>
                Join the Top 1% of Software Craftsmen
              </h3>
              <p style={{ fontSize: '0.96rem', color: '#cbd5e1', margin: 0 }}>
                We are constantly looking for exceptional distributed systems engineers, React core specialists, and AI researchers.
              </p>
            </div>
            <button
              onClick={() => setActivePage('contact')}
              className="btn btn-primary"
              style={{ padding: '14px 28px' }}
            >
              <span>Explore Open Roles</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
