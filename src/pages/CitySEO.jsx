import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import legacySeoMeta from '../data/legacySeoMeta.json';
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

  const cleanPath = (seoData.path || '').trim();
  const slug = cleanPath.replace(/^\//, '');
  const legacy = legacySeoMeta[slug] || legacySeoMeta[slug.toLowerCase()];
  const pageTitle = (legacy && legacy.title) || seoData.title || 'Digital Marketing Agency | Sociapa';
  const pageDesc = (legacy && legacy.description) || seoData.description || '';
  const pageCanon = `https://sociapa.com${cleanPath}`;

  // The extracted HTML from the old site typically includes h1, h3, p tags.
  // We wrap it in a clean container and apply sociapa styling.

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        {seoData.keywords && <meta name="keywords" content={seoData.keywords} />}
        <link rel="canonical" href={pageCanon} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Open Graph */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content={pageCanon} />
        <meta property="og:site_name" content="SOCIAPA" />
        <meta property="og:image" content="https://sociapa.com/logoSociapa.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sociapa" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
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
