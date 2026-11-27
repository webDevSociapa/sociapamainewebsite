import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Stories.css';

export default function Stories() {
  const base = import.meta.env.BASE_URL;

  useEffect(() => {
    window.scrollTo(0, 0);

    // 1. Ensure platform.js is loaded
    const scriptId = 'elfsight-platform-script';
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    } else if (window.ElfsightPlatform) {
      try {
        window.ElfsightPlatform.initialize();
      } catch (e) {}
    }

    // 2. Safe cleanup for watermark link & owner panel only
    const safeCleanup = () => {
      document.querySelectorAll('a[href*="elfsight.com"], a[class*="eapps-link"]').forEach(el => {
        el.style.setProperty('display', 'none', 'important');
      });
      document.querySelectorAll('[class*="WidgetAdminPanel"], [class*="WidgetOwnerPanel"]').forEach(el => {
        el.style.setProperty('display', 'none', 'important');
      });
    };

    safeCleanup();
    const interval = setInterval(safeCleanup, 350);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Best Digital Marketing Firm In Noida &amp; Delhi NCR, India -Sociapa</title>
        <meta name="description" content="#1 Digital Marketing Agency in Delhi NCR - we believe in sustainability & creating a solid foundation for your business." />
        <link rel="canonical" href="https://sociapa.com/stories" />
        <meta property="og:title" content="Best Digital Marketing Firm In Noida & Delhi NCR, India -Sociapa" />
        <meta property="og:description" content="#1 Digital Marketing Agency in Delhi NCR - we believe in sustainability & creating a solid foundation for your business." />
        <meta property="og:url" content="https://sociapa.com/stories" />
      </Helmet>

      <main className="stories-page-wrapper">
        {/* ── 1. FULL BLEED HERO BANNER (Standard across all Sociapa Pages) ── */}
        <section className="hero-banner-section serInsideBnr">
          <div className="row">
            <picture>
              <source type="image/webp" srcSet={`${base}images/banners/stories/stories.webp`} />
              <img
                src={`${base}images/banners/stories/stories.webp`}
                alt="Ideas Worth Following. Stories Worth Sharing — Sociapa Stories"
                className="hero-banner-img responsive-img w-100"
                width="1920"
                height="700"
                loading="eager"
                fetchpriority="high"
              />
            </picture>
          </div>
        </section>

        {/* ── 2. Stories Intro Header Section with <h1> (Full Mobile Responsive & Rule-Compliant) ── */}
        <section className="stories-intro-section" aria-label="Stories Header">
          <div className="container stories-intro-container">
            <nav className="stories-breadcrumbs" aria-label="Breadcrumbs">
              <Link to="/">Home</Link>
              <span className="breadcrumb-separator" aria-hidden="true">/</span>
              <span className="breadcrumb-current">Stories</span>
            </nav>

            <div className="stories-hero-badge">
              <span className="stories-badge-dot" aria-hidden="true"></span>
              <span>@sociapa.official</span>
            </div>

            <h1 className="stories-hero-title">
              Ideas Worth Following. Stories Worth Sharing — Sociapa Creative Agency Highlights
            </h1>

            <p className="stories-hero-desc">
              Discover our daily agency hustle, viral brand campaigns in{' '}
              <Link to="/best-social-media-marketing-agency-india" className="seo-interlink">
                social media marketing
              </Link>
              , creator highlights in{' '}
              <Link to="/influencer-marketing-services" className="seo-interlink">
                influencer marketing
              </Link>
              , and behind-the-scenes{' '}
              <Link to="/videos" className="seo-interlink">
                video production
              </Link>{' '}
              straight from our official Instagram feed. Looking to grow your brand?{' '}
              <Link to="/contact-us" className="seo-interlink">
                Talk to our digital experts
              </Link>
              .
            </p>

            <div className="stories-hero-actions">
              <a
                href="https://www.instagram.com/sociapa.official"
                target="_blank"
                rel="noopener noreferrer"
                className="stories-hero-ig-btn"
                aria-label="Follow Sociapa on Instagram (opens in new tab)"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                Follow on Instagram
              </a>
              <span className="stories-hero-meta">
                <span className="stories-meta-dot"></span>
                Official Social Feed
              </span>
            </div>
          </div>
        </section>

        {/* ── 3. Feed Section with Responsive Container ── */}
        <section className="stories-feed-section" id="instagram-feed" aria-label="Sociapa Instagram Feed">
          <div className="stories-inner-container">
            <div className="stories-widget-wrapper">
              <div className="elfsight-app-72b07bce-1829-4e7b-88dd-cd4c4543d783" data-elfsight-app-lazy></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
