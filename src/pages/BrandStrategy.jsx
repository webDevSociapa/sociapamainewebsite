import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './BrandStrategy.css';

const faqsData = [
  {
    "q": "What does your brand strategy service include?",
    "a": "<p>Our brand strategy services include market and competitor analysis, audience research, brand positioning, messaging, brand archetypes, naming, taglines, and comprehensive brand audits.</p>"
  },
  {
    "q": "How do you develop a brand strategy?",
    "a": "<p>We combine market research, competitor analysis, customer insights, and industry trends to create a data-driven brand strategy tailored to your business goals and long-term growth.</p>"
  },
  {
    "q": "Can you help rebrand an existing business?",
    "a": "<p>Yes. We help businesses refresh their brand positioning, messaging, identity, and customer perception while preserving valuable brand equity and strengthening market relevance.</p>"
  },
  {
    "q": "Do you create brand names and taglines?",
    "a": "<p>Yes. We create memorable brand names and compelling taglines that align with your brand positioning, target audience, and business objectives.</p>"
  },
  {
    "q": "How do you identify my target audience?",
    "a": "<p>We conduct detailed audience research and develop buyer personas based on customer behaviour, motivations, pain points, demographics, and market insights to ensure effective brand communication.</p>"
  },
  {
    "q": "How long does a brand strategy project take?",
    "a": "<p>The timeline depends on your business size and project scope. Every strategy is developed through thorough research, collaboration, and structured execution planning to deliver meaningful results.</p>"
  },
  {
    "q": "Is my business information kept confidential?",
    "a": "<p>Absolutely. Every brand strategy project is protected under a strict Non-Disclosure Agreement (NDA), ensuring your business information, research, and strategic insights remain completely confidential.</p>"
  },
  {
    "q": "Can brand strategy improve my digital marketing results?",
    "a": "<p>Yes. A well-defined brand strategy creates consistent messaging across SEO, social media, paid advertising, content marketing, and other digital channels, helping improve campaign performance and customer engagement.</p>"
  },
  {
    "q": "Why choose Sociapa for brand strategy?",
    "a": "<p>Sociapa combines strategic research, creative thinking, and digital marketing expertise to build practical, data-driven brand strategies designed to help businesses differentiate, grow, and achieve long-term success.</p>"
  },
  {
    "q": "Is brand strategy suitable for established businesses?",
    "a": "<p>Absolutely. Whether you're launching a new venture, scaling an existing business, or undergoing a rebrand, a strong brand strategy helps maintain relevance, strengthen differentiation, and support sustainable business growth.</p>"
  }
];

