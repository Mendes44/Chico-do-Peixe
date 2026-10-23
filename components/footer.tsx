import Link from 'next/link';
import {
  ArrowUpRight as SetaExterna,
  MapPin as Localizacao,
  MessageCircle as Mensagem,
} from 'lucide-react';
import { site } from '@/content/site';
import { contatoReserva } from '@/content/experiencia';
export function Rodape() {
  return (
    <>
      <footer className="rodape">
        <div className="limite rodape-conteudo">
          <div>
            <Link href="/">
              <strong>Chico do Peixe</strong>
            </Link>
            <p>Santa Inês · Sabor que reúne.</p>
          </div>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer">
            Instagram <SetaExterna aria-hidden="true" size={14} />
          </a>
          <Link href="/contato">Contato e horários</Link>
          <Link href="/privacidade">Privacidade</Link>
          <span>© {new Date().getFullYear()} Chico do Peixe</span>
        </div>
      </footer>
      <nav className="atalhos-celular" aria-label="Atalhos para sua visita">
        <a
          href={site.maps}
          target="_blank"
          rel="noopener noreferrer"
          data-analytics-event="map_click"
          data-posicao="barra-celular"
        >
          <Localizacao size={16} aria-hidden="true" />
          Como chegar
        </a>
        <a
          href={contatoReserva}
          target="_blank"
          rel="noopener noreferrer"
          data-analytics-event="reservation_click"
          data-posicao="barra-celular"
        >
          <Mensagem size={16} aria-hidden="true" />
          Consultar reserva
        </a>
      </nav>
    </>
  );
}
