import {
  ArrowUpRight as SetaExterna,
  MapPin as Localizacao,
  Clock3 as Relogio,
} from 'lucide-react';
import { site } from '@/content/site';
import { BotaoModal } from '@/components/contexto-modais';
import { FormularioVisita } from '@/components/formulario-visita';

export function PlanejarVisita() {
  return (
    <section
      className="visita visita-com-formulario"
      id="visita"
      aria-labelledby="titulo-visita"
    >
      <div className="limite">
        <div className="introducao-visita">
          <p className="sobretitulo">Sua próxima visita começa aqui</p>
          <h2 id="titulo-visita">
            Traga a sua companhia <em>e deixe o encontro com a gente.</em>
          </h2>
          <p>
            Conte o que você está planejando para que a equipe ajude a combinar
            os detalhes. Ao lado, você encontra o endereço e a rota para chegar
            ao Chico.
          </p>
        </div>
        <div className="grade-contato">
          <FormularioVisita />
          <div className="cartao-localizacao">
            <div className="mapa-visita">
              <iframe
                title="Localização do Chico do Peixe Santa Inês no Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.1074651836475!2d-43.9091697!3d-19.877683599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69afea20e4845%3A0xf00f09c1fcf43939!2sChico%20do%20Peixe%20santa%20In%C3%AAs!5e0!3m2!1spt-BR!2sbr!4v1792799382922!5m2!1spt-BR!2sbr"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="endereco-visita">
              <Localizacao size={25} aria-hidden="true" />
              <div>
                <h3>Esperamos você em Santa Inês</h3>
                <address>
                  {site.address.street} · {site.address.neighborhood}
                  <br />
                  {site.address.city} · {site.address.state}
                  <br />
                  CEP {site.address.postalCode}
                </address>
              </div>
            </div>
            <BotaoModal acao="horarios" className="horario-localizacao">
              <Relogio size={20} aria-hidden="true" />
              <span>
                Todos os dias <strong>11h às 23h</strong>
              </span>
              <SetaExterna size={17} aria-hidden="true" />
            </BotaoModal>
            <a
              className="botao botao-verde"
              href={site.maps}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event="map_click"
              data-posicao="visita"
            >
              Traçar rota no Google Maps
              <SetaExterna size={17} aria-hidden="true" />
            </a>
            <a className="telefone-localizacao" href={'tel:' + site.phone}>
              Prefere ligar? {site.phoneLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
