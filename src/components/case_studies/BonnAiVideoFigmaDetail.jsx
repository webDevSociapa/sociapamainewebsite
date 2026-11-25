import React from 'react';
import { Link } from 'react-router-dom';
import OtherCaseStudiesSlider from './OtherCaseStudiesSlider';
import './BonnAiVideoFigmaDetail.css';

export default function BonnAiVideoFigmaDetail({ csItem, onDownloadClick }) {
  const base = import.meta.env.BASE_URL || '/';

  return (
    <article className="bav-figma-case-study">

      {/* ── 1. HERO BANNER SECTION (FIGMA UNTITLED-1 1) ── */}
      <section className="bav-hero-section">
        <div className="bav-container">
          <div className="bav-hero-card">
            <img
              src={`${base}images/case_study/ai_video/hero_banner.png`}
              alt="Giving Product & USPs a Gen Z Beat — Bonn Lehsuni Tadka & Missi Bread AI Video Campaign"
              className="bav-hero-banner-img"
              width="1200"
              height="554"
              fetchpriority="high"
            />
            {/* Semantic single H1 tag for strict heading hierarchy & SEO */}
            <h1 className="bav-sr-only">
              Giving Product &amp; USPs a Gen Z Beat — Bonn AI Video Campaign by Sociapa
            </h1>
          </div>
        </div>
      </section>

      {/* ── 3. TAG PILLS ROW (EXACT FIGMA GROUP 24) ── */}
      <section className="bav-tags-section">
        <div className="bav-container">
          <div className="bav-tags-pills-row">
            <Link to="/videos" className="bav-tag-pill seo-interlink">
              AI Video Production
            </Link>
            <Link to="/brand-strategy" className="bav-tag-pill seo-interlink">
              Creative Strategy
            </Link>
            <Link to="/videos" className="bav-tag-pill seo-interlink">
              Character-led Storytelling
            </Link>
            <Link to="/videos" className="bav-tag-pill seo-interlink">
              Music-led Communication
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. PROJECT OVERVIEW SECTION (EXACT FIGMA GROUP 17 & METADATA) ── */}
      <section className="bav-overview-section">
        <div className="bav-container">
          <div className="bav-overview-grid">
            <div className="bav-overview-left">
              <h2 className="bav-overview-title">
                <span className="bav-red-underlined">
                  PROJECT
                  <span className="bav-red-bar" aria-hidden="true"></span>
                </span>{' '}
                <span className="bav-serif-dark">OVERVIEW</span>
              </h2>
            </div>

            <div className="bav-overview-right">
              <div className="bav-meta-pair">
                <span className="bav-meta-key">Client:</span>
                <span className="bav-meta-val">Bonn Group</span>
              </div>
              <div className="bav-meta-pair">
                <span className="bav-meta-key">Category:</span>
                <span className="bav-meta-val">AI Videos</span>
              </div>
              <div className="bav-meta-pair bav-meta-services">
                <span className="bav-meta-key">Services:</span>
                <span className="bav-meta-val">
                  <Link to="/videos" className="seo-interlink">AI Video Production</Link>, <Link to="/brand-strategy" className="seo-interlink">Creative Strategy</Link>, Character-led Storytelling, Music-led Communication
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. THE CHALLENGE SECTION (FIGMA 2-COLUMN WITH MUSIC PLAYER) ── */}
      <section className="bav-challenge-section">
        <div className="bav-container">
          <div className="bav-center-header">
            <h2 className="bav-section-heading">
              <span className="bav-serif-dark">THE</span>{' '}
              <span className="bav-red-underlined">
                CHALLENGE
                <span className="bav-red-bar" aria-hidden="true"></span>
              </span>
            </h2>
          </div>

          <div className="bav-challenge-grid">
            <div className="bav-challenge-content">
              <p>
                Create a high-recall, jingle-oriented <Link to="/videos" className="seo-interlink">AI video</Link> that connects with Gen Z audiences while communicating the unique selling points of individual Bonn products.
              </p>
              <p>
                The challenge was to make product communication entertaining, energetic and engaging without losing sight of the key differentiators.
              </p>
            </div>

            <div className="bav-challenge-visual">
              <img
                src={`${base}images/case_study/ai_video/challenge_music_player.png`}
                alt="Bonn red music player with audio waveform and play controls"
                className="bav-challenge-img"
                loading="lazy"
                width="600"
                height="200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. THE STRATEGY SECTION (FIGMA CENTER NARRATIVE + 3 MASCOTS BANNER) ── */}
      <section className="bav-strategy-section">
        <div className="bav-container">
          <div className="bav-center-header">
            <h2 className="bav-section-heading">
              <span className="bav-serif-dark">THE</span>{' '}
              <span className="bav-red-underlined">
                STRATEGY
                <span className="bav-red-bar" aria-hidden="true"></span>
              </span>
            </h2>
          </div>

          <div className="bav-strategy-narrative">
            <p>
              We built the campaign around distinctive product mascots, each representing an individual product and its key USPs.
            </p>
            <p>
              The idea was to bring these characters together in a unified visual narrative, using music and character-led storytelling to create a cohesive and memorable brand experience.
            </p>
          </div>

          <div className="bav-strategy-visual-wrap">
            <img
              src={`${base}images/case_study/ai_video/strategy_mascots.png`}
              alt="Bonn 3D Mascots — Missi Bread, Lehsuni Tadka Bread, and Digestive Ajwaini Jeera Bread"
              className="bav-strategy-img"
              loading="lazy"
              width="1200"
              height="422"
            />
          </div>
        </div>
      </section>

      {/* ── 7. OUR APPROACH SECTION (FIGMA 4 DUAL-TONE ROWS) ── */}
      <section className="bav-approach-section">
        <div className="bav-container">
          <div className="bav-center-header">
            <h2 className="bav-section-heading">
              <span className="bav-red-underlined">
                OUR
                <span className="bav-red-bar" aria-hidden="true"></span>
              </span>{' '}
              <span className="bav-serif-dark">APPROACH</span>
            </h2>
          </div>

          <div className="bav-approach-list">
            {/* Item 1 */}
            <div className="bav-approach-item">
              <h3 className="bav-approach-item-title">
                <span className="dark-part">CHARACTER-</span>
                <span className="red-part">LED STORYTELLING</span>
              </h3>
              <p className="bav-approach-item-desc">
                Developed distinctive mascots to represent individual products.
              </p>
            </div>

            {/* Item 2 */}
            <div className="bav-approach-item">
              <h3 className="bav-approach-item-title">
                <span className="dark-part">JINGLE-LED </span>
                <span className="red-part">COMMUNICATION</span>
              </h3>
              <p className="bav-approach-item-desc">
                Used a catchy musical narrative to make the campaign engaging and memorable.
              </p>
            </div>

            {/* Item 3 */}
            <div className="bav-approach-item">
              <h3 className="bav-approach-item-title">
                <span className="dark-part">USP </span>
                <span className="red-part">INTEGRATION</span>
              </h3>
              <p className="bav-approach-item-desc">
                Wove product differentiators into the storyline through entertaining character interactions.
              </p>
            </div>

            {/* Item 4 */}
            <div className="bav-approach-item">
              <h3 className="bav-approach-item-title">
                <span className="dark-part">DYNAMIC </span>
                <span className="red-part">AI VISUALS</span>
              </h3>
              <p className="bav-approach-item-desc">
                Combined vibrant animations, fast-paced transitions and energetic visuals to hold audience attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. CREATIVE CONCEPT & VISUAL EXECUTION SECTION (EXACT FIGMA) ── */}
      <section className="bav-concept-section">
        <div className="bav-container">
          <div className="bav-center-header">
            <h2 className="bav-section-heading">
              <span className="bav-serif-dark">CREATIVE CONCEPT &amp; VISUAL EXECUTION</span>
            </h2>
          </div>

          <div className="bav-concept-narrative">
            <p>
              The campaign used a vibrant, energetic visual direction to complement its Gen Z-focused communication. Product mascots and animated visuals formed the central visual language, supported by the jingle-led narrative.
            </p>
          </div>
        </div>
      </section>

      {/* ── 9. CAMPAIGN PERFORMANCE SECTION (FIGMA 4 STAT CARDS) ── */}
      <section className="bav-performance-section">
        <div className="bav-container">
          <div className="bav-center-header">
            <h2 className="bav-section-heading">
              <span className="bav-red-underlined">
                CAMPAIGN
                <span className="bav-red-bar" aria-hidden="true"></span>
              </span>{' '}
              <span className="bav-serif-dark">PERFORMANCE</span>
            </h2>
            <p className="bav-perf-subtitle">
              The campaign generated strong visibility and engagement across <Link to="/best-social-media-marketing-agency-india" className="seo-interlink">Instagram and Facebook</Link>.
            </p>
          </div>

          <div className="bav-stats-4-grid">
            <div className="bav-stat-card">
              <div className="bav-stat-num">682.9K</div>
              <div className="bav-stat-lbl">9K total views across Instagram and Facebook</div>
            </div>

            <div className="bav-stat-card">
              <div className="bav-stat-num">648K</div>
              <div className="bav-stat-lbl">Reach</div>
            </div>

            <div className="bav-stat-card">
              <div className="bav-stat-num">2.4K</div>
              <div className="bav-stat-lbl">Interactions</div>
            </div>

            <div className="bav-stat-card">
              <div className="bav-stat-num">516</div>
              <div className="bav-stat-lbl">Follows generated through the Instagram campaign</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. FACEBOOK PERFORMANCE SECTION (FIGMA 3 STAT CARDS) ── */}
      <section className="bav-fb-performance-section">
        <div className="bav-container">
          <div className="bav-center-header">
            <h2 className="bav-section-heading">
              <span className="bav-red-underlined">
                FACEBOOK
                <span className="bav-red-bar" aria-hidden="true"></span>
              </span>{' '}
              <span className="bav-serif-dark">PERFORMANCE</span>
            </h2>
          </div>

          <div className="bav-stats-3-grid">
            <div className="bav-stat-card">
              <div className="bav-stat-num">139.3K</div>
              <div className="bav-stat-lbl">Views</div>
            </div>

            <div className="bav-stat-card">
              <div className="bav-stat-num">123.1K</div>
              <div className="bav-stat-lbl">Viewers</div>
            </div>

            <div className="bav-stat-card">
              <div className="bav-stat-num">2.8K</div>
              <div className="bav-stat-lbl">15-second views</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. THE FINAL OUTCOME SECTION (EXACT FIGMA GROUP 160) ── */}
      <section className="bav-outcome-section">
        <div className="bav-container">
          <div className="bav-center-header">
            <h2 className="bav-section-heading">
              <span className="bav-red-underlined">
                THE FINAL
                <span className="bav-red-bar" aria-hidden="true"></span>
              </span>{' '}
              <span className="bav-serif-dark">OUTCOME</span>
            </h2>
          </div>

          <div className="bav-outcome-narrative">
            <p>
              The campaign brought together AI-powered visuals, product mascots and music-led storytelling to make product communication more engaging for younger audiences.
            </p>
            <p>
              With 682.9K views and 648K reach across Instagram and Facebook, the campaign gave Bonn's product USPs a distinctive, entertaining format while driving audience interactions and new Instagram follows.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="bav-bottom-cta-wrap">
            <button
              type="button"
              className="bav-btn-primary"
              onClick={() => onDownloadClick && onDownloadClick(csItem?.downloads?.[0] || {
                title: 'Bonn AI Video Campaign Presentation',
                file: 'assets/case_studies/Sociapa_Bonn%20Social%20Media%20Launch.ppsx',
                type: 'ppsx',
                size: '35 MB'
              })}
            >
              <span>Download Bonn Campaign Deck ↓</span>
            </button>
            <Link to="/videos" className="bav-btn-secondary seo-interlink">
              Explore Video Production Services →
            </Link>
            <Link to="/contact-us" className="bav-btn-outline seo-interlink">
              Start a Project With Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── 12. OTHER CASE STUDIES / SERVICES SLIDER ── */}
      <OtherCaseStudiesSlider currentId="bonn-ai-video" />

    </article>
  );
}
