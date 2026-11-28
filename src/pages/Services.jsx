import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Counter from '../components/Counter';
import {
  serviceCategories,
  getServicesByCategory,
} from '../data/servicesData';
import './Services.css';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('BRANDING');
  const base = import.meta.env.BASE_URL;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredServices = getServicesByCategory(activeCategory);

  return (
    <div className="services-page-wrapper">
      <Helmet>
        <title>Our Services | Full-Service Digital Marketing &amp; Brand Agency - Sociapa</title>
        <meta name="description" content="Explore Sociapa" />
        <link rel="canonical" href="https://sociapa.com/our-services" />
        <meta property="og:title" content="Our Services – Sociapa Digital & Creative Agency" />
        <meta property="og:description" content="End-to-End Digital Solutions & Brand Acceleration Services by Sociapa." />
        <meta property="og:url" content="https://sociapa.com/our-services" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="SOCIAPA" />
        <meta property="og:image" content="https://sociapa.com/images/sociapa-og-preview.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sociapa" />
        <meta name="twitter:title" content="Our Services – Sociapa Digital & Creative Agency" />
        <meta name="twitter:description" content="End-to-End Digital Solutions & Brand Acceleration Services by Sociapa." />
        <meta name="twitter:image" content="https://sociapa.com/images/sociapa-og-preview.png" />
      </Helmet>

      {/* ── FULL BLEED HERO BANNER ── */}
      <div className="serInsideBnr">
        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
          Full-Service Digital Marketing, Creative &amp; Brand Acceleration Services - Sociapa
        </h1>
        <div className="row">
          <picture>
            <img
              src={`${base}images/banners/services/end_to_end_digital.webp`}
              alt="End-to-End Digital Solutions & Brand Acceleration Banner"
              className="responsive-img w-100"
            />
          </picture>
        </div>
      </div>

      {/* ── SERVICES GRID & FILTERS ── */}
      <section className="services-grid-container">
        <h2 className="sr-only">Our Core Digital and Creative Services</h2>
        {/* Category Filter Chips - Single Seamless Row */}
        <div className="svc-filter-tabs">
          {serviceCategories.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`svc-filter-chip ${activeCategory === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="services-grid home-services-grid" key={activeCategory}>
          {filteredServices.map((service, idx) => {
            const isExternal = service.link?.startsWith('http');
            const cardProps = {
              className: `service-card-real animate-on-scroll delay-${(idx % 4) + 1}`,
              key: service.id || idx,
              style: { backgroundImage: `url('${base}images/services/${service.img}')` }
            };
            const cardContent = (
              <div className="overlay-real">
                <h3 className="svc-pro-title">{service.title}</h3>
                <div className="btn waves-effect waves-light rounded-5 serviceBtn home-svc-btn">
                  View More ➔
                </div>
              </div>
            );

            if (isExternal) {
              return (
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...cardProps}
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <Link to={service.link} {...cardProps}>
                {cardContent}
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="services-stats-bar">
        <div className="services-stats-grid">
          <div className="services-stat-item">
            <div className="services-stat-num">
              <Counter end={100} suffix="+" />
            </div>
            <div className="services-stat-label">CLIENTS</div>
          </div>
          <div className="services-stat-divider" />
          <div className="services-stat-item">
            <div className="services-stat-num">
              <Counter end={8} suffix="+" />
            </div>
            <div className="services-stat-label">YEARS OF EXPERIENCE</div>
          </div>
          <div className="services-stat-divider" />
          <div className="services-stat-item">
            <div className="services-stat-num">
              <Counter end={500} suffix="+" />
            </div>
            <div className="services-stat-label">PROJECTS</div>
          </div>
          <div className="services-stat-divider" />
          <div className="services-stat-item">
            <div className="services-stat-num">
              <Counter end={75} suffix="+" />
            </div>
            <div className="services-stat-label">IN-HOUSE TEAM</div>
          </div>
        </div>
      </section>

      {/* ── HIGH-CONVERTING AUDIT & INQUIRY CTA ── */}

      <section className="services-cta-section">
        <div className="container services-cta-container">
          <h2 className="services-cta-title">
            Need a Tailored Growth Strategy for Your Brand?
          </h2>
          <p className="services-cta-desc">
            Get a free comprehensive website &amp; SEO audit or talk directly with our senior brand strategists to map out your digital roadmap.
          </p>

          <div className="services-cta-buttons">
            <Link to="/free-website-audit" className="btn btn-primary services-cta-audit-btn">
              Get Free SEO Audit ✦
            </Link>

            <Link to="/contact-us" className="services-cta-contact-btn">
              Schedule Free Call ➔
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
