'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { Clock3 as Relogio, X as Fechar, Music2 as Musica } from 'lucide-react';
import { ContextoModais } from '@/components/contexto-modais';
import type { TipoModal } from '@/components/contexto-modais';
import { CardapioDigital } from '@/components/cardapio-digital';
import { FormularioVisita } from '@/components/formulario-visita';
import { PainelExperiencia } from '@/components/detalhe-experiencia';
import { encontrarDetalhe } from '@/content/detalhes-experiencias';
import { site } from '@/content/site';

const titulos: Partial<Record<TipoModal, string>> = {
  cardapio: 'O que vai à sua mesa hoje?',
  horarios: 'Encontre o melhor momento para vir',
  reserva: 'Vamos combinar a sua visita?',
  aniversario: 'Seu aniversário merece uma mesa especial',
  'consulta-cardapio': 'Converse com a equipe sobre o cardápio',
};
export function CentralModais({ children }: { children: ReactNode }) {
  const [tipo, definirTipo] = useState<TipoModal | null>(null);
  const [anterior, definirAnterior] = useState<TipoModal | null>(null);
  const dialogo = useRef<HTMLDialogElement>(null);
  const origem = useRef<HTMLElement | null>(null);
  const abrir = useCallback((acao: TipoModal) => {
    if (!dialogo.current?.open) {
      origem.current = document.activeElement as HTMLElement;
      definirAnterior(null);
    }
    definirTipo(acao);
  }, []);
  const detalhe = tipo ? encontrarDetalhe(tipo) : undefined;
  function trocarConteudo(acao: TipoModal) {
    if (tipo && encontrarDetalhe(tipo)) definirAnterior(tipo);
    abrir(acao);
  }
  useEffect(() => {
    if (!tipo || !dialogo.current) return;
    const elemento = dialogo.current;
    if (!elemento.open) elemento.showModal();
    elemento.scrollTop = 0;
    elemento
      .querySelector<HTMLButtonElement>('.fechar-modal')
      ?.focus({ preventScroll: true });
    const anterior = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    function fecharPeloFundo(evento: MouseEvent) {
      if (evento.target === elemento) elemento.close();
    }
    // O dialog nativo já fornece Escape e confinamento de foco pelo teclado.
    elemento.addEventListener('click', fecharPeloFundo);
    return () => {
      document.body.style.overflow = anterior;
      elemento.removeEventListener('click', fecharPeloFundo);
    };
  }, [tipo]);
  function fechar() {
    dialogo.current?.close();
  }
  return (
    <ContextoModais.Provider value={{ abrir: trocarConteudo }}>
      {children}
      <dialog
        ref={dialogo}
        className={`modal-chico modal-${tipo || 'fechado'}${detalhe ? ' modal-experiencia' : ''}`}
        aria-labelledby="titulo-modal"
        onClose={() => {
          definirTipo(null);
          definirAnterior(null);
          if (origem.current?.getClientRects().length) origem.current.focus();
          else
            document
              .querySelector<HTMLButtonElement>('.alternar-menu')
              ?.focus();
        }}
      >
        {tipo && (
          <div className="painel-modal">
            <header className="cabecalho-modal">
              <div>
                <p className="sobretitulo">Chico do Peixe · Santa Inês</p>
                <h2 id="titulo-modal">{detalhe?.titulo || titulos[tipo]}</h2>
              </div>
              <button
                className="fechar-modal"
                type="button"
                autoFocus
                onClick={fechar}
                aria-label="Fechar janela"
              >
                <Fechar size={23} aria-hidden="true" />
              </button>
            </header>
            <div className="conteudo-modal">
              {anterior && !detalhe && (
                <button
                  className="voltar-experiencia"
                  type="button"
                  onClick={() => {
                    definirTipo(anterior);
                    definirAnterior(null);
                  }}
                >
                  ← Voltar para as fotos e informações
                </button>
              )}
              {detalhe ? (
                <PainelExperiencia key={tipo} detalhe={detalhe} />
              ) : tipo === 'cardapio' ? (
                <CardapioDigital />
              ) : tipo === 'horarios' ? (
                <div className="painel-horarios">
                  <Relogio size={38} strokeWidth={1.4} aria-hidden="true" />
                  <p>
                    Do almoço em família ao encontro com os amigos, a casa
                    recebe você todos os dias.
                  </p>
                  <dl>
                    {[
                      'Segunda-feira',
                      'Terça-feira',
                      'Quarta-feira',
                      'Quinta-feira',
                      'Sexta-feira',
                      'Sábado',
                      'Domingo',
                    ].map((dia) => (
                      <div key={dia}>
                        <dt>{dia}</dt>
                        <dd>11h às 23h</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="lembrete-horarios">
                    <Musica size={21} aria-hidden="true" />
                    <p>
                      Música ao vivo às terças e quintas. Confira artistas,
                      horários das apresentações e programação de jogos no{' '}
                      <a
                        href={site.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Instagram da casa
                      </a>
                      .
                    </p>
                  </div>
                  <p className="nota-formulario">
                    Horário informado no perfil oficial do restaurante. Em
                    feriados e datas especiais, confirme com a equipe antes de
                    sair.
                  </p>
                </div>
              ) : (
                <FormularioVisita
                  key={tipo}
                  motivoInicial={
                    tipo === 'aniversario'
                      ? 'aniversario'
                      : tipo === 'consulta-cardapio'
                        ? 'cardapio'
                        : 'reserva'
                  }
                />
              )}
            </div>
          </div>
        )}
      </dialog>
    </ContextoModais.Provider>
  );
}
