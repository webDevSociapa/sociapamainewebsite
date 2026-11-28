import React, { useState, useEffect } from 'react';
import OtherServicesSlider from '../components/OtherServicesSlider';
import ServiceOurWorkSection from '../components/ServiceOurWorkSection';
import ServiceBehindWorkSection from '../components/ServiceBehindWorkSection';
import ServiceCaseStudiesSlider from '../components/ServiceCaseStudiesSlider';
import { serviceClientSectionsData } from '../data/serviceClientSectionsData';
import { Helmet } from 'react-helmet-async';
import './DigitalMarketing.css';

const faqsData = [
  {
    "q": "What digital marketing services does Sociapa provide?",
    "a": "<p>Sociapa offers a complete range of digital marketing services, including <a href='/seo-aeo-geo' class='seo-interlink'>Search Engine Optimization (SEO)</a>, <a href='/pay-per-click-ppc-services-india' class='seo-interlink'>Pay-Per-Click (PPC) advertising</a>, <a href='/best-social-media-marketing-agency-india' class='seo-interlink'>social media marketing</a>, <a href='/content-designing' class='seo-interlink'>content marketing</a>, and conversion optimization to scale qualified revenue.</p>"
  },
  {
    "q": "How do I know if my business needs digital marketing?",
    "a": "<p>If your customers search online for products or services similar to yours, digital marketing can help your business grow. Whether you are a startup, local business, ecommerce store, educational institution, healthcare provider, or enterprise brand, digital marketing allows you to reach potential customers where they spend most of their time online.</p>"
  },
  {
    "q": "What is the difference between SEO, PPC, and affiliate marketing?",
    "a": "<p><a href='/seo-aeo-geo' class='seo-interlink'>SEO</a> focuses on improving organic search rankings to generate sustainable traffic, whereas <a href='/pay-per-click-ppc-services-india' class='seo-interlink'>PPC advertising</a> delivers immediate targeted visibility. An integrated approach ensures maximum audience reach at optimal acquisition costs.</p>"
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
    "a": "<p>Search engine rankings are influenced by multiple factors, including high-value content, website speed, mobile responsiveness, <a href='/best-web-development-agency-india' class='seo-interlink'>technical SEO and web performance</a>, domain authority, internal linking structure, and authoritative backlink profiles.</p>"
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
  const base = import.meta.env.BASE_URL || '/';
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (<>

    <Helmet>
      <title>Best Digital Marketing Agency in Noida &amp; Delhi NCR - Sociapa</title>
      <meta name="description" content="Digital Marketing Agency in Noida & Delhi NCR- we strive to provide a perfect balance of method and product, with creative designs and guaranteed results. At Sociapa, we manage brands in the digital sphere with an innovative way." />
      <meta name="keywords" content="Digital Marketing" />
      <link rel="canonical" href="https://sociapa.com/best-digital-marketing-services-india" />
      <meta property="og:title" content="Best Digital Marketing Agency in Noida & Delhi NCR - Sociapa" />
      <meta property="og:description" content="Digital Marketing Agency in Noida & Delhi NCR- we strive to provide a perfect balance of method and product, with creative designs and guaranteed results. At Sociapa, we manage brands in the digital sphere with an innovative way." />
      <meta property="og:url" content="https://sociapa.com/best-digital-marketing-services-india" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="SOCIAPA" />
      <meta property="og:image" content="https://sociapa.com/images/sociapa-og-preview.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@sociapa" />
      <meta name="twitter:title" content="Best Digital Marketing Agency in Noida & Delhi NCR - Sociapa" />
      <meta name="twitter:description" content="Digital Marketing Agency in Noida & Delhi NCR- we strive to provide a perfect balance of method and product, with creative designs and guaranteed results. At Sociapa, we manage brands in the digital sphere with an innovative way." />
      <meta name="twitter:image" content="https://sociapa.com/images/sociapa-og-preview.png" />

      {/* FAQPage Schema - Required by SOCIAPA (1).docx */}
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqsData.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": { "@type": "Answer", "text": (faq.a || '').replace(/<[^>]*>/g, '') }
        }))
      })}</script>
      {/* BreadcrumbList Schema - Required by SOCIAPA (1).docx */}
      <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://sociapa.com/"},{"@type":"ListItem","position":2,"name":"Services","item":"https://sociapa.com/our-services"},{"@type":"ListItem","position":3,"name":"Best Digital Marketing Agency in Noida & Delhi NCR","item":"https://sociapa.com/best-digital-marketing-services-india"}]})}</script>
    </Helmet>
    <div className="digital-marketing-page">
      {/* Hero Banner Section */}
      <section className="hero-banner-section">
        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
          Best Digital Marketing Services India - Sociapa
        </h1>
        <picture>
          <source type="image/webp" srcSet={`${base}assets/images/services_banner/digital_market/digital.webp`} />
          <img
            src={`${base}assets/images/services_banner/digital_market/digital.webp`}
            alt="Best Digital Marketing Services India - Sociapa"
            className="hero-banner-img"
            decoding="async"
            width="1920"
            height="700"
            loading="eager"
            fetchpriority="high"
          />
        </picture>
      </section>

    <div className="stats-bar">
      <div className="stats-inner">
        <div className="stat-item"><div className="stat-num">200+</div><div className="stat-label">Campaigns Delivered</div></div>
        <div className="stat-item"><div className="stat-num">50+</div><div className="stat-label">Brands Managed</div></div>
        <div className="stat-item"><div className="stat-num">4.2x</div><div className="stat-label">Average ROAS</div></div>
        <div className="stat-item"><div className="stat-num">8+</div><div className="stat-label">Years of Expertise</div></div>
      </div>
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
          <div className="service-icon">
            <img
              src={`${base}assets/images/services_icons/digital_marketing/Search Engine Optimisation (SEO).png`}
              alt="Search Engine Optimisation (SEO)"
              width="60"
              height="60"
              style={{ width: '60px', height: '60px', objectFit: 'contain' }}
              loading="lazy"
            />
          </div>
          <h3>Search Engine Optimisation (SEO)</h3>
          <p>Data-driven SEO combining technical audits, on-page optimisation, keyword research, link building, and content strategy to improve rankings, increase organic traffic, and deliver sustainable long-term growth.</p>
          <div className="service-tags"><span className="tag">Technical SEO</span><span className="tag">On-Page</span><span className="tag">Link Building</span><span className="tag">Keyword Research</span></div>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <img
              src={`${base}assets/images/services_icons/digital_marketing/Pay Per Click (PPC).png`}
              alt="Pay Per Click (PPC)"
              width="60"
              height="60"
              style={{ width: '60px', height: '60px', objectFit: 'contain' }}
              loading="lazy"
            />
          </div>
          <h3>Pay Per Click (PPC)</h3>
          <p>Targeted Google Ads and Bing Ads campaigns designed to drive qualified traffic, maximise ROI, and reduce cost per conversion through continuous testing and optimisation.</p>
          <div className="service-tags"><span className="tag">Google Ads</span><span className="tag">Bing Ads</span><span className="tag">Display Network</span><span className="tag">Remarketing</span></div>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <img
              src={`${base}assets/images/services_icons/digital_marketing/Affiliate Marketing.png`}
              alt="Affiliate Marketing"
              width="60"
              height="60"
              style={{ width: '60px', height: '60px', objectFit: 'contain' }}
              loading="lazy"
            />
          </div>
          <h3>Affiliate Marketing</h3>
          <p>Grow your revenue with strategic affiliate partnerships. We manage recruitment, tracking, creative assets, and performance incentives to drive quality traffic and conversions.</p>
          <div className="service-tags"><span className="tag">Partner Recruitment</span><span className="tag">Tracking Setup</span><span className="tag">Commission Strategy</span></div>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <img
              src={`${base}assets/images/services_icons/digital_marketing/Analytics & Reporting.png`}
              alt="Analytics & Reporting"
              width="60"
              height="60"
              style={{ width: '60px', height: '60px', objectFit: 'contain' }}
              loading="lazy"
            />
          </div>
          <h3>Analytics &amp; Reporting</h3>
          <p>Gain complete visibility with real-time dashboards, GA4 and GTM tracking, and custom KPI reporting that helps you measure performance and make data-driven decisions.</p>
          <div className="service-tags"><span className="tag">GA4</span><span className="tag">Google Tag Manager</span><span className="tag">Data Studio</span><span className="tag">Custom KPIs</span></div>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <img
              src={`${base}assets/images/services_icons/digital_marketing/Conversion Rate Optimisation.png`}
              alt="Conversion Rate Optimisation"
              width="60"
              height="60"
              style={{ width: '60px', height: '60px', objectFit: 'contain' }}
              loading="lazy"
            />
          </div>
          <h3>Conversion Rate Optimisation</h3>
          <p>Turn more visitors into customers with A/B testing, heatmaps, and landing page optimisation that improve user experience and maximise conversion rates.</p>
          <div className="service-tags"><span className="tag">A/B Testing</span><span className="tag">Heatmaps</span><span className="tag">Landing Pages</span><span className="tag">UX Audit</span></div>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <img
              src={`${base}assets/images/services_icons/digital_marketing/Strategy & Consulting.png`}
              alt="Strategy & Consulting"
              width="60"
              height="60"
              style={{ width: '60px', height: '60px', objectFit: 'contain' }}
              loading="lazy"
            />
          </div>
          <h3>Strategy &amp; Consulting</h3>
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
        <div className="tech-chip">
          <span className="tech-icon">
            <img
              src={`${base}assets/images/services_icons/digital_marketing/Google ads.svg`}
              alt="Google Ads"
              width="60"
              height="60"
              style={{ width: '60px', height: '60px', objectFit: 'contain' }}
              loading="lazy"
            />
          </span>
          <span>Google Ads</span>
        </div>
        <div className="tech-chip">
          <span className="tech-icon">
            <img
              src={`${base}assets/images/services_icons/digital_marketing/Google Analytics 4.svg`}
              alt="Google Analytics 4"
              width="60"
              height="60"
              style={{ width: '60px', height: '60px', objectFit: 'contain' }}
              loading="lazy"
            />
          </span>
          <span>Google Analytics 4</span>
        </div>
        <div className="tech-chip">
          <span className="tech-icon">
            <img
              src={`${base}assets/images/services_icons/digital_marketing/Google Tag Manager.svg`}
              alt="Google Tag Manager"
              width="60"
              height="60"
              style={{ width: '60px', height: '60px', objectFit: 'contain' }}
              loading="lazy"
            />
          </span>
          <span>Google Tag Manager</span>
        </div>
        <div className="tech-chip">
          <span className="tech-icon">
            <img
              src={`${base}assets/images/services_icons/digital_marketing/SEMrush.svg`}
              alt="SEMrush"
              width="60"
              height="60"
              style={{ width: '60px', height: '60px', objectFit: 'contain' }}
              loading="lazy"
            />
          </span>
          <span>SEMrush</span>
        </div>
        <div className="tech-chip">
          <span className="tech-icon">
            <img
              src={`${base}assets/images/services_icons/digital_marketing/Ahrefs.svg`}
              alt="Ahrefs"
              width="60"
              height="60"
              style={{ width: '60px', height: '60px', objectFit: 'contain' }}
              loading="lazy"
            />
          </span>
          <span>Ahrefs</span>
        </div>
        <div className="tech-chip">
          <span className="tech-icon">
            <img
              src={`${base}assets/images/services_icons/digital_marketing/Looker Studio.svg`}
              alt="Looker Studio"
              width="60"
              height="60"
              style={{ width: '60px', height: '60px', objectFit: 'contain' }}
              loading="lazy"
            />
          </span>
          <span>Looker Studio</span>
        </div>
        <div className="tech-chip">
          <span className="tech-icon">
            <img
              src={`${base}assets/images/services_icons/digital_marketing/Bing Ads.svg`}
              alt="Bing Ads"
              width="60"
              height="60"
              style={{ width: '60px', height: '60px', objectFit: 'contain' }}
              loading="lazy"
            />
          </span>
          <span>Bing Ads</span>
        </div>
        <div className="tech-chip">
          <span className="tech-icon">
            <img
              src={`${base}assets/images/services_icons/digital_marketing/Meta Business Suite.svg`}
              alt="Meta Business Suite"
              width="60"
              height="60"
              style={{ width: '60px', height: '60px', objectFit: 'contain' }}
              loading="lazy"
            />
          </span>
          <span>Meta Business Suite</span>
        </div>
        <div className="tech-chip">
          <span className="tech-icon">
            <img
              src={`${base}assets/images/services_icons/digital_marketing/Hotjar.svg`}
              alt="Hotjar"
              width="60"
              height="60"
              style={{ width: '60px', height: '60px', objectFit: 'contain' }}
              loading="lazy"
            />
          </span>
          <span>Hotjar</span>
        </div>
        <div className="tech-chip">
          <span className="tech-icon">
            <img
              src={`${base}assets/images/services_icons/digital_marketing/Impact.svg`}
              alt="Impact / Post Affiliate"
              width="60"
              height="60"
              style={{ width: '60px', height: '60px', objectFit: 'contain' }}
              loading="lazy"
            />
          </span>
          <span>Impact / Post Affiliate</span>
        </div>
      </div>
    </section>

          {/* Portfolio / Our Work Section */}
      <ServiceOurWorkSection
        work={serviceClientSectionsData['digital-marketing']?.work}
      />

    <section id="process">
      <div className="section-header">
        <span className="section-tag">How We Work</span>
        <h2>Our <span>6-Step Campaign</span> Process</h2>
        <div className="divider"></div>
      </div>
      <div className="process-steps">
        <div className="process-step">
          <div className="step-num">
            <img
              src={`${base}assets/images/services_icons/digital_marketing/Audit & Discovery.png`}
              alt="Audit & Discovery"
              width="60"
              height="60"
              style={{ width: '60px', height: '60px', objectFit: 'contain' }}
              loading="lazy"
            />
          </div>
          <h3>Audit &amp; Discovery</h3>
          <p>Deep-dive into your existing digital footprint, competitors, and market opportunity</p>
        </div>
        <div className="process-step">
          <div className="step-num">
            <img
              src={`${base}assets/images/services_icons/digital_marketing/Strategy Build.png`}
              alt="Strategy Build"
              width="60"
              height="60"
              style={{ width: '60px', height: '60px', objectFit: 'contain' }}
              loading="lazy"
            />
          </div>
          <h3>Strategy Build</h3>
          <p>Channel mix, budget allocation, and KPI framework tailored to your goals</p>
        </div>
        <div className="process-step">
          <div className="step-num">
            <img
              src={`${base}assets/images/services_icons/digital_marketing/Creative & Copy.png`}
              alt="Creative & Copy"
              width="60"
              height="60"
              style={{ width: '60px', height: '60px', objectFit: 'contain' }}
              loading="lazy"
            />
          </div>
          <h3>Creative &amp; Copy</h3>
          <p>Ad creatives, landing pages, and content assets built for conversion</p>
        </div>
        <div className="process-step">
          <div className="step-num">
            <img
              src={`${base}assets/images/services_icons/digital_marketing/Campaign Launch.png`}
              alt="Campaign Launch"
              width="60"
              height="60"
              style={{ width: '60px', height: '60px', objectFit: 'contain' }}
              loading="lazy"
            />
          </div>
          <h3>Campaign Launch</h3>
          <p>Precision targeting, bid strategies, and tracking infrastructure go live</p>
        </div>
        <div className="process-step">
          <div className="step-num">
            <img
              src={`${base}assets/images/services_icons/digital_marketing/Optimise & Scale.png`}
              alt="Optimise & Scale"
              width="60"
              height="60"
              style={{ width: '60px', height: '60px', objectFit: 'contain' }}
              loading="lazy"
            />
          </div>
          <h3>Optimise &amp; Scale</h3>
          <p>Weekly data reviews, A/B tests, and budget shifts to maximise performance</p>
        </div>
        <div className="process-step">
          <div className="step-num">
            <img
              src={`${base}assets/images/services_icons/digital_marketing/Reporting.png`}
              alt="Reporting"
              width="60"
              height="60"
              style={{ width: '60px', height: '60px', objectFit: 'contain' }}
              loading="lazy"
            />
          </div>
          <h3>Reporting</h3>
          <p>Clear dashboards and monthly strategy reviews — always in the loop</p>
        </div>
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
        <div className="why-card">
          <div className="why-icon">
            <img
              src={`${base}assets/images/services_icons/digital_marketing/Google Certified Partner.png`}
              alt="Google Certified Partner"
              width="60"
              height="60"
              style={{ width: '60px', height: '60px', objectFit: 'contain' }}
              loading="lazy"
            />
          </div>
          <h3>Google Certified Partner</h3>
          <p>Official Google Partner status means you're working with a team that meets Google's highest standards for ad performance and best practice.</p>
        </div>
        <div className="why-card">
          <div className="why-icon">
            <img
              src={`${base}assets/images/services_icons/digital_marketing/Data-First Approach.png`}
              alt="Data-First Approach"
              width="60"
              height="60"
              style={{ width: '60px', height: '60px', objectFit: 'contain' }}
              loading="lazy"
            />
          </div>
          <h3>Data-First Approach</h3>
          <p>Every decision is backed by analytics. We track, measure, and optimise relentlessly until the numbers are moving in the right direction.</p>
        </div>
        <div className="why-card">
          <div className="why-icon">
            <img
              src={`${base}assets/images/services_icons/digital_marketing/Agile Execution.png`}
              alt="Agile Execution"
              width="60"
              height="60"
              style={{ width: '60px', height: '60px', objectFit: 'contain' }}
              loading="lazy"
            />
          </div>
          <h3>Agile Execution</h3>
          <p>Fast, sprint-based campaigns that adapt to market shifts in real time — not waiting until the quarter's end to make changes.</p>
        </div>
        <div className="why-card">
          <div className="why-icon">
            <img
              src={`${base}assets/images/services_icons/digital_marketing/Full-Service Under One Roof.png`}
              alt="Full-Service Under One Roof"
              width="60"
              height="60"
              style={{ width: '60px', height: '60px', objectFit: 'contain' }}
              loading="lazy"
            />
          </div>
          <h3>Full-Service Under One Roof</h3>
          <p>SEO, PPC, content, creative, and analytics all managed by one cohesive team — no handoff friction, no miscommunication.</p>
        </div>
        <div className="why-card">
          <div className="why-icon">
            <img
              src={`${base}assets/images/services_icons/digital_marketing/Industry-Specific Expertise.png`}
              alt="Industry-Specific Expertise"
              width="60"
              height="60"
              style={{ width: '60px', height: '60px', objectFit: 'contain' }}
              loading="lazy"
            />
          </div>
          <h3>Industry-Specific Expertise</h3>
          <p>From FMCG to fashion, health to home décor — we bring sector knowledge that generic agencies simply don't have.</p>
        </div>
        <div className="why-card">
          <div className="why-icon">
            <img
              src={`${base}assets/images/services_icons/digital_marketing/Transparent Reporting.png`}
              alt="Transparent Reporting"
              width="60"
              height="60"
              style={{ width: '60px', height: '60px', objectFit: 'contain' }}
              loading="lazy"
            />
          </div>
          <h3>Transparent Reporting</h3>
          <p>No vanity metrics, no jargon. Weekly performance reports in plain language with clear attribution to business outcomes.</p>
        </div>
      </div>
    </section>

          {/* Behind the Work Section */}
      <ServiceBehindWorkSection
        testimonials={serviceClientSectionsData['digital-marketing']?.testimonials}
      />

      {/* Featured Case Studies Slider */}
      <ServiceCaseStudiesSlider />

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

    {/* Our Other Services Carousel */}
      <OtherServicesSlider />

      <section id="cta">
      <h2>Ready to <span>Dominate Search?</span></h2>
      <p>Tell us your goals and we'll build a custom digital marketing strategy — no fluff, just a clear plan to grow your brand online.</p>
      <div className="cta-buttons">
        <a href="mailto:mail@sociapa.com" className="btn-white">Get a Free Audit</a>
        <a href="https://wa.me/917011057175" className="btn-outline-white">WhatsApp Us</a>
      </div>
    </section>
    </div>
  </>);
}


