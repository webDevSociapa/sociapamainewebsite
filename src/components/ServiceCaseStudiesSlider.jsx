import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './ServiceCaseStudiesSlider.css';

// ── 7 CORE CASE STUDIES DATA (EXACT MATCHING USER SCREENSHOT & PRODUCTION ASSETS) ──
const caseStudiesList = [
  {
    id: 'mint-chocon',
    slug: 'product-launch',
    categoryLabel: 'PRODUCT LAUNCH',
    title: 'Mint ChocOn – National Celebrity Launch',
    tagline: '15M+ reach & viral digital activation starring Janhvi Kapoor (#MintNahiHintHai).',
    image: 'images/case_study/other_services/other_service_product_launch.jpg',
    alt: 'Product Launch — Mint ChocOn Starring Janhvi Kapoor',
  },
  {
    id: 'sebum-skincare',
    slug: 'packaging',
    categoryLabel: 'PACKAGING',
    title: 'Sebum – Modern Clinical Skincare Packaging',
    tagline: 'Minimalist clinical skincare packaging, dieline architecture & brand identity system.',
    image: 'images/case_study/other_services/other_service_packaging.jpg',
    alt: 'Packaging Design — Sebüm Simply Honest',
  },
  {
    id: 'apis-influencer',
    slug: 'influencer-campaign',
    categoryLabel: 'INFLUENCER CAMPAIGN',
    title: 'Apis – Influencer Phase 1 & Festive Case Study',
    tagline: '2.0M+ reach featuring Chef Ranveer Brar, Zakir Khan & top food creators.',
    image: 'images/case_study/other_services/other_service_influencer.jpg',
    alt: 'Influencer Marketing — Apis Himalaya Honey',
  },
  {
    id: 'tupperware-influencer',
    slug: 'tupperware',
    categoryLabel: 'INFLUENCER CAMPAIGN',
    title: 'Tupperware – The Great Tupperware Festival',
    tagline: '975K+ views across 10 creator UGC videos turning festive shopping into relatable household storytelling.',
    image: 'images/case_study/other_services/other_service_tupperware.jpg',
    alt: 'Influencer Campaign — The Great Tupperware Festival',
  },
  {
    id: 'french-essence',
    slug: 'digital',
    categoryLabel: 'DIGITAL',
    title: 'French Essence – Luxury Fragrance Digital Evolution',
    tagline: 'High-fashion tabletop photography, luxury fragrance repositioning & 180% surge in direct e-commerce orders.',
    image: 'images/case_study/other_services/other_service_digital.jpg',
    alt: 'Digital Marketing — French Essence Luxury Fragrance Digital Evolution',
  },
  {
    id: 'bikano-performance',
    slug: 'performance',
    categoryLabel: 'PERFORMANCE',
    title: 'Bikano – Scaled Performance & Festive Off-Take',
    tagline: 'Hyper-targeted festive video distribution, quick-commerce namkeen combos & 4.6x verified return on ad spend.',
    image: 'images/case_study/other_services/other_service_performance.jpg',
    alt: 'Performance Marketing — Bikano Scaled Performance & Festive Off-Take',
  },
  {
    id: 'bonn-ai-video',
    slug: 'ai-video',
    categoryLabel: 'AI VIDEO',
    title: 'Bonn – Giving Product & USPs a Gen Z Beat',
    tagline: '682.9K views, distinctive product mascots & jingle-led AI video storytelling.',
    image: 'images/case_study/other_services/other_service_ai_video.jpg',
    alt: 'AI Video Production — Bonn Gen Z Beat',
  },
];

export default function ServiceCaseStudiesSlider() {
  const base = import.meta.env.BASE_URL || '/';
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const cardEl = el.firstElementChild;
    if (cardEl) {
      const cardWidth = cardEl.offsetWidth + 24;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.max(0, Math.min(index, caseStudiesList.length - 1)));
    }
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const handleScroll = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    const cardEl = el.firstElementChild;
    const scrollAmount = cardEl ? (cardEl.offsetWidth + 24) * direction : 380 * direction;
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="service-cs-section" aria-label="Featured Case Studies">
      <div className="service-cs-container">
        {/* Header matching User Screenshot Exactly */}
        <div className="service-cs-header">
          <div className="service-cs-badge-wrapper">
            <span className="service-cs-badge">
              <span className="service-cs-dot"></span> FEATURED CAMPAIGNS
            </span>
          </div>

          <h2 className="service-cs-title">
            Case <span className="service-cs-title-red">Studies</span>
          </h2>

          <p className="service-cs-subtitle">
            Real brands. Real results. Explore how we craft transformational identities and high-ROI campaigns.
          </p>
        </div>

        {/* Slider Carousel Container */}
        <div className="service-cs-carousel-wrapper">
          <div className="service-cs-track" ref={trackRef}>
            {caseStudiesList.map((item) => (
              <div key={item.id} className="service-cs-card-item">
                <article className="service-cs-card">
                  {/* Card Image Wrap */}
                  <Link to={`/case-studies/${item.slug}`} className="service-cs-img-wrap" tabIndex={-1}>
                    <img
                      src={`${base}${item.image}`}
                      alt={item.alt}
                      className="service-cs-img"
                      loading="lazy"
                      width="500"
                      height="320"
                    />
                    <span className="service-cs-cat-badge">{item.categoryLabel}</span>

                    <div className="service-cs-hover-overlay">
                      <span className="service-cs-hover-btn">View Case Study →</span>
                    </div>
                  </Link>

                  {/* Card Body */}
                  <div className="service-cs-body">
                    <h3 className="service-cs-card-title">
                      <Link to={`/case-studies/${item.slug}`}>
                        {item.title}
                      </Link>
                    </h3>

                    <p className="service-cs-card-desc">
                      {item.tagline}
                    </p>

                    <div className="service-cs-action-wrap">
                      <Link
                        to={`/case-studies/${item.slug}`}
                        className="service-cs-btn"
                        aria-label={`View case study for ${item.title}`}
                      >
                        View Case Study →
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Chevron Navigation Controls (Exact match to User Screenshot) */}
        <div className="service-cs-nav-row">
          <button
            type="button"
            className={`service-cs-nav-btn prev${!canScrollLeft ? ' disabled' : ''}`}
            onClick={() => handleScroll(-1)}
            disabled={!canScrollLeft}
            aria-label="Previous case study"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            type="button"
            className={`service-cs-nav-btn next${!canScrollRight ? ' disabled' : ''}`}
            onClick={() => handleScroll(1)}
            disabled={!canScrollRight}
            aria-label="Next case study"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
