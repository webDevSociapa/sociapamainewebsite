import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './RegistrationServices.css';


const faqsData = [
  {
    "q": "What registration services does Sociapa provide?",
    "a": "<p>We assist businesses with GST Registration, MSME (Udyam) Registration, Trademark Registration, FSSAI Registration, and other essential business compliance services.</p>"
  },
  {
    "q": "Why are business registrations important?",
    "a": "<p>Business registrations help organisations operate legally, access government benefits, improve credibility, protect intellectual property, and comply with regulatory requirements.</p>"
  },
  {
    "q": "Which registration is required for a new business?",
    "a": "<p>The required registrations depend on your business type, industry, turnover, and operations. Our experts can help identify the registrations applicable to your business.</p>"
  },
  {
    "q": "Can Sociapa handle the complete registration process?",
    "a": "<p>Yes. Our team manages the entire process, from documentation and application filing to follow-ups and approval support.</p>"
  },
  {
    "q": "How long does the registration process take?",
    "a": "<p>Timelines vary depending on the type of registration and government processing requirements. Our team ensures the process is completed as efficiently as possible.</p>"
  },
  {
    "q": "What is GST registration?",
    "a": "<p>GST registration is the process of registering a business under the Goods and Services Tax system, allowing it to collect and remit GST legally.</p>"
  },
  {
    "q": "Can you help with GST registration and compliance?",
    "a": "<p>Yes. We assist with GST registration, documentation, and guidance related to GST compliance requirements.</p>"
  },
  {
    "q": "What are the benefits of MSME registration?",
    "a": "<p>MSMEs can access government schemes, easier loan approvals, lower interest rates, tender benefits, subsidies, and financial support programmes.</p>"
  },
  {
    "q": "Can startups apply for MSME registration?",
    "a": "<p>Yes. Eligible startups and small businesses can apply for MSME registration to avail government benefits and support schemes.</p>"
  },
  {
    "q": "Why should I register my trademark?",
    "a": "<p>Trademark registration protects your brand identity, prevents unauthorised use, and gives you exclusive rights over your brand name and logo.</p>"
  }
];


