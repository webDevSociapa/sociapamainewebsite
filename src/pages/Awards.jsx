import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { stats, awardsData } from '../data/awardsData';
import './Awards.css';

export default function Awards() {
  const base = import.meta.env.BASE_URL;
  const [selectedAward, setSelectedAward] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedAward(null);
    };
    if (selectedAward) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedAward]);

  return (
    <>
      <Helmet>
        <title>Best Digital Marketing Firm In Noida &amp; Delhi NCR, India -Sociapa</title>
        <meta name="description" content="#1 Digital Marketing Agency in Delhi NCR - we believe in sustainability & creating a solid foundation for your business." />
        <meta name="keywords" content="Digital Marketing" />
        <link rel="canonical" href="https://sociapa.com/best-creative-and-digital-agency-award" />
        <meta property="og:title" content="Best Digital Marketing Firm In Noida & Delhi NCR, India -Sociapa" />
        <meta property="og:description" content="#1 Digital Marketing Agency in Delhi NCR - we believe in sustainability & creating a solid foundation for your business." />
        <meta property="og:url" content="https://sociapa.com/best-creative-and-digital-agency-award" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="SOCIAPA" />
        <meta property="og:image" content="https://sociapa.com/logoSociapa.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sociapa" />
        <meta name="twitter:title" content="Best Digital Marketing Firm In Noida & Delhi NCR, India -Sociapa" />
        <meta name="twitter:description" content="#1 Digital Marketing Agency in Delhi NCR - we believe in sustainability & creating a solid foundation for your business." />
        <meta name="twitter:image" content="https://sociapa.com/logoSociapa.png" />
      </Helmet>

      {/* ── FULL BLEED HERO BANNER ── */}
      <div className="serInsideBnr">
        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
          Awards, Industry Honors &amp; Media Recognitions - Sociapa
        </h1>
        <div className="row">
          <picture>
            <img
              src={`${base}images/banners/award/award.webp`}
              alt="Best Creative and Digital Agency Award Banner - Sociapa"
              className="responsive-img w-100"
            />
          </picture>
        </div>
      </div>

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
                src={`${base}images/outlook-business-achievers-award-2026.webp`}
                alt="Outlook Business Spotlight Achievers Awards 2026 — Innovative Digital & Creative Agency of the Year — Sociapa"
                className="awards-featured-img"
                loading="lazy"
              />
            </div>
            <div className="awards-featured-content">
              <span className="awards-major-tag">OUTLOOK BUSINESS SPOTLIGHT</span>

              <h2 className="awards-featured-h2">
                Innovative Agency of the Year 2026
              </h2>

              <p className="awards-featured-desc">
                Sociapa honored as the <strong>Innovative Digital &amp; Creative Agency of the Year</strong> at the prestigious 10th Edition Outlook Business Spotlight Achievers Awards 2026. This landmark national accolade celebrates our visionary brand storytelling, data-driven performance marketing, and transformative growth delivered for brands across India.
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
            {awardsData.map((item, index) => {
              const cardInner = (
                <>
                  {/* Image Box */}
                  <div className="award-card-img-wrapper">
                    <img
                      src={`${base}images/${item.img}`}
                      alt={item.alt}
                      className="award-card-img"
                      loading="lazy"
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
                        <span>
                          {item.link
                            ? 'Read Media Article'
                            : item.fullStory
                            ? 'View Award Story'
                            : 'Honored & Recognized'}
                        </span>
                        {item.link ? (
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                        ) : item.fullStory ? (
                          <span style={{ fontSize: '13px', marginLeft: '4px' }}>✦</span>
                        ) : (
                          <span style={{ fontSize: '13px', marginLeft: '4px' }}>★</span>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              );

              if (item.link) {
                return (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="award-card"
                  >
                    {cardInner}
                  </a>
                );
              }

              if (item.fullStory) {
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedAward(item)}
                    className="award-card award-card--interactive"
                    role="button"
                    aria-label={`View details for ${item.title}`}
                  >
                    {cardInner}
                  </button>
                );
              }

              return (
                <div
                  key={index}
                  className="award-card award-card--static"
                  role="article"
                >
                  {cardInner}
                </div>
              );
            })}
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

      {/* ── 7. AWARD DETAILS MODAL ── */}
      {selectedAward && (
        <div
          className="award-modal-backdrop"
          onClick={() => setSelectedAward(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="award-modal-title"
        >
          <div
            className="award-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="award-modal-close"
              onClick={() => setSelectedAward(null)}
              aria-label="Close award modal"
            >
              ✕
            </button>

            <div className="award-modal-layout">
              {/* Left / Top Media Box */}
              <div className="award-modal-media">
                <img
                  src={`${base}images/${selectedAward.img}`}
                  alt={selectedAward.alt}
                  className="award-modal-img"
                  loading="lazy"
                />
                <div className="award-modal-badge">{selectedAward.tag}</div>
              </div>

              {/* Right / Bottom Content Box */}
              <div className="award-modal-content">
                <div className="award-modal-subtag">
                  Official Recognition · 2026 Winner
                </div>

                <h3 id="award-modal-title" className="award-modal-title">
                  {selectedAward.title}
                </h3>

                <div className="award-modal-meta-strip">
                  {selectedAward.category && (
                    <div className="award-modal-meta-item">
                      <span className="award-modal-meta-label">Category:</span>
                      <strong className="award-modal-meta-value">{selectedAward.category}</strong>
                    </div>
                  )}
                  {selectedAward.brand && (
                    <div className="award-modal-meta-item">
                      <span className="award-modal-meta-label">Client / Brand:</span>
                      <strong className="award-modal-meta-value">{selectedAward.brand}</strong>
                    </div>
                  )}
                </div>

                <div className="award-modal-divider" />

                <div className="award-modal-story">
                  {Array.isArray(selectedAward.fullStory) ? (
                    selectedAward.fullStory.map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))
                  ) : (
                    <p>{selectedAward.fullStory || selectedAward.desc}</p>
                  )}
                </div>

                <div className="award-modal-actions">
                  <Link
                    to="/contact-us"
                    className="btn btn-primary award-modal-cta"
                    onClick={() => setSelectedAward(null)}
                  >
                    Build an Award-Winning Campaign ✦
                  </Link>
                  <button
                    type="button"
                    className="award-modal-dismiss-btn"
                    onClick={() => setSelectedAward(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
