import React, { useState, useEffect } from 'react';
import './ConsultationIdea.css';

export default function ConsultationIdea() {
    const [openFaq, setOpenFaq] = useState(null);
    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        { q: "What are Consultation & Idea Services?", a: "Consultation & Idea Services help businesses, startups, and entrepreneurs refine ideas, identify opportunities, solve challenges, and create strategies for growth and success." },
        { q: "Who can benefit from consultation services?", a: "Our consultation services are ideal for startups, entrepreneurs, small businesses, established brands, and organizations looking for expert guidance and strategic direction." },
        { q: "How do we help businesses develop strategies?", a: "We analyze your goals, market conditions, competitors, and customer needs to create strategies that support sustainable growth." },
        { q: "Can we help identify new business opportunities?", a: "Yes. We conduct market research and strategic analysis to uncover opportunities that align with your strengths and objectives." },
        { q: "Can we help with market research?", a: "Yes. We analyze industry trends, customer behavior, competitors, and market opportunities to support informed decision-making." },
        { q: "Can consultation help improve my brand strategy?", a: "Yes. We help businesses define their brand identity, messaging, positioning, and communication strategy." },
        { q: "Can we recommend the right marketing channels for my business?", a: "Absolutely. We evaluate your audience and objectives to identify the most effective channels for reaching potential customers." },
        { q: "What outcomes can I expect from a consultation session?", a: "You can expect strategic clarity, actionable recommendations, growth opportunities, and a roadmap tailored to your business goals." },
        { q: "How do we measure the success of your recommendations?", a: "Success is measured through business growth, improved performance, increased efficiency, stronger branding, lead generation, and achievement of strategic goals." },
        { q: "Why choose Sociapa for Consultation & Idea Services?", a: "Sociapa combines industry expertise, creative thinking, market insights, and practical strategies to help businesses turn ideas into successful outcomes." }
    ];
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="serInsideBnr">
  <div className="row">
    <picture>
        
        <source
            media="(max-width: 767px)"
            srcSet="/sociapareact/images/brand-consultation-service-banner-mobile.jpeg" />

        
        <img
            src="/sociapareact/images/brand-consultation-service-banner.jpeg"
            alt="Brand Consultation Service"
            className="responsive-img w-100" />
    </picture>
</div>
</div>
<section className="consultationidea-hero page-hero-section">
  <div className="consultationidea-hero-inner">
    <div>
      <div className="consultationidea-hero-badge">💡 Digital Audit · Growth Strategy · Brand Workshops</div>
      <h1>Strategic Consultation That <em>Unlocks Growth</em></h1>
      <p className="consultationidea-hero-desc">Digital marketing consulting that audits your digital presence, identifies growth opportunities, and builds strategic roadmaps aligned with your business goals. </p>
      <div className="consultationidea-hero-btns">
        <a href="/contact" className="btn-primary">Book a Strategy Session</a>
        <a href="/portfolio" className="btn-outline">See Client Results</a>
      </div>
    </div>
    <div className="consultationidea-hero-visual">
      <img src="/sociapareact/images/brand-consultation-left.jpeg" alt="aggregator-left-img" className="consultationidea-hero-img" />
    </div>
  </div>
</section>

<div className="stats-bar">
  <div className="stats-inner">
    <div><span className="stat-num">50+</span><div className="stat-lbl">Brands Consulted</div></div>
    <div><span className="stat-num">₹50Cr+</span><div className="stat-lbl">Marketing Spend Optimised</div></div>
    <div><span className="stat-num">2.8x</span><div className="stat-lbl">Average Growth Delivered</div></div>
    <div><span className="stat-num">8+</span><div className="stat-lbl">Years of Strategic Expertise</div></div>
  </div>
</div>

