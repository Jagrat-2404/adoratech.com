import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Send, 
  Headphones,
  Users,
  Briefcase,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO, SUPPORT_OPTIONS } from '../data/mockData';

export default function ContactPage({ prefilledScope }) {
  // Form State with all required fields
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceNeeded: 'Managed IT Services',
    budgetRange: '$10,000 - $25,000',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Sync prefilled scope from Services page or ProjectEstimatorModal if passed
  useEffect(() => {
    if (prefilledScope) {
      setFormData(prev => ({
        ...prev,
        serviceNeeded: prefilledScope.projectType || prev.serviceNeeded,
        budgetRange: prefilledScope.estimatedPrice || prev.budgetRange,
        message: prev.message || (prefilledScope.tier ? `Interested in: ${prefilledScope.projectType} (${prefilledScope.tier}). Timeline: ${prefilledScope.estimatedTimeline}.` : prev.message)
      }));
    }
  }, [prefilledScope]);

  const serviceOptions = [
    'Managed IT Services',
    'Cloud Solutions & Migration',
    'Cybersecurity & Compliance',
    'Custom Software Development',
    'IT Consulting & Digital Transformation',
    'Data Analytics & Business Intelligence'
  ];

  const budgetOptions = [
    'Under $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Please enter your full name';
    if (!formData.email.trim() || !formData.email.includes('@') || !formData.email.includes('.')) {
      errors.email = 'Please enter a valid business email';
    }
    if (!formData.phone.trim()) errors.phone = 'Please enter your phone number';
    if (!formData.company.trim()) errors.company = 'Please enter your organization name';
    if (!formData.message.trim()) errors.message = 'Please provide details about your IT requirements';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Fallback gracefully
      }
    }, 900);
  };

  const getSupportIcon = (id) => {
    switch (id) {
      case 'sales': return <Briefcase size={22} color="#2F6FED" />;
      case 'support': return <Headphones size={22} color="#2F6FED" />;
      case 'partnerships': return <Users size={22} color="#2F6FED" />;
      case 'careers': return <CheckCircle2 size={22} color="#2F6FED" />;
      default: return <Briefcase size={22} color="#2F6FED" />;
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      
      {/* ===================================================================
          1. CONTACT PAGE HERO
          =================================================================== */}
      <section 
        className="section-hero"
        style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E5E7EB',
          paddingTop: 'clamp(90px, 11vw, 130px)',
          paddingBottom: 'clamp(40px, 6vw, 70px)',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div className="section-badge">
              <span className="section-badge-dot" />
              <span>Get in Touch</span>
            </div>

            {/* Exact Hero Headline */}
            <h1 
              style={{ 
                fontSize: 'clamp(2.4rem, 4.4vw, 3.8rem)', 
                fontWeight: 800, 
                lineHeight: 1.15, 
                marginBottom: '20px',
                color: '#0B1F3A',
                letterSpacing: '-0.035em'
              }}
            >
              Let’s Talk About Your IT Needs
            </h1>

            <p style={{ fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)', color: '#4B5563', lineHeight: 1.7, marginBottom: '28px' }}>
              Speak directly with our senior technology team. Whether you need 24/7 managed operations, zero-trust cybersecurity, or custom enterprise software, we are ready to assist.
            </p>

            {/* Reassurance Callout */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 20px',
                backgroundColor: '#EEF4FE',
                border: '1px solid #BFDBFE',
                borderRadius: 'var(--radius-full)',
                color: '#0B1F3A',
                fontSize: '0.92rem',
                fontWeight: 700
              }}
            >
              <Clock size={18} color="#2F6FED" />
              <span>We usually respond within one business day.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          2. MAIN SECTION: CONTACT FORM & CONTACT DETAILS
          =================================================================== */}
      <section className="section" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="container">
          
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', 
              gap: 'clamp(32px, 5vw, 56px)',
              alignItems: 'start'
            }}
          >
            {/* Left Column: Contact Form */}
            <div 
              className="clean-card"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid #E5E7EB',
                padding: 'clamp(28px, 4vw, 44px)',
                boxShadow: '0 10px 30px rgba(11, 31, 58, 0.06)'
              }}
            >
              <div style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0B1F3A', marginBottom: '8px' }}>
                  Request an IT Consultation
                </h2>
                <p style={{ fontSize: '0.94rem', color: '#6B7280', margin: 0 }}>
                  Fill out the details below and an executive architect will review your inquiry.
                </p>
              </div>

              {submitted ? (
                <div 
                  style={{
                    padding: '36px 28px',
                    textAlign: 'center',
                    backgroundColor: '#EEF4FE',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid #BFDBFE'
                  }}
                >
                  <div 
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: '#2F6FED',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px auto',
                      color: '#FFFFFF'
                    }}
                  >
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0B1F3A', marginBottom: '10px' }}>
                    Consultation Request Received!
                  </h3>
                  <p style={{ color: '#4B5563', lineHeight: 1.6, fontSize: '0.98rem', marginBottom: '24px' }}>
                    Thank you, <strong>{formData.fullName}</strong>. A Senior IT Architect has received your request regarding <strong>{formData.serviceNeeded}</strong> and will follow up with your team within one business day.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        company: '',
                        serviceNeeded: 'Managed IT Services',
                        budgetRange: '$10,000 - $25,000',
                        message: ''
                      });
                    }}
                    className="btn btn-secondary"
                    style={{ padding: '10px 24px', fontSize: '0.9rem' }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  
                  {/* Row 1: Full Name & Email */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 700, color: '#0B1F3A', marginBottom: '6px' }}>
                        Full Name *
                      </label>
                      <input 
                        type="text"
                        name="fullName"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="form-input"
                        style={{ borderColor: formErrors.fullName ? '#EF4444' : '#E5E7EB' }}
                      />
                      {formErrors.fullName && (
                        <span style={{ fontSize: '0.78rem', color: '#EF4444', marginTop: '4px', display: 'block' }}>
                          {formErrors.fullName}
                        </span>
                      )}
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 700, color: '#0B1F3A', marginBottom: '6px' }}>
                        Business Email *
                      </label>
                      <input 
                        type="email"
                        name="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        style={{ borderColor: formErrors.email ? '#EF4444' : '#E5E7EB' }}
                      />
                      {formErrors.email && (
                        <span style={{ fontSize: '0.78rem', color: '#EF4444', marginTop: '4px', display: 'block' }}>
                          {formErrors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Phone & Company */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 700, color: '#0B1F3A', marginBottom: '6px' }}>
                        Phone Number *
                      </label>
                      <input 
                        type="tel"
                        name="phone"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                        style={{ borderColor: formErrors.phone ? '#EF4444' : '#E5E7EB' }}
                      />
                      {formErrors.phone && (
                        <span style={{ fontSize: '0.78rem', color: '#EF4444', marginTop: '4px', display: 'block' }}>
                          {formErrors.phone}
                        </span>
                      )}
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 700, color: '#0B1F3A', marginBottom: '6px' }}>
                        Company Name *
                      </label>
                      <input 
                        type="text"
                        name="company"
                        placeholder="Acme Enterprise Inc."
                        value={formData.company}
                        onChange={handleInputChange}
                        className="form-input"
                        style={{ borderColor: formErrors.company ? '#EF4444' : '#E5E7EB' }}
                      />
                      {formErrors.company && (
                        <span style={{ fontSize: '0.78rem', color: '#EF4444', marginTop: '4px', display: 'block' }}>
                          {formErrors.company}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Service Needed & Budget Range */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 700, color: '#0B1F3A', marginBottom: '6px' }}>
                        Service Needed *
                      </label>
                      <select 
                        name="serviceNeeded"
                        value={formData.serviceNeeded}
                        onChange={handleInputChange}
                        className="form-select"
                        style={{ width: '100%' }}
                      >
                        {serviceOptions.map((opt, i) => (
                          <option key={i} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 700, color: '#0B1F3A', marginBottom: '6px' }}>
                        Budget Range *
                      </label>
                      <select 
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleInputChange}
                        className="form-select"
                        style={{ width: '100%' }}
                      >
                        {budgetOptions.map((b, i) => (
                          <option key={i} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 700, color: '#0B1F3A', marginBottom: '6px' }}>
                      Message & IT Project Scope *
                    </label>
                    <textarea 
                      name="message"
                      rows={5}
                      placeholder="Please tell us about your current infrastructure, challenges, timelines, or specific requirements..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-textarea"
                      style={{ borderColor: formErrors.message ? '#EF4444' : '#E5E7EB' }}
                    />
                    {formErrors.message && (
                      <span style={{ fontSize: '0.78rem', color: '#EF4444', marginTop: '4px', display: 'block' }}>
                        {formErrors.message}
                      </span>
                    )}
                  </div>

                  {/* Security Reassurance */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#6B7280' }}>
                    <ShieldCheck size={16} color="#10B981" />
                    <span>Your information is strictly protected under ISO 27001 confidentiality protocols.</span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                    style={{
                      padding: '15px 32px',
                      backgroundColor: '#2F6FED',
                      color: '#FFFFFF',
                      fontSize: '1rem',
                      width: '100%',
                      boxShadow: '0 8px 24px -4px rgba(47, 111, 237, 0.4)'
                    }}
                    id="btn-submit-contact-form"
                  >
                    {isSubmitting ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <Send size={17} />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>

            {/* Right Column: Contact Details & Embedded Map */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              
              {/* Contact Details Card */}
              <div 
                className="clean-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid #E5E7EB',
                  padding: 'clamp(24px, 3.5vw, 36px)',
                  boxShadow: '0 10px 30px rgba(11, 31, 58, 0.06)'
                }}
              >
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0B1F3A', marginBottom: '22px' }}>
                  Direct Contact Information
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {/* Address */}
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: '#EEF4FE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <MapPin size={20} color="#2F6FED" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: '#6B7280', fontWeight: 700, textTransform: 'uppercase' }}>Global Headquarters</div>
                      <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0B1F3A', marginTop: '2px' }}>{COMPANY_INFO.address}</div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: '#EEF4FE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Phone size={20} color="#2F6FED" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: '#6B7280', fontWeight: 700, textTransform: 'uppercase' }}>Phone Numbers</div>
                      <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0B1F3A', marginTop: '2px' }}>Toll Free: {COMPANY_INFO.phone}</div>
                      <div style={{ fontSize: '0.88rem', color: '#4B5563' }}>Direct: {COMPANY_INFO.directLine}</div>
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: '#EEF4FE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Mail size={20} color="#2F6FED" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: '#6B7280', fontWeight: 700, textTransform: 'uppercase' }}>Email Contacts</div>
                      <div style={{ fontSize: '1rem', fontWeight: 700, color: '#2F6FED', marginTop: '2px' }}>{COMPANY_INFO.email}</div>
                      <div style={{ fontSize: '0.88rem', color: '#4B5563' }}>Support: {COMPANY_INFO.supportEmail}</div>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: '#EEF4FE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Clock size={20} color="#2F6FED" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: '#6B7280', fontWeight: 700, textTransform: 'uppercase' }}>Business Hours</div>
                      <div style={{ fontSize: '0.94rem', fontWeight: 700, color: '#0B1F3A', marginTop: '2px' }}>{COMPANY_INFO.businessHours}</div>
                    </div>
                  </div>
                </div>

                {/* Social Media Icons */}
                <div style={{ marginTop: '26px', paddingTop: '20px', borderTop: '1px solid #E5E7EB' }}>
                  <div style={{ fontSize: '0.8rem', color: '#6B7280', fontWeight: 700, textTransform: 'uppercase', marginBottom: '12px' }}>
                    Follow Us & Social Channels
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn-icon-only" 
                      title="LinkedIn"
                      style={{ color: '#0A66C2', borderColor: '#E5E7EB' }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn-icon-only" 
                      title="Twitter / X"
                      style={{ color: '#0B1F3A', borderColor: '#E5E7EB' }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn-icon-only" 
                      title="GitHub"
                      style={{ color: '#1F2937', borderColor: '#E5E7EB' }}
                    >
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Embedded Map Placeholder */}
              <div 
                className="clean-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid #E5E7EB',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(11, 31, 58, 0.06)'
                }}
              >
                {/* Visual Map Canvas / Interactive Simulated Map */}
                <div 
                  style={{
                    height: '240px',
                    position: 'relative',
                    backgroundColor: '#E5E7EB',
                    backgroundImage: 'radial-gradient(#CBD5E1 1.5px, transparent 1.5px)',
                    backgroundSize: '16px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {/* Map Roads & Contours Illustration */}
                  <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.35 }}>
                    <path d="M0,80 Q200,60 400,120 T800,90" stroke="#94A3B8" strokeWidth="8" fill="none" />
                    <path d="M120,0 Q180,120 220,240" stroke="#94A3B8" strokeWidth="6" fill="none" />
                    <path d="M350,0 Q320,140 380,240" stroke="#94A3B8" strokeWidth="5" fill="none" />
                    <path d="M0,180 Q300,160 600,210" stroke="#94A3B8" strokeWidth="10" fill="none" />
                  </svg>

                  {/* Office Map Pin */}
                  <div 
                    style={{
                      position: 'relative',
                      zIndex: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      animation: 'float 3s ease-in-out infinite'
                    }}
                  >
                    <div 
                      style={{
                        backgroundColor: '#2F6FED',
                        color: '#FFFFFF',
                        padding: '8px 16px',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.82rem',
                        fontWeight: 800,
                        boxShadow: '0 6px 18px rgba(47, 111, 237, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <MapPin size={16} />
                      <span>AdoraTech Headquarters</span>
                    </div>
                    <div 
                      style={{
                        width: '12px',
                        height: '12px',
                        backgroundColor: '#0B1F3A',
                        transform: 'rotate(45deg)',
                        marginTop: '-6px'
                      }}
                    />
                  </div>

                  {/* Satellite / Street Tag */}
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontSize: '0.72rem',
                      color: '#4B5563',
                      fontWeight: 600,
                      border: '1px solid #D1D5DB'
                    }}
                  >
                    San Francisco, CA • 37.7891° N, 122.3972° W
                  </div>
                </div>

                <div style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
                  <span style={{ fontSize: '0.86rem', color: '#4B5563', fontWeight: 600 }}>500 Howard St, San Francisco, CA</span>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    style={{ fontSize: '0.84rem', color: '#2F6FED', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    <span>Open in Maps</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ===================================================================
          3. SUPPORT OPTIONS (SALES, TECHNICAL SUPPORT, PARTNERSHIPS, CAREERS)
          =================================================================== */}
      <section className="section" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E5E7EB' }}>
        <div className="container">
          
          <div className="section-header">
            <div className="section-badge">
              <span className="section-badge-dot" />
              <span>Specialized Departments</span>
            </div>
            <h2 className="section-title">
              Direct Support Channels
            </h2>
            <p className="section-subtitle">
              Reach the exact team you need for sales consultations, 24/7 technical helpdesk, partner alliances, or career opportunities.
            </p>
          </div>

          {/* 4 Support Options Cards */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', 
              gap: '24px' 
            }}
          >
            {SUPPORT_OPTIONS.map((opt) => (
              <div 
                key={opt.id}
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
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <div 
                      style={{ 
                        width: '46px', 
                        height: '46px', 
                        borderRadius: '10px', 
                        backgroundColor: '#EEF4FE', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center' 
                      }}
                    >
                      {getSupportIcon(opt.id)}
                    </div>
                    <span 
                      style={{ 
                        fontSize: '0.74rem', 
                        fontWeight: 700, 
                        color: '#2F6FED', 
                        backgroundColor: '#F5F7FA', 
                        border: '1px solid #E5E7EB',
                        padding: '3px 10px', 
                        borderRadius: 'var(--radius-full)' 
                      }}
                    >
                      {opt.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B1F3A', marginBottom: '10px' }}>
                    {opt.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: '#4B5563', lineHeight: 1.6, marginBottom: '20px' }}>
                    {opt.desc}
                  </p>
                </div>

                <div style={{ paddingTop: '16px', borderTop: '1px solid #E5E7EB' }}>
                  <div style={{ fontSize: '0.86rem', color: '#2F6FED', fontWeight: 700, marginBottom: '4px' }}>
                    {opt.email}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#6B7280' }}>
                    {opt.phone}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
