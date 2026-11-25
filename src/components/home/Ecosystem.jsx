import React, { useState } from 'react';

export default function Ecosystem() {
  const base = import.meta.env.BASE_URL;
  const [activeVertical, setActiveVertical] = useState('brand-studio');

  const ecosystemData = [
    {
      id: 'brand-studio',
      title: 'BRAND STUDIO',
      link: 'https://sociapabrandstudio.com/',
      logo: `${base}images/eco-system/brand-studio.png`,
      tag: 'CREATIVE AGENCY',
      desc: 'Full-service brand architecture, packaging design, video production, and high-ROI campaigns.'
    },
    {
      id: 'sociapa-news',
      title: 'SOCIAPA NEWS',
      link: 'https://sociapanews.com',
      logo: `${base}images/eco-system/sociapa-news.png`,
      tag: 'MEDIA & PRESS',
      desc: 'Breaking industry stories, trending culture, marketing insights, and digital-first journalism.'
    },
    {
      id: 'followus',
      title: 'FOLLOWUS',
      link: 'https://followus.link',
      logo: `${base}images/eco-system/follow-us-logo.webp`,
      tag: 'SMART PLATFORM',
      desc: 'Next-gen link-in-bio platform engineered for creators, brands, and digital entrepreneurs.'
    },
    {
      id: 'onfleek',
      title: 'ONFLEEK',
      link: 'https://www.onfleekindia.com/',
      logo: `${base}images/eco-system/onfleek-logo.png`,
      tag: 'EVENTS',
      desc: 'On-ground BTL activations, corporate events, trade exhibitions, and brand experiences.'
    },
    {
      id: 'sociapa-influencer',
      title: 'SOCIAPA INFLUENCER',
      link: 'https://sociapainfluencer.com',
      logo: `${base}images/eco-system/Influencer-new-Logo-light.png`,
      tag: 'CREATOR NETWORK',
      desc: 'Top-tier creator management, brand collaborations, viral campaigns, and influencer strategy.'
    }
  ];

  return (
    <section className="eco-fig-section" id="ecosystem">
      <div className="container eco-fig-container">

        {/* Section Header */}
        <div className="eco-fig-header animate-on-scroll">
          <span className="eco-fig-label">CONNECTED NETWORK</span>
          <h2 className="eco-fig-title">
            OUR SPECIALIZED<br />ECOSYSTEM VERTICALS
          </h2>
          <p className="eco-fig-desc">
            Five specialized business verticals, one connected vision — driving growth from digital strategy to on-ground experience.
          </p>
        </div>

        {/* Vertical Rows List */}
        <div className="eco-fig-list animate-on-scroll delay-1">
          {ecosystemData.map((item) => {
            const isActive = activeVertical === item.id;

            return (
              <div
                key={item.id}
                className={`eco-fig-row ${isActive ? 'eco-fig-row-active' : ''}`}
                onMouseEnter={() => setActiveVertical(item.id)}
                onClick={() => setActiveVertical(item.id)}
              >
                {/* Left Side: Title & Explore Button */}
                <div className="eco-fig-row-left">
                  <h3 className="eco-fig-row-title">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="eco-fig-title-link"
                    >
                      {item.title}
                    </a>
                  </h3>

                  {isActive && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="eco-fig-explore-btn"
                    >
                      Explore Platform <span className="eco-fig-btn-arrow">→</span>
                    </a>
                  )}
                </div>

                {/* Right Side: Preview Card (when active) OR Brand Logo (when inactive) */}
                <div className="eco-fig-row-right">
                  {isActive ? (
                    <div className="eco-fig-preview-card">
                      <div className="eco-fig-card-logo-wrap">
                        <img
                          src={item.logo}
                          alt={item.title}
                          className="eco-fig-card-logo"
                          loading="lazy"
                        />
                      </div>
                      <h4 className="eco-fig-card-title">{item.title}</h4>
                      <p className="eco-fig-card-desc">{item.desc}</p>

                      {/* Small red anchor pin below card connecting to divider line */}
                      <div className="eco-fig-pin" aria-hidden="true">
                        <span className="eco-fig-pin-line"></span>
                        <span className="eco-fig-pin-foot"></span>
                      </div>
                    </div>
                  ) : (
                    <div className="eco-fig-row-logo-wrap">
                      <img
                        src={item.logo}
                        alt={item.title}
                        className="eco-fig-row-logo"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
