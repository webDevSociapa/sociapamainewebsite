import React, { useState, useEffect } from 'react';
import './SeoAeoGeo.css';

const faqsData = [
  {
    "q": "What SEO services does Sociapa offer?",
    "a": "<p>We provide end-to-end SEO services, including Technical SEO, On-Page SEO, Local SEO, Link Building, Answer Engine Optimisation (AEO), Generative Engine Optimisation (GEO), content strategy, and ongoing performance reporting.</p>"
  },
  {
    "q": "What is the difference between SEO, AEO, and GEO?",
    "a": "<p>SEO improves your visibility in traditional search results, AEO helps your content appear in Featured Snippets and voice search, while GEO optimises your brand for AI-powered platforms like ChatGPT, Gemini, Perplexity, Claude, and Google AI Overviews.</p>"
  },
  {
    "q": "Can Sociapa help my brand appear in AI-generated search results?",
    "a": "<p>Yes. Our GEO strategies are designed to improve your brand's visibility across AI-powered search experiences by optimising content, brand entities, structured data, and authoritative signals.</p>"
  },
  {
    "q": "Do you optimise websites for local search?",
    "a": "<p>Yes. We optimise your Google Business Profile, local citations, customer reviews, and location-based content to improve rankings in Google Maps and local search results.</p>"
  },
  {
    "q": "How do you improve website rankings?",
    "a": "<p>Our approach combines technical SEO, keyword research, on-page optimisation, content strategy, authority building, and high-quality backlink acquisition to improve rankings, organic visibility, and long-term search performance.</p>"
  },
  {
    "q": "Do you provide monthly SEO reports?",
    "a": "<p>Yes. You'll receive live performance dashboards and detailed monthly reports covering keyword rankings, organic traffic, Featured Snippets, AI visibility, and overall SEO performance.</p>"
  },
  {
    "q": "Does your SEO team also create content?",
    "a": "<p>Absolutely. Our SEO specialists work alongside our in-house content writers and designers to produce search-optimised content that ranks well, engages your audience, and supports your business goals.</p>"
  },
  {
    "q": "Why choose Sociapa for SEO?",
    "a": "<p>Unlike traditional SEO agencies, Sociapa combines SEO, AEO, and GEO into one integrated strategy—helping your brand stay visible across Google Search, AI-powered platforms, voice search, and the next generation of search experiences.</p>"
  }
];

