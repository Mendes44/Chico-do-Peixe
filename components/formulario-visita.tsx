'use client';

import { useEffect, useId, useRef, useState } from 'react';
import type { SubmitEvent } from 'react';
import {
  ArrowUpRight as SetaExterna,
  MessageCircle as Mensagem,
  Pencil as Editar,
} from 'lucide-react';
import { prepararMensagemWhatsApp } from '@/lib/mensagem-whatsapp';
import type { MotivoContato } from '@/lib/mensagem-whatsapp';

export function FormularioVisita({
  motivoInicial = 'reserva',
}: {
  motivoInicial?: MotivoContato;
}) {
  const identificador = useId();
  const nomeReferencia = useRef<HTMLInputElement>(null);
  const [motivo, definirMotivo] = useState<MotivoContato>(motivoInicial);
  const [erro, definirErro] = useState('');
  const [preparo, definirPreparo] = useState<ReturnType<
    typeof prepararMensagemWhatsApp
  > | null>(null);
  const revisaoReferencia = useRef<HTMLElement>(null);
  useEffect(() => {
    if (preparo) revisaoReferencia.current?.focus();
  }, [preparo]);
  const precisaData = motivo === 'reserva' || motivo === 'aniversario';

  function prepararContato(evento: SubmitEvent<HTMLFormElement>) {
    evento.preventDefault();
    const dados = new FormData(evento.currentTarget);
    const lerCampo = (campo: string) => {
      const valor = dados.get(campo);
      return typeof valor === 'string' ? valor.trim() : '';
    };
    if (lerCampo('nome').length < 2) {
      definirErro(
        'Informe seu nome para que a equipe possa identificar seu atendimento.',
      );
      nomeReferencia.current?.focus();
      return;
    }
    if (!/^\d{10,11}$/.test(lerCampo('telefone').replace(/\D/g, ''))) {
      definirErro('Informe um WhatsApp com DDD, usando 10 ou 11 números.');
      return;
    }
    const data = lerCampo('data');
    const hoje = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'America/Sao_Paulo',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(new Date());
    if (data && data < hoje) {
      definirErro(
        'Escolha a data de hoje ou uma data futura para a sua visita.',
      );
      return;
    }
    definirErro('');
    definirPreparo(
      prepararMensagemWhatsApp({
        nome: lerCampo('nome'),
        telefone: lerCampo('telefone'),
        motivo,
        data,
        horario: lerCampo('horario'),
        pessoas: lerCampo('pessoas'),
        observacoes: lerCampo('observacoes'),
      }),
    );
  }

  return (
    <div className="bloco-formulario">
      <div className="cabecalho-formulario">
        <span className="icone-formulario">
          <Mensagem size={23} aria-hidden="true" />
        </span>
        <div>
          <h3>Conte como podemos preparar a sua visita</h3>
          <p>
            Preencha os detalhes e revise sua mensagem antes de continuar no
            WhatsApp.
          </p>
        </div>
      </div>
      <form
        className="formulario-visita"
        onSubmit={prepararContato}
        onChange={() => {
          definirPreparo(null);
          definirErro('');
        }}
      >
        <div className="dupla-campos">
          <label htmlFor={`${identificador}-nome`}>
            Seu nome <span aria-hidden="true">*</span>
            <input
              ref={nomeReferencia}
              id={`${identificador}-nome`}
              name="nome"
              autoComplete="name"
              required
              minLength={2}
              maxLength={80}
              placeholder="Como podemos chamar você?"
            />
          </label>
          <label htmlFor={`${identificador}-telefone`}>
            WhatsApp com DDD <span aria-hidden="true">*</span>
            <input
              id={`${identificador}-telefone`}
              name="telefone"
              type="tel"
              inputMode="tel"
              autoComplete="tel-national"
              required
              minLength={10}
              maxLength={20}
              placeholder="(31) 99999-9999"
            />
          </label>
        </div>
        <label htmlFor={`${identificador}-motivo`}>
          Como podemos ajudar?
          <select
            id={`${identificador}-motivo`}
            name="motivo"
            value={motivo}
            onChange={(evento) =>
              definirMotivo(evento.target.value as MotivoContato)
            }
          >
            <option value="reserva">Quero consultar uma reserva</option>
            <option value="aniversario">Quero comemorar um aniversário</option>
            <option value="cardapio">Quero informações sobre o cardápio</option>
            <option value="duvida">Quero tirar uma dúvida</option>
          </select>
        </label>
        {precisaData && (
          <>
            <div className="dupla-campos">
              <label htmlFor={`${identificador}-data`}>
                Data desejada <span aria-hidden="true">*</span>
                <input
                  id={`${identificador}-data`}
                  name="data"
                  type="date"
                  required
                />
              </label>
              <label htmlFor={`${identificador}-horario`}>
                Horário desejado <span aria-hidden="true">*</span>
                <input
                  id={`${identificador}-horario`}
                  name="horario"
                  type="time"
                  min="11:00"
                  max="23:00"
                  required
                />
              </label>
            </div>
            <label htmlFor={`${identificador}-pessoas`}>
              Quantas pessoas virão? <span aria-hidden="true">*</span>
              <input
                id={`${identificador}-pessoas`}
                name="pessoas"
                type="number"
                min={1}
                step={1}
                required
                placeholder="Inclua adultos e crianças"
              />
            </label>
          </>
        )}
        <label htmlFor={`${identificador}-observacoes`}>
          Quer acrescentar algum detalhe?{' '}
          <span className="campo-opcional">(opcional)</span>
          <textarea
            id={`${identificador}-observacoes`}
            name="observacoes"
            rows={3}
            maxLength={800}
            placeholder="Conte sobre a ocasião, a sua dúvida ou o que deseja combinar com a equipe."
          />
        </label>
        {erro && (
          <p className="erro-formulario" role="alert">
            {erro}
          </p>
        )}
        {!preparo && (
          <button className="botao botao-verde" type="submit">
            Preparar mensagem para o WhatsApp{' '}
            <SetaExterna size={17} aria-hidden="true" />
          </button>
        )}
        <p className="nota-formulario">
          Seus dados serão usados para preparar esta mensagem. A reserva é
          confirmada pela equipe conforme a disponibilidade da casa.
        </p>
      </form>
      {preparo && (
        <section
          ref={revisaoReferencia}
          tabIndex={-1}
          className="revisao-mensagem"
          aria-labelledby={`${identificador}-revisao`}
        >
          <h4 id={`${identificador}-revisao`}>
            Confira sua mensagem antes de continuar
          </h4>
          <pre>{preparo.mensagem}</pre>
          <div className="acoes-revisao">
            <button
              className="ligacao-texto"
              type="button"
              onClick={() => {
                definirPreparo(null);
                nomeReferencia.current?.focus();
              }}
            >
              <Editar size={16} aria-hidden="true" />
              Editar informações
            </button>
            <button
              type="button"
              className="botao botao-verde"
              onClick={() =>
                window.open(preparo.destino, '_blank', 'noopener,noreferrer')
              }
              data-analytics-event={
                motivo === 'cardapio'
                  ? 'menu_contact_click'
                  : 'reservation_click'
              }
              data-posicao="formulario"
            >
              Continuar no WhatsApp <SetaExterna size={17} aria-hidden="true" />
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
