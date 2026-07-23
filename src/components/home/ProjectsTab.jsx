import { useState } from 'react';

export default function ProjectsTab() {
  const [activeTab, setActiveTab] = useState('Creatives');
  const base = import.meta.env.BASE_URL;

  const tabs = ['Creatives', 'Videos', 'Logos', 'Website', 'Packaging'];

  const creatives = [
    `${base}images/creatives/americana.jpeg`,
    `${base}images/creatives/bonn.png`,
    `${base}images/creatives/9am.png`,
  ];

  const videos = [
    'https://www.youtube.com/embed/jGzI0AxamGA',
    'https://www.youtube.com/embed/olqoDRpjiIA',
    'https://www.youtube.com/embed/rlapMRSesvg',
    'https://www.youtube.com/embed/hoBF-EjkLjc',
    'https://www.youtube.com/embed/QsEBnn7ci80',
  ];

  const logos = [
    'apisLogo.png', 'KGS-logo.png', 'Habitat-logo.png', 'Wello-logo.png',
    'DSIS-logo.png', 'kyde-logo.png', 'sunstellar-logo.png', 'tennisHub-logo.png',
    'logo/business-lgoo.png', 'logo/nutrasip-logo.png', 'logo/proply.png', 'logo/himo-logo.png'
  ].map(img => `${base}images/${img}`);

  const websites = [
    `${base}images/onfleekBnr.png`,
    `${base}images/phoneBnr.png`,
    `${base}images/moospringBnr.png`,
  ];

  const packaging = [
    'packaging/shudh-pink-rock-salt.png', 'packaging/besan.png', 'packaging/mix-veg-chips.png',
    'organic-honey-pck.png', 'la-bread.png', 'raj-pckg.png',
    'apis-muesli.png', 'habitat-pckg.png', 'apis-dates.png'
  ].map(img => `${base}images/${img}`);

  return (
    <section className="section section-pad projects-section" id="projects">
      <div className="container projects-container">
        
        {/* Section Header */}
        <div className="projects-header">
          <div className="projects-label">
            <span className="projects-label-dot"></span>
            FEATURED PORTFOLIO
          </div>
          <h2 className="projects-title">
            Featured Work &amp; <span className="projects-title-red">Creative Showcase</span>
          </h2>
          <p className="projects-desc">
            We combine strategic brand storytelling with cutting-edge design to build market leaders across India.
          </p>
        </div>

        {/* Tab Filter Chips */}
        <div className="projects-tab-bar">
          <div className="projects-tab-list">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`projects-tab-chip ${activeTab === tab ? 'active' : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Gallery */}
        <div className="projects-gallery-container">
          
          {activeTab === 'Creatives' && (
            <div className="projects-grid-creatives">
              {creatives.map((img, i) => (
                <div key={i} className="projects-creative-card">
                  <img 
                    src={img} 
                    alt="Creative Project" 
                    className="projects-creative-img"
                    loading="lazy" 
                    decoding="async" 
                  />
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Videos' && (
            <div className="projects-grid-videos">
              {videos.map((vid, i) => (
                <div key={i} className="projects-video-card">
                  <iframe 
                    width="100%" 
                    height="260" 
                    src={vid} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="projects-video-iframe"
                  ></iframe>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Logos' && (
            <div className="projects-grid-logos">
              {logos.map((img, i) => (
                <div key={i} className="projects-logo-card">
                  <img src={img} alt="Logo Design" className="projects-logo-img" loading="lazy" decoding="async" />
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Website' && (
            <div className="projects-grid-websites">
              {websites.map((img, i) => (
                <div key={i} className="projects-website-card">
                  <img 
                    src={img} 
                    alt="Website Project" 
                    className="projects-website-img"
                    loading="lazy" 
                    decoding="async" 
                  />
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Packaging' && (
            <div className="projects-grid-packaging">
              {packaging.map((img, i) => (
                <div key={i} className="projects-packaging-card">
                  <img src={img} alt="Packaging Design" className="projects-packaging-img" loading="lazy" decoding="async" />
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
