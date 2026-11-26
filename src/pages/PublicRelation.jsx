import React, { useState, useEffect } from 'react';
import OtherServicesSlider from '../components/OtherServicesSlider';
import ServiceOurWorkSection from '../components/ServiceOurWorkSection';
import ServiceBehindWorkSection from '../components/ServiceBehindWorkSection';
import ServiceCaseStudiesSlider from '../components/ServiceCaseStudiesSlider';
import { serviceClientSectionsData } from '../data/serviceClientSectionsData';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './PublicRelation.css';

function IconBrandAudit() {
  return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 6L10 11.5V22.5C10 32.5 16 39.5 24 42C32 39.5 38 32.5 38 22.5V11.5L24 6Z" fill="none" stroke="#D20C0C" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="23" cy="22" r="7" stroke="#D20C0C" strokeWidth="2.5" fill="#FFFFFF" />
      <line x1="28" y1="27" x2="34" y2="33" stroke="#D20C0C" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="19" y1="22" x2="27" y2="22" stroke="#D20C0C" strokeWidth="2" strokeLinecap="round" />
      <line x1="23" y1="18" x2="23" y2="26" stroke="#D20C0C" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconStoryMining() {
  return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="8" width="28" height="32" rx="4" fill="none" stroke="#D20C0C" strokeWidth="2.5" />
      <rect x="15" y="14" width="12" height="4" rx="1" fill="#D20C0C" />
      <line x1="15" y1="23" x2="33" y2="23" stroke="#D20C0C" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="15" y1="29" x2="30" y2="29" stroke="#D20C0C" strokeWidth="2.2" strokeLinecap="round" strokeOpacity="0.8" />
      <line x1="15" y1="34" x2="24" y2="34" stroke="#D20C0C" strokeWidth="2.2" strokeLinecap="round" strokeOpacity="0.6" />
      <path d="M34 6L36 12L42 14L36 16L34 22L32 16L26 14L32 12L34 6Z" fill="#D20C0C" />
    </svg>
  );
}

function IconMediaMapping() {
  return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="6.5" fill="#FFFFFF" stroke="#D20C0C" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="2.8" fill="#D20C0C" />
      <circle cx="10" cy="13" r="4.5" fill="#FFFFFF" stroke="#D20C0C" strokeWidth="2.2" />
      <circle cx="38" cy="13" r="4.5" fill="#FFFFFF" stroke="#D20C0C" strokeWidth="2.2" />
      <circle cx="10" cy="35" r="4.5" fill="#FFFFFF" stroke="#D20C0C" strokeWidth="2.2" />
      <circle cx="38" cy="35" r="4.5" fill="#FFFFFF" stroke="#D20C0C" strokeWidth="2.2" />
      <line x1="14" y1="16" x2="19.5" y2="20.5" stroke="#D20C0C" strokeWidth="2" strokeDasharray="3 2" />
      <line x1="34" y1="16" x2="28.5" y2="20.5" stroke="#D20C0C" strokeWidth="2" strokeDasharray="3 2" />
      <line x1="14" y1="32" x2="19.5" y2="27.5" stroke="#D20C0C" strokeWidth="2" strokeDasharray="3 2" />
      <line x1="34" y1="32" x2="28.5" y2="27.5" stroke="#D20C0C" strokeWidth="2" strokeDasharray="3 2" />
    </svg>
  );
}

function IconOutreachPitching() {
  return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 14L41 8L28 40L21 28L7 14Z" fill="none" stroke="#D20C0C" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M41 8L21 28" stroke="#D20C0C" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M10 33C13 36 17 36 20 33" stroke="#D20C0C" strokeWidth="2.2" strokeLinecap="round" strokeOpacity="0.7" />
      <path d="M6 39C11 42 18 42 22 39" stroke="#D20C0C" strokeWidth="2.2" strokeLinecap="round" strokeOpacity="0.4" />
    </svg>
  );
}

