'use client';
import Link from 'next/link';
import Imagem from 'next/image';
import {
  ArrowUpRight as SetaExterna,
  Menu as IconeMenu,
  X as Fechar,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { marcaAtual } from '@/content/experiencia';
import { BotaoModal } from '@/components/contexto-modais';
const links = [
  { destino: '/#sabores', rotulo: 'À mesa' },
  { destino: '/#experiencia', rotulo: 'O nosso espaço' },
  { destino: '/atracoes', rotulo: 'Agenda do Chico' },
  { destino: '/#visita', rotulo: 'Como chegar' },
];
export function Cabecalho() {
  const [aberto, definirAberto] = useState(false);
  const referencia = useRef<HTMLElement>(null);
  const botaoMenu = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!aberto) return;
    function fecharComEscape(evento: KeyboardEvent) {
      if (evento.key === 'Escape') {
        definirAberto(false);
        botaoMenu.current?.focus();
      }
    }
    function fecharFora(evento: PointerEvent) {
      if (!referencia.current?.contains(evento.target as Node))
        definirAberto(false);
    }
    const telaAmpla = window.matchMedia('(min-width: 900px)');
    function fecharAoAmpliar() {
      if (telaAmpla.matches) definirAberto(false);
    }
    document.addEventListener('keydown', fecharComEscape);
    document.addEventListener('pointerdown', fecharFora);
    telaAmpla.addEventListener('change', fecharAoAmpliar);
    return () => {
      document.removeEventListener('keydown', fecharComEscape);
      document.removeEventListener('pointerdown', fecharFora);
      telaAmpla.removeEventListener('change', fecharAoAmpliar);
    };
  }, [aberto]);
  return (
    <>
      <div className="faixa-superior">
        <div className="limite faixa-conteudo">
          <span>Santa Inês · Belo Horizonte</span>
          <BotaoModal acao="horarios">
            Todos os dias, das 11h às 23h{' '}
            <SetaExterna aria-hidden="true" size={12} />
          </BotaoModal>
        </div>
      </div>
      <header ref={referencia} className="cabecalho">
        <div className="limite cabecalho-conteudo">
          <Link className="marca" href="/" aria-label="Chico do Peixe — início">
            <Imagem
              src={marcaAtual}
              alt="Chico do Peixe"
              width={76}
              height={76}
            />
            <span>Santa Inês</span>
          </Link>
          <button
            ref={botaoMenu}
            className="alternar-menu"
            type="button"
            aria-expanded={aberto}
            aria-controls="navegacao"
            onClick={() => definirAberto((atual) => !atual)}
          >
            Menu{' '}
            {aberto ? (
              <Fechar aria-hidden="true" />
            ) : (
              <IconeMenu aria-hidden="true" />
            )}
          </button>
          <nav
            className={aberto ? 'navegacao menu-aberto' : 'navegacao'}
            id="navegacao"
            aria-label="Navegação principal"
          >
            {links.map((link) => (
              <Link
                key={link.destino}
                href={link.destino}
                onClick={() => definirAberto(false)}
              >
                {link.rotulo}
              </Link>
            ))}
            <BotaoModal
              acao="cardapio"
              onClick={() => definirAberto(false)}
              className="item-menu-cardapio"
            >
              Cardápio
            </BotaoModal>
            <BotaoModal
              acao="reserva"
              onClick={() => definirAberto(false)}
              className="botao botao-verde reserva-cabecalho"
              data-analytics-event="reservation_form_open"
              data-posicao="cabecalho"
            >
              Consultar reserva <SetaExterna aria-hidden="true" size={17} />
            </BotaoModal>
          </nav>
        </div>
      </header>
    </>
  );
}
