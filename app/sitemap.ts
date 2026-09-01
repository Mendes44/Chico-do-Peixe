import type { MetadataRoute } from 'next';
/* Novas páginas devem ser acrescentadas nesta lista para indexação. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.chicodopeixe.com.br/santaines';
  return [
    '',
    '/cardapio',
    '/sobre',
    '/atracoes',
    '/galeria',
    '/contato',
    '/privacidade',
  ].map((path, index) => ({
    url: `${base}${path || '/'}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? 'weekly' : 'monthly',
    priority: index === 0 ? 1 : 0.7,
  }));
}
