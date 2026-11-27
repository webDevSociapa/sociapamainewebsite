import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { API_BASE_URL, postApi } from '../config/api';
import './Audit.css';

const base = import.meta.env.BASE_URL;

/* ─── SVG Icons ─── */
function IconPdfAudit() {
  return (
    <svg width="38" height="38" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="3" width="24" height="30" rx="4" fill="url(#auditRedGrad1)" fillOpacity="0.14" stroke="#D20C0C" strokeWidth="2" />
      <rect x="10" y="7" width="10" height="5" rx="1.5" fill="#D20C0C" />
      <path d="M12.5 9.5h5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="10" y1="16" x2="26" y2="16" stroke="#D20C0C" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="10" y1="20.5" x2="22" y2="20.5" stroke="#D20C0C" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.75" />
      <line x1="10" y1="25" x2="18" y2="25" stroke="#D20C0C" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.5" />
      <circle cx="26" cy="26" r="5.5" fill="#b6a9a9ff" stroke="#FFFFFF" strokeWidth="1.5" />
      <path d="M24 26l1.5 1.5 2.8-2.8" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="auditRedGrad1" x1="6" y1="3" x2="30" y2="33" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D20C0C" />
          <stop offset="1" stopColor="#FF4D4D" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function IconRoadmap() {
  return (
    <svg width="38" height="38" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 29C11 29 11 19 18 19C25 19 25 8 30 8" stroke="#D20C0C" strokeWidth="2" strokeDasharray="3 2" strokeLinecap="round" />
      <circle cx="7" cy="29" r="3.5" fill="#FFE5E5" stroke="#D20C0C" strokeWidth="1.8" />
      <circle cx="7" cy="29" r="1.2" fill="#D20C0C" />
      <circle cx="18" cy="19" r="3.5" fill="#FFE5E5" stroke="#D20C0C" strokeWidth="1.8" />
      <circle cx="18" cy="19" r="1.2" fill="#D20C0C" />
      <circle cx="29" cy="8" r="5.5" fill="#D20C0C" stroke="#FFFFFF" strokeWidth="1.5" />
      <path d="M29 5.5v5M26.5 8h5" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />
      <rect x="5" y="6" width="13" height="10" rx="2.5" fill="url(#auditRedGrad2)" fillOpacity="0.14" stroke="#D20C0C" strokeWidth="1.6" />
      <path d="M8 10l1.4 1.4 2.6-2.6" stroke="#D20C0C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="8" y1="13.5" x2="15" y2="13.5" stroke="#D20C0C" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.6" />
      <defs>
        <linearGradient id="auditRedGrad2" x1="5" y1="6" x2="18" y2="16" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D20C0C" />
          <stop offset="1" stopColor="#FF4D4D" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function IconStrategySession() {
  return (
    <svg width="38" height="38" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="6" width="28" height="20" rx="3.5" fill="url(#auditRedGrad3)" fillOpacity="0.14" stroke="#D20C0C" strokeWidth="2" />
      <circle cx="15" cy="14" r="3.5" fill="#FFE5E5" stroke="#D20C0C" strokeWidth="1.6" />
      <path d="M9 22.5c0-2.6 2.7-3.8 6-3.8s6 1.2 6 3.8" stroke="#D20C0C" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="20" y="9" width="10" height="7" rx="2" fill="#D20C0C" />
      <path d="M22 14.5l-1.5 1.5v-1.5h1.5z" fill="#D20C0C" />
      <path d="M22.5 12.5h5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M13 26l-1.5 5h13l-1.5-5" stroke="#D20C0C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="9" y1="31" x2="27" y2="31" stroke="#D20C0C" strokeWidth="2" strokeLinecap="round" />
      <circle cx="30" cy="7" r="3.5" fill="#D20C0C" stroke="#FFFFFF" strokeWidth="1.2" />
      <circle cx="30" cy="7" r="1.2" fill="#FFFFFF" />
      <defs>
        <linearGradient id="auditRedGrad3" x1="4" y1="6" x2="32" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D20C0C" />
          <stop offset="1" stopColor="#FF4D4D" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function IconSeoAudit() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D20C0C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="8" y1="11" x2="8" y2="13" />
      <line x1="11" y1="9" x2="11" y2="13" />
      <line x1="14" y1="7" x2="14" y2="13" />
    </svg>
  );
}

function IconUiUxAudit() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D20C0C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
      <circle cx="6" cy="6" r="1" fill="#D20C0C" />
      <circle cx="15" cy="15" r="2" fill="rgba(210,12,12,0.2)" />
    </svg>
  );
}

function IconSocialAudit() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D20C0C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8a3 3 0 100-6 3 3 0 000 6z" />
      <path d="M6 15a3 3 0 100-6 3 3 0 000 6z" />
      <path d="M18 22a3 3 0 100-6 3 3 0 000 6z" />
      <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
    </svg>
  );
}

