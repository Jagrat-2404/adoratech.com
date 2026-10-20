import React, { useState } from 'react';
import { 
  ArrowRight, 
  Mail, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  Globe2, 
  Calculator,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO, CORE_SERVICES } from '../data/mockData';

export default function Footer({ setActivePage, onOpenEstimator }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid corporate email');
      return;
    }
    setError('');
    setSubscribed(true);
    setEmail('');
  };

  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{ 
        position: 'relative', 
        background: '#090d1a', 
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '80px',
        paddingBottom: '36px',
        color: '#ffffff',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Top Electric Accent Beam */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '750px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #2563eb, #6366f1, #38bdf8, transparent)',
          boxShadow: '0 0 25px #2563eb'
        }} 
      />

      <div className="container">
        
        {/* Top Newsletter & Call to Action Bar */}
        <div 
          style={{
            padding: 'clamp(24px, 4vw, 38px) clamp(18px, 4vw, 42px)',
            marginBottom: '64px',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(37, 99, 235, 0.1) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 'var(--radius-xl)',
            backdropFilter: 'blur(20px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '30px',
            alignItems: 'center',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.35)'
          }}
        >
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#60a5fa', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
              <Sparkles size={16} />
              <span>Engineering Intelligence Dispatch</span>
            </div>
            <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
              Architectural intelligence for tech leaders
            </h3>
            <p style={{ fontSize: '0.94rem', color: '#94a3b8', margin: 0 }}>
              Bi-weekly engineering deep-dives on generative AI orchestration, micro-frontend scaling, and zero-trust cloud pipelines.
            </p>
          </div>

          <div>
            {subscribed ? (
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  background: 'rgba(16, 185, 129, 0.15)', 
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  padding: '14px 20px',
                  borderRadius: 'var(--radius-md)',
                  color: '#34d399'
                }}
              >
                <CheckCircle2 size={22} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Welcome to AdoraTech Dispatch</div>
                  <div style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>Our latest Enterprise Architecture Blueprint has been sent to your inbox.</div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <div style={{ position: 'relative', flex: '1 1 200px' }}>
                    <Mail size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
                    <input 
                      type="email" 
                      placeholder="Enter corporate email..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '13px 18px 13px 44px',
                        background: 'rgba(15, 23, 42, 0.7)',
                        border: error ? '1px solid #f43f5e' : '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: 'var(--radius-full)',
                        color: '#ffffff',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ padding: '12px 24px' }}>
                    <span>Subscribe</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
                {error && <span style={{ fontSize: '0.8rem', color: '#f43f5e', paddingLeft: '14px' }}>{error}</span>}
                <span style={{ fontSize: '0.75rem', color: '#64748b', paddingLeft: '14px' }}>
                  Enterprise whitepapers only. 100% spam-free. Unsubscribe anytime.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Columns */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', 
            gap: '40px',
            marginBottom: '60px'
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ marginBottom: '18px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', userSelect: 'none' }}>
                <div 
                  style={{ 
                    width: 36, 
                    height: 36, 
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #2563eb 0%, #6366f1 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 14px rgba(37, 99, 235, 0.4)'
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 22H7L12 11L17 22H22L12 2Z" fill="#ffffff" />
                    <circle cx="12" cy="16" r="2.5" fill="#38bdf8" />
                  </svg>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.4rem', color: '#ffffff' }}>Adora</span>
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.4rem', background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Tech</span>
                </div>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.7, marginBottom: '20px' }}>
              High-velocity IT services and modern software engineering. We engineer resilient web applications, mobile platforms, enterprise cloud backends, and AI pipelines.
            </p>
            {/* Live Status */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                fontSize: '0.8rem',
                color: '#34d399',
                fontWeight: 600
              }}
            >
              <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#34d399', boxShadow: '0 0 8px #34d399' }} />
              <span>Engineering Squads Active</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ffffff', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Home Page', page: 'home' },
                { label: 'About Us & Leadership', page: 'about' },
                { label: 'IT Services Catalog', page: 'services' },
                { label: 'Tech Blogs & Insights', page: 'blogs' },
                { label: 'Contact & Book Discovery Call', page: 'contact' }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNav(link.page)}
                    style={{
                      fontSize: '0.92rem',
                      color: '#94a3b8',
                      transition: 'color var(--transition)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#60a5fa')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                  >
                    <ArrowRight size={13} opacity={0.6} />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenEstimator}
                  style={{
                    fontSize: '0.92rem',
                    color: '#60a5fa',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <Calculator size={14} />
                  <span>Cost & Timeline Calculator</span>
                </button>
              </li>
            </ul>
          </div>

          {/* IT Services Links */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ffffff', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Capabilities
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {CORE_SERVICES.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => handleNav('services')}
                    style={{
                      fontSize: '0.92rem',
                      color: '#94a3b8',
                      transition: 'color var(--transition)',
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#60a5fa')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                  >
                    {srv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Accreditations */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ffffff', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Accreditations & Hubs
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShieldCheck size={20} color="#60a5fa" />
                <span style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>ISO/IEC 27001 & SOC 2 Type II Certified</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Award size={20} color="#a78bfa" />
                <span style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>AWS Premier Tier & Google Cloud Partner</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Globe2 size={20} color="#34d399" />
                <span style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>San Francisco • London • Singapore</span>
              </div>
            </div>

            <div style={{ fontSize: '0.88rem', color: '#64748b' }}>
              Direct: <span style={{ color: '#ffffff', fontWeight: 600 }}>+1 (800) 492-3672</span>
              <br />
              Executive: <span style={{ color: '#60a5fa', fontWeight: 600 }}>inquiries@adoratech.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div 
          style={{ 
            paddingTop: '28px', 
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px'
          }}
        >
          <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved. Engineering excellence delivered.
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-icon-only" 
              title="GitHub"
              style={{ background: 'rgba(255, 255, 255, 0.06)', color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.12)' }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-icon-only" 
              title="LinkedIn"
              style={{ background: 'rgba(255, 255, 255, 0.06)', color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.12)' }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-icon-only" 
              title="X (Twitter)"
              style={{ background: 'rgba(255, 255, 255, 0.06)', color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.12)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
