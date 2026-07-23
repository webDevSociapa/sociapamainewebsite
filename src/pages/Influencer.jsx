import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import './Influencer.css';

const base = import.meta.env.BASE_URL;

export default function Influencer() {
  const [role, setRole] = useState('Brand');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <Helmet>
        <title>Best Influencer Marketing Agency in Noida &amp; Delhi NCR, India - Sociapa</title>
        <meta name="description" content="Influencer Marketing in Noida & Delhi NCR, India - Reach Us Out, If You’re A Brand Or an Influencer service. We combine data-driven insights and creative strategy to produce meaningful relationships between brands and creators." />
        <meta name="keywords" content="Influencer marketing services in Delhi, Creator network India, Influencer marketplace" />
        <meta property="og:title" content="Best Influencer Marketing Agency in Noida & Delhi NCR, India - Sociapa" />
        <meta property="og:description" content="Influencer Marketing in Noida & Delhi NCR, India - Reach Us Out, If You’re A Brand Or an Influencer service. We combine data-driven insights and creative strategy to produce meaningful relationships between brands and creators." />
      </Helmet>

      {/* ── 1. LIGHT HERO SECTION ── */}
      <section className="influencer-hero-section page-hero-section">
        {/* Decorative Ambient Orbs */}
        <div className="influencer-orb-1" />
        <div className="influencer-orb-2" />

        <div className="influencer-hero-container">
          <div className="influencer-hero-row">
            
            <div className="influencer-hero-col-left">
              <div className="influencer-badge">
                <span className="influencer-badge-dot"></span>
                CREATOR &amp; BRAND MARKETPLACE
              </div>

              <h1 className="influencer-hero-title">
                Connect, Collaborate &amp; <br />
                <span className="influencer-title-highlight">Scale Your Brand</span>
              </h1>

              <p className="influencer-hero-desc">
                India's premier influencer network bridge. We pair top creators across food, lifestyle, tech, and entertainment with high-growth brands to deliver high-ROI commercial outcomes.
              </p>

              <div className="influencer-hero-buttons">
                <a
                  href="#reach-us"
                  onClick={() => setRole('Brand')}
                  className="btn btn-brand-red"
                >
                  I'm a Brand ✦
                </a>
                <a
                  href="#reach-us"
                  onClick={() => setRole('Influencer')}
                  className="btn btn-brand-dark"
                >
                  I'm an Influencer ➔
                </a>
              </div>
            </div>

            <div className="influencer-hero-col-right">
              <img
                src={`${base}images/influencerGirl.png`}
                alt="Influencer Marketing Sociapa"
                className="influencer-hero-img"
              />
            </div>

          </div>
        </div>
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
                  <iframe width="100%" height="270" src="https://www.youtube.com/embed/XXq-tmM80rk?modestbranding=1&autohide=1&showinfo=0" frameBorder="0" allowFullScreen className="influencer-video-iframe"></iframe>
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
                  <iframe width="100%" height="270" src="https://www.youtube.com/embed/zzTufc-wDXY?rel=0&controls=1&showinfo=0&modestbranding=0" frameBorder="0" allowFullScreen className="influencer-video-iframe"></iframe>
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
      <section id="reach-us" className="influencer-form-section">
        <div className="influencer-form-container">
          
          <div className="influencer-form-header">
            <span className="influencer-form-tag">
              START A COLLABORATION
            </span>
            <h2 className="influencer-form-heading">
              Reach Out To Sociapa
            </h2>
            <p className="influencer-form-sub">
              Whether you're a brand looking for growth or a creator ready to scale, we'd love to partner with you.
            </p>

            {/* Role Toggle Selector */}
            <div className="influencer-role-toggle">
              <button
                type="button"
                onClick={() => setRole('Brand')}
                className={`influencer-role-btn ${role === 'Brand' ? 'active' : ''}`}
              >
                I am a Brand
              </button>
              <button
                type="button"
                onClick={() => setRole('Influencer')}
                className={`influencer-role-btn ${role === 'Influencer' ? 'active' : ''}`}
              >
                I am an Influencer
              </button>
            </div>
          </div>

          <div className="influencer-form-card">
            {/* Top Form Guarantee Strip */}
            <div className="influencer-guarantee-strip">
              <span>⚡ Fast 24-hr Response</span>
              <span className="influencer-strip-divider">|</span>
              <span>🔒 100% Confidential</span>
              <span className="influencer-strip-divider">|</span>
              <span>🎯 Free Strategy Audit</span>
            </div>

            {submitted ? (
              <div className="influencer-success-box">
                <div className="influencer-success-icon">🎉</div>
                <h3 className="influencer-success-title">Thank You for Reaching Out!</h3>
                <p className="influencer-success-desc">Our influencer team will review your inquiry and get in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="influencer-form-grid">
                  <div>
                    <label className="influencer-input-label">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="influencer-form-input"
                    />
                  </div>
                  <div>
                    <label className="influencer-input-label">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="influencer-form-input"
                    />
                  </div>
                  <div>
                    <label className="influencer-input-label">Phone Number *</label>
                    <input
                      type="text"
                      maxLength="10"
                      required
                      placeholder="+91 98765 43210"
                      className="influencer-form-input"
                    />
                  </div>
                  <div>
                    <label className="influencer-input-label">City *</label>
                    <input
                      type="text"
                      required
                      placeholder="Delhi / Noida / Mumbai"
                      className="influencer-form-input"
                    />
                  </div>
                  <div className="influencer-full-col">
                    <label className="influencer-input-label">Category / Niche *</label>
                    <input
                      type="text"
                      required
                      placeholder={role === 'Brand' ? 'e.g. FMCG, Tech, Fashion, Food' : 'e.g. Comedy, Fitness, Travel, Food Blogging'}
                      className="influencer-form-input"
                    />
                  </div>
                  <div className="influencer-full-col">
                    <label className="influencer-input-label">Message / Requirements *</label>
                    <textarea
                      required
                      rows="4"
                      placeholder="Tell us about your brand goals or creator profile..."
                      className="influencer-form-textarea"
                    ></textarea>
                  </div>
                </div>

                <div className="influencer-submit-wrap">
                  <button type="submit" className="btn influencer-submit-btn">
                    Submit Inquiry ✦
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

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
                <a href="tel:+917011057175" className="influencer-card-link">+91 7011057175</a>
                <a href="tel:+918287445375" className="influencer-card-sublink">+91 8287445375</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
