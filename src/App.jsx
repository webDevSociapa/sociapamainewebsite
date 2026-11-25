import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom'
import React, { Suspense, useEffect } from 'react'
import Navbar from './components/Navbar'
import AnalyticsTracker from './components/AnalyticsTracker'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import './components/TopProgressBar.css'

const Footer = React.lazy(() => import('./components/Footer'))
const FloatingButtons = React.lazy(() => import('./components/FloatingButtons'))
const CookieConsent = React.lazy(() => import('./components/CookieConsent'))

// Lazy loaded routes (preserves clean CSS scoping per page)
const ContactUs = React.lazy(() => import('./pages/ContactUs'))
const CompanyProfile = React.lazy(() => import('./pages/CompanyProfile'))
const CalendarViewer = React.lazy(() => import('./pages/CalendarViewer'))

// Legal Pages
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'))
const TermsCondition = React.lazy(() => import('./pages/TermsCondition'))
const Sitemap = React.lazy(() => import('./pages/Sitemap'))

const AboutUs = React.lazy(() => import('./pages/AboutUs'))
const Services = React.lazy(() => import('./pages/Services'))
const Influencer = React.lazy(() => import('./pages/Influencer'))
const Blog = React.lazy(() => import('./pages/Blog'))
const BlogDetail = React.lazy(() => import('./pages/BlogDetail'))
const Career = React.lazy(() => import('./pages/Career'))
const Awards = React.lazy(() => import('./pages/Awards'))
const PressRelease = React.lazy(() => import('./pages/PressRelease'))
const Audit = React.lazy(() => import('./pages/Audit'))
const Stories = React.lazy(() => import('./pages/Stories'))
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'))
const Calendar2026 = React.lazy(() => import('./pages/Calendar2026'))
const AdExperience = React.lazy(() => import('./pages/AdExperience'))

