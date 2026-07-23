import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Awards.css';

const stats = [
  { num: '15+', label: 'Industry Awards & Recognition' },
  { num: '100+', label: 'Brands Transformed & Grown' },
  { num: '7+', label: 'Years of Creative Excellence' },
  { num: '50M+', label: 'Organic Views & Reach' }
];

const awardsData = [
  {
    img: 'new-recognition.jpg',
    alt: 'ET Leadership Excellence Award 2023 - Sociapa',
    title: 'ET Leadership Excellence Award 2022',
    tag: 'National Award',
    desc: 'Sociapa honored with the ET Leadership Excellence Award 2022 for outstanding brand innovation and marketing brilliance.',
    link: 'https://economictimes.indiatimes.com/industry/media/entertainment/media/et-leadership-excellence-awards-2023-celebrates-the-business-leaders/articleshow/103135718.cms'
  },
  {
    img: 'SociapaMediaNews.jpg',
    alt: "Sociapa's Soul Focus is the USP - MediaNews4U",
    title: "Sociapa's Soul Focus is the USP",
    tag: 'Media Interview',
    desc: 'MediaNews4U features Sociapa Founder Dheeraj Raj on process-driven brand marketing solutions for modern D2C & FMCG brands.',
    link: 'https://www.medianews4u.com/sociapas-soul-focus-is-the-usp-which-is-process-driven-brand-centric-marketing-solutions-dheeraj-raj/'
  },
  {
    img: 'achieverStory.jpg',
    alt: 'IAF India Achievers Success Story - Dheeraj Raj',
    title: "Achievers' Success Story — IAF India",
    tag: 'Leadership Profile',
    desc: 'Indian Achievers Forum spotlights Dheeraj Raj, Founder of Sociapa, on redefining brand strategy and digital performance.',
    link: 'https://www.iafindia.com/mr-dheeraj-raj/'
  },
  {
    img: 'ceoStory.jpg',
    alt: 'Believing in Vision Meeting Excellence - The CEO Story',
    title: 'Believing in Vision Meeting Excellence',
    tag: 'CEO Story Feature',
    desc: 'The CEO Story magazine covers Sociapa\'s core philosophy — targeted market strategy, bold creative, and execution brilliance.',
    link: 'https://theceostory.in/lounge-interview/sociapa/'
  },
  {
    img: 'bcConnect.jpg',
    alt: 'Marketing Brilliance Begins - Business Connect',
    title: 'Where Marketing Brilliance Begins',
    tag: 'Business Connect',
    desc: 'Business Connect India profiles Sociapa as a top-tier digital marketing agency driving revenue and business scale.',
    link: 'https://businessconnectindia.in/sociapa/'
  },
  {
    img: 'innnovativeZone.jpg',
    alt: 'Marketing Specialist Fastened with Innovation - Innovative Zone',
    title: 'Marketing Fastened with Innovation',
    tag: 'Innovation Award',
    desc: 'Innovative Zone India honors Sociapa for innovative campaign design and high-converting marketing strategies.',
    link: 'http://innovativezoneindia.com/sociapa/'
  }
];

