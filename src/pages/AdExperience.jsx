import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './AdExperience.css';


const faqsData = [
  {
    "q": "What does \"Ad Experience\" mean in digital advertising?",
    "a": "<p>Ad experience refers to how users interact with advertisements across websites, mobile applications, games, and digital platforms. A well-designed ad experience captures attention, encourages engagement, and drives conversions while maintaining a seamless and non-disruptive user journey.</p>"
  },
  {
    "q": "Why is ad experience important for marketing success?",
    "a": "<p>Modern consumers expect relevant, engaging, and non-intrusive advertising experiences. Even highly creative campaigns can underperform if the user experience is poor. Effective ad experiences improve engagement, increase conversions, strengthen brand perception, and maximize advertising return on investment.</p>"
  },
  {
    "q": "How does Sociapa help improve ad experiences?",
    "a": "<p>Sociapa combines creative strategy, audience targeting, interactive ad formats, and continuous performance optimization to deliver advertising experiences that capture attention and encourage meaningful user actions. Our approach focuses on both engagement and measurable business results.</p>"
  },
  {
    "q": "Which ad format is best for my business?",
    "a": "<p>The ideal ad format depends on your marketing objectives. Rich media and interstitial ads are highly effective for brand awareness, playable ads drive user engagement, and native ads provide a seamless user experience. Our team evaluates your goals, audience, and budget to recommend the most effective advertising formats.</p>"
  },
  {
    "q": "Can different ad formats be used together in one campaign?",
    "a": "<p>Yes. Multi-format campaigns often deliver stronger results by engaging users at different stages of the customer journey. Combining native ads, interstitial ads, rich media, and other formats helps maximize reach, engagement, and overall campaign performance.</p>"
  },
  {
    "q": "What are playable ads?",
    "a": "<p>Playable ads allow users to interact with a product, mobile application, or game before downloading or purchasing it. Instead of simply viewing an advertisement, users experience key features firsthand, which often leads to higher engagement and conversion rates.</p>"
  },
  {
    "q": "Can ad experience campaigns be targeted to specific audiences?",
    "a": "<p>Yes. We use advanced audience targeting based on demographics, interests, geographic location, browsing behavior, device type, and user intent. This ensures your advertisements reach the most relevant audience and improve campaign effectiveness.</p>"
  },
  {
    "q": "How quickly can I see results from an ad campaign?",
    "a": "<p>Initial campaign performance can often be measured within a few days of launch. However, continuous optimization, audience refinement, and performance analysis help improve results over time and maximize long-term return on investment.</p>"
  },
  {
    "q": "Why choose Sociapa for ad experience solutions?",
    "a": "<p>Sociapa combines creativity, technology, audience insights, and performance-driven strategies to deliver impactful advertising experiences. Our campaigns are designed to increase engagement, strengthen brand visibility, and generate measurable business growth.</p>"
  },
  {
    "q": "How can I get started with Sociapa's Ad Experience Solutions?",
    "a": "<p>Getting started is simple. We begin by understanding your business goals, target audience, and advertising budget. Our team then recommends the most suitable ad formats and develops a customized strategy focused on increasing engagement, conversions, and return on investment.</p>"
  }
];

export default function AdExperience() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <Helmet>
        <title>Programmatic Ad Agency for High-Impact Ad Experiences | Sociapa</title>
        <meta name="description" content="Unlock next-level digital advertising with Sociapa. From rich media and immersive video to native and interstitial formats, we craft programmatic campaigns that engage, convert and amplify your brand’s reach" />
        <meta name="keywords" content="Ad Experiences" />
        <link rel="canonical" href="https://www.sociapa.com/pay-per-click-ppc-services-india/" />
        <meta property="og:title" content="Programmatic Ad Agency for High-Impact Ad Experiences | Sociapa" />
        <meta property="og:description" content="Unlock next-level digital advertising with Sociapa. From rich media and immersive video to native and interstitial formats, we craft programmatic campaigns that engage, convert and amplify your brand’s reach" />
        <meta property="og:url" content="https://www.sociapa.com/pay-per-click-ppc-services-india/" />
      </Helmet>
