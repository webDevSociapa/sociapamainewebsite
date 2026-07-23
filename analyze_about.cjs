const fs = require('fs');
const cheerio = require('cheerio');
const $ = cheerio.load(fs.readFileSync('about_html.html'));

let struct = [];
$('section, .row, .col, h1, h2, h3, h4, h5, h6, img').each((i, el) => {
  if (el.tagName === 'img') {
    const src = $(el).attr('src');
    if (src && !src.includes('logo') && !src.includes('svg')) {
      struct.push('img: ' + src);
    }
  } else if (el.tagName.startsWith('h')) {
    struct.push(el.tagName + ': ' + $(el).text().trim().substring(0, 30));
  } else {
    struct.push(el.tagName + '.' + $(el).attr('class'));
  }
});

console.log(struct.join('\n').substring(0, 3000));
