import type { MetadataRoute } from 'next';
import { enderecoPublico } from '@/lib/compartilhamento';
/* Libera o conteúdo público e aponta para o sitemap. */
export default function regrasDeIndexacao(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/api/'] },
    sitemap: `${enderecoPublico}/sitemap.xml`,
    host: enderecoPublico,
  };
}
