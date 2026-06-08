// Cole este script no Console do DevTools (F12) na aba do Instagram @kero_bikee
// Ele extrai todas as URLs das imagens dos posts visíveis no grid

(function() {
  const imgs = document.querySelectorAll('article img, main img, ._aagt img, ._aabd img');
  const urls = [];
  imgs.forEach(img => {
    const src = img.src || img.currentSrc;
    if (src && src.includes('cdninstagram') && !src.includes('s100x100') && !src.includes('s150x150')) {
      urls.push(src);
    }
  });
  const unique = [...new Set(urls)];
  console.log('=== Imagens encontradas:', unique.length, '===');
  unique.forEach((u, i) => console.log(i+1, u));
  
  // Copia para clipboard automaticamente
  const text = unique.join('\n');
  navigator.clipboard.writeText(text).then(() => {
    console.log('\n✅ URLs copiadas para o clipboard! Cole no chat.');
  }).catch(() => {
    console.log('\n⚠️ Não foi possível copiar automaticamente. Copie manualmente acima.');
  });
  
  return unique;
})();
