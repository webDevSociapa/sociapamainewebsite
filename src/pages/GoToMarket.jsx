import React, { useState, useEffect } from 'react';
import OtherServicesSlider from '../components/OtherServicesSlider';
import { Helmet } from 'react-helmet-async';
import ServiceOurWorkSection from '../components/ServiceOurWorkSection';
import ServiceBehindWorkSection from '../components/ServiceBehindWorkSection';
import ServiceCaseStudiesSlider from '../components/ServiceCaseStudiesSlider';
import { serviceClientSectionsData } from '../data/serviceClientSectionsData';
import './GoToMarket.css';

const faqsData = [
  {
    q: "1. What is included in your go-to-market (GTM) strategy service?",
    a: "<p>Our go-to-market strategy service includes market research, category sizing, competitor mapping, <a href='/brand-strategy' class='seo-interlink'>brand positioning</a>, <a href='/best-social-media-marketing-agency-india' class='seo-interlink'>social media marketing</a>, <a href='/influencer-marketing-services' class='seo-interlink'>influencer marketing</a>, <a href='/pay-per-click-ppc-services-india' class='seo-interlink'>performance marketing</a>, quick commerce onboarding, and ongoing performance optimization.</p>"
  },
  {
    q: "2. Do you create GTM strategies for D2C and FMCG brands?",
    a: "<p>Yes. We develop comprehensive go-to-market strategies for D2C and FMCG brands, helping businesses launch successfully across digital, retail, and quick commerce channels, supported by high-impact <a href='/best-packaging-design-agency-india' class='seo-interlink'>packaging design</a>.</p>"
  },
  {
    q: "3. Which marketing channels do you manage as part of a product launch?",
    a: "<p>We manage social media marketing, influencer marketing, performance marketing, user-generated content (UGC), <a href='/best-photography-services' class='seo-interlink'>product photography</a>, <a href='/videos' class='seo-interlink'>video production</a>, quick commerce platforms, and offline retail activation as part of a unified launch strategy.</p>"
  },
  {
    q: "4. Do you help brands launch on Blinkit, Zepto, and Swiggy Instamart?",
    a: "<p>Yes. We handle quick commerce onboarding, catalogue management, listing optimization, promotional strategy, and dark store inventory planning for platforms including Blinkit, Zepto, Swiggy Instamart, and BigBasket Now.</p>"
  },
  {
    q: "5. Do you manage influencer marketing campaigns?",
    a: "<p>Yes. We identify the right influencers, manage outreach and campaign execution, coordinate creator briefings, and track ROI through detailed campaign reporting using mega, micro, and nano influencers.</p>"
  },
  {
    q: "6. How do you plan marketing budgets for a product launch?",
    a: "<p>We strategically allocate budgets across social media, influencer marketing, performance marketing, quick commerce, and offline activation based on projected ROI, then optimize investments using weekly performance data.</p>"
  },
  {
    q: "7. Do you provide launch analytics and performance reporting?",
    a: "<p>Yes. We track every marketing channel against predefined launch KPIs through weekly performance dashboards, enabling continuous optimization and data-driven decision-making throughout the campaign.</p>"
  },
  {
    q: "8. Can you manage both digital and offline launch activities?",
    a: "<p>Yes. Along with digital marketing, we execute traditional and modern trade activation, including trade marketing, in-store promotions, POSM design, distributor strategy, and BTL campaigns for an integrated omnichannel launch.</p>"
  }
];

