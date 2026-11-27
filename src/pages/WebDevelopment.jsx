import React, { useState, useEffect } from 'react';
import OtherServicesSlider from '../components/OtherServicesSlider';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ServiceOurWorkSection from '../components/ServiceOurWorkSection';
import ServiceBehindWorkSection from '../components/ServiceBehindWorkSection';
import ServiceCaseStudiesSlider from '../components/ServiceCaseStudiesSlider';
import { serviceClientSectionsData } from '../data/serviceClientSectionsData';
import './WebDevelopment.css';

const faqsData = [
  {
    q: "Why is Sociapa considered the Best Web Development Agency in India?",
    a: "Sociapa combines strategic <a href='/brand-identity-design' class='seo-interlink'>UI/UX design</a>, modern technology stacks (React, Node.js, Next.js, WordPress, Shopify), and <a href='/seo-aeo-geo' class='seo-interlink'>technical SEO</a> to build websites that load in under 2 seconds and convert visitors into loyal customers."
  },
  {
    q: "Which web development technologies do you specialize in?",
    a: "We specialize in React.js, Next.js, Node.js, PHP, Laravel, WordPress, Shopify, WooCommerce, HTML5/CSS3, Tailwind CSS, and cloud deployment on AWS and Cloudflare."
  },
  {
    q: "How long does it take to develop a custom website?",
    a: "A standard corporate or brand website typically takes 3 to 5 weeks, while custom e-commerce platforms and complex full-stack web applications take between 6 to 10 weeks depending on features."
  },
  {
    q: "Will my website be mobile-friendly and optimized for Google Core Web Vitals?",
    a: "Yes! Every website we develop is 100% mobile-responsive, cross-browser compatible, and optimized for <a href='/seo-aeo-geo' class='seo-interlink'>Google Core Web Vitals</a> and search engine visibility."
  },
  {
    q: "Do you provide e-commerce development with payment gateway integration?",
    a: "Absolutely. We build high-converting e-commerce websites on Shopify, WooCommerce, and custom React platforms with seamless integrations for payment gateways, complemented by our <a href='/best-packaging-design-agency-india' class='seo-interlink'>D2C packaging design</a> and <a href='/best-digital-marketing-services-india' class='seo-interlink'>digital marketing services</a>."
  },
  {
    q: "Can you redesign our existing outdated website?",
    a: "Yes. We specialize in complete website redesigns—upgrading outdated user interfaces, improving page load speed, optimizing navigation flows, and conducting a thorough <a href='/free-website-audit' class='seo-interlink'>website audit</a> to preserve existing SEO authority."
  },
  {
    q: "Do you provide post-launch website maintenance and support?",
    a: "Yes, we offer monthly website maintenance plans covering security patches, regular site backups, speed tuning, content updates, and technical troubleshooting."
  },
  {
    q: "Will I have full ownership of my website source code and assets?",
    a: "100% yes. Upon project completion, all source code, design files, domain settings, and hosting access credentials are fully transferred to you."
  }
];

