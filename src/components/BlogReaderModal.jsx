import React from 'react';
import { 
  X, 
  Clock, 
  Calendar, 
  User, 
  Tag, 
  Share2, 
  Bookmark, 
  ArrowLeft
} from 'lucide-react';

export default function BlogReaderModal({ post, isOpen, onClose }) {
  if (!isOpen || !post) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content"
        onClick={e => e.stopPropagation()}
        style={{ 
          maxWidth: '840px', 
          maxHeight: '92vh',
          padding: '0',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          background: '#ffffff',
          border: '1px solid var(--border-light)'
        }}
      >
        {/* Modal Top Bar */}
        <div 
          style={{ 
            padding: '18px 26px', 
            borderBottom: '1px solid var(--border-light)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            background: 'var(--bg-subtle)'
          }}
        >
          <button
            onClick={onClose}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.9rem',
              color: 'var(--text-main)',
              fontWeight: 700,
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to Insights</span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span 
              style={{
                padding: '4px 14px',
                borderRadius: 'var(--radius-full)',
                background: 'var(--primary-light)',
                color: 'var(--primary)',
                fontSize: '0.8rem',
                fontWeight: 700,
                border: '1px solid #bfdbfe'
              }}
            >
              {post.category}
            </span>
            <button 
              onClick={onClose}
              className="btn-icon-only"
              style={{ width: '34px', height: '34px' }}
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Article Body */}
        <div style={{ padding: '38px 34px', overflowY: 'auto', flex: 1, background: '#ffffff' }}>
          
          {/* Article Title */}
          <h1 
            style={{ 
              fontSize: '2.2rem', 
              fontWeight: 800, 
              lineHeight: 1.25, 
              marginBottom: '20px',
              color: 'var(--text-main)'
            }}
          >
            {post.title}
          </h1>

          {/* Metadata Row */}
          <div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              alignItems: 'center', 
              gap: '20px', 
              paddingBottom: '24px',
              borderBottom: '1px solid var(--border-light)',
              marginBottom: '30px'
            }}
          >
            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div 
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'var(--grad-brand)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '0.9rem'
                }}
              >
                {post.author.avatar}
              </div>
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-main)' }}>
                  {post.author.name}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  {post.author.role}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <Calendar size={15} color="var(--primary)" />
              <span>{post.publishDate}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', color: 'var(--primary)', fontWeight: 600 }}>
              <Clock size={15} />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Excerpt Lead */}
          <div 
            style={{ 
              fontSize: '1.15rem', 
              color: 'var(--text-main)', 
              lineHeight: 1.75, 
              fontStyle: 'italic',
              background: 'var(--primary-light)',
              borderLeft: '4px solid var(--primary)',
              padding: '18px 24px',
              borderRadius: '0 8px 8px 0',
              marginBottom: '34px'
            }}
          >
            "{post.excerpt}"
          </div>

          {/* Render Rich Content */}
          <div 
            style={{ 
              fontSize: '1.05rem', 
              lineHeight: 1.85, 
              color: 'var(--text-body)',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}
          >
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '18px' }}>
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('#### ')) {
                return (
                  <h4 key={index} style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)', marginTop: '14px' }}>
                    {paragraph.replace('#### ', '')}
                  </h4>
                );
              }
              if (paragraph.startsWith('```')) {
                const codeContent = paragraph.replace(/```[a-z]*\n?/g, '').trim();
                return (
                  <div 
                    key={index}
                    style={{
                      background: '#090d1a',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 'var(--radius-md)',
                      padding: '20px 24px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.88rem',
                      color: '#93c5fd',
                      overflowX: 'auto',
                      lineHeight: 1.6,
                      boxShadow: '0 4px 15px rgba(15, 23, 42, 0.15)'
                    }}
                  >
                    <pre>{codeContent}</pre>
                  </div>
                );
              }
              return (
                <p key={index} style={{ margin: 0 }}>
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div style={{ marginTop: '36px', paddingTop: '24px', borderTop: '1px solid var(--border-light)', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {post.tags.map((tag, idx) => (
              <span 
                key={idx}
                style={{
                  padding: '5px 14px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-subtle)',
                  fontSize: '0.82rem',
                  color: 'var(--text-main)',
                  fontWeight: 600,
                  border: '1px solid var(--border-light)'
                }}
              >
                #{tag}
              </span>
            ))}
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div 
          style={{ 
            padding: '18px 28px', 
            borderTop: '1px solid var(--border-light)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'var(--bg-subtle)'
          }}
        >
          <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            Published by AdoraTech Applied Engineering Group
          </div>
          <button 
            onClick={onClose}
            className="btn btn-primary"
            style={{ padding: '9px 24px', fontSize: '0.9rem' }}
          >
            Close Whitepaper
          </button>
        </div>
      </div>
    </div>
  );
}
