import type { Metadata } from 'next';
import { site } from '@/content/site';
import { capaCompartilhamento, enderecoPublico } from '@/lib/compartilhamento';

/* Gera metadados consistentes e canônicos específicos para cada rota. */
export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonical = `${enderecoPublico}${path === '/' ? '' : path}`;

  return {
    title: { absolute: `${title} | ${site.name}` },
    description,
    alternates: { canonical },
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      siteName: site.name,
      url: canonical,
      title: `${title} | ${site.name}`,
      description,
      images: [capaCompartilhamento],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${site.name}`,
      description,
      images: [capaCompartilhamento.url],
    },
  };
}
