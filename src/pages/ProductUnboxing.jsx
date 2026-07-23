import React, { useState, useEffect } from 'react';
import './ProductUnboxing.css';

const faqsData = [
  {
    "q": "1. What is a product unboxing experience?",
    "a": "<p>A product unboxing experience is the complete journey a customer enjoys while opening your package. It combines packaging design, branding, presentation, inserts, and personalization to create a memorable first impression that strengthens your brand and customer satisfaction.</p>"
  },
  {
    "q": "2. Why is the unboxing experience important for brands?",
    "a": "<p>A well-designed unboxing experience increases customer satisfaction, encourages social media sharing, improves brand recall, generates user-generated content (UGC), and helps build long-term customer loyalty.</p>"
  },
  {
    "q": "3. What packaging elements do you design?",
    "a": "<p>We design outer boxes, mailers, rigid boxes, tissue paper, inserts, thank-you cards, product cradles, stickers, QR codes, loyalty cards, referral cards, and every element that enhances the customer experience.</p>"
  },
  {
    "q": "4. Can you create packaging that encourages social media sharing?",
    "a": "<p>Yes. We design share-worthy unboxing experiences with layered reveals, premium finishes, personalized details, and memorable visual elements that encourage customers to photograph and share their experience online.</p>"
  },
  {
    "q": "5. Do you provide sustainable packaging solutions?",
    "a": "<p>Yes. We create eco-friendly packaging using FSC-certified materials, recycled paper, kraft boxes, soy-based inks, and minimal plastic to deliver premium experiences while supporting sustainability goals.</p>"
  },
  {
    "q": "6. Can you design packaging for startups as well as premium brands?",
    "a": "<p>Absolutely. We create packaging solutions for every budget, from cost-effective startup packaging to premium luxury unboxing experiences for established brands.</p>"
  },
  {
    "q": "7. How do personalized inserts improve customer retention?",
    "a": "<p>Personalized thank-you cards, handwritten notes, loyalty offers, referral cards, and QR codes create stronger emotional connections, encouraging repeat purchases and long-term customer loyalty.</p>"
  },
  {
    "q": "8. Which industries benefit from professional unboxing design?",
    "a": "<p>Our unboxing design services are ideal for D2C brands, e-commerce businesses, cosmetics, fashion, food, wellness, electronics, gifting, lifestyle, subscription boxes, and premium retail products.</p>"
  },
  {
    "q": "9. Can you improve our existing packaging design?",
    "a": "<p>Yes. We evaluate your current packaging experience and recommend design improvements, better materials, personalized elements, and customer engagement opportunities to enhance your overall brand experience.</p>"
  },
  {
    "q": "10. Why choose Sociapa for Product Unboxing Experience design?",
    "a": "<p>Sociapa combines creative packaging design, branding expertise, customer psychology, sustainability, and D2C experience to create memorable unboxing experiences that increase customer satisfaction, social sharing, repeat purchases, and brand loyalty.</p>"
  }
];

