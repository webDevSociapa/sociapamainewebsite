import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './DigitalMarketing.css';

const faqsData = [
  {
    "q": "What digital marketing services does Sociapa provide?",
    "a": "<p>Sociapa offers a complete range of digital marketing services, including Search Engine Optimization (SEO), Pay-Per-Click (PPC) advertising, social media marketing, affiliate marketing, content marketing, online reputation management, lead generation, and conversion optimization. Our integrated approach helps businesses increase online visibility, attract qualified customers, and achieve measurable growth.</p>"
  },
  {
    "q": "How do I know if my business needs digital marketing?",
    "a": "<p>If your customers search online for products or services similar to yours, digital marketing can help your business grow. Whether you are a startup, local business, ecommerce store, educational institution, healthcare provider, or enterprise brand, digital marketing allows you to reach potential customers where they spend most of their time online.</p>"
  },
  {
    "q": "What is the difference between SEO, PPC, and affiliate marketing?",
    "a": "<p>SEO focuses on improving organic search rankings to generate long-term traffic and visibility. PPC advertising delivers immediate traffic through paid ads, while affiliate marketing allows third-party publishers or partners to promote your products or services in exchange for commissions. Each strategy serves a different purpose and often performs best when integrated together.</p>"
  },
  {
    "q": "How much should a business invest in digital marketing?",
    "a": "<p>Digital marketing budgets vary depending on your industry, competition, target audience, geographic reach, and business objectives. Small businesses can begin with modest investments, while larger brands may require more aggressive budgets. Sociapa develops customized marketing plans that maximize return on investment while aligning with your business goals.</p>"
  },
  {
    "q": "How long does it take to see results from digital marketing?",
    "a": "<p>The timeline depends on the marketing channel being used. PPC campaigns can generate traffic and leads within days, while SEO generally requires several months to build sustainable rankings and organic visibility. Affiliate marketing performance depends on partner recruitment and campaign execution. We provide regular reporting and performance tracking throughout the process.</p>"
  },
  {
    "q": "Can digital marketing help generate qualified leads?",
    "a": "<p>Yes. Digital marketing enables precise audience targeting based on demographics, interests, search intent, behavior, and location. This ensures your campaigns reach potential customers who are most likely to convert, helping improve lead quality and increase overall marketing efficiency.</p>"
  },
  {
    "q": "How do you measure the success of a digital marketing campaign?",
    "a": "<p>We track key performance indicators such as website traffic, keyword rankings, conversion rates, leads generated, cost per acquisition, click-through rates, return on investment, and customer acquisition costs. Detailed reporting provides complete transparency and helps identify opportunities for continuous optimization.</p>"
  },
  {
    "q": "What factors influence search engine rankings?",
    "a": "<p>Search engine rankings are influenced by multiple factors, including content quality, website speed, mobile responsiveness, technical SEO, user experience, website authority, internal linking, and the quality of backlinks. A well-optimized website with valuable content generally performs better in search results.</p>"
  },
  {
    "q": "What industries can benefit from SEO?",
    "a": "<p>SEO benefits nearly every industry, including healthcare, education, real estate, legal services, hospitality, ecommerce, manufacturing, finance, technology, and local service businesses. Any organization looking to increase online visibility and attract customers through search engines can benefit from SEO.</p>"
  },
  {
    "q": "What is PPC advertising?",
    "a": "<p>PPC (Pay-Per-Click) advertising is a digital advertising model where businesses pay only when users click on their advertisements. Platforms such as Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads, and YouTube Ads allow businesses to reach targeted audiences and generate traffic, leads, and sales quickly.</p>"
  },
  {
    "q": "Is affiliate marketing suitable for every business?",
    "a": "<p>Affiliate marketing is particularly effective for ecommerce brands, subscription services, SaaS companies, educational platforms, and businesses seeking to expand their reach through partnerships. The strategy allows brands to scale customer acquisition while paying commissions only for successful conversions.</p>"
  },
  {
    "q": "Why should I choose Sociapa as my digital marketing partner?",
    "a": "<p>Sociapa combines strategic planning, industry expertise, performance-driven execution, transparent reporting, and personalized support to help businesses achieve sustainable growth. Our focus is on delivering measurable results, improving ROI, and building long-term digital success for our clients.</p>"
  }
];