<div className="serInsideBnr">
        
  <div className="row">
    <picture>
        
        <source
            media="(max-width: 767px)"
            srcset="/sociapareact/images/ad-experience-service-banner-mobile.jpeg" />

        
        <img src="/sociapareact/images/ad-experience-service-banner.jpeg" alt="digital banner" className="responsive-img w-100" />
    </picture>
  </div>
</div>
<section className="ad-hero">
  <div className="ad-hero-blob hero-blob-1"></div>
  <div className="ad-hero-blob hero-blob-2"></div>
  <div className="ad-hero-content">
    <div className="ad-hero-badge"><span className="ad-hero-badge-dot"></span>Programmatic · PPC · Rich Media · Native</div>
    <h1>Ad Experiences That <span>Stop the Scroll</span></h1>
    <p>We create high-impact display ad campaigns designed to capture attention, boost brand awareness, and drive conversions through strategic targeting, engaging creatives, and continuous optimisation. </p>
    <div className="ad-hero-buttons">
      <a href="#portfolio" className="btn-white">See Our Ad Work</a>
      <a href="mailto:mail@sociapa.com" className="btn-outline-white">Launch a Campaign</a>
    </div>
  </div>
</section>

<div className="stats-bar">
  <div className="stat-item"><div className="stat-num">300+</div><div className="stat-label">Ad Campaigns Run</div></div>
  <div className="stat-item"><div className="stat-num">6</div><div className="stat-label">Ad Format Specialists</div></div>
  <div className="stat-item"><div className="stat-num">3.8x</div><div className="stat-label">Average CTR Lift</div></div>
  <div className="stat-item"><div className="stat-num">50+</div><div className="stat-label">Brand Clients</div></div>
</div>

<section id="services" className="pub-section-light">
  <div className="section-header">
    <span className="section-tag">Ad Formats</span>
    <h2>Every Format. <span>Every Screen.</span></h2>
    <div className="divider"></div>
    <p className="section-sub seo-sub-top">We design and deploy ad experiences built for engagement, recall, and conversion.</p>
  </div>
  <div className="services-grid">
    <div className="service-card">
      <div className="service-icon">
        <img src="/sociapareact/icons/ads-experience/Polygon-Geo-Fencing-Ads.png" alt="Polygon Geo-Fencing Ads" width="50" height="50" />
      </div>
      <h3>Polygon Geo-Fencing Ads</h3>
      <p>Reach high-intent audiences with precision geo-fencing campaigns. We target users around competitor locations, event venues, and key hotspots, delivering relevant ads the moment they enter your defined area. </p>
      <div className="service-tags"><span className="tag">Geo-Fencing</span><span className="tag">Polygon Targeting</span><span className="tag">Location-Based</span></div>
    </div>
    <div className="service-card">
      <div className="service-icon">
        <img src="/sociapareact/icons/ads-experience/Immersive-Video-Ads.png" alt="Immersive Video Ads" width="50" height="50" />
      </div>
      <h3>Immersive Video Ads</h3>
      <p>Capture attention with high-quality video display ads optimised for engagement, viewability, and completion rates. We deliver seamless HD video campaigns across mobile and desktop to increase brand awareness, recall, and conversions.</p>
      <div className="service-tags"><span className="tag">Pre-Roll</span><span className="tag">Mid-Roll</span><span className="tag">YouTube Ads</span><span className="tag">OTT</span></div>
    </div>
    <div className="service-card">
      <div className="service-icon">
        <img src="/sociapareact/icons/ads-experience/Interactive-Rich-Media.png" alt="Interactive Rich Media" width="50" height="50" />
      </div>
      <h3>Interactive Rich Media</h3>
      <p>Create immersive brand experiences with interactive rich media ads powered by touch, motion, and device features. Designed to boost engagement, increase brand recall, and drive higher interaction than traditional display ads. </p>
      <div className="service-tags"><span className="tag">HTML5 Rich Media</span><span className="tag">Expandable</span><span className="tag">Interstitial</span></div>
    </div>
    <div className="service-card">
      <div className="service-icon">
        <img src="/sociapareact/icons/ads-experience/Native-Ads.png" alt="Native Ads" width="50" height="50" />
      </div>
      <h3>Native Ads</h3>
      <p>Deliver non-intrusive ads that blend naturally with website and app content. Our native advertising campaigns increase engagement, improve user experience, and drive higher click-through rates through contextually relevant placements. </p>
      <div className="service-tags"><span className="tag">In-Feed</span><span className="tag">Content Discovery</span><span className="tag">Sponsored Listings</span></div>
    </div>
    <div className="service-card">
      <div className="service-icon">
        <img src="/sociapareact/icons/ads-experience/Experiential-Playful-Ads.png" alt="Experiential Playable Ads" width="50" height="50" />
      </div>
      <h3>Experiential Playable Ads</h3>
      <p>Boost engagement with interactive playable ads that let users experience your app or product before they download or purchase. These immersive ad formats drive high-intent installs, increase conversions, improve eCPMs, and create memorable brand experiences. </p>
      <div className="service-tags"><span className="tag">Playable</span><span className="tag">Interactive</span><span className="tag">App Install</span></div>
    </div>
    <div className="service-card">
      <div className="service-icon">
        <img src="/sociapareact/icons/ads-experience/Dynamic-Carousel-Ads.png" alt="Dynamic Carousel Ads" width="50" height="50" />
      </div>
      <h3>Dynamic Carousel Ads</h3>
      <p>Showcase your products, collections, or brand story with immersive full-screen carousel ads. Designed to encourage discovery and engagement, these swipeable experiences drive higher interaction, increase product visibility, and boost conversions. </p>
      <div className="service-tags"><span className="tag">Carousel</span><span className="tag">Product Showcase</span><span className="tag">Meta &amp; Google</span></div>
    </div>
  </div>
