import React, { useState, useEffect } from 'react';
import './GoToMarket.css';

const faqsData = [
  {
    "q": "What is included in Sociapa's go-to-market (GTM) strategy?",
    "a": "<p>Our GTM strategy includes social media marketing, influencer marketing, performance advertising, UGC creation, product photography, quick commerce setup, retail activation, and end-to-end channel management.</p>"
  },
  {
    "q": "Do you manage complete product launches?",
    "a": "<p>Yes. We plan and execute end-to-end product launches across digital marketing, quick commerce, eCommerce, marketplaces, and retail channels to ensure a successful market entry.</p>"
  },
  {
    "q": "Which quick commerce platforms do you support?",
    "a": "<p>We help brands set up, optimise, and manage product listings on Blinkit, Zepto, Swiggy Instamart, and BigBasket to maximise visibility and sales.</p>"
  },
  {
    "q": "Do you provide influencer marketing as part of your GTM strategy?",
    "a": "<p>Yes. We manage influencer discovery, creator outreach, campaign planning, UGC creation, campaign execution, and performance tracking to maximise reach and conversions.</p>"
  },
  {
    "q": "Do you run Meta and Google Ads for product launches?",
    "a": "<p>Yes. We manage data-driven advertising campaigns across Meta, Google, and YouTube with audience targeting, creative optimisation, and continuous performance monitoring.</p>"
  },
  {
    "q": "Do you create content for product launches?",
    "a": "<p>Absolutely. Our in-house team creates social media content, product photography, AI-generated creatives, videos, and user-generated content (UGC) to support successful product launches.</p>"
  },
  {
    "q": "Can you help with retail and offline launch activities?",
    "a": "<p>Yes. We support offline marketing through retail activations, in-store promotions, POSM design, distributor support, and BTL marketing campaigns.</p>"
  },
  {
    "q": "How do you measure GTM campaign performance?",
    "a": "<p>We provide weekly performance dashboards and KPI tracking to measure campaign success, optimise budgets, and improve marketing performance using real-time data.</p>"
  },
  {
    "q": "Do you manage the entire GTM process in-house?",
    "a": "<p>Yes. Our team manages brand strategy, creative production, digital marketing, influencer campaigns, quick commerce, and channel management under one roof for seamless execution.</p>"
  },
  {
    "q": "Why choose Sociapa for go-to-market strategy?",
    "a": "<p>Sociapa combines strategy, creative, digital marketing, influencer marketing, quick commerce, and retail execution into one integrated GTM approach, helping brands launch faster, scale efficiently, and achieve measurable business growth.</p>"
  }
];