function IconCoverageSecured() {
  return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="7" y="11" width="34" height="26" rx="4" fill="none" stroke="#D20C0C" strokeWidth="2.5" />
      <line x1="13" y1="18" x2="24" y2="18" stroke="#D20C0C" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="13" y1="24" x2="22" y2="24" stroke="#D20C0C" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.8" />
      <line x1="13" y1="29" x2="28" y2="29" stroke="#D20C0C" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
      <circle cx="33" cy="20" r="7" fill="#D20C0C" stroke="#FFFFFF" strokeWidth="2" />
      <path d="M30.5 20l1.8 1.8 3.5-3.5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconAmplification() {
  return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 19V29H15L26 37V11L15 19H9Z" fill="none" stroke="#D20C0C" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M31 17C33.5 19.5 35 22.2 35 24C35 25.8 33.5 28.5 31 31" stroke="#D20C0C" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M36 12C40 16 42 20.2 42 24C42 27.8 40 32 36 36" stroke="#D20C0C" strokeWidth="2.4" strokeLinecap="round" strokeOpacity="0.7" />
      <path d="M15 29V34C15 35.5 16.5 37 18 37H19.5" stroke="#D20C0C" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

// ── Crisp High-Definition PR Service Icons ──
function IconMediaRelations() {
  return (
    <svg width="46" height="46" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="6" width="12" height="22" rx="6" fill="#FFF0F2" stroke="#D20C0C" strokeWidth="2.5" />
      <line x1="24" y1="12" x2="24" y2="20" stroke="#D20C0C" strokeWidth="2" strokeLinecap="round" />
      <line x1="21" y1="16" x2="27" y2="16" stroke="#D20C0C" strokeWidth="2" strokeLinecap="round" />
      <path d="M11 19C11 26.18 16.82 32 24 32C31.18 32 37 26.18 37 19" stroke="#1A0508" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 32V41" stroke="#1A0508" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="16" y1="41" x2="32" y2="41" stroke="#1A0508" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M6 15C4 18 4 23 6 26" stroke="#D20C0C" strokeWidth="2.2" strokeLinecap="round" opacity="0.6" />
      <path d="M42 15C44 18 44 23 42 26" stroke="#D20C0C" strokeWidth="2.2" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

function IconPressReleases() {
  return (
    <svg width="46" height="46" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="7" width="26" height="34" rx="3" fill="#FFF0F2" stroke="#D20C0C" strokeWidth="2.5" />
      <rect x="13" y="13" width="16" height="4" rx="1.5" fill="#D20C0C" />
      <line x1="13" y1="22" x2="28" y2="22" stroke="#1A0508" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="13" y1="27" x2="26" y2="27" stroke="#1A0508" strokeWidth="2.2" strokeLinecap="round" opacity="0.7" />
      <line x1="13" y1="32" x2="22" y2="32" stroke="#1A0508" strokeWidth="2.2" strokeLinecap="round" opacity="0.5" />
      <circle cx="34" cy="33" r="8" fill="#D20C0C" stroke="#FFFFFF" strokeWidth="2" />
      <path d="M31.5 33.5L33.5 35.5L37 31" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M34 10L40 16" stroke="#D20C0C" strokeWidth="2.2" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

function IconThoughtLeadership() {
  return (
    <svg width="46" height="46" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="16" r="7" fill="#FFF0F2" stroke="#D20C0C" strokeWidth="2.5" />
      <path d="M10 40C10 32.27 16.27 26 24 26C31.73 26 38 32.27 38 40" stroke="#1A0508" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="16" r="3" fill="#D20C0C" />
      <path d="M24 5V2M15 8L13 5M33 8L35 5" stroke="#D20C0C" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M37 21L43 19M40 27L44 29" stroke="#D20C0C" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

function IconAwardsRecognition() {
  return (
    <svg width="46" height="46" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 9H33V21C33 25.97 28.97 30 24 30C19.03 30 15 25.97 15 21V9Z" fill="#FFF0F2" stroke="#D20C0C" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M15 13H9C7.9 13 7 13.9 7 15V17C7 20.31 9.69 23 13 23H15" stroke="#1A0508" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M33 13H39C40.1 13 41 13.9 41 15V17C41 20.31 38.31 23 35 23H33" stroke="#1A0508" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M24 30V36M17 40H31" stroke="#1A0508" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 14L25.3 17.5L29 18L26.5 20.5L27 24L24 22.3L21 24L21.5 20.5L19 18L22.7 17.5L24 14Z" fill="#D20C0C" />
    </svg>
  );
}

function IconCrisisCommunications() {
  return (
    <svg width="46" height="46" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 5L8 11V21C8 31.5 15 39.5 24 43C33 39.5 40 31.5 40 21V11L24 5Z" fill="#FFF0F2" stroke="#D20C0C" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M24 15V26" stroke="#D20C0C" strokeWidth="3" strokeLinecap="round" />
      <circle cx="24" cy="32" r="2" fill="#D20C0C" />
      <path d="M15 18L13 16M33 18L35 16" stroke="#1A0508" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

function IconDigitalSeoPr() {
  return (
    <svg width="46" height="46" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="19" cy="19" r="13" fill="#FFF0F2" stroke="#D20C0C" strokeWidth="2.5" />
      <ellipse cx="19" cy="19" rx="6" ry="13" stroke="#1A0508" strokeWidth="1.8" opacity="0.5" />
      <line x1="6" y1="19" x2="32" y2="19" stroke="#1A0508" strokeWidth="1.8" opacity="0.5" />
      <circle cx="34" cy="33" r="8" fill="#FFFFFF" stroke="#D20C0C" strokeWidth="2.5" />
      <line x1="39.5" y1="38.5" x2="44" y2="43" stroke="#D20C0C" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M30 33H38M34 29V37" stroke="#D20C0C" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// ── Crisp High-Definition Media Outlets Icons ──
function MediaEconomicTimes() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="56" height="56" rx="12" fill="#D20C0C" />
      <text x="28" y="16" fill="#FFFFFF" fontSize="6.5" fontWeight="700" fontFamily="serif" textAnchor="middle" letterSpacing="0.5">THE ECONOMIC TIMES</text>
      <text x="28" y="42" fill="#FFFFFF" fontSize="24" fontWeight="900" fontFamily="serif" textAnchor="middle">ET</text>
    </svg>
  );
}

function MediaHindustanTimes() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="56" height="56" rx="12" fill="#00A0DC" />
      <circle cx="28" cy="20" r="10" fill="#FFFFFF" />
      <path d="M28 12L30 18L36 20L30 22L28 28L26 22L20 20L26 18L28 12Z" fill="#00A0DC" />
      <text x="28" y="44" fill="#FFFFFF" fontSize="11" fontWeight="800" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">HT</text>
    </svg>
  );
}

function MediaBusinessStandard() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="56" height="56" rx="12" fill="#7A0019" />
      <rect x="7" y="7" width="42" height="42" rx="8" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.3" />
      <text x="28" y="36" fill="#FFFFFF" fontSize="20" fontWeight="900" fontFamily="serif" textAnchor="middle" letterSpacing="1">BS</text>
      <text x="28" y="46" fill="#FFFFFF" fontSize="5" fontWeight="600" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.5">BUSINESS STANDARD</text>
    </svg>
  );
}

function MediaNDTV() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="56" height="56" rx="12" fill="#1A1A1A" />
      <rect x="5" y="14" width="46" height="28" rx="6" fill="#E51937" />
      <text x="28" y="34" fill="#FFFFFF" fontSize="13" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1.2">NDTV</text>
    </svg>
  );
}

function MediaZeeBusiness() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="56" height="56" rx="12" fill="#0C2040" />
      <circle cx="28" cy="22" r="12" fill="#F59E0B" />
      <text x="28" y="28" fill="#0C2040" fontSize="15" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">Z</text>
      <text x="28" y="45" fill="#FFFFFF" fontSize="6.5" fontWeight="800" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.8">ZEE BIZ</text>
    </svg>
  );
}

function MediaYourStory() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="56" height="56" rx="12" fill="#ED1C24" />
      <text x="28" y="33" fill="#FFFFFF" fontSize="19" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">YS</text>
      <text x="28" y="45" fill="#FFFFFF" fontSize="5.5" fontWeight="700" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.8">YOURSTORY</text>
    </svg>
  );
}

