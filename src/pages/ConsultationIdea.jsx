import React, { useState, useEffect } from 'react';
import ServiceCaseStudiesSlider from '../components/ServiceCaseStudiesSlider';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './ConsultationIdea.css';

export default function ConsultationIdea() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  const base = import.meta.env.BASE_URL || '/';

  const faqs = [
    { q: "1. What are Consultation & Idea Services?", a: "Consultation & Idea Services help businesses, startups, and entrepreneurs refine ideas, identify opportunities, solve challenges, and create strategies for growth and success." },
    { q: "2. Who can benefit from consultation services?", a: "Our consultation services are ideal for startups, entrepreneurs, small businesses, established brands, and organizations looking for expert guidance and strategic direction." },
    { q: "3. How do we help businesses develop strategies?", a: "We analyze your goals, market conditions, competitors, and customer needs to create strategies that support sustainable growth." },
    { q: "4. Can we help identify new business opportunities?", a: "Yes. We conduct market research and strategic analysis to uncover opportunities that align with your strengths and objectives." },
    { q: "5. Can we help with market research?", a: "Yes. We analyze industry trends, customer behavior, competitors, and market opportunities to support informed decision-making." },
    { q: "6. Can consultation help improve my brand strategy?", a: <>Yes. We help businesses define their <Link to="/brand-identity-design" className="seo-interlink">brand identity design</Link>, messaging, <Link to="/brand-strategy" className="seo-interlink">brand positioning strategy</Link>, and communication roadmap.</> },
    { q: "7. Can we recommend the right marketing channels for my business?", a: <>Absolutely. We evaluate your audience and objectives to recommend high-impact channels including <Link to="/best-social-media-marketing-agency-india" className="seo-interlink">social media marketing</Link>, <Link to="/pay-per-click-ppc-services-india" className="seo-interlink">performance PPC</Link>, and <Link to="/seo-aeo-geo" className="seo-interlink">search engine optimization</Link>.</> },
    { q: "8. What outcomes can I expect from a consultation session?", a: "You can expect strategic clarity, actionable recommendations, growth opportunities, and a roadmap tailored to your business goals." },
    { q: "9. How do we measure the success of your recommendations?", a: "Success is measured through business growth, improved performance, increased efficiency, stronger branding, lead generation, and achievement of strategic goals." },
    { q: "10. Why choose Sociapa for Consultation & Idea Services?", a: "Sociapa combines industry expertise, creative thinking, market insights, and practical strategies to help businesses turn ideas into successful outcomes." }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="consultation-idea-page">
      <Helmet>
        <title>Brand Consultation Services in Noida &amp; Delhi NCR | Sociapa</title>
        <meta name="description" content="Build a stronger brand with Sociapa's Brand Consultation Services in Noida & Delhi NCR. We help businesses with brand strategy, positioning, identity, messaging, and growth-focused marketing consultation." />
        <link rel="canonical" href="https://sociapa.com/consultation-idea" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Brand Consultation Services in Noida & Delhi NCR | Sociapa" />
        <meta property="og:description" content="Expert brand consultation and strategy services to help your business grow. We define brand identity, messaging, positioning, and communication strategy for businesses in India." />
        <meta property="og:url" content="https://sociapa.com/consultation-idea" />
        <meta property="og:site_name" content="SOCIAPA" />
        <meta property="og:image" content="https://www.sociapa.com/wp-content/uploads/2021/09/sociapa-News.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Brand Consultation Services in Noida & Delhi NCR | Sociapa" />
        <meta name="twitter:description" content="Sociapa's brand consultation services help businesses define brand strategy, positioning, identity, and messaging for sustainable growth." />
        <meta name="twitter:image" content="https://www.sociapa.com/wp-content/uploads/2021/09/sociapa-News.jpg" />
      </Helmet>
      <div className="serInsideBnr">
        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
          Brand Consultation &amp; Strategic Business Ideation Services India - Sociapa
        </h1>
        <div className="row">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={`${base}images/brand-consultation-service-banner-mobile.jpeg`} />
            <img
              src={`${base}images/brand-consultation-service-banner.webp`}
              alt="Brand Consultation Service"
              className="responsive-img w-100" />
          </picture>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="stats-bar">
        <div className="stats-inner">
          <div className="stat-item">
            <div className="stat-num">50+</div>
            <div className="stat-label">Brands Consulted</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">₹50Cr+</div>
            <div className="stat-label">Marketing Spend Optimised</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">2.8X</div>
            <div className="stat-label">Average Growth Delivered</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">8+</div>
            <div className="stat-label">Years of Strategic Expertise</div>
          </div>
        </div>
      </div>

      <section className="services-section">
        <div className="section-inner">
          <span className="section-tag">Consultation Services</span>
          <h2 className="section-title">Strategic Clarity Before Tactical Execution</h2>
          <p className="section-sub">We uncover opportunities and build data-driven marketing strategies aligned with your business goals and growth objectives. </p>
          <div className="services-grid">

            <div className="svc-card">
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/consultation/Digital Marketing Audit.png`}
                  alt="Digital Marketing Audit"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h3>Digital Marketing Audit</h3>
              <p>
                Comprehensive audit of your website, SEO, social media, paid advertising, email marketing, and content, with a prioritised action plan for immediate improvements and long-term growth.
              </p>
              <div className="service-tags">
                <span>SEO Audit</span>
                <span>Paid Ads</span>
                <span>Social Media</span>
                <span>Content Audit</span>
              </div>
            </div>

            <div className="svc-card">
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/consultation/growth Strategy Development.png`}
                  alt="Growth Strategy Development"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h3>Growth Strategy Development</h3>
              <p>
                12-month digital growth roadmap covering channel strategy, budget allocation, audience targeting, and KPI planning, tailored to your business objectives.
              </p>
              <div className="service-tags">
                <span>Growth Strategy</span>
                <span>Budget Planning</span>
                <span>Audience Targeting</span>
                <span>KPI Planning</span>
              </div>
            </div>

            <div className="svc-card">
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/consultation/Brand Positioning.png`}
                  alt="Brand Positioning"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h3>Brand Positioning</h3>
              <p>
                Brand positioning, value proposition development, and messaging architecture to establish a clear and differentiated market position.
              </p>
              <div className="service-tags">
                <span>Brand Strategy</span>
                <span>Value Proposition</span>
                <span>Messaging</span>
                <span>Differentiation</span>
              </div>
            </div>

            <div className="svc-card">
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/consultation/Digital Marketing Workshops.png`}
                  alt="Digital Marketing Workshops"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h3>Digital Marketing Workshops</h3>
              <p>
                Half-day and full-day workshops covering digital strategy, social media, content marketing, paid advertising, and analytics for marketing teams.
              </p>
              <div className="service-tags">
                <span>Team Training</span>
                <span>Digital Strategy</span>
                <span>Workshops</span>
                <span>Analytics</span>
              </div>
            </div>

            <div className="svc-card">
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/consultation/Market Research & Analysis.png`}
                  alt="Market Research & Analysis"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h3>Market Research &amp; Analysis</h3>
              <p>
                Consumer insights, competitive analysis, and market opportunity research to support data-driven marketing and business decisions.
              </p>
              <div className="service-tags">
                <span>Consumer Insights</span>
                <span>Competitor Analysis</span>
                <span>Market Research</span>
                <span>Business Intelligence</span>
              </div>
            </div>

            <div className="svc-card">
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/consultation/Ongoing Strategic Advisory.png`}
                  alt="Ongoing Strategic Advisory"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h3>Ongoing Strategic Advisory</h3>
              <p>
                Monthly advisory support with senior strategic guidance, campaign reviews, market opportunity discussions, and on-demand executive marketing advice.
              </p>
              <div className="service-tags">
                <span>Monthly Advisory</span>
                <span>Campaign Reviews</span>
                <span>Growth Consulting</span>
                <span>Executive Strategy</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="tools-section">
        <div className="section-inner">
          <span className="section-tag">Frameworks &amp; Methodologies</span>
          <h2 className="section-title">Proven Strategic Frameworks, Practical Outputs</h2>
          <p className="section-sub">Our strategies are built on proven marketing frameworks and delivered as practical, actionable plans focused on business growth. </p>
          <div className="tools-grid">
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/consultation/Digital Audit Framework.png`}
                  alt="Digital Audit Framework"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </span>
              Digital Audit Framework
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/consultation/RACE Planning.png`}
                  alt="RACE Planning"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </span>
              RACE Planning
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/consultation/SEMrush Research.png`}
                  alt="SEMrush Research"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </span>
              SEMrush Research
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/consultation/Google Analytics.png`}
                  alt="Google Analytics"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </span>
              Google Analytics
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/consultation/Jobs-to-be-Done.png`}
                  alt="Jobs-to-be-Done"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </span>
              Jobs-to-be-Done
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/consultation/Brand Positioning Maps.png`}
                  alt="Brand Positioning Maps"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </span>
              Brand Positioning Maps
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/consultation/Budget Modelling.png`}
                  alt="Budget Modelling"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </span>
              Budget Modelling
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/consultation/Customer Journey Maps.png`}
                  alt="Customer Journey Maps"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </span>
              Customer Journey Maps
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/consultation/Competitor Benchmarks.png`}
                  alt="Competitor Benchmarks"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </span>
              Competitor Benchmarks
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/consultation/Agile Sprint Planning.png`}
                  alt="Agile Sprint Planning"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </span>
              Agile Sprint Planning
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio hidden as per Client Sections v3 Instruction #8 */}

      <section className="process-section">
        <div className="section-inner">
          <span className="section-tag">Our Process</span>
          <h2 className="section-title">How We Build Your Growth Strategy</h2>
          <p className="section-sub">A structured consulting engagement that goes from problem diagnosis to implementation-ready strategy in 4–6 weeks.</p>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/consultation/discovery call.png`}
                  alt="Discovery Call"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h4>Discovery Call</h4>
              <p>Business objectives, current challenges, and growth context understood</p>
            </div>
            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/consultation/Audit & Research.png`}
                  alt="Audit & Research"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h4>Audit &amp; Research</h4>
              <p>Deep-dive into digital channels, market data, and competitive landscape</p>
            </div>
            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/consultation/Insight Generation.png`}
                  alt="Insight Generation"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h4>Insight Generation</h4>
              <p>Key opportunities, gaps, and strategic priorities identified from data</p>
            </div>
            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/consultation/strategy development.png`}
                  alt="Strategy Development"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h4>Strategy Development</h4>
              <p>Growth roadmap, channel strategy, and budget model developed and stress-tested</p>
            </div>
            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/consultation/strategy generation.png`}
                  alt="Strategy Presentation"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h4>Strategy Presentation</h4>
              <p>Board-ready strategy deck presented with recommendations and ROI projections</p>
            </div>
            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/consultation/implementation support.png`}
                  alt="Implementation Support"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h4>Implementation Support</h4>
              <p>Ongoing advisory as strategy is activated across teams and channels</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="section-inner">
          <span className="section-tag consultationidea-why-tag">
            Why Sociapa Consulting
          </span>

          <h2 className="section-title">Strategy Grounded in Execution Reality</h2>

          <p className="section-sub">
            We combine strategic consulting with execution, delivering practical marketing plans backed by the capability to bring them to life.
          </p>

          <div className="why-grid">

            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/consultation/Data-Led Diagnosis.png`}
                  alt="Data-Led Diagnosis"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h4>Data-Led Diagnosis</h4>
              <p>Every strategy begins with data analysis to identify real growth opportunities and challenges before recommending solutions.</p>
            </div>

            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/consultation/Execution-Connected Strategy.png`}
                  alt="Execution-Connected Strategy"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h4>Execution-Connected Strategy</h4>
              <p>As a full-service agency, our strategic recommendations are built around practical, achievable execution, not just presentation.</p>
            </div>

            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/consultation/senior Advisor Access.png`}
                  alt="Senior Advisor Access"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h4>Senior Advisor Access</h4>
              <p>Founders and senior directors lead every strategic engagement, providing experienced guidance throughout the entire consulting process.</p>
            </div>

            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/consultation/ROI-Focused Outputs.png`}
                  alt="ROI-Focused Outputs"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h4>ROI-Focused Outputs</h4>
              <p>Every strategy includes financial projections, expected returns, payback estimates, and success metrics aligned with your business objectives.</p>
            </div>

            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/consultation/deep India Market Knowledge.png`}
                  alt="Deep India Market Knowledge"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h4>Deep India Market Knowledge</h4>
              <p>With 8+ years of experience in the Indian digital market, we build strategies based on a deep understanding of Indian consumers and local market dynamics.</p>
            </div>

            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/consultation/Agile & Iterative.png`}
                  alt="Agile & Iterative"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h4>Agile &amp; Iterative</h4>
              <p>We build continuous feedback and optimisation into every engagement, ensuring your strategy evolves with changing business needs and market conditions.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials hidden as per Client Sections v3 Instruction #8 */}

      {/* Featured Case Studies Slider */}
      <ServiceCaseStudiesSlider />

      <section className="faq-section faq-section-padded" id="faq">
        <div className="section-inner">
          <span className="section-tag">FAQ</span>
          <h2 className="section-title">Business Consultation <span className="faq-title-highlight">Questions Answered</span></h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
                <div className="faq-q" onClick={() => toggleFaq(index)}>
                  {faq.q}
                  <span className="faq-icon">{openFaq === index ? '-' : '+'}</span>
                </div>
                <div className="faq-a">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="section-inner cta-inner-narrow">
          <h2>Ready to Build a Strategy That Actually Works?</h2>
          <p>Book a 60-minute complimentary strategy discovery call with our senior team—no commitment, just clarity.</p>
          <Link to="/contact-us" className="btn-primary">Book a Free Discovery Call</Link>
        </div>
      </section>
    </div>
  );
}
