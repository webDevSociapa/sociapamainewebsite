const https = require('https');
const cheerio = require('cheerio');

const routes = [
  '/about',
  '/our-services',
  '/influencers-marketplace',
  '/blog',
  '/career',
  '/best-creative-and-digital-agency-award',
  '/sociapas-press-release',
  '/free-website-audit',
  '/stories',
  '/2026'
];

async function fetchMetadata(path) {
  return new Promise((resolve, reject) => {
    https.get(`https://www.sociapa.com${path}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const $ = cheerio.load(data);
          const title = $('title').text().trim();
          const desc = $('meta[name="description"]').attr('content') || '';
          const canonical = $('link[rel="canonical"]').attr('href') || '';
          const ogTitle = $('meta[property="og:title"]').attr('content') || '';
          const ogDesc = $('meta[property="og:description"]').attr('content') || '';
          const ogImage = $('meta[property="og:image"]').attr('content') || '';
          const ogUrl = $('meta[property="og:url"]').attr('content') || '';
          resolve({ path, title, desc, canonical, ogTitle, ogDesc, ogImage, ogUrl });
        } catch (e) {
          resolve({ path, error: e.message });
        }
      });
    }).on('error', (e) => resolve({ path, error: e.message }));
  });
}

async function main() {
  console.log('Fetching SEO metadata for 10 pages...\n');
  const results = [];
  for (const route of routes) {
    const data = await fetchMetadata(route);
    results.push(data);
    console.log(`Route: ${data.path}`);
    console.log(`Title: ${data.title}`);
    console.log(`Description: ${data.desc}`);
    console.log('---');
  }
  const fs = require('fs');
  fs.writeFileSync('C:/Users/Admin/.gemini/antigravity-ide/brain/40818f72-f2a4-4ffd-a710-ce02796a404a/scratch/seo_extracted_pages.json', JSON.stringify(results, null, 2));
  console.log('Saved to seo_extracted_pages.json');
}

main();
