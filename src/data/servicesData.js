export const serviceCategories = [
  { id: 'BRANDING', label: 'Branding & Strategy' },
  { id: 'DIGITAL', label: 'Digital & Performance' },
  { id: 'CREATIVE', label: 'Creative & Production' },
  { id: 'PR', label: 'Public Relations' },
  { id: 'INFLUENCER', label: 'Influencer Marketing' },
  { id: 'REGISTRATION', label: 'Registration Services' },
];

export const digitalPriorityOrder = [
  'Social Media Marketing',
  'Digital Marketing',
  'SEO | AEO | GEO',
  'Website/App Development',
  'Email Marketing',
  'Ad Experience',
  'Aggregator Platform Service',
];

export const allServicesData = [
  // 1. Brand Identity Design
  { id: 1, category: 'BRANDING', title: 'Brand Identity Design', tag: 'BRANDING & DESIGN', desc: 'Transformative visual identities, logos, color systems, and brand playbooks built to position your brand as an industry leader.', img: 'brand-identity-design.jpeg', link: '/brand-identity-design' },

  // 2. Brand Strategy
  { id: 2, category: 'BRANDING', title: 'Brand Strategy', tag: 'STRATEGY & ARCHITECTURE', desc: 'Data-driven brand positioning, competitive analysis, and strategic messaging to dominate your market category.', img: 'brand-service.jpeg', link: '/brand-strategy' },

  // 3. Consultation & Idea
  { id: 3, category: 'BRANDING', title: 'Consultation & Idea', tag: 'STRATEGY & ADVISORY', desc: 'Strategic brand consultation, ideation workshops, and creative direction to discover new growth channels.', img: 'Consultation-&-Ideas.jpg', link: '/consultation-idea' },

  // 4. Content Development
  { id: 4, category: 'CREATIVE', title: 'Content Development', tag: 'STRATEGY & COPY', desc: 'Strategic content planning, copy creation, blogs, campaign messaging, and digital storytelling tailored to your audience.', img: 'Content-Development.jpg', link: '/content-designing' },

  // 5. Creative Designing
  { id: 5, category: 'CREATIVE', title: 'Creative Designing', tag: 'VISUAL SYSTEM', desc: 'Award-winning graphic design, social media creatives, ad banners, and marketing collaterals that command attention.', img: 'Creative-Designing.jpg', link: '/creative-designing' },

  // 6. Digital Marketing
  { id: 6, category: 'DIGITAL', title: 'Digital Marketing', tag: 'PERFORMANCE MARKETING', desc: 'ROI-focused digital campaigns combining Meta Ads, Google PPC, programmatic buying, and funnel optimisation.', img: 'Digital-Marketing.jpg', link: '/best-digital-marketing-services-india' },

  // 7. Email Marketing
  { id: 7, category: 'DIGITAL', title: 'Email Marketing', tag: 'RETENTION & CRO', desc: 'Automated lifecycle flows, broadcast campaigns, and hyper-segmented retention strategies that boost customer LTV.', img: 'Email-Marketing.jpg', link: '/email-marketing-services' },

  // 8. Go To Market
  { id: 8, category: 'BRANDING', title: 'Go To Market', tag: 'LAUNCH & GROWTH', desc: 'End-to-end product launch blueprints, market entry tactics, and channel strategies designed for rapid commercial traction.', img: 'go to-market-services.jpeg', link: '/go-to-market' },

  // 9. Influencer Marketing
  { id: 9, category: 'INFLUENCER', title: 'Influencer Marketing', tag: 'CREATOR COLLABS', desc: 'Connecting your brand with 5,000+ vetted micro, macro, and celebrity influencers for high-trust brand advocacy.', img: 'Influencer-Marketing.jpg', link: '/influencer-marketing-services' },

  // 10. Packaging and Design
  { id: 10, category: 'BRANDING', title: 'Packaging and Design', tag: 'PACKAGING DESIGN', desc: 'Shelf-stopping packaging and label designs engineered to catch eyes, evoke emotion, and drive immediate purchase decisions.', img: 'Packaging-and-Design.jpg', link: '/best-packaging-design-agency-india' },

  // 11. Photography
  { id: 11, category: 'CREATIVE', title: 'Photography', tag: 'STUDIO & PRODUCT', desc: 'High-definition studio photography, e-commerce catalog shoots, lifestyle imagery, and model shoots for digital ads.', img: 'Photography.jpg', link: '/best-photography-services' },

  // 12. Product Unboxing
  { id: 12, category: 'BRANDING', title: 'Product Unboxing', tag: 'UNBOXING DESIGN', desc: 'Memorable unboxing architecture and structural packaging that turns buyers into vocal brand advocates on social media.', img: 'product-unboxing-service.jpeg', link: '/product-unboxing-experience' },

  // 13. Public Relation
  { id: 13, category: 'PR', title: 'Public Relation', tag: 'CREDIBILITY & PRESS', desc: 'Press releases, top-tier news placement, executive profiling, and reputation management across national publications.', img: 'Public-Relation.jpg', link: '/best-pr-agency-india' },

  // 14. Registration Services
  { id: 14, category: 'REGISTRATION', title: 'Registration Services', tag: 'LEGAL & COMPLIANCE', desc: 'Hassle-free trademarking, brand naming, corporate legal registration, and GST compliance for growing businesses.', img: 'Registration-Services.jpg', link: '/gst-company-registration-services' },

  // 15. SEO | AEO | GEO
  { id: 15, category: 'DIGITAL', title: 'SEO | AEO | GEO', tag: 'SEARCH OPTIMIZATION', desc: 'Integrated Search, Answer Engine, and Generative Engine Optimisation to dominate traditional Google rankings and AI search platforms.', img: 'seo-aeo-geo-services.jpeg', link: 'https://www.seoaeogeoservices.com/' },

  // 16. Social Media Marketing
  { id: 16, category: 'DIGITAL', title: 'Social Media Marketing', tag: 'COMMUNITY & VIRAL', desc: 'Full-funnel social media strategy, community building, viral content creation, and real-time social listening.', img: 'Social-Media-Marketing.jpg', link: '/best-social-media-marketing-agency-india' },

  // 17. Video Production
  { id: 17, category: 'CREATIVE', title: 'Video Production', tag: 'COMMERCIAL & REELS', desc: 'High-end TVCs, brand films, viral Instagram Reels, product demos, and corporate videography produced from concept to cut.', img: 'Video-Production.jpg', link: '/videos' },

  // 18. Website/App Development
  { id: 18, category: 'DIGITAL', title: 'Website/App Development', tag: 'TECH & UI/UX', desc: 'Custom, blazing-fast Shopify, React, and WordPress websites built for flawless user experience and maximum conversion rates.', img: 'Website-App-Development.jpg', link: '/best-web-development-agency-india' },

  // 19. Ad Experience
  { id: 19, category: 'DIGITAL', title: 'Ad Experience', tag: 'PAID PERFORMANCE', desc: 'High-converting ad funnels engineered for low customer acquisition cost (CAC) and maximum Return on Ad Spend (ROAS).', img: 'Ad-Experience.jpg', link: '/pay-per-click-ppc-services-india' },

  // 20. Aggregator Platform Service
  { id: 20, category: 'DIGITAL', title: 'Aggregator Platform Service', tag: 'E-COMMERCE & B2B', desc: 'Maximizing brand presence, product listings, and ad performance across Amazon, Flipkart, Blinkit, and Zepto.', img: 'Aggregator-Platform-Service.jpg', link: '/aggregator-platform-service' },
];

export function getServicesByCategory(categoryId) {
  return allServicesData
    .filter((s) => s.category === categoryId)
    .sort((a, b) => {
      if (categoryId === 'DIGITAL') {
        const indexA = digitalPriorityOrder.indexOf(a.title);
        const indexB = digitalPriorityOrder.indexOf(b.title);
        if (indexA !== -1 && indexB !== -1) return indexA - indexB;
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;
      }
      return 0;
    });
}