</section>

<section id="tools">
  <div className="section-header">
    <span className="section-tag">Platforms</span>
    <h2>Where We <span>Place Your Ads</span></h2>
    <div className="divider"></div>
    <p className="section-sub seo-sub-top">Reaching your audience wherever they spend their time online.</p>
  </div>
  <div className="tech-grid">

    <div className="tech-chip">
        <span className="tech-icon">
            <img src="/sociapareact/icons/ads-experience/Google-Ads.png" alt="Google Ads" width="70" height="70" />
        </span>
        <span>Google Ads</span>
    </div>

    <div className="tech-chip">
        <span className="tech-icon">
            <img src="/sociapareact/icons/ads-experience/Meta-Ads.png" alt="Meta Ads" width="70" height="70" />
        </span>
        <span>Meta Ads</span>
    </div>

    <div className="tech-chip">
        <span className="tech-icon">
            <img src="/sociapareact/icons/ads-experience/YouTube-Ads.png" alt="YouTube Ads" width="70" height="70" />
        </span>
        <span>YouTube Ads</span>
    </div>

    <div className="tech-chip">
        <span className="tech-icon">
            <img src="/sociapareact/icons/ads-experience/Instagram-Ads.png" alt="Instagram Ads" width="70" height="70" />
        </span>
        <span>Instagram Ads</span>
    </div>

    <div className="tech-chip">
        <span className="tech-icon">
            <img src="/sociapareact/icons/ads-experience/LinkedIn-Ads.png" alt="LinkedIn Ads" width="70" height="70" />
        </span>
        <span>LinkedIn Ads</span>
    </div>

    <div className="tech-chip">
        <span className="tech-icon">
            <img src="/sociapareact/icons/ads-experience/Programmatic-DSPs.png" alt="Programmatic DSPs" width="60" height="60" />
        </span>
        <span>Programmatic DSPs</span>
    </div>

    <div className="tech-chip">
        <span className="tech-icon">
            <img src="/sociapareact/icons/ads-experience/Polygon-Geo-Fencing-Ads.png" alt="Geo-Fencing Platforms" width="60" height="60" />
        </span>
        <span>Geo-Fencing Platforms</span>
    </div>

    <div className="tech-chip">
        <span className="tech-icon">
            <img src="/sociapareact/icons/ads-experience/In-App Networks.png" alt="In-App Networks" width="60" height="60" />
        </span>
        <span>In-App Networks</span>
    </div>

    <div className="tech-chip">
        <span className="tech-icon">
            <img src="/sociapareact/icons/ads-experience/In-House-Video-Expertise.png" alt="OTT / CTV" width="60" height="60" />
        </span>
        <span>OTT / CTV</span>
    </div>

    <div className="tech-chip">
        <span className="tech-icon">
            <img src="/sociapareact/icons/ads-experience/Native-Ads.png" alt="Native Ad Networks" width="60" height="60" />
        </span>
        <span>Native Ad Networks</span>
    </div>

