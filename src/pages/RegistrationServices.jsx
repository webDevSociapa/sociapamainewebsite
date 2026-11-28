import React, { useState, useEffect } from 'react';
import OtherServicesSlider from '../components/OtherServicesSlider';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './RegistrationServices.css';


const faqsData = [
  {
    "q": "1. What registration services does Sociapa provide?",
    "a": "<p>We assist businesses with GST Registration, MSME (Udyam) Registration, Trademark Registration, FSSAI Registration, and other essential business compliance services.</p>"
  },
  {
    "q": "2. Why are business registrations important?",
    "a": "<p>Business registrations help organisations operate legally, access government benefits, improve credibility, protect intellectual property, and comply with regulatory requirements.</p>"
  },
  {
    "q": "3. Which registration is required for a new business?",
    "a": "<p>The required registrations depend on your business type, industry, turnover, and operations. Our experts can help identify the registrations applicable to your business.</p>"
  },
  {
    "q": "4. Can Sociapa handle the complete registration process?",
    "a": "<p>Yes. Our team manages the entire process, from documentation and application filing to follow-ups and approval support.</p>"
  },
  {
    "q": "5. How long does the registration process take?",
    "a": "<p>Timelines vary depending on the type of registration and government processing requirements. Our team ensures the process is completed as efficiently as possible.</p>"
  },
  {
    "q": "6. What is GST registration?",
    "a": "<p>GST registration is the process of registering a business under the Goods and Services Tax system, allowing it to collect and remit GST legally.</p>"
  },
  {
    "q": "7. Can you help with GST registration and compliance?",
    "a": "<p>Yes. We assist with GST registration, documentation, and guidance related to GST compliance requirements.</p>"
  },
  {
    "q": "8. What are the benefits of MSME registration?",
    "a": "<p>MSMEs can access government schemes, easier loan approvals, lower interest rates, tender benefits, subsidies, and financial support programmes.</p>"
  },
  {
    "q": "9. Can startups apply for MSME registration?",
    "a": "<p>Yes. Eligible startups and small businesses can apply for MSME registration to avail government benefits and support schemes.</p>"
  },
  {
    "q": "10. Why should I register my trademark?",
    "a": "<p>Trademark registration protects your <a href='/brand-identity-design' class='seo-interlink'>brand identity</a>, prevents unauthorised use, and gives you exclusive legal rights over your <a href='/brand-strategy' class='seo-interlink'>brand name and logo</a>.</p>"
  }
];


