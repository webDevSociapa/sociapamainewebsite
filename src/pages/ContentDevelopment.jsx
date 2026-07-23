import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './ContentDevelopment.css';


const faqsData = [
  {
    "q": "What types of content does Sociapa create?",
    "a": "<p>We create SEO-optimised blogs, website copy, landing pages, social media content, email copy, video scripts, whitepapers, case studies, and thought leadership content.</p>"
  },
  {
    "q": "Is your content SEO optimised?",
    "a": "<p>Yes. Every piece of content is researched for search intent and optimised to improve keyword rankings, organic traffic, and search visibility.</p>"
  },
  {
    "q": "Do you write website copy?",
    "a": "<p>Yes. We write conversion-focused website copy for home pages, service pages, landing pages, about pages, and other website sections.</p>"
  },
  {
    "q": "Do you create content for social media?",
    "a": "<p>Yes. We create platform-specific captions, hashtag strategies, and ad copy for Instagram, Facebook, LinkedIn, and X.</p>"
  },
  {
    "q": "Can you write content in multiple languages?",
    "a": "<p>Yes. We produce content in English, Hindi, and regional languages to help brands connect with audiences across India.</p>"
  },
  {
    "q": "Do you create long-form thought leadership content?",
    "a": "<p>Yes. We develop whitepapers, case studies, and thought leadership content designed to build authority, trust, and B2B leads.</p>"
  },
  {
    "q": "How do you maintain content quality at scale?",
    "a": "<p>We follow structured editorial workflows that maintain consistent quality across high-volume monthly content production.</p>"
  },
  {
    "q": "Do you write content in our brand voice?",
    "a": "<p>Yes. We understand your brand voice before writing to ensure every piece of content is authentic and consistent.</p>"
  },
  {
    "q": "How do you measure content performance?",
    "a": "<p>We provide monthly reporting on keyword rankings, organic traffic, engagement, and content-driven leads to measure ROI.</p>"
  },
  {
    "q": "Do you repurpose content across multiple formats?",
    "a": "<p>Yes. We maximise every content asset by repurposing blogs into social posts, whitepapers into email campaigns, and scripts into articles to extend content value.</p>"
  }
];


