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
    <>
      <Helmet>
        <title>Know more about our digital marketing services in Noida &amp; Delhi NCR - Sociapa</title>
        <meta name="description" content="About Sociapa— At Sociapa, we believe that our company values allow us to deliver an unrivalled level of service to your business. We have expertise in Digital marketing, Social Media Marketing, Video Production and more." />
        <meta property="og:title" content="Know more about our digital marketing services in Noida & Delhi NCR - Sociapa" />
        <meta property="og:description" content="About Sociapa— At Sociapa, we believe that our company values allow us to deliver an unrivalled level of service to your business." />
        <meta property="og:url" content="https://www.sociapa.com/about/" />
      </Helmet>

      {/* ── 1. HERO BANNER ── */}
      <section className="about-page-hero page-hero-section">
        <div className="about-hero-glow" />

        <div className="about-hero-container">
          <div className="about-section-label">
            <span className="about-label-dot"></span>
            KNOW OUR STORY
          </div>

          <h1 className="about-hero-title">
            Crafting <span className="about-hero-highlight">Bold Brand Stories</span> &amp; Digital Momentum
          </h1>

          <p className="about-hero-desc">
            At <strong className="about-hero-bold">Sociapa</strong>, we shape clear brand narratives, distinct identities, and communication frameworks that resonate with today’s consumers and drive sustainable growth.
          </p>
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
                Strategic Brand Building, Not Just Short-Term Campaigns
              </h3>

              <p className="about-thinking-desc">
                We deeply analyze a brand’s current position, category dynamics, cultural context, and audience mindset to construct a strong, future-proof foundation.
              </p>

              <div className="about-thinking-badge">
                <span>⚡</span>
                <span className="about-thinking-badge-text">Partnering with top brands since 2019</span>
              </div>
            </div>

            {/* Right Side: Narrative Details */}
            <div className="about-narrative-list">
              <div className="about-narrative-card">
                <h4 className="about-narrative-heading">
                  🎯 Positioning &amp; Creative Strategy
                </h4>
                <p className="about-narrative-text">
                  Our core strength lies in shaping clear brand narratives, distinct visual identities, and communication frameworks that stay consistent across all consumer touchpoints.
                </p>
              </div>

              <div className="about-narrative-card">
                <h4 className="about-narrative-heading">
                  💡 High-Impact Execution
                </h4>
                <p className="about-narrative-text">
                  From content ecosystems and digital films to performance creatives and always-on brand communication, we ensure every interaction builds momentum and long-term brand equity.
                </p>
              </div>

              <div className="about-narrative-card">
                <h4 className="about-narrative-heading">
                  📈 Data-Led Digital Growth
                </h4>
                <p className="about-narrative-text">
                  By combining deep strategic thinking, bold design, and data-backed digital execution, we help brands move forward with clarity, relevance, and market leadership.
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
              style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.92) 100%), url(${base}images/mission-1.jpg)` }}
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
              { img: 'QUALITATIVE-SERVICES.png', title: 'QUALITATIVE SERVICES', desc: 'Uncompromised quality standards in every execution.' },
              { img: 'QUICK-TURN-AROUND-TIME.png', title: 'QUICK TURNAROUND', desc: 'Rapid sprint delivery with high precision.' },
              { img: 'DEDICATED-PROJECT-MANAGER.png', title: 'DEDICATED PM', desc: 'Single point of contact for seamless communication.' },
              { img: 'INDUSTRY-LED-PRACTICES.png', title: 'INDUSTRY PRACTICES', desc: 'State-of-the-art tools, tech, and workflows.' },
              { img: 'AGENCY-CENTRIC-PROCESSES.png', title: 'AGENCY PROCESSES', desc: 'Structured, transparent, and scalable frameworks.' },
              { img: 'SALABLE-OPERATIONS.png', title: 'SCALABLE OPERATIONS', desc: 'Built to adapt and expand alongside brand growth.' }
            ].map((val, idx) => (
              <div key={idx} className="about-pillar-card">
                <div className="about-pillar-icon-box">
                  <img src={`${base}images/icons/${val.img}`} alt={val.title} className="about-pillar-icon-img" />
                </div>
                <h4 className="about-pillar-heading">{val.title}</h4>
                <p className="about-pillar-desc">{val.desc}</p>
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
            <img src={`${base}images/sociapa-team-new.jpg`} alt="Sociapa Team" className="about-team-photo" />
          </div>

          {/* Leadership Cards Grid */}
          <div className="about-leadership-grid">
            {/* CEO Card */}
            <div className="about-leadership-card">
              <Link to="/sociapas-press-release">
                <img src={`${base}images/Ceo.png`} alt="Dhiraj Raj" className="about-leadership-img" />
              </Link>
            </div>

            {/* Associate Director Card */}
            <div className="about-leadership-card">
              <div>
                <img src={`${base}images/A-D.png`} alt="Sonakshi" className="about-leadership-img" />
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
    </>
  );
}
