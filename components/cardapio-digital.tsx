'use client';
import { useId, useState } from 'react';
import {
  ChevronLeft as Anterior,
  ChevronRight as Proxima,
  Minus as Diminuir,
  Plus as Aumentar,
  Utensils as Talheres,
} from 'lucide-react';
import { categoriasCardapio } from '@/content/cardapio';
import { BotaoModal } from '@/components/contexto-modais';

export function CardapioDigital() {
  const identificador = useId();
  const [indice, definirIndice] = useState(0);
  const [ampliado, definirAmpliado] = useState(false);
  const categoria = categoriasCardapio[indice];
  return (
    <div className={`cardapio-digital${ampliado ? ' leitura-ampliada' : ''}`}>
      <div className="apresentacao-cardapio">
        <Talheres size={28} aria-hidden="true" />
        <p>
          Conheça as especialidades do Chico e encontre o sabor que combina com
          a sua visita.
        </p>
      </div>
      <div className="ferramentas-cardapio">
        <label htmlFor={identificador}>
          Escolha uma categoria
          <select
            id={identificador}
            value={indice}
            onChange={(evento) => definirIndice(Number(evento.target.value))}
          >
            {categoriasCardapio.map((item, posicao) => (
              <option key={item.identificador} value={posicao}>
                {String(posicao + 1).padStart(2, '0')} · {item.titulo}
              </option>
            ))}
          </select>
        </label>
        <button
          className="botao-leitura"
          type="button"
          aria-pressed={ampliado}
          onClick={() => definirAmpliado((atual) => !atual)}
        >
          {ampliado ? (
            <Diminuir size={16} aria-hidden="true" />
          ) : (
            <Aumentar size={16} aria-hidden="true" />
          )}
          Texto {ampliado ? 'padrão' : 'maior'}
        </button>
      </div>
      <section className="folha-cardapio" aria-live="polite" aria-atomic="true">
        <span className="numero-categoria">
          {String(indice + 1).padStart(2, '0')} /{' '}
          {String(categoriasCardapio.length).padStart(2, '0')}
        </span>
        <h3>{categoria.titulo}</h3>
        <p className="introducao-categoria">{categoria.introducao}</p>
        <ul>
          {categoria.itens.map((item) => (
            <li key={item.nome}>
              <h4>{item.nome}</h4>
              {item.descricao && <p>{item.descricao}</p>}
            </li>
          ))}
        </ul>
      </section>
      <div className="paginacao-cardapio">
        <button
          type="button"
          disabled={indice === 0}
          onClick={() => definirIndice((atual) => atual - 1)}
        >
          <Anterior size={18} aria-hidden="true" />
          Anterior
        </button>
        <span>
          {indice + 1} de {categoriasCardapio.length}
        </span>
        <button
          type="button"
          disabled={indice === categoriasCardapio.length - 1}
          onClick={() => definirIndice((atual) => atual + 1)}
        >
          Próxima
          <Proxima size={18} aria-hidden="true" />
        </button>
      </div>
      <aside className="nota-cardapio">
        <p>
          Os pratos foram organizados a partir das informações públicas da casa.
          Valores, tamanhos e disponibilidade devem ser confirmados com a equipe
          antes do pedido.
        </p>
        <BotaoModal acao="consulta-cardapio" className="botao botao-verde">
          Consultar valores e disponibilidade
        </BotaoModal>
      </aside>
    </div>
  );
}
