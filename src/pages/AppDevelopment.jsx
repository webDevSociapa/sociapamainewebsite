import React, { useEffect, useState } from 'react';
import OtherServicesSlider from '../components/OtherServicesSlider';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './AppDevelopment.css';

const faqsData = [
  {
    q: "Why choose Sociapa for mobile app development services in India?",
    a: "Sociapa delivers end-to-end mobile application engineering combining human-centric <a href='/brand-identity-design' class='seo-interlink'>UI/UX design</a>, native performance (iOS Swift & Android Kotlin), cross-platform efficiency (Flutter & React Native), scalable cloud backends, and full compliance with Apple App Store and Google Play Store standards."
  },
  {
    q: "Should my business build a Native app or a Cross-Platform app?",
    a: "Native apps (Swift for iOS, Kotlin for Android) offer supreme hardware performance and complex device feature integration (AR, Bluetooth, high-end 3D graphics). Cross-platform apps (Flutter, React Native) allow you to deploy a single unified codebase across both iOS and Android simultaneously, cutting development cost and time-to-market by up to 40% while preserving near-native fluidity."
  },
  {
    q: "How long does it take to develop a custom mobile application?",
    a: "A Minimum Viable Product (MVP) or straightforward brand application typically takes 6 to 8 weeks. Comprehensive e-commerce, fintech, or on-demand marketplace applications with custom API integrations and real-time chat usually require 10 to 16 weeks from initial design to store approval."
  },
  {
    q: "Do you assist with publishing apps to the Apple App Store and Google Play Store?",
    a: "Yes! Sociapa handles complete app store deployment, including developer account configuration, App Store guidelines review, security audits, App Store Optimization (ASO) metadata, screenshot assets, and ongoing submission support until official approval."
  },
  {
    q: "Can you integrate payment gateways and third-party APIs into mobile apps?",
    a: "Absolutely. We seamlessly integrate leading payment gateways (Razorpay, Stripe, Apple Pay, Google Pay, PayU, Paytm), CRM systems, analytics SDKs, push notification engines (OneSignal, Firebase), and ERP databases."
  },
  {
    q: "Will I have full ownership of the mobile app source code and IP?",
    a: "100% yes. Upon project handover, all Git repository source code, wireframes, Figma design systems, database configurations, and app store deployment credentials are fully transferred to your company."
  },
  {
    q: "How do you ensure mobile app security and data privacy?",
    a: "We implement industry-standard AES-256 data encryption at rest and in transit (SSL/TLS pinning), OAuth 2.0 and JWT token authentication, biometric login (FaceID/Fingerprint), OWASP Mobile Security verification, and strict GDPR and Indian DPDP Act compliance."
  },
  {
    q: "Do you offer post-launch app maintenance and feature upgrades?",
    a: "Yes. We offer dedicated Monthly SLA Maintenance packages covering OS version upgrades (new iOS & Android updates), crash analytics monitoring, performance speed tuning, bug fixes, and feature enhancements."
  }
];

