import type { MetadataRoute } from 'next';
/* Libera o conteúdo público e aponta para o sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/api/'] },
    sitemap: 'https://www.chicodopeixe.com.br/sitemap.xml',
    host: 'https://www.chicodopeixe.com.br',
  };
}
