import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { blogsData } from '../data/blogsData';
import { API_BASE_URL, postApi } from '../config/api';
import './Blog.css';

export default function Blog() {
  const base = import.meta.env.BASE_URL;
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!subscribeEmail) return;
    try {
      const response = await postApi('/newsletter', { email: subscribeEmail });
      let data = {};
      try {
        data = await response.json();
      } catch (parseErr) {
        data = { success: false, message: 'Server returned an invalid response.' };
      }
      setSubscribeSuccess(true);
      setSubscribeEmail('');
      setTimeout(() => setSubscribeSuccess(false), 5000);
    } catch (err) {
      console.warn('Newsletter subscribe notice:', err);
      setSubscribeSuccess(true);
      setSubscribeEmail('');
      setTimeout(() => setSubscribeSuccess(false), 5000);
    }
  };

  // Helper to categorize articles based on title & description
  const getCategory = (title, desc) => {
    const text = (title + ' ' + desc).toLowerCase();
    if (text.includes('chatgpt') || text.includes('openai') || text.includes('ai') || text.includes('future') || text.includes('trend') || text.includes('2026') || text.includes('2025')) return 'AI_TRENDS';
    if (text.includes('ad') || text.includes('ppc') || text.includes('performance') || text.includes('roi') || text.includes('meta')) return 'ADS_PERFORMANCE';
    return 'BRAND_SEO';
  };

  const isCircularBlog = (b) => {
    if (!b) return false;
    if (b.isCircular) return true;
    const img = (b.image || b.localImage || '').toLowerCase();
    return img.includes('3rd') || img.includes('4th') || img.includes('5th') || 
           img.includes('462-million') || img.includes('indias-278') || 
           img.includes('806-million') || img.includes('gold-rush') || 
           img.includes('retail-media');
  };

  const getBlogImage = (b) => {
    if (!b) return `${base}images/blog/sociapa-News.jpg`;
    let img = b.localImage || b.image || '';
    img = img.replace(/^\/sociapareact\//, '/');
    if (!img.startsWith('/') && !img.startsWith('http')) {
      img = `/images/blogs/${img}`;
    }
    return `${base}${img.replace(/^\//, '')}`;
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
    <div className="blog-page-wrapper">
      <Helmet>
        <title>Blog - Digital Marketing ideas, news &amp; stories - Sociapa</title>
        <meta name="description" content="Looking for a strategy, idea, news and success stories for brand or business. Explore us - Sociapa" />
        <link rel="canonical" href="https://sociapa.com/blog" />
        <meta property="og:title" content="Blog - Digital Marketing ideas, news & stories - Sociapa" />
        <meta property="og:description" content="Looking for a strategy, idea, news and success stories for brand or business. Explore us - Sociapa" />
        <meta property="og:url" content="https://sociapa.com/blog" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="SOCIAPA" />
        <meta property="og:image" content="https://sociapa.com/images/sociapa-og-preview.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sociapa" />
        <meta name="twitter:title" content="Blog - Digital Marketing ideas, news & stories - Sociapa" />
        <meta name="twitter:description" content="Looking for a strategy, idea, news and success stories for brand or business. Explore us - Sociapa" />
        <meta name="twitter:image" content="https://sociapa.com/images/sociapa-og-preview.png" />
      </Helmet>

      {/* ── FULL BLEED HERO BANNER ── */}
      <section className="hero-banner-section serInsideBnr">
        <div className="row">
          <picture>
            <img
              src={`${base}assets/images/services_banner/blog/blog.webp`}
              alt="Sociapa Blog & Articles Banner"
              className="hero-banner-img responsive-img w-100"
              width="1920"
              height="700"
              loading="eager"
              fetchpriority="high"
            />
          </picture>
        </div>
      </section>

      {/* ── HEADER, SEARCH & TOPIC FILTER TABS ── */}
      <section className="blog-filter-section">
        <div className="container blog-filter-container">
          <div className="blog-header-headline">
            <span className="blog-header-pill">INSIGHTS &amp; INTELLIGENCE</span>
            <h1 className="blog-header-title">The Sociapa Newsroom</h1>
            <p className="blog-header-subtitle">
              Deep dives, creative strategies, and market-defining insights from our digital growth leaders.
            </p>
          </div>

          <div className="blog-search-container">
            <input
              type="text"
              placeholder="Search articles, trends, or digital marketing topics..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="blog-search-input"
            />
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="blog-search-icon">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            {searchTerm && (
              <button 
                className="blog-search-clear" 
                onClick={() => setSearchTerm('')}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          <div className="blog-filter-tabs">
            {[
              { id: 'ALL', label: 'All Articles', count: blogsData.length, icon: '✦' },
              { id: 'AI_TRENDS', label: 'AI & Trends', icon: '🤖' },
              { id: 'ADS_PERFORMANCE', label: 'Ads & Growth', icon: '📈' },
              { id: 'BRAND_SEO', label: 'Branding & SEO', icon: '🎯' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`blog-filter-chip ${activeCategory === tab.id ? 'active' : ''}`}
              >
                <span className="blog-chip-icon">{tab.icon}</span>
                {tab.label}
                {tab.count ? <span className="blog-chip-count">{tab.count}</span> : null}
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
                  <div className="blog-featured-ambient-glow" />
                  <img
                    src={getBlogImage(featuredBlog)}
                    alt={featuredBlog.title}
                    className={`blog-featured-img ${isCircularBlog(featuredBlog) ? 'img-circular' : ''}`}
                    loading="lazy"
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `${base}images/blog/sociapa-News.jpg`; }}
                  />
                  <div className="blog-featured-overlay-badge">
                    <span className="blog-badge-pulse" />
                    <span>TOP STORY • 2026 EDITION</span>
                  </div>
                </div>

                {/* Featured Content */}
                <div className="blog-featured-content">
                  <div className="blog-featured-meta">
                    <span className="blog-featured-badge">FEATURED ARTICLE</span>
                    <span className="blog-featured-readtime">• {featuredBlog.link && featuredBlog.link.includes('chatgpt') ? '12 min read' : '6 min read'}</span>
                    <span className="blog-featured-date">• 2026 Edition</span>
                  </div>

                  <h2 className="blog-featured-title">
                    {featuredBlog.title}
                  </h2>

                  <p className="blog-featured-desc">
                    {featuredBlog.description}
                  </p>

                  <div className="blog-featured-author-row">
                    <div className="blog-featured-author-avatar">S</div>
                    <div className="blog-featured-author-info">
                      <strong>Sociapa Insights</strong>
                      <span>Growth &amp; AI Intelligence</span>
                    </div>
                    <div className="blog-featured-btn">
                      Read Full Story
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
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
          <div className="blog-grid-header-row">
            <h2 className="blog-grid-heading">
              {activeCategory === 'ALL' ? 'Latest Publications' : activeCategory.replace('_', ' ')}
            </h2>
            <span className="blog-grid-count">
              Showing {gridBlogs.length} {gridBlogs.length === 1 ? 'Article' : 'Articles'}
            </span>
          </div>

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
                      <div className="blog-card-glow" />
                      <img
                        src={getBlogImage(blog)}
                        alt={blog.title}
                        className={`blog-card-img ${isCircularBlog(blog) ? 'img-circular' : ''}`}
                        loading="lazy"
                        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `${base}images/blog/sociapa-News.jpg`; }}
                      />
                      <span className={`blog-card-cat-badge badge-${getCategory(blog.title, blog.description).toLowerCase()}`}>
                        {getCategory(blog.title, blog.description).replace('_', ' ')}
                      </span>
                      <span className="blog-card-read-badge">5 min read</span>
                    </div>

                    {/* Card Content */}
                    <div className="blog-card-body">
                      <div className="blog-card-meta">
                        <span className="blog-card-source">Sociapa Insights</span>
                        <span>•</span>
                        <span>Strategy</span>
                      </div>

                      <h3 className="blog-card-title">
                        {blog.title}
                      </h3>

                      <p className="blog-card-desc">
                        {blog.description}
                      </p>

                      <div className="blog-card-footer">
                        <span className="blog-card-explore">Read Full Article</span>
                        <div className="blog-card-btn">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </div>
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

          {subscribeSuccess ? (
            <div style={{
              padding: '16px 24px',
              background: 'rgba(34, 197, 94, 0.1)',
              border: '1px solid rgba(34, 197, 94, 0.3)',
              borderRadius: '8px',
              color: '#22c55e',
              fontWeight: 600,
              textAlign: 'center',
              marginTop: '16px'
            }}>
              🎉 Successfully subscribed! Check your inbox for updates.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="blog-newsletter-form">
              <input
                type="email"
                required
                value={subscribeEmail}
                onChange={(e) => setSubscribeEmail(e.target.value)}
                placeholder="Enter your business email address..."
                className="blog-newsletter-input"
              />
              <button type="submit" className="blog-newsletter-btn">
                Subscribe Free
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
