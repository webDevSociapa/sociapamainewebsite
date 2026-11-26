import React, { useState, useEffect } from 'react';
import OtherServicesSlider from '../components/OtherServicesSlider';
import ServiceOurWorkSection from '../components/ServiceOurWorkSection';
import ServiceBehindWorkSection from '../components/ServiceBehindWorkSection';
import ServiceCaseStudiesSlider from '../components/ServiceCaseStudiesSlider';
import { serviceClientSectionsData } from '../data/serviceClientSectionsData';
import { Helmet } from 'react-helmet-async';
import './CreativeDesigning.css';

const faqsData = [
  {
    q: "1. What is creative designing?",
    a: "<p>Creative designing creates strategic visual experiences that strengthen your brand and connect with your target audience.</p>"
  },
  {
    q: "2. What types of creative design services do you offer?",
    a: "<p>Creative design services include <a href='/brand-identity-design' class='seo-interlink'>logo and brand identity design</a>, <a href='/best-social-media-marketing-agency-india' class='seo-interlink'>social media graphics</a>, print and marketing materials, <a href='/best-packaging-design-agency-india' class='seo-interlink'>packaging design</a>, UI design, and campaign creatives.</p>"
  },
  {
    q: "3. How do you approach logo design?",
    a: "<p>Logo design is backed by brand research, with a focus on creating distinctive, scalable, and enduring marks supported by complete brand guidelines.</p>"
  },
  {
    q: "4. Do you design social media creatives?",
    a: "<p>Yes. We create platform-optimised visual content for Instagram, Facebook, LinkedIn, and other platforms, including static posts, carousels, stories, and reel graphics.</p>"
  },
  {
    q: "5. Do you create print and offline marketing designs?",
    a: "<p>Yes. We design business cards, brochures, standees, hoardings, and branded merchandise to maintain brand consistency across touchpoints.</p>"
  },
  {
    q: "6. Do you offer website and app UI design?",
    a: "<p>Yes. We create user-centred UI designs for <a href='/best-web-development-agency-india' class='seo-interlink'>websites and web apps</a>, including wireframes, high-fidelity prototypes, and design systems.</p>"
  },
  {
    q: "7. Do you create campaign creatives?",
    a: "<p>Yes. Campaign design includes display banners, <a href='/email-marketing-services' class='seo-interlink'>email templates</a>, landing page designs, and <a href='/pay-per-click-ppc-services-india' class='seo-interlink'>PPC ad layouts</a> for multi-channel growth.</p>"
  },
  {
    q: "8. What is included in a brand book?",
    a: "<p>Brand books can cover colour palettes, typography, voice guidelines, iconography, and usage rules to maintain consistency across brand assets.</p>"
  },
  {
    q: "9. How do you ensure designs support business objectives?",
    a: "<p>Every design decision is grounded in <a href='/brand-strategy' class='seo-interlink'>brand strategy</a>, consumer psychology, and commercial goals, ensuring aesthetics actively drive brand equity and conversions.</p>"
  },
  {
    q: "10. How do you manage design projects?",
    a: "<p>Dedicated project managers and a 15+ designer team support rapid delivery while maintaining quality. A structured revision process keeps projects on schedule and on brief.</p>"
  }
];

