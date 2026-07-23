import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import './Audit.css';

const base = import.meta.env.BASE_URL;

export default function Audit() {
  const [form, setForm] = useState({ audit: 'SEO', name: '', website: '', email: '', mobile: '', agree: false });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.agree) { alert('Please agree to the terms before submitting.'); return; }
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Request Free Website &amp; SEO Audit - Sociapa</title>
        <meta name="description" content="Get a free comprehensive website, SEO, UI/UX & social media audit from Sociapa. No hidden costs. 100% confidential analysis delivered in 24 hours." />
        <meta name="keywords" content="Free Website Audit, SEO Audit, UI UX Audit, Digital Marketing Audit Noida Delhi" />
        <link rel="canonical" href="https://www.sociapa.com/free-website-audit" />
        <meta property="og:title" content="Request Free Website & SEO Audit - Sociapa" />
        <meta property="og:description" content="Get a free comprehensive website, SEO, UI/UX & social media audit from Sociapa. No hidden costs." />
        <meta property="og:url" content="https://www.sociapa.com/free-website-audit" />
      </Helmet>

      {/* ── 1. HERO BANNER ── */}
      <section className="audit-hero-section page-hero-section">
        <div className="audit-hero-glow" />

        <div className="audit-hero-container">
          <div className="audit-section-label">
            <span className="audit-label-dot"></span>
            100% FREE &amp; CONFIDENTIAL
          </div>

          <h1 className="audit-hero-title">
            Unlock Your Website’s <span className="audit-hero-highlight">True Potential</span>
          </h1>

          <p className="audit-hero-desc">
            Discover technical SEO gaps, UI/UX bottlenecks, conversion leaks, and speed issues. Our senior strategists analyze 50+ factors to help your brand grow.
          </p>
        </div>
      </section>

      {/* ── 2. HERO FEATURED IMAGE FRAME ── */}
      <section className="audit-img-frame-section">
        <div className="audit-img-frame-container">
          <div className="audit-img-frame-card">
            <img
              src={`${base}images/websiteAudit.jpg`}
              alt="Free Website Audit — Sociapa"
              className="audit-img-frame-img"
            />
          </div>
        </div>
      </section>

      {/* ── 3. MAIN FORM & BENEFITS GRID ── */}
      <section className="audit-form-section">
        <div className="audit-form-container">
          <div className="audit-grid">

            {/* Left Column: Form Card */}
            <div className="audit-form-card">
              <h2 className="audit-form-card-title">
                Request Your <span className="audit-form-card-title-red">Free Audit</span>
              </h2>
              <p className="audit-form-card-desc">
                Fill out the details below. No credit card or hidden commitment required.
              </p>

              {submitted ? (
                <div className="audit-success-box">
                  <div className="audit-success-icon">🎉</div>
                  <h3 className="audit-success-title">Audit Request Submitted!</h3>
                  <p className="audit-success-text">
                    Thank you, <strong>{form.name}</strong>! Our senior SEO &amp; UI/UX audit team is analyzing <strong>{form.website}</strong>.
                  </p>
                  <div className="audit-success-footer">
                    ⚡ Expected Delivery: <strong>Within 24 Hours</strong> to <strong>{form.email}</strong>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="audit-form-element">

                  {/* Audit Type Pills */}
                  <div>
                    <label className="audit-form-label">Select Audit Focus *</label>
                    <div className="audit-pills-grid">
                      {[
                        { id: 'SEO', label: '🔍 SEO & Rankings' },
                        { id: 'UIUX', label: '🎨 UI / UX & CRO' },
                        { id: 'SOCIAL MEDIA', label: '📱 Social Media' },
                        { id: 'WEBSITE DEVELOPMENT', label: '⚡ Website Speed' }
                      ].map(type => (
                        <button
                          type="button"
                          key={type.id}
                          onClick={() => setForm(prev => ({ ...prev, audit: type.id }))}
                          className={`audit-pill-btn ${form.audit === type.id ? 'active' : ''}`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="audit-form-label">Full Name *</label>
                    <input
                      type="text" name="name" value={form.name}
                      onChange={handleChange} required placeholder="e.g. Rahul Sharma"
                      className="audit-input-field"
                    />
                  </div>

                  {/* Website URL */}
                  <div>
                    <label className="audit-form-label">Website URL *</label>
                    <input
                      type="url" name="website" value={form.website}
                      onChange={handleChange} required placeholder="https://yourbrand.com"
                      className="audit-input-field"
                    />
                  </div>

                  {/* Email & Phone Row */}
                  <div className="audit-form-grid-2col">
                    <div>
                      <label className="audit-form-label">Work Email *</label>
                      <input
                        type="email" name="email" value={form.email}
                        onChange={handleChange} required placeholder="name@company.com"
                        className="audit-input-field"
                      />
                    </div>
                    <div>
                      <label className="audit-form-label">Phone Number *</label>
                      <input
                        type="tel" name="mobile" value={form.mobile}
                        onChange={handleChange} required placeholder="+91 98765 43210"
                        maxLength="10"
                        className="audit-input-field"
                      />
                    </div>
                  </div>

                  {/* Terms Checkbox */}
                  <div className="audit-terms-wrap">
                    <input
                      type="checkbox" name="agree" id="agree"
                      checked={form.agree} onChange={handleChange}
                      className="audit-terms-checkbox"
                    />
                    <label htmlFor="agree" className="audit-terms-label">
                      I agree to allow Sociapa to analyze my website and contact me regarding this audit report.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn btn-primary audit-submit-btn"
                  >
                    Submit Free Audit Request →
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Illustration & Deliverables */}
            <div className="audit-right-col">
              <div className="audit-illus-box">
                <img
                  src={`${base}images/audit.png`}
                  alt="Website Audit Illustration"
                  className="audit-illus-img"
                />
              </div>

              {/* 4 Highlight Cards Grid */}
              <div className="audit-highlights-grid">
                {[
                  { icon: '🔍', label: 'SEO & Keyword Gaps', desc: 'Identify ranking opportunities, backlinks, & tech flaws.' },
                  { icon: '🎨', label: 'UI/UX & CRO Review', desc: 'Fix conversion bottlenecks and mobile usability bugs.' },
                  { icon: '📱', label: 'Social & Brand Footprint', desc: 'Evaluate social engagement and audience resonance.' },
                  { icon: '⚡', label: 'Core Web Vitals', desc: 'Benchmark page speed, load times, and script errors.' },
                ].map((c, i) => (
                  <div key={i} className="audit-highlight-card">
                    <div className="audit-highlight-icon">{c.icon}</div>
                    <div className="audit-highlight-title">{c.label}</div>
                    <div className="audit-highlight-desc">{c.desc}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. WHAT YOU WILL RECEIVE (3-STEP PROCESS) ── */}
      <section className="audit-deliverables-section">
        <div className="audit-deliverables-container">
          <div className="audit-deliverables-header">
            <span className="audit-deliverables-label">
              EXPRESS DELIVERABLES
            </span>
            <h2 className="audit-deliverables-title">
              What You Receive in Your <span className="audit-hero-highlight">Free Audit</span>
            </h2>
          </div>

          <div className="audit-deliverables-grid">
            <div className="audit-deliverable-card">
              <div className="audit-deliverable-icon">📄</div>
              <h3 className="audit-deliverable-heading">1. 50+ Factor PDF Audit</h3>
              <p className="audit-deliverable-desc">
                A clean, comprehensive audit document covering SEO, speed, user experience, security, and mobile responsiveness.
              </p>
            </div>

            <div className="audit-deliverable-card">
              <div className="audit-deliverable-icon">🛠️</div>
              <h3 className="audit-deliverable-heading">2. Prioritized Action Roadmap</h3>
              <p className="audit-deliverable-desc">
                Step-by-step priority list of quick fixes and high-impact optimizations for your design and development teams.
              </p>
            </div>

            <div className="audit-deliverable-card">
              <div className="audit-deliverable-icon">📞</div>
              <h3 className="audit-deliverable-heading">3. 1-on-1 Strategy Session</h3>
              <p className="audit-deliverable-desc">
                A complimentary 30-minute consultation call with a senior Sociapa strategist to walk through key recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
