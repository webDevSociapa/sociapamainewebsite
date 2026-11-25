import React, { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SeoHead from '../components/SeoHead';
import ServiceOurWorkSection from '../components/ServiceOurWorkSection';
import { serviceClientSectionsData } from '../data/serviceClientSectionsData';
import { cityServicePagesData } from '../data/cityServicePagesData';
import './CityServicePage.css';

const serviceBanners = {
  'digital-marketing': 'assets/images/services_banner/digital_market/digital.webp',
  'packaging-and-design': 'assets/images/services_banner/packaging_design/packaging.webp',
  'social-media-marketing': 'images/smm-service-banner.webp',
  'seo-aeo-geo': 'assets/images/services_banner/seo_aeo/rank_banner.webp',
  'website-design-and-development': 'assets/images/services_banner/web_development/web_dev.webp',
  'video-production': 'assets/images/services_banner/video_photography/video.webp',
};

const mobileBanners = {
  'social-media-marketing': 'images/smm-service-banner-mobile.jpeg',
};

const serviceStats = {
  'digital-marketing': [
    { num: '250+', label: 'Campaigns Scaled' },
    { num: '4.5×', label: 'Average ROAS Lift' },
    { num: '₹50Cr+', label: 'Media Budget Managed' },
    { num: '8+ Yrs', label: 'Performance Excellence' },
  ],
  'packaging-and-design': [
    { num: '300+', label: 'Packaging SKUs Designed' },
    { num: '50+', label: 'FMCG Brands Transformed' },
    { num: '100%', label: 'Shelf & FSSAI Compliance' },
    { num: '8+', label: 'Design Excellence Awards' },
  ],
  'social-media-marketing': [
    { num: '5M+', label: 'Followers Grown for Clients' },
    { num: '80+', label: 'Active Brand Accounts' },
    { num: '12×', label: 'Average Engagement Lift' },
    { num: '8+ Yrs', label: 'Social Media Leadership' },
  ],
  'seo-aeo-geo': [
    { num: '200+', label: 'Brands Ranked #1' },
    { num: '4.8×', label: 'Organic Traffic Multiplier' },
    { num: '100K+', label: 'Page 1 Ranked Keywords' },
    { num: '95%', label: 'Long-Term Client Retention' },
  ],
  'website-design-and-development': [
    { num: '150+', label: 'Web Platforms Engineered' },
    { num: '<1.2s', label: 'Average Core Web Vitals' },
    { num: '99.9%', label: 'Uptime & Reliability' },
    { num: '100%', label: 'Mobile-First Responsive' },
  ],
  'video-production': [
    { num: '500+', label: 'Commercial Brand Films' },
    { num: '10M+', label: 'Organic Video Views' },
    { num: '4K/8K', label: 'Cinema Camera Gear' },
    { num: '10+', label: 'In-House Directors & VFX Crew' },
  ],
};

const serviceWorkKeyMap = {
  'digital-marketing': 'digital-marketing',
  'packaging-and-design': 'packaging-design',
  'social-media-marketing': 'social-media-marketing',
  'seo-aeo-geo': 'seo-aeo-geo',
  'website-design-and-development': 'web-development',
  'video-production': 'video-production',
};

const clientLogos = [
  { name: 'Apis Honey', src: 'images/apis.png' },
  { name: 'Bonn Group', src: 'images/bonn.png' },
  { name: 'La Americana Gourmet', src: 'images/la_americana.png' },
  { name: 'Wai Wai Noodles', src: 'images/waiwaiLogo.png' },
  { name: 'Patanjali Nutrela', src: 'images/nutrela-logo.png' },
  { name: 'Madhusudan Dairy', src: 'images/madhusudan.png' },
  { name: 'Gyan Dairy', src: 'images/clients/gyan_dairy.png' },
  { name: 'Wello Healthcare', src: 'images/clients/wello.jpg' },
];

const serviceCardIconsMap = {
  'social-media-marketing': [
    'assets/images/services_icons/social_media/Social Media Strategy.png',
    'assets/images/services_icons/social_media/Content Creation & Copywriting.png',
    'assets/images/services_icons/social_media/Paid Social Advertising.png',
    'assets/images/services_icons/social_media/Community Management.png',
    'assets/images/services_icons/social_media/Analytics & Monthly Reporting.png',
    'assets/images/services_icons/social_media/Influencer Collaboration.png',
  ],
  'digital-marketing': [
    'assets/images/services_icons/digital_marketing/Strategy & Consulting.png',
    'assets/images/services_icons/digital_marketing/Search Engine Optimisation (SEO).png',
    'assets/images/services_icons/digital_marketing/Pay Per Click (PPC).png',
    'assets/images/services_icons/digital_marketing/Conversion Rate Optimisation.png',
    'assets/images/services_icons/digital_marketing/Analytics & Reporting.png',
  ],
  'packaging-and-design': [
    'assets/images/services_icons/packaging_design/primary_packaging_design.png',
    'assets/images/services_icons/packaging_design/concept_design.png',
    'assets/images/services_icons/packaging_design/ecommerce_packaging_design.png',
    'assets/images/services_icons/packaging_design/dieline_and_pre_press.png',
    'assets/images/services_icons/packaging_design/compliance_ready_packaging.png',
  ],
  'seo-aeo-geo': [
    'assets/images/services_icons/seo/On-Page SEO & Content Optimisation.png',
    'assets/images/services_icons/seo/Technical Fix.png',
    'assets/images/services_icons/seo/Off-Page SEO & Link Building.png',
    'assets/images/services_icons/seo/Answer Engine Optimisation (AEO).png',
    'assets/images/services_icons/seo/Generative Engine Optimisation (GEO).png',
  ],
  'website-design-and-development': [
    'assets/images/services_icons/website_development/UIUX Design.png',
    'assets/images/services_icons/website_development/React  Frontend Development.png',
    'assets/images/services_icons/website_development/Shopify  eCommerce.png',
    'assets/images/services_icons/website_development/WordPress.png',
    'assets/images/services_icons/website_development/QA & Testing.png',
  ],
  'video-production': [
    'assets/images/services_icons/photography/Campaign & Advertising Photography.png',
    'assets/images/services_icons/photography/Corporate Photography.png',
    'assets/images/services_icons/photography/Lifestyle & Influencer Photography.png',
    'assets/images/services_icons/photography/Drone Photography.png',
    'assets/images/services_icons/photography/Professional Retouching.png',
  ],
};

const whyChooseIconsMap = {
  'social-media-marketing': [
    'assets/images/services_icons/social_media/Dedicated Account Manager.png',
    'assets/images/services_icons/social_media/Data-Driven Decisions.png',
    'assets/images/services_icons/social_media/Agile Content Operations.png',
    'assets/images/services_icons/social_media/Vernacular Content Capability.png',
  ],
  'digital-marketing': [
    'assets/images/services_icons/digital_marketing/Data-First Approach.png',
    'assets/images/services_icons/digital_marketing/Transparent Reporting.png',
    'assets/images/services_icons/digital_marketing/Full-Service Under One Roof.png',
    'assets/images/services_icons/digital_marketing/Google Certified Partner.png',
  ],
  'packaging-and-design': [
    'assets/images/services_icons/packaging_design/consumer_research_led_design.png',
    'assets/images/services_icons/packaging_design/fssai_compliance.png',
    'assets/images/services_icons/packaging_design/channel_specific_expertise.png',
    'assets/images/services_icons/packaging_design/3d_mock_up_tools.png',
  ],
  'seo-aeo-geo': [
    'assets/images/services_icons/seo/Data-Driven, Not Guesswork.png',
    'assets/images/services_icons/seo/Full-Spectrum Search Coverage.png',
    'assets/images/services_icons/seo/Category Expertise in D2C & FMCG.png',
    'assets/images/services_icons/seo/Monthly Transparency Reports.png',
  ],
  'website-design-and-development': [
    'assets/images/services_icons/website_development/UI Design.png',
    'assets/images/services_icons/website_development/UX Strategy.png',
    'assets/images/services_icons/website_development/Launch & Support.png',
    'assets/images/services_icons/website_development/Client Servicing & Support.png',
  ],
  'video-production': [
    'assets/images/services_icons/photography/Creative Brief.png',
    'assets/images/services_icons/photography/Pre-Production.png',
    'assets/images/services_icons/photography/In-House Studio.png',
    'assets/images/services_icons/photography/Multi-Format Delivery.png',
  ],
};

const whyChooseTitles = [
  '360° Strategic Growth Architecture',
  'Real-Time ROI & Analytics Precision',
  'Hyper-Localized Market Playbooks',
  'Dedicated Senior Growth Strategists',
];

const renderIndustrySvg = (name = '') => {
  const n = name.toLowerCase();
  if (n.includes('fmcg') || n.includes('consumer') || n.includes('food') || n.includes('beverage')) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    );
  }
  if (n.includes('commerce') || n.includes('d2c') || n.includes('retail')) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    );
  }
  if (n.includes('health') || n.includes('pharma')) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    );
  }
  if (n.includes('estate') || n.includes('infra')) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="9" y1="6" x2="9" y2="6.01" />
        <line x1="15" y1="6" x2="15" y2="6.01" />
        <line x1="9" y1="10" x2="9" y2="10.01" />
        <line x1="15" y1="10" x2="15" y2="10.01" />
        <line x1="9" y1="14" x2="9" y2="14.01" />
        <line x1="15" y1="14" x2="15" y2="14.01" />
        <path d="M9 18h6v4H9z" />
      </svg>
    );
  }
  if (n.includes('edu') || n.includes('school')) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    );
  }
  if (n.includes('tech') || n.includes('saas') || n.includes('it')) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    );
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
};

