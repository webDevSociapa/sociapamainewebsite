import React from 'react';
import { Link } from 'react-router-dom';
import OtherCaseStudiesSlider from './OtherCaseStudiesSlider';
import './ApisInfluencerFigmaDetail.css';

export default function ApisInfluencerFigmaDetail({ csItem, onDownloadClick }) {
  const base = import.meta.env.BASE_URL || '/';

  return (
    <article className="apis-figma-case-study">

      {/* ── 1. CATEGORY PILLS BAR (FIGMA SLICE 0) ── */}
      <nav className="apis-category-pills-bar" aria-label="Case Study Categories">
        <div className="apis-container">
          <div className="apis-pills-wrapper">
            <Link to="/case-studies/packaging" className="apis-cat-pill">
              PACKAGING
            </Link>
            <span className="apis-cat-pill active">
              INFLUENCER CAMPAIGN
            </span>
            <Link to="/case-studies/product-launch" className="apis-cat-pill">
              PRODUCT LAUNCH
            </Link>
            <Link to="/case-studies/digital" className="apis-cat-pill">
              DIGITAL
            </Link>
            <Link to="/case-studies/performance" className="apis-cat-pill">
              PERFORMANCE
            </Link>
            <Link to="/case-studies/tupperware" className="apis-cat-pill">
              TUPPERWARE
            </Link>
            <Link to="/case-studies/ai-video" className="apis-cat-pill">
              AI VIDEO
            </Link>
          </div>
        </div>
      </nav>

      {/* ── 2. HERO SECTION: BOTTLE CARD + BOLD EDITORIAL TITLE (FIGMA SLICE 0) ── */}
      <section className="apis-hero-section">
        <div className="apis-container">
          <div className="apis-hero-grid">
            <div className="apis-hero-visual-card">
              <img
                src={`${base}images/case_study/apis_influencer/apis_hero_bottle.png`}
                alt="Apis Himalaya Honey — The Honey Specialist"
                className="apis-hero-bottle-img"
                width="1165"
                height="935"
                fetchpriority="high"
              />
            </div>
            <div className="apis-hero-heading-col">
              <h2 className="apis-hero-headline">
                CONNECTING WITH AUDIENCES THROUGH A DIVERSE CREATOR ECOSYSTEM
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. TAG PILLS ROW (FIGMA SLICE 1) ── */}
      <section className="apis-tags-section">
        <div className="apis-container">
          <div className="apis-tags-pills-row">
            <span className="apis-tag-pill">Influencer Strategy</span>
            <span className="apis-tag-pill">Creator Partnerships</span>
            <span className="apis-tag-pill">Content Amplification</span>
            <span className="apis-tag-pill">Digital PR</span>
          </div>
        </div>
      </section>

      {/* ── 4. PROJECT OVERVIEW SECTION (FIGMA SLICE 1) ── */}
      <section className="apis-overview-section">
        <div className="apis-container">
          <div className="apis-overview-grid">
            <div className="apis-overview-left">
              <h1 className="apis-overview-title">
                <span className="serif-red">PROJECT</span>{' '}
                <span className="serif-dark">OVERVIEW</span>
              </h1>
              <p className="apis-overview-tagline">
                Turning an everyday product into a brand that stands out.
              </p>
            </div>
            <div className="apis-overview-right">
              <div className="apis-meta-pair">
                <span className="apis-meta-key">Client:</span>
                <span className="apis-meta-val">APIS</span>
              </div>
              <div className="apis-meta-pair">
                <span className="apis-meta-key">Campaign:</span>
                <span className="apis-meta-val">Influencer Activation</span>
              </div>
              <div className="apis-meta-pair">
                <span className="apis-meta-key">Audience:</span>
                <span className="apis-meta-val">
                  Digital audiences across creator communities
                </span>
              </div>
              <div className="apis-meta-pair">
                <span className="apis-meta-key">Scope:</span>
                <span className="apis-meta-val">
                  Creator-led content and publisher/social amplification
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. THE BRIEF (FIGMA SLICE 1 & 2) ── */}
      <section className="apis-brief-section">
        <div className="apis-container">
          <div className="apis-center-block">
            <h2 className="apis-section-heading">
              <span className="serif-dark">THE</span>{' '}
              <span className="serif-red">BRIEF</span>
              <span className="apis-heading-underline red"></span>
            </h2>
            <div className="apis-body-text">
              <p>
                The first phase of the <a href="/influencer-marketing-services" className="seo-interlink">influencer marketing</a> campaign brought together a diverse set of creators and publisher-led channels to build campaign visibility across digital audiences.
              </p>
              <p>
                The execution included food creators, fitness influencers, mommy bloggers, individual content creators and media amplification through Times handles, Bombay Times and Bangalore Times.
              </p>
            </div>
          </div>

          <div className="apis-recipe-visual-frame">
            <img
              src={`${base}images/case_study/apis_influencer/apis_brief_recipe_clean.png`}
              alt="Culinary Creator preparing pancakes with Apis Himalaya Honey on mobile tripod setup"
              className="apis-recipe-img"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── 6. THE APPROACH (FIGMA SLICE 2 & 3) ── */}
      <section className="apis-approach-section">
        <div className="apis-container">
          <div className="apis-center-block">
            <h2 className="apis-section-heading">
              <span className="serif-dark">THE</span>{' '}
              <span className="serif-red">APPROACH</span>
              <span className="apis-heading-underline red"></span>
            </h2>
            <div className="apis-body-text">
              <p>
                Rather than relying on a single type of creator, the campaign featured multiple creator communities and content profiles.
              </p>
              <p>
                The programme included recognisable personalities, specialist creators and micro- and macro-influencer groups, creating a broad base of content and potential audience touchpoints across <a href="/best-digital-marketing-services-india" className="seo-interlink">digital marketing</a> channels.
              </p>
            </div>
          </div>

          {/* 3 Pink Cards */}
          <div className="apis-approach-cards-grid">
            <div className="apis-approach-card">
              <h3 className="apis-approach-card-title">Diverse Creator Profiles</h3>
              <p className="apis-approach-card-desc">
                Bring specialists and individual personalities into the programme.
              </p>
            </div>
            <div className="apis-approach-card">
              <h3 className="apis-approach-card-title">Community-led Content</h3>
              <p className="apis-approach-card-desc">
                Participate across food, wellness and family-focused creator spaces.
              </p>
            </div>
            <div className="apis-approach-card">
              <h3 className="apis-approach-card-title">Publisher &amp; Social Channels</h3>
              <p className="apis-approach-card-desc">
                Support creator activity through documented media amplification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. CREATOR PARTNERSHIPS (FIGMA SLICE 3 & 4) ── */}
      <section className="apis-partnerships-section">
        <div className="apis-container">
          <div className="apis-partnerships-header">
            <h2 className="apis-section-heading align-left">
              <span className="serif-red">CREATOR</span>{' '}
              <span className="serif-dark">PARTNERSHIPS</span>
              <span className="apis-heading-underline red align-left"></span>
            </h2>
          </div>

          <div className="apis-partnerships-grid">
            {/* Left Phone Screen */}
            <div className="apis-phone-mockup-col">
              <img
                src={`${base}images/case_study/apis_influencer/apis_creator_phone_clean.png`}
                alt="Creator Story Video for Apis Honey — #WhenIThinkHealthy"
                className="apis-phone-img"
                loading="lazy"
              />
            </div>

            {/* Right Creator Details & 3 Thumbs */}
            <div className="apis-creators-content-col">
              <h3 className="apis-creators-subtitle">
                FOOD AND LIFESTYLE CREATORS
                <span className="apis-sub-underline"></span>
              </h3>
              <p className="apis-creators-desc">
                The campaign featured creators including Ranveer Brar and Amma Chethi Vanta, alongside food bloggers and other individual influencers. This group formed a key part of the creator-led content mix.
              </p>

              {/* 3 Creator Thumbnail Cards */}
              <div className="apis-creators-thumbs-row">
                <div className="apis-creator-thumb-card">
                  <img
                    src={`${base}images/case_study/apis_influencer/apis_creator_zakir.png`}
                    alt="Zakir Khan for Apis Honey Campaign"
                    className="apis-thumb-img"
                    loading="lazy"
                  />
                </div>
                <div className="apis-creator-thumb-card">
                  <img
                    src={`${base}images/case_study/apis_influencer/apis_creator_ranveer.png`}
                    alt="Chef & Fitness Creator for Apis Honey"
                    className="apis-thumb-img"
                    loading="lazy"
                  />
                </div>
                <div className="apis-creator-thumb-card">
                  <img
                    src={`${base}images/case_study/apis_influencer/apis_creator_lifestyle.png`}
                    alt="Food & Lifestyle Creator for Apis Honey"
                    className="apis-thumb-img"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. BEYOND INDIVIDUAL CREATORS (FIGMA SLICE 4) ── */}
      <section className="apis-beyond-section">
        <div className="apis-container">
          <div className="apis-beyond-card">
            <div className="apis-beyond-text-col">
              <h2 className="apis-section-heading align-left">
                <span className="serif-red">BEYOND</span><br />
                <span className="serif-red">INDIVIDUAL</span><br />
                <span className="serif-red">CREATORS</span>
                <span className="apis-heading-underline red align-left"></span>
              </h2>
              <div className="apis-body-text">
                <p>
                  The first phase also documented media and social amplification through Times handles, including Bombay Times and Bangalore Times, as well as a Twitter trend section.
                </p>
                <p>
                  This added a publisher and social amplification component to the creator programme, extending the documented execution beyond individual influencer content through targeted <a href="/best-pr-agency-india" className="seo-interlink">PR and reputation management</a>.
                </p>
              </div>
            </div>
            <div className="apis-beyond-visual-col">
              <img
                src={`${base}images/case_study/apis_influencer/apis_pr_times_clean.png`}
                alt="Bombay Times & Bangalore Times Media Coverage with Apis Honey and Twitter Trend Section"
                className="apis-pr-times-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. THE RESULTS (FIGMA SLICE 5) ── */}
      <section className="apis-results-section">
        <div className="apis-container">
          <div className="apis-results-grid">
            {/* Left 2.0M+ Stat Card */}
            <div className="apis-results-card-col">
              <img
                src={`${base}images/case_study/apis_influencer/apis_results_card.png`}
                alt="Apis Honey Campaign Reach: 2.0M+"
                className="apis-stat-card-img"
                loading="lazy"
              />
            </div>

            {/* Right Results Narrative */}
            <div className="apis-results-content-col">
              <h2 className="apis-section-heading align-left">
                <span className="serif-red">THE</span>{' '}
                <span className="serif-dark">RESULTS</span>
                <span className="apis-heading-underline red align-left"></span>
              </h2>
              <div className="apis-body-text">
                <p>
                  The campaign summary reports <strong>2.0M+ reach</strong>. It also displays a separate “1 Mn+” figure, but the corresponding metric label is not sufficiently clear in the supplied presentation to assign it a meaning confidently.
                </p>
                <p>
                  The report documents participation across multiple creator categories and media channels. Additional performance figures should be added only after the underlying campaign reporting is verified.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. THE TAKEAWAY (FIGMA SLICE 5) ── */}
      <section className="apis-takeaway-section">
        <div className="apis-container">
          <div className="apis-center-block">
            <h2 className="apis-section-heading">
              <span className="serif-dark">THE</span>{' '}
              <span className="serif-red">TAKEAWAY</span>
              <span className="apis-heading-underline red"></span>
            </h2>
            <p className="apis-body-text">
              The first phase demonstrates a multi-category <a href="/influencer-marketing-services" className="seo-interlink">influencer marketing</a> activation, bringing together specialist creators, individual personalities and media amplification. The approach created a varied content ecosystem across food, fitness, lifestyle and mommy-blogger communities, supported by broader digital and publisher-led visibility.
            </p>
          </div>
        </div>
      </section>

      {/* ── 11. VISUAL COLLAGE / GALLERY (FIGMA SLICE 5 & 6 — 5 IMAGES MOSAIC) ── */}
      <section className="apis-gallery-section">
        <div className="apis-container">
          <div className="apis-gallery-mosaic">
            {/* Left 2x2 Grid */}
            <div className="apis-gallery-left-grid">
              <div className="apis-gallery-tile">
                <img
                  src={`${base}images/case_study/apis_influencer/apis_gallery_tea_clean.png`}
                  alt="Apis Honey paired with warm green tea"
                  className="apis-tile-img"
                  loading="lazy"
                />
              </div>
              <div className="apis-gallery-tile">
                <img
                  src={`${base}images/case_study/apis_influencer/apis_gallery_family_clean.png`}
                  alt="Mother and daughter sharing honey pancakes in kitchen shoot"
                  className="apis-tile-img"
                  loading="lazy"
                />
              </div>
              <div className="apis-gallery-tile">
                <img
                  src={`${base}images/case_study/apis_influencer/apis_gallery_phone_clean.png`}
                  alt="Influencer demonstrating Apis Honey bottle to smartphone camera"
                  className="apis-tile-img"
                  loading="lazy"
                />
              </div>
              <div className="apis-gallery-tile">
                <img
                  src={`${base}images/case_study/apis_influencer/apis_gallery_fitness_clean.png`}
                  alt="Fitness creator topping breakfast oatmeal with Apis Honey"
                  className="apis-tile-img"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Tall Honey Drip Feature Tile */}
            <div className="apis-gallery-tall-tile">
              <img
                src={`${base}images/case_study/apis_influencer/apis_gallery_drip_clean.png`}
                alt="Golden honey dripping macro close-up over honeycomb"
                className="apis-tall-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 12. OTHER SERVICES SLIDER (ALL 7 CASE STUDIES) ── */}
      <OtherCaseStudiesSlider currentId="apis-influencer" />

    </article>
  );
}

