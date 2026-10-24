'use client';
import { createContext, useContext } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import type { TipoDetalhe } from '@/content/detalhes-experiencias';
export type TipoModal =
  | TipoDetalhe
  | 'cardapio'
  | 'horarios'
  | 'reserva'
  | 'aniversario'
  | 'consulta-cardapio';
export const ContextoModais = createContext<{
  abrir: (tipo: TipoModal) => void;
} | null>(null);
type PropriedadesBotao = ButtonHTMLAttributes<HTMLButtonElement> & {
  acao: TipoModal;
};
export function BotaoModal({
  acao,
  children,
  onClick,
  ...propriedades
}: PropriedadesBotao) {
  const contexto = useContext(ContextoModais);
  if (!contexto)
    throw new Error('BotaoModal deve estar dentro de CentralModais.');
  return (
    <button
      data-analytics-event={
        {
          cardapio: 'menu_open',
          horarios: 'hours_open',
          reserva: 'reservation_form_open',
          aniversario: 'birthday_form_open',
          'consulta-cardapio': 'menu_contact_form_open',
          almoco: 'lunch_details_open',
          porcoes: 'food_details_open',
          adega: 'wine_details_open',
          comemoracao: 'birthday_details_open',
          jogos: 'games_details_open',
          espaco: 'space_details_open',
          encontro: 'meeting_details_open',
          playground: 'playground_details_open',
          musica: 'music_details_open',
        }[acao]
      }
      {...propriedades}
      type="button"
      aria-haspopup="dialog"
      onClick={(evento) => {
        onClick?.(evento);
        if (!evento.defaultPrevented) contexto.abrir(acao);
      }}
    >
      {children}
    </button>
  );
}
