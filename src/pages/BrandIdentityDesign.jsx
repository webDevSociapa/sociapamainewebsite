import React, { useState, useEffect } from 'react';
import OtherServicesSlider from '../components/OtherServicesSlider';
import { Helmet } from 'react-helmet-async';
import ServiceOurWorkSection from '../components/ServiceOurWorkSection';
import ServiceBehindWorkSection from '../components/ServiceBehindWorkSection';
import ServiceCaseStudiesSlider from '../components/ServiceCaseStudiesSlider';
import { serviceClientSectionsData } from '../data/serviceClientSectionsData';
import './BrandIdentityDesign.css';

const faqsData = [
  {
    q: "1. What is included in your brand identity design service?",
    a: "<p>Our brand identity design service includes mood boards, logo design, colour palette development, typography systems, brand mascots, visual identity systems, and comprehensive brand guidelines to ensure a consistent brand presence across every touchpoint.</p>"
  },
  {
    q: "2. How do you create a brand identity?",
    a: "<p>We begin by translating your <a href='/brand-strategy' class='seo-interlink'>brand strategy</a> and personality into visual mood boards, defining the creative direction before designing your logo, colour palette, typography, and complete visual identity system.</p>"
  },
  {
    q: "3. What types of logos do you design?",
    a: "<p>We design premium logos, including wordmarks, lettermarks, monograms, and combination marks, with primary, secondary, and icon-only variations for use across digital and print applications.</p>"
  },
  {
    q: "4. Do you provide brand guidelines?",
    a: "<p>Yes. We deliver a comprehensive brand guidelines document covering logo usage, colour codes (HEX, RGB, CMYK, and Pantone), typography specifications, imagery style, and brand usage guidelines for your team and production vendors.</p>"
  },
  {
    q: "5. Do you create colour palettes and typography systems?",
    a: "<p>Yes. We develop strategically selected colour palettes and typography systems, including primary and secondary fonts with clear hierarchy guidelines for print, digital, <a href='/best-packaging-design-agency-india' class='seo-interlink'>packaging</a>, and <a href='/best-social-media-marketing-agency-india' class='seo-interlink'>social media</a>.</p>"
  },
  {
    q: "6. Can you design a custom brand mascot?",
    a: "<p>Absolutely. We create custom brand mascots that reflect your brand personality, strengthen emotional connections, and improve brand recall across packaging, digital platforms, and marketing materials.</p>"
  },
  {
    q: "7. What is a visual identity system?",
    a: "<p>A visual identity system goes beyond the logo and includes brand patterns, icons, illustration styles, photography guidelines, and design templates to ensure a consistent brand experience across every customer touchpoint.</p>"
  },
  {
    q: "8. Will my brand identity work across different platforms?",
    a: "<p>Yes. Every logo and visual identity element is designed to perform seamlessly across packaging, retail, websites, social media, outdoor advertising, merchandise, and other brand applications.</p>"
  },
  {
    q: "9. Is your design process based on strategy?",
    a: "<p>Yes. Every visual identity decision, from colours and typography to icons and layouts, is rooted in your brand strategy to ensure every design choice supports your business objectives and brand positioning.</p>"
  },
  {
    q: "10. Do you work with startups and established brands?",
    a: "<p>Yes. Our experience spans FMCG, D2C, retail, wellness, fashion, and technology, creating visual identities for businesses ranging from early-stage startups to established national brands.</p>"
  }
];

