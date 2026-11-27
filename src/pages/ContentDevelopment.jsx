import React, { useState, useEffect } from 'react';
import OtherServicesSlider from '../components/OtherServicesSlider';
import ServiceOurWorkSection from '../components/ServiceOurWorkSection';
import ServiceBehindWorkSection from '../components/ServiceBehindWorkSection';
import ServiceCaseStudiesSlider from '../components/ServiceCaseStudiesSlider';
import Content3DCanvas from '../components/Content3DCanvas';
import { serviceClientSectionsData } from '../data/serviceClientSectionsData';
import { Helmet } from 'react-helmet-async';
import './ContentDevelopment.css';

const faqsData = [
  {
    q: "1. What types of content do you create?",
    a: "<p>We create <a href='/seo-aeo-geo' class='seo-interlink'>SEO blogs</a> and long-form articles, <a href='/best-web-development-agency-india' class='seo-interlink'>website copy</a>, <a href='/best-social-media-marketing-agency-india' class='seo-interlink'>social media copy</a>, <a href='/email-marketing-services' class='seo-interlink'>email copy</a>, <a href='/videos' class='seo-interlink'>video scripts</a> and storyboards, whitepapers, case studies, reports, and eBooks.</p>"
  },
  {
    q: "2. How do you make content SEO-friendly?",
    a: "<p>Content is researched for search intent, supported by keyword research and competitor analysis, and optimised for ranking and organic traffic.</p>"
  },
  {
    q: "3. What website copy do you create?",
    a: "<p>We create conversion-optimised copy for home pages, service pages, about pages, and landing pages designed to communicate value and drive enquiries.</p>"
  },
  {
    q: "4. Do you create content for social media?",
    a: "<p>Yes. We create platform-native captions, hashtag strategies, ad copy, and bio copy for Instagram, Facebook, LinkedIn, and Twitter.</p>"
  },
  {
    q: "5. Do you create email marketing content?",
    a: "<p>Yes. Email copy includes subject lines, body copy, CTAs, newsletter copy, and drip sequences, with a focus on both deliverability and conversion.</p>"
  },
  {
    q: "6. Can you create content in multiple Indian languages?",
    a: "<p>Yes. Content can be created in English, Hindi, and regional languages including Tamil, Telugu, Kannada, Marathi, Bengali, and Gujarati. Bilingual English and regional-language content is also available.</p>"
  },
  {
    q: "7. How do you maintain brand voice?",
    a: "<p>We immerse ourselves in the brand voice before writing and follow the brand's guidelines, including approved colours, fonts, logo placement, and photography style.</p>"
  },
  {
    q: "8. How do you ensure content quality at scale?",
    a: "<p>A structured editorial process maintains quality standards across high-volume content production, including 100+ pieces per month.</p>"
  },
  {
    q: "9. How is content performance measured?",
    a: "<p>Monthly reporting tracks keyword rankings, organic traffic, engagement, and content-attributed leads to provide visibility into content ROI.</p>"
  },
  {
    q: "10. Can one piece of content be repurposed?",
    a: "<p>Yes. Content can be repurposed across formats, such as turning blogs into social posts, whitepapers into email sequences, and scripts into articles.</p>"
  }
];