// ── Crisp High-Definition Why Sociapa PR Icons ──
function IconStoryLed() {
  return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 12C8 10.34 9.34 9 11 9H21C22.66 9 24 10.34 24 12V39C24 37.34 22.66 36 21 36H11C9.34 36 8 37.34 8 39V12Z" fill="#FFF0F2" stroke="#D20C0C" strokeWidth="2.5" />
      <path d="M40 12C40 10.34 38.66 9 37 9H27C25.34 9 24 10.34 24 12V39C24 37.34 25.34 36 27 36H37C38.66 36 40 37.34 40 39V12Z" fill="#FFF0F2" stroke="#D20C0C" strokeWidth="2.5" />
      <line x1="12" y1="16" x2="20" y2="16" stroke="#D20C0C" strokeWidth="2" strokeLinecap="round" />
      <line x1="12" y1="22" x2="20" y2="22" stroke="#D20C0C" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <line x1="12" y1="28" x2="18" y2="28" stroke="#D20C0C" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <path d="M35 15L39 19L30 28L26 29L27 25L35 15Z" fill="#D20C0C" />
    </svg>
  );
}

function IconCrisisReadiness() {
  return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="18" fill="#FFF0F2" stroke="#D20C0C" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="12" stroke="#1A0508" strokeWidth="1.8" strokeDasharray="3 2" />
      <polyline points="24,16 24,24 29,27" stroke="#D20C0C" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 2V6M24 42V46M2 24H6M42 24H46" stroke="#D20C0C" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function IconMeasurablePr() {
  return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="8" width="36" height="32" rx="4" fill="#FFF0F2" stroke="#D20C0C" strokeWidth="2.5" />
      <line x1="13" y1="32" x2="13" y2="26" stroke="#1A0508" strokeWidth="3" strokeLinecap="round" />
      <line x1="20" y1="32" x2="20" y2="21" stroke="#1A0508" strokeWidth="3" strokeLinecap="round" />
      <line x1="27" y1="32" x2="27" y2="16" stroke="#D20C0C" strokeWidth="3" strokeLinecap="round" />
      <path d="M12 24L19 19L26 15L34 10" stroke="#D20C0C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="30,10 34,10 34,14" stroke="#D20C0C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconDigitalTraditional() {
  return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="10" width="22" height="28" rx="2" fill="#FFF0F2" stroke="#1A0508" strokeWidth="2.2" />
      <line x1="10" y1="16" x2="22" y2="16" stroke="#1A0508" strokeWidth="2" strokeLinecap="round" />
      <line x1="10" y1="21" x2="20" y2="21" stroke="#1A0508" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <rect x="22" y="14" width="20" height="28" rx="4" fill="#FFFFFF" stroke="#D20C0C" strokeWidth="2.5" />
      <circle cx="32" cy="37" r="1.5" fill="#D20C0C" />
      <line x1="29" y1="18" x2="35" y2="18" stroke="#D20C0C" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconIntegratedComms() {
  return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="7" fill="#D20C0C" stroke="#FFFFFF" strokeWidth="2" />
      <circle cx="10" cy="14" r="5" fill="#FFF0F2" stroke="#1A0508" strokeWidth="2" />
      <circle cx="38" cy="14" r="5" fill="#FFF0F2" stroke="#1A0508" strokeWidth="2" />
      <circle cx="10" cy="34" r="5" fill="#FFF0F2" stroke="#1A0508" strokeWidth="2" />
      <circle cx="38" cy="34" r="5" fill="#FFF0F2" stroke="#1A0508" strokeWidth="2" />
      <line x1="14" y1="16.5" x2="19.5" y2="20.5" stroke="#D20C0C" strokeWidth="2" />
      <line x1="34" y1="16.5" x2="28.5" y2="20.5" stroke="#D20C0C" strokeWidth="2" />
      <line x1="14" y1="31.5" x2="19.5" y2="27.5" stroke="#D20C0C" strokeWidth="2" />
      <line x1="34" y1="31.5" x2="28.5" y2="27.5" stroke="#D20C0C" strokeWidth="2" />
    </svg>
  );
}

