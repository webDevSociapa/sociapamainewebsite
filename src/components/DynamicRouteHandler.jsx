import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { blogsData } from '../data/blogsData';
import blogsDetailData from '../data/blogsDetailData.json';
import citiesData from '../data/citiesData.json';
import CitySEO from '../pages/CitySEO';
import BlogDetail from '../pages/BlogDetail';
import NotFound from '../pages/NotFound';
import { legacyRedirects } from '../data/redirectsData';
import './DynamicRouteHandler.css';

const DynamicRouteHandler = () => {
  const { slug } = useParams();

  const requestedPath = `/${slug}`;
  const cleanSlug = slug ? slug.toLowerCase().replace(/^\//, '').replace(/\.php$/, '') : '';
  const cleanPath = `/${cleanSlug}`;

  // Set of all static page slugs for redirection mapping
  const staticSlugs = new Set([
    'contact-us', 'sociapa-profile', 'privacy-policy', 'terms-condition', 'sitemap',
    'about', 'our-services', 'influencers-marketplace', 'blog', 'career',
    'best-creative-and-digital-agency-award', 'sociapas-press-release', 'free-website-audit',
    'stories', 'case-studies', '2026', 'pay-per-click-ppc-services-india',
    'aggregator-platform-service', 'brand-identity-design', 'brand-strategy',
    'consultation-idea', 'content-designing', 'creative-designing',
    'best-digital-marketing-services-india', 'email-marketing-services', 'go-to-market',
    'influencer-marketing-services', 'best-packaging-design-agency-india',
    'best-photography-services', 'product-unboxing-experience', 'best-pr-agency-india',
    'gst-company-registration-services', 'seo-aeo-geo',
    'best-social-media-marketing-agency-india', 'videos', 'best-web-development-agency-india',
    'geofencing', 'polygon', 'influencer-need', 'services-app-development',
    'admin'
  ]);

  // 1. If the request is a legacy .php extension, clean and redirect to preserve SEO rankings
  if (slug && slug.toLowerCase().endsWith('.php')) {
    if (['case-studies', 'case-study', 'case_studies', 'case-studio'].includes(cleanSlug)) {
      return <Navigate to="/case-studies" replace />;
    }
    if (legacyRedirects[cleanSlug]) {
      return <Navigate to={legacyRedirects[cleanSlug]} replace />;
    }
    if (staticSlugs.has(cleanSlug)) {
      return <Navigate to={cleanPath} replace />;
    }
    const cityMatch = citiesData.find(c => c.path.toLowerCase() === cleanPath.toLowerCase());
    if (cityMatch) {
      return <Navigate to={cleanPath} replace />;
    }
    const isBlogMatch = !!blogsDetailData[slug] ||
      !!blogsDetailData[cleanSlug] ||
      Object.keys(blogsDetailData).some(k => k.toLowerCase() === cleanSlug) ||
      blogsData.some(b => b.link && b.link.toLowerCase().replace(/^\//, '').replace(/\.php$/, '') === cleanSlug);
    if (isBlogMatch) {
      return <Navigate to={cleanPath} replace />;
    }
  }

  // 2. Check if it's a known legacy redirect URL (prevent soft-404 / home bouncing)
  if (legacyRedirects[cleanSlug]) {
    return <Navigate to={legacyRedirects[cleanSlug]} replace />;
  }

  // 3. Check if it's a city SEO page (case-insensitive)
  const cityMatch = citiesData.find(c => c.path.toLowerCase() === requestedPath.toLowerCase() || c.path.toLowerCase() === cleanPath.toLowerCase());
  if (cityMatch) {
    return <CitySEO seoData={cityMatch} />;
  }

  // 4. Check if it's a blog page (in blogsDetailData or blogsData)
  const isBlogMatch = !!blogsDetailData[slug] ||
    !!blogsDetailData[cleanSlug] ||
    Object.keys(blogsDetailData).some(k => k.toLowerCase() === cleanSlug) ||
    blogsData.some(b => b.link && b.link.toLowerCase().replace(/^\//, '').replace(/\.php$/, '') === cleanSlug);

  if (isBlogMatch) {
    return <BlogDetail />;
  }

  // 5. Fallback - Render 404 page for unknown URLs
  return <NotFound />;
};

export default DynamicRouteHandler;