<section className="services-section">
  <div className="section-inner">
    <span className="section-tag">Consultation Services</span>
    <h2 className="section-title">Strategic Clarity Before Tactical Execution</h2>
    <p className="section-sub">We uncover opportunities and build data-driven marketing strategies aligned with your business goals and growth objectives. </p>
    <div className="services-grid">

        <div className="svc-card">
            <div className="svc-icon">🔍</div>
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
            <div className="svc-icon">🚀</div>
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
            <div className="svc-icon">💎</div>
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
            <div className="svc-icon">🎓</div>
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
            <div className="svc-icon">📊</div>
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
            <div className="svc-icon">🤝</div>
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
      <div className="tool-chip"><span className="tool-icon">📊</span>Digital Audit Framework</div>
      <div className="tool-chip"><span className="tool-icon">🎯</span>RACE Planning</div>
      <div className="tool-chip"><span className="tool-icon">🔍</span>SEMrush Research</div>
      <div className="tool-chip"><span className="tool-icon">📈</span>Google Analytics</div>
      <div className="tool-chip"><span className="tool-icon">🧭</span>Jobs-to-be-Done</div>
      <div className="tool-chip"><span className="tool-icon">📐</span>Brand Positioning Maps</div>
      <div className="tool-chip"><span className="tool-icon">💰</span>Budget Modelling</div>
      <div className="tool-chip"><span className="tool-icon">🗺️</span>Customer Journey Maps</div>
      <div className="tool-chip"><span className="tool-icon">⚖️</span>Competitor Benchmarks</div>
      <div className="tool-chip"><span className="tool-icon">🔄</span>Agile Sprint Planning</div>
    </div>
  </div>
</section>

<section className="portfolio-section">
  <div className="section-inner">
    <span className="section-tag">Strategy Work</span>
    <h2 className="section-title">Strategies That Delivered Real Growth</h2>
    <p className="section-sub">Strategic consulting delivered for brands during launches, market pivots, and high-growth expansion phases. </p>
    <div className="portfolio-grid">

        <div className="port-card">
            <div className="port-img">
            <img src="/sociapareact/images/apisClt.png" alt="APIS India" className="portfolio-logo" />
            </div>
            <div className="port-info">
            <div className="port-tag">Digital Audit &amp; Strategy</div>
            <h4>APIS India — Digital Transformation</h4>
            <p>Comprehensive digital audit and strategic consulting helped optimise marketing investments, improve campaign efficiency, and create a scalable roadmap for long-term business growth.</p>
            </div>
        </div>

        <div className="port-card">
            <div className="port-img">
            <img src="/sociapareact/images/bonnClt.png" alt="Bonn Breads" className="portfolio-logo" />
            </div>
            <div className="port-info">
            <div className="port-tag">Brand Positioning</div>
            <h4>Bonn Breads — Brand Strategy</h4>
            <p>Developed a refreshed brand positioning strategy focused on market differentiation, customer perception, and consistent messaging across digital and offline channels.</p>
            </div>
        </div>

        <div className="port-card">
            <div className="port-img">
            <img src="/sociapareact/images/pansari200.png" alt="Pansari Group" className="portfolio-logo" />
            </div>
            <div className="port-info">
            <div className="port-tag">Growth Strategy</div>
            <h4>Pansari Group — Growth Consultation</h4>
            <p>Created a business growth roadmap covering digital expansion, customer acquisition, branding, and go-to-market strategies to support long-term business objectives.</p>
            </div>
        </div>

        <div className="port-card">
            <div className="port-img">
            <img src="/sociapareact/images/nutrela-logo.png" alt="Nutrela Nutrition" className="portfolio-logo" />
            </div>
            <div className="port-info">
            <div className="port-tag">Market Research</div>
            <h4>Nutrela Nutrition — Market Expansion Strategy</h4>
            <p>Conducted market research, audience analysis, and competitive benchmarking to identify growth opportunities and build a data-driven expansion strategy.</p>
            </div>
        </div>

        </div>
  </div>
</section>

