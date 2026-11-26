import React, { useEffect, useState } from 'react';
import OtherServicesSlider from '../components/OtherServicesSlider';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Polygon.css';

const faqsData = [
  {
    q: "What is polygon targeting and how does it differ from traditional geofencing?",
    a: "Polygon targeting is an advanced form of location-based marketing where custom multi-point geometric boundaries (polygons) are drawn directly on a digital map to mirror the exact contours of a building, store, or venue. Standard geofencing uses a simple circular radius from a center point, which often captures unintended roads, sidewalks, or neighboring buildings. Polygon targeting eliminates this waste by contouring strictly to the target property."
  },
  {
    q: "How does polygon targeting prevent wasted ad spend?",
    a: "By drawing custom boundary lines that trace physical walls, fences, and parcel boundaries, polygon targeting ensures your ads are only served to individuals who actually set foot inside your designated location. Passersby on the highway or people living in apartment blocks across the street are excluded, maximizing ad budget efficiency."
  },
  {
    q: "Can I target specific sections within a large shopping mall or convention center?",
    a: "Yes! Polygon targeting gives you the granular capability to isolate specific wings, anchor stores, or exhibition halls within a massive multi-acre facility, ensuring you only pay to reach visitors interested in that exact subsection."
  },
  {
    q: "What types of locations can be mapped with polygon targeting?",
    a: "Virtually any physical space can be mapped, including competitor car showrooms, trade show booths, corporate tech parks, luxury apartment complexes, golf courses, university departments, and stadium seating sections."
  },
  {
    q: "How long can we retarget visitors identified through polygon targeting?",
    a: "Once a device enters the polygon boundary and its privacy-compliant Mobile Advertising ID (MAID) is captured, Sociapa can build a high-intent audience segment and deliver sequential retargeting ads across mobile, desktop, and tablet devices for up to 30 days."
  },
  {
    q: "Can polygon targeting track actual physical store visits?",
    a: "Yes. By drawing a secondary polygon boundary (a 'Conversion Zone') around your own retail storefront or office, our analytics platform measures the exact number of users who saw a polygon ad and subsequently visited your store, calculating your exact Cost Per Visit (CPV)."
  },
  {
    q: "How does polygon targeting comply with user privacy regulations?",
    a: "Sociapa's polygon marketing platform is 100% compliant with global and Indian privacy standards. We do not collect Personally Identifiable Information (PII); rather, we leverage anonymized, hashed Mobile Advertising IDs (MAIDs) with explicit opt-in location permissions."
  },
  {
    q: "How does polygon targeting integrate with PPC and social media campaigns?",
    a: "Polygon audiences can be exported into custom programmatic DSPs, Meta Ads, and Google Ads managers to power hyper-targeted <a href='/pay-per-click-ppc-services-india' class='seo-interlink'>PPC campaigns</a> and <a href='/best-social-media-marketing-agency-india' class='seo-interlink'>social media advertising</a>, multiplying campaign ROI."
  }
];

