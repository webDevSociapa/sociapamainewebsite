import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Geofencing.css';

const faqsData = [
  {
    q: "What is geofencing advertising and how does it work?",
    a: "Geofencing advertising is a location-based digital marketing technology that sets up a virtual perimeter around a real-world physical location using GPS, RFID, Wi-Fi, and cellular data. When target customers enter or exit this designated geofenced area with their smartphones, high-impact display, native, or video ads are triggered across their mobile apps and web browsers."
  },
  {
    q: "How precise is Sociapa's geofencing technology?",
    a: "Our geofencing technology is accurate down to within a few meters of the target location. Unlike traditional broad zip code or city-wide targeting, we pinpoint specific retail stores, convention halls, college campuses, stadiums, auto dealerships, and competitor locations with pinpoint precision."
  },
  {
    q: "What is competitor conquesting with geofencing?",
    a: "Competitor conquesting involves creating a virtual geofence around your direct competitors' physical storefronts or showrooms. When prospective shoppers visit those locations, your promotional ads, competitive offers, and unique value propositions are delivered directly to their mobile devices, capturing high-intent prospects at the exact point of decision."
  },
  {
    q: "How long can we retarget visitors after they leave the geofenced area?",
    a: "Once a prospect's privacy-compliant Mobile Advertising ID (MAID) is captured inside the geofence, we can continue delivering retargeting ads to their mobile devices, desktop computers, and tablets for up to 30 days after they leave the physical perimeter."
  },
  {
    q: "Can geofencing track actual in-store foot traffic and walk-ins?",
    a: "Yes! Sociapa sets up dedicated 'Conversion Zones' over your physical business locations. When someone who saw or engaged with your geofenced ad physically walks through your store doors, the conversion is tracked and verified as an attributed in-store walk-in, giving you concrete Cost Per Visit (CPV) metrics."
  },
  {
    q: "What is the difference between circular geofencing and polygon targeting?",
    a: "Circular geofencing creates a round radius around a center coordinate, which can accidentally include adjacent highways or irrelevant parking lots. In contrast, polygon targeting allows marketers to draw custom multi-point geometric shapes that trace the exact property boundaries of a building, eliminating all wasted ad spend."
  },
  {
    q: "Which industries benefit most from geofencing campaigns?",
    a: "Retail brands, restaurants, automotive dealerships, luxury real estate developers, healthcare clinics, event organizers, hospitality chains, and B2B trade show exhibitors gain tremendous ROI through geofencing by reaching hyper-relevant audiences in the physical world."
  },
  {
    q: "How does geofencing integrate with other digital marketing channels?",
    a: "Geofencing works synergistically with your broader marketing mix. Data captured from geofences can enrich your Meta and Google custom audiences, feed your omnichannel lead generation funnels, and reinforce your local search presence."
  }
];

