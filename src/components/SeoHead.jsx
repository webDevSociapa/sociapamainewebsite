import { Helmet } from 'react-helmet-async';

export default function SeoHead({
  title = "Best Digital Marketing & Advertising Agency, Best FMCG marketing and digital agency in Noida & Delhi NCR, India - Sociapa",
  description = "Best Digital Marketing & Advertising Agency in Noida & Delhi NCR – Sociapa allows businesses to improve their online presence, attract targeted traffic and experience extraordinary growth by providing a wide range of services, including SEO, PPC, social media marketing and creative advertising solutions.",
  canonicalUrl = "https://sociapa.com/",
  ogImage = "https://sociapa.com/images/sociapa-og-preview.png",
  ogType = "website",
  schemaJson = null
}) {
  const cleanCanonical = (canonicalUrl || "https://sociapa.com/").replace("https://www.sociapa.com", "https://sociapa.com");
  const cleanOgImage = (ogImage || "https://sociapa.com/images/sociapa-og-preview.png").replace("https://www.sociapa.com", "https://sociapa.com");

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={cleanCanonical} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={cleanCanonical} />
      <meta property="og:site_name" content="SOCIAPA" />
      <meta property="og:image" content={cleanOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@sociapa" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={cleanOgImage} />

      {schemaJson && (
        <script type="application/ld+json">
          {JSON.stringify(schemaJson)}
        </script>
      )}
    </Helmet>
  );
}
