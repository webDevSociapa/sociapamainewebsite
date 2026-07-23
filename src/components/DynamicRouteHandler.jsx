import React, { lazy, Suspense, useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { blogsData } from '../data/blogsData';
import blogsDetailData from '../data/blogsDetailData.json';
import CitySEO from '../pages/CitySEO';
import './DynamicRouteHandler.css';

const BlogDetail = lazy(() => import('../pages/BlogDetail'));

const DynamicRouteHandler = () => {
  const { slug } = useParams();
  const [citiesData, setCitiesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    import('../data/citiesData.json')
      .then((module) => {
        setCitiesData(module.default || module);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load cities data', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="route-handler-loading">Loading...</div>;
  }

  const requestedPath = `/${slug}`;
  const cleanSlug = slug ? slug.toLowerCase().replace(/^\//, '').replace(/\.php$/, '') : '';

  // 1. Check if it's a city SEO page (case-insensitive)
  const cityMatch = citiesData.find(c => c.path.toLowerCase() === requestedPath.toLowerCase());
  if (cityMatch) {
    return <CitySEO seoData={cityMatch} />;
  }

  // 2. Check if it's a blog page (in blogsDetailData or blogsData)
  const isBlogMatch = !!blogsDetailData[slug] || 
                      !!blogsDetailData[cleanSlug] || 
                      Object.keys(blogsDetailData).some(k => k.toLowerCase() === cleanSlug) ||
                      blogsData.some(b => b.link && b.link.toLowerCase().replace(/^\//, '').replace(/\.php$/, '') === cleanSlug);
  
  if (isBlogMatch) {
    return (
      <Suspense fallback={<div className="route-handler-loading">Loading Blog...</div>}>
        <BlogDetail />
      </Suspense>
    );
  }

  // 3. Fallback - redirect to home
  return <Navigate to="/" replace />;
};

export default DynamicRouteHandler;
