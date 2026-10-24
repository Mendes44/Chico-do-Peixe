import Link from 'next/link';
import Imagem from 'next/image';
import {
  ArrowUpRight as SetaExterna,
  MapPin as Localizacao,
  MessageCircle as Mensagem,
  Camera as IconeInstagram,
  Utensils as Talheres,
} from 'lucide-react';
import { site } from '@/content/site';
import { marcaAtual } from '@/content/experiencia';
import { BotaoModal } from '@/components/contexto-modais';

export function Rodape() {
  return (
    <>
      <footer className="rodape rodape-completo">
        <div className="limite">
          <div className="grade-rodape">
            <div className="marca-rodape">
              <Link href="/" aria-label="Chico do Peixe — início">
                <Imagem
                  src={marcaAtual}
                  alt="Chico do Peixe Santa Inês"
                  width={88}
                  height={88}
                />
              </Link>
              <h2>
                Os melhores encontros
                <br />
                têm lugar à mesa.
              </h2>
              <p>
                Peixes, porções, música e a hospitalidade de uma casa que faz
                parte da história de Belo Horizonte.
              </p>
              <a
                className="rede-rodape"
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconeInstagram size={18} aria-hidden="true" />
                @chicodopeixesantaines
              </a>
            </div>
            <div className="coluna-rodape">
              <h3>Encontre o seu Chico</h3>
              <address>
                {site.address.street}
                <br />
                {site.address.neighborhood} · {site.address.city},{' '}
                {site.address.state}
              </address>
              <a href={'tel:' + site.phone}>{site.phoneLabel}</a>
              <BotaoModal acao="horarios">
                Todos os dias, das 11h às 23h
                <SetaExterna size={14} aria-hidden="true" />
              </BotaoModal>
              <a href={site.maps} target="_blank" rel="noopener noreferrer">
                Abrir rota no Google Maps
                <SetaExterna size={14} aria-hidden="true" />
              </a>
            </div>
            <nav className="coluna-rodape" aria-label="Explore o restaurante">
              <h3>Prepare o seu encontro</h3>
              <BotaoModal acao="cardapio">Conhecer o cardápio</BotaoModal>
              <BotaoModal acao="reserva">Consultar uma reserva</BotaoModal>
              <BotaoModal acao="aniversario">Comemorar aniversário</BotaoModal>
              <Link href="/#momentos">Playground e experiências</Link>
              <Link href="/atracoes">Programação da casa</Link>
              <a href={site.ifood} target="_blank" rel="noopener noreferrer">
                Pedir pelo iFood
                <SetaExterna size={14} aria-hidden="true" />
              </a>
            </nav>
          </div>
          <div className="base-rodape">
            <span>© {new Date().getFullYear()} Chico do Peixe Santa Inês.</span>
            <span>Feito para reunir quem você gosta.</span>
            <Link href="/privacidade">Privacidade e cookies</Link>
          </div>
        </div>
      </footer>
      <nav className="atalhos-celular" aria-label="Atalhos para sua visita">
        <BotaoModal acao="cardapio">
          <Talheres size={17} aria-hidden="true" />
          Cardápio
        </BotaoModal>
        <a
          href={site.maps}
          target="_blank"
          rel="noopener noreferrer"
          data-analytics-event="map_click"
          data-posicao="barra-celular"
        >
          <Localizacao size={17} aria-hidden="true" />
          Rota
        </a>
        <BotaoModal acao="reserva">
          <Mensagem size={17} aria-hidden="true" />
          Reserva
        </BotaoModal>
      </nav>
    </>
  );
}
