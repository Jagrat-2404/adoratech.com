import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  Users, 
  Globe2, 
  ArrowRight, 
  CheckCircle2, 
  Lightbulb, 
  Lock, 
  Search, 
  TrendingUp,
  Server,
  Cloud,
  Check,
  Calendar,
  ExternalLink
} from 'lucide-react';
import { 
  COMPANY_INFO, 
  CORE_VALUES, 
  MILESTONES, 
  TEAM_MEMBERS, 
  PARTNERSHIPS_AND_CERTS 
} from '../data/mockData';

export default function AboutPage({ setActivePage, onOpenEstimator }) {
  const [selectedMilestone, setSelectedMilestone] = useState(MILESTONES[MILESTONES.length - 1].year);

  const getValueIcon = (iconName) => {
    switch (iconName) {
      case 'Lightbulb': return <Lightbulb size={24} color="#2F6FED" />;
      case 'ShieldCheck': return <ShieldCheck size={24} color="#2F6FED" />;
      case 'CheckCircle2': return <CheckCircle2 size={24} color="#2F6FED" />;
      case 'Search': return <Search size={24} color="#2F6FED" />;
      case 'TrendingUp': return <TrendingUp size={24} color="#2F6FED" />;
      default: return <CheckCircle2 size={24} color="#2F6FED" />;
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      
      {/* ===================================================================
          1. ABOUT PAGE HERO
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
              <span>About AdoraTech</span>
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
              We Help Businesses Build Smarter, Safer Technology
            </h1>

            <p style={{ fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)', color: '#4B5563', lineHeight: 1.7, marginBottom: '34px' }}>
              For over 15+ years, AdoraTech has provided forward-thinking organizations with dedicated managed IT operations, mission-critical cloud migrations, and ironclad cybersecurity. We turn technology from an operational friction into a secure growth engine.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button 
                onClick={() => setActivePage('contact')} 
                className="btn btn-primary"
                style={{ padding: '14px 32px', backgroundColor: '#2F6FED', color: '#FFFFFF' }}
              >
                <span>Get a Consultation</span>
                <ArrowRight size={17} />
              </button>
              <button 
                onClick={() => setActivePage('services')} 
                className="btn btn-secondary"
                style={{ padding: '14px 28px', border: '1px solid #D1D5DB', color: '#0B1F3A' }}
              >
                <span>Explore Services</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          2. COMPANY INTRODUCTION: MISSION, VISION & STORY
          =================================================================== */}
      <section className="section" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="container">
          
          <div className="section-header">
            <div className="section-badge">
              <span className="section-badge-dot" />
              <span>Our Foundation</span>
            </div>
            <h2 className="section-title">
              Built on Engineering Integrity & Trust
            </h2>
            <p className="section-subtitle">
              Learn about our origin, our guiding purpose, and the commitments we make to every client we serve.
            </p>
          </div>

          {/* 3 Introduction Cards (Mission, Vision, Company Story) */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', 
              gap: '28px' 
            }}
          >
            {/* Mission */}
            <div 
              className="clean-card"
              style={{
                backgroundColor: '#FFFFFF',
                padding: '36px 30px',
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
                  <ShieldCheck size={26} color="#2F6FED" />
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0B1F3A', marginBottom: '14px' }}>
                  Our Mission
                </h3>
                <p style={{ fontSize: '0.96rem', color: '#4B5563', lineHeight: 1.7 }}>
                  To empower growing organizations with dependable, high-performance IT solutions, proactive cybersecurity defense, and custom systems that transform technology into a reliable engine for commercial expansion.
                </p>
              </div>
              <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #E5E7EB', color: '#2F6FED', fontWeight: 700, fontSize: '0.88rem' }}>
                Delivering 99.9% Uptime SLA
              </div>
            </div>

            {/* Vision */}
            <div 
              className="clean-card"
              style={{
                backgroundColor: '#FFFFFF',
                padding: '36px 30px',
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
                  <TrendingUp size={26} color="#2F6FED" />
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0B1F3A', marginBottom: '14px' }}>
                  Our Vision
                </h3>
                <p style={{ fontSize: '0.96rem', color: '#4B5563', lineHeight: 1.7 }}>
                  To be the most trusted global enterprise IT and managed services partner, recognized by industry leaders for absolute architectural standards, total billing transparency, and relentless client success.
                </p>
              </div>
              <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #E5E7EB', color: '#2F6FED', fontWeight: 700, fontSize: '0.88rem' }}>
                Partnering for the Long Term
              </div>
            </div>

            {/* Company Story */}
            <div 
              className="clean-card"
              style={{
                backgroundColor: '#FFFFFF',
                padding: '36px 30px',
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
                  <Award size={26} color="#2F6FED" />
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0B1F3A', marginBottom: '14px' }}>
                  Our Story
                </h3>
                <p style={{ fontSize: '0.96rem', color: '#4B5563', lineHeight: 1.7 }}>
                  Founded in 2011 in San Francisco, AdoraTech was established by senior infrastructure engineers frustrated by traditional break-fix vendors. Over 15+ years, we grew into a full-lifecycle partner managing 250+ enterprise rollouts for 120+ clients.
                </p>
              </div>
              <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #E5E7EB', color: '#2F6FED', fontWeight: 700, fontSize: '0.88rem' }}>
                15+ Years of Proven Excellence
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================
          3. CORE VALUES (INNOVATION, SECURITY, RELIABILITY, TRANSPARENCY, CLIENT SUCCESS)
          =================================================================== */}
      <section className="section" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
        <div className="container">
          
          <div className="section-header">
            <div className="section-badge">
              <span className="section-badge-dot" />
              <span>What We Stand For</span>
            </div>
            <h2 className="section-title">
              Our 5 Core Values
            </h2>
            <p className="section-subtitle">
              These principles guide every architectural recommendation, support ticket resolution, and client engagement.
            </p>
          </div>

          {/* 5 Core Values Grid */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', 
              gap: '24px' 
            }}
          >
            {CORE_VALUES.map((val, idx) => (
              <div 
                key={idx}
                className="clean-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '28px 24px',
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
                      width: '48px',
                      height: '48px',
                      borderRadius: '10px',
                      backgroundColor: '#EEF4FE',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '18px'
                    }}
                  >
                    {getValueIcon(val.icon)}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0B1F3A', marginBottom: '12px' }}>
                    {val.name}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#4B5563', lineHeight: 1.65, margin: 0 }}>
                    {val.desc}
                  </p>
                </div>
                <div style={{ marginTop: '20px', paddingTop: '14px', borderTop: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', gap: '6px', color: '#10B981', fontSize: '0.82rem', fontWeight: 700 }}>
                  <Check size={14} />
                  <span>Non-Negotiable Standard</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================================================================
          4. COMPANY TIMELINE & MILESTONES
          =================================================================== */}
      <section className="section" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="container">
          
          <div className="section-header">
            <div className="section-badge">
              <span className="section-badge-dot" />
              <span>Historical Milestones</span>
            </div>
            <h2 className="section-title">
              Our Journey Over 15+ Years
            </h2>
            <p className="section-subtitle">
              From our 2011 founding to global 24/7 security hubs, follow how AdoraTech continuously adapted to the evolving enterprise landscape.
            </p>
          </div>

          {/* Interactive Timeline Tabs */}
          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '8px', 
              flexWrap: 'wrap', 
              marginBottom: '36px' 
            }}
          >
            {MILESTONES.map((m) => {
              const isSelected = selectedMilestone === m.year;
              return (
                <button
                  key={m.year}
                  onClick={() => setSelectedMilestone(m.year)}
                  style={{
                    padding: '10px 22px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    backgroundColor: isSelected ? '#0B1F3A' : '#FFFFFF',
                    color: isSelected ? '#FFFFFF' : '#4B5563',
                    border: isSelected ? '1px solid #0B1F3A' : '1px solid #D1D5DB',
                    boxShadow: isSelected ? '0 4px 12px rgba(11, 31, 58, 0.2)' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {m.year}
                </button>
              );
            })}
          </div>

          {/* Detailed Milestone Grid Cards */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', 
              gap: '24px' 
            }}
          >
            {MILESTONES.map((milestone) => {
              const isHighlighted = selectedMilestone === milestone.year;
              return (
                <div 
                  key={milestone.year}
                  className="clean-card"
                  style={{
                    backgroundColor: '#FFFFFF',
                    padding: '28px',
                    borderRadius: 'var(--radius-lg)',
                    border: isHighlighted ? '2px solid #2F6FED' : '1px solid #E5E7EB',
                    boxShadow: isHighlighted ? '0 12px 30px rgba(47, 111, 237, 0.15)' : 'var(--shadow-sm)',
                    position: 'relative',
                    transition: 'all 0.25s ease'
                  }}
                  onClick={() => setSelectedMilestone(milestone.year)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <span 
                      style={{ 
                        fontSize: '1.4rem', 
                        fontWeight: 900, 
                        color: isHighlighted ? '#2F6FED' : '#0B1F3A',
                        fontFamily: 'var(--font-heading)'
                      }}
                    >
                      {milestone.year}
                    </span>
                    {isHighlighted && (
                      <span style={{ fontSize: '0.74rem', backgroundColor: '#EEF4FE', color: '#2F6FED', padding: '3px 10px', borderRadius: 'var(--radius-full)', fontWeight: 700 }}>
                        Active Milestone
                      </span>
                    )}
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0B1F3A', marginBottom: '10px' }}>
                    {milestone.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#4B5563', lineHeight: 1.6, margin: 0 }}>
                    {milestone.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ===================================================================
          5. TEAM SECTION (6 MEMBERS WITH PHOTO, NAME, ROLE, LINKEDIN ICON)
          =================================================================== */}
      <section className="section" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E5E7EB' }}>
        <div className="container">
          
          <div className="section-header">
            <div className="section-badge">
              <span className="section-badge-dot" />
              <span>Leadership & Senior Architects</span>
            </div>
            <h2 className="section-title">
              Meet Our Senior Leadership
            </h2>
            <p className="section-subtitle">
              Decades of experience in enterprise infrastructure, cloud engineering, cybersecurity defense, and product delivery.
            </p>
          </div>

          {/* 6 Team Member Cards Grid */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', 
              gap: '30px' 
            }}
          >
            {TEAM_MEMBERS.map((member, idx) => (
              <div 
                key={idx}
                className="clean-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid #E5E7EB',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                {/* Photo Placeholder */}
                <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '70px',
                      background: 'linear-gradient(to top, rgba(11, 31, 58, 0.7), transparent)'
                    }}
                  />
                  {/* LinkedIn Icon */}
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noreferrer"
                    style={{
                      position: 'absolute',
                      top: '14px',
                      right: '14px',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0A66C2',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                      transition: 'all 0.2s ease'
                    }}
                    title={`${member.name} on LinkedIn`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>

                {/* Info */}
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0B1F3A', marginBottom: '4px' }}>
                      {member.name}
                    </h3>
                    <div style={{ fontSize: '0.86rem', color: '#2F6FED', fontWeight: 700, marginBottom: '14px' }}>
                      {member.role}
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#4B5563', lineHeight: 1.6, marginBottom: '18px' }}>
                      {member.bio}
                    </p>
                  </div>

                  {/* Specialties tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '14px', borderTop: '1px solid #E5E7EB' }}>
                    {member.specialties.map((spec, sIdx) => (
                      <span 
                        key={sIdx}
                        style={{
                          fontSize: '0.74rem',
                          backgroundColor: '#F5F7FA',
                          border: '1px solid #E5E7EB',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          color: '#4B5563',
                          fontWeight: 600
                        }}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================================================================
          6. CERTIFICATIONS AND PARTNERSHIPS
          =================================================================== */}
      <section className="section" style={{ backgroundColor: '#F5F7FA', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
        <div className="container">
          
          <div className="section-header">
            <div className="section-badge">
              <span className="section-badge-dot" />
              <span>Certified Excellence</span>
            </div>
            <h2 className="section-title">
              Certifications & Industry Partnerships
            </h2>
            <p className="section-subtitle">
              We uphold the highest global standards for information security, compliance audits, and multi-cloud engineering.
            </p>
          </div>

          {/* 6 Accreditations (ISO, SOC 2, Microsoft, AWS, Google Cloud, Cisco) */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', 
              gap: '24px' 
            }}
          >
            {PARTNERSHIPS_AND_CERTS.map((cert) => (
              <div 
                key={cert.id}
                className="clean-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '28px 24px',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid #E5E7EB',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                    <div 
                      style={{ 
                        width: '42px', 
                        height: '42px', 
                        borderRadius: '8px', 
                        backgroundColor: '#EEF4FE', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center' 
                      }}
                    >
                      <ShieldCheck size={22} color="#2F6FED" />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0B1F3A', margin: 0 }}>
                        {cert.name}
                      </h3>
                      <span style={{ fontSize: '0.78rem', color: '#2F6FED', fontWeight: 700 }}>
                        {cert.label}
                      </span>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.9rem', color: '#4B5563', lineHeight: 1.6, margin: 0 }}>
                    {cert.desc}
                  </p>
                </div>

                <div style={{ marginTop: '18px', paddingTop: '12px', borderTop: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', gap: '6px', color: '#10B981', fontSize: '0.8rem', fontWeight: 600 }}>
                  <CheckCircle2 size={14} />
                  <span>Verified & Active</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================================================================
          7. ABOUT CTA SECTION
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
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            
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
              Partner with a team that understands your business.
            </h2>

            <p style={{ fontSize: '1.15rem', color: '#94A3B8', lineHeight: 1.7, marginBottom: '36px' }}>
              We do not treat IT as an expense; we treat it as your strongest commercial engine. Contact our executive team today to explore how we can support your growth.
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
                onClick={() => setActivePage('services')}
                className="btn btn-secondary"
                style={{ padding: '16px 30px', fontSize: '1.05rem', backgroundColor: '#FFFFFF', color: '#0B1F3A' }}
              >
                <span>Browse Services</span>
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
