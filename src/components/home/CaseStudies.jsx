import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CaseStudies() {
  const BASE = import.meta.env.BASE_URL;
  const [activeIdx, setActiveIdx] = useState(0);

  const caseStudies = [
    {
      num: '01',
      img: 'images/case_study/figma_card_02_sebum.png',
      category: 'Influencer Activation • 2021',
      title: 'PACKAGING DESIGN',
      tags: ['INFLUENCER STRATEGY', 'DIGITAL PR'],
      desc: 'Modern clinical skincare packaging, vector dieline architecture & brand identity system engineered for Sebum Dermatics.',
      link: '/case-studies/packaging',
    },
    {
      num: '02',
      img: 'images/case_study/figma_card_03_janhvi.png',
      category: 'Influencer Activation • 2021',
      title: 'PRODUCT LAUNCH CAMPAIGN',
      tags: ['INFLUENCER STRATEGY', 'DIGITAL PR'],
      desc: '15M+ impressions & viral national product launch starring Bollywood star Janhvi Kapoor (#MintNahiHintHai).',
      link: '/case-studies/product-launch',
    },
    {
      num: '03',
      img: 'images/case_study/figma_card_04_french_essence.png',
      category: 'Influencer Activation • 2021',
      title: 'DIGITAL CAMPAIGN',
      tags: ['INFLUENCER STRATEGY', 'DIGITAL PR'],
      desc: 'High-fashion tabletop photography, luxury fragrance repositioning & 180% surge in direct e-commerce orders.',
      link: '/case-studies/digital',
    },
    {
      num: '04',
      img: 'images/case_study/apis_figma_hero.png',
      category: 'Influencer Activation • 2021',
      title: 'INFLUENCER CAMPAIGN',
      tags: ['INFLUENCER STRATEGY', 'DIGITAL PR'],
      desc: '2.0M+ reach featuring Chef Ranveer Brar, Zakir Khan & top food creators across high-engagement festive campaigns.',
      link: '/case-studies/influencer-campaign',
    },
    {
      num: '05',
      img: 'images/case_study/figma_card_05_bikano.png',
      category: 'Influencer Activation • 2021',
      title: 'PERFORMANCE MARKETING',
      tags: ['INFLUENCER STRATEGY', 'DIGITAL PR'],
      desc: 'Hyper-targeted festive video distribution, quick-commerce namkeen combos & 4.6x verified return on ad spend.',
      link: '/case-studies/performance',
    },
    {
      num: '06',
      img: 'images/case_study/figma_card_06_tupperware.png',
      category: 'Influencer Activation • 2021',
      title: 'INFLUENCER PR CAMPAIGN',
      tags: ['INFLUENCER STRATEGY', 'DIGITAL PR'],
      desc: '975K+ views across 10 creator UGC videos turning festive shopping into relatable household storytelling.',
      link: '/case-studies/tupperware',
    },
  ];

  return (
    <section className="cs-fig-section" id="casestudies">
      <div className="cs-fig-container">

        {/* Header Row */}
        <div className="cs-fig-header animate-on-scroll">
          <div className="cs-fig-header-left">
            <h2 className="cs-fig-heading">CASE STUDIES</h2>
            <p className="cs-fig-desc">
              We combine strategic brand storytelling with cutting-edge design to build market leaders across India.
            </p>
          </div>
          <Link to="/case-studies" className="cs-fig-viewall">
            View All <span className="cs-fig-arrow">→</span>
          </Link>
        </div>

        {/* 2-Column Grid */}
        <div 
          className="cs-fig-grid animate-on-scroll delay-1"
          onMouseLeave={() => setActiveIdx(0)}
        >
          {caseStudies.map((cs, i) => {
            const isActive = activeIdx === i;
            return (
              <div 
                key={i} 
                className={`cs-fig-card ${isActive ? 'cs-fig-card-active' : ''}`}
                onMouseEnter={() => setActiveIdx(i)}
              >
                {/* Card Image */}
                <Link to={cs.link} className="cs-fig-img-wrap">
                  <img
                    src={`${BASE}${cs.img}`}
                    alt={cs.title}
                    className="cs-fig-img"
                    loading={i < 2 ? 'eager' : 'lazy'}
                    decoding="async"
                    width="580"
                    height="360"
                  />
                  <div className="cs-fig-img-overlay">
                    <span className="cs-fig-overlay-btn">View Project →</span>
                  </div>
                </Link>

                {/* Card Meta */}
                <div className="cs-fig-meta">
                  <div className="cs-fig-num-wrap">
                    <span className="cs-fig-num">{cs.num}</span>
                  </div>

                  <div className="cs-fig-info">
                    <div className="cs-fig-info-top">
                      <div className="cs-fig-info-titles">
                        <h3 className="cs-fig-title">
                          <Link to={cs.link}>{cs.title}</Link>
                        </h3>
                      </div>

                      {/* View Project button */}
                      <Link 
                        to={cs.link} 
                        className="cs-fig-project-btn cs-fig-project-btn-show"
                      >
                        View Project →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