// Service pages
const AggregatorPlatform = React.lazy(() => import('./pages/AggregatorPlatform'))
const BrandIdentityDesign = React.lazy(() => import('./pages/BrandIdentityDesign'))
const BrandStrategy = React.lazy(() => import('./pages/BrandStrategy'))
const ConsultationIdea = React.lazy(() => import('./pages/ConsultationIdea'))
const ContentDevelopment = React.lazy(() => import('./pages/ContentDevelopment'))
const CreativeDesigning = React.lazy(() => import('./pages/CreativeDesigning'))
const DigitalMarketing = React.lazy(() => import('./pages/DigitalMarketing'))
const EmailMarketing = React.lazy(() => import('./pages/EmailMarketing'))
const GoToMarket = React.lazy(() => import('./pages/GoToMarket'))
const InfluencerMarketing = React.lazy(() => import('./pages/InfluencerMarketing'))
const PackagingDesign = React.lazy(() => import('./pages/PackagingDesign'))
const Photography = React.lazy(() => import('./pages/Photography'))
const ProductUnboxing = React.lazy(() => import('./pages/ProductUnboxing'))
const PublicRelation = React.lazy(() => import('./pages/PublicRelation'))
const RegistrationServices = React.lazy(() => import('./pages/RegistrationServices'))
const SeoAeoGeo = React.lazy(() => import('./pages/SeoAeoGeo'))
const SocialMediaMarketing = React.lazy(() => import('./pages/SocialMediaMarketing'))
const VideoProduction = React.lazy(() => import('./pages/VideoProduction'))
const WebDevelopment = React.lazy(() => import('./pages/WebDevelopment'))
const Geofencing = React.lazy(() => import('./pages/Geofencing'))
const Polygon = React.lazy(() => import('./pages/Polygon'))
const InfluencerNeed = React.lazy(() => import('./pages/InfluencerNeed'))
const AppDevelopment = React.lazy(() => import('./pages/AppDevelopment'))
const AdminGateway = React.lazy(() => import('./pages/AdminGateway'))
const CityServicePage = React.lazy(() => import('./pages/CityServicePage'))
const DynamicRouteHandler = React.lazy(() => import('./components/DynamicRouteHandler'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

// Route preloader map to eliminate chunk loading delay
const routeLoaders = {
  '/about': () => import('./pages/AboutUs'),
  '/our-services': () => import('./pages/Services'),
  '/contact-us': () => import('./pages/ContactUs'),
  '/contact': () => import('./pages/ContactUs'),
  '/influencers-marketplace': () => import('./pages/Influencer'),
  '/blog': () => import('./pages/Blog'),
  '/career': () => import('./pages/Career'),
  '/best-creative-and-digital-agency-award': () => import('./pages/Awards'),
  '/sociapas-press-release': () => import('./pages/PressRelease'),
  '/free-website-audit': () => import('./pages/Audit'),
  '/stories': () => import('./pages/Stories'),
  '/case-studies': () => import('./pages/CaseStudies'),
  '/2026': () => import('./pages/Calendar2026'),
  '/pay-per-click-ppc-services-india': () => import('./pages/AdExperience'),
  '/aggregator-platform-service': () => import('./pages/AggregatorPlatform'),
  '/brand-identity-design': () => import('./pages/BrandIdentityDesign'),
  '/brand-strategy': () => import('./pages/BrandStrategy'),
  '/consultation-idea': () => import('./pages/ConsultationIdea'),
  '/content-designing': () => import('./pages/ContentDevelopment'),
  '/creative-designing': () => import('./pages/CreativeDesigning'),
  '/best-digital-marketing-services-india': () => import('./pages/DigitalMarketing'),
  '/email-marketing-services': () => import('./pages/EmailMarketing'),
  '/go-to-market': () => import('./pages/GoToMarket'),
  '/influencer-marketing-services': () => import('./pages/InfluencerMarketing'),
  '/best-packaging-design-agency-india': () => import('./pages/PackagingDesign'),
  '/best-photography-services': () => import('./pages/Photography'),
  '/product-unboxing-experience': () => import('./pages/ProductUnboxing'),
  '/best-pr-agency-india': () => import('./pages/PublicRelation'),
  '/gst-company-registration-services': () => import('./pages/RegistrationServices'),
  '/registration-services': () => import('./pages/RegistrationServices'),
  '/seo-aeo-geo': () => import('./pages/SeoAeoGeo'),
  '/best-seo-agency-india': () => import('./pages/SeoAeoGeo'),
  '/best-social-media-marketing-agency-india': () => import('./pages/SocialMediaMarketing'),
  '/videos': () => import('./pages/VideoProduction'),
  '/best-web-development-agency-india': () => import('./pages/WebDevelopment'),
  '/geofencing': () => import('./pages/Geofencing'),
  '/polygon': () => import('./pages/Polygon'),
  '/influencer-need': () => import('./pages/InfluencerNeed'),
  '/services-app-development': () => import('./pages/AppDevelopment'),
  '/privacy-policy': () => import('./pages/PrivacyPolicy'),
  '/terms-condition': () => import('./pages/TermsCondition'),
  '/sitemap': () => import('./pages/Sitemap'),
  '/sociapa-profile': () => import('./pages/CompanyProfile'),
  '/calendar-2026': () => import('./pages/CalendarViewer'),
  '/admin': () => import('./pages/AdminGateway'),
}

const bannerPreloadMap = {
  '/about': 'assets/images/services_banner/about/about.webp',
  '/our-services': 'images/banners/services/end_to_end_digital.webp',
  '/influencers-marketplace': 'assets/images/services_banner/influencers/influncer.webp',
  '/blog': 'assets/images/services_banner/blog/blog.webp',
  '/career': 'assets/images/services_banner/career/career.webp',
  '/best-creative-and-digital-agency-award': 'images/banners/award/award.webp',
  '/sociapas-press-release': 'images/banners/press/press_release_banner.webp',
  '/free-website-audit': 'assets/images/services_banner/audit/audit.webp',
  '/stories': 'images/banners/stories/stories.webp',
  '/case-studies': 'assets/images/services_banner/case_studies/case_study.webp',
  '/contact-us': 'assets/images/services_banner/contact/contact.webp',
  '/contact': 'assets/images/services_banner/contact/contact.webp',
  '/consultation-idea': 'images/brand-consultation-service-banner.webp',
  '/brand-identity-design': 'assets/images/services_banner/brand_identity_design/brand_identityban.webp',
  '/brand-strategy': 'assets/images/services_banner/brand_strategy/brand_start.webp',
  '/content-designing': 'assets/images/services_banner/content_designing/content_designing.webp',
  '/creative-designing': 'assets/images/services_banner/creative_designing/creative_designing1.webp',
  '/best-digital-marketing-services-india': 'assets/images/services_banner/digital_market/digital.webp',
  '/email-marketing-services': 'assets/images/services_banner/email_market/email_marketing.webp',
  '/go-to-market': 'assets/images/services_banner/go_to_market/go_to_market.webp',
  '/influencer-marketing-services': 'assets/images/services_banner/influencers/influncer.webp',
  '/best-packaging-design-agency-india': 'assets/images/services_banner/packaging_design/packaging.webp',
  '/best-photography-services': 'images/photography-service-banner.webp',
  '/product-unboxing-experience': 'assets/images/services_banner/unboxing_experience/unboxing1.webp',
  '/best-pr-agency-india': 'images/pr-service-banner.webp',
  '/gst-company-registration-services': 'images/registration-service-banner.webp',
  '/registration-services': 'images/registration-service-banner.webp',
  '/seo-aeo-geo': 'assets/images/services_banner/seo_aeo/rank_banner.webp',
  '/best-seo-agency-india': 'assets/images/services_banner/seo_aeo/rank_banner.webp',
  '/best-social-media-marketing-agency-india': 'images/smm-service-banner.webp',
  '/videos': 'assets/images/services_banner/video_photography/video.webp',
  '/best-web-development-agency-india': 'assets/images/services_banner/web_development/web_dev.webp',
  '/geofencing': 'images/ad-experience-service-banner.webp',
  '/polygon': 'images/ad-experience-service-banner.webp',
  '/influencer-need': 'images/influencer-service-banner.webp',
  '/services-app-development': 'assets/images/services_banner/web_development/web_dev.webp',
};

const prefetchedPaths = new Set();
const prefetchedImages = new Set();

function prefetchRoute(href) {
  if (!href) return;
  try {
    const clean = href.replace(/^\/sociapareact/, '').split('?')[0].split('#')[0];
    if (clean) {
      if (routeLoaders[clean] && !prefetchedPaths.has(clean)) {
        prefetchedPaths.add(clean);
        routeLoaders[clean]();
      }
      if (bannerPreloadMap[clean] && !prefetchedImages.has(clean)) {
        prefetchedImages.add(clean);
        const img = new Image();
        const base = import.meta.env.BASE_URL || '/';
        img.src = `${base}${bannerPreloadMap[clean]}`;
      }
    }
  } catch (e) {}
}

function useRoutePrefetch() {
  useEffect(() => {
    // Instant prefetch when user interacts with any link (hover, touch, keyboard focus)
    const onInteraction = (e) => {
      const anchor = e.target.closest('a');
      if (anchor) {
        const href = anchor.getAttribute('href');
        prefetchRoute(href);
      }
    };

    document.addEventListener('mouseover', onInteraction, { passive: true });
    document.addEventListener('touchstart', onInteraction, { passive: true });
    document.addEventListener('focusin', onInteraction, { passive: true });

    return () => {
      document.removeEventListener('mouseover', onInteraction);
      document.removeEventListener('touchstart', onInteraction);
      document.removeEventListener('focusin', onInteraction);
    };
  }, []);
}

function useScrollAnimate() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.animate-on-scroll').forEach(el => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.05, rootMargin: '0px 0px 80px 0px' }
    );

    const observeAll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll:not(.visible)');
      elements.forEach(el => observer.observe(el));
    };

    observeAll();
    const t1 = setTimeout(observeAll, 80);
    const t2 = setTimeout(observeAll, 250);
    const t3 = setTimeout(observeAll, 600);
    const t4 = setTimeout(observeAll, 1200);
    const t5 = setTimeout(() => {
      document.querySelectorAll('.animate-on-scroll:not(.visible)').forEach(el => el.classList.add('visible'));
    }, 1500);

    const mutObserver = new MutationObserver(() => {
      observeAll();
    });
    mutObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      observer.disconnect();
      mutObserver.disconnect();
    };
  }, [location.pathname]);
}

