import React, { useState } from 'react';
import { 
  X, 
  Check, 
  Sparkles, 
  Clock, 
  Users, 
  Shield, 
  ArrowRight,
  Layers,
  Zap,
  Calculator
} from 'lucide-react';

export default function ProjectEstimatorModal({ isOpen, onClose, onApplyToContact }) {
  const [projectType, setProjectType] = useState('managed-it');
  const [tier, setTier] = useState('growth');
  const [selectedFeatures, setSelectedFeatures] = useState(['support', 'security', 'cloud']);
  const [urgency, setUrgency] = useState('standard');

  if (!isOpen) return null;

  const projectTypes = [
    { id: 'managed-it', label: 'Managed IT Services', basePrice: 6500, baseWeeks: 3 },
    { id: 'cloud-solutions', label: 'Cloud Solutions & Migration', basePrice: 8500, baseWeeks: 5 },
    { id: 'cybersecurity', label: 'Cybersecurity & Compliance', basePrice: 7500, baseWeeks: 4 },
    { id: 'software-dev', label: 'Custom Software Development', basePrice: 12000, baseWeeks: 8 },
    { id: 'it-consulting', label: 'IT Consulting & Digital Transformation', basePrice: 5500, baseWeeks: 3 },
    { id: 'data-analytics', label: 'Data Analytics & Business Intelligence', basePrice: 9000, baseWeeks: 6 }
  ];

  const tiers = [
    { id: 'mvp', label: 'Standard Support', multiplier: 0.85, desc: 'Essential monitoring, SLA response within 1 hour' },
    { id: 'growth', label: 'Dedicated Squad', multiplier: 1.25, desc: '24/7 NOC/SOC coverage, sub-15 min critical SLA' },
    { id: 'enterprise', label: 'Enterprise Grade', multiplier: 1.75, desc: 'Dedicated vCIO, zero-trust architecture, multi-region failover' }
  ];

  const featureOptions = [
    { id: 'support', label: '24/7/365 NOC Helpdesk Tier 1-3', price: 1500, weeks: 1 },
    { id: 'security', label: 'SOC 2 & ISO 27001 Audit Readiness', price: 2500, weeks: 2 },
    { id: 'cloud', label: 'Multi-Cloud Infrastructure (AWS/Azure)', price: 2200, weeks: 1 },
    { id: 'dr', label: 'Zero-Downtime Disaster Recovery', price: 2000, weeks: 1 },
    { id: 'cicd', label: 'Automated CI/CD & Infrastructure as Code', price: 1800, weeks: 1 },
    { id: 'vcio', label: 'Dedicated Fractional vCIO Advisory', price: 2400, weeks: 1 }
  ];

  const toggleFeature = (fId) => {
    setSelectedFeatures(prev => 
      prev.includes(fId) ? prev.filter(x => x !== fId) : [...prev, fId]
    );
  };

  // Calculate totals
  const currentType = projectTypes.find(t => t.id === projectType) || projectTypes[0];
  const currentTier = tiers.find(t => t.id === tier) || tiers[1];

  let calculatedPrice = currentType.basePrice * currentTier.multiplier;
  let calculatedWeeks = currentType.baseWeeks;

  selectedFeatures.forEach(fid => {
    const feat = featureOptions.find(f => f.id === fid);
    if (feat) {
      calculatedPrice += feat.price;
      calculatedWeeks += feat.weeks * 0.5;
    }
  });

  if (urgency === 'expedited') {
    calculatedPrice *= 1.2;
    calculatedWeeks = Math.max(3, Math.round(calculatedWeeks * 0.7));
  } else {
    calculatedWeeks = Math.round(calculatedWeeks);
  }

  const minPrice = Math.round(calculatedPrice * 0.9 / 500) * 500;
  const maxPrice = Math.round(calculatedPrice * 1.15 / 500) * 500;

  const handleProceed = () => {
    const summary = {
      projectType: currentType.label,
      tier: currentTier.label,
      features: selectedFeatures.map(fid => featureOptions.find(f => f.id === fid)?.label).filter(Boolean),
      estimatedPrice: `$${minPrice.toLocaleString()} - $${maxPrice.toLocaleString()}`,
      estimatedTimeline: `${calculatedWeeks} - ${calculatedWeeks + 2} Weeks`
    };
    onApplyToContact(summary);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content"
        onClick={e => e.stopPropagation()}
        style={{ padding: '34px', background: '#ffffff', border: '1px solid var(--border-light)' }}
      >
        {/* Modal Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontSize: '0.84rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>
              <Calculator size={16} />
              <span>Scope & Investment Calculator</span>
            </div>
            <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--text-main)' }}>Estimate Your IT Project</h2>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
              Configure your system parameters for real-time estimated investment and timeline.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="btn-icon-only"
            aria-label="Close Modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Body */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '30px' }}>
          
          {/* Controls Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            
            {/* Step 1: Project Type */}
            <div>
              <label className="form-label">1. Primary IT Capability</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 120px), 1fr))', gap: '8px' }}>
                {projectTypes.map(pt => (
                  <button
                    key={pt.id}
                    onClick={() => setProjectType(pt.id)}
                    style={{
                      padding: '10px 12px',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.86rem',
                      fontWeight: 700,
                      textAlign: 'left',
                      background: projectType === pt.id ? 'var(--grad-brand)' : '#ffffff',
                      border: '1px solid ' + (projectType === pt.id ? 'transparent' : 'var(--border-light)'),
                      color: projectType === pt.id ? '#ffffff' : 'var(--text-main)',
                      boxShadow: projectType === pt.id ? 'var(--shadow-brand)' : 'none',
                      cursor: 'pointer',
                      transition: 'all var(--transition)'
                    }}
                  >
                    {pt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Scale & Maturity */}
            <div>
              <label className="form-label">2. Architecture Scale & Complexity</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {tiers.map(t => (
                  <button
                    key={t.id}
                    onClick={() => setTier(t.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-md)',
                      background: tier === t.id ? 'var(--primary-light)' : '#ffffff',
                      border: '1px solid ' + (tier === t.id ? 'var(--primary)' : 'var(--border-light)'),
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all var(--transition)'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '0.92rem', color: tier === t.id ? 'var(--primary)' : 'var(--text-main)' }}>
                        {t.label}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-body)' }}>
                        {t.desc}
                      </div>
                    </div>
                    {tier === t.id && <Check size={18} color="var(--primary)" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Add-on Capabilities */}
            <div>
              <label className="form-label">3. Core Architectural Modules</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 120px), 1fr))', gap: '8px' }}>
                {featureOptions.map(f => {
                  const isChecked = selectedFeatures.includes(f.id);
                  return (
                    <button
                      key={f.id}
                      onClick={() => toggleFeature(f.id)}
                      style={{
                        padding: '10px 12px',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.84rem',
                        fontWeight: 600,
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: isChecked ? 'var(--primary-light)' : '#ffffff',
                        border: '1px solid ' + (isChecked ? 'var(--primary)' : 'var(--border-light)'),
                        color: isChecked ? 'var(--primary)' : 'var(--text-body)',
                        cursor: 'pointer',
                        transition: 'all var(--transition)'
                      }}
                    >
                      <span>{f.label}</span>
                      {isChecked && <Check size={14} color="var(--primary)" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Speed / Urgency */}
            <div>
              <label className="form-label">4. Delivery Velocity</label>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => setUrgency('standard')}
                  style={{
                    flex: 1,
                    padding: '10px',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.86rem',
                    fontWeight: 700,
                    background: urgency === 'standard' ? 'var(--primary-light)' : '#ffffff',
                    border: '1px solid ' + (urgency === 'standard' ? 'var(--primary)' : 'var(--border-light)'),
                    color: urgency === 'standard' ? 'var(--primary)' : 'var(--text-body)',
                    cursor: 'pointer'
                  }}
                >
                  Standard Agile Sprints
                </button>
                <button
                  onClick={() => setUrgency('expedited')}
                  style={{
                    flex: 1,
                    padding: '10px',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.86rem',
                    fontWeight: 700,
                    background: urgency === 'expedited' ? 'var(--primary-light)' : '#ffffff',
                    border: '1px solid ' + (urgency === 'expedited' ? 'var(--primary)' : 'var(--border-light)'),
                    color: urgency === 'expedited' ? 'var(--primary)' : 'var(--text-body)',
                    cursor: 'pointer'
                  }}
                >
                  Expedited Hyper-Sprint (+20%)
                </button>
              </div>
            </div>
          </div>

          {/* Results Summary Right Column */}
          <div 
            style={{ 
              background: 'var(--bg-subtle)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-lg)',
              padding: '26px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
                Estimated Architectural Investment
              </div>

              {/* Price Display */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--primary)' }}>
                  ${minPrice.toLocaleString()} - ${maxPrice.toLocaleString()}
                </div>
                <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                  Includes architectural blueprint, 100% full source code ownership, automated QA & 30-day post-launch warranty.
                </div>
              </div>

              {/* Timeline Display */}
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  padding: '14px', 
                  borderRadius: 'var(--radius-md)',
                  background: '#ffffff',
                  marginBottom: '16px',
                  border: '1px solid var(--border-light)'
                }}
              >
                <Clock size={20} color="var(--primary)" />
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Target Delivery Timeline</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)' }}>
                    {calculatedWeeks} - {calculatedWeeks + 2} Weeks
                  </div>
                </div>
              </div>

              {/* Squad Breakdown */}
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  padding: '14px', 
                  borderRadius: 'var(--radius-md)',
                  background: '#ffffff',
                  marginBottom: '20px',
                  border: '1px solid var(--border-light)'
                }}
              >
                <Users size={20} color="var(--accent-indigo)" />
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Dedicated Engineering Squad</div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-main)' }}>
                    1 Principal Architect, 2 Senior Engineers, 1 QA Lead
                  </div>
                </div>
              </div>

              {/* What is Included */}
              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '16px', marginBottom: '20px' }}>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-main)', fontWeight: 800, marginBottom: '8px' }}>
                  Guaranteed Deliverables:
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.84rem', color: 'var(--text-body)' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Check size={14} color="#059669" /> 100% Client Intellectual Property & Git Ownership
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Check size={14} color="#059669" /> Rigorous Automated CI/CD & Security Audits
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Check size={14} color="#059669" /> Mutual NDA Signed Before Kickoff
                  </li>
                </ul>
              </div>
            </div>

            {/* Proceed CTA */}
            <button
              onClick={handleProceed}
              className="btn btn-primary"
              style={{ width: '100%', padding: '15px', justifyContent: 'center' }}
            >
              <Sparkles size={18} />
              <span>Request Proposal with This Scope</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
