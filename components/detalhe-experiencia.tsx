'use client';

import { useState } from 'react';
import Imagem from 'next/image';
import {
  ArrowRight as Seta,
  ChevronLeft as Anterior,
  ChevronRight as Proxima,
} from 'lucide-react';
import { BotaoModal } from '@/components/contexto-modais';
import { caminhoFoto } from '@/content/detalhes-experiencias';
import type { DetalheExperiencia } from '@/content/detalhes-experiencias';

export function PainelExperiencia({
  detalhe,
}: {
  detalhe: DetalheExperiencia;
}) {
  const [indice, definirIndice] = useState(0);
  const foto = detalhe.fotos[indice];
  function navegar(direcao: number) {
    definirIndice(
      (atual) =>
        (atual + direcao + detalhe.fotos.length) % detalhe.fotos.length,
    );
  }
  return (
    <div className="experiencia-modal">
      <section
        className="galeria-experiencia"
        aria-label="Fotos desta experiência"
        aria-roledescription="carrossel"
      >
        <figure>
          <div className="quadro-foto-modal">
            <Imagem
              key={foto.arquivo}
              src={caminhoFoto(foto.arquivo)}
              alt={foto.alternativa}
              fill
              quality={85}
              sizes="(min-width: 1000px) 510px, (min-width: 760px) 45vw, 90vw"
            />
            {detalhe.fotos.length > 1 && (
              <div className="navegacao-fotos-modal">
                <button
                  type="button"
                  onClick={() => navegar(-1)}
                  aria-label="Foto anterior"
                >
                  <Anterior size={19} aria-hidden="true" />
                </button>
                <span aria-live="polite">
                  {indice + 1} / {detalhe.fotos.length}
                </span>
                <button
                  type="button"
                  onClick={() => navegar(1)}
                  aria-label="Próxima foto"
                >
                  <Proxima size={19} aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
          <figcaption aria-live="polite">{foto.legenda}</figcaption>
        </figure>
        {detalhe.fotos.length > 1 && (
          <div
            className="miniaturas-experiencia"
            aria-label="Escolher uma foto"
          >
            {detalhe.fotos.map((item, posicao) => (
              <button
                key={item.arquivo}
                type="button"
                aria-label={`Ver foto ${posicao + 1}: ${item.alternativa}`}
                aria-pressed={indice === posicao}
                onClick={() => definirIndice(posicao)}
              >
                <Imagem
                  src={caminhoFoto(item.arquivo)}
                  alt=""
                  fill
                  sizes="76px"
                />
              </button>
            ))}
          </div>
        )}
      </section>
      <div className="historia-experiencia-modal">
        <p className="sobretitulo">{detalhe.chamada}</p>
        <p className="introducao-experiencia">{detalhe.introducao}</p>
        {detalhe.paragrafos.map((paragrafo) => (
          <p key={paragrafo}>{paragrafo}</p>
        ))}
        {detalhe.acao && (
          <BotaoModal acao={detalhe.acao.destino} className="botao botao-verde">
            {detalhe.acao.texto}
            <Seta size={17} aria-hidden="true" />
          </BotaoModal>
        )}
        {detalhe.mostrarHorarios && (
          <BotaoModal acao="horarios" className="ligacao-texto">
            Consultar os horários de funcionamento
            <Seta size={16} aria-hidden="true" />
          </BotaoModal>
        )}
      </div>
    </div>
  );
}