function IconSpeedAudit() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D20C0C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="rgba(210,12,12,0.18)" />
    </svg>
  );
}

export default function Audit() {
  const [form, setForm] = useState({ audit: 'SEO', name: '', website: '', email: '', mobile: '', agree: true });
  const [campaignFile, setCampaignFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    setIsSubmitting(true);

    const payload = {
      name: form.name,
      email: form.email,
      website: form.website,
      mobile: form.mobile,
      audit: form.audit
    };

    try {
      await postApi('/audit', payload);
    } catch (err) {
      console.warn('Audit submission notice:', err);
    }

    try {
      if (window.gtag_report_contact_conversion) {
        window.gtag_report_contact_conversion();
      } else if (window.gtag_report_conversion) {
        window.gtag_report_conversion();
      }

      if (window.fbq) {
        window.fbq('track', 'Lead', { content_name: 'Website Audit Request' });
      }
    } catch (analyticsErr) {
      // analytics notice
    }

    setSubmittedData({ ...payload });
    setSubmitted(true);
    setShowModal(true);
    setIsSubmitting(false);

    // Smooth scroll to the confirmation card
    setTimeout(() => {
      const card = document.querySelector('.audit-form-card');
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const toggleFaq = index => {
    setActiveFaq(prev => (prev === index ? null : index));
  };

  const AUDIT_CATEGORIES = [
    { id: 'SEO', label: 'SEO & Keywords', icon: '🔍', tag: 'High ROI' },
    { id: 'UIUX', label: 'UI / UX & CRO', icon: '🎨', tag: 'Conversion' },
    { id: 'SOCIAL MEDIA', label: 'Social Media', icon: '📱', tag: 'Reach' },
    { id: 'WEBSITE DEVELOPMENT', label: 'Speed & Tech', icon: '⚡', tag: 'Core Vitals' },
    { id: 'BRAND AUDIT', label: 'Brand Audit', icon: '👑', tag: 'Identity' },
    { id: 'CAMPAIGN AUDIT', label: 'Campaign Audit', icon: '🎯', tag: 'Deck Upload' }
  ];

  const TRUSTED_CLIENTS = [
    { name: 'Americana', logo: `${base}images/clients/AmericanaLogo.png` },
    { name: 'Apis', logo: `${base}images/clients/apisClt.png` },
    { name: 'Bonn', logo: `${base}images/clients/bonnClt.png` },
    { name: 'Bicano', logo: `${base}images/clients/bicano.png` },
    { name: 'CG Corp', logo: `${base}images/clients/cg-corp-logo.png` },
    { name: 'Alishan', logo: `${base}images/clients/Alishan.png` }
  ];

  const FAQS = [
    {
      q: 'Is this audit completely free, or are there hidden costs?',
      a: 'It is 100% free with zero hidden commitments or credit card required. Our analysts review your digital footprint across <a href="/best-web-development-agency-india" class="seo-interlink">web architecture</a>, <a href="/seo-aeo-geo" class="seo-interlink">SEO rankings</a>, and brand reach.'
    },
    {
      q: 'How long will it take to receive the full audit report?',
      a: 'We deliver your custom, human-reviewed PDF audit report and priority roadmap directly to your inbox within 24 business hours.'
    },
    {
      q: 'What files can I attach for Campaign or Brand Audit?',
      a: 'You can upload your campaign creative deck, media plan, marketing brief, or <a href="/brand-identity-design" class="seo-interlink">brand guidelines</a> in PDF, DOC, DOCX, or PPT format (up to 15 MB).'
    },
    {
      q: 'Will my website information and data be kept private?',
      a: 'Yes, absolutely. We treat all audit submissions with strict enterprise confidentiality and never share your data or contact details with third parties.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Audit | SOCIAPA</title>
        <meta name="description" content="Press-Release — Press - Release This is where your Marketing Brilliance begins For all the hard work you’ve put in to consolidate the ideas and structure your business, | SOCIAPA" />
        <meta name="keywords" content="Free Website Audit, SEO Audit, UI UX Audit, Digital Marketing Audit Noida Delhi" />
        <link rel="canonical" href="https://sociapa.com/free-website-audit" />
        <meta property="og:title" content="Free Website Audit | SOCIAPA" />
        <meta property="og:description" content="Press-Release — Press - Release This is where your Marketing Brilliance begins For all the hard work you’ve put in to consolidate the ideas and structure your business, | SOCIAPA" />
        <meta property="og:url" content="https://sociapa.com/free-website-audit" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="SOCIAPA" />
        <meta property="og:image" content="https://sociapa.com/logoSociapa.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sociapa" />
        <meta name="twitter:title" content="Free Website Audit | SOCIAPA" />
        <meta name="twitter:description" content="Press-Release — Press - Release This is where your Marketing Brilliance begins For all the hard work you’ve put in to consolidate the ideas and structure your business, | SOCIAPA" />
        <meta name="twitter:image" content="https://sociapa.com/logoSociapa.png" />
      </Helmet>

      {/* ── 1. FULL-BLEED HERO BANNER ── */}
      <section className="hero-banner-section audit-hero-banner-section">
        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
          Free Website &amp; SEO Audit Services - Sociapa
        </h1>
        <picture>
          <source type="image/webp" srcSet={`${base}assets/images/services_banner/audit/audit.webp`} />
          <img
            src={`${base}assets/images/services_banner/audit/audit.webp`}
            alt="Free Website &amp; SEO Audit - Sociapa"
            className="hero-banner-img audit-hero-banner-img"
            width="1920"
            height="700"
            loading="eager"
            fetchpriority="high"
          />
        </picture>
      </section>

      {/* ── 2. MAIN FORM & SHOWCASE SECTION ── */}
      <section className="audit-form-section">
        {/* Background Ambient Glow */}
        <div className="audit-bg-glow-top"></div>

        <div className="audit-form-container">
          <div className="audit-grid">

            {/* Left Column: Form Card */}
            <div className="audit-form-card">
              <div className="audit-form-card-accent-bar"></div>

              <div className="audit-form-card-header">
                <span className="audit-form-card-tag">EXPRESS SUBMISSION</span>
                <h3 className="audit-form-card-title">
                  Request Your <span className="audit-red-gradient">Free Audit Report</span>
                </h3>
                <p className="audit-form-card-desc">
                  ⚡ Zero obligation • No credit card required • Delivered to your inbox in 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="audit-success-box animate-fadeIn">
                  <div className="audit-success-badge-wrap">
                    <div className="audit-success-icon-wrap">
                      <svg className="audit-success-check-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </div>
                  <span className="audit-success-tag">AUDIT REQUEST RECEIVED</span>
                  <h3 className="audit-success-title">
                    Thank You{submittedData?.name ? `, ${submittedData.name}` : ''}!
                  </h3>
                  <p className="audit-success-desc">
                    Your free website audit request has been successfully registered. Our technical SEO &amp; performance architects are already reviewing your web ecosystem.
                  </p>
                  <div className="audit-success-details-card">
                    <div className="audit-success-detail-row">
                      <span className="detail-label">Website Target</span>
                      <span className="detail-value highlight-link">{submittedData?.website || form.website}</span>
                    </div>
                    <div className="audit-success-detail-row">
                      <span className="detail-label">Report Delivery</span>
                      <span className="detail-value">{submittedData?.email || form.email}</span>
                    </div>
                    <div className="audit-success-detail-row">
                      <span className="detail-label">Audit Focus</span>
                      <span className="detail-value">{submittedData?.audit || form.audit}</span>
                    </div>
                    <div className="audit-success-detail-row">
                      <span className="detail-label">Delivery Timeline</span>
                      <span className="detail-value status-active">● Within 24 Business Hours</span>
                    </div>
                  </div>
                  <div className="audit-success-actions">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setShowModal(false);
                        setForm({ audit: 'SEO', name: '', website: '', email: '', mobile: '', agree: true });
                      }}
                      className="audit-reset-btn"
                    >
                      <span>Submit Another Website Audit</span>
                      <span className="btn-arrow">→</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="audit-form-element">

                  {/* Audit Type Pills */}
                  <div className="audit-form-group">
                    <label className="audit-form-label">
                      Select Audit Focus <span className="audit-required">*</span>
                    </label>
                    <div className="audit-pills-grid">
                      {[
                        { id: 'SEO', label: 'SEO & Rankings', icon: '🔍' },
                        { id: 'UIUX', label: 'UI / UX & CRO', icon: '🎨' },
                        { id: 'SOCIAL MEDIA', label: 'Social Media', icon: '📱' },
                        { id: 'WEBSITE DEVELOPMENT', label: 'Website Speed', icon: '⚡' },
                        { id: 'BRAND AUDIT', label: 'Brand Audit', icon: '👑' },
                        { id: 'CAMPAIGN AUDIT', label: 'Campaign Audit', icon: '🎯' }
                      ].map(cat => {
                        const isActive = form.audit === cat.id;
                        return (
                          <button
                            type="button"
                            key={cat.id}
                            onClick={() => setForm(prev => ({ ...prev, audit: cat.id }))}
                            className={`audit-pill-card ${isActive ? 'active' : ''}`}
                          >
                            <span className="audit-pill-icon">{cat.icon}</span>
                            <span className="audit-pill-label">{cat.label}</span>
                            {isActive && <span className="audit-pill-check">✓</span>}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Conditional File Upload Dropzone for Campaign / Brand Audit */}
                  {(form.audit === 'CAMPAIGN AUDIT' || form.audit === 'BRAND AUDIT') && (
                    <div className="audit-file-upload-wrap">
                      <label className="audit-form-label audit-file-label-main">
                        Attach Campaign Brief / Pitch Deck <span className="audit-optional">(Optional for Brand, Recommended for Campaign)</span>
                      </label>
                      <div className="audit-file-dropzone">
                        {campaignFile ? (
                          <div className="audit-file-selected">
                            <div className="audit-file-info-group">
                              <span className="audit-file-badge">{campaignFile.name.split('.').pop()?.toUpperCase() || 'DOC'}</span>
                              <span className="audit-file-name">{campaignFile.name}</span>
                              <span className="audit-file-size">({(campaignFile.size / (1024 * 1024)).toFixed(2)} MB)</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => setCampaignFile(null)}
                              className="audit-file-remove-btn"
                            >
                              ✕ Remove
                            </button>
                          </div>
                        ) : (
                          <>
                            <input
                              type="file"
                              id="audit-campaign-file"
                              accept=".pdf,.doc,.docx,.ppt,.pptx"
                              onChange={e => setCampaignFile(e.target.files?.[0] || null)}
                              className="audit-file-hidden-input"
                            />
                            <label htmlFor="audit-campaign-file" className="audit-file-label">
                              <div className="audit-file-icon">📎</div>
                              <div className="audit-file-text-wrap">
                                <span className="audit-file-title">Click to upload Campaign / Brief Document</span>
                                <span className="audit-file-hint">Supported: PDF, DOC, DOCX, PPT up to 15 MB</span>
                              </div>
                            </label>
                          </>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Row 1: Full Name & Website URL */}
                  <div className="audit-form-grid-2col">
                    <div className="audit-form-group">
                      <label className="audit-form-label">
                        Full Name <span className="audit-required">*</span>
                      </label>
                      <div className="audit-input-wrap">
                        <span className="audit-input-icon">👤</span>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="e.g. Rahul Sharma"
                          className="audit-input-field"
                        />
                      </div>
                    </div>

                    <div className="audit-form-group">
                      <label className="audit-form-label">
                        Website URL <span className="audit-required">*</span>
                      </label>
                      <div className="audit-input-wrap">
                        <span className="audit-input-icon">🌐</span>
                        <input
                          type="text"
                          name="website"
                          value={form.website}
                          onChange={handleChange}
                          required
                          placeholder="e.g. sociapa.com or https://yourbrand.com"
                          className="audit-input-field"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Work Email & Phone Number */}
                  <div className="audit-form-grid-2col">
                    <div className="audit-form-group">
                      <label className="audit-form-label">
                        Work Email <span className="audit-required">*</span>
                      </label>
                      <div className="audit-input-wrap">
                        <span className="audit-input-icon">✉️</span>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="name@company.com"
                          className="audit-input-field"
                        />
                      </div>
                    </div>
                    <div className="audit-form-group">
                      <label className="audit-form-label">
                        Phone Number <span className="audit-required">*</span>
                      </label>
                      <div className="audit-input-wrap">
                        <span className="audit-input-icon">📞</span>
                        <input
                          type="tel"
                          name="mobile"
                          value={form.mobile}
                          onChange={handleChange}
                          required
                          placeholder="+91 98765 43210"
                          maxLength="16"
                          className="audit-input-field"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Terms Checkbox */}
                  <div className="audit-terms-wrap">
                    <input
                      type="checkbox"
                      name="agree"
                      id="agree"
                      checked={form.agree}
                      onChange={handleChange}
                      className="audit-terms-checkbox"
                    />
                    <label htmlFor="agree" className="audit-terms-label">
                      I agree to allow Sociapa to inspect my website performance and share this custom audit report.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="audit-submit-btn"
                  >
                    <span className="audit-btn-text">
                      {isSubmitting ? 'Submitting Free Audit Request...' : 'Claim My Free Audit Report →'}
                    </span>
                    <span className="audit-btn-shimmer"></span>
                  </button>

                  {/* Form Trust Micro-Footer */}
                  <div className="audit-form-trust-footer">
                    <span>🔒 100% Confidential</span>
                    <span className="audit-trust-bullet">•</span>
                    <span>🛡️ Strict NDA Protected</span>
                    <span className="audit-trust-bullet">•</span>
                    <span>🚫 Zero Spam</span>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Unified, Spacious Showcase Card */}
            <div className="audit-showcase-card">
              <div className="audit-showcase-accent-bar"></div>

              {/* Showcase Card Header */}
              <div className="audit-showcase-header">
                <span className="audit-form-card-tag">50+ FACTOR INSPECTION</span>
                <h3 className="audit-showcase-title">
                  What We Inspect In Your <span className="audit-red-gradient">Free Audit</span>
                </h3>
                <p className="audit-showcase-subtitle">
                  Every audit is manually analyzed by our senior digital marketing directors.
                </p>
              </div>

              {/* Illustration Centerpiece */}
              <div className="audit-showcase-illus-wrap">
                <img
                  src={`${base}images/audit.png`}
                  alt="Website Audit Inspection Illustration"
                  className="audit-showcase-illus-img"
                  loading="lazy"
                />
              </div>

              {/* Spacious Value Checklist Rows */}
              <div className="audit-showcase-checklist">
                <div className="audit-showcase-item">
                  <div className="audit-showcase-icon-badge">
                    <IconSeoAudit />
                  </div>
                  <div className="audit-showcase-item-text">
                    <h4 className="audit-showcase-item-heading">Technical SEO &amp; Indexing Flaws</h4>
                    <p className="audit-showcase-item-desc">Crawl errors, broken links, metadata gaps, and organic ranking blockers.</p>
                  </div>
                </div>

                <div className="audit-showcase-item">
                  <div className="audit-showcase-icon-badge">
                    <IconUiUxAudit />
                  </div>
                  <div className="audit-showcase-item-text">
                    <h4 className="audit-showcase-item-heading">UI/UX &amp; CRO Conversion Funnels</h4>
                    <p className="audit-showcase-item-desc">Pinpoint mobile friction, dead buttons, and reasons visitors bounce before buying.</p>
                  </div>
                </div>

                <div className="audit-showcase-item">
                  <div className="audit-showcase-icon-badge">
                    <IconSpeedAudit />
                  </div>
                  <div className="audit-showcase-item-text">
                    <h4 className="audit-showcase-item-heading">Core Web Vitals &amp; Loading Speed</h4>
                    <p className="audit-showcase-item-desc">Real-user speed benchmarks (LCP, CLS, INP) to boost search engine rankings.</p>
                  </div>
                </div>

                <div className="audit-showcase-item">
                  <div className="audit-showcase-icon-badge">
                    <IconRoadmap />
                  </div>
                  <div className="audit-showcase-item-text">
                    <h4 className="audit-showcase-item-heading">Prioritized 30-Day Growth Roadmap</h4>
                    <p className="audit-showcase-item-desc">Step-by-step checklist of immediate Quick Wins vs high-ROI long-term fixes.</p>
                  </div>
                </div>
              </div>

              {/* Showcase Card Footer Trust */}
              <div className="audit-showcase-footer">
                <span className="audit-showcase-badge">⚡ Rapid 24h Turnaround</span>
                <span className="audit-showcase-badge">⭐ 4.9/5 Rating (500+ Audits)</span>
              </div>
            </div>

          </div>

          {/* ── 2.5 TRUSTED BRANDS STRIP ── */}
          <div className="audit-trust-bar">
            <div className="audit-trust-bar-header">
              <span className="audit-trust-bar-line"></span>
              <span className="audit-trust-bar-title">TRUSTED BY LEADING CONSUMER &amp; ENTERPRISE BRANDS</span>
              <span className="audit-trust-bar-line"></span>
            </div>
            <div className="audit-logos-row">
              {TRUSTED_CLIENTS.map((client, idx) => (
                <div key={idx} className="audit-logo-item">
                  <img src={client.logo} alt={client.name} className="audit-client-logo" loading="lazy" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. DELIVERABLES SECTION (WHAT YOU RECEIVE) ── */}
      <section className="audit-deliverables-section">
        <div className="audit-deliverables-container">
          <div className="audit-deliverables-header">
            <span className="audit-deliverables-label">ACTIONABLE VALUE DELIVERED</span>
            <h2 className="audit-deliverables-title">
              What You Receive In Your <span className="audit-red-gradient">Free Audit Package</span>
            </h2>
            <p className="audit-deliverables-subtitle">
              We don’t just send automated charts. You get human-crafted, strategic insights and step-by-step guidance to scale your revenue.
            </p>
          </div>

          <div className="audit-deliverables-grid">
            <div className="audit-deliverable-card">
              <div className="audit-deliverable-top">
                <div className="audit-deliverable-icon-box">
                  <IconPdfAudit />
                </div>
                <span className="audit-deliverable-badge">PHASE 01</span>
              </div>
              <h3 className="audit-deliverable-heading">50+ Factor In-Depth Audit</h3>
              <p className="audit-deliverable-desc">
                A comprehensive PDF analysis examining indexing status, keyword density, competitor gap analysis, and mobile accessibility scores.
              </p>
              <ul className="audit-card-checklist">
                <li>✓ Technical SEO &amp; crawl errors</li>
                <li>✓ Core Web Vitals performance</li>
                <li>✓ Competitor ranking opportunities</li>
              </ul>
            </div>

            <div className="audit-deliverable-card featured-card">
              <div className="audit-card-popular-badge">RECOMMENDED</div>
              <div className="audit-deliverable-top">
                <div className="audit-deliverable-icon-box">
                  <IconRoadmap />
                </div>
                <span className="audit-deliverable-badge">PHASE 02</span>
              </div>
              <h3 className="audit-deliverable-heading">Prioritized Action Roadmap</h3>
              <p className="audit-deliverable-desc">
                Clear, high-impact fixes categorized into Immediate Quick Wins vs Medium-Term Growth strategies so your developers know exactly what to do.
              </p>
              <ul className="audit-card-checklist">
                <li>✓ Top 5 instant ROI fixes</li>
                <li>✓ UX conversion rate optimizations</li>
                <li>✓ On-page content enhancements</li>
              </ul>
            </div>

            <div className="audit-deliverable-card">
              <div className="audit-deliverable-top">
                <div className="audit-deliverable-icon-box">
                  <IconStrategySession />
                </div>
                <span className="audit-deliverable-badge">PHASE 03</span>
              </div>
              <h3 className="audit-deliverable-heading">1-on-1 Strategy Consultation</h3>
              <p className="audit-deliverable-desc">
                A complimentary 30-minute 1-on-1 video call with a senior Sociapa digital marketing director to walk through every single finding.
              </p>
              <ul className="audit-card-checklist">
                <li>✓ Personalized 30-min strategy review</li>
                <li>✓ Direct Q&amp;A with marketing directors</li>
                <li>✓ Zero sales pressure or obligations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WHY SOCIAPA VS GENERIC TOOLS COMPARISON ── */}
      <section className="audit-comparison-section">
        <div className="audit-comparison-container">
          <div className="audit-comparison-header">
            <span className="audit-deliverables-label">THE SOCIAPA ADVANTAGE</span>
            <h2 className="audit-deliverables-title">
              Why A <span className="audit-red-gradient">Human Audit</span> Beats Automated Bot Tools
            </h2>
          </div>

          <div className="audit-comparison-grid">
            {/* Generic Tools */}
            <div className="audit-comp-card comp-bad">
              <div className="comp-card-badge">GENERIC ONLINE SCANNERS</div>
              <ul className="comp-list">
                <li>❌ Automated computer bots with zero business context</li>
                <li>❌ 100-page generic PDF dump filled with confusing technical jargon</li>
                <li>❌ No prioritization — cannot tell what actually drives revenue</li>
                <li>❌ Persistent spam sales calls pushing unneeded services</li>
              </ul>
            </div>

            {/* Sociapa Audit */}
            <div className="audit-comp-card comp-good">
              <div className="comp-card-badge-good">SOCIAPA EXPERT AUDIT</div>
              <ul className="comp-list">
                <li>✅ Manually analyzed by seasoned SEO &amp; UX Marketing Directors</li>
                <li>✅ Tailored to your specific industry, competitors &amp; target audience</li>
                <li>✅ Prioritized action matrix: Immediate Quick Wins vs Long-term Levers</li>
                <li>✅ Complimentary 30-minute strategic walkthrough session</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. FREQUENTLY ASKED QUESTIONS ── */}
      <section className="audit-faq-section">
        <div className="audit-faq-container">
          <div className="audit-faq-header">
            <span className="audit-deliverables-label">HAVE QUESTIONS?</span>
            <h2 className="audit-deliverables-title">
              Frequently Asked <span className="audit-red-gradient">Questions</span>
            </h2>
          </div>

          <div className="audit-faq-list">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className={`audit-faq-item ${isOpen ? 'open' : ''}`}
                  onClick={() => toggleFaq(idx)}
                >
                  <div className="audit-faq-question">
                    <span>{faq.q}</span>
                    <span className="audit-faq-toggle">{isOpen ? '−' : '+'}</span>
                  </div>
                  {isOpen && (
                    <div className="audit-faq-answer">
                      <p dangerouslySetInnerHTML={{ __html: faq.a }}></p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. SUCCESS CELEBRATION MODAL ── */}
      {showModal && (
        <div className="audit-modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="audit-modal-card" onClick={e => e.stopPropagation()}>
            <button
              type="button"
              className="audit-modal-close"
              onClick={() => setShowModal(false)}
              aria-label="Close thank you modal"
            >
              ✕
            </button>
            <div className="audit-modal-icon-wrap">
              <span className="audit-modal-celebration">🎉</span>
            </div>
            <span className="audit-modal-badge">AUDIT REQUEST CONFIRMED</span>
            <h3 className="audit-modal-title">
              Thank You{submittedData?.name ? `, ${submittedData.name}` : ''}!
            </h3>
            <p className="audit-modal-text">
              We have received your website audit request for <strong>{submittedData?.website || 'your website'}</strong>. Our SEO &amp; technical performance architects are analyzing your site speed, mobile UX, and Core Web Vitals.
            </p>
            <p className="audit-modal-subtext">
              Your comprehensive report will be dispatched to <strong>{submittedData?.email || 'your email'}</strong> within <strong>24 business hours</strong>.
            </p>
            <div className="audit-modal-footer">
              <button
                type="button"
                className="audit-modal-btn"
                onClick={() => setShowModal(false)}
              >
                Great, Got It! ✓
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
