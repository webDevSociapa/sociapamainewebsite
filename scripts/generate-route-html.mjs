/**
 * Post-build prerender script for route-specific SEO metadata.
 * Generates dist/<route>/index.html for all legacy, city, blog, and app routes
 * so crawlers and initial HTTP requests receive exact single meta tags with data-rh="true".
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const baseHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(baseHtmlPath)) {
  throw new Error(`Base dist/index.html not found at ${baseHtmlPath}`);
}

const baseHtml = fs.readFileSync(baseHtmlPath, 'utf8');

function readJson(relPath) {
  const fullPath = path.join(rootDir, relPath);
  // Strip UTF-8 BOM if present
  const raw = fs.readFileSync(fullPath, 'utf8').replace(/^\uFEFF/, '');
  return JSON.parse(raw);
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function cleanCanonical(url, fallbackSlug) {
  const raw = (url || `https://sociapa.com/${fallbackSlug}`).trim();
  return raw.replace('https://www.sociapa.com', 'https://sociapa.com');
}

const legacyMeta = readJson('src/data/legacySeoMeta.json');
const cities = readJson('src/data/citiesData.json');
const blogs = readJson('src/data/blogsDetailData.json');

const routes = new Map();

// 1. Legacy routes (exact parity with sociapaold)
for (const [key, entry] of Object.entries(legacyMeta)) {
  if (key === 'index' || key === '/') continue;
  const slug = key.trim().replace(/^\/+/, '');
  if (!slug) continue;
  const title = (entry.title || '').trim();
  const description = (entry.description || '').trim();
  routes.set(slug, {
    slug,
    title,
    description,
    canonical: cleanCanonical(entry.canonical, slug),
    ogTitle: (entry.ogTitle || title).trim(),
    ogDescription: (entry.ogDescription || description).trim(),
  });
}

// 2. City pages
for (const city of cities) {
  const slug = (city.path || '').trim().replace(/^\/+/, '');
  if (slug && !routes.has(slug)) {
    const title = (city.title || '').trim();
    const description = (city.description || '').trim();
    routes.set(slug, {
      slug,
      title,
      description,
      canonical: `https://sociapa.com/${slug}`,
      ogTitle: title,
      ogDescription: description,
    });
  }
}

// 3. Blog detail pages (both /<slug> and /blog/<slug>)
for (const [key, blog] of Object.entries(blogs)) {
  const slug = key.trim().replace(/^\/+/, '');
  if (!slug) continue;
  const title = (blog.meta_title || blog.seo?.title || blog.title || 'Sociapa Blog Insights').trim();
  const description = (
    blog.meta_description ||
    blog.seo?.metaDescription ||
    blog.description ||
    'Read industry insights and digital marketing strategies from Sociapa experts.'
  ).trim();

  if (!routes.has(slug)) {
    routes.set(slug, {
      slug,
      title,
      description,
      canonical: `https://sociapa.com/${slug}`,
      ogTitle: title,
      ogDescription: description,
    });
  }

  const blogRouteSlug = `blog/${slug}`;
  routes.set(blogRouteSlug, {
    slug: blogRouteSlug,
    title,
    description,
    canonical: `https://sociapa.com/${slug}`,
    ogTitle: title,
    ogDescription: description,
  });
}

// 4. React-only or updated pages (explicitly overrides legacy typos)
const extraPages = {
  'case-studies': {
    title: 'Proven FMCG & Digital Marketing Case Studies — Sociapa',
    description:
      'Explore how Sociapa transforms brands and delivers results. Real case studies across FMCG, celebrity launches, packaging design, and performance marketing.',
    canonical: 'https://sociapa.com/case-studies',
  },
  'calendar-2026': {
    title: 'Sociapa – Social Media & Marketing Calendar 2026 | Digital Marketing Agency India',
    description:
      "Explore Sociapa's complete 2026 Social Media & Marketing Calendar. Month-by-month guide to important dates, festivals, campaigns, and commercial moments for brands in India.",
    canonical: 'https://sociapa.com/calendar-2026',
  },
  'sociapa-profile': {
    title: 'Sociapa – Brand & Creative Portfolio 2026 | Digital Marketing Agency India',
    description:
      'Full-service brand & creative agency – digital marketing, social media, packaging, photography, SEO/AEO/GEO and PR. 100+ brands. 7+ years.',
    canonical: 'https://sociapa.com/sociapa-profile',
  },
  '2026': {
    title: 'Social Media Calendar 2026 | Upcoming Dates & Campaigns | Sociapa',
    description:
      'Stay tuned for the Sociapa 2026 Social Media Calendar – your complete guide to important dates, festivals, events, and campaign opportunities for brands in India.',
    canonical: 'https://sociapa.com/2026',
  },
  admin: {
    title: 'Sociapa Admin Gateway',
    description: 'Sociapa Management Gateway',
    canonical: 'https://sociapa.com/admin',
  },
};

for (const [slug, page] of Object.entries(extraPages)) {
  routes.set(slug, {
    slug,
    title: page.title,
    description: page.description,
    canonical: page.canonical,
    ogTitle: page.title,
    ogDescription: page.description,
  });
}

let generatedCount = 0;

for (const info of routes.values()) {
  // Never overwrite standalone admin/ directory index.php or anything outside route shell
  if (info.slug === 'admin') continue;

  const targetDir = path.join(distDir, info.slug);
  fs.mkdirSync(targetDir, { recursive: true });
  const targetFile = path.join(targetDir, 'index.html');

  const escapedTitle = escapeHtml(info.title);
  const escapedDesc = escapeHtml(info.description);
  const escapedOgTitle = escapeHtml(info.ogTitle || info.title);
  const escapedOgDesc = escapeHtml(info.ogDescription || info.description);
  const canonicalUrl = escapeHtml(info.canonical);

  let html = baseHtml;
  html = html.replace(/<title\b[^>]*>[\s\S]*?<\/title>/i, `<title data-rh="true">${escapedTitle}</title>`);
  html = html.replace(
    /<meta\b[^>]*name=["']description["'][^>]*>/i,
    `<meta data-rh="true" name="description" content="${escapedDesc}" />`
  );
  html = html.replace(
    /<link\b[^>]*rel=["']canonical["'][^>]*>/i,
    `<link data-rh="true" rel="canonical" href="${canonicalUrl}" />`
  );
  html = html.replace(
    /<meta\b[^>]*property=["']og:title["'][^>]*>/i,
    `<meta data-rh="true" property="og:title" content="${escapedOgTitle}" />`
  );
  html = html.replace(
    /<meta\b[^>]*property=["']og:description["'][^>]*>/i,
    `<meta data-rh="true" property="og:description" content="${escapedOgDesc}" />`
  );
  html = html.replace(
    /<meta\b[^>]*property=["']og:url["'][^>]*>/i,
    `<meta data-rh="true" property="og:url" content="${canonicalUrl}" />`
  );
  html = html.replace(
    /<meta\b[^>]*name=["']twitter:title["'][^>]*>/i,
    `<meta data-rh="true" name="twitter:title" content="${escapedOgTitle}" />`
  );
  html = html.replace(
    /<meta\b[^>]*name=["']twitter:description["'][^>]*>/i,
    `<meta data-rh="true" name="twitter:description" content="${escapedOgDesc}" />`
  );

  fs.writeFileSync(targetFile, html, 'utf8');
  generatedCount++;
}

console.log(`[generate-route-html] Generated ${generatedCount} route HTML files in dist/.`);