export default function CreativeDesigning() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);
  const base = import.meta.env.BASE_URL || '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="creative-designing-page">
      <Helmet>
        <title>Creative Designing Agency in India | Sociapa</title>
        <meta
          name="description"
          content="Sociapa is a leading creative design agency in India offering strategic branding, logo design, marketing creatives, social media graphics, and UI/UX design."
        />
        <meta
          name="keywords"
          content="creative designing agency India, logo design, UI UX design, graphic design studio, social media creatives, branding agency"
        />
        <link rel="canonical" href="https://sociapa.com/creative-designing" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SOCIAPA" />
        <meta property="og:title" content="Creative Designing Agency in India | Sociapa" />
        <meta
          property="og:description"
          content="Sociapa is a leading creative design agency in India offering strategic branding, logo design, marketing creatives, social media graphics, and UI/UX design."
        />
        <meta property="og:url" content="https://sociapa.com/creative-designing" />
        <meta property="og:image" content="https://sociapa.com/logoSociapa.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Sociapa - Your Social Buddy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Creative Designing Agency in India | Sociapa" />
        <meta name="twitter:description" content="Sociapa is a leading creative design agency in India offering strategic branding, logo design, marketing creatives, social media graphics, and UI/UX design." />
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
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sociapa.com/" }, { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://sociapa.com/our-services" }, { "@type": "ListItem", "position": 3, "name": "Creative Designing Agency India | Sociapa", "item": "https://sociapa.com/creative-designing" }] })}</script>
      </Helmet>

      {/* Hero Banner Section */}
      <section className="hero-banner-section">
        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
          Creative Designing Agency India - Sociapa
        </h1>
        <picture>
          <source type="image/webp" srcSet={`${base}assets/images/services_banner/creative_designing/creative_designing1.webp`} />
          <img
            src={`${base}assets/images/services_banner/creative_designing/creative_designing1.webp`}
            alt="Creative Designing Agency India - Sociapa"
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
          <div>
            <span className="stat-num">1,200+</span>
            <div className="stat-lbl">Design Assets Delivered</div>
          </div>
          <div>
            <span className="stat-num">150+</span>
            <div className="stat-lbl">Brands Designed For</div>
          </div>
          <div>
            <span className="stat-num">15+</span>
            <div className="stat-lbl">Senior Designers</div>
          </div>
          <div>
            <span className="stat-num">8+</span>
            <div className="stat-lbl">Years of Creative Excellence</div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-inner">
          <span className="section-tag">What We Design</span>
          <h2 className="section-title">End-to-End Creative Design Services</h2>
          <p className="section-sub">
            Every pixel has a purpose. We create strategic visual experiences that strengthen your brand and connect with your target audience.
          </p>
          <div className="services-grid">
            <div className="svc-card">
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/creative_designing/logo_and_brand_identity.svg`}
                  alt="Logo & Brand Identity"
                />
              </div>
              <h3>Logo &amp; Brand Identity</h3>
              <p>
                Strategic logo design backed by brand research, creating distinctive, scalable, and enduring marks with complete brand guidelines.
              </p>
              <div className="service-tags">
                <span>Logo Design</span>
                <span>Brand Mark</span>
                <span>Style Guide</span>
                <span>Typography</span>
              </div>
            </div>

            <div className="svc-card">
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/creative_designing/social_media_creatives.svg`}
                  alt="Social Media Creatives"
                />
              </div>
              <h3>Social Media Creatives</h3>
              <p>
                Platform-optimised visual content for Instagram, Facebook, LinkedIn, and more, including scroll-stopping posts, carousels, stories, and reel graphics.
              </p>
              <div className="service-tags">
                <span>Static Posts</span>
                <span>Carousels</span>
                <span>Story Templates</span>
                <span>Banners</span>
              </div>
            </div>

            <div className="svc-card">
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/creative_designing/brand_merchandise_and_collatera.svg`}
                  alt="Brand Merchandise & Collateral"
                />
              </div>
              <h3>Brand Merchandise &amp; Collateral</h3>
              <p>
                Business cards, brochures, standees, hoardings, and branded merchandise that maintain your brand identity across every touchpoint.
              </p>
              <div className="service-tags">
                <span>Print Design</span>
                <span>Brochures</span>
                <span>Merchandise</span>
                <span>Hoarding</span>
              </div>
            </div>

            <div className="svc-card">
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/creative_designing/uiux_designing.svg`}
                  alt="UI/UX Designing"
                />
              </div>
              <h3>UI/UX Designing</h3>
              <p>
                User-centred UI design for websites and apps, including wireframes, high-fidelity prototypes, and design systems that look great and drive conversions.
              </p>
              <div className="service-tags">
                <span>Wireframes</span>
                <span>Prototypes</span>
                <span>Design Systems</span>
                <span>App UI</span>
              </div>
            </div>

            <div className="svc-card">
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/creative_designing/marketing_creatives.svg`}
                  alt="Marketing Creatives"
                />
              </div>
              <h3>Marketing Creatives</h3>
              <p>
                Campaign creatives for digital and offline channels, including display banners, email templates, landing pages, and print ad layouts built to perform.
              </p>
              <div className="service-tags">
                <span>Display Ads</span>
                <span>Email Templates</span>
                <span>Landing Pages</span>
                <span>Print Ads</span>
              </div>
            </div>

            <div className="svc-card">
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/creative_designing/brand_identity_systems.svg`}
                  alt="Brand Identity Systems"
                />
              </div>
              <h3>Brand Identity Systems</h3>
              <p>
                Comprehensive brand books covering colour palettes, typography, voice, iconography, and usage guidelines for consistent brand expression at every scale.
              </p>
              <div className="service-tags">
                <span>Brand Book</span>
                <span>Colour System</span>
                <span>Icon Sets</span>
                <span>Pattern Library</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="tools-section">
        <div className="section-inner">
          <span className="section-tag">Our Design Stack</span>
          <h2 className="section-title">Industry-Standard Tools, Expert Hands</h2>
          <p className="section-sub">
            We work in the tools your team already uses, enabling seamless collaboration from brief to final delivery.
          </p>
          <div className="tools-grid">
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/creative_designing/illustrator.svg`}
                  alt="Adobe Illustrator"
                />
              </span>
              Adobe Illustrator
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/creative_designing/photoshop.svg`}
                  alt="Adobe Photoshop"
                />
              </span>
              Adobe Photoshop
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/creative_designing/figma.svg`}
                  alt="Figma"
                />
              </span>
              Figma
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/creative_designing/adobe_xd.svg`}
                  alt="Adobe XD"
                />
              </span>
              Adobe XD
            </div>
            <div className="tool-chip">-
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/creative_designing/after_effects.svg`}
                  alt="After Effects"
                />
              </span>
              After Effects
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/creative_designing/adobe_indesign.svg`}
                  alt="Adobe InDesign"
                />
              </span>
              Adobe InDesign
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/creative_designing/coreldraw.svg`}
                  alt="CorelDRAW"
                />
              </span>
              CorelDRAW
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/creative_designing/adobe_lightroom.svg`}
                  alt="Adobe Lightroom"
                />
              </span>
              Adobe Lightroom
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/creative_designing/typeface_fontlab.svg`}
                  alt="Typeface / FontLab"
                />
              </span>
              Typeface / FontLab
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/creative_designing/canva_pro.svg`}
                  alt="Canva Pro"
                />
              </span>
              Canva Pro
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      {/* Portfolio / Our Work Section */}
      <ServiceOurWorkSection
        work={serviceClientSectionsData['creative-designing']?.work}
      />

      {/* Process Section */}
      <section className="process-section">
        <div className="section-inner">
          <span className="section-tag">Our Process</span>
          <h2 className="section-title">How We Bring Your Vision To Life</h2>
          <p className="section-sub">
            A structured, strategy-led process with clear steps, defined deliverables, and documented decisions.
          </p>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/creative_designing/discovery_brief.svg`}
                  alt="Discovery Brief"
                />
              </div>
              <h4>Discovery Brief</h4>
              <p>Brand questionnaire, competitor audit, and audience profiling to establish a clear creative direction.</p>
            </div>

            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/creative_designing/mood_boarding.svg`}
                  alt="Mood Boarding"
                />
              </div>
              <h4>Mood Boarding</h4>
              <p>Visual direction decks, style exploration, and curated references to define the creative direction.</p>
            </div>

            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/creative_designing/concept_design.svg`}
                  alt="Concept Design"
                />
              </div>
              <h4>Concept Design</h4>
              <p>2–3 unique creative concepts developed for client review and feedback.</p>
            </div>

            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/creative_designing/refinement.svg`}
                  alt="Refinement"
                />
              </div>
              <h4>Refinement</h4>
              <p>Iterative revisions based on structured client feedback rounds.</p>
            </div>

            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/creative_designing/final_artwork.svg`}
                  alt="Final Artwork"
                />
              </div>
              <h4>Final Artwork</h4>
              <p>Print-ready and digital files delivered in all required formats and sizes.</p>
            </div>

            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/creative_designing/brand_handoff.svg`}
                  alt="Brand Handoff"
                />
              </div>
              <h4>Brand Handoff</h4>
              <p>Source files, brand guidelines, and complete asset library delivered.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="why-section">
        <div className="section-inner">
          <span className="section-tag" style={{ background: 'rgba(255,255,255,.15)', color: '#fff' }}>
            Why Sociapa Design
          </span>
          <h2 className="section-title">Strategy Meets Aesthetics</h2>
          <p className="section-sub">We create visuals that look good and work harder for your business.</p>
          <div className="why-grid">
            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/creative_designing/strategy_first_design.svg`}
                  alt="Strategy-First Design"
                />
              </div>
              <h4>Strategy-First Design</h4>
              <p>Every design decision is grounded in brand strategy, audience psychology, and business objectives, not just aesthetics.</p>
            </div>

            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/creative_designing/fast_turnaround.svg`}
                  alt="Fast Turnaround"
                />
              </div>
              <h4>Fast Turnaround</h4>
              <p>Dedicated project managers and a 15+ designer team enable fast delivery without compromising quality.</p>
            </div>

            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/creative_designing/unlimited_revisions.svg`}
                  alt="Unlimited Revisions"
                />
              </div>
              <h4>Unlimited Revisions</h4>
              <p>We iterate until you're delighted, with a structured revision process that keeps projects on schedule and on brief.</p>
            </div>

            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/creative_designing/award_winning_team.svg`}
                  alt="Award-Winning Team"
                />
              </div>
              <h4>Award-Winning Team</h4>
              <p>Experienced designers from leading Delhi NCR agencies, bringing big-agency creative expertise to every brief.</p>
            </div>

            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/creative_designing/multi_format_delivery.svg`}
                  alt="Multi-Format Delivery"
                />
              </div>
              <h4>Multi-Format Delivery</h4>
              <p>Source files, web-optimised exports, print-ready PDFs, and social formats, all organised and clearly labelled.</p>
            </div>

            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/creative_designing/brand_consistency_guarantee.svg`}
                  alt="Brand Consistency Guarantee"
                />
              </div>
              <h4>Brand Consistency Guarantee</h4>
              <p>Brand guidelines and a curated asset library keep every future asset consistent and on-brand, regardless of who creates it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* Behind the Work Section */}
      <ServiceBehindWorkSection
        testimonials={serviceClientSectionsData['creative-designing']?.testimonials}
      />

      {/* Featured Case Studies Slider */}
      <ServiceCaseStudiesSlider />

      {/* FAQ Section */}
      <section className="faq-section" id="faq">
        <div className="section-inner">
          <span className="section-tag">FAQ</span>
          <h2 className="section-title">
            Creative Design <span style={{ color: 'var(--red)' }}>Questions Answered</span>
          </h2>
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
        </div>
      </section>

      {/* Our Other Services Carousel */}
      <OtherServicesSlider />

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-inner" style={{ maxWidth: '700px' }}>
          <h2>Ready to Elevate Your Brand Visuals?</h2>
          <p>Share your brief and get a free creative consultation from our design team within 24 hours.</p>
          <a href="mailto:mail@sociapa.com" className="btn-primary">Get a Free Design Consultation</a>
        </div>
      </section>
    </div>
  );
}
