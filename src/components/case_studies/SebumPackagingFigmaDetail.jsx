import React from 'react';
import { Link } from 'react-router-dom';
import OtherCaseStudiesSlider from './OtherCaseStudiesSlider';
import './SebumPackagingFigmaDetail.css';

export default function SebumPackagingFigmaDetail({ csItem, onDownloadClick }) {
  const base = import.meta.env.BASE_URL || '/';

  return (
    <article className="sebum-figma-case-study">

      {/* ── 1. CATEGORY PILLS BAR (FIGMA TOP NAV) ── */}
      <nav className="sebum-category-pills-bar" aria-label="Case Study Categories">
        <div className="sebum-container">
          <div className="sebum-pills-wrapper">
            <span className="sebum-cat-pill active">
              PACKAGING
            </span>
            <Link to="/case-studies/influencer-campaign" className="sebum-cat-pill">
              INFLUENCER CAMPAIGN
            </Link>
            <Link to="/case-studies/product-launch" className="sebum-cat-pill">
              PRODUCT LAUNCH
            </Link>
            <Link to="/case-studies/digital" className="sebum-cat-pill">
              DIGITAL
            </Link>
            <Link to="/case-studies/performance" className="sebum-cat-pill">
              PERFORMANCE
            </Link>
            <Link to="/case-studies/tupperware" className="sebum-cat-pill">
              TUPPERWARE
            </Link>
            <Link to="/case-studies/ai-video" className="sebum-cat-pill">
              AI VIDEO
            </Link>
          </div>
        </div>
      </nav>

      {/* ── 2. HERO IMAGE BANNER (SEBUM SIMPLY HONEST ORANGE HERO CARD) ── */}
      <section className="sebum-hero-banner-container">
        <div className="sebum-container">
          <div className="sebum-hero-banner-frame sebum-motion-reveal">
            <img
              src={`${base}images/case_study/sebum_packaging/group_56.png`}
              alt="Sebüm Simply Honest — Modern Clinical Skincare Packaging Design"
              className="sebum-hero-banner-img"
              width="1200"
              height="554"
              fetchpriority="high"
            />
            {/* Semantic single H1 tag for strict heading hierarchy & SEO */}
            <h1 className="sebum-sr-only">
              Sebüm — Modern Clinical Skincare Packaging Design, Dielines &amp; Brand Identity
            </h1>
          </div>
        </div>
      </section>

      {/* ── 3. PROJECT OVERVIEW SECTION ── */}
      <section className="sebum-overview-section">
        <div className="sebum-container">
          <div className="sebum-overview-grid sebum-motion-reveal">
            <div className="sebum-overview-left">
              <h2 className="sebum-overview-title">
                <span className="serif-red">PROJECT</span>{' '}
                <span className="serif-dark">OVERVIEW</span>
              </h2>
              <p className="sebum-overview-tagline">
                Turning an everyday product into a brand that stands out.
              </p>
            </div>
            <div className="sebum-overview-right">
              <div className="sebum-meta-pair">
                <span className="sebum-meta-key">Client:</span>
                <span className="sebum-meta-val">Sebüm</span>
              </div>
              <div className="sebum-meta-pair">
                <span className="sebum-meta-key">Category:</span>
                <span className="sebum-meta-val">Skincare / Beauty &amp; Personal Care</span>
              </div>
              <div className="sebum-meta-pair">
                <span className="sebum-meta-key">Services:</span>
                <span className="sebum-meta-val">
                  <Link to="/best-packaging-design-agency-india" className="seo-interlink">Packaging Design</Link>
                </span>
              </div>
              <div className="sebum-meta-pair">
                <span className="sebum-meta-key">Scope:</span>
                <span className="sebum-meta-val">Brand identity through digital product presentation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. ABOUT THE CLIENT SECTION ── */}
      <section className="sebum-about-section">
        <div className="sebum-container">
          <div className="sebum-about-grid sebum-motion-reveal">
            <div className="sebum-about-left">
              <h2 className="sebum-about-heading">
                About <span className="sebum-underline-word">the</span> Client
              </h2>
            </div>
            <div className="sebum-about-right">
              <p>
                Create a complete <Link to="/brand-identity-design" className="seo-interlink">brand identity</Link> for Sebüm, a skincare brand rooted in the philosophy of simplicity, transparency and purposeful skincare. The objective was to establish a distinctive, contemporary and premium brand language across its identity, <Link to="/best-packaging-design-agency-india" className="seo-interlink">product packaging design</Link> and digital touchpoints.
              </p>
              <p>
                The identity needed to communicate scientific credibility without feeling cold, and natural care without losing its sense of efficacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. THE CHALLENGE SECTION ── */}
      <section className="sebum-challenge-section">
        <div className="sebum-container">
          <div className="sebum-center-block sebum-motion-reveal">
            <h2 className="sebum-section-heading">
              <span className="serif-dark">THE</span>{' '}
              <span className="serif-red">CHALLENGE</span>
              <span className="sebum-heading-underline red"></span>
            </h2>
          </div>

          <div className="sebum-challenge-visual-wrap sebum-motion-reveal">
            <img
              src={`${base}images/case_study/sebum_packaging/sebum_packaging_sketches_in_orange_and_blue_1.png`}
              alt="Sebüm Packaging Ideation & Sketches — Box structure, pump bottle, color options, label die-line"
              className="sebum-blueprint-img"
              loading="lazy"
              width="1100"
              height="619"
            />
          </div>

          <div className="sebum-narrative-block sebum-motion-reveal">
            <p>
              In a crowded skincare market, building trust requires more than an attractive identity. Sebüm needed a cohesive brand expression that could communicate its biology-first philosophy, balance scientific credibility with everyday care, and stand apart through simplicity and transparency.
            </p>
            <p>
              The challenge was to translate the brand&apos;s focus on essential, purposeful skincare into a distinctive identity that could work consistently across product packaging and digital touchpoints.
            </p>
          </div>
        </div>
      </section>

      {/* ── 6. THE SOLUTION SECTION ── */}
      <section className="sebum-solution-section">
        <div className="sebum-container">
          <div className="sebum-solution-grid sebum-motion-reveal">
            <div className="sebum-solution-left">
              <h2 className="sebum-section-heading align-left">
                <span className="serif-dark">THE</span>{' '}
                <span className="serif-red">SOLUTION</span>
                <span className="sebum-heading-underline red align-left"></span>
              </h2>

              <div className="sebum-body-text">
                <p>
                  The skin already has its own natural defence mechanism. Sebum, the lipid-rich substance produced by the skin&apos;s sebaceous glands, helps maintain hydration and protect the skin barrier.
                </p>
                <p>
                  This biological function became the foundation of the brand&apos;s thinking. Rather than adding unnecessary complexity to skincare, Sebüm would draw its philosophy from the skin itself: essential ingredients, purposeful formulations and a commitment to transparency.
                </p>

                <h3 className="sebum-strategy-subheading">The Strategy</h3>
                <p>
                  We built the brand around a simple principle: skincare should be purposeful, not complicated.
                </p>
                <p>The strategy brought together three defining ideas:</p>
                <ul className="sebum-strategy-list">
                  <li>
                    <strong>Biology-led:</strong> Rooting the brand in the skin&apos;s natural protective mechanisms.
                  </li>
                  <li>
                    <strong>Science with warmth:</strong> Balancing clinical credibility with an approachable, human character.
                  </li>
                  <li>
                    <strong>Essential by design:</strong> Using simplicity and restraint to express clarity, transparency and confidence.
                  </li>
                </ul>
                <p>
                  This foundation guided the brand&apos;s identity, visual language and product presentation.
                </p>
              </div>
            </div>

            <div className="sebum-solution-right">
              <div className="sebum-solution-card">
                <img
                  src={`${base}images/case_study/sebum_packaging/group_108.png`}
                  alt="Sebüm Simply Honest Orange Carton Display"
                  className="sebum-solution-img"
                  loading="lazy"
                  width="590"
                  height="510"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. PRODUCT DISPLAY BANNER (BOTTLE & TUBE ON PEACH BG) ── */}
      <section className="sebum-display-banner-section">
        <div className="sebum-container">
          <div className="sebum-display-banner-card sebum-motion-reveal">
            <img
              src={`${base}images/case_study/sebum_packaging/group_109.png`}
              alt="Sebüm Ultra Hydrant Moisturising Cream & Pump Bottle Display"
              className="sebum-display-banner-img"
              loading="lazy"
              width="1195"
              height="333"
            />
          </div>
        </div>
      </section>

      {/* ── 8. COLOR PALETTE & TYPOGRAPHY SECTION ── */}
      <section className="sebum-palette-section">
        <div className="sebum-container">
          <div className="sebum-center-block sebum-motion-reveal">
            <h2 className="sebum-section-heading">
              <span className="serif-dark">COLOR</span>{' '}
              <span className="serif-red">PALETTE &amp; TYPOGRAPHY</span>
              <span className="sebum-heading-underline red"></span>
            </h2>
            <p className="sebum-palette-sub">
              A clean sans-serif typeface establishes a sense of professionalism, clarity, and trust. Smooth strokes and rounded terminals introduce warmth, balancing the scientific character of the brand with a more human skincare experience.
            </p>
          </div>

          {/* Typography Specimen */}
          <div className="sebum-typo-specimen sebum-motion-reveal" aria-hidden="true">
            <span className="sebum-typo-sans-black">Sans</span>
            <span className="sebum-typo-serif-orange">Serif</span>
            <span className="sebum-typo-sans-ghost">Sans</span>
          </div>

          {/* Color Swatch Cards Grid */}
          <div className="sebum-swatches-grid sebum-motion-reveal">
            <div className="sebum-swatch-card orange-primary">
              <span className="sebum-swatch-name">Orage</span>
              <span className="sebum-swatch-hex">Hex E5500B</span>
            </div>
            <div className="sebum-swatch-card orange-dark">
              <span className="sebum-swatch-name">Dark orange</span>
              <span className="sebum-swatch-hex">Hex BB3600</span>
            </div>
            <div className="sebum-swatch-card white-swatch">
              <span className="sebum-swatch-name">White</span>
              <span className="sebum-swatch-hex">Hex FFFFFF</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. LOGO WORDMARK & SIGNATURE DETAIL SECTION ── */}
      <section className="sebum-signature-section">
        <div className="sebum-container">
          <div className="sebum-wordmark-banner sebum-motion-reveal">
            <div className="sebum-wordmark-inner">
              <span className="sebum-wordmark-title">
                sebum<sup className="sebum-wordmark-reg">&reg;</sup>
              </span>
              <span className="sebum-wordmark-sub">Simply Honest</span>
            </div>
            <div className="sebum-wordmark-bottom-strip"></div>
          </div>

          <div className="sebum-signature-detail-block sebum-motion-reveal">
            <h3 className="sebum-detail-title">Signature detail</h3>
            <p className="sebum-detail-desc">
              The umlaut in the brand name acts as a distinctive visual cue, giving the wordmark a memorable character and reinforcing its refined, contemporary identity.
            </p>
          </div>
        </div>
      </section>

      {/* ── 10. THE IDENTITY SECTION ── */}
      <section className="sebum-narrative-section">
        <div className="sebum-container">
          <div className="sebum-narrative-wrapper sebum-motion-reveal">
            <h2 className="sebum-section-heading align-left">
              <span className="serif-dark">THE</span>{' '}
              <span className="serif-red">IDENTITY</span>
              <span className="sebum-heading-underline red align-left"></span>
            </h2>
            <div className="sebum-body-text">
              <p>
                We developed a contemporary <Link to="/brand-identity-design" className="seo-interlink">visual identity</Link> designed to feel precise, confident and distinctive.
              </p>
              <p>
                The sans-serif typography communicates professionalism and trust, while smooth strokes and rounded terminals introduce warmth. The umlaut in Sebüm serves as a signature brand element, giving the name a distinctive visual character and a subtle association with boutique European craftsmanship.
              </p>
              <p>
                Every element was intended to support a consistent brand language: minimal, considered and recognisable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. THE PACKAGING SECTION ── */}
      <section className="sebum-narrative-section">
        <div className="sebum-container">
          <div className="sebum-narrative-wrapper sebum-motion-reveal">
            <h2 className="sebum-section-heading align-left">
              <span className="serif-dark">THE</span>{' '}
              <span className="serif-red">PACKAGING</span>
              <span className="sebum-heading-underline red align-left"></span>
            </h2>
            <div className="sebum-body-text">
              <p>
                The identity was extended across Sebüm&apos;s skincare portfolio, including oil serum, face serum, moisturizing cream and sunscreen.
              </p>
              <p>
                The <Link to="/best-packaging-design-agency-india" className="seo-interlink">packaging design system</Link> translated the brand&apos;s core philosophy into product-level design, creating a consistent visual language across different formulations.
              </p>
              <p>
                The objective was to maintain a cohesive brand presence while allowing individual products to remain identifiable within the range.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 12. THE DIGITAL SHELF SECTION ── */}
      <section className="sebum-narrative-section">
        <div className="sebum-container">
          <div className="sebum-narrative-wrapper sebum-motion-reveal">
            <h2 className="sebum-section-heading align-left">
              <span className="serif-dark">THE</span>{' '}
              <span className="serif-red">DIGITAL SHELF</span>
              <span className="sebum-heading-underline red align-left"></span>
            </h2>
            <div className="sebum-body-text">
              <p>
                Beyond physical packaging, we developed <Link to="/best-digital-marketing-services-india" className="seo-interlink">digital marketing</Link> e-commerce listing creatives for key products, including anti-acne skincare, face serum, moisturizing cream and sunscreen.
              </p>
              <p>
                The listing assets extended the brand identity into its digital shopping environment, maintaining consistency across A+ and B+ creative formats. This connected the product presentation to the wider brand system rather than treating online listings as standalone assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 13. THE FINAL OUTCOME SECTION ── */}
      <section className="sebum-outcome-section">
        <div className="sebum-container">
          <div className="sebum-center-block sebum-motion-reveal">
            <h2 className="sebum-section-heading">
              <span className="serif-dark">THE FINAL</span>{' '}
              <span className="serif-red">OUTCOME</span>
              <span className="sebum-heading-underline red"></span>
            </h2>

            <div className="sebum-outcome-text">
              <p>
                Sebüm&apos;s brand system brings its biological inspiration, minimal philosophy and premium design direction together across identity, packaging and digital product communication.
              </p>
              <p>
                From the logo to the product range and e-commerce listings, the work establishes a cohesive creative foundation for presenting the brand across multiple consumer touchpoints.
              </p>
              <p className="sebum-outcome-highlight">
                The result: a unified brand expression built around purposeful skincare, clarity and consistency.
              </p>
            </div>
          </div>

          {/* Centerpiece Hero Product Visual */}
          <div className="sebum-outcome-visual-wrap sebum-motion-reveal">
            <img
              src={`${base}images/case_study/sebum_packaging/product_1_clean.png`}
              alt="Sebüm Ultra Hydrant Moisturising Cream, pump bottle and orange slice"
              className="sebum-outcome-product-img"
              loading="lazy"
              width="916"
              height="916"
            />
          </div>

          {/* 3 Product SKU Cards Grid */}
          <div className="sebum-skus-grid sebum-motion-reveal">
            <div className="sebum-sku-card">
              <img
                src={`${base}images/case_study/sebum_packaging/mask_group.png`}
                alt="Sebüm Skin Brightening Sunscreen SPF 50 PA++++ with Kakadu Plum"
                className="sebum-sku-img"
                loading="lazy"
                width="387"
                height="418"
              />
            </div>

            <div className="sebum-sku-card">
              <img
                src={`${base}images/case_study/sebum_packaging/mask_group_1.png`}
                alt="Sebüm Vitamin C & Alpha Arbutin Face Serum"
                className="sebum-sku-img"
                loading="lazy"
                width="387"
                height="418"
              />
            </div>

            <div className="sebum-sku-card">
              <img
                src={`${base}images/case_study/sebum_packaging/mask_group_2.png`}
                alt="Sebüm Oil Control & Acne Protect Serum with Niacinamide"
                className="sebum-sku-img"
                loading="lazy"
                width="387"
                height="418"
              />
            </div>
          </div>

          {/* Action CTAs */}
          <div className="sebum-action-buttons-row sebum-motion-reveal">
            <button
              type="button"
              className="sebum-btn-primary"
              onClick={() => onDownloadClick && onDownloadClick(csItem?.downloads?.[0] || {
                title: 'Sebum Skincare Packaging Portfolio',
                file: 'assets/case_studies/Gyan%20x%20Sociapa.ppsx',
                type: 'ppsx',
                size: '34 MB'
              })}
            >
              <span>Download Sebüm Portfolio</span>
              <span className="sebum-btn-icon">↓</span>
            </button>
            <Link to="/best-packaging-design-agency-india" className="sebum-btn-secondary seo-interlink">
              Explore Packaging Design Solutions →
            </Link>
            <Link to="/contact-us" className="sebum-btn-outline seo-interlink">
              Discuss Your Brand Strategy
            </Link>
          </div>
        </div>
      </section>

      {/* ── 14. OTHER SERVICES SLIDER (ALL 7 CASE STUDIES) ── */}
      <OtherCaseStudiesSlider currentId="sebum-skincare" />

    </article>
  );
}