export default function Awards() {
  const base = import.meta.env.BASE_URL;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Awards &amp; Media Features - Best Digital Marketing Firm | Sociapa</title>
        <meta name="description" content="#1 Digital Marketing Agency in Delhi NCR - we believe in sustainability &amp; creating a solid foundation for your business." />
        <meta name="keywords" content="Digital Marketing" />
        <link rel="canonical" href="https://www.sociapa.com/press-release/" />
        <meta property="og:title" content="Best Digital Marketing Firm In Noida &amp; Delhi NCR, India -Sociapa" />
        <meta property="og:description" content="#1 Digital Marketing Agency in Delhi NCR - we believe in sustainability &amp; creating a solid foundation for your business." />
        <meta property="og:url" content="https://www.sociapa.com/press-release/" />
      </Helmet>

      {/* ── 1. STUNNING HERO BANNER SECTION ── */}
      <section className="awards-hero-section">
        {/* Pattern & Orbs */}
        <div className="awards-hero-pattern" />
        <div className="awards-hero-orb-1" />
        <div className="awards-hero-orb-2" />

        <div className="container awards-hero-container">
          <div className="awards-hero-badge">
            <span className="awards-hero-badge-dot"></span>
            RECOGNIZED FOR EXCELLENCE
          </div>

          <h1 className="hero-title awards-hero-title">
            Award-Winning <span className="awards-gradient-text">Creative Agency</span> &amp; Industry Features
          </h1>

          <p className="awards-hero-desc">
            Celebrating our journey of brand innovation, prestigious awards, leadership recognition, and features across top national media publications.
          </p>
        </div>
      </section>

      {/* ── 2. CLEAN FRAMED AWARD BANNER ── */}
      <section className="awards-banner-section">
        <div className="container awards-banner-container">
          <div className="awards-banner-wrap">
            <img
              src={`${base}images/awardBanner.jpg`}
              alt="Best Creative and Digital Agency Award Banner"
              className="awards-banner-img"
            />
          </div>
        </div>
      </section>

      {/* ── 3. IMPACT STATS STRIP ── */}
      <section className="awards-stats-strip">
        <div className="container awards-stats-container">
          <div className="awards-stats-grid">
            {stats.map((s, i) => (
              <div key={i} className="awards-stat-item">
                <div className="awards-stat-num">{s.num}</div>
                <div className="awards-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. FEATURED LEADERSHIP AWARD HIGHLIGHT ── */}
      <section className="awards-featured-section">
        <div className="container awards-featured-container">
          <div className="awards-featured-card">
            <div className="awards-featured-img-wrap">
              <img
                src={`${base}images/new-recognition.jpg`}
                alt="ET Leadership Excellence Award 2023 — Most Promising Digital & Creative Agency — Sociapa"
                className="awards-featured-img"
              />
            </div>
            <div className="awards-featured-content">
              <span className="awards-major-tag">MAJOR FEATURE</span>

              <h2 className="awards-featured-h2">
                ET Leadership Excellence Award 2022
              </h2>

              <p className="awards-featured-desc">
                Sociapa was honored with the prestigious <strong>ET Leadership Excellence Award</strong> for groundbreaking brand strategy, creative storytelling, and driving transformative digital growth for clients across India.
              </p>

              <Link to="/contact-us" className="btn btn-primary awards-btn-primary">
                Work With Our Award-Winning Team →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. MEDIA & PRESS FEATURES GRID ── */}
      <section className="awards-media-section">
        <div className="container awards-media-container">
          <div className="awards-media-header">
            <span className="awards-spotlight-tag">
              IN THE SPOTLIGHT
            </span>
            <h2 className="awards-media-h2">
              Media Coverage &amp; <span className="text-brand-red">Press Recognition</span>
            </h2>
          </div>

          <div className="awards-media-grid">
            {awardsData.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="award-card"
              >
                {/* Image Box */}
                <div className="award-card-img-wrapper">
                  <img
                    src={`${base}images/${item.img}`}
                    alt={item.alt}
                    className="award-card-img"
                  />
                  {/* Category badge */}
                  <div className="award-card-badge">
                    {item.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="award-card-body">
                  <h3 className="award-card-title">
                    {item.title}
                  </h3>

                  <p className="award-card-desc">
                    {item.desc}
                  </p>

                  <div className="award-card-footer">
                    <div className="award-card-link-btn">
                      <span>Read Media Article</span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. AWARDS CTA SECTION ── */}
      <section className="awards-cta-section">
        <div className="container awards-cta-container">
          <div className="awards-cta-box">
            <div className="awards-cta-pattern" />
            <div className="awards-cta-glow" />

            <div className="awards-cta-content">
              <h2 className="awards-cta-h2">
                Ready to Build an Award-Winning Brand?
              </h2>

              <p className="awards-cta-desc">
                Partner with Sociapa for end-to-end branding, performance marketing, and digital growth solutions that deliver measurable impact.
              </p>

              <div className="awards-cta-btns">
                <Link to="/contact-us" className="btn btn-primary awards-cta-btn-primary">
                  Start Your Project ✦
                </Link>

                <Link to="/our-services" className="awards-cta-btn-outline">
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
