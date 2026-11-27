import React, { useEffect, useState } from 'react';
import OtherServicesSlider from '../components/OtherServicesSlider';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { API_BASE_URL, postApi } from '../config/api';
import './InfluencerNeed.css';

const faqsData = [
  {
    q: "How does Sociapa help brands find and hire the right influencers?",
    a: "Sociapa operates an exclusive roster of 10,000+ verified creators across India. We analyze your brand's target demographic, campaign goals, and budget, then conduct AI-powered audience audits to match you with creators whose follower demographics align with your ideal buyers."
  },
  {
    q: "How do you detect fake followers and engagement fraud?",
    a: "Every influencer shortlisted for your campaign undergoes a multi-point audit evaluating historical engagement rates, follower growth velocity, audience authenticity scores, and comment sentiment to eliminate bots and ghost followers."
  },
  {
    q: "Can Sociapa handle the entire campaign from briefing to execution?",
    a: "Yes! Sociapa offers full-funnel, end-to-end campaign execution. We handle creator outreach, price negotiations, legal contracts, creative briefs, product seeding logistics, script approvals, content publishing, and post-campaign ROI analytics."
  },
  {
    q: "What tiers of creators can I hire through this platform?",
    a: "We curate campaigns across all creator tiers: Nano (1K–10K followers), Micro (10K–100K followers), Macro (100K–1M followers), and Celebrity Key Opinion Leaders (1M+ followers), or a strategic multi-tier hybrid mix."
  },
  {
    q: "How fast can we launch an influencer marketing campaign?",
    a: "Our fast-track onboarding team can provide a tailored creator shortlist within 48 hours of brief submission, allowing typical campaigns to go live within 7 to 10 business days."
  },
  {
    q: "Do brands get full rights to whitelist and run ads with creator content?",
    a: "Yes. We negotiate full digital advertising and whitelisting rights so your growth team can leverage creator content as high-performing Spark Ads, Meta Ads, and YouTube Shorts."
  },
  {
    q: "Which industries do you have the most creator coverage in?",
    a: "We have deep creator networks in FMCG, Beauty & Skincare, Fashion, Health & Fitness, Consumer Tech, FinTech, D2C Lifestyle, Food & Beverage, Travel, and Gaming."
  },
  {
    q: "What metrics are tracked in the post-campaign report?",
    a: "We track reach, true impressions, video completion rates, engagement rates (likes, comments, shares, saves), link clicks, coupon code usage, and Cost Per Engagement (CPE)."
  }
];