export default function SeoAeoGeo() {
    const [openFaq, setOpenFaq] = useState(null);
    const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return (<>
<section className="seoaeogeo-hero">
  <div className="seoaeogeo-hero-blob hero-blob-1"></div>
  <div className="seoaeogeo-hero-blob hero-blob-2"></div>
  <div className="seoaeogeo-hero-content">
    <div className="seoaeogeo-hero-badge"><span className="seoaeogeo-hero-badge-dot"></span>Search · AI · Voice — Future-Ready Visibility</div>
    <h1>Rank on Google. <span>Answer AI. Win Every Search.</span></h1>
    <p>Stay visible across the entire search ecosystem with Sociapa's future-ready SEO, AEO, and GEO strategies. We optimise your brand for Google Search, AI platforms, voice search, and emerging search experiences, helping customers find your business wherever they search..</p>
    <div className="seoaeogeo-hero-buttons">
      <a href="#pillars" className="btn-white">Explore SEO, AEO &amp; GEO</a>
      <a href="mailto:mail@sociapa.com" className="btn-outline-white">Get a Free SEO Audit</a>
    </div>
    <div className="pillar-tabs">
      <div className="pillar-tab"><strong>SEO</strong><span>Search Engine Optimisation</span></div>
      <div className="pillar-tab"><strong>AEO</strong><span>Answer Engine Optimisation</span></div>
      <div className="pillar-tab"><strong>GEO</strong><span>Generative Engine Optimisation</span></div>
    </div>
  </div>
</section>

<div className="stats-bar">
  <div className="stat-item"><div className="stat-num">200+</div><div className="stat-label">Brands Ranked</div></div>
  <div className="stat-item"><div className="stat-num">4.8×</div><div className="stat-label">Avg. Traffic Growth</div></div>
  <div className="stat-item"><div className="stat-num">8+</div><div className="stat-label">Years in Search Marketing</div></div>
  <div className="stat-item"><div className="stat-num">95%</div><div className="stat-label">Client Retention Rate</div></div>
</div>


<section id="services" className="seo-section-light">
  <div className="section-header">
    <span className="section-tag">What We Do</span>
    <h2>A Full-Spectrum <span>Search Visibility Service</span></h2>
    <div className="divider"></div>
    <p className="section-sub seo-sub-top">Search has evolved beyond Google rankings. Today, your brand needs to appear in AI-generated answers, featured snippets, voice search, and next-generation search experiences to stay visible.</p>
  </div>
  <div className="services-grid">
    <div className="service-card">
      <div className="service-icon">🔍</div>
      <h3>Technical SEO</h3>
      <p>Build a strong SEO foundation with technical audits covering Core Web Vitals, crawlability, indexation, structured data, and mobile performance to improve search rankings and user experience.</p>
      <div className="service-tags"><span className="tag">Core Web Vitals</span><span className="tag">Schema Markup</span><span className="tag">Crawl Optimisation</span><span className="tag">Page Speed</span></div>
    </div>
    <div className="service-card">
      <div className="service-icon">✍️</div>
      <h3>On-Page SEO &amp; Content Optimisation</h3>
      <p>Improve search rankings with keyword research, content optimisation, meta tags, internal linking, and on-page SEO designed to maximise organic visibility and match user intent.</p>
      <div className="service-tags"><span className="tag">Keyword Research</span><span className="tag">Content Clusters</span><span className="tag">Topical Authority</span><span className="tag">Intent Mapping</span></div>
    </div>
    <div className="service-card">
      <div className="service-icon">🔗</div>
      <h3>Off-Page SEO &amp; Link Building</h3>
      <p>Build website authority with high-quality backlinks through digital PR, editorial outreach, guest publishing, and expert placements to improve rankings and organic growth.</p>
      <div className="service-tags"><span className="tag">Link Building</span><span className="tag">Digital PR</span><span className="tag">Domain Authority</span><span className="tag">Brand Mentions</span></div>
    </div>
    <div className="service-card">
      <div className="service-icon">🎤</div>
      <h3>Answer Engine Optimisation (AEO)</h3>
      <p>Increase your visibility in Featured Snippets, People Also Ask, Knowledge Panels, and voice search with content optimised for answer-based search experiences.</p>
      <div className="service-tags"><span className="tag">Featured Snippets</span><span className="tag">PAA Boxes</span><span className="tag">Voice Search</span><span className="tag">Knowledge Graph</span></div>
    </div>
    <div className="service-card">
      <div className="service-icon">🤖</div>
      <h3>Generative Engine Optimisation (GEO)</h3>
      <p>Prepare your brand for AI-powered search with Generative Engine Optimisation (GEO). We optimise your content to improve visibility across ChatGPT, Gemini, Perplexity, Claude, and Google AI Overviews.</p>
      <div className="service-tags"><span className="tag">AI Overviews</span><span className="tag">ChatGPT Visibility</span><span className="tag">Perplexity SEO</span><span className="tag">LLM Optimisation</span></div>
    </div>
    <div className="service-card">
      <div className="service-icon">📍</div>
      <h3>Local SEO &amp; Google Business Profile</h3>
      <p>Boost your local visibility with optimised Google Business Profile management, local citations, review optimisation, and geo-targeted content strategies. We help your business rank higher in local search results and Google Maps, driving more nearby customers to your brand. </p>
      <div className="service-tags"><span className="tag">Google Business Profile</span><span className="tag">Local Citations</span><span className="tag">Review Management</span><span className="tag">Geo-Targeting</span></div>
    </div>
  </div>
</section>


<section id="pillars" className="seo-section-white">
  <div className="section-header">
    <span className="section-tag">The Three Pillars</span>
    <h2>SEO, AEO &amp; GEO — <span>What Each Means</span></h2>
    <div className="divider"></div>
    <p className="section-sub seo-sub-top">Search is no longer a single channel. Sociapa covers all three dimensions of modern search visibility so your brand captures every discovery opportunity.</p>
  </div>

  
  <div className="pillar-block">
    <div className="pillar-visual">
      <div className="pillar-label">Pillar 1</div>
      <div className="pillar-visual-icon">🔍</div>
      <h3>SEO</h3>
      <p>Search Engine Optimisation — rank higher on Google and Bing for the keywords your customers are actively searching.</p>
    </div>
    <div className="pillar-content">
      <span className="section-tag">Search Engine Optimisation</span>
      <h2>Earn Organic <span>Traffic That Compounds</span></h2>
      <p className="section-sub seo-sub-bottom">Prepare your brand for AI-powered search with GEO. We optimise your content to improve visibility across ChatGPT, Gemini, Perplexity, Claude, and Google AI Overviews.</p>
      <ul className="pillar-checklist">
        <li><span className="check-icon"></span>Comprehensive technical SEO audits, including Core Web Vitals, crawlability, indexation, and structured data</li>
        <li><span className="check-icon"></span>Keyword research and search intent mapping across the customer journey</li>
        <li><span className="check-icon"></span>Content strategy with topic clusters, pillar pages, and topical authority development</li>
        <li><span className="check-icon"></span>On-page SEO optimisation, including meta tags, headings, internal linking, and content enhancements</li>
        <li><span className="check-icon"></span>High-authority link building through digital PR, editorial outreach, and expert placements</li>
        <li><span className="check-icon"></span>Transparent monthly reporting on rankings, organic traffic, and SEO performance</li>
      </ul>
    </div>
  </div>

  
  <div className="pillar-block reverse">
    <div className="pillar-visual">
      <div className="pillar-label">Pillar 2</div>
      <div className="pillar-visual-icon">🎤</div>
      <h3>AEO</h3>
      <p>Answer Engine Optimisation — appear in Featured Snippets, voice answers, PAA boxes, and Knowledge Panels.</p>
    </div>
    <div className="pillar-content">
      <span className="section-tag">Answer Engine Optimisation</span>
      <h2>Win <span>Zero-Click Search</span> Results</h2>
      <p className="section-sub seo-sub-bottom">Answer Engine Optimisation (AEO) helps your brand appear in featured snippets, answer boxes, and voice search by optimising your content and website for answer-driven search experiences.</p>
      <ul className="pillar-checklist">
            <li><span className="check-icon"></span>Featured Snippet optimisation for paragraph, list, and table results</li>
            <li><span className="check-icon"></span>People Also Ask (PAA) targeting with structured Q&amp;A content</li>
            <li><span className="check-icon"></span>FAQ, HowTo, and Speakable Schema implementation</li>
            <li><span className="check-icon"></span>Voice search optimisation for conversational search queries</li>
            <li><span className="check-icon"></span>Knowledge Panel optimisation for brands and founders</li>
            <li><span className="check-icon"></span>Local answer optimisation for "near me" and location-based searches</li>
        </ul>
    </div>
  </div>

  
  <div className="pillar-block">
    <div className="pillar-visual">
      <div className="pillar-label">Pillar 3</div>
      <div className="pillar-visual-icon">🤖</div>
      <h3>GEO</h3>
      <p>Generative Engine Optimisation — get cited by ChatGPT, Gemini, Perplexity, and Google AI Overviews.</p>
    </div>
    <div className="pillar-content">
      <span className="section-tag">Generative Engine Optimisation</span>
      <h2>Be the Brand <span>AI Recommends</span></h2>
      <p className="section-sub seo-sub-bottom">Generative Engine Optimisation (GEO) helps your brand stay visible across AI-powered search. We optimise your website and content to increase visibility and improve your chances of being cited in AI-generated responses.</p>
      <ul className="pillar-checklist">
        <li><span className="check-icon"></span>Optimisation for Google AI Overviews and AI-generated search results</li>
        <li><span className="check-icon"></span>Brand entity optimisation to strengthen AI recognition and authority</li>
        <li><span className="check-icon"></span>Citation-worthy content creation backed by research and expertise</li>
        <li><span className="check-icon"></span>Structured data and E-E-A-T optimisation for AI discoverability</li>
        <li><span className="check-icon"></span>AI visibility audits across ChatGPT, Perplexity, and other leading AI platforms</li>
        <li><span className="check-icon"></span>Continuous GEO monitoring and optimisation as AI search evolves</li>
     </ul>
    </div>
  </div>
</section>


<section id="tools" className="seo-section-light">
  <div className="section-header">
    <span className="section-tag">Our Tech Stack</span>
    <h2>Tools We Use to <span>Drive Search Growth</span></h2>
    <div className="divider"></div>
  </div>
  <div className="tech-grid">
    <div className="tech-chip"><span>SEMrush</span></div>
    <div className="tech-chip"><span>Ahrefs</span></div>
    <div className="tech-chip"><span>Google Search Console</span></div>
    <div className="tech-chip"><span>Google Analytics 4</span></div>
    <div className="tech-chip"><span>PageSpeed Insights</span></div>
    <div className="tech-chip"><span>Screaming Frog</span></div>
    <div className="tech-chip"><span>Surfer SEO</span></div>
    <div className="tech-chip"><span>AnswerThePublic</span></div>
    <div className="tech-chip"><span>Perplexity AI</span></div>
    <div className="tech-chip"><span>Google AI Studio</span></div>
    <div className="tech-chip"><span>Schema.org Validator</span></div>
    <div className="tech-chip"><span>BrightLocal</span></div>
  </div>
</section>

<div className="stats-bar">
  <div className="stat-item"><div className="stat-num">200+</div><div className="stat-label">Brands Ranked</div></div>
  <div className="stat-item"><div className="stat-num">4.8×</div><div className="stat-label">Avg. Traffic Growth</div></div>
  <div className="stat-item"><div className="stat-num">8+</div><div className="stat-label">Years in Search Marketing</div></div>
  <div className="stat-item"><div className="stat-num">95%</div><div className="stat-label">Client Retention Rate</div></div>
</div>


<section id="services" className="seo-section-light">
  <div className="section-header">
    <span className="section-tag">What We Do</span>
    <h2>A Full-Spectrum <span>Search Visibility Service</span></h2>
    <div className="divider"></div>
    <p className="section-sub seo-sub-top">Search has evolved beyond Google rankings. Today, your brand needs to appear in AI-generated answers, featured snippets, voice search, and next-generation search experiences to stay visible.</p>
  </div>
  <div className="services-grid">
    <div className="service-card">
      <div className="service-icon">🔍</div>
      <h3>Technical SEO</h3>
      <p>Build a strong SEO foundation with technical audits covering Core Web Vitals, crawlability, indexation, structured data, and mobile performance to improve search rankings and user experience.</p>
      <div className="service-tags"><span className="tag">Core Web Vitals</span><span className="tag">Schema Markup</span><span className="tag">Crawl Optimisation</span><span className="tag">Page Speed</span></div>
    </div>
    <div className="service-card">
      <div className="service-icon">✍️</div>
      <h3>On-Page SEO &amp; Content Optimisation</h3>
      <p>Improve search rankings with keyword research, content optimisation, meta tags, internal linking, and on-page SEO designed to maximise organic visibility and match user intent.</p>
      <div className="service-tags"><span className="tag">Keyword Research</span><span className="tag">Content Clusters</span><span className="tag">Topical Authority</span><span className="tag">Intent Mapping</span></div>
    </div>
    <div className="service-card">
      <div className="service-icon">🔗</div>
      <h3>Off-Page SEO &amp; Link Building</h3>
      <p>Build website authority with high-quality backlinks through digital PR, editorial outreach, guest publishing, and expert placements to improve rankings and organic growth.</p>
      <div className="service-tags"><span className="tag">Link Building</span><span className="tag">Digital PR</span><span className="tag">Domain Authority</span><span className="tag">Brand Mentions</span></div>
    </div>
    <div className="service-card">
      <div className="service-icon">🎤</div>
      <h3>Answer Engine Optimisation (AEO)</h3>
      <p>Increase your visibility in Featured Snippets, People Also Ask, Knowledge Panels, and voice search with content optimised for answer-based search experiences.</p>
      <div className="service-tags"><span className="tag">Featured Snippets</span><span className="tag">PAA Boxes</span><span className="tag">Voice Search</span><span className="tag">Knowledge Graph</span></div>
    </div>
    <div className="service-card">
      <div className="service-icon">🤖</div>
      <h3>Generative Engine Optimisation (GEO)</h3>
      <p>Prepare your brand for AI-powered search with Generative Engine Optimisation (GEO). We optimise your content to improve visibility across ChatGPT, Gemini, Perplexity, Claude, and Google AI Overviews.</p>
      <div className="service-tags"><span className="tag">AI Overviews</span><span className="tag">ChatGPT Visibility</span><span className="tag">Perplexity SEO</span><span className="tag">LLM Optimisation</span></div>
    </div>
    <div className="service-card">
      <div className="service-icon">📍</div>
      <h3>Local SEO &amp; Google Business Profile</h3>
      <p>Boost your local visibility with optimised Google Business Profile management, local citations, review optimisation, and geo-targeted content strategies. We help your business rank higher in local search results and Google Maps, driving more nearby customers to your brand. </p>
      <div className="service-tags"><span className="tag">Google Business Profile</span><span className="tag">Local Citations</span><span className="tag">Review Management</span><span className="tag">Geo-Targeting</span></div>
    </div>
  </div>
</section>


<section id="pillars" className="seo-section-white">
  <div className="section-header">
    <span className="section-tag">The Three Pillars</span>
    <h2>SEO, AEO &amp; GEO — <span>What Each Means</span></h2>
    <div className="divider"></div>
    <p className="section-sub seo-sub-top">Search is no longer a single channel. Sociapa covers all three dimensions of modern search visibility so your brand captures every discovery opportunity.</p>
  </div>

  
  <div className="pillar-block">
    <div className="pillar-visual">
      <div className="pillar-label">Pillar 1</div>
      <div className="pillar-visual-icon">🔍</div>
      <h3>SEO</h3>
      <p>Search Engine Optimisation — rank higher on Google and Bing for the keywords your customers are actively searching.</p>
    </div>
    <div className="pillar-content">
      <span className="section-tag">Search Engine Optimisation</span>
      <h2>Earn Organic <span>Traffic That Compounds</span></h2>
      <p className="section-sub seo-sub-bottom">Prepare your brand for AI-powered search with GEO. We optimise your content to improve visibility across ChatGPT, Gemini, Perplexity, Claude, and Google AI Overviews.</p>
      <ul className="pillar-checklist">
        <li><span className="check-icon"></span>Comprehensive technical SEO audits, including Core Web Vitals, crawlability, indexation, and structured data</li>
        <li><span className="check-icon"></span>Keyword research and search intent mapping across the customer journey</li>
        <li><span className="check-icon"></span>Content strategy with topic clusters, pillar pages, and topical authority development</li>
        <li><span className="check-icon"></span>On-page SEO optimisation, including meta tags, headings, internal linking, and content enhancements</li>
        <li><span className="check-icon"></span>High-authority link building through digital PR, editorial outreach, and expert placements</li>
        <li><span className="check-icon"></span>Transparent monthly reporting on rankings, organic traffic, and SEO performance</li>
      </ul>
    </div>
  </div>

  
  <div className="pillar-block reverse">
    <div className="pillar-visual">
      <div className="pillar-label">Pillar 2</div>
      <div className="pillar-visual-icon">🎤</div>
      <h3>AEO</h3>
      <p>Answer Engine Optimisation — appear in Featured Snippets, voice answers, PAA boxes, and Knowledge Panels.</p>
    </div>
    <div className="pillar-content">
      <span className="section-tag">Answer Engine Optimisation</span>
      <h2>Win <span>Zero-Click Search</span> Results</h2>
      <p className="section-sub seo-sub-bottom">Answer Engine Optimisation (AEO) helps your brand appear in featured snippets, answer boxes, and voice search by optimising your content and website for answer-driven search experiences.</p>
      <ul className="pillar-checklist">
            <li><span className="check-icon"></span>Featured Snippet optimisation for paragraph, list, and table results</li>
            <li><span className="check-icon"></span>People Also Ask (PAA) targeting with structured Q&amp;A content</li>
            <li><span className="check-icon"></span>FAQ, HowTo, and Speakable Schema implementation</li>
            <li><span className="check-icon"></span>Voice search optimisation for conversational search queries</li>
            <li><span className="check-icon"></span>Knowledge Panel optimisation for brands and founders</li>
            <li><span className="check-icon"></span>Local answer optimisation for "near me" and location-based searches</li>
        </ul>
    </div>
  </div>

  
  <div className="pillar-block">
    <div className="pillar-visual">
      <div className="pillar-label">Pillar 3</div>
      <div className="pillar-visual-icon">🤖</div>
      <h3>GEO</h3>
      <p>Generative Engine Optimisation — get cited by ChatGPT, Gemini, Perplexity, and Google AI Overviews.</p>
    </div>
    <div className="pillar-content">
      <span className="section-tag">Generative Engine Optimisation</span>
      <h2>Be the Brand <span>AI Recommends</span></h2>
      <p className="section-sub seo-sub-bottom">Generative Engine Optimisation (GEO) helps your brand stay visible across AI-powered search. We optimise your website and content to increase visibility and improve your chances of being cited in AI-generated responses.</p>
      <ul className="pillar-checklist">
        <li><span className="check-icon"></span>Optimisation for Google AI Overviews and AI-generated search results</li>
        <li><span className="check-icon"></span>Brand entity optimisation to strengthen AI recognition and authority</li>
        <li><span className="check-icon"></span>Citation-worthy content creation backed by research and expertise</li>
        <li><span className="check-icon"></span>Structured data and E-E-A-T optimisation for AI discoverability</li>
        <li><span className="check-icon"></span>AI visibility audits across ChatGPT, Perplexity, and other leading AI platforms</li>
        <li><span className="check-icon"></span>Continuous GEO monitoring and optimisation as AI search evolves</li>
     </ul>
    </div>
  </div>
</section>


<section id="tools" className="seo-section-light">
  <div className="section-header">
    <span className="section-tag">Our Tech Stack</span>
    <h2>Tools We Use to <span>Drive Search Growth</span></h2>
    <div className="divider"></div>
  </div>
  <div className="tech-grid">
    <div className="tech-chip"><span>SEMrush</span></div>
    <div className="tech-chip"><span>Ahrefs</span></div>
    <div className="tech-chip"><span>Google Search Console</span></div>
    <div className="tech-chip"><span>Google Analytics 4</span></div>
    <div className="tech-chip"><span>PageSpeed Insights</span></div>
    <div className="tech-chip"><span>Screaming Frog</span></div>
    <div className="tech-chip"><span>Surfer SEO</span></div>
    <div className="tech-chip"><span>AnswerThePublic</span></div>
    <div className="tech-chip"><span>Perplexity AI</span></div>
    <div className="tech-chip"><span>Google AI Studio</span></div>
    <div className="tech-chip"><span>Schema.org Validator</span></div>
    <div className="tech-chip"><span>BrightLocal</span></div>
  </div>
</section>


<section id="process" className="seo-section-white">
  <div className="section-header">
    <span className="section-tag">How We Work</span>
    <h2>Our SEO + AEO + GEO <span>Engagement Process</span></h2>
    <div className="divider"></div>
  </div>
  <div className="process-steps">
    <div className="process-step">
      <div className="step-num">🔬</div>
      <h3>Audit &amp; Discovery</h3>
      <p>Full technical SEO audit, keyword landscape mapping, competitor visibility analysis, and current AI mention tracking.</p>
    </div>
    <div className="process-step">
      <div className="step-num">🎯</div>
      <h3>Strategy Build</h3>
      <p>Custom SEO, AEO, and GEO roadmap with prioritised actions, keyword targets, content plan, and 90-day milestones.</p>
    </div>
    <div className="process-step">
      <div className="step-num">⚙️</div>
      <h3>Technical Fix</h3>
      <p>Implement all technical SEO fixes — site speed, structured data, crawl errors, mobile optimisation, and Core Web Vitals.</p>
    </div>
    <div className="process-step">
      <div className="step-num">✍️</div>
      <h3>Content &amp; Schema</h3>
      <p>Publish optimised content, FAQ schema, HowTo schema, Speakable markup, and entity-building editorial for AEO and GEO.</p>
    </div>
    <div className="process-step">
      <div className="step-num">🔗</div>
      <h3>Authority Building</h3>
      <p>Digital PR campaigns, link acquisition, brand mentions, and citation building to grow domain authority and LLM trust.</p>
    </div>
    <div className="process-step">
      <div className="step-num">📊</div>
      <h3>Report &amp; Optimise</h3>
      <p>Monthly ranking, traffic, snippet, and AI citation reports with continuous optimisation based on performance data.</p>
    </div>
  </div>
</section>


<section id="why" className="seo-why-section">
  <div className="section-header">
    <span className="section-tag">Why Sociapa</span>
    <h2>The Only SEO Partner <span>That Covers All Three Frontiers</span></h2>
    <div className="divider divider-white"></div>
    <p className="section-sub seo-sub-why">Most SEO agencies focus only on traditional search. Sociapa combines SEO, AEO, and GEO to keep your brand visible across Google, AI-powered search, voice assistants, and next-generation search experiences.</p>
  </div>
  <div className="why-grid">

    <div className="why-card">
        <div className="why-icon">🚀</div>
        <h3>Full-Spectrum Search Coverage</h3>
        <p>We optimise your brand for every modern search experience—not just Google's first page. From Featured Snippets and Google AI Overviews to ChatGPT, Perplexity, and voice search, we help your business stay visible wherever customers look for answers.</p>
    </div>

    <div className="why-card">
        <div className="why-icon">📊</div>
        <h3>Data-Driven, Not Guesswork</h3>
        <p>Every strategy is driven by real performance data—not guesswork. From keyword rankings and organic traffic to AI visibility and brand mentions, we continuously measure, optimise, and report on the metrics that matter most to your business.</p>
    </div>

    <div className="why-card">
        <div className="why-icon">🏭</div>
        <h3>Category Expertise in D2C &amp; FMCG</h3>
        <p>With experience growing 200+ brands across beauty, health, food, lifestyle, and D2C industries, we understand category-specific search trends, buyer intent, and competitive keyword strategies that drive higher rankings, qualified traffic, and sustainable business growth.</p>
    </div>

    <div className="why-card">
        <div className="why-icon">🔮</div>
        <h3>Future-Proof SEO Strategy</h3>
        <p>Search is constantly evolving, and so are we. From Google algorithm updates and AI Overviews to emerging AI search platforms, we continuously adapt our strategies to keep your brand visible, competitive, and ahead of the curve.</p>
    </div>

    <div className="why-card">
        <div className="why-icon">🤝</div>
        <h3>Content + SEO in One Team</h3>
        <p>Our SEO specialists work closely with in-house content writers and designers to create search-optimised content that ranks and converts. With strategy, content, and execution under one roof, you get faster delivery, consistent quality, and better SEO results.</p>
    </div>

    <div className="why-card">
        <div className="why-icon">📋</div>
        <h3>Monthly Transparency Reports</h3>
        <p>Stay informed with live performance dashboards and easy-to-understand monthly reports. We track keyword rankings, organic traffic, featured snippets, AI visibility, and other key SEO metrics—giving you clear insights without the jargon.</p>
    </div>

    </div>
</section>


<section id="testimonials" className="seo-testimonials-section">
  <div className="section-header">
    <span className="section-tag">Client Voices</span>
    <h2>Brands That <span>Rank With Sociapa</span></h2>
    <div className="divider"></div>
  </div>
  <div className="testimonials-grid">
    <div className="testimonial-card">
      <div className="stars">★★★★★</div>
      <blockquote>"Sociapa took us from Page 4 to the top 3 results for our most competitive keywords within 5 months. More importantly, we now appear in Google's Featured Snippets for our entire product category — traffic from SEO has tripled."</blockquote>
      <div className="testimonial-author">
        <div className="author-avatar">RS</div>
        <div><div className="author-name">Rohit Sharma</div><div className="author-title">Founder, NutriKart (Health Supplements D2C)</div></div>
      </div>
    </div>
    <div className="testimonial-card">
      <div className="stars">★★★★★</div>
      <blockquote>"We started getting mentioned in ChatGPT responses for skincare advice questions — I didn't even know that was possible. Sociapa's GEO work has put our brand into AI conversations that our competitors haven't even thought about yet."</blockquote>
      <div className="testimonial-author">
        <div className="author-avatar">PM</div>
        <div><div className="author-name">Priya Mehta</div><div className="author-title">Marketing Director, GlowLab Beauty</div></div>
      </div>
    </div>
    <div className="testimonial-card">
      <div className="stars">★★★★★</div>
      <blockquote>"Our product pages now appear in Google's AI Overview section — something we never expected to achieve. Sociapa's integrated SEO, AEO, and GEO approach has given us visibility that paid ads simply can't replicate."</blockquote>
      <div className="testimonial-author">
        <div className="author-avatar">AK</div>
        <div><div className="author-name">Arjun Kapoor</div><div className="author-title">CEO, HouseOf (Home Décor Brand)</div></div>
      </div>
    </div>
  </div>
</section>


<section id="cta" className="seo-cta-section">
  <span className="section-tag seo-cta-tag">Ready to Dominate Search?</span>
  <h2 className="seo-cta-title">Get Your <span className="seo-cta-red-span">Free SEO, AEO &amp; GEO Audit</span></h2>
  <p className="seo-cta-desc">We'll audit your current search visibility across Google, voice, and AI platforms — and show you exactly what it will take to rank, feature, and be recommended across all three frontiers.</p>
  <div className="cta-buttons">
    <a href="mailto:mail@sociapa.com" className="btn-white">Request Your Free Audit</a>
    <a href="https://www.sociapa.com/our-services" className="btn-outline-white seo-cta-outline-btn">View All Services</a>
  </div>
</section>


<section id="faq" className="seo-faq-section">
  <div className="section-header">
    <span className="section-tag">FAQ</span>
    <h2>Everything You Want to Know About <span>SEO, AEO &amp; GEO</span></h2>
    <div className="divider"></div>
    <p className="section-sub seo-sub-top">Answers to the most common questions about search engine optimisation, answer engine optimisation, and generative engine optimisation.</p>
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
  <h2>Ready for an Identity That <span>Turns Heads & Builds Trust?</span></h2>
  <p>Share your brand vision and let us design a visual identity that stands the test of time.</p>
  <div className="cta-buttons">
    <a href="mailto:mail@sociapa.com" className="btn-white">Get a Design Proposal</a>
    <a href="https://wa.me/8375828920" className="btn-outline-white">WhatsApp Us</a>
  </div>
</section>


</>);
}
