import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import './CompanyProfile.css'

export default function CompanyProfile() {
  const base = import.meta.env.BASE_URL || '/';
  const profileUrl = `${base}sociapa-profile/index.html`;

  return (
    <>
      <Helmet>
        <title>Sociapa – Brand &amp; Creative Portfolio 2026 | Digital Marketing Agency India</title>
        <meta name="description" content="Sociapa is India's award-winning one-stop brand &amp; creative agency — digital marketing, social media, brand strategy, packaging design, photography, videography, SEO · AEO · GEO and PR services. 100+ brands. 7+ years. Explore our 2026 portfolio." />
        <link rel="canonical" href="https://sociapa.com/sociapa-profile" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sociapa Brand &amp; Creative Portfolio 2026 | Digital Marketing Agency India" />
        <meta property="og:description" content="Full-service brand &amp; creative agency – digital marketing, social media, packaging, photography, SEO/AEO/GEO and PR. 100+ brands. 7+ years." />
        <meta property="og:url" content="https://sociapa.com/sociapa-profile" />
        <meta property="og:site_name" content="SOCIAPA" />
        <meta property="og:image" content="https://sociapa.com/logoSociapa.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sociapa" />
        <meta name="twitter:title" content="Sociapa Brand &amp; Creative Portfolio 2026 | Digital Marketing Agency India" />
        <meta name="twitter:description" content="Full-service brand &amp; creative agency – digital marketing, social media, packaging, photography, SEO/AEO/GEO and PR. 100+ brands. 7+ years." />
        <meta name="twitter:image" content="https://sociapa.com/logoSociapa.png" />
        {/* High-priority preload for Slide 1 (<0.5s instant paint) & predictive prefetch */}
        <link rel="preload" as="image" href={`${base}images/profile_slides/slide_1.jpg`} fetchpriority="high" />
        <link rel="prefetch" href={`${base}images/profile_slides/slide_2.jpg`} />
        <link rel="prefetch" href={`${base}images/profile_slides/slide_3.jpg`} />
        {/* ProfilePage Schema - Required by SOCIAPA (1).docx */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "dateCreated": "2017-01-01T00:00:00+05:30",
          "dateModified": "2026-01-01T00:00:00+05:30",
          "mainEntity": {
            "@type": "Organization",
            "@id": "https://sociapa.com/#organization",
            "name": "Sociapa",
            "alternateName": "SOCIAPA",
            "description": "Sociapa is India's award-winning one-stop brand & creative agency specializing in digital marketing, social media, brand strategy, packaging design, photography, videography, SEO/AEO/GEO, and PR services.",
            "foundingDate": "2017",
            "url": "https://sociapa.com/",
            "logo": "https://sociapa.com/logoSociapa.png",
            "image": "https://sociapa.com/logoSociapa.png",
            "knowsAbout": [
              "Digital Marketing",
              "Brand Strategy",
              "Social Media Marketing",
              "SEO AEO GEO",
              "Video Production",
              "Packaging Design",
              "Influencer Marketing",
              "Public Relations"
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "BL-02, Sector 116",
              "addressLocality": "Noida",
              "addressRegion": "Uttar Pradesh",
              "postalCode": "201306",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.facebook.com/sociapaa/",
              "https://www.instagram.com/sociapa/",
              "https://www.linkedin.com/company/sociapa/"
            ]
          }
        })}</script>
        {/* BreadcrumbList Schema - Required by SOCIAPA (1).docx */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.sociapa.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Sociapa Company Profile",
              "item": "https://www.sociapa.com/sociapa-profile"
            }
          ]
        })}</script>
      </Helmet>

      <div className="company-profile-wrapper">
        <h1
          className="visually-hidden"
          style={{
            position: 'absolute',
            width: '1px',
            height: '1px',
            padding: 0,
            margin: '-1px',
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            border: 0,
          }}
        >
          Sociapa Brand &amp; Creative Portfolio 2026 | Digital Marketing Agency India
        </h1>
        <Link to="/" className="company-profile-back-btn" title="Back to Website">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Back to Website</span>
        </Link>
        <iframe
          src={profileUrl}
          className="company-profile-iframe"
          title="Sociapa Company Profile"
          allow="fullscreen"
          allowFullScreen
        />
      </div>
    </>
  )
}