export default function ContentDevelopment() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);
  const base = import.meta.env.BASE_URL || '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -11;
    const rotateY = ((x - centerX) / centerX) * 11;

    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.025, 1.025, 1.025)`;
    card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
  };

  const handleCardMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    card.style.setProperty('--mouse-x', '50%');
    card.style.setProperty('--mouse-y', '50%');
  };

  return (
    <div className="content-development-page">
      <Helmet>
        <title>Content Designing Service in Noida &amp; Delhi NCR- For innovative content ideas, contact Sociapa</title>
        <meta name="description" content="Looking for Content Marketing Agency in Noida & Delhi NCR? Connect with Sociapa for ROI oriented Content Marketing Services in India for Large Corporates, Brands & Startups." />
        <meta
          name="keywords"
          content="content designing agency India, copywriting services, SEO content writing, website copywriting, social media content development"
        />
        <link rel="canonical" href="https://sociapa.com/content-designing" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SOCIAPA" />
        <meta property="og:title" content="Content Designing Service in Noida & Delhi NCR- For innovative content ideas, contact Sociapa" />
        <meta property="og:description" content="Looking for Content Marketing Agency in Noida & Delhi NCR? Connect with Sociapa for ROI oriented Content Marketing Services in India for Large Corporates, Brands & Startups." />
        <meta property="og:url" content="https://sociapa.com/content-designing" />
        <meta property="og:image" content="https://sociapa.com/logoSociapa.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Sociapa - Your Social Buddy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Content Designing Service in Noida & Delhi NCR- For innovative content ideas, contact Sociapa" />
        <meta name="twitter:description" content="Looking for Content Marketing Agency in Noida & Delhi NCR? Connect with Sociapa for ROI oriented Content Marketing Services in India for Large Corporates, Brands & Startups." />
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
        {/* BreadcrumbList Schema - Required by SOCIAPA (1).docx */}
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sociapa.com/" }, { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://sociapa.com/our-services" }, { "@type": "ListItem", "position": 3, "name": "Content Designing & Development Agency India | Sociapa", "item": "https://sociapa.com/content-designing" }] })}</script>
      </Helmet>

      {/* Hero Banner Section */}
      <section className="hero-banner-section">
        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
          Content Designing & Copywriting Services India - Sociapa
        </h1>
        <picture>
          <source type="image/webp" srcSet={`${base}assets/images/services_banner/content_designing/content_designing.webp`} />
          <img
            src={`${base}assets/images/services_banner/content_designing/content_designing.webp`}
            alt="Content Designing & Copywriting Services - Sociapa"
            className="hero-banner-img"
            decoding="async"
            width="1920"
            height="700"
            loading="eager"
            fetchpriority="high"
          />
        </picture>
      </section>

      {/* Stats Bar */}
      <div className="stats-bar">
        <div className="stats-inner">
          <div>
            <span className="stat-num">5,000+</span>
            <div className="stat-lbl">Content Pieces Delivered</div>
          </div>
          <div>
            <span className="stat-num">80+</span>
            <div className="stat-lbl">Brand Voices Mastered</div>
          </div>
          <div>
            <span className="stat-num">3.2x</span>
            <div className="stat-lbl">Avg. Organic Traffic Lift</div>
          </div>
          <div>
            <span className="stat-num">8+</span>
            <div className="stat-lbl">Years of Content Excellence</div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="services-section">
        <Content3DCanvas />
        <div className="section-inner">
          <span className="section-tag">Content Services</span>
          <h2 className="section-title">Every Word Working for Your Brand</h2>
          <p className="section-sub">
            From SEO-driven articles to high-converting website copy, we create content that builds brand authority, attracts organic traffic, and drives meaningful action.
          </p>
          <div className="services-grid">
            <div className="svc-card" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/content_designing/blog_and_article_writing.png`}
                  alt="Blog & Article Writing"
                  loading="lazy"
                />
              </div>
              <h3>Blog &amp; Article Writing</h3>
              <p>
                Research-driven, SEO-optimised long-form articles that improve Google rankings, attract organic traffic, and position your brand as an authoritative voice in your category.
              </p>
              <div className="service-tags">
                <span>SEO Blogs</span>
                <span>Long-Form</span>
                <span>Topic Clusters</span>
                <span>Pillar Pages</span>
              </div>
            </div>

            <div className="svc-card" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/content_designing/website_copywriting.png`}
                  alt="Website Copywriting"
                  loading="lazy"
                />
              </div>
              <h3>Website Copywriting</h3>
              <p>
                Conversion-optimised website copy for home, service, about, and landing pages that communicates value and drives enquiries.
              </p>
              <div className="service-tags">
                <span>Landing Pages</span>
                <span>Service Pages</span>
                <span>CRO Copy</span>
              </div>
            </div>

            <div className="svc-card" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/content_designing/social_media_copywriting.png`}
                  alt="Social Media Copywriting"
                  loading="lazy"
                />
              </div>
              <h3>Social Media Copywriting</h3>
              <p>
                Platform-native captions, hashtag strategies, and ad copy for Instagram, Facebook, LinkedIn, and Twitter that engage audiences and drive conversions.
              </p>
              <div className="service-tags">
                <span>Captions</span>
                <span>Ad Copy</span>
                <span>Hashtag Sets</span>
                <span>Bio Copy</span>
              </div>
            </div>

            <div className="svc-card" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/content_designing/email_copywriting.png`}
                  alt="Email Copywriting"
                  loading="lazy"
                />
              </div>
              <h3>Email Copywriting</h3>
              <p>
                Email copy with compelling subject lines, engaging body content, and clear CTAs designed for both deliverability and conversion.
              </p>
              <div className="service-tags">
                <span>Subject Lines</span>
                <span>Newsletter Copy</span>
                <span>Drip Sequences</span>
              </div>
            </div>

            <div className="svc-card" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/content_designing/video_scripts_and_storyboards.png`}
                  alt="Video Scripts & Storyboards"
                  loading="lazy"
                />
              </div>
              <h3>Video Scripts &amp; Storyboards</h3>
              <p>
                Scripts for brand films, product demos, YouTube content, and social reels with structured narratives that brief production teams clearly and captivate viewers.
              </p>
              <div className="service-tags">
                <span>Brand Film Scripts</span>
                <span>YouTube</span>
                <span>Reel Scripts</span>
              </div>
            </div>

            <div className="svc-card" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/content_designing/whitepapers_and_case_studies.png`}
                  alt="Whitepapers & Case Studies"
                  loading="lazy"
                />
              </div>
              <h3>Whitepapers &amp; Case Studies</h3>
              <p>
                Authority-building long-form content including research whitepapers, client case studies, and thought leadership reports that generate B2B leads and build trust.
              </p>
              <div className="service-tags">
                <span>Whitepapers</span>
                <span>Case Studies</span>
                <span>Reports</span>
                <span>eBooks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="tools-section">
        <div className="section-inner">
          <span className="section-tag">Tools &amp; Process</span>
          <h2 className="section-title">Research-Led, SEO-Optimised Content at Scale</h2>
          <p className="section-sub">
            Best-in-class tools ensure every piece of content is thoroughly researched, SEO-optimised, and positioned to outperform competitors.
          </p>
          <div className="tools-grid">
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/content_designing/semrush.png`}
                  alt="SEMrush"
                  loading="lazy"
                />
              </span>
              SEMrush
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/content_designing/ahrefs.png`}
                  alt="Ahrefs"
                  loading="lazy"
                />
              </span>
              Ahrefs
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/content_designing/surferseo.png`}
                  alt="SurferSEO"
                  loading="lazy"
                />
              </span>
              SurferSEO
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/content_designing/grammarly_business.png`}
                  alt="Grammarly Business"
                  loading="lazy"
                />
              </span>
              Grammarly Business
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/content_designing/copyscale.png`}
                  alt="Copyscape"
                  loading="lazy"
                />
              </span>
              Copyscape
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/content_designing/hemingway_editor.png`}
                  alt="Hemingway Editor"
                  loading="lazy"
                />
              </span>
              Hemingway Editor
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/content_designing/notion_cms.png`}
                  alt="Notion CMS"
                  loading="lazy"
                />
              </span>
              Notion CMS
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/content_designing/google_search_console.png`}
                  alt="Google Search Console"
                  loading="lazy"
                />
              </span>
              Google Search Console
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/content_designing/ai_assisted_research.png`}
                  alt="AI-Assisted Research"
                  loading="lazy"
                />
              </span>
              AI-Assisted Research
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/content_designing/clearscope.png`}
                  alt="Clearscope"
                  loading="lazy"
                />
              </span>
              Clearscope
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      {/* Portfolio / Our Work Section */}
      <ServiceOurWorkSection
        work={serviceClientSectionsData['content-development']?.work}
      />

      {/* Process Section */}
      <section className="process-section">
        <div className="section-inner">
          <span className="section-tag">Our Process</span>
          <h2 className="section-title">How We Produce Content That Performs</h2>
          <p className="section-sub">
            A repeatable content production process that maintains quality at scale from initial brief to published, optimised asset.
          </p>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/content_designing/content_audit.png`}
                  alt="Content Audit"
                  loading="lazy"
                />
              </div>
              <h4>Content Audit</h4>
              <p>Review existing content, identify SEO gaps, and uncover keyword opportunities for your brand.</p>
            </div>

            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/content_designing/strategy_and_calendar.png`}
                  alt="Strategy & Calendar"
                  loading="lazy"
                />
              </div>
              <h4>Strategy &amp; Calendar</h4>
              <p>Monthly content plan with agreed topics, formats, and publication timelines.</p>
            </div>

            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/content_designing/research_and_outline.png`}
                  alt="Research & Outline"
                  loading="lazy"
                />
              </div>
              <h4>Research &amp; Outline</h4>
              <p>Keyword research, competitor analysis, and strategic content outlines developed.</p>
            </div>

            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/content_designing/writing_and_design.png`}
                  alt="Writing & Design"
                  loading="lazy"
                />
              </div>
              <h4>Writing &amp; Design</h4>
              <p>First draft written, formatted, and tailored to the target platform and audience.</p>
            </div>

            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/content_designing/review_and_edit.png`}
                  alt="Review & Edit"
                  loading="lazy"
                />
              </div>
              <h4>Review &amp; Edit</h4>
              <p>Editorial review, plagiarism check, SEO optimisation, and client approval completed.</p>
            </div>

            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/content_designing/publish_and_track.png`}
                  alt="Publish & Track"
                  loading="lazy"
                />
              </div>
              <h4>Publish &amp; Track</h4>
              <p>Publication support, distribution amplification, and monthly performance review.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="why-section">
        <div className="section-inner">
          <span className="section-tag" style={{ background: 'rgba(255,255,255,.15)', color: '#fff' }}>
            Why Sociapa Content
          </span>
          <h2 className="section-title">Content Built to Perform, Not Just Publish</h2>
          <p className="section-sub">
            We focus on outcomes such as traffic, leads, and conversions, not just word counts and delivery dates.
          </p>
          <div className="why-grid">
            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/content_designing/seo_led_strategy.png`}
                  alt="SEO-Led Strategy"
                  loading="lazy"
                />
              </div>
              <h4>SEO-Led Strategy</h4>
              <p>Every piece of content is researched for search intent and SEO-optimised to earn organic traffic and improve rankings.</p>
            </div>

            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/content_designing/brand_voice_mastery.png`}
                  alt="Brand Voice Mastery"
                  loading="lazy"
                />
              </div>
              <h4>Brand Voice Mastery</h4>
              <p>We immerse ourselves in your brand voice before writing, creating content that sounds like your brand, not a generic agency.</p>
            </div>

            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/content_designing/volume_at_quality.png`}
                  alt="Volume at Quality"
                  loading="lazy"
                />
              </div>
              <h4>Volume at Quality</h4>
              <p>Structured editorial processes that maintain quality across 100+ pieces per month, with no drop in quality as volume scales.</p>
            </div>

            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/content_designing/multilingual_capability.png`}
                  alt="Multilingual Capability"
                  loading="lazy"
                />
              </div>
              <h4>Multilingual Capability</h4>
              <p>English, Hindi, and regional language content for diverse Indian markets, with native-level quality in every language.</p>
            </div>

            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/content_designing/performance_tracking.png`}
                  alt="Performance Tracking"
                  loading="lazy"
                />
              </div>
              <h4>Performance Tracking</h4>
              <p>Monthly reporting on keyword rankings, organic traffic, engagement, and content-attributed leads, providing clear ROI on content investment.</p>
            </div>

            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/content_designing/content_repurposing.png`}
                  alt="Content Repurposing"
                  loading="lazy"
                />
              </div>
              <h4>Content Repurposing</h4>
              <p>Maximise every content idea by repurposing blogs into social posts, whitepapers into email sequences, and scripts into articles. One idea, multiple assets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* Behind the Work Section */}
      <ServiceBehindWorkSection
        testimonials={serviceClientSectionsData['content-development']?.testimonials}
      />

      {/* Featured Case Studies Slider */}
      <ServiceCaseStudiesSlider />

      {/* FAQ Section */}
      <section className="faq-section" id="faq">
        <div className="section-inner">
          <span className="section-tag">FAQ</span>
          <h2 className="section-title">
            Content Design <span style={{ color: 'var(--red)' }}>Questions Answered</span>
          </h2>
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

      {/* Our Other Services Carousel */}
      <OtherServicesSlider />

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-inner" style={{ maxWidth: '700px' }}>
          <h2>Ready to Build a Content Engine That Drives Growth?</h2>
          <p>Get a free content audit and keyword opportunity report for your brand within 48 hours.</p>
          <a href="mailto:mail@sociapa.com" className="btn-primary">Get My Free Content Audit</a>
        </div>
      </section>
    </div>
  );
}
