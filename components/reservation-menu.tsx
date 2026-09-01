'use client';

import { SyntheticEvent, useId, useRef, useState } from 'react';
import { CheckCircle2, ChevronDown, MessageCircle, X } from 'lucide-react';
import { site } from '@/content/site';

type ContactReason = 'reservation' | 'question';

type ReservationMenuProps = {
  className?: string;
};

/*
 * Menu suspenso de contato.
 * O formulário não armazena dados: ele apenas organiza as informações e abre
 * o WhatsApp com a mensagem pronta para o usuário revisar antes de enviar.
 */
export function ReservationMenu({ className = '' }: ReservationMenuProps) {
  const [reason, setReason] = useState<ContactReason>('reservation');
  const [showFeedback, setShowFeedback] = useState(false);
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const fieldId = useId();

  /* Monta a mensagem correspondente e encaminha o atendimento ao WhatsApp. */
  function handleSubmit(event: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const readFormValue = (field: string) => {
      const value = formData.get(field);
      return typeof value === 'string' ? value.trim() : '';
    };
    const name = readFormValue('name');
    const phone = readFormValue('phone');
    const people = readFormValue('people');
    const question = readFormValue('question');

    const message =
      reason === 'reservation'
        ? [
            'Olá! Gostaria de reservar uma mesa no Chico do Peixe Santa Inês.',
            `Nome: ${name}`,
            `Telefone: ${phone}`,
            `Quantidade de pessoas: ${people}`,
          ].join('\n')
        : [
            'Olá! Gostaria de tirar uma dúvida com o Chico do Peixe Santa Inês.',
            `Nome: ${name}`,
            `Telefone: ${phone}`,
            `Dúvida: ${question}`,
          ].join('\n');

    const whatsappUrl = `https://wa.me/${site.whatsapp.replace('+', '')}?text=${encodeURIComponent(message)}`;

    /* Registra a conversão apenas quando o visitante já aceitou o Analytics. */
    window.gtag?.('event', reason === 'reservation' ? 'reservation_click' : 'contact_question_click', {
      link_url: whatsappUrl,
    });

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    /* Limpa todos os campos e restaura a opção inicial para o próximo contato. */
    event.currentTarget.reset();
    setReason('reservation');
    setShowFeedback(true);

    if (detailsRef.current) detailsRef.current.open = false;
  }

  return (
    <>
      <details ref={detailsRef} className={`reservation-menu ${className}`.trim()}>
        {/* Botão vermelho exibido no cabeçalho. */}
        <summary className="reservation-trigger">
          Reservar mesa
          <ChevronDown aria-hidden="true" />
        </summary>

        {/* Formulário contextual: reserva ou dúvida. */}
        <div className="reservation-panel">
          <header>
            <span>Atendimento pelo WhatsApp</span>
            <h2>Como podemos ajudar?</h2>
            <p>Preencha os dados e enviaremos a mensagem pronta para o Chico.</p>
          </header>

          <form onSubmit={handleSubmit}>
            <label htmlFor={`${fieldId}-name`}>
              Nome
              <input
                id={`${fieldId}-name`}
                name="name"
                type="text"
                autoComplete="name"
                minLength={2}
                required
              />
            </label>

            <label htmlFor={`${fieldId}-phone`}>
              Telefone
              <input
                id={`${fieldId}-phone`}
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="(31) 99999-9999"
                minLength={8}
                required
              />
            </label>

            <label htmlFor={`${fieldId}-reason`}>
              Assunto
              <select
                id={`${fieldId}-reason`}
                name="reason"
                value={reason}
                onChange={(event) => setReason(event.target.value as ContactReason)}
              >
                <option value="reservation">Reservar mesa</option>
                <option value="question">Tirar dúvidas</option>
              </select>
            </label>

            {reason === 'reservation' ? (
              <label htmlFor={`${fieldId}-people`}>
                Quantidade de pessoas
                <select id={`${fieldId}-people`} name="people" required>
                  {Array.from({ length: 8 }, (_, index) => index + 1).map((amount) => (
                    <option key={amount} value={amount}>
                      {amount} {amount === 1 ? 'pessoa' : 'pessoas'}
                    </option>
                  ))}
                  <option value="Mais de 15 pessoas">Mais de 15 pessoas</option>
                </select>
              </label>
            ) : (
              <label htmlFor={`${fieldId}-question`}>
                Digite sua dúvida
                <textarea
                  id={`${fieldId}-question`}
                  name="question"
                  rows={4}
                  minLength={3}
                  required
                />
              </label>
            )}

            <button className="reservation-submit" type="submit">
              <MessageCircle aria-hidden="true" />
              Enviar pelo WhatsApp
            </button>
          </form>
        </div>
      </details>

      {/* Confirmação exibida ao voltar do WhatsApp; no celular assume formato de pop-up. */}
      {showFeedback && (
        <output className="reservation-feedback-layer" aria-live="polite">
          <div className="reservation-feedback">
            <button
              className="reservation-feedback-close"
              type="button"
              aria-label="Fechar mensagem"
              onClick={() => setShowFeedback(false)}
            >
              <X aria-hidden="true" />
            </button>
            <CheckCircle2 className="reservation-feedback-icon" aria-hidden="true" />
            <span>Mensagem direcionada ao WhatsApp</span>
            <h2>Obrigado pelo contato!</h2>
            <p>
              Sua mensagem foi preparada no WhatsApp. Toque em <strong>Enviar</strong> para
              concluir.
            </p>
            <button
              className="reservation-feedback-action"
              type="button"
              onClick={() => setShowFeedback(false)}
            >
              Entendi
            </button>
          </div>
        </output>
      )}
    </>
  );
}
