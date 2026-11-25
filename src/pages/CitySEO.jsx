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
        <h1>Content Not Found</h1>
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
        <link rel="canonical" href={`https://sociapa.com${seoData.path}`} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Open Graph */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seoData.title || 'Digital Marketing Agency | Sociapa'} />
        <meta property="og:description" content={seoData.description || ''} />
        <meta property="og:url" content={`https://sociapa.com${seoData.path}`} />
        <meta property="og:site_name" content="SOCIAPA" />
        <meta property="og:image" content="https://sociapa.com/logoSociapa.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sociapa" />
        <meta name="twitter:title" content={seoData.title || 'Digital Marketing Agency | Sociapa'} />
        <meta name="twitter:description" content={seoData.description || ''} />
        <meta name="twitter:image" content="https://sociapa.com/logoSociapa.png" />

        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Sociapa",
                "item": "https://sociapa.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": seoData.title || "Services in India",
                "item": `https://sociapa.com${seoData.path}`
              }
            ]
          })}
        </script>
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
