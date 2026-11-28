import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import InfluencerReachOutForm from '../components/InfluencerReachOutForm';
import './Influencer.css';

export default function Influencer() {
  const base = import.meta.env.BASE_URL;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="influencer-page-wrapper">
      <Helmet>
        <title>Best Influencer Marketing Agency in Noida &amp; Delhi NCR, India - Sociapa</title>
        <meta name="description" content="Influencer Marketing in Noida & Delhi NCR,India- Reach Us Out ,If You’re A Brand Or an Influencer service.We combine data-driven insights and creative strategy to produce meaningful relationships between brands and creators." />
        <meta name="keywords" content="Influencer marketing services in Delhi, Creator network India, Influencer marketplace" />
        <link rel="canonical" href="https://sociapa.com/influencers-marketplace" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Best Influencer Marketing Agency in Noida & Delhi NCR, India - Sociapa" />
        <meta property="og:description" content="Influencer Marketing in Noida & Delhi NCR,India- Reach Us Out ,If You’re A Brand Or an Influencer service.We combine data-driven insights and creative strategy to produce meaningful relationships between brands and creators." />
        <meta property="og:url" content="https://sociapa.com/influencers-marketplace" />
        <meta property="og:site_name" content="SOCIAPA" />
        <meta property="og:image" content="https://sociapa.com/images/sociapa-og-preview.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Influencer Marketing Agency in Noida & Delhi NCR, India - Sociapa" />
        <meta name="twitter:description" content="Influencer Marketing in Noida & Delhi NCR,India- Reach Us Out ,If You’re A Brand Or an Influencer service.We combine data-driven insights and creative strategy to produce meaningful relationships between brands and creators." />
        <meta name="twitter:image" content="https://sociapa.com/images/sociapa-og-preview.png" />
      </Helmet>

      {/* ── 1. FULL-BLEED HERO BANNER ── */}
      <section className="hero-banner-section influencer-hero-banner-section">
        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
          Influencer Marketing Agency &amp; Marketplace - Sociapa
        </h1>
        <picture>
          <source type="image/webp" srcSet={`${base}assets/images/services_banner/influencers/influncer.webp`} />
          <img
            src={`${base}assets/images/services_banner/influencers/influncer.webp`}
            alt="Influencer Marketing Marketplace - Sociapa"
            className="hero-banner-img influencer-hero-banner-img"
            width="1920"
            height="700"
            loading="eager"
            fetchpriority="high"
          />
        </picture>
      </section>

      {/* ── 2. METRIC STRIP ── */}
      <section className="influencer-metrics-section">
        <div className="influencer-metrics-container">
          <div className="influencer-metrics-grid">
            {[
              { num: '5,000+', lbl: 'Active Creators' },
              { num: '500+', lbl: 'Brand Collaborations' },
              { num: '10M+', lbl: 'Monthly Organic Reach' },
              { num: '100%', lbl: 'Transparent Reporting' },
            ].map((stat, i) => (
              <div key={i} className="influencer-metric-item">
                <div className="influencer-metric-num">{stat.num}</div>
                <div className="influencer-metric-lbl">{stat.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. CAMPAIGN SHOWCASE & CAPABILITIES ── */}
      <section className="influencer-showcase-section">
        <div className="influencer-showcase-container">

          <div className="influencer-showcase-header">
            <div className="influencer-showcase-label">
              <span className="influencer-badge-dot"></span>
              PROVEN CAMPAIGN EXCELLENCE
            </div>
            <h2 className="influencer-showcase-title">
              Strategic Creator Collaborations That <span className="influencer-title-highlight">Deliver ROI</span>
            </h2>
          </div>

          <div className="influencer-showcase-card">

            {/* Feature 1 - APIS */}
            <div className="influencer-feature-row">
              <div className="influencer-video-col">
                <div className="influencer-video-frame">
                  <iframe
                    width="100%"
                    height="270"
                    src="https://www.youtube-nocookie.com/embed/XXq-tmM80rk?enablejsapi=1&rel=0&modestbranding=1"
                    title="APIS India Campaign - Recipe by Ranveer"
                    frameBorder="0"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="influencer-video-iframe"
                  ></iframe>
                </div>
                <p className="influencer-video-caption">APIS India Campaign</p>
              </div>

              <div className="influencer-text-col">
                <span className="influencer-feature-tag">IN-HOUSE NETWORK</span>
                <h3 className="influencer-feature-heading">
                  Built-in Creator Network Hub
                </h3>
                <p className="influencer-feature-text">
                  We manage an elite roster of creators ranging from top comedians and lifestyle vloggers to culinary chefs, tech reviewers, and fitness icons.
                </p>
                <p className="influencer-feature-text-last">
                  We construct goal-oriented campaign structures that amplify brand awareness, ignite audience engagement, and convert views into sales.
                </p>
              </div>
            </div>

            <hr className="influencer-divider" />

            {/* Feature 2 - MINT CHOCON */}
            <div className="influencer-feature-row-last">
              <div className="influencer-video-col">
                <div className="influencer-video-frame">
                  <iframe
                    width="100%"
                    height="270"
                    src="https://www.youtube-nocookie.com/embed/zzTufc-wDXY?enablejsapi=1&rel=0&controls=1"
                    title="Mint ChocOn Influencer Campaign"
                    frameBorder="0"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="influencer-video-iframe"
                  ></iframe>
                </div>
                <p className="influencer-video-caption">Mint Chocon Campaign</p>
              </div>

              <div className="influencer-text-col">
                <span className="influencer-feature-tag">END-TO-END SERVICES</span>
                <h3 className="influencer-feature-heading">
                  360° Influencer Campaign Suite
                </h3>
                <ul className="influencer-checklist">
                  {[
                    "AI-Driven Creator Discovery & Niche Matching",
                    "Influencer Evaluation, Audit & Health Scores",
                    "Automated Creator CRM & Seamless Payouts",
                    "Viral Campaign Ideation, Scripts & Storyboarding",
                    "Compliance Management & ROI Analytics Reports"
                  ].map((item, i) => (
                    <li key={i} className="influencer-checklist-item">
                      <div className="influencer-check-icon">
                        ✓
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. REACH US OUT FORM ── */}
      <InfluencerReachOutForm />

      {/* ── 5. CONTACT CARDS ── */}
      <section className="influencer-contact-section">
        <div className="influencer-contact-container">
          <div className="influencer-contact-grid">

            {/* Email Card */}
            <div className="influencer-contact-card">
              <div className="influencer-card-icon-box">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h4 className="influencer-card-heading">Email Us</h4>
              <a href="mailto:mail@sociapa.com" className="influencer-card-link">
                mail@sociapa.com
              </a>
            </div>

            {/* Location Card */}
            <div className="influencer-contact-card">
              <div className="influencer-card-icon-box">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h4 className="influencer-card-heading">Our Office</h4>
              <p className="influencer-card-text">
                BL-02, Sector 116, Noida,<br />
                Uttar Pradesh 201306/201310
              </p>
            </div>

            {/* Phone Card */}
            <div className="influencer-contact-card">
              <div className="influencer-card-icon-box">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h4 className="influencer-card-heading">Call Direct</h4>
              <div className="influencer-phone-list">
                <a href="tel:01203130443" className="influencer-card-link">0120 313 0443</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
