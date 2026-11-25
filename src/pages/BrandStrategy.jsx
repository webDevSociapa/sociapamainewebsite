import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ServiceOurWorkSection from '../components/ServiceOurWorkSection';
import ServiceBehindWorkSection from '../components/ServiceBehindWorkSection';
import ServiceCaseStudiesSlider from '../components/ServiceCaseStudiesSlider';
import { serviceClientSectionsData } from '../data/serviceClientSectionsData';
import './BrandStrategy.css';

const faqsData = [
  {
    q: "1. What is a brand strategy, and why is it important?",
    a: "<p>A brand strategy defines your brand's positioning, personality, messaging, and long-term direction. It creates a strong foundation that helps your business differentiate itself, connect with the right audience, and grow consistently.</p>"
  },
  {
    q: "2. What does your brand strategy process include?",
    a: "<p>Our brand strategy process includes market research, competitor analysis, buyer persona development, <a href='/brand-identity-design' class='seo-interlink'>brand identity design</a>, messaging hierarchy, brand storytelling, naming, tagline development, and an actionable roadmap.</p>"
  },
  {
    q: "3. How do you develop a brand strategy?",
    a: "<p>We begin with an in-depth brand discovery session, followed by market research, competitor analysis, consumer insights, and strategic workshops. The result is a data-driven brand strategy aligned with your business goals and market opportunities.</p>"
  },
  {
    q: "4. Do you conduct market and competitor research?",
    a: "<p>Yes. Every strategy is backed by comprehensive market research, competitor analysis, consumer surveys, <a href='/seo-aeo-geo' class='seo-interlink'>search trend analysis</a>, and <a href='/best-social-media-marketing-agency-india' class='seo-interlink'>social listening</a> to ensure decisions are based on real data rather than assumptions.</p>"
  },
  {
    q: "5. What is included in the final brand strategy document?",
    a: "<p>The final document includes brand positioning, target audience personas, brand archetypes, messaging hierarchy, value proposition, brand narrative, naming recommendations (where applicable), activation guidance, and strategic recommendations for future brand decisions.</p>"
  },
  {
    q: "6. Do you help with brand naming and taglines?",
    a: "<p>Yes. We develop memorable, trademarkable brand names and taglines that align with your strategy while evaluating domain availability, cultural relevance, and audience resonance.</p>"
  },
  {
    q: "7. Can you create buyer personas for my brand?",
    a: "<p>Absolutely. We build detailed buyer personas covering demographics, psychographics, pain points, motivations, and buying behaviour to ensure your brand messaging reaches the right audience.</p>"
  },
  {
    q: "8. Which industries do you work with?",
    a: "<p>We've developed brand strategies for over 160 brands across D2C, FMCG, healthcare, and lifestyle industries, often tying into their <a href='/best-packaging-design-agency-india' class='seo-interlink'>packaging design</a> and <a href='/go-to-market' class='seo-interlink'>Go-To-Market launches</a>.</p>"
  },
  {
    q: "9. Do you work with startups as well as established brands?",
    a: "<p>Yes. We work with both early-stage startups and growth-stage businesses, helping them build strong brand foundations and scale in competitive markets.</p>"
  },
  {
    q: "10. Is your brand strategy aligned with marketing and design?",
    a: "<p>Yes. Our brand strategy is developed in the context of <a href='/best-digital-marketing-services-india' class='seo-interlink'>digital marketing</a>, <a href='/content-designing' class='seo-interlink'>content development</a>, and <a href='/creative-designing' class='seo-interlink'>creative design</a>, ensuring every customer touchpoint reflects your brand positioning consistently.</p>"
  }
];

