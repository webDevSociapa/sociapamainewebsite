import React, { useEffect, useState } from 'react';
import OtherServicesSlider from '../components/OtherServicesSlider';
import ServiceOurWorkSection from '../components/ServiceOurWorkSection';
import ServiceBehindWorkSection from '../components/ServiceBehindWorkSection';
import ServiceCaseStudiesSlider from '../components/ServiceCaseStudiesSlider';
import { serviceClientSectionsData } from '../data/serviceClientSectionsData';
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
    "a": "<p>Sociapa combines <a href='/creative-designing' class='seo-interlink'>creative strategy</a>, audience targeting, interactive ad formats, and continuous <a href='/best-digital-marketing-services-india' class='seo-interlink'>performance optimization</a> to deliver advertising experiences that capture attention and maximize conversions.</p>"
  },
  {
    "q": "Which ad format is best for my business?",
    "a": "<p>The ideal ad format depends on your marketing objectives. High-impact <a href='/videos' class='seo-interlink'>video ads</a> and rich media build brand awareness, while native and <a href='/best-social-media-marketing-agency-india' class='seo-interlink'>social media ads</a> drive immediate user action. We craft bespoke multi-channel ad formats tailored to your customer acquisition goals.</p>"
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
        <link rel="canonical" href="https://sociapa.com/pay-per-click-ppc-services-india" />
        <meta property="og:title" content="Programmatic Ad Agency for High-Impact Ad Experiences | Sociapa" />
        <meta property="og:description" content="Unlock next-level digital advertising with Sociapa. From rich media and immersive video to native and interstitial formats, we craft programmatic campaigns that engage, convert and amplify your brand’s reach" />
        <meta property="og:url" content="https://sociapa.com/pay-per-click-ppc-services-india" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="SOCIAPA" />
        <meta property="og:image" content="https://www.sociapa.com/images/ad-experience-service-banner.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sociapa" />
        <meta name="twitter:title" content="Programmatic Ad Agency - Sociapa" />
        <meta name="twitter:description" content="Unlock next-level digital advertising with Sociapa. From rich media and immersive video to native and interstitial formats, we craft programmatic campaigns that engage, convert and amplify your brand’s reach" />
        <meta name="twitter:image" content="https://www.sociapa.com/images/ad-experience-service-banner.jpeg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqsData.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.a.replace(/<[^>]*>/g, '')
            }
          }))
        })}</script>
        {/* BreadcrumbList Schema - Required by SOCIAPA (1).docx */}
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.sociapa.com/"},{"@type":"ListItem","position":2,"name":"Services","item":"https://www.sociapa.com/our-services"},{"@type":"ListItem","position":3,"name":"Pay Per Click PPC Services India | Sociapa","item":"https://www.sociapa.com/pay-per-click-ppc-services-india"}]})}</script>
      </Helmet>
      <div className="ad-experience-page">
      <div className="serInsideBnr">
        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
          PPC Management &amp; Performance Ad Experience Services India - Sociapa
        </h1>
        <div className="row">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="/images/ad-experience-service-banner-mobile.jpeg"
            />
            <img
              src="/images/ad-experience-service-banner.jpeg"
              alt="digital banner"
              className="responsive-img w-100"
            />
          </picture>
        </div>
      </div>

      <div className="stats-bar">
        <div className="stats-inner">
          <div className="stat-item"><div className="stat-num">300+</div><div className="stat-label">Ad Campaigns Run</div></div>
          <div className="stat-item"><div className="stat-num">6</div><div className="stat-label">Ad Format Specialists</div></div>
          <div className="stat-item"><div className="stat-num">3.8x</div><div className="stat-label">Average CTR Lift</div></div>
          <div className="stat-item"><div className="stat-num">50+</div><div className="stat-label">Brand Clients</div></div>
        </div>
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
        <img src="/icons/ads-experience/Polygon-Geo-Fencing-Ads.png" alt="Polygon Geo-Fencing Ads" width="50" height="50" />
      </div>
      <h3>Polygon Geo-Fencing Ads</h3>
      <p>Geo-fencing campaigns are our route to achieve the destination of high reach. We aim to trigger users' attention around competitor locations, event venues, and key hotspots, delivering relevant ads the moment they enter the targeted territory.</p>
      <div className="service-tags"><span className="tag">Geo-Fencing</span><span className="tag">Polygon Targeting</span><span className="tag">Location-Based</span></div>
    </div>
    <div className="service-card">
      <div className="service-icon">
        <img src="/icons/ads-experience/Immersive-Video-Ads.png" alt="Immersive Video Ads" width="50" height="50" />
      </div>
      <h3>Immersive Video Ads</h3>
      <p>We aim to create a lasting impression through presenting brand narratives in High-Definition Video Campaigns across mobile and desktop. HD mediums are a visual treat and serve as an immersive experience for the target group to create brand recall.</p>
      <div className="service-tags"><span className="tag">Pre-Roll</span><span className="tag">Mid-Roll</span><span className="tag">YouTube Ads</span><span className="tag">OTT</span></div>
    </div>
    <div className="service-card">
      <div className="service-icon">
        <img src="/icons/ads-experience/Interactive-Rich-Media.png" alt="Interactive Rich Media" width="50" height="50" />
      </div>
      <h3>Interactive Rich Media</h3>
      <p>We make narratives an interactive experience with rich media ads powered by touch and motion-led features. Such interactive mediums make ads a moment etched in memory of users.</p>
      <div className="service-tags"><span className="tag">HTML5 Rich Media</span><span className="tag">Expandable</span><span className="tag">Interstitial</span></div>
    </div>
    <div className="service-card">
      <div className="service-icon">
        <img src="/icons/ads-experience/Native-Ads.png" alt="Native Ads" width="50" height="50" />
      </div>
      <h3>Native Ads</h3>
      <p>Native ads become a part of customers' scrolling experience by seamlessly fitting into websites and apps interfaces. They not only create a smoother browsing experience but engage timely with users for brand remembrance.</p>
      <div className="service-tags"><span className="tag">In-Feed Content</span><span className="tag">Discovery</span><span className="tag">Sponsored Listings</span></div>
    </div>
    <div className="service-card">
      <div className="service-icon">
        <img src="/icons/ads-experience/Experiential-Playful-Ads.png" alt="Experiential Playable Ads" width="50" height="50" />
      </div>
      <h3>Experiential Playable Ads</h3>
      <p>Before clicking the download button or buying a product, it is good to take a trial and we offer this experience to users with playable ads. Playable ads act as a pre-revelation step where users get an overall feel of the product. Once a trust is gained, the brand receives maximum conversions.</p>
      <div className="service-tags"><span className="tag">Playable</span><span className="tag">Interactive</span><span className="tag">App Install</span></div>
    </div>
    <div className="service-card">
      <div className="service-icon">
        <img src="/icons/ads-experience/Dynamic-Carousel-Ads.png" alt="Dynamic Carousel Ads" width="50" height="50" />
      </div>
      <h3>Dynamic Carousel Ads</h3>
      <p>Full screen carousel ads are a storyteller that enable viewers to swipe through brand communication, collections, and product utility. A narrative is built and categorized into each carousel so that the brand message gets delivered to users.</p>
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
            <img src="/icons/ads-experience/Google-Ads.png" alt="Google Ads" />
        </span>
        <span className="tech-name">Google Ads</span>
    </div>

    <div className="tech-chip">
        <span className="tech-icon">
            <img src="/icons/ads-experience/Meta-Ads.png" alt="Meta Ads" />
        </span>
        <span className="tech-name">Meta Ads</span>
    </div>

    <div className="tech-chip">
        <span className="tech-icon">
            <img src="/icons/ads-experience/YouTube-Ads.png" alt="YouTube Ads" />
        </span>
        <span className="tech-name">YouTube Ads</span>
    </div>

    <div className="tech-chip">
        <span className="tech-icon">
            <img src="/icons/ads-experience/Instagram-Ads.png" alt="Instagram Ads" />
        </span>
        <span className="tech-name">Instagram Ads</span>
    </div>

    <div className="tech-chip">
        <span className="tech-icon">
            <img src="/icons/ads-experience/LinkedIn-Ads.png" alt="LinkedIn Ads" />
        </span>
        <span className="tech-name">LinkedIn Ads</span>
    </div>

    <div className="tech-chip">
        <span className="tech-icon">
            <img src="/icons/ads-experience/Programmatic-DSPs.png" alt="Programmatic DSPs" />
        </span>
        <span className="tech-name">Programmatic DSPs</span>
    </div>

    <div className="tech-chip">
        <span className="tech-icon">
            <img src="/icons/ads-experience/Polygon-Geo-Fencing-Ads.png" alt="Geo-Fencing Platforms" />
        </span>
        <span className="tech-name">Geo-Fencing Platforms</span>
    </div>

    <div className="tech-chip">
        <span className="tech-icon">
            <img src="/icons/ads-experience/In-App Networks.png" alt="In-App Networks" />
        </span>
        <span className="tech-name">In-App Networks</span>
    </div>

    <div className="tech-chip">
        <span className="tech-icon">
            <img src="/icons/ads-experience/In-House-Video-Expertise.png" alt="OTT / CTV" />
        </span>
        <span className="tech-name">OTT / CTV</span>
    </div>

    <div className="tech-chip">
        <span className="tech-icon">
            <img src="/icons/ads-experience/Native-Ads.png" alt="Native Ad Networks" />
        </span>
        <span className="tech-name">Native Ad Networks</span>
    </div>

  </div>
