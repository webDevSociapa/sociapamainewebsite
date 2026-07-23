import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './Photography.css';

export default function Photography() {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <>
      <Helmet>
        <title>High-Quality Photography &amp; Videography Service in Noida &amp; Delhi NCR, India - Sociapa</title>
        <meta name="description" content="Looking for Best Photography & Videography Service in Noida & Delhi NCR,India? Sociapa is your one-stop solution for all things related to digital marketing." />
        <meta name="keywords" content="Digital Marketing" />
        <link rel="canonical" href="https://www.sociapa.com/photography/" />
        <meta property="og:title" content="High-Quality Photography & Videography Service in Noida & Delhi NCR, India - Sociapa" />
        <meta property="og:description" content="Looking for Best Photography & Videography Service in Noida & Delhi NCR,India? Sociapa is your one-stop solution for all things related to digital marketing." />
        <meta property="og:url" content="https://www.sociapa.com/photography/" />
      </Helmet>

<div className="serInsideBnr">
  <div className="row">
    <picture>
        <source media="(max-width: 767px)" srcSet="images/photography-service-banner-mobile.jpeg" />
        <img src="images/photography-service-banner.jpeg" alt="pr-service-banner" className="responsive-img w-100" />
    </picture>
  </div>
</div>

<section className="hero">
  <div className="hero-inner">
    <div>
      <div className="hero-badge">📸 Product · Food · Corporate · Event Photography</div>
      <h1>Photography That Makes Your <em>Products Irresistible</em></h1>
      <p className="hero-desc">Studio-quality and on-location photography for brands, from catalogue shoots to campaign hero images, creating visuals that bring your brand to life.</p>
      <div className="hero-btns">
        <a href="/contact-us" className="btn-primary">Book a Photography Session</a>
        <a href="/portfolio" className="btn-outline">View Our Portfolio</a>
      </div>
    </div>
    <div className="hero-visual">
      <img src="images/photography-services-left.jpeg" alt="photography-services-left" className="hero-img" />
    </div>
  </div>
</section>

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
        <div className="svc-icon">📦</div>
        <h3>Product Photography</h3>
        <p>Studio and on-location product photography for eCommerce, catalogues, and campaigns, including white background, lifestyle, and flat lay photography with professional retouching.</p>
        <div className="service-tags"><span>eCommerce</span><span>Catalogue</span><span>Flat Lay</span><span>White BG</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">🍽️</div>
        <h3>Food Photography</h3>
        <p>Professional food photography for FMCG brands, restaurants, and food delivery platforms, with expert food styling and creative prop curation.</p>
        <div className="service-tags"><span>FMCG</span><span>Restaurant</span><span>Food Styling</span><span>Delivery Apps</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">🏢</div>
        <h3>Corporate Photography</h3>
        <p>Professional corporate photography, including executive portraits, team photos, office shoots, and event coverage for websites and business communications.</p>
        <div className="service-tags"><span>Headshots</span><span>Team Photos</span><span>Office Shoots</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">🎬</div>
        <h3>Campaign & Advertising Photography</h3>
        <p>Hero imagery for print ads, hoardings, digital campaigns, and social media, produced with creative direction, styling, and professional post-production.</p>
        <div className="service-tags"><span>Advertising</span><span>Campaign Hero</span><span>OOH</span><span>Digital</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">🎉</div>
        <h3>Event Photography</h3>
        <p>Corporate events, product launches, press conferences, brand activations, and trade shows captured in professional detail for PR, marketing, and social media.</p>
        <div className="service-tags"><span>Product Launches</span><span>Trade Shows</span><span>Press Events</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">🌅</div>
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
      <div className="tool-chip"><span className="tool-icon">📷</span>Sony Alpha A7</div>
      <div className="tool-chip"><span className="tool-icon">📷</span>Canon EOS R5</div>
      <div className="tool-chip"><span className="tool-icon">💡</span>Studio Lighting</div>
      <div className="tool-chip"><span className="tool-icon">🎨</span>Adobe Lightroom</div>
      <div className="tool-chip"><span className="tool-icon">🖼️</span>Adobe Photoshop</div>
      <div className="tool-chip"><span className="tool-icon">🎥</span>Drone Photography</div>
      <div className="tool-chip"><span className="tool-icon">🏛️</span>In-House Studio</div>
      <div className="tool-chip"><span className="tool-icon">🖌️</span>Professional Retouching</div>
      <div className="tool-chip"><span className="tool-icon">🔄</span>360° Product Spin</div>
      <div className="tool-chip"><span className="tool-icon">📦</span>Props & Styling</div>
    </div>
  </div>
</section>

<section className="portfolio-section">
  <div className="section-inner">
    <span className="section-tag">Our Portfolio</span>
    <h2 className="section-title">Images That Sell, Stories That Stay</h2>
    <p className="section-sub">Great photography is an investment that delivers value across every marketing channel and campaign.</p>
    <div className="portfolio-grid">
      <div className="port-card">
        <div className="port-img">
          <img src="images/pansari200.png" alt="Pansari Group" className="portfolio-logo" />
        </div>
        <div className="port-info">
          <div className="port-tag">Product · FMCG</div>
          <h4>Pansari Group — Catalogue Shoot</h4>
          <p>Full product line catalogue shoot across 200+ SKUs—studio and lifestyle setups for packaging and eCommerce use.</p>
        </div>
      </div>
      <div className="port-card">
        <div className="port-img">
          <img src="images/bonnClt.png" alt="Bonn Breads" className="portfolio-logo" />
        </div>
        <div className="port-info">
          <div className="port-tag">Food Photography</div>
          <h4>Bonn Breads — Product Campaign</h4>
          <p>Fresh-baked bread lifestyle photography for OOH, packaging, and digital campaigns with professional food styling.</p>
        </div>
      </div>
      <div className="port-card">
        <div className="port-img">
          <img src="images/apisClt.png" alt="APIS India" className="portfolio-logo" />
        </div>
        <div className="port-info">
          <div className="port-tag">Corporate Photography</div>
          <h4>APIS India — Annual Report Shoot</h4>
          <p>Full-day corporate shoot covering executive portraits, team photography, lab environments, and facility interiors.</p>
        </div>
      </div>
      <div className="port-card">
        <div className="port-img">
          <img src="images/nutrela-logo.png" alt="Nutrela Nutrition" className="portfolio-logo" />
        </div>
        <div className="port-info">
          <div className="port-tag">Nutrition Brand Photography</div>
          <h4>Nutrela Nutrition — Product Campaign</h4>
          <p>Creative product photography for nutrition and wellness products, including hero shots, lifestyle compositions, and marketing visuals for digital, eCommerce, and print campaigns.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="process-section">
  <div className="section-inner">
    <span className="section-tag">Our Process</span>
    <h2 className="section-title">From Brief to Final Delivery</h2>
    <p className="section-sub">A structured pre-production to delivery process that minimises surprises and maximises the quality of every image.</p>
    <div className="process-grid">
      <div className="process-step"><div className="step-num">1</div><h4>Creative Brief</h4><p>Shot list, mood board, usage rights, and styling requirements agreed upfront</p></div>
      <div className="process-step"><div className="step-num">2</div><h4>Pre-Production</h4><p>Location or studio booking, prop sourcing, model casting, and logistics planning</p></div>
      <div className="process-step"><div className="step-num">3</div><h4>Photography Shoot</h4><p>Professional shoot with art direction and on-set client review of key frames</p></div>
      <div className="process-step"><div className="step-num">4</div><h4>Culling & Selection</h4><p>Best frames shortlisted and shared for client selection within 48 hours</p></div>
      <div className="process-step"><div className="step-num">5</div><h4>Retouching & Edit</h4><p>Professional colour grading, retouching, and format export for all use cases</p></div>
      <div className="process-step"><div className="step-num">6</div><h4>Final Delivery</h4><p>High-res, web-optimised, and social-ready files delivered via secure link</p></div>
    </div>
  </div>
</section>

<section className="why-section">
  <div className="section-inner">
    <span className="section-tag section-tag-white">Why Sociapa Photography</span>
    <h2 className="section-title">Images That Work As Hard As Your Brand</h2>
    <p className="section-sub">Great photography is an investment that delivers value across every marketing channel and campaign.</p>
    <div className="why-grid">
      <div className="why-card"><div className="w-icon">🏛️</div><h4>In-House Studio</h4><p>Fully equipped photography studio in Noida with professional lighting, seamless backdrops, and product styling setups for high-quality shoots.</p></div>
      <div className="why-card"><div className="w-icon">🎨</div><h4>Art Direction Included</h4><p>Every shoot is art-directed by our creative team, with composition, styling, and colour planned before production begins.</p></div>
      <div className="why-card"><div className="w-icon">⚡</div><h4>48-Hour Proofs</h4><p>First image selects delivered within 48 hours of shoot completion, keeping your campaigns on schedule while maintaining exceptional image quality.</p></div>
      <div className="why-card"><div className="w-icon">🔄</div><h4>Multi-Format Delivery</h4><p>Every image is delivered in print, web, social media, and email-ready formats, ready to use across every marketing channel.</p></div>
      <div className="why-card"><div className="w-icon">📦</div><h4>Volume Capability</h4><p>From 10-SKU product shoots to 500+ product catalogues, our team delivers consistent, high-quality photography at any scale.</p></div>
      <div className="why-card"><div className="w-icon">🤝</div><h4>Marketing Aligned</h4><p>Photography planned with your digital marketing, social media, and packaging strategy to create visuals that support every campaign.</p></div>
    </div>
  </div>
</section>

<section className="testi-section">
  <div className="section-inner">
    <span className="section-tag">Client Stories</span>
    <h2 className="section-title">Brands Who Trust Our Lens</h2>
    <div className="testi-grid">
      <div className="testi-card">
        <div className="stars">★★★★★</div>
        <blockquote>"200+ SKUs shot in two days. Every image was perfectly styled and retouched—our eCommerce conversion rate improved 22% after switching to Sociapa's product photography."</blockquote>
        <div className="testi-author"><div className="avatar">PG</div><div><strong>Neha Agarwal</strong><br/><span>eCommerce Head, Pansari Group</span></div></div>
      </div>
      <div className="testi-card">
        <div className="stars">★★★★★</div>
        <blockquote>"The food styling and photography quality is extraordinary. Our campaign hoarding images stop traffic—literally. Clients have called asking who shot our campaign."</blockquote>
        <div className="testi-author"><div className="avatar">BB</div><div><strong>Manish Kapoor</strong><br/><span>Marketing Director, Bonn Breads</span></div></div>
      </div>
      <div className="testi-card">
        <div className="stars">★★★★★</div>
        <blockquote>"Professional, efficient, and incredibly talented. Our annual report has never looked this good—the executive portraits alone elevated our entire brand communications."</blockquote>
        <div className="testi-author"><div className="avatar">AI</div><div><strong>Sunita Khanna</strong><br/><span>Marketing VP, APIS India</span></div></div>
      </div>
    </div>
  </div>
</section>
        </>
    );
}