export default function GoToMarket() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);
  const base = import.meta.env.BASE_URL || '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="gotomarket-page">
      <Helmet>
        <title>Go-To-Market (GTM) Strategy Services India | Product Launch Experts | Sociapa</title>
        <meta name="description" content="Launch your product successfully with Sociapa" />
        <meta
          name="keywords"
          content="go to market strategy India, GTM agency, product launch strategy, D2C launch agency, quick commerce launch, FMCG go to market"
        />
        <link rel="canonical" href="https://sociapa.com/go-to-market" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SOCIAPA" />
        <meta property="og:title" content="Go-To-Market (GTM) Strategy Services India | Product Launch Experts | Sociapa" />
        <meta property="og:description" content="Accelerate your product launch with Sociapa" />
        <meta property="og:url" content="https://sociapa.com/go-to-market" />
        <meta property="og:image" content="https://sociapa.com/images/sociapa-og-preview.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Sociapa - Your Social Buddy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Go-To-Market (GTM) Strategy Services India | Product Launch Experts | Sociapa" />
        <meta name="twitter:description" content="Accelerate your product launch with Sociapa" />
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
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://sociapa.com/"},{"@type":"ListItem","position":2,"name":"Services","item":"https://sociapa.com/our-services"},{"@type":"ListItem","position":3,"name":"Go To Market Strategy Services India | Sociapa","item":"https://sociapa.com/go-to-market"}]})}</script>
      </Helmet>

      {/* Hero Banner Section */}
      <section className="hero-banner-section">
        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
          Go-To-Market (GTM) Strategy Services India - Sociapa
        </h1>
        <picture>
          <source type="image/webp" srcSet={`${base}assets/images/services_banner/go_to_market/go_to_market.webp`} />
          <img
            src={`${base}assets/images/services_banner/go_to_market/go_to_market.webp`}
            alt="Go To Market Strategy Services - Sociapa"
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
            <div className="stat-num">200+</div>
            <div className="stat-label">GTM Plans Executed</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">8+</div>
            <div className="stat-label">Years of Expertise</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">12+</div>
            <div className="stat-label">Product Categories</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">3.5x</div>
            <div className="stat-label">Average Launch ROAS</div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services">
        <div className="section-header">
          <span className="section-tag">GTM Channels</span>
          <h2>Full-Funnel <span>Go-To-Market Execution</span></h2>
          <div className="divider"></div>
          <p className="section-sub">
            We orchestrate every stage of your product launch, from building social media audiences and activating influencer marketing campaigns to managing performance marketing and setting up quick commerce listings, ensuring a seamless go-to-market strategy across every channel.
          </p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/go_to_market/primary_packaging_design.png`}
                alt="Social Media Marketing"
                loading="lazy"
              />
            </div>
            <h3>Social Media Marketing</h3>
            <p>
              Build your brand's social media presence from the ground up with content calendars, community management, Instagram and YouTube growth strategies, and platform-specific content creation designed to grow your audience before and after launch.
            </p>
            <div className="service-tags">
              <span className="tag">Instagram Growth</span>
              <span className="tag">YouTube</span>
              <span className="tag">Community Building</span>
              <span className="tag">Content Calendar</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/go_to_market/influencer_platform.png`}
                alt="Influencer Marketing"
                loading="lazy"
              />
            </div>
            <h3>Influencer Marketing</h3>
            <p>
              Strategic influencer identification, outreach, briefing, and campaign management, from mega influencers for maximum reach to micro and nano influencers for stronger trust and higher conversions. Every influencer marketing campaign is ROI-tracked with detailed performance reporting.
            </p>
            <div className="service-tags">
              <span className="tag">Micro Influencers</span>
              <span className="tag">Nano Creators</span>
              <span className="tag">Mega Campaigns</span>
              <span className="tag">ROI Tracking</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/go_to_market/concept_design.png`}
                alt="Performance Marketing"
                loading="lazy"
              />
            </div>
            <h3>Performance Marketing</h3>
            <p>
              Data-driven paid advertising across Meta, Google, and YouTube, with launch campaigns featuring optimized audience targeting, creative testing, landing page optimization, and strategic campaign scaling based on performance and efficiency metrics.
            </p>
            <div className="service-tags">
              <span className="tag">Meta Ads</span>
              <span className="tag">Google Ads</span>
              <span className="tag">YouTube Ads</span>
              <span className="tag">ROAS Optimisation</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/go_to_market/brief_and_research.png`}
                alt="UGC Marketing"
                loading="lazy"
              />
            </div>
            <h3>UGC Marketing</h3>
            <p>
              Build a library of authentic user-generated content for your product launch by seeding products with micro creators, running UGC campaigns, and managing content submissions, usage rights, and repurposing across social media, paid advertising, websites, and other marketing channels.
            </p>
            <div className="service-tags">
              <span className="tag">UGC Creation</span>
              <span className="tag">Product Seeding</span>
              <span className="tag">UGC Ads</span>
              <span className="tag">Content Rights</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/go_to_market/ecommerce_packaging_design.png`}
                alt="Product Photography & AI Photography"
                loading="lazy"
              />
            </div>
            <h3>Product Photography &amp; AI Photography</h3>
            <p>
              Professional product photography and AI-generated lifestyle imagery for e-commerce listings, social media, and marketing campaigns, delivering high-volume, fast-turnaround visual assets that help brands launch, engage audiences, and drive conversions.
            </p>
            <div className="service-tags">
              <span className="tag">Product Photography</span>
              <span className="tag">AI Lifestyle Images</span>
              <span className="tag">Ecommerce Assets</span>
              <span className="tag">Social Creatives</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/go_to_market/quick_commerce_packaging.png`}
                alt="Quick Commerce Setup"
                loading="lazy"
              />
            </div>
            <h3>Quick Commerce Setup</h3>
            <p>
              Complete quick commerce listing and optimization for Blinkit, Zepto, Swiggy Instamart, and BigBasket Now, including catalogue management, listing optimization, promotional strategy, and dark store inventory planning to maximize product visibility and sales.
            </p>
            <div className="service-tags">
              <span className="tag">Blinkit Setup</span>
              <span className="tag">Zepto Listings</span>
              <span className="tag">Instamart</span>
              <span className="tag">Q-Commerce Strategy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools">
        <div className="section-header">
          <span className="section-tag">GTM Tech Stack</span>
          <h2>Tools That Power <span>Our GTM Execution</span></h2>
          <div className="divider"></div>
          <p className="section-sub">
            Best-in-class platforms for planning, executing, and measuring every element of your go-to-market strategy.
          </p>
        </div>
        <div className="tech-grid">
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/go_to_market/3d_mockup_tools.png`}
                alt="Meta Business Suite"
                loading="lazy"
              />
            </span>
            <span>Meta Business Suite</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/go_to_market/concept_design.png`}
                alt="Google Ads"
                loading="lazy"
              />
            </span>
            <span>Google Ads</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/go_to_market/pre_press_software.png`}
                alt="Google Analytics 4"
                loading="lazy"
              />
            </span>
            <span>Google Analytics 4</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/go_to_market/influencer_platform.png`}
                alt="Influencer Platforms"
                loading="lazy"
              />
            </span>
            <span>Influencer Platforms</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/go_to_market/quick_commerce_packaging.png`}
                alt="Blinkit / Zepto"
                loading="lazy"
              />
            </span>
            <span>Blinkit / Zepto</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/go_to_market/retail_and_offline_sales_packaging.png`}
                alt="Amazon Seller Central"
                loading="lazy"
              />
            </span>
            <span>Amazon Seller Central</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/go_to_market/dieline_and_prepress.png`}
                alt="SEMrush"
                loading="lazy"
              />
            </span>
            <span>SEMrush</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/go_to_market/print_ready_delievered.png`}
                alt="Later / Hootsuite"
                loading="lazy"
              />
            </span>
            <span>Later / Hootsuite</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/go_to_market/brief_and_research.png`}
                alt="UGC Platforms"
                loading="lazy"
              />
            </span>
            <span>UGC Platforms</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/go_to_market/die_cutting_tools.png`}
                alt="GTM Dashboard"
                loading="lazy"
              />
            </span>
            <span>GTM Dashboard</span>
          </div>
        </div>
      </section>

      {/* Portfolio / Our Work Section */}
      <ServiceOurWorkSection
        work={serviceClientSectionsData['go-to-market']?.work}
        subtitle="End-to-end go-to-market execution across digital, retail, and modern trade channels."
      />

      {/* 5-Step Process Section */}
      <section id="process">
        <div className="section-header">
          <span className="section-tag">How We Build GTM Plans</span>
          <h2>Our <span>5-Step GTM Strategy</span> Process</h2>
          <div className="divider"></div>
        </div>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-num">
              <img
                src={`${base}assets/images/services_icons/go_to_market/market_research.png`}
                alt="Market Research"
                loading="lazy"
              />
            </div>
            <h4>Market Research</h4>
            <p>Category sizing, competitor mapping, target audience profiling, and channel opportunity assessment to identify market potential and build an effective go-to-market strategy.</p>
          </div>
          <div className="process-step">
            <div className="step-num">
              <img
                src={`${base}assets/images/services_icons/go_to_market/audience_strategy.png`}
                alt="Audience Strategy"
                loading="lazy"
              />
            </div>
            <h4>Audience Strategy</h4>
            <p>Precise buyer persona development, channel preference mapping, and messaging framework creation to ensure your brand reaches the right audience with the right message across every marketing channel.</p>
          </div>
          <div className="process-step">
            <div className="step-num">
              <img
                src={`${base}assets/images/services_icons/go_to_market/channel_planning.png`}
                alt="Channel Planning"
                loading="lazy"
              />
            </div>
            <h4>Channel Planning</h4>
            <p>Strategic budget allocation across social media, influencer marketing, performance marketing, quick commerce, and offline channels, supported by ROI projections to maximize marketing efficiency and business growth.</p>
          </div>
          <div className="process-step">
            <div className="step-num">
              <img
                src={`${base}assets/images/services_icons/go_to_market/campaign_launch.png`}
                alt="Campaign Launch"
                loading="lazy"
              />
            </div>
            <h4>Campaign Launch</h4>
            <p>Coordinated product launch across all marketing channels with creative assets, tracking infrastructure, and influencer activation, ensuring a seamless and measurable go-to-market execution.</p>
          </div>
          <div className="process-step">
            <div className="step-num">
              <img
                src={`${base}assets/images/services_icons/go_to_market/measureandscale.png`}
                alt="Measure & Scale"
                loading="lazy"
              />
            </div>
            <h4>Measure &amp; Scale</h4>
            <p>Weekly performance reviews, budget optimization, and continuous investment in the highest ROI marketing channels to maximize campaign performance and drive sustainable business growth.</p>
          </div>
        </div>
      </section>

      {/* Why Sociapa Section */}
      <section id="why">
        <div className="section-header">
          <span className="section-tag">Why Sociapa</span>
          <h2>GTM Strategy That <span>Actually Executes</span></h2>
          <div className="divider" style={{ background: 'rgba(255,255,255,0.3)' }}></div>
          <p className="section-sub" style={{ color: '#FFFFFF', opacity: 0.95 }}>
            We don't just build a go-to-market strategy, we execute it in-house across every channel, delivering end-to-end GTM planning, implementation, and performance optimization for measurable business growth.
          </p>
        </div>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/go_to_market/brief_and_research.png`}
                alt="200+ Launches Executed"
                loading="lazy"
              />
            </div>
            <h3>200+ Launches Executed</h3>
            <p>We've launched over 200 products and brands across India, helping first-time D2C founders and established FMCG companies successfully enter new categories. Our proven go-to-market expertise is built on real market experience and strategies that deliver results.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/go_to_market/quick_commerce_packaging.png`}
                alt="Q-Commerce Specialists"
                loading="lazy"
              />
            </div>
            <h3>Q-Commerce Specialists</h3>
            <p>Deep expertise in Blinkit, Zepto, and Swiggy Instamart onboarding and optimization, helping brands maximize visibility, improve product listings, and achieve top-seller status within the first 30 days of launching on quick commerce platforms.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/go_to_market/primary_packaging_design.png`}
                alt="In-House UGC & Content"
                loading="lazy"
              />
            </div>
            <h3>In-House UGC &amp; Content</h3>
            <p>Deep expertise in Blinkit, Zepto, and Swiggy Instamart onboarding and optimization, helping brands maximize visibility, improve product listings, and achieve top-seller status within the first 30 days of launching on quick commerce platforms.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/go_to_market/pre_press_software.png`}
                alt="Data-Driven Decisions"
                loading="lazy"
              />
            </div>
            <h3>Data-Driven Decisions</h3>
            <p>Weekly performance dashboards track every marketing channel against your launch KPIs, enabling data-driven budget allocation and continuous campaign optimization based on real performance insights, not guesswork.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/go_to_market/die_cutting_tools.png`}
                alt="Full-Funnel Ownership"
                loading="lazy"
              />
            </div>
            <h3>Full-Funnel Ownership</h3>
            <p>From brand awareness through influencer marketing and social media to consideration with performance marketing and content, and finally to conversion through product listings, quick commerce, and your website, one team manages your entire marketing funnel.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/go_to_market/3d_mockup_tools.png`}
                alt="Integrated Execution"
                loading="lazy"
              />
            </div>
            <h3>Integrated Execution</h3>
            <p>Brand strategy, creative, digital marketing, and channel management all under one roof, ensuring your go-to-market (GTM) launch is cohesive, on-brand, and executed seamlessly without the complexity of coordinating multiple agencies.</p>
          </div>
        </div>
      </section>

      {/* Behind the Work Section */}
      <ServiceBehindWorkSection
        testimonials={serviceClientSectionsData['go-to-market']?.testimonials}
      />

      {/* Featured Case Studies Slider */}
      <ServiceCaseStudiesSlider />

      {/* FAQ Section */}
      <section id="faq">
        <div className="section-header">
          <span className="section-tag">FAQ</span>
          <h2>Go-To-Market Strategy <span>Questions Answered</span></h2>
          <div className="divider"></div>
          <p className="section-sub">
            Everything you need to know about planning and executing a powerful brand launch in India.
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

      {/* Our Other Services Carousel */}
      <OtherServicesSlider />

      {/* CTA Section */}
      <section id="cta">
        <h2>Ready to Launch Your Brand <span>Into a Category Leader?</span></h2>
        <p>Share your product and target market — we'll build you a data-backed GTM plan that drives real results from day one.</p>
        <div className="cta-buttons">
          <a href="mailto:mail@sociapa.com" className="btn-white">Build My GTM Plan</a>
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
