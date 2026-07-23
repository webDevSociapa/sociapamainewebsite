import React, { useState, useEffect } from 'react';
import './BrandIdentityDesign.css';

const faqsData = [
  {
    "q": "What does your brand identity design service include?",
    "a": "<p>Our service includes mood boards, logo design, colour palette, typography, visual identity systems, brand guidelines, mascot design, and brand assets.</p>"
  },
  {
    "q": "Do you design custom logos?",
    "a": "<p>Yes. We create original logo designs with primary, secondary, and icon variations for use across digital and print.</p>"
  },
  {
    "q": "What is included in a brand guidelines document?",
    "a": "<p>Our brand guidelines cover logo usage, colours, typography, imagery, visual elements, and brand application standards to ensure consistent branding across every touchpoint.</p>"
  },
  {
    "q": "Do you create complete visual identity systems?",
    "a": "<p>Yes. We design complete visual identity systems, including icons, patterns, illustrations, photography styles, branded assets, and other visual elements that create a cohesive brand experience.</p>"
  },
  {
    "q": "Can you redesign an existing brand identity?",
    "a": "<p>Yes. We help businesses refresh their logo, colour palette, typography, and overall visual identity while maintaining brand consistency and recognition.</p>"
  },
  {
    "q": "Will my brand identity work across all platforms?",
    "a": "<p>Absolutely. Every brand identity is designed to work seamlessly across websites, social media, packaging, retail, advertising, digital campaigns, and printed marketing materials.</p>"
  },
  {
    "q": "Do you provide all design source files?",
    "a": "<p>Yes. Upon project completion, you'll receive AI, EPS, SVG, PNG, PDF files, colour codes, and a complete brand guidelines document for future use.</p>"
  },
  {
    "q": "How long does a brand identity project take?",
    "a": "<p>Initial design concepts are typically delivered within 7 business days, followed by structured feedback sessions and refinement rounds to finalize your brand identity.</p>"
  },
  {
    "q": "Will I own the copyright to my logo and brand identity?",
    "a": "<p>Yes. All designs are 100% original, and full intellectual property ownership is transferred to you after the project is completed and approved.</p>"
  },
  {
    "q": "Why choose Sociapa for brand identity design?",
    "a": "<p>We combine strategic brand thinking with creative design to build distinctive visual identities that improve brand recognition, maintain consistency, and create long-term business value.</p>"
  }
];

