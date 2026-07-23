export default function Ecosystem() {
  const base = import.meta.env.BASE_URL;

  const ecosystemData = [
    {
      title: 'Sociapa News',
      link: 'https://sociapanews.com',
      logo: `${base}images/eco-system/sociapa-news.png`,
      tag: 'MEDIA & PRESS',
      desc: 'Breaking industry stories, trending culture, marketing insights, and digital-first journalism.'
    },
    {
      title: 'Sociapa Influencer',
      link: 'https://sociapainfluencer.com',
      logo: `${base}images/eco-system/Influencer-new-Logo-light.png`,
      tag: 'CREATOR NETWORK',
      desc: 'Top-tier creator management, brand collaborations, viral campaigns, and influencer strategy.'
    },
    {
      title: 'FollowUs',
      link: 'https://followus.link',
      logo: `${base}images/eco-system/follow-us-logo.webp`,
      tag: 'SMART PLATFORM',
      desc: 'Next-gen link-in-bio platform engineered for creators, brands, and digital entrepreneurs.'
    },
    {
      title: 'Brand Studio',
      link: 'https://sociapabrandstudio.com/',
      logo: `${base}images/eco-system/brand-studio.png`,
      tag: 'CREATIVE AGENCY',
      desc: 'Full-service brand architecture, packaging design, video production, and high-ROI campaigns.'
    },
    {
      title: 'Onfleek',
      link: 'https://www.onfleekindia.com/',
      logo: `${base}images/eco-system/onfleek-logo.png`,
      tag: 'EXPERIENTIAL & BTL',
      desc: 'On-ground BTL activations, corporate events, trade exhibitions, and brand experiences.'
    }
  ];

  return (
    <section className="section section-pad ecosystem-section" id="ecosystem">
      <div className="container ecosystem-container">
        
        {/* Section Header */}
        <div className="ecosystem-header">
          <div className="ecosystem-label">
            <span className="ecosystem-label-dot"></span>
            CONNECTED NETWORK
          </div>
          <h2 className="ecosystem-title">
            Our Specialized <span className="ecosystem-title-red">Ecosystem</span> Verticals
          </h2>
          <p className="ecosystem-desc">
            Five specialized business verticals, one connected vision — driving growth from digital strategy to on-ground experience.
          </p>
        </div>

        {/* Ecosystem Grid */}
        <div className="ecosystem-grid">
          {ecosystemData.map((item, i) => (
            <a key={i} href={item.link} target="_blank" rel="noreferrer" className="ecosystem-item-link">
              <div className="ecosystem-card">
                {/* Tag Pill */}
                <div className="ecosystem-tag-wrap">
                  <span className="ecosystem-tag">
                    {item.tag}
                  </span>
                </div>

                {/* Logo Frame */}
                <div className="ecosystem-logo-frame">
                  <img 
                    src={item.logo} 
                    alt={item.title} 
                    className="ecosystem-logo-img"
                    loading="lazy" 
                    decoding="async" 
                  />
                </div>

                {/* Content */}
                <h3 className="ecosystem-item-title">
                  {item.title}
                </h3>

                <p className="ecosystem-item-desc">
                  {item.desc}
                </p>

                {/* Link CTA */}
                <div className="ecosystem-item-cta">
                  Visit Vertical Platform
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
