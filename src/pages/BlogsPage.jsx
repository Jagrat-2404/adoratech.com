import React, { useState } from 'react';
import { 
  Search, 
  Clock, 
  ArrowRight, 
  Send, 
  CheckCircle2, 
  BookOpen, 
  Sparkles
} from 'lucide-react';
import { BLOG_POSTS } from '../data/mockData';

export default function BlogsPage({ onSelectPost }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(4);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  // Exactly the 6 categories requested in prompt
  const categories = [
    'All',
    'Cloud',
    'Cybersecurity',
    'Software Development',
    'AI',
    'IT Management'
  ];

  // Filtering
  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = selectedCategory === 'All' || 
      post.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS[0];
  const gridPosts = filteredPosts.filter(p => p.id !== featuredPost.id || selectedCategory !== 'All');
  const displayedPosts = gridPosts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@') || !newsletterEmail.includes('.')) {
      setNewsletterError('Please enter a valid corporate email');
      return;
    }
    setNewsletterError('');
    setNewsletterSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <div style={{ position: 'relative' }}>
      
      {/* ===================================================================
          1. BLOG PAGE HERO
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
              <span>Technology & Architecture Publications</span>
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
              Insights, Guides, and Technology Trends
            </h1>

            <p style={{ fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)', color: '#4B5563', lineHeight: 1.7, marginBottom: '32px' }}>
              Practical architectural blueprints, cloud cost mitigation guides, and zero-trust cybersecurity strategies written by our Principal IT Engineers.
            </p>

            {/* Search Input Bar */}
            <div 
              style={{ 
                maxWidth: '560px', 
                margin: '0 auto 28px auto', 
                position: 'relative' 
              }}
            >
              <Search 
                size={18} 
                style={{ 
                  position: 'absolute', 
                  left: '18px', 
                  top: '50%', 
                  transform: 'translateY(-50%)', 
                  color: '#6B7280' 
                }} 
              />
              <input 
                type="text"
                placeholder="Search articles by keyword (Cloud, Security, AI, ERP)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px 20px 14px 48px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid #D1D5DB',
                  backgroundColor: '#FFFFFF',
                  color: '#1F2937',
                  fontSize: '0.94rem',
                  boxShadow: '0 4px 14px rgba(11, 31, 58, 0.05)'
                }}
              />
            </div>

            {/* Category Filters (All, Cloud, Cybersecurity, Software Development, AI, IT Management) */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setVisibleCount(4);
                    }}
                    style={{
                      padding: '8px 18px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.88rem',
                      fontWeight: isActive ? 700 : 600,
                      backgroundColor: isActive ? '#0B1F3A' : '#F5F7FA',
                      color: isActive ? '#FFFFFF' : '#4B5563',
                      border: isActive ? '1px solid #0B1F3A' : '1px solid #E5E7EB',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ===================================================================
          2. FEATURED BLOG POST AT THE TOP
          =================================================================== */}
      {selectedCategory === 'All' && !searchQuery && featuredPost && (
        <section style={{ backgroundColor: '#FFFFFF', padding: '50px 0 20px 0' }}>
          <div className="container">
            <div 
              className="clean-card"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid #E5E7EB',
                overflow: 'hidden',
                boxShadow: '0 12px 36px rgba(11, 31, 58, 0.08)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
                alignItems: 'center'
              }}
            >
              {/* Featured Image */}
              <div style={{ height: '340px', position: 'relative', overflow: 'hidden' }}>
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    top: '18px',
                    left: '18px',
                    backgroundColor: '#2F6FED',
                    color: '#FFFFFF',
                    fontSize: '0.76rem',
                    fontWeight: 700,
                    padding: '5px 14px',
                    borderRadius: 'var(--radius-full)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em'
                  }}
                >
                  Featured Publication
                </div>
              </div>

              {/* Featured Details */}
              <div style={{ padding: 'clamp(28px, 4vw, 44px)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#6B7280', marginBottom: '10px' }}>
                  <span style={{ color: '#2F6FED', fontWeight: 700, textTransform: 'uppercase' }}>{featuredPost.category}</span>
                  <span>•</span>
                  <Clock size={14} />
                  <span>{featuredPost.readTime}</span>
                  <span>•</span>
                  <span>{featuredPost.publishDate}</span>
                </div>

                <h2 style={{ fontSize: 'clamp(1.4rem, 2.4vw, 1.85rem)', fontWeight: 800, color: '#0B1F3A', marginBottom: '14px', lineHeight: 1.3 }}>
                  {featuredPost.title}
                </h2>

                <p style={{ fontSize: '1rem', color: '#4B5563', lineHeight: 1.7, marginBottom: '24px' }}>
                  {featuredPost.excerpt}
                </p>

                {/* Author & Button */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', paddingTop: '18px', borderTop: '1px solid #E5E7EB' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img 
                      src={featuredPost.author.avatar} 
                      alt={featuredPost.author.name}
                      style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                    <div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0B1F3A' }}>
                        {featuredPost.author.name}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#6B7280' }}>
                        {featuredPost.author.role}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectPost && onSelectPost(featuredPost)}
                    className="btn btn-primary"
                    style={{ padding: '10px 22px', fontSize: '0.9rem', backgroundColor: '#2F6FED', color: '#FFFFFF' }}
                  >
                    <span>Read Article</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* ===================================================================
          3. BLOG POST CARDS GRID
          =================================================================== */}
      <section className="section" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="container">
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0B1F3A' }}>
              {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`} ({gridPosts.length})
            </h3>
            {searchQuery && (
              <span style={{ fontSize: '0.88rem', color: '#6B7280' }}>
                Showing results matching "{searchQuery}"
              </span>
            )}
          </div>

          {displayedPosts.length === 0 ? (
            <div 
              style={{ 
                padding: '60px 20px', 
                textAlign: 'center', 
                backgroundColor: '#FFFFFF', 
                borderRadius: 'var(--radius-lg)',
                border: '1px solid #E5E7EB'
              }}
            >
              <BookOpen size={40} color="#9CA3AF" style={{ margin: '0 auto 16px auto' }} />
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0B1F3A', marginBottom: '8px' }}>
                No articles found
              </h4>
              <p style={{ color: '#6B7280', fontSize: '0.94rem' }}>
                Try adjusting your search keyword or selecting a different category.
              </p>
            </div>
          ) : (
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', 
                gap: '30px' 
              }}
            >
              {displayedPosts.map((post) => (
                <div 
                  key={post.id}
                  className="clean-card"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E5E7EB',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  {/* Image Placeholder & Category Tag */}
                  <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                    <img 
                      src={post.image} 
                      alt={post.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div 
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        backgroundColor: '#2F6FED',
                        color: '#FFFFFF',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-full)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em'
                      }}
                    >
                      {post.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#6B7280', marginBottom: '10px' }}>
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span>{post.publishDate}</span>
                      </div>

                      <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0B1F3A', marginBottom: '10px', lineHeight: 1.38 }}>
                        {post.title}
                      </h4>

                      <p style={{ fontSize: '0.92rem', color: '#4B5563', lineHeight: 1.6, marginBottom: '20px' }}>
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Author & Read More Button */}
                    <div style={{ paddingTop: '16px', borderTop: '1px solid #E5E7EB', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <img 
                          src={post.author.avatar} 
                          alt={post.author.name}
                          style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }}
                        />
                        <span style={{ fontSize: '0.84rem', fontWeight: 700, color: '#1F2937' }}>
                          {post.author.name}
                        </span>
                      </div>

                      <button
                        onClick={() => onSelectPost && onSelectPost(post)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#2F6FED',
                          fontWeight: 700,
                          fontSize: '0.9rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          cursor: 'pointer'
                        }}
                      >
                        <span>Read More</span>
                        <ArrowRight size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination or "Load More" button */}
          {gridPosts.length > visibleCount && (
            <div style={{ textAlign: 'center', marginTop: '48px' }}>
              <button
                onClick={handleLoadMore}
                className="btn btn-secondary"
                style={{ padding: '13px 32px', fontSize: '0.96rem', border: '1px solid #D1D5DB' }}
              >
                <span>Load More Articles</span>
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ===================================================================
          4. NEWSLETTER SIGNUP SECTION: "Get IT insights in your inbox"
          =================================================================== */}
      <section 
        style={{ 
          backgroundColor: '#0B1F3A', 
          color: '#FFFFFF', 
          padding: 'clamp(56px, 7vw, 84px) 0',
          position: 'relative' 
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#60A5FA',
                fontSize: '0.82rem',
                fontWeight: 700,
                marginBottom: '18px'
              }}
            >
              <Sparkles size={16} />
              <span>Bi-Weekly Architectural Dispatch</span>
            </div>

            {/* Exact Section Headline */}
            <h2 
              style={{ 
                fontSize: 'clamp(2rem, 3.8vw, 3rem)', 
                fontWeight: 900, 
                lineHeight: 1.2, 
                marginBottom: '16px',
                color: '#FFFFFF',
                letterSpacing: '-0.03em'
              }}
            >
              Get IT insights in your inbox
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#94A3B8', lineHeight: 1.65, marginBottom: '32px' }}>
              Stay ahead with practical technology strategies, cloud migration playbooks, and cybersecurity compliance checklists. No fluff, only verified enterprise architecture.
            </p>

            {newsletterSubscribed ? (
              <div 
                style={{ 
                  backgroundColor: 'rgba(16, 185, 129, 0.18)', 
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  padding: '16px 24px',
                  borderRadius: 'var(--radius-md)',
                  color: '#34D399',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <CheckCircle2 size={22} />
                <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>You are subscribed to AdoraTech IT Insights!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} style={{ maxWidth: '520px', margin: '0 auto' }}>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <input 
                    type="email"
                    placeholder="Enter corporate email address..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    style={{
                      flex: '1 1 240px',
                      padding: '14px 20px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      border: newsletterError ? '1px solid #EF4444' : '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#FFFFFF',
                      fontSize: '0.94rem'
                    }}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      padding: '14px 28px',
                      backgroundColor: '#2F6FED',
                      color: '#FFFFFF',
                      fontSize: '0.95rem',
                      boxShadow: 'none'
                    }}
                  >
                    <span>Subscribe</span>
                    <Send size={15} />
                  </button>
                </div>
                {newsletterError && (
                  <span style={{ fontSize: '0.8rem', color: '#EF4444', marginTop: '8px', display: 'block' }}>
                    {newsletterError}
                  </span>
                )}
                <div style={{ fontSize: '0.78rem', color: '#94A3B8', marginTop: '12px' }}>
                  Zero spam. Unsubscribe with a single click anytime.
                </div>
              </form>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}
