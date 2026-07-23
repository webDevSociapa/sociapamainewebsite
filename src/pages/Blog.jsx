import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { blogsData } from '../data/blogsData';
import './Blog.css';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('ALL');

  // Helper to categorize articles based on title & description
  const getCategory = (title, desc) => {
    const text = (title + ' ' + desc).toLowerCase();
    if (text.includes('ai') || text.includes('future') || text.includes('trend') || text.includes('2026') || text.includes('2025')) return 'AI_TRENDS';
    if (text.includes('ad') || text.includes('ppc') || text.includes('performance') || text.includes('roi') || text.includes('meta')) return 'ADS_PERFORMANCE';
    return 'BRAND_SEO';
  };

  // Filter logic
  const filteredBlogs = blogsData.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          blog.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (!matchesSearch) return false;
    if (activeCategory === 'ALL') return true;

    const cat = getCategory(blog.title, blog.description);
    return cat === activeCategory;
  });

  // Featured blog is the first one when no search is active
  const featuredBlog = filteredBlogs[0];
  const gridBlogs = activeCategory === 'ALL' && searchTerm === '' ? filteredBlogs.slice(1) : filteredBlogs;

  return (
    <>
      <Helmet>
        <title>Read about Latest News, Strategies &amp; Articles - Sociapa</title>
        <meta name="description" content="Read blogs, news, guidelines, trends and articles about digital marketing, branding, web development, SEO, influencer marketing &amp; social media marketing - Sociapa.com" />
        <link rel="canonical" href="https://www.sociapa.com/blog/" />
        <meta property="og:title" content="Read about Latest News, Strategies & Articles - Sociapa" />
        <meta property="og:description" content="Read blogs, news, guidelines, trends and articles about digital marketing, branding, web development, SEO, influencer marketing & social media marketing - Sociapa.com" />
        <meta property="og:url" content="https://www.sociapa.com/blog/" />
      </Helmet>

      {/* ── HERO BANNER ── */}
      <section className="blog-page-hero page-hero-section">
        <div className="blog-hero-glow" />

        <div className="blog-hero-container">
          <div className="blog-section-label">
            <span className="blog-label-dot"></span>
            INSIGHTS &amp; THOUGHT LEADERSHIP
          </div>

          <h1 className="blog-hero-title">
            Navigating the <span className="blog-hero-highlight">Future of Marketing</span> &amp; AI
          </h1>

          <p className="blog-hero-desc">
            Explore strategic insights, breaking industry trends, AI guidelines, and high-ROI growth frameworks from Sociapa experts.
          </p>

          {/* Search Bar & Topic Filter Chips */}
          <div className="blog-search-container">
            <input 
              type="text"
              placeholder="Search articles, guides, or marketing topics..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="blog-search-input"
            />
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="blog-search-icon">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>

          <div className="blog-filter-tabs">
            {[
              { id: 'ALL', label: `All Articles (${blogsData.length})` },
              { id: 'AI_TRENDS', label: 'AI & Trends' },
              { id: 'ADS_PERFORMANCE', label: 'Ads & Performance' },
              { id: 'BRAND_SEO', label: 'Branding & SEO' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`blog-filter-chip ${activeCategory === tab.id ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED HERO ARTICLE ── */}
      {activeCategory === 'ALL' && searchTerm === '' && featuredBlog && (
        <section className="blog-featured-section">
          <div className="blog-featured-container">
            <Link to={`/${featuredBlog.link}`} className="blog-featured-link">
              <div className="blog-featured-card">
                {/* Featured Image */}
                <div className="blog-featured-img-wrap">
                  <img 
                    src={featuredBlog.localImage} 
                    alt={featuredBlog.title} 
                    className="blog-featured-img"
                  />
                </div>

                {/* Featured Content */}
                <div className="blog-featured-content">
                  <div className="blog-featured-meta">
                    <span className="blog-featured-badge">FEATURED STORY</span>
                    <span className="blog-featured-readtime">• 6 min read</span>
                  </div>

                  <h2 className="blog-featured-title">
                    {featuredBlog.title}
                  </h2>

                  <p className="blog-featured-desc">
                    {featuredBlog.description}
                  </p>

                  <div className="blog-featured-btn">
                    Read Full Article
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ── EDITORIAL ARTICLES GRID ── */}
      <section className="blog-grid-section">
        <div className="blog-grid-container">
          {gridBlogs.length === 0 ? (
            <div className="blog-empty-search">
              <h3 className="blog-empty-title">No articles found matching "{searchTerm}"</h3>
              <button onClick={() => { setSearchTerm(''); setActiveCategory('ALL'); }} className="blog-reset-btn">Reset Search</button>
            </div>
          ) : (
            <div className="blog-cards-grid">
              {gridBlogs.map((blog, idx) => (
                <Link to={`/${blog.link}`} key={idx} className="blog-card-link">
                  <div className="blog-card-box">
                    {/* Image Container */}
                    <div className="blog-card-img-wrap">
                      <img 
                        src={blog.localImage} 
                        alt={blog.title} 
                        className="blog-card-img"
                      />
                      <span className="blog-card-cat-badge">
                        {getCategory(blog.title, blog.description).replace('_', ' ')}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="blog-card-body">
                      <h4 className="blog-card-title">
                        {blog.title}
                      </h4>

                      <p className="blog-card-desc">
                        {blog.description}
                      </p>

                      <div className="blog-card-footer">
                        <span className="blog-card-readtime">5 min read</span>
                        <span className="blog-card-btn">
                          Read Article →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── MARKETING NEWSLETTER CTA ── */}
      <section className="blog-newsletter-section">
        <div className="blog-newsletter-container">
          <h2 className="blog-newsletter-title">
            Stay Ahead of Marketing &amp; AI Shifts
          </h2>
          <p className="blog-newsletter-desc">
            Get expert digital marketing breakdowns, ASCI compliance updates, and high-converting growth strategies delivered straight to your inbox.
          </p>

          <div className="blog-newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your business email address..."
              className="blog-newsletter-input"
            />
            <button className="blog-newsletter-btn">
              Subscribe Free
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
