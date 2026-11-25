import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

export default function AboutUs() {
  const base = import.meta.env.BASE_URL;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page-wrapper">
      <Helmet>
        <title>Know more about our digital marketing services in Noida &amp; Delhi NCR - Sociapa</title>
        <meta name="description" content="About Sociapa— At Sociapa, we believe that our company values allow us to deliver an unrivalled level of service to your business. We have expertise in Digital marketing, Social Media Marketing, Video Production and more." />
        <link rel="canonical" href="https://sociapa.com/about" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Know more about our digital marketing services in Noida & Delhi NCR - Sociapa" />
        <meta property="og:description" content="About Sociapa— At Sociapa, we believe that our company values allow us to deliver an unrivalled level of service to your business." />
        <meta property="og:url" content="https://sociapa.com/about" />
        <meta property="og:site_name" content="SOCIAPA" />
        <meta property="og:image" content="https://sociapa.com/logoSociapa.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Know more about our digital marketing services in Noida & Delhi NCR - Sociapa" />
        <meta name="twitter:description" content="About Sociapa— At Sociapa, we believe that our company values allow us to deliver an unrivalled level of service to your business." />
        <meta name="twitter:image" content="https://sociapa.com/logoSociapa.png" />
        {/* ProfilePage Schema - Required by SOCIAPA (1).docx */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "dateCreated": "2017-01-01T00:00:00+05:30",
          "dateModified": "2026-01-01T00:00:00+05:30",
          "mainEntity": {
            "@type": "Organization",
            "@id": "https://www.sociapa.com/#organization",
            "name": "Sociapa",
            "alternateName": "Sociapa Brand Studio",
            "description": "About Sociapa — At Sociapa, we believe that our company values allow us to deliver an unrivalled level of service to your business. We have expertise in Digital Marketing, Social Media Marketing, Video Production and more.",
            "foundingDate": "2017",
            "url": "https://www.sociapa.com/",
            "logo": "https://www.sociapa.com/logoSociapa.png",
            "image": "https://sociapa.com/logoSociapa.png",
            "knowsAbout": [
              "Digital Marketing",
              "Brand Strategy",
              "Social Media Marketing",
              "SEO AEO GEO",
              "Video Production",
              "Packaging Design",
              "Influencer Marketing",
              "Public Relations"
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "BL-02, Sector 116",
              "addressLocality": "Noida",
              "addressRegion": "Uttar Pradesh",
              "postalCode": "201306",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.facebook.com/sociapaa/",
              "https://www.instagram.com/sociapa/",
              "https://www.linkedin.com/company/sociapa/",
              "https://twitter.com/sociapa",
              "https://www.youtube.com/@Sociapa"
            ]
          }
        })}</script>
        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.sociapa.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "About Us",
              "item": "https://www.sociapa.com/about/"
            }
          ]
        })}</script>
      </Helmet>

      {/* ── FULL BLEED HERO BANNER ── */}
      <section className="hero-banner-section serInsideBnr">
        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
          About Sociapa - Digital Marketing & Creative Agency Noida
        </h1>
        <div className="row">
          <picture>
            <img
              src={`${base}assets/images/services_banner/about/about.webp`}
              alt="Crafting Bold Brand Stories & Digital Momentum - About Sociapa"
              className="hero-banner-img responsive-img w-100"
              width="1920"
              height="700"
              loading="eager"
              fetchpriority="high"
            />
          </picture>
        </div>
      </section>

      {/* ── 2. CINEMATIC HERO VIDEO CONTAINER ── */}
      <section className="about-video-section">
        <div className="about-video-container">
          <div className="about-video-card">
            <video autoPlay muted loop playsInline className="about-video-player">
              <source src={`${base}video/hero-video.mp4`} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* ── 3. STORY & PHILOSOPHY SECTION ── */}
      <section className="about-story-section">
        <div className="about-story-container">
          <div className="about-story-grid">
            {/* Left Card: Brand Thinking Card */}
            <div className="about-thinking-card">
              <div className="about-thinking-glow" />

              <span className="about-thinking-tag">WHO WE ARE</span>

              <h3 className="about-thinking-title">
                One Partner. Many Capabilities. Your Social Buddy.
              </h3>

              <p className="about-thinking-desc">
                Sociapa is a full-service creative and <a href="/best-digital-marketing-services-india" className="seo-interlink">digital marketing agency</a> built for brands that strive to be remembered. With our footprint across Delhi NCR, Dubai, and London, we build brand success with <a href="/brand-strategy" className="seo-interlink">strategy</a>, creativity, technology, and cultural truth.
              </p>

              <div className="about-thinking-badge">
                <span>⚡</span>
                <span className="about-thinking-badge-text">Startups · Scale-ups · Enterprises</span>
              </div>
            </div>

            {/* Right Side: Narrative Details */}
            <div className="about-narrative-list">
              <div className="about-narrative-card">
                <h4 className="about-narrative-heading">
                  🎯 Positioning &amp; Creative Strategy
                </h4>
                <p className="about-narrative-text">
                  We aim to hit the bull’s eye through clear brand narratives, unique visuals and communication frameworks that stay consistent and earn attention.
                </p>
              </div>

              <div className="about-narrative-card">
                <h4 className="about-narrative-heading">
                  💡 High-Impact Execution
                </h4>
                <p className="about-narrative-text">
                  From content ecosystems and digital films to performance creatives and always-on brand communication, we ensure every interaction conquers the playgrounds of digital presence and mainline marketing.
                </p>
              </div>

              <div className="about-narrative-card">
                <h4 className="about-narrative-heading">
                  📈 Data-Led Digital Growth
                </h4>
                <p className="about-narrative-text">
                  We lead conversations and build momentum for bigger businesses by combining deep strategic thinking, bold design, and data-backed digital execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. IMPACT METRICS SECTION ── */}
      <section className="about-metrics-section">
        <div className="about-metrics-container">
          <div className="about-metrics-grid">
            <div className="about-metric-item">
              <div className="about-metric-val">100+</div>
              <div className="about-metric-label">CLIENTS EMPOWERED</div>
            </div>

            <div className="about-metric-item-bordered">
              <div className="about-metric-val">8+</div>
              <div className="about-metric-label">YEARS OF EXCELLENCE</div>
            </div>

            <div className="about-metric-item-rightborder">
              <div className="about-metric-val">500+</div>
              <div className="about-metric-label">PROJECTS DELIVERED</div>
            </div>

            <div className="about-metric-item">
              <div className="about-metric-val">60+</div>
              <div className="about-metric-label">IN-HOUSE STRATEGISTS</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. MISSION & VISION SPLIT CARDS ── */}
      <section className="about-mission-section">
        <div className="about-mission-container">
          <div className="about-mission-grid">
            {/* Mission Card */}
            <div
              className="about-mission-card"
              style={{ backgroundImage: `linear-gradient(180deg, rgba(149, 118, 118, 0.2) 0%, rgba(0,0,0,0.92) 100%), url(${base}images/mission-1.jpg)` }}
            >
              <div className="about-mission-badge">🚀 OUR MISSION</div>

              <h3 className="about-mission-heading">
                Creativity, Commitment &amp; Customer Success
              </h3>

              <p className="about-mission-desc">
                To provide outstanding design and digital growth solutions by focusing on 3 golden values: strategic creativity, unwavering commitment, and maximum customer satisfaction.
              </p>
            </div>

            {/* Vision Card */}
            <div
              className="about-mission-card"
              style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.92) 100%), url(${base}images/vision-1.jpg)` }}
            >
              <div className="about-vision-badge">👁️ OUR VISION</div>

              <h3 className="about-mission-heading">
                Smart, Quirky &amp; Full-Pack Digital Leadership
              </h3>

              <p className="about-mission-desc">
                To empower brands in the digital sphere with a smart, quirky, and end-to-end suite of creative and growth services driven by pure passion and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. CORE VALUES (6 GOLDEN PILLARS) ── */}
      <section className="about-pillars-section">
        <div className="about-pillars-container">
          <div className="about-pillars-header">
            <span className="about-pillars-label">AGENCY EXCELLENCE</span>
            <h2 className="about-pillars-title">
              The 6 Pillars of <span className="about-hero-highlight">Sociapa</span>
            </h2>
          </div>

          <div className="about-pillars-grid">
            {[
              {
                num: '01',
                title: 'Qualitative Services',
                desc: 'We set uncompromised parameters and rigorous quality benchmarks across every brand asset and campaign to achieve quality.',
                tags: ['High Precision', 'Brand Governance', 'Zero-Defect QA'],
                img: 'icons/ads-experience/Award-Winning Creatives.png'
              },
              {
                num: '02',
                title: 'Quick Turnaround',
                desc: 'With leopard speed, we move ideas from our inbox to execution space without ever sacrificing design and strategy depth.',
                tags: ['Agile Sprints', 'Time-To-Market', 'Rapid Execution'],
                img: 'assets/images/services_icons/creative_designing/fast_turnaround.png'
              },
              {
                num: '03',
                title: 'Dedicated PM',
                desc: 'We follow the “One Team, One Person to Call approach’’ by channelizing a direct point of contact for seamless, transparent project management and daily communication.',
                tags: ['Single POC', 'Daily Updates', 'Real-Time Comms'],
                img: 'icons/ads-experience/In-House-Video-Expertise.png'
              },
              {
                num: '04',
                title: 'Industry Practices',
                desc: 'We strive to stay ahead of the curve with state-of-the-art marketing intelligence, cutting-edge creative tools, and forward-thinking industry standards.',
                tags: ['Advanced Tech', 'AI Workflows', 'Modern Tools'],
                img: 'icons/ads-experience/Optimisation.png'
              },
              {
                num: '05',
                title: 'Agency Processes',
                desc: 'Great work calls for a good process. We have built structured, tested, and transparent SOP frameworks engineered for an effective cross-team collaboration.',
                tags: ['Proven SOPs', 'Transparency', 'Frameworks'],
                img: 'icons/ads-experience/Programmatic-DSPs.png'
              },
              {
                num: '06',
                title: 'Scalable Operations',
                desc: 'We have flexible teams that are built to grow with countless dreams. With the best of capacity, we stand shoulder to shoulder with the brands for maximum digital footprint.',
                tags: ['High Capacity', 'Brand Scaling', 'Flexible Teams'],
                img: 'icons/ads-experience/Impact-Report.png'
              }
            ].map((val, idx) => (
              <div key={idx} className="about-pillar-card">
                <div className="about-pillar-top-row">
                  <div className="about-pillar-icon-box">
                    <img src={`${base}${val.img}`} alt={val.title} className="about-pillar-icon-img" width="46" height="46" />
                  </div>
                  <span className="about-pillar-num">{val.num}</span>
                </div>
                <h4 className="about-pillar-heading">{val.title}</h4>
                <p className="about-pillar-desc">{val.desc}</p>
                <div className="about-pillar-tags">
                  {val.tags.map((t, i) => (
                    <span key={i} className="about-pillar-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. TEAM & LEADERSHIP SHOWCASE ── */}
      <section className="about-team-section">
        <div className="about-team-container">
          <div className="about-team-header">
            <span className="about-pillars-label">THE BRAINS BEHIND SOCIAPA</span>

            <h2 className="about-hero-title">
              Meet Our <span className="about-hero-highlight">Leadership &amp; Team</span>
            </h2>

            <p className="about-hero-desc">
              We are a collective of 60+ in-house strategists, analysts, content creators, and designers who come together to shape meaningful brand stories and bold ideas.
            </p>
          </div>

          {/* Full Team Culture Photo */}
          <div className="about-team-photo-wrap">
            <img src={`${base}images/sociapa-team-new.webp`} alt="Sociapa Team" className="about-team-photo" />
          </div>

          {/* Leadership Cards Grid */}
          <div className="about-leadership-grid">
            {/* CEO Card */}
            <div className="about-leadership-card">
              <Link to="/sociapas-press-release">
                <img src={`${base}images/Ceo.webp`} alt="Dhiraj Raj" className="about-leadership-img" />
              </Link>
            </div>

            {/* Associate Director Card */}
            <div className="about-leadership-card">
              <div>
                <img src={`${base}images/A-D.webp`} alt="Sonakshi" className="about-leadership-img" />
              </div>
            </div>
          </div>

          {/* ── 8. JOIN US HIGH-CONVERTING CTA ── */}
          <div className="about-cta-box">
            <div className="about-cta-glow" />

            <h3 className="about-cta-heading">
              Ready to Shape Bold Brand Stories?
            </h3>

            <p className="about-cta-desc">
              We are constantly on the lookout for inspiring talents, strategists, analysts, and designers. If you believe we’d vibe well, come join our fast-growing team!
            </p>

            <Link to="/career" className="btn btn-primary about-cta-btn">
              Join Our Team
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
