import React, { useState, useEffect } from 'react';
import OtherServicesSlider from '../components/OtherServicesSlider';
import ServiceOurWorkSection from '../components/ServiceOurWorkSection';
import ServiceBehindWorkSection from '../components/ServiceBehindWorkSection';
import ServiceCaseStudiesSlider from '../components/ServiceCaseStudiesSlider';
import { serviceClientSectionsData } from '../data/serviceClientSectionsData';
import { Helmet } from 'react-helmet-async';
import './VideoProduction.css';

const faqsData = [
  {
    q: "1. What video production services does Sociapa offer?",
    a: "<p>We provide end-to-end video production services, including TV commercials (TVCs), corporate brand films, product videos, CGI, animation, motion graphics, <a href='/best-social-media-marketing-agency-india' class='seo-interlink'>social media content</a>, <a href='/best-photography-services' class='seo-interlink'>product photography</a>, lifestyle photography, and post-production.</p>"
  },
  {
    q: "2. Do you handle the entire video production process?",
    a: "<p>Yes. Our team manages the complete production process, including concept development, creative briefs, scriptwriting, storyboarding, location scouting, talent casting, production planning, filming, editing, colour grading, sound design, and final delivery.</p>"
  },
  {
    q: "3. Do you produce content for social media platforms?",
    a: "<p>Yes. We create platform-specific content for Instagram Reels, YouTube Shorts, and digital channels, seamlessly integrated with our <a href='/influencer-marketing-services' class='seo-interlink'>influencer marketing</a> and <a href='/best-social-media-marketing-agency-india' class='seo-interlink'>social media marketing</a> campaigns for maximum engagement.</p>"
  },
  {
    q: "4. Do you offer professional product photography?",
    a: "<p>Yes. We provide studio and lifestyle <a href='/best-photography-services' class='seo-interlink'>product photography</a> for e-commerce, print catalogues, <a href='/product-unboxing-experience' class='seo-interlink'>unboxing experiences</a>, and digital ads, including hero images, detail shots, and 360-degree product angles.</p>"
  },
  {
    q: "5. Can you create animated videos and motion graphics?",
    a: "<p>Yes. We produce 2D motion graphics, animated explainer videos, logo animations, CGI videos, and social media motion assets that enhance brand storytelling and audience engagement.</p>"
  },
  {
    q: "6. What formats will my videos be delivered in?",
    a: "<p>All videos are delivered in platform-optimized formats and aspect ratios, including 16:9 (landscape), 9:16 (vertical), and 1:1 (square), making them ready for websites, social media, digital advertising, e-commerce, Amazon, and broadcast.</p>"
  },
  {
    q: "7. Will I receive the original footage and high-resolution files?",
    a: "<p>Yes. High-resolution photography is delivered in print-ready 300 DPI and web-optimized formats, and a full archive of unedited video footage is available on request for future edits and content creation.</p>"
  },
  {
    q: "8. Is the music used in the videos copyright compliant?",
    a: "<p>Yes. Every video includes properly licensed background music and professional sound design, ensuring your content is copyright compliant and safe for commercial use across digital and social media platforms.</p>"
  },
  {
    q: "9. How many revisions are included before final delivery?",
    a: "<p>Every project includes a final video review and revision round to ensure the content aligns with your creative brief, brand guidelines, and campaign objectives before delivery.</p>"
  },
  {
    q: "10. Why choose Sociapa for video production?",
    a: "<p>Sociapa combines <a href='/brand-strategy' class='seo-interlink'>creative brand strategy</a>, professional film production, <a href='/best-photography-services' class='seo-interlink'>commercial photography</a>, and post-production under one roof, delivering visual content that scales across digital channels and quick commerce platforms.</p>"
  }
];

