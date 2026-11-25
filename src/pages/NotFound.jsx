import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="notfound-container">
      <Helmet>
        <title>404 - Page Not Found | Sociapa</title>
        <meta name="description" content="Sorry, the page you are looking for does not exist or has been moved. Explore Sociapa's digital marketing and creative services." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="notfound-content">
        <div className="notfound-badge">Error 404</div>
        <h1 className="notfound-title">404 - Page Not Found</h1>
        <p className="notfound-desc">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="notfound-actions">
          <Link to="/" className="notfound-btn primary">
            Back to Home
          </Link>
          <Link to="/our-services" className="notfound-btn secondary">
            Explore Services
          </Link>
          <Link to="/contact-us" className="notfound-btn secondary">
            Contact Support
          </Link>
        </div>

        <div className="notfound-popular">
          <h2 className="notfound-popular-title">Popular Destinations</h2>
          <div className="notfound-links">
            <Link to="/best-digital-marketing-services-india">Digital Marketing</Link>
            <span className="dot">•</span>
            <Link to="/best-social-media-marketing-agency-india">Social Media</Link>
            <span className="dot">•</span>
            <Link to="/best-web-development-agency-india">Web Development</Link>
            <span className="dot">•</span>
            <Link to="/influencer-marketing-services">Influencer Marketing</Link>
            <span className="dot">•</span>
            <Link to="/case-studies">Case Studies</Link>
            <span className="dot">•</span>
            <Link to="/blog">Blog</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
