import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Menu, 
  X, 
  ArrowRight,
  Calculator,
  PhoneCall
} from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ 
  activePage, 
  setActivePage, 
  onOpenEstimator
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'blogs', label: 'Insights & Blogs' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          transition: 'all 0.25s ease',
          background: scrolled 
            ? 'rgba(255, 255, 255, 0.95)' 
            : 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid #e2e8f0',
          boxShadow: scrolled ? '0 4px 20px -2px rgba(15, 23, 42, 0.06)' : 'none',
          padding: scrolled ? '14px 0' : '18px 0'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo Brand */}
          <div 
            onClick={() => handleNavClick('home')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            title="AdoraTech Home"
          >
            <Logo size="default" showTagline={false} />
          </div>

          {/* Desktop Navigation Links */}
          <nav 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '4px',
              background: '#f1f5f9',
              padding: '4px 6px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid #e2e8f0'
            }}
            className="desktop-nav"
          >
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    position: 'relative',
                    padding: '8px 18px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.92rem',
                    fontWeight: isActive ? 700 : 600,
                    color: isActive ? '#ffffff' : '#334155',
                    background: isActive ? 'linear-gradient(135deg, #2563eb 0%, #6366f1 100%)' : 'transparent',
                    boxShadow: isActive ? '0 2px 10px rgba(37, 99, 235, 0.3)' : 'none',
                    transition: 'all 0.18s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#2563eb';
                      e.currentTarget.style.background = '#e2e8f0';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#334155';
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>

            {/* Project Estimator Quick Button */}
            <button
              onClick={onOpenEstimator}
              className="btn btn-secondary desktop-only"
              style={{ 
                padding: '9px 18px', 
                fontSize: '0.88rem'
              }}
            >
              <Calculator size={16} color="#2563eb" />
              <span>Project Calculator</span>
            </button>

            {/* Direct Consultation / Contact CTA */}
            <button
              onClick={() => handleNavClick('contact')}
              className="btn btn-primary"
              style={{ padding: '9px 22px', fontSize: '0.88rem' }}
            >
              <span>Get in Touch</span>
              <ArrowRight size={15} />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="btn-icon-only mobile-toggle"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} color="#0f172a" /> : <Menu size={20} color="#0f172a" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            top: '72px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            zIndex: 899,
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderTop: '1px solid #e2e8f0',
            boxShadow: '0 20px 40px rgba(15, 23, 42, 0.1)',
            animation: 'fadeIn 0.25s ease-out'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
              Navigation Menu
            </div>
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    textAlign: 'left',
                    color: isActive ? '#ffffff' : '#0f172a',
                    background: isActive ? 'linear-gradient(135deg, #2563eb 0%, #6366f1 100%)' : '#f8fafc',
                    border: '1px solid ' + (isActive ? 'transparent' : '#e2e8f0')
                  }}
                >
                  <span>{item.label}</span>
                  <ArrowRight size={18} opacity={isActive ? 1 : 0.4} />
                </button>
              );
            })}

            <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimator();
                }}
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center', padding: '14px' }}
              >
                <Calculator size={18} color="#2563eb" />
                <span>Estimate Project Cost</span>
              </button>
            </div>
          </div>

          {/* Mobile Footer Info */}
          <div style={{ paddingTop: '20px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Direct Inquiries</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a' }}>hello@adoratech.com</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
              <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 600 }}>Engineers Online</span>
            </div>
          </div>
        </div>
      )}

      {/* Responsive helper */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .desktop-only { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
        @media (min-width: 901px) {
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
}
