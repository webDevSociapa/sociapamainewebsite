import React from 'react';
import { Link } from 'react-router-dom';
import OtherCaseStudiesSlider from './OtherCaseStudiesSlider';
import './MintChoconFigmaDetail.css';

export default function MintChoconFigmaDetail({ csItem, onDownloadClick }) {
  const base = import.meta.env.BASE_URL || '/';

  return (
    <article className="mint-figma-case-study">

      {/* ── 1. CATEGORY PILLS BAR (FIGMA TOP NAV) ── */}
      <nav className="mint-category-pills-bar" aria-label="Case Study Categories">
        <div className="mint-container">
          <div className="mint-pills-wrapper">
            <Link to="/case-studies/packaging" className="mint-cat-pill">
              PACKAGING
            </Link>
            <Link to="/case-studies/influencer-campaign" className="mint-cat-pill">
              INFLUENCER CAMPAIGN
            </Link>
            <span className="mint-cat-pill active">
              PRODUCT LAUNCH
            </span>
            <Link to="/case-studies/digital" className="mint-cat-pill">
              DIGITAL
            </Link>
            <Link to="/case-studies/performance" className="mint-cat-pill">
              PERFORMANCE
            </Link>
            <Link to="/case-studies/tupperware" className="mint-cat-pill">
              TUPPERWARE
            </Link>
            <Link to="/case-studies/ai-video" className="mint-cat-pill">
              AI VIDEO
            </Link>
          </div>
        </div>
      </nav>

      {/* ── 2. HERO IMAGE BANNER (JANHVI KAPOOR 'MINT NAHI HINT HAI') ── */}
      <section className="mint-hero-banner-container">
        <div className="mint-container">
          <div className="mint-hero-banner-frame mint-motion-reveal">
            <img
              src={`${base}images/case_study/mint_choco_product_launch/mask_group_packaging.png`}
              alt="Mint ChocOn — Mint Nahi Hint Hai — Starring Bollywood Star Janhvi Kapoor"
              className="mint-hero-banner-img"
              width="2400"
              height="1108"
              fetchpriority="high"
            />
            {/* Semantic single H1 tag for strict heading hierarchy & SEO */}
            <h1 className="mint-sr-only">
              Mint ChocOn — National Celebrity Launch Starring Bollywood Star Janhvi Kapoor (#MintNahiHintHai)
            </h1>
          </div>
        </div>
      </section>

      {/* ── 3. TAG PILLS ROW (FIGMA SLICE 1) ── */}
      <section className="mint-tags-section">
        <div className="mint-container">
          <div className="mint-tags-pills-row">
            <span className="mint-tag-pill">Product Launch</span>
            <Link to="/brand-strategy" className="mint-tag-pill seo-interlink">
              Campaign Strategy
            </Link>
            <Link to="/influencer-marketing-services" className="mint-tag-pill seo-interlink">
              Celebrity Marketing
            </Link>
            <Link to="/influencer-marketing-services" className="mint-tag-pill seo-interlink">
              Influencer Marketing
            </Link>
            <Link to="/best-packaging-design-agency-india" className="mint-tag-pill seo-interlink">
              Packaging Revamp
            </Link>
            <Link to="/best-digital-marketing-services-india" className="mint-tag-pill seo-interlink">
              Digital Media
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. PROJECT OVERVIEW SECTION (FIGMA SLICE 1) ── */}
      <section className="mint-overview-section">
        <div className="mint-container">
          <div className="mint-overview-grid mint-motion-reveal">
            <div className="mint-overview-left">
              <h2 className="mint-overview-title">
                <span className="mint-red-underlined">
                  PROJECT
                  <span className="mint-red-bar" aria-hidden="true"></span>
                </span>{' '}
                <span className="serif-dark">OVERVIEW</span>
              </h2>
            </div>
            <div className="mint-overview-right">
              <div className="mint-meta-pair">
                <span className="mint-meta-key">Client:</span>
                <span className="mint-meta-val">Mint ChocOn</span>
              </div>
              <div className="mint-meta-pair">
                <span className="mint-meta-key">Campaign:</span>
                <span className="mint-meta-val">Product Launch Campaign</span>
              </div>
              <div className="mint-meta-pair">
                <span className="mint-meta-key">Core idea:</span>
                <span className="mint-meta-val">Mint Nahi Hint Hai</span>
              </div>
              <div className="mint-meta-pair">
                <span className="mint-meta-key">Channels:</span>
                <span className="mint-meta-val">
                  TV Commercial, <Link to="/best-packaging-design-agency-india" className="seo-interlink">Packaging</Link>, Jingle, <Link to="/influencer-marketing-services" className="seo-interlink">Influencers</Link> and <Link to="/best-digital-marketing-services-india" className="seo-interlink">Digital Media</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. THE BRIEF (FIGMA SLICE 1) ── */}
      <section className="mint-brief-section">
        <div className="mint-container">
          <div className="mint-center-block mint-motion-reveal">
            <h2 className="mint-section-heading">
              <span className="serif-dark">THE</span>{' '}
              <span className="mint-red-underlined">
                BRIEF
                <span className="mint-red-bar" aria-hidden="true"></span>
              </span>
            </h2>
            <div className="mint-body-text">
              <p>
                Mint ChocOn brought together two familiar flavours, minty freshness and chocolatey sweetness in a single candy. The opportunity was to build a distinctive campaign around this combination and create a recognisable communication platform for the brand.
              </p>
              <p>
                For its launch campaign, the focus was on bringing the product proposition to life through a combination of celebrity association, advertising, <Link to="/best-packaging-design-agency-india" className="seo-interlink">packaging design</Link> and <Link to="/best-digital-marketing-services-india" className="seo-interlink">digital engagement</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. THE BIG IDEA (FIGMA SLICE 2) ── */}
      <section className="mint-big-idea-section">
        <div className="mint-container">
          <div className="mint-big-idea-grid mint-motion-reveal">
            <div className="mint-big-idea-text">
              <h2 className="mint-section-heading align-left">
                <span className="serif-dark">THE</span> <span className="serif-red">BIG IDEA</span>
                <span className="mint-heading-underline red align-left"></span>
              </h2>
              <div className="mint-body-text">
                <p>
                  A simple, memorable line became the central communication for the campaign. It gave Mint ChocOn a recognisable creative hook that could be carried across advertising, a branded jingle and <Link to="/influencer-marketing-services" className="seo-interlink">influencer-led content</Link>.
                </p>
                <p>
                  Rather than communicating only the combination of mint and chocolate, the campaign gave the product a consistent verbal identity that could travel across multiple formats.
                </p>
              </div>
            </div>
            <div className="mint-big-idea-visual">
              <img
                src={`${base}images/case_study/mint_choco_product_launch/graphite_sketch_concept.png`}
                alt="Mint ChocOn Product Revamp New Look — Graphite Concept Sketch"
                className="mint-sketch-img"
                loading="lazy"
                width="1200"
                height="1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. BRINGING THE CAMPAIGN TO LIFE (FIGMA SLICE 2) ── */}
      <section className="mint-bringing-life-section">
        <div className="mint-container">
          <div className="mint-center-block mint-motion-reveal">
            <h2 className="mint-section-heading">
              <span className="serif-dark">BRINGING THE</span>{' '}
              <span className="serif-red">CAMPAIGN TO LIFE</span>
              <span className="mint-heading-underline red"></span>
            </h2>
            <div className="mint-body-text">
              <p>
                Mint ChocOn brought together two familiar flavours, minty freshness and chocolatey sweetness in a single candy. The opportunity was to build a distinctive campaign around this combination and create a recognisable communication platform for the brand.
              </p>
              <p>
                For its launch campaign, the focus was on bringing the product proposition to life through a combination of celebrity association, advertising, packaging and <Link to="/best-digital-marketing-services-india" className="seo-interlink">digital marketing</Link> engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. CELEBRITY-LED COMMUNICATION (FIGMA SLICE 3) ── */}
      <section className="mint-celebrity-section">
        <div className="mint-container">
          <div className="mint-celebrity-grid mint-motion-reveal">
            <div className="mint-celebrity-visual">
              <img
                src={`${base}images/case_study/mint_choco_product_launch/mask_group_janhvi.png`}
                alt="Janhvi Kapoor for Mint ChocOn National Product Launch"
                className="mint-janhvi-photo"
                loading="lazy"
                width="1180"
                height="940"
              />
            </div>
            <div className="mint-celebrity-content">
              <h2 className="mint-section-heading align-left">
                <span className="serif-red">CELEBRITY-LED</span><br />
                <span className="serif-red">COMMUNICATION</span>
                <span className="mint-heading-underline black align-left"></span>
              </h2>
              <div className="mint-body-text">
                <p>
                  <strong style={{ color: '#C8282A' }}>Janhvi Kapoor</strong> was introduced as the brand face. The campaign extended her association with Mint ChocOn through a television commercial and a dedicated photoshoot, bringing the central communication to life across brand assets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. PACKAGING REVAMP (FIGMA SLICE 3 & 4) ── */}
      <section className="mint-packaging-revamp-section">
        <div className="mint-container">
          <div className="mint-center-block mint-motion-reveal">
            <h2 className="mint-section-heading">
              <span className="serif-red">PACKAGING REVAMP</span>
              <span className="mint-heading-underline red"></span>
            </h2>
            <p className="mint-section-sub">
              The product packaging was revamped as part of the wider launch programme, aligning the product presentation with the refreshed campaign communication.
            </p>
          </div>

          <div className="mint-staircase-wrapper mint-motion-reveal">
            <img
              src={`${base}images/case_study/mint_choco_product_launch/six_pack_staircase_clean.png`}
              alt="Mint ChocOn Packaging Evolution — 6 Pouch Retail Merchandising Lineup"
              className="mint-staircase-img"
              loading="lazy"
              width="2460"
              height="690"
            />
          </div>
        </div>
      </section>

      {/* ── 10. A MEMORABLE AUDIO IDENTITY (FIGMA SLICE 4) ── */}
      <section className="mint-audio-section">
        <div className="mint-container">
          <div className="mint-center-block mint-motion-reveal">
            <h2 className="mint-section-heading">
              <span className="serif-dark">A MEMORABLE</span>{' '}
              <span className="serif-red">AUDIO IDENTITY</span>
              <span className="mint-heading-underline red"></span>
            </h2>
          </div>
          <div className="mint-audio-content-grid mint-motion-reveal">
            <p className="mint-audio-text">
              A jingle was created around &ldquo;Mint Nahi Hint Hai&rdquo;, extending the campaign idea into audio and digital content.
            </p>
            <div className="mint-lettering-visual">
              <img
                src={`${base}images/case_study/mint_choco_product_launch/mint_nahi_hint_hai_lettering_clean.png`}
                alt="Mint Nahi Hint Hai Script Lettering"
                className="mint-lettering-img"
                loading="lazy"
                width="1040"
                height="230"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. INFLUENCER-LED ENGAGEMENT (FIGMA SLICE 4) ── */}
      <section className="mint-influencer-section">
        <div className="mint-container">
          <div className="mint-center-block mint-motion-reveal">
            <h2 className="mint-section-heading">
              <span className="serif-dark">INFLUENCER-LED</span>{' '}
              <span className="serif-red">ENGAGEMENT</span>
              <span className="mint-heading-underline red"></span>
            </h2>
            <p className="mint-body-text">
              Celebrity, macro and micro influencers participated in campaign content, including a &ldquo;Mint Nahi Hint Hai&rdquo; quiz featuring pairs of friends and couples. The format gave creators a participative way to bring the campaign line into social content.
            </p>
          </div>
        </div>
      </section>

      {/* ── 12. DIGITAL MEDIA AND AMPLIFICATION (FIGMA SLICE 5) ── */}
      <section className="mint-digital-media-section">
        <div className="mint-container">
          <div className="mint-center-block mint-motion-reveal">
            <h2 className="mint-section-heading">
              <span className="serif-dark">DIGITAL MEDIA AND</span>{' '}
              <span className="serif-red">AMPLIFICATION</span>
              <span className="mint-heading-underline red"></span>
            </h2>
            <p className="mint-body-text">
              The campaign extended beyond owned creative assets through digital advertising and media placements, including activity on MX Player and Gaana, alongside editorial coverage and social amplification.
            </p>
          </div>
        </div>
      </section>

      {/* ── 13. THE RESULTS (FIGMA SLICE 5 & 6 — 6 BIG STAT CARDS) ── */}
      <section className="mint-results-section">
        <div className="mint-container">
          <div className="mint-center-block mint-motion-reveal">
            <h2 className="mint-section-heading">
              <span className="serif-red">THE</span>{' '}
              <span className="serif-dark">RESULTS</span>
              <span className="mint-heading-underline red"></span>
            </h2>
            <p className="mint-results-sub">
              The campaign&apos;s reported media and engagement figures included:
            </p>
          </div>

          <div className="mint-results-grid mint-motion-reveal">
            <div className="mint-result-card">
              <span className="mint-card-number">207,667</span>
              <p className="mint-card-label">
                <strong>article page views</strong> for the IndiaTimes story featuring Janhvi Kapoor and Mint ChocOn.
              </p>
            </div>
            <div className="mint-result-card">
              <span className="mint-card-number">216,181</span>
              <p className="mint-card-label">
                <strong>Facebook engagements</strong> reported for the associated IndiaTimes content.
              </p>
            </div>
            <div className="mint-result-card">
              <span className="mint-card-number">1,120,661</span>
              <p className="mint-card-label">
                <strong>homepage impressions</strong> reported in the media coverage table.
              </p>
            </div>
            <div className="mint-result-card">
              <span className="mint-card-number">92.85%</span>
              <p className="mint-card-label">
                <strong>completion rate</strong> for the MX Player &amp; Gaana &ldquo;Shows&rdquo; placement.
              </p>
            </div>
            <div className="mint-result-card">
              <span className="mint-card-number">85.09%</span>
              <p className="mint-card-label">
                <strong>completion rate</strong> for the MX Player &amp; Gaana ROS placement.
              </p>
            </div>
            <div className="mint-result-card">
              <span className="mint-card-number">27,62,080</span>
              <p className="mint-card-label">
                <strong>banner impressions</strong> and 11,072 clicks reported in the audio/banner media statistics.
              </p>
            </div>
          </div>

          <div className="mint-disclaimer-box mint-motion-reveal">
            <p>
              These figures illustrate the campaign&apos;s presence across celebrity-led content, digital media and influencer participation. They represent individual reported placements and should not be interpreted as deduplicated campaign-wide reach.
            </p>
          </div>
        </div>
      </section>

      {/* ── 14. THE TAKEAWAY (FIGMA SLICE 6) ── */}
      <section className="mint-takeaway-section">
        <div className="mint-container">
          <div className="mint-center-block mint-motion-reveal">
            <h2 className="mint-section-heading">
              <span className="serif-red">THE</span>{' '}
              <span className="serif-dark">TAKEAWAY</span>
              <span className="mint-heading-underline red"></span>
            </h2>
            <p className="mint-body-text">
              Mint ChocOn&apos;s launch programme connected one central campaign idea with celebrity communication, packaging, audio, influencer content and digital media. The work demonstrates how a consistent message can be extended across multiple consumer touchpoints to give a product launch a unified creative identity.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="mint-action-buttons-row mint-motion-reveal">
            <button
              type="button"
              className="mint-btn-primary"
              onClick={() => onDownloadClick && onDownloadClick(csItem?.downloads?.[0] || {
                title: 'Mint ChocOn - Product Launch Case Study',
                file: 'pdf/Mint-ChocOn-Product-Launch.pdf',
                type: 'pdf',
                size: '3.7 MB'
              })}
            >
              <span>Download Mint ChocOn Report</span>
              <span className="mint-btn-icon">↓</span>
            </button>
            <Link to="/best-packaging-design-agency-india" className="mint-btn-secondary seo-interlink">
              Explore Packaging &amp; Launch Solutions →
            </Link>
            <Link to="/contact-us" className="mint-btn-outline seo-interlink">
              Talk to Our Brand Strategists
            </Link>
          </div>
        </div>
      </section>

      {/* ── 15. OTHER SERVICES SLIDER (ALL 7 CASE STUDIES) ── */}
      <OtherCaseStudiesSlider currentId="mint-chocon" />

    </article>
  );
}
