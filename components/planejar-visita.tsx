import { ArrowUpRight as SetaExterna, Wine as Vinho } from 'lucide-react';
import { site } from '@/content/site';
import { consultaAvaliacoes, contatoReserva } from '@/content/experiencia';
export function PlanejarVisita() {
  return (
    <section className="visita" id="visita" aria-labelledby="titulo-visita">
      <div className="limite grade-visita">
        <div>
          <p className="sobretitulo">Já sabe quem vem com você?</p>
          <h2 id="titulo-visita">
            O encontro é seu.
            <br />O endereço <em>é o Chico.</em>
          </h2>
          <address>
            <strong>{site.name}</strong>
            <br />
            {site.address.street} · {site.address.neighborhood}
            <br />
            {site.address.city} · {site.address.state}
          </address>
          {site.hours.map((periodo) => (
            <div className="horarios" key={periodo.days}>
              <span>{periodo.days}</span>
              <strong>{periodo.label}</strong>
            </div>
          ))}
          <div className="acoes-visita">
            <a
              className="botao botao-claro"
              href={site.maps}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event="map_click"
              data-posicao="visita"
            >
              Abrir rota no Google Maps{' '}
              <SetaExterna size={17} aria-hidden="true" />
            </a>
            <a className="ligacao-texto" href={'tel:' + site.phone}>
              Ligar: {site.phoneLabel}
            </a>
          </div>
        </div>
        <div className="cartao-encontro">
          <span className="icone-encontro" aria-hidden="true">
            <Vinho size={27} strokeWidth={1.5} />
          </span>
          <h3>
            Junte a turma.
            <br />
            Deixe o resto com a gente.
          </h3>
          <p>
            Um aniversário, um reencontro ou só vontade de estar junto. Fale com
            a equipe para consultar reservas e combinar os detalhes.
          </p>
          <a
            className="botao botao-verde"
            href={contatoReserva}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-event="reservation_click"
            data-posicao="visita"
          >
            Combinar pelo WhatsApp <SetaExterna size={17} aria-hidden="true" />
          </a>
          <a
            className="ligacao-texto"
            href={consultaAvaliacoes}
            target="_blank"
            rel="noopener noreferrer"
          >
            Veja o que os clientes contam no Google{' '}
            <SetaExterna size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