export default function CityServicePage() {
  const { serviceSlug, citySlug } = useParams();
  const [openFaq, setOpenFaq] = useState(0);
  const base = import.meta.env.BASE_URL || '/';

  const path = `/${serviceSlug}/${citySlug}`;
  const data = cityServicePagesData[path];

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpenFaq(0);
  }, [path]);

  if (!data) return <Navigate to="/" replace />;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: data.breadcrumbs.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.name,
      item: b.item,
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: (f.a || '').replace(/<[^>]*>/g, ''),
      },
    })),
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Sociapa',
    image: 'https://www.sociapa.com/logoSociapa.png',
    '@id': `https://www.sociapa.com${path}/#localbusiness`,
    url: 'https://www.sociapa.com',
    telephone: '0120 313 0443',
    email: 'mail@sociapa.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'BL-02, Sector 116',
      addressLocality: 'Noida',
      addressRegion: 'Uttar Pradesh',
      postalCode: '201306',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.5692697,
      longitude: 77.3935928,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:30',
      closes: '18:30',
    },
    areaServed: data.city,
    serviceType: `${data.serviceName} Agency`,
  };

  const stats = serviceStats[data.serviceSlug] || [
    { num: '250+', label: 'Brands Accelerated' },
    { num: '4.8×', label: 'Average Growth Lift' },
    { num: '8+ Yrs', label: 'Industry Excellence' },
    { num: '95%', label: 'Client Retention Rate' },
  ];

  const bannerImg = serviceBanners[data.serviceSlug] || 'images/smm-service-banner.webp';
  const mobileBanner = mobileBanners[data.serviceSlug] || null;
  const workKey = serviceWorkKeyMap[data.serviceSlug] || data.serviceSlug;
  const clientWork = serviceClientSectionsData[workKey]?.work || [];
  const serviceIcons = serviceCardIconsMap[data.serviceSlug] || [];
  const whyIcons = whyChooseIconsMap[data.serviceSlug] || [];

  return (
    <>
      <SeoHead
        title={data.title}
        description={data.description}
        canonicalUrl={data.canonical}
        schemaJson={breadcrumbSchema}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      <div className="city-service-page">

        {/* ── 1. UNIVERSAL FULL-WIDTH HERO BANNER (Sociapa Standard) ── */}
        <div className="serInsideBnr">
          <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
            {data.h1} - Sociapa
          </h1>
          <picture>
            {mobileBanner && (
              <source media="(max-width: 767px)" srcSet={`${base}${mobileBanner}`} />
            )}
            <img
              src={`${base}${bannerImg}`}
              alt={`${data.h1} - Sociapa`}
              className="responsive-img w-100"
              width="1920"
              height="700"
              loading="eager"
              fetchpriority="high"
            />
          </picture>
        </div>

        {/* ── 2. STATS BAR (Sociapa Standard) ── */}
        <div className="stats-bar">
          <div className="stats-inner">
            {stats.map((s, idx) => (
              <div key={idx} className="stat-item">
                <span className="stat-num">{s.num}</span>
                <div className="stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 3. PRO LOCATION & BREADCRUMB STRIP ── */}
        <div className="csp-location-strip">
          <div className="container csp-location-inner">
            <div className="csp-breadcrumbs">
              <Link to="/">Home</Link>
              <span className="csp-sep">/</span>
              <Link to={data.servicePageUrl}>{data.serviceName}</Link>
              <span className="csp-sep">/</span>
              <span className="csp-curr">{data.city}</span>
            </div>
            <div className="csp-location-badge">
              <span className="csp-live-dot" />
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Serving Ambitious Brands Across {data.city}</span>
            </div>
          </div>
        </div>

        {/* ── 4. TRUSTED BRAND LOGOS STRIP ── */}
        <section className="csp-clients-strip" aria-label="Trusted Clients">
          <div className="container">
            <div className="csp-clients-header">
              <span className="csp-eyebrow-pill">&#10022; Market Credibility</span>
              <h2 className="csp-clients-title">
                Trusted by Market Leaders in <span className="text-brand-red">{data.city}</span> &amp; Across India
              </h2>
            </div>
            <div className="csp-clients-grid">
              {clientLogos.map((client, idx) => (
                <div className="csp-client-logo-card" key={idx} title={client.name}>
                  <img
                    src={`${base}${client.src}`}
                    alt={`${client.name} - Sociapa Client`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. OUR SERVICES IN CITY ── */}
        <section className="csp-services-section" id="services">
          <div className="container">
            <div className="csp-section-header text-center">
              <span className="csp-eyebrow-pill">&#10022; Full-Funnel Capabilities</span>
              <h2 className="csp-section-title">
                Our {data.serviceName} Solutions in <span className="text-brand-red">{data.city}</span>
              </h2>
              <p className="csp-section-sub center">
                End-to-end multi-channel strategies engineered for scale, high engagement, and maximum commercial profitability in {data.city}.
              </p>
            </div>

            <div className="csp-services-grid">
              {data.serviceCards.map((card, i) => {
                const iconPath = serviceIcons[i % serviceIcons.length];
                return (
                  <div className="csp-service-card" key={i}>
                    <div className="csp-service-card-top">
                      <div className="csp-service-icon-box">
                        {iconPath ? (
                          <img src={`${base}${iconPath}`} alt={card.name} width="46" height="46" loading="lazy" />
                        ) : (
                          <span className="csp-service-icon-fallback">&#10022;</span>
                        )}
                      </div>
                      <span className="csp-service-card-idx">0{i + 1}</span>
                    </div>
                    <h3 className="csp-service-card-title">{card.name}</h3>
                    <p className="csp-service-card-desc">{card.desc}</p>
                    <div className="csp-service-tags">
                      <span>High Impact</span>
                      <span>ROI Driven</span>
                      <span>Scalable</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 6. REAL PORTFOLIO & CASE STUDIES ── */}
        {clientWork.length > 0 && (
          <ServiceOurWorkSection
            work={clientWork}
            title={
              <h2>
                Selected <span>Work &amp; Case Studies</span>
              </h2>
            }
            subtitle={`Explore how Sociapa delivers measurable commercial growth, viral reach, and high ROAS for leading brands across India and ${data.city}.`}
          />
        )}

        {/* ── 7. WHY CHOOSE SOCIAPA ── */}
        <section className="csp-why-section">
          <div className="container">
            <div className="csp-section-header text-center">
              <span className="csp-eyebrow-pill">&#10022; The Sociapa Edge</span>
              <h2 className="csp-section-title">
                Why Leading {data.city} Brands Choose <span className="text-brand-red">Sociapa</span>
              </h2>
              <p className="csp-section-sub center">
                We combine national-caliber creative execution with deep commercial intelligence into {data.city}&apos;s competitive marketplace.
              </p>
            </div>

            <div className="csp-why-grid">
              {data.whyChoosePoints.map((point, i) => {
                const whyIcon = whyIcons[i % whyIcons.length];
                const whyTitle = whyChooseTitles[i % whyChooseTitles.length];
                return (
                  <div className="csp-why-card" key={i}>
                    <div className="csp-why-card-top">
                      <div className="csp-why-icon-box">
                        {whyIcon ? (
                          <img src={`${base}${whyIcon}`} alt={whyTitle} width="44" height="44" loading="lazy" />
                        ) : (
                          <span className="csp-why-icon-fallback">&#10022;</span>
                        )}
                      </div>
                      <span className="csp-why-badge">0{i + 1}</span>
                    </div>
                    <h3 className="csp-why-card-title">{whyTitle}</h3>
                    <p className="csp-why-card-text">{point}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 8. INDUSTRIES WE SERVE ── */}
        <section className="csp-industries-section">
          <div className="container">
            <div className="csp-section-header text-center">
              <span className="csp-eyebrow-pill">&#10022; Vertical Expertise</span>
              <h2 className="csp-section-title">
                Industry Sectors We Accelerate in <span className="text-brand-red">{data.city}</span>
              </h2>
              <p className="csp-section-sub center">
                Tailored growth architectures crafted for {data.city}&apos;s highest-impact industry verticals.
              </p>
            </div>

            <div className="csp-industries-grid">
              {data.industries.map((ind, i) => (
                <div className="csp-industry-card" key={i}>
                  <div className="csp-industry-icon-box">
                    {renderIndustrySvg(ind)}
                  </div>
                  <h3 className="csp-industry-name">{ind}</h3>
                  <span className="csp-industry-pill">Tailored Playbook</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. LOCAL CITY MARKET INSIGHT ── */}
        <section className="csp-city-section">
          <div className="container">
            <div className="csp-city-layout">
              <div className="csp-city-spotlight-card">
                <span className="csp-spotlight-tag">
                  <span className="csp-live-dot" /> {data.city.toUpperCase()} MARKET BRIEF
                </span>
                <h3 className="csp-spotlight-title">{data.city} Commercial Dynamics &amp; Intelligence</h3>
                <div className="csp-spotlight-quote">
                  &ldquo;In {data.city}&apos;s competitive marketplace, brands cannot rely on generic templates. Real growth demands hyper-targeted positioning, deep audience understanding, and ruthless performance optimization.&rdquo;
                </div>
                <div className="csp-spotlight-footer">
                  <div className="csp-spotlight-stat">
                    <strong>100%</strong>
                    <span>Tailored Campaigns</span>
                  </div>
                  <div className="csp-spotlight-stat">
                    <strong>Verified HQ</strong>
                    <span>Noida (Serving {data.city})</span>
                  </div>
                </div>
              </div>

              <div className="csp-city-editorial">
                <span className="csp-eyebrow-pill">&#10022; Local Market Context</span>
                <h2 className="csp-section-title">
                  Why {data.city} Businesses Scale Faster with <span className="text-brand-red">Sociapa</span>
                </h2>
                <div
                  className="csp-city-para"
                  dangerouslySetInnerHTML={{ __html: data.cityContext }}
                />
                <div className="csp-city-cta-inline">
                  <Link to="/contact-us" className="btn btn-primary">
                    Discuss Your {data.city} Growth Goals &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. FREQUENTLY ASKED QUESTIONS ── */}
        <section className="csp-faq-section" id="faq">
          <div className="container">
            <div className="csp-section-header text-center">
              <span className="csp-eyebrow-pill">&#10022; Common Questions &amp; Answers</span>
              <h2 className="csp-section-title">
                Frequently Asked <span className="text-brand-red">Questions</span>
              </h2>
              <p className="csp-section-sub center">
                Everything you need to know about partnering with Sociapa for {data.serviceName.toLowerCase()} in {data.city}.
              </p>
            </div>

            <div className="csp-faq-list">
              {data.faqs.map((faq, i) => (
                <div
                  className={`csp-faq-item${openFaq === i ? ' open' : ''}`}
                  key={i}
                >
                  <div className="csp-faq-indicator" aria-hidden="true" />
                  <button
                    className="csp-faq-question"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    id={`faq-q-${i}`}
                    aria-controls={`faq-a-${i}`}
                  >
                    <div className="csp-faq-q-left">
                      <span className="csp-faq-num">0{i + 1}</span>
                      <span className="csp-faq-q-text">{faq.q}</span>
                    </div>
                    <div className="csp-faq-icon-wrap" aria-hidden="true">
                      <span className="csp-faq-icon">+</span>
                    </div>
                  </button>
                  <div
                    id={`faq-a-${i}`}
                    className="csp-faq-answer"
                    role="region"
                    aria-labelledby={`faq-q-${i}`}
                    dangerouslySetInnerHTML={{ __html: faq.a }}
                  />
                </div>
              ))}
            </div>

            {/* Pro Still-Have-Questions Action Card */}
            <div className="csp-faq-footer-card">
              <div className="csp-faq-footer-badge">
                <span className="csp-faq-footer-icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </span>
                <div className="csp-faq-footer-text">
                  <h4>Have more questions about our {data.serviceName} in {data.city}?</h4>
                  <p>Our senior brand strategists are available to analyze your requirements and answer any specific questions.</p>
                </div>
              </div>
              <Link to="/contact-us" className="csp-faq-footer-btn">
                Talk to a Strategist &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* ── 11. HIGH-CONVERTING BOTTOM CTA ── */}
        <section className="csp-cta-section">
          <div className="container csp-cta-inner">
            <div className="csp-cta-badge">&#10022; Ready to Scale Your Brand?</div>
            <h2 className="csp-cta-title">
              Grow Your {data.city} Business with Sociapa
            </h2>
            <p className="csp-cta-sub">
              Talk to our growth strategists about your {data.serviceName.toLowerCase()} objectives. We will analyze your competitive landscape in {data.city} and present a custom, high-ROAS roadmap.
            </p>

            <div className="csp-cta-contact-chips">
              <a href="tel:01203130443" className="csp-contact-chip">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>0120 313 0443</span>
              </a>
              <a href="mailto:mail@sociapa.com" className="csp-contact-chip">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>mail@sociapa.com</span>
              </a>
              <span className="csp-contact-chip csp-chip-location">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Noida HQ &bull; Serving {data.city} &amp; Pan-India</span>
              </span>
            </div>

            <div className="csp-cta-btn-wrap">
              <Link to="/contact-us" className="btn btn-primary csp-btn-large">
                Schedule Your Free Strategy Audit &rarr;
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}