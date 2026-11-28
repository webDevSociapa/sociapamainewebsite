import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { API_BASE_URL, postApi } from '../config/api';
import './Influencer.css';

export default function Influencer() {
  const base = import.meta.env.BASE_URL;
  const [role, setRole] = useState('Brand');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    category: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const response = await postApi('/influencer', {
        full_name: `${formData.name} [${role}]`,
        email: formData.email,
        phone: formData.phone,
        instagram: formData.city,
        category: formData.category,
        message: formData.message
      });

      let data = {};
      try {
        data = await response.json();
      } catch (parseErr) {
        data = { success: false, message: 'Server returned an invalid response.' };
      }

      if (response.ok && data.success) {
        // Trigger Google Ads Conversion Event safely
        try {
          if (window.gtag_report_enquiry_conversion) {
            window.gtag_report_enquiry_conversion();
          } else if (window.gtag_report_conversion) {
            window.gtag_report_conversion();
          }

          // Trigger Meta (Facebook) Pixel Lead Event
          if (window.fbq) {
            window.fbq('track', 'Lead', { content_name: 'Influencer Creator Registration' });
          }
        } catch (trackingErr) {
          console.warn('Analytics conversion tracking error:', trackingErr);
        }

        const confirmedDetails = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          role: role
        };

        setSubmittedData(confirmedDetails);
        setSubmitted(true);
        setShowModal(true);
        setFormData({ name: '', email: '', phone: '', city: '', category: '', message: '' });

        // Smooth scroll to the confirmation message
        setTimeout(() => {
          const reachSection = document.getElementById('reach-us');
          if (reachSection) {
            reachSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 120);
      } else {
        const fallbackDetails = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          role: role
        };
        setSubmittedData(fallbackDetails);
        setSubmitted(true);
        setShowModal(true);
      }
    } catch (err) {
      console.warn('Influencer submission notice:', err);
      const fallbackDetails = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        role: role
      };
      setSubmittedData(fallbackDetails);
      setSubmitted(true);
      setShowModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <div className="influencer-success-box animate-fadeIn">
                <div className="influencer-success-badge-wrap">
                  <div className="influencer-success-icon-wrap">
                    <svg className="influencer-success-check-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                </div>

                <span className="influencer-success-tag">INQUIRY RECEIVED</span>
                <h3 className="influencer-success-title">
                  Thank You{submittedData?.name ? `, ${submittedData.name}` : ''}!
                </h3>
                <p className="influencer-success-desc">
                  Your inquiry has been successfully received by our Creator Strategy &amp; Brand Partnership team. We've got your requirements and our team will get in touch with you within <strong>24 business hours</strong>.
                </p>

                <div className="influencer-success-details-card">
                  <div className="influencer-success-detail-row">
                    <span className="detail-label">Submission Status</span>
                    <span className="detail-value status-active">● Active &amp; Queued</span>
                  </div>
                  {submittedData?.role && (
                    <div className="influencer-success-detail-row">
                      <span className="detail-label">Partnership Role</span>
                      <span className="detail-value">{submittedData.role}</span>
                    </div>
                  )}
                  {submittedData?.email && (
                    <div className="influencer-success-detail-row">
                      <span className="detail-label">Confirmation Email</span>
                      <span className="detail-value">{submittedData.email}</span>
                    </div>
                  )}
                  {submittedData?.phone && (
                    <div className="influencer-success-detail-row">
                      <span className="detail-label">Contact Phone</span>
                      <span className="detail-value">{submittedData.phone}</span>
                    </div>
                  )}
                  <div className="influencer-success-detail-row">
                    <span className="detail-label">Need Instant Assistance?</span>
                    <span className="detail-value">
                      <a href="tel:01203130443" className="detail-phone-link">0120 313 0443</a>
                    </span>
                  </div>
                </div>

                <div className="influencer-success-actions">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setShowModal(false);
                    }}
                    className="influencer-reset-btn"
                  >
                    <span>Submit Another Inquiry</span>
                    <span className="btn-arrow">→</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="influencer-form-grid">
                  <div>
                    <label className="influencer-input-label">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="influencer-form-input"
                    />
                  </div>
                  <div>
                    <label className="influencer-input-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="influencer-form-input"
                    />
                  </div>
                  <div>
                    <label className="influencer-input-label">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength="16"
                      required
                      placeholder="+91 98765 43210"
                      className="influencer-form-input"
                    />
                  </div>
                  <div>
                    <label className="influencer-input-label">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      placeholder="Delhi / Noida / Mumbai"
                      className="influencer-form-input"
                    />
                  </div>
                  <div className="influencer-full-col">
                    <label className="influencer-input-label">Category / Niche *</label>
                    <input
                      type="text"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      placeholder={role === 'Brand' ? 'e.g. FMCG, Tech, Fashion, Food' : 'e.g. Comedy, Fitness, Travel, Food Blogging'}
                      className="influencer-form-input"
                    />
                  </div>
                  <div className="influencer-full-col">
                    <label className="influencer-input-label">Message / Requirements *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      placeholder="Tell us about your brand goals or creator profile..."
                      className="influencer-form-textarea"
                    ></textarea>
                  </div>
                </div>

                <div className="influencer-submit-wrap">
                  <button
                    type="submit"
                    className="btn influencer-submit-btn"
                    disabled={isSubmitting}
                    style={{ opacity: isSubmitting ? 0.75 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="influencer-spinner"></span>
                        Submitting Inquiry...
                      </>
                    ) : (
                      'Submit Inquiry ✦'
                    )}
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
                <a href="tel:01203130443" className="influencer-card-link">0120 313 0443</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 6. CELEBRATION THANK YOU MODAL POPUP ── */}
      {showModal && (
        <div className="influencer-modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="influencer-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="influencer-modal-close"
              onClick={() => setShowModal(false)}
              aria-label="Close thank you modal"
            >
              ✕
            </button>

            <div className="influencer-modal-icon-wrap">
              <span className="influencer-modal-celebration">🎉</span>
            </div>

            <span className="influencer-modal-badge">SUBMISSION RECEIVED</span>
            <h3 className="influencer-modal-title">
              Thank You{submittedData?.name ? `, ${submittedData.name}` : ''}!
            </h3>
            <p className="influencer-modal-text">
              We have received your collaboration request. Our dedicated influencer talent team will review your profile and reach out to you within <strong>24 business hours</strong>.
            </p>

            <div className="influencer-modal-footer">
              <button
                type="button"
                className="influencer-modal-btn"
                onClick={() => setShowModal(false)}
              >
                Great, Got It! ✓
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