export default function Polygon() {
  const base = import.meta.env.BASE_URL || '/';
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="polygon-page">
      <Helmet>
        <title>Polygon Targeting & Precision Hyperlocal Audience Mapping - Sociapa</title>
        <meta
          name="description"
          content="Maximize advertising ROI with custom-drawn polygon targeting from Sociapa. Map exact property perimeters, competitor stores, events, and campuses with zero spillover."
        />
        <meta
          name="keywords"
          content="Polygon Targeting, Polygon Geofencing, Custom Boundary Advertising, Hyperlocal Audience Mapping, Competitor Conquesting, Location Intelligence India"
        />
        <link rel="canonical" href="https://sociapa.com/polygon" />
        <meta property="og:title" content="Polygon Targeting & Precision Hyperlocal Audience Mapping - Sociapa" />
        <meta
          property="og:description"
          content="Maximize advertising ROI with custom-drawn polygon targeting. Map exact property perimeters, competitor stores, events, and campuses with zero spillover."
        />
        <meta property="og:url" content="https://sociapa.com/polygon" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SOCIAPA" />
        <meta property="og:image" content="https://sociapa.com/images/ad-experience-service-banner.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sociapa" />
        <meta name="twitter:title" content="Polygon Targeting & Audience Mapping - Sociapa" />
        <meta
          name="twitter:description"
          content="Maximize advertising ROI with custom-drawn polygon targeting from Sociapa. Map exact property perimeters with zero spillover."
        />
        <meta name="twitter:image" content="https://sociapa.com/images/ad-experience-service-banner.jpeg" />

        {/* Structured Data: FAQPage */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqsData.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.a
            }
          }))
        })}</script>

        {/* Structured Data: BreadcrumbList */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sociapa.com/" },
            { "@type": "ListItem", "position": 2, "name": "Our Services", "item": "https://sociapa.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Polygon Targeting", "item": "https://sociapa.com/polygon" }
          ]
        })}</script>
      </Helmet>

      {/* Hero Visual Section */}
      <section className="hero-banner-section">
        <picture>
          <source media="(max-width: 767px)" srcSet={`${base}images/ad-experience-service-banner-mobile.webp`} />
          <source type="image/webp" srcSet={`${base}images/ad-experience-service-banner.webp`} />
          <img
            src={`${base}images/ad-experience-service-banner.jpeg`}
            alt="Polygon Targeting and Precision Hyperlocal Audience Mapping - Sociapa"
            className="hero-banner-img"
            width="1920"
            height="700"
            loading="eager"
            fetchpriority="high"
          />
        </picture>
      </section>

      {/* Main Page Introduction */}
      <section className="page-intro-section">
        <div className="section-inner">
          <div className="badge-pill">
            <span className="badge-dot"></span>
            Custom Multi-Point Geometry
          </div>

          {/* Mandatory 1st Heading */}
          <h1 className="main-title">
            Polygon Targeting &amp; <span className="highlight-text">Precision Hyperlocal Audience Mapping</span>
          </h1>

          <p className="intro-lead">
            Eliminate wasted ad spend with surgical location precision. By tracing the exact contours of buildings, convention halls, auto dealerships, and competitor showrooms, Sociapa delivers ads strictly to individuals who physically walk inside your target perimeter — with zero spillover into adjacent streets.
          </p>

          <div className="hero-cta-group">
            <Link to="/contact-us" className="btn-primary-poly">
              Design Your Polygon Campaign
              <span>&rarr;</span>
            </Link>
            <Link to="/geofencing" className="btn-secondary-poly">
              Compare with Geofencing
            </Link>
          </div>
        </div>
      </section>

      {/* Key Stats Bar */}
      <div className="stats-bar-poly">
        <div className="section-inner">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-val">100%</div>
              <div className="stat-lbl">Contour-Matching Accuracy</div>
            </div>
            <div className="stat-card">
              <div className="stat-val">0%</div>
              <div className="stat-lbl">Off-Target Street Spillover</div>
            </div>
            <div className="stat-card">
              <div className="stat-val">4.2x</div>
              <div className="stat-lbl">Higher Engagement vs Radius</div>
            </div>
            <div className="stat-card">
              <div className="stat-val">30-Day</div>
              <div className="stat-lbl">Cross-Device Retargeting Graph</div>
            </div>
          </div>
        </div>
      </div>

      {/* Circle vs Polygon Comparison Section */}
      <section className="content-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">The Precision Difference</span>
            <h2 className="section-heading">Why Circular Radiuses Waste Budget &amp; Polygons Deliver ROI</h2>
            <p className="section-desc">
              Traditional radius targeting relies on simple circles drawn around a pin. But the real world is made of irregular building contours, property plots, and designated zones. In conjunction with our <a href="/geofencing" className="seo-interlink">geofencing advertising services</a>, polygon targeting provides true surgical precision.
            </p>
          </div>

          <div className="visual-compare-grid">
            <div className="compare-box bad">
              <h3>Traditional Circular Radius (The "Circle Problem")</h3>
              <p>
                A standard circle forces you to pay for impressions served to people in nearby parking lots, commuters speeding on adjacent highways, or residents living across the street who have zero interest in your offer.
              </p>
              <ul>
                <li>❌ High ad budget wastage on off-target passersby</li>
                <li>❌ Inability to isolate single stores in shopping plazas</li>
                <li>❌ Unreliable foot traffic attribution and inflated vanity metrics</li>
                <li>❌ Diluted audience signals for subsequent retargeting</li>
              </ul>
            </div>

            <div className="compare-box good">
              <h3>Sociapa Custom Polygon Targeting (Surgical Geometry)</h3>
              <p>
                We plot infinite multi-point vectors that map directly to the architectural blueprint of a target venue, ensuring only active visitors qualify for ad delivery.
              </p>
              <ul>
                <li>✅ Zero spillover into roads, parking structures, or adjacent lots</li>
                <li>✅ Isolate exact exhibition booths, stadium sections, or dealerships</li>
                <li>✅ Verified physical footfall tracking with Conversion Zones</li>
                <li>✅ Hyper-qualified custom audiences for <a href="/pay-per-click-ppc-services-india" className="seo-interlink">PPC retargeting</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Polygon Use Cases Grid */}
      <section className="content-section bg-light">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">High-Impact Applications</span>
            <h2 className="section-heading">Where Polygon Targeting Delivers Maximum Impact</h2>
            <p className="section-desc">
              From competitive conquesting to enterprise B2B trade shows, see how custom vector boundaries transform local marketing performance.
            </p>
          </div>

          <div className="poly-grid">
            <div className="poly-card">
              <div className="poly-card-icon">
                <img src={`${base}icons/ads-experience/Polygon-Geo-Fencing-Ads.png`} alt="Automotive Showrooms" width="32" height="32" />
              </div>
              <h3>Automotive Dealership Conquesting</h3>
              <p>
                Trace the exact lot boundaries of competing car showrooms while excluding the high-speed highway running in front of the lot. Serve trade-in and financing offers directly to shoppers on the showroom floor.
              </p>
              <div className="poly-card-tags">
                <span className="poly-tag">Auto Dealers</span>
                <span className="poly-tag">Showroom Shoppers</span>
                <span className="poly-tag">Test Drive Offers</span>
              </div>
            </div>

            <div className="poly-card">
              <div className="poly-card-icon">
                <img src={`${base}icons/ads-experience/Audience-Brief.png`} alt="Trade Shows & Expos" width="32" height="32" />
              </div>
              <h3>Exhibition Halls &amp; Trade Shows</h3>
              <p>
                Map individual halls within massive convention grounds. Target corporate decision-makers during industry summits and retarget them across B2B channels for 30 days after the event concludes.
              </p>
              <div className="poly-card-tags">
                <span className="poly-tag">B2B Summits</span>
                <span className="poly-tag">Keynote Halls</span>
                <span className="poly-tag">Industry Expos</span>
              </div>
            </div>

            <div className="poly-card">
              <div className="poly-card-icon">
                <img src={`${base}icons/ads-experience/Full-Funnel-Coverage.png`} alt="Luxury Real Estate" width="32" height="32" />
              </div>
              <h3>Luxury Real Estate &amp; Golf Clubs</h3>
              <p>
                Ring-fence premier residential towers, elite private clubs, and luxury marinas to reach ultra-high-net-worth individuals (UHNWIs) backed by strategic <a href="/brand-strategy" className="seo-interlink">brand positioning</a>.
              </p>
              <div className="poly-card-tags">
                <span className="poly-tag">Luxury Villas</span>
                <span className="poly-tag">Private Clubs</span>
                <span className="poly-tag">High Net Worth</span>
              </div>
            </div>

            <div className="poly-card">
              <div className="poly-card-icon">
                <img src={`${base}icons/ads-experience/Platform-Strategy.png`} alt="University Campuses" width="32" height="32" />
              </div>
              <h3>University &amp; Tech Park Campuses</h3>
              <p>
                Focus ad delivery strictly on college student dormitories, libraries, or IT business parks while excluding surrounding municipal zones for education and recruitment campaigns.
              </p>
              <div className="poly-card-tags">
                <span className="poly-tag">IT Parks</span>
                <span className="poly-tag">Student Housing</span>
                <span className="poly-tag">Tech Corridors</span>
              </div>
            </div>

            <div className="poly-card">
              <div className="poly-card-icon">
                <img src={`${base}icons/ads-experience/Real-Time-Optimisation.png`} alt="Anchor Retail Isolation" width="32" height="32" />
              </div>
              <h3>Mall Anchor Stores &amp; Plazas</h3>
              <p>
                Isolate your specific retail floor inside a multi-level shopping center without advertising to people visiting the cinema or grocery section on the opposite side of the mall.
              </p>
              <div className="poly-card-tags">
                <span className="poly-tag">Retail Malls</span>
                <span className="poly-tag">Anchor Tenants</span>
                <span className="poly-tag">Floor-Level</span>
              </div>
            </div>

            <div className="poly-card">
              <div className="poly-card-icon">
                <img src={`${base}icons/ads-experience/Impact-Report.png`} alt="Verified Footfall Attribution" width="32" height="32" />
              </div>
              <h3>Conversion Zone Footfall Attribution</h3>
              <p>
                Measure offline foot traffic lift with mathematical certainty. When a targeted consumer walks into your physical store, our attribution engine logs the visit in real time.
              </p>
              <div className="poly-card-tags">
                <span className="poly-tag">Conversion Zones</span>
                <span className="poly-tag">True Footfall</span>
                <span className="poly-tag">Closed-Loop ROI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Methodology Section */}
      <section className="content-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">How We Execute</span>
            <h2 className="section-heading">Sociapa's 4-Step Polygon Implementation</h2>
            <p className="section-desc">
              From aerial boundary drawing to omnichannel programmatic retargeting.
            </p>
          </div>

          <div className="poly-grid">
            <div className="poly-card">
              <h3>1. Blueprint &amp; Vector Mapping</h3>
              <p>
                Our geospatial analysts study satellite imagery and parcel data to draw custom multi-point polygons hugging the exact physical structures you wish to target.
              </p>
            </div>
            <div className="poly-card">
              <h3>2. Device ID Resolution</h3>
              <p>
                Through opt-in GPS signals and cellular verification, our system captures Mobile Advertising IDs (MAIDs) of users active inside the polygon boundary.
              </p>
            </div>
            <div className="poly-card">
              <h3>3. Omnichannel Programmatic Delivery</h3>
              <p>
                Serve interactive display, video, and native ads through premium programmatic DSPs, backed by <a href="/best-digital-marketing-services-india" className="seo-interlink">performance digital marketing</a> strategies.
              </p>
            </div>
            <div className="poly-card">
              <h3>4. Verification &amp; Walk-In Tracking</h3>
              <p>
                Review real-time dashboards revealing audience density, click-through rates, attributed store walk-ins, and cost-per-visit performance metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="content-section bg-light">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Got Questions?</span>
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p className="section-desc">
              Understand the technical mechanics and strategic advantages of polygon targeting.
            </p>
          </div>

          <div className="faq-container">
            {faqsData.map((faq, idx) => (
              <div key={idx} className={`faq-item ${openFaq === idx ? 'active' : ''}`}>
                <button
                  className="faq-trigger"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={openFaq === idx}
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon">+</span>
                </button>
                {openFaq === idx && (
                  <div className="faq-body">
                    <p dangerouslySetInnerHTML={{ __html: faq.a }}></p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Other Services Carousel */}
      <OtherServicesSlider />

      {/* Bottom CTA Banner */}
      <section className="bottom-cta-banner">
        <div className="section-inner">
          <h2>Ready to Target Your Exact Physical Audience?</h2>
          <p>
            Contact Sociapa's geospatial marketing specialists today. We will blueprint your custom polygon boundaries and launch your zero-waste location campaign.
          </p>
          <Link to="/contact-us" className="btn-primary-poly">
            Schedule a Polygon Consultation
            <span>&rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
