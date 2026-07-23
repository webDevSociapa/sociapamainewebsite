import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './VideoProduction.css';


const faqsData = [
  {
    "q": "What video production services does Sociapa offer?",
    "a": "<p>We provide TV commercials, ad films, corporate films, digital films, web series, social media videos, interview programs, training videos, documentaries, animated videos, testimonial shoots, chat shows, and explainer videos. From concept development and scripting to filming, editing, animation, and final delivery, our team manages the complete production process.</p>"
  },
  {
    "q": "Why is video content important for businesses?",
    "a": "<p>Video is one of the most engaging forms of communication. It helps businesses increase brand awareness, explain products and services, build trust with customers, improve engagement, and communicate messages more effectively across digital and traditional marketing channels.</p>"
  },
  {
    "q": "Which type of video is best for my business?",
    "a": "<p>The ideal video depends on your business goals. Corporate films build credibility, ad films increase brand awareness, explainer videos simplify complex products or services, testimonial videos build trust, and short-form social media videos boost engagement and reach.</p>"
  },
  {
    "q": "Can video marketing help generate leads and sales?",
    "a": "<p>Yes. Professionally produced videos can increase online visibility, capture audience attention, strengthen brand trust, improve engagement, and encourage viewers to take action, ultimately helping generate more qualified leads and conversions.</p>"
  },
  {
    "q": "How can ad films help my brand?",
    "a": "<p>Ad films communicate your brand message through compelling storytelling and high-quality visuals. They improve brand recall, create emotional connections with audiences, and help businesses stand out in competitive markets across both digital and traditional media.</p>"
  },
  {
    "q": "Can ad films be used on digital platforms?",
    "a": "<p>Absolutely. Ad films can be optimised for television, YouTube, websites, Instagram Reels, Facebook, LinkedIn, OTT platforms, and paid digital advertising campaigns, ensuring maximum reach from a single production.</p>"
  },
  {
    "q": "What is a corporate film?",
    "a": "<p>A corporate film is a professionally produced video that showcases a company's story, values, products, services, achievements, culture, and operations. It is commonly used for branding, investor presentations, recruitment, training, and corporate communications.</p>"
  },
  {
    "q": "Can short-form videos improve engagement?",
    "a": "<p>Yes. Short-form videos are highly effective for increasing reach, audience retention, and engagement on platforms like Instagram Reels, YouTube Shorts, and Facebook. They deliver quick, impactful messages that encourage viewers to interact and share.</p>"
  },
  {
    "q": "What is the difference between 2D and 3D animation?",
    "a": "<p>2D animation uses flat illustrations and motion graphics to explain concepts in a simple, engaging way. 3D animation creates realistic depth, textures, and lifelike visual experiences, making it ideal for product visualisation, architecture, manufacturing, and premium brand storytelling.</p>"
  },
  {
    "q": "Why choose Sociapa for video production services?",
    "a": "<p>Sociapa combines creative storytelling, strategic planning, professional production, in-house editing and animation, and marketing expertise to produce high-quality videos that strengthen brand presence, engage audiences, and deliver measurable business results.</p>"
  }
];


