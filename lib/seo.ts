import type { Metadata } from 'next';
import { site } from '@/content/site';

/* Gera metadados consistentes e canônicos específicos para cada rota. */
export function createPageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image: string;
}): Metadata {
  const canonical = `${site.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      siteName: site.name,
      url: canonical,
      title: `${title} | ${site.name}`,
      description,
      images: [{ url: image, alt: `${title} — ${site.name}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${site.name}`,
      description,
      images: [image],
    },
  };
}
