import React from 'react';
import { Link } from 'react-router-dom';
import OtherCaseStudiesSlider from './OtherCaseStudiesSlider';
import './TupperwareFigmaDetail.css';

export default function TupperwareFigmaDetail({ csItem, onDownloadClick }) {
  const base = import.meta.env.BASE_URL || '/';

  return (
    <article className="tup-figma-case-study">

      {/* ── 1. CATEGORY PILLS BAR (FIGMA TOP NAV) ── */}
      <nav className="tup-category-pills-bar" aria-label="Case Study Categories">
        <div className="tup-container">
          <div className="tup-pills-wrapper">
            <Link to="/case-studies/packaging" className="tup-cat-pill">
              PACKAGING
            </Link>
            <Link to="/case-studies/influencer-campaign" className="tup-cat-pill">
              INFLUENCER CAMPAIGN
            </Link>
            <Link to="/case-studies/product-launch" className="tup-cat-pill">
              PRODUCT LAUNCH
            </Link>
            <Link to="/case-studies/digital" className="tup-cat-pill">
              DIGITAL
            </Link>
            <Link to="/case-studies/performance" className="tup-cat-pill">
              PERFORMANCE
            </Link>
            <span className="tup-cat-pill active">
              TUPPERWARE
            </span>
            <Link to="/case-studies/ai-video" className="tup-cat-pill">
              AI VIDEO
            </Link>
          </div>
        </div>
      </nav>

      {/* ── 2. HERO BANNER SECTION (FIGMA HERO BANNER WITH 5 BOTTLES & HEADLINE) ── */}
      <section className="tup-hero-section">
        <div className="tup-container">
          <div className="tup-hero-card">
            <img
              src={`${base}images/case_study/tupperware/hero_banner.jpg`}
              alt="Turning a Festive Sale into Relatable, Creator-Led Storytelling — Tupperware"
              className="tup-hero-banner-img"
              width="1200"
              height="552"
              fetchpriority="high"
            />
            {/* Semantic single H1 tag for strict heading hierarchy & SEO */}
            <h1 className="tup-sr-only">
              Turning a Festive Sale into Relatable, Creator-Led Storytelling — The Great Tupperware Festival
            </h1>
          </div>
        </div>
      </section>

      {/* ── 3. TAG PILLS ROW ── */}
      <section className="tup-tags-section">
        <div className="tup-container">
          <div className="tup-tags-pills-row">
            <Link to="/best-digital-marketing-services-india" className="tup-tag-pill">
              Performance Marketing
            </Link>
            <Link to="/pay-per-click-ppc-services-india" className="tup-tag-pill">
              Paid Media
            </Link>
            <Link to="/videos" className="tup-tag-pill">
              Video Campaigns
            </Link>
            <Link to="/brand-strategy" className="tup-tag-pill">
              Audience Optimisation
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. PROJECT OVERVIEW SECTION ── */}
      <section className="tup-overview-section">
        <div className="tup-container">
          <div className="tup-overview-grid">
            <div className="tup-overview-left">
              <h2 className="tup-overview-title">
                <span className="tup-red-underlined">
                  PROJECT
                  <span className="tup-red-bar" aria-hidden="true"></span>
                </span>{' '}
                <span className="tup-serif-dark">OVERVIEW</span>
              </h2>
            </div>
            <div className="tup-overview-right">
              {/* Row 1, Col 1 */}
              <div className="tup-meta-pair">
                <span className="tup-meta-key">Client:</span>
                <span className="tup-meta-val">Tupperware</span>
              </div>
              {/* Row 1, Col 2 */}
              <div className="tup-meta-pair">
                <span className="tup-meta-key">Industry:</span>
                <span className="tup-meta-val">
                  Consumer Products | Kitchenware &amp; Food Storage
                </span>
              </div>
              {/* Row 2, Col 1 (below Client) */}
              <div className="tup-meta-pair">
                <span className="tup-meta-key">Campaign:</span>
                <span className="tup-meta-val">The Great Tupperware Festival</span>
              </div>
              {/* Row 2, Col 2 (below Industry) */}
              <div className="tup-meta-pair">
                <span className="tup-meta-key">Services:</span>
                <span className="tup-meta-val">
                  UGC Strategy, Creator-Led Content, Campaign Execution, Paid Amplification
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. THE CHALLENGE SECTION ── */}
      <section className="tup-challenge-section">
        <div className="tup-container">
          <div className="tup-center-header">
            <h2 className="tup-section-heading">
              <span className="tup-serif-dark">THE</span>{' '}
              <span className="tup-red-underlined">
                CHALLENGE
                <span className="tup-red-bar" aria-hidden="true"></span>
              </span>
            </h2>
          </div>

          <div className="tup-challenge-narrative">
            <p>
              Festive sale campaigns often compete in a crowded landscape of discounts, promotional messages, and repetitive advertising.
            </p>
            <p>
              For The Great Tupperware Festival, the challenge was to capture attention, build product consideration, and encourage shopping by making the offer feel relevant to everyday consumers.
            </p>
            <p>
              Rather than relying solely on conventional promotional creatives, the campaign needed to demonstrate how Tupperware products fit naturally into real-life routines—and give audiences a compelling reason to engage with the festival.
            </p>
          </div>

          <div className="tup-challenge-visual-wrap">
            <img
              src={`${base}images/case_study/tupperware/challenge_photo.jpg`}
              alt="Tupperware products filming on tripod with smartphone"
              className="tup-full-rounded-img"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── 6. THE INSIGHT SECTION ── */}
      <section className="tup-insight-section">
        <div className="tup-container">
          <div className="tup-insight-grid">
            <div className="tup-insight-visual-col">
              <img
                src={`${base}images/case_study/tupperware/insight_photo.jpg`}
                alt="Couple in kitchen with Tupperware water bottle and food containers"
                className="tup-col-rounded-img"
                loading="lazy"
              />
            </div>
            <div className="tup-insight-content-col">
              <h2 className="tup-side-heading">
                <span className="tup-serif-dark">THE</span>{' '}
                <span className="tup-serif-red">INSIGHT</span>
                <span className="tup-heading-underline-left red"></span>
              </h2>
              <div className="tup-insight-narrative">
                <p>
                  People connect with products more easily when they can see how those products solve familiar, everyday problems.
                </p>
                <p>
                  Hydration, keeping food fresh, and organising kitchen spaces offered relatable entry points for demonstrating Tupperware&apos;s utility. These moments could make product benefits tangible while allowing the festival offer to become part of a natural story rather than the entire advertisement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. THE STRATEGY SECTION (RED HERO CARD WITH 3 SUB-CARDS) ── */}
      <section className="tup-strategy-section">
        <div className="tup-container">
          <div className="tup-strategy-card">
            <div className="tup-strategy-header">
              <h2 className="tup-strategy-title">
                <span className="tup-serif-dark">THE</span>{' '}
                <span className="tup-serif-white">STRATEGY</span>
                <span className="tup-heading-underline white"></span>
              </h2>
              <p className="tup-strategy-subtitle">
                We built the campaign around a simple shift: from product features to everyday stories.
              </p>
              <p className="tup-strategy-lead">
                The UGC approach connected three elements:
              </p>
            </div>

            <div className="tup-strategy-subcards-grid">
              <div className="tup-strategy-subcard">
                <div className="tup-subcard-number">01</div>
                <h3 className="tup-subcard-title">Product in use</h3>
                <p className="tup-subcard-desc">
                  Showing Tupperware products within familiar daily routines.
                </p>
              </div>

              <div className="tup-strategy-subcard">
                <div className="tup-subcard-number">02</div>
                <h3 className="tup-subcard-title">Problem to solution</h3>
                <p className="tup-subcard-desc">
                  Demonstrating how products address practical, everyday needs.
                </p>
              </div>

              <div className="tup-strategy-subcard">
                <div className="tup-subcard-number">03</div>
                <h3 className="tup-subcard-title">Festival offer</h3>
                <p className="tup-subcard-desc">
                  Bringing in the promotion through creator-led communication that encouraged discovery and shopping.
                </p>
              </div>
            </div>

            <p className="tup-strategy-footer-note">
              This framework helped communicate both why Tupperware and why now.
            </p>
          </div>
        </div>
      </section>

      {/* ── 8. THE SOLUTION SECTION (ALTERNATING ROWS) ── */}
      <section className="tup-solution-section">
        <div className="tup-container">
          <div className="tup-center-header">
            <h2 className="tup-section-heading">
              <span className="tup-serif-dark">THE</span>{' '}
              <span className="tup-serif-red">SOLUTION</span>
              <span className="tup-heading-underline red"></span>
            </h2>
          </div>

          <div className="tup-solution-rows-list">

            {/* Sub-section 1: Creator-Led UGC (Text Left, Image Right) */}
            <div className="tup-sol-row">
              <div className="tup-sol-text-col">
                <h3 className="tup-sol-subheading">
                  <span className="tup-serif-dark">CREATOR-</span>
                  <span className="tup-serif-red">LED UGC</span>
                  <span className="tup-heading-underline-left red"></span>
                </h3>
                <p className="tup-sol-desc">
                  Developed 10 short-form UGC videos featuring products in relatable everyday scenarios, using real-home settings, organic lighting, and candid presentation styles.
                </p>
              </div>
              <div className="tup-sol-img-col">
                <img
                  src={`${base}images/case_study/tupperware/solution_1_ugc.jpg`}
                  alt="Tupperware creator holding navy bottle in relatable home setting"
                  className="tup-sol-img"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Sub-section 2: Diverse Creator Mix (Image Left, Text Right) */}
            <div className="tup-sol-row reverse">
              <div className="tup-sol-text-col">
                <h3 className="tup-sol-subheading">
                  <span className="tup-serif-dark">DIVERSE CREATOR</span>{' '}
                  <span className="tup-serif-red">MIX</span>
                  <span className="tup-heading-underline-left red"></span>
                </h3>
                <p className="tup-sol-desc">
                  Worked with lifestyle, wellness, and culinary creators to bring varied perspectives to the campaign and make product demonstrations feel natural to different audiences.
                </p>
              </div>
              <div className="tup-sol-img-col">
                <img
                  src={`${base}images/case_study/tupperware/solution_2_creators.jpg`}
                  alt="Diverse creator mix across lifestyle, fitness, and culinary niches"
                  className="tup-sol-img"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Sub-section 3: Product-First Storytelling (Text Left, Image Right) */}
            <div className="tup-sol-row">
              <div className="tup-sol-text-col">
                <h3 className="tup-sol-subheading">
                  <span className="tup-serif-dark">PRODUCT-</span>
                  <span className="tup-serif-red">FIRST</span>
                  <br />
                  <span className="tup-serif-red">STORYTELLING</span>
                  <span className="tup-heading-underline-left red"></span>
                </h3>
                <p className="tup-sol-desc">
                  Focused on four product categories: Primo, AquaVibe, Super Storer, and Smart Saver / Within Reach. The content highlighted hydration, convenient water intake, food freshness, and kitchen organisation.
                </p>
              </div>
              <div className="tup-sol-img-col">
                <img
                  src={`${base}images/case_study/tupperware/solution_3_products.jpg`}
                  alt="Tupperware Primo, AquaVibe and Super Storer containers"
                  className="tup-sol-img"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Sub-section 4: Multi-Platform Execution (Image Left, Text Right) */}
            <div className="tup-sol-row reverse">
              <div className="tup-sol-text-col">
                <h3 className="tup-sol-subheading">
                  <span className="tup-serif-dark">MULTI-PLATFORM</span>
                  <br />
                  <span className="tup-serif-red">EXECUTION</span>
                  <span className="tup-heading-underline-left red"></span>
                </h3>
                <p className="tup-sol-desc">
                  Adapted creator-led videos for four platforms, using vertical short-form formats suited to Reels, Shorts, and feed placements.
                </p>
              </div>
              <div className="tup-sol-img-col">
                <img
                  src={`${base}images/case_study/tupperware/solution_4_phones.jpg`}
                  alt="Multi-platform vertical short-form video execution across Reels and Shorts"
                  className="tup-sol-img"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Sub-section 5: Festival Communication and Paid Amplification (Text Left, Image Right) */}
            <div className="tup-sol-row">
              <div className="tup-sol-text-col">
                <h3 className="tup-sol-subheading">
                  <span className="tup-serif-dark">FESTIVAL</span>
                  <br />
                  <span className="tup-serif-dark">COMMUNICATION AND</span>
                  <br />
                  <span className="tup-serif-red">PAID AMPLIFICATION</span>
                  <span className="tup-heading-underline-left red"></span>
                </h3>
                <p className="tup-sol-desc">
                  Integrated product benefits and festival offers through different content hooks, progressing from discovery and product desire to offer awareness and last-chance messaging. Paid amplification helped scale the strongest UGC assets.
                </p>
              </div>
              <div className="tup-sol-img-col">
                <img
                  src={`${base}images/case_study/tupperware/solution_5_amplification.jpg`}
                  alt="Festival communication and paid media performance tracking on laptop"
                  className="tup-sol-img"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 9. CAMPAIGN PERFORMANCE (6 FIGMA STAT CARDS) ── */}
      <section className="tup-performance-section">
        <div className="tup-container">
          <div className="tup-center-header">
            <h2 className="tup-section-heading">
              <span className="tup-serif-dark">CAMPAIGN</span>{' '}
              <span className="tup-serif-red">PERFORMANCE</span>
              <span className="tup-heading-underline red"></span>
            </h2>
            <p className="tup-perf-subtitle">The campaign report recorded:</p>
          </div>

          <div className="tup-stats-grid">
            {/* Card 1: Total Views */}
            <div className="tup-stat-card">
              <div className="tup-stat-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8282A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <div className="tup-stat-val">975.3K+</div>
              <div className="tup-stat-label">total views</div>
            </div>

            {/* Card 2: Total Interactions */}
            <div className="tup-stat-card">
              <div className="tup-stat-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8282A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path>
                  <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"></path>
                  <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"></path>
                  <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path>
                </svg>
              </div>
              <div className="tup-stat-val">4.9K+</div>
              <div className="tup-stat-label">total interactions</div>
            </div>

            {/* Card 3: Link Clicks */}
            <div className="tup-stat-card">
              <div className="tup-stat-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8282A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
                  <path d="m13 13 6 6"></path>
                </svg>
              </div>
              <div className="tup-stat-val">161+</div>
              <div className="tup-stat-label">link clicks</div>
            </div>

            {/* Card 4: UGC Videos */}
            <div className="tup-stat-card">
              <div className="tup-stat-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8282A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="4"></rect>
                  <polygon points="10 9 15 12 10 15 10 9"></polygon>
                </svg>
              </div>
              <div className="tup-stat-val">10</div>
              <div className="tup-stat-label">UGC videos</div>
            </div>

            {/* Card 5: Platforms */}
            <div className="tup-stat-card">
              <div className="tup-stat-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8282A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 3h5v5"></path>
                  <path d="M4 20L21 3"></path>
                  <path d="M21 16v5h-5"></path>
                  <path d="M15 15l6 6"></path>
                  <path d="M4 4l5 5"></path>
                </svg>
              </div>
              <div className="tup-stat-val">4</div>
              <div className="tup-stat-label">platforms</div>
            </div>

            {/* Card 6: Product Categories */}
            <div className="tup-stat-card">
              <div className="tup-stat-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8282A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              </div>
              <div className="tup-stat-val">4+</div>
              <div className="tup-stat-label">product categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. WHAT WORKED SECTION (4 EDITORIAL CARDS) ── */}
      <section className="tup-what-worked-section">
        <div className="tup-container">
          <div className="tup-center-header">
            <h2 className="tup-section-heading">
              <span className="tup-serif-dark">WHAT</span>{' '}
              <span className="tup-red-underlined">
                WORKED
                <span className="tup-red-bar" aria-hidden="true"></span>
              </span>
            </h2>
          </div>

          <div className="tup-what-worked-list">
            <div className="tup-worked-card">
              <div className="tup-worked-left">
                Everyday problems created stronger hooks
              </div>
              <div className="tup-worked-right">
                Hydration, food freshness, and kitchen organisation gave viewers an immediate reason to watch.
              </div>
            </div>

            <div className="tup-worked-card">
              <div className="tup-worked-left">
                Product demonstrations made benefits tangible
              </div>
              <div className="tup-worked-right">
                Showing products in action moved the communication beyond simple product visibility.
              </div>
            </div>

            <div className="tup-worked-card">
              <div className="tup-worked-left">
                Creator-led content made promotional messaging feel more natural
              </div>
              <div className="tup-worked-right">
                The festival offer could be integrated into short-form stories without relying entirely on conventional sale creatives.
              </div>
            </div>

            <div className="tup-worked-card">
              <div className="tup-worked-left">
                Paid amplification helped scale the content
              </div>
              <div className="tup-worked-right">
                The festival offer could be integrated into short-form stories without relying entirely on conventional sale creatives.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. THE FINAL OUTCOME SECTION ── */}
      <section className="tup-outcome-section">
        <div className="tup-container">
          <div className="tup-center-header">
            <h2 className="tup-section-heading">
              <span className="tup-serif-dark">THE FINAL</span>{' '}
              <span className="tup-red-underlined">
                OUTCOME
                <span className="tup-red-bar" aria-hidden="true"></span>
              </span>
            </h2>
          </div>

          <div className="tup-outcome-narrative">
            <p>
              The Great Tupperware Festival used creator-led storytelling to connect product utility with festive shopping intent. Across 10 videos and four platforms, the campaign generated 975K+ views, alongside 4.9K+ interactions and 161+ link clicks, as reported in the campaign document.
            </p>
            <p>
              By combining relatable everyday situations, product demonstrations, creator-led communication, and paid amplification, the campaign made the festival more than a discount announcement - it gave audiences reasons to discover the products and consider the offer.
            </p>
            <p className="tup-takeaway-highlight">
              <strong>The takeaway:</strong> When product utility meets relatable storytelling, promotional communication can feel less like an advertisement and more like a recommendation.
            </p>
          </div>

          {/* Bottom Action CTA */}
          <div className="tup-bottom-cta-wrap">
            <button
              type="button"
              className="tup-btn-primary"
              onClick={() => onDownloadClick && onDownloadClick(csItem?.downloads?.[0] || {
                title: 'Tupperware Campaign Report',
                file: 'assets/case_studies/Gyan%20x%20Sociapa.ppsx',
                type: 'ppsx',
                size: '12 MB'
              })}
            >
              Download Tupperware Campaign Report ↓
            </button>
            <Link to="/influencer-marketing-services" className="tup-btn-secondary seo-interlink">
              Explore Influencer Marketing Services →
            </Link>
            <Link to="/contact-us" className="tup-btn-outline seo-interlink">
              Discuss Your Campaign With Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── OTHER SERVICES SLIDER (ALL 7 CASE STUDIES) ── */}
      <OtherCaseStudiesSlider currentId="tupperware-influencer" />

    </article>
  );
}

