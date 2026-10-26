import React, { useState } from 'react';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  Globe2, 
  Calendar,
  Send
} from 'lucide-react';
import { COMPANY_INFO, CORE_SERVICES } from '../data/mockData';
import Logo from './Logo';

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
        backgroundColor: '#0B1F3A', 
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        paddingTop: '70px',
        paddingBottom: '36px',
        color: '#FFFFFF',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Top Accent Line */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #2F6FED 0%, #3B82F6 50%, #0B1F3A 100%)'
        }} 
      />

      <div className="container">
        
        {/* Top Newsletter & Reassurance Bar */}
        <div 
          style={{
            padding: 'clamp(24px, 3.5vw, 36px) clamp(20px, 3.5vw, 40px)',
            marginBottom: '56px',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: 'var(--radius-lg)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '28px',
            alignItems: 'center'
          }}
        >
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#60A5FA', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
              <ShieldCheck size={16} />
              <span>Enterprise IT Advisory</span>
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>
              Stay informed with our quarterly IT Insights
            </h3>
            <p style={{ fontSize: '0.94rem', color: '#94A3B8', margin: 0, lineHeight: 1.6 }}>
              Receive practical guides on cloud architecture, cybersecurity audits, and digital transformation directly to your inbox.
            </p>
          </div>

          <div>
            {subscribed ? (
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  backgroundColor: 'rgba(16, 185, 129, 0.15)', 
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  padding: '14px 20px',
                  borderRadius: 'var(--radius-md)',
                  color: '#34D399'
                }}
              >
                <CheckCircle2 size={22} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Thank you for subscribing!</div>
                  <div style={{ fontSize: '0.82rem', color: '#CBD5E1' }}>You will receive our latest enterprise IT briefings.</div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <div style={{ position: 'relative', flex: '1 1 220px' }}>
                    <Mail size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                    <input 
                      type="email" 
                      placeholder="Enter corporate email address..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '13px 18px 13px 46px',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        border: error ? '1px solid #EF4444' : '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: 'var(--radius-full)',
                        color: '#FFFFFF',
                        fontSize: '0.92rem'
                      }}
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    style={{ 
                      padding: '12px 26px', 
                      backgroundColor: '#2F6FED',
                      color: '#FFFFFF',
                      boxShadow: 'none'
                    }}
                  >
                    <span>Subscribe</span>
                    <Send size={15} />
                  </button>
                </div>
                {error && <span style={{ fontSize: '0.8rem', color: '#EF4444', paddingLeft: '14px' }}>{error}</span>}
                <span style={{ fontSize: '0.78rem', color: '#94A3B8', paddingLeft: '14px' }}>
                  Enterprise briefings only. 100% spam-free. Unsubscribe anytime.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Columns */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', 
            gap: '40px',
            marginBottom: '56px'
          }}
        >
          {/* Brand Info & Mission */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              <Logo size="default" showTagline={true} lightMode={true} />
            </div>
            <p style={{ fontSize: '0.92rem', color: '#94A3B8', lineHeight: 1.7, marginBottom: '20px' }}>
              {COMPANY_INFO.description}
            </p>
            {/* Status indicator */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                fontSize: '0.8rem',
                color: '#34D399',
                fontWeight: 600
              }}
            >
              <div style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#34D399', boxShadow: '0 0 8px #34D399' }} />
              <span>24/7/365 NOC & SOC Monitoring</span>
            </div>
          </div>

          {/* Quick Links (Exact 5 Pages) */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Home', page: 'home' },
                { label: 'About Us', page: 'about' },
                { label: 'Services', page: 'services' },
                { label: 'Blog & Insights', page: 'blog' },
                { label: 'Contact Us', page: 'contact' }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNav(link.page)}
                    style={{
                      fontSize: '0.92rem',
                      color: '#94A3B8',
                      transition: 'color var(--transition)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#60A5FA')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
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
                    color: '#60A5FA',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    marginTop: '4px'
                  }}
                >
                  <Calendar size={14} />
                  <span>Interactive Estimator</span>
                </button>
              </li>
            </ul>
          </div>

          {/* IT Services List */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Core Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {CORE_SERVICES.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => handleNav('services')}
                    style={{
                      fontSize: '0.92rem',
                      color: '#94A3B8',
                      transition: 'color var(--transition)',
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#60A5FA')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                  >
                    {srv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Contact Information
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem', color: '#94A3B8' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={18} color="#60A5FA" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={18} color="#60A5FA" style={{ flexShrink: 0 }} />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={18} color="#60A5FA" style={{ flexShrink: 0 }} />
                <span>{COMPANY_INFO.email}</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <Clock size={18} color="#60A5FA" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.84rem' }}>{COMPANY_INFO.businessHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div 
          style={{ 
            paddingTop: '28px', 
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px'
          }}
        >
          <div style={{ fontSize: '0.86rem', color: '#94A3B8' }}>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved. “{COMPANY_INFO.tagline}”
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* LinkedIn */}
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-icon-only" 
              title="LinkedIn"
              style={{ background: 'rgba(255, 255, 255, 0.08)', color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.15)' }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            {/* Twitter / X */}
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-icon-only" 
              title="Twitter / X"
              style={{ background: 'rgba(255, 255, 255, 0.08)', color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.15)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* GitHub */}
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-icon-only" 
              title="GitHub"
              style={{ background: 'rgba(255, 255, 255, 0.08)', color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.15)' }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            {/* YouTube */}
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-icon-only" 
              title="YouTube"
              style={{ background: 'rgba(255, 255, 255, 0.08)', color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.15)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
