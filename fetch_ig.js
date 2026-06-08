import https from 'https';

const opts = {
  hostname: 'www.instagram.com',
  path: '/kero_bikee/',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language': 'pt-BR,pt;q=0.9',
  }
};

https.get(opts, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    // busca URLs de imagens CDN do Instagram
    const re = /https:\/\/[a-z0-9]+\.cdninstagram\.com\/[^\s"'\\>]+\.(jpg|webp)/g;
    const matches = data.match(re) || [];
    const unique = [...new Set(matches)];
    console.log('=== TOTAL URLs encontradas:', unique.length, '===');
    unique.slice(0, 30).forEach((u, i) => console.log(i + 1, u));
    
    // também salva em arquivo
    import('fs').then(fs => {
      fs.writeFileSync('ig_images.txt', unique.join('\n'));
      console.log('\nSalvo em ig_images.txt');
    });
  });
}).on('error', (e) => console.error('Erro:', e.message));
