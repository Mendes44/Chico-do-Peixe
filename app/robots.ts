import type { MetadataRoute } from 'next';
/* Libera o conteúdo público e aponta para o sitemap. */
export default function regrasDeIndexacao(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/santaines/api/'] },
    sitemap: 'https://www.chicodopeixe.com.br/santaines/sitemap.xml',
    host: 'https://www.chicodopeixe.com.br',
  };
}
