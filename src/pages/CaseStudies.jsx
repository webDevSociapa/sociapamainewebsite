import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { postApi } from '../config/api';
import './CaseStudies.css';
import SebumPackagingFigmaDetail from '../components/case_studies/SebumPackagingFigmaDetail';
import MintChoconFigmaDetail from '../components/case_studies/MintChoconFigmaDetail';
import ApisInfluencerFigmaDetail from '../components/case_studies/ApisInfluencerFigmaDetail';
import TupperwareFigmaDetail from '../components/case_studies/TupperwareFigmaDetail';
import FrenchEssenceDigitalFigmaDetail from '../components/case_studies/FrenchEssenceDigitalFigmaDetail';
import BikanoPerformanceFigmaDetail from '../components/case_studies/BikanoPerformanceFigmaDetail';
import BonnAiVideoFigmaDetail from '../components/case_studies/BonnAiVideoFigmaDetail';

// ── 7 EXACT FIGMA CATEGORIES ──
const figmaCategories = [
  { id: 'all', label: 'ALL CASE STUDIES' },
  { id: 'packaging', label: 'PACKAGING' },
  { id: 'influencer', label: 'INFLUENCER CAMPAIGN' },
  { id: 'product_launch', label: 'PRODUCT LAUNCH' },
  { id: 'digital', label: 'DIGITAL' },
  { id: 'performance', label: 'PERFORMANCE' },
  { id: 'ai_video', label: 'AI VIDEO' },
];

const slugToCaseStudyId = {
  'product-launch': 'mint-chocon',
  'mint-chocon': 'mint-chocon',
  'product_launch': 'mint-chocon',

  'packaging': 'sebum-skincare',
  'sebum-skincare': 'sebum-skincare',
  'sebum': 'sebum-skincare',

  'influencer-campaign': 'apis-influencer',
  'apis-influencer': 'apis-influencer',
  'influencer': 'apis-influencer',
  'tupperware': 'tupperware-influencer',
  'tupperware-influencer': 'tupperware-influencer',

  'digital': 'french-essence',
  'french-essence': 'french-essence',

  'performance': 'bikano-performance',
  'bikano-performance': 'bikano-performance',
  'bikano': 'bikano-performance',

  'ai-video': 'bonn-ai-video',
  'ai_video': 'bonn-ai-video',
  'ai video': 'bonn-ai-video',
  'AI video': 'bonn-ai-video',
  'AI-video': 'bonn-ai-video',
  'bonn-ai-video': 'bonn-ai-video',
  'bonn': 'bonn-ai-video',
};

const categoryToSlug = {
  all: '',
  packaging: 'packaging',
  influencer: 'influencer-campaign',
  product_launch: 'product-launch',
  digital: 'digital',
  performance: 'performance',
  ai_video: 'ai-video',
};

const idToSlug = {
  'mint-chocon': 'product-launch',
  'sebum-skincare': 'packaging',
  'apis-influencer': 'influencer-campaign',
  'tupperware-influencer': 'tupperware',
  'french-essence': 'digital',
  'bikano-performance': 'performance',
  'bonn-ai-video': 'ai-video',
};

