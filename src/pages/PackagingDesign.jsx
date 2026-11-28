import React, { useState, useEffect } from 'react';
import OtherServicesSlider from '../components/OtherServicesSlider';
import { Helmet } from 'react-helmet-async';
import ServiceOurWorkSection from '../components/ServiceOurWorkSection';
import ServiceBehindWorkSection from '../components/ServiceBehindWorkSection';
import ServiceCaseStudiesSlider from '../components/ServiceCaseStudiesSlider';
import { serviceClientSectionsData } from '../data/serviceClientSectionsData';
import './PackagingDesign.css';

const faqsData = [
  {
    q: "1. What packaging design services does Sociapa offer?",
    a: "<p>Sociapa creates strategic packaging designs that command attention on shelves, enhance online customer experiences, and drive conversions across retail, e-commerce, and quick commerce platforms. Our services include packaging concepts, structural design, dieline engineering, print-ready files, and production coordination.</p>"
  },
  {
    q: "2. Do you design packaging for retail, e-commerce, and quick commerce platforms?",
    a: "<p>Yes. We design packaging solutions specifically for retail shelves, e-commerce deliveries, and quick commerce platforms like Blinkit, Zepto, Swiggy Instamart, and BigBasket Now. Each channel has unique requirements, and we create packaging that performs across all customer touchpoints.</p>"
  },
  {
    q: "3. What types of packaging formats do you design?",
    a: "<p>We design a wide range of packaging formats, including cartons, pouches, bottles, jars, tubes, sachets, boxes, mailer boxes, inner packaging, protective inserts, and shelf-ready display units.</p>"
  },
  {
    q: "4. How do you ensure packaging stands out on shelves?",
    a: "<p>We focus on shelf impact through strong visual hierarchy, category colour codes, strategic design elements, compliance labelling, and packaging systems designed to capture attention in competitive retail environments.</p>"
  },
  {
    q: "5. Do you create packaging for D2C and marketplace brands?",
    a: "<p>Yes. We design D2C packaging that photographs beautifully, creates memorable <a href='/product-unboxing-experience' class='seo-interlink'>unboxing experience</a>s, and withstands last-mile logistics. Our packaging solutions include mailer boxes, protective inserts, and inner packaging for online sellers and marketplace brands.</p>"
  },
  {
    q: "6. How do you approach packaging design strategy?",
    a: "<p>We analyze shopper behaviour, category conventions, and competitor packaging before designing. Every visual decision is informed by how your target customers discover, evaluate, and purchase products.</p>"
  },
  {
    q: "7. Do you handle packaging compliance requirements?",
    a: "<p>Yes. Food, pharma, and wellness packaging includes compliance checks for requirements such as FSSAI, AYUSH, and BIS standards, ensuring packaging meets regulatory requirements from the beginning.</p>"
  },
  {
    q: "8. Do you manage the packaging print production process?",
    a: "<p>Yes. Beyond packaging design, we manage the print production process by coordinating directly with printers to ensure colour accuracy, finishing quality, and timely delivery.</p>"
  },
  {
    q: "9. Do you provide dieline engineering and print-ready packaging files?",
    a: "<p>Yes. We provide complete dieline engineering, pre-press preparation, and print-ready packaging files to ensure your packaging design is executed accurately when it goes into production.</p>"
  },
  {
    q: "10. Do you offer sustainable packaging solutions?",
    a: "<p>Yes. We have expertise in eco-friendly packaging materials, including kraft paper, biodegradable films, recyclable cartons, and soy-based inks, helping brands create sustainable packaging solutions.</p>"
  }
];