</div>
</section>

<section id="portfolio" className="pub-section-light">
  <div className="section-header">
    <span className="section-tag">Our Work</span>
    <h2>Ad Campaigns <span>That Delivered</span></h2>
    <div className="divider"></div>
    <p className="section-sub seo-sub-top">From awareness to conversion — campaigns built for every objective.</p>
  </div>
  
  <div className="projects-grid">

  <div className="project-card">
    <div className="project-preview project-preview-rel">
      <img src="/sociapareact/images/pansari950x500.png" alt="Pansari Group Campaign" className="project-img" />
      <span className="project-badge">FMCG · Geo-Fence</span>
      <div className="project-overlay"><a href="#">➔ View Campaign</a></div>
    </div>
    <div className="project-info">
      <h3>Pansari Group</h3>
      <p>Executed lead generation campaigns for Pansari Epicure that delivered qualified leads through strategic audience targeting, compelling creatives, and continuous campaign optimisation.</p>
      <div className="project-meta">
        <span className="tag">Geo-Fencing</span>
        <span className="tag">FMCG</span>
      </div>
    </div>
  </div>

  <div className="project-card">
    <div className="project-preview project-preview-rel">
      <img src="/sociapareact/images/bonn950x500.png" alt="Bonn Breads Campaign" className="project-img" />
      <span className="project-badge">Fashion · Video</span>
      <div className="project-overlay"><a href="#">➔ View Campaign</a></div>
    </div>
    <div className="project-info">
      <h3>Bonn Breads</h3>
      <p>Planned and managed brand awareness and engagement campaigns for Bonn Group, driving sustained social media growth and stronger audience engagement.</p>
      <div className="project-meta">
        <span className="tag">Video Ads</span>
        <span className="tag">YouTube</span>
      </div>
    </div>
  </div>

  <div className="project-card">
    <div className="project-preview project-preview-rel">
      <img src="/sociapareact/images/nutrela950x500.png" alt="Nutrela Nutrition Campaign" className="project-img" />
      <span className="project-badge">Health · Rich Media</span>
      <div className="project-overlay"><a href="#">➔ View Campaign</a></div>
    </div>
    <div className="project-info">
      <h3>Nutrela Nutrition</h3>
      <p>Scaled Nutrela's social media presence through engagement campaigns, growing Instagram from 8,000 to 50,000+ followers while driving YouTube close to the 100,000-subscriber milestone.</p>
      <div className="project-meta">
        <span className="tag">Rich Media</span>
        <span className="tag">Carousel</span>
      </div>
    </div>
  </div>

  <div className="project-card">
    <div className="project-preview project-preview-rel">
      <img src="/sociapareact/images/zone950x500.png" alt="Zone Campaign" className="project-img" />
      <span className="project-badge">Lifestyle · Native</span>
      <div className="project-overlay"><a href="#">➔ View Campaign</a></div>
    </div>
    <div className="project-info">
      <h3>Zone</h3>
      <p>Native in-feed ads across publishers — 42% lower CPA vs. display campaigns</p>
      <div className="project-meta">
        <span className="tag">Native Ads</span>
        <span className="tag">Travel</span>
      </div>
    </div>
  </div>

