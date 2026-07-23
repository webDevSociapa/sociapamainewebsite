import { Helmet } from 'react-helmet-async'
import './CompanyProfile.css'

export default function CompanyProfile() {
  return (
    <>
      <Helmet>
        <title>Sociapa – Brand &amp;amp; Creative Portfolio 2026 | Digital Marketing Agency India</title>
        <meta name="description" content="Sociapa is India's award-winning one-stop brand &amp; creative agency — digital marketing, social media, brand strategy, packaging design, photography, videography, SEO · AEO · GEO and PR services. 100+ brands. 7+ years. Explore our 2026 portfolio." />
        <meta name="keywords" content="digital marketing agency India, brand strategy agency Delhi, social media management India, packaging design agency, SEO AEO GEO agency, brand identity design, PR services India, creative agency portfolio 2026, Sociapa, FMCG branding, D2C marketing, influencer marketing India, quick commerce advertising, logo design, TVC production India, content marketing agency" />
        <link rel="canonical" href="https://sociapa.com/portfolio" />
        <meta property="og:title" content="Sociapa Brand &amp; Creative Portfolio 2026 | Digital Marketing Agency India" />
        <meta property="og:description" content="Full-service brand &amp; creative agency – digital marketing, social media, packaging, photography, SEO/AEO/GEO and PR. 100+ brands. 7+ years." />
        <meta property="og:url" content="https://sociapa.com/portfolio" />
      </Helmet>
      
      <div className="company-profile-wrapper">
        <iframe 
          src="/sociapareact/sociapa-profile/index.html" 
          className="company-profile-iframe"
          title="Sociapa Profile"
        />
      </div>
    </>
  )
}
