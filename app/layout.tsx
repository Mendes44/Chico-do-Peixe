import type { Metadata } from 'next';
import { DM_Sans, Fraunces } from 'next/font/google';
import { CookieBanner } from '@/components/cookie-banner';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import './globals.css';

/* Fontes são otimizadas pelo framework e não dependem de HTTP inseguro no cliente. */
const sans = DM_Sans({ variable: '--font-sans', subsets: ['latin'] });
const display = Fraunces({ variable: '--font-display', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.chicodopeixe.com.br'),
  title: { default: 'Chico do Peixe Santa Inês | Bar e Restaurante em BH', template: '%s | Chico do Peixe Santa Inês' },
  description: 'Peixes, porções generosas, cerveja gelada e ambiente para toda a família em Santa Inês, Belo Horizonte.',
  keywords: ['restaurante de peixe em BH', 'Chico do Peixe Santa Inês', 'bar em Santa Inês', 'peixe frito Belo Horizonte'],
  alternates: { canonical: '/santaines/' },
  openGraph: { type: 'website', locale: 'pt_BR', siteName: 'Chico do Peixe Santa Inês', title: 'Chico do Peixe Santa Inês', description: 'O peixe mais saboroso de BH. Venha viver esse momento.', images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Chico do Peixe Santa Inês' }] },
  twitter: { card: 'summary_large_image', title: 'Chico do Peixe Santa Inês', description: 'O peixe mais saboroso de BH.', images: ['/og.png'] },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${sans.variable} ${display.variable}`}>
        <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
        <Header /><div id="conteudo">{children}</div><Footer /><CookieBanner />
      </body>
    </html>
  );
}
