import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AmbientBackground from './components/AmbientBackground';
import ProjectEstimatorModal from './components/ProjectEstimatorModal';
import BlogReaderModal from './components/BlogReaderModal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import BlogsPage from './pages/BlogsPage';
import ContactPage from './pages/ContactPage';

import { ArrowUp } from 'lucide-react';

export default function App() {
  // Navigation State with URL Hash Support
  const [activePage, setActivePage] = useState('home');
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [selectedBlogPost, setSelectedBlogPost] = useState(null);
  const [prefilledScope, setPrefilledScope] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync with URL Hash on Mount & Hash Change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages = ['home', 'about', 'services', 'blogs', 'contact'];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update URL Hash when Active Page changes
  const handlePageChange = (page) => {
    setActivePage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to Top Listener
  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle Estimator Apply to Contact Form
  const handleApplyEstimatorToContact = (scopeData) => {
    setPrefilledScope(scopeData);
    handlePageChange('contact');
  };

  // Handle Specific Service Book Click from Services Page
  const handleSelectServiceForContact = (serviceTitle) => {
    setPrefilledScope({
      projectType: serviceTitle,
      tier: 'Standard Engagement',
      estimatedPrice: 'Based on Consultation',
      estimatedTimeline: '4 - 8 Weeks'
    });
    handlePageChange('contact');
  };

  return (
    <div className="app-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Royal Dynamic Ambient Lighting */}
      <AmbientBackground />

      {/* Global Navigation Header */}
      <Navbar 
        activePage={activePage}
        setActivePage={handlePageChange}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
      />

      {/* Main Page Body Container */}
      <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        {activePage === 'home' && (
          <HomePage 
            setActivePage={handlePageChange}
            onOpenEstimator={() => setIsEstimatorOpen(true)}
          />
        )}

        {activePage === 'about' && (
          <AboutPage 
            setActivePage={handlePageChange}
            onOpenEstimator={() => setIsEstimatorOpen(true)}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage 
            setActivePage={handlePageChange}
            onOpenEstimator={() => setIsEstimatorOpen(true)}
            onSelectServiceForContact={handleSelectServiceForContact}
          />
        )}

        {activePage === 'blogs' && (
          <BlogsPage 
            onSelectPost={(post) => setSelectedBlogPost(post)}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage 
            prefilledScope={prefilledScope}
          />
        )}
      </main>

      {/* Royal Executive Footer */}
      <Footer 
        setActivePage={handlePageChange}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
      />

      {/* Interactive Project Cost & Timeline Estimator Modal */}
      <ProjectEstimatorModal 
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        onApplyToContact={handleApplyEstimatorToContact}
      />

      {/* Interactive Blog Reader Modal */}
      <BlogReaderModal 
        post={selectedBlogPost}
        isOpen={!!selectedBlogPost}
        onClose={() => setSelectedBlogPost(null)}
      />

      {/* Floating Scroll to Top Action Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="btn-icon-only animate-float"
          style={{
            position: 'fixed',
            bottom: '28px',
            right: '28px',
            zIndex: 800,
            background: 'var(--grad-brand)',
            color: '#ffffff',
            boxShadow: 'var(--shadow-brand)',
            border: 'none',
            width: '46px',
            height: '46px'
          }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}

    </div>
  );
}
