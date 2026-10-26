import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight,
  Calendar,
  PhoneCall,
  ShieldCheck
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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Exactly 5 pages specified in requirements
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleConsultationClick = () => {
    setActivePage('contact');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          backgroundColor: scrolled 
            ? 'rgba(255, 255, 255, 0.96)' 
            : 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid #E5E7EB',
          boxShadow: scrolled 
            ? '0 4px 20px -2px rgba(11, 31, 58, 0.08)' 
            : '0 1px 3px rgba(11, 31, 58, 0.04)',
          padding: scrolled ? '14px 0' : '18px 0'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Company Brand Logo with Tagline */}
          <div 
            onClick={() => handleNavClick('home')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            title="AdoraTech - Home"
          >
            <Logo size="default" showTagline={true} />
          </div>

          {/* Desktop Navigation Menu Links */}
          <nav 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px',
              backgroundColor: '#F5F7FA',
              padding: '5px 8px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid #E5E7EB'
            }}
            className="desktop-nav"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive = activePage === item.id || (item.id === 'blog' && activePage === 'blogs');
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    position: 'relative',
                    padding: '8px 20px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.94rem',
                    fontWeight: isActive ? 700 : 600,
                    color: isActive ? '#FFFFFF' : '#1F2937',
                    backgroundColor: isActive ? '#0B1F3A' : 'transparent',
                    boxShadow: isActive ? '0 2px 10px rgba(11, 31, 58, 0.25)' : 'none',
                    transition: 'all 0.18s ease',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#2F6FED';
                      e.currentTarget.style.backgroundColor = '#E5E7EB';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#1F2937';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            
            {/* Quick Estimator Tool Link */}
            <button
              onClick={onOpenEstimator}
              className="btn btn-secondary desktop-only"
              style={{ 
                padding: '10px 18px', 
                fontSize: '0.88rem',
                borderColor: '#E5E7EB'
              }}
              title="Estimate your IT project cost"
            >
              <Calendar size={15} color="#2F6FED" />
              <span>Project Estimator</span>
            </button>

            {/* Prominent "Get a Consultation" Button */}
            <button
              onClick={handleConsultationClick}
              className="btn btn-primary"
              style={{ 
                padding: '11px 24px', 
                fontSize: '0.92rem',
                backgroundColor: '#2F6FED',
                color: '#FFFFFF',
                boxShadow: '0 8px 20px -4px rgba(47, 111, 237, 0.4)'
              }}
              id="nav-get-consultation-btn"
            >
              <span>Get a Consultation</span>
              <ArrowRight size={16} />
            </button>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="btn-icon-only mobile-toggle"
              aria-label="Toggle Navigation Menu"
              style={{
                width: '42px',
                height: '42px',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              {mobileMenuOpen ? <X size={20} color="#0B1F3A" /> : <Menu size={20} color="#0B1F3A" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            top: '76px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            zIndex: 899,
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderTop: '1px solid #E5E7EB',
            boxShadow: '0 20px 40px rgba(11, 31, 58, 0.1)',
            animation: 'fadeIn 0.25s ease-out'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ fontSize: '0.78rem', color: '#6B7280', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
              Navigation Menu
            </div>
            {navItems.map((item) => {
              const isActive = activePage === item.id || (item.id === 'blog' && activePage === 'blogs');
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
                    color: isActive ? '#2F6FED' : '#1F2937',
                    backgroundColor: isActive ? '#EEF4FE' : '#F5F7FA',
                    border: isActive ? '1px solid #BFDBFE' : '1px solid #E5E7EB',
                    cursor: 'pointer'
                  }}
                >
                  <span>{item.label}</span>
                  <ArrowRight size={16} color={isActive ? '#2F6FED' : '#9CA3AF'} />
                </button>
              );
            })}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '20px', borderTop: '1px solid #E5E7EB' }}>
            <button
              onClick={handleConsultationClick}
              className="btn btn-primary"
              style={{ width: '100%', padding: '16px', fontSize: '1rem', backgroundColor: '#2F6FED' }}
            >
              <span>Get a Consultation</span>
              <ArrowRight size={18} />
            </button>
            <div style={{ textAlign: 'center', fontSize: '0.84rem', color: '#6B7280' }}>
              Call direct: <strong style={{ color: '#0B1F3A' }}>+1 (800) 492-3672</strong>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
