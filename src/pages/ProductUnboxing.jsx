import React, { useState, useEffect } from 'react';
import ServiceCaseStudiesSlider from '../components/ServiceCaseStudiesSlider';
import { Helmet } from 'react-helmet-async';
import './ProductUnboxing.css';

const faqsData = [
  {
    q: "1. What is an unboxing experience design?",
    a: "<p>Unboxing experience design focuses on creating a memorable journey from the moment a customer receives a package to the final reveal. It includes the outer <a href='/best-packaging-design-agency-india' class='seo-interlink'>packaging design</a>, inserts, wrapping, messaging, and every touchpoint that shapes customer delight.</p>"
  },
  {
    q: "2. What elements do you design as part of an unboxing experience?",
    a: "<p>We design every layer of the unboxing journey, including outer boxes, packaging inserts, tissue wrapping, thank-you cards, loyalty cards, referral cards, QR codes, personalised messages, and other branded touchpoints.</p>"
  },
  {
    q: "3. Can you create premium unboxing experiences for D2C brands?",
    a: "<p>Yes. We create customised unboxing experiences for D2C brands, aligning structural packaging with your <a href='/brand-identity-design' class='seo-interlink'>brand identity design</a> and <a href='/go-to-market' class='seo-interlink'>Go-To-Market launch strategy</a> to maximize customer retention.</p>"
  },
  {
    q: "4. Do you help select packaging materials and structures?",
    a: "<p>Yes. We strategically select packaging materials such as corrugated boxes, rigid boxes, mailer boxes, kraft packaging, and magnetic closure boxes, along with structural designs that balance protection, sustainability, cost, and customer experience.</p>"
  },
  {
    q: "5. How do you make packaging share-worthy on social media?",
    a: "<p>We design unboxing experiences with social sharing in mind by creating surprise reveals, layered sequences, and visual moments that encourage consumers and <a href='/influencer-marketing-services' class='seo-interlink'>influencers</a> to create organic <a href='/videos' class='seo-interlink'>unboxing videos</a> on Instagram and YouTube.</p>"
  },
  {
    q: "6. Do you provide sustainable packaging solutions?",
    a: "<p>Yes. We help brands create eco-friendly unboxing experiences using sustainable materials such as FSC-certified kraft boxes, soy-based ink printing, recycled tissue, recyclable materials, and reduced plastic usage without compromising premium appeal.</p>"
  },
  {
    q: "7. Do you create and test physical packaging prototypes?",
    a: "<p>Yes. We produce physical prototypes and test them for visual impact, durability, product protection, and shipping resilience before moving into final production.</p>"
  },
  {
    q: "8. Do you provide production-ready packaging files?",
    a: "<p>Yes. We deliver print-ready packaging files, production specifications, and quality guidelines to your packaging manufacturer, ensuring accurate execution and consistent quality during final production.</p>"
  }
];