const faqsData = [
  {
    "q": "1. How is PR different from advertising?",
    "a": "<p>Advertising involves paying for visibility, while PR focuses on earning media coverage, building credibility, and creating positive public perception through trusted third-party platforms.</p>"
  },
  {
    "q": "2. Why is PR important for businesses?",
    "a": "<p>PR helps businesses increase brand awareness, strengthen credibility, improve visibility, and build trust among customers, stakeholders, and the media.</p>"
  },
  {
    "q": "3. Which businesses can benefit from PR services?",
    "a": "<p>PR is valuable for startups, SMEs, corporations, e-commerce brands, technology companies, healthcare organizations, educational institutions, and personal brands.</p>"
  },
  {
    "q": "4. What is digital PR?",
    "a": "<p>Digital PR focuses on increasing online visibility through authoritative media coverage, backlinks, digital publications, <a href='/influencer-marketing-services' class='seo-interlink'>influencer collaborations</a>, and strategic content promotion.</p>"
  },
  {
    "q": "5. Can PR improve search engine rankings?",
    "a": "<p>Yes. Quality editorial backlinks, brand mentions, and high-tier publications directly strengthen <a href='/seo-aeo-geo' class='seo-interlink'>SEO authority</a> and increase organic search rankings.</p>"
  },
  {
    "q": "6. How do you secure media coverage for brands?",
    "a": "<p>We build direct relationships with journalists, editors, and tier-1 publications, coordinating interview opportunities and targeted <a href='/sociapas-press-release' class='seo-interlink'>press release distributions</a>.</p>"
  },
  {
    "q": "7. Can PR help with product launches?",
    "a": "<p>Absolutely. PR campaigns generate media buzz and investor interest before and during <a href='/go-to-market' class='seo-interlink'>product launches</a>, amplifying brand presence from day one.</p>"
  },
  {
    "q": "8. What role does content play in PR?",
    "a": "<p>Content helps communicate your expertise, share valuable insights, and position your brand as a trusted voice within your industry.</p>"
  },
  {
    "q": "9. Can PR improve customer perception?",
    "a": "<p>Yes. Consistent communication, positive media coverage, and audience engagement help strengthen public perception and build long-term brand reputation.</p>"
  },
  {
    "q": "10. How do you measure the success of a PR campaign?",
    "a": "<p>We track media coverage, brand mentions, website traffic, backlinks, audience engagement, share of voice, and overall brand visibility to evaluate the effectiveness of every PR campaign.</p>"
  }
];


