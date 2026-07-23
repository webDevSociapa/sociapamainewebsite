import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './SocialMediaMarketing.css';


const faqsData = [
  {
    "q": "1. Why is Social Media Marketing important for businesses?",
    "a": "<p>Social Media Marketing helps businesses reach a larger audience, engage with customers in real time, increase brand awareness, drive website traffic, and build trust and credibility. It also provides valuable insights into customer preferences and expectations.</p>"
  },
  {
    "q": "2. Which social media platforms are best for marketing?",
    "a": "<p>The right platform depends on your business goals and target audience. Popular platforms for Social Media Marketing include Facebook, Instagram, LinkedIn, Twitter, YouTube, and Pinterest</p>"
  },
  {
    "q": "3. How can Social Media Marketing help increase brand awareness?",
    "a": "<p>Regular posting, engaging content, and consistent interaction with users help businesses reach more people and improve brand visibility. Social media allows brands to share their story and connect with potential customers effectively.</p>"
  },
  {
    "q": "4. Can Social Media Marketing drive traffic to my website?",
    "a": "<p>Yes. Sharing valuable content, business updates, and promotional information on social media encourages users to visit your website, helping increase traffic and potential conversions.</p>"
  },
  {
    "q": "5. What does a Social Media Marketing strategy include?",
    "a": "<p>A Social Media Marketing strategy includes understanding business goals, identifying the target audience, selecting the right platforms, planning content, scheduling posts, and measuring performance through analytics and reporting.</p>"
  },
  {
    "q": "6. Is Social Media Marketing cost-effective?",
    "a": "<p>Yes. Compared to traditional advertising methods, Social Media Marketing can be a more cost-effective way to reach a larger audience while maintaining direct communication with customers.</p>"
  },
  {
    "q": "7. How often should businesses post on social media?",
    "a": "<p>Posting consistently is important for maintaining audience engagement and keeping your brand visible. Regular content updates help businesses stay connected with their audience and strengthen their social media presence.</p>"
  },
  {
    "q": "8. How can Sociapa help with Social Media Marketing?",
    "a": "<p>Sociapa provides complete Social Media Marketing Services, including social media strategy, content planning and publishing, social media analytics and reporting, and social media advertising to help businesses build a strong digital presence and connect with their audience effectively.</p>"
  }
];


