import React, { useState, useEffect } from 'react';
import OtherServicesSlider from '../components/OtherServicesSlider';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ServiceOurWorkSection from '../components/ServiceOurWorkSection';
import ServiceBehindWorkSection from '../components/ServiceBehindWorkSection';
import ServiceCaseStudiesSlider from '../components/ServiceCaseStudiesSlider';
import { serviceClientSectionsData } from '../data/serviceClientSectionsData';
import './SocialMediaMarketing.css';

const faqsData = [
  {
    "q": "1. Why is Social Media Marketing important for businesses?",
    "a": "<p>Social Media Marketing helps businesses reach a larger audience, engage with customers in real time, increase brand awareness, drive website traffic, and build trust and credibility. It also provides valuable insights into customer preferences and expectations.</p>"
  },
  {
    "q": "2. Which social media platforms are best for marketing?",
    "a": "<p>The right platform depends on your business goals and target audience. Popular platforms for Social Media Marketing include Facebook, Instagram, LinkedIn, Twitter, YouTube, and Pinterest</p>"
  },
  {
    "q": "3. How can Social Media Marketing help increase brand awareness?",
    "a": "<p>Regular posting, engaging content, and consistent interaction with users help businesses reach more people and improve brand visibility. Social media allows brands to share their story and connect with potential customers effectively.</p>"
  },
  {
    "q": "4. Can Social Media Marketing drive traffic to my website?",
    "a": "<p>Yes. Sharing valuable content, business updates, and promotional campaigns on social media directs qualified users to your <a href='/best-web-development-agency-india' class='seo-interlink'>website</a>, helping increase organic visits and overall conversions.</p>"
  },
  {
    "q": "5. What does a Social Media Marketing strategy include?",
    "a": "<p>A Social Media Marketing strategy includes audience profiling, selecting optimal channels, <a href='/content-designing' class='seo-interlink'>content development</a>, <a href='/creative-designing' class='seo-interlink'>creative designing</a>, scheduling posts, and measuring performance through analytics.</p>"
  },
  {
    "q": "6. Is Social Media Marketing cost-effective?",
    "a": "<p>Yes. Compared to traditional advertising methods, Social Media Marketing can be a more cost-effective way to reach a larger audience while maintaining direct communication with customers.</p>"
  },
  {
    "q": "7. How often should businesses post on social media?",
    "a": "<p>Posting consistently is important for maintaining audience engagement and keeping your brand visible. Regular content updates help businesses stay connected with their audience and strengthen their social media presence.</p>"
  },
  {
    "q": "8. How can Sociapa help with Social Media Marketing?",
    "a": "<p>Sociapa provides end-to-end Social Media Marketing Services, including social media strategy, <a href='/influencer-marketing-services' class='seo-interlink'>influencer collaborations</a>, <a href='/videos' class='seo-interlink'>Reels and video production</a>, and paid social advertising to scale brand visibility.</p>"
  }
];

