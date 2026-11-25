# Workspace Rules & Instructions for Sociapa

## Blog Creation & Updating Rule (CRITICAL)
Whenever a new blog is added or an existing blog is edited in this project (`src/data/blogsDetailData.json`, `src/data/blogsData.js`, or `src/pages/BlogDetail.jsx`):
1. **Mandatory Interlinking to Services:** You **MUST** automatically detect words/phrases related to Sociapa's services and interlink them using `<a href="/target-service" class="seo-interlink">anchor text</a>`.
2. **Standard Keyword to Service Mapping:**
   - **SEO / Search Engine Optimization / AEO / GEO** ➔ `/seo-aeo-geo`
   - **Digital Marketing / Performance Marketing** ➔ `/best-digital-marketing-services-india`
   - **Web Development / Website Design / E-commerce / D2C** ➔ `/best-web-development-agency-india`
   - **Social Media Marketing / SMM / Meta Ads / Instagram Ads** ➔ `/best-social-media-marketing-agency-india`
   - **PPC / Google Ads / Performance Ads** ➔ `/pay-per-click-ppc-services-india`
   - **Brand Strategy / Brand Positioning** ➔ `/brand-strategy`
   - **Brand Identity / Logo Design** ➔ `/brand-identity-design`
   - **Packaging Design** ➔ `/best-packaging-design-agency-india`
   - **Influencer Marketing / Creators** ➔ `/influencer-marketing-services`
   - **Video Production / Video Marketing** ➔ `/videos`
   - **Public Relations / ORM / Reputation Management** ➔ `/best-pr-agency-india`
   - **Content Designing / Content Strategy** ➔ `/content-designing`
   - **Product Unboxing / Experiential Marketing** ➔ `/product-unboxing-experience`
   - **Contact / Consultation / Talk to Experts** ➔ `/contact-us`
3. **Link Density:** Ensure 3–5 high-relevance contextual links per blog post, plus breadcrumbs and bottom CTA to `/contact-us`.

See detailed rule reference in [blog_interlinking.md](file:///.agents/rules/blog_interlinking.md).

## Page Heading Structure Rule (CRITICAL for SEO & Accessibility)
Whenever ANY new page is created or an existing page is edited in this project:
1. **1st Heading MUST be `<h1>`:** The first heading element rendered on the page must always be an `<h1>` tag.
2. **Clear Theme Description:** The `<h1>` must describe the page's core theme, primary offering, and targeted focus keyword clearly and concisely.
3. **Single `<h1>` Constraint:** Exactly ONE `<h1>` per page. Do not render multiple `<h1>` tags.
4. **Strict Hierarchy:** Follow the logical flow `<h1>` ➔ `<h2>` ➔ `<h3>` ➔ `<h4>`. Never render an `<h2>` or `<h3>` before the main `<h1>`.

See detailed rule reference in [heading_structure.md](file:///.agents/rules/heading_structure.md).