export default function DigitalMarketing() {
    const [openFaq, setOpenFaq] = useState(null);
    const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return (<>

      <Helmet>
        <title>Best Digital Marketing Agency in Noida &amp; Delhi NCR - Sociapa</title>
        <meta name="description" content="Digital Marketing Agency in Noida & Delhi NCR- we strive to provide a perfect balance of method and product, with creative designs and guaranteed results. At Sociapa, we manage brands in the digital sphere with an innovative way." />
        <meta name="keywords" content="Digital Marketing" />
        <link rel="canonical" href="https://www.sociapa.com/digital-marketing/" />
        <meta property="og:title" content="Best Digital Marketing Agency in Noida & Delhi NCR - Sociapa" />
        <meta property="og:description" content="Digital Marketing Agency in Noida & Delhi NCR- we strive to provide a perfect balance of method and product, with creative designs and guaranteed results. At Sociapa, we manage brands in the digital sphere with an innovative way." />
        <meta property="og:url" content="https://www.sociapa.com/digital-marketing/" />
      </Helmet>
<section className="digitalmarketing-hero">
  <div className="digitalmarketing-hero-blob hero-blob-1"></div>
  <div className="digitalmarketing-hero-blob hero-blob-2"></div>
  <div className="digitalmarketing-hero-content">
    <div className="digitalmarketing-hero-badge"><span className="digitalmarketing-hero-badge-dot"></span>Google Partner · Certified Digital Strategists</div>
    <h1>Digital Marketing That <span>Drives Real ROI</span></h1>
    <p>From SEO to PPC to Affiliate — Sociapa is your full-service digital marketing partner in Delhi NCR. Data-led strategies, creative execution, and measurable results for brands that want to grow fast.</p>
    <div className="digitalmarketing-hero-buttons">
      <a href="#portfolio" className="btn-white">View Case Studies</a>
      <a href="mailto:mail@sociapa.com" className="btn-outline-white">Start a Campaign</a>
    </div>
  </div>
</section>

<div className="stats-bar">
  <div className="stat-item"><div className="stat-num">200+</div><div className="stat-label">Campaigns Delivered</div></div>
  <div className="stat-item"><div className="stat-num">50+</div><div className="stat-label">Brands Managed</div></div>
  <div className="stat-item"><div className="stat-num">4.2x</div><div className="stat-label">Average ROAS</div></div>
  <div className="stat-item"><div className="stat-num">8+</div><div className="stat-label">Years of Expertise</div></div>
</div>

<section id="services" className="pub-section-light">
  <div className="section-header">
    <span className="section-tag">What We Do</span>
    <h2>Full-Spectrum <span>Digital Marketing</span></h2>
    <div className="divider"></div>
    <p className="section-sub seo-sub-top">Every channel, every touchpoint — orchestrated to grow your brand and revenue.</p>
  </div>
  <div className="services-grid">
    <div className="service-card">
      <div className="service-icon">🔥</div>
      <h3>Search Engine Optimisation (SEO)</h3>
      <p>Data-driven SEO combining technical audits, on-page optimisation, keyword research, link building, and content strategy to improve rankings, increase organic traffic, and deliver sustainable long-term growth.</p>
      <div className="service-tags"><span className="tag">Technical SEO</span><span className="tag">On-Page</span><span className="tag">Link Building</span><span className="tag">Keyword Research</span></div>
    </div>
    <div className="service-card">
      <div className="service-icon">💡°</div>
      <h3>Pay Per Click (PPC)</h3>
      <p>Targeted Google Ads and Bing Ads campaigns designed to drive qualified traffic, maximise ROI, and reduce cost per conversion through continuous testing and optimisation.</p>
      <div className="service-tags"><span className="tag">Google Ads</span><span className="tag">Bing Ads</span><span className="tag">Display Network</span><span className="tag">Remarketing</span></div>
    </div>
    <div className="service-card">
      <div className="service-icon">🤝</div>
      <h3>Affiliate Marketing</h3>
      <p>Grow your revenue with strategic affiliate partnerships. We manage recruitment, tracking, creative assets, and performance incentives to drive quality traffic and conversions.</p>
      <div className="service-tags"><span className="tag">Partner Recruitment</span><span className="tag">Tracking Setup</span><span className="tag">Commission Strategy</span></div>
    </div>
    <div className="service-card">
      <div className="service-icon">📊</div>
      <h3>Analytics & Reporting</h3>
      <p>Gain complete visibility with real-time dashboards, GA4 and GTM tracking, and custom KPI reporting that helps you measure performance and make data-driven decisions.</p>
      <div className="service-tags"><span className="tag">GA4</span><span className="tag">Google Tag Manager</span><span className="tag">Data Studio</span><span className="tag">Custom KPIs</span></div>
    </div>
    <div className="service-card">
      <div className="service-icon">🎯</div>
      <h3>Conversion Rate Optimisation</h3>
      <p>Turn more visitors into customers with A/B testing, heatmaps, and landing page optimisation that improve user experience and maximise conversion rates.</p>
      <div className="service-tags"><span className="tag">A/B Testing</span><span className="tag">Heatmaps</span><span className="tag">Landing Pages</span><span className="tag">UX Audit</span></div>
    </div>
    <div className="service-card">
      <div className="service-icon"> ï¸</div>
      <h3>Strategy & Consulting</h3>
      <p>Our digital strategists audit your online presence and create a tailored, budget-focused roadmap to help you achieve your growth goals faster and more efficiently.</p>
      <div className="service-tags"><span className="tag">Digital Audit</span><span className="tag">Growth Roadmap</span><span className="tag">Budget Allocation</span></div>
    </div>
  </div>
</section>

<section id="tools">
  <div className="section-header">
    <span className="section-tag">Our Stack</span>
    <h2>Tools We <span>Master</span></h2>
    <div className="divider"></div>
    <p className="section-sub seo-sub-top">Best-in-class platforms and tools to plan, execute, and measure every campaign.</p>
  </div>
  <div className="tech-grid">
    <div className="tech-chip"><span>Google Ads</span></div>
    <div className="tech-chip"><span>Google Analytics 4</span></div>
    <div className="tech-chip"><span>Google Tag Manager</span></div>
    <div className="tech-chip"><span>SEMrush</span></div>
    <div className="tech-chip"><span>Ahrefs</span></div>
    <div className="tech-chip"><span>Looker Studio</span></div>
    <div className="tech-chip"><span>Bing Ads</span></div>
    <div className="tech-chip"><span>Meta Business Suite</span></div>
    <div className="tech-chip"><span>Hotjar</span></div>
    <div className="tech-chip"><span>Impact / Post Affiliate</span></div>
  </div>
</section>

<section id="portfolio" className="pub-section-light">
  <div className="section-header">
    <span className="section-tag">Case Studies</span>
    <h2>Brands We've <span>Grown</span></h2>
    <div className="divider"></div>
    <p className="section-sub seo-sub-top">Real results for real brands — from FMCG to fashion to D2C.</p>
  </div>
  <div className="projects-grid">
    <div className="project-card">
      <div className="project-preview">
        
        <img src="images/websites/nn.jpg" alt="Nutrela Nutrition website"/>
        <div className="project-overlay"><a href="https://www.nutrelanutrition.com/" target="_blank">&#8599; Visit Live Site</a></div>
      </div>
      <div className="project-info">
        <h3>Nutrela Nutrition</h3>
        <p>Built a high-performing affiliate programme from the ground up, onboarding 60+ active partners who now contribute 22% of monthly revenue, creating a scalable and sustainable acquisition channel.</p>
        <div className="project-meta"><span className="tag">Shopify</span><span className="tag">Liquid</span><span className="tag">PHP & Api</span></div>
        <a href="https://www.nutrelanutrition.com/" target="_blank" className="project-url">&#128279; nutrelanutrition.com</a>
      </div>
    </div>
    <div className="project-card">
      <div className="project-preview">
        <img src="images/websites/starrice.jpg" alt="Starri Iceland website"/>
        <div className="project-overlay"><a href="https://starriceland.com/" target="_blank">&#8599; Visit Live Site</a></div>
      </div>
      <div className="project-info">
        <h3>Star riceland</h3>
        <p>Implemented an integrated SEO and PPC strategy that reduced cost per acquisition by 38% while increasing conversions, delivering stronger performance and improved marketing efficiency.</p>
        <div className="project-meta"><span className="tag">Html/Css</span><span className="tag">PHP</span><span className="tag">Bootstrap</span></div>
        <a href="https://starriceland.com/" target="_blank" className="project-url">&#128279; starriceland.com</a>
      </div>
    </div>
    <div className="project-card">
      <div className="project-preview">
        <img src="images/websites/np.jpg" alt="Nature Pearls Organic website"/>
        <div className="project-overlay"><a href="https://www.naturepearlsorganic.com/" target="_blank">&#8599; Visit Live Site</a></div>
      </div>
      <div className="project-info">
        <h3>Nature Pearls Organic</h3>
        <p>Built a high-performing affiliate programme from the ground up, onboarding 60+ active partners who now contribute 22% of monthly revenue, creating a scalable and sustainable acquisition channel.</p>
        <div className="project-meta"><span className="tag">WordPress</span><span className="tag">Farming</span><span className="tag">Organic</span></div>
        <a href="https://www.naturepearlsorganic.com/" target="_blank" className="project-url">&#128279; naturepearlsorganic.com</a>
      </div>
    </div>
    <div className="project-card">
      <div className="project-preview">
        <img src="images/websites/apis.jpg" alt="APIS India website"/>
        <div className="project-overlay"><a href="https://apisindia.com/en" target="_blank">&#8599; Visit Live Site</a></div>
      </div>
      <div className="project-info">
        <h3>APIS India</h3>
        <p>Achieved a 312% increase in organic traffic within 6 months through a comprehensive technical SEO overhaul, strategic keyword optimisation, and content refresh, resulting in improved search visibility and higher-quality website traffic.</p>
        <div className="project-meta"><span className="tag">AWS</span><span className="tag">Custom CMS</span><span className="tag">MERN</span></div>
        <a href="https://apisindia.com/en" target="_blank" className="project-url">&#128279; apisindia.com</a>
      </div>
    </div>
  </div>
</section>

<section id="process">
  <div className="section-header">
    <span className="section-tag">How We Work</span>
    <h2>Our <span>6-Step Campaign</span> Process</h2>
    <div className="divider"></div>
  </div>
  <div className="process-steps">
    <div className="process-step"><div className="step-num">🔬</div><h3>Audit & Discovery</h3><p>Deep-dive into your existing digital footprint, competitors, and market opportunity</p></div>
    <div className="process-step"><div className="step-num">🎯</div><h3>Strategy Build</h3><p>Channel mix, budget allocation, and KPI framework tailored to your goals</p></div>
    <div className="process-step"><div className="step-num">✓ï¸</div><h3>Creative & Copy</h3><p>Ad creatives, landing pages, and content assets built for conversion</p></div>
    <div className="process-step"><div className="step-num">🚀€</div><h3>Campaign Launch</h3><p>Precision targeting, bid strategies, and tracking infrastructure go live</p></div>
    <div className="process-step"><div className="step-num">📊</div><h3>Optimise & Scale</h3><p>Weekly data reviews, A/B tests, and budget shifts to maximise performance</p></div>
    <div className="process-step"><div className="step-num">📋</div><h3>Reporting</h3><p>Clear dashboards and monthly strategy reviews — always in the loop</p></div>
  </div>
</section>

<section id="why">
  <div className="section-header">
    <span className="section-tag">Why Sociapa</span>
    <h2>What Sets Us <span>Apart</span></h2>
    <div className="divider divider-alpha-white"></div>
    <p className="section-sub seo-sub-top">Not just a vendor — a growth partner obsessed with measurable results.</p>
  </div>
  <div className="why-grid">
    <div className="why-card"><div className="why-icon">🏅</div><h3>Google Certified Partner</h3><p>Official Google Partner status means you're working with a team that meets Google's highest standards for ad performance and best practice.</p></div>
    <div className="why-card"><div className="why-icon">📈</div><h3>Data-First Approach</h3><p>Every decision is backed by analytics. We track, measure, and optimise relentlessly until the numbers are moving in the right direction.</p></div>
    <div className="why-card"><div className="why-icon">⚡</div><h3>Agile Execution</h3><p>Fast, sprint-based campaigns that adapt to market shifts in real time — not waiting until the quarter's end to make changes.</p></div>
    <div className="why-card"><div className="why-icon">🤝</div><h3>Full-Service Under One Roof</h3><p>SEO, PPC, content, creative, and analytics all managed by one cohesive team — no handoff friction, no miscommunication.</p></div>
    <div className="why-card"><div className="why-icon">🎯</div><h3>Industry-Specific Expertise</h3><p>From FMCG to fashion, health to home dÃ©cor — we bring sector knowledge that generic agencies simply don't have.</p></div>
    <div className="why-card"><div className="why-icon">🔥</div><h3>Transparent Reporting</h3><p>No vanity metrics, no jargon. Weekly performance reports in plain language with clear attribution to business outcomes.</p></div>
  </div>
</section>

<section id="testimonials" className="pub-section-light">
  <div className="section-header">
    <span className="section-tag">Client Voices</span>
    <h2>What Our <span>Clients Say</span></h2>
    <div className="divider"></div>
  </div>
  <div className="testimonials-grid">
    <div className="testimonial-card"><div className="stars">★★★★★</div><blockquote>"Sociapa's SEO team took our organic traffic from near-zero to ranking for 400+ keywords in under 6 months. The transparency in reporting made it easy to trust the process."</blockquote><div className="testimonial-author"><div className="author-avatar">AP</div><div><div className="author-name">Team APIS India</div><div className="author-title">FMCG Brand, Delhi NCR</div></div></div></div>
    <div className="testimonial-card"><div className="stars">★★★★★</div><blockquote>"The PPC campaigns they built for us are the most efficient we've ever run. ROAS improved from 2.1x to 4.8x within three months of onboarding Sociapa."</blockquote><div className="testimonial-author"><div className="author-avatar">HB</div><div><div className="author-name">Team Habitat</div><div className="author-title">Home DÃ©cor D2C Brand</div></div></div></div>
    <div className="testimonial-card"><div className="stars">★★★★★</div><blockquote>"Their affiliate programme setup was game-changing. We now have a reliable revenue channel that grows month on month with minimal management on our end."</blockquote><div className="testimonial-author"><div className="author-avatar">NN</div><div><div className="author-name">Team Nutrela Nutrition</div><div className="author-title">Health & Wellness Brand</div></div></div></div>
  </div>
</section>

<section className="faq-section faq-section-padded" id="faq">
  <div className="section-inner">
    <span className="section-tag">FAQ</span>
    <h2 className="section-title">Digital Marketing <span className="text-brand-red">Questions Answered</span></h2>
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

<section id="cta">
  <h2>Ready to <span>Dominate Search?</span></h2>
  <p>Tell us your goals and we'll build a custom digital marketing strategy — no fluff, just a clear plan to grow your brand online.</p>
  <div className="cta-buttons">
    <a href="mailto:mail@sociapa.com" className="btn-white">Get a Free Audit</a>
    <a href="https://wa.me/8375828920" className="btn-outline-white">WhatsApp Us</a>
  </div>
</section>


</>);
}


