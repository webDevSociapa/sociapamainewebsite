import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './CitySEO.css';

const CitySEO = ({ seoData }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!seoData) {
    return (
      <div className="container mt-5 text-center cityseo-not-found">
        <h2>Content not found</h2>
      </div>
    );
  }

  // The extracted HTML from the old site typically includes h1, h3, p tags.
  // We wrap it in a clean container and apply sociapa styling.
  
  return (
    <>
      <Helmet>
        <title>{seoData.title || 'Digital Marketing Agency | Sociapa'}</title>
        <meta name="description" content={seoData.description || ''} />
        {seoData.keywords && <meta name="keywords" content={seoData.keywords} />}
        {seoData.canonical && <link rel="canonical" href={`https://www.sociapa.com${seoData.path}`} />}
        
        {/* Open Graph */}
        <meta property="og:title" content={seoData.title || 'Digital Marketing Agency | Sociapa'} />
        <meta property="og:description" content={seoData.description || ''} />
        <meta property="og:url" content={`https://www.sociapa.com${seoData.path}`} />
        <meta property="og:type" content="article" />
      </Helmet>

      <section className="mt-5 cityseo-section">
        <div className="container">
          <div className="row">
            <div className="col s12">
               {/* Dangerously set inner HTML because we extracted full semantic HTML tags from the old PHP site */}
              <div 
                className="seo-city-content" 
                dangerouslySetInnerHTML={{ __html: seoData.contentHtml }} 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CitySEO;