export default function ProductUnboxing() {
    const [openFaq, setOpenFaq] = useState(null);
    const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return (<>
<section className="productunboxing-hero">
  <div className="productunboxing-hero-blob hero-blob-1"></div>
  <div className="productunboxing-hero-blob hero-blob-2"></div>
  <div className="productunboxing-hero-content">
    <div className="productunboxing-hero-badge"><span className="productunboxing-hero-badge-dot"></span>Unboxing Design · Viral Packaging · D2C Experience</div>
    <h1>Turn Every Delivery Into a <span>Viral Unboxing Moment</span></h1>
    <p>End-to-end unboxing experiences designed to delight customers, encourage social sharing, and strengthen brand loyalty. From the outer mailer box to the inner tissue wrap and thank-you card, every detail reflects your brand story. </p>
    <div className="productunboxing-hero-buttons">
      <a href="#services" className="btn-white">Explore Our Services</a>
      <a href="mailto:mail@sociapa.com" className="btn-outline-white">Start Your Unboxing Project</a>
    </div>
  </div>
</section>

<div className="stats-bar">
  <div className="stat-item"><div className="stat-num">100+</div><div className="stat-label">Unboxing Experiences Designed</div></div>
  <div className="stat-item"><div className="stat-num">8+</div><div className="stat-label">Years of Expertise</div></div>
  <div className="stat-item"><div className="stat-num">50M+</div><div className="stat-label">Unboxing Views Generated</div></div>
  <div className="stat-item"><div className="stat-num">4.8★</div><div className="stat-label">Average Client Rating</div></div>
</div>

<section id="services" className="pub-section-light">
  <div className="section-header">
    <span className="section-tag">What We Design</span>
    <h2>Unboxing Experiences That <span>Create Brand Advocates</span></h2>
    <div className="divider"></div>
    <p className="section-sub seo-sub-top">
      Every layer of your packaging is an opportunity to delight customers, create memorable experiences, and inspire social sharing.
    </p>
  </div>

  <div className="services-grid">

    <div className="service-card">
      <div className="service-icon">📐</div>
      <h3>Material &amp; Shape Identification</h3>
      <p>Strategic selection of packaging materials, including corrugated, rigid, mailer, kraft, and magnetic closure boxes, with structural designs that balance protection, sustainability, and a memorable unboxing experience.</p>
      <div className="service-tags">
        <span className="tag">Corrugated Boxes</span>
        <span className="tag">Rigid Boxes</span>
        <span className="tag">Mailer Boxes</span>
        <span className="tag">Structural Design</span>
      </div>
    </div>

    <div className="service-card">
      <div className="service-icon">📦</div>
      <h3>Outer Box &amp; Mailer Design</h3>
      <p>Custom-designed outer packaging with premium printing, tactile finishes, personalised messaging, and brand-consistent visuals that create anticipation before the box is opened.</p>
      <div className="service-tags">
        <span className="tag">Premium Printing</span>
        <span className="tag">Mailer Boxes</span>
        <span className="tag">Brand Packaging</span>
        <span className="tag">Luxury Finishes</span>
      </div>
    </div>

    <div className="service-card">
      <div className="service-icon">🎭</div>
      <h3>Virality in Packaging Design</h3>
      <p>Engineered unboxing experiences featuring surprise reveals, layered packaging, message cards, hidden details, and visual elements designed to encourage sharing across social media platforms.</p>
      <div className="service-tags">
        <span className="tag">Viral Packaging</span>
        <span className="tag">Social Sharing</span>
        <span className="tag">UGC Ready</span>
        <span className="tag">Surprise Elements</span>
      </div>
    </div>

    <div className="service-card">
      <div className="service-icon">🎀</div>
      <h3>Inner Packaging &amp; Inserts</h3>
      <p>Custom tissue paper, shredded fill, foam inserts, and product cradles designed to protect your products while creating a premium unboxing experience that reinforces your brand.</p>
      <div className="service-tags">
        <span className="tag">Custom Tissue</span>
        <span className="tag">Foam Inserts</span>
        <span className="tag">Product Cradles</span>
        <span className="tag">Premium Reveal</span>
      </div>
    </div>

    <div className="service-card">
      <div className="service-icon">💌</div>
      <h3>Thank-You Cards &amp; Personalisation</h3>
      <p>Branded thank-you cards, handwritten note templates, QR codes, loyalty offers, and referral cards designed to strengthen customer relationships and encourage repeat purchases.</p>
      <div className="service-tags">
        <span className="tag">Thank-You Cards</span>
        <span className="tag">QR Codes</span>
        <span className="tag">Loyalty Offers</span>
        <span className="tag">Referral Cards</span>
      </div>
    </div>

    <div className="service-card">
      <div className="service-icon">♻️</div>
      <h3>Sustainable Unboxing Design</h3>
      <p>Eco-friendly unboxing experiences using FSC-certified kraft boxes, soy-based inks, recycled tissue paper, and minimal plastic, designed to deliver a premium experience while supporting your sustainability goals.</p>
      <div className="service-tags">
        <span className="tag">Eco Packaging</span>
        <span className="tag">FSC Certified</span>
        <span className="tag">Soy Inks</span>
        <span className="tag">Recycled Materials</span>
      </div>
    </div>

  </div>
</section>

<section id="tools">
  <div className="section-header">
    <span className="section-tag">Design Elements</span>
    <h2>Elements That Make <span>Unboxing Magical</span></h2>
    <div className="divider"></div>
    <p className="section-sub seo-sub-top">Every packaging element is thoughtfully designed to create a memorable brand experience from the moment your customer receives their order. </p>
  </div>
  <div className="tech-grid">
    <div className="tech-chip"><span>Rigid Box</span></div>
    <div className="tech-chip"><span>Custom Mailer</span></div>
    <div className="tech-chip"><span>Tissue Paper</span></div>
    <div className="tech-chip"><span>Thank-You Card</span></div>
    <div className="tech-chip"><span>Branded Sticker</span></div>
    <div className="tech-chip"><span>Shredded Fill</span></div>
    <div className="tech-chip"><span>Spot UV Print</span></div>
    <div className="tech-chip"><span>Kraft Paper</span></div>
    <div className="tech-chip"><span>QR Code Cards</span></div>
    <div className="tech-chip"><span>Hang Tags</span></div>
  </div>
</section>

<section id="portfolio" className="pub-section-light">
  <div className="section-header">
    <span className="section-tag">Our Work</span>
    <h2>Unboxing Experiences That <span>Went Viral</span></h2>
    <div className="divider"></div>
    <p className="section-sub seo-sub-top">D2C brands for whom we've designed memorable unboxing experiences that inspired customer engagement and social media sharing. </p>
  </div>
  <div className="projects-grid">

  <div className="project-card">
    <div className="project-preview project-preview-rel">
      <div className="img-placeholder">
        <img src="images/Nature-pearls.png" alt="Nature Pearls Organic" className="portfolio-logo" />
      </div>
      <span className="project-badge">Wellness · D2C</span>
      <div className="project-overlay">
        <a href="#">↗ View Project</a>
      </div>
    </div>
    <div className="project-info">
      <h3>Nature Pearls Organic</h3>
      <p>Layered premium unboxing with kraft outer box, branded tissue, seed paper thank-you card, and recycled shredded fill—generated 200+ organic Instagram stories from customers.</p>
      <div className="project-meta">
        <span className="tag">Viral</span>
        <span className="tag">Eco-Friendly</span>
        <span className="tag">Wellness</span>
      </div>
    </div>
  </div>

  <div className="project-card">
    <div className="project-preview project-preview-rel">
      <div className="img-placeholder">
        <img src="images/vanesa.png" alt="Vanesa Cosmetics" className="portfolio-logo" />
      </div>
      <span className="project-badge">Beauty · Gifting</span>
      <div className="project-overlay">
        <a href="#">↗ View Project</a>
      </div>
    </div>
    <div className="project-info">
      <h3>Vanesa Cosmetics</h3>
      <p>Festive gift unboxing experience with a magnetic closure rigid box, embossed logo, satin ribbon pull, and personalised fragrance card that customers repeatedly shared on social media.</p>
      <div className="project-meta">
        <span className="tag">Premium</span>
        <span className="tag">Gifting</span>
        <span className="tag">Beauty</span>
      </div>
    </div>
  </div>

  <div className="project-card">
    <div className="project-preview project-preview-rel">
      <div className="img-placeholder">
        <img src="images/DF-logo-blue.png" alt="Dhavani" className="portfolio-logo" />
      </div>
      <span className="project-badge">Lifestyle · D2C</span>
      <div className="project-overlay">
        <a href="#">↗ View Project</a>
      </div>
    </div>
    <div className="project-info">
      <h3>Dhavani</h3>
      <p>Minimalist luxury unboxing with a matte black rigid box, gold foil branding, botanical tissue, and handwritten-style inserts, creating a memorable premium customer experience.</p>
      <div className="project-meta">
        <span className="tag">Luxury</span>
        <span className="tag">Minimalist</span>
        <span className="tag">Lifestyle</span>
      </div>
    </div>
  </div>

</div>
</section>

<section id="process">
  <div className="section-header">
    <span className="section-tag">How We Work</span>
    <h2>Our <span>5-Step Unboxing</span> Design Process</h2>
    <div className="divider"></div>
  </div>
  <div className="process-steps">
    <div className="process-step"><div className="step-num">🎯</div><h3>Strategy Session</h3><p>Define the unboxing story, emotional journey, and share-worthy moments you want to create for your customer</p></div>
    <div className="process-step"><div className="step-num">🔬</div><h3>Material Research</h3><p>Material selection, structural options, printing finishes, and cost-per-unit analysis aligned to your budget</p></div>
    <div className="process-step"><div className="step-num">✏️</div><h3>Experience Design</h3><p>Layer-by-layer design of every unboxing element — outer box, inserts, wrapping, cards, and brand touchpoints</p></div>
    <div className="process-step"><div className="step-num">📦</div><h3>Prototype &amp; Testing</h3><p>Physical prototype produced and tested for wow factor, durability, and shipping resilience before production</p></div>
    <div className="process-step"><div className="step-num">🚀</div><h3>Production Launch</h3><p>Print-ready files and production specs handed off to your packaging manufacturer with quality guidelines</p></div>
  </div>
</section>

<section id="why">
  <div className="section-header">
    <span className="section-tag">Why Sociapa</span>
    <h2>We Design Experiences, <span>Not Just Boxes</span></h2>
    <div className="divider divider-alpha-white"></div>
    <p className="section-sub seo-sub-top">
      The unboxing experience is an extension of your brand story, and we design every detail to make every moment memorable.
    </p>
  </div>

  <div className="why-grid">

    <div className="why-card">
      <div className="why-icon">📱</div>
      <h3>Viral-First Design Thinking</h3>
      <p>We design every layer, reveal, and packaging detail to create memorable experiences that encourage customers to photograph, film, and share across social media platforms.</p>
    </div>

    <div className="why-card">
      <div className="why-icon">🎯</div>
      <h3>Full-Journey Design</h3>
      <p>From the moment your package arrives to the final insert inside, we design every customer touchpoint to create a memorable brand experience.</p>
    </div>

    <div className="why-card">
      <div className="why-icon">💰</div>
      <h3>Budget-Conscious Solutions</h3>
      <p>We create impactful unboxing experiences for every budget, from lean startup packaging to premium luxury presentations.</p>
    </div>

    <div className="why-card">
      <div className="why-icon">🔄</div>
      <h3>Repeat Purchase Triggers</h3>
      <p>Strategic inserts, loyalty QR codes, referral cards, and personalised messages designed to encourage repeat purchases and customer referrals.</p>
    </div>

    <div className="why-card">
      <div className="why-icon">🌿</div>
      <h3>Sustainability Expertise</h3>
      <p>Expertise in eco-friendly materials helps D2C brands create premium unboxing experiences using recyclable and FSC-certified packaging solutions.</p>
    </div>

    <div className="why-card">
      <div className="why-icon">🏆</div>
      <h3>D2C Brand Specialists</h3>
      <p>Deep understanding of the D2C customer journey enables us to design packaging that strengthens customer retention, encourages word-of-mouth, and builds long-term customer value.</p>
    </div>

  </div>
</section>

<section id="testimonials" className="pub-section-light">
  <div className="section-header">
    <span className="section-tag">Client Voices</span>
    <h2>What Our <span>Clients Say</span></h2>
    <div className="divider"></div>
  </div>
  <div className="testimonials-grid">
    <div className="testimonial-card"><div className="stars">★★★★★</div><blockquote>"Our unboxing experience went from 'just a box' to something customers actively Instagram Story about. Sociapa created magic in a mailer box — our NPS scores jumped 22 points."</blockquote><div className="testimonial-author"><div className="author-avatar">NP</div><div><div className="author-name">Founder, Nature Pearls Organic</div><div className="author-title">Wellness D2C Brand</div></div></div></div>
    <div className="testimonial-card"><div className="stars">★★★★★</div><blockquote>"The festive unboxing kit Sociapa designed for us sold out in 4 hours during Diwali. The magnetic closure rigid box with satin ribbon was exactly the premium experience we needed."</blockquote><div className="testimonial-author"><div className="author-avatar">VC</div><div><div className="author-name">Marketing Head, Vanesa Cosmetics</div><div className="author-title">Beauty Brand, Gift Category</div></div></div></div>
    <div className="testimonial-card"><div className="stars">★★★★★</div><blockquote>"Three unboxing YouTubers featured our packaging without us asking. Sociapa's design created organic influencer content we couldn't have paid for — and our repeat purchase rate went up 18%."</blockquote><div className="testimonial-author"><div className="author-avatar">DH</div><div><div className="author-name">Founder, Dhavani</div><div className="author-title">Lifestyle D2C Brand</div></div></div></div>
  </div>
</section>

<section id="faq">
  <div className="section-header">
    <span className="section-tag">FAQ</span>
    <h2>Unboxing Experience <span>Questions Answered</span></h2>
    <div className="divider"></div>
    <p className="section-sub seo-sub-top">Everything you want to know about creating a viral, brand-building unboxing experience.</p>
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
  <h2>Ready to Create an Unboxing Experience <span>Customers Can't Stop Sharing?</span></h2>
  <p>Tell us about your product and target customer — we'll design an unboxing experience that turns deliveries into brand moments.</p>
  <div className="cta-buttons">
    <a href="mailto:mail@sociapa.com" className="btn-white">Get an Unboxing Proposal</a>
    <a href="https://wa.me/8375828920" className="btn-outline-white">WhatsApp Us</a>
  </div>
</section>

</>);
}
