import { useRef, useEffect, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import React from 'react';
import './Home.css';

import ProjectsTab from '../components/home/ProjectsTab';
import ClientsGrid from '../components/home/ClientsGrid';
import PlatformPartners from '../components/home/PlatformPartners';
import Ecosystem from '../components/home/Ecosystem';
import CaseStudies from '../components/home/CaseStudies';
import { blogsData } from '../data/blogsData';
import { awardsData } from '../data/awardsData';

/* ─── Animated Counter Component (High-Performance Direct DOM Update) ─── */
function Counter({ end, suffix = '', duration = 1200 }) {
  const spanRef = useRef(null);

  useEffect(() => {
    if (!spanRef.current) return;
    let animationFrameId = null;
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = Math.floor(eased * end);
      if (spanRef.current) {
        spanRef.current.textContent = val + suffix;
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else if (spanRef.current) {
        spanRef.current.textContent = end + suffix;
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        // Delay slightly after paint so it doesn't compete with initial hydration
        setTimeout(() => {
          animationFrameId = requestAnimationFrame(animate);
        }, 200);
      }
    }, { threshold: 0.2 });

    observer.observe(spanRef.current);

    return () => {
      observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [end, suffix, duration]);

  return (
    <span
      ref={spanRef}
      style={{
        fontVariantNumeric: 'tabular-nums',
        display: 'inline-block',
        minWidth: `${String(end).length + suffix.length}ch`,
        textAlign: 'center'
      }}
    >
      {end}{suffix}
    </span>
  );
}

export default function Home() {
  const base = import.meta.env.BASE_URL;
  const blogTrackRef = useRef(null);
  const awardTrackRef = useRef(null);

  const scrollBlogTrack = (offset) => {
    if (blogTrackRef.current) {
      blogTrackRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const scrollAwardTrack = (offset) => {
    if (awardTrackRef.current) {
      awardTrackRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Best Digital Marketing &amp; Advertising Agency, Best FMCG marketing and digital agency in Noida &amp; Delhi NCR, India - Sociapa</title>
        <meta name="description" content="Best Digital Marketing & Advertising Agency in Noida & Delhi NCR – Sociapa allows businesses to improve their online presence, attract targeted traffic and experience extraordinary growth by providing a wide range of services, including SEO, PPC, social media marketing and creative advertising solutions." />
        <link rel="canonical" href="https://sociapa.com/" />
        <meta property="og:title" content="Best Digital Marketing & Advertising Agency, Best FMCG marketing and digital agency in Noida & Delhi NCR, India - Sociapa" />
        <meta property="og:description" content="Best Digital Marketing & Advertising Agency in Noida & Delhi NCR – Sociapa allows businesses to improve their online presence, attract targeted traffic and experience extraordinary growth by providing a wide range of services," />
        <meta property="og:url" content="https://sociapa.com/" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="SOCIAPA" />
        <meta property="og:image" content="https://sociapa.com/logoSociapa.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sociapa" />
        <meta name="twitter:title" content="Best Digital Marketing Agency in Noida &amp; Delhi NCR - Sociapa" />
        <meta name="twitter:description" content="Best Digital Marketing & Advertising Agency in Noida & Delhi NCR – Sociapa allows businesses to improve their online presence, attract targeted traffic and experience extraordinary growth by providing a wide range of services," />
        <meta name="twitter:image" content="https://sociapa.com/logoSociapa.png" />
        {/* Organization Schema - Required by SOCIAPA (1).docx */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://sociapa.com/#organization",
          "name": "Sociapa",
          "url": "https://sociapa.com/",
          "logo": {
            "@type": "ImageObject",
            "url": "https://sociapa.com/logoSociapa.png",
            "width": 200,
            "height": 60
          },
          "image": "https://sociapa.com/logoSociapa.png",
          "description": "Sociapa is India's leading full-service creative & digital marketing agency offering SEO, Social Media Marketing, Branding, Web Development, Influencer Marketing, Video Production, and Packaging Design.",
          "foundingDate": "2017",
          "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "value": 50
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "BL-02, Sector 116",
            "addressLocality": "Noida",
            "addressRegion": "Uttar Pradesh",
            "postalCode": "201306",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "0120-313-0443",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi"]
          },
          "sameAs": [
            "https://www.facebook.com/sociapaa/",
            "https://www.instagram.com/sociapa/",
            "https://www.linkedin.com/company/sociapa/",
            "https://twitter.com/sociapa",
            "https://www.youtube.com/@Sociapa"
          ]
        })}</script>
      </Helmet>

      {/* ══════════════════════════ VIDEO HERO (WITH OPTIMIZED LCP POSTER) ══════════════════════════ */}
      <section className="home-hero-section">
        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
          Best Digital Marketing &amp; Advertising Agency in Noida &amp; Delhi NCR - Sociapa
        </h1>
        <img
          src={`${base}images/hero-video-poster.webp`}
          alt="Sociapa Digital Marketing & Advertising Agency"
          className="home-hero-poster-img"
          width="1920"
          height="1080"
          fetchpriority="high"
          decoding="async"
        />
        {/* Video always rendered; hidden on mobile via CSS to avoid isDesktop state causing CLS */}
        <video
          className="home-banner-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          width="1920"
          height="1080"
          aria-hidden="true"
        >
          <source src={`${base}video/socialVideo.mp4`} type="video/mp4" />
        </video>
      </section>

      {/* ══════════════════════════ ABOUT SOCIAPA + STATS SECTION (FIGMA DESIGN) ══════════════════════════ */}
      <section className="home-about-stats-section" id="about-sociapa">
        <div className="container">
          <div className="home-about-stats-wrapper">
            {/* Left Column: About Copy */}
            <div className="home-about-content">
              <h2 className="home-about-heading">ABOUT SOCIAPA</h2>
              <p className="home-about-desc">
                <strong>Sociapa</strong> is a full-service creative{' '}
                <Link to="/best-digital-marketing-services-india">digital marketing agency</Link>{' '}
                headquartered in <strong>Delhi NCR, India</strong>, with offices in <strong>Dubai, UAE</strong> and{' '}
                <strong>London, UK</strong>. We help startups, scale-ups and established enterprises build strong brands
                and achieve measurable digital growth. Our clients come from{' '}
                <strong>FMCG, F&amp;B, fashion, real estate, healthcare and technology</strong>, and for each of them we pair
                creative thinking with data-driven strategy so brands get noticed, earn trust and turn audiences into loyal customers.
              </p>
              <p className="home-about-desc">
                Everything happens under one roof. On the <strong>brand</strong> side, we handle{' '}
                <Link to="/brand-strategy">brand strategy and positioning</Link>,{' '}
                <Link to="/brand-identity-design">brand identity design</Link> and{' '}
                <Link to="/best-packaging-design-agency-india">packaging design</Link>. For{' '}
                <strong>growth</strong>, we run{' '}
                <Link to="/pay-per-click-ppc-services-india">performance marketing on Meta and Google Ads</Link>,{' '}
                <Link to="/best-social-media-marketing-agency-india">social media management</Link>,{' '}
                <Link to="/influencer-marketing-services">influencer marketing</Link> and{' '}
                <Link to="/content-designing">content marketing</Link>. To build{' '}
                <strong>visibility</strong>, we offer{' '}
                <Link to="/seo-aeo-geo">
                  search engine optimisation (SEO), answer engine optimisation (AEO) and generative engine optimisation (GEO)
                </Link>
                , plus <Link to="/best-pr-agency-india">PR and media relations</Link>. We also do{' '}
                <strong>production and tech</strong>: <Link to="/best-photography-services">photography</Link>,{' '}
                <Link to="/videos">videography</Link>, <strong>microdrama production</strong>,{' '}
                <Link to="/case-studies/ai-video">AI-powered video and content production</Link>,{' '}
                <Link to="/best-web-development-agency-india">website development</Link> and{' '}
                <Link to="/services-app-development">app development</Link>. With one integrated team, your brand stays consistent
                across every channel and is easy to find on Google, social media and AI-powered search.
              </p>
            </div>

            {/* Right Column: Stats with Vertical Dividers & Animated Numbers */}
            <div className="home-stats-block">
              {/* Row 1: Clients & Years of Experience */}
              <div className="home-stats-row">
                <div className="home-stat-item">
                  <div className="home-stat-number">
                    <Counter end={100} suffix="+" />
                  </div>
                  <div className="home-stat-label">CLIENTS</div>
                </div>

                <div className="home-stat-divider" aria-hidden="true" />

                <div className="home-stat-item">
                  <div className="home-stat-number">
                    <Counter end={8} suffix="+" />
                  </div>
                  <div className="home-stat-label">YEARS OF EXPERIENCE</div>
                </div>
              </div>

              {/* Row 2: Projects & In-House Team */}
              <div className="home-stats-row">
                <div className="home-stat-item">
                  <div className="home-stat-number">
                    <Counter end={500} suffix="+" />
                  </div>
                  <div className="home-stat-label">PROJECTS</div>
                </div>

                <div className="home-stat-divider" aria-hidden="true" />

                <div className="home-stat-item">
                  <div className="home-stat-number">
                    <Counter end={75} suffix="+" />
                  </div>
                  <div className="home-stat-label">IN-HOUSE TEAM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ PROJECTS & CLIENTS ══════════════════════════ */}
      <ProjectsTab />
      <ClientsGrid />
      <PlatformPartners />
      <CaseStudies />

      {/* ══════════════════════════ ECOSYSTEM ══════════════════════════ */}
      <Ecosystem />

      {/* ══════════════════════════ BLOG SECTION ══════════════════════════ */}
      <section className="blog-fig-section" id="blog">
        <div className="container blog-fig-container">
          {/* Header Row */}
          <div className="blog-fig-header animate-on-scroll">
            <div className="blog-fig-header-left">
              <span className="blog-fig-label">INSIGHTS &amp; ARTICLES</span>
              <h2 className="blog-fig-heading">
                LATEST FROM THE<br />SOCIAPA BLOG
              </h2>
              <p className="blog-fig-desc">
                Industry insights, marketing trends, and actionable strategies for brand growth.
              </p>
            </div>

            <div className="blog-fig-header-right">
              <div className="blog-fig-arrows">
                <button
                  type="button"
                  onClick={() => scrollBlogTrack(-480)}
                  className="blog-fig-arrow-btn"
                  aria-label="Previous articles"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => scrollBlogTrack(480)}
                  className="blog-fig-arrow-btn"
                  aria-label="Next articles"
                >
                  →
                </button>
              </div>
              <Link to="/blog" className="blog-fig-view-all">
                View All Articles
              </Link>
            </div>
          </div>

          {/* Full-width Divider Line */}
          <div className="blog-fig-divider" aria-hidden="true" />

          {/* Horizontal Blog Cards Track */}
          <div className="blog-fig-track animate-on-scroll delay-1" ref={blogTrackRef}>
            {blogsData.slice(0, 10).map((blog) => {
              const blogHref = blog.link.startsWith('/') ? blog.link : `/${blog.link}`;
              const blogImg = blog.localImage
                ? (blog.localImage.startsWith('http')
                    ? blog.localImage
                    : `${base}${blog.localImage.replace(/^\/sociapareact\//, '').replace(/^\//, '')}`)
                : '';

              return (
                <div key={blog.link} className="blog-fig-card">
                  {/* Image Wrap */}
                  <Link to={blogHref} className="blog-fig-img-wrap">
                    <img
                      src={blogImg}
                      alt={blog.title}
                      className="blog-fig-img"
                      width="170"
                      height="140"
                      loading="lazy"
                      decoding="async"
                    />
                  </Link>

                  {/* Content */}
                  <div className="blog-fig-content">
                    <h3 className="blog-fig-card-title">
                      <Link to={blogHref}>{blog.title}</Link>
                    </h3>
                    <p className="blog-fig-card-desc">
                      {blog.description}
                    </p>
                    <Link to={blogHref} className="blog-fig-read-btn">
                      Read Article <span className="blog-fig-btn-arrow">→</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ AWARDS & CERTIFICATION — FIGMA MATCH ══════════════════════════ */}
      <section className="awards-fig-section" id="awards">
        <div className="container awards-fig-container">
          {/* Header Row */}
          <div className="awards-fig-header animate-on-scroll">
            <div className="awards-fig-header-left">
              <span className="awards-fig-label">RECOGNITION</span>
              <h2 className="awards-fig-title">
                AWARDS &amp;<br />CERTIFICATION
              </h2>
            </div>
            <div className="awards-fig-header-right">
              <div className="awards-fig-arrows">
                <button
                  type="button"
                  onClick={() => scrollAwardTrack(-390)}
                  className="awards-fig-arrow-btn"
                  aria-label="Previous awards"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => scrollAwardTrack(390)}
                  className="awards-fig-arrow-btn"
                  aria-label="Next awards"
                >
                  →
                </button>
              </div>
              <Link to="/best-creative-and-digital-agency-award" className="awards-fig-viewmore">
                View more <span className="awards-fig-arrow">→</span>
              </Link>
            </div>
          </div>

          {/* Divider Line */}
          <div className="awards-fig-divider" />

          {/* Horizontal Awards Track with All Awards */}
          <div className="awards-fig-track animate-on-scroll delay-1" ref={awardTrackRef}>
            {awardsData.map((award, index) => {
              const isExternal = Boolean(award.link && award.link.startsWith('http'));
              const targetHref = isExternal ? award.link : '/best-creative-and-digital-agency-award';

              return (
                <article key={award.id || index} className="awards-fig-col">
                  {isExternal ? (
                    <a
                      href={targetHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="awards-fig-card-link"
                    >
                      <div className="awards-fig-img-box">
                        <img
                          src={`${base}images/${award.img}`}
                          alt={award.alt || award.title}
                          className="awards-fig-img"
                          loading="lazy"
                        />
                      </div>
                      <div className="awards-fig-meta-row">
                        <span className="awards-fig-pill">{award.tag}</span>
                        <span className="awards-fig-col-arrow">→</span>
                      </div>
                      <h3 className="awards-fig-card-title">{award.title}</h3>
                      <p className="awards-fig-card-desc">{award.desc}</p>
                    </a>
                  ) : (
                    <Link
                      to={targetHref}
                      className="awards-fig-card-link"
                    >
                      <div className="awards-fig-img-box">
                        <img
                          src={`${base}images/${award.img}`}
                          alt={award.alt || award.title}
                          className="awards-fig-img"
                          loading="lazy"
                        />
                      </div>
                      <div className="awards-fig-meta-row">
                        <span className="awards-fig-pill">{award.tag}</span>
                        <span className="awards-fig-col-arrow">→</span>
                      </div>
                      <h3 className="awards-fig-card-title">{award.title}</h3>
                      <p className="awards-fig-card-desc">{award.desc}</p>
                    </Link>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ CTA BANNER — FIGMA MATCH ══════════════════════════ */}
      <section
        className="cta-section cta-fig-section"
        style={{ backgroundImage: `url(${base}images/cta-bg-pattern.svg)` }}
      >
        <div className="container cta-fig-container animate-on-scroll">
          <div className="cta-fig-left">
            <h2 className="cta-fig-heading">
              READY TO TRANSFORM<br />YOUR BRAND?
            </h2>
          </div>

          <div className="cta-fig-right">
            <p className="cta-fig-desc">
              Let's build something extraordinary together.
              <br className="d-none d-md-block" />
              Get a free strategy session with India's most
              <br className="d-none d-md-block" />
              awarded digital marketing team.
            </p>
            <div className="cta-fig-buttons">
              <Link to="/contact-us" className="cta-fig-btn cta-fig-btn-solid" id="cta-get-started">
                Get Started <span className="cta-fig-btn-arrow">→</span>
              </Link>
              <Link to="/free-website-audit" className="cta-fig-btn cta-fig-btn-outline" id="cta-audit">
                Get Free Audit <span className="cta-fig-btn-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
