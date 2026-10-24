import type { Metadata } from 'next';
import Imagem from 'next/image';
import { ArrowUpRight as SetaExterna } from 'lucide-react';
import { site } from '@/content/site';
import { agendaAtual } from '@/content/experiencia';
import { createPageMetadata } from '@/lib/seo';
export const metadata: Metadata = createPageMetadata({
  title: 'Agenda, música ao vivo e jogos',
  description:
    'Almoço de segunda a sábado, música ao vivo às terças e quintas e nova adega no Chico do Peixe Santa Inês.',
  path: '/atracoes',
});
export default function AgendaDoChico() {
  return (
    <main>
      <header className="limite titulo-pagina">
        <p className="sobretitulo">Tem Chico na sua semana</p>
        <h1>
          Escolha o seu motivo para <em>reunir a turma no Chico.</em>
        </h1>
        <p>
          Encontre espaço na semana para um almoço, uma apresentação de música
          ao vivo ou a partida do seu time. Acompanhe a programação e combine a
          sua visita.
        </p>
        <div className="acoes-pagina">
          <a
            className="botao botao-verde"
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver a programação no Instagram{' '}
            <SetaExterna size={17} aria-hidden="true" />
          </a>
        </div>
      </header>
      <section
        className="limite grade-sabores secao"
        aria-label="Experiências da semana"
      >
        {agendaAtual.map((item) => (
          <article className="cartao-sabor" key={item.titulo}>
            <div className="foto-sabor">
              <Imagem
                src={item.imagem}
                alt={item.titulo}
                fill
                sizes="(min-width: 900px) 30vw, 90vw"
              />
            </div>
            <div className="legenda-sabor">
              <h2>{item.titulo}</h2>
            </div>
            <p>
              <strong>{item.detalhe}</strong>
            </p>
            <p>{item.texto}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
