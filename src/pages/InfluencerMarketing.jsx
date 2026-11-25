import React, { useState, useEffect } from 'react';
import ServiceOurWorkSection from '../components/ServiceOurWorkSection';
import ServiceBehindWorkSection from '../components/ServiceBehindWorkSection';
import ServiceCaseStudiesSlider from '../components/ServiceCaseStudiesSlider';
import { serviceClientSectionsData } from '../data/serviceClientSectionsData';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
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
    "a": "<p>Yes. Influencer campaigns can drive brand awareness, <a href='/best-web-development-agency-india' class='seo-interlink'>website traffic</a>, lead generation, and sales when aligned with targeted <a href='/best-social-media-marketing-agency-india' class='seo-interlink'>social media marketing</a> and conversion funnels.</p>"
  },
  {
    "q": "Which businesses can benefit from influencer marketing?",
    "a": "<p>Influencer marketing works well for D2C e-commerce brands, fashion, beauty, food, and lifestyle products, especially when paired with viral <a href='/product-unboxing-experience' class='seo-interlink'>unboxing experiences</a> and premium <a href='/best-packaging-design-agency-india' class='seo-interlink'>packaging design</a>.</p>"
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
    "a": "<p>We offer creator discovery via our <a href='/influencers-marketplace' class='seo-interlink'>influencer marketplace</a>, campaign planning, outreach, <a href='/videos' class='seo-interlink'>video production</a>, content strategy, performance tracking, and ROI reporting.</p>"
  }
];


