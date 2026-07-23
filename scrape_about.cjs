const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');

https.get('https://www.sociapa.com/about', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const $ = cheerio.load(data);
    const content = [];
    
    // Find images
    $('img').each((i, el) => {
      const src = $(el).attr('src');
      if (src && !src.includes('logo') && !src.includes('menu')) {
        content.push({ type: 'image', src });
      }
    });

    // Find headings
    $('h1, h2, h3, h4, h5, h6').each((i, el) => {
      content.push({ type: el.tagName, text: $(el).text().trim() });
    });

    // Find paragraphs
    $('p').each((i, el) => {
      const text = $(el).text().trim();
      if (text.length > 20) {
        content.push({ type: 'p', text });
      }
    });

    fs.writeFileSync('C:/Users/Admin/.gemini/antigravity-ide/brain/40818f72-f2a4-4ffd-a710-ce02796a404a/scratch/about_content.json', JSON.stringify(content, null, 2));
    console.log('About content saved');
  });
});