function useInternalLinkInterceptor() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleGlobalClick = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Do not intercept if user holds modifier key (cmd/ctrl for new tab)
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      // Do not intercept external links, mailto, tel, downloads, or explicit targets
      if (
        anchor.target === '_blank' ||
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('#') ||
        href.endsWith('.pdf')
      ) {
        return;
      }

      // Check if it's an internal route
      if (href.startsWith('/') || href.startsWith('./') || !href.includes('://')) {
        e.preventDefault();
        let cleanRoute = href.replace(/^\/sociapareact/, '') || '/';
        if (!cleanRoute.startsWith('/')) cleanRoute = '/' + cleanRoute;
        navigate(cleanRoute);
        window.scrollTo(0, 0);
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, [navigate]);
}

function App() {
  useScrollAnimate();
  useRoutePrefetch();
  useInternalLinkInterceptor();
  const location = useLocation();
  const isProfilePage = location.pathname.includes('sociapa-profile') || location.pathname.includes('calendar-2026');

  return (
    <>
      <ScrollToTop />
      <AnalyticsTracker />
      {!isProfilePage && <Navbar />}
      <main style={{ minHeight: '80vh', position: 'relative' }}>
        <Suspense
          fallback={
            <div className="page-route-loader">
              <div className="top-progress-bar" />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/contact" element={<Navigate to="/contact-us" replace />} />
            <Route path="/sociapa-profile" element={<CompanyProfile />} />
            
            {/* Legal Routes */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-condition" element={<TermsCondition />} />
            <Route path="/sitemap" element={<Sitemap />} />
            
            <Route path="/about" element={<AboutUs />} />
            <Route path="/our-services" element={<Services />} />
            <Route path="/influencers-marketplace" element={<Influencer />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/career" element={<Career />} />
            <Route path="/best-creative-and-digital-agency-award" element={<Awards />} />
            <Route path="/sociapas-press-release" element={<PressRelease />} />
            <Route path="/free-website-audit" element={<Audit />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:slug" element={<CaseStudies />} />
            <Route path="/case-study" element={<Navigate to="/case-studies" replace />} />
            <Route path="/case_studies" element={<Navigate to="/case-studies" replace />} />
            <Route path="/case-studio" element={<Navigate to="/case-studies" replace />} />
            <Route path="/2026" element={<Calendar2026 />} />
            <Route path="/calendar-2026" element={<CalendarViewer />} />
            <Route path="/pay-per-click-ppc-services-india" element={<AdExperience />} />
            
            {/* New Service Routes */}
            <Route path="/aggregator-platform-service" element={<AggregatorPlatform />} />
            <Route path="/brand-identity-design" element={<BrandIdentityDesign />} />
            <Route path="/brand-strategy" element={<BrandStrategy />} />
            <Route path="/consultation-idea" element={<ConsultationIdea />} />
            <Route path="/content-designing" element={<ContentDevelopment />} />
            <Route path="/creative-designing" element={<CreativeDesigning />} />
            <Route path="/best-digital-marketing-services-india" element={<DigitalMarketing />} />
            <Route path="/email-marketing-services" element={<EmailMarketing />} />
            <Route path="/go-to-market" element={<GoToMarket />} />
            <Route path="/influencer-marketing-services" element={<InfluencerMarketing />} />
            <Route path="/best-packaging-design-agency-india" element={<PackagingDesign />} />
            <Route path="/best-photography-services" element={<Photography />} />
            <Route path="/product-unboxing-experience" element={<ProductUnboxing />} />
            <Route path="/best-pr-agency-india" element={<PublicRelation />} />
            <Route path="/gst-company-registration-services" element={<RegistrationServices />} />
            <Route path="/registration-services" element={<RegistrationServices />} />
            <Route path="/seo-aeo-geo" element={<SeoAeoGeo />} />
            <Route path="/best-seo-agency-india" element={<SeoAeoGeo />} />
            <Route path="/best-social-media-marketing-agency-india" element={<SocialMediaMarketing />} />
            <Route path="/videos" element={<VideoProduction />} />
            <Route path="/best-web-development-agency-india" element={<WebDevelopment />} />
            <Route path="/geofencing" element={<Geofencing />} />
            <Route path="/polygon" element={<Polygon />} />
            <Route path="/influencer-need" element={<InfluencerNeed />} />
            <Route path="/services-app-development" element={<AppDevelopment />} />
            <Route path="/admin" element={<AdminGateway />} />
            <Route path="/admin/*" element={<AdminGateway />} />
            
            {/* Legacy 301 Redirects from Old PHP site */}
            <Route path="/digital-marketing" element={<Navigate to="/best-digital-marketing-services-india" replace />} />
            <Route path="/social-media-marketing-services" element={<Navigate to="/best-social-media-marketing-agency-india" replace />} />
            <Route path="/services-web-development" element={<Navigate to="/best-web-development-agency-india" replace />} />
            <Route path="/packaging" element={<Navigate to="/best-packaging-design-agency-india" replace />} />
            <Route path="/how-packaging-can-influence" element={<Navigate to="/best-packaging-design-agency-india" replace />} />
            <Route path="/photography" element={<Navigate to="/best-photography-services" replace />} />
            <Route path="/press-release" element={<Navigate to="/sociapas-press-release" replace />} />
            <Route path="/pr" element={<Navigate to="/best-pr-agency-india" replace />} />
            <Route path="/services" element={<Navigate to="/our-services" replace />} />
            <Route path="/portfolio" element={<Navigate to="/sociapa-profile" replace />} />
            <Route path="/profile/Company-Profile.pdf" element={<Navigate to="/sociapa-profile" replace />} />
            <Route path="/profile/company-profile.pdf" element={<Navigate to="/sociapa-profile" replace />} />
            <Route path="/Company-Profile.pdf" element={<Navigate to="/sociapa-profile" replace />} />
            <Route path="/company-profile.pdf" element={<Navigate to="/sociapa-profile" replace />} />
            <Route path="/company-profile" element={<Navigate to="/sociapa-profile" replace />} />
            <Route path="/profile/company-profile" element={<Navigate to="/sociapa-profile" replace />} />
            <Route path="/pdf/Company-Profile.pdf" element={<Navigate to="/sociapa-profile" replace />} />
            <Route path="/pdf/company-profile.pdf" element={<Navigate to="/sociapa-profile" replace />} />
            <Route path="/audit" element={<Navigate to="/free-website-audit" replace />} />
            <Route path="/influencers" element={<Navigate to="/influencer-marketing-services" replace />} />
            <Route path="/influencer-marketing" element={<Navigate to="/influencer-marketing-services" replace />} />
            <Route path="/creator-vs-influencer" element={<Navigate to="/influencer-marketing-services" replace />} />
            <Route path="/pay-per-click-advertising" element={<Navigate to="/pay-per-click-ppc-services-india" replace />} />
            <Route path="/email-marketing" element={<Navigate to="/email-marketing-services" replace />} />
            <Route path="/ad-experiences" element={<Navigate to="/pay-per-click-ppc-services-india" replace />} />
            
            {/* City Service Pages — MUST remain above /:slug catch-all */}
            <Route path="/:serviceSlug/:citySlug" element={<CityServicePage />} />

            {/* SEO City Pages & Root Level Blogs */}
            <Route path="/:slug" element={<DynamicRouteHandler />} />

            {/* 404 Catch-All Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      {!isProfilePage && (
        <Suspense fallback={null}>
          <Footer />
          <FloatingButtons />
          <CookieConsent />
        </Suspense>
      )}
    </>
  )
}

export default App
