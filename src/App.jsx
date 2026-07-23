import { Routes, Route } from 'react-router-dom'
import React, { Suspense, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import Home from './pages/Home'

// Lazy loaded routes
const ContactUs = React.lazy(() => import('./pages/ContactUs'))
const CompanyProfile = React.lazy(() => import('./pages/CompanyProfile'))

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
const Calendar2026 = React.lazy(() => import('./pages/Calendar2026'))
const AdExperience = React.lazy(() => import('./pages/AdExperience'))

// New service pages
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
const WebDevelopment = React.lazy(() => import('./pages/WebDevelopment'));
const DynamicRouteHandler = React.lazy(() => import('./components/DynamicRouteHandler'));

function useScrollAnimate() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
      }),
      { threshold: 0.12 }
    )
    
    // Observe initially present elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))

    // Observe lazy-loaded elements as they enter the DOM
    const mutationObserver = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === 1) { 
            if (node.classList.contains('animate-on-scroll')) observer.observe(node);
            node.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
          }
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    }
  }, [])
}

function App() {
  useScrollAnimate();

  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact-us" element={<ContactUs />} />
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
            <Route path="/2026" element={<Calendar2026 />} />
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
            <Route path="/seo-aeo-geo" element={<SeoAeoGeo />} />
            <Route path="/best-social-media-marketing-agency-india" element={<SocialMediaMarketing />} />
            <Route path="/videos" element={<VideoProduction />} />
            <Route path="/best-web-development-agency-india" element={<WebDevelopment />} />
            
            {/* SEO City Pages & Root Level Blogs */}
            <Route path="/:slug" element={<DynamicRouteHandler />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}

export default App