export default function BrandStrategy() {
    const [openFaq, setOpenFaq] = useState(null);
    const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return (<>

      <Helmet>
        <title>Brand Strategy Services India | Sociapa – Build a Brand That Stands Out</title>
        <meta name="description" content="Sociapa offers expert brand strategy services in India – competitor analysis, brand positioning, brand archetype, brand naming & tagline. Build a powerful brand identity today." />
        <meta name="keywords" content="brand strategy agency India, brand positioning services, brand identity strategy, brand archetype, brand naming agency, brand strategy consultant Delhi, brand strategy for D2C, brand strategy for startups" />
        <link rel="canonical" href="https://www.sociapa.com/brand-strategy/" />
        <meta property="og:title" content="Brand Strategy Services India | Sociapa – Build a Brand That Stands Out" />
        <meta property="og:description" content="Sociapa offers expert brand strategy services in India – competitor analysis, brand positioning, brand archetype, brand naming & tagline. Build a powerful brand identity today." />
        <meta property="og:url" content="https://www.sociapa.com/brand-strategy/" />
      </Helmet>
<section className="brandstrategy-hero">
  <div className="brandstrategy-hero-blob hero-blob-1"></div>
  <div className="brandstrategy-hero-blob hero-blob-2"></div>
  <div className="brandstrategy-hero-content">
    <div className="brandstrategy-hero-badge"><span className="brandstrategy-hero-badge-dot"></span>Brand Strategists · Market Experts · Growth Architects</div>
    <h1>Brand Strategy That <span>Builds Empires, Not Just Businesses</span></h1>
    <p>Sociapa creates data-driven brand strategies that define your identity, strengthen your positioning, and give your business a competitive edge through strategic branding and brand development.</p>
    <div className="brandstrategy-hero-buttons">
      <a href="#services" className="btn-white">Explore Our Services</a>
      <a href="mailto:mail@sociapa.com" className="btn-outline-white">Start Your Brand Strategy</a>
    </div>
  </div>
</section>

<div className="stats-bar">
  <div className="stat-item"><div className="stat-num">160+</div><div className="stat-label">Brands Strategised</div></div>
  <div className="stat-item"><div className="stat-num">8+</div><div className="stat-label">Years of Expertise</div></div>
  <div className="stat-item"><div className="stat-num">12+</div><div className="stat-label">Industries Served</div></div>
  <div className="stat-item"><div className="stat-num">95%</div><div className="stat-label">Client Retention Rate</div></div>
</div>

<section id="services" className="pub-section-light">
  <div className="section-header">
    <span className="section-tag">What We Do</span>
    <h2>Full-Spectrum <span>Brand Strategy Services</span></h2>
    <div className="divider"></div>
    <p className="section-sub seo-sub-top">We go beyond logos and colours to build a strategic brand foundation that helps your business stand out, connect with customers, and achieve long-term growth.</p>
  </div>
  <div className="services-grid">
    <div className="service-card">
      <div className="service-icon">🔥</div>
      <h3>Competitor Analysis</h3>
      <p>Gain a competitive edge with in-depth market and competitor analysis. We identify opportunities, uncover gaps, and position your brand for long-term growth and differentiation.</p>
      <div className="service-tags"><span className="tag">Market Research</span><span className="tag">Competitive Intelligence</span><span className="tag">SWOT Analysis</span><span className="tag">Gap Mapping</span></div>
    </div>
    <div className="service-card">
      <div className="service-icon">⚡</div>
      <h3>User Persona Development</h3>
      <p>We create detailed buyer personas based on audience insights, motivations, and buying behaviour to ensure your brand messaging connects with the right customers.</p>
      <div className="service-tags"><span className="tag">Audience Research</span><span className="tag">Psychographics</span><span className="tag">Buyer Journey</span><span className="tag">Customer Insights</span></div>
    </div>
    <div className="service-card">
      <div className="service-icon">🎯</div>
      <h3>Brand Positioning & Storyline</h3>
      <p>Define your brand's unique position with compelling value propositions and messaging that differentiates your business and connects with your audience.</p>
      <div className="service-tags"><span className="tag">Brand Positioning</span><span className="tag">Value Proposition</span><span className="tag">Brand Narrative</span><span className="tag">Messaging Framework</span></div>
    </div>
    <div className="service-card">
      <div className="service-icon">⚡</div>
      <h3>Brand Archetype Definition</h3>
      <p>Build a distinct brand personality through the right archetype, creating authentic messaging that strengthens emotional connections and brand recognition.</p>
      <div className="service-tags"><span className="tag">Brand Archetype</span><span className="tag">Brand Personality</span><span className="tag">Emotional Branding</span><span className="tag">Brand Voice</span></div>
    </div>
    <div className="service-card">
      <div className="service-icon">✓ï¸</div>
      <h3>Brand Naming & Tagline</h3>
      <p>Create a memorable brand name and tagline aligned with your strategy, backed by domain availability checks, market relevance, and audience appeal. </p>
      <div className="service-tags"><span className="tag">Brand Naming</span><span className="tag">Tagline Creation</span><span className="tag">Trademark Check</span><span className="tag">Domain Availability</span></div>
    </div>
    <div className="service-card">
      <div className="service-icon">📋</div>
      <h3>Brand Audit</h3>
      <p>Evaluate your brand's identity, messaging, digital presence, and customer perception with actionable insights to strengthen every brand touchpoint.</p>
      <div className="service-tags"><span className="tag">Brand Health Check</span><span className="tag">Identity Audit</span><span className="tag">Perception Survey</span><span className="tag">Touchpoint Review</span></div>
    </div>
  </div>
</section>

<section id="tools">
  <div className="section-header">
    <span className="section-tag">Our Toolkit</span>
    <h2>Strategy Frameworks We <span>Rely On</span></h2>
    <div className="divider"></div>
    <p className="section-sub seo-sub-top">Proven models and research tools that power sharp, insight-driven brand strategy.</p>
  </div>
  <div className="tech-grid">
    <div className="tech-chip"><span>Brand Mapping</span></div>
    <div className="tech-chip"><span>SWOT Analysis</span></div>
    <div className="tech-chip"><span>Perceptual Mapping</span></div>
    <div className="tech-chip"><span>Jobs-to-be-Done</span></div>
    <div className="tech-chip"><span>Archetype Framework</span></div>
    <div className="tech-chip"><span>Primary Research</span></div>
    <div className="tech-chip"><span>Focus Groups</span></div>
    <div className="tech-chip"><span>SEMrush / Ahrefs</span></div>
    <div className="tech-chip"><span>Brand Strategy Doc</span></div>
    <div className="tech-chip"><span>Positioning Canvas</span></div>
  </div>
</section>

<section id="portfolio" className="pub-section-light">
  <div className="section-header">
    <span className="section-tag">Case Studies</span>
    <h2>Brands We've <span>Strategically Built</span></h2>
    <div className="divider"></div>
    <p className="section-sub seo-sub-top">From startups to established D2C brands, we've helped businesses transform their identity, strengthen positioning, and accelerate growth. </p>
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
                <img src="images/DF-logo-blue.png" alt="Dhavani Brand Identity" />
                <span className="project-badge">Lifestyle · Identity</span>
                <div className="project-overlay">
                    <a href="https://dhavani.life/">➔ View Project</a>
                </div>
            </div>

            <div className="project-info">
                <h3>Dhavani</h3>
                <p>Designed a minimalist brand identity with a custom wordmark, curated colour palette, and a visual identity system tailored for digital-first and D2C marketing. </p>

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
    <span className="section-tag">How We Work</span>
    <h2>Our <span>5-Step Brand Strategy</span> Process</h2>
    <div className="divider"></div>
  </div>
  <div className="process-steps">
    <div className="process-step"><div className="step-num">🔬</div><h3>Discovery</h3><p>Deep brand discovery session — understanding your vision, values, goals, and current brand challenges</p></div>
    <div className="process-step"><div className="step-num">📊</div><h3>Research</h3><p>Market research, competitor analysis, and user persona development based on primary and secondary data</p></div>
    <div className="process-step"><div className="step-num">🎯</div><h3>Strategy Build</h3><p>Developing positioning, archetype, messaging hierarchy, and brand narrative aligned with your objectives</p></div>
    <div className="process-step"><div className="step-num">📋</div><h3>Brand Document</h3><p>A comprehensive brand strategy document — the single source of truth for all brand decisions</p></div>
    <div className="process-step"><div className="step-num">🚀€</div><h3>Activation</h3><p>Strategic guidance on activating the brand across digital and offline touchpoints for maximum impact</p></div>
  </div>
</section>

<section id="why">
  <div className="section-header">
    <span className="section-tag">Why Sociapa</span>
    <h2>Strategy That Goes <span>Beyond Theory</span></h2>
    <div className="divider divider-alpha-white"></div>
    <p className="section-sub seo-sub-top">We create brand strategies built for execution, delivering clear direction, measurable outcomes, and long-term business growth.</p>
  </div>
  <div className="why-grid">
    <div className="why-card"><div className="why-icon">🏆</div><h3>160+ Brands Delivered</h3><p>We've developed brand strategies for 160+ brands across D2C, FMCG, healthcare, lifestyle, and B2B, bringing proven cross-industry expertise to every project.</p></div>
    <div className="why-card"><div className="why-icon">🔬</div><h3>Research-First Approach</h3><p>Every brand strategy is backed by data, including consumer insights, competitor analysis, search trends, and market research to drive informed decisions.</p></div>
    <div className="why-card"><div className="why-icon">🎯</div><h3>Execution-Ready Deliverables</h3><p>Our brand strategy documents are clear, actionable, and ready to guide your design, marketing, and content teams from day one. </p></div>
    <div className="why-card"><div className="why-icon">🤝</div><h3>Full-Funnel Integration</h3><p>Brand strategy aligned with digital marketing, content, and creative to ensure consistent messaging across every customer touchpoint.</p></div>
    <div className="why-card"><div className="why-icon">📈</div><h3>D2C & Startup Specialists</h3><p>Deep expertise in building brands for startups and growing businesses, with strategies designed to succeed in competitive D2C markets. </p></div>
    <div className="why-card"><div className="why-icon">🔥</div><h3>Confidential & IP-Protected</h3><p>All brand strategy projects are protected by strict NDAs, ensuring your market insights, competitive research, and brand positioning remain completely confidential. </p></div>
  </div>
</section>

<section id="testimonials" className="pub-section-light">
  <div className="section-header">
    <span className="section-tag">Client Voices</span>
    <h2>What Our <span>Clients Say</span></h2>
    <div className="divider"></div>
  </div>
  <div className="testimonials-grid">
    <div className="testimonial-card"><div className="stars">★★★★★</div><blockquote>"Sociapa's brand strategy exercise gave us a clarity we had been missing for two years. The positioning work alone transformed how we communicate to investors and customers."</blockquote><div className="testimonial-author"><div className="author-avatar">NP</div><div><div className="author-name">Founder, Nature Pearls Organic</div><div className="author-title">Wellness D2C Brand, Delhi NCR</div></div></div></div>
    <div className="testimonial-card"><div className="stars">★★★★★</div><blockquote>"The persona work they did was eye-opening — we realised we had been talking to the wrong audience. Post-strategy our conversion rates improved by 40% in three months."</blockquote><div className="testimonial-author"><div className="author-avatar">VC</div><div><div className="author-name">Marketing Head, Vanesa Cosmetics</div><div className="author-title">Beauty Brand, Pan-India</div></div></div></div>
    <div className="testimonial-card"><div className="stars">★★★★★</div><blockquote>"We launched with a strong brand strategy foundation from Sociapa and saw category-leading engagement from day one. Their archetype work is genuinely next-level."</blockquote><div className="testimonial-author"><div className="author-avatar">HH</div><div><div className="author-name">CEO, Habitat Home DÃ©cor</div><div className="author-title">Lifestyle D2C Brand</div></div></div></div>
  </div>
</section>

<section id="faq">
  <div className="section-header">
    <span className="section-tag">FAQ</span>
    <h2>Brand Strategy <span>Questions Answered</span></h2>
    <div className="divider"></div>
    <p className="section-sub seo-sub-top">Everything you need to know before starting your brand strategy journey with Sociapa.</p>
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
  <h2>Ready to Build a Brand That <span>Stands the Test of Time?</span></h2>
  <p>Schedule a free brand strategy consultation and discover what it takes to own your category.</p>
  <div className="cta-buttons">
    <a href="mailto:mail@sociapa.com" className="btn-white">Get a Free Strategy Call</a>
    <a href="https://wa.me/8375828920" className="btn-outline-white">WhatsApp Us</a>
  </div>
</section>


</>);
}