</div>
</section>

<section id="process">
  <div className="section-header">
    <span className="section-tag">How We Work</span>
    <h2>Our <span>Campaign Execution</span> Process</h2>
    <div className="divider"></div>
  </div>
  <div className="process-steps">

    <div className="process-step">
        <div className="step-num">
            <img src="/sociapareact/icons/ads-experience/Audience-Brief.png" alt="Audience Brief" width="60" height="60" />
        </div>
        <h3>Audience Brief</h3>
        <p>Define target personas, intent signals, and campaign objectives.</p>
    </div>

    <div className="process-step">
        <div className="step-num">
            <img src="/sociapareact/icons/ads-experience/Platform-Strategy.png" alt="Platform Strategy" width="60" height="60" />
        </div>
        <h3>Platform Strategy</h3>
        <p>Select channels, ad formats, and geo-targeting parameters.</p>
    </div>

    <div className="process-step">
        <div className="step-num">
            <img src="/sociapareact/icons/ads-experience/Creative-Production.png" alt="Creative Production" width="60" height="60" />
        </div>
        <h3>Creative Production</h3>
        <p>Design rich media, video, and static ad assets with A/B variants.</p>
    </div>

    <div className="process-step">
        <div className="step-num">
            <img src="/sociapareact/icons/ads-experience/Campaign-Launch.png" alt="Campaign Launch" width="60" height="60" />
        </div>
        <h3>Campaign Launch</h3>
        <p>Trafficking, tracking setup, and precision bid strategy activation.</p>
    </div>

    <div className="process-step">
        <div className="step-num">
            <img src="/sociapareact/icons/ads-experience/Optimisation.png" alt="Optimisation" width="60" height="60" />
        </div>
        <h3>Optimisation</h3>
        <p>Real-time performance monitoring and creative rotation testing.</p>
    </div>

    <div className="process-step">
        <div className="step-num">
            <img src="/sociapareact/icons/ads-experience/Impact-Report.png" alt="Impact Report" width="60" height="60" />
        </div>
        <h3>Impact Report</h3>
        <p>Full attribution reporting with viewability, engagement, and conversion data.</p>
    </div>

</div>
</section>

