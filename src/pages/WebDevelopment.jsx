import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './WebDevelopment.css';

export default function WebDevelopment() {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <>
      <Helmet>
        <title>Growth-Focused Website design &amp; development Service in Noida &amp; Delhi NCR, India- Sociapa</title>
        <meta name="description" content="Looking for the Best Web Design Company in Noida & Delhi NCR with Strong Web Development Services. We build websites that are designed to grow your business.We at Sociapa offering cost effective & Customized Website design that suits your business need." />
        <meta name="keywords" content="Digital Marketing" />
        <link rel="canonical" href="https://www.sociapa.com/services-web-development/" />
        <meta property="og:title" content="Growth-Focused Website design & development Service in Noida & Delhi NCR, India- Sociapa" />
        <meta property="og:description" content="Looking for the Best Web Design Company in Noida & Delhi NCR with Strong Web Development Services. We build websites that are designed to grow your business.We at Sociapa offering cost effective & Customized Website design that suits your business need." />
        <meta property="og:url" content="https://www.sociapa.com/services-web-development/" />
      </Helmet>

<div className="serInsideBnr">
  <div className="row">
    <picture>
        <source media="(max-width: 767px)" srcSet="images/creative-designing-service-banner-mobile.jpeg" />
        <img src="images/creative-designing-service-banner.jpeg" alt="web-development-service-banner" className="responsive-img w-100" />
    </picture>
  </div>
</div>

<section className="hero">
  <div className="hero-inner">
    <div>
      <div className="hero-badge">💻 React · Node.js · WordPress · E-Commerce</div>
      <h1>Websites That Drive <em>Growth & Conversions</em></h1>
      <p className="hero-desc">From corporate websites to complex e-commerce platforms, Sociapa develops fast, secure, and user-centric web experiences that elevate your brand and drive measurable business results.</p>
      <div className="hero-btns">
        <a href="/contact-us" className="btn-primary">Start a Web Project</a>
        <a href="/portfolio" className="btn-outline">View Our Work</a>
      </div>
    </div>
    <div className="hero-visual">
      <img src="images/creative-designing-left.jpeg" alt="web-development-left" className="hero-img" />
    </div>
  </div>
</section>

<div className="stats-bar">
  <div className="stats-inner">
    <div><span className="stat-num">500+</span><div className="stat-lbl">Websites Launched</div></div>
    <div><span className="stat-num">99.9%</span><div className="stat-lbl">Uptime Guaranteed</div></div>
    <div><span className="stat-num">20+</span><div className="stat-lbl">Expert Developers</div></div>
    <div><span className="stat-num">8+</span><div className="stat-lbl">Years of Experience</div></div>
  </div>
</div>

<section className="services-section">
  <div className="section-inner">
    <span className="section-tag">Development Services</span>
    <h2 className="section-title">End-to-End Web Solutions</h2>
    <p className="section-sub">We build scalable and high-performance websites tailored to your unique business objectives.</p>
    <div className="services-grid">
      <div className="svc-card">
        <div className="svc-icon">🏢</div>
        <h3>Corporate Websites</h3>
        <p>Professional, SEO-optimised corporate websites designed to build trust, communicate your brand story, and generate high-quality B2B leads.</p>
        <div className="service-tags"><span>B2B</span><span>Corporate</span><span>Lead Gen</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">🛒</div>
        <h3>E-Commerce Development</h3>
        <p>High-conversion e-commerce stores on Shopify, WooCommerce, and Magento, built with seamless payment integrations and optimized user flows.</p>
        <div className="service-tags"><span>Shopify</span><span>WooCommerce</span><span>Magento</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">⚡</div>
        <h3>Custom Web Applications</h3>
        <p>Complex, bespoke web applications and portals built on robust frameworks like React, Node.js, and Python to solve unique business challenges.</p>
        <div className="service-tags"><span>React</span><span>Node.js</span><span>Python</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">📱</div>
        <h3>UI/UX Design</h3>
        <p>User-centric interface and experience design that ensures your website is intuitive, engaging, and optimized for conversions across all devices.</p>
        <div className="service-tags"><span>Figma</span><span>Wireframing</span><span>Prototyping</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">🛠️</div>
        <h3>Website Maintenance</h3>
        <p>Ongoing technical support, security updates, performance optimization, and content management to keep your website running flawlessly.</p>
        <div className="service-tags"><span>Support</span><span>Security</span><span>Updates</span></div>
      </div>
      <div className="svc-card">
        <div className="svc-icon">🔍</div>
        <h3>SEO-First Architecture</h3>
        <p>Websites built from the ground up with technical SEO best practices, fast loading speeds, and semantic HTML to ensure high search engine rankings.</p>
        <div className="service-tags"><span>Technical SEO</span><span>Core Web Vitals</span></div>
      </div>
    </div>
  </div>
</section>

<section className="tools-section">
  <div className="section-inner">
    <span className="section-tag">Our Technology Stack</span>
    <h2 className="section-title">Built with Modern Frameworks</h2>
    <p className="section-sub">We use the latest technologies to ensure your website is fast, secure, and future-proof.</p>
    <div className="tools-grid">
      <div className="tool-chip"><span className="tool-icon">⚛️</span>React.js</div>
      <div className="tool-chip"><span className="tool-icon">🟢</span>Node.js</div>
      <div className="tool-chip"><span className="tool-icon">📝</span>WordPress</div>
      <div className="tool-chip"><span className="tool-icon">🛍️</span>Shopify</div>
      <div className="tool-chip"><span className="tool-icon">🐘</span>PHP / Laravel</div>
      <div className="tool-chip"><span className="tool-icon">☁️</span>AWS Hosting</div>
      <div className="tool-chip"><span className="tool-icon">📱</span>HTML5 / CSS3</div>
      <div className="tool-chip"><span className="tool-icon">🗄️</span>MySQL / MongoDB</div>
    </div>
  </div>
</section>

<section className="process-section">
  <div className="section-inner">
    <span className="section-tag">Our Process</span>
    <h2 className="section-title">How We Build Better Websites</h2>
    <p className="section-sub">A structured, agile development process ensuring transparency and quality at every step.</p>
    <div className="process-grid">
      <div className="process-step"><div className="step-num">1</div><h4>Discovery & Strategy</h4><p>We analyze your business goals, target audience, and technical requirements.</p></div>
      <div className="process-step"><div className="step-num">2</div><h4>UI/UX Design</h4><p>Creating wireframes and high-fidelity designs for your approval.</p></div>
      <div className="process-step"><div className="step-num">3</div><h4>Development</h4><p>Writing clean, secure, and optimized code using modern frameworks.</p></div>
      <div className="process-step"><div className="step-num">4</div><h4>Testing & QA</h4><p>Rigorous testing across devices, browsers, and security vulnerabilities.</p></div>
      <div className="process-step"><div className="step-num">5</div><h4>Launch</h4><p>Seamless deployment to your live server with zero downtime.</p></div>
      <div className="process-step"><div className="step-num">6</div><h4>Maintenance</h4><p>Ongoing support, updates, and performance monitoring post-launch.</p></div>
    </div>
  </div>
</section>
        </>
    );
}