export default function InfluencerMarketing() {
  const base = import.meta.env.BASE_URL || '/';
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
        <link rel="canonical" href="https://sociapa.com/influencer-marketing-services" />
        <meta property="og:title" content="Top Influencer Marketing Company in Noida & Delhi NCR, India – Sociapa" />
        <meta property="og:description" content="Influencer Agency Delhi - Sociapa is among the top influencer marketing companies in Noida. Sociapa makes it possible for you to positively and appropriately connect with your target audience. Build your brand by working with creators, bloggers, and social media influencers." />
        <meta property="og:url" content="https://sociapa.com/influencer-marketing-services" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="SOCIAPA" />
        <meta property="og:image" content="https://www.sociapa.com/images/services/Influencer-Marketing.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sociapa" />
        <meta name="twitter:title" content="Influencer Marketing Services in India - Sociapa" />
        <meta name="twitter:description" content="Influencer Agency Delhi - Sociapa is among the top influencer marketing companies in Noida. Sociapa makes it possible for you to positively and appropriately connect with your target audience. Build your brand by working with creators, bloggers, and social media influencers." />
        <meta name="twitter:image" content="https://www.sociapa.com/images/services/Influencer-Marketing.jpg" />
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
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.sociapa.com/"},{"@type":"ListItem","position":2,"name":"Services","item":"https://www.sociapa.com/our-services"},{"@type":"ListItem","position":3,"name":"Influencer Marketing Services India | Sociapa","item":"https://www.sociapa.com/influencer-marketing-services"}]})}</script>
      </Helmet>
      <div className="influencer-marketing-page">
        <div className="serInsideBnr">
        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
          Influencer Marketing Agency &amp; Creator Management Services India - Sociapa
        </h1>
        <div className="row">
          <picture>
            <img src={`${import.meta.env.BASE_URL}images/banners/influncer/influencer.webp`} alt="Influencer Marketing Services Banner" className="responsive-img w-100" />
          </picture>
        </div>
      </div>



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
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/influncer_market/Influencer Discovery & Vetting.png`}
                  alt="Influencer Discovery & Vetting"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h3>Influencer Discovery & Vetting</h3>
              <p>AI-assisted search and manual vetting to identify creators by niche, audience demographics, engagement quality, and brand safety. </p>
              <div className="service-tags"><span>Nano</span><span>Micro</span><span>Macro</span><span>Celebrity</span><span>Niche</span></div>
            </div>
            <div className="svc-card">
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/influncer_market/Campaign Strategy.png`}
                  alt="Campaign Strategy"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h3>Campaign Strategy</h3>
              <p>Campaign strategy covering objectives, creator selection, content formats, timelines, and KPIs before influencer onboarding. </p>
              <div className="service-tags"><span>Campaign Brief</span><span>Creator Mix</span><span>KPI Setting</span></div>
            </div>
            <div className="svc-card">
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/influncer_market/Creator Outreach & Negotiations.png`}
                  alt="Creator Outreach & Negotiations"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h3>Creator Outreach & Negotiations</h3>
              <p>We manage influencer outreach, negotiations, contracts, and payments, ensuring smooth campaign execution and brand protection. </p>
              <div className="service-tags"><span>Outreach</span><span>Contracts</span><span>Payments</span><span>Negotiations</span></div>
            </div>
            <div className="svc-card">
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/influncer_market/Content Review & Approval.png`}
                  alt="Content Review & Approval"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h3>Content Review & Approval</h3>
              <p>Structured content review with brand guideline checks, disclosure compliance, and approval before every post goes live. </p>
              <div className="service-tags"><span>Brand Review</span><span>Disclosure</span><span>Quality Control</span></div>
            </div>
            <div className="svc-card">
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/influncer_market/Performance Tracking & Reporting.png`}
                  alt="Performance Tracking & Reporting"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h3>Performance Tracking & Reporting</h3>
              <p>Post-campaign reports covering reach, impressions, engagement, EMV, link clicks, conversions, and actionable performance insights. </p>
              <div className="service-tags"><span>EMV Tracking</span><span>Engagement</span><span>Conversion</span><span>Reporting</span></div>
            </div>
            <div className="svc-card">
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/influncer_market/Brand Ambassador Programmes.png`}
                  alt="Brand Ambassador Programmes"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
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
          <p className="section-sub">We match brands with the right influencers based on campaign goals, budget, audience fit, and engagement quality—not just follower count.</p>
          <div className="tools-grid">
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/influncer_market/Nano (1K–10K).png`}
                  alt="Nano (1K–10K)"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </span>
              <span>Nano (1K–10K)</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/influncer_market/Micro (10K–100K).png`}
                  alt="Micro (10K–100K)"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </span>
              <span>Micro (10K–100K)</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/influncer_market/Mid-Tier (100K–500K).png`}
                  alt="Mid-Tier (100K–500K)"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </span>
              <span>Mid-Tier (100K–500K)</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/influncer_market/Macro (500K–1M).png`}
                  alt="Macro (500K–1M)"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </span>
              <span>Macro (500K–1M)</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/influncer_market/Celebrity (1M+).png`}
                  alt="Celebrity (1M+)"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </span>
              <span>Celebrity (1M+)</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/influncer_market/Food & Lifestyle.png`}
                  alt="Food & Lifestyle"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </span>
              <span>Food & Lifestyle</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/influncer_market/Beauty & Fashion.png`}
                  alt="Beauty & Fashion"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </span>
              <span>Beauty & Fashion</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/influncer_market/Health & Fitness.png`}
                  alt="Health & Fitness"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </span>
              <span>Health & Fitness</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/influncer_market/Travel & Tourism.png`}
                  alt="Travel & Tourism"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </span>
              <span>Travel & Tourism</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/influncer_market/Home & Décor.png`}
                  alt="Home & Décor"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </span>
              <span>Home & Décor</span>
            </div>
          </div>
        </div>
      </section>

            {/* Portfolio / Our Work Section */}
      <ServiceOurWorkSection
        work={serviceClientSectionsData['influencer-marketing']?.work}
      />

      <section className="process-section">
        <div className="section-inner">
          <span className="section-tag">Our Process</span>
          <h2 className="section-title">From Brief to Live in 7 Days</h2>
          <p className="section-sub">A streamlined process that gets your campaign live fast without cutting corners on brand safety or content quality.</p>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/influncer_market/Campaign Brief.png`}
                  alt="Campaign Brief"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h4>Campaign Brief</h4>
              <p>Goals, target audience, niche, budget, and content requirements defined</p>
            </div>
            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/influncer_market/Influencer Shortlist.png`}
                  alt="Influencer Shortlist"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h4>Influencer Shortlist</h4>
              <p>Vetted creator recommendations with audience analytics and past performance</p>
            </div>
            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/influncer_market/Outreach & Onboarding.png`}
                  alt="Outreach & Onboarding"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h4>Outreach & Onboarding</h4>
              <p>Negotiations, contracts, and briefing packs sent to confirmed creators</p>
            </div>
            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/influncer_market/Content Review.png`}
                  alt="Content Review"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h4>Content Review</h4>
              <p>Draft review, compliance check, brand guideline verification, and approval</p>
            </div>
            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/influncer_market/Campaign Live.png`}
                  alt="Publish & Monitor"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h4>Publish & Monitor</h4>
              <p>Coordinated posting times, tag verification, and live engagement tracking</p>
            </div>
            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/influncer_market/Results Report.png`}
                  alt="Analytics & Debrief"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h4>Analytics & Debrief</h4>
              <p>Detailed performance report with reach, engagement, EMV, and ROI metrics</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="section-inner">
          <span className="section-tag section-tag-white">Why Choose Sociapa</span>
          <h2 className="section-title">Influencer Marketing Built on Data, Not Guesswork</h2>
          <p className="section-sub">We combine creative strategy with rigorous creator vetting and performance analytics to deliver influencer campaigns that produce real ROI. </p>
          <div className="why-grid">
            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/influncer_market/India-Wide Creator Network.png`}
                  alt="Vetted Creator Network"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h4>Vetted Creator Network</h4>
              <p>Every influencer in our network is audited for fake followers, audience authenticity, engagement rate, and brand affinity before being recommended.</p>
            </div>

            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/influncer_market/Authentic Audience Verification.png`}
                  alt="Creative Direction & Briefing"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h4>Creative Direction & Briefing</h4>
              <p>We craft detailed creative briefs that give influencers freedom to speak authentically while ensuring your brand message is communicated effectively.</p>
            </div>

            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/influncer_market/Full Campaign Management.png`}
                  alt="Fast Campaign Turnaround"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h4>Fast Campaign Turnaround</h4>
              <p>From final shortlisting to first live post in as few as 7 business days, supported by dedicated campaign managers.</p>
            </div>

            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/influncer_market/Legal & Compliance.png`}
                  alt="Legal & Compliance"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h4>Legal & Compliance</h4>
              <p>ASCI-compliant disclosures and secure contracts protect your brand from regulatory risks and content ownership issues.</p>
            </div>

            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/influncer_market/Performance-Linked Reporting.png`}
                  alt="Performance-Linked Reporting"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h4>Performance-Linked Reporting</h4>
              <p>We track EMV, reach, engagement, link clicks, and conversions with clear reporting to show the impact of your influencer investment.</p>
            </div>
            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/influncer_market/Long-Term Creator Relationships.png`}
                  alt="Long-Term Creator Relationships"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h4>Long-Term Creator Relationships</h4>
              <p>Strong creator relationships enable faster onboarding, better partnerships, and authentic brand collaborations with influencers.</p>
            </div>
          </div>
        </div>
      </section>

            {/* Behind the Work Section */}
      <ServiceBehindWorkSection
        testimonials={serviceClientSectionsData['influencer-marketing']?.testimonials}
      />

      {/* Featured Case Studies Slider */}
      <ServiceCaseStudiesSlider />

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
          <Link to="/contact-us" className="btn-primary">Get My Influencer Strategy</Link>
        </div>
      </section>

      <section className="creativeSS">
        <div className="container">
          <div className="row">
            <div className="col s3 center">
              <img src={`${base}images/juhi400.png`} alt="Influencer" className="responsive-img" />
            </div>
            <div className="col s3 center">
              <img src={`${base}images/khurana400.jpg`} alt="Influencer" className="responsive-img w-100" />
            </div>
            <div className="col s3 center">
              <img src={`${base}images/yem400.jpg`} alt="Influencer" className="responsive-img" />
            </div>
            <div className="col s3 center">
              <img src={`${base}images/raksha400.jpg`} alt="Influencer" className="responsive-img" />
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}