export default function PublicRelation() {
    const [openFaq, setOpenFaq] = useState(null);
    const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);
    const base = import.meta.env.BASE_URL || '/';
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="public-relation-page">
            
      <Helmet>
        <title>Best PR Company in Noida | Brand Communication Agency in Delhi – Sociapa</title>
        <meta name="description" content="Best PR Agency in Noida & Delhi NCR, India- Sociapa offers comprehensive PR solutions tailored to meet the unique needs of businesses. We develop a ground-breaking strategy for the brand to reach its target consumers and markets." />
        <meta name="keywords" content="Digital Marketing" />
        <link rel="canonical" href="https://sociapa.com/best-pr-agency-india" />
        <meta property="og:title" content="Best PR Company in Noida | Brand Communication Agency in Delhi – Sociapa" />
        <meta property="og:description" content="Best PR Agency in Noida & Delhi NCR, India- Sociapa offers comprehensive PR solutions tailored to meet the unique needs of businesses. We develop a ground-breaking strategy for the brand to reach its target consumers and markets." />
        <meta property="og:url" content="https://sociapa.com/best-pr-agency-india" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="SOCIAPA" />
        <meta property="og:image" content="https://www.sociapa.com/images/services/Public-Relation.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sociapa" />
        <meta name="twitter:title" content="Best PR Agency in India - Sociapa" />
        <meta name="twitter:description" content="Best PR Agency in Noida & Delhi NCR, India- Sociapa offers comprehensive PR solutions tailored to meet the unique needs of businesses. We develop a ground-breaking strategy for the brand to reach its target consumers and markets." />
        <meta name="twitter:image" content="https://www.sociapa.com/images/services/Public-Relation.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqsData.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": (faq.a || '').replace(/<[^>]*>/g, '')
            }
          }))
        })}</script>
        {/* BreadcrumbList Schema - Required by SOCIAPA (1).docx */}
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.sociapa.com/"},{"@type":"ListItem","position":2,"name":"Services","item":"https://www.sociapa.com/our-services"},{"@type":"ListItem","position":3,"name":"Best PR Agency India | Sociapa","item":"https://www.sociapa.com/best-pr-agency-india"}]})}</script>
      </Helmet>

      {/* Hero Banner */}
      <div className="serInsideBnr">
        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
          Best PR Agency in India - Strategic Public Relations &amp; Reputation Management
        </h1>
        <div className="row">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={`${base}images/pr-service-mobile.jpeg`}
            />
            <img
              src={`${base}images/pr-service-banner.webp`}
              alt="Public Relations Agency India - Sociapa"
              className="responsive-img w-100"
            />
          </picture>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="stats-bar">
        <div className="stats-inner">
          <div className="stat-item">
            <div className="stat-num">500+</div>
            <div className="stat-label">Media Placements Secured</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">300+</div>
            <div className="stat-label">Journalist Relationships</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">50+</div>
            <div className="stat-label">Brands Represented</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">8+</div>
            <div className="stat-label">Years Building Brand Authority</div>
          </div>
        </div>
      </div>

      <section className="services-section">
        <div className="section-inner">
          <span className="section-tag">Our Services</span>
          <h2 className="section-title">Comprehensive Public Relations Services</h2>
          <p className="section-sub">Reputation is your most valuable asset. We protect, build, and amplify it through earned media and strategic communications.</p>
          <div className="services-grid">
            <div className="svc-card">
              <div className="svc-icon">
                <IconMediaRelations />
              </div>
              <h3>Media Relations</h3>
              <p>Maximise brand visibility with professionally crafted press releases and strategic media outreach to secure coverage across leading newspapers, business publications, and digital news platforms.</p>
              <div className="service-tags"><span>National Media</span><span>Trade Press</span><span>Digital PR</span><span>Wire Services</span></div>
            </div>
            <div className="svc-card">
              <div className="svc-icon">
                <IconPressReleases />
              </div>
              <h3>Press Releases & Content</h3>
              <p>Build credibility with professionally written press releases, executive bylines, and thought leadership content designed to earn media coverage and strengthen your brand authority.</p>
              <div className="service-tags"><span>Press Releases</span><span>Bylines</span><span>Op-Eds</span><span>Media Kits</span></div>
            </div>
            <div className="svc-card">
              <div className="svc-icon">
                <IconThoughtLeadership />
              </div>
              <h3>Thought Leadership</h3>
              <p>Position your founders and executives as industry leaders through podcasts, speaking engagements, panel discussions, award nominations, and media opportunities that build credibility and brand authority.</p>
              <div className="service-tags"><span>Podcasts</span><span>Panels</span><span>Awards</span><span>Speaking</span></div>
            </div>
            <div className="svc-card">
              <div className="svc-icon">
                <IconAwardsRecognition />
              </div>
              <h3>Awards & Recognition</h3>
              <p>Strengthen your brand credibility with strategic award nominations and end-to-end submission management for national and industry-specific recognitions.</p>
              <div className="service-tags"><span>Award Nominations</span><span>Industry Recognition</span><span>Ranking Entries</span></div>
            </div>
            <div className="svc-card">
              <div className="svc-icon">
                <IconCrisisCommunications />
              </div>
              <h3>Crisis Communications</h3>
              <p>Protect your brand with proactive crisis communication, rapid-response strategies, and reputation management for social media issues and negative press.</p>
              <div className="service-tags"><span>Crisis Response</span><span>Reputation Repair</span><span>Media Training</span></div>
            </div>
            <div className="svc-card">
              <div className="svc-icon">
                <IconDigitalSeoPr />
              </div>
              <h3>Digital PR &amp; SEO PR</h3>
              <p>Boost your brand visibility and SEO performance with data-driven digital PR campaigns. We secure high-authority media coverage and quality backlinks that strengthen your online reputation, improve search rankings, and drive long-term organic growth.</p>
              <div className="service-tags"><span>Link Earning</span><span>Digital Newsrooms</span><span>Brand SERPs</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="tools-section">
        <div className="section-inner">
          <span className="section-tag">Media We Work With</span>
          <h2 className="section-title">Established Relationships Across India's Top Media</h2>
          <p className="section-sub">Our 300+ journalist relationships span national, regional, digital, and trade media- giving your story the widest possible reach.</p>
          <div className="tools-grid">
            <div className="tool-chip">
              <span className="tool-icon">
                <MediaEconomicTimes />
              </span>
              <span>Economic Times</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <MediaHindustanTimes />
              </span>
              <span>Hindustan Times</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <MediaBusinessStandard />
              </span>
              <span>Business Standard</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <MediaNDTV />
              </span>
              <span>NDTV</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <MediaZeeBusiness />
              </span>
              <span>Zee Business</span>
            </div>
            <div className="tool-chip">
              <span className="tool-icon">
                <MediaYourStory />
              </span>
              <span>YourStory</span>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="section-inner">
          <span className="section-tag">Our Process</span>
          <h2 className="section-title">How We Earn Coverage That Counts</h2>
          <p className="section-sub">A proactive, story-led approach to PR- we don't just send press releases, we build narratives journalists want to cover.</p>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-num">
                <IconBrandAudit />
              </div>
              <h4>Brand Audit</h4>
              <p>Review existing coverage, reputation, and messaging opportunities</p>
            </div>
            <div className="process-step">
              <div className="step-num">
                <IconStoryMining />
              </div>
              <h4>Story Mining</h4>
              <p>Identify newsworthy angles, milestones, and thought leadership hooks</p>
            </div>
            <div className="process-step">
              <div className="step-num">
                <IconMediaMapping />
              </div>
              <h4>Media Mapping</h4>
              <p>Target relevant journalists, publications, and media verticals for each story</p>
            </div>
            <div className="process-step">
              <div className="step-num">
                <IconOutreachPitching />
              </div>
              <h4>Outreach &amp; Pitching</h4>
              <p>Tailored journalist pitches and <a href='/sociapas-press-release' class='seo-interlink'>press release distribution</a> with follow-up</p>
            </div>
            <div className="process-step">
              <div className="step-num">
                <IconCoverageSecured />
              </div>
              <h4>Coverage Secured</h4>
              <p>Coordinate interviews, approvals, and quote verification for each placement</p>
            </div>
            <div className="process-step">
              <div className="step-num">
                <IconAmplification />
              </div>
              <h4>Amplification</h4>
              <p>Repurpose coverage across social, email, and website for maximum reach</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="section-inner">
          <span className="section-tag section-tag-white">Why Sociapa PR</span>
          <h2 className="section-title">PR Built on Relationships, Not Spam</h2>
          <p className="section-sub">We earn coverage through genuine journalist relationships and newsworthy stories—not mass press release distribution.</p>
          <div className="why-grid">
            <div className="why-card">
              <div className="w-icon">
                <IconStoryLed />
              </div>
              <h4>Story-Led Approach</h4>
              <p>We find and craft the angle before approaching media—every pitch is built around a genuine story, not a product announcement disguised as news.</p>
            </div>
            <div className="why-card">
              <div className="w-icon">
                <IconCrisisReadiness />
              </div>
              <h4>Crisis Readiness</h4>
              <p>24/7 crisis response capability with a clear escalation protocol—so when reputation threats emerge, you have a team ready to respond immediately.</p>
            </div>
            <div className="why-card">
              <div className="w-icon">
                <IconMeasurablePr />
              </div>
              <h4>Measurable PR</h4>
              <p>We track AVE, reach, sentiment, and brand SERP improvements—demonstrating real PR ROI beyond vanity metrics.</p>
            </div>
            <div className="why-card">
              <div className="w-icon">
                <IconDigitalTraditional />
              </div>
              <h4>Digital + Traditional</h4>
              <p>We operate across both traditional print and broadcast and digital media—ensuring coverage reaches your audience wherever they consume news.</p>
            </div>
            <div className="why-card">
              <div className="w-icon">
                <IconIntegratedComms />
              </div>
              <h4>Integrated Communications</h4>
              <p>PR strategy aligned with your digital marketing, social media, and content—a unified brand narrative across every channel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio / Our Work Section */}
      <ServiceOurWorkSection
        work={serviceClientSectionsData['public-relation']?.work}
      />

      {/* Behind the Work Section */}
      <ServiceBehindWorkSection
        testimonials={serviceClientSectionsData['public-relation']?.testimonials}
      />

      {/* Featured Case Studies Slider */}
      <ServiceCaseStudiesSlider />

<section className="faq-section faq-section-padded" id="faq">
  <div className="section-inner">
    <span className="section-tag">FAQ</span>
    <h2 className="section-title">Public Relations <span className="text-brand-red">Questions Answered</span></h2>
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
    <h2>Ready to Build a Brand the Media Talks About?</h2>
    <p>Get a free PR audit and a media opportunity assessment for your brand—no press release required.</p>
    <Link to="/contact-us" className="btn-primary">Start My PR Strategy</Link>
  </div>
</section>

<section className="creativeSS">
  <div className="container">
    <div className="row">
      <div className="col s3 center"><img src={`${base}images/mediaBrief400.png`} alt="Creatives" className="responsive-img w-100" /></div>
      <div className="col s3 center"><img src={`${base}images/thinCrust400.png`} alt="Creatives" className="responsive-img w-100" /></div>
      <div className="col s3 center"><img src={`${base}images/apisRopes400.png`} alt="Creatives" className="responsive-img w-100" /></div>
      <div className="col s3 center"><img src={`${base}images/apisOnboard400.png`} alt="Creatives" className="responsive-img w-100" /></div>
    </div>
  </div>
</section>


        </div>
    );
}