export default function Geofencing() {
  const base = import.meta.env.BASE_URL || '/';
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="geofencing-page">
      <Helmet>
        <title>Geofencing Advertising & Location-Based Marketing Agency - Sociapa</title>
        <meta
          name="description"
          content="Scale local customer acquisition with high-precision geofencing advertising from Sociapa. Deliver location-triggered mobile ads, conquer competitor locations, and track verified store visits."
        />
        <meta
          name="keywords"
          content="Geofencing Advertising, Location-Based Marketing, Geofence Ads, Proximity Marketing India, Store Footfall Attribution, Hyperlocal Ads, Competitor Conquesting"
        />
        <link rel="canonical" href="https://sociapa.com/geofencing" />
        <meta property="og:title" content="Geofencing Advertising & Location-Based Marketing Agency - Sociapa" />
        <meta
          property="og:description"
          content="Target customers with laser-precise geofencing advertising. Drive foot traffic, reach nearby shoppers, and trigger location-based mobile ads with measurable footfall attribution."
        />
        <meta property="og:url" content="https://sociapa.com/geofencing" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SOCIAPA" />
        <meta property="og:image" content="https://sociapa.com/images/ad-experience-service-banner.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sociapa" />
        <meta name="twitter:title" content="Geofencing Advertising & Location-Based Marketing - Sociapa" />
        <meta
          name="twitter:description"
          content="Scale local customer acquisition with high-precision geofencing advertising from Sociapa. Deliver location-triggered mobile ads and track verified store visits."
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
            { "@type": "ListItem", "position": 3, "name": "Geofencing Advertising", "item": "https://sociapa.com/geofencing" }
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
            alt="Geofencing Advertising and Location-Based Marketing - Sociapa"
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
            Hyperlocal Location Intelligence
          </div>

          {/* Mandatory 1st Heading */}
          <h1 className="main-title">
            Geofencing Advertising &amp; <span className="highlight-text">Hyperlocal Location Marketing</span>
          </h1>

          <p className="intro-lead">
            Deliver context-aware mobile display, video, and native ads to high-intent consumers the instant they step into your chosen physical perimeters. From competitor store conquesting to convention halls and local retail hubs, Sociapa turns real-world foot traffic into measurable digital sales.
          </p>

          <div className="hero-cta-group">
            <Link to="/contact-us" className="btn-primary-geo">
              Launch a Geofence Campaign
              <span>&rarr;</span>
            </Link>
            <Link to="/polygon" className="btn-secondary-geo">
              Explore Polygon Targeting
            </Link>
          </div>
        </div>
      </section>

      {/* Key Stats Bar */}
      <div className="stats-bar-geo">
        <div className="section-inner">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-val">99.2%</div>
              <div className="stat-lbl">Location Signal Accuracy</div>
            </div>
            <div className="stat-card">
              <div className="stat-val">3.4x</div>
              <div className="stat-lbl">Average Foot Traffic Lift</div>
            </div>
            <div className="stat-card">
              <div className="stat-val">500+</div>
              <div className="stat-lbl">Active Geofences Deployed</div>
            </div>
            <div className="stat-card">
              <div className="stat-val">0%</div>
              <div className="stat-lbl">Wasted Impressions Beyond Zone</div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="content-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Precision Targeting</span>
            <h2 className="section-heading">Bridge the Gap Between the Physical and Digital Worlds</h2>
            <p className="section-desc">
              In modern marketing, relevance is governed by proximity. By combining GPS coordinates, Wi-Fi beacons, and cellular signals, our geofencing engine enables your brand to engage prospective buyers precisely where purchase decisions happen. Powered by our <a href="/pay-per-click-ppc-services-india" className="seo-interlink">programmatic PPC services</a> and enhanced through <a href="/seo-aeo-geo" className="seo-interlink">hyperlocal SEO &amp; GEO optimization</a>, we ensure your message reaches the right hands at the exact right moment.
            </p>
          </div>

          <div className="geo-grid">
            <div className="geo-card">
              <div className="geo-card-icon">
                <img src={`${base}icons/ads-experience/Polygon-Geo-Fencing-Ads.png`} alt="Competitor Conquesting" width="32" height="32" />
              </div>
              <h3>Competitor Conquesting</h3>
              <p>
                Set virtual boundaries around direct competitor stores, car dealerships, or showrooms. Capture shoppers currently comparing prices and deliver exclusive switch incentives directly to their smartphones.
              </p>
              <div className="geo-card-tags">
                <span className="geo-tag">Competitor Stores</span>
                <span className="geo-tag">Switch Offers</span>
                <span className="geo-tag">High-Intent</span>
              </div>
            </div>

            <div className="geo-card">
              <div className="geo-card-icon">
                <img src={`${base}icons/ads-experience/Audience-Brief.png`} alt="Event & Expo Targeting" width="32" height="32" />
              </div>
              <h3>Event &amp; Trade Show Targeting</h3>
              <p>
                Draw virtual perimeters around convention centers, industry expos, sports stadiums, and concert arenas. Engage thousands of qualified attendees during the event and retarget them for up to 30 days after.
              </p>
              <div className="geo-card-tags">
                <span className="geo-tag">B2B Conferences</span>
                <span className="geo-tag">Expos &amp; Fairs</span>
                <span className="geo-tag">Concerts</span>
              </div>
            </div>

            <div className="geo-card">
              <div className="geo-card-icon">
                <img src={`${base}icons/ads-experience/Real-Time-Optimisation.png`} alt="Store Footfall Boost" width="32" height="32" />
              </div>
              <h3>Retail &amp; Restaurant Footfall</h3>
              <p>
                Trigger time-sensitive lunch discounts, retail flash sales, and loyalty reminders to nearby shoppers and office commuters within walking distance, directly boosting on-site transactions.
              </p>
              <div className="geo-card-tags">
                <span className="geo-tag">Proximity Alerts</span>
                <span className="geo-tag">Flash Offers</span>
                <span className="geo-tag">Store Walk-Ins</span>
              </div>
            </div>

            <div className="geo-card">
              <div className="geo-card-icon">
                <img src={`${base}icons/ads-experience/Full-Funnel-Coverage.png`} alt="Cross-Device Retargeting" width="32" height="32" />
              </div>
              <h3>Cross-Device Retargeting</h3>
              <p>
                Identify mobile device IDs within the geofenced perimeter and expand ad delivery across the user's laptops, tablets, and connected TVs, supported by <a href="/best-digital-marketing-services-india" className="seo-interlink">comprehensive digital marketing funnels</a>.
              </p>
              <div className="geo-card-tags">
                <span className="geo-tag">Mobile to Desktop</span>
                <span className="geo-tag">Connected TV</span>
                <span className="geo-tag">30-Day Window</span>
              </div>
            </div>

            <div className="geo-card">
              <div className="geo-card-icon">
                <img src={`${base}icons/ads-experience/Impact-Report.png`} alt="Verified Footfall Attribution" width="32" height="32" />
              </div>
              <h3>Verified Footfall Attribution</h3>
              <p>
                Track physical foot traffic using designated 'Conversion Zones' over your store doors. Verify whether users who saw your geofence ad physically entered your premises, measuring true Cost Per Visit (CPV).
              </p>
              <div className="geo-card-tags">
                <span className="geo-tag">Conversion Zones</span>
                <span className="geo-tag">Cost Per Visit</span>
                <span className="geo-tag">ROI Analytics</span>
              </div>
            </div>

            <div className="geo-card">
              <div className="geo-card-icon">
                <img src={`${base}icons/ads-experience/Dynamic-Carousel-Ads.png`} alt="Polygon Custom Geometry" width="32" height="32" />
              </div>
              <h3>Polygon Boundary Precision</h3>
              <p>
                When circular fences aren't accurate enough, upgrade to our custom <a href="/polygon" className="seo-interlink">polygon targeting service</a> to trace exact parcel property lines and eliminate all highway ad spillover.
              </p>
              <div className="geo-card-tags">
                <span className="geo-tag">Custom Boundaries</span>
                <span className="geo-tag">Zero Spillover</span>
                <span className="geo-tag">Building-Level</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="content-section bg-light">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Execution Framework</span>
            <h2 className="section-heading">How Our Geofencing Campaigns Operate</h2>
            <p className="section-desc">
              A transparent, 4-step programmatic process engineered for maximum foot traffic lift and verifiable offline ROI.
            </p>
          </div>

          <div className="process-grid">
            <div className="process-card">
              <div className="process-num">01</div>
              <h3>Perimeter Mapping</h3>
              <p>
                We map high-value coordinates: competitor storefronts, event centers, educational campuses, or commercial tech corridors tailored to your buyer persona.
              </p>
            </div>

            <div className="process-card">
              <div className="process-num">02</div>
              <h3>Device Qualification</h3>
              <p>
                As users cross into the geofence, their device IDs are qualified in real time through GPS, Wi-Fi, and cellular verification while respecting privacy standards.
              </p>
            </div>

            <div className="process-card">
              <div className="process-num">03</div>
              <h3>Dynamic Ad Delivery</h3>
              <p>
                Targeted mobile banners, native placements, or video ads with real-time distance counters are served across premium apps through programmatic DSP integrations.
              </p>
            </div>

            <div className="process-card">
              <div className="process-num">04</div>
              <h3>Footfall Attribution</h3>
              <p>
                When ad recipients visit your physical store, our attribution engine logs the walk-in, giving you transparent ROI reports and actionable audience data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="content-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Strategic Advantage</span>
            <h2 className="section-heading">Geofencing vs. Traditional Radius Targeting</h2>
            <p className="section-desc">
              Why leading enterprise brands and local businesses are transitioning ad spend to precision geofencing.
            </p>
          </div>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature &amp; Capability</th>
                  <th>Traditional Radius / Zip Code Ads</th>
                  <th className="highlight-col">Sociapa Precision Geofencing</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Targeting Accuracy</td>
                  <td>Broad (1 to 5 miles or entire postal code)</td>
                  <td className="highlight-col">Pinpoint (Within 5 meters of target location)</td>
                </tr>
                <tr>
                  <td>Ad Spend Efficiency</td>
                  <td>High budget waste on irrelevant neighbors &amp; passersby</td>
                  <td className="highlight-col">Zero wasted spend; only active visitors qualify</td>
                </tr>
                <tr>
                  <td>Competitor Targeting</td>
                  <td>Impossible to isolate competitor buildings</td>
                  <td className="highlight-col">Direct conquesting of specific competitor stores</td>
                </tr>
                <tr>
                  <td>In-Store Attribution</td>
                  <td>Guesses based on estimated store visits</td>
                  <td className="highlight-col">True physical Conversion Zone walk-in attribution</td>
                </tr>
                <tr>
                  <td>Cross-Device Retargeting</td>
                  <td>Limited cookie-based retargeting</td>
                  <td className="highlight-col">30-day device ID graph across mobile, laptop &amp; TV</td>
                </tr>
                <tr>
                  <td>Creative Customization</td>
                  <td>Generic static copy for large regions</td>
                  <td className="highlight-col">Real-time distance meters, local maps &amp; flash offers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Synergies Section */}
      <section className="content-section bg-light">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Omnichannel Synergy</span>
            <h2 className="section-heading">Amplified by Sociapa's Complete Digital Ecosystem</h2>
            <p className="section-desc">
              Geofencing achieves maximum conversion rates when paired with our high-impact creative and digital capabilities.
            </p>
          </div>

          <div className="geo-grid">
            <div className="geo-card">
              <h3>High-Converting Landing Pages</h3>
              <p>
                Send mobile ad clicks to blazing-fast, responsive web pages crafted by our <a href="/best-web-development-agency-india" className="seo-interlink">web development team</a> for instantaneous lead capture.
              </p>
            </div>
            <div className="geo-card">
              <h3>Viral Social Amplification</h3>
              <p>
                Synchronize local physical targeting with localized Instagram &amp; Facebook campaigns handled by our <a href="/best-social-media-marketing-agency-india" className="seo-interlink">social media agency</a>.
              </p>
            </div>
            <div className="geo-card">
              <h3>Impactful Ad Creatives</h3>
              <p>
                Engage local customers with eye-catching banners and motion assets designed by our in-house <a href="/creative-designing" className="seo-interlink">creative designing specialists</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="content-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Got Questions?</span>
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p className="section-desc">
              Everything you need to know about setting up and scaling geofencing campaigns with Sociapa.
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
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bottom-cta-banner">
        <div className="section-inner">
          <h2>Ready to Drive Verified Foot Traffic to Your Business?</h2>
          <p>
            Speak with Sociapa's location marketing specialists today to map your target locations, conquer competitor footfall, and achieve measurable in-store growth.
          </p>
          <Link to="/contact-us" className="btn-primary-geo">
            Request a Free Geofence Plan
            <span>&rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
