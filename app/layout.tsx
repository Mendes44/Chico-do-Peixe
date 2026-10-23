import type { Metadata } from 'next';
import { DM_Sans, Fraunces } from 'next/font/google';
import { PreferenciasCookies } from '@/components/cookie-banner';
import { Rodape } from '@/components/footer';
import { Cabecalho } from '@/components/header';
import { Analytics } from '@/components/analytics';
import { site } from '@/content/site';
import './globals.css';

/* Fontes são otimizadas pelo framework e não dependem de HTTP inseguro no cliente. */
const sans = DM_Sans({ variable: '--font-sans', subsets: ['latin'] });
const display = Fraunces({ variable: '--font-display', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.chicodopeixe.com.br'),
  title: {
    default: 'Chico do Peixe Santa Inês | Bar e Restaurante em BH',
    template: '%s | Chico do Peixe Santa Inês',
  },
  description: site.description,
  keywords: [
    'restaurante de peixe em BH',
    'Chico do Peixe Santa Inês',
    'bar em Santa Inês',
    'peixe frito Belo Horizonte',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Chico do Peixe Santa Inês',
    title: 'Chico do Peixe Santa Inês',
    description: 'O peixe mais saboroso de BH. Venha viver esse momento.',
    images: [
      {
        url: '/santaines/og.webp',
        width: 1200,
        height: 630,
        alt: 'Chico do Peixe Santa Inês',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chico do Peixe Santa Inês',
    description: 'O peixe mais saboroso de BH.',
    images: ['/santaines/og.webp'],
  },
  robots: { index: true, follow: true },
  /* Usa a própria marca na aba do navegador, substituindo o ícone genérico. */
  icons: {
    icon: [
      {
        url: '/santaines/images/atualizadas/marca-instagram.webp',
        type: 'image/webp',
      },
    ],
    apple: '/santaines/images/atualizadas/marca-instagram.webp',
  },
};

/* Dados estruturados ajudam buscadores a entender a unidade e seus serviços. */
const restaurantJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Restaurant', 'LocalBusiness'],
  '@id': `${site.url}/#restaurant`,
  name: site.name,
  url: site.url,
  image: [
    `${site.url}/images/atualizadas/buffet-principal.webp`,
    `${site.url}/images/atualizadas/petiscos-instagram.webp`,
  ],
  logo: `${site.url}/images/atualizadas/marca-instagram.webp`,
  description: site.description,
  telephone: site.phone,
  servesCuisine: ['Brasileira', 'Peixes', 'Frutos do mar'],
  hasMenu: `${site.url}/cardapio`,
  acceptsReservations: true,
  sameAs: [site.instagram, site.ifood, site.maps],
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    addressCountry: 'BR',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '11:00',
      closes: '23:00',
    },
  ],
};

/* Estrutura compartilhada por todas as páginas do site. */
export default function LayoutRaiz({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${sans.variable} ${display.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantJsonLd).replace(/</g, '\\u003c'),
          }}
        />
        {/* Acessibilidade: permite ir direto ao conteúdo usando o teclado. */}
        <a className="pular-conteudo" href="#conteudo">
          Pular para o conteúdo
        </a>
        {/* Início: cabeçalho e conteúdo específico da rota atual. */}
        <Cabecalho />
        <div id="conteudo">{children}</div>
        {/* Início: elementos globais exibidos em todas as páginas. */}
        <Rodape />
        <PreferenciasCookies />
        <Analytics />
      </body>
    </html>
  );
}