export default function BrandIdentityDesign() {
    const [openFaq, setOpenFaq] = useState(null);
    const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
      <>
        <section className="brandidentitydesign-hero">
          <div className="brandidentitydesign-hero-blob hero-blob-1"></div>
          <div className="brandidentitydesign-hero-blob hero-blob-2"></div>
          <div className="brandidentitydesign-hero-content">
            <div className="brandidentitydesign-hero-badge"><span className="brandidentitydesign-hero-badge-dot"></span>Logo Design · Visual Identity · Brand Guidelines · Mascot</div>
            <h1>Brand Identity Design That <span>Makes You Unforgettable</span></h1>
            <p>Sociapa creates impactful brand identities, from logo design and visual systems to complete brand guidelines, helping your business build recognition, credibility, and lasting brand value.</p>
            <div className="brandidentitydesign-hero-buttons">
              <a href="#services" className="btn-white">Explore Our Services</a>
              <a href="mailto:mail@sociapa.com" className="btn-outline-white">Start Your Identity Project</a>
            </div>
          </div>
        </section>

        <div className="stats-bar">
          <div className="stat-item"><div className="stat-num">160+</div><div className="stat-label">Brand Identities Created</div></div>
          <div className="stat-item"><div className="stat-num">8+</div><div className="stat-label">Years of Design Excellence</div></div>
          <div className="stat-item"><div className="stat-num">50+</div><div className="stat-label">Industries Served</div></div>
          <div className="stat-item"><div className="stat-num">98%</div><div className="stat-label">Client Satisfaction</div></div>
        </div>

        <section id="services" className="pub-section-light">
          <div className="section-header">
            <span className="section-tag">What We Design</span>
            <h2>Complete <span>Brand Identity Design</span> Services</h2>
            <div className="divider"></div>
            <p className="section-sub seo-sub-top">From mood boards to brand guidelines, we create strategic visual identities that are memorable, scalable, and built for long-term brand success.</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>Mood Board Design</h3>
              <p>Bring your brand vision to life with strategic mood boards that define colours, typography, imagery, and visual direction before the design process begins. </p>
              <div className="service-tags"><span className="tag">Visual Direction</span><span className="tag">Creative Brief</span><span className="tag">Aesthetic Mapping</span><span className="tag">Style Board</span></div>
            </div>
            <div className="service-card">
              <div className="service-icon">🌈</div>
              <h3>Colour Palette & Typography</h3>
              <p>Develop a strategic colour palette and typography system that ensures a consistent, professional brand identity across print, digital, and social media. </p>
              <div className="service-tags"><span className="tag">Brand Colours</span><span className="tag">Font Selection</span><span className="tag">Type Hierarchy</span><span className="tag">Color Psychology</span></div>
            </div>
            <div className="service-card">
              <div className="service-icon">✨</div>
              <h3>Logo Design</h3>
              <p>Create a distinctive logo with primary, secondary, and icon variations, designed for consistent branding across digital, print, packaging, and marketing materials. </p>
              <div className="service-tags"><span className="tag">Logo Design</span><span className="tag">Wordmark</span><span className="tag">Monogram</span><span className="tag">Icon Design</span></div>
            </div>
            <div className="service-card">
              <div className="service-icon">📋</div>
              <h3>Brand Guidelines</h3>
              <p>Create a comprehensive brand guidelines document covering logo usage, colour palettes, typography, imagery, and visual standards to ensure brand consistency across every touchpoint. </p>
              <div className="service-tags"><span className="tag">Brand Book</span><span className="tag">Style Guide</span><span className="tag">Logo Usage Rules</span><span className="tag">Design Tokens</span></div>
            </div>
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Mascot Design</h3>
              <p>Custom brand mascots designed to reflect your brand personality, strengthen customer connections, and enhance recognition across digital, packaging, and marketing materials. </p>
              <div className="service-tags"><span className="tag">Character Design</span><span className="tag">Brand Mascot</span><span className="tag">Illustration</span><span className="tag">Brand Character</span></div>
            </div>
            <div className="service-card">
              <div className="service-icon">🚀</div>
              <h3>Visual Identity System</h3>
              <p>A complete visual identity system including patterns, icons, illustrations, photography guidelines, and branded assets for packaging, stationery, social media, and digital platforms. </p>
              <div className="service-tags"><span className="tag">Identity System</span><span className="tag">Brand Patterns</span><span className="tag">Brand Templates</span><span className="tag">Stationery Design</span></div>
            </div>
          </div>
        </section>

        <section id="tools">
          <div className="section-header">
            <span className="section-tag">Design Tools</span>
            <h2>Tools Our <span>Designers Master</span></h2>
            <div className="divider"></div>
            <p className="section-sub seo-sub-top">Industry-leading design tools for pixel-perfect identity systems across print and digital.</p>
          </div>
          <div className="tech-grid">
            <div className="tech-chip"><span>Adobe Illustrator</span></div>
            <div className="tech-chip"><span>Adobe Photoshop</span></div>
            <div className="tech-chip"><span>Adobe InDesign</span></div>
            <div className="tech-chip"><span>Figma</span></div>
            <div className="tech-chip"><span>Affinity Designer</span></div>
            <div className="tech-chip"><span>Procreate</span></div>
            <div className="tech-chip"><span>Coolors / Pantone</span></div>
            <div className="tech-chip"><span>Adobe Fonts</span></div>
            <div className="tech-chip"><span>Brand Folder</span></div>
            <div className="tech-chip"><span>Notion (Brand Docs)</span></div>
          </div>
        </section>

        <section id="portfolio" className="pub-section-light">
          <div className="section-header">
            <span className="section-tag">Our Work</span>
            <h2>Identities We've <span>Built to Last</span></h2>
            <div className="divider"></div>
            <p className="section-sub seo-sub-top">Visual identity projects across beauty, wellness, food, fashion, and lifestyle categories.</p>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-preview">
                <img src="images/vanesa.png" alt="Vanesa Cosmetics Brand Identity" />
                <span className="project-badge">Beauty · Identity</span>
                <div className="project-overlay">
                  <a href="https://www.vanesacosmetics.com/">➔ View Project</a>
                </div>
              </div>
              <div className="project-info">
                <h3>Vanesa Cosmetics</h3>
                <p>Complete brand identity redesign with a new logo system, refreshed colour palette, typography, and comprehensive brand guidelines for 500+ retail touchpoints.</p>
                <div className="project-meta">
                  <span className="tag">Logo</span>
                  <span className="tag">Guidelines</span>
                  <span className="tag">Beauty</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-preview">
                <img src="images/Nature-pearls.png" alt="Nature Pearls Organic Branding" />
                <span className="project-badge">Wellness · Identity</span>
                <div className="project-overlay">
                  <a href="https://www.naturepearlsorganic.com/">➔ View Project</a>
                </div>
              </div>
              <div className="project-info">
                <h3>Nature Pearls Organic</h3>
                <p>Developed a premium visual identity featuring a custom logo, natural colour palette, brand mood board, and a complete digital identity system. </p>
                <div className="project-meta">
                  <span className="tag">Logo</span>
                  <span className="tag">Mood Board</span>
                  <span className="tag">Wellness</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-preview">
                <img src="images/DF-logo-blue.png" alt="Dhavani Brand Identity" />
                <span className="project-badge">Lifestyle · Identity</span>
                <div className="project-overlay">
                  <a href="https://dhavani.life/">➔ View Project</a>
                </div>
              </div>
              <div className="project-info">
                <h3>Dhavani</h3>
                <p>Designed a minimalist brand identity with a custom wordmark, curated colour palette, and a visual identity system tailored for digital-first and D2C marketing. </p>
                <div className="project-meta">
                  <span className="tag">Logo</span>
                  <span className="tag">Color System</span>
                  <span className="tag">Lifestyle</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="why">
          <div className="section-header">
            <span className="section-tag">Why Sociapa</span>
            <h2>Design That Is <span>Strategic, Not Just Pretty</span></h2>
            <div className="divider divider-alpha-white"></div>
            <p className="section-sub seo-sub-top">We design every visual element around your brand strategy, ensuring a purposeful, consistent, and impactful brand identity.</p>
          </div>
          <div className="why-grid">
            <div className="why-card"><div className="why-icon">🎯</div><h3>Strategy-Led Design</h3><p>Every visual element, from colours and typography to icons and layouts, is guided by your brand strategy to create a consistent, purposeful, and impactful identity. </p></div>
            <div className="why-card"><div className="why-icon">🏆</div><h3>160+ Identity Projects</h3><p>Our experience spans FMCG, D2C, retail, wellness, fashion, and technology, creating impactful brand identities for startups, growing businesses, and established brands. </p></div>
            <div className="why-card"><div className="why-icon">🖨️</div><h3>Print & Digital Ready</h3><p>Every logo and brand identity is designed for seamless use across packaging, websites, social media, retail, advertising, and marketing materials. </p></div>
            <div className="why-card"><div className="why-icon">⚡</div><h3>Fast Turnaround</h3><p>First design concepts delivered within 7 business days, with structured feedback rounds to ensure timely delivery and exceptional quality. </p></div>
            <div className="why-card"><div className="why-icon">📋</div><h3>Comprehensive Deliverables</h3><p>Receive all essential brand assets, including AI, EPS, SVG, PNG, and PDF files, complete colour codes, and detailed brand guidelines for consistent use across every platform. </p></div>
            <div className="why-card"><div className="why-icon">🔥</div><h3>Full IP Ownership</h3><p>All designs are 100% original with full intellectual property ownership transferred to you upon project completion. </p></div>
          </div>
        </section>

        <section id="testimonials" className="pub-section-light">
          <div className="section-header">
            <span className="section-tag">Client Voices</span>
            <h2>What Our <span>Clients Say</span></h2>
            <div className="divider"></div>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card"><div className="stars">★★★★★</div><blockquote>"The visual identity Sociapa designed for us is the most complimented aspect of our brand. People recognise us instantly at retail — the logo and colour system is just perfect."</blockquote><div className="testimonial-author"><div className="author-avatar">VC</div><div><div className="author-name">Brand Head, Vanesa Cosmetics</div><div className="author-title">Beauty Brand, Pan-India</div></div></div></div>
            <div className="testimonial-card"><div className="stars">★★★★★</div><blockquote>"Our new identity got us featured on Instagram as a 'beautiful brand' by two industry accounts. The attention to detail in the mood board and colour palette stage was exceptional."</blockquote><div className="testimonial-author"><div className="author-avatar">NP</div><div><div className="author-name">Founder, Nature Pearls Organic</div><div className="author-title">Wellness D2C Brand</div></div></div></div>
            <div className="testimonial-card"><div className="stars">★★★★★</div><blockquote>"Sociapa delivered a brand guidelines document so thorough that onboarding new vendors and agencies became effortless. Our brand looks consistent everywhere now."</blockquote><div className="testimonial-author"><div className="author-avatar">DH</div><div><div className="author-name">Marketing Director, Dhavani</div><div className="author-title">Lifestyle Brand, D2C</div></div></div></div>
          </div>
        </section>

        <section id="faq">
          <div className="section-header">
            <span className="section-tag">FAQ</span>
            <h2>Brand Identity Design <span>Questions Answered</span></h2>
            <div className="divider"></div>
            <p className="section-sub seo-sub-top">Everything you need to know about getting your brand identity designed with Sociapa.</p>
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
      </>
    );
}