export default function WebDevelopment() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);
  const base = import.meta.env.BASE_URL || '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Growth-Focused Website design &amp; development Service in Noida &amp; Delhi NCR, India- Sociapa</title>
        <meta name="description" content="Looking for the Best Web Design Company in Noida & Delhi NCR with Strong Web Development Services. We build websites that are designed to grow your business.We at Sociapa offering cost effective & Customized Website design that suits your business need." />
        <meta
          name="keywords"
          content="Best Web Development Agency in India, Web Development Company Noida, Web Design Agency Delhi NCR, React JS Development, Shopify E-Commerce Agency, WordPress Website Development"
        />
        <link rel="canonical" href="https://sociapa.com/best-web-development-agency-india" />
        <meta property="og:title" content="Growth-Focused Website design & development Service in Noida & Delhi NCR, India- Sociapa" />
        <meta property="og:description" content="Looking for the Best Web Design Company in Noida & Delhi NCR with Strong Web Development Services. We build websites that are designed to grow your business.We at Sociapa offering cost effective & Customized Website design that suits your business need." />
        <meta property="og:url" content="https://sociapa.com/best-web-development-agency-india" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="SOCIAPA" />
        <meta property="og:image" content="https://sociapa.com/images/services/Website-App-Development.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sociapa" />
        <meta name="twitter:title" content="Growth-Focused Website design & development Service in Noida & Delhi NCR, India- Sociapa" />
        <meta name="twitter:description" content="Looking for the Best Web Design Company in Noida & Delhi NCR with Strong Web Development Services. We build websites that are designed to grow your business.We at Sociapa offering cost effective & Customized Website design that suits your business need." />
        <meta name="twitter:image" content="https://sociapa.com/images/services/Website-App-Development.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqsData.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.a.replace(/<[^>]*>/g, '')
            }
          }))
        })}</script>
        {/* BreadcrumbList Schema - Required by SOCIAPA (1).docx */}
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://sociapa.com/"},{"@type":"ListItem","position":2,"name":"Services","item":"https://sociapa.com/our-services"},{"@type":"ListItem","position":3,"name":"Best Web Development Agency India | Sociapa","item":"https://sociapa.com/best-web-development-agency-india"}]})}</script>
      </Helmet>
      <div className="web-development-page">
      {/* Hero Banner Section */}
      <section className="hero-banner-section">
        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
          Web Development Agency India - Sociapa
        </h1>
        <picture>
          <source type="image/webp" srcSet={`${base}assets/images/services_banner/web_development/web_dev.webp`} />
          <img
            src={`${base}assets/images/services_banner/web_development/web_dev.webp`}
            alt="Websites That Drive Growth & Conversions - Web Development Agency Sociapa"
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
            <div className="stat-num">500+</div>
            <div className="stat-label">Websites Launched</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">99.9%</div>
            <div className="stat-label">Uptime & Performance</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">25+</div>
            <div className="stat-label">Expert Web Engineers</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">8+</div>
            <div className="stat-label">Years of Engineering Mastery</div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services">
        <div className="section-header">
          <span className="section-tag">Development Services</span>
          <h2>
            Custom <span>Web Engineering</span> Solutions
          </h2>
          <div className="divider"></div>
          <p className="section-sub">
            We engineer high-performance, conversion-optimised websites and web applications tailored to your specific business goals.
          </p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/website_development/Discovery.png`}
                alt="Corporate & Enterprise Websites"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
            <h3>Corporate & Enterprise Websites</h3>
            <p>
              Professional, SEO-optimised corporate websites designed to build brand authority, communicate corporate vision, and generate qualified B2B leads.
            </p>
            <div className="service-tags">
              <span className="tag">B2B Portals</span>
              <span className="tag">Corporate</span>
              <span className="tag">Lead Gen</span>
              <span className="tag">Branding</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/website_development/Shopify  eCommerce.png`}
                alt="E-Commerce Store Development"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
            <h3>E-Commerce Store Development</h3>
            <p>
              High-conversion online stores built on Shopify, WooCommerce, or custom React frameworks with payment gateway, inventory, and logistics integrations.
            </p>
            <div className="service-tags">
              <span className="tag">Shopify</span>
              <span className="tag">WooCommerce</span>
              <span className="tag">Razorpay</span>
              <span className="tag">Custom Cart</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/website_development/React  Frontend Development.png`}
                alt="Custom React & Full-Stack Apps"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
            <h3>Custom React & Full-Stack Apps</h3>
            <p>
              Scalable, lightning-fast web applications built on React.js, Next.js, and Node.js for businesses demanding bespoke digital tools and client dashboards.
            </p>
            <div className="service-tags">
              <span className="tag">React.js</span>
              <span className="tag">Next.js</span>
              <span className="tag">Node.js</span>
              <span className="tag">REST APIs</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/website_development/UIUX Design.png`}
                alt="UI/UX & Mobile-First Web Design"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
            <h3>UI/UX & Mobile-First Web Design</h3>
            <p>
              User-centric interface design ensuring your web visitors experience intuitive navigation, interactive components, and flawless mobile responsiveness.
            </p>
            <div className="service-tags">
              <span className="tag">Figma</span>
              <span className="tag">Wireframing</span>
              <span className="tag">Prototyping</span>
              <span className="tag">UI System</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/website_development/CMS Development.png`}
                alt="WordPress & CMS Solutions"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
            <h3>WordPress & CMS Solutions</h3>
            <p>
              Custom WordPress development with speed tuning, custom element blocks, security hardening, and easy content management workflows for marketing teams.
            </p>
            <div className="service-tags">
              <span className="tag">WordPress</span>
              <span className="tag">Custom Themes</span>
              <span className="tag">Plugins</span>
              <span className="tag">Security</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/website_development/PHP  Backend Development.png`}
                alt="SEO-First Technical Architecture"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
            <h3>SEO-First Technical Architecture</h3>
            <p>
              Websites architected with clean HTML5 semantics, schema markup, automated image compression, and Core Web Vitals compliance for search domination.
            </p>
            <div className="service-tags">
              <span className="tag">Technical SEO</span>
              <span className="tag">Core Web Vitals</span>
              <span className="tag">PageSpeed</span>
              <span className="tag">Schema</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech">
        <div className="section-header">
          <span className="section-tag">Tech Stack</span>
          <h2>
            Technologies We <span>Master & Build With</span>
          </h2>
          <div className="divider"></div>
          <p className="section-sub">
            Modern, battle-tested technologies powering resilient, high-speed web applications.
          </p>
        </div>
        <div className="tech-grid">
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/website_development/React.js.svg`}
                alt="React.js"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </span>
            <span>React.js</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/website_development/Next.js.svg`}
                alt="Next.js"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </span>
            <span>Next.js</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/website_development/JavaScript ES6+.svg`}
                alt="Node.js"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </span>
            <span>Node.js</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/website_development/WordPress.svg`}
                alt="WordPress"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </span>
            <span>WordPress</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/website_development/Shopify.svg`}
                alt="Shopify"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </span>
            <span>Shopify</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/website_development/Laravel.svg`}
                alt="PHP / Laravel"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </span>
            <span>PHP / Laravel</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/website_development/HTML5.svg`}
                alt="HTML5 / CSS3"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </span>
            <span>HTML5 / CSS3</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/website_development/Figma.svg`}
                alt="Figma"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </span>
            <span>Tailwind / Figma</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/website_development/MySQL.png`}
                alt="MySQL / MongoDB"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </span>
            <span>MySQL / MongoDB</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/website_development/cPanel Hosting.png`}
                alt="AWS / Cloudflare"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </span>
            <span>Cloud &amp; Hosting</span>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team">
        <div className="section-header">
          <span className="section-tag">Our Engineering Squad</span>
          <h2>
            Specialized <span>Web Engineering Experts</span>
          </h2>
          <div className="divider"></div>
          <p className="section-sub">
            A dedicated team of full-stack developers, UI/UX designers, and QA engineers committed to code perfection.
          </p>
        </div>

        <div className="team-intro">
          <div className="dept-block">
            <div className="dept-icon">
              <img
                src={`${base}assets/images/services_icons/website_development/React  Frontend Development.png`}
                alt="Frontend Architects"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
            <h3>Frontend Architects</h3>
            <p>Crafting silky-smooth user experiences in React, Next.js, and modern CSS animation libraries.</p>
            <span className="dept-count">10+ Developers</span>
          </div>
          <div className="dept-block">
            <div className="dept-icon">
              <img
                src={`${base}assets/images/services_icons/website_development/PHP  Backend Development.png`}
                alt="Backend & CMS Specialists"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
            <h3>Backend &amp; CMS Specialists</h3>
            <p>Building secure APIs, database models, custom WordPress systems, and Shopify Liquid logic.</p>
            <span className="dept-count">8+ Engineers</span>
          </div>
          <div className="dept-block">
            <div className="dept-icon">
              <img
                src={`${base}assets/images/services_icons/website_development/QA & Testing.png`}
                alt="QA & Performance Leads"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
            <h3>QA &amp; Performance Leads</h3>
            <p>Auditing site speed, cross-device responsiveness, security protocols, and Core Web Vitals.</p>
            <span className="dept-count">5+ QA Experts</span>
          </div>
        </div>

        <div className="team-roles-grid">
          <div className="role-card">
            <div className="role-avatar">
              <img
                src={`${base}assets/images/services_icons/website_development/React.js.svg`}
                alt="Full-Stack Lead"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
            <div className="role">Full-Stack Lead</div>
            <div className="dept-tag">Architecture</div>
            <div className="role-skills">
              <span className="skill-pill">React</span>
              <span className="skill-pill">Node</span>
              <span className="skill-pill">AWS</span>
            </div>
          </div>

          <div className="role-card">
            <div className="role-avatar">
              <img
                src={`${base}assets/images/services_icons/website_development/Figma.svg`}
                alt="Lead UI/UX Designer"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
            <div className="role">Lead UI/UX Designer</div>
            <div className="dept-tag">Design</div>
            <div className="role-skills">
              <span className="skill-pill">Figma</span>
              <span className="skill-pill">Design Systems</span>
            </div>
          </div>

          <div className="role-card">
            <div className="role-avatar">
              <img
                src={`${base}assets/images/services_icons/website_development/Shopify.svg`}
                alt="Shopify Expert"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
            <div className="role">Shopify Expert</div>
            <div className="dept-tag">E-Commerce</div>
            <div className="role-skills">
              <span className="skill-pill">Liquid</span>
              <span className="skill-pill">Store Setup</span>
            </div>
          </div>

          <div className="role-card">
            <div className="role-avatar">
              <img
                src={`${base}assets/images/services_icons/website_development/WordPress.svg`}
                alt="WordPress Engineer"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
            <div className="role">WordPress Engineer</div>
            <div className="dept-tag">CMS</div>
            <div className="role-skills">
              <span className="skill-pill">PHP</span>
              <span className="skill-pill">Custom Themes</span>
            </div>
          </div>

          <div className="role-card">
            <div className="role-avatar">
              <img
                src={`${base}assets/images/services_icons/website_development/Development.png`}
                alt="Performance Specialist"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
            <div className="role">Performance Specialist</div>
            <div className="dept-tag">Optimization</div>
            <div className="role-skills">
              <span className="skill-pill">Web Vitals</span>
              <span className="skill-pill">SEO</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process">
        <div className="section-header">
          <span className="section-tag">Our Process</span>
          <h2>
            How We Build <span>Better Websites</span>
          </h2>
          <div className="divider"></div>
          <p className="section-sub">
            A structured 6-step agile development framework ensuring transparency, speed, and flawless code delivery.
          </p>
        </div>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-num">
              <img
                src={`${base}assets/images/services_icons/website_development/Discovery.png`}
                alt="Discovery"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
            <h3>Discovery</h3>
            <p>Understanding business goals, target user personas, and core technical requirements.</p>
          </div>
          <div className="process-step">
            <div className="step-num">
              <img
                src={`${base}assets/images/services_icons/website_development/UI Design.png`}
                alt="UI/UX Design"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
            <h3>UI/UX Design</h3>
            <p>Designing interactive wireframes, visual mockups, and mobile navigation flows.</p>
          </div>
          <div className="process-step">
            <div className="step-num">
              <img
                src={`${base}assets/images/services_icons/website_development/Development.png`}
                alt="Development"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
            <h3>Development</h3>
            <p>Writing clean, component-driven code using modern frameworks and robust security.</p>
          </div>
          <div className="process-step">
            <div className="step-num">
              <img
                src={`${base}assets/images/services_icons/website_development/QA & Testing.png`}
                alt="Testing & QA"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
            <h3>Testing &amp; QA</h3>
            <p>Executing multi-browser, screen resolution, and security testing across devices.</p>
          </div>
          <div className="process-step">
            <div className="step-num">
              <img
                src={`${base}assets/images/services_icons/website_development/UX Strategy.png`}
                alt="Speed & SEO"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
            <h3>Speed &amp; SEO</h3>
            <p>Optimizing scripts, caching, image formats, and meta tags for peak search rankings.</p>
          </div>
          <div className="process-step">
            <div className="step-num">
              <img
                src={`${base}assets/images/services_icons/website_development/Launch & Support.png`}
                alt="Deployment"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
            <h3>Deployment</h3>
            <p>Zero-downtime server launch, SSL setup, domain mapping, and post-launch support.</p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <ServiceOurWorkSection
        work={serviceClientSectionsData['web-development']?.work}
      />

      {/* Why Choose Sociapa Section */}
      <section id="why">
        <div className="section-header">
          <span className="section-tag">Why Choose Us</span>
          <h2>
            The Sociapa <span>Web Development Advantage</span>
          </h2>
          <div className="divider"></div>
          <p className="section-sub">
            Why premier brands across Noida, Delhi NCR & India rely on Sociapa as their web agency.
          </p>
        </div>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/website_development/Development.png`}
                alt="Sub-2 Second Loading Speeds"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
            <h3>Sub-2 Second Loading Speeds</h3>
            <p>
              We optimize code, minify scripts, and utilize next-gen image formats to deliver lightning-fast loading speeds that retain traffic and boost sales.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/website_development/UX Strategy.png`}
                alt="Conversion-Rate Optimised"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
            <h3>Conversion-Rate Optimised</h3>
            <p>
              Every layout, call-to-action button, and checkout funnel is scientifically crafted to reduce drop-offs and maximize lead conversions.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/website_development/UI Design.png`}
                alt="100% Mobile Responsive"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
            <h3>100% Mobile Responsive</h3>
            <p>
              Over 75% of web traffic is mobile. Our websites are built mobile-first, rendering flawlessly on smart phones, tablets, and desktops.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/website_development/PHP  Backend Development.png`}
                alt="Fortified Security Protocols"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
            <h3>Fortified Security Protocols</h3>
            <p>
              We implement SSL encryption, DDoS protection, database sanitization, and automated security scans to protect your web application.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/website_development/CMS Development.png`}
                alt="SEO-First Codebase"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
            <h3>SEO-First Codebase</h3>
            <p>
              Structured data markup, semantic HTML tags, clean URLs, and canonical tags are baked directly into our core development process.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/website_development/Client Servicing & Support.png`}
                alt="Dedicated Tech Support"
                width="60"
                height="60"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
            <h3>Dedicated Tech Support</h3>
            <p>
              Our relationship doesn't end at launch. We provide ongoing maintenance, feature updates, and server monitoring to keep you ahead.
            </p>
          </div>
        </div>
      </section>

      {/* Behind the Work Section */}
      <ServiceBehindWorkSection
        testimonials={serviceClientSectionsData['web-development']?.testimonials}
      />

      {/* Featured Case Studies Slider */}
      <ServiceCaseStudiesSlider />

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Got Questions?</span>
            <h2>
              Frequently Asked <span>Questions</span>
            </h2>
            <div className="divider"></div>
            <p className="section-sub">
              Find clear answers to common questions about our web development services.
            </p>
          </div>
          <div className="faq-list">
            {faqsData.map((item, idx) => (
              <div key={idx} className={`faq-item ${openFaq === idx ? 'open' : ''}`}>
                <div className="faq-q" onClick={() => toggleFaq(idx)}>
                  <span>{item.q}</span>
                  <span className="faq-icon">+</span>
                </div>
                <div className="faq-a">
                  <p dangerouslySetInnerHTML={{ __html: item.a }}></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Other Services Carousel */}
      <OtherServicesSlider />

      {/* CTA Section */}
      <section id="cta">
        <h2>
          Ready to Build a <span>World-Class Website?</span>
        </h2>
        <p>
          Partner with India’s premier web development agency. Turn your digital vision into a fast, secure, and high-converting web application today.
        </p>
        <div className="cta-buttons">
          <Link to="/contact-us" className="btn-white">
            Start Your Web Project
          </Link>
          <a href="mailto:mail@sociapa.com" className="btn-outline-white">
            Email Our Web Team
          </a>
        </div>
      </section>
      </div>
    </>
  );
}