export default function RegistrationServices() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);
  const base = import.meta.env.BASE_URL || '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="registration-services-page">

      <Helmet>
        <title>GST, MSME, TRADEMARK and FSSAI Registration Services in Noida &amp; Delhi NCR, India - Sociapa</title>
        <meta name="description" content="Registration Services in Noida & Delhi NCR-To make registration simple and easy process Sociapa, will assist you in every step . Get 100% support and expert assistance." />
        <meta name="keywords" content="Registration Services" />
        <link rel="canonical" href="https://sociapa.com/gst-company-registration-services" />
        <meta property="og:title" content="GST, MSME, TRADEMARK and FSSAI Registration Services in Noida & Delhi NCR, India - Sociapa" />
        <meta property="og:description" content="Registration Services in Noida & Delhi NCR-To make registration simple and easy process Sociapa, will assist you in every step . Get 100% support and expert assistance." />
        <meta property="og:url" content="https://sociapa.com/gst-company-registration-services" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="SOCIAPA" />
        <meta property="og:image" content="https://sociapa.com/images/sociapa-og-preview.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sociapa" />
        <meta name="twitter:title" content="GST, MSME, TRADEMARK and FSSAI Registration Services in Noida & Delhi NCR, India - Sociapa" />
        <meta name="twitter:description" content="Registration Services in Noida & Delhi NCR-To make registration simple and easy process Sociapa, will assist you in every step . Get 100% support and expert assistance." />
        <meta name="twitter:image" content="https://sociapa.com/images/sociapa-og-preview.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqsData.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": (faq.a || '').replace(/<[^>]*>/g, '')
            }
          }))
        })}</script>
        {/* BreadcrumbList Schema - Required by SOCIAPA (1).docx */}
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://sociapa.com/"},{"@type":"ListItem","position":2,"name":"Services","item":"https://sociapa.com/our-services"},{"@type":"ListItem","position":3,"name":"GST Company Registration Services India | Sociapa","item":"https://sociapa.com/gst-company-registration-services"}]})}</script>
      </Helmet>
      <div className="serInsideBnr">
        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
          Company Registration, Trademark &amp; GST Compliance Services India - Sociapa
        </h1>
        <div className="row">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={`${base}images/registration-service-banner-mobile.jpeg`} />
            <img
              src={`${base}images/registration-service-banner.webp`}
              alt="Registration Banner"
              className="responsive-img w-100" />
          </picture>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="stats-bar">
        <div className="stats-inner">
          <div className="stat-item">
            <div className="stat-num">98%</div>
            <div className="stat-label">First-Attempt Approval Rate</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">500+</div>
            <div className="stat-label">Registrations Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">200+</div>
            <div className="stat-label">Businesses Incorporated</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">8+</div>
            <div className="stat-label">Years of Compliance Expertise</div>
          </div>
        </div>
      </div>

      <section className="services-section">
        <div className="section-inner">
          <span className="section-tag">Registration Services</span>
          <h2 className="section-title">All the Registrations Your Brand Needs to Operate & Grow</h2>
          <p className="section-sub">We manage the complete documentation, filing, and follow-up process for every registration, allowing you to focus on growing your brand while Sociapa handles the compliance. </p>
          <div className="services-grid">

            <div className="svc-card">
              <div className="svc-card-top-bar">
                <div className="svc-icon">
                  <img
                    src={`${base}assets/images/services_icons/registration_service/Trademark Registration.png`}
                    alt="Trademark Registration"
                    width="60"
                    height="60"
                    style={{ width: '56px', height: '56px', objectFit: 'contain' }}
                    loading="lazy"
                  />
                </div>
                <span className="svc-card-step">01</span>
              </div>
              <h3>Trademark Registration</h3>
              <p>Protect your brand name, logo, and tagline with trademark registration. Sociapa manages the complete filing process, examination responses, and registry correspondence to help safeguard your intellectual property.</p>
              <div className="service-tags">
                <span>Brand Name</span>
                <span>Logo</span>
                <span>Tagline</span>
                <span>Registry Filing</span>
              </div>
              <div className="svc-card-footer">
                <Link to="/contact-us" className="svc-card-action-btn">
                  <span>Register Trademark</span>
                  <svg className="svc-arrow-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 3.33334L12.6667 8L8 12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="svc-card">
              <div className="svc-card-top-bar">
                <div className="svc-icon">
                  <img
                    src={`${base}assets/images/services_icons/registration_service/FSSAI Registration & License.png`}
                    alt="FSSAI Registration & License"
                    width="60"
                    height="60"
                    style={{ width: '56px', height: '56px', objectFit: 'contain' }}
                    loading="lazy"
                  />
                </div>
                <span className="svc-card-step">02</span>
              </div>
              <h3>FSSAI Registration & License</h3>
              <p>Sociapa provides FSSAI Basic Registration, State Licence, and Central Licence services, helping food businesses meet regulatory and food safety compliance requirements.</p>
              <div className="service-tags">
                <span>Basic Registration</span>
                <span>State Licence</span>
                <span>Central Licence</span>
                <span>Food Safety</span>
              </div>
              <div className="svc-card-footer">
                <Link to="/contact-us" className="svc-card-action-btn">
                  <span>Get FSSAI License</span>
                  <svg className="svc-arrow-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 3.33334L12.6667 8L8 12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="svc-card">
              <div className="svc-card-top-bar">
                <div className="svc-icon">
                  <img
                    src={`${base}assets/images/services_icons/registration_service/GST Registration.png`}
                    alt="GST Registration"
                    width="60"
                    height="60"
                    style={{ width: '56px', height: '56px', objectFit: 'contain' }}
                    loading="lazy"
                  />
                </div>
                <span className="svc-card-step">03</span>
              </div>
              <h3>GST Registration</h3>
              <p>GST registration services for new businesses and eCommerce sellers, including multi-state registrations, composition scheme guidance, and GST return filing support.</p>
              <div className="service-tags">
                <span>GST Registration</span>
                <span>eCommerce GST</span>
                <span>Multi-State</span>
                <span>GST Returns</span>
              </div>
              <div className="svc-card-footer">
                <Link to="/contact-us" className="svc-card-action-btn">
                  <span>Register for GST</span>
                  <svg className="svc-arrow-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 3.33334L12.6667 8L8 12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="svc-card">
              <div className="svc-card-top-bar">
                <div className="svc-icon">
                  <img
                    src={`${base}assets/images/services_icons/registration_service/Company Registration.png`}
                    alt="Company Registration"
                    width="60"
                    height="60"
                    style={{ width: '56px', height: '56px', objectFit: 'contain' }}
                    loading="lazy"
                  />
                </div>
                <span className="svc-card-step">04</span>
              </div>
              <h3>Company Registration</h3>
              <p>Company incorporation services for Private Limited Companies, LLPs, OPCs, and Partnership Firms, including MCA filing, DIN/DSC issuance, MOA/AOA drafting, and incorporation certificates.</p>
              <div className="service-tags">
                <span>Private Limited</span>
                <span>LLP</span>
                <span>OPC</span>
                <span>MCA Filing</span>
              </div>
              <div className="svc-card-footer">
                <Link to="/contact-us" className="svc-card-action-btn">
                  <span>Incorporate Company</span>
                  <svg className="svc-arrow-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 3.33334L12.6667 8L8 12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="svc-card">
              <div className="svc-card-top-bar">
                <div className="svc-icon">
                  <img
                    src={`${base}assets/images/services_icons/registration_service/ISO Certification.png`}
                    alt="ISO Certification"
                    width="60"
                    height="60"
                    style={{ width: '56px', height: '56px', objectFit: 'contain' }}
                    loading="lazy"
                  />
                </div>
                <span className="svc-card-step">05</span>
              </div>
              <h3>ISO Certification</h3>
              <p>Support for ISO 9001, ISO 22000, ISO 14001, and FSSC 22000 certification, including documentation, gap analysis, and coordination with certification bodies.</p>
              <div className="service-tags">
                <span>ISO 9001</span>
                <span>ISO 22000</span>
                <span>ISO 14001</span>
                <span>FSSC 22000</span>
              </div>
              <div className="svc-card-footer">
                <Link to="/contact-us" className="svc-card-action-btn">
                  <span>Get Certified</span>
                  <svg className="svc-arrow-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 3.33334L12.6667 8L8 12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="svc-card">
              <div className="svc-card-top-bar">
                <div className="svc-icon">
                  <img
                    src={`${base}assets/images/services_icons/registration_service/Ongoing Compliance Management.png`}
                    alt="Ongoing Compliance Management"
                    width="60"
                    height="60"
                    style={{ width: '56px', height: '56px', objectFit: 'contain' }}
                    loading="lazy"
                  />
                </div>
                <span className="svc-card-step">06</span>
              </div>
              <h3>Ongoing Compliance Management</h3>
              <p>Proactive management of annual compliance, including ROC filings, trademark renewals, FSSAI renewals, GST returns, and other statutory requirements to keep your business compliant.</p>
              <div className="service-tags">
                <span>ROC Filings</span>
                <span>TM Renewal</span>
                <span>GST Returns</span>
                <span>Annual Compliance</span>
              </div>
              <div className="svc-card-footer">
                <Link to="/contact-us" className="svc-card-action-btn">
                  <span>Manage Compliance</span>
                  <svg className="svc-arrow-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 3.33334L12.6667 8L8 12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="tools-section">
        <div className="section-inner">
          <span className="section-tag">Registrations We Handle</span>
          <h2 className="section-title">Every Registration Your Business Needs</h2>
          <p className="section-sub">From startups to enterprises, Sociapa manages every registration and compliance requirement businesses need to operate and grow in India. </p>
          <div className="tools-grid">
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/registration_service/Trademark Registration.png`}
                  alt="Trademark (IPO)"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </span>
              <span>Trademark (IPO)</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/registration_service/FSSAI Registration & License.png`}
                  alt="FSSAI License"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </span>
              <span>FSSAI License</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/registration_service/GST Registration.png`}
                  alt="GST Registration"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </span>
              <span>GST Registration</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/registration_service/Company (MCA).png`}
                  alt="Company (MCA)"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </span>
              <span>Company (MCA)</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/registration_service/ISO Certification.png`}
                  alt="ISO Certification"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </span>
              <span>ISO Certification</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/registration_service/MSME  Udyam.png`}
                  alt="MSME / Udyam"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </span>
              <span>MSME / Udyam</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/registration_service/Import Export Code.png`}
                  alt="Import Export Code"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </span>
              <span>Import Export Code</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/registration_service/Shops & Est. Act.png`}
                  alt="Shops & Est. Act"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </span>
              <span>Shops & Est. Act</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/registration_service/copyright.png`}
                  alt="Copyright"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </span>
              <span>Copyright</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/registration_service/BIS Certification.png`}
                  alt="BIS Certification"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </span>
              <span>BIS Certification</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENT SUCCESS / PORTFOLIO SECTION (HIDDEN) ── */}
      <section className="portfolio-section d-none" style={{ display: 'none' }}>
        <div className="section-inner">
          <span className="section-tag">Client Success</span>
          <h2 className="section-title">Businesses We've Helped Register & Protect</h2>
          <p className="section-sub">Registration and compliance work completed for brands across FMCG, food, retail, and services sectors.</p>
          <div className="portfolio-grid">
            <div className="port-card">
              <div className="port-img">
                <img src={`${base}images/pansari200.png`} alt="Pansari Group" className="portfolio-logo" loading="lazy" />
              </div>
              <div className="port-info">
                <div className="port-tag">Trademark + FSSAI</div>
                <h4>Pansari Group — IP Protection</h4>
                <p>Full trademark portfolio registration across 12 classes and FSSAI Central License renewal managed for 200+ product range.</p>
              </div>
            </div>
            <div className="port-card">
              <div className="port-img">
                <img src={`${base}images/bonnClt.png`} alt="Bonn Breads" className="portfolio-logo" loading="lazy" />
              </div>
              <div className="port-info">
                <div className="port-tag">FSSAI + ISO 22000</div>
                <h4>Bonn Breads — Food Compliance</h4>
                <p>FSSAI State License upgrade to Central License and ISO 22000 Food Safety certification managed end-to-end.</p>
              </div>
            </div>
            <div className="port-card">
              <div className="port-img">
                <img src={`${base}images/snackpure-logo.png`} alt="Snack Pure" className="portfolio-logo" loading="lazy" />
              </div>
              <div className="port-info">
                <div className="port-tag">Company Incorporation</div>
                <h4>Snack Pure — D2C Setup</h4>
                <p>Private Limited incorporation, GST registration, eCommerce GST, trademark filing, and FSSAI registration completed in 21 days.</p>
              </div>
            </div>
            <div className="port-card">
              <div className="port-img">
                <img src={`${base}images/apisClt.png`} alt="APIS India" className="portfolio-logo" loading="lazy" />
              </div>
              <div className="port-info">
                <div className="port-tag">Multi-State Compliance</div>
                <h4>APIS India — National Rollout</h4>
                <p>Multi-state GST registrations, IEC (Import Export Code), and ongoing annual compliance managed for pan-India operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="section-inner">
          <span className="section-tag">Our Process</span>
          <h2 className="section-title">From Documents to Approval Without the Stress</h2>
          <p className="section-sub">We manage the complete compliance process, from documentation and filing to follow-ups and query resolution, so you don't have to deal with government portals.</p>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/registration_service/Requirements Review.png`}
                  alt="Requirements Review"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h4>Requirements Review</h4>
              <p>Understand your business type, activities, and applicable registration requirements</p>
            </div>
            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/registration_service/Document Checklist.png`}
                  alt="Document Checklist"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h4>Document Checklist</h4>
              <p>Clear list of required documents provided—we help you gather everything correctly</p>
            </div>
            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/registration_service/Application Preparation.png`}
                  alt="Application Preparation"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h4>Application Preparation</h4>
              <p>Forms drafted, documents reviewed, and application prepared for optimal approval</p>
            </div>
            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/registration_service/Filing & Submission.png`}
                  alt="Filing & Submission"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h4>Filing & Submission</h4>
              <p>Application filed on the relevant government portal with full compliance</p>
            </div>
            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/registration_service/Query Response.png`}
                  alt="Query Response"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h4>Query Response</h4>
              <p>All examination queries and objections handled promptly by our team</p>
            </div>
            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/registration_service/Certificate Delivery.png`}
                  alt="Certificate Delivery"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h4>Certificate Delivery</h4>
              <p>Registration certificate delivered with ongoing renewal reminders and compliance calendar</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="section-inner">
          <span className="section-tag section-tag-white">Why Sociapa Registration</span>
          <h2 className="section-title">98% First-Attempt Approval—The Difference Expertise Makes</h2>
          <p className="section-sub">Most registration delays and rejections are avoidable with the right preparation. Our track record speaks for itself.</p>
          <div className="why-grid">

            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/registration_service/98-percent-first-time-approval.png`}
                  alt="98% First-Time Approval"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h4>98% First-Time Approval</h4>
              <p>Rigorous pre-submission reviews help minimise errors before filing, contributing to Sociapa's 98% first-attempt approval rate and reducing delays.</p>
            </div>

            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/registration_service/Fast Turnaround.png`}
                  alt="Fast Turnaround"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h4>Fast Turnaround</h4>
              <p>Fast and efficient registration support, with streamlined processes for company incorporation, GST registration, FSSAI licensing, and other business compliance requirements.</p>
            </div>

            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/registration_service/Single Point of Contact.png`}
                  alt="Single Point of Contact"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h4>Single Point of Contact</h4>
              <p>A dedicated account manager oversees all your registrations and compliance requirements, ensuring clear communication and timely renewals.</p>
            </div>

            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/registration_service/Proactive Renewal Management.png`}
                  alt="Proactive Renewal Management"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h4>Proactive Renewal Management</h4>
              <p>We proactively track renewal deadlines and provide timely reminders, helping you stay compliant with FSSAI, trademark, ROC, and other statutory requirements.</p>
            </div>

            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/registration_service/Complete Confidentiality.png`}
                  alt="Complete Confidentiality"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h4>Complete Confidentiality</h4>
              <p>All business documents are handled with strict confidentiality and securely managed to protect your sensitive information throughout the compliance process.</p>
            </div>

            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/registration_service/Transparent Pricing.png`}
                  alt="Transparent Pricing"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h4>Transparent Pricing</h4>
              <p>Transparent, fixed-fee pricing with no hidden charges, so you know exactly what you'll pay before the process begins.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── CLIENT STORIES / TESTIMONIALS SECTION (HIDDEN) ── */}
      <section className="testi-section d-none" style={{ display: 'none' }}>
        <div className="section-inner">
          <span className="section-tag">Client Stories</span>
          <h2 className="section-title">Businesses We've Helped Stay Compliant & Protected</h2>
          <div className="testi-grid">
            <div className="testi-card">
              <div className="stars">★★★★★</div>
              <blockquote>"FSSAI Central License and trademark registration for 12 classes—all approved first time. Sociapa's preparation was so thorough that we received zero objections from any authority."</blockquote>
              <div className="testi-author"><div className="avatar">PG</div><div><strong>Rohit Agarwal</strong><span>Brand Head, Pansari Group</span></div></div>
            </div>
            <div className="testi-card">
              <div className="stars">★★★★★</div>
              <blockquote>"Full company setup—Pvt. Ltd. incorporation, GST, trademark, and FSSAI—all done in 21 days. Starting a food business felt overwhelming until Sociapa handled everything."</blockquote>
              <div className="testi-author"><div className="avatar">D2</div><div><strong>Priya Sharma</strong><span>Founder, D2C Food Brand</span></div></div>
            </div>
            <div className="testi-card">
              <div className="stars">★★★★★</div>
              <blockquote>"ISO 22000 certification achieved in 4 months—the team handled all documentation, gap analysis, and audit preparation. We couldn't have done this without Sociapa's support."</blockquote>
              <div className="testi-author"><div className="avatar">BB</div><div><strong>Manish Kapoor</strong><span>Quality Director, Bonn Breads</span></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section faq-section-padded" id="faq">
        <div className="section-inner">
          <span className="section-tag">FAQ</span>
          <h2 className="section-title">Business Registration <span className="text-brand-red">Questions Answered</span></h2>

          <div className="faq-list">
            {faqsData.map((faq, idx) => (
              <div key={idx} className={`faq-item ${openFaq === idx ? 'open' : ''}`}>
                <div className="faq-q" onClick={() => toggleFaq(idx)}>
                  {faq.q}
                  <span className="faq-icon">{openFaq === idx ? '-' : '+'}</span>
                </div>
                <div className="faq-a" dangerouslySetInnerHTML={{ __html: faq.a }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Other Services Carousel */}
      <OtherServicesSlider />

      <section className="cta-section">
        <div className="section-inner section-inner-narrow">
          <h2>Ready to Get Your Business Fully Registered & Compliant?</h2>
          <p>Tell us what registrations you need and get a fixed-fee quote with timeline estimate within 24 hours.</p>
          <Link to="/contact-us" className="btn-primary">Get a Registration Quote</Link>
        </div>
      </section>
    </div>
  );
}
