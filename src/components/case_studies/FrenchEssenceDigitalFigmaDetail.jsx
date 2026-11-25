import React from 'react';
import { Link } from 'react-router-dom';
import OtherCaseStudiesSlider from './OtherCaseStudiesSlider';
import './FrenchEssenceDigitalFigmaDetail.css';

export default function FrenchEssenceDigitalFigmaDetail({ csItem, onDownloadClick }) {
  const base = import.meta.env.BASE_URL || '/';

  return (
    <article className="fe-figma-case-study">

      {/* ── 1. CATEGORY PILLS BAR (FIGMA TOP NAV) ── */}
      <nav className="fe-category-pills-bar" aria-label="Case Study Categories">
        <div className="fe-container">
          <div className="fe-pills-wrapper">
            <Link to="/case-studies/packaging" className="fe-cat-pill">
              PACKAGING
            </Link>
            <Link to="/case-studies/influencer-campaign" className="fe-cat-pill">
              INFLUENCER CAMPAIGN
            </Link>
            <Link to="/case-studies/product-launch" className="fe-cat-pill">
              PRODUCT LAUNCH
            </Link>
            <span className="fe-cat-pill active">
              DIGITAL
            </span>
            <Link to="/case-studies/performance" className="fe-cat-pill">
              PERFORMANCE
            </Link>
            <Link to="/case-studies/tupperware" className="fe-cat-pill">
              TUPPERWARE
            </Link>
            <Link to="/case-studies/ai-video" className="fe-cat-pill">
              AI VIDEO
            </Link>
          </div>
        </div>
      </nav>

      {/* ── 2. HERO BANNER SECTION (FIGMA HERO BANNER WITH LUXURY PERFUME & MONOGRAM) ── */}
      <section className="fe-hero-section">
        <div className="fe-container">
          <div className="fe-hero-card fe-motion-reveal">
            <img
              src={`${base}images/case_study/french_essence_digital/group_111.png`}
              alt="French Essence Paris — Luxury Fragrance Digital Evolution"
              className="fe-hero-banner-img"
              width="1200"
              height="554"
              fetchpriority="high"
            />
            {/* Semantic single H1 tag for strict heading hierarchy & SEO */}
            <h1 className="fe-sr-only">
              French Essence — Luxury Fragrance Digital Evolution &amp; Brand Repositioning
            </h1>
          </div>
        </div>
      </section>

      {/* ── 3. TAG PILLS ROW ── */}
      <section className="fe-tags-section">
        <div className="fe-container">
          <div className="fe-tags-pills-row">
            <Link to="/best-digital-marketing-services-india" className="fe-tag-pill seo-interlink">
              Digital Marketing
            </Link>
            <Link to="/brand-strategy" className="fe-tag-pill seo-interlink">
              Brand Repositioning
            </Link>
            <Link to="/best-photography-services" className="fe-tag-pill seo-interlink">
              Tabletop Photography
            </Link>
            <Link to="/best-social-media-marketing-agency-india" className="fe-tag-pill seo-interlink">
              Social Content Engine
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. PROJECT OVERVIEW SECTION ── */}
      <section className="fe-overview-section">
        <div className="fe-container">
          <div className="fe-overview-grid fe-motion-reveal">
            <div className="fe-overview-left">
              <h2 className="fe-overview-title">
                <span className="fe-serif-red">PROJECT</span>{' '}
                <span className="fe-serif-dark">OVERVIEW</span>
              </h2>
              <p className="fe-overview-tagline">
                Turning an everyday luxury fragrance into a digital-first icon.
              </p>
            </div>
            <div className="fe-overview-right">
              <div className="fe-meta-pair">
                <span className="fe-meta-key">Client:</span>
                <span className="fe-meta-val">French Essence Paris</span>
              </div>
              <div className="fe-meta-pair">
                <span className="fe-meta-key">Campaign:</span>
                <span className="fe-meta-val">Luxury Fragrance Digital Evolution</span>
              </div>
              <div className="fe-meta-pair">
                <span className="fe-meta-key">Industry:</span>
                <span className="fe-meta-val">
                  Luxury Fragrance &amp; D2C Personal Care
                </span>
              </div>
              <div className="fe-meta-pair">
                <span className="fe-meta-key">Services:</span>
                <span className="fe-meta-val">
                  <Link to="/brand-strategy" className="seo-interlink">Brand Strategy</Link>, <Link to="/best-photography-services" className="seo-interlink">Tabletop Photography</Link>, <Link to="/best-social-media-marketing-agency-india" className="seo-interlink">Dynamic Social Ads</Link>, <Link to="/best-web-development-agency-india" className="seo-interlink">E-Commerce Optimization</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. THE CHALLENGE SECTION ── */}
      <section className="fe-challenge-section">
        <div className="fe-container">
          <div className="fe-center-header fe-motion-reveal">
            <h2 className="fe-section-heading">
              <span className="fe-serif-dark">THE</span>{' '}
              <span className="fe-serif-red">CHALLENGE</span>
              <span className="fe-heading-underline red"></span>
            </h2>
          </div>

          <div className="fe-challenge-narrative fe-motion-reveal">
            <p>
              In a crowded prestige fragrance market dominated by legacy international fashion houses, French Essence required a distinctive digital presence that conveyed genuine European craftsmanship and luxury refinement.
            </p>
            <p>
              The direct-to-consumer digital channels suffered from fragmented aesthetic storytelling across Meta and web, low conversion rates on fragrance discovery sets, and unsustainable customer acquisition costs.
            </p>
            <p>
              Sociapa was commissioned to engineer an end-to-end digital repositioning: elevating the brand&apos;s visual aesthetic through high-fashion tabletop shoots, constructing an agile monthly content engine, and optimizing the D2C conversion funnel.
            </p>
          </div>

          <div className="fe-challenge-visual-wrap fe-motion-reveal">
            <img
              src={`${base}images/case_study/french_essence_digital/mask_group.png`}
              alt="High-fashion French Essence Urban Men tabletop shoot"
              className="fe-full-rounded-img"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── 6. THE STRATEGY SECTION ── */}
      <section className="fe-strategy-section">
        <div className="fe-container">
          <div className="fe-strategy-grid fe-motion-reveal">
            <div className="fe-strategy-visual-col">
              <img
                src={`${base}images/case_study/french_essence_digital/group_112.png`}
                alt="French Essence Charm Eau de Parfum bottle silhouette"
                className="fe-col-rounded-img"
                loading="lazy"
              />
            </div>
            <div className="fe-strategy-content-col">
              <h2 className="fe-side-heading">
                <span className="fe-serif-dark">THE</span>{' '}
                <span className="fe-serif-red">STRATEGY</span>
                <span className="fe-heading-underline-left red"></span>
              </h2>
              <div className="fe-strategy-narrative">
                <p>
                  We repositioned French Essence around a core creative pillar: <em>The Scent of Elegance</em>. Rather than focusing merely on bottle shots, we built an aspirational lifestyle universe capturing intimate luxury moments—from tailored cuffs to warm ambient evenings.
                </p>
                <p>
                  To accelerate performance, we established a systematic monthly creative engine producing 45+ dynamic video and carousel variations tailored to high-intent fragrance buyers on Meta, Instagram Reels, and YouTube Shorts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. BRAND & LOGO EVOLUTION SECTION ── */}
      <section className="fe-logo-section">
        <div className="fe-container">
          <div className="fe-center-header fe-motion-reveal">
            <h2 className="fe-section-heading">
              <span className="fe-serif-dark">BRAND &amp; LOGO</span>{' '}
              <span className="fe-serif-red">EVOLUTION</span>
              <span className="fe-heading-underline red"></span>
            </h2>
            <p className="fe-logo-subtitle">
              Transitioning from a literal Eiffel Tower mark into a geometric, modern architectural monogram.
            </p>
          </div>

          <div className="fe-logo-visual-card fe-motion-reveal">
            <img
              src={`${base}images/case_study/french_essence_digital/french_essence_logo_evolution_study_1.png`}
              alt="French Essence Logo Evolution Study — Architectural Monogram Guidelines"
              className="fe-full-rounded-img"
              loading="lazy"
            />
          </div>

          {/* 3 Colorway Badges Row */}
          <div className="fe-badges-grid fe-motion-reveal">
            <div className="fe-badge-item">
              <img
                src={`${base}images/case_study/french_essence_digital/group_113.png`}
                alt="French Essence Clean White Badge"
                className="fe-badge-img"
                loading="lazy"
              />
              <span className="fe-badge-caption">Minimalist White</span>
            </div>
            <div className="fe-badge-item">
              <img
                src={`${base}images/case_study/french_essence_digital/group_114.png`}
                alt="French Essence Luxury Noir Black Badge"
                className="fe-badge-img"
                loading="lazy"
              />
              <span className="fe-badge-caption">Prestige Noir</span>
            </div>
            <div className="fe-badge-item">
              <img
                src={`${base}images/case_study/french_essence_digital/group_115.png`}
                alt="French Essence Signature Crimson Red Badge"
                className="fe-badge-img"
                loading="lazy"
              />
              <span className="fe-badge-caption">Signature Crimson</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. CAMPAIGN PERFORMANCE / STATS CARDS ── */}
      <section className="fe-performance-section">
        <div className="fe-container">
          <div className="fe-center-header fe-motion-reveal">
            <h2 className="fe-section-heading">
              <span className="fe-serif-dark">DIGITAL</span>{' '}
              <span className="fe-serif-red">PERFORMANCE</span>
              <span className="fe-heading-underline red"></span>
            </h2>
            <p className="fe-perf-subtitle">Key performance figures recorded across digital channels:</p>
          </div>

          <div className="fe-stats-grid fe-motion-reveal">
            {/* Stat 1 */}
            <div className="fe-stat-card">
              <div className="fe-stat-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8282A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </div>
              <div className="fe-stat-val">+180%</div>
              <div className="fe-stat-label">direct e-commerce orders</div>
            </div>

            {/* Stat 2 */}
            <div className="fe-stat-card">
              <div className="fe-stat-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8282A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <div className="fe-stat-val">45+ Ads</div>
              <div className="fe-stat-label">monthly creative engine</div>
            </div>

            {/* Stat 3 */}
            <div className="fe-stat-card">
              <div className="fe-stat-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8282A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
                  <path d="m13 13 6 6"></path>
                </svg>
              </div>
              <div className="fe-stat-val">3.4%</div>
              <div className="fe-stat-label">blended ad CTR</div>
            </div>

            {/* Stat 4 */}
            <div className="fe-stat-card">
              <div className="fe-stat-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8282A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="fe-stat-val">120K+</div>
              <div className="fe-stat-label">organic community growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. WHAT WORKED SECTION ── */}
      <section className="fe-what-worked-section">
        <div className="fe-container">
          <div className="fe-center-header fe-motion-reveal">
            <h2 className="fe-section-heading">
              <span className="fe-serif-dark">WHAT</span>{' '}
              <span className="fe-serif-red">WORKED</span>
              <span className="fe-heading-underline red"></span>
            </h2>
          </div>

          <div className="fe-what-worked-list fe-motion-reveal">
            <div className="fe-worked-card">
              <div className="fe-worked-left">
                High-fashion tabletop photography shifted brand perception
              </div>
              <div className="fe-worked-right">
                Studio tabletop lighting and rich textures elevated French Essence from an affordable fragrance to an aspirational luxury statement.
              </div>
            </div>

            <div className="fe-worked-card">
              <div className="fe-worked-left">
                Iterative monthly ad variations stabilized paid acquisition
              </div>
              <div className="fe-worked-right">
                Testing 45+ creative hooks every month identified top-converting short-form formats, lowering customer acquisition costs substantially.
              </div>
            </div>

            <div className="fe-worked-card">
              <div className="fe-worked-left">
                Geometric architectural monogram unified touchpoints
              </div>
              <div className="fe-worked-right">
                The new monogram provided seamless visual cohesion across luxury packaging embossing, website banners, and social assets.
              </div>
            </div>

            <div className="fe-worked-card">
              <div className="fe-worked-left">
                Fragrance discovery kit funnels drove repeat purchases
              </div>
              <div className="fe-worked-right">
                Low-friction discovery sets introduced consumers to the brand palette, generating strong secondary full-bottle purchase retention.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. THE FINAL OUTCOME SECTION ── */}
      <section className="fe-outcome-section">
        <div className="fe-container">
          <div className="fe-center-header fe-motion-reveal">
            <h2 className="fe-section-heading">
              <span className="fe-serif-dark">THE FINAL</span>{' '}
              <span className="fe-serif-red">OUTCOME</span>
              <span className="fe-heading-underline red"></span>
            </h2>
          </div>

          <div className="fe-outcome-narrative fe-motion-reveal">
            <p>
              The French Essence digital repositioning established the brand as a formidable player in the luxury fragrance landscape. Through editorial tabletop production, rigorous monthly creative testing, and cohesive identity architecture, the brand achieved sustainable customer acquisition and triple-digit e-commerce growth.
            </p>
            <p>
              By anchoring digital campaigns in genuine lifestyle storytelling rather than simple discount messaging, French Essence cultivated deep emotional resonance and brand loyalty among contemporary fragrance enthusiasts.
            </p>
            <p className="fe-takeaway-highlight">
              <strong>The takeaway:</strong> In prestige lifestyle categories, visual aesthetics are not decorative—they are the primary engine of consumer trust, perceived value, and scalable conversion.
            </p>
          </div>

          {/* Bottom Action CTA */}
          <div className="fe-bottom-cta-wrap fe-motion-reveal">
            <button
              type="button"
              className="fe-btn-primary"
              onClick={() => onDownloadClick && onDownloadClick(csItem?.downloads?.[0] || {
                title: 'French Essence Digital & Creative Case Study',
                file: 'assets/case_studies/Sociapa%20-%20Digital%20Case%20Study%20.pdf',
                type: 'pdf',
                size: '24 MB'
              })}
            >
              Download French Essence Case Study ↓
            </button>
            <Link to="/best-digital-marketing-services-india" className="fe-btn-secondary seo-interlink">
              Explore Digital Marketing Services →
            </Link>
            <Link to="/contact-us" className="fe-btn-outline seo-interlink">
              Discuss Your Brand Evolution
            </Link>
          </div>
        </div>
      </section>

      {/* ── OTHER SERVICES SLIDER (ALL 7 CASE STUDIES) ── */}
      <OtherCaseStudiesSlider currentId="french-essence" />

    </article>
  );
}

