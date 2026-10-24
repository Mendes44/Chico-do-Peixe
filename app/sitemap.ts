import type { MetadataRoute } from 'next';
import { enderecoPublico } from '@/lib/compartilhamento';
/* Novas páginas devem ser acrescentadas nesta lista para indexação. */
export default function mapaDoSite(): MetadataRoute.Sitemap {
  const base = enderecoPublico;
  return [
    '',
    '/cardapio',
    '/sobre',
    '/atracoes',
    '/galeria',
    '/contato',
    '/reservas',
    '/privacidade',
  ].map((path, index) => ({
    url: `${base}${path}`,
    lastModified: new Date('2026-10-23T03:00:00Z'),
    changeFrequency: index === 0 ? 'weekly' : 'monthly',
    priority: index === 0 ? 1 : 0.7,
  }));
}
