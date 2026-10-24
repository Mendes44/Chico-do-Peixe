import { site } from '@/content/site';

// A prévia deve buscar a imagem no domínio publicado, inclusive durante o uso da Vercel.
const dominioVercel =
  process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
export const enderecoPublico = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ||
    (dominioVercel ? `https://${dominioVercel}` : site.url),
).origin;

export const capaCompartilhamento = {
  url: `${enderecoPublico}/capa-chico-santa-ines-v2.jpg`,
  width: 1200,
  height: 630,
  type: 'image/jpeg',
  alt: 'Chico do Peixe Santa Inês — O sabor de estar junto começa no Chico.',
};