export default function BrandIdentityDesign() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);
  const base = import.meta.env.BASE_URL || '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="brand-identity-design-page brand-identity-page">
      <Helmet>
        <title>Brand Identity Design Services India | Sociapa – Create a Memorable Brand Identity</title>
        <meta name="description" content="Sociapa provides professional brand identity design services in India, including logo design, visual identity, typography, color palette, brand guidelines, stationery, and complete branding solutions for startups and businesses." />
        <meta
          name="keywords"
          content="brand strategy agency India, brand identity design, packaging design agency, go to market strategy, D2C branding agency, FMCG brand design"
        />
        <link rel="canonical" href="https://sociapa.com/brand-identity-design" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SOCIAPA" />
        <meta property="og:title" content="Brand Identity Design Services India | Sociapa – Create a Memorable Brand Identity" />
        <meta property="og:description" content="Build a memorable brand with Sociapa" />
        <meta property="og:url" content="https://sociapa.com/brand-identity-design" />
        <meta property="og:image" content="https://sociapa.com/logoSociapa.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Sociapa - Your Social Buddy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Brand Identity Design Services India | Sociapa – Create a Memorable Brand Identity" />
        <meta name="twitter:description" content="Build a memorable brand with Sociapa" />
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
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sociapa.com/" }, { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://sociapa.com/our-services" }, { "@type": "ListItem", "position": 3, "name": "Brand Identity Design Agency India | Sociapa", "item": "https://sociapa.com/brand-identity-design" }] })}</script>
      </Helmet>

      {/* Hero Banner Section */}
      <section className="hero-banner-section">
        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
          Brand Identity Design Agency India - Sociapa
        </h1>
        <picture>
          <source type="image/webp" srcSet={`${base}assets/images/services_banner/brand_identity_design/brand_identityban.webp`} />
          <img
            src={`${base}assets/images/services_banner/brand_identity_design/brand_identityban.jpg`}
            alt="Brand Identity Design Agency India - Sociapa"
            className="hero-banner-img"
            decoding="async"
            width="1920"
            height="1080"
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
            <div className="stat-label">Brand Identities Created</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">8+</div>
            <div className="stat-label">Years of Design Excellence</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">50+</div>
            <div className="stat-label">Industries Served</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">98%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services">
        <div className="section-header">
          <span className="section-tag">What We Design</span>
          <h2>Complete <span>Brand Identity Design</span> Services</h2>
          <div className="divider"></div>
          <p className="section-sub">
            From the first mood board to the final brand guidelines, we craft strategic, beautiful, and scalable visual identities that strengthen brand recognition, build trust, and create a consistent brand experience across every touchpoint.
          </p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/brand_identity_design/mood_board_design.png`}
                alt="Mood Board Design"
                loading="lazy"
              />
            </div>
            <h3>Mood Board Design</h3>
            <p>
              We translate your brand personality and strategy into visual mood boards, setting the creative direction for colours, textures, photography style, and design language before a single logo is created.
            </p>
            <div className="service-tags">
              <span className="tag">Visual Direction</span>
              <span className="tag">Creative Brief</span>
              <span className="tag">Aesthetic Mapping</span>
              <span className="tag">Style Board</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/brand_identity_design/colour_palette_and_typography.png`}
                alt="Colour Palette & Typography"
                loading="lazy"
              />
            </div>
            <h3>Colour Palette &amp; Typography</h3>
            <p>
              Craft a scientifically and psychologically informed colour palette alongside a precise typography system, including primary fonts, secondary fonts, and typography hierarchy for print, digital, and social media applications.
            </p>
            <div className="service-tags">
              <span className="tag">Brand Colours</span>
              <span className="tag">Font Selection</span>
              <span className="tag">Type Hierarchy</span>
              <span className="tag">Color Psychology</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/brand_identity_design/logo_design.png`}
                alt="Logo Design"
                loading="lazy"
              />
            </div>
            <h3>Logo Design</h3>
            <p>
              Premium logo design, including wordmarks, lettermarks, monograms, and combination marks, with multiple logo variations, including primary, secondary, and icon-only versions, designed for every application from business cards to billboards.
            </p>
            <div className="service-tags">
              <span className="tag">Logo Design</span>
              <span className="tag">Wordmark</span>
              <span className="tag">Monogram</span>
              <span className="tag">Icon Design</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/brand_identity_design/brand_guidelines.png`}
                alt="Brand Guidelines"
                loading="lazy"
              />
            </div>
            <h3>Brand Guidelines</h3>
            <p>
              A comprehensive brand guidelines document covering logo usage, colour codes (HEX, RGB, CMYK, and Pantone), typography specifications, imagery style, and brand do's and don'ts for your design team and production vendors.
            </p>
            <div className="service-tags">
              <span className="tag">Brand Book</span>
              <span className="tag">Style Guide</span>
              <span className="tag">Logo Usage Rules</span>
              <span className="tag">Design Tokens</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/brand_identity_design/mascot_design.png`}
                alt="Mascot Design"
                loading="lazy"
              />
            </div>
            <h3>Mascot Design</h3>
            <p>
              Custom brand mascot design, creating a unique character that embodies your brand personality, builds an emotional connection, and enhances brand recall across packaging, digital platforms, and marketing collateral.
            </p>
            <div className="service-tags">
              <span className="tag">Character Design</span>
              <span className="tag">Brand Mascot</span>
              <span className="tag">Illustration</span>
              <span className="tag">Brand Character</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/brand_identity_design/visual_identity_system.png`}
                alt="Visual Identity System"
                loading="lazy"
              />
            </div>
            <h3>Visual Identity System</h3>
            <p>
              Beyond the logo, we create a complete visual identity system that includes brand patterns, custom icons, illustration styles, photography guidelines, and application templates for business cards, letterheads, social media, packaging, and other brand touchpoints.
            </p>
            <div className="service-tags">
              <span className="tag">Identity System</span>
              <span className="tag">Brand Patterns</span>
              <span className="tag">Brand Templates</span>
              <span className="tag">Stationery Design</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools">
        <div className="section-header">
          <span className="section-tag">Design Tools</span>
          <h2>Tools Our <span>Designers Master</span></h2>
          <div className="divider"></div>
          <p className="section-sub">
            Industry-leading design tools for pixel-perfect identity systems across print and digital.
          </p>
        </div>
        <div className="tech-grid">
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/brand_identity_design/adobe_illustrator.png`}
                alt="Adobe Illustrator"
                loading="lazy"
              />
            </span>
            <span>Adobe Illustrator</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/brand_identity_design/adobe_indesign.png`}
                alt="Adobe InDesign"
                loading="lazy"
              />
            </span>
            <span>Adobe InDesign</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/brand_identity_design/figma.png`}
                alt="Figma"
                loading="lazy"
              />
            </span>
            <span>Figma</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/brand_identity_design/affinity_designer.png`}
                alt="Affinity Designer"
                loading="lazy"
              />
            </span>
            <span>Affinity Designer</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/brand_identity_design/procreate.png`}
                alt="Procreate"
                loading="lazy"
              />
            </span>
            <span>Procreate</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/brand_identity_design/pantone.png`}
                alt="Coolors / Pantone"
                loading="lazy"
              />
            </span>
            <span>Coolors / Pantone</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/brand_identity_design/adpbe_fonts.png`}
                alt="Adobe Fonts"
                loading="lazy"
              />
            </span>
            <span>Adobe Fonts</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/brand_identity_design/brand_folder.png`}
                alt="Brand Folder"
                loading="lazy"
              />
            </span>
            <span>Brand Folder</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/brand_identity_design/notion_brand_docs.png`}
                alt="Notion (Brand Docs)"
                loading="lazy"
              />
            </span>
            <span>Notion (Brand Docs)</span>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <ServiceOurWorkSection
        work={serviceClientSectionsData['brand-identity-design']?.work}
        subtitle="Visual identity projects across FMCG, food & beverages, healthcare, and lifestyle categories."
      />

      {/* Process Section */}
      <section id="process">
        <div className="section-header">
          <span className="section-tag">How We Design</span>
          <h2>Our <span>5-Step Identity</span> Design Process</h2>
          <div className="divider"></div>
        </div>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-circle">
              <img
                src={`${base}assets/images/services_icons/brand_identity_design/discovery.png`}
                alt="Discovery"
                loading="lazy"
              />
            </div>
            <h4>Discovery</h4>
            <p>Brand audit, competitor visual analysis, and deep-dive brief to understand design goals and audience</p>
          </div>
          <div className="process-step">
            <div className="step-circle">
              <img
                src={`${base}assets/images/services_icons/brand_identity_design/moodboard.png`}
                alt="Mood Board"
                loading="lazy"
              />
            </div>
            <h4>Mood Board</h4>
            <p>Visual direction concepts presented — colour worlds, typography styles, and design languages to choose from</p>
          </div>
          <div className="process-step">
            <div className="step-circle">
              <img
                src={`${base}assets/images/services_icons/brand_identity_design/concept_design.png`}
                alt="Concept Design"
                loading="lazy"
              />
            </div>
            <h4>Concept Design</h4>
            <p>2–3 distinct logo and identity concepts developed and presented with rationale and applications</p>
          </div>
          <div className="process-step">
            <div className="step-circle">
              <img
                src={`${base}assets/images/services_icons/brand_identity_design/refinement.png`}
                alt="Refinement"
                loading="lazy"
              />
            </div>
            <h4>Refinement</h4>
            <p>Selected concept refined through structured feedback rounds until it's perfect across all applications</p>
          </div>
          <div className="process-step">
            <div className="step-circle">
              <img
                src={`${base}assets/images/services_icons/brand_identity_design/brand_guidelines_2.png`}
                alt="Brand Guidelines"
                loading="lazy"
              />
            </div>
            <h4>Brand Guidelines</h4>
            <p>Final brand guidelines document delivered with all file formats — AI, EPS, SVG, PNG, PDF</p>
          </div>
        </div>
      </section>

      {/* Why Sociapa Section */}
      <section id="why">
        <div className="section-header">
          <span className="section-tag">Why Sociapa</span>
          <h2>Design That Is <span>Strategic, Not Just Pretty</span></h2>
          <div className="divider" style={{ background: 'rgba(255,255,255,0.3)' }}></div>
          <p className="section-sub">
            We design with your brand strategy at the core, ensuring every visual identity decision is intentional, purposeful, and aligned with your business goals.
          </p>
        </div>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/brand_strategy/strategy_led_design.png`}
                alt="Strategy-Led Design"
                loading="lazy"
              />
            </div>
            <h3>Strategy-Led Design</h3>
            <p>Every visual identity decision, including colour, typography, shapes, and icons, is rooted in your brand strategy. We don't guess; we design with purpose, clarity, and strategic insight.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/brand_strategy/160_plus_identity_projects.png`}
                alt="160+ Identity Projects"
                loading="lazy"
              />
            </div>
            <h3>160+ Identity Projects</h3>
            <p>Across FMCG, D2C, retail, wellness, fashion, and technology, our portfolio spans diverse industries and supports businesses ranging from startups to national brands.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/brand_strategy/print_and_digital_ready.png`}
                alt="Print & Digital Ready"
                loading="lazy"
              />
            </div>
            <h3>Print &amp; Digital Ready</h3>
            <p>Every logo and visual identity element is designed to perform seamlessly across packaging, retail stores, social media, websites, outdoor advertising, merchandise, and every customer touchpoint.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/brand_strategy/fast_turnaround.png`}
                alt="Fast Turnaround"
                loading="lazy"
              />
            </div>
            <h3>Fast Turnaround</h3>
            <p>First concepts delivered within 7 business days. Structured feedback rounds ensure on-time delivery without sacrificing quality.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/brand_strategy/comprehensive_deliverables.png`}
                alt="Comprehensive Deliverables"
                loading="lazy"
              />
            </div>
            <h3>Comprehensive Deliverables</h3>
            <p>You receive all file formats (AI, EPS, SVG, PNG, PDF), colour codes for every medium, and a complete brand guidelines document.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/brand_strategy/full_ip_ownership.png`}
                alt="Full IP Ownership"
                loading="lazy"
              />
            </div>
            <h3>Full IP Ownership</h3>
            <p>All design work is 100% original, with complete intellectual property (IP) rights transferred to you upon project completion. Every logo, visual identity, and brand asset is custom designed with no templates or stock elements.</p>
          </div>
        </div>
      </section>

      {/* Behind the Work Section */}
      <ServiceBehindWorkSection
        testimonials={serviceClientSectionsData['brand-identity-design']?.testimonials}
      />

      {/* Featured Case Studies Slider */}
      <ServiceCaseStudiesSlider />

      {/* FAQ Section */}
      <section id="faq">
        <div className="section-header">
          <span className="section-tag">FAQ</span>
          <h2>Brand Identity Design <span>Questions Answered</span></h2>
          <div className="divider"></div>
          <p className="section-sub">
            Everything you need to know about getting your brand identity designed with Sociapa.
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
        <h2>Ready for an Identity That <span>Turns Heads &amp; Builds Trust?</span></h2>
        <p>Share your brand vision and let us design a visual identity that stands the test of time.</p>
        <div className="cta-buttons">
          <a href="mailto:mail@sociapa.com" className="btn-white">Get a Design Proposal</a>
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