// ── ALL CASE STUDIES DATA (LISTING + FIGMA DETAIL VIEW) ──
const allCaseStudiesData = [
  {
    id: 'mint-chocon',
    category: 'product_launch',
    categoryLabel: 'PRODUCT LAUNCH',
    fileType: 'pdf',
    fileSize: '3.7 MB',
    brand: 'Mint ChocOn',
    title: 'Mint ChocOn — National Celebrity Launch',
    tagline: 'Mint Nahi Hint Hai — Starring Bollywood Star Janhvi Kapoor',
    clientCompany: 'Mahak Group',
    listingImage: 'images/case_study/mint_choco_product_launch/mask_group.png',
    detailHeroImage: 'images/case_study/mint_choco_product_launch/mask_group_packaging.png',
    cardBg: '#FFFFFF',
    accentColor: '#98E4D6',
    brandColor: '#E65100',
    headlineScript: 'Mint Nahi Hint Hai',
    overview:
      'Sociapa conceptualized and orchestrated the multi-phase product launch and 360-degree digital activation for Mahak Group’s Mint ChocOn starring Bollywood star Janhvi Kapoor. From teaser rollouts and couple-focused viral trends to packaging storytelling, the campaign positioned Mint ChocOn as India’s favourite chocolate-filled mint.',
    stats: [
      { label: 'Campaign Impressions', value: '15M+' },
      { label: 'Creator Collaborations', value: '40+' },
      { label: 'Social Engagement', value: '2.5M+' },
      { label: 'Brand Recall Surge', value: '78%' },
    ],
    beforeAfter: {
      before: [
        'New candy variant entering an intensely crowded confectionery market.',
        'No digital awareness or youthful youth-first brand association.',
        'Needed a punchy, conversational tagline to stand apart from traditional mints.',
      ],
      after: [
        'Viral TVC & digital campaign with Janhvi Kapoor (#MintNahiHintHai).',
        'Over 15M+ digital impressions across Instagram and YouTube.',
        'High retail pull-through and national quick-commerce adoption.',
      ],
    },
    gallery: [
      {
        src: 'images/case_study/mint_choco_product_launch/mint_chocon_six_pack_evolution_staircase_copy_1.png',
        title: 'Packaging Evolution & Staircase Display',
        caption: 'Retail merchandising layout and 6-pack counter displays.',
        colSpan: 12,
      },
      {
        src: 'images/case_study/mint_choco_product_launch/graphite_mint_chocon_packaging_concept_sketch_1_copy_1.png',
        title: 'Initial Packaging Graphite Concept Sketch',
        caption: 'Early structural and typographic ideation before digital dielines.',
        colSpan: 6,
      },
      {
        src: 'images/case_study/mint_choco_product_launch/mask_group.png',
        title: 'Janhvi Kapoor TVC & Digital Key Visual',
        caption: 'Lead creative banner driving #MintNahiHintHai communication.',
        colSpan: 6,
      },
    ],
    downloads: [
      {
        title: 'Mint ChocOn - Product Launch Case Study',
        file: 'pdf/Mint-ChocOn-Product-Launch.pdf',
        type: 'pdf',
        size: '3.7 MB',
      },
      {
        title: 'Mint ChocOn - Influencer Campaign Case Study',
        file: 'pdf/Mint-Chocon-Influencer-Campaign.pdf',
        type: 'pdf',
        size: '5.5 MB',
      },
    ],
    serviceLink: '/best-packaging-design-agency-india',
    serviceLinkText: 'Explore Packaging Design Services',
  },
  {
    id: 'sebum-skincare',
    category: 'packaging',
    categoryLabel: 'PACKAGING',
    fileType: 'ppsx',
    fileSize: '34 MB',
    brand: 'Sebum',
    title: 'Sebum — Modern Clinical Skincare Packaging',
    tagline: 'Modern clinical skincare packaging, dieline architecture & brand identity',
    clientCompany: 'Sebum Dermatics',
    listingImage: 'images/case_study/mint_choco_product_launch/other_service_packaging.jpg',
    detailHeroImage: 'images/case_study/sebum_packaging/group_56.png',
    cardBg: '#FFFFFF',
    accentColor: '#FFEDD5',
    brandColor: '#C2410C',
    headlineScript: 'Minimal. Clinical. Modern.',
    overview:
      'Engineered an international-grade skincare packaging identity for Sebum. By blending clean pharmaceutical typography with distinct color blocking and ergonomic bottle dielines, we positioned Sebum as a trusted, dermatologist-recommended consumer brand.',
    stats: [
      { label: 'Product SKUs Formatted', value: '8+ SKUs' },
      { label: 'Vector Dielines Approved', value: '100%' },
      { label: 'Retail Shelf Pickup', value: '+42%' },
      { label: 'Blinkit / Zepto Ready', value: 'Day 1' },
    ],
    beforeAfter: {
      before: [
        'Generic clinical look without strong retail shelf appeal.',
        'Inconsistent label typography across differing bottle sizes.',
        'Lacked clear visual differentiation between treatment variants.',
      ],
      after: [
        'Cohesive color-blocked design system with clear variant coding.',
        'Production-ready vector dielines for bottles, cartons, and dropper packs.',
        '42% increase in consumer off-take in modern retail stores.',
      ],
    },
    gallery: [
      {
        src: 'images/case_study/sebum_packaging/group_56.png',
        title: 'Complete Sebum Packaging Product Suite',
        caption: 'Finished retail boxes, dropper bottles, and tubes layout.',
        colSpan: 12,
      },
      {
        src: 'images/case_study/sebum_packaging/sebum_packaging_sketches_in_orange_and_blue_1.png',
        title: 'Packaging Ideation & Colorway Sketches',
        caption: 'Exploration of dual-tone gradients and typographic hierarchies.',
        colSpan: 6,
      },
      {
        src: 'images/case_study/sebum_packaging/product_1.png',
        title: '3D Render & Material Finish',
        caption: 'UV spot gloss and matte varnish testing for premium tactile feel.',
        colSpan: 6,
      },
      {
        src: 'images/case_study/sebum_packaging/group_109.png',
        title: 'Variant Lineup & Carton Dielines',
        caption: 'Production-ready vector templates created for commercial print runs.',
        colSpan: 12,
      },
    ],
    downloads: [
      {
        title: 'Sebum Skincare Packaging Portfolio',
        file: 'assets/case_studies/Gyan%20x%20Sociapa.ppsx',
        type: 'ppsx',
        size: '34 MB',
      },
    ],
    serviceLink: '/best-packaging-design-agency-india',
    serviceLinkText: 'See Packaging Design Solutions',
  },
  {
    id: 'apis-influencer',
    category: 'influencer',
    categoryLabel: 'INFLUENCER CAMPAIGN',
    fileType: 'pdf',
    fileSize: '3.8 MB',
    brand: 'Apis India',
    title: 'Apis — Influencer Phase 1 & Festive Case Study',
    tagline: '2.0M+ reach featuring Ranveer Brar, Zakir Khan & top food creators',
    clientCompany: 'Apis India Ltd.',
    listingImage: 'images/case-studies-apis.webp',
    detailHeroImage: 'images/case_study/apis_influencer/mask_group_11.png',
    cardBg: '#FFFFFF',
    accentColor: '#FEF3C7',
    brandColor: '#B45309',
    headlineScript: 'Apis Se Banao',
    overview:
      'Sociapa led a high-impact influencer marketing roadmap for Apis India, partnering with iconic celebrity chef Ranveer Brar, youth comedian Zakir Khan, and 50+ leading food bloggers. The campaign elevated Apis Honey, Jams, Pickles, and Green Tea into modern kitchen essentials.',
    stats: [
      { label: 'Total Campaign Reach', value: '2.0M+' },
      { label: 'Celebrity Tier Endorsements', value: 'Tier-1' },
      { label: 'Recipe Video Views', value: '4.8M+' },
      { label: 'Branded Searches Lift', value: '3x YoY' },
    ],
    beforeAfter: {
      before: [
        'Limited organic reach across youth-centric digital channels.',
        'No celebrity chef or top-tier comedy creator endorsements.',
        'Brand awareness constrained to traditional offline advertising.',
      ],
      after: [
        'Delivered 2.0M+ verified reach with celebrity masterclass integration.',
        'Multi-phase influencer rollout across Ramadan, Diwali, and New Year.',
        'Generated thousands of organic consumer recipes under #ApisSeBanao.',
      ],
    },
    gallery: [
      {
        src: 'images/case_study/apis_influencer/mask_group_11.png',
        title: 'Celebrity Masterclass Integration',
        caption: 'Chef Ranveer Brar and top culinary creators preparing festive recipes.',
        colSpan: 12,
      },
      {
        src: 'images/case_study/apis_influencer/mask_group_12.png',
        title: 'Influencer Content Stream',
        caption: 'Short-form Reels, Instagram Stories, and community giveaways.',
        colSpan: 6,
      },
      {
        src: 'images/case_study/apis_influencer/mask_group_6.png',
        title: 'Festive Ramadan & Diwali Amplification',
        caption: 'Cultural resonance campaigns driving seasonal retail sales spikes.',
        colSpan: 6,
      },
    ],
    downloads: [
      {
        title: 'Apis - Influencer Phase 1 Case Study',
        file: 'pdf/Apis-Influencer-Campaign.pdf',
        type: 'pdf',
        size: '3.8 MB',
      },
      {
        title: 'Apis - Ramadan Influencer Campaign',
        file: 'pdf/Apis-Ramadan-Campaign.pdf',
        type: 'pdf',
        size: '2.1 MB',
      },
    ],
    serviceLink: '/influencer-marketing-services',
    serviceLinkText: 'Discover Influencer Marketing',
  },
  {
    id: 'tupperware-influencer',
    category: 'influencer',
    categoryLabel: 'INFLUENCER CAMPAIGN',
    fileType: 'pdf',
    fileSize: '4.2 MB',
    brand: 'Tupperware',
    title: 'Tupperware — The Great Tupperware Festival',
    tagline: 'Turning a festive sale into relatable, creator-led storytelling',
    clientCompany: 'Tupperware India',
    listingImage: 'images/case_study/tupperware/hero_banner.jpg',
    detailHeroImage: 'images/case_study/tupperware/hero_banner.jpg',
    cardBg: '#FFFFFF',
    accentColor: '#E0F2FE',
    brandColor: '#0369A1',
    headlineScript: 'Relatable Storytelling',
    overview:
      'The Great Tupperware Festival used creator-led storytelling to connect product utility with festive shopping intent. Across 10 videos and four platforms, the campaign generated 975K+ views, alongside 4.9K+ interactions and 161+ link clicks.',
    stats: [
      { label: 'Total Views', value: '975.3K+' },
      { label: 'Total Interactions', value: '4.9K+' },
      { label: 'Link Clicks', value: '161+' },
      { label: 'UGC Videos', value: '10' },
    ],
    beforeAfter: {
      before: [
        'Festive sale campaigns competing in a crowded landscape of discounts and repetitive promotional ads.',
        'Needed to demonstrate everyday utility and product relevance beyond plain discounts.',
        'Lacked creator-led authentic UGC connection across Instagram Reels and YouTube Shorts.',
      ],
      after: [
        '10 short-form UGC videos across 4 major platforms in real-home relatable scenarios.',
        'Over 975,000+ views with high engagement and 161+ direct shopping link clicks.',
        'Positioned 4 product lines: Primo, AquaVibe, Super Storer, and Smart Saver seamlessly.',
      ],
    },
    gallery: [
      {
        src: 'images/case_study/sebum_packaging/group_57.png',
        title: 'The Great Tupperware Festival Creative Suite',
        caption: 'UGC creator content and multi-platform vertical video campaign assets.',
        colSpan: 12,
      },
    ],
    downloads: [
      {
        title: 'Tupperware Campaign Report',
        file: 'assets/case_studies/Gyan%20x%20Sociapa.ppsx',
        type: 'ppsx',
        size: '12 MB',
      },
    ],
    serviceLink: '/influencer-marketing-services',
    serviceLinkText: 'Explore Influencer Marketing Services',
  },
  {
    id: 'french-essence',
    category: 'digital',
    categoryLabel: 'DIGITAL',
    fileType: 'pdf',
    fileSize: '24 MB',
    brand: 'French Essence',
    title: 'French Essence — Luxury Fragrance Digital Evolution',
    tagline: 'Brand repositioning, high-fashion tabletop shoots & social content engine',
    clientCompany: 'French Essence Paris',
    listingImage: 'images/case_study/french_essence_digital/mask_group.png',
    detailHeroImage: 'images/case_study/french_essence_digital/group_111.png',
    cardBg: '#080808',
    accentColor: '#EDE9FE',
    brandColor: '#6D28D9',
    headlineScript: 'The Scent of Elegance',
    overview:
      'Revamped French Essence across all digital touchpoints. We crafted high-converting luxury lifestyle content, dynamic social ad formats, and a refined logo architecture that repositioned French Essence against legacy global perfume houses.',
    stats: [
      { label: 'Direct E-Commerce Orders', value: '+180%' },
      { label: 'Monthly Creative Engine', value: '45+ Ads' },
      { label: 'Blended Ad CTR', value: '3.4%' },
      { label: 'Organic Community Growth', value: '120k+' },
    ],
    beforeAfter: {
      before: [
        'Lack of consistent aesthetic storytelling on Instagram and web.',
        'Low conversion rates on direct-to-consumer fragrance discovery kits.',
        'High customer acquisition cost across paid social advertising.',
      ],
      after: [
        'Established editorial-quality aesthetic with luxury tabletop photography.',
        'Deployed 45+ dynamic ad variations monthly for Meta and YouTube.',
        '180% surge in monthly e-commerce orders with improved retention.',
      ],
    },
    gallery: [
      {
        src: 'images/case_study/french_essence_digital/group_111.png',
        title: 'Digital Key Visuals & Product Moodboard',
        caption: 'High-end tabletop fragrance photography and digital display banners.',
        colSpan: 12,
      },
      {
        src: 'images/case_study/french_essence_digital/french_essence_logo_evolution_study_1.png',
        title: 'Logo Identity & Typography Evolution',
        caption: 'Refining the emblem, letter spacing, and luxury bottle stamping.',
        colSpan: 6,
      },
      {
        src: 'images/case_study/french_essence_digital/group_112.png',
        title: 'Social Media Grid & Carousel Ads',
        caption: 'Lifestyle video formats designed for Meta and YouTube Shorts.',
        colSpan: 6,
      },
    ],
    downloads: [
      {
        title: 'French Essence Digital & Creative Case Study',
        file: 'assets/case_studies/Sociapa%20-%20Digital%20Case%20Study%20.pdf',
        type: 'pdf',
        size: '24 MB',
      },
    ],
    serviceLink: '/best-digital-marketing-services-india',
    serviceLinkText: 'Explore Digital Marketing Services',
  },
  {
    id: 'bikano-performance',
    category: 'performance',
    categoryLabel: 'PERFORMANCE',
    fileType: 'ppsx',
    fileSize: '35 MB',
    brand: 'Bikano',
    title: 'Bikano — Scaled Performance & Festive Off-Take',
    tagline: 'Hyper-targeted festive ads, quick-commerce growth & ROAS maximization',
    clientCompany: 'Bikano',
    listingImage: 'images/case_study/performance_bikano/mask_group.png',
    detailHeroImage: 'images/case_study/performance_bikano/group_117.png',
    cardBg: '#FFFFFF',
    accentColor: '#FFE4E6',
    brandColor: '#E11D48',
    headlineScript: 'Taste the Crunch. Scale the ROAS.',
    overview:
      'Driving visibility for an established FMCG brand requires more than simply putting content in front of an audience. The campaign needed to distribute Bikano\'s video content across digital platforms, generate views at scale, and deliver efficient media performance.',
    stats: [
      { label: 'Blended Ad ROAS', value: '4.6x' },
      { label: 'Customer Acquisition Cost', value: '-38%' },
      { label: 'Festive Campaign Reach', value: '12M+' },
      { label: 'Quick-Commerce Conversion', value: '+65%' },
    ],
    beforeAfter: {
      before: [
        'Seasonal festive sales heavily dependent on physical sweet shop footfalls.',
        'Quick-commerce search inventory not optimized for impulse snack queries.',
        'High blended cost-per-click on generic gifting keywords.',
      ],
      after: [
        'Structured geo-targeted PPC funnel capturing high-intent buyers.',
        'Ranked #1 on Blinkit and Zepto for seasonal Diwali namkeen combos.',
        '4.6x verified return on ad spend (ROAS) across festive campaigns.',
      ],
    },
    gallery: [
      {
        src: 'images/case_study/performance_bikano/group_117.png',
        title: 'Omnichannel Performance Creative Grid',
        caption: 'Localized static banners, festive offers, and snack combo creatives.',
        colSpan: 12,
      },
      {
        src: 'images/case_study/performance_bikano/mask_group.png',
        title: 'Lead Conversion Ad Formats',
        caption: 'High-intent search and social ads driving instant cart additions.',
        colSpan: 6,
      },
      {
        src: 'images/case_study/performance_bikano/group_120.png',
        title: 'Performance Analytics Dashboard',
        caption: 'Real-time cohort tracking and geo-targeted optimization matrix.',
        colSpan: 6,
      },
    ],
    downloads: [
      {
        title: 'Bikano Performance Marketing Overview',
        file: 'assets/case_studies/Sociapa_Bonn%20Social%20Media%20Launch.ppsx',
        type: 'ppsx',
        size: '35 MB',
      },
    ],
    serviceLink: '/pay-per-click-ppc-services-india',
    serviceLinkText: 'Explore Performance PPC Services',
  },
  {
    id: 'bonn-ai-video',
    category: 'ai_video',
    categoryLabel: 'AI VIDEO',
    fileType: 'ppsx',
    fileSize: '35 MB',
    brand: 'Bonn Group',
    title: 'Bonn — Giving Product & USPs a Gen Z Beat',
    tagline: '682.9K views, distinctive product mascots & jingle-led AI video storytelling',
    clientCompany: 'Bonn Group',
    listingImage: 'images/case_study/ai_video/hero_banner.png',
    detailHeroImage: 'images/case_study/ai_video/hero_banner.png',
    cardBg: '#FFFFFF',
    accentColor: '#FFF1F0',
    brandColor: '#C8282A',
    headlineScript: 'Giving Product & USPs a Gen Z Beat',
    overview:
      'The campaign brought together AI-powered visuals, product mascots and music-led storytelling to make product communication more engaging for younger audiences. With 682.9K views and 648K reach across Instagram and Facebook, the campaign gave Bonn\'s product USPs a distinctive, entertaining format while driving audience interactions and new Instagram follows.',
    stats: [
      { label: 'Total Views (IG & FB)', value: '682.9K' },
      { label: 'Campaign Reach', value: '648K' },
      { label: 'Total Interactions', value: '2.4K' },
      { label: 'New Instagram Follows', value: '516' },
    ],
    beforeAfter: {
      before: [
        'Needed to communicate individual Bonn product USPs in an engaging, youth-centric format.',
        'Traditional product communications risked being dry and lost in social feeds.',
        'Lacked distinctive character-led and musical brand anchors across digital touchpoints.',
      ],
      after: [
        'Generated 682.9K total views and 648K verified reach across Instagram and Facebook.',
        'Brought products to life with 3D mascots: Missi, Lehsuni Tadka, and Digestive Ajwaini Jeera.',
        'Delivered 2.4K interactions, 516 new Instagram follows, and 139.3K Facebook views.',
      ],
    },
    gallery: [
      {
        src: 'images/case_study/ai_video/hero_banner.png',
        title: 'Giving Product & USPs a Gen Z Beat Hero Creative',
        caption: 'Bonn Lehsuni Tadka Bread & smartphone interface with audio waveform.',
        colSpan: 12,
      },
      {
        src: 'images/case_study/ai_video/strategy_mascots.png',
        title: '3D Character Mascots & Visual Direction',
        caption: 'Character-led storytelling featuring Missi, Lehsuni Tadka, and Digestive Ajwaini Jeera bread mascots.',
        colSpan: 12,
      },
      {
        src: 'images/case_study/ai_video/challenge_music_player.png',
        title: 'Jingle-Led Audio & Waveform Interface',
        caption: 'Catchy musical narrative designed for high recall among Gen Z consumers.',
        colSpan: 6,
      },
      {
        src: 'images/case_study/ai_video/fb_performance_cards.png',
        title: 'Facebook Video View Delivery Metrics',
        caption: '139.3K views, 123.1K viewers, and 2.8K 15-second completed video views.',
        colSpan: 6,
      },
    ],
    downloads: [
      {
        title: 'Bonn AI Video Campaign Presentation',
        file: 'assets/case_studies/Sociapa_Bonn%20Social%20Media%20Launch.ppsx',
        type: 'ppsx',
        size: '35 MB',
      },
    ],
    serviceLink: '/videos',
    serviceLinkText: 'Explore Video Production & AI Creative Services',
  },
];

