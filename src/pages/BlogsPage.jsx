import React, { useState } from 'react';
import { 
  Search, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Tag, 
  Sparkles, 
  Terminal, 
  BookOpen, 
  Share2, 
  CheckCircle2, 
  TrendingUp,
  Bookmark
} from 'lucide-react';
import { BLOG_POSTS } from '../data/mockData';
import ModernCard from '../components/ModernCard';

export default function BlogsPage({ onSelectPost }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Web Engineering',
    'AI & Machine Learning',
    'Mobile Development',
    'Cybersecurity & Cloud',
    'Enterprise Software'
  ];

  // Filtering
  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS[0];

  return (
    <div style={{ position: 'relative' }}>
      
      {/* ===================================================================
          1. BLOGS HERO
          =================================================================== */}
      <section className="section-hero">
        <div className="container">
          <div style={{ maxWidth: '1240px', margin: '0 auto', textAlign: 'center' }}>
            <div className="section-badge">
              <span className="section-badge-dot" />
              <span>Applied Engineering Intelligence</span>
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
              Architectural Blueprints &{' '}
              <span className="text-gradient-brand">Technical Insights</span>
            </h1>

            <p style={{ fontSize: '1.2rem', color: 'var(--text-body)', lineHeight: 1.8, marginBottom: '36px' }}>
              Deep technical breakdowns written directly by our Principal Architects, Lead AI Researchers, and Cloud Engineers. No marketing fluff, just production reality.
            </p>

            {/* Search Input Bar */}
            <div 
              style={{ 
                maxWidth: '600px', 
                margin: '0 auto', 
                position: 'relative' 
              }}
            >
              <Search 
                size={20} 
                style={{ 
                  position: 'absolute', 
                  left: '20px', 
                  top: '50%', 
                  transform: 'translateY(-50%)', 
                  color: 'var(--text-muted)' 
                }} 
              />
              <input 
                type="text"
                placeholder="Search whitepapers by keyword (React, Flutter, RAG, Microservices)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '16px 20px 16px 52px',
                  borderRadius: 'var(--radius-full)',
                  background: '#ffffff',
                  border: '1px solid var(--border-light)',
                  color: 'var(--text-main)',
                  fontSize: '0.98rem',
                  boxShadow: 'var(--shadow-sm)'
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '18px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Clear
                </button>
              )}
            </div>

          </div>
        </div>
      </section>


      {/* ===================================================================
          2. FEATURED POST HERO (If no search filter active)
          =================================================================== */}
      {!searchQuery && selectedCategory === 'All' && featuredPost && (
        <section style={{ paddingBottom: '60px' }}>
          <div className="container">
            <ModernCard 
              className="clean-card"
              onClick={() => onSelectPost(featuredPost)}
              style={{
                padding: 'clamp(20px, 4vw, 48px)',
                cursor: 'pointer',
                background: '#ffffff',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-lg)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                gap: 'clamp(20px, 3vw, 40px)',
                alignItems: 'center'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <span 
                    style={{
                      padding: '5px 16px',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--primary-light)',
                      color: 'var(--primary)',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      border: '1px solid #bfdbfe'
                    }}
                  >
                    ⭐ Editor's Choice Whitepaper
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    {featuredPost.publishDate}
                  </span>
                </div>

                <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', fontWeight: 800, marginBottom: '18px', lineHeight: 1.25, color: 'var(--text-main)' }}>
                  {featuredPost.title}
                </h2>

                <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
                  {featuredPost.excerpt}
                </p>

                {/* Author & Read Time */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--grad-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '0.9rem' }}>
                      {featuredPost.author.avatar}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-main)' }}>{featuredPost.author.name}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{featuredPost.author.role}</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 700 }}>
                    <Clock size={16} />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Code Snippet Preview Box */}
              <div 
                style={{
                  background: '#090d1a',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '24px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.84rem',
                  lineHeight: 1.6,
                  color: '#cbd5e1',
                  boxShadow: '0 15px 35px rgba(15, 23, 42, 0.25)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '10px' }}>
                  <span style={{ color: '#60a5fa', fontSize: '0.78rem', fontWeight: 600 }}>module_federation.config.ts</span>
                  <span style={{ fontSize: '0.74rem', color: '#94a3b8' }}>React 19 Architecture</span>
                </div>
                <div><span style={{ color: '#60a5fa' }}>export default</span> defineConfig({'{'}</div>
                <div style={{ paddingLeft: '16px' }}>plugins: [</div>
                <div style={{ paddingLeft: '32px' }}>federation({'{'}</div>
                <div style={{ paddingLeft: '48px' }}>name: <span style={{ color: '#34d399' }}>'shell-app'</span>,</div>
                <div style={{ paddingLeft: '48px' }}>remotes: {'{'}</div>
                <div style={{ paddingLeft: '64px' }}>billing: <span style={{ color: '#34d399' }}>'https://cdn.adoratech.com/billing.js'</span></div>
                <div style={{ paddingLeft: '48px' }}>{'}'}</div>
                <div style={{ paddingLeft: '32px' }}>{'}'})</div>
                <div style={{ paddingLeft: '16px' }}>]</div>
                <div>{'}'});</div>

                <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '8px', color: '#60a5fa', fontWeight: 700, fontSize: '0.88rem' }}>
                  <span>Click to read full whitepaper</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </ModernCard>
          </div>
        </section>
      )}


      {/* ===================================================================
          3. CATEGORY PILLS & ARTICLES GRID
          =================================================================== */}
      <section className="section" style={{ background: 'var(--bg-subtle)' }}>
        <div className="container">
          
          {/* Category Filter Pills */}
          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '10px', 
              flexWrap: 'wrap', 
              marginBottom: '40px' 
            }}
          >
            {categories.map((cat, idx) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '9px 20px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    background: isSelected ? 'var(--grad-brand)' : '#ffffff',
                    color: isSelected ? '#ffffff' : 'var(--text-main)',
                    border: '1px solid ' + (isSelected ? 'transparent' : 'var(--border-light)'),
                    boxShadow: isSelected ? 'var(--shadow-brand)' : 'var(--shadow-xs)',
                    transition: 'all var(--transition)'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Result Count */}
          <div style={{ marginBottom: '24px', fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: 600 }}>
            Showing {filteredPosts.length} technical whitepaper{filteredPosts.length !== 1 ? 's' : ''}
          </div>

          {/* Posts Grid */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 310px), 1fr))', 
              gap: '28px',
              marginBottom: '60px'
            }}
          >
            {filteredPosts.map(post => (
              <ModernCard 
                key={post.id}
                className="clean-card"
                onClick={() => onSelectPost(post)}
                style={{
                  padding: 'clamp(22px, 3.5vw, 36px) clamp(18px, 3vw, 30px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: '#ffffff',
                  cursor: 'pointer'
                }}
              >
                <div>
                  {/* Category & Read Time */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span 
                      style={{
                        padding: '4px 14px',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--primary-light)',
                        color: 'var(--primary)',
                        fontSize: '0.78rem',
                        fontWeight: 700
                      }}
                    >
                      {post.category}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                      <Clock size={14} color="var(--primary)" /> {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 
                    style={{ 
                      fontSize: '1.35rem', 
                      fontWeight: 800, 
                      color: 'var(--text-main)', 
                      lineHeight: 1.35,
                      marginBottom: '14px' 
                    }}
                  >
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p style={{ fontSize: '0.94rem', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: '24px' }}>
                    {post.excerpt}
                  </p>
                </div>

                {/* Card Footer: Author & Read More */}
                <div style={{ paddingTop: '18px', borderTop: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'var(--grad-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.8rem', fontWeight: 800 }}>
                      {post.author.avatar}
                    </div>
                    <span style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-main)' }}>
                      {post.author.name}
                    </span>
                  </div>

                  <span 
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.86rem',
                      fontWeight: 700,
                      color: 'var(--primary)'
                    }}
                  >
                    <span>Read Whitepaper</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </ModernCard>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
