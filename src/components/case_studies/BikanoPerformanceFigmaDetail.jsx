import React from 'react';
import { Link } from 'react-router-dom';
import OtherCaseStudiesSlider from './OtherCaseStudiesSlider';
import './BikanoPerformanceFigmaDetail.css';

export default function BikanoPerformanceFigmaDetail({ csItem, onDownloadClick }) {
  const base = import.meta.env.BASE_URL || '/';

  return (
    <article className="bp-figma-case-study">

      {/* ── 1. CATEGORY PILLS BAR (FIGMA TOP NAV) ── */}
      <nav className="bp-category-pills-bar" aria-label="Case Study Categories">
        <div className="bp-container">
          <div className="bp-pills-wrapper">
            <Link to="/case-studies/packaging" className="bp-cat-pill">
              PACKAGING
            </Link>
            <Link to="/case-studies/influencer-campaign" className="bp-cat-pill">
              INFLUENCER CAMPAIGN
            </Link>
            <Link to="/case-studies/product-launch" className="bp-cat-pill">
              PRODUCT LAUNCH
            </Link>
            <Link to="/case-studies/digital" className="bp-cat-pill">
              DIGITAL
            </Link>
            <span className="bp-cat-pill active">
              PERFORMANCE
            </span>
            <Link to="/case-studies/tupperware" className="bp-cat-pill">
              TUPPERWARE
            </Link>
            <Link to="/case-studies/ai-video" className="bp-cat-pill">
              AI VIDEO
            </Link>
          </div>
        </div>
      </nav>

      {/* ── 2. HERO BANNER SECTION (FIGMA HERO BANNER: 8.89M+ REPORTED IMPRESSIONS) ── */}
      <section className="bp-hero-section">
        <div className="bp-container">
          <div className="bp-hero-card bp-motion-reveal">
            <img
              src={`${base}images/case_study/performance_bikano/group_117.png`}
              alt="Turning Media Investment into Measurable Digital Reach — 8.89M+ Reported Impressions — Bikano"
              className="bp-hero-banner-img"
              width="1201"
              height="534"
              fetchpriority="high"
            />
            {/* Semantic single H1 tag for strict heading hierarchy & SEO */}
            <h1 className="bp-sr-only">
              Bikano — Scaled Performance Marketing, Media Investment &amp; Festive Off-Take
            </h1>
          </div>
        </div>
      </section>

      {/* ── 3. PROJECT OVERVIEW SECTION (EXACT FIGMA MATCH) ── */}
      <section className="bp-overview-section">
        <div className="bp-container">
          <div className="bp-overview-grid bp-motion-reveal">
            <div className="bp-overview-left">
              <h2 className="bp-overview-title">
                <span className="bp-red-underlined">
                  PROJECT
                  <span className="bp-red-bar" aria-hidden="true"></span>
                </span>{' '}
                <span className="bp-serif-dark">OVERVIEW</span>
              </h2>
            </div>
            <div className="bp-overview-right">
              <div className="bp-meta-pair">
                <span className="bp-meta-key">Client:</span>
                <span className="bp-meta-val">Bikano</span>
              </div>
              <div className="bp-meta-pair">
                <span className="bp-meta-key">Industry:</span>
                <span className="bp-meta-val">FMCG | Packaged Foods</span>
              </div>
              <div className="bp-meta-pair bp-meta-services">
                <span className="bp-meta-key">Services:</span>
                <span className="bp-meta-val">
                  Digital Media Planning, Paid Campaign Execution, <Link to="/videos" className="seo-interlink">Video-View Campaigns</Link>, <Link to="/best-digital-marketing-services-india" className="seo-interlink">Performance Reporting</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. THE CHALLENGE SECTION (EXACT FIGMA MATCH) ── */}
      <section className="bp-challenge-section">
        <div className="bp-container">
          <div className="bp-center-header bp-motion-reveal">
            <h2 className="bp-section-heading">
              <span className="bp-serif-dark">THE</span>{' '}
              <span className="bp-red-underlined">
                CHALLENGE
                <span className="bp-red-bar" aria-hidden="true"></span>
              </span>
            </h2>
          </div>

          <div className="bp-challenge-narrative bp-motion-reveal">
            <p>
              Driving visibility for an established FMCG brand requires more than simply putting content in front of an audience. The campaign needed to distribute Bikano's video content across digital platforms, generate views at scale, and deliver efficient media performance.
            </p>
            <p>
              The focus was to build reach across relevant markets while monitoring campaign delivery, video-view performance, and cost efficiency across platforms.
            </p>
          </div>

          <div className="bp-challenge-visual-wrap bp-motion-reveal">
            <img
              src={`${base}images/case_study/performance_bikano/mask_group.png`}
              alt="Bikano 3D video display and omnichannel performance formats"
              className="bp-full-rounded-img"
              loading="lazy"
              width="1200"
              height="480"
            />
          </div>
        </div>
      </section>

      {/* ── 5. THE STRATEGY SECTION (EXACT 2-COLUMN FIGMA MATCH) ── */}
      <section className="bp-strategy-section">
        <div className="bp-container">
          <div className="bp-strategy-grid bp-motion-reveal">
            {/* Left Column: Heading + Narrative */}
            <div className="bp-strategy-content">
              <h2 className="bp-strategy-heading">
                <span className="bp-red-underlined">
                  THE
                  <span className="bp-red-bar" aria-hidden="true"></span>
                </span>{' '}
                <span className="bp-serif-dark">STRATEGY</span>
              </h2>

              <div className="bp-strategy-narrative">
                <p>
                  We adopted a multi-platform paid media approach combining <Link to="/pay-per-click-ppc-services-india" className="seo-interlink">Google Ads</Link> with <Link to="/best-social-media-marketing-agency-india" className="seo-interlink">Facebook and Instagram placements</Link>, including the Audience Network.
                </p>
                <p>
                  The campaign focused on two key objectives: maximising visibility through impressions and generating video views efficiently. Targeting parameters included audiences aged 17–40 across Chandigarh, Delhi/NCR, Haryana, Punjab, and parts of Uttar Pradesh. Campaign performance was monitored through impressions, video views, view rates, reach, and other delivery metrics.
                </p>
              </div>
            </div>

            {/* Right Column: Targeting Card Graphic */}
            <div className="bp-strategy-visual">
              <img
                src={`${base}images/case_study/performance_bikano/group_118.png`}
                alt="Bikano Targeting & Demographics: Age 17-40, Impressions/Visibility & Video Views/Efficiency toggles, Target Markets across Chandigarh, Haryana, Punjab, Delhi/NCR, UP"
                className="bp-strategy-img"
                loading="lazy"
                width="590"
                height="393"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. THE SOLUTION SECTION (EXACT FIGMA MATCH) ── */}
      <section className="bp-solution-section">
        <div className="bp-container">
          <div className="bp-center-header bp-motion-reveal">
            <h2 className="bp-section-heading bp-solution-main-heading">
              <span className="bp-serif-dark">THE</span>{' '}
              <span className="bp-red-underlined">
                SOLUTION
                <span className="bp-red-bar" aria-hidden="true"></span>
              </span>
            </h2>
          </div>

          <div className="bp-solution-list bp-motion-reveal">
            {/* Item 1: Multi-Platform Media Execution */}
            <div className="bp-solution-item">
              <h3 className="bp-solution-item-title">
                <span className="bp-red-underlined">
                  MULTI-PLATFORM
                  <span className="bp-red-bar" aria-hidden="true"></span>
                </span>{' '}
                <span className="bp-serif-dark">MEDIA EXECUTION</span>
              </h3>
              <p className="bp-solution-item-desc">
                Activated <Link to="/pay-per-click-ppc-services-india" className="seo-interlink">Google Ads</Link>, <Link to="/best-social-media-marketing-agency-india" className="seo-interlink">Facebook, Instagram</Link>, and Audience Network placements to distribute campaign content across digital touchpoints.
              </p>
            </div>

            {/* Item 2: Video-View Campaigns */}
            <div className="bp-solution-item">
              <h3 className="bp-solution-item-title">
                <span className="bp-red-underlined">
                  VIDEO-VIEW
                  <span className="bp-red-bar" aria-hidden="true"></span>
                </span>{' '}
                <span className="bp-serif-dark">CAMPAIGNS</span>
              </h3>
              <p className="bp-solution-item-desc">
                Ran CPM- and CPV-oriented campaigns to generate visibility and <Link to="/videos" className="seo-interlink">video consumption</Link> while tracking delivery efficiency.
              </p>
            </div>

            {/* Item 3: Audience and Interest Targeting */}
            <div className="bp-solution-item">
              <h3 className="bp-solution-item-title">
                <span className="bp-red-underlined">
                  AUDIENCE AND
                  <span className="bp-red-bar" aria-hidden="true"></span>
                </span>{' '}
                <span className="bp-serif-dark">INTEREST TARGETING</span>
              </h3>
              <p className="bp-solution-item-desc">
                Used geographic, demographic, keyword, and interest-based targeting to guide campaign delivery and assess audience response.
              </p>
            </div>

            {/* Item 4: Performance Monitoring */}
            <div className="bp-solution-item">
              <h3 className="bp-solution-item-title">
                <span className="bp-red-underlined">
                  PERFORMANCE
                  <span className="bp-red-bar" aria-hidden="true"></span>
                </span>{' '}
                <span className="bp-serif-dark">MONITORING</span>
              </h3>
              <p className="bp-solution-item-desc">
                Tracked reach, impressions, video views, frequency, engagement-related results, and cost efficiency to evaluate campaign performance across platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. CAMPAIGN PERFORMANCE SECTION (EXACT FIGMA MATCH) ── */}
      <section className="bp-performance-section">
        <div className="bp-container">
          <div className="bp-perf-header bp-motion-reveal">
            <h2 className="bp-perf-heading">
              <span className="bp-red-underlined">
                CAMPAIGN
                <span className="bp-red-bar" aria-hidden="true"></span>
              </span>{' '}
              <span className="bp-serif-dark">PERFORMANCE</span>
            </h2>
            <p className="bp-perf-subtitle">
              The March 2022 report recorded the following campaign-level results:
            </p>
          </div>

          <div className="bp-performance-visual-card bp-motion-reveal">
            <img
              src={`${base}images/case_study/performance_bikano/group_119.png`}
              alt="Bikano Campaign Results: 8.89M Impressions, 2.09M Video Views, 1.89 Frequency"
              className="bp-full-rounded-img"
              loading="lazy"
              width="895"
              height="258"
            />
          </div>
        </div>
      </section>

      {/* ── 8. GOOGLE ADS SECTION (EXACT FIGMA MATCH) ── */}
      <section className="bp-google-ads-section">
        <div className="bp-container">
          <div className="bp-center-header bp-motion-reveal">
            <h2 className="bp-section-heading">
              <span className="bp-red-underlined">
                GOOGLE
                <span className="bp-red-bar" aria-hidden="true"></span>
              </span>{' '}
              <span className="bp-serif-dark">ADS</span>
            </h2>

            <div className="bp-google-ads-narrative">
              <p>
                The report recorded 0.67 million+ impressions and 188K+ video views in its <Link to="/pay-per-click-ppc-services-india" className="seo-interlink">Google Ads</Link> summary. One of the listed video campaigns achieved a 29.61% view rate.
              </p>
              <p className="bp-placements-label">
                <Link to="/best-social-media-marketing-agency-india" className="seo-interlink">Facebook, Instagram</Link> &amp; Audience Network
              </p>
            </div>
          </div>

          <div className="bp-efficiency-visual-card bp-motion-reveal">
            <img
              src={`${base}images/case_study/performance_bikano/group_120.png`}
              alt="Bikano Placements Performance: 0.67M+ Impressions, 188k+ Video Views, 29.61% View Rate"
              className="bp-full-rounded-img"
              loading="lazy"
              width="1279"
              height="465"
            />
          </div>
        </div>
      </section>

      {/* ── 9. THE FINAL OUTCOME SECTION (EXACT FIGMA MATCH) ── */}
      <section className="bp-outcome-section">
        <div className="bp-container">
          <div className="bp-center-header bp-motion-reveal">
            <h2 className="bp-section-heading">
              <span className="bp-red-underlined">
                THE FINAL
                <span className="bp-red-bar" aria-hidden="true"></span>
              </span>{' '}
              <span className="bp-serif-dark">OUTCOME</span>
            </h2>
          </div>

          <div className="bp-outcome-narrative bp-motion-reveal">
            <p>
              Bikano’s March 2022 campaign delivered substantial digital exposure and <Link to="/videos" className="seo-interlink">video consumption</Link> across <Link to="/pay-per-click-ppc-services-india" className="seo-interlink">Google</Link> and <Link to="/best-social-media-marketing-agency-india" className="seo-interlink">social media platforms</Link>. With more than 8.89 million reported impressions and 2.09 million+ video views, the campaign demonstrated the scale achievable through coordinated <Link to="/best-digital-marketing-services-india" className="seo-interlink">paid media execution</Link> and performance tracking.
            </p>
            <p>
              The results provided a measurable view of campaign delivery across platforms, supported by metrics such as reach, view rate, frequency, and engagement-related results.
            </p>
            <p>
              The takeaway: Performance marketing is not just about putting content in front of people. It is about measuring delivery, understanding audience response, and making every platform count.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="bp-action-buttons-row bp-motion-reveal">
            <button
              type="button"
              className="bp-btn-primary"
              onClick={() => onDownloadClick && onDownloadClick(csItem?.downloads?.[0] || {
                title: 'Bikano Performance Marketing Overview',
                file: 'assets/case_studies/Sociapa_Bonn%20Social%20Media%20Launch.ppsx',
                type: 'ppsx',
                size: '35 MB'
              })}
            >
              <span>Download Bikano Performance Report</span>
              <span className="bp-btn-icon">↓</span>
            </button>
            <Link to="/pay-per-click-ppc-services-india" className="bp-btn-secondary seo-interlink">
              Explore Performance PPC Services →
            </Link>
            <Link to="/contact-us" className="bp-btn-outline seo-interlink">
              Discuss Your Performance Campaign
            </Link>
          </div>
        </div>
      </section>

      {/* ── 10. OTHER SERVICES SLIDER (ALL 7 CASE STUDIES) ── */}
      <OtherCaseStudiesSlider currentId="bikano-performance" />

    </article>
  );
}