// ── DOWNLOAD TRIGGER HELPER ──
function triggerDocDownload(fileUrl, fileName) {
  const link = document.createElement('a');
  link.href = fileUrl;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  if (!fileUrl.endsWith('.pdf')) {
    link.download = fileName;
  }
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// ── LEAD DOWNLOAD MODAL COMPONENT ──
function LeadDownloadModal({ csItem, doc, onClose, onSuccess }) {
  const [formData, setFormData] = useState(() => {
    try {
      const saved = localStorage.getItem('sociapa_case_study_lead') || sessionStorage.getItem('sociapa_case_study_lead');
      if (saved) return JSON.parse(saved);
    } catch (e) { }
    return { name: '', phone: '', email: '', company: '' };
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setError('Please fill in your name, mobile, and email.');
      return;
    }

    const payload = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      address: formData.company.trim() || 'Brand Studio Case Study Lead',
      case_study_title: doc ? doc.title : csItem.title,
      case_study_file: doc ? doc.file : csItem.id,
    };

    try {
      localStorage.setItem('sociapa_case_study_lead', JSON.stringify(payload));
      sessionStorage.setItem('sociapa_case_study_lead', JSON.stringify(payload));
    } catch (err) { }

    try {
      await postApi('/case-studies', payload);
    } catch (err) {
      console.warn('Background lead sync notice:', err);
    }

    onSuccess(doc);
  };

  return (
    <div className="cs-figma-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="cs-figma-modal-card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="cs-figma-modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="cs-figma-modal-header">
          <span className="cs-figma-modal-badge">{csItem.categoryLabel}</span>
          <h3 className="cs-figma-modal-title">Download Case Study</h3>
          <p className="cs-figma-modal-subtitle">
            Please share your details to download <strong>{doc ? doc.title : csItem.title}</strong>.
          </p>
        </div>

        <form className="cs-figma-modal-form" onSubmit={handleSubmit}>
          {error && <div className="cs-figma-modal-error">{error}</div>}

          <div className="cs-figma-form-group">
            <label htmlFor="cs-name">Full Name <span>*</span></label>
            <input
              id="cs-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              autoFocus
            />
          </div>

          <div className="cs-figma-form-group">
            <label htmlFor="cs-phone">Mobile Number <span>*</span></label>
            <input
              id="cs-phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 98765 43210"
              required
            />
          </div>

          <div className="cs-figma-form-group">
            <label htmlFor="cs-email">Work Email <span>*</span></label>
            <input
              id="cs-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. rahul@brand.com"
              required
            />
          </div>

          <button type="submit" className="cs-figma-modal-btn">
            Download Now ✦
          </button>

          <p className="cs-figma-modal-privacy">
            🔒 100% Privacy. Your details are safe with Sociapa.
          </p>
        </form>
      </div>
    </div>
  );
}