<section id="why">
  <div className="section-header">
    <span className="section-tag">Why Sociapa</span>
    <h2>What Sets Us <span>Apart</span></h2>
    <div className="divider divider-alpha-white"></div>
    <p className="section-sub seo-sub-top">We don't just place ads — we engineer experiences that earn attention.</p>
  </div>
  <div className="why-grid">

    <div className="why-card">
        <div className="why-icon">
            <img src="/sociapareact/icons/ads-experience/Award-Winning Creatives.png" alt="Award-Winning Creatives" width="50" height="50" />
        </div>
        <h3>Award-Winning Creatives</h3>
        <p>Our award-winning rich media ad formats are designed to maximise engagement, boost brand recall, and deliver measurable results across mobile, desktop, and connected devices.</p>
    </div>

    <div className="why-card">
        <div className="why-icon">
            <img src="/sociapareact/icons/ads-experience/Polygon-Geo-Fencing-Ads.png" alt="Proprietary Geo-Fence Tech" width="50" height="50" />
        </div>
        <h3>Proprietary Geo-Fence Tech</h3>
        <p>Go beyond radius targeting with advanced polygon geo-fencing. Deliver highly targeted ads around competitor locations, event venues, and high-intent areas to reach the right audience at the right moment.</p>
    </div>

    <div className="why-card">
        <div className="why-icon">
            <img src="/sociapareact/icons/ads-experience/In-House-Video-Expertise.png" alt="In-House Video Expertise" width="50" height="50" />
        </div>
        <h3>In-House Video Expertise</h3>
        <p>From concept to final edit, our team creates high-quality video content tailored for every platform. We produce engaging, ad-ready videos designed to maximise views, engagement, and conversions.</p>
    </div>

    <div className="why-card">
        <div className="why-icon">
            <img src="/sociapareact/icons/ads-experience/Viewability-Guaranteed-Placements.png" alt="Viewability Guaranteed Placements" width="50" height="50" />
        </div>
        <h3>Viewability-Guaranteed Placements</h3>
        <p>Maximise your ad spend with premium, high-viewability inventory. We place your ads where real users will see them, improving visibility, engagement, and campaign performance.</p>
    </div>

    <div className="why-card">
        <div className="why-icon">
            <img src="/sociapareact/icons/ads-experience/Real-Time-Optimisation.png" alt="Real-Time Optimisation" width="50" height="50" />
        </div>
        <h3>Real-Time Optimisation</h3>
        <p>Maximise campaign performance with real-time programmatic optimisation. We automatically shift budgets to the best-performing audiences, creatives, and placements to improve efficiency, ROI, and conversions.</p>
    </div>

    <div className="why-card">
        <div className="why-icon">
            <img src="/sociapareact/icons/ads-experience/Full-Funnel-Coverage.png" alt="Full-Funnel Coverage" width="50" height="50" />
        </div>
        <h3>Full-Funnel Coverage</h3>
        <p>Reach customers at every stage of the buyer journey with tailored ad formats—from awareness-driving video campaigns to high-converting retargeting ads that increase engagement and conversions.</p>
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
    <div className="testimonial-card"><div className="stars">★★★★★</div><blockquote>“Working with the team has been a great experience. Their strategic approach to performance marketing and creative execution helped us improve our online presence and drive measurable business growth. They were proactive, transparent, and consistently optimized campaigns to maximize results. We appreciate their commitment to delivering quality work and would highly recommend them to any brand looking to scale digitally.”</blockquote><div className="testimonial-author"><div className="author-avatar">TP</div><div><div className="author-name">Team Pansari</div><div className="author-title">FMCG Brand, Delhi NCR</div></div></div></div>
    <div className="testimonial-card"><div className="stars">★★★★★</div><blockquote>“Partnering with the team has been a valuable experience. Their data-driven marketing strategies, creative campaigns, and consistent optimization helped us strengthen our digital presence and engage our target audience more effectively. Their professionalism, responsiveness, and focus on delivering measurable results made them a reliable growth partner. We look forward to continuing our collaboration.”</blockquote><div className="testimonial-author"><div className="author-avatar">NN</div><div><div className="author-name">Team Nutrela Nutrition</div><div className="author-title">Health &amp; Nutrition Brand</div></div></div></div>
    <div className="testimonial-card"><div className="stars">★★★★★</div><blockquote>“Working with the team has been an excellent experience. Their strategic approach to digital marketing, creative execution, and performance-focused campaigns helped us strengthen our online presence and connect with a wider audience. Their responsiveness, transparency, and commitment to delivering measurable results made them a trusted marketing partner. We appreciate their dedication and look forward to achieving more milestones together.”</blockquote><div className="testimonial-author"><div className="author-avatar">TB</div><div><div className="author-name">Team Bonn Group</div><div className="author-title">Travel &amp; Lifestyle Brand</div></div></div></div>
  </div>
</section>

<section className="faq-section faq-section-padded" id="faq">
  <div className="section-inner">
    <span className="section-tag">FAQ</span>
    <h2 className="section-title">Ad Experience <span className="text-brand-red">Questions Answered</span></h2>
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

<section id="cta">
  <h2>Ready to <span>Engineer Better Ads?</span></h2>
  <p>Tell us your campaign objectives and we'll design an ad experience strategy that makes your brand impossible to ignore.</p>
  <div className="cta-buttons">
    <a href="mailto:mail@sociapa.com" className="btn-white">Start a Campaign</a>
    <a href="https://wa.me/8375828920" className="btn-outline-white">WhatsApp Us</a>
  </div>
</section>

    </>
  );
}