export default function ContentDevelopment() {
    const [openFaq, setOpenFaq] = useState(null);
    const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            
      <Helmet>
        <title>Content Designing Service in Noida &amp; Delhi NCR- For innovative content ideas, contact Sociapa</title>
        <meta name="description" content="Looking for Content Marketing Agency in Noida & Delhi NCR? Connect with Sociapa for ROI oriented Content Marketing Services in India for Large Corporates, Brands & Startups." />
        <meta name="keywords" content="Digital Marketing" />
        <link rel="canonical" href="https://www.sociapa.com/content-designing/" />
        <meta property="og:title" content="Content Designing Service in Noida & Delhi NCR- For innovative content ideas, contact Sociapa" />
        <meta property="og:description" content="Looking for Content Marketing Agency in Noida & Delhi NCR? Connect with Sociapa for ROI oriented Content Marketing Services in India for Large Corporates, Brands & Startups." />
        <meta property="og:url" content="https://www.sociapa.com/content-designing/" />
      </Helmet>
<div className="serInsideBnr">
  <div className="row">
    <picture>
        
        <source
            media="(max-width: 767px)"
            srcset="/sociapareact/images/content-service-banner-mobile.jpeg" />

        
        <img src="/sociapareact/images/content-service-banner.jpeg" alt="pr-service-banner" className="responsive-img w-100" />
    </picture>
  </div>
</div>
<section className="contentdevelopment-hero">
  <div className="contentdevelopment-hero-inner">
    <div>
      <div className="contentdevelopment-hero-badge">✓ï¸ SEO Content · Blogs · Whitepapers · Scripts</div>
      <h1>Content That <em>Ranks, Resonates</em> & Converts</h1>
      <p className="contentdevelopment-hero-desc">SEO-optimised, brand-aligned content for blogs, website copy, social media, and marketing campaigns that attracts audiences and drives business growth. </p>
      <div className="contentdevelopment-hero-btns">
        <a href="/contact" className="btn-primary">Build My Content Strategy</a>
        <a href="/portfolio" className="btn-outline">See Content Samples</a>
      </div>
    </div>
    <div className="contentdevelopment-hero-visual">
      <img src="/sociapareact/images/content-left.jpeg" alt="video-production-left-img" className="contentdevelopment-hero-img" />
    </div>
  </div>
</section>

<div className="stats-bar">
  <div className="stats-inner">
    <div><span className="stat-num">5,000+</span><div className="stat-lbl">Content Pieces Delivered</div></div>
    <div><span className="stat-num">80+</span><div className="stat-lbl">Brand Voices Mastered</div></div>
    <div><span className="stat-num">3.2x</span><div className="stat-lbl">Avg. Organic Traffic Lift</div></div>
    <div><span className="stat-num">8+</span><div className="stat-lbl">Years of Content Excellence</div></div>
  </div>
</div>

<section className="services-section">
  <div className="section-inner">
    <span className="section-tag">Content Services</span>
    <h2 className="section-title">Every Word Working for Your Brand</h2>
    <p className="section-sub">From SEO-driven long-form articles to high-converting website copy—we produce content that builds authority, earns traffic, and drives action.</p>
    <div className="services-grid">
      <div className="svc-card">
        <div className="svc-icon">📈</div>
        <h3>Blog & Article Writing</h3>
        <p>Research-driven, SEO-optimised long-form articles that rank on Google and position your brand as the authoritative voice in your category.</p>
        <div className="service-tags"><span>SEO Blogs</span><span>Long-Form</span><span>Topic Clusters</span><span>Pillar Pages</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon"></div>
        <h3>Website Copywriting</h3>
        <p>Conversion-optimised website copy—home pages, service pages, about pages, and landing pages written to communicate value and drive enquiries.</p>
        <div className="service-tags"><span>Landing Pages</span><span>Service Pages</span><span>CRO Copy</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">📱</div>
        <h3>Social Media Copywriting</h3>
        <p>Platform-native captions, hashtag strategies, and ad copy for Instagram, Facebook, LinkedIn, and Twitter that engage and convert your audience.</p>
        <div className="service-tags"><span>Captions</span><span>Ad Copy</span><span>Hashtag Sets</span><span>Bio Copy</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">📈§</div>
        <h3>Email Copywriting</h3>
        <p>Subject lines that get opened, body copy that gets clicked, and CTAs that convert—email copy written for deliverability and conversion together.</p>
        <div className="service-tags"><span>Subject Lines</span><span>Newsletter Copy</span><span>Drip Sequences</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">🎨¥</div>
        <h3>Video Scripts & Storyboards</h3>
        <p>Scripts for brand films, product demos, YouTube content, and social reels—structured narratives that brief production teams clearly and captivate viewers.</p>
        <div className="service-tags"><span>Brand Film Scripts</span><span>YouTube</span><span>Reel Scripts</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">📊</div>
        <h3>Whitepapers & Case Studies</h3>
        <p>Authority-building long-form content—research whitepapers, client case studies, and thought leadership reports that generate B2B leads and build trust.</p>
        <div className="service-tags"><span>Whitepapers</span><span>Case Studies</span><span>Reports</span><span>eBooks</span></div>
      </div>
    </div>
  </div>
</section>

<section className="tools-section">
  <div className="section-inner">
    <span className="section-tag">Tools & Process</span>
    <h2 className="section-title">Research-Led, SEO-Optimised Content at Scale</h2>
    <p className="section-sub">We use best-in-class tools to ensure every piece of content is researched, optimised, and positioned to outperform the competition.</p>
    <div className="tools-grid">
      <div className="tool-chip"><span className="tool-icon">🔥</span>SEMrush</div>
      <div className="tool-chip"><span className="tool-icon">📊</span>Ahrefs</div>
      <div className="tool-chip"><span className="tool-icon">🎯</span>SurferSEO</div>
      <div className="tool-chip"><span className="tool-icon">📈</span>Grammarly Business</div>
      <div className="tool-chip"><span className="tool-icon">✓</span>Copyscape</div>
      <div className="tool-chip"><span className="tool-icon">📈</span>Hemingway Editor</div>
      <div className="tool-chip"><span className="tool-icon"></span>Notion CMS</div>
      <div className="tool-chip"><span className="tool-icon">📈</span>Google Search Console</div>
      <div className="tool-chip"><span className="tool-icon">🤝–</span>AI-Assisted Research</div>
      <div className="tool-chip"><span className="tool-icon">🔥—</span>Clearscope</div>
    </div>
  </div>
</section>

<section className="portfolio-section">
  <div className="section-inner">
    <span className="section-tag">Content We've Created</span>
    <h2 className="section-title">Content That Ranked, Engaged & Converted</h2>
    <p className="section-sub">A selection of content programmes we've run for brands across healthcare, FMCG, travel, and consumer sectors.</p>
    <div className="portfolio-grid">

      <div className="port-card">
        <div className="port-img">
          <img src="/sociapareact/images/apisClt.png" alt="APIS India" className="portfolio-logo" />
        </div>
        <div className="port-info">
          <div className="port-tag">Healthcare Blogs · SEO</div>
          <h4>APIS India — Content Programme</h4>
          <p>48 SEO blog articles in 12 months, helping increase organic search traffic by 280% while significantly improving branded search visibility.</p>
        </div>
      </div>

      <div className="port-card">
        <div className="port-img">
          <img src="/sociapareact/images/pansari200.png" alt="Pansari Group" className="portfolio-logo" />
        </div>
        <div className="port-info">
          <div className="port-tag">Website Copy · CRO</div>
          <h4>Pansari Group — Website Copywriting</h4>
          <p>Complete website copywriting for product and corporate pages, delivering clear brand messaging, SEO optimization, and improved conversion-focused content.</p>
        </div>
      </div>

      <div className="port-card">
        <div className="port-img">
          <img src="/sociapareact/images/nutrela-logo.png" alt="Nutrela Nutrition" className="portfolio-logo" />
        </div>
        <div className="port-info">
          <div className="port-tag">Social Copy · Campaigns</div>
          <h4>Nutrela Nutrition — Social Content Engine</h4>
          <p>Monthly content creation including social media captions, SEO blogs, product descriptions, and campaign copy tailored to Nutrela's brand voice.</p>
        </div>
      </div>

      <div className="port-card">
        <div className="port-img">
          <img src="/sociapareact/images/bonnClt.png" alt="Bonn Breads" className="portfolio-logo" />
        </div>
        <div className="port-info">
          <div className="port-tag">Content Marketing · FMCG</div>
          <h4>Bonn Breads — Content Campaign</h4>
          <p>Developed engaging website copy, blog content, and promotional campaigns that strengthened brand storytelling and increased audience engagement.</p>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="process-section">
  <div className="section-inner">
    <span className="section-tag">Our Process</span>
    <h2 className="section-title">How We Produce Content That Performs</h2>
    <p className="section-sub">A scalable content production process that delivers consistent quality from brief to published, optimised content. </p>
    <div className="process-grid">
      <div className="process-step"><div className="step-num">1</div><h4>Content Audit</h4><p>Review existing content, SEO gaps, and keyword opportunities for your brand</p></div>
      <div className="process-step"><div className="step-num">2</div><h4>Strategy & Calendar</h4><p>Monthly content plan with topics, formats, and publication timeline agreed</p></div>
      <div className="process-step"><div className="step-num">3</div><h4>Research & Outline</h4><p>Keyword research, competitor analysis, and structured content outline created</p></div>
      <div className="process-step"><div className="step-num">4</div><h4>Writing & Design</h4><p>First draft written, formatted, and designed for target platform and audience</p></div>
      <div className="process-step"><div className="step-num">5</div><h4>Review & Edit</h4><p>Editorial review, plagiarism check, SEO optimisation, and client approval</p></div>
      <div className="process-step"><div className="step-num">6</div><h4>Publish & Track</h4><p>Publication support, distribution amplification, and monthly performance review</p></div>
    </div>
  </div>
</section>

<section className="why-section">
  <div className="section-inner">
    <span className="section-tag section-tag-white">Why Sociapa Content</span>

    <h2 className="section-title">Content Built to Perform, Not Just Publish</h2>

    <p className="section-sub">
      We focus on outcomes like traffic, leads, and conversions, not just content delivery.
    </p>

    <div className="why-grid">

      <div className="why-card">
        <div className="w-icon">🎯</div>
        <h4>SEO-Led Strategy</h4>
        <p>Every piece of content is researched for search intent and SEO-optimised to drive organic traffic and improve search rankings.</p>
      </div>

      <div className="why-card">
        <div className="w-icon">🎨</div>
        <h4>Brand Voice Mastery</h4>
        <p>We understand your brand voice before writing, ensuring every piece of content feels authentic and consistent with your brand.</p>
      </div>

      <div className="why-card">
        <div className="w-icon">📦</div>
        <h4>Volume at Quality</h4>
        <p>Structured editorial workflows maintain consistent quality across 100+ content pieces every month, even at scale.</p>
      </div>

      <div className="why-card">
        <div className="w-icon">⚡</div>
        <h4>Multilingual Capability</h4>
        <p>Multilingual content in English, Hindi, and regional languages, created to help brands connect with diverse audiences across India.</p>
      </div>

      <div className="why-card">
        <div className="w-icon">📊</div>
        <h4>Performance Tracking</h4>
        <p>Monthly reporting on keyword rankings, organic traffic, engagement, and content-driven leads, providing clear ROI on your content investment.</p>
      </div>

      <div className="why-card">
        <div className="w-icon">🔥</div>
        <h4>Content Repurposing</h4>
        <p>We repurpose every content asset, turning blogs into social posts, whitepapers into email campaigns, and scripts into articles to maximise content value.</p>
      </div>

    </div>
  </div>
</section>

<section className="testi-section">
  <div className="section-inner">
    <span className="section-tag">Client Stories</span>
    <h2 className="section-title">Brands Winning with Sociapa Content</h2>
    <div className="testi-grid">
      <div className="testi-card">
        <div className="stars">★★★★★</div>
        <blockquote>"280% organic traffic growth in 12 months. The content programme Sociapa runs for us is the single biggest driver of qualified inbound leads we've ever had."</blockquote>
        <div className="testi-author"><div className="avatar">AI</div><div><strong>Dr. Ankit Jain</strong><span>CEO, APIS India</span></div></div>
      </div>
      <div className="testi-card">
        <div className="stars">★★★★★</div>
        <blockquote>"The website copy rewrite improved our enquiry conversion rate by 34%. Sociapa understood our customer's journey and wrote copy that speaks directly to their decision-making."</blockquote>
        <div className="testi-author"><div className="avatar">KT</div><div><strong>Anand Desai</strong><span>Digital Head, Kesari Tours</span></div></div>
      </div>
      <div className="testi-card">
        <div className="stars">★★★★★</div>
        <blockquote>"Our whitepaper generated 400+ downloads and 38 sales leads in its first month. B2B content marketing finally working at the level it should—thanks to Sociapa's expertise."</blockquote>
        <div className="testi-author"><div className="avatar">AI</div><div><strong>Sunita Khanna</strong><span>Marketing VP, APIS India</span></div></div>
      </div>
    </div>
  </div>
</section>

<section className="faq-section faq-section-padded" id="faq">
  <div className="section-inner">
    <span className="section-tag">FAQ</span>
    <h2 className="section-title">Content Design <span className="text-brand-red">Questions Answered</span></h2>
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
    <h2>Ready to Build a Content Engine That Drives Growth?</h2>
    <p>Get a free content audit and keyword opportunity report for your brand within 48 hours.</p>
    <a href="/contact" className="btn-primary">Get My Free Content Audit</a>
  </div>
</section>


        </>
    );
}


