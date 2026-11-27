import { useState, useEffect, useCallback } from 'react';
import './ClientTestimonials.css';

const CLIENT_REVIEWS = [
  {
    id: 'surjya-meher',
    image: 'images/review.jpg',
    alt: 'Surjya Meher appreciation post for Team Sociapa — Tatva Kesari IITF 23',
  },
  {
    id: 'sukhpreet-naz',
    image: 'images/review2.jpg',
    alt: 'Sukhpreet Naz LinkedIn appreciation post for Team Sociapa — Americana Coconut',
  },
  {
    id: 'abhinav-chaubey',
    image: 'images/review3.jpg',
    alt: 'Abhinav Chaubey appreciation letter for Creative Team at Sociapa — Cool & Care SAS',
  },
  {
    id: 'harpriya-bains',
    image: 'images/review4.png',
    alt: "Harpriya Bains testimonial for Nutrela x Sociapa Mother's Day campaign",
  },
];

// Duplicate list for seamless looping across desktop/tablet/mobile views
const SLIDES = [...CLIENT_REVIEWS, ...CLIENT_REVIEWS];

/**
 * Dark spotlight client testimonials carousel displayed above Awards & Certification on Home.
 */
export default function ClientTestimonials() {
  const base = import.meta.env.BASE_URL;
  const total = CLIENT_REVIEWS.length;
  const [index, setIndex] = useState(0);
  const [withTransition, setWithTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setWithTransition(true);
    setIndex((prev) => (prev >= total ? total : prev + 1));
  }, [total]);

  const handlePrev = useCallback(() => {
    if (index === 0) {
      setWithTransition(false);
      setIndex(total);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setWithTransition(true);
          setIndex(total - 1);
        });
      });
    } else {
      setWithTransition(true);
      setIndex((prev) => prev - 1);
    }
  }, [index, total]);

  const handleTransitionEnd = () => {
    if (index >= total) {
      setWithTransition(false);
      setIndex(index % total);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setWithTransition(true);
        });
      });
    }
  };

  useEffect(() => {
    if (isPaused) return undefined;
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  return (
    <section
      className="client-reviews-fig-section"
      id="testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="client-reviews-bg-pattern" aria-hidden="true" />

      <div className="container client-reviews-container">
        {/* Top Header Row */}
        <div className="client-reviews-header animate-on-scroll">
          <div className="client-reviews-header-left">
            <span className="client-reviews-eyebrow">CLIENT REVIEWS &amp; FEEDBACK</span>
            <h2 className="client-reviews-title">
              WHAT OUR CLIENTS
              <br />
              SAY
            </h2>
            <p className="client-reviews-subtitle">
              Real appreciation posts and feedback from brand managers, executives, and leaders working with Sociapa.
            </p>
          </div>

          <div className="client-reviews-arrows">
            <button
              type="button"
              onClick={handlePrev}
              className="client-reviews-arrow-btn"
              aria-label="Previous client review"
            >
              <svg width="24" height="18" viewBox="0 0 24 18" fill="none" aria-hidden="true">
                <path
                  d="M9 2L2 9M2 9L9 16M2 9H22"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="client-reviews-arrow-btn"
              aria-label="Next client review"
            >
              <svg width="24" height="18" viewBox="0 0 24 18" fill="none" aria-hidden="true">
                <path
                  d="M15 2L22 9M22 9L15 16M22 9H2"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Large Readable Appreciation Cards Slider */}
        <div className="client-reviews-viewport animate-on-scroll delay-1">
          <div
            className="client-reviews-track"
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translate3d(calc(-1 * ${index} * (100% + 28px) / var(--cr-per-view)), 0, 0)`,
              transition: withTransition ? 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)' : 'none',
            }}
          >
            {SLIDES.map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="client-reviews-card">
                <img
                  src={`${base}${item.image}`}
                  alt={item.alt}
                  className="client-reviews-card-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