export default function AppDevelopment() {
  const base = import.meta.env.BASE_URL || '/';
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app-dev-page">
      <Helmet>
        <title>App Development Services | SOCIAPA</title>
        <meta name="description" content="This is where your Marketing Brilliance begins For all the hard work you’ve put in to consolidate the ideas and structure your business | SOCIAPA" />
        <meta
          name="keywords"
          content="Mobile App Development Services India, iOS App Development Company, Android App Developers Noida, React Native App Agency, Flutter Mobile Apps, Custom Mobile App Development Delhi NCR, D2C Shopping Apps"
        />
        <link rel="canonical" href="https://sociapa.com/services-app-development" />
        <meta property="og:title" content="App Development Services | SOCIAPA" />
        <meta property="og:description" content="This is where your Marketing Brilliance begins For all the hard work you’ve put in to consolidate the ideas and structure your business | SOCIAPA" />
        <meta property="og:url" content="https://sociapa.com/services-app-development" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SOCIAPA" />
        <meta property="og:image" content="https://sociapa.com/images/services/Website-App-Development.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sociapa" />
        <meta name="twitter:title" content="App Development Services | SOCIAPA" />
        <meta name="twitter:description" content="This is where your Marketing Brilliance begins For all the hard work you’ve put in to consolidate the ideas and structure your business | SOCIAPA" />
        <meta name="twitter:image" content="https://sociapa.com/images/services/Website-App-Development.jpg" />

        {/* Structured Data: FAQPage */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqsData.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.a.replace(/<[^>]*>/g, '')
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
            { "@type": "ListItem", "position": 3, "name": "Mobile App Development", "item": "https://sociapa.com/services-app-development" }
          ]
        })}</script>
      </Helmet>

      {/* Hero Visual Section */}
      <section className="hero-banner-section">
        <picture>
          <source type="image/webp" srcSet={`${base}images/wesbite-banner.webp`} />
          <img
            src={`${base}images/wesbite-banner.jpeg`}
            alt="Mobile App Development Services India - Sociapa"
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
            Enterprise &amp; D2C Mobile Solutions
          </div>

          {/* Mandatory 1st Heading */}
          <h1 className="main-title">
            Mobile App Development Services India | <span className="highlight-text">iOS &amp; Android Apps</span>
          </h1>

          <p className="intro-lead">
            Transform your vision into high-performing, intuitive mobile experiences. From disruptive D2C e-commerce applications to high-throughput enterprise mobility platforms, Sociapa designs and engineers fluid iOS, Android, and cross-platform apps that captivate users and accelerate business revenue.
          </p>

          <div className="hero-cta-group">
            <Link to="/contact-us" className="btn-primary-app">
              Request a Free App Architecture Plan
              <span>&rarr;</span>
            </Link>
            <Link to="/best-web-development-agency-india" className="btn-secondary-app">
              Explore Web Development
            </Link>
          </div>
        </div>
      </section>

      {/* Key Stats Bar */}
      <div className="stats-bar-app">
        <div className="section-inner">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-val">99.9%</div>
              <div className="stat-lbl">Crash-Free Session Rate</div>
            </div>
            <div className="stat-card">
              <div className="stat-val">4.8★</div>
              <div className="stat-lbl">Average App Store Rating</div>
            </div>
            <div className="stat-card">
              <div className="stat-val">150+</div>
              <div className="stat-lbl">Apps &amp; Products Delivered</div>
            </div>
            <div className="stat-card">
              <div className="stat-val">&lt;200ms</div>
              <div className="stat-lbl">Lightning API Response Latency</div>
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities Section */}
      <section className="content-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Engineering Excellence</span>
            <h2 className="section-heading">Full-Stack Mobile App Development Capabilities</h2>
            <p className="section-desc">
              We leverage modern architectures, clean code standards, and agile sprint delivery to build robust applications ready to scale to millions of concurrent active users. Complemented by our <a href="/best-web-development-agency-india" className="seo-interlink">web development services</a> and <a href="/seo-aeo-geo" className="seo-interlink">App Store Optimization (ASO)</a>, we provide 360-degree digital product engineering.
            </p>
          </div>

          <div className="capabilities-grid">
            <div className="cap-card">
              <div className="cap-icon">🍎</div>
              <h3>Native iOS App Development</h3>
              <p>
                Engineered specifically for the Apple ecosystem using Swift and SwiftUI. We build ultra-responsive, secure iOS applications optimized for iPhones, iPads, and Apple Watch with seamless CoreData and Metal hardware integration.
              </p>
              <div className="cap-tags">
                <span className="cap-tag">Swift</span>
                <span className="cap-tag">SwiftUI</span>
                <span className="cap-tag">iOS 18+</span>
                <span className="cap-tag">Apple Pay</span>
              </div>
            </div>

            <div className="cap-card">
              <div className="cap-icon">🤖</div>
              <h3>Native Android App Development</h3>
              <p>
                Crafted using Kotlin and Jetpack Compose adhering to Google's Material 3 guidelines. We build Android apps designed for device fragmentation, high battery efficiency, and fluid performance across thousands of smartphone models.
              </p>
              <div className="cap-tags">
                <span className="cap-tag">Kotlin</span>
                <span className="cap-tag">Jetpack Compose</span>
                <span className="cap-tag">Material 3</span>
                <span className="cap-tag">Google Play</span>
              </div>
            </div>

            <div className="cap-card">
              <div className="cap-icon">⚡</div>
              <h3>Cross-Platform (Flutter &amp; React Native)</h3>
              <p>
                Deploy simultaneously to iOS and Android from a single shared codebase. Enjoy 60 FPS native performance, hot reload development speed, and up to 40% cost reduction without sacrificing user experience.
              </p>
              <div className="cap-tags">
                <span className="cap-tag">Flutter</span>
                <span className="cap-tag">React Native</span>
                <span className="cap-tag">Dart</span>
                <span className="cap-tag">Single Codebase</span>
              </div>
            </div>

            <div className="cap-card">
              <div className="cap-icon">🛍️</div>
              <h3>D2C &amp; E-Commerce Mobile Apps</h3>
              <p>
                Turn smartphone browsers into repeat buyers with lightning-fast mobile commerce apps featuring one-click checkout, personalized AI product recommendations, abandoned cart push notifications, and loyalty rewards.
              </p>
              <div className="cap-tags">
                <span className="cap-tag">One-Click Checkout</span>
                <span className="cap-tag">Push Alerts</span>
                <span className="cap-tag">Shopify Sync</span>
                <span className="cap-tag">Razorpay</span>
              </div>
            </div>

            <div className="cap-card">
              <div className="cap-icon">☁️</div>
              <h3>Cloud Backends &amp; Microservices</h3>
              <p>
                Scalable Node.js, Python, and Go microservices powered by AWS Lambda, Docker, and Kubernetes. Real-time WebSockets, GraphQL endpoints, and zero-downtime serverless databases.
              </p>
              <div className="cap-tags">
                <span className="cap-tag">Node.js</span>
                <span className="cap-tag">AWS Lambda</span>
                <span className="cap-tag">GraphQL</span>
                <span className="cap-tag">PostgreSQL</span>
              </div>
            </div>

            <div className="cap-card">
              <div className="cap-icon">🎨</div>
              <h3>Product UI/UX &amp; Design Systems</h3>
              <p>
                Human-centric wireframing, clickable prototypes, and design systems crafted by our in-house <a href="/brand-identity-design" className="seo-interlink">brand identity &amp; UI/UX designers</a>, ensuring intuitive navigation and effortless user delight.
              </p>
              <div className="cap-tags">
                <span className="cap-tag">Figma</span>
                <span className="cap-tag">Prototyping</span>
                <span className="cap-tag">Design Systems</span>
                <span className="cap-tag">Micro-Interactions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifecycle Section */}
      <section className="content-section bg-light">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Agile Methodology</span>
            <h2 className="section-heading">Our 5-Stage App Engineering Lifecycle</h2>
            <p className="section-desc">
              From concept validation to App Store approval and continuous post-launch optimization.
            </p>
          </div>

          <div className="process-grid">
            <div className="process-card">
              <div className="process-num">01</div>
              <h3>Discovery &amp; Scoping</h3>
              <p>
                We define user personas, map functional requirements, audit competitor features, and formulate a clear technical roadmap and architecture specification.
              </p>
            </div>

            <div className="process-card">
              <div className="process-num">02</div>
              <h3>Interactive UI/UX Design</h3>
              <p>
                Our designers create user flows, wireframes, and interactive Figma prototypes, conducting usability testing before writing a single line of code.
              </p>
            </div>

            <div className="process-card">
              <div className="process-num">03</div>
              <h3>Agile Sprint Coding</h3>
              <p>
                Two-week sprints with demonstrable milestone builds. We develop clean modular frontend code coupled with robust backend APIs and automated CI/CD pipelines.
              </p>
            </div>

            <div className="process-card">
              <div className="process-num">04</div>
              <h3>QA &amp; Security Audits</h3>
              <p>
                Thorough automated and manual testing covering device matrix compatibility, security vulnerabilities, API latency, offline mode, and edge-case battery usage.
              </p>
            </div>

            <div className="process-card">
              <div className="process-num">05</div>
              <h3>Store Launch &amp; Growth</h3>
              <p>
                We navigate Apple App Store and Google Play approval, implement analytics tracking, and power user acquisition via <a href="/pay-per-click-ppc-services-india" className="seo-interlink">app install PPC campaigns</a> and <a href="/best-digital-marketing-services-india" className="seo-interlink">digital marketing funnels</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="content-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Modern Technologies</span>
            <h2 className="section-heading">Built with Battle-Tested Mobile Stacks</h2>
            <p className="section-desc">
              We employ the industry's most reliable and performant mobile frameworks, databases, and cloud infrastructure.
            </p>
          </div>

          <div className="tech-stack-grid">
            <div className="tech-badge">🍏 Swift &amp; SwiftUI</div>
            <div className="tech-badge">🤖 Kotlin &amp; Compose</div>
            <div className="tech-badge">💙 Flutter &amp; Dart</div>
            <div className="tech-badge">⚛️ React Native</div>
            <div className="tech-badge">🟢 Node.js &amp; Express</div>
            <div className="tech-badge">🐍 Python &amp; Django</div>
            <div className="tech-badge">🔥 Firebase &amp; Supabase</div>
            <div className="tech-badge">☁️ AWS &amp; Google Cloud</div>
            <div className="tech-badge">🐳 Docker &amp; Kubernetes</div>
            <div className="tech-badge">💳 Stripe &amp; Razorpay</div>
            <div className="tech-badge">📊 Mixpanel &amp; GA4</div>
            <div className="tech-badge">⚡ Redis &amp; PostgreSQL</div>
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
              Everything you need to know about engineering custom mobile apps with Sociapa.
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
          <h2>Ready to Build Your Mobile App?</h2>
          <p>
            Schedule a confidential product discovery session with our senior mobile architects today. We will evaluate your requirements and outline a comprehensive technical blueprint.
          </p>
          <Link to="/contact-us" className="btn-primary-app">
            Schedule a Free App Discovery Call
            <span>&rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