export default function ProductUnboxing() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);
  const base = import.meta.env.BASE_URL || '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product-unboxing-page">
      <Helmet>
        <title>Product Unboxing Experience Services India | D2C Packaging Design | Sociapa</title>
        <meta
          name="description"
          content="Create viral, share-worthy product unboxing experiences with Sociapa Brand Studio. We design premium packaging, custom mailers, rigid boxes, inserts, and unboxing moments for D2C & FMCG brands."
        />
        <meta
          name="keywords"
          content="product unboxing experience India, unboxing packaging design, custom mailer box design, D2C unboxing agency, rigid box packaging"
        />
        <link rel="canonical" href="https://sociapa.com/product-unboxing-experience" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sociapa Brand Studio" />
        <meta property="og:title" content="Product Unboxing Experience Services India | Sociapa Brand Studio" />
        <meta
          property="og:description"
          content="Create viral, share-worthy product unboxing experiences with Sociapa Brand Studio. We design premium packaging, custom mailers, rigid boxes, inserts, and unboxing moments for D2C & FMCG brands."
        />
        <meta property="og:url" content="https://sociapa.com/product-unboxing-experience" />
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
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://sociapa.com/"},{"@type":"ListItem","position":2,"name":"Services","item":"https://sociapa.com/our-services"},{"@type":"ListItem","position":3,"name":"Product Unboxing Experience Design | Sociapa","item":"https://sociapa.com/product-unboxing-experience"}]})}</script>
      </Helmet>

      {/* Hero Banner Section */}
      <section className="hero-banner-section">
        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
          Product Unboxing Experience Services India - Sociapa Brand Studio
        </h1>
        <picture>
          <source type="image/webp" srcSet={`${base}assets/images/services_banner/unboxing_experience/unboxing1.webp`} />
          <img
            src={`${base}assets/images/services_banner/unboxing_experience/unboxing1.webp`}
            alt="Product Unboxing Experience Services - Sociapa Brand Studio"
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
            <div className="stat-num">100+</div>
            <div className="stat-label">Unboxing Experiences Designed</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">8+</div>
            <div className="stat-label">Years of Expertise</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">50M+</div>
            <div className="stat-label">Unboxing Views Generated</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">4.8★</div>
            <div className="stat-label">Average Client Rating</div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services">
        <div className="section-header">
          <span className="section-tag">What We Design</span>
          <h2>
            Unboxing Experiences That <span>Create Brand Advocates</span>
          </h2>
          <div className="divider"></div>
          <p className="section-sub" style={{ marginTop: '20px' }}>
            Every layer of your packaging is an opportunity to delight, surprise, and make your customer reach for their phone to share the moment.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/unboxing_experience/material_and_shape_identification.png`}
                alt="Material & Shape Identification"
              />
            </div>
            <h3>Material &amp; Shape Identification</h3>
            <p>
              Strategic selection of packaging materials, including corrugated boxes, rigid boxes, custom mailer boxes, kraft packaging, and magnetic closure boxes, with structural designs that balance product protection, sustainability, and an exceptional first unboxing experience.
            </p>
            <div className="service-tags">
              <span className="tag">Material Strategy</span>
              <span className="tag">Structural Design</span>
              <span className="tag">Rigid Boxes</span>
              <span className="tag">Mailer Design</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/unboxing_experience/outer_box_and_mailer_design.png`}
                alt="Outer Box & Mailer Design"
              />
            </div>
            <h3>Outer Box &amp; Mailer Design</h3>
            <p>
              Custom-designed outer packaging that builds anticipation before the box is opened, featuring premium printing, tactile finishes, personalized messaging, and brand-consistent visuals on every surface to create a memorable first impression and elevate the unboxing experience.
            </p>
            <div className="service-tags">
              <span className="tag">Custom Mailer</span>
              <span className="tag">Rigid Box</span>
              <span className="tag">Premium Finishes</span>
              <span className="tag">Spot UV</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/unboxing_experience/virality_in_packaging_design.png`}
                alt="Virality in Packaging Design"
              />
            </div>
            <h3>Virality in Packaging Design</h3>
            <p>
              Thoughtfully designed share-worthy unboxing experiences featuring surprise reveals, layered packaging, message cards, hidden details, and memorable visual elements that encourage customers to create and share content across Instagram, YouTube, and other social media platforms.
            </p>
            <div className="service-tags">
              <span className="tag">Viral Design</span>
              <span className="tag">Social Sharing</span>
              <span className="tag">Instagram-Worthy</span>
              <span className="tag">Surprise Elements</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/unboxing_experience/inner_packaging_and_inserts.png`}
                alt="Inner Packaging & Inserts"
              />
            </div>
            <h3>Inner Packaging &amp; Inserts</h3>
            <p>
              Premium packaging inserts, including custom tissue paper, shredded paper fill, foam inserts, and product cradles, designed to protect your product while creating a memorable unboxing experience. Every detail is crafted to enhance perceived value, reinforce your brand positioning, and leave a lasting first impression.
            </p>
            <div className="service-tags">
              <span className="tag">Tissue Paper</span>
              <span className="tag">Product Inserts</span>
              <span className="tag">Protective Fill</span>
              <span className="tag">Foam Cradles</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/unboxing_experience/thank_you_cards_and_personalisation.png`}
                alt="Thank-You Cards & Personalisation"
              />
            </div>
            <h3>Thank-You Cards &amp; Personalisation</h3>
            <p>
              Custom-designed thank-you cards, handwritten note templates, QR codes linking to exclusive content, loyalty rewards, and referral cards that strengthen customer relationships, encourage repeat purchases, and generate word-of-mouth marketing through a memorable post-purchase experience.
            </p>
            <div className="service-tags">
              <span className="tag">Thank-You Cards</span>
              <span className="tag">Personalisation</span>
              <span className="tag">Referral Cards</span>
              <span className="tag">QR Code Integration</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src={`${base}assets/images/services_icons/unboxing_experience/sustainable_unboxing_design.png`}
                alt="Sustainable Unboxing Design"
              />
            </div>
            <h3>Sustainable Unboxing Design</h3>
            <p>
              Eco-conscious unboxing experiences designed with FSC-certified kraft boxes, soy-based ink printing, recycled tissue paper, and minimal plastic, creating premium packaging that reflects your brand's sustainability commitments without compromising on quality or customer experience.
            </p>
            <div className="service-tags">
              <span className="tag">Eco Packaging</span>
              <span className="tag">Kraft Boxes</span>
              <span className="tag">Recyclable</span>
              <span className="tag">FSC Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tools / Design Elements Section */}
      <section id="tools">
        <div className="section-header">
          <span className="section-tag">Design Elements</span>
          <h2>
            Elements That Make <span>Unboxing Magical</span>
          </h2>
          <div className="divider"></div>
          <p className="section-sub" style={{ marginTop: '20px' }}>
            Every element is carefully chosen to create a multi-sensory brand experience from the moment your customer receives their order.
          </p>
        </div>

        <div className="tech-grid">
          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/unboxing_experience/rigid_box.png`}
                alt="Rigid Box"
              />
            </span>
            <span>Rigid Box</span>
          </div>

          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/unboxing_experience/custom_mailer.png`}
                alt="Custom Mailer"
              />
            </span>
            <span>Custom Mailer</span>
          </div>

          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/unboxing_experience/tissue_paper.png`}
                alt="Tissue Paper"
              />
            </span>
            <span>Tissue Paper</span>
          </div>

          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/unboxing_experience/thank_you_cards_and_personalisation.png`}
                alt="Thank-You Card"
              />
            </span>
            <span>Thank-You Card</span>
          </div>

          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/unboxing_experience/branded_sticker.png`}
                alt="Branded Sticker"
              />
            </span>
            <span>Branded Sticker</span>
          </div>

          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/unboxing_experience/shredded_fill.png`}
                alt="Shredded Fill"
              />
            </span>
            <span>Shredded Fill</span>
          </div>

          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/unboxing_experience/spot_uv_print.png`}
                alt="Spot UV Print"
              />
            </span>
            <span>Spot UV Print</span>
          </div>

          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/unboxing_experience/kraft_paper.png`}
                alt="Kraft Paper"
              />
            </span>
            <span>Kraft Paper</span>
          </div>

          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/unboxing_experience/qr_code_cards.png`}
                alt="QR Code Cards"
              />
            </span>
            <span>QR Code Cards</span>
          </div>

          <div className="tech-chip">
            <span className="tech-icon">
              <img
                src={`${base}assets/images/services_icons/unboxing_experience/hang_tags.png`}
                alt="Hang Tags"
              />
            </span>
            <span>Hang Tags</span>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process">
        <div className="section-header">
          <span className="section-tag">How We Work</span>
          <h2>
            Our <span>5-Step Unboxing</span> Design Process
          </h2>
          <div className="divider"></div>
        </div>

        <div className="process-steps">
          <div className="process-step">
            <div className="step-num">
              <img
                src={`${base}assets/images/services_icons/unboxing_experience/strategy_session.png`}
                alt="Strategy Session"
              />
            </div>
            <h4>Strategy Session</h4>
            <p>
              Define the unboxing experience by mapping your customer's journey, emotional touchpoints, and share-worthy moments, creating a memorable brand interaction that inspires engagement, strengthens customer loyalty, and encourages social sharing.
            </p>
          </div>

          <div className="process-step">
            <div className="step-num">
              <img
                src={`${base}assets/images/services_icons/unboxing_experience/material_research.png`}
                alt="Material Research"
              />
            </div>
            <h4>Material Research</h4>
            <p>
              Strategic selection of packaging materials, structural packaging options, premium printing finishes, and cost-per-unit analysis, ensuring every packaging solution aligns with your brand goals, production requirements, and budget.
            </p>
          </div>

          <div className="process-step">
            <div className="step-num">
              <img
                src={`${base}assets/images/services_icons/unboxing_experience/experience_design.png`}
                alt="Experience Design"
              />
            </div>
            <h4>Experience Design</h4>
            <p>
              Layer-by-layer design of every unboxing element, including custom outer boxes, packaging inserts, tissue wrapping, thank-you cards, and branded touchpoints, creating a seamless unboxing experience that strengthens brand identity and delights customers.
            </p>
          </div>

          <div className="process-step">
            <div className="step-num">
              <img
                src={`${base}assets/images/services_icons/unboxing_experience/prototype_and_testing.png`}
                alt="Prototype & Testing"
              />
            </div>
            <h4>Prototype &amp; Testing</h4>
            <p>
              A physical packaging prototype is produced and tested for visual impact, durability, fit, and shipping resilience before final production, ensuring your unboxing experience performs flawlessly from warehouse to customer doorstep.
            </p>
          </div>

          <div className="process-step">
            <div className="step-num">
              <img
                src={`${base}assets/images/services_icons/unboxing_experience/production_launch.png`}
                alt="Production Launch"
              />
            </div>
            <h4>Production Launch</h4>
            <p>
              Print-ready packaging files and detailed production specifications are handed over to your packaging manufacturer along with quality guidelines, ensuring accurate execution, consistent print quality, and a seamless transition from design to final production.
            </p>
          </div>
        </div>
      </section>

      {/* Why Sociapa Section */}
      <section id="why">
        <div className="section-header">
          <span className="section-tag">Why Sociapa</span>
          <h2>
            We Design Experiences, <span>Not Just Boxes</span>
          </h2>
          <div className="divider" style={{ background: 'rgba(255,255,255,0.3)' }}></div>
          <p className="section-sub" style={{ marginTop: '20px' }}>
            The unboxing moment is a powerful 10-second brand story, and we design every detail with intention to create a memorable customer experience, strengthen brand connection, and turn packaging into a meaningful brand touchpoint.
          </p>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/unboxing_experience/viral_first_design_thinking.png`}
                alt="Viral-First Design Thinking"
              />
            </div>
            <h3>Viral-First Design Thinking</h3>
            <p>
              We design unboxing experiences with social sharing in mind, crafting every layer, reveal, and packaging element to inspire customers to film, photograph, and share their experience across social media platforms.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/unboxing_experience/full_journey_design.png`}
                alt="Full-Journey Design"
              />
            </div>
            <h3>Full-Journey Design</h3>
            <p>
              From the moment the courier arrives to the final insert they discover, we design every customer touchpoint to create a seamless brand experience, strengthen emotional connection, and make every interaction with your brand memorable.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/unboxing_experience/budget_conscious_solutions.png`}
                alt="Budget-Conscious Solutions"
              />
            </div>
            <h3>Budget-Conscious Solutions</h3>
            <p>
              Premium unboxing experiences don't have to be expensive. We design impactful packaging solutions across every budget range, from lean startup launches to premium luxury brands, ensuring every customer interaction feels thoughtful, memorable, and on-brand.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/unboxing_experience/repeat_purchase_triggers.png`}
                alt="Repeat Purchase Triggers"
              />
            </div>
            <h3>Repeat Purchase Triggers</h3>
            <p>
              Strategic packaging inserts, loyalty QR codes, referral cards, and personalized messages integrated into the unboxing experience to encourage repeat purchases, strengthen customer relationships, and drive word-of-mouth referrals.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/unboxing_experience/sustainability_expertise.png`}
                alt="Sustainability Expertise"
              />
            </div>
            <h3>Sustainability Expertise</h3>
            <p>
              Eco-friendly packaging expertise that helps D2C brands create luxurious unboxing experiences using sustainable materials that are recyclable, FSC-certified, and aligned with modern sustainability standards.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <img
                src={`${base}assets/images/services_icons/unboxing_experience/d2c_brand_specialists.png`}
                alt="D2C Brand Specialists"
              />
            </div>
            <h3>D2C Brand Specialists</h3>
            <p>
              Deep understanding of the D2C customer journey and the critical role of packaging in building customer retention, encouraging word-of-mouth marketing, and increasing lifetime customer value through memorable brand experiences.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* Featured Case Studies Slider */}
      <ServiceCaseStudiesSlider />

      <section id="faq">
        <div className="section-header">
          <span className="section-tag">FAQ</span>
          <h2>
            Unboxing Experience <span>Questions Answered</span>
          </h2>
          <div className="divider"></div>
          <p className="section-sub" style={{ marginTop: '20px' }}>
            Everything you want to know about creating a viral, brand-building unboxing experience.
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
        <h2>
          Ready to Create an Unboxing Experience <span>Customers Can't Stop Sharing?</span>
        </h2>
        <p>
          Tell us about your product and target customer — we'll design an unboxing experience that turns deliveries into brand moments.
        </p>
        <div className="cta-buttons">
          <a href="mailto:mail@sociapa.com" className="btn-white">Get an Unboxing Proposal</a>
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