export default function SocialMediaMarketing() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);
  const base = import.meta.env.BASE_URL || '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="social-media-marketing-page">
      <Helmet>
        <title>Sociapa Social Media Marketing services in Noida &amp; Delhi NCR -Explore to grow your brand.</title>
        <meta name="description" content="Social Media Marketing Services in Noida & Delhi NCR, india- Increased Brand Recognition, Loyalty, and Love.Customer Experience & Conversion | Best Digital Marketing Company In Noida & Delhi NCR" />
        <meta name="keywords" content="Social Media Marketing" />
        <link rel="canonical" href="https://sociapa.com/best-social-media-marketing-agency-india" />
        <meta property="og:title" content="Sociapa Social Media Marketing services in Noida & Delhi NCR -Explore to grow your brand." />
        <meta property="og:description" content="Social Media Marketing Services in Noida & Delhi NCR, india- Increased Brand Recognition, Loyalty, and Love.Customer Experience & Conversion | Best Digital Marketing Company In Noida & Delhi NCR" />
        <meta property="og:url" content="https://sociapa.com/best-social-media-marketing-agency-india" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="SOCIAPA" />
        <meta property="og:image" content="https://sociapa.com/images/services/Social-Media-Marketing.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sociapa" />
        <meta name="twitter:title" content="Sociapa Social Media Marketing services in Noida & Delhi NCR -Explore to grow your brand." />
        <meta name="twitter:description" content="Social Media Marketing Services in Noida & Delhi NCR, india- Increased Brand Recognition, Loyalty, and Love.Customer Experience & Conversion | Best Digital Marketing Company In Noida & Delhi NCR" />
        <meta name="twitter:image" content="https://sociapa.com/images/services/Social-Media-Marketing.jpg" />
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
        {/* BreadcrumbList Schema - Required by SOCIAPA (1).docx */}
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://sociapa.com/"},{"@type":"ListItem","position":2,"name":"Services","item":"https://sociapa.com/our-services"},{"@type":"ListItem","position":3,"name":"Best Social Media Marketing Agency India | Sociapa","item":"https://sociapa.com/best-social-media-marketing-agency-india"}]})}</script>
      </Helmet>
      <div className="serInsideBnr">
        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
          Best Social Media Marketing &amp; Management Agency India - Sociapa
        </h1>
        <div className="row">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={`${base}images/smm-service-banner-mobile.jpeg`} />
            <img src={`${base}images/smm-service-banner.webp`} alt="social-media-marketing-banner" className="responsive-img w-100" />
          </picture>
        </div>
      </div>

      <div className="stats-bar">
        <div className="stats-inner">
          <div><span className="stat-num">5M+</span><div className="stat-lbl">Followers Grown for Clients</div></div>
          <div><span className="stat-num">80+</span><div className="stat-lbl">Active Brand Accounts Managed</div></div>
          <div><span className="stat-num">12x</span><div className="stat-lbl">Average Engagement Lift</div></div>
          <div><span className="stat-num">8+</span><div className="stat-lbl">Years Managing Social Media</div></div>
        </div>
      </div>

      <section className="services-section">
        <div className="section-inner">
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">Full-Service Social Media Management</h2>
          <p className="section-sub">From strategy and content planning to post scheduling, community management, and paid social campaigns, we manage your social media presence end-to-end to increase engagement, grow your audience, and drive meaningful business results. </p>
          <div className="services-grid">
            <div className="svc-card">
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/social_media/Social Media Strategy.png`}
                  alt="Social Media Strategy"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h3>Social Media Strategy</h3>
              <p>We aim to conquer Social Media territory for the brands that entrust their vision on us. From positioning to tonality to competitor analysis, we present brands with strong narrative in content calendars that trigger consideration among target audience.</p>
              <div className="service-tags"><span>Content Calendar</span><span>Audience Research</span><span>Platform Strategy</span></div>
            </div>
            <div className="svc-card">
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/social_media/Content Creation & Copywriting.png`}
                  alt="Content Creation & Copywriting"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h3>Content Creation & Copywriting</h3>
              <p>With the advent of the social media landscape, brands have got a space for establishing a lasting presence. We give brands a dialogue through Copywriting which itself is about disseminating the brand's benefits for purchasing action. Also, the copy is included in reels, stories, captions and carousels as a consistent reminder for viewers to consider the brand they look for.</p>
              <div className="service-tags"><span>Reels</span><span>Carousels</span><span>Stories</span><span>Captions</span></div>
            </div>
            <div className="svc-card">
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/social_media/Community Management.png`}
                  alt="Community Management"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h3>Community Management</h3>
              <p>For effective monitoring, we build community groups: a sole roof to address queries, communication offers and new prospects of brands. Replying to DMs, comments and posts serves as an assurance that the brand is there with them through thick and thin. An engaged community creates advocacy for a brand.</p>
              <div className="service-tags"><span>Comment Moderation</span><span>DM Responses</span><span>Crisis Handling</span></div>
            </div>
            <div className="svc-card">
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/social_media/Paid Social Advertising.png`}
                  alt="Paid Social Advertising"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h3>Paid Social Advertising</h3>
              <p>Social Media Advertising is a space where attention of target group can be achieved. We achieve the same by optimizing Meta Ads, LinkedIn Ads, and YouTube Ads. Truly, Social media Ads have revolutionized the profit model of marketer and brand leaders.</p>
              <div className="service-tags"><span>Meta Ads</span><span>LinkedIn Ads</span><span>YouTube Ads</span><span>Retargeting</span></div>
            </div>
            <div className="svc-card">
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/social_media/Analytics & Monthly Reporting.png`}
                  alt="Analytics & Monthly Reporting"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h3>Analytics & Monthly Reporting</h3>
              <p>Once we deploy budget, strategy and narratives in ads, we actively track our ads to analyze performance, engagement and ROAS. We summarize everything in a monthly report and shed light on limitations and gaps for a better performance and recall in our next project.</p>
              <div className="service-tags"><span>Monthly Reports</span><span>Insights</span><span>Competitor Analysis</span></div>
            </div>
            <div className="svc-card">
              <div className="svc-icon">
                <img
                  src={`${base}assets/images/services_icons/social_media/Influencer Collaboration.png`}
                  alt="Influencer Collaboration"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h3>Influencer Collaboration</h3>
              <p>The Creators Economy is booming where influencers make brands a part of their content. We enter this space and vet micro to macro influencers for the best dissemination of brand messages. We strive to build lasting influencer collaboration for timeless trust and the best co-branding outcome.</p>
              <div className="service-tags"><span>Micro Influencers</span><span>Macro Influencers</span><span>Co-Branding</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="tools-section">
        <div className="section-inner">
          <span className="section-tag">Platforms & Tools</span>
          <h2 className="section-title">Platforms We Manage & Amplify</h2>
          <p className="section-sub">We manage content and paid campaigns across every major social platform with a certified team and professional scheduling infrastructure.</p>
          <div className="tools-grid">
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/social_media/Instagram.png`}
                  alt="Instagram"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </span>
              <span>Instagram</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/social_media/facebook.png`}
                  alt="Facebook"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </span>
              <span>Facebook</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/social_media/linkedin.png`}
                  alt="LinkedIn"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </span>
              <span>LinkedIn</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/social_media/utube.png`}
                  alt="YouTube"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </span>
              <span>YouTube</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/social_media/X (Twitter).png`}
                  alt="X (Twitter)"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </span>
              <span>X (Twitter)</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/social_media/pinterest.png`}
                  alt="Pinterest"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </span>
              <span>Pinterest</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/social_media/snapchat.png`}
                  alt="Snapchat"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </span>
              <span>Snapchat</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/social_media/Hootsuite.png`}
                  alt="Hootsuite"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </span>
              <span>Hootsuite</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/social_media/Buffer.png`}
                  alt="Buffer"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </span>
              <span>Buffer</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <img
                  src={`${base}assets/images/services_icons/social_media/Sprout social.png`}
                  alt="Sprout Social"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </span>
              <span>Sprout Social</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio / Our Work Section */}
      <ServiceOurWorkSection
        work={serviceClientSectionsData['social-media-marketing']?.work}
        subtitle="A selection of end-to-end social media strategies, creative campaigns, and content engines executed for top brands."
      />

      <section className="process-section">
        <div className="section-inner">
          <span className="section-tag">How We Work</span>
          <h2 className="section-title">Our Social Media Management Process</h2>
          <p className="section-sub">A repeatable monthly rhythm that keeps content consistent, performance improving, and your team always in the loop.</p>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/social_media/Brand & Audience Audit.png`}
                  alt="Brand & Audience Audit"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h4>Brand &amp; Audience Audit</h4>
              <p>Review current profiles, audience data, and competitive landscape</p>
            </div>
            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/social_media/Strategy & Calendar.png`}
                  alt="Strategy & Calendar"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h4>Strategy &amp; Calendar</h4>
              <p>Monthly content plan with pillars, formats, and posting schedule</p>
            </div>
            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/social_media/Content Production.png`}
                  alt="Content Production"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h4>Content Production</h4>
              <p>Creatives, captions, and hashtag sets produced and approved</p>
            </div>
            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/social_media/Scheduling & Publishing.png`}
                  alt="Scheduling & Publishing"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h4>Scheduling &amp; Publishing</h4>
              <p>Optimised-time publishing and real-time community management</p>
            </div>
            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/social_media/Paid Amplification.png`}
                  alt="Paid Amplification"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h4>Paid Amplification</h4>
              <p>Boosting top-performing posts and running targeted paid campaigns</p>
            </div>
            <div className="process-step">
              <div className="step-num">
                <img
                  src={`${base}assets/images/services_icons/social_media/Monthly Review.png`}
                  alt="Monthly Review"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h4>Monthly Review</h4>
              <p>Performance report, insights debrief, and next-month planning</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="section-inner">
          <span className="section-tag section-tag-white">Why Sociapa</span>
          <h2 className="section-title">India's Social Media Agency of Choice</h2>
          <p className="section-sub">We've grown social channels for over 80 brands—here's what makes our approach different.</p>
          <div className="why-grid">
            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/social_media/In-House Creative Studio.png`}
                  alt="In-House Creative Studio"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h4>In-House Creative Studio</h4>
              <p>We have built an in-house creative studio employing Account Managers, Copywriters, Designers, Developers and Photographers. They all lead with the best of their artistic and business expertise for the brand growth and credibility.</p>
            </div>
            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/social_media/Data-Driven Decisions.png`}
                  alt="Data-Driven Decisions"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h4>Data-Driven Decisions</h4>
              <p>We make smarter marketing decisions with insights backed by real performance data. We analyse audience behaviour, content performance, and engagement trends to identify the formats, topics, and posting times that deliver the best results for your brand.</p>
            </div>
            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/social_media/Agile Content Operations.png`}
                  alt="Agile Content Operations"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h4>Agile Content Operations</h4>
              <p>Stay relevant with fast, responsive content execution. Our agile content team delivers rapid turnaround for trending topics, real-time events, and crisis communications while maintaining brand consistency, quality, and strategic messaging.</p>
            </div>
            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/social_media/Vernacular Content Capability.png`}
                  alt="Vernacular Content Capability"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h4>Vernacular Content Capability</h4>
              <p>Our content caters to diverse Indian audiences in multiple languages: Hindi, English and Regional. We hire the best of the writers in the marketing space that writes in the language of consumers.</p>
            </div>
            <div className="why-card">
              <div className="w-icon">
                <img
                  src={`${base}assets/images/services_icons/social_media/Dedicated Account Manager.png`}
                  alt="Dedicated Account Manager"
                  width="60"
                  height="60"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <h4>Dedicated Account Manager</h4>
              <p>For key communication, we have employed a dedicated account manager who understands your brand, goals, and priorities. With a single point of contact, you benefit from faster execution, proactive guidance, and a more efficient partnership.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Work Section */}
      <ServiceBehindWorkSection
        testimonials={serviceClientSectionsData['social-media-marketing']?.testimonials}
      />

      {/* Featured Case Studies Slider */}
      <ServiceCaseStudiesSlider />

      <section className="faq-section faq-section-padded" id="faq">
        <div className="section-inner">
          <h2 className="section-title">Social Media Marketing <span className="text-brand-red">Questions Answered</span></h2>
          <div className="faq-list">
            {faqsData.map((faq, idx) => (
              <div key={idx} className={`faq-item ${openFaq === idx ? 'open' : ''}`}>
                <div className="faq-q" onClick={() => toggleFaq(idx)}>
                  {faq.q}
                  <span className="faq-icon">{openFaq === idx ? '-' : '+'}</span>
                </div>
                <div className="faq-a" dangerouslySetInnerHTML={{ __html: faq.a }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Other Services Carousel */}
      <OtherServicesSlider />

      <section className="cta-section">
        <div className="section-inner section-inner-narrow">
          <h2>Ready to Own Your Social Media Presence?</h2>
          <p>Get a free social media audit and a custom growth strategy for your brand within 48 hours.</p>
          <Link to="/contact-us" className="btn-primary">Get My Free Social Audit</Link>
        </div>
      </section>
    </div>
  );
}
