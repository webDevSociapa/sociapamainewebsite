import React, { useRef, useEffect, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './OtherServicesSlider.css';

const SERVICES_LIST = [
  { id: 1, tag: 'BRANDING & DESIGN', title: 'Brand Identity Design', desc: 'Transformative visual identities, logos, color systems, and brand playbooks built to position your brand as an industry leader.', img: 'brand-identity-design.jpeg', link: '/brand-identity-design' },
  { id: 2, tag: 'STRATEGY & ARCHITECTURE', title: 'Brand Strategy', desc: 'Data-driven brand positioning, competitive analysis, and strategic messaging to dominate your market category.', img: 'brand-service.jpeg', link: '/brand-strategy' },
  { id: 3, tag: 'STRATEGY & ADVISORY', title: 'Consultation & Idea', desc: 'Strategic brand consultation, ideation workshops, and creative direction to discover new growth channels.', img: 'Consultation-&-Ideas.jpg', link: '/consultation-idea' },
  { id: 4, tag: 'STRATEGY & COPY', title: 'Content Development', desc: 'Strategic content planning, copy creation, blogs, campaign messaging, and digital storytelling tailored to your audience.', img: 'Content-Development.jpg', link: '/content-designing' },
  { id: 5, tag: 'VISUAL SYSTEM', title: 'Creative Designing', desc: 'Award-winning graphic design, social media creatives, ad banners, and marketing collaterals that command attention.', img: 'Creative-Designing.jpg', link: '/creative-designing' },
  { id: 6, tag: 'PERFORMANCE MARKETING', title: 'Digital Marketing', desc: 'ROI-focused digital campaigns combining Meta Ads, Google PPC, programmatic buying, and funnel optimisation.', img: 'Digital-Marketing.jpg', link: '/best-digital-marketing-services-india' },
  { id: 7, tag: 'RETENTION & CRO', title: 'Email Marketing', desc: 'Automated lifecycle flows, broadcast campaigns, and hyper-segmented retention strategies that boost customer LTV.', img: 'Email-Marketing.jpg', link: '/email-marketing-services' },
  { id: 8, tag: 'LAUNCH & GROWTH', title: 'Go To Market', desc: 'End-to-end product launch blueprints, market entry tactics, and channel strategies designed for rapid commercial traction.', img: 'go to-market-services.jpeg', link: '/go-to-market' },
  { id: 9, tag: 'CREATOR COLLABS', title: 'Influencer Marketing', desc: 'Connecting your brand with 5,000+ vetted micro, macro, and celebrity influencers for high-trust brand advocacy.', img: 'Influencer-Marketing.jpg', link: '/influencer-marketing-services' },
  { id: 10, tag: 'PACKAGING DESIGN', title: 'Packaging and Design', desc: 'Shelf-stopping packaging and label designs engineered to catch eyes, evoke emotion, and drive immediate purchase decisions.', img: 'Packaging-and-Design.jpg', link: '/best-packaging-design-agency-india' },
  { id: 11, tag: 'STUDIO & PRODUCT', title: 'Photography', desc: 'High-definition studio photography, e-commerce catalog shoots, lifestyle imagery, and model shoots for digital ads.', img: 'Photography.jpg', link: '/best-photography-services' },
  { id: 12, tag: 'UNBOXING DESIGN', title: 'Product Unboxing', desc: 'Memorable unboxing architecture and structural packaging that turns buyers into vocal brand advocates on social media.', img: 'product-unboxing-service.jpeg', link: '/product-unboxing-experience' },
  { id: 13, tag: 'CREDIBILITY & PRESS', title: 'Public Relations', desc: 'Press releases, top-tier news placement, executive profiling, and reputation management across national publications.', img: 'Public-Relation.jpg', link: '/best-pr-agency-india' },
  { id: 14, tag: 'LEGAL & COMPLIANCE', title: 'Registration Services', desc: 'Hassle-free trademarking, brand naming, corporate legal registration, and GST compliance for growing businesses.', img: 'Registration-Services.jpg', link: '/gst-company-registration-services' },
  { id: 15, tag: 'SEARCH OPTIMIZATION', title: 'SEO | AEO | GEO', desc: 'Integrated Search, Answer Engine, and Generative Engine Optimisation to dominate Google and AI search platforms.', img: 'seo-aeo-geo-services.jpeg', link: '/seo-aeo-geo' },
  { id: 16, tag: 'COMMUNITY & VIRAL', title: 'Social Media Marketing', desc: 'Full-funnel social media strategy, community building, viral content creation, and real-time social listening.', img: 'Social-Media-Marketing.jpg', link: '/best-social-media-marketing-agency-india' },
  { id: 17, tag: 'COMMERCIAL & REELS', title: 'Video Production', desc: 'High-end TVCs, brand films, viral Instagram Reels, product demos, and corporate videography produced from concept to cut.', img: 'Video-Production.jpg', link: '/videos' },
  { id: 18, tag: 'TECH & UI/UX', title: 'Website & App Development', desc: 'Custom, blazing-fast Shopify, React, and WordPress websites built for flawless user experience and maximum conversions.', img: 'Website-App-Development.jpg', link: '/best-web-development-agency-india' },
  { id: 19, tag: 'PAID PERFORMANCE', title: 'Ad Experience', desc: 'High-converting ad funnels engineered for low customer acquisition cost (CAC) and maximum Return on Ad Spend (ROAS).', img: 'Ad-Experience.jpg', link: '/pay-per-click-ppc-services-india' },
  { id: 20, tag: 'E-COMMERCE & B2B', title: 'Aggregator Platform Service', desc: 'Maximizing brand presence, product listings, and ad performance across Amazon, Flipkart, Blinkit, and Zepto.', img: 'Aggregator-Platform-Service.jpg', link: '/aggregator-platform-service' },
];

/**
 * Continuous seamless GPU-accelerated carousel displaying Sociapa's other services
 * below the FAQ section on every service detail page.
 */
export default function OtherServicesSlider() {
  const base = import.meta.env.BASE_URL || '/';
  const { pathname } = useLocation();
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const targetJumpRef = useRef(0);
  const pausedRef = useRef(false);
  const touchStartXRef = useRef(null);

  const normalizedPath = pathname.replace(/\/+$/, '').toLowerCase();
  const services = useMemo(
    () => SERVICES_LIST.filter((s) => s.link.toLowerCase() !== normalizedPath),
    [normalizedPath]
  );

  // Duplicate list once for seamless infinite wrap
  const loopedServices = useMemo(() => [...services, ...services], [services]);

  useEffect(() => {
    offsetRef.current = 0;
    targetJumpRef.current = 0;
    let rafId = null;
    let lastTime = performance.now();

    const tick = (now) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      const el = trackRef.current;
      if (el && el.children.length > services.length) {
        const loopWidth = el.children[services.length].offsetLeft - el.children[0].offsetLeft;
        if (loopWidth > 0) {
          if (Math.abs(targetJumpRef.current) > 0.5) {
            const step = targetJumpRef.current * Math.min(1, dt * 12);
            offsetRef.current += step;
            targetJumpRef.current -= step;
          } else {
            targetJumpRef.current = 0;
            if (!pausedRef.current) {
              offsetRef.current += 60 * dt;
            }
          }

          offsetRef.current = ((offsetRef.current % loopWidth) + loopWidth) % loopWidth;
          el.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
        }
      }

      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);
    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [services.length]);

  const handleScroll = useCallback((direction) => {
    const el = trackRef.current;
    if (!el || el.children.length < 2) return;
    const step = el.children[1].offsetLeft - el.children[0].offsetLeft;
    targetJumpRef.current += direction * step;
  }, []);

  const handleTouchStart = (e) => {
    pausedRef.current = true;
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (touchStartXRef.current === null) return;
    const currentX = e.touches[0].clientX;
    const deltaX = touchStartXRef.current - currentX;
    touchStartXRef.current = currentX;
    offsetRef.current += deltaX;
  };

  const handleTouchEnd = () => {
    touchStartXRef.current = null;
    pausedRef.current = false;
  };

  return (
    <section className="other-svc-section" aria-label="Our Other Services">
      <div className="other-svc-container">
        <div className="other-svc-header">
          <div className="other-svc-badge-wrapper">
            <span className="other-svc-badge">
              <span className="other-svc-dot" /> EXPLORE MORE
            </span>
          </div>

          <h2 className="other-svc-title">
            Our Other <span className="other-svc-title-red">Services</span>
          </h2>

          <p className="other-svc-subtitle">
            Discover our full suite of integrated brand, creative, performance, and digital growth solutions.
          </p>
        </div>

        <div
          className="other-svc-carousel-wrapper"
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="other-svc-track" ref={trackRef}>
            {loopedServices.map((svc, idx) => (
              <div key={`${svc.id}-${idx}`} className="other-svc-card-item">
                <article className="other-svc-card">
                  <Link to={svc.link} className="other-svc-img-wrap" tabIndex={-1}>
                    <img
                      src={`${base}images/services/${svc.img}`}
                      alt={svc.title}
                      className="other-svc-img"
                      loading="lazy"
                      width="575"
                      height="480"
                    />
                    <span className="other-svc-cat-badge">{svc.tag}</span>
                    <div className="other-svc-hover-overlay">
                      <span className="other-svc-hover-btn">Explore Service →</span>
                    </div>
                  </Link>

                  <div className="other-svc-body">
                    <h3 className="other-svc-card-title">
                      <Link to={svc.link}>{svc.title}</Link>
                    </h3>
                    <p className="other-svc-card-desc">{svc.desc}</p>
                    <div className="other-svc-action-wrap">
                      <Link
                        to={svc.link}
                        className="other-svc-btn"
                        aria-label={`Explore ${svc.title}`}
                      >
                        Explore Service →
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="other-svc-nav-row">
          <button
            type="button"
            className="other-svc-nav-btn prev"
            onClick={() => handleScroll(-1)}
            aria-label="Previous service"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            type="button"
            className="other-svc-nav-btn next"
            onClick={() => handleScroll(1)}
            aria-label="Next service"
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
