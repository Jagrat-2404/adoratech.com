import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AmbientBackground from './components/AmbientBackground';
import ProjectEstimatorModal from './components/ProjectEstimatorModal';
import BlogReaderModal from './components/BlogReaderModal';
import CaseStudyModal from './components/CaseStudyModal';

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
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [prefilledScope, setPrefilledScope] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync with URL Hash on Mount & Hash Change
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace('#', '').toLowerCase();
      const validPages = ['home', 'about', 'services', 'blog', 'blogs', 'contact'];
      if (validPages.includes(rawHash)) {
        setActivePage(rawHash === 'blogs' ? 'blog' : rawHash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update Document Title & SEO Meta Tags on Page Change
  useEffect(() => {
    const pageMeta = {
      home: {
        title: 'AdoraTech | Reliable IT Solutions That Help Your Business Scale Securely',
        desc: 'AdoraTech delivers enterprise managed IT services, 24/7 cybersecurity, cloud migration, and bespoke software engineering for growing businesses.'
      },
      about: {
        title: 'About Us | AdoraTech - We Help Businesses Build Smarter, Safer Technology',
        desc: 'Learn about AdoraTech’s 15+ years of systems architecture experience, 5 core values, leadership team, and global ISO & SOC 2 certifications.'
      },
      services: {
        title: 'IT Services & Solutions | AdoraTech - Managed IT, Cloud, Cybersecurity',
        desc: 'Explore AdoraTech’s end-to-end IT services: 24/7 Managed IT, Cloud Migration, Cybersecurity & Compliance, Custom Software, IT Consulting, and BI Analytics.'
      },
      blog: {
        title: 'IT Insights & Technology Trends | AdoraTech Engineering Blog',
        desc: 'Read architectural whitepapers, hybrid cloud playbooks, and zero-trust cybersecurity frameworks written by our Principal IT Architects.'
      },
      contact: {
        title: 'Let’s Talk About Your IT Needs | AdoraTech Consultation',
        desc: 'Request an IT consultation with AdoraTech’s senior architects. We respond within one business day with tailored solutions and transparent estimates.'
      }
    };

    const currentMeta = pageMeta[activePage] || pageMeta.home;
    document.title = currentMeta.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', currentMeta.desc);
    }
  }, [activePage]);

  // Update URL Hash when Active Page changes
  const handlePageChange = (page) => {
    const targetPage = page === 'blogs' ? 'blog' : page;
    setActivePage(targetPage);
    window.location.hash = targetPage;
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
      tier: 'Dedicated Engagement',
      estimatedPrice: '$10,000 - $25,000',
      estimatedTimeline: '4 - 8 Weeks'
    });
    handlePageChange('contact');
  };

  return (
    <div className="app-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Royal Subtle Ambient Lighting */}
      <AmbientBackground />

      {/* Global Navigation Header (Sticky with prominent Consultation button) */}
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
            onSelectCaseStudy={(cs) => setSelectedCaseStudy(cs)}
            onSelectBlogPost={(post) => setSelectedBlogPost(post)}
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

        {(activePage === 'blog' || activePage === 'blogs') && (
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

      {/* Executive Footer */}
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

      {/* Interactive Case Study Modal */}
      <CaseStudyModal 
        caseStudy={selectedCaseStudy}
        isOpen={!!selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onConsultationClick={() => handlePageChange('contact')}
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
            backgroundColor: '#2F6FED',
            color: '#FFFFFF',
            boxShadow: '0 8px 24px rgba(47, 111, 237, 0.4)',
            border: 'none',
            width: '46px',
            height: '46px',
            cursor: 'pointer'
          }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}

    </div>
  );
}
