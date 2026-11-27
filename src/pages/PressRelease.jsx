import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './PressRelease.css';

const pressArticles = [
  {
    img: 'madhusudn-pr.jpg',
    alt: 'Sociapa wins digital and creative mandate for Creamy Foods Limited',
    category: 'Digital & Creative Mandate',
    title: 'Sociapa wins the digital and creative mandate for Creamy Foods Limited',
    desc: 'The agency will work on creating campaigns for Creamy Foods Limited - Madhusudan utilising its digital marketing capabilities to enhance brand presence...',
    link: 'https://www.socialsamosa.com/industry-updates/sociapa-digital-creative-mandate-creamy-foods-limited-6710091',
    source: 'Social Samosa'
  },
  {
    img: 'tennisHub.jpg',
    alt: 'Sociapa secures Tennishub digital mandate',
    category: 'Digital Mandate',
    title: "Sociapa secures Tennishub's digital mandate, enhancing online presence",
    desc: 'Sociapa thrilled to collaborate with Tennishub, embarking on a dynamic partnership destined to elevate the tennis experience for enthusiasts worldwide...',
    link: 'https://sociapanews.com/sociapa-secures-tennishubs-digital-mandate-enhancing-online-presence-1221',
    source: 'Sociapa News'
  },
  {
    img: 'sociapa-patanjali.jpg',
    alt: "Sociapa bags digital mandate for Patanjali's Nutrela Nutrition",
    category: 'Health & Nutrition',
    title: 'Sociapa bags digital mandate for Patanjali’s Nutrela Nutrition',
    desc: 'Account Director, Sonakshi Raina says, “We are honoured to have been given an opportunity to work with a remarkable and a prestigious brand like Patanjali for their new label Nutrela Nutrition. This is a very different range from their usual product line with which the brand wants to reach out to the millennials and young parents to instill the idea of healthy living...”',
    link: 'https://www.medianews4u.com/sociapa-bags-digital-mandate-for-patanjalis-nutrela-nutrition/',
    source: 'MediaNews4U'
  },
  {
    img: 'kesari.jpg',
    alt: 'Sociapa bags digital mandate for Kesari Golden Sugar',
    category: 'FMCG Mandate',
    title: 'Sociapa bags the digital mandate for Tatva Health and Wellness’ Kesari Golden Sugar',
    desc: 'The agency will be responsible for the brand’s Website development, Social Media Marketing, PR and Offline creative design & development...',
    link: 'https://www.socialsamosa.com/2023/04/sociapa-digital-mandate-tatva-health/',
    source: 'Social Samosa'
  },
  {
    img: 'sociapa-sunstaller-banner.jpg',
    alt: 'Sociapa bags digital mandate for Sun Stellar',
    category: 'CleanTech Mandate',
    title: 'Sociapa bags the digital mandate for Sun Stellar',
    desc: 'Sociapa’s services are primarily categorized into 5 Sections: (i) Digital Marketing – Social Media Marketing, Influencer Marketing, Media Planning, E-com Listing, Website Development, Creative Designing, Email Marketing, SEO, Product Launch, Performance Marketing; (ii) Creative Marketing – Packaging Designing, Posters, Hoardings, Brochures/Leaflets/Flyers, Banners/standees, Stall designing, Danglers/Wobblers...',
    link: 'https://www.socialsamosa.com/2023/03/sociapa-digital-mandate-sun-stellar/',
    source: 'Social Samosa'
  },
  {
    img: 'vedaPress.jpg',
    alt: 'Sociapa bags digital & creative mandate for House of Veda',
    category: 'Ayurveda & Wellness',
    title: 'Sociapa bags digital & creative mandate for House of Veda',
    desc: 'Marketing agency Sociapa will now be taking care of the digital and creative solutions’ mandate for the recently launched brand – House of Veda. House of Veda is an ayurveda-based products company. Founder of Sociapa, Dheeraj Raj, says, “The country is moving toward everything organic - the need of the hour for better health of society and the environment. We are happy to manage House of Veda’s digital and communication need...”',
    link: 'https://www.exchange4media.com/announcements-news/sociapa-bags-digital-creative-mandate-for-house-of-veda-121464.html',
    source: 'Exchange4Media'
  },
  {
    img: 'frenchPress.jpg',
    alt: 'Sociapa bags digital and creative mandate for French Essence',
    category: 'Fragrance & Lifestyle',
    title: 'Sociapa bags digital and creative mandate for French Essence',
    desc: 'Marketing agency Sociapa will now take care of the digital and creative solutions mandate for French Essence, a brand by Spectra Care. Founder of Sociapa Dheeraj Raj, says, “We are ecstatic to have been given this opportunity by French Essence. This is yet another step for Sociapa towards achieving its goal. We are certain that we will be successful in making the brand reach its target groups through effective communication and campaigns...”',
    link: 'https://www.exchange4media.com/announcements-news/sociapa-bags-digital-and-creative-mandate-for-french-essence-120524.html',
    source: 'Exchange4Media'
  },
  {
    img: 'mpridePress.jpg',
    alt: 'Sociapa bags marketing mandate for Mother’s Pride and Evergreen Public School',
    category: 'Education Sector',
    title: 'Sociapa bags the marketing mandate for Mother’s Pride, Noida and social mandate for Evergreen Public School',
    desc: 'Marketing Agency, Sociapa has added two new brands to its portfolio – Evergreen Public School, Noida and Mother’s Pride, Noida. Along with handling the PR and social mandate for EPS, Sociapa will also be handling the website development. For Mother’s Pride, Sociapa will be responsible for building the website and running marketing campaigns...',
    link: 'https://www.afaqs.com/news/advertising/sociapa-bags-the-marketing-mandate-for-mothers-pride-noida-and-social-mandate-for-evergreen-public-school',
    source: 'Afaqs!'
  },
  {
    img: 'takufuPress.jpg',
    alt: 'The Marketing Agency Sociapa Bags the Digital Mandate for Takufu Dubai',
    category: 'International / Dubai',
    title: 'The Marketing Agency Sociapa Bags the Digital Mandate for Takufu – Home Décor Brand in Dubai',
    desc: 'Marketing Agency, Sociapa has successfully added another brand to its portfolio. The agency will now be taking care of the digital activities for the Dubai Based Home Décor Brand. Takufu is one of the leading companies in Media City, Sharjah offering online Luxury Home Decor Brand that creates and curates world-class premium home decorative range for the discerning...',
    link: 'https://www.apnnews.com/the-marketing-agency-sociapa-bags-the-digital-mandate-for-takufu-home-decor-brand-in-dubai/?amp=1',
    source: 'APN News'
  },
  {
    img: 'brandMarkPress.jpg',
    alt: 'Sociapa brings Effective solutions for brands via Marketing Tools',
    category: 'Agency Growth',
    title: 'Sociapa brings Effective solutions for brands via Marketing Tools',
    desc: 'Post working with many leading FMCG companies as Digital Marketing Manager, Dheeraj Raj started the successful marketing agency called Sociapa in 2019. The brand began its journey with only Three brands and today it has over 22 brands in its portfolio, exhibiting exponential growth. It continues to proudly bring forth its effective marketing solutions to its consumers...',
    link: 'http://mediabulletins.com/business/sociapa-brings-effective-solutions-for-brands-via-marketing-tools/',
    source: 'Media Bulletins'
  },
  {
    img: 'laAmePress.jpg',
    alt: 'Sociapa bags the brand mandate for La Americana',
    category: 'Gourmet FMCG',
    title: 'Sociapa bags the brand mandate for La Americana',
    desc: 'Sociapa has added another brand to its portfolio. The agency will now be taking care of the PR and social activities for La Americana – the leading FMCG major Bonn Group’s gourmet product line. Currently, La Americana Gourmet has a range of bread, bakery, cakes, and cookies. The brand will soon be coming up with new and innovative products that will not only be fulfilling in terms of health but also will be a treat to the taste buds...',
    link: 'https://www.medianews4u.com/the-marketing-agency-sociapa-bags-the-brand-mandate-for-la-americana/',
    source: 'MediaNews4U'
  },
  {
    img: 'bonnAmericanaPR.jpg',
    alt: 'Sociapa bags digital mandate for Bonn and Americana biscuits',
    category: 'Bakery & FMCG',
    title: 'Sociapa bags digital mandate for Bonn and Americana biscuits',
    desc: 'Marketing agency Sociapa will now be taking care of the digital activities for Americana, the FMCG brand Bonn Group’s product line for biscuits, and Bonn’s biscuits. Currently, Bonn and Americana have wide variety in biscuit category including cream, cracker, cookies and others. Founder of Sociapa, Dheeraj Raj says, “We have been taking care of the social and the creative mandate for Bonn’s La Americana and now are super thrilled to have been given this opportunity...”',
    link: 'https://www.exchange4media.com/digital-news/sociapa-bags-digital-mandate-for-bonn-and-americana-biscuits-118525.html',
    source: 'Exchange4Media'
  },
  {
    img: 'apis-milind-pr.jpg',
    alt: 'Sociapa bags PR & digital mandate for Apis India and Milind Soman association',
    category: 'Celebrity Campaign',
    title: 'Sociapa bags PR & digital mandate for Apis India and Milind Soman association',
    desc: 'Sociapa will manage the PR and social activities for the Apis India and Milind Soman association. Milind Soman has been signed as the brand ambassador for Apis Himalaya Honey. Milind will be promoting Apis Himalaya honey across online and offline mediums. The partnership is expected to give a strong face to the brand’s philosophy as the actor personifies the brand ethos which is health and nutrition...',
    link: 'https://www.socialsamosa.com/2021/08/sociapa-pr-digital-mandate-apis-india-milind-soman-association/',
    source: 'Social Samosa'
  },
  {
    img: 'sociapaBis.jpg',
    alt: 'The Marketing Agency Sociapa bags project for Bureau of Indian Standard',
    category: 'National Standards & PSU',
    title: 'The Marketing Agency Sociapa bags project for Bureau of Indian Standard',
    desc: 'Marketing Agency, Sociapa has added another brand to its portfolio. The agency will now be taking care of creative and content development for Bureau of Indian Standards (Ghaziabad and Noida branch) along with hallmarking callertunes. BIS is the National Standard Body of India established under the BIS Act 2016 for the harmonious development of the activities of standardization, marking and quality certification of goods...',
    link: 'https://www.medianews4u.com/the-marketing-agency-sociapa-bags-project-for-bureau-of-indian-standard/',
    source: 'MediaNews4U'
  },
  {
    img: 'et-award-800x400.jpg',
    alt: 'ET Leadership Excellence Awards 2023 - Sociapa Honored',
    category: 'National Recognition',
    title: 'ET Leadership Excellence Awards 2023 — Sociapa Honored',
    desc: 'Sociapa was recognized at the prestigious ET Leadership Excellence Awards 2023 for outstanding contribution to the digital marketing and advertising landscape in India. This recognition reaffirms our commitment to innovation and results.',
    link: 'https://economictimes.indiatimes.com/industry/media/entertainment/media/et-leadership-excellence-awards-2023-celebrates-the-business-leaders/articleshow/103135718.cms',
    source: 'Economic Times'
  }
];

