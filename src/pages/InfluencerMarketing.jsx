import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './InfluencerMarketing.css';


const faqsData = [
  {
    "q": "Why is influencer marketing important for brands?",
    "a": "<p>Influencer marketing helps brands build trust, increase visibility, reach targeted audiences, and create authentic connections with potential customers.</p>"
  },
  {
    "q": "How does influencer marketing differ from traditional advertising?",
    "a": "<p>Traditional advertising delivers direct brand messages, while influencer marketing relies on trusted creators sharing products through authentic content and personal recommendations.</p>"
  },
  {
    "q": "Can influencer marketing help generate sales?",
    "a": "<p>Yes. Influencer campaigns can drive brand awareness, website traffic, lead generation, and sales when aligned with the right audience and strategy.</p>"
  },
  {
    "q": "Which businesses can benefit from influencer marketing?",
    "a": "<p>Influencer marketing works well for e-commerce brands, startups, fashion, beauty, food, travel, technology, fitness, education, healthcare, and many other industries.</p>"
  },
  {
    "q": "What is the difference between nano, micro, macro, and mega influencers?",
    "a": "<p>Nano influencers typically have <strong>1,000–10,000 followers</strong>, micro influencers have <strong>10,000–100,000 followers</strong>, macro influencers have larger audiences, and mega influencers or celebrities have <strong>over one million followers</strong>.</p>"
  },
  {
    "q": "Which type of influencer is best for my brand?",
    "a": "<p>The right influencer depends on your goals. Nano and micro influencers often generate higher engagement, while macro and mega influencers provide greater reach and visibility.</p>"
  },
  {
    "q": "Are micro influencers better than celebrity influencers?",
    "a": "<p>Not always. Micro influencers often have highly engaged audiences and stronger trust, while celebrity influencers can provide large-scale exposure for major campaigns.</p>"
  },
  {
    "q": "Can I work with multiple influencers in one campaign?",
    "a": "<p>Yes. Many brands collaborate with multiple influencers to reach different audience segments and maximize campaign impact.</p>"
  },
  {
    "q": "How do you choose the right influencers for a campaign?",
    "a": "<p>We evaluate audience demographics, engagement rates, content quality, brand alignment, and campaign objectives before recommending influencers.</p>"
  },
  {
    "q": "What influencer marketing services does Sociapa provide?",
    "a": "<p>We offer influencer discovery, campaign planning, influencer outreach, content strategy, campaign management, performance tracking, and reporting.</p>"
  }
];