export default function RegistrationServices() {
    const [openFaq, setOpenFaq] = useState(null);
    const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            
      <Helmet>
        <title>GST, MSME, TRADEMARK and FSSAI Registration Services in Noida &amp; Delhi NCR, India - Sociapa</title>
        <meta name="description" content="Registration Services in Noida & Delhi NCR-To make registration simple and easy process  Sociapa, will assist you in every step . Get 100% support and expert assistance." />
        <meta name="keywords" content="Registration Services" />
        <link rel="canonical" href="https://www.sociapa.com/registration-services/" />
        <meta property="og:title" content="GST, MSME, TRADEMARK and FSSAI Registration Services in Noida & Delhi NCR, India - Sociapa" />
        <meta property="og:description" content="Registration Services in Noida & Delhi NCR-To make registration simple and easy process  Sociapa, will assist you in every step . Get 100% support and expert assistance." />
        <meta property="og:url" content="https://www.sociapa.com/registration-services/" />
      </Helmet>
<div className="serInsideBnr">
  <div className="row">
    <picture>
        
        <source
            media="(max-width: 767px)"
            srcset="/sociapareact/images/registration-service-banner-mobile.jpeg" />

        
        <img
            src="/sociapareact/images/registration-service-banner.jpeg"
            alt="Registration Banner"
            className="responsive-img w-100" />
    </picture>
  </div>
</div>
<section className="registrationservices-hero">
  <div className="registrationservices-hero-inner">
    <div>
      <div className="registrationservices-hero-badge">📋 Trademark · FSSAI · GST · Company Registration · ISO</div>
      <h1>Business Registration & Compliance <em>Made Simple</em></h1>
      <p className="registrationservices-hero-desc">Sociapa provides end-to-end legal and compliance services, including company registration, trademark protection, FSSAI licensing, and regulatory support, helping brands launch, operate, and grow with confidence across India.</p>
      <div className="registrationservices-hero-btns">
        <a href="/contact" className="btn-primary">Start My Registration</a>
        <a href="/contact" className="btn-outline">Talk to Our Team</a>
      </div>
    </div>
    <div className="registrationservices-hero-visual">
      <img src="/sociapareact/images/registration-service-left.jpeg" alt="registration-left-img" className="registrationservices-hero-img" />
    </div>
  </div>
</section>

<div className="stats-bar">
  <div className="stats-inner">
    <div><span className="stat-num">98%</span><div className="stat-lbl">First-Attempt Approval Rate</div></div>
    <div><span className="stat-num">500+</span><div className="stat-lbl">Registrations Completed</div></div>
    <div><span className="stat-num">200+</span><div className="stat-lbl">Businesses Incorporated</div></div>
    <div><span className="stat-num">8+</span><div className="stat-lbl">Years of Compliance Expertise</div></div>
  </div>
</div>

<section className="services-section">
  <div className="section-inner">
    <span className="section-tag">Registration Services</span>
    <h2 className="section-title">All the Registrations Your Brand Needs to Operate & Grow</h2>
    <p className="section-sub">We manage the complete documentation, filing, and follow-up process for every registration, allowing you to focus on growing your brand while Sociapa handles the compliance. </p>
    <div className="services-grid">

        
        <div className="svc-card">
            <div className="svc-icon">™️</div>
            <h3>Trademark Registration</h3>
            <p>Protect your brand name, logo, and tagline with trademark registration. Sociapa manages the complete filing process, examination responses, and registry correspondence to help safeguard your intellectual property.</p>
            <div className="service-tags">
                <span>Brand Name</span>
                <span>Logo</span>
                <span>Tagline</span>
                <span>Registry Filing</span>
            </div>
        </div>

        
        <div className="svc-card">
            <div className="svc-icon">🍽️</div>
            <h3>FSSAI Registration & License</h3>
            <p>Sociapa provides FSSAI Basic Registration, State Licence, and Central Licence services, helping food businesses meet regulatory and food safety compliance requirements.</p>
            <div className="service-tags">
                <span>Basic Registration</span>
                <span>State Licence</span>
                <span>Central Licence</span>
                <span>Food Safety</span>
            </div>
        </div>

        
        <div className="svc-card">
            <div className="svc-icon">📊</div>
            <h3>GST Registration</h3>
            <p>GST registration services for new businesses and eCommerce sellers, including multi-state registrations, composition scheme guidance, and GST return filing support.</p>
            <div className="service-tags">
                <span>GST Registration</span>
                <span>eCommerce GST</span>
                <span>Multi-State</span>
                <span>GST Returns</span>
            </div>
        </div>

        
        <div className="svc-card">
            <div className="svc-icon">🏢</div>
            <h3>Company Registration</h3>
            <p>Company incorporation services for Private Limited Companies, LLPs, OPCs, and Partnership Firms, including MCA filing, DIN/DSC issuance, MOA/AOA drafting, and incorporation certificates.</p>
            <div className="service-tags">
                <span>Private Limited</span>
                <span>LLP</span>
                <span>OPC</span>
                <span>MCA Filing</span>
            </div>
        </div>

        
        <div className="svc-card">
            <div className="svc-icon">🏆</div>
            <h3>ISO Certification</h3>
            <p>Support for ISO 9001, ISO 22000, ISO 14001, and FSSC 22000 certification, including documentation, gap analysis, and coordination with certification bodies.</p>
            <div className="service-tags">
                <span>ISO 9001</span>
                <span>ISO 22000</span>
                <span>ISO 14001</span>
                <span>FSSC 22000</span>
            </div>
        </div>

        
        <div className="svc-card">
            <div className="svc-icon">✅</div>
            <h3>Ongoing Compliance Management</h3>
            <p>Proactive management of annual compliance, including ROC filings, trademark renewals, FSSAI renewals, GST returns, and other statutory requirements to keep your business compliant.</p>
            <div className="service-tags">
                <span>ROC Filings</span>
                <span>TM Renewal</span>
                <span>GST Returns</span>
                <span>Annual Compliance</span>
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
      <div className="tool-chip"><span className="tool-icon">™️</span>Trademark (IPO)</div>
      <div className="tool-chip"><span className="tool-icon">🍽️</span>FSSAI License</div>
      <div className="tool-chip"><span className="tool-icon">📊</span>GST Registration</div>
      <div className="tool-chip"><span className="tool-icon">🏢</span>Company (MCA)</div>
      <div className="tool-chip"><span className="tool-icon">🏆</span>ISO Certification</div>
      <div className="tool-chip"><span className="tool-icon">🌿</span>MSME / Udyam</div>
      <div className="tool-chip"><span className="tool-icon">🏭</span>Import Export Code</div>
      <div className="tool-chip"><span className="tool-icon">📝</span>Shops & Est. Act</div>
      <div className="tool-chip"><span className="tool-icon">©️</span>Copyright</div>
      <div className="tool-chip"><span className="tool-icon">🔬</span>BIS Certification</div>
    </div>
  </div>
</section>

<section className="portfolio-section">
  <div className="section-inner">
    <span className="section-tag">Client Success</span>
    <h2 className="section-title">Businesses We've Helped Register & Protect</h2>
    <p className="section-sub">Registration and compliance work completed for brands across FMCG, food, retail, and services sectors.</p>
    <div className="portfolio-grid">
      <div className="port-card">
        <div className="port-img"><span className="ph-icon">🌾</span></div>
        <div className="port-info">
          <div className="port-tag">Trademark + FSSAI</div>
          <h4>Pansari Group — IP Protection</h4>
          <p>Full trademark portfolio registration across 12 classes and FSSAI Central License renewal managed for 200+ product range.</p>
        </div>
      </div>
      <div className="port-card">
        <div className="port-img"><span className="ph-icon">🍞</span></div>
        <div className="port-info">
          <div className="port-tag">FSSAI + ISO 22000</div>
          <h4>Bonn Breads — Food Compliance</h4>
          <p>FSSAI State License upgrade to Central License and ISO 22000 Food Safety certification managed end-to-end.</p>
        </div>
      </div>
      <div className="port-card">
        <div className="port-img"><span className="ph-icon">🚀</span></div>
        <div className="port-info">
          <div className="port-tag">Company Incorporation</div>
          <h4>D2C Brand — Full Setup</h4>
          <p>Private Limited incorporation, GST registration, eCommerce GST, trademark filing, and FSSAI registration completed in 21 days.</p>
        </div>
      </div>
      <div className="port-card">
        <div className="port-img"><span className="ph-icon">🏭</span></div>
        <div className="port-info">
          <div className="port-tag">Multi-State Compliance</div>
          <h4>FMCG Brand — National Rollout</h4>
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
      <div className="process-step"><div className="step-num">1</div><h4>Requirements Review</h4><p>Understand your business type, activities, and applicable registration requirements</p></div>
      <div className="process-step"><div className="step-num">2</div><h4>Document Checklist</h4><p>Clear list of required documents provided—we help you gather everything correctly</p></div>
      <div className="process-step"><div className="step-num">3</div><h4>Application Preparation</h4><p>Forms drafted, documents reviewed, and application prepared for optimal approval</p></div>
      <div className="process-step"><div className="step-num">4</div><h4>Filing & Submission</h4><p>Application filed on the relevant government portal with full compliance</p></div>
      <div className="process-step"><div className="step-num">5</div><h4>Query Response</h4><p>All examination queries and objections handled promptly by our team</p></div>
      <div className="process-step"><div className="step-num">6</div><h4>Certificate Delivery</h4><p>Registration certificate delivered with ongoing renewal reminders and compliance calendar</p></div>
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
            <div className="w-icon">✅</div>
            <h4>98% First-Time Approval</h4>
            <p>Rigorous pre-submission reviews help minimise errors before filing, contributing to Sociapa's 98% first-attempt approval rate and reducing delays.</p>
        </div>

        <div className="why-card">
            <div className="w-icon">⚡</div>
            <h4>Fast Turnaround</h4>
            <p>Fast and efficient registration support, with streamlined processes for company incorporation, GST registration, FSSAI licensing, and other business compliance requirements.</p>
        </div>

        <div className="why-card">
            <div className="w-icon">🤝</div>
            <h4>Single Point of Contact</h4>
            <p>A dedicated account manager oversees all your registrations and compliance requirements, ensuring clear communication and timely renewals.</p>
        </div>

        <div className="why-card">
            <div className="w-icon">📅</div>
            <h4>Proactive Renewal Management</h4>
            <p>We proactively track renewal deadlines and provide timely reminders, helping you stay compliant with FSSAI, trademark, ROC, and other statutory requirements.</p>
        </div>

        <div className="why-card">
            <div className="w-icon">🔒</div>
            <h4>Complete Confidentiality</h4>
            <p>All business documents are handled with strict confidentiality and securely managed to protect your sensitive information throughout the compliance process.</p>
        </div>

        <div className="why-card">
            <div className="w-icon">💰</div>
            <h4>Transparent Pricing</h4>
            <p>Transparent, fixed-fee pricing with no hidden charges, so you know exactly what you'll pay before the process begins.</p>
        </div>

    </div>
  </div>
</section>

<section className="testi-section">
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

<section className="cta-section">
  <div className="section-inner section-inner-narrow">
    <h2>Ready to Get Your Business Fully Registered & Compliant?</h2>
    <p>Tell us what registrations you need and get a fixed-fee quote with timeline estimate within 24 hours.</p>
    <a href="/contact" className="btn-primary">Get a Registration Quote</a>
  </div>
</section>


        </>
    );
}