export default function GoToMarket() {
    const [openFaq, setOpenFaq] = useState(null);
    const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return (<>
<section className="gotomarket-hero">
  <div className="gotomarket-hero-blob hero-blob-1"></div>
  <div className="gotomarket-hero-blob hero-blob-2"></div>
  <div className="gotomarket-hero-content">
    <div className="gotomarket-hero-badge"><span className="gotomarket-hero-badge-dot"></span>Social · Influencer · Performance · Quick Commerce · Offline</div>
    <h1>Go-To-Market Strategy That <span>Launches Brands Into Category Leaders</span></h1>
    <p>Sociapa creates data-driven go-to-market strategies for D2C and FMCG brands across digital marketing, eCommerce, quick commerce, influencer marketing, and retail channels. </p>
    <div className="gotomarket-hero-buttons">
      <a href="#services" className="btn-white">Explore GTM Services</a>
      <a href="mailto:mail@sociapa.com" className="btn-outline-white">Build My GTM Plan</a>
    </div>
  </div>
</section>

<div className="stats-bar">
  <div className="stat-item"><div className="stat-num">200+</div><div className="stat-label">GTM Plans Executed</div></div>
  <div className="stat-item"><div className="stat-num">8+</div><div className="stat-label">Years of Expertise</div></div>
  <div className="stat-item"><div className="stat-num">12+</div><div className="stat-label">Product Categories</div></div>
  <div className="stat-item"><div className="stat-num">3.5x</div><div className="stat-label">Average Launch ROAS</div></div>
</div>

<section id="services" className="pub-section-light">
  <div className="section-header">
    <span className="section-tag">GTM Channels</span>
    <h2>Full-Funnel <span>Go-To-Market Execution</span></h2>
    <div className="divider"></div>
    <p className="section-sub seo-sub-top">We plan and execute product launches across social media, influencer marketing, performance ads, and quick commerce to maximise reach and growth.</p>
  </div>

  <div className="services-grid">

    <div className="service-card">
        <div className="service-icon">📱</div>
        <h3>Social Media Marketing</h3>
        <p>Build your brand with social media strategy, content planning, community management, and platform-specific content that drives audience growth before and after launch.</p>
        <div className="service-tags">
            <span className="tag">Social Strategy</span>
            <span className="tag">Content Planning</span>
            <span className="tag">Community Management</span>
            <span className="tag">Audience Growth</span>
        </div>
    </div>

    <div className="service-card">
        <div className="service-icon">🤝</div>
        <h3>Influencer Marketing</h3>
        <p>Strategic influencer marketing with creator discovery, outreach, campaign management, and performance tracking to maximise reach, engagement, and conversions.</p>
        <div className="service-tags">
            <span className="tag">Creator Discovery</span>
            <span className="tag">Campaign Management</span>
            <span className="tag">Performance Tracking</span>
            <span className="tag">Influencer Outreach</span>
        </div>
    </div>

    <div className="service-card">
        <div className="service-icon">🎯</div>
        <h3>Performance Marketing</h3>
        <p>Data-driven Meta, Google, and YouTube ad campaigns with audience targeting, creative optimisation, and performance-focused scaling.</p>
        <div className="service-tags">
            <span className="tag">Meta Ads</span>
            <span className="tag">Google Ads</span>
            <span className="tag">YouTube Ads</span>
            <span className="tag">Performance Scaling</span>
        </div>
    </div>

    <div className="service-card">
        <div className="service-icon">🎨</div>
        <h3>UGC Marketing</h3>
        <p>Build authentic UGC through creator collaborations and customer content to strengthen brand trust and improve marketing performance across all channels.</p>
        <div className="service-tags">
            <span className="tag">UGC Creation</span>
            <span className="tag">Creator Collaboration</span>
            <span className="tag">Customer Content</span>
            <span className="tag">Brand Trust</span>
        </div>
    </div>

    <div className="service-card">
        <div className="service-icon">📈¸</div>
        <h3>Product Photography &amp; AI Photography</h3>
        <p>Professional product photography and AI-generated lifestyle visuals for eCommerce, social media, and marketing campaigns.</p>
        <div className="service-tags">
            <span className="tag">Product Photography</span>
            <span className="tag">AI Visuals</span>
            <span className="tag">eCommerce</span>
            <span className="tag">Marketing Creatives</span>
        </div>
    </div>

    <div className="service-card">
        <div className="service-icon">⚡</div>
        <h3>Quick Commerce Setup</h3>
        <p>Complete setup and optimisation for Blinkit, Zepto, Swiggy Instamart, and BigBasket, including catalogue management, listing optimisation, and promotional strategy.</p>
        <div className="service-tags">
            <span className="tag">Blinkit</span>
            <span className="tag">Zepto</span>
            <span className="tag">Swiggy Instamart</span>
            <span className="tag">BigBasket</span>
        </div>
    </div>

    <div className="service-card">
        <div className="service-icon">⚡</div>
        <h3>Offline Marketing &amp; Retail Activation</h3>
        <p>Retail and trade marketing with in-store promotions, POSM design, distributor support, and BTL activations for omnichannel brand growth.</p>
        <div className="service-tags">
            <span className="tag">Retail Marketing</span>
            <span className="tag">POSM Design</span>
            <span className="tag">BTL Activations</span>
            <span className="tag">Distributor Support</span>
        </div>
    </div>

</div>
</section>

<section id="tools">
  <div className="section-header">
    <span className="section-tag">GTM Tech Stack</span>
    <h2>Tools That Power <span>Our GTM Execution</span></h2>
    <div className="divider"></div>
    <p className="section-sub seo-sub-top">Best-in-class platforms for planning, executing, and measuring every element of your go-to-market strategy.</p>
  </div>
  <div className="tech-grid">
    <div className="tech-chip"><span>Meta Business Suite</span></div>
    <div className="tech-chip"><span>Google Ads</span></div>
    <div className="tech-chip"><span>Google Analytics 4</span></div>
    <div className="tech-chip"><span>Influencer Platforms</span></div>
    <div className="tech-chip"><span>Blinkit / Zepto</span></div>
    <div className="tech-chip"><span>Amazon Seller Central</span></div>
    <div className="tech-chip"><span>SEMrush</span></div>
    <div className="tech-chip"><span>Later / Hootsuite</span></div>
    <div className="tech-chip"><span>UGC Platforms</span></div>
    <div className="tech-chip"><span>GTM Dashboard</span></div>
  </div>
</section>

<section id="portfolio" className="pub-section-light">
  <div className="section-header">
    <span className="section-tag">Case Studies</span>
    <h2>Brands We've <span>Successfully Launched</span></h2>
    <div className="divider"></div>
    <p className="section-sub seo-sub-top">Real product launches — from zero to market presence across social, quick commerce, and retail.</p>
  </div>
  <div className="projects-grid">

        <div className="project-card">
            <div className="project-preview">
                <img src="images/vanesa.png" alt="Vanesa Cosmetics Brand Identity" />
                <span className="project-badge">Beauty · Identity</span>
                <div className="project-overlay">
                    <a href="https://www.vanesacosmetics.com/">➔ View Project</a>
                </div>
            </div>

            <div className="project-info">
                <h3>Vanesa Cosmetics</h3>
                <p>Complete brand identity redesign with a new logo system, refreshed colour palette, typography, and comprehensive brand guidelines for 500+ retail touchpoints.</p>

                <div className="project-meta">
                    <span className="tag">Logo</span>
                    <span className="tag">Guidelines</span>
                    <span className="tag">Beauty</span>
                </div>
            </div>
        </div>

        <div className="project-card">
            <div className="project-preview">
                <img src="images/Nature-pearls.png" alt="Nature Pearls Organic Branding" />
                <span className="project-badge">Wellness · Identity</span>
                <div className="project-overlay">
                    <a href="https://www.naturepearlsorganic.com/">➔ View Project</a>
                </div>
            </div>

            <div className="project-info">
                <h3>Nature Pearls Organic</h3>
                <p>Developed a premium visual identity featuring a custom logo, natural colour palette, brand mood board, and a complete digital identity system. </p>

                <div className="project-meta">
                    <span className="tag">Logo</span>
                    <span className="tag">Mood Board</span>
                    <span className="tag">Wellness</span>
                </div>
            </div>
        </div>

        <div className="project-card">
            <div className="project-preview">
                <img src="images/nutrela-logo.png" alt="Nutrela Nutrition Brand Identity" />
                <span className="project-badge">Lifestyle · Identity</span>
                <div className="project-overlay">
                    <a href="https://nutrelanutrition.com/">➔ View Project</a>
                </div>
            </div>

            <div className="project-info">
                <h3>Nutrela Nutrition</h3>
                <p>Omnichannel GTM strategy spanning quick commerce (Blinkit + Zepto), social media (3.2M reach in 60 days), and performance marketing (3.8x ROAS) across fitness demographics.</p>

                <div className="project-meta">
                    <span className="tag">Logo</span>
                    <span className="tag">Color System</span>
                    <span className="tag">Lifestyle</span>
                </div>
            </div>
        </div>

    </div>
</section>

<section id="process">
  <div className="section-header">
    <span className="section-tag">How We Build GTM Plans</span>
    <h2>Our <span>5-Step GTM Strategy</span> Process</h2>
    <div className="divider"></div>
  </div>
  <div className="process-steps">
    <div className="process-step"><div className="step-num">🔬</div><h3>Market Research</h3><p>Category sizing, competitor mapping, target audience profiling, and channel opportunity assessment</p></div>
    <div className="process-step"><div className="step-num">🎯</div><h3>Audience Strategy</h3><p>Precise buyer persona definition, channel preference mapping, and messaging framework development</p></div>
    <div className="process-step"><div className="step-num"></div><h3>Channel Planning</h3><p>Budget allocation across social, influencer, performance, q-commerce, and offline with ROI projections</p></div>
    <div className="process-step"><div className="step-num">🚀€</div><h3>Campaign Launch</h3><p>Coordinated launch across all channels with creative assets, tracking infrastructure, and influencer activation</p></div>
    <div className="process-step"><div className="step-num">📊</div><h3>Measure & Scale</h3><p>Weekly performance reviews, budget optimisation, and doubling down on highest-ROI channels</p></div>
  </div>
</section>

<section id="why">
  <div className="section-header">
    <span className="section-tag">Why Sociapa</span>
    <h2>GTM Strategy That <span>Actually Executes</span></h2>
    <div className="divider divider-alpha-white"></div>
    <p className="section-sub seo-sub-top">We don't just hand you a slide deck — we build your GTM plan and execute every channel in-house.</p>
  </div>
  <div className="why-grid">

    <div className="why-card">
        <div className="why-icon">⚡</div>
        <h3>200+ Launches Executed</h3>
        <p>We've launched 200+ products and brands across India, helping D2C startups and FMCG companies successfully enter and grow in competitive markets.</p>
    </div>

    <div className="why-card">
        <div className="why-icon">⚡</div>
        <h3>Q-Commerce Specialists</h3>
        <p>Deep expertise in Blinkit, Zepto, and Swiggy Instamart onboarding and optimisation, helping brands maximise visibility and accelerate quick commerce growth.</p>
    </div>

    <div className="why-card">
        <div className="why-icon">🎨</div>
        <h3>In-House UGC &amp; Content</h3>
        <p>Our in-house content and influencer teams deliver creatives, influencer campaigns, and UGC with a consistent brand voice across every channel.</p>
    </div>

    <div className="why-card">
        <div className="why-icon">📊</div>
        <h3>Data-Driven Decisions</h3>
        <p>Weekly performance reporting and KPI tracking help optimise budgets and improve results through data-driven decision-making.</p>
    </div>

    <div className="why-card">
        <div className="why-icon">🤝</div>
        <h3>Full-Funnel Ownership</h3>
        <p>One team manages your entire marketing funnel, from brand awareness and performance marketing to product listings, quick commerce, and conversions.</p>
    </div>

    <div className="why-card">
        <div className="why-icon">🔥</div>
        <h3>Integrated Execution</h3>
        <p>Brand strategy, creative, digital marketing, and channel management under one roof for a seamless, consistent, and high-impact go-to-market launch.</p>
    </div>

</div>
</section>

<section id="testimonials" className="pub-section-light">
  <div className="section-header">
    <span className="section-tag">Client Voices</span>
    <h2>What Our <span>Clients Say</span></h2>
    <div className="divider"></div>
  </div>
  <div className="testimonials-grid">
    <div className="testimonial-card"><div className="stars">★★★★★</div><blockquote>"Sociapa's GTM plan was the most thorough launch strategy we've seen. They handled influencers, Blinkit setup, and performance ads simultaneously — our Month 1 exceeded all projections."</blockquote><div className="testimonial-author"><div className="author-avatar">NP</div><div><div className="author-name">Founder, Nature Pearls Organic</div><div className="author-title">Wellness D2C Brand, INR 40L Month 1</div></div></div></div>
    <div className="testimonial-card"><div className="stars">★★★★★</div><blockquote>"The quick commerce strategy they built for us on Blinkit and Zepto generated 35% of our total revenue within 45 days of listing. Their category expertise is unmatched."</blockquote><div className="testimonial-author"><div className="author-avatar">NN</div><div><div className="author-name">CEO, Nutrela Nutrition</div><div className="author-title">Nutrition Brand, Pan-India</div></div></div></div>
    <div className="testimonial-card"><div className="stars">★★★★★</div><blockquote>"From 12K to 180K Instagram followers in 90 days using their influencer and UGC strategy. Our launch video hit 5M views — Sociapa made our brand a household name in the beauty space."</blockquote><div className="testimonial-author"><div className="author-avatar">VC</div><div><div className="author-name">Marketing Director, Vanesa Cosmetics</div><div className="author-title">Beauty Brand, Social-First Launch</div></div></div></div>
  </div>
</section>

<section id="faq">
  <div className="section-header">
    <span className="section-tag">FAQ</span>
    <h2>Go-To-Market Strategy <span>Questions Answered</span></h2>
    <div className="divider"></div>
    <p className="section-sub seo-sub-top">Everything you need to know about planning and executing a powerful brand launch in India.</p>
  </div>
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
</section>

<section id="cta">
  <h2>Ready to Launch Your Brand <span>Into a Category Leader?</span></h2>
  <p>Share your product and target market — we'll build you a data-backed GTM plan that drives real results from day one.</p>
  <div className="cta-buttons">
    <a href="mailto:mail@sociapa.com" className="btn-white">Build My GTM Plan</a>
    <a href="https://wa.me/8375828920" className="btn-outline-white">WhatsApp Us</a>
  </div>
</section>


</>);
}


