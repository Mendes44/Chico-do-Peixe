import { Star as Estrela, ArrowUpRight as SetaExterna } from 'lucide-react';
import { consultaAvaliacoes } from '@/content/experiencia';

export function AvaliacoesGoogle() {
  return (
    <section className="secao avaliacoes" aria-labelledby="titulo-avaliacoes">
      <div className="limite grade-avaliacoes">
        <div>
          <p className="sobretitulo">Quem visita também conta essa história</p>
          <h2 id="titulo-avaliacoes">
            Milhares de experiências <em>compartilhadas no Google.</em>
          </h2>
          <p>
            Antes de escolher a sua mesa, conheça as opiniões de quem já passou
            por aqui e descubra o que os clientes contam sobre a comida, o
            atendimento e o ambiente.
          </p>
          <a
            className="ligacao-texto"
            href={consultaAvaliacoes}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-event="reviews_click"
          >
            Ler as avaliações no Google
            <SetaExterna size={17} aria-hidden="true" />
          </a>
        </div>
        <div className="cartao-nota">
          <span className="origem-nota">Avaliação no Google</span>
          <div className="valor-nota">
            <strong>4,3</strong>
            <span>/ 5</span>
          </div>
          <div className="estrelas-nota" aria-label="Nota 4,3 de 5">
            {[1, 2, 3, 4, 5].map((numero) => (
              <Estrela
                key={numero}
                size={23}
                fill={numero < 5 ? 'currentColor' : 'none'}
                aria-hidden="true"
              />
            ))}
          </div>
          <p>
            <strong>4.980 avaliações</strong> de clientes
          </p>
          <small>
            Consulta em 23/10/2026. A nota e a quantidade de avaliações podem
            mudar.
          </small>
        </div>
      </div>
    </section>
  );
}
