const https = require('https');
https.get('https://www.sociapa.com/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const navMatch = data.match(/<nav[\s\S]*?<\/nav>/i);
    if(navMatch) {
      const links = navMatch[0].match(/<a[^>]+href=[\'\"]([^\'\"]+)[\'\"][^>]*>([\s\S]*?)<\/a>/gi);
      if(links) {
        links.forEach(l => {
          const text = l.replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
          const hrefMatch = l.match(/href=[\'\"]([^\'\"]+)[\'\"]/i);
          const href = hrefMatch ? hrefMatch[1] : '';
          console.log(text + ' -> ' + href);
        });
      }
    } else {
      console.log('No nav found');
    }
  });
}).on('error', (e) => {
  console.error(e);
});