export default function SocialMediaMarketing() {
    const [openFaq, setOpenFaq] = useState(null);
    const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            
      <Helmet>
        <title>Sociapa Social Media Marketing services in Noida &amp; Delhi NCR -Explore to grow your brand.</title>
        <meta name="description" content="Social Media Marketing Services in Noida & Delhi NCR, india- Increased Brand Recognition, Loyalty, and Love.Customer Experience & Conversion | Best Digital Marketing Company In Noida & Delhi NCR" />
        <meta name="keywords" content="Social Media Marketing" />
        <link rel="canonical" href="https://www.sociapa.com/social-media-marketing-services/" />
        <meta property="og:title" content="Sociapa Social Media Marketing services in Noida & Delhi NCR -Explore to grow your brand." />
        <meta property="og:description" content="Social Media Marketing Services in Noida & Delhi NCR, india- Increased Brand Recognition, Loyalty, and Love.Customer Experience & Conversion | Best Digital Marketing Company In Noida & Delhi NCR" />
        <meta property="og:url" content="https://www.sociapa.com/social-media-marketing-services/" />
      </Helmet>
<div className="serInsideBnr">
  <div className="row">
    <picture>
        
        <source
            media="(max-width: 767px)"
            srcset="/sociapareact/images/smm-service-banner-mobile.jpeg" />

        
        <img src="/sociapareact/images/smm-service-banner.jpeg" alt="social-media-marketing-banner" className="responsive-img w-100" />
    </picture>
  </div>
</div>
<section className="socialmediamarketing-hero">
  <div className="socialmediamarketing-hero-inner">
    <div>
      <div className="socialmediamarketing-hero-badge">📱 Instagram · Facebook · LinkedIn · X · YouTube</div>
      <h1>Social Media That <em>Builds Communities</em> & Drives Revenue</h1>
      <p className="socialmediamarketing-hero-desc">Sociapa manages social media for 80+ brands across India—from content strategy and creative production to community management and paid social campaigns that convert.</p>
      <div className="socialmediamarketing-hero-btns">
        <a href="/contact" className="btn-primary">Grow My Social Presence</a>
        <a href="/portfolio" className="btn-outline">See Case Studies</a>
      </div>
    </div>
    <div className="socialmediamarketing-hero-visual">
      <img src="/sociapareact/images/smm-left-img.jpeg" alt="smm-left-img" className="socialmediamarketing-hero-img" />  
    
    </div>
  </div>
</section>

<div className="stats-bar">
  <div className="stats-inner">
    <div><span className="stat-num">5M+</span><div className="stat-lbl">Followers Grown for Clients</div></div>
    <div><span className="stat-num">80+</span><div className="stat-lbl">Active Brand Accounts Managed</div></div>
    <div><span className="stat-num">12x</span><div className="stat-lbl">Average Engagement Lift</div></div>
    <div><span className="stat-num">8+</span><div className="stat-lbl">Years Managing Social Media</div></div>
  </div>
</div>

<section className="services-section">
  <div className="section-inner">
    <span className="section-tag">What We Do</span>
    <h2 className="section-title">Full-Service Social Media Management</h2>
    <p className="section-sub">From strategy and content planning to post scheduling, community management, and paid social campaigns, we manage your social media presence end-to-end to increase engagement, grow your audience, and drive meaningful business results. </p>
    <div className="services-grid">
      <div className="svc-card">
        <div className="svc-icon">🗺️</div>
        <h3>Social Media Strategy</h3>
        <p>Build a strong foundation for social media success with data-driven strategy and planning. We develop platform-specific strategies, content pillars, posting calendars, and growth roadmaps tailored to your brand goals, target audience, and market trends-helping you increase engagement, grow your online presence, and achieve measurable results.</p>
        <div className="service-tags"><span>Content Calendar</span><span>Audience Research</span><span>Platform Strategy</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">✍️</div>
        <h3>Content Creation & Copywriting</h3>
        <p>Engage your audience with high-quality, brand-focused content designed to drive visibility and interaction. Our creative team produces compelling social media posts, carousels, reels, stories, and long-form content, all tailored to your brand voice, audience preferences, and marketing objectives.</p>
        <div className="service-tags"><span>Reels</span><span>Carousels</span><span>Stories</span><span>Captions</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">💬</div>
        <h3>Community Management</h3>
        <p>Build stronger customer relationships with proactive community management. We provide daily monitoring, comment moderation, DM management, and online reputation management across all major social platforms, helping you increase engagement, strengthen brand trust, and maintain a positive online presence.</p>
        <div className="service-tags"><span>Comment Moderation</span><span>DM Responses</span><span>Crisis Handling</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">💰</div>
        <h3>Paid Social Advertising</h3>
        <p>Reach the right audience and drive measurable results with targeted social media advertising. We create and manage high-performing Meta Ads, LinkedIn Ads, and YouTube campaigns designed to increase brand awareness, generate qualified leads, and maximise ROAS through continuous optimisation and audience targeting.</p>
        <div className="service-tags"><span>Meta Ads</span><span>LinkedIn Ads</span><span>YouTube Ads</span><span>Retargeting</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">📊</div>
        <h3>Analytics & Monthly Reporting</h3>
        <p>Track your social media performance with detailed monthly reports covering reach, engagement, audience growth, and paid campaign results. We provide clear insights, KPI tracking, and actionable recommendations to continuously improve performance and maximise your marketing ROI.</p>
        <div className="service-tags"><span>Monthly Reports</span><span>Insights</span><span>Competitor Analysis</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">🤝</div>
        <h3>Influencer Collaboration</h3>
        <p>Expand your reach and build brand credibility through strategic influencer partnerships. We identify, vet, and manage micro to macro influencers, creating authentic co-branded content that connects with relevant audiences, increases engagement, and generates valuable social proof.</p>
        <div className="service-tags"><span>Micro Influencers</span><span>Macro Influencers</span><span>Co-Branding</span></div>
      </div>
    </div>
  </div>
</section>

<section className="tools-section">
  <div className="section-inner">
    <span className="section-tag">Platforms & Tools</span>
    <h2 className="section-title">Platforms We Manage & Amplify</h2>
    <p className="section-sub">We manage content and paid campaigns across every major social platform with a certified team and professional scheduling infrastructure.</p>
    <div className="tools-grid">
      <div className="tool-chip"><span className="tool-icon">📸</span>Instagram</div>
      <div className="tool-chip"><span className="tool-icon">👍</span>Facebook</div>
      <div className="tool-chip"><span className="tool-icon">💼</span>LinkedIn</div>
      <div className="tool-chip"><span className="tool-icon">▶️</span>YouTube</div>
      <div className="tool-chip"><span className="tool-icon">🐦</span>X (Twitter)</div>
      <div className="tool-chip"><span className="tool-icon">📌</span>Pinterest</div>
      <div className="tool-chip"><span className="tool-icon">🎵</span>Snapchat</div>
      <div className="tool-chip"><span className="tool-icon">📅</span>Hootsuite</div>
      <div className="tool-chip"><span className="tool-icon">🗓️</span>Buffer</div>
      <div className="tool-chip"><span className="tool-icon">📈</span>Sprout Social</div>
    </div>
  </div>
</section>

<section className="portfolio-section">
  <div className="section-inner">
    <span className="section-tag">Our Work</span>
    <h2 className="section-title">Brands We've Grown on Social</h2>
    <p className="section-sub">Real growth, real communities, real results—across FMCG, food, healthcare, and travel brands.</p>
    <div className="portfolio-grid">
      <div className="port-card">
        <div className="port-img"><span className="ph-icon">🌾</span></div>
        <div className="port-info">
          <div className="port-tag">Instagram + Facebook</div>
          <h4>Pansari Group</h4>
          <p>Grew FMCG brand from 10K to 280K followers in 18 months with recipe-led content and influencer partnerships.</p>
        </div>
      </div>
      <div className="port-card">
        <div className="port-img"><span className="ph-icon">🍞</span></div>
        <div className="port-info">
          <div className="port-tag">Facebook + YouTube</div>
          <h4>Bonn Breads</h4>
          <p>Managed social accounts and YouTube channel—produced 120+ videos and grew page reach by 6x in one year.</p>
        </div>
      </div>
      <div className="port-card">
        <div className="port-img"><span className="ph-icon">💊</span></div>
        <div className="port-info">
          <div className="port-tag">LinkedIn + Instagram</div>
          <h4>APIS India</h4>
          <p>B2B and B2C social strategy for pharmaceutical brand—LinkedIn follower growth of 400% in 12 months.</p>
        </div>
      </div>
      <div className="port-card">
        <div className="port-img"><span className="ph-icon">✈️</span></div>
        <div className="port-info">
          <div className="port-tag">Instagram + Meta Ads</div>
          <h4>Kesari Tours</h4>
          <p>Seasonal social campaigns with Meta Ads integration—delivered 3.2x ROAS on ₹80L annual ad spend.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="process-section">
  <div className="section-inner">
    <span className="section-tag">How We Work</span>
    <h2 className="section-title">Our Social Media Management Process</h2>
    <p className="section-sub">A repeatable monthly rhythm that keeps content consistent, performance improving, and your team always in the loop.</p>
    <div className="process-grid">
      <div className="process-step"><div className="step-num">1</div><h4>Brand & Audience Audit</h4><p>Review current profiles, audience data, and competitive landscape</p></div>
      <div className="process-step"><div className="step-num">2</div><h4>Strategy & Calendar</h4><p>Monthly content plan with pillars, formats, and posting schedule</p></div>
      <div className="process-step"><div className="step-num">3</div><h4>Content Production</h4><p>Creatives, captions, and hashtag sets produced and approved</p></div>
      <div className="process-step"><div className="step-num">4</div><h4>Scheduling & Publishing</h4><p>Optimised-time publishing and real-time community management</p></div>
      <div className="process-step"><div className="step-num">5</div><h4>Paid Amplification</h4><p>Boosting top-performing posts and running targeted paid campaigns</p></div>
      <div className="process-step"><div className="step-num">6</div><h4>Monthly Review</h4><p>Performance report, insights debrief, and next-month planning</p></div>
    </div>
  </div>
</section>

<section className="why-section">
  <div className="section-inner">
    <span className="section-tag section-tag-white">Why Sociapa</span>
    <h2 className="section-title">India's Social Media Agency of Choice</h2>
    <p className="section-sub">We've grown social channels for over 80 brands—here's what makes our approach different.</p>
    <div className="why-grid">
      <div className="why-card"><div className="w-icon">🎯</div><h4>Platform-Specific Expertise</h4><p>Benefit from platform-focused social media specialists who understand the unique algorithms, audience behaviours, and best practices of Instagram, LinkedIn, Facebook, and YouTube. We create tailored strategies for each channel to maximise engagement, reach, and business results.</p></div>
      <div className="why-card"><div className="w-icon">🎨</div><h4>In-House Creative Studio</h4><p>Get high-quality content delivered faster with our in-house creative team. From design and copywriting to video production, everything is managed under one roof, ensuring consistent branding, streamlined workflows, and seamless content delivery.</p></div>
      <div className="why-card"><div className="w-icon">📊</div><h4>Data-Driven Decisions</h4><p>Make smarter marketing decisions with insights backed by real performance data. We analyse audience behaviour, content performance, and engagement trends to identify the formats, topics, and posting times that deliver the best results for your brand.</p></div>
      <div className="why-card"><div className="w-icon">⚡</div><h4>Agile Content Operations</h4><p>Stay relevant with fast, responsive content execution. Our agile content team delivers rapid turnaround for trending topics, real-time events, and crisis communications while maintaining brand consistency, quality, and strategic messaging.</p></div>
      <div className="why-card"><div className="w-icon">🌐</div><h4>Vernacular Content Capability</h4><p>Hindi, English, and regional language content for brands targeting diverse Indian audiences across geographies.</p></div>
      <div className="why-card"><div className="w-icon">🤝</div><h4>Dedicated Account Manager</h4><p>Enjoy seamless communication and strategic support with a dedicated account manager who understands your brand, goals, and priorities. With a single point of contact, you benefit from faster execution, proactive guidance, and a more efficient partnership.</p></div>
    </div>
  </div>
</section>

<section className="testi-section">
  <div className="section-inner">
    <span className="section-tag">Client Stories</span>
    <h2 className="section-title">Brands Winning on Social with Sociapa</h2>
    <div className="testi-grid">
      <div className="testi-card">
        <div className="stars">★★★★★</div>
        <blockquote>"In 18 months, Sociapa took our Instagram from a dormant page to a thriving community of 280,000 followers. The content quality and consistency is unmatched."</blockquote>
        <div className="testi-author"><div className="avatar">PG</div><div><strong>Rohit Agarwal</strong><span>Brand Head, Pansari Group</span></div></div>
      </div>
      <div className="testi-card">
        <div className="stars">★★★★★</div>
        <blockquote>"Our LinkedIn went from 2,000 to 12,000 followers in a year. The B2B content strategy Sociapa built for us generates qualified leads we never expected from social."</blockquote>
        <div className="testi-author"><div className="avatar">AI</div><div><strong>Sunita Khanna</strong><span>Marketing VP, APIS India</span></div></div>
      </div>
      <div className="testi-card">
        <div className="stars">★★★★★</div>
        <blockquote>"3.2x ROAS on our travel campaign spend—the paid social team really understands seasonal spikes and audience targeting for the travel segment."</blockquote>
        <div className="testi-author"><div className="avatar">KT</div><div><strong>Anand Desai</strong><span>Digital Head, Kesari Tours</span></div></div>
      </div>
    </div>
  </div>
</section>

<section className="faq-section faq-section-padded" id="faq">
  <div className="section-inner">
    <span className="section-tag">FAQ</span>
    <h2 className="section-title">Social Media Marketing <span className="text-brand-red">Questions Answered</span></h2>
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
    <h2>Ready to Own Your Social Media Presence?</h2>
    <p>Get a free social media audit and a custom growth strategy for your brand within 48 hours.</p>
    <a href="/contact" className="btn-primary">Get My Free Social Audit</a>
  </div>
</section>

        </>
    );
}