export default function PackagingDesign() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);
  const base = import.meta.env.BASE_URL || '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="packaging-design-page">
      <Helmet>
        <title>Packaging Service in Noida &amp; Delhi NCR, India - Sociapa</title>
        <meta name="description" content="Best Packaging Company in Noida & Delhi NCR-Graphic design plays a vital role in brand promoting with visually appealing graphics." />
        <meta
          name="keywords"
          content="packaging design agency India, FMCG packaging design, D2C packaging design, product packaging design, box design, label design"
        />
        <link rel="canonical" href="https://sociapa.com/best-packaging-design-agency-india" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SOCIAPA" />
        <meta property="og:title" content="Creative/Graphic Designing Service in Noida & Delhi NCR, India - Sociapa" />
        <meta property="og:description" content="Best Packaging Company in Noida & Delhi NCR-Graphic design plays a vital role in brand promoting with visually appealing graphics." />
        <meta property="og:url" content="https://sociapa.com/best-packaging-design-agency-india" />
        <meta property="og:image" content="https://sociapa.com/images/sociapa-og-preview.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Sociapa - Your Social Buddy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Creative/Graphic Designing Service in Noida & Delhi NCR, India - Sociapa" />
        <meta name="twitter:description" content="Best Packaging Company in Noida & Delhi NCR-Graphic design plays a vital role in brand promoting with visually appealing graphics." />
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
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sociapa.com/" }, { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://sociapa.com/our-services" }, { "@type": "ListItem", "position": 3, "name": "Best Packaging Design Agency India | Sociapa", "item": "https://sociapa.com/best-packaging-design-agency-india" }] })}</script>
      </Helmet>

      {/* Hero Banner Section */}
      <section className="hero-banner-section">
        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
          Best Packaging Design Agency India - Sociapa
        </h1>
        <picture>
          <source type="image/webp" srcSet={`${base}assets/images/services_banner/packaging_design/packaging.webp`} />
          <img
            src={`${base}assets/images/services_banner/packaging_design/packaging.webp`}
            alt="Best Packaging Design Agency India - Sociapa"
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
            <div className="stat-label">Packaging Projects</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">8+</div>
            <div className="stat-label">Years of Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">30+</div>
            <div className="stat-label">Industries Served</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">100%</div>
            <div className="stat-label">Print-Ready Delivery</div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services">
        <div className="section-header">
          <span className="section-tag">What We Design</span>
          <h2>Packaging Design for <span>Every Channel</span></h2>
          <div className="divider"></div>
          <p className="section-sub">
            Whether you sell on retail shelves, ship products to customer doorsteps, or list on platforms like Blinkit and Zepto, we design packaging solutions that perform wherever your customers discover and purchase your products.
          </p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/packaging_design/primary_packaging_design.png`}
                alt="Primary Packaging Design"
                loading="lazy"
              />
            </div>
            <h3>Primary Packaging Design</h3>
            <p>
              Cartons, pouches, bottles, jars, tubes, sachets, and boxes designed to protect your product, communicate your brand story, and convert shoppers into buyers at first glance.
            </p>
            <div className="service-tags">
              <span className="tag">Carton Design</span>
              <span className="tag">Pouch Design</span>
              <span className="tag">Bottle Labels</span>
              <span className="tag">Sachet Design</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/packaging_design/industry_based_packaging.png`}
                alt="Retail & Offline Sales Packaging"
                loading="lazy"
              />
            </div>
            <h3>Retail &amp; Offline Sales Packaging</h3>
            <p>
              Packaging engineered for maximum shelf impact, featuring strong visual hierarchy, category-specific colour codes, compliance labelling, and shelf-ready display units designed to capture attention in busy retail environments.
            </p>
            <div className="service-tags">
              <span className="tag">Shelf-Ready Design</span>
              <span className="tag">Retail Packaging</span>
              <span className="tag">FMCG Packaging</span>
              <span className="tag">Display Units</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/packaging_design/ecommerce_packaging_design.png`}
                alt="Ecommerce Packaging Design"
                loading="lazy"
              />
            </div>
            <h3>Ecommerce Packaging Design</h3>
            <p>
              Packaging designed to photograph beautifully, create memorable unboxing experiences, and withstand last-mile logistics, including mailer boxes, inner packaging, and protective inserts for D2C brands and marketplace sellers.
            </p>
            <div className="service-tags">
              <span className="tag">Mailer Box</span>
              <span className="tag">Shipping Box</span>
              <span className="tag">Amazon Packaging</span>
              <span className="tag">Flipkart Listings</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/packaging_design/ecommerce_packaging_design.png`}
                alt="Quick Commerce Packaging"
                loading="lazy"
              />
            </div>
            <h3>Quick Commerce Packaging</h3>
            <p>
              Compact, scannable, and compliance-ready packaging optimized for Blinkit, Zepto, Swiggy Instamart, and BigBasket Now, designed to maximize listing quality and improve shelf visibility across quick commerce platforms.
            </p>
            <div className="service-tags">
              <span className="tag">Blinkit Design</span>
              <span className="tag">Zepto Ready</span>
              <span className="tag">Q-Commerce</span>
              <span className="tag">Platform Compliance</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/packaging_design/industry_based_packaging.png`}
                alt="Industry-Based Packaging"
                loading="lazy"
              />
            </div>
            <h3>Industry-Based Packaging</h3>
            <p>
              Category-specific packaging expertise across food and beverage, nutraceuticals, personal care, home care, pet care, and apparel. We understand category conventions and know how to break them strategically to create packaging that stands out.
            </p>
            <div className="service-tags">
              <span className="tag">Food Packaging</span>
              <span className="tag">Pharma Packaging</span>
              <span className="tag">Beauty Packaging</span>
              <span className="tag">Apparel Tags</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/packaging_design/packaging_dieline_and_production.png`}
                alt="Packaging Dieline & Production"
                loading="lazy"
              />
            </div>
            <h3>Packaging Dieline &amp; Production</h3>
            <p>
              Complete dieline engineering, pre-press preparation, and print production coordination, ensuring your packaging design is executed accurately and looks exactly as intended when it rolls off the press.
            </p>
            <div className="service-tags">
              <span className="tag">Dieline Design</span>
              <span className="tag">Pre-Press</span>
              <span className="tag">Print Coordination</span>
              <span className="tag">Mock-Up</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools">
        <div className="section-header">
          <span className="section-tag">Design Stack</span>
          <h2>Tools We <span>Use for Packaging</span></h2>
          <div className="divider"></div>
          <p className="section-sub">
            Industry-standard design and production tools ensuring print-perfect packaging every time.
          </p>
        </div>
        <div className="tech-grid">
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/packaging_design/adobe_illustrator.svg`}
                alt="Adobe Illustrator"
                loading="lazy"
              />
            </span>
            <span>Adobe Illustrator</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/packaging_design/adobe_photoshop.svg`}
                alt="Adobe Photoshop"
                loading="lazy"
              />
            </span>
            <span>Adobe Photoshop</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/packaging_design/adobe_indesign.svg`}
                alt="Adobe InDesign"
                loading="lazy"
              />
            </span>
            <span>Adobe InDesign</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/packaging_design/artioscad.svg`}
                alt="ArtiosCAD"
                loading="lazy"
              />
            </span>
            <span>ArtiosCAD</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/packaging_design/die_cutting_tools.svg`}
                alt="Die Cutting Tools"
                loading="lazy"
              />
            </span>
            <span>Die Cutting Tools</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/packaging_design/pantone.svg`}
                alt="Pantone Colour System"
                loading="lazy"
              />
            </span>
            <span>Pantone Colour System</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/packaging_design/pre_press_software.svg`}
                alt="Pre-Press Software"
                loading="lazy"
              />
            </span>
            <span>Pre-Press Software</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/packaging_design/esko_suite.svg`}
                alt="Esko Suite"
                loading="lazy"
              />
            </span>
            <span>Esko Suite</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/packaging_design/3d_mock_up_tools.svg`}
                alt="3D Mock-Up Tools"
                loading="lazy"
              />
            </span>
            <span>3D Mock-Up Tools</span>
          </div>
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/packaging_design/fssai_compliance.svg`}
                alt="FSSAI Compliance"
                loading="lazy"
              />
            </span>
            <span>FSSAI Compliance</span>
          </div>
        </div>
      </section>

      {/* Portfolio / Our Work Section */}
      <ServiceOurWorkSection
        work={serviceClientSectionsData['packaging-design']?.work}
        subtitle="A selection of product packaging and design systems we've created for market leaders."
      />

      {/* 5-Step Process Section */}
      <section id="process">
        <div className="section-header">
          <span className="section-tag">How We Work</span>
          <h2>Our <span>5-Step Packaging</span> Design Process</h2>
          <div className="divider"></div>
        </div>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-num">
              <img
                src={`${base}assets/images/services_icons/packaging_design/brief_and_research.png`}
                alt="Brief & Research"
                loading="lazy"
              />
            </div>
            <h4>Brief &amp; Research</h4>
            <p>Deep understanding of product, target customer, retail environment, and packaging requirements</p>
          </div>
          <div className="process-step">
            <div className="step-num">
              <img
                src={`${base}assets/images/services_icons/packaging_design/concept_design.png`}
                alt="Concept Design"
                loading="lazy"
              />
            </div>
            <h4>Concept Design</h4>
            <p>2–3 distinct packaging design concepts presented with rationale and lifestyle mock-ups</p>
          </div>
          <div className="process-step">
            <div className="step-num">
              <img
                src={`${base}assets/images/services_icons/packaging_design/concept_design.png`}
                alt="Refinement"
                loading="lazy"
              />
            </div>
            <h4>Refinement</h4>
            <p>Selected concept refined through structured feedback until design is perfect on mock-up</p>
          </div>
          <div className="process-step">
            <div className="step-num">
              <img
                src={`${base}assets/images/services_icons/packaging_design/dieline_and_pre_press.png`}
                alt="Dieline & Pre-Press"
                loading="lazy"
              />
            </div>
            <h4>Dieline &amp; Pre-Press</h4>
            <p>Structural dieline engineering, FSSAI compliance check, and pre-press colour preparation</p>
          </div>
          <div className="process-step">
            <div className="step-num">
              <img
                src={`${base}assets/images/services_icons/packaging_design/packaging_dieline_and_production.png`}
                alt="Print-Ready Delivery"
                loading="lazy"
              />
            </div>
            <h4>Print-Ready Delivery</h4>
            <p>Final files delivered in all formats required by your printer with production specifications</p>
          </div>
        </div>
      </section>

      {/* Why Sociapa Section */}
      <section id="why">
        <div className="section-header">
          <span className="section-tag">Why Sociapa</span>
          <h2>Packaging That Works <span>Across Every Channel</span></h2>
          <div className="divider" style={{ background: 'rgba(255,255,255,0.3)' }}></div>
          <p className="section-sub">
            We understand that packaging is one of the most important touchpoints between your product and your customer, which is why we design packaging solutions that attract attention, communicate value, and drive conversions.
          </p>
        </div>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/packaging_design/channel_specific_expertise.png`}
                alt="Channel-Specific Expertise"
                loading="lazy"
              />
            </div>
            <h3>Channel-Specific Expertise</h3>
            <p>Deep understanding of what works across retail, e-commerce, and quick commerce, with each channel having unique requirements. We design packaging solutions that perform effectively across all channels simultaneously.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/packaging_design/consumer_research_led_design.png`}
                alt="Consumer Research-Led Design"
                loading="lazy"
              />
            </div>
            <h3>Consumer Research-Led Design</h3>
            <p>We analyze shopper behaviour, category conventions, and competitor packaging before designing, ensuring every visual decision is informed by how your target customers actually discover, evaluate, and purchase products.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/packaging_design/compliance_ready_packaging.png`}
                alt="Compliance-Ready Packaging"
                loading="lazy"
              />
            </div>
            <h3>Compliance-Ready Packaging</h3>
            <p>All food, pharma, and wellness packaging includes FSSAI, AYUSH, and BIS compliance checks, ensuring your packaging meets regulatory requirements from day one.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/packaging_design/die_cutting_tools.svg`}
                alt="Print Production Support"
                loading="lazy"
              />
            </div>
            <h3>Print Production Support</h3>
            <p>We don't just design packaging, we also manage the print production process by working directly with your printer to ensure colour accuracy, finishing quality, and timely delivery.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/packaging_design/digital_and_print_optimised.png`}
                alt="Digital & Print Optimised"
                loading="lazy"
              />
            </div>
            <h3>Digital &amp; Print Optimised</h3>
            <p>Every packaging design is evaluated for in-hand appeal, shelf impact, and digital thumbnail performance, ensuring strong visibility and conversion potential across e-commerce and quick commerce platforms.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/packaging_design/compliance_ready_packaging.png`}
                alt="Sustainable Packaging Options"
                loading="lazy"
              />
            </div>
            <h3>Sustainable Packaging Options</h3>
            <p>Expertise in sustainable packaging solutions using eco-friendly materials such as kraft paper, biodegradable films, recyclable cartons, and soy-based inks, helping brands create responsible packaging aligned with sustainable practices.</p>
          </div>
        </div>
      </section>

      {/* Behind the Work Section */}
      <ServiceBehindWorkSection
        testimonials={serviceClientSectionsData['packaging-design']?.testimonials}
      />

      {/* Featured Case Studies Slider */}
      <ServiceCaseStudiesSlider />

      {/* FAQ Section */}
      <section id="faq">
        <div className="section-header">
          <span className="section-tag">FAQ</span>
          <h2>Packaging Design <span>Questions Answered</span></h2>
          <div className="divider"></div>
          <p className="section-sub">
            Everything you need to know before starting your packaging project with Sociapa.
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
        <h2>Ready for Packaging That <span>Commands the Shelf?</span></h2>
        <p>Share your product brief and get a packaging design proposal with timeline and investment within 24 hours.</p>
        <div className="cta-buttons">
          <a href="mailto:mail@sociapa.com" className="btn-white">Get a Packaging Proposal</a>
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
