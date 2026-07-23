const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');

const pages = [
  { url: 'https://www.sociapa.com/blog', name: 'blog' },
  { url: 'https://www.sociapa.com/career', name: 'career' },
  { url: 'https://www.sociapa.com/best-creative-and-digital-agency-award', name: 'awards' }
];

pages.forEach(p => {
  https.get(p.url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const $ = cheerio.load(data);
      const content = [];
      $('h1, h2, h3, h4, h5, h6').each((i, el) => {
        content.push({ type: el.tagName, text: $(el).text().trim() });
      });
      $('p').each((i, el) => {
        const text = $(el).text().trim();
        if (text.length > 20) content.push({ type: 'p', text });
      });
      $('img').each((i, el) => {
        const src = $(el).attr('src');
        if (src && !src.includes('logo') && !src.includes('menu')) {
          content.push({ type: 'img', src });
        }
      });
      fs.writeFileSync(`C:/Users/Admin/.gemini/antigravity-ide/brain/40818f72-f2a4-4ffd-a710-ce02796a404a/scratch/${p.name}_content.json`, JSON.stringify(content, null, 2));
      console.log(`${p.name} content saved`);
    });
  });
});
