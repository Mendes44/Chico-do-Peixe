import type { Metadata } from 'next';
import Imagem from 'next/image';
import Link from 'next/link';
import { ArrowUpRight as SetaExterna } from 'lucide-react';
import { createPageMetadata } from '@/lib/seo';
export const metadata: Metadata = createPageMetadata({
  title: 'Nossa história',
  description:
    'Da origem da marca em 1994, no bairro Concórdia, aos bons encontros em Santa Inês: conheça a história do Chico do Peixe.',
  path: '/sobre',
  image: '/images/atualizadas/mesa-de-sabores.webp',
});
export default function NossaHistoria() {
  return (
    <main>
      <header className="limite titulo-pagina">
        <p className="sobretitulo">O tempero da nossa história</p>
        <h1>
          Uma história de sabor que continua <em>ao redor de cada mesa.</em>
        </h1>
        <p>
          Conheça a trajetória da marca que nasceu em Belo Horizonte e segue
          reunindo pessoas ao redor de boa comida.
        </p>
      </header>
      <section className="limite narrativa">
        <Imagem
          src="/images/atualizadas/mesa-de-sabores.webp"
          alt="Buffet e ambiente atual do Chico do Peixe Santa Inês"
          width={960}
          height={1280}
          sizes="(min-width: 900px) 45vw, 90vw"
        />
        <div>
          <h2>
            Do pequeno balcão
            <br />
            <em>a tantos bons encontros.</em>
          </h2>
          <p>
            A história da marca começou em 1994, no bairro Concórdia. José
            Francisco, o Chico, servia tira-gostos e passou a preparar peixes
            com seu próprio tempero. O sabor conquistou companhia e a casa
            cresceu.
          </p>
          <p>
            Em Santa Inês, o convite continua à mesa: comer bem, reunir quem
            você gosta e se sentir à vontade. Hoje, o buffet no almoço, os
            petiscos, a música e a nova adega trazem novos motivos para estar
            junto.
          </p>
          <div className="acoes-pagina">
            <Link className="botao botao-verde" href="/galeria">
              Conheça o Chico de perto{' '}
              <SetaExterna size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