export default function BrandStrategy() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);
  const base = import.meta.env.BASE_URL || '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="brand-strategy-page">
      <Helmet>
        <title>Brand Strategy Agency India | Sociapa</title>
        <meta
          name="description"
          content="Sociapa is India's leading brand strategy agency — Competitor analysis, user personas, brand positioning, brand archetype, naming & tagline for D2C & FMCG brands."
        />
        <meta
          name="keywords"
          content="brand strategy agency India, brand positioning, brand consulting, brand naming, user persona, competitor analysis, brand archetype"
        />
        <link rel="canonical" href="https://sociapa.com/brand-strategy" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SOCIAPA" />
        <meta property="og:title" content="Brand Strategy Agency India | Sociapa" />
        <meta
          property="og:description"
          content="Sociapa is India's leading brand strategy agency — Competitor analysis, user personas, brand positioning, brand archetype, naming & tagline for D2C & FMCG brands."
        />
        <meta property="og:url" content="https://sociapa.com/brand-strategy" />
        <meta property="og:image" content="https://sociapa.com/logoSociapa.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Sociapa - Your Social Buddy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Brand Strategy Agency India | Sociapa" />
        <meta name="twitter:description" content="Sociapa is India's leading brand strategy agency — Competitor analysis, user personas, brand positioning, brand archetype, naming &amp; tagline for D2C &amp; FMCG brands." />
        <meta name="twitter:image" content="https://sociapa.com/logoSociapa.png" />
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
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sociapa.com/" }, { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://sociapa.com/our-services" }, { "@type": "ListItem", "position": 3, "name": "Brand Strategy Agency India | Sociapa", "item": "https://sociapa.com/brand-strategy" }] })}</script>
      </Helmet>

      {/* Hero Banner Section */}
      <section className="hero-banner-section">
        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
          Brand Strategy Agency India - Sociapa
        </h1>
        <picture>
          <source type="image/webp" srcSet={`${base}assets/images/services_banner/brand_strategy/brand_start.webp`} />
          <img
            src={`${base}assets/images/services_banner/brand_strategy/brand_start.webp`}
            alt="Build a Brand with Direction Not Just Design - Brand Strategy Sociapa"
            className="hero-banner-img"
            decoding="async"
            width="1920"
            height="700"
            loading="eager"
            fetchpriority="high"
          />
        </picture>
      </section>

      {/* Stats Bar */}
      <div className="stats-bar">
        <div className="stats-inner">
          <div className="stat-item">
            <div className="stat-num">160+</div>
            <div className="stat-label">Brands Strategised</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">8+</div>
            <div className="stat-label">Years of Expertise</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">12+</div>
            <div className="stat-label">Industries Served</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">95%</div>
            <div className="stat-label">Client Retention Rate</div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services">
        <div className="section-header">
          <span className="section-tag">What We Do</span>
          <h2>Full-Spectrum <span>Brand Strategy Services</span></h2>
          <div className="divider"></div>
          <p className="section-sub">
            We go beyond logos and colours, building the strategic foundation your brand needs to resonate, differentiate, and grow.
          </p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/brand_strategy/competitor_analysis.png`}
                alt="Competitor Analysis"
              />
            </div>
            <h3>Competitor Analysis</h3>
            <p>
              In-depth mapping of your competitive landscape, understanding what your competitors do well, where gaps exist, and how to position your brand for a decisive advantage in the market.
            </p>
            <div className="service-tags">
              <span className="tag">Market Research</span>
              <span className="tag">Competitive Intelligence</span>
              <span className="tag">SWOT Analysis</span>
              <span className="tag">Gap Mapping</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/brand_strategy/user_persona_development.png`}
                alt="User Persona Development"
              />
            </div>
            <h3>User Persona Development</h3>
            <p>
              We research and build detailed buyer personas, including psychographics, pain points, motivations, and buying behaviour, so every brand message speaks directly to the right audience.
            </p>
            <div className="service-tags">
              <span className="tag">Audience Research</span>
              <span className="tag">Psychographics</span>
              <span className="tag">Buyer Journey</span>
              <span className="tag">Customer Insights</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/brand_strategy/brand_positioning_and_storyline.png`}
                alt="Brand Positioning & Storyline"
              />
            </div>
            <h3>Brand Positioning &amp; Storyline</h3>
            <p>
              Define your unique market position and craft a brand story that sticks. We develop positioning statements, value propositions, and brand narratives that cut through the noise.
            </p>
            <div className="service-tags">
              <span className="tag">Brand Positioning</span>
              <span className="tag">Value Proposition</span>
              <span className="tag">Brand Narrative</span>
              <span className="tag">Messaging Framework</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/brand_strategy/brand_archetype_definition.png`}
                alt="Brand Archetype Definition"
              />
            </div>
            <h3>Brand Archetype Definition</h3>
            <p>
              Discover the universal archetype that drives your brand's personality, whether Hero, Creator, Sage, or Outlaw, and build an authentic emotional connection with your audience.
            </p>
            <div className="service-tags">
              <span className="tag">Brand Archetype</span>
              <span className="tag">Brand Personality</span>
              <span className="tag">Emotional Branding</span>
              <span className="tag">Brand Voice</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/brand_strategy/brand_naming_and_tagline.png`}
                alt="Brand Naming & Tagline"
              />
            </div>
            <h3>Brand Naming &amp; Tagline</h3>
            <p>
              Develop a brand name and tagline that are memorable, trademarkable, and deeply aligned with your brand strategy. We test names for domain availability, cultural relevance, and audience resonance.
            </p>
            <div className="service-tags">
              <span className="tag">Brand Naming</span>
              <span className="tag">Tagline Creation</span>
              <span className="tag">Trademark Check</span>
              <span className="tag">Domain Availability</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/brand_strategy/brand_audit.png`}
                alt="Brand Audit"
              />
            </div>
            <h3>Brand Audit</h3>
            <p>
              A comprehensive review of your existing brand, including your visual identity, messaging, digital presence, and customer perception, with actionable recommendations to strengthen every brand touchpoint.
            </p>
            <div className="service-tags">
              <span className="tag">Brand Health Check</span>
              <span className="tag">Identity Audit</span>
              <span className="tag">Perception Survey</span>
              <span className="tag">Touchpoint Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* Toolkit / Frameworks Section */}
      <section id="tools">
        <div className="section-header">
          <span className="section-tag">Our Toolkit</span>
          <h2>Strategy Frameworks We <span>Rely On</span></h2>
          <div className="divider"></div>
          <p className="section-sub">
            Proven models and research tools that power sharp, insight-driven brand strategy.
          </p>
        </div>
        <div className="tech-grid">
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/brand_strategy/brand_mapping.png`}
                alt="Brand Mapping"
              />
            </span>
            <span>Brand Mapping</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/brand_strategy/swot_analysis.png`}
                alt="SWOT Analysis"
              />
            </span>
            <span>SWOT Analysis</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/brand_strategy/perceptual_mapping.png`}
                alt="Perceptual Mapping"
              />
            </span>
            <span>Perceptual Mapping</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/brand_strategy/jobs_to_be_done.png`}
                alt="Jobs-to-be-Done"
              />
            </span>
            <span>Jobs-to-be-Done</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/brand_strategy/archetype_framework.png`}
                alt="Archetype Framework"
              />
            </span>
            <span>Archetype Framework</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/brand_strategy/primary_research.png`}
                alt="Primary Research"
              />
            </span>
            <span>Primary Research</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/brand_strategy/focus_groups.png`}
                alt="Focus Groups"
              />
            </span>
            <span>Focus Groups</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/brand_strategy/semrush.png`}
                alt="SEMrush"
              />
            </span>
            <span>SEMrush / Ahrefs</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/brand_strategy/brand_strategy_doc.png`}
                alt="Brand Strategy Doc"
              />
            </span>
            <span>Brand Strategy Doc</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/brand_strategy/positioning_canvas.png`}
                alt="Positioning Canvas"
              />
            </span>
            <span>Positioning Canvas</span>
          </div>
        </div>
      </section>

      {/* Portfolio / Our Work Section */}
      <ServiceOurWorkSection
        work={serviceClientSectionsData['brand-strategy']?.work}
        subtitle="Strategic brand positioning and narrative frameworks delivered for growth-focused brands."
      />

      {/* 5-Step Process Section */}
      <section id="process">
        <div className="section-header">
          <span className="section-tag">How We Work</span>
          <h2>Our <span>5-Step Brand Strategy</span> Process</h2>
          <div className="divider"></div>
        </div>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-num">
              <img
                src={`${base}assets/images/services_icons/brand_strategy/discovery.png`}
                alt="Discovery"
              />
            </div>
            <h4>Discovery</h4>
            <p>Deep brand discovery sessions to understand your vision, values, goals, and current brand challenges.</p>
          </div>
          <div className="process-step">
            <div className="step-num">
              <img
                src={`${base}assets/images/services_icons/brand_strategy/research.png`}
                alt="Research"
              />
            </div>
            <h4>Research</h4>
            <p>Market research, competitor analysis, and user persona development based on primary and secondary research.</p>
          </div>
          <div className="process-step">
            <div className="step-num">
              <img
                src={`${base}assets/images/services_icons/brand_strategy/strategy_build.png`}
                alt="Strategy Build"
              />
            </div>
            <h4>Strategy Build</h4>
            <p>Developing brand positioning, brand archetypes, messaging hierarchy, and a compelling brand narrative aligned with your business objectives.</p>
          </div>
          <div className="process-step">
            <div className="step-num">
              <img
                src={`${base}assets/images/services_icons/brand_strategy/brand_document.png`}
                alt="Brand Document"
              />
            </div>
            <h4>Brand Document</h4>
            <p>A comprehensive brand strategy document, serving as the single source of truth for all brand decisions.</p>
          </div>
          <div className="process-step">
            <div className="step-num">
              <img
                src={`${base}assets/images/services_icons/brand_strategy/activation.png`}
                alt="Activation"
              />
            </div>
            <h4>Activation</h4>
            <p>Strategic guidance on activating your brand across digital and offline touchpoints for maximum impact.</p>
          </div>
        </div>
      </section>

      {/* Why Sociapa Section */}
      <section id="why">
        <div className="section-header">
          <span className="section-tag">Why Sociapa</span>
          <h2>Strategy That Goes <span>Beyond Theory</span></h2>
          <div className="divider" style={{ background: 'rgba(255,255,255,0.3)' }}></div>
          <p className="section-sub">
            We don't just hand you a document. We build brand strategies designed to be executed, measured, and drive real business growth.
          </p>
        </div>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/brand_strategy/160plus_brands_delivered.png`}
                alt="160+ Brands Delivered"
              />
            </div>
            <h3>160+ Brands Delivered</h3>
            <p>We've developed brand strategies for over 160 brands across D2C, FMCG, healthcare, lifestyle, and B2B, bringing cross-category expertise to every engagement.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/brand_strategy/research_first_approach.png`}
                alt="Research-First Approach"
              />
            </div>
            <h3>Research-First Approach</h3>
            <p>Every strategy is grounded in real data, including consumer surveys, competitor audits, search trend analysis, and social listening, not assumptions.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/brand_strategy/execution_ready_deliverables.png`}
                alt="Execution-Ready Deliverables"
              />
            </div>
            <h3>Execution-Ready Deliverables</h3>
            <p>Our strategy documents are built to be used, with a clear, structured format that is ready to brief your design, marketing, and content teams immediately.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/brand_strategy/full_funnel_integration.png`}
                alt="Full-Funnel Integration"
              />
            </div>
            <h3>Full-Funnel Integration</h3>
            <p>Brand strategy delivered in the context of digital marketing, content, and creative, ensuring every channel activation is aligned with your brand positioning.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/brand_strategy/d2c_and_startup_specialists.png`}
                alt="D2C & Startup Specialists"
              />
            </div>
            <h3>D2C &amp; Startup Specialists</h3>
            <p>Deep expertise with early-stage and growth-stage brands, with a clear understanding of the unique constraints and opportunities of building a brand in competitive D2C markets.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/brand_strategy/confidential_and_ip_protected.png`}
                alt="Confidential & IP-Protected"
              />
            </div>
            <h3>Confidential &amp; IP-Protected</h3>
            <p>All brand strategy work is protected under NDA, ensuring your market insights, competitive intelligence, and brand positioning remain completely confidential and exclusively yours.</p>
          </div>
        </div>
      </section>

      {/* Behind the Work Section */}
      <ServiceBehindWorkSection
        testimonials={serviceClientSectionsData['brand-strategy']?.testimonials}
      />

      {/* Featured Case Studies Slider */}
      <ServiceCaseStudiesSlider />

      {/* FAQ Section */}
      <section id="faq">
        <div className="section-header">
          <span className="section-tag">FAQ</span>
          <h2>Brand Strategy <span>Questions Answered</span></h2>
          <div className="divider"></div>
          <p className="section-sub">
            Everything you need to know before starting your brand strategy journey with Sociapa.
          </p>
        </div>
        <div className="faq-list">
          {faqsData.map((faq, idx) => (
            <div key={idx} className={`faq-item ${openFaq === idx ? 'open' : ''}`}>
              <div className="faq-q" onClick={() => toggleFaq(idx)}>
                {faq.q}
                <span className="faq-icon">{openFaq === idx ? '−' : '+'}</span>
              </div>
              <div className="faq-a">
                <p dangerouslySetInnerHTML={{ __html: faq.a }}></p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta">
        <h2>Ready to Build a Brand That <span>Stands the Test of Time?</span></h2>
        <p>Schedule a free brand strategy consultation and discover what it takes to own your category.</p>
        <div className="cta-buttons">
          <a href="mailto:mail@sociapa.com" className="btn-white">Get a Free Strategy Call</a>
          <a
            href="https://wa.me/917011057175"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-white"
          >
            WhatsApp Us
          </a>
        </div>
      </section>
    </div>
  );
}