<section className="process-section">
  <div className="section-inner">
    <span className="section-tag">Our Process</span>
    <h2 className="section-title">How We Build Your Growth Strategy</h2>
    <p className="section-sub">A structured consulting engagement that goes from problem diagnosis to implementation-ready strategy in 4–6 weeks.</p>
    <div className="process-grid">
      <div className="process-step"><div className="step-num">1</div><h4>Discovery Call</h4><p>Business objectives, current challenges, and growth context understood</p></div>
      <div className="process-step"><div className="step-num">2</div><h4>Audit &amp; Research</h4><p>Deep-dive into digital channels, market data, and competitive landscape</p></div>
      <div className="process-step"><div className="step-num">3</div><h4>Insight Generation</h4><p>Key opportunities, gaps, and strategic priorities identified from data</p></div>
      <div className="process-step"><div className="step-num">4</div><h4>Strategy Development</h4><p>Growth roadmap, channel strategy, and budget model developed and stress-tested</p></div>
      <div className="process-step"><div className="step-num">5</div><h4>Strategy Presentation</h4><p>Board-ready strategy deck presented with recommendations and ROI projections</p></div>
      <div className="process-step"><div className="step-num">6</div><h4>Implementation Support</h4><p>Ongoing advisory as strategy is activated across teams and channels</p></div>
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
        <div className="w-icon">🔍</div>
        <h4>Data-Led Diagnosis</h4>
        <p>Every strategy begins with data analysis to identify real growth opportunities and challenges before recommending solutions.</p>
      </div>

      <div className="why-card">
        <div className="w-icon">⚙️</div>
        <h4>Execution-Connected Strategy</h4>
        <p>As a full-service agency, our strategic recommendations are built around practical, achievable execution, not just presentation.</p>
      </div>

      <div className="why-card">
        <div className="w-icon">🏆</div>
        <h4>Senior Advisor Access</h4>
        <p>Founders and senior directors lead every strategic engagement, providing experienced guidance throughout the entire consulting process.</p>
      </div>

      <div className="why-card">
        <div className="w-icon">📊</div>
        <h4>ROI-Focused Outputs</h4>
        <p>Every strategy includes financial projections, expected returns, payback estimates, and success metrics aligned with your business objectives.</p>
      </div>

      <div className="why-card">
        <div className="w-icon">🇮🇳</div>
        <h4>Deep India Market Knowledge</h4>
        <p>With 8+ years of experience in the Indian digital market, we build strategies based on a deep understanding of Indian consumers and local market dynamics.</p>
      </div>

      <div className="why-card">
        <div className="w-icon">🔄</div>
        <h4>Agile &amp; Iterative</h4>
        <p>We build continuous feedback and optimisation into every engagement, ensuring your strategy evolves with changing business needs and market conditions.</p>
      </div>

    </div>
  </div>
</section>

<section className="testi-section">
  <div className="section-inner">
    <span className="section-tag">Client Stories</span>
    <h2 className="section-title">Brands That Grew Through Strategic Clarity</h2>
    <div className="testi-grid">
      <div className="testi-card">
        <div className="stars">★★★★★</div>
        <blockquote>"Sociapa's digital audit identified ₹1.2Cr in wasted ad spend we didn't know we had. The reallocation alone paid for the entire consulting engagement 10x over."</blockquote>
        <div className="testi-author"><div className="avatar">AI</div><div><strong>Dr. Ankit Jain</strong><span>CEO, APIS India</span></div></div>
      </div>
      <div className="testi-card">
        <div className="stars">★★★★★</div>
        <blockquote>"The brand repositioning strategy transformed how our customers see us. Premium SKU revenue increased 40%—we had the products, we just needed the positioning clarity."</blockquote>
        <div className="testi-author"><div className="avatar">HB</div><div><strong>Arjun Sharma</strong><span>CEO, Habitat</span></div></div>
      </div>
      <div className="testi-card">
        <div className="stars">★★★★★</div>
        <blockquote>"The D2C launch strategy gave our team complete clarity on every decision from day one. We hit our Year 1 revenue target in Month 9—strategy matters enormously."</blockquote>
        <div className="testi-author"><div className="avatar">PG</div><div><strong>Rohit Agarwal</strong><span>Brand Head, Pansari Group</span></div></div>
      </div>
    </div>
  </div>
</section>

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
    <a href="/contact" className="btn-primary">Book a Free Discovery Call</a>
  </div>
</section>
  
        </>
    );
}
