import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Send, 
  ChevronDown, 
  ChevronUp, 
  Calendar,
  Lock,
  ArrowRight,
  Terminal,
  HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO, GLOBAL_OFFICES, FAQ_ITEMS } from '../data/mockData';

export default function ContactPage({ prefilledScope }) {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: 'Web Application Engineering',
    budget: '$15,000 - $30,000',
    timeline: '4 - 8 Weeks',
    message: '',
    needNDA: true
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  // Live Timezone Clocks
  const [officeTimes, setOfficeTimes] = useState({});

  useEffect(() => {
    const updateTimes = () => {
      const times = {};
      GLOBAL_OFFICES.forEach(off => {
        try {
          times[off.city] = new Intl.DateTimeFormat('en-US', {
            timeZone: off.timezone,
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true
          }).format(new Date());
        } catch (e) {
          times[off.city] = '--:--';
        }
      });
      setOfficeTimes(times);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  // Sync prefilled scope from ProjectEstimatorModal if passed
  useEffect(() => {
    if (prefilledScope) {
      setFormData(prev => ({
        ...prev,
        service: prefilledScope.projectType || prev.service,
        budget: prefilledScope.estimatedPrice || prev.budget,
        timeline: prefilledScope.estimatedTimeline || prev.timeline,
        message: prev.message || `Estimated scope based on configuration: ${prefilledScope.projectType} (${prefilledScope.tier}). Features: ${prefilledScope.features ? prefilledScope.features.join(', ') : 'Standard modules'}. Estimated Budget: ${prefilledScope.estimatedPrice}.`
      }));
    }
  }, [prefilledScope]);

  const serviceOptions = [
    'Web Application Engineering',
    'Mobile App (iOS & Android)',
    'Enterprise Software & ERP',
    'GenAI & Autonomous Agents',
    'Cloud Architecture & DevOps',
    'Cybersecurity & Pentesting'
  ];

  const budgetOptions = [
    '$7,500 - $15,000',
    '$15,000 - $30,000',
    '$30,000 - $60,000',
    '$60,000+'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@') || !formData.email.includes('.')) {
      errors.email = 'Valid corporate email is required';
    }
    if (!formData.company.trim()) errors.company = 'Company name is required';
    if (!formData.message.trim() || formData.message.length < 15) {
      errors.message = 'Please provide at least 15 characters describing your project';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger Confetti Celebration
      try {
        confetti({
          particleCount: 85,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#2563eb', '#6366f1', '#06b6d4', '#10b981']
        });
      } catch (err) {
        // ignore
      }
    }, 900);
  };

  const toggleFaq = (idx) => {
    setOpenFaqIdx(prev => prev === idx ? null : idx);
  };

  return (
    <div style={{ position: 'relative' }}>
      
      {/* ===================================================================
          1. CONTACT HERO
          =================================================================== */}
      <section className="section-hero">
        <div className="container">
          <div style={{ maxWidth: '1240px', margin: '0 auto', textAlign: 'center' }}>
            <div className="section-badge">
              <span className="section-badge-dot" />
              <span>Direct Strategic Access</span>
            </div>

            <h1 
              style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', 
                fontWeight: 800, 
                lineHeight: 1.15, 
                marginBottom: '22px',
                color: 'var(--text-main)'
              }}
            >
              Let’s Architect Your Next{' '}
              <span className="text-gradient-brand">Technological Advantage</span>
            </h1>

            <p style={{ fontSize: '1.2rem', color: 'var(--text-body)', lineHeight: 1.8, marginBottom: '36px' }}>
              Schedule a 30-minute discovery call with our Principal Architects. We guarantee an upfront mutual NDA, a transparent architectural review, and a fixed sprint proposal within 48 hours.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: 600 }}>
                <Clock size={18} color="var(--primary)" />
                <span>Executive Response SLA: <strong>&lt; 2 Hours</strong></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: 600 }}>
                <Lock size={18} color="var(--accent-indigo)" />
                <span>Mutual Non-Disclosure Agreement (NDA)</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ===================================================================
          2. MAIN CONTACT SECTION: FORM + SIDEBAR CHANNELS
          =================================================================== */}
      <section className="section" style={{ background: 'var(--bg-subtle)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '50px', alignItems: 'flex-start' }}>
            
            {/* Left: Interactive Consultation Form */}
            <div 
              className="clean-card"
              style={{
                padding: '44px 38px',
                background: '#ffffff',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '30px 10px', animation: 'fadeIn 0.3s ease-out' }}>
                  <div 
                    style={{ 
                      width: '74px', 
                      height: '74px', 
                      borderRadius: '50%', 
                      background: 'var(--primary-light)', 
                      border: '2px solid var(--primary)',
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      margin: '0 auto 24px auto',
                      boxShadow: 'var(--shadow-brand)'
                    }}
                  >
                    <CheckCircle2 size={40} color="var(--primary)" />
                  </div>

                  <h2 style={{ fontSize: '2.1rem', fontWeight: 800, marginBottom: '12px', color: 'var(--text-main)' }}>
                    Proposal Request Received!
                  </h2>

                  <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: 1.7, maxWidth: '500px', margin: '0 auto 28px auto' }}>
                    Thank you, <strong style={{ color: 'var(--text-main)' }}>{formData.name}</strong>. Our Principal Systems Architect is reviewing your requirements for <strong style={{ color: 'var(--primary)' }}>{formData.service}</strong> and will email you our preliminary architecture brief within 2 hours.
                  </p>

                  <div 
                    style={{
                      padding: '22px',
                      background: 'var(--bg-subtle)',
                      borderRadius: 'var(--radius-md)',
                      textAlign: 'left',
                      marginBottom: '30px',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.92rem'
                    }}
                  >
                    <div style={{ fontWeight: 800, color: 'var(--text-main)', marginBottom: '10px' }}>Summary of Your Consultation Request:</div>
                    <div style={{ color: 'var(--text-body)', marginBottom: '4px' }}>• Service: <strong style={{ color: 'var(--text-main)' }}>{formData.service}</strong></div>
                    <div style={{ color: 'var(--text-body)', marginBottom: '4px' }}>• Target Budget: <strong style={{ color: 'var(--text-main)' }}>{formData.budget}</strong></div>
                    <div style={{ color: 'var(--text-body)', marginBottom: '4px' }}>• Corporate Email: <strong style={{ color: 'var(--text-main)' }}>{formData.email}</strong></div>
                    {formData.needNDA && (
                      <div style={{ color: 'var(--primary)', fontWeight: 700, marginTop: '10px' }}>✓ Mutual NDA document will be attached to our initial correspondence.</div>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        phone: '',
                        service: 'Web Application Engineering',
                        budget: '$15,000 - $30,000',
                        timeline: '4 - 8 Weeks',
                        message: '',
                        needNDA: true
                      });
                    }}
                    className="btn btn-secondary"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '24px' }}>
                    <h2 style={{ fontSize: '1.9rem', fontWeight: 800, marginBottom: '8px', color: 'var(--text-main)' }}>
                      Request Technical Proposal
                    </h2>
                    <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)' }}>
                      Complete this form or email our executive team directly at <span style={{ color: 'var(--primary)', fontWeight: 700 }}>inquiries@adoratech.com</span>.
                    </p>
                  </div>

                  {/* 2-Column Name and Email */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Full Name *</label>
                      <input 
                        type="text"
                        name="name"
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input"
                        style={{ borderColor: formErrors.name ? '#e11d48' : undefined }}
                      />
                      {formErrors.name && <span style={{ fontSize: '0.8rem', color: '#e11d48', fontWeight: 600 }}>{formErrors.name}</span>}
                    </div>

                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Corporate Email *</label>
                      <input 
                        type="email"
                        name="email"
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        style={{ borderColor: formErrors.email ? '#e11d48' : undefined }}
                      />
                      {formErrors.email && <span style={{ fontSize: '0.8rem', color: '#e11d48', fontWeight: 600 }}>{formErrors.email}</span>}
                    </div>
                  </div>

                  {/* 2-Column Company and Phone */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Company / Organization *</label>
                      <input 
                        type="text"
                        name="company"
                        placeholder="e.g. Stripe, Acme Corp"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="form-input"
                        style={{ borderColor: formErrors.company ? '#e11d48' : undefined }}
                      />
                      {formErrors.company && <span style={{ fontSize: '0.8rem', color: '#e11d48', fontWeight: 600 }}>{formErrors.company}</span>}
                    </div>

                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Phone Number (Optional)</label>
                      <input 
                        type="tel"
                        name="phone"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="form-group">
                    <label className="form-label">Primary IT Capability Required</label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '8px' }}>
                      {serviceOptions.map((opt, idx) => {
                        const isSelected = formData.service === opt;
                        return (
                          <button
                            type="button"
                            key={idx}
                            onClick={() => setFormData(p => ({ ...p, service: opt }))}
                            style={{
                              padding: '10px 14px',
                              borderRadius: 'var(--radius-md)',
                              fontSize: '0.85rem',
                              fontWeight: 700,
                              textAlign: 'left',
                              background: isSelected ? 'var(--grad-brand)' : '#ffffff',
                              border: '1px solid ' + (isSelected ? 'transparent' : 'var(--border-light)'),
                              color: isSelected ? '#ffffff' : 'var(--text-main)',
                              boxShadow: isSelected ? 'var(--shadow-brand)' : 'none',
                              cursor: 'pointer',
                              transition: 'all var(--transition)'
                            }}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div className="form-group">
                    <label className="form-label">Target Investment Range</label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '8px' }}>
                      {budgetOptions.map((b, idx) => {
                        const isSelected = formData.budget === b;
                        return (
                          <button
                            type="button"
                            key={idx}
                            onClick={() => setFormData(p => ({ ...p, budget: b }))}
                            style={{
                              padding: '10px 12px',
                              borderRadius: 'var(--radius-md)',
                              fontSize: '0.84rem',
                              fontWeight: 700,
                              background: isSelected ? 'var(--primary-light)' : '#ffffff',
                              border: '1px solid ' + (isSelected ? 'var(--primary)' : 'var(--border-light)'),
                              color: isSelected ? 'var(--primary)' : 'var(--text-muted)',
                              cursor: 'pointer',
                              transition: 'all var(--transition)'
                            }}
                          >
                            {b}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project Details Message */}
                  <div className="form-group">
                    <label className="form-label">Project Scope & Technical Details *</label>
                    <textarea 
                      name="message"
                      rows={4}
                      placeholder="Tell us about your project, current tech stack, key deliverables, and target launch window..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-textarea"
                      style={{ borderColor: formErrors.message ? '#e11d48' : undefined }}
                    />
                    {formErrors.message && <span style={{ fontSize: '0.8rem', color: '#e11d48', fontWeight: 600 }}>{formErrors.message}</span>}
                  </div>

                  {/* NDA Checkbox */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                    <input 
                      type="checkbox"
                      id="needNDA"
                      name="needNDA"
                      checked={formData.needNDA}
                      onChange={handleInputChange}
                      style={{ width: '18px', height: '18px', accentColor: 'var(--primary)' }}
                    />
                    <label htmlFor="needNDA" style={{ fontSize: '0.88rem', color: 'var(--text-main)', fontWeight: 600, cursor: 'pointer' }}>
                      Send an official mutual Non-Disclosure Agreement (NDA) to protect our IP
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '16px', justifyContent: 'center', fontSize: '1.05rem' }}
                  >
                    {isSubmitting ? (
                      <span>Synthesizing Architecture Brief...</span>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Submit Architecture & Scope Request</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>

                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginTop: '16px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Lock size={13} color="var(--primary)" /> 256-bit Encrypted
                    </span>
                    <span>•</span>
                    <span>100% Confidential</span>
                    <span>•</span>
                    <span>Zero Spam Policy</span>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Direct Channels & Global Hubs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              
              {/* Direct Communication Channels Card */}
              <div className="clean-card" style={{ padding: '34px', background: '#ffffff' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '20px', color: 'var(--text-main)' }}>
                  Direct Priority Channels
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-md)', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Mail size={22} color="var(--primary)" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>General & Architecture Inquiries</div>
                      <a href={`mailto:${COMPANY_INFO.email}`} style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)' }}>
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-md)', background: '#f5f3ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Phone size={22} color="var(--accent-indigo)" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Toll-Free Enterprise Desk</div>
                      <a href={`tel:${COMPANY_INFO.phone}`} style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)' }}>
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-md)', background: '#ecfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Calendar size={22} color="#059669" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Discovery Meeting Format</div>
                      <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)' }}>
                        30-minute structured Zoom session
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Global Delivery Hubs with Live Timezone Clocks */}
              <div className="clean-card" style={{ padding: '34px', background: '#ffffff' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '20px', color: 'var(--text-main)' }}>
                  Global Hubs & Live Times
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {GLOBAL_OFFICES.map((off, idx) => (
                    <div 
                      key={idx}
                      style={{
                        padding: '16px',
                        background: 'var(--bg-subtle)',
                        border: '1px solid var(--border-light)',
                        borderRadius: 'var(--radius-md)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-main)' }}>
                          {off.city}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                          {off.tag}
                        </div>
                      </div>

                      <div style={{ textAlign: 'right' }}>
                        <div 
                          style={{ 
                            fontFamily: 'var(--font-mono)', 
                            fontSize: '0.96rem', 
                            color: 'var(--primary)', 
                            fontWeight: 800 
                          }}
                        >
                          {officeTimes[off.city] || 'Live'}
                        </div>
                        <div style={{ fontSize: '0.74rem', color: '#059669', fontWeight: 700 }}>
                          ● Active Hub
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ===================================================================
          3. FREQUENTLY ASKED QUESTIONS ACCORDION
          =================================================================== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <HelpCircle size={15} color="var(--primary)" />
              <span>Answers to Common Questions</span>
            </div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Clear answers regarding our contracts, IP ownership, sprint cadences, and post-launch guarantees.
            </p>
          </div>

          <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div 
                  key={idx}
                  className="clean-card"
                  style={{
                    padding: '24px 28px',
                    cursor: 'pointer',
                    background: '#ffffff',
                    border: '1px solid ' + (isOpen ? 'var(--primary)' : 'var(--border-light)'),
                    transition: 'all var(--transition)'
                  }}
                  onClick={() => toggleFaq(idx)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: isOpen ? 'var(--primary)' : 'var(--text-main)' }}>
                      {item.question}
                    </h3>
                    <div style={{ color: 'var(--primary)' }}>
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>

                  {isOpen && (
                    <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--border-light)', animation: 'fadeIn 0.25s ease-out' }}>
                      <p style={{ fontSize: '0.96rem', color: 'var(--text-body)', lineHeight: 1.75, margin: 0 }}>
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
