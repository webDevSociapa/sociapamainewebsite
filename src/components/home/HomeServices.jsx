import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  serviceCategories,
  allServicesData,
  getServicesByCategory,
} from '../../data/servicesData';
import './HomeServices.css';

const DESKTOP_BP = 992;
const CURTAIN_SHARE = 0.08; // initial share of pinned scroll used to lift the red OUR SERVICES curtain

export default function HomeServices() {
  const base = import.meta.env.BASE_URL;
  const sectionRef = useRef(null);
  const revealFrameRef = useRef(null);
  const curtainRef = useRef(null);
  const catListRef = useRef(null);
  const activeIdxRef = useRef(0);
  const scrollLockRef = useRef(null);

  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [scrollDir, setScrollDir] = useState(1); // 1 = forward, -1 = backward
  const [isRevealed, setIsRevealed] = useState(false);
  const [spotlightIdx, setSpotlightIdx] = useState(0);
  const [isGridHovered, setIsGridHovered] = useState(false);

  const totalTabs = serviceCategories.length;
  const activeTab = serviceCategories[activeTabIdx] || serviceCategories[0];
  const filteredServices = getServicesByCategory(activeTab.id);

  const totalTabsStr = String(totalTabs).padStart(2, '0');

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const frameEl = revealFrameRef.current;
    const curtainEl = curtainRef.current;
    if (!sectionEl || !frameEl) return undefined;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      if (curtainEl) curtainEl.style.transform = 'translateY(-100%)';
      setIsRevealed(true);
      return undefined;
    }

    let rafId = null;

    const updateScrollAnimation = () => {
      rafId = null;
      const isDesktop = window.innerWidth >= DESKTOP_BP;

      if (!isDesktop) {
        if (curtainEl) curtainEl.style.transform = 'translateY(-100%)';
        return;
      }

      const rect = sectionEl.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      const stickyTop = 90; // matches fixed .navbar height
      const stickyHeight = Math.max(480, vh - stickyTop);
      const scrollableSpan = Math.max(1, sectionEl.offsetHeight - stickyHeight);
      const scrolledInsidePin = Math.min(scrollableSpan, Math.max(0, stickyTop - rect.top));
      const pinProgress = scrolledInsidePin / scrollableSpan;

      // Phase 1: Red "OUR SERVICES" curtain enters covering frame, then lifts upward on scroll
      const enter = Math.min(1, Math.max(0, 1 - (rect.top - stickyTop) / stickyHeight));
      const curtainProgress = Math.min(
        1,
        Math.max(0, ((enter - 0.55) / 0.45) * 0.5 + (pinProgress / CURTAIN_SHARE) * 0.5)
      );

      if (curtainEl) {
        curtainEl.style.transform = `translate3d(0, ${(-curtainProgress * 100).toFixed(2)}%, 0)`;
      }

      if (curtainProgress > 0.35) {
        setIsRevealed(true);
      } else if (curtainProgress < 0.1) {
        setIsRevealed(false);
      }

      // Phase 2: Pinned scroll category progression (01/06 -> 06/06) after curtain lifts
      const lock = scrollLockRef.current;
      if (lock) {
        if (Math.abs(window.scrollY - lock.targetY) <= 8 || performance.now() >= lock.until) {
          scrollLockRef.current = null;
        } else {
          return;
        }
      }

      const tabProgress = Math.min(1, Math.max(0, (pinProgress - CURTAIN_SHARE) / (1 - CURTAIN_SHARE)));
      const nextIdx =
        tabProgress >= 0.995
          ? totalTabs - 1
          : Math.min(totalTabs - 1, Math.floor(tabProgress * totalTabs));

      if (nextIdx !== activeIdxRef.current) {
        setScrollDir(nextIdx > activeIdxRef.current ? 1 : -1);
        activeIdxRef.current = nextIdx;
        setActiveTabIdx(nextIdx);
        setSpotlightIdx(0);
      }
    };

    const onScrollOrResize = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(updateScrollAnimation);
    };
    const clearScrollLock = () => {
      scrollLockRef.current = null;
    };

    // Mobile / tablet fallback reveal via IntersectionObserver
    let observer = null;
    if (window.innerWidth < DESKTOP_BP && 'IntersectionObserver' in window) {
      if (curtainEl) curtainEl.style.transform = 'translateY(-100%)';
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsRevealed(true);
              observer.disconnect();
            }
          });
        },
        { threshold: 0.12 }
      );
      observer.observe(sectionEl);
    }

    updateScrollAnimation();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });
    window.addEventListener('wheel', clearScrollLock, { passive: true });
    window.addEventListener('touchstart', clearScrollLock, { passive: true });

    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      if (observer) observer.disconnect();
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      window.removeEventListener('wheel', clearScrollLock);
      window.removeEventListener('touchstart', clearScrollLock);
    };
  }, [totalTabs]);

  const handleTabClick = (targetIdx) => {
    const sectionEl = sectionRef.current;
    const dir = targetIdx >= activeTabIdx ? 1 : -1;

    if (typeof window !== 'undefined' && window.innerWidth >= DESKTOP_BP && sectionEl) {
      const stickyTop = 90;
      const vh = window.innerHeight || 800;
      const stickyHeight = Math.max(480, vh - stickyTop);
      const scrollableSpan = Math.max(1, sectionEl.offsetHeight - stickyHeight);
      const sectionDocTop = sectionEl.getBoundingClientRect().top + window.scrollY;
      const targetProgress = CURTAIN_SHARE + ((targetIdx + 0.5) / totalTabs) * (1 - CURTAIN_SHARE);
      const targetScrollY = sectionDocTop - stickyTop + scrollableSpan * targetProgress;

      scrollLockRef.current = {
        targetY: targetScrollY,
        until: performance.now() + 1000,
      };

      setScrollDir(dir);
      activeIdxRef.current = targetIdx;
      setActiveTabIdx(targetIdx);
      setSpotlightIdx(0);

      window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
      return;
    }

    setScrollDir(dir);
    activeIdxRef.current = targetIdx;
    setActiveTabIdx(targetIdx);
    setSpotlightIdx(0);

    const listEl = catListRef.current;
    const targetBtn = listEl?.children?.[targetIdx];
    if (listEl && targetBtn) {
      const targetLeft = targetBtn.offsetLeft - (listEl.clientWidth - targetBtn.clientWidth) / 2;
      listEl.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' });
    }
  };

  const count = filteredServices.length;
  const isSingleCard = count === 1;
  const isFourCardGrid = count === 4;
  const isSevenCardGrid = count === 7;
  const isDenseGrid = count >= 5; // 6 cards = 3x2 grid; 7 cards = 4+3 balanced 2-row grid
  const cols = isSingleCard ? 1 : isDenseGrid ? 3 : 2;
  const trailingSpanFull =
    !isSingleCard &&
    !isSevenCardGrid &&
    ((cols === 2 && count % 2 === 1) || (cols === 3 && count % 3 === 1));

  return (
    <section
      ref={sectionRef}
      className="hs-gw-section"
      id="services"
      aria-labelledby="home-services-heading"
    >
      <div className="hs-gw-sticky-stage">
        {/* Centered Floating Pill CTA */}
        <Link to="/contact-us" className={`hs-gw-top-pill ${isRevealed ? 'is-visible' : ''}`}>
          Start a Project
        </Link>

        <div
          ref={revealFrameRef}
          className={`hs-gw-frame ${isRevealed ? 'is-revealed' : ''}`}
        >
          {/* Red Entry Curtain that lifts up on scroll */}
          <div ref={curtainRef} className="hs-gw-curtain" aria-hidden="true">
            <span>Our Services</span>
          </div>

          {/* Left Column: Headline + All Service Category Tabs */}
          <div className="hs-gw-left-col">
            <div className="hs-gw-heading-box">
              <div className="hs-gw-eyebrow">
                <span className="hs-gw-eyebrow-dot" aria-hidden="true" />
                WHAT WE DO AT SOCIAPA
              </div>
              <h2 className="hs-gw-main-heading" id="home-services-heading">
                <span className="hs-gw-word-mask">
                  <span className="hs-gw-word hs-gw-word-1">SERVICES</span>
                </span>
                <br />
                <span className="hs-gw-word-mask">
                  <span className="hs-gw-word hs-gw-word-2">THAT MOVE</span>
                </span>
                <br />
                <span className="hs-gw-word-mask">
                  <span className="hs-gw-word hs-gw-word-3">THE NEEDLE</span>
                </span>
              </h2>
            </div>

            <div className="hs-gw-rule" aria-hidden="true" />

            <div className="hs-gw-tabs-box">
              <div className="hs-gw-tabs-top">
                <div
                  ref={catListRef}
                  className="hs-gw-cat-list"
                  role="tablist"
                  aria-label="Service Categories"
                >
                  {serviceCategories.map((tab, idx) => {
                    const isActive = idx === activeTabIdx;
                    const svcCount = allServicesData.filter((s) => s.category === tab.id).length;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        className={`hs-gw-cat-btn ${isActive ? 'is-active' : ''}`}
                        style={{ '--tab-delay': `${idx * 55}ms` }}
                        onClick={() => handleTabClick(idx)}
                      >
                        <span>{tab.label}</span>
                        <span className="hs-gw-cat-count">{svcCount}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="hs-gw-counter-block" aria-live="polite">
                  <div className="hs-gw-counter">
                    <span className="hs-gw-roll" aria-hidden="true">
                      <span
                        className="hs-gw-roll-col"
                        style={{ transform: `translateY(-${activeTabIdx * 1.2}em)` }}
                      >
                        {serviceCategories.map((tab, idx) => (
                          <strong key={tab.id}>{String(idx + 1).padStart(2, '0')}</strong>
                        ))}
                      </span>
                    </span>
                    <span className="sr-only">{String(activeTabIdx + 1).padStart(2, '0')}</span>
                    /{totalTabsStr}
                  </div>
                  <div className="hs-gw-svc-count-label">
                    {count} {count === 1 ? 'Service' : 'Services'}
                  </div>
                </div>
              </div>

              <div className="hs-gw-tabs-footer">
                <Link to="/our-services" className="hs-gw-view-all-link">
                  Explore All {allServicesData.length} Services <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Animated Clip-Wipe Cards Grid */}
          <div className="hs-gw-right-col">
            <div
              key={activeTab.id}
              className={[
                'hs-gw-cards-grid',
                isSingleCard ? 'hs-gw-cards-grid--single' : '',
                isFourCardGrid ? 'hs-gw-cards-grid--four' : '',
                isDenseGrid && !isSevenCardGrid ? 'hs-gw-cards-grid--dense' : '',
                isSevenCardGrid ? 'hs-gw-cards-grid--seven' : '',
                isGridHovered ? 'is-hovering' : '',
                scrollDir > 0 ? 'dir-forward' : 'dir-backward',
              ]
                .filter(Boolean)
                .join(' ')}
              role="tabpanel"
              onMouseEnter={() => setIsGridHovered(true)}
              onMouseLeave={() => {
                setIsGridHovered(false);
                setSpotlightIdx(0);
              }}
            >
              {filteredServices.map((service, idx) => {
                const isSpotlight = spotlightIdx === idx;
                const isWide = isSingleCard || (trailingSpanFull && idx === count - 1);
                const isExternal = Boolean(service.link && service.link.startsWith('http'));

                const cardClasses = [
                  'hs-gw-card',
                  isSpotlight ? 'is-spotlight' : '',
                  isWide ? 'hs-gw-card--wide' : '',
                  isSingleCard ? 'hs-gw-card--single' : '',
                ]
                  .filter(Boolean)
                  .join(' ');

                const cardStyle = { '--card-delay': `${idx * 35}ms` };

                const cardInner = (
                  <>
                    <div className="hs-gw-card-media">
                      <img
                        src={`${base}images/services/${service.img}`}
                        alt={service.title}
                        className="hs-gw-card-img"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="hs-gw-card-wash" aria-hidden="true" />
                    </div>

                    <div className="hs-gw-card-rim" aria-hidden="true">
                      <span className="hs-gw-edge hs-gw-edge-t" />
                      <span className="hs-gw-edge hs-gw-edge-b" />
                      <span className="hs-gw-edge hs-gw-edge-l" />
                      <span className="hs-gw-edge hs-gw-edge-r" />
                    </div>

                    <div className="hs-gw-card-content">
                      <div className="hs-gw-card-meta">
                        <span className="hs-gw-card-tag">{service.tag}</span>
                        <h3 className="hs-gw-card-title">{service.title}</h3>
                        <p className="hs-gw-card-desc">{service.desc}</p>
                      </div>

                      <span className="hs-gw-card-circle-arrow" aria-hidden="true">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 17L17 7M7 7h10v10" />
                        </svg>
                      </span>
                    </div>
                  </>
                );

                if (isExternal) {
                  return (
                    <a
                      key={service.id}
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cardClasses}
                      style={cardStyle}
                      onMouseEnter={() => setSpotlightIdx(idx)}
                      onFocus={() => setSpotlightIdx(idx)}
                    >
                      {cardInner}
                    </a>
                  );
                }

                return (
                  <Link
                    key={service.id}
                    to={service.link}
                    className={cardClasses}
                    style={cardStyle}
                    onMouseEnter={() => setSpotlightIdx(idx)}
                    onFocus={() => setSpotlightIdx(idx)}
                  >
                    {cardInner}
                  </Link>
                );
              })}
            </div>

            <div className="hs-gw-tabs-footer hs-gw-tabs-footer--mobile">
              <Link to="/our-services" className="hs-gw-view-all-link">
                Explore All {allServicesData.length} Services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