// ── MAIN EXPORT COMPONENT ──
export default function CaseStudies() {
  const base = import.meta.env.BASE_URL || '/';
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedDownload, setSelectedDownload] = useState(null);

  // Read ?cat= param if user navigated with category filter
  const searchParams = new URLSearchParams(location.search);
  const catQuery = searchParams.get('cat');
  const [activeCategory, setActiveCategory] = useState(() => {
    if (catQuery && figmaCategories.some((c) => c.id === catQuery)) {
      return catQuery;
    }
    return 'all';
  });

  // Keep activeCategory synced if query param changes
  useEffect(() => {
    if (catQuery && figmaCategories.some((c) => c.id === catQuery)) {
      setActiveCategory(catQuery);
    }
  }, [catQuery]);

  // Match slug to case study id (supports both product-launch and mint-chocon, etc.)
  const activeStudyId = slug ? slugToCaseStudyId[slug] : null;
  const activeDetailItem = allCaseStudiesData.find((cs) => cs.id === activeStudyId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  // TAB CLICK HANDLER: SWITCHES DETAIL VIEW IF ON DETAIL PAGE, FILTERS CARDS IF ON LISTING
  const handlePillClick = (catId) => {
    setActiveCategory(catId);
    if (slug) {
      if (catId === 'all') {
        navigate('/case-studies');
      } else {
        const targetSlug = categoryToSlug[catId] || catId;
        navigate(`/case-studies/${targetSlug}`);
      }
    } else {
      navigate(catId === 'all' ? '/case-studies' : `/case-studies?cat=${catId}`, { replace: true });
    }
  };

  // CARD CLICK HANDLER: OPENS THE FIGMA DETAIL VIEW!
  const handleCardClick = (cs) => {
    const targetSlug = idToSlug[cs.id] || cs.id;
    navigate(`/case-studies/${targetSlug}`);
  };

  // BACK TO CARDS LISTING HANDLER
  const handleBackToList = (catId) => {
    const targetCat = catId || (activeDetailItem ? activeDetailItem.category : 'all');
    if (targetCat && targetCat !== 'all') {
      setActiveCategory(targetCat);
      navigate(`/case-studies?cat=${targetCat}`);
    } else {
      setActiveCategory('all');
      navigate('/case-studies');
    }
  };

  const filteredCaseStudies =
    activeCategory === 'all'
      ? allCaseStudiesData
      : allCaseStudiesData.filter((cs) => cs.category === activeCategory);

  // DOWNLOAD CLICK HANDLER (ONLY TRIGGERED WHEN USER CLICKS DOWNLOAD IN DETAIL VIEW)
  const handleDownloadClick = (csItem, doc) => {
    let saved = null;
    try {
      const raw = localStorage.getItem('sociapa_case_study_lead') || sessionStorage.getItem('sociapa_case_study_lead');
      if (raw) saved = JSON.parse(raw);
    } catch (e) { }

    const fileUrl = `${base}${doc.file}`;
    if (saved && saved.name && (saved.phone || saved.email)) {
      triggerDocDownload(fileUrl, doc.title);
      postApi('/case-studies', {
        name: saved.name,
        phone: saved.phone,
        email: saved.email,
        address: saved.company || 'Direct Download',
        case_study_title: doc.title,
        case_study_file: doc.file,
      }).catch(() => { });
      return;
    }

    setSelectedDownload({ csItem, doc, fileUrl });
  };

  const handleModalSuccess = (doc) => {
    if (selectedDownload) {
      triggerDocDownload(selectedDownload.fileUrl, doc.title);
      setSelectedDownload(null);
    }
  };

  return (
    <div className="case-studies-page-wrapper">
      <Helmet>
        <title>
          {activeDetailItem
            ? `${activeDetailItem.title} | Sociapa Brand Studio Case Studies`
            : 'Case Studies | Sociapa Brand Studio — Proven Marketing & Packaging ROI'}
        </title>
        <meta
          name="description"
          content="Explore how Sociapa Brand Studio transforms brands and delivers results. Real case studies across FMCG, celebrity launches, packaging design, and performance marketing."
        />
        <link
          rel="canonical"
          href={
            activeDetailItem
              ? `https://sociapa.com/case-studies/${idToSlug[activeDetailItem.id] || activeDetailItem.id}`
              : 'https://sociapa.com/case-studies'
          }
        />
      </Helmet>

      {/* ── TOP HERO BANNER (RELEVANT BANNER ACROSS ALL PAGES EXCEPT EXACT FIGMA DESIGNS) ── */}
      {(!activeDetailItem || (activeDetailItem.id !== 'sebum-skincare' && activeDetailItem.id !== 'mint-chocon' && activeDetailItem.id !== 'apis-influencer' && activeDetailItem.id !== 'tupperware-influencer' && activeDetailItem.id !== 'french-essence' && activeDetailItem.id !== 'bikano-performance' && activeDetailItem.id !== 'bonn-ai-video')) && (
        <section className="hero-banner-section">
          <picture>
            <source
              type="image/webp"
              srcSet={
                activeDetailItem && activeDetailItem.category === 'packaging'
                  ? `${base}assets/images/services_banner/packaging_design/packaging.webp`
                  : `${base}assets/images/services_banner/case_studies/case_study.webp`
              }
            />
            <img
              src={
                activeDetailItem && activeDetailItem.category === 'packaging'
                  ? `${base}assets/images/services_banner/packaging_design/packaging.webp`
                  : `${base}assets/images/services_banner/case_studies/case_study.webp`
              }
              alt={
                activeDetailItem
                  ? `${activeDetailItem.brand} Case Study — Sociapa Brand Studio`
                  : "Case Studies — Proven FMCG & Digital Marketing ROI — Sociapa Brand Studio"
              }
              className="hero-banner-img"
              decoding="async"
              width="1920"
              height="700"
              loading="eager"
              fetchpriority="high"
            />
          </picture>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════════════
          VIEW 1: FULL FIGMA DETAIL VIEW (SHOWN ONLY WHEN USER CLICKS A CARD)
          ══════════════════════════════════════════════════════════════ */}
      {activeDetailItem ? (
        <div className={`cs-detail-view-container animate-fade-in${(activeDetailItem.id === 'sebum-skincare' || activeDetailItem.id === 'mint-chocon' || activeDetailItem.id === 'apis-influencer' || activeDetailItem.id === 'tupperware-influencer' || activeDetailItem.id === 'french-essence' || activeDetailItem.id === 'bikano-performance' || activeDetailItem.id === 'bonn-ai-video') ? ' mint-chocon-mode' : ''}`}>
          {/* Top Bar with Back Button (Excluded on exact Figma layouts with built-in navigation) */}
          {(activeDetailItem.id !== 'sebum-skincare' && activeDetailItem.id !== 'mint-chocon' && activeDetailItem.id !== 'apis-influencer' && activeDetailItem.id !== 'tupperware-influencer' && activeDetailItem.id !== 'french-essence' && activeDetailItem.id !== 'bikano-performance' && activeDetailItem.id !== 'bonn-ai-video') && (
            <div className="cs-detail-top-nav">
              <button
                type="button"
                className="cs-back-btn"
                onClick={() => handleBackToList(activeDetailItem.category)}
              >
                ← Back to All Case Studies
              </button>
              <div className="cs-detail-breadcrumb">
                <Link to="/case-studies" className="cs-bc-link">Case Studies</Link> / <strong style={{ color: '#D20C0C' }}>{activeDetailItem.brand}</strong>
              </div>
            </div>
          )}

          {/* FIGMA DETAIL VIEW / CUSTOM FIGMA CASE STUDY */}
          {activeDetailItem.id === 'sebum-skincare' ? (
            <SebumPackagingFigmaDetail
              csItem={activeDetailItem}
              onDownloadClick={handleDownloadClick}
            />
          ) : activeDetailItem.id === 'mint-chocon' ? (
            <MintChoconFigmaDetail
              csItem={activeDetailItem}
              onDownloadClick={handleDownloadClick}
            />
          ) : activeDetailItem.id === 'apis-influencer' ? (
            <ApisInfluencerFigmaDetail
              csItem={activeDetailItem}
              onDownloadClick={handleDownloadClick}
            />
          ) : activeDetailItem.id === 'tupperware-influencer' ? (
            <TupperwareFigmaDetail
              csItem={activeDetailItem}
              onDownloadClick={handleDownloadClick}
            />
          ) : activeDetailItem.id === 'french-essence' ? (
            <FrenchEssenceDigitalFigmaDetail
              csItem={activeDetailItem}
              onDownloadClick={handleDownloadClick}
            />
          ) : activeDetailItem.id === 'bikano-performance' ? (
            <BikanoPerformanceFigmaDetail
              csItem={activeDetailItem}
              onDownloadClick={handleDownloadClick}
            />
          ) : activeDetailItem.id === 'bonn-ai-video' ? (
            <BonnAiVideoFigmaDetail
              csItem={activeDetailItem}
              onDownloadClick={handleDownloadClick}
            />
          ) : (
            <>
              <article className="cs-figma-card-block detail-mode">
                {activeDetailItem.id === 'mint-chocon' && (
                  <div className="cs-figma-fullwidth-banner-wrap">
                    <img
                      src={`${base}images/case_study/mint_choco_product_launch/mask_group_1.png`}
                      alt="Mint ChocOn — Mint Nahi Hint Hai — National Celebrity Launch Starring Janhvi Kapoor"
                      className="cs-figma-fullwidth-banner-img"
                      width="1200"
                      height="554"
                      fetchpriority="high"
                    />
                  </div>
                )}

                <div
                  className={`cs-figma-card-hero${activeDetailItem.id === 'mint-chocon' ? ' product-launch-mode' : ''}`}
                  style={{
                    backgroundColor: activeDetailItem.id === 'mint-chocon' ? '#FFFFFF' : activeDetailItem.accentColor,
                  }}
                >
                  <div className={activeDetailItem.id === 'mint-chocon' ? 'cs-figma-card-hero-stacked' : 'cs-figma-card-hero-grid'}>
                    {/* Main Content */}
                    <div className="cs-figma-card-hero-content">
                      <div className="cs-figma-card-pill-tag">
                        {activeDetailItem.categoryLabel}
                      </div>

                      {activeDetailItem.id !== 'mint-chocon' && (
                        <div className="cs-figma-card-script-title">
                          {activeDetailItem.headlineScript}
                        </div>
                      )}

                      <h1 className="cs-figma-card-brand-title">
                        {activeDetailItem.brand} — {activeDetailItem.tagline}
                      </h1>

                      <p className="cs-figma-card-overview">
                        {activeDetailItem.id === 'mint-chocon' ? (
                          <>
                            Sociapa conceptualized and orchestrated the multi-phase product launch and 360-degree <a href="/best-digital-marketing-services-india" className="seo-interlink">digital marketing</a> activation for Mahak Group’s Mint ChocOn starring Bollywood star Janhvi Kapoor. From teaser rollouts and couple-focused viral trends to packaging storytelling, the campaign positioned Mint ChocOn as India’s favourite chocolate-filled mint. Through high-impact <a href="/best-packaging-design-agency-india" className="seo-interlink">packaging design</a>, multi-tier <a href="/influencer-marketing-services" className="seo-interlink">influencer marketing</a>, and nationwide distribution, Sociapa delivered massive retail pull-through and sustained consumer brand recall.
                          </>
                        ) : (
                          activeDetailItem.overview
                        )}
                      </p>

                      {/* Stats Grid */}
                      <div className="cs-figma-stats-grid">
                        {activeDetailItem.stats.map((st, i) => (
                          <div key={i} className="cs-figma-stat-item">
                            <span className="cs-figma-stat-num">{st.value}</span>
                            <span className="cs-figma-stat-lbl">{st.label}</span>
                          </div>
                        ))}
                      </div>

                      {/* Downloads & Services Link */}
                      <div className="cs-figma-card-actions">
                        {activeDetailItem.downloads.map((doc, idx) => (
                          <button
                            key={idx}
                            type="button"
                            className="cs-figma-download-btn"
                            onClick={() => handleDownloadClick(activeDetailItem, doc)}
                          >
                            <span>Download {doc.title}</span>
                            <span className="cs-btn-arrow">↓</span>
                          </button>
                        ))}
                        <Link to={activeDetailItem.serviceLink} className="cs-figma-service-link">
                          {activeDetailItem.serviceLinkText} →
                        </Link>
                      </div>
                    </div>

                    {/* Right Visual Frame for non-banner items */}
                    {activeDetailItem.id !== 'mint-chocon' && (
                      <div className="cs-figma-card-hero-media">
                        <div className="cs-figma-media-frame">
                          <img
                            src={`${base}${activeDetailItem.detailHeroImage || activeDetailItem.listingImage}`}
                            alt={activeDetailItem.brand}
                            className="cs-figma-hero-img"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Before vs After Impact Box */}
                {activeDetailItem.beforeAfter && (
                  <div className="cs-detail-before-after">
                    <h2 className="visually-hidden">Campaign Impact &amp; Results</h2>
                    <div className="cs2-ba-col before">
                      <h3 className="cs2-ba-heading"><span className="cs2-ba-icon">✖</span> Before Sociapa</h3>
                      <ul>
                        {activeDetailItem.beforeAfter.before.map((point, bIdx) => (
                          <li key={bIdx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="cs2-ba-col after">
                      <h3 className="cs2-ba-heading"><span className="cs2-ba-icon check">✔</span> After Sociapa Results</h3>
                      <ul>
                        {activeDetailItem.beforeAfter.after.map((point, aIdx) => (
                          <li key={aIdx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Figma Production & Visual System Gallery */}
                <div className="cs-figma-gallery-section">
                  <div className="cs-figma-gallery-header">
                    <h2 className="cs-figma-gallery-heading">
                      Visual Systems &amp; Production Assets — {activeDetailItem.brand}
                    </h2>
                    <span className="cs-figma-gallery-client">
                      Client: <strong>{activeDetailItem.clientCompany}</strong>
                    </span>
                  </div>

                  <div className="cs-figma-gallery-grid">
                    {activeDetailItem.gallery.map((item, gIdx) => (
                      <figure key={gIdx} className={`cs-figma-gallery-item col-${item.colSpan}`}>
                        <div className="cs-figma-img-wrapper">
                          <img
                            src={`${base}${item.src}`}
                            alt={item.title}
                            className="cs-figma-gallery-img"
                            loading="lazy"
                          />
                        </div>
                        <figcaption className="cs-figma-gallery-caption">
                          <strong className="cs-figma-img-title">{item.title}</strong>
                          <span className="cs-figma-img-sub">{item.caption}</span>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </article>

              {/* Bottom Back Button */}
              <div style={{ textAlign: 'center', margin: '40px 0' }}>
                <button
                  type="button"
                  className="cs-figma-download-btn"
                  onClick={() => handleBackToList(activeDetailItem.category)}
                >
                  ← Back to All Case Studies Grid
                </button>
              </div>
            </>
          )}
        </div>
      ) : (
        /* ══════════════════════════════════════════════════════════════
           VIEW 2: STARTING LISTING VIEW (MATCHING USER SCREENSHOT EXACTLY)
           ══════════════════════════════════════════════════════════════ */
        <>
          <h1 className="visually-hidden" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
            Proven FMCG &amp; Digital Marketing Case Studies — Sociapa Brand Studio
          </h1>

          {/* Filter Pills Bar (Matching Screenshot - Clicking filters the cards!) */}
          <section className="cs2-filter-section">
            <div className="cs2-filter-inner">
              <div className="cs-figma-pills-row">
                {figmaCategories.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      className={`cs-figma-pill${isActive ? ' active' : ''}`}
                      onClick={() => handlePillClick(cat.id)}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Case Studies Grid (Cards matching screenshot) */}
          <section className="cs2-grid-section" id="case-studies-cards-grid">
            <div className="cs2-grid-container">
              {filteredCaseStudies.map((cs) => (
                <article
                  key={cs.id}
                  className="cs2-card"
                  onClick={() => handleCardClick(cs)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Image Block */}
                  <div className="cs2-card-img-wrap" style={{ backgroundColor: cs.cardBg || '#FFFFFF' }}>
                    <img
                      src={`${base}${cs.listingImage}`}
                      alt={cs.title}
                      className="cs2-card-img"
                      loading="lazy"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="cs2-card-body">
                    <div className="cs2-card-meta">
                      <span className="cs2-card-tag">{cs.categoryLabel}</span>
                    </div>
                    <h2 className="cs2-card-title">
                      {cs.title}
                    </h2>
                    <p className="cs2-card-tagline">{cs.tagline}</p>
                  </div>

                  {/* Card Bottom: Open Figma Details */}
                  <button
                    type="button"
                    className="cs2-expand-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(cs);
                    }}
                  >
                    <span className="cs2-expand-label">Details &amp; Results</span>
                    <span className="cs2-expand-icon">→</span>
                  </button>
                </article>
              ))}
            </div>
          </section>

          {/* ── 3. BOTTOM CTA & INTERLINKING BAR (LISTING ONLY) ── */}
          <section className="cs-figma-interlink-section">
            <div className="cs-figma-container">
              <div className="cs-figma-interlink-card">
                <h2 className="cs-figma-interlink-title">Ready to Write Your Success Story?</h2>
                <p className="cs-figma-interlink-desc">
                  Whether you need strategic <a href="/best-packaging-design-agency-india" className="seo-interlink">packaging design</a>, high-octane <a href="/influencer-marketing-services" className="seo-interlink">influencer marketing</a>, end-to-end <a href="/best-digital-marketing-services-india" className="seo-interlink">digital marketing</a>, or <a href="/pay-per-click-ppc-services-india" className="seo-interlink">performance marketing</a> — Sociapa Brand Studio delivers from strategy to shelf.
                </p>
                <div className="cs-figma-interlink-btns">
                  <Link to="/contact-us" className="cs-figma-btn-primary">
                    Start Your Project ✦
                  </Link>
                  <Link to="/our-services" className="cs-figma-btn-secondary">
                    Explore All Services
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── 4. LEAD DOWNLOAD MODAL (ONLY OPENS WHEN USER CLICKS DOWNLOAD BUTTON) ── */}
      {selectedDownload && (
        <LeadDownloadModal
          csItem={selectedDownload.csItem}
          doc={selectedDownload.doc}
          onClose={() => setSelectedDownload(null)}
          onSuccess={handleModalSuccess}
        />
      )}
    </div>
  );
}
