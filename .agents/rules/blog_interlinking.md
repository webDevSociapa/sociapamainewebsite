# Blog Interlinking Guidelines for Sociapa

Whenever a new blog is added or an existing blog is updated in this project:

## 1. Mandatory Service Interlinking Rule
Always perform contextual internal linking (SEO interlinking) targeting Sociapa's core services. Any occurrence of relevant industry keywords must be wrapped in standard crawlable anchor tags with the `seo-interlink` class:
```html
<a href="/target-service-slug" class="seo-interlink">relevant keyword/phrase</a>
```
Aim for **3 to 5 contextual internal links** per blog post, ensuring anchor texts read naturally within the article flow.

## 2. Core Service URL & Anchor Keyword Mapping

| Core Service | Target URL | Keywords / Anchor Text to Interlink |
| :--- | :--- | :--- |
| **SEO & AEO / GEO** | `/seo-aeo-geo` | SEO, search engine optimization, local SEO, AEO, generative engine optimization, search ranking |
| **Digital Marketing** | `/best-digital-marketing-services-india` | digital marketing, performance marketing, marketing agency, online marketing strategies |
| **Web Development** | `/best-web-development-agency-india` | web development, website design, D2C website, ecommerce store, web architecture |
| **Social Media Marketing** | `/best-social-media-marketing-agency-india` | social media marketing, SMM, Meta ads, Instagram marketing, Facebook advertising |
| **PPC & Performance Ads** | `/pay-per-click-ppc-services-india` | PPC, pay-per-click, Google Ads, paid advertising, paid search, ad campaign |
| **Brand Strategy** | `/brand-strategy` | brand strategy, brand positioning, brand story, marketing roadmap |
| **Brand Identity Design** | `/brand-identity-design` | brand identity, logo design, visual identity, brand guidelines |
| **Packaging Design** | `/best-packaging-design-agency-india` | packaging design, label design, product packaging |
| **Influencer Marketing** | `/influencer-marketing-services` | influencer marketing, creator campaigns, influencer collaboration, influencer network |
| **PR & Media Relations** | `/best-pr-agency-india` | public relations, PR agency, corporate PR, ORM, online reputation management |
| **Video Production** | `/videos` | video production, video advertising, commercial shoot, video marketing |
| **Content Designing** | `/content-designing` | content marketing, content strategy, copy & creative design |
| **Unboxing Experience** | `/product-unboxing-experience` | unboxing experience, experiential marketing |
| **Brand Consultation** | `/consultation-idea` | brand consultation, discovery session |
| **Contact / Consultation** | `/contact-us` | contact us, connect with our experts, get a quote |
| **Marketing Calendar** | `/2026` | marketing calendar, brand calendar |

## 3. Structural Blog Page Requirements
- **Breadcrumbs:** Include `Home (/)` > `Blog (/blog)` > `[Blog Title]` at the top of the article.
- **Bottom CTA:** Ensure a conversion CTA linking to `/contact-us` is present at the end of the post.
- **Valid Slugs:** Blog links should map cleanly without trailing `.php` extensions.