export default function InfluencerNeed() {
  const base = import.meta.env.BASE_URL || '/';
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);

  const [formData, setFormData] = useState({
    brandName: '',
    contactName: '',
    email: '',
    phone: '',
    category: 'FMCG & D2C',
    tierNeeded: 'Multi-Tier Mix (Recommended)',
    budget: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg('');

    try {
      const response = await postApi('/influencer', {
        full_name: `${formData.contactName} (${formData.brandName})`,
        email: formData.email,
        phone: formData.phone,
        instagram: `Category: ${formData.category} | Tier: ${formData.tierNeeded} | Budget: ${formData.budget}`,
        category: formData.category,
        message: formData.message || 'Brand looking for influencer marketing campaign activation.'
      });

      let data = {};
      try {
        data = await response.json();
      } catch (err) {
        data = { success: false, message: 'Invalid response from server.' };
      }

      if (response.ok && data.success) {
        if (window.gtag_report_enquiry_conversion) {
          window.gtag_report_enquiry_conversion();
        } else if (window.gtag_report_conversion) {
          window.gtag_report_conversion();
        }
        if (window.fbq) {
          window.fbq('track', 'Lead', { content_name: 'Brand Influencer Requirement Brief' });
        }

        setSubmitted(true);
        setFormData({
          brandName: '',
          contactName: '',
          email: '',
          phone: '',
          category: 'FMCG & D2C',
          tierNeeded: 'Multi-Tier Mix (Recommended)',
          budget: '',
          message: ''
        });
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      console.warn('Influencer need submission notice:', err);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="influencer-need-page">
      <Helmet>
        <title>Influencer | SOCIAPA</title>
        <meta name="description" content="#1 Digital Marketing Agency in Delhi NCR – Sociapa is a leading digital marketing & advertising agency Delhi, Noida & Gurgaon (India). Offering you 360 online marketing and e-commerce solutions for maximizing the efficiency of your business." />
        <meta
          name="keywords"
          content="Need Influencers for Brand, Hire Influencers India, Influencer Requirement, Creator Marketing Agency, Micro Influencer Hiring, Celebrity Influencer Campaign"
        />
        <link rel="canonical" href="https://sociapa.com/influencer-need" />
        <meta property="og:title" content="Influencer | SOCIAPA" />
        <meta property="og:description" content="#1 Digital Marketing Agency in Delhi NCR – Sociapa is a leading digital marketing & advertising agency Delhi, Noida & Gurgaon (India). Offering you 360 online marketing and e-commerce solutions for maximizing the efficiency of your business." />
        <meta property="og:url" content="https://sociapa.com/influencer-need" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SOCIAPA" />
        <meta property="og:image" content="https://sociapa.com/assets/images/services_banner/influencers/influncer.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sociapa" />
        <meta name="twitter:title" content="Influencer | SOCIAPA" />
        <meta name="twitter:description" content="#1 Digital Marketing Agency in Delhi NCR – Sociapa is a leading digital marketing & advertising agency Delhi, Noida & Gurgaon (India). Offering you 360 online marketing and e-commerce solutions for maximizing the efficiency of your business." />
        <meta name="twitter:image" content="https://sociapa.com/assets/images/services_banner/influencers/influncer.webp" />

        {/* Structured Data: FAQPage */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqsData.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.a
            }
          }))
        })}</script>

        {/* Structured Data: BreadcrumbList */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sociapa.com/" },
            { "@type": "ListItem", "position": 2, "name": "Our Services", "item": "https://sociapa.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Need Influencers", "item": "https://sociapa.com/influencer-need" }
          ]
        })}</script>
      </Helmet>

      {/* Hero Visual Section */}
      <section className="hero-banner-section">
        <picture>
          <source media="(max-width: 767px)" srcSet={`${base}images/influencer-service-banner-mobile.webp`} />
          <source type="image/webp" srcSet={`${base}images/influencer-service-banner.webp`} />
          <img
            src={`${base}images/influencer-service-banner.jpeg`}
            alt="Need Influencers for Your Brand - Sociapa Creator Marketing"
            className="hero-banner-img"
            width="1920"
            height="720"
            loading="eager"
            fetchpriority="high"
          />
        </picture>
      </section>

      {/* Main Page Introduction */}
      <section className="page-intro-section">
        <div className="section-inner">
          <div className="badge-pill">
            <span className="badge-dot"></span>
            Brand Influencer Matchmaking
          </div>

          {/* Mandatory 1st Heading */}
          <h1 className="main-title">
            Need Influencers for Your Brand? <span className="highlight-text">Creator Onboarding &amp; Marketing</span>
          </h1>

          <p className="intro-lead">
            Accelerate your brand growth with India's most authentic creators. Whether you need 50 hyper-engaged micro-influencers for a viral product launch or Bollywood celebrity KOLs for national brand recall, Sociapa curates, contracts, and manages high-converting creator campaigns end-to-end.
          </p>

          <div className="hero-cta-group">
            <a href="#brief-form" className="btn-primary-inf">
              Submit Your Campaign Brief
              <span>&darr;</span>
            </a>
            <Link to="/influencer-marketing-services" className="btn-secondary-inf">
              View Influencer Services
            </Link>
          </div>
        </div>
      </section>

      {/* Key Stats Bar */}
      <div className="stats-bar-inf">
        <div className="section-inner">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-val">10,000+</div>
              <div className="stat-lbl">Vetted Creators in Network</div>
            </div>
            <div className="stat-card">
              <div className="stat-val">4.8x</div>
              <div className="stat-lbl">Average Campaign ROI</div>
            </div>
            <div className="stat-card">
              <div className="stat-val">250+</div>
              <div className="stat-lbl">Successful Brand Campaigns</div>
            </div>
            <div className="stat-card">
              <div className="stat-val">48-Hour</div>
              <div className="stat-lbl">Creator Shortlist Delivery</div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Interactive Brief Submission Form */}
      <section id="brief-form" className="form-section">
        <div className="section-inner">
          <div className="form-card-container">
            <div className="section-header" style={{ marginBottom: '1.5rem' }}>
              <span className="section-tag">Direct Brand Onboarding</span>
              <h2 className="section-heading">Tell Us Your Influencer Requirements</h2>
              <p className="section-desc">
                Fill out the quick brief below. Our creator strategy team will review your specifications and send a curated creator roster within 48 hours.
              </p>
            </div>

            {submitted && (
              <div className="form-success-banner">
                🎉 Thank you! Your influencer requirement has been received. Our creator strategy lead will contact you within 24 hours with custom creator recommendations.
              </div>
            )}

            {errorMsg && (
              <div style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#991b1b', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', textAlign: 'center' }}>
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="brandName">Brand / Company Name *</label>
                  <input
                    type="text"
                    id="brandName"
                    name="brandName"
                    className="form-input"
                    placeholder="e.g. Acme Lifestyle"
                    value={formData.brandName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contactName">Your Name &amp; Designation *</label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    className="form-input"
                    placeholder="e.g. Priya Sharma (Marketing Lead)"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Official Corporate Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="e.g. priya@acme.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="category">Brand Niche / Category *</label>
                  <select
                    id="category"
                    name="category"
                    className="form-select"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="FMCG & D2C">FMCG &amp; Food / Beverage</option>
                    <option value="Beauty & Skincare">Beauty, Cosmetics &amp; Skincare</option>
                    <option value="Fashion & Apparel">Fashion, Apparel &amp; Accessories</option>
                    <option value="Consumer Tech & Electronics">Consumer Tech &amp; Gadgets</option>
                    <option value="Health & Fitness">Health, Nutrition &amp; Fitness</option>
                    <option value="Fintech & BFSI">Fintech, Crypto &amp; Finance</option>
                    <option value="Travel & Hospitality">Travel, Hotels &amp; Hospitality</option>
                    <option value="Automotive">Automotive &amp; Mobility</option>
                    <option value="Other">Other Category</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="tierNeeded">Target Influencer Tier *</label>
                  <select
                    id="tierNeeded"
                    name="tierNeeded"
                    className="form-select"
                    value={formData.tierNeeded}
                    onChange={handleChange}
                    required
                  >
                    <option value="Multi-Tier Mix (Recommended)">Multi-Tier Mix (Micro + Macro Combined)</option>
                    <option value="Micro Influencers (10K - 100K)">Micro Influencers (High Engagement)</option>
                    <option value="Nano Influencers (1K - 10K)">Nano Influencers (Grassroots Viral)</option>
                    <option value="Macro Influencers (100K - 1M)">Macro Influencers (Broad Reach)</option>
                    <option value="Celebrity & Mega KOLs (1M+)">Celebrity &amp; Mega KOLs</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="budget">Estimated Campaign Budget</label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    className="form-input"
                    placeholder="e.g. ₹2 Lakhs - ₹5 Lakhs / Flexible"
                    value={formData.budget}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message">Campaign Goals &amp; Specific Deliverables Needed</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="form-textarea"
                    placeholder="Briefly describe what you want to achieve (e.g. Instagram Reels, product unboxing, YouTube integration, website traffic)..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="form-group full-width" style={{ marginTop: '0.5rem', textAlign: 'center' }}>
                  <button type="submit" className="btn-primary-inf" style={{ width: '100%', justifyContent: 'center' }} disabled={submitting}>
                    {submitting ? 'Submitting Brief...' : 'Submit Campaign Brief & Receive Creator Roster'}
                  </button>
                  <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.75rem' }}>
                    🔒 We respect your privacy. No spam. You will also discover creators in our <Link to="/influencers-marketplace" style={{ color: '#d20c0c' }}>Influencer Marketplace</Link>.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Creator Tiers Section */}
      <section className="content-section bg-light">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Tiered Creator Strategy</span>
            <h2 className="section-heading">Influencer Tiers Built for Every Objective</h2>
            <p className="section-desc">
              We deploy the right mix of creator tiers to build top-of-mind awareness, social proof, and direct conversions.
            </p>
          </div>

          <div className="tier-grid">
            <div className="tier-card">
              <span className="tier-badge">Authenticity First</span>
              <h3>Nano Creators</h3>
              <div className="tier-followers">1K – 10K Followers</div>
              <p>
                Hyper-niche community trust with staggering 8%+ engagement rates. Perfect for hyper-localized sampling, grassroots word-of-mouth, and credible review generation.
              </p>
            </div>

            <div className="tier-card">
              <span className="tier-badge">Highest ROI</span>
              <h3>Micro Creators</h3>
              <div className="tier-followers">10K – 100K Followers</div>
              <p>
                The sweet spot for performance marketing. Dedicated followers who trust their recommendations, driving direct purchases, D2C conversions, and app downloads.
              </p>
            </div>

            <div className="tier-card">
              <span className="tier-badge">Mass Velocity</span>
              <h3>Macro Creators</h3>
              <div className="tier-followers">100K – 1M Followers</div>
              <p>
                Scale brand awareness rapidly with professional content creators who set cultural trends, produce cinematic Reels, and reach hundreds of thousands of views.
              </p>
            </div>

            <div className="tier-card">
              <span className="tier-badge">Prestige &amp; Recall</span>
              <h3>Celebrity &amp; KOLs</h3>
              <div className="tier-followers">1M+ Followers</div>
              <p>
                Household names, movie stars, sports icons, and prominent digital leaders that grant your brand instant industry authority, national prestige, and viral momentum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="content-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Full-Service Agency</span>
            <h2 className="section-heading">How Sociapa Manages Your Creator Campaign</h2>
            <p className="section-desc">
              Say goodbye to endless DMs, contract delays, and missing deliverables. We handle everything end-to-end.
            </p>
          </div>

          <div className="workflow-grid">
            <div className="workflow-card">
              <div className="workflow-num">01</div>
              <h3>Data-Driven Matchmaking</h3>
              <p>
                We audit creator audience quality, demographics, age split, and genuine engagement to ensure 100% brand-fit.
              </p>
            </div>

            <div className="workflow-card">
              <div className="workflow-num">02</div>
              <h3>Contracts &amp; Negotiations</h3>
              <p>
                We handle legal contracts, exclusivity clauses, deliverable timelines, and secure usage rights for digital whitelisting.
              </p>
            </div>

            <div className="workflow-card">
              <div className="workflow-num">03</div>
              <h3>Creative Brief &amp; Direction</h3>
              <p>
                Our creative directors write compelling storyboards and briefs that let creators express authentic passion while preserving brand messaging.
              </p>
            </div>

            <div className="workflow-card">
              <div className="workflow-num">04</div>
              <h3>Product Seeding &amp; Logistics</h3>
              <p>
                Coupled with our <a href="/product-unboxing-experience" className="seo-interlink">product unboxing experience design</a>, we package and ship your products securely to creator doorsteps.
              </p>
            </div>

            <div className="workflow-card">
              <div className="workflow-num">05</div>
              <h3>Quality Review &amp; Publishing</h3>
              <p>
                Every video draft and caption is reviewed and approved by our quality team before going live on Instagram, YouTube, or LinkedIn.
              </p>
            </div>

            <div className="workflow-card">
              <div className="workflow-num">06</div>
              <h3>Amplification &amp; Analytics</h3>
              <p>
                We repurpose top-performing creator reels into high-converting Meta ads backed by our <a href="/best-social-media-marketing-agency-india" className="seo-interlink">social media agency</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="content-section bg-light">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Got Questions?</span>
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p className="section-desc">
              Everything you need to know about partnering with creators through Sociapa.
            </p>
          </div>

          <div className="faq-container">
            {faqsData.map((faq, idx) => (
              <div key={idx} className={`faq-item ${openFaq === idx ? 'active' : ''}`}>
                <button
                  className="faq-trigger"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={openFaq === idx}
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon">+</span>
                </button>
                {openFaq === idx && (
                  <div className="faq-body">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Other Services Carousel */}
      <OtherServicesSlider />

      {/* Bottom CTA Banner */}
      <section className="bottom-cta-banner">
        <div className="section-inner">
          <h2>Ready to Launch a High-ROI Influencer Campaign?</h2>
          <p>
            Connect with our dedicated influencer specialists today. We will curate the ideal creator squad and deliver a customized activation proposal within 48 hours.
          </p>
          <a href="#brief-form" className="btn-primary-inf">
            Submit Your Brand Brief Now
            <span>&rarr;</span>
          </a>
        </div>
      </section>
    </div>
  );
}
