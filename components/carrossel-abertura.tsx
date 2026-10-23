'use client';

import Imagem from 'next/image';
import {
  AnimatePresence as PresencaAnimada,
  motion as movimento,
  useInView,
  useReducedMotion,
} from 'motion/react';
import {
  ChefHat as IconeChef,
  ChevronLeft as Anterior,
  ChevronRight as Proxima,
  Pause as Pausar,
  Play as Reproduzir,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent, PointerEvent } from 'react';
import { fotografiasDestaque } from '@/content/experiencia';

export function CarrosselAbertura() {
  const [indice, definirIndice] = useState(0);
  const [pausado, definirPausado] = useState(false);
  const [ponteiroDentro, definirPonteiroDentro] = useState(false);
  const [paginaVisivel, definirPaginaVisivel] = useState(true);
  const referencia = useRef<HTMLElement>(null);
  const inicioToque = useRef<number | null>(null);
  const movimentoReduzido = useReducedMotion();
  const estaNaTela = useInView(referencia, { amount: 0.3 });
  const fotografia = fotografiasDestaque[indice];

  useEffect(() => {
    function atualizarVisibilidade() {
      definirPaginaVisivel(!document.hidden);
    }
    document.addEventListener('visibilitychange', atualizarVisibilidade);
    return () =>
      document.removeEventListener('visibilitychange', atualizarVisibilidade);
  }, []);

  useEffect(() => {
    if (
      pausado ||
      ponteiroDentro ||
      movimentoReduzido ||
      !paginaVisivel ||
      !estaNaTela
    )
      return;
    const temporizador = window.setInterval(
      () => definirIndice((atual) => (atual + 1) % fotografiasDestaque.length),
      6000,
    );
    return () => window.clearInterval(temporizador);
  }, [pausado, ponteiroDentro, movimentoReduzido, paginaVisivel, estaNaTela]);

  function selecionarFoto(novoIndice: number) {
    definirPausado(true);
    definirIndice(
      (novoIndice + fotografiasDestaque.length) % fotografiasDestaque.length,
    );
  }
  function navegarComTeclado(evento: KeyboardEvent<HTMLButtonElement>) {
    if (evento.key === 'ArrowRight' || evento.key === 'ArrowLeft') {
      evento.preventDefault();
      selecionarFoto(indice + (evento.key === 'ArrowRight' ? 1 : -1));
    }
  }
  function iniciarGesto(evento: PointerEvent<HTMLElement>) {
    if (
      evento.pointerType !== 'touch' ||
      (evento.target as HTMLElement).closest('a, button')
    )
      return;
    inicioToque.current = evento.clientX;
  }
  function concluirGesto(evento: PointerEvent<HTMLElement>) {
    if (inicioToque.current === null) return;
    const distancia = evento.clientX - inicioToque.current;
    inicioToque.current = null;
    if (Math.abs(distancia) > 40)
      selecionarFoto(indice + (distancia < 0 ? 1 : -1));
  }

  return (
    // oxlint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- A seção detecta gestos; botões nativos oferecem navegação equivalente por teclado.
    <section
      ref={referencia}
      className="abertura-foto carrossel-abertura"
      aria-roledescription="carrossel"
      aria-label="Sabores e ambientes do Chico do Peixe"
      onFocusCapture={() => definirPausado(true)}
      onMouseEnter={() => definirPonteiroDentro(true)}
      onMouseLeave={() => definirPonteiroDentro(false)}
      onPointerDown={iniciarGesto}
      onPointerUp={concluirGesto}
      onPointerCancel={() => {
        inicioToque.current = null;
      }}
    >
      <PresencaAnimada initial={false}>
        <movimento.figure
          className="quadro-carrossel"
          key={fotografia.identificador}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: movimentoReduzido ? 0 : 0.65 }}
          aria-roledescription="slide"
          aria-label={`${indice + 1} de ${fotografiasDestaque.length}`}
        >
          <Imagem
            className="imagem-carrossel"
            src={fotografia.imagem}
            alt={fotografia.descricao}
            fill
            sizes="(min-width: 1400px) 680px, (min-width: 900px) 52vw, (min-width: 600px) 90vw, 100vw"
            preload={indice === 0}
            draggable={false}
            style={{ objectPosition: fotografia.enquadramento }}
          />
          <figcaption>
            <span>{fotografia.chamada}</span>
            <strong>{fotografia.titulo}</strong>
          </figcaption>
        </movimento.figure>
      </PresencaAnimada>
      <a className="etiqueta-foto" href="#sabores">
        <IconeChef aria-hidden="true" strokeWidth={1.5} />
        <span>Sua próxima</span>
        <strong>boa escolha.</strong>
      </a>
      <div className="controles-carrossel">
        <div
          className="marcadores-carrossel"
          aria-label="Selecionar fotografia"
        >
          {fotografiasDestaque.map((foto, posicao) => (
            <button
              key={foto.identificador}
              type="button"
              onKeyDown={navegarComTeclado}
              className={
                posicao === indice
                  ? 'marcador-carrossel selecionado'
                  : 'marcador-carrossel'
              }
              onClick={() => selecionarFoto(posicao)}
              aria-label={`Ver foto ${posicao + 1}: ${foto.chamada}`}
              aria-current={posicao === indice ? 'true' : undefined}
            >
              <span />
            </button>
          ))}
        </div>
        <div className="botoes-carrossel">
          <button
            type="button"
            onKeyDown={navegarComTeclado}
            onClick={() => selecionarFoto(indice - 1)}
            aria-label="Foto anterior"
          >
            <Anterior aria-hidden="true" />
          </button>
          <span className="contador-carrossel" aria-hidden="true">
            {String(indice + 1).padStart(2, '0')} /{' '}
            {String(fotografiasDestaque.length).padStart(2, '0')}
          </span>
          <button
            type="button"
            onKeyDown={navegarComTeclado}
            onClick={() => selecionarFoto(indice + 1)}
            aria-label="Próxima foto"
          >
            <Proxima aria-hidden="true" />
          </button>
          <button
            type="button"
            onKeyDown={navegarComTeclado}
            onClick={() => definirPausado((atual) => !atual)}
            aria-label={pausado ? 'Reproduzir carrossel' : 'Pausar carrossel'}
            aria-pressed={pausado}
          >
            {pausado ? (
              <Reproduzir aria-hidden="true" />
            ) : (
              <Pausar aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      <output
        className="somente-leitura"
        aria-live={pausado ? 'polite' : 'off'}
        aria-atomic="true"
      >
        Foto {indice + 1} de {fotografiasDestaque.length}:{' '}
        {fotografia.descricao}
      </output>
    </section>
  );
}