const videoCategories = [
  {
    title: "Corporate Video",
    videos: [
      { id: "PWXwi-gLxPw", title: "Corporate Video Showcase", cat: "Corporate Video" },
      { id: "oDbXKLAENdg", title: "Corporate Storyline Film", cat: "Corporate Video" },
      { id: "pTTixnB9RY8", title: "Corporate Brand Narrative", cat: "Corporate Video" }
    ]
  },
  {
    title: "TVC Commercial",
    videos: [
      { id: "E39Nx8KkluI", title: "National Television Commercial", cat: "TVC Commercial" },
      { id: "jGzI0AxamGA", title: "Brand Television Spot", cat: "TVC Commercial" },
      { id: "L_GmKBoFkZA", title: "Commercial Ad Film", cat: "TVC Commercial" }
    ]
  },
  {
    title: "Campaigns and Events",
    videos: [
      { id: "XNHDjnJ9vxg", title: "Brand Campaign Film", cat: "Campaigns and Events" },
      { id: "Rpr2_CAO2m8", title: "Event Launch Coverage", cat: "Campaigns and Events" }
    ]
  },
  {
    title: "Brand Launch Videos",
    videos: [
      { id: "DbUKkXJXaDs", title: "Category Launch Film", cat: "Brand Launch Videos" },
      { id: "mI5Zp0KheXY", title: "D2C Brand Launch", cat: "Brand Launch Videos" },
      { id: "gy9Nu8xlI70", title: "New Product Unveiling", cat: "Brand Launch Videos" },
      { id: "TCGIogTKpQ0", title: "Flagship Product Video", cat: "Brand Launch Videos" },
      { id: "iHRoGdHatvk", title: "Brand Announcement Film", cat: "Brand Launch Videos" },
      { id: "rlapMRSesvg", title: "Consumer Launch Teaser", cat: "Brand Launch Videos" },
      { id: "5jxXQjzm0bo", title: "Hero Product Showcase", cat: "Brand Launch Videos" },
      { id: "jO6RGPWdMfY", title: "Brand Experience Video", cat: "Brand Launch Videos" },
      { id: "Bq7Uiab5drU", title: "Product Feature Film", cat: "Brand Launch Videos" }
    ]
  },
  {
    title: "AI Videos",
    videos: [
      { id: "olqoDRpjiIA", title: "AI Generated Visual Film", cat: "AI Videos" },
      { id: "BFVRJkLEJEk", title: "AI Concept Creative", cat: "AI Videos" },
      { id: "BU1i2VGsmFQ", title: "AI Lifestyle Synthesis", cat: "AI Videos" },
      { id: "QsEBnn7ci80", title: "AI Product Narrative", cat: "AI Videos" },
      { id: "FwAgWkCANjs", title: "AI Cinematic Ad", cat: "AI Videos" },
      { id: "R8buQR-xGaI", title: "Generative Brand Asset", cat: "AI Videos" },
      { id: "PPuA0IFC05A", title: "AI Futuristic Visual", cat: "AI Videos" },
      { id: "at3ZtLYuK8E", title: "AI Environment Design", cat: "AI Videos" },
      { id: "ONRrPu0S3AE", title: "AI Social Visual", cat: "AI Videos" }
    ]
  },
  {
    title: "CGI Videos",
    videos: [
      { id: "mZMdgewS9NU", title: "3D Product Animation", cat: "CGI Videos" },
      { id: "TBef8MO0N2c", title: "Photorealistic 3D Render", cat: "CGI Videos" },
      { id: "dAEhRYy88gg", title: "CGI Packaging Experience", cat: "CGI Videos" },
      { id: "8G2aZmxLUcM", title: "3D Motion Design Film", cat: "CGI Videos" },
      { id: "UvmKmOHEc2w", title: "CGI Simulation Visual", cat: "CGI Videos" },
      { id: "DSxZMN4ENqs", title: "CGI VFX Commercial", cat: "CGI Videos" }
    ]
  },
  {
    title: "Product Recipes Videos",
    videos: [
      { id: "XDzOMTZy_n0", title: "Chef-Led Recipe Series", cat: "Product Recipes Videos" },
      { id: "MX081uRRqdg", title: "Culinary Brand Film", cat: "Product Recipes Videos" },
      { id: "LGdPK6YiGSA", title: "Gourmet Storytelling Video", cat: "Product Recipes Videos" },
      { id: "t6GsJk6wkJQ", title: "FMCG Recipe Content", cat: "Product Recipes Videos" },
      { id: "uJQIkwTK3zk", title: "Aesthetic Food Styling Reel", cat: "Product Recipes Videos" }
    ]
  }
];

