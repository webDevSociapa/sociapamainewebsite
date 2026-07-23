import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Services.css';

const allServicesData = [
  { id: 1, category: 'BRANDING', title: 'Brand Identity Design', tag: 'BRANDING & DESIGN', desc: 'Transformative visual identities, logos, color systems, and brand playbooks built to position your brand as an industry leader.', img: 'brand-identity-design.jpeg', link: '/brand-identity-design' },
  { id: 2, category: 'BRANDING', title: 'Brand Strategy & Positioning', tag: 'STRATEGY & ARCHITECTURE', desc: 'Data-driven brand positioning, competitive analysis, and strategic messaging to dominate your market category.', img: 'Consultation-&-Ideas.jpg', link: '/brand-strategy' },
  { id: 3, category: 'BRANDING', title: 'Packaging & Label Design', tag: 'PACKAGING DESIGN', desc: 'Shelf-stopping packaging and label designs engineered to catch eyes, evoke emotion, and drive immediate purchase decisions.', img: 'Packaging-and-Design.jpg', link: '/best-packaging-design-agency-india' },
  { id: 4, category: 'CREATIVE', title: 'Creative Designing & Visuals', tag: 'VISUAL SYSTEM', desc: 'Award-winning graphic design, social media creatives, ad banners, and marketing collaterals that command attention.', img: 'Creative-Designing.jpg', link: '/creative-designing' },
  { id: 5, category: 'BRANDING', title: 'Go-To-Market (GTM) Strategy', tag: 'LAUNCH & GROWTH', desc: 'End-to-end product launch blueprints, market entry tactics, and channel strategies designed for rapid commercial traction.', img: 'go to-market-services.jpeg', link: '/go-to-market' },
  { id: 6, category: 'BRANDING', title: 'Product Unboxing Experience', tag: 'UNBOXING DESIGN', desc: 'Memorable unboxing architecture and structural packaging that turns buyers into vocal brand advocates on social media.', img: 'product-unboxing-service.jpeg', link: '/product-unboxing-experience' },
  { id: 7, category: 'BRANDING', title: 'Company & GST Registration', tag: 'LEGAL & COMPLIANCE', desc: 'Hassle-free trademarking, brand naming, corporate legal registration, and GST compliance for growing businesses.', img: 'Registration-Services.jpg', link: '/gst-company-registration-services' },

  { id: 8, category: 'DIGITAL', title: '360° Digital Marketing', tag: 'PERFORMANCE MARKETING', desc: 'ROI-focused digital campaigns combining Meta Ads, Google PPC, programmatic buying, and funnel optimisation.', img: 'Digital-Marketing.jpg', link: '/best-digital-marketing-services-india' },
  { id: 9, category: 'DIGITAL', title: 'Social Media Management', tag: 'COMMUNITY & VIRAL', desc: 'Full-funnel social media strategy, community building, viral content creation, and real-time social listening.', img: 'Social-Media-Marketing.jpg', link: '/best-social-media-marketing-agency-india' },
  { id: 10, category: 'DIGITAL', title: 'Search Engine Optimisation (SEO)', tag: 'ORGANIC GROWTH', desc: 'Technical SEO, high-authority link building, and keyword strategies that secure Page 1 rankings on Google.', img: 'seo-aeo-geo-services.jpeg', link: '/seo-aeo-geo' },
  { id: 11, category: 'DIGITAL', title: 'Answer Engine Optimisation (AEO)', tag: 'AI SEARCH & VOICE', desc: 'Optimising content for AI search engines, voice assistants, and Google featured snippets to capture intent.', img: 'seo-aeo-geo-services.jpeg', link: '/seo-aeo-geo' },
  { id: 12, category: 'DIGITAL', title: 'Generative Engine Optimisation (GEO)', tag: 'NEXT-GEN AI', desc: 'Future-proofing your brand visibility across ChatGPT, Perplexity, Gemini, and AI-driven search platforms.', img: 'seo-aeo-geo-services.jpeg', link: '/seo-aeo-geo' },
  { id: 13, category: 'DIGITAL', title: 'Meta & Google Ads (PPC)', tag: 'PAID PERFORMANCE', desc: 'High-converting ad funnels engineered for low customer acquisition cost (CAC) and maximum Return on Ad Spend (ROAS).', img: 'Ad-Experience.jpg', link: '/pay-per-click-ppc-services-india' },
  { id: 14, category: 'DIGITAL', title: 'Email & WhatsApp Automation', tag: 'RETENTION & CRO', desc: 'Automated lifecycle flows, broadcast campaigns, and hyper-segmented retention strategies that boost customer LTV.', img: 'Email-Marketing.jpg', link: '/email-marketing-services' },

  { id: 15, category: 'CREATIVE', title: 'Video Production & Editing', tag: 'COMMERCIAL & REELS', desc: 'High-end TVCs, brand films, viral Instagram Reels, product demos, and corporate videography produced from concept to cut.', img: 'Video-Production.jpg', link: '/videos' },
  { id: 16, category: 'CREATIVE', title: 'Commercial Photography', tag: 'STUDIO & PRODUCT', desc: 'High-definition studio photography, e-commerce catalog shoots, lifestyle imagery, and model shoots for digital ads.', img: 'Photography.jpg', link: '/best-photography-services' },
  { id: 17, category: 'CREATIVE', title: 'PR & Media Relations', tag: 'CREDIBILITY & PRESS', desc: 'Press releases, top-tier news placement, executive profiling, and reputation management across national publications.', img: 'Public-Relation.jpg', link: '/best-pr-agency-india' },
  { id: 18, category: 'CREATIVE', title: 'Influencer Marketing & Marketplace', tag: 'CREATOR COLLABS', desc: 'Connecting your brand with 5,000+ vetted micro, macro, and celebrity influencers for high-trust brand advocacy.', img: 'Influencer-Marketing.jpg', link: '/influencer-marketing-services' },
  { id: 19, category: 'DIGITAL', title: 'Website & Web App Development', tag: 'TECH & UI/UX', desc: 'Custom, blazing-fast Shopify, React, and WordPress websites built for flawless user experience and maximum conversion rates.', img: 'Website-App-Development.jpg', link: '/best-web-development-agency-india' },
  { id: 20, category: 'DIGITAL', title: 'Aggregator Platform Optimization', tag: 'E-COMMERCE & B2B', desc: 'Maximizing brand presence, product listings, and ad performance across Amazon, Flipkart, Blinkit, and Zepto.', img: 'Aggregator-Platform-Service.jpg', link: '/aggregator-platform-service' }
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const base = import.meta.env.BASE_URL;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredServices = activeCategory === 'ALL'
    ? allServicesData
    : allServicesData.filter(s => s.category === activeCategory);

  return (
    <div className="services-page-wrapper">
      <Helmet>
        <title>Our Services | Full-Service Digital Marketing &amp; Brand Agency - Sociapa</title>
        <meta name="description" content="Explore Sociapa's 20+ specialized services: Brand Identity, Packaging Design, Performance Marketing, SEO, AEO, GEO, PR, Video Production, and Web Development." />
        <link rel="canonical" href="https://www.sociapa.com/our-services" />
        <meta property="og:title" content="Our Services — Sociapa Digital & Creative Agency" />
        <meta property="og:description" content="End-to-End Digital Solutions & Brand Acceleration Services by Sociapa." />
        <meta property="og:url" content="https://www.sociapa.com/video/" />
      </Helmet>

      {/* ── HERO SECTION ── */}
      <section className="services-hero-section page-hero-section">
        <div className="services-hero-glow"></div>
        <div className="container services-hero-container">
          <div className="section-label services-hero-label">
            <span className="services-hero-dot"></span>
            WHAT WE DO BEST
          </div>

          <h1 className="hero-title services-hero-title">
            End-to-End <span className="highlight services-hero-highlight">Digital Solutions</span> &amp; Brand Acceleration
          </h1>

          <p className="services-hero-desc">
            From strategic brand positioning to high-converting performance marketing and full-scale digital execution, we provide everything your brand needs to scale.
          </p>

          {/* Category Filter Chips */}
          <div className="services-filter-tabs">
            {[
              { id: 'ALL', label: 'All Services (20)' },
              { id: 'BRANDING', label: 'Branding & Strategy' },
              { id: 'DIGITAL', label: 'Digital & Performance' },
              { id: 'CREATIVE', label: 'Creative & Production' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`filter-chip ${activeCategory === tab.id ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="services-grid-container">
        <div className="services-grid">
          {filteredServices.map((service, idx) => (
            <Link 
              to={service.link} 
              className="service-card animate-on-scroll" 
              key={idx}
            >
              {/* Full Background Image */}
              <img 
                src={`${base}images/services/${service.img}`} 
                alt={service.title} 
                className="service-card-image-bg" 
                loading="lazy"
                decoding="async"
              />

              {/* Gradient Overlay for High Readability */}
              <div className="service-card-overlay" />

              {/* Top Tag Badge */}
              <div className="service-card-tag">{service.tag}</div>

              {/* Bottom Info Overlay */}
              <div className="service-card-info">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.desc}</p>
                <div className="service-card-link-wrapper">
                  <span>Explore Service</span>
                  <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── HIGH-CONVERTING AUDIT & INQUIRY CTA ── */}
      <section className="services-cta-section">
        <div className="container services-cta-container">
          <h2 className="services-cta-title">
            Need a Tailored Growth Strategy for Your Brand?
          </h2>
          <p className="services-cta-desc">
            Get a free comprehensive website &amp; SEO audit or talk directly with our senior brand strategists to map out your digital roadmap.
          </p>

          <div className="services-cta-buttons">
            <Link to="/free-website-audit" className="btn btn-primary services-cta-audit-btn">
              Get Free SEO Audit ✦
            </Link>

            <Link to="/contact-us" className="services-cta-contact-btn">
              Schedule Free Call ➔
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
