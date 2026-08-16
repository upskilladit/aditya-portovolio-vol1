import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LatestVideo from './components/LatestVideo';
import BlogSection from './components/BlogSection';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import CompanySection from './components/CompanySection';
import ProductsSection from './components/ProductsSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

// Modals
import ContactModal from './components/ContactModal';
import NewsletterModal from './components/NewsletterModal';
import ArticleModal from './components/ArticleModal';
import ProductModal from './components/ProductModal';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [newsletterModalOpen, setNewsletterModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="app-root">
      {/* Top Sticky Navbar */}
      <Navbar
        onOpenContact={() => setContactModalOpen(true)}
        onOpenNewsletter={() => setNewsletterModalOpen(true)}
      />

      {/* Main Content Flow matching Figma */}
      <main>
        <Hero onOpenContact={() => setContactModalOpen(true)} />
        <LatestVideo />
        <BlogSection onSelectArticle={(article) => setSelectedArticle(article)} />
        <PortfolioSection onSelectProject={(project) => setSelectedProject(project)} />
        <AboutSection onOpenContact={() => setContactModalOpen(true)} />
        <ExperienceSection />
        <CompanySection onOpenContact={() => setContactModalOpen(true)} />
        <ProductsSection onSelectProduct={(prod) => setSelectedProduct(prod)} />
        <CtaSection onOpenNewsletter={() => setNewsletterModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onOpenContact={() => setContactModalOpen(true)}
        onOpenNewsletter={() => setNewsletterModalOpen(true)}
      />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      <NewsletterModal
        isOpen={newsletterModalOpen}
        onClose={() => setNewsletterModalOpen(false)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={() => setContactModalOpen(true)}
      />
    </div>
  );
}
