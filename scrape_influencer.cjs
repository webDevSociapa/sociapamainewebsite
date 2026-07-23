const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');

https.get('https://www.sociapa.com/influencers-marketplace', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const $ = cheerio.load(data);
    const content = [];
    
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

    fs.writeFileSync('C:/Users/Admin/.gemini/antigravity-ide/brain/40818f72-f2a4-4ffd-a710-ce02796a404a/scratch/influencer_content.json', JSON.stringify(content, null, 2));
    console.log('Influencer content saved');
  });
});