export default function PressRelease() {
  const base = import.meta.env.BASE_URL || '/';

  return (
    <>
      <Helmet>
        <title>Recent News &amp; Press Release - Sociapa Newsroom</title>
        <meta name="description" content="Sociapa is where your Marketing Brilliance begins. Here we provides the latest stories regarding our services, cients and businesses." />
        <meta name="keywords" content="Sociapa Press Release, Digital Marketing News, Client Mandate, PR Agency India, Media Coverage" />
        <link rel="canonical" href="https://sociapa.com/sociapas-press-release" />
        <meta property="og:title" content="Recent News & Press Release - Sociapa Newsroom" />
        <meta property="og:description" content="Sociapa is where your Marketing Brilliance begins. Here we provides the latest stories regarding our services, cients and businesses." />
        <meta property="og:url" content="https://sociapa.com/sociapas-press-release" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="SOCIAPA" />
        <meta property="og:image" content="https://sociapa.com/images/sociapa-outlook-business-800x400.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sociapa" />
        <meta name="twitter:title" content="Recent News & Press Release - Sociapa Newsroom" />
        <meta name="twitter:description" content="Sociapa is where your Marketing Brilliance begins. Here we provides the latest stories regarding our services, cients and businesses." />
        <meta name="twitter:image" content="https://sociapa.com/images/sociapa-outlook-business-800x400.jpg" />
      </Helmet>

      {/* ── FULL BLEED HERO BANNER ── */}
      <div className="serInsideBnr">
        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
          Recent News &amp; Press Releases — Sociapa Newsroom &amp; Media Coverage
        </h1>
        <div className="row">
          <picture>
            <source type="image/webp" srcSet={`${base}images/banners/press/press_release_banner.webp`} />
            <img
              src={`${base}images/banners/press/press_release_banner.webp`}
              alt="Sociapa Press Releases and Media Coverage Banner"
              className="responsive-img w-100"
              width="1920"
              height="700"
              loading="eager"
            />
          </picture>
        </div>
      </div>

      {/* ── Main Press Section ── */}
      <section className="section-pad pr-section-light" id="press-articles">
        <div className="container">

          {/* Section Header */}
          <div className="section-title animate-on-scroll pr-section-header-centered">
            <div className="pr-section-tag">
              <span className="pr-dot" />
              OFFICIAL NEWSROOM
            </div>
            <h2 className="pr-section-h2">
              Sociapa in the <span className="pr-text-red">Spotlight</span>
            </h2>
            <p className="pr-section-desc">
              Sociapa is where your Marketing Brilliance begins. Explore our latest official announcements, brand mandates, media features, and national agency achievements.
            </p>
          </div>

          {/* ── Featured Top Story (Outlook Business Spotlight 2026) ── */}
          <div className="animate-on-scroll pr-featured-wrap">
            <div className="press-featured-card">
              {/* Image */}
              <div className="pr-featured-img-inner">
                <img
                  src={`${base}images/sociapa-outlook-business-800x400.jpg`}
                  alt="Sociapa - Outlook Business Spotlight Achievers Awards 2026"
                  loading="lazy"
                />
                <div className="pr-featured-img-badge">
                  Featured Recognition 2026
                </div>
              </div>

              {/* Content */}
              <div className="press-featured-content">
                <div className="pr-featured-content-tag">
                  Outlook Business Spotlight
                </div>
                <h3 className="pr-featured-h2">
                  Sociapa Named Innovative Digital &amp; Creative Agency of the Year at <span className="pr-text-red">Outlook Business Spotlight Achievers Awards 2026</span>
                </h3>
                <p className="pr-featured-desc">
                  Sociapa has earned the title of “Innovative Digital &amp; Creative Agency of the Year” at the Achievers Awards 2026, presented at the 18th Edition of Outlook Business Spotlight. Founder Dheeraj Raj and COO Sonakshi Raina share their vision on brand strategy, positioning, AI, and running an integrated MarCom powerhouse...
                </p>
                <a
                  href="https://www.outlookindia.com/xhub/featured-insights/sociapa-in-the-business-of-making-businesses-matter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary pr-featured-read-btn"
                >
                  <span>Read Full Story</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </a>
              </div>
            </div>
          </div>

          {/* ── Sub Header for All Press Stories ── */}
          <div className="pr-sub-header">
            <div className="pr-sub-tag">
              <span className="pr-dot" />
              PRESS RELEASES &amp; CLIENT MANDATES
            </div>
            <h2 className="pr-sub-h3">Recent News &amp; Media Coverage</h2>
          </div>

          {/* ── Stories Grid ── */}
          <div className="press-stories-grid">
            {pressArticles.map((article, idx) => (
              <article
                key={idx}
                className="press-card animate-on-scroll"
                style={{ transitionDelay: `${(idx % 3) * 0.06}s` }}
              >
                {/* Image Box */}
                <div className="press-card-img-wrapper">
                  <img
                    src={`${base}images/${article.img}`}
                    alt={article.alt}
                    className="press-card-img"
                    loading="lazy"
                  />
                  {/* Category badge */}
                  <div className="press-card-badge">
                    {article.category}
                  </div>
                </div>

                {/* Content */}
                <div className="press-card-body">
                  <div className="press-card-source">
                    <span className="press-card-source-dot" />
                    {article.source}
                  </div>
                  <h3 className="press-card-title">
                    {article.title}
                  </h3>
                  <p className="press-card-desc">
                    {article.desc}
                  </p>
                  <div className="press-card-footer">
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="press-card-link-btn"
                    >
                      <span>Read More</span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* ── Bottom CTA ── */}
          <div className="animate-on-scroll pr-cta-wrap">
            <div className="press-cta-box">
              <div className="pr-cta-pattern" />
              <div className="pr-cta-glow" />

              <div className="pr-cta-content">
                <div className="pr-cta-tag">
                  📢 PRESS &amp; MEDIA ENQUIRIES
                </div>
                <h2 className="pr-cta-h2">
                  Want to Feature Sociapa?
                </h2>
                <p className="pr-cta-desc">
                  For press inquiries, brand mandates, media collaborations, executive interviews, or feature stories — reach out to our communications team.
                </p>
                <div className="pr-cta-btns">
                  <a
                    href="mailto:mail@sociapa.com"
                    className="btn btn-primary pr-cta-btn-primary"
                  >
                    Contact Press Team
                  </a>
                  <Link
                    to="/contact-us"
                    className="btn pr-cta-btn-outline"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