export default function VideoProduction() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);
  const base = import.meta.env.BASE_URL || '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="video-production-page">
      <Helmet>
        <title>Video Production &amp; Photography Agency India | Sociapa</title>
        <meta
          name="description"
          content="Sociapa provides top-tier video production, TV commercials, brand films, CGI videos, recipe shoots, and photography for India's leading brands."
        />
        <meta
          name="keywords"
          content="video production agency India, corporate video maker, TVC ad film production, product photography, CGI video agency, food styling shoots"
        />
        <link rel="canonical" href="https://sociapa.com/videos" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SOCIAPA" />
        <meta property="og:title" content="Video Production &amp; Photography Agency India | Sociapa" />
        <meta
          property="og:description"
          content="Sociapa provides top-tier video production, TV commercials, brand films, CGI videos, recipe shoots, and photography for India's leading brands."
        />
        <meta property="og:url" content="https://sociapa.com/videos" />
        <meta property="og:image" content="https://sociapa.com/logoSociapa.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Sociapa - Your Social Buddy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Video Production &amp; Photography Agency India | Sociapa" />
        <meta name="twitter:description" content="Sociapa provides top-tier video production, TV commercials, brand films, CGI videos, recipe shoots, and photography for India's leading brands." />
        <meta name="twitter:image" content="https://sociapa.com/logoSociapa.png" />
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
        {/* VideoObject Schema - Required by SOCIAPA (1).docx */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VideoObject",
          "name": "Sociapa – Video Production Showreel",
          "description": "Sociapa's full video production capabilities — including TV commercials, corporate brand films, CGI animations, AI videos, recipe content, and product photography for India's leading brands.",
          "thumbnailUrl": "https://img.youtube.com/vi/PWXwi-gLxPw/maxresdefault.jpg",
          "uploadDate": "2026-01-01T08:00:00+05:30",
          "duration": "PT3M",
          "contentUrl": "https://www.youtube.com/watch?v=PWXwi-gLxPw",
          "embedUrl": "https://www.youtube.com/embed/PWXwi-gLxPw",
          "publisher": {
            "@type": "Organization",
            "name": "Sociapa",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.sociapa.com/logoSociapa.png"
            }
          }
        })}</script>
        {/* BreadcrumbList Schema - Required by SOCIAPA (1).docx */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.sociapa.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Services",
              "item": "https://www.sociapa.com/our-services"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Video Production & Photography Agency India",
              "item": "https://www.sociapa.com/videos"
            }
          ]
        })}</script>
      </Helmet>

      {/* Hero Banner Section */}
      <section className="hero-banner-section">
        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
          Corporate Video Production &amp; Commercial Brand Films Agency - Sociapa
        </h1>
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet={`${base}assets/images/services_banner/video_photography/video.webp`}
          />
          <img
            src={`${base}assets/images/services_banner/video_photography/video.webp`}
            alt="Video Production & Photography - Sociapa"
            className="hero-banner-img"
            decoding="async"
            loading="eager"
            fetchpriority="high"
            width="1920"
            height="700"
          />
        </picture>
      </section>

      {/* Portfolio Highlight / Production Scope */}
      {/* Portfolio / Our Work Section */}
      <ServiceOurWorkSection
        work={serviceClientSectionsData['video-production']?.work}
      />

      {/* Complete Video Showcase Section */}
      <section className="projects-svc">
        <div className="inner">
          <span className="proj-eyebrow">Complete Portfolio</span>
          <h2 className="proj-h2">
            Our Complete <em>Video Showcase</em>
          </h2>
          <p className="proj-sub">
            Explore our extensive video production portfolio across corporate films, TVCs, CGI animations, recipe content, and brand launches.
          </p>

          {videoCategories.map((category, catIdx) => (
            <div key={catIdx} className="proj-category">
              <div className="proj-cat-title">{category.title}</div>
              <div className="proj-grid">
                {category.videos.map((vid, vidIdx) => (
                  <a
                    key={vidIdx}
                    href={`https://www.youtube.com/watch?v=${vid.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-card"
                  >
                    <img
                      className="proj-thumb"
                      src={`https://img.youtube.com/vi/${vid.id}/hqdefault.jpg`}
                      alt={`${vid.title} - ${category.title}`}
                      loading="lazy"
                    />
                    <div className="proj-overlay"></div>
                    <div className="proj-play">
                      <div className="play-btn">
                        <svg viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="proj-card-content">
                      <div className="proj-card-cat">{vid.cat}</div>
                      <div className="proj-card-title">{vid.title} &rarr;</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What's Included / Sub-services Section */}
      <section id="sub-services" className="what">
        <div className="inner">
          <div className="what-header">
            <span className="eyebrow">What's Included</span>
            <h2 className="sec">
              Our Video Production &amp; Photography <em>Services</em>
            </h2>
            <p className="sec-sub" style={{ textAlign: 'center', margin: '0 auto', maxWidth: '720px' }}>
              In a world where consumers decide within seconds whether your brand deserves their attention, premium visual content is essential. Sociapa creates high-quality brand films, product photography, lifestyle imagery, and social media content that capture attention, strengthen brand perception, and inspire action across every platform.
            </p>
          </div>
          <div className="sub-grid">
            <div className="sub-card">
              <div className="sub-card-img">
                <img
                  src={`${base}assets/images/services_banner/video_photography_cards/tvc_and_brand_films.webp`}
                  alt="TVC & Brand Films"
                />
              </div>
              <div className="sub-card-body">
                <h3>TVC &amp; Brand Films</h3>
                <p>
                  Full-service brand film and television commercial production, including concept development, scriptwriting, production planning, on-location filming, and post-production, delivering broadcast-quality visual content that strengthens brand storytelling and audience engagement.
                </p>
                <a href="#cta" className="sub-link">Explore &rarr;</a>
              </div>
            </div>

            <div className="sub-card">
              <div className="sub-card-img">
                <img
                  src={`${base}assets/images/services_banner/video_photography_cards/product_photography.webp`}
                  alt="Product Photography"
                />
              </div>
              <div className="sub-card-body">
                <h3>Product Photography</h3>
                <p>
                  Professional studio and lifestyle product photography optimized for e-commerce listings, print catalogues, digital advertising, and marketplaces, including hero images, detail shots, multiple product angles, and high-resolution visuals designed to increase engagement and conversions.
                </p>
                <a href="#cta" className="sub-link">Explore &rarr;</a>
              </div>
            </div>

            <div className="sub-card">
              <div className="sub-card-img">
                <img
                  src={`${base}assets/images/services_banner/video_photography_cards/lifestyle_and_campaign_photography.webp`}
                  alt="Lifestyle & Campaign Photography"
                />
              </div>
              <div className="sub-card-body">
                <h3>Lifestyle &amp; Campaign Photography</h3>
                <p>
                  Campaign photography with professional models, curated props, and premium locations, bringing your brand story to life through aspirational visuals for websites, social media, digital advertising, print campaigns, and marketing collateral.
                </p>
                <a href="#cta" className="sub-link">Explore &rarr;</a>
              </div>
            </div>

            <div className="sub-card">
              <div className="sub-card-img">
                <img
                  src={`${base}assets/images/services_banner/video_photography_cards/social_media_reels_and_short_form_video.webp`}
                  alt="Social Media Reels & Short-Form Video"
                />
              </div>
              <div className="sub-card-body">
                <h3>Social Media Reels &amp; Short-Form Video</h3>
                <p>
                  Short-form video production for Instagram Reels, YouTube Shorts, and TikTok, including concept development, scripting, filming, and editing using platform-specific best practices to maximize organic reach, audience engagement, and content performance.
                </p>
                <a href="#cta" className="sub-link">Explore &rarr;</a>
              </div>
            </div>

            <div className="sub-card">
              <div className="sub-card-img">
                <img
                  src={`${base}assets/images/services_banner/video_photography_cards/ai_enhanced_photography.webp`}
                  alt="AI-Enhanced Photography"
                />
              </div>
              <div className="sub-card-body">
                <h3>AI-Enhanced Photography</h3>
                <p>
                  Photorealistic AI-generated lifestyle environments and backgrounds combined with studio product photography — cost-effective scene variety at scale.
                </p>
                <a href="#cta" className="sub-link">Explore &rarr;</a>
              </div>
            </div>

            <div className="sub-card">
              <div className="sub-card-img">
                <img
                  src={`${base}assets/images/services_banner/video_photography_cards/motion_graphics_and_animation.webp`}
                  alt="Motion Graphics & Animation"
                />
              </div>
              <div className="sub-card-body">
                <h3>Motion Graphics &amp; Animation</h3>
                <p>
                  2D motion graphics, animated explainer videos, logo animations, and social media motion design that bring your brand identity to life through engaging visuals, dynamic storytelling, and platform-ready animated content.
                </p>
                <a href="#cta" className="sub-link">Explore &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="deliver">
        <div className="inner">
          <div className="deliver-text">
            <span className="eyebrow">What You Get</span>
            <h2>Deliverables That Drive <em>Real Outcomes</em></h2>
            <p>
              Every project concludes with production-ready, fully documented deliverables designed for immediate use, not files that sit unused. From final creative assets to organized source files and platform-ready formats, you receive everything needed to launch, publish, and scale your brand with confidence.
            </p>
          </div>
          <div className="deliver-list">
            <div className="deliver-item">
              <div className="d-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                  <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                  <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <div>
                <h4>Final Edited Video Files</h4>
                <p>
                  All video deliverables are optimized in multiple formats and aspect ratios, including 16:9 (landscape), 9:16 (vertical), and 1:1 (square), ensuring seamless performance across television, websites, YouTube, Instagram, Facebook, LinkedIn, and every major digital platform.
                </p>
              </div>
            </div>

            <div className="deliver-item">
              <div className="d-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              <div>
                <h4>High-Resolution Photography</h4>
                <p>
                  High-resolution photography delivered in print-ready 300 DPI and web-optimized formats, with professionally edited images shared through a secure cloud gallery and full commercial usage rights for digital, print, and marketing applications.
                </p>
              </div>
            </div>

            <div className="deliver-item">
              <div className="d-icon">🎬</div>
              <div>
                <h4>Raw Footage Archive</h4>
                <p>
                  Full archive of unedited footage available on request, giving you access to original video files for future edits, social media content, marketing campaigns, and long-term content creation.
                </p>
              </div>
            </div>

            <div className="deliver-item">
              <div className="d-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <div>
                <h4>Licensed Music &amp; Sound Design</h4>
                <p>
                  All video deliverables include properly licensed background music and professional sound design, ensuring copyright-compliant content that is ready for social media, digital marketing, websites, and commercial use.
                </p>
              </div>
            </div>

            <div className="deliver-item">
              <div className="d-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </div>
              <div>
                <h4>Platform-Specific Exports</h4>
                <p>
                  Every video is delivered in platform-optimized formats for Instagram, Facebook, YouTube, LinkedIn, Amazon, and broadcast, ensuring seamless publishing across all channels with no additional editing or re-exporting required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-svc">
        <div className="inner">
          <span className="proc-eyebrow">How We Work</span>
          <h2 className="proc-h2">Our Video Production &amp; Photography Process</h2>
          <p className="proc-sub">
            A structured, research-driven process that ensures every creative and strategic decision is backed by insights, with every deliverable designed to achieve measurable business and marketing results.
          </p>
          <div className="proc-steps">
            <div className="proc-step">
              <div className="proc-n">01</div>
              <h4>Creative Development</h4>
              <p>Concept development, creative briefs, scriptwriting, storyboard creation, shot planning, and location and talent scouting, all strategically aligned with your brand identity, marketing objectives, and campaign goals.</p>
            </div>
            <div className="proc-step">
              <div className="proc-n">02</div>
              <h4>Pre-Production</h4>
              <p>Final script approval, location booking, talent casting, wardrobe and prop sourcing, equipment coordination, and detailed shoot scheduling to ensure a seamless and efficient production process.</p>
            </div>
            <div className="proc-step">
              <div className="proc-n">03</div>
              <h4>Production</h4>
              <p>Professional production led by our in-house crew, including a cinematographer, art director, lighting specialists, and production coordinator, ensuring a seamless shoot and premium-quality visual content from start to finish.</p>
            </div>
            <div className="proc-step">
              <div className="proc-n">04</div>
              <h4>Post-Production</h4>
              <p>Professional post-production services including video editing, colour grading, sound design, motion graphics, licensed background music, and subtitle creation, delivering polished, platform-ready content tailored to your creative brief and marketing objectives.</p>
            </div>
            <div className="proc-step">
              <div className="proc-n">05</div>
              <h4>Review &amp; Delivery</h4>
              <p>Final video review, revision rounds, and delivery of all approved assets in platform-optimized formats and specifications, ensuring your content is ready for websites, social media, digital advertising, e-commerce, broadcast, and every major marketing channel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-svc">
        <div className="inner">
          <div className="faq-header">
            <span className="eyebrow" style={{ textAlign: 'center', display: 'block' }}>Video Production &amp; Photography FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know before starting your video production &amp; photography project with Sociapa.</p>
          </div>

          <div className="faq-list">
            {faqsData.map((faq, idx) => (
              <div key={idx} className={`faq-item ${openFaq === idx ? 'open' : ''}`}>
                <div className="faq-q" onClick={() => toggleFaq(idx)}>
                  {faq.q}
                  <span className="faq-icon">{openFaq === idx ? '−' : '+'}</span>
                </div>
                <div className="faq-a">
                  <p dangerouslySetInnerHTML={{ __html: faq.a }}></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* Behind the Work Section */}
      <ServiceBehindWorkSection
        testimonials={serviceClientSectionsData['video-production']?.testimonials}
      />

      {/* Featured Case Studies Slider */}
      <ServiceCaseStudiesSlider />

      {/* Our Other Services Carousel */}
      <OtherServicesSlider />

      {/* CTA Section */}
      <section className="cta-svc">
        <span className="eyebrow" style={{ display: 'block', marginBottom: '16px' }}>Ready to Begin?</span>
        <h2>Let's Build Your <em>Video Production &amp; Photography</em></h2>
        <p>Tell us about your brand and we'll get back with a tailored approach within 24 hours.</p>
        <div className="cta-row">
          <a href="mailto:mail@sociapa.com" className="btn-cta-red">Start a Project</a>
          <a
            href="https://wa.me/917011057175"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta-out"
          >
            WhatsApp Us
          </a>
        </div>
      </section>
    </div>
  );
}
