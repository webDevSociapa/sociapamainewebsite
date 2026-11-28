import React, { useState, useEffect } from 'react';
import OtherServicesSlider from '../components/OtherServicesSlider';
import ServiceOurWorkSection from '../components/ServiceOurWorkSection';
import ServiceBehindWorkSection from '../components/ServiceBehindWorkSection';
import ServiceCaseStudiesSlider from '../components/ServiceCaseStudiesSlider';
import { serviceClientSectionsData } from '../data/serviceClientSectionsData';
import { Helmet } from 'react-helmet-async';

import './Photography.css';
``

export default function Photography() {
  const base = import.meta.env.BASE_URL || '/';
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="photography-page">
      <Helmet>
        <title>High-Quality Photography &amp; Videography Service in Noida &amp; Delhi NCR, India - Sociapa</title>
        <meta name="description" content="Looking for Best Photography & Videography Service in Noida & Delhi NCR,India? Sociapa is your one-stop solution for all things related to digital marketing." />
        <meta name="keywords" content="Digital Marketing" />
        <link rel="canonical" href="https://sociapa.com/best-photography-services" />
        <meta property="og:title" content="High-Quality Photography & Videography Service in Noida & Delhi NCR, India - Sociapa" />
        <meta property="og:description" content="Looking for Best Photography & Videography Service in Noida & Delhi NCR,India? Sociapa is your one-stop solution for all things related to digital marketing." />
        <meta property="og:url" content="https://sociapa.com/best-photography-services" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="SOCIAPA" />
        <meta property="og:image" content="https://sociapa.com/images/sociapa-og-preview.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sociapa" />
        <meta name="twitter:title" content="High-Quality Photography & Videography Service in Noida & Delhi NCR, India - Sociapa" />
        <meta name="twitter:description" content="Looking for Best Photography & Videography Service in Noida & Delhi NCR,India? Sociapa is your one-stop solution for all things related to digital marketing." />
        <meta name="twitter:image" content="https://sociapa.com/images/sociapa-og-preview.png" />
      </Helmet>

      <div className="serInsideBnr">
        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
          Commercial, E-Commerce &amp; Product Photography Services India - Sociapa
        </h1>
        <div className="row">
          <picture>
            <source media="(max-width: 767px)" srcSet={`${base}images/photography-service-banner-mobile.jpeg`} />
            <img
              src={`${base}images/photography-service-banner.webp`}
              alt="Photography & Videography Service - Sociapa"
              className="responsive-img w-100"
              decoding="async"
              loading="eager"
              fetchpriority="high"
              width="1920"
              height="700"
            />
          </picture>
        </div>
      </div>

      <div className="stats-bar">
        <div className="stats-inner">
          <div><span className="stat-num">1,000+</span><div className="stat-lbl">Shoots Completed</div></div>
          <div><span className="stat-num">50,000+</span><div className="stat-lbl">Images Delivered</div></div>
          <div><span className="stat-num">10+</span><div className="stat-lbl">Specialist Photographers</div></div>
          <div><span className="stat-num">8+</span><div className="stat-lbl">Years Behind the Lens</div></div>
        </div>
      </div>

      <section className="services-section">
        <div className="section-inner">
          <span className="section-tag">Photography Services</span>
          <h2 className="section-title">Every Shot Tells Your Brand's Story</h2>
          <p className="section-sub">From white-background catalogue photography to lifestyle shoots, we create images that showcase products and strengthen your brand.</p>
          <div className="services-grid">
            <div className="svc-card">
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/photography/Product Photography.svg`}
                  alt="Product Photography"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h3>Product Photography</h3>
              <p>Studio and on-location product photography for eCommerce, catalogues, and campaigns, including white background, lifestyle, and flat lay photography with professional retouching.</p>
              <div className="service-tags"><span>eCommerce</span><span>Catalogue</span><span>Flat Lay</span><span>White BG</span></div>
            </div>
            <div className="svc-card">
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/photography/Food Photography.svg`}
                  alt="Food Photography"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h3>Food Photography</h3>
              <p>Professional food photography for FMCG brands, restaurants, and food delivery platforms, with expert food styling and creative prop curation.</p>
              <div className="service-tags"><span>FMCG</span><span>Restaurant</span><span>Food Styling</span><span>Delivery Apps</span></div>
            </div>
            <div className="svc-card">
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/photography/Corporate Photography.svg`}
                  alt="Corporate Photography"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h3>Corporate Photography</h3>
              <p>Professional corporate photography, including executive portraits, team photos, office shoots, and event coverage for websites and business communications.</p>
              <div className="service-tags"><span>Headshots</span><span>Team Photos</span><span>Office Shoots</span></div>
            </div>
            <div className="svc-card">
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/photography/Campaign & Advertising Photography.svg`}
                  alt="Campaign & Advertising Photography"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h3>Campaign & Advertising Photography</h3>
              <p>Hero imagery for print ads, hoardings, digital campaigns, and social media, produced with creative direction, styling, and professional post-production.</p>
              <div className="service-tags"><span>Advertising</span><span>Campaign Hero</span><span>OOH</span><span>Digital</span></div>
            </div>
            <div className="svc-card">
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/photography/Event Photography.svg`}
                  alt="Event Photography"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h3>Event Photography</h3>
              <p>Corporate events, product launches, press conferences, brand activations, and trade shows captured in professional detail for PR, marketing, and social media.</p>
              <div className="service-tags"><span>Product Launches</span><span>Trade Shows</span><span>Press Events</span></div>
            </div>
            <div className="svc-card">
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/photography/Lifestyle & Influencer Photography.svg`}
                  alt="Lifestyle & Influencer Photography"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h3>Lifestyle & Influencer Photography</h3>
              <p>Aspirational lifestyle photography featuring your products in real-life settings for social media, brand storytelling, and influencer marketing.</p>
              <div className="service-tags"><span>Lifestyle</span><span>Social Media</span><span>Brand Story</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="tools-section">
        <div className="section-inner">
          <span className="section-tag">Equipment & Capabilities</span>
          <h2 className="section-title">Professional-Grade Kit for Every Shoot</h2>
          <p className="section-sub">We invest in the best equipment so your images meet the standards of national advertising campaigns and premium digital channels.</p>
          <div className="tools-grid">
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/photography/Sony Alpha A7.svg`}
                  alt="Sony Alpha A7"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </span>
              <span>Sony Alpha A7</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/photography/Canon EOS R5.svg`}
                  alt="Canon EOS R5"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </span>
              <span>Canon EOS R5</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/photography/Studio Lighting.svg`}
                  alt="Studio Lighting"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </span>
              <span>Studio Lighting</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/photography/Adobe Lightroom.svg`}
                  alt="Adobe Lightroom"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </span>
              <span>Adobe Lightroom</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/photography/Adobe Photoshop.svg`}
                  alt="Adobe Photoshop"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </span>
              <span>Adobe Photoshop</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/photography/Drone Photography.svg`}
                  alt="Drone Photography"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </span>
              <span>Drone Photography</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/photography/In-House Studio (2).svg`}
                  alt="In-House Studio"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </span>
              <span>In-House Studio</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/photography/Professional Retouching.svg`}
                  alt="Professional Retouching"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </span>
              <span>Professional Retouching</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/photography/360° Product Spin.svg`}
                  alt="360° Product Spin"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </span>
              <span>360° Product Spin</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/photography/Props & Styling.svg`}
                  alt="Props & Styling"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </span>
              <span>Props & Styling</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio / Our Work Section */}
      <ServiceOurWorkSection
        work={serviceClientSectionsData['photography']?.work}
      />

      <section className="process-section">
        <div className="section-inner">
          <span className="section-tag">Our Process</span>
          <h2 className="section-title">From Brief to Final Delivery</h2>
          <p className="section-sub">A structured pre-production to delivery process that minimises surprises and maximises the quality of every image.</p>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/photography/Creative Brief.svg`}
                  alt="Creative Brief"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h4>Creative Brief</h4>
              <p>Shot list, mood board, usage rights, and styling requirements agreed upfront</p>
            </div>
            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/photography/Pre-Production.svg`}
                  alt="Pre-Production"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h4>Pre-Production</h4>
              <p>Location or studio booking, prop sourcing, model casting, and logistics planning</p>
            </div>
            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/photography/Photography Shoot.svg`}
                  alt="Photography Shoot"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h4>Photography Shoot</h4>
              <p>Professional shoot with art direction and on-set client review of key frames</p>
            </div>
            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/photography/Culling & Selection.svg`}
                  alt="Culling & Selection"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h4>Culling & Selection</h4>
              <p>Best frames shortlisted and shared for client selection within 48 hours</p>
            </div>
            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/photography/Retouching & Edit.svg`}
                  alt="Retouching & Edit"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h4>Retouching & Edit</h4>
              <p>Professional colour grading, retouching, and format export for all use cases</p>
            </div>
            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/photography/Final Delivery.svg`}
                  alt="Final Delivery"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h4>Final Delivery</h4>
              <p>High-res, web-optimised, and social-ready files delivered via secure link</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="section-inner">
          <span className="section-tag section-tag-white">Why Sociapa Photography</span>
          <h2 className="section-title">Images That Work As Hard As Your Brand</h2>
          <p className="section-sub">Great photography is an investment that delivers value across every marketing channel and campaign.</p>
          <div className="why-grid">
            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/photography/In-House Studio.svg`}
                  alt="In-House Studio"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h4>In-House Studio</h4>
              <p>Fully equipped photography studio in Noida with professional lighting, seamless backdrops, and product styling setups for high-quality shoots.</p>
            </div>
            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/photography/Art Direction Included.svg`}
                  alt="Art Direction Included"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h4>Art Direction Included</h4>
              <p>Every shoot is art-directed by our creative team, with composition, styling, and colour planned before production begins.</p>
            </div>
            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/photography/48-Hour Proofs.svg`}
                  alt="48-Hour Proofs"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h4>48-Hour Proofs</h4>
              <p>First image selects delivered within 48 hours of shoot completion, keeping your campaigns on schedule while maintaining exceptional image quality.</p>
            </div>
            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/photography/Multi-Format Delivery.svg`}
                  alt="Multi-Format Delivery"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h4>Multi-Format Delivery</h4>
              <p>Every image is delivered in print, web, social media, and email-ready formats, ready to use across every marketing channel.</p>
            </div>
            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/photography/Volume Capability.svg`}
                  alt="Volume Capability"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h4>Volume Capability</h4>
              <p>From 10-SKU product shoots to 500+ product catalogues, our team delivers consistent, high-quality photography at any scale.</p>
            </div>
            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/photography/Integrated with your marketing.svg`}
                  alt="Marketing Aligned"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h4>Marketing Aligned</h4>
              <p>Photography planned with your digital marketing, social media, and packaging strategy to create visuals that support every campaign.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Work Section */}
      <ServiceBehindWorkSection
        testimonials={serviceClientSectionsData['photography']?.testimonials}
      />

      {/* Featured Case Studies Slider */}
      <ServiceCaseStudiesSlider />

      {/* Our Other Services Carousel */}
      <OtherServicesSlider />
    </div>
  );
}
