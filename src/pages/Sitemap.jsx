import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Sitemap.css';

const sitemapData = [
  {
    id: 'core',
    category: 'Core & Company',
    icon: '🏛️',
    gradient: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
    description: 'Main corporate channels, leadership recognition, and brand storytelling.',
    links: [
      { label: 'Home Page', href: '/', badge: 'HQ', desc: 'Main landing and global agency introduction' },
      { label: 'About Sociapa', href: '/about', badge: 'Story', desc: 'Our mission, team, vision and culture since 2019' },
      { label: 'Our Services Hub', href: '/our-services', badge: 'Solutions', desc: 'Complete 20+ service catalogue and capabilities' },
      { label: 'Case Studies', href: '/case-studies', badge: 'Portfolio', desc: 'Proven ROI case studies across FMCG & D2C brands' },
      { label: 'News & Stories', href: '/stories', badge: 'Insights', desc: 'Agency milestones, brand campaigns and highlights' },
      { label: 'Awards & Honors', href: '/best-creative-and-digital-agency-award', badge: 'Accolades', desc: 'National awards, industry trophies and press recognition' },
      { label: 'Press Releases', href: '/sociapas-press-release', badge: 'Media', desc: 'Silicon India, CEO Story, MediaNews4U features' },
      { label: 'Careers at Sociapa', href: '/career', badge: 'Hiring', desc: 'Join our 60+ in-house creative & digital innovators' },
      { label: 'Contact Us', href: '/contact-us', badge: 'Connect', desc: 'Noida HQ, Delhi NCR, Dubai UAE & London UK offices' },
      { label: 'Free Website Audit', href: '/free-website-audit', badge: 'Free Tool', desc: 'Instant comprehensive SEO & technical website report' },
      { label: 'Marketing Calendar 2026', href: '/2026', badge: 'Guide', desc: 'Strategic event dates and social campaign calendar' },
      { label: 'Company Profile Deck', href: '/sociapa-profile', badge: 'Credentials', desc: 'Official agency credentials & service presentation' }
    ]
  },
  {
    id: 'growth',
    category: 'Digital & Growth Services',
    icon: '🚀',
    gradient: 'linear-gradient(135deg, #D20C0C 0%, #900808 100%)',
    description: 'Performance advertising, search dominance and revenue engine optimization.',
    links: [
      { label: 'Digital Marketing Services', href: '/best-digital-marketing-services-india', badge: 'Performance', desc: '360° ROI-driven multi-channel growth campaigns' },
      { label: 'Pay Per Click (PPC / Ad Experience)', href: '/pay-per-click-ppc-services-india', badge: 'Paid Media', desc: 'High-converting Google Ads & Meta advertising funnels' },
      { label: 'SEO | AEO | GEO Optimization', href: '/seo-aeo-geo', badge: 'AI Search', desc: 'Search, Answer Engine & Generative Engine optimization' },
      { label: 'Social Media Marketing', href: '/best-social-media-marketing-agency-india', badge: 'Community', desc: 'Viral creative campaigns, Reels & community engagement' },
      { label: 'Email & WhatsApp Marketing', href: '/email-marketing-services', badge: 'Retention', desc: 'Automated lifecycle funnels, broadcasts & high LTV retention' },
      { label: 'Aggregator Platform Management', href: '/aggregator-platform-service', badge: 'E-Commerce', desc: 'Amazon, Flipkart, Blinkit & Zepto ad dominance' },
      { label: 'Geofencing Advertising', href: '/geofencing', badge: 'Location', desc: 'Hyperlocal location-based mobile advertising & footfall tracking' },
      { label: 'Polygon Targeting', href: '/polygon', badge: 'Precision', desc: 'Custom boundary audience mapping with zero spillover' },
      { label: 'Go-To-Market Strategy', href: '/go-to-market', badge: 'Launch', desc: 'End-to-end commercial product launch blueprints' }
    ]
  },
  {
    id: 'branding',
    category: 'Branding & Creative Design',
    icon: '🎨',
    gradient: 'linear-gradient(135deg, #0F766E 0%, #115E59 100%)',
    description: 'Transformative visual identities, packaging systems and design playbooks.',
    links: [
      { label: 'Brand Identity Design', href: '/brand-identity-design', badge: 'Identity', desc: 'Visual systems, logos, typography & design guidelines' },
      { label: 'Brand Strategy & Positioning', href: '/brand-strategy', badge: 'Strategy', desc: 'Category differentiation, messaging & audience psychology' },
      { label: 'Packaging & Label Design', href: '/best-packaging-design-agency-india', badge: 'Packaging', desc: 'Award-winning FMCG structural packaging & retail design' },
      { label: 'Product Unboxing Experience', href: '/product-unboxing-experience', badge: 'Unboxing', desc: 'Viral unboxing architecture engineered for social sharing' },
      { label: 'Creative Designing', href: '/creative-designing', badge: 'Visuals', desc: 'High-impact digital creatives, banners & brand collaterals' },
      { label: 'Content Designing & Strategy', href: '/content-designing', badge: 'Content', desc: 'Editorial storytelling, campaign copywriting & scripts' },
      { label: 'Brand Consultation & Idea', href: '/consultation-idea', badge: 'Advisory', desc: 'Strategic advisory workshops and breakthrough concepts' },
      { label: 'GST & Trademark Registration', href: '/gst-company-registration-services', badge: 'Legal', desc: 'Corporate legal filing, trademarking & compliance' }
    ]
  },
  {
    id: 'media',
    category: 'Media, Influencers & Tech',
    icon: '🎬',
    gradient: 'linear-gradient(135deg, #4338CA 0%, #312E81 100%)',
    description: 'Celebrity partnerships, film production and bespoke web engineering.',
    links: [
      { label: 'Influencers Marketplace', href: '/influencers-marketplace', badge: '5,000+ Creators', desc: 'Curated roster of micro, macro & celebrity advocates' },
      { label: 'Influencer Marketing Agency', href: '/influencer-marketing-services', badge: 'Campaigns', desc: 'End-to-end creator matchmaking, contracts & reporting' },
      { label: 'Need Influencers for Brand', href: '/influencer-need', badge: 'Hiring', desc: 'Direct creator briefing & brand campaign onboarding' },
      { label: 'Video Production & TVCs', href: '/videos', badge: 'Production', desc: 'High-end TV commercials, brand films & viral Reels' },
      { label: 'Product & Studio Photography', href: '/best-photography-services', badge: 'Studio', desc: 'Commercial studio shoots, e-commerce & catalogue imagery' },
      { label: 'Public Relations (PR)', href: '/best-pr-agency-india', badge: 'Press', desc: 'National news coverage, media relations & executive reputation' },
      { label: 'Website & Web Development', href: '/best-web-development-agency-india', badge: 'Web / UX', desc: 'Blazing-fast React, Shopify, Next.js web applications' },
      { label: 'Mobile App Development', href: '/services-app-development', badge: 'iOS / Android', desc: 'Custom native Swift, Kotlin & Flutter mobile applications' },
      { label: 'Blog & Marketing Insights', href: '/blog', badge: 'Read', desc: 'Expert guides on digital trends, AI search & marketing tips' }
    ]
  },
  {
    id: 'city-pages',
    category: 'Local Service Pages',
    icon: '📍',
    gradient: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)',
    description: 'City-specific service hubs across 11 major Indian cities for Digital Marketing, Packaging Design, Social Media, SEO, Web Development, and Video Production.',
    links: [
      { label: 'Digital Marketing Agency in Delhi', href: '/digital-marketing/best-digital-marketing-agency-in-delhi', badge: 'Delhi', desc: 'ROI-driven digital marketing services for Delhi businesses' },
      { label: 'Digital Marketing Agency in Bengaluru', href: '/digital-marketing/best-digital-marketing-agency-in-bengaluru', badge: 'Bengaluru', desc: "Performance marketing for Bengaluru's tech & startup ecosystem" },
      { label: 'SEO Agency in Mumbai', href: '/seo-aeo-geo/best-seo-aeo-geo-agency-in-mumbai', badge: 'Mumbai', desc: 'SEO, AEO & GEO search dominance for Mumbai enterprises' },
      { label: 'Social Media Marketing in Gurgaon', href: '/social-media-marketing/best-social-media-marketing-agency-in-gurgaon', badge: 'Gurgaon', desc: 'Social campaigns for MNC & enterprise brands in Gurgaon' },
      { label: 'Packaging Design Agency in Jaipur', href: '/packaging-and-design/best-packaging-and-design-agency-in-jaipur', badge: 'Jaipur', desc: "Packaging design for Jaipur's retail, jewellery & D2C brands" },
      { label: 'Website Development in Noida', href: '/website-design-and-development/best-website-design-and-development-agency-in-noida', badge: 'Noida', desc: 'High-performance web design & development in Noida & NCR' },
      { label: 'Video Production in Hyderabad', href: '/video-production/best-video-production-agency-in-hyderabad', badge: 'Hyderabad', desc: 'Brand films & commercial video production in Hyderabad' },
      { label: 'Digital Marketing Agency in Kolkata', href: '/digital-marketing/best-digital-marketing-agency-in-kolkata', badge: 'Kolkata', desc: 'Digital marketing & brand strategy for Eastern India brands' },
      { label: 'Packaging Design in Faridabad', href: '/packaging-and-design/best-packaging-and-design-agency-in-faridabad', badge: 'Faridabad', desc: 'Industrial and consumer packaging design in Faridabad' },
      { label: 'SEO Agency in Ghaziabad', href: '/seo-aeo-geo/best-seo-aeo-geo-agency-in-ghaziabad', badge: 'Ghaziabad', desc: 'Local and technical SEO services for Ghaziabad businesses' },
      { label: 'Video Production in Lucknow', href: '/video-production/best-video-production-agency-in-lucknow', badge: 'Lucknow', desc: 'Commercial ad films & digital video production in Lucknow' }
    ]
  },
  {
    id: 'legal',
    category: 'Legal & Policies',
    icon: '⚖️',
    gradient: 'linear-gradient(135deg, #334155 0%, #1E293B 100%)',
    description: 'Privacy standards, user agreements and compliance terms.',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy', badge: 'Privacy', desc: 'Data protection policies and user confidentiality' },
      { label: 'Terms & Conditions', href: '/terms-condition', badge: 'Terms', desc: 'Terms of service and digital usage agreements' }
    ]
  }
];

