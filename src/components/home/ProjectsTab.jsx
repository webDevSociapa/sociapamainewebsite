import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProjectsTab() {
  const [activeTab, setActiveTab] = useState('CREATIVES');
  const base = import.meta.env.BASE_URL;

  const tabs = ['CREATIVES', 'VIDEOS', 'AI VIDEOS', 'LOGO', 'WEBSITE', 'PACKAGING'];

  // ── 1. CREATIVES DATA ──
  const creativesData = [
    {
      id: 'bonn',
      img: `${base}images/creatives/bonn.webp`,
      brand: 'BONN BREAD',
      title: 'LEHSUNI TADKA',
      desc: 'A slice of Lehsuni Goodness — 360 integrated campaign with high engagement.',
    },
    {
      id: '9am',
      img: `${base}images/creatives/9am.webp`,
      brand: '9AM FOODS',
      title: 'CHUTTI KA CHASKA',
      desc: 'Summer vacation campaign with vibrant storytelling & high engagement.',
    },
    {
      id: 'americana',
      img: `${base}images/creatives/americana.webp`,
      brand: 'AMERICANA',
      title: 'TEA TIME CRISPY',
      desc: 'Playful 3D character visualization for International Tea Day showcase.',
    },
    {
      id: 'bonn-biscuits',
      img: `${base}images/creatives/bonn-biscuits.webp`,
      brand: 'BONN BISCUITS',
      title: 'WORLD OF BISCUITS',
      desc: 'Global trade exhibit branding and packaging engineered for SIAL Paris.',
    },
  ];
  const [selectedCreative, setSelectedCreative] = useState(creativesData[0]);

  // ── 2. VIDEOS DATA ──
  const videosData = [
    {
      id: 'jGzI0AxamGA',
      embedUrl: 'https://www.youtube-nocookie.com/embed/jGzI0AxamGA',
      thumb: 'https://img.youtube.com/vi/jGzI0AxamGA/hqdefault.jpg',
      brand: 'MAHAK GROUP',
      title: 'KHAO MEETHA NO FIKAR',
      desc: 'National campaign starring Bollywood celebrity Janhvi Kapoor for Mint ChocOn.',
    },
    {
      id: 'rlapMRSesvg',
      embedUrl: 'https://www.youtube-nocookie.com/embed/rlapMRSesvg',
      thumb: 'https://img.youtube.com/vi/rlapMRSesvg/hqdefault.jpg',
      brand: 'PANSARI EPICURE',
      title: 'PREMIUM LAUNCH FILM',
      desc: 'A complete B2B and B2C FMCG video campaign showcasing culinary artistry.',
    },
    {
      id: 'QsEBnn7ci80',
      embedUrl: 'https://www.youtube-nocookie.com/embed/QsEBnn7ci80',
      thumb: 'https://img.youtube.com/vi/QsEBnn7ci80/hqdefault.jpg',
      brand: 'BONN GROUP',
      title: 'DO DEEWANE SEHER MEIN',
      desc: 'Heartwarming musical DVC driving emotional brand recall across North India.',
    },
    {
      id: 'hoBF-EjkLjc',
      embedUrl: 'https://www.youtube-nocookie.com/embed/hoBF-EjkLjc',
      thumb: 'https://img.youtube.com/vi/hoBF-EjkLjc/hqdefault.jpg',
      brand: 'MODICARE',
      title: 'CUCKOO ALKALINE PURIFIER',
      desc: 'High-impact product commercial highlighting healthy mineral hydration benefits.',
    },
    {
      id: 'olqoDRpjiIA',
      embedUrl: 'https://www.youtube-nocookie.com/embed/olqoDRpjiIA',
      thumb: 'https://img.youtube.com/vi/olqoDRpjiIA/hqdefault.jpg',
      brand: 'SOCIAPA STUDIO',
      title: 'TURNING IDEAS INTO VISUALS',
      desc: 'Behind the scenes creative showreel capturing high-impact brand commercial production.',
    },
  ];
  const [selectedVideo, setSelectedVideo] = useState(videosData[0]);
  const [videoPage, setVideoPage] = useState(0);
  const videosPerPage = 3;

  // ── 2B. AI VIDEOS DATA (Generative AI Video Production) ──
  const aiVideosData = [
    {
      id: '-TtUmSpuAx8',
      embedUrl: 'https://www.youtube-nocookie.com/embed/-TtUmSpuAx8',
      thumb: 'https://img.youtube.com/vi/-TtUmSpuAx8/hqdefault.jpg',
      brand: 'SOCIAPA AI LABS',
      title: 'SPARKLING DIWALI STORY',
      desc: 'Hyper-realistic generative AI festive campaign crafted with cinematic lighting and visual storytelling.',
    },
    {
      id: 'rr4Y93nSZOE',
      embedUrl: 'https://www.youtube-nocookie.com/embed/rr4Y93nSZOE',
      thumb: 'https://img.youtube.com/vi/rr4Y93nSZOE/hqdefault.jpg',
      brand: 'SOCIAPA AI LABS',
      title: 'FESTIVE SMILES & PROSPERITY',
      desc: 'AI-generated hyper-real character animation and festive atmosphere celebrating joy and prosperity.',
    },
    {
      id: '-XVcmgGMP7E',
      embedUrl: 'https://www.youtube-nocookie.com/embed/-XVcmgGMP7E',
      thumb: 'https://img.youtube.com/vi/-XVcmgGMP7E/hqdefault.jpg',
      brand: 'SOCIAPA AI LABS',
      title: 'LIGHTS & CELEBRATIONS',
      desc: 'Cinematic AI video production blending traditional cultural warmth with cutting-edge visual FX.',
    },
    {
      id: 'nOxPIhHoEMU',
      embedUrl: 'https://www.youtube-nocookie.com/embed/nOxPIhHoEMU',
      thumb: 'https://img.youtube.com/vi/nOxPIhHoEMU/hqdefault.jpg',
      brand: 'SOCIAPA AI LABS',
      title: 'CREATIVE FESTIVE TALE',
      desc: 'AI-powered narrative film showcasing high-concept brand storytelling engineered by Team Sociapa.',
    },
  ];
  const [selectedAiVideo, setSelectedAiVideo] = useState(aiVideosData[0]);
  const [aiVideoPage, setAiVideoPage] = useState(0);
  const aiVideosPerPage = 3;

  // ── 3. LOGOS DATA (SPLIT FORMAT) ──
  const logosData = [
    {
      id: 'apis',
      img: `${base}images/apisLogo.png?v=2`,
      brand: 'APIS INDIA',
      title: 'HERITAGE FMCG IDENTITY',
      desc: 'Iconic emblem and golden palette engineered for India’s premier food brand.',
    },
    {
      id: 'kgs',
      img: `${base}images/KGS-logo.png?v=2`,
      brand: 'KESARI GOLDEN SUGAR',
      title: 'ROYAL SWEETNESS MARK',
      desc: 'Regal crest typography representing unrefined golden sulfur-free purity.',
    },
    {
      id: 'habitat',
      img: `${base}images/Habitat-logo.png?v=2`,
      brand: 'HABITAT LIVING',
      title: 'HOME & LIVING ESSENTIALS',
      desc: 'Clean architectural monogram and geometric lettering for modern living.',
    },
    {
      id: 'wello',
      img: `${base}images/Wello-logo.png?v=2`,
      brand: 'WELLO WELLNESS',
      title: 'HEALTH & CARE FOR ALL',
      desc: 'Dynamic human figure cross emblem communicating holistic healthcare.',
    },
    {
      id: 'dsis',
      img: `${base}images/DSIS-logo.png?v=2`,
      brand: 'DELHI SCHOLARS',
      title: 'INSTITUTIONAL CREST',
      desc: 'Traditional academic shield with book and torch motifs symbolizing excellence.',
    },
    {
      id: 'kyde',
      img: `${base}images/kyde-logo.png?v=2`,
      brand: 'KYDE ACTIVE',
      title: 'MODERN ACTIVEWEAR',
      desc: 'Folded ribbon monogram and bold stencil wordmark for youth lifestyle.',
    },
    {
      id: 'sunstellar',
      img: `${base}images/sunstellar-logo.png?v=2`,
      brand: 'SUNSTELLAR',
      title: 'SOLAR ENERGY SOLUTIONS',
      desc: 'Radiant sun rays icon and clean green palette reflecting solar sustainability.',
    },
    {
      id: 'tennishub',
      img: `${base}images/tennisHub-logo.png?v=2`,
      brand: 'TENNISHUB.IN',
      title: "INDIA'S #1 TENNIS STORE",
      desc: 'Dynamic swooshing tennis ball emblem capturing agility and sport performance.',
    },
    {
      id: 'business-worth',
      img: `${base}images/logo/business-lgoo.png?v=2`,
      brand: 'BUSINESS WORTH',
      title: 'FINANCIAL CONSULTING',
      desc: 'Upward growth arrow integrated into a sleek corporate wealth monogram.',
    },
    {
      id: 'nutrasip',
      img: `${base}images/logo/nutrasip-logo.png?v=2`,
      brand: 'NUTRASIP',
      title: 'HEALTH BEVERAGES',
      desc: 'Fresh vibrant badge and friendly rounded typography for health juices.',
    },
    {
      id: 'proply',
      img: `${base}images/logo/proply.png?v=2`,
      brand: 'PROPLY',
      title: 'PREMIUM COOKWARE',
      desc: 'Casserole icon and heavy industrial serif font for kitchenware.',
    },
    {
      id: 'himo',
      img: `${base}images/logo/himo-logo.png?v=2`,
      brand: 'HIMO',
      title: 'SMART E-MOBILITY',
      desc: 'Pine tree badge and warm organic orange emblem for urban electric mobility.',
    },
  ];
  const [selectedLogo, setSelectedLogo] = useState(logosData[0]);
  const [logoPage, setLogoPage] = useState(0);
  const logosPerPage = 3;

  // ── 4. REAL CLIENT WEBSITES DATA (From Web Development Services) ──
  const websitesData = [
    {
      id: 'apis',
      logo: `${base}images/clients/apis.png`,
      brand: 'FOODS · CORPORATE WEBSITE',
      title: 'Apis India',
      desc: 'New website presenting a wide natural-foods portfolio under one brand.',
      tags: ['Website', 'Corporate', 'Food'],
      link: 'https://www.apisindia.com',
    },
    {
      id: 'nutrela',
      logo: `${base}images/clients/nutrela_nutrition.png`,
      brand: 'NUTRITION · WEBSITE',
      title: 'Patanjali Nutrela Nutrition',
      desc: "A dedicated website for Patanjali Foods' nutrition range.",
      tags: ['Website', 'Nutrition', 'Brand'],
      link: 'https://www.nutrelanutrition.com',
    },
    {
      id: 'tennishub',
      logo: `${base}images/clients/tennishub.png`,
      brand: 'SPORTS · E-COMMERCE',
      title: 'Tennishub.in',
      desc: 'Website development and ongoing e-commerce management for an online tennis store.',
      tags: ['Website', 'E-commerce', 'D2C'],
      link: 'https://www.tennishub.in',
    },
    {
      id: 'habitat',
      logo: `${base}images/clients/habitat.png`,
      brand: 'KITCHENWARE · E-COMMERCE',
      title: 'Habitat',
      desc: 'Online store for a premium kitchenware brand, designed for mobile ordering and gifting.',
      tags: ['Website', 'D2C', 'Lifestyle'],
      link: 'https://habitat.co.in',
    },
    {
      id: 'vanesa',
      logo: `${base}images/clients/vanesa_cosmetics.jpeg`,
      brand: 'FRAGRANCE · E-COMMERCE',
      title: 'Vanesa Cosmetics',
      desc: 'Website built to present a premium fragrance range to trade partners.',
      tags: ['Website', 'B2B', 'Fragrance'],
      link: 'https://www.vanesacosmetics.com',
    },
    {
      id: 'kapil-anand',
      logo: `${base}images/clients/kapil_anand_agro.png`,
      brand: 'B2B · CORPORATE',
      title: 'Kapil Anand Agro',
      desc: 'Corporate website showcasing manufacturing capability to B2B buyers.',
      tags: ['Website', 'B2B', 'Manufacturing'],
      link: 'https://kapilanandagro.com',
    },
  ];
  const [selectedWebsite, setSelectedWebsite] = useState(websitesData[0]);
  const [websitePage, setWebsitePage] = useState(0);
  const websitesPerPage = 3;

  // ── 5. PACKAGING DATA (Real Commercial Shoots & Packaging) ──
  const packagingData = [
    {
      id: 'americana-cookies',
      img: `${base}images/packaging/americana-cookies.webp`,
      brand: 'AMERICANA',
      title: 'CHOCO CHIP COOKIES',
      desc: 'High-appetite flow-wrap packaging with Katrina Kaif campaign & rich chocolate delight.',
    },
    {
      id: 'snackpure',
      img: `${base}images/packaging/snackpure-packaging.webp`,
      brand: 'SNACKPURE',
      title: 'HEALTHY MAKHANA & CHIPS',
      desc: 'Vibrant color-coded FMCG packaging for guilt-free roasted makhana & ragi chips.',
    },
    {
      id: 'la-americana-bread',
      img: `${base}images/packaging/la-americana-bread.webp`,
      brand: 'BONN LA AMERICANA',
      title: 'ZERO MAIDA GOURMET BREAD',
      desc: 'Artisanal kraft-and-window packaging engineered for premium modern trade.',
    },
    {
      id: 'madhusudan-icecream',
      img: `${base}images/packaging/madhusudan-icecream.webp`,
      brand: 'MADHUSUDAN',
      title: 'STRAWBERRY FARM ICE CREAM',
      desc: 'Fresh pastel packaging evoking orchard-fresh dairy indulgence & real strawberry scoops.',
    },
    {
      id: 'apis-honey-range',
      img: `${base}images/packaging/apis-honey-range.webp`,
      brand: 'APIS INDIA',
      title: 'PURE HONEY COMPLETE RANGE',
      desc: 'Iconic golden honeycomb packaging & squeeze bottles engineered for market leadership.',
    },
    {
      id: 'apis-vermicelli',
      img: `${base}images/packaging/apis-vermicelli.webp`,
      brand: 'APIS INDIA',
      title: 'ROASTED VERMICELLI SEVIYAN',
      desc: 'Vibrant FMCG pouch packaging with transparent window & traditional dessert recipe appeal.',
    },
  ];
  const [selectedPackaging, setSelectedPackaging] = useState(packagingData[0]);
  const [packagingPage, setPackagingPage] = useState(0);
  const packagingPerPage = 3;

  // Visible slices for pagination
  const visibleVideos = videosData.slice(
    videoPage * videosPerPage,
    (videoPage + 1) * videosPerPage
  );
  const totalVideoPages = Math.ceil(videosData.length / videosPerPage);

  const visibleAiVideos = aiVideosData.slice(
    aiVideoPage * aiVideosPerPage,
    (aiVideoPage + 1) * aiVideosPerPage
  );
  const totalAiVideoPages = Math.ceil(aiVideosData.length / aiVideosPerPage);

  const visibleLogos = logosData.slice(
    logoPage * logosPerPage,
    (logoPage + 1) * logosPerPage
  );
  const totalLogoPages = Math.ceil(logosData.length / logosPerPage);

  const visibleWebsites = websitesData.slice(
    websitePage * websitesPerPage,
    (websitePage + 1) * websitesPerPage
  );
  const totalWebsitePages = Math.ceil(websitesData.length / websitesPerPage);

  const visiblePackaging = packagingData.slice(
    packagingPage * packagingPerPage,
    (packagingPage + 1) * packagingPerPage
  );
  const totalPackagingPages = Math.ceil(packagingData.length / packagingPerPage);

  return (
    <section className="section projects-section" id="projects" aria-label="Featured Portfolio and Creative Showcase">
      <div className="container projects-container">

        {/* Header Row */}
        <div className="projects-header animate-on-scroll">
          <div className="projects-header-left">
            <span className="projects-header-label">FEATURED PORTFOLIO</span>
            <h2 className="projects-header-heading">
              FEATURED WORK &amp;<br className="projects-br-desktop" />CREATIVE SHOWCASE
            </h2>
            <p className="projects-header-desc">
              We combine strategic brand storytelling with cutting-edge design to build market leaders across India.
            </p>
          </div>
          <Link to="/stories" className="projects-header-viewall">
            View all work <span className="projects-arrow">→</span>
          </Link>
        </div>

        {/* Tab Navigation Line */}
        <div className="projects-tabs-nav" role="tablist" aria-label="Portfolio Categories">
          {tabs.map(tab => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              className={`projects-tab-btn ${activeTab === tab ? 'active' : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Gallery Content */}
        <div className="projects-gallery-wrap">

          {/* ══════════════ 1. CREATIVES TAB ══════════════ */}
          {activeTab === 'CREATIVES' && (
            <div className="projects-creatives-split">
              {/* Left Column: Big Featured Creative */}
              <div className="projects-featured-col">
                <div className="projects-featured-card">
                  <img
                    src={selectedCreative.img}
                    alt={`${selectedCreative.brand} - ${selectedCreative.title}`}
                    className="projects-featured-img"
                    width="620"
                    height="500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Vertical Divider Line */}
              <div className="projects-v-divider" aria-hidden="true" />

              {/* Right Column: 3 Stacked Side Items */}
              <div className="projects-side-col">
                {creativesData.filter(item => item.id !== selectedCreative.id).slice(0, 3).map((item, idx, arr) => (
                  <div key={item.id} className="projects-side-row-wrap">
                    <div
                      className={`projects-side-item ${selectedCreative.id === item.id ? 'is-active' : ''}`}
                      onClick={() => setSelectedCreative(item)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Select ${item.title}`}
                    >
                      <div className="projects-side-img-card">
                        <img
                          src={item.img}
                          alt={`${item.brand} - ${item.title}`}
                          className="projects-side-img"
                          width="135"
                          height="135"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="projects-side-info">
                        <span className="projects-side-brand">{item.brand}</span>
                        <h3 className="projects-side-title">{item.title}</h3>
                        <p className="projects-side-desc">{item.desc}</p>
                      </div>
                    </div>
                    {idx < arr.length - 1 && (
                      <div className="projects-side-h-divider" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ══════════════ 2. VIDEOS TAB (SPLIT FORMAT) ══════════════ */}
          {activeTab === 'VIDEOS' && (
            <div className="projects-creatives-split">
              {/* Left Column: Big Featured Video Player */}
              <div className="projects-featured-col">
                <div className="projects-featured-video-wrap">
                  <iframe
                    src={selectedVideo.embedUrl}
                    title={selectedVideo.title}
                    frameBorder="0"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="projects-featured-iframe"
                  />
                  <div className="projects-featured-caption">
                    <span className="projects-side-brand">{selectedVideo.brand}</span>
                    <h3 className="projects-featured-caption-title">{selectedVideo.title}</h3>
                  </div>
                </div>
              </div>

              {/* Vertical Divider Line */}
              <div className="projects-v-divider" aria-hidden="true" />

              {/* Right Column: Stacked Side Items with Pagination */}
              <div className="projects-side-col">
                <div className="projects-side-nav-header">
                  <span className="projects-side-nav-title">
                    SELECT VIDEO ({videoPage + 1}/{totalVideoPages})
                  </span>
                  <div className="projects-side-nav-btns">
                    <button
                      type="button"
                      aria-label="Previous videos"
                      disabled={videoPage === 0}
                      onClick={() => setVideoPage(p => Math.max(0, p - 1))}
                      className="projects-side-nav-btn"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      aria-label="Next videos"
                      disabled={videoPage >= totalVideoPages - 1}
                      onClick={() => setVideoPage(p => Math.min(totalVideoPages - 1, p + 1))}
                      className="projects-side-nav-btn"
                    >
                      ›
                    </button>
                  </div>
                </div>

                {visibleVideos.map((item, idx) => (
                  <div key={item.id} className="projects-side-row-wrap">
                    <div
                      className={`projects-side-item ${selectedVideo.id === item.id ? 'is-active' : ''}`}
                      onClick={() => setSelectedVideo(item)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Play ${item.title}`}
                    >
                      <div className="projects-side-img-card video-card-thumb">
                        <img
                          src={item.thumb}
                          alt={`${item.brand} - ${item.title}`}
                          className="projects-side-img"
                          width="135"
                          height="135"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="projects-play-pill" aria-hidden="true">▶</div>
                      </div>
                      <div className="projects-side-info">
                        <span className="projects-side-brand">{item.brand}</span>
                        <h3 className="projects-side-title">{item.title}</h3>
                        <p className="projects-side-desc">{item.desc}</p>
                      </div>
                    </div>
                    {idx < visibleVideos.length - 1 && (
                      <div className="projects-side-h-divider" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ══════════════ 2B. AI VIDEOS TAB (SPLIT FORMAT) ══════════════ */}
          {activeTab === 'AI VIDEOS' && (
            <div className="projects-creatives-split">
              {/* Left Column: Big Featured AI Video Player */}
              <div className="projects-featured-col">
                <div className="projects-featured-video-wrap">
                  <iframe
                    src={selectedAiVideo.embedUrl}
                    title={selectedAiVideo.title}
                    frameBorder="0"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="projects-featured-iframe"
                  />
                  <div className="projects-featured-caption">
                    <span className="projects-side-brand">{selectedAiVideo.brand}</span>
                    <h3 className="projects-featured-caption-title">{selectedAiVideo.title}</h3>
                    <p className="projects-side-desc">{selectedAiVideo.desc}</p>
                  </div>
                </div>
              </div>

              {/* Vertical Divider Line */}
              <div className="projects-v-divider" aria-hidden="true" />

              {/* Right Column: Stacked Side Items with Pagination */}
              <div className="projects-side-col">
                <div className="projects-side-nav-header">
                  <span className="projects-side-nav-title">
                    SELECT AI VIDEO ({aiVideoPage + 1}/{totalAiVideoPages})
                  </span>
                  <div className="projects-side-nav-btns">
                    <button
                      type="button"
                      aria-label="Previous AI videos"
                      disabled={aiVideoPage === 0}
                      onClick={() => setAiVideoPage(p => Math.max(0, p - 1))}
                      className="projects-side-nav-btn"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      aria-label="Next AI videos"
                      disabled={aiVideoPage >= totalAiVideoPages - 1}
                      onClick={() => setAiVideoPage(p => Math.min(totalAiVideoPages - 1, p + 1))}
                      className="projects-side-nav-btn"
                    >
                      ›
                    </button>
                  </div>
                </div>

                {visibleAiVideos.map((item, idx) => (
                  <div key={item.id} className="projects-side-row-wrap">
                    <div
                      className={`projects-side-item ${selectedAiVideo.id === item.id ? 'is-active' : ''}`}
                      onClick={() => setSelectedAiVideo(item)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Play ${item.title}`}
                    >
                      <div className="projects-side-img-card video-card-thumb">
                        <img
                          src={item.thumb}
                          alt={`${item.brand} - ${item.title}`}
                          className="projects-side-img"
                          width="135"
                          height="135"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="projects-play-pill" aria-hidden="true">▶</div>
                      </div>
                      <div className="projects-side-info">
                        <span className="projects-side-brand">{item.brand}</span>
                        <h3 className="projects-side-title">{item.title}</h3>
                        <p className="projects-side-desc">{item.desc}</p>
                      </div>
                    </div>
                    {idx < visibleAiVideos.length - 1 && (
                      <div className="projects-side-h-divider" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ══════════════ 3. LOGO TAB (SPLIT FORMAT MATCHING CREATIVES) ══════════════ */}
          {activeTab === 'LOGO' && (
            <div className="projects-creatives-split">
              {/* Left Column: Big Featured Brand Logo Spotlight Card */}
              <div className="projects-featured-col">
                <div className="projects-featured-card projects-logo-featured">
                  <div className="projects-logo-featured-stage">
                    <div className="projects-logo-featured-badge">
                      <img
                        src={selectedLogo.img}
                        alt={`${selectedLogo.brand} - ${selectedLogo.title}`}
                        className="projects-logo-featured-img"
                        width="260"
                        height="120"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                  <div className="projects-featured-caption">
                    <span className="projects-side-brand">{selectedLogo.brand}</span>
                    <h3 className="projects-featured-caption-title">{selectedLogo.title}</h3>
                    <p className="projects-side-desc">{selectedLogo.desc}</p>
                  </div>
                </div>
              </div>

              {/* Vertical Divider Line */}
              <div className="projects-v-divider" aria-hidden="true" />

              {/* Right Column: 3 Stacked Logo Items with Pagination */}
              <div className="projects-side-col">
                <div className="projects-side-nav-header">
                  <span className="projects-side-nav-title">
                    BRAND IDENTITIES ({logoPage + 1}/{totalLogoPages})
                  </span>
                  <div className="projects-side-nav-btns">
                    <button
                      type="button"
                      aria-label="Previous logos"
                      disabled={logoPage === 0}
                      onClick={() => setLogoPage(p => Math.max(0, p - 1))}
                      className="projects-side-nav-btn"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      aria-label="Next logos"
                      disabled={logoPage >= totalLogoPages - 1}
                      onClick={() => setLogoPage(p => Math.min(totalLogoPages - 1, p + 1))}
                      className="projects-side-nav-btn"
                    >
                      ›
                    </button>
                  </div>
                </div>

                {visibleLogos.map((item, idx) => (
                  <div key={item.id} className="projects-side-row-wrap">
                    <div
                      className={`projects-side-item ${selectedLogo.id === item.id ? 'is-active' : ''}`}
                      onClick={() => setSelectedLogo(item)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Select ${item.title}`}
                    >
                      <div className="projects-side-img-card projects-logo-side-img-card">
                        <img
                          src={item.img}
                          alt={`${item.brand} - ${item.title}`}
                          className="projects-logo-side-img"
                          width="110"
                          height="70"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="projects-side-info">
                        <span className="projects-side-brand">{item.brand}</span>
                        <h3 className="projects-side-title">{item.title}</h3>
                        <p className="projects-side-desc">{item.desc}</p>
                      </div>
                    </div>
                    {idx < visibleLogos.length - 1 && (
                      <div className="projects-side-h-divider" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ══════════════ 4. WEBSITE TAB (REAL CLIENT WEBSITES WITH LINKS) ══════════════ */}
          {activeTab === 'WEBSITE' && (
            <div className="projects-creatives-split">
              {/* Left Column: Big Featured Website Showcase Card */}
              <div className="projects-featured-col">
                <div className="projects-website-featured">
                  <div className="projects-website-featured-header">
                    <img
                      src={selectedWebsite.logo}
                      alt={selectedWebsite.title}
                      className="projects-website-featured-logo"
                      width="260"
                      height="120"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="projects-website-caption">
                    <span className="projects-side-brand">{selectedWebsite.brand}</span>
                    <h3 className="projects-featured-caption-title">{selectedWebsite.title}</h3>
                    <p className="projects-side-desc">{selectedWebsite.desc}</p>
                    <div className="projects-website-tags">
                      {selectedWebsite.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="projects-website-tag-pill">{tag}</span>
                      ))}
                    </div>
                    <a
                      href={selectedWebsite.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects-website-visit-btn"
                    >
                      Visit Live Website <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Vertical Divider Line */}
              <div className="projects-v-divider" aria-hidden="true" />

              {/* Right Column: Stacked Website Items with Pagination */}
              <div className="projects-side-col">
                <div className="projects-side-nav-header">
                  <span className="projects-side-nav-title">
                    FEATURED WEBSITES ({websitePage + 1}/{totalWebsitePages})
                  </span>
                  <div className="projects-side-nav-btns">
                    <button
                      type="button"
                      aria-label="Previous websites"
                      disabled={websitePage === 0}
                      onClick={() => setWebsitePage(p => Math.max(0, p - 1))}
                      className="projects-side-nav-btn"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      aria-label="Next websites"
                      disabled={websitePage >= totalWebsitePages - 1}
                      onClick={() => setWebsitePage(p => Math.min(totalWebsitePages - 1, p + 1))}
                      className="projects-side-nav-btn"
                    >
                      ›
                    </button>
                  </div>
                </div>

                {visibleWebsites.map((item, idx) => (
                  <div key={item.id} className="projects-side-row-wrap">
                    <div
                      className={`projects-side-item ${selectedWebsite.id === item.id ? 'is-active' : ''}`}
                      onClick={() => setSelectedWebsite(item)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Select ${item.title}`}
                    >
                      <div className="projects-side-img-card projects-website-side-logo-card">
                        <img
                          src={item.logo}
                          alt={item.title}
                          className="projects-website-side-logo-img"
                          width="110"
                          height="70"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="projects-side-info">
                        <span className="projects-side-brand">{item.brand}</span>
                        <h3 className="projects-side-title">{item.title}</h3>
                        <p className="projects-side-desc">{item.desc}</p>
                      </div>
                    </div>
                    {idx < visibleWebsites.length - 1 && (
                      <div className="projects-side-h-divider" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ══════════════ 5. PACKAGING TAB (SPLIT FORMAT) ══════════════ */}
          {activeTab === 'PACKAGING' && (
            <div className="projects-creatives-split">
              {/* Left Column: Big Featured Packaging Card */}
              <div className="projects-featured-col">
                <div className="projects-featured-card projects-packaging-featured">
                  <div className="projects-packaging-featured-stage">
                    <img
                      src={selectedPackaging.img}
                      alt={`${selectedPackaging.brand} - ${selectedPackaging.title}`}
                      className="projects-packaging-featured-img"
                      width="620"
                      height="400"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="projects-featured-caption">
                    <span className="projects-side-brand">{selectedPackaging.brand}</span>
                    <h3 className="projects-featured-caption-title">{selectedPackaging.title}</h3>
                    <p className="projects-side-desc">{selectedPackaging.desc}</p>
                  </div>
                </div>
              </div>

              {/* Vertical Divider Line */}
              <div className="projects-v-divider" aria-hidden="true" />

              {/* Right Column: Stacked Side Items with Pagination */}
              <div className="projects-side-col">
                <div className="projects-side-nav-header">
                  <span className="projects-side-nav-title">
                    PACKAGING SHOWCASE ({packagingPage + 1}/{totalPackagingPages})
                  </span>
                  <div className="projects-side-nav-btns">
                    <button
                      type="button"
                      aria-label="Previous packaging designs"
                      disabled={packagingPage === 0}
                      onClick={() => setPackagingPage(p => Math.max(0, p - 1))}
                      className="projects-side-nav-btn"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      aria-label="Next packaging designs"
                      disabled={packagingPage >= totalPackagingPages - 1}
                      onClick={() => setPackagingPage(p => Math.min(totalPackagingPages - 1, p + 1))}
                      className="projects-side-nav-btn"
                    >
                      ›
                    </button>
                  </div>
                </div>

                {visiblePackaging.map((item, idx) => (
                  <div key={item.id} className="projects-side-row-wrap">
                    <div
                      className={`projects-side-item ${selectedPackaging.id === item.id ? 'is-active' : ''}`}
                      onClick={() => setSelectedPackaging(item)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Select ${item.title}`}
                    >
                      <div className="projects-side-img-card projects-packaging-side-img-card">
                        <img
                          src={item.img}
                          alt={`${item.brand} - ${item.title}`}
                          className="projects-side-img projects-packaging-side-img"
                          width="135"
                          height="135"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="projects-side-info">
                        <span className="projects-side-brand">{item.brand}</span>
                        <h3 className="projects-side-title">{item.title}</h3>
                        <p className="projects-side-desc">{item.desc}</p>
                      </div>
                    </div>
                    {idx < visiblePackaging.length - 1 && (
                      <div className="projects-side-h-divider" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
