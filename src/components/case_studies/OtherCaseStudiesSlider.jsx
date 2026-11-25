import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './OtherCaseStudiesSlider.css';

// ── ALL 7 CASE STUDIES DATA (EXACT TITLES & DETAILS MATCHING FIGMA / WEBSITE) ──
const caseStudiesList = [
  {
    id: 'mint-chocon',
    slug: 'product-launch',
    categoryLabel: 'PRODUCT LAUNCH',
    title: 'Mint ChocOn — National Celebrity Launch',
    tagline: 'Mint Nahi Hint Hai — Starring Bollywood Star Janhvi Kapoor',
    image: 'images/case_study/other_services/other_service_product_launch.jpg',
    alt: 'Product Launch — Mint ChocOn Starring Janhvi Kapoor',
  },
  {
    id: 'sebum-skincare',
    slug: 'packaging',
    categoryLabel: 'PACKAGING',
    title: 'Sebum — Modern Clinical Skincare Packaging',
    tagline: 'Modern clinical skincare packaging, dieline architecture & brand identity',
    image: 'images/case_study/other_services/other_service_packaging.jpg',
    alt: 'Packaging Design — Sebüm Simply Honest',
  },
  {
    id: 'apis-influencer',
    slug: 'influencer-campaign',
    categoryLabel: 'INFLUENCER CAMPAIGN',
    title: 'Apis — Influencer Phase 1 & Festive Case Study',
    tagline: '2.0M+ reach featuring Ranveer Brar, Zakir Khan & top food creators',
    image: 'images/case_study/other_services/other_service_influencer.jpg',
    alt: 'Influencer Marketing — Apis Himalaya Honey',
  },
  {
    id: 'tupperware-influencer',
    slug: 'tupperware',
    categoryLabel: 'INFLUENCER CAMPAIGN',
    title: 'Tupperware — The Great Tupperware Festival',
    tagline: 'Turning a festive sale into relatable, creator-led storytelling',
    image: 'images/case_study/other_services/other_service_tupperware.jpg',
    alt: 'Influencer Campaign — The Great Tupperware Festival',
  },
  {
    id: 'french-essence',
    slug: 'digital',
    categoryLabel: 'DIGITAL',
    title: 'French Essence — Luxury Fragrance Digital Evolution',
    tagline: 'Brand repositioning, high-fashion tabletop shoots & social content engine',
    image: 'images/case_study/other_services/other_service_digital.jpg',
    alt: 'Digital Marketing — French Essence Luxury Fragrance Digital Evolution',
  },
  {
    id: 'bikano-performance',
    slug: 'performance',
    categoryLabel: 'PERFORMANCE',
    title: 'Bikano — Scaled Performance & Festive Off-Take',
    tagline: 'Hyper-targeted festive ads, quick-commerce growth & ROAS maximization',
    image: 'images/case_study/other_services/other_service_performance.jpg',
    alt: 'Performance Marketing — Bikano Scaled Performance & Festive Off-Take',
  },
  {
    id: 'bonn-ai-video',
    slug: 'ai-video',
    categoryLabel: 'AI VIDEO',
    title: 'Bonn — Giving Product & USPs a Gen Z Beat',
    tagline: '682.9K views, distinctive product mascots & jingle-led AI video storytelling',
    image: 'images/case_study/other_services/other_service_ai_video.jpg',
    alt: 'AI Video Production — Bonn Gen Z Beat',
  },
];

export default function OtherCaseStudiesSlider({ currentId = '' }) {
  const base = import.meta.env.BASE_URL || '/';
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  // Update scroll arrow states and active slide dot
  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Compute approximate active card
    const cardEl = el.firstElementChild;
    if (cardEl) {
      const cardWidth = cardEl.offsetWidth + 28; // width + gap
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

    // If currentId is specified, smooth scroll so the current card is in view
    const currentIndex = caseStudiesList.findIndex((item) => item.id === currentId);
    if (currentIndex > 0) {
      const cardEl = el.children[currentIndex];
      if (cardEl) {
        setTimeout(() => {
          cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }, 150);
      }
    }

    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [currentId, updateScrollState]);

  const handleScrollByCards = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    const cardEl = el.firstElementChild;
    const scrollAmount = cardEl ? (cardEl.offsetWidth + 28) * direction : 380 * direction;
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleDotClick = (index) => {
    const el = trackRef.current;
    if (!el) return;
    const cardEl = el.children[index];
    if (cardEl) {
      cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  };

  return (
    <section className="cs-slider-section" aria-label="Other Case Studies">
      <div className="cs-slider-container">
        {/* Section Heading matching Figma & User Reference */}
        <div className="cs-slider-header">
          <h2 className="cs-slider-heading">
            <span className="cs-slider-heading-dark">OTHER</span>{' '}
            <span className="cs-slider-heading-red">CASE STUDIES</span>
            <span className="cs-slider-heading-line"></span>
          </h2>
        </div>

        {/* Carousel Wrapper with Controls */}
        <div className="cs-slider-carousel-wrapper">
          {/* Prev Arrow */}
          <button
            type="button"
            className={`cs-slider-nav-btn prev${!canScrollLeft ? ' disabled' : ''}`}
            onClick={() => handleScrollByCards(-1)}
            disabled={!canScrollLeft}
            aria-label="Previous case study"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Cards Track */}
          <div className="cs-slider-track" ref={trackRef}>
            {caseStudiesList.map((item) => {
              const isCurrent = item.id === currentId;

              const cardContent = (
                <article className={`cs-slider-card${isCurrent ? ' current' : ''}`}>
                  {/* Top Image Wrap */}
                  <div className="cs-slider-card-img-wrap">
                    <img
                      src={`${base}${item.image}`}
                      alt={item.alt}
                      className="cs-slider-card-img"
                      loading="lazy"
                      width="720"
                      height="720"
                    />
                    {isCurrent && (
                      <span className="cs-slider-current-badge">Currently Viewing</span>
                    )}
                  </div>

                  {/* Card Body — Exact Red Category & Black Bold Title Matching User Reference */}
                  <div className="cs-slider-card-body">
                    <div className="cs-slider-card-meta">
                      <span className="cs-slider-card-tag">{item.categoryLabel}</span>
                    </div>
                    <h3 className="cs-slider-card-title">{item.title}</h3>
                    <p className="cs-slider-card-tagline">{item.tagline}</p>
                  </div>

                  {/* Bottom Action Link / Button */}
                  <div className="cs-slider-card-footer">
                    <span className="cs-slider-card-btn-text">Details &amp; Results</span>
                    <span className="cs-slider-card-btn-arrow">→</span>
                  </div>
                </article>
              );

              return isCurrent ? (
                <div
                  key={item.id}
                  className="cs-slider-card-item current-item"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  title={`${item.title} (Current)`}
                  role="button"
                  tabIndex={0}
                >
                  {cardContent}
                </div>
              ) : (
                <Link
                  key={item.id}
                  to={`/case-studies/${item.slug}`}
                  className="cs-slider-card-item"
                  title={item.title}
                >
                  {cardContent}
                </Link>
              );
            })}
          </div>

          {/* Next Arrow */}
          <button
            type="button"
            className={`cs-slider-nav-btn next${!canScrollRight ? ' disabled' : ''}`}
            onClick={() => handleScrollByCards(1)}
            disabled={!canScrollRight}
            aria-label="Next case study"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="cs-slider-dots-row" role="tablist" aria-label="Slider Pagination">
          {caseStudiesList.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              className={`cs-slider-dot${idx === activeIndex ? ' active' : ''}`}
              onClick={() => handleDotClick(idx)}
              aria-label={`Go to slide ${idx + 1}: ${item.title}`}
              aria-selected={idx === activeIndex}
              role="tab"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
