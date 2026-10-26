import React from 'react';
import { 
  X, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  Calendar, 
  Award,
  ExternalLink
} from 'lucide-react';

export default function CaseStudyModal({ caseStudy, isOpen, onClose, onConsultationClick }) {
  if (!isOpen || !caseStudy) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(11, 31, 58, 0.75)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.25s ease-out'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-xl)',
          width: '100%',
          maxWidth: '780px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 25px 50px -12px rgba(11, 31, 58, 0.35)',
          border: '1px solid #E5E7EB',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image with Category Badge */}
        <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
          <img 
            src={caseStudy.image} 
            alt={caseStudy.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(180deg, rgba(11, 31, 58, 0.2) 0%, rgba(11, 31, 58, 0.85) 100%)'
            }}
          />

          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
              color: '#0B1F3A'
            }}
            aria-label="Close Case Study"
          >
            <X size={20} />
          </button>

          {/* Category & Title Over Image */}
          <div style={{ position: 'absolute', bottom: '20px', left: '24px', right: '24px' }}>
            <span 
              style={{
                display: 'inline-block',
                padding: '4px 14px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: '#2F6FED',
                color: '#FFFFFF',
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '10px'
              }}
            >
              {caseStudy.category}
            </span>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', margin: 0, lineHeight: 1.25 }}>
              {caseStudy.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '28px 32px' }}>
          
          {/* Client & Challenge Info */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', paddingBottom: '18px', borderBottom: '1px solid #E5E7EB', marginBottom: '22px' }}>
            <div>
              <div style={{ fontSize: '0.8rem', color: '#6B7280', textTransform: 'uppercase', fontWeight: 700 }}>Client Organization</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0B1F3A' }}>{caseStudy.client}</div>
            </div>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {caseStudy.tags && caseStudy.tags.map((tag, i) => (
                <span 
                  key={i}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    backgroundColor: '#F5F7FA',
                    border: '1px solid #E5E7EB',
                    fontSize: '0.78rem',
                    color: '#4B5563',
                    fontWeight: 600
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0B1F3A', marginBottom: '10px' }}>
              Executive Overview & Architecture
            </h4>
            <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.98rem' }}>
              {caseStudy.description}
            </p>
          </div>

          {/* Verified Key Metrics Grid */}
          <div style={{ marginBottom: '26px' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0B1F3A', marginBottom: '14px' }}>
              Verified Performance Impact
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px' }}>
              {caseStudy.metrics && caseStudy.metrics.map((metric, i) => (
                <div 
                  key={i}
                  style={{
                    padding: '16px 18px',
                    backgroundColor: '#EEF4FE',
                    border: '1px solid #BFDBFE',
                    borderRadius: 'var(--radius-md)'
                  }}
                >
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#2F6FED', lineHeight: 1 }}>
                    {metric.value}
                  </div>
                  <div style={{ fontSize: '0.84rem', color: '#4B5563', fontWeight: 600, marginTop: '6px' }}>
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Executive Client Quote */}
          {caseStudy.quote && (
            <div 
              style={{
                padding: '18px 22px',
                borderLeft: '4px solid #2F6FED',
                backgroundColor: '#F5F7FA',
                borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                marginBottom: '28px',
                fontStyle: 'italic',
                color: '#1F2937',
                lineHeight: 1.6,
                fontSize: '0.95rem'
              }}
            >
              “{caseStudy.quote}”
            </div>
          )}

          {/* CTA Footer */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', paddingTop: '16px', borderTop: '1px solid #E5E7EB' }}>
            <button
              onClick={onClose}
              className="btn btn-secondary"
              style={{ padding: '10px 20px', fontSize: '0.9rem' }}
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                if (onConsultationClick) onConsultationClick();
              }}
              className="btn btn-primary"
              style={{ padding: '10px 24px', fontSize: '0.9rem', backgroundColor: '#2F6FED', color: '#FFFFFF' }}
            >
              <span>Discuss Similar Solution</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