</section>

      {/* Portfolio / Our Work Section */}
      <ServiceOurWorkSection
        work={serviceClientSectionsData['ad-experience']?.work}
      />

<section id="process">
  <div className="section-header">
    <span className="section-tag">How We Work</span>
    <h2>Our <span>Campaign Execution</span> Process</h2>
    <div className="divider"></div>
  </div>
  <div className="process-steps">

    <div className="process-step">
        <div className="step-num">
            <img src="/icons/ads-experience/Audience-Brief.png" alt="Audience Brief" width="60" height="60" />
        </div>
        <h3>Audience Brief</h3>
        <p>Define target personas, intent signals, and campaign objectives.</p>
    </div>

    <div className="process-step">
        <div className="step-num">
            <img src="/icons/ads-experience/Platform-Strategy.png" alt="Platform Strategy" width="60" height="60" />
        </div>
        <h3>Platform Strategy</h3>
        <p>Select channels, ad formats, and geo-targeting parameters.</p>
    </div>

    <div className="process-step">
        <div className="step-num">
            <img src="/icons/ads-experience/Creative-Production.png" alt="Creative Production" width="60" height="60" />
        </div>
        <h3>Creative Production</h3>
        <p>Design rich media, video, and static ad assets with A/B variants.</p>
    </div>

    <div className="process-step">
        <div className="step-num">
            <img src="/icons/ads-experience/Campaign-Launch.png" alt="Campaign Launch" width="60" height="60" />
        </div>
        <h3>Campaign Launch</h3>
        <p>Trafficking, tracking setup, and precision bid strategy activation.</p>
    </div>

    <div className="process-step">
        <div className="step-num">
            <img src="/icons/ads-experience/Optimisation.png" alt="Optimisation" width="60" height="60" />
        </div>
        <h3>Optimisation</h3>
        <p>Real-time performance monitoring and creative rotation testing.</p>
    </div>

    <div className="process-step">
        <div className="step-num">
            <img src="/icons/ads-experience/Impact-Report.png" alt="Impact Report" width="60" height="60" />
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
            <img src="/icons/ads-experience/Award-Winning Creatives.png" alt="Compelling Ad Creatives" width="50" height="50" />
        </div>
        <h3>Compelling Ad Creatives</h3>
        <p>Be it mobile screen or desktop interface, we tap customer attention and convert it into buying experience through our compelling ad creatives. Ads are the mediums that carry the brand story and message for lasting recall.</p>
    </div>

    <div className="why-card">
        <div className="why-icon">
            <img src="/icons/ads-experience/Polygon-Geo-Fencing-Ads.png" alt="Proprietary Geo-Fence Tech" width="50" height="50" />
        </div>
        <h3>Proprietary Geo-Fence Tech</h3>
        <p>Go beyond radius targeting with advanced polygon geo-fencing. Deliver highly targeted ads around competitor locations, event venues, and high-intent areas to reach the right audience at the right moment.</p>
    </div>

    <div className="why-card">
        <div className="why-icon">
            <img src="/icons/ads-experience/In-House-Video-Expertise.png" alt="In-House Video Expertise" width="50" height="50" />
        </div>
        <h3>In-House Video Expertise</h3>
        <p>From initial thought to final edit, we weave a story in HD videos that prompt engagement and conversions across all platforms. Be it interactive or immersive, the designed videos communicate the positioning of brands in their respective released territories.</p>
    </div>

    <div className="why-card">
        <div className="why-icon">
            <img src="/icons/ads-experience/Viewability-Guaranteed-Placements.png" alt="Viewability-Guaranteed Placements" width="50" height="50" />
        </div>
        <h3>Viewability-Guaranteed Placements</h3>
        <p>Success of any digital ad is directly proportional to the views. We deploy our spending to the potential sites of visibility for the best user engagement.</p>
    </div>

    <div className="why-card">
        <div className="why-icon">
            <img src="/icons/ads-experience/Real-Time-Optimisation.png" alt="Real-Time Optimisation" width="50" height="50" />
        </div>
        <h3>Real-Time Optimisation</h3>
        <p>Maximise campaign performance with real-time programmatic optimisation. We tap the potential areas of conversion and shift budgets to the best-performing audiences, creatives, and placements to improve efficiency and ROI.</p>
    </div>

    <div className="why-card">
        <div className="why-icon">
            <img src="/icons/ads-experience/Full-Funnel-Coverage.png" alt="Full-Funnel Coverage" width="50" height="50" />
        </div>
        <h3>Full-Funnel Coverage</h3>
        <p>Customers follow a digital journey - from awareness to buying action. We tend to accompany them at every stage with our content that disseminates brand essence and prompts buying action.</p>
    </div>

</div>
</section>

      {/* Behind the Work Section */}
      <ServiceBehindWorkSection
        testimonials={serviceClientSectionsData['ad-experience']?.testimonials}
      />

      {/* Featured Case Studies Slider */}
      <ServiceCaseStudiesSlider />

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

{/* Our Other Services Carousel */}
      <OtherServicesSlider />

      <section id="cta">
  <h2>Ready to <span>Engineer Better Ads?</span></h2>
  <p>Tell us your campaign objectives and we'll design an ad experience strategy that makes your brand impossible to ignore.</p>
  <div className="cta-buttons">
    <a href="mailto:mail@sociapa.com" className="btn-white">Start a Campaign</a>
    <a href="https://wa.me/917011057175" className="btn-outline-white">WhatsApp Us</a>
  </div>
</section>
</div>
    </>
  );
}