const popularDestinations = [
  { label: 'Our Services', href: '/our-services', icon: '⚡' },
  { label: 'Case Studies', href: '/case-studies', icon: '📈' },
  { label: 'Influencers', href: '/influencers-marketplace', icon: '🌟' },
  { label: 'Free Audit', href: '/free-website-audit', icon: '🔍' },
  { label: 'SEO/AEO/GEO', href: '/seo-aeo-geo', icon: '🤖' },
  { label: 'Video Production', href: '/videos', icon: '🎥' },
  { label: 'Contact HQ', href: '/contact-us', icon: '📍' }
];

export default function Sitemap() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('ALL');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter links dynamically
  const filteredData = sitemapData
    .filter(group => activeTab === 'ALL' || group.id === activeTab)
    .map(group => {
      const matchingLinks = group.links.filter(item =>
        item.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        group.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return { ...group, matchingLinks };
    })
    .filter(group => group.matchingLinks.length > 0);

  const totalPages = sitemapData.reduce((acc, curr) => acc + curr.links.length, 0);

  return (
    <div className="sitemap-page-wrapper">
      <Helmet>
        <title>Sitemap | SOCIAPA</title>
        <meta name="description" content="Sociapa" />
        <link rel="canonical" href="https://sociapa.com/sitemap" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      {/* ── HERO SECTION ── */}
      <section className="sitemap-hero">
        <div className="sitemap-hero-glow" />
        <div className="sitemap-hero-mesh" />

        <div className="container sitemap-hero-container">
          <div className="sitemap-badge">
            <span className="sitemap-badge-dot"></span>
            SYSTEM ARCHITECTURE &amp; DIRECTORY
          </div>

          <h1 className="sitemap-title">
            Explore All of <span className="sitemap-title-red">SOCIAPA</span>
          </h1>

          <p className="sitemap-subtitle">
            A meticulously organized directory of our 360° growth services, brand identity systems, creator marketing, digital engineering, and resources.
          </p>

          {/* Quick Search Bar */}
          <div className="sitemap-search-wrap">
            <div className="sitemap-search-icon-box">
              <svg className="sitemap-search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <input
              type="text"
              className="sitemap-search-input"
              placeholder="Search services, case studies, capabilities (e.g. SEO, Packaging, Video)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {searchTerm && (
              <button className="sitemap-search-clear" onClick={() => setSearchTerm('')} title="Clear search">
                ✕
              </button>
            )}
          </div>

          {/* Popular Shortcuts */}
          <div className="sitemap-quick-pills">
            <span className="sitemap-quick-label">Popular:</span>
            {popularDestinations.map((p, idx) => (
              <Link key={idx} to={p.href} className="sitemap-quick-pill">
                <span>{p.icon}</span> {p.label}
              </Link>
            ))}
          </div>

          {/* Category Filter Tabs */}
          <div className="sitemap-filter-tabs">
            <button
              className={`sitemap-tab-btn ${activeTab === 'ALL' ? 'active' : ''}`}
              onClick={() => setActiveTab('ALL')}
            >
              All Sections ({totalPages})
            </button>
            {sitemapData.map(group => (
              <button
                key={group.id}
                className={`sitemap-tab-btn ${activeTab === group.id ? 'active' : ''}`}
                onClick={() => setActiveTab(group.id)}
              >
                <span>{group.icon}</span> {group.category} ({group.links.length})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="sitemap-stats-strip">
        <div className="container sitemap-stats-container">
          <div className="sitemap-stat-card">
            <div className="sitemap-stat-num">{totalPages}</div>
            <div className="sitemap-stat-lbl">INDEXED DESTINATIONS</div>
          </div>
          <div className="sitemap-stat-divider" />
          <div className="sitemap-stat-card">
            <div className="sitemap-stat-num">20+</div>
            <div className="sitemap-stat-lbl">SPECIALIZED SERVICES</div>
          </div>
          <div className="sitemap-stat-divider" />
          <div className="sitemap-stat-card">
            <div className="sitemap-stat-num">4</div>
            <div className="sitemap-stat-lbl">GLOBAL HUBS (NCR·DXB·UK)</div>
          </div>
          <div className="sitemap-stat-divider" />
          <div className="sitemap-stat-card">
            <div className="sitemap-stat-num">100%</div>
            <div className="sitemap-stat-lbl">RESPONSIVE &amp; FAST</div>
          </div>
        </div>
      </section>

      {/* ── SITEMAP CATEGORIES GRID ── */}
      <section className="sitemap-content-section">
        <div className="container sitemap-container">
          {filteredData.length === 0 ? (
            <div className="sitemap-no-results">
              <div className="sitemap-no-results-icon">🔍</div>
              <h3>No pages found matching "{searchTerm}"</h3>
              <p>We couldn't find any direct matches. Try searching for broader terms like 'marketing', 'design', or 'awards'.</p>
              <button className="btn sitemap-btn-reset" onClick={() => { setSearchTerm(''); setActiveTab('ALL'); }}>
                Show All Pages
              </button>
            </div>
          ) : (
            <div className="sitemap-categories-grid">
              {filteredData.map((group) => (
                <div className="sitemap-category-card" key={group.id}>
                  {/* Category Header with Gradient Accent */}
                  <div className="sitemap-category-header">
                    <div className="sitemap-category-icon-box">
                      <span className="sitemap-cat-icon">{group.icon}</span>
                    </div>

                    <div className="sitemap-category-title-wrap">
                      <h2 className="sitemap-category-title">{group.category}</h2>
                      <p className="sitemap-category-desc">{group.description}</p>
                    </div>

                    <div className="sitemap-category-badge-count">
                      {group.matchingLinks.length} {group.matchingLinks.length === 1 ? 'Page' : 'Pages'}
                    </div>
                  </div>

                  {/* List of Links */}
                  <div className="sitemap-links-grid">
                    {group.matchingLinks.map((link, lIdx) => (
                      <Link to={link.href} className="sitemap-link-card" key={lIdx}>
                        <div className="sitemap-link-card-body">
                          <div className="sitemap-link-top-row">
                            <span className="sitemap-link-title">
                              <span className="sitemap-link-dot"></span>
                              {link.label}
                            </span>
                            <span className="sitemap-link-pill">{link.badge}</span>
                          </div>
                          <p className="sitemap-link-description">{link.desc}</p>
                        </div>

                        <div className="sitemap-link-action">
                          <span className="sitemap-link-url">{link.href}</span>
                          <div className="sitemap-link-arrow">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── HIGH-CONVERTING BOTTOM CTA ── */}
      <section className="sitemap-cta-section">
        <div className="sitemap-cta-glow"></div>
        <div className="container sitemap-cta-container">
          <div className="sitemap-cta-badge">✦ ELEVATE YOUR BRAND TODAY</div>
          <h2>Ready to Scale Your Brand with Sociapa?</h2>
          <p>Whether you need a full brand transformation, high-ROI performance marketing, or strategic guidance, our senior team is ready.</p>
          <div className="sitemap-cta-actions">
            <Link to="/free-website-audit" className="btn sitemap-btn-audit">
              Get Free Website Audit ✦
            </Link>
            <Link to="/contact-us" className="btn sitemap-btn-contact">
              Schedule Free Consultation ➔
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