export default function VideoProduction() {
    const [openFaq, setOpenFaq] = useState(null);
    const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            
      <Helmet>
        <title>Best Video Marketing Services in Noida | Videography Services – Sociapa</title>
        <meta name="description" content="Best Video Marketing Services in Noida - Sociapa stands out as the premier provider of video marketing services in Noida. With innovative and captivating video content strategies, Sociapa helps businesses effectively engage their target audience and boost brand visibility." />
        <meta name="keywords" content="Video Production" />
        <link rel="canonical" href="https://www.sociapa.com/video/" />
        <meta property="og:title" content="Video Production | SOCIAPA" />
        <meta property="og:description" content="Best Video Marketing Services in Noida - Sociapa stands out as the premier provider of video marketing services in Noida. With innovative and captivating video content strategies, Sociapa helps businesses effectively engage their target audience and boost brand visibility." />
        <meta property="og:url" content="https://www.sociapa.com/video/" />
      </Helmet>
<div className="serInsideBnr">
    <div className="row">
      <picture>
        
        <source
            media="(max-width: 767px)"
            srcset="/sociapareact/images/video-production-service-banner-mobile.jpeg" />

        
        <img src="/sociapareact/images/video-production-service-banner.jpeg" alt="video production" className="responsive-img w-100" />
    </picture>
    </div>
</div>
  <section className="videoproduction-hero">
  <div className="videoproduction-hero-inner">
    <div>
      <div className="videoproduction-hero-badge">🎬 TVC · Corporate Films · Music Videos · Animation · Documentary · Reels</div>
      <h1>Video Production That <em>Moves People & Moves Markets</em></h1>
      <p className="videoproduction-hero-desc">Professional video production for brands, including TV commercials, social media videos, product films, and digital campaigns that deliver measurable impact. </p>
      <div className="videoproduction-hero-btns">
        <a href="/contact" className="btn-primary">Start My Video Project</a>
        <a href="#portfolio" className="btn-outline">View Our Showreel</a>
      </div>
    </div>
    <div className="videoproduction-hero-visual">
      <img src="/sociapareact/images/video-production-left.jpeg" alt="video-production-left-img" className="videoproduction-hero-img" />
    </div>
  </div>
</section>

<div className="stats-bar">
  <div className="stats-inner">
    <div><span className="stat-num">500+</span><div className="stat-lbl">Videos Produced</div></div>
    <div><span className="stat-num">100M+</span><div className="stat-lbl">Total Views Generated</div></div>
    <div><span className="stat-num">15+</span><div className="stat-lbl">Production Crew Members</div></div>
    <div><span className="stat-num">8+</span><div className="stat-lbl">Years in Production</div></div>
  </div>
</div>

<section className="services-section">
  <div className="section-inner">
    <span className="section-tag">Video Services</span>
    <h2 className="section-title">End-to-End Video Production for Every Format</h2>
    <p className="section-sub">We produce everything from TV commercials and brand films to social media reels, delivering high-quality videos for every marketing channel. </p>
    <div className="services-grid">
      <div className="svc-card">
        <div className="svc-icon">📺</div>
        <h3>TVC – Television Commercials</h3>
        <p>High-quality TV commercial production, from scripting and casting to filming, editing, VFX, colour grading, and broadcast-ready delivery. </p>
        <div className="service-tags"><span>30-Sec TVC</span><span>60-Sec Spot</span><span>Broadcast Master</span><span>VFX Finishing</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">🏢</div>
        <h3>Corporate & Brand Films</h3>
        <p>Professional corporate films and brand documentaries that showcase your company, strengthen brand credibility, and support marketing, sales, and employer branding. </p>
        <div className="service-tags"><span>Brand Documentary</span><span>Corporate Profile</span><span>Investor Film</span><span>2–5 Minutes</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">🎵</div>
        <h3>Music Video Production</h3>
        <p>Creative music video production with concept development, filming, choreography, and post-production for YouTube, streaming platforms, and digital campaigns. </p>
        <div className="service-tags"><span>Concept Design</span><span>Artist Direction</span><span>Location Filming</span><span>Music Video Edit</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">🎨</div>
        <h3>Animation & Motion Graphics</h3>
        <p>2D and 3D animation, motion graphics, and explainer videos produced in-house for digital marketing, social media, advertising, and brand communication. </p>
        <div className="service-tags"><span>2D Animation</span><span>3D Product Viz</span><span>Motion Graphics</span><span>Character Animation</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">🎞️</div>
        <h3>Documentary Films</h3>
        <p>Documentary films that showcase brand stories, founder journeys, company heritage, and social impact for digital platforms, events, and broadcast. </p>
        <div className="service-tags"><span>Brand Heritage</span><span>Impact Documentary</span><span>Founder Story</span><span>15–30 Minutes</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">⭐</div>
        <h3>Testimonial & Interview Videos</h3>
        <p>Professional customer testimonial and interview videos that build trust, strengthen brand credibility, and improve marketing performance. </p>
        <div className="service-tags"><span>Customer Stories</span><span>Expert Interviews</span><span>Case Studies</span><span>B-Roll Shoots</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">📱</div>
        <h3>Social Media Reels & Short-Form</h3>
        <p>High-performing Instagram Reels, YouTube Shorts, and Facebook videos designed to capture attention, increase engagement, and maximise social media reach. </p>
        <div className="service-tags"><span>Instagram Reels</span><span>YouTube Shorts</span><span>15–60 Sec</span><span>Hook-Optimised</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">💡</div>
        <h3>Explainer Videos</h3>
        <p>Clear and engaging explainer videos that simplify products, services, and processes through live-action, animation, whiteboard, or mixed-media formats. </p>
        <div className="service-tags"><span>Product Explainer</span><span>SaaS Demo</span><span>Whiteboard</span><span>Animated Explainer</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">🎉</div>
        <h3>Event Videography</h3>
        <p>Professional event video production for product launches, brand activations, conferences, and corporate events, with cinematic highlight reels and social media edits. </p>
        <div className="service-tags"><span>Product Launch</span><span>Brand Activation</span><span>Highlight Reel</span><span>Multi-Cam Setup</span></div>
      </div>
    </div>
  </div>
</section>

<section className="tools-section">
  <div className="section-inner">
    <span className="section-tag">Production Stack</span>
    <h2 className="section-title">Cinema-Grade Equipment & Post-Production Suite</h2>
    <p className="section-sub">Professional production equipment and advanced editing tools deliver high-quality videos for every budget. </p>
    <div className="tools-grid">
      <div className="tool-chip"><span className="tool-icon">🎥</span>Sony FX3 Cinema</div>
      <div className="tool-chip"><span className="tool-icon">🎥</span>Canon EOS R5</div>
      <div className="tool-chip"><span className="tool-icon">🎥</span>RED Camera</div>
      <div className="tool-chip"><span className="tool-icon">🚁</span>DJI Drone</div>
      <div className="tool-chip"><span className="tool-icon">💡</span>LED Lighting Rigs</div>
      <div className="tool-chip"><span className="tool-icon">🎙️</span>Rode & Sennheiser Audio</div>
      <div className="tool-chip"><span className="tool-icon">🎬</span>Adobe Premiere Pro</div>
      <div className="tool-chip"><span className="tool-icon">✨</span>After Effects</div>
      <div className="tool-chip"><span className="tool-icon">🎨</span>DaVinci Resolve</div>
      <div className="tool-chip"><span className="tool-icon">🔊</span>Adobe Audition</div>
      <div className="tool-chip"><span className="tool-icon">🖥️</span>Cinema 4D</div>
      <div className="tool-chip"><span className="tool-icon">🏠</span>In-House Edit Suite</div>
    </div>
  </div>
</section>

<section className="portfolio-section">
  <div className="section-inner">
    <span className="section-tag">Our Work</span>
    <h2 className="section-title">Videos That Built Brands & Broke Records</h2>
    <p className="section-sub">Video production portfolio featuring FMCG, travel, healthcare, beauty, and consumer brands. </p>
    <div className="portfolio-grid">
      <div className="port-card">
        <div className="port-img"><span className="ph-icon">🌾</span></div>
        <div className="port-info">
          <div className="port-tag">Brand Film · 3 Min</div>
          <h4>Pansari Group – Origin Story</h4>
          <p>Cinematic brand documentary showcasing 40 years of heritage, produced for TV, websites, and investor presentations, achieving 2M views in 30 days.</p>
        </div>
      </div>
      <div className="port-card">
        <div className="port-img"><span className="ph-icon">✈️</span></div>
        <div className="port-info">
          <div className="port-tag">TVC · 30-Sec Spot</div>
          <h4>Kesari Tours – Summer Campaign</h4>
          <p>National TV commercial produced from script to broadcast with location filming, VFX, and delivery across multiple TV channels. </p>
        </div>
      </div>
      <div className="port-card">
        <div className="port-img"><span className="ph-icon">🍞</span></div>
        <div className="port-info">
          <div className="port-tag">Social Reels · Series</div>
          <h4>Bonn Breads – Freshness Series</h4>
          <p>Instagram Reel series with platform-optimised edits, generating 8M organic views in just 90 days.</p>
        </div>
      </div>
      <div className="port-card">
        <div className="port-img"><span className="ph-icon">💊</span></div>
        <div className="port-info">
          <div className="port-tag">Animation · Explainer</div>
          <h4>APIS India – Product Explainer</h4>
          <p>2D animated explainer video simplifying a complex pharmaceutical product, generating 1.4M views across digital platforms. </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="process-section">
  <div className="section-inner">
    <span className="section-tag">Our Process</span>
    <h2 className="section-title">From Script to Screen — A Structured Production Journey</h2>
    <p className="section-sub">A clear 6-stage production process with defined milestones, approval gates, and on-time delivery for every project.</p>
    <div className="process-grid">
      <div className="process-step"><div className="step-num">1</div><h4>Creative Brief</h4><p>Objectives, audience, platform, duration, tone, and budget defined together</p></div>
      <div className="process-step"><div className="step-num">2</div><h4>Script & Storyboard</h4><p>Written script and visual storyboard presented for client approval before production begins</p></div>
      <div className="process-step"><div className="step-num">3</div><h4>Pre-Production</h4><p>Location scouting, casting, props sourcing, shot list, and crew scheduling finalised</p></div>
      <div className="process-step"><div className="step-num">4</div><h4>Production Shoot</h4><p>Professional shoot with director, DOP, and full crew — single or multi-day production</p></div>
      <div className="process-step"><div className="step-num">5</div><h4>Post-Production</h4><p>Edit, colour grade, VFX, motion graphics, voiceover, music licensing, and sound mix</p></div>
      <div className="process-step"><div className="step-num">6</div><h4>Final Delivery</h4><p>Platform-optimised exports for broadcast, YouTube, Instagram, LinkedIn, and web</p></div>
    </div>
  </div>
</section>

<section className="why-section">
  <div className="section-inner">
    <span className="section-tag section-tag-white">Why Sociapa Video</span>
    <h2 className="section-title">Where Creative Vision Meets Technical Excellence</h2>
    <p className="section-sub">We create story-driven videos that engage audiences, strengthen brands, and deliver measurable business results. </p>
    <div className="why-grid">
    
        <div className="why-card">
            <div className="w-icon">✍️</div>
            <h4>Story-First Scripting</h4>
            <p>Every great video starts with a strong script, crafted to capture attention instantly and keep viewers engaged until the final frame.</p>
        </div>

        <div className="why-card">
            <div className="w-icon">🎬</div>
            <h4>Cinema-Grade Production</h4>
            <p>Professional cameras, drone cinematography, studio lighting, and high-quality audio deliver premium video production for every project.</p>
        </div>

        <div className="why-card">
            <div className="w-icon">✨</div>
            <h4>In-House Animation</h4>
            <p>2D and 3D animation, motion graphics, and product visualisation produced in-house for faster delivery and consistent quality.</p>
        </div>

        <div className="why-card">
            <div className="w-icon">⚡</div>
            <h4>Fast Post-Production</h4>
            <p>First video cut delivered within 5 business days, with structured revision rounds for fast, high-quality project delivery.</p>
        </div>

        <div className="why-card">
            <div className="w-icon">📱</div>
            <h4>Multi-Platform Delivery</h4>
            <p>Videos optimised for TV, YouTube, Instagram Reels, LinkedIn, OTT, and websites, delivering maximum reach from a single production.</p>
        </div>

        <div className="why-card">
            <div className="w-icon">📊</div>
            <h4>Performance-Driven Production</h4>
            <p>Every video is optimised for platform performance with strong hooks, ideal pacing, engaging thumbnails, and audience-focused storytelling.</p>
        </div>

    </div>
  </div>
</section>

<section className="testi-section">
  <div className="section-inner">
    <span className="section-tag">Client Stories</span>
    <h2 className="section-title">Brands Whose Stories We've Brought to Life</h2>
    <div className="testi-grid">
      <div className="testi-card">
        <div className="stars">★★★★★</div>
        <blockquote>"Our brand film has clocked over 2 million views and is now the centrepiece of every investor presentation. Sociapa captured the soul of 40 years of Pansari Group in just 3 minutes."</blockquote>
        <div className="testi-author"><div className="avatar">PG</div><div><strong>Rohit Agarwal</strong><span>Brand Head, Pansari Group</span></div></div>
      </div>
      <div className="testi-card">
        <div className="stars">★★★★★</div>
        <blockquote>"15 Reels that collectively hit 8 million views in 90 days. The hook design, pacing, and platform optimisation is what separates Sociapa from every other production company we've worked with."</blockquote>
        <div className="testi-author"><div className="avatar">BB</div><div><strong>Manish Kapoor</strong><span>Marketing Director, Bonn Breads</span></div></div>
      </div>
      <div className="testi-card">
        <div className="stars">★★★★★</div>
        <blockquote>"Our TVC was produced script-to-broadcast in under 3 weeks. The quality rivals production houses charging five times the price — and the process was completely stress-free."</blockquote>
        <div className="testi-author"><div className="avatar">KT</div><div><strong>Anand Desai</strong><span>Digital Head, Kesari Tours</span></div></div>
      </div>
    </div>
  </div>
</section>

<section className="faq-section">
  <div className="section-inner">
    <span className="section-tag">FAQ</span>
    <h2 className="section-title">Video Production <span className="text-brand-red">Questions Answered</span></h2>
    <p className="section-sub">Everything you need to know before starting your video production project with Sociapa.</p>
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
    <h2>Ready to Tell Your Brand Story on Screen?</h2>
    <p>Share your video brief and receive a production proposal with creative concept, timeline, and budget estimate within 24 hours.</p>
    <a href="/contact" className="btn-primary">Get a Video Production Quote</a>
  </div>
</section>

<section className="videoSS">
  <div className="container">
    <div className="row">
      <div className="col l3 m6 s12">
      <iframe width="100%" src="https://www.youtube.com/embed/GR2-qxLjqL4" title="YouTube video player" frameborder="0" allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className="col l3 m6 s12">
      <iframe width="100%" src="https://www.youtube.com/embed/LI5EgoFusf0" title="YouTube video player" frameborder="0" allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className="col l3 m6 s12">
      <iframe width="100%" src="https://www.youtube.com/embed/MekjO_fowVc" title="YouTube video player" frameborder="0" allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className="col l3 m6 s12">
      <iframe width="100%" src="https://www.youtube.com/embed/WTY5prAe008" title="YouTube video player" frameborder="0" allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</section>
    
        </>
    );
}