export default function InfluencerMarketing() {
    const [openFaq, setOpenFaq] = useState(null);
    const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            
      <Helmet>
        <title>Top Influencer Marketing Company in Noida &amp; Delhi NCR, India – Sociapa</title>
        <meta name="description" content="Influencer Agency Delhi - Sociapa is among the top influencer marketing companies in Noida. Sociapa makes it possible for you to positively and appropriately connect with your target audience. Build your brand by working with creators, bloggers, and social media influencers." />
        <meta name="keywords" content="Digital Marketing" />
        <link rel="canonical" href="https://www.sociapa.com/influencer-marketing/" />
        <meta property="og:title" content="Top Influencer Marketing Company in Noida & Delhi NCR, India – Sociapa" />
        <meta property="og:description" content="Influencer Agency Delhi - Sociapa is among the top influencer marketing companies in Noida. Sociapa makes it possible for you to positively and appropriately connect with your target audience. Build your brand by working with creators, bloggers, and social media influencers." />
        <meta property="og:url" content="https://www.sociapa.com/influencer-marketing/" />
      </Helmet>
<div className="serInsideBnr">
  <div className="row">
    <picture>
        
        <source
            media="(max-width: 767px)"
            srcset="/sociapareact/images/influencer-service-banner-mobile.jpeg" />

        
        <img src="/sociapareact/images/influencer-service-banner.jpeg" alt="pr-service-banner" className="responsive-img w-100" />
    </picture>
  </div>
</div>
<section className="influencermarketing-hero">
  <div className="influencermarketing-hero-inner">
    <div>
      <div className="influencermarketing-hero-badge"> 2,000+ Vetted Influencers · Nano to Celebrity</div>
      <h1>Influencer Marketing That <em>Earns Trust</em> at Scale</h1>
      <p className="influencermarketing-hero-desc">Connect with the right influencers, from micro-creators to celebrities. Sociapa manages influencer discovery, campaign execution, and performance reporting. </p>
      <div className="influencermarketing-hero-btns">
        <a href="/contact" className="btn-primary">Launch an Influencer Campaign</a>
        <a href="/portfolio" className="btn-outline">See Campaign Results</a>
      </div>
    </div>
    <div className="influencermarketing-hero-visual">
      <img src="/sociapareact/images/influencer-service-left.jpeg" alt="aggregator-left-img" className="influencermarketing-hero-img" />
    </div>
  </div>
</section>

<div className="stats-bar">
  <div className="stats-inner">
    <div><span className="stat-num">2,000+</span><div className="stat-lbl">Vetted Influencers in Network</div></div>
    <div><span className="stat-num">500+</span><div className="stat-lbl">Campaigns Executed</div></div>
    <div><span className="stat-num">200M+</span><div className="stat-lbl">Total Campaign Reach</div></div>
    <div><span className="stat-num">4.5x</span><div className="stat-lbl">Average Earned Media Value</div></div>
  </div>
</div>

<section className="services-section">
  <div className="section-inner">
    <span className="section-tag">Our Services</span>
    <h2 className="section-title">End-to-End Influencer Marketing Management</h2>
    <p className="section-sub">We manage every stage of influencer campaigns, delivering measurable results without adding to your team's workload. </p>
    <div className="services-grid">
      <div className="svc-card">
        <div className="svc-icon">🔥</div>
        <h3>Influencer Discovery & Vetting</h3>
        <p>AI-assisted search and manual vetting to identify creators by niche, audience demographics, engagement quality, and brand safety. </p>
        <div className="service-tags"><span>Nano</span><span>Micro</span><span>Macro</span><span>Celebrity</span><span>Niche</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon"></div>
        <h3>Campaign Strategy</h3>
        <p>Campaign strategy covering objectives, creator selection, content formats, timelines, and KPIs before influencer onboarding. </p>
        <div className="service-tags"><span>Campaign Brief</span><span>Creator Mix</span><span>KPI Setting</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">📈©</div>
        <h3>Creator Outreach & Negotiations</h3>
        <p>We manage influencer outreach, negotiations, contracts, and payments, ensuring smooth campaign execution and brand protection. </p>
        <div className="service-tags"><span>Outreach</span><span>Contracts</span><span>Payments</span><span>Negotiations</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">✓</div>
        <h3>Content Review & Approval</h3>
        <p>Structured content review with brand guideline checks, disclosure compliance, and approval before every post goes live. </p>
        <div className="service-tags"><span>Brand Review</span><span>Disclosure</span><span>Quality Control</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">📊</div>
        <h3>Performance Tracking & Reporting</h3>
        <p>Post-campaign reports covering reach, impressions, engagement, EMV, link clicks, conversions, and actionable performance insights. </p>
        <div className="service-tags"><span>EMV Tracking</span><span>Engagement</span><span>Conversion</span><span>Reporting</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon"></div>
        <h3>Brand Ambassador Programmes</h3>
        <p>Long-term creator partnerships with content calendars, exclusivity agreements, and ambassador programs for sustained brand advocacy. </p>
        <div className="service-tags"><span>Long-Term</span><span>Exclusivity</span><span>Ambassador Tiers</span></div>
      </div>
    </div>
  </div>
</section>

<section className="tools-section">
  <div className="section-inner">
    <span className="section-tag">Influencer Tiers We Work With</span>
    <h2 className="section-title">The Right Creator for Every Campaign Goal</h2>
    <p className="section-sub">We match brands with the right influencers based on campaign goals, budget, audience fit, and engagement quality-not just follower count.</p>
    <div className="tools-grid">
      <div className="tool-chip"><span className="tool-icon"></span>Nano (1K–10K)</div>
      <div className="tool-chip"><span className="tool-icon">✓¨</span>Micro (10K–100K)</div>
      <div className="tool-chip"><span className="tool-icon">⭐</span>Mid-Tier (100K–500K)</div>
      <div className="tool-chip"><span className="tool-icon"></span>Macro (500K–1M)</div>
      <div className="tool-chip"><span className="tool-icon"></span>Celebrity (1M+)</div>
      <div className="tool-chip"><span className="tool-icon"></span>Food & Lifestyle</div>
      <div className="tool-chip"><span className="tool-icon">💡„</span>Beauty & Fashion</div>
      <div className="tool-chip"><span className="tool-icon"></span>Health & Fitness</div>
      <div className="tool-chip"><span className="tool-icon">✓ˆï¸</span>Travel & Tourism</div>
      <div className="tool-chip"><span className="tool-icon"> </span>Home & DÃ©cor</div>
    </div>
  </div>
</section>

<section className="portfolio-section">
  <div className="section-inner">
    <span className="section-tag">Campaign Highlights</span>
    <h2 className="section-title">Influencer Campaigns That Moved Needles</h2>
    <p className="section-sub">From FMCG launches to D2C product launches, our influencer campaigns deliver authentic reach, meaningful engagement, and measurable results. </p>
    <div className="portfolio-grid">

      <div className="port-card">
        <div className="port-img">
          <img src="/sociapareact/images/nutrela-logo.png" alt="Nutrela Nutrition" className="portfolio-logo" />
        </div>
        <div className="port-info">
          <div className="port-tag">Nutrition · 50 Influencers</div>
          <h4>Nutrela Nutrition Product Launch</h4>
          <p>50 health and fitness influencers promoted Nutrela's nutrition range, generating millions of impressions and strong engagement across Instagram and YouTube.</p>
        </div>
      </div>

      <div className="port-card">
        <div className="port-img">
          <img src="/sociapareact/images/bonnClt.png" alt="Bonn Breads" className="portfolio-logo" />
        </div>
        <div className="port-info">
          <div className="port-tag">Food · 80 Influencers</div>
          <h4>Bonn Breads Freshness Drive</h4>
          <p>80 food bloggers and mom influencers drove a significant increase in brand awareness and engagement through authentic recipe and lifestyle content.</p>
        </div>
      </div>

      <div className="port-card">
        <div className="port-img">
          <img src="/sociapareact/images/pansari200.png" alt="Pansari Group" className="portfolio-logo" />
        </div>
        <div className="port-info">
          <div className="port-tag">FMCG · Ambassador Programme</div>
          <h4>Pansari — Always Fresh</h4>
          <p>Long-term ambassador programme with regional food creators delivering consistent brand storytelling and increased consumer trust across key markets.</p>
        </div>
      </div>

      <div className="port-card">
        <div className="port-img">
          <img src="/sociapareact/images/apisClt.png" alt="APIS India" className="portfolio-logo" />
        </div>
        <div className="port-info">
          <div className="port-tag">Corporate · Brand Advocacy</div>
          <h4>APIS India Brand Campaign</h4>
          <p>Collaborated with business and lifestyle creators to showcase APIS India's products and brand values through authentic social media storytelling and campaign content.</p>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="process-section">
  <div className="section-inner">
    <span className="section-tag">Our Process</span>
    <h2 className="section-title">From Brief to Live in 7 Days</h2>
    <p className="section-sub">A streamlined process that gets your campaign live fast without cutting corners on brand safety or content quality.</p>
    <div className="process-grid">
      <div className="process-step"><div className="step-num">1</div><h4>Campaign Brief</h4><p>Goals, target audience, niche, budget, and content requirements defined</p></div>
      <div className="process-step"><div className="step-num">2</div><h4>Influencer Shortlist</h4><p>Vetted creator recommendations with audience analytics and past performance</p></div>
      <div className="process-step"><div className="step-num">3</div><h4>Outreach & Onboarding</h4><p>Negotiations, contracts, and briefing packs sent to confirmed creators</p></div>
      <div className="process-step"><div className="step-num">4</div><h4>Content Review</h4><p>Draft review, compliance check, brand guideline verification, and approval</p></div>
      <div className="process-step"><div className="step-num">5</div><h4>Campaign Live</h4><p>Coordinated content drops with real-time monitoring and community management</p></div>
      <div className="process-step"><div className="step-num">6</div><h4>Results Report</h4><p>Full post-campaign analytics with EMV, reach, engagement, and conversion data</p></div>
    </div>
  </div>
</section>

<section className="why-section">
  <div className="section-inner">
    <span className="section-tag section-tag-white">Why Sociapa</span>
    <h2 className="section-title">India's Influencer Marketing Specialists</h2>
    <p className="section-sub">Our 2,000+ vetted creator network and category expertise set us apart from generic influencer platforms.</p>
    <div className="why-grid">

      <div className="why-card">
        <div className="w-icon">🔥</div>
        <h4>Authentic Audience Verification</h4>
        <p>We audit every creator for fake followers, engagement quality, and audience fit before recommending them, protecting your brand and marketing budget.</p>
      </div>

      <div className="why-card">
        <div className="w-icon">⚡</div>
        <h4>Full Campaign Management</h4>
        <p>From brief to reporting, one team manages influencer discovery, outreach, contracts, content review, payments, and analytics—eliminating the coordination burden on your team.</p>
      </div>

      <div className="why-card">
        <div className="w-icon">⚡</div>
        <h4>India-Wide Creator Network</h4>
        <p>Regional influencer network across Hindi-speaking markets, South India, metros, and Tier-2 cities for highly targeted location-based campaigns.</p>
      </div>

      <div className="why-card">
        <div className="w-icon">📋</div>
        <h4>Legal & Compliance</h4>
        <p>ASCI-compliant disclosures and secure contracts protect your brand from regulatory risks and content ownership issues.</p>
      </div>

      <div className="why-card">
        <div className="w-icon">📈</div>
        <h4>Performance-Linked Reporting</h4>
        <p>We track EMV, reach, engagement, link clicks, and conversions with clear reporting to show the impact of your influencer investment.</p>
      </div>

      <div className="why-card">
        <div className="w-icon">🤝</div>
        <h4>Long-Term Creator Relationships</h4>
        <p>Strong creator relationships enable faster onboarding, better partnerships, and authentic brand collaborations with influencers.</p>
      </div>

    </div>
  </div>
</section>

<section className="testi-section">
  <div className="section-inner">
    <span className="section-tag">Client Stories</span>
    <h2 className="section-title">Brands That Grew Through Influence</h2>
    <div className="testi-grid">
      <div className="testi-card">
        <div className="stars">★★★★★</div>
        <blockquote>"Sociapa's influencer campaign for our product launch generated more authentic buzz than our paid ads combined. 18M impressions in a month—absolutely remarkable."</blockquote>
        <div className="testi-author"><div className="avatar">NU</div><div><strong>Priyanka Sharma</strong><span>Brand Manager, Nutrela</span></div></div>
      </div>
      <div className="testi-card">
        <div className="stars">★★★★★</div>
        <blockquote>"The creator vetting process gave us complete confidence. Every influencer they recommended was a genuine fit for our audience—no fake followers, no brand misalignment."</blockquote>
        <div className="testi-author"><div className="avatar">BB</div><div><strong>Manish Kapoor</strong><span>Marketing Director, Bonn Breads</span></div></div>
      </div>
      <div className="testi-card">
        <div className="stars">★★★★★</div>
        <blockquote>"Our summer travel campaign with Sociapa brought us 5,000 direct booking enquiries in six weeks. The ROI on influencer marketing has completely changed our media mix."</blockquote>
        <div className="testi-author"><div className="avatar">KT</div><div><strong>Rahul Verma</strong><span>Digital Head, Kesari Tours</span></div></div>
      </div>
    </div>
  </div>
</section>

<section className="faq-section faq-section-padded" id="faq">
  <div className="section-inner">
    <span className="section-tag">FAQ</span>
    <h2 className="section-title">Influencer Marketing <span className="text-brand-red">Questions Answered</span></h2>
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
  </div>
</section>

<section className="cta-section">
  <div className="section-inner section-inner-narrow">
    <h2>Ready to Amplify Your Brand Through Influence?</h2>
    <p>Tell us your goals and we'll propose a creator strategy with shortlisted influencers within 48 hours—no commitment required.</p>
    <a href="/contact" className="btn-primary">Get My Influencer Strategy</a>
  </div>
</section>

<section className="creativeSS">
    <div className="container">
      <div className="row">
          <div className="col s3 center">
               <img src="/sociapareact/images/juhi400.png" alt="Influencer" className="responsive-img" />
          </div>
          <div className="col s3 center">
            <img src="/sociapareact/images/khurana400.jpg" alt="Influencer" className="responsive-img w-100" />
          </div>
          <div className="col s3 center">
           <img src="/sociapareact/images/yem400.jpg" alt="Influencer" className="responsive-img" />
          </div>
          <div className="col s3 center">
            <img src="/sociapareact/images/raksha400.jpg" alt="Influencer" className="responsive-img" />
          </div>
        </div>
        </div>
  </section>
  
        </>
    );
}


