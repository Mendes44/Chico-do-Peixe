'use client';
import Link from 'next/link';
import { useSyncExternalStore } from 'react';

const consentKey = 'chico-cookie-consent';

function readConsent() {
  return localStorage.getItem(consentKey);
}

function subscribe(callback: () => void) {
  window.addEventListener('cookie-consent', callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener('cookie-consent', callback);
    window.removeEventListener('storage', callback);
  };
}

/* Analytics só deve escutar o evento abaixo quando a escolha for “accepted”. */
export function CookieBanner() {
  /* O armazenamento externo evita atualizações síncronas dentro de efeitos. */
  const consent = useSyncExternalStore(subscribe, readConsent, () => 'pending');

  const choose = (value: 'accepted' | 'essential') => {
    localStorage.setItem(consentKey, value);
    window.dispatchEvent(new CustomEvent('cookie-consent', { detail: value }));
  };

  if (consent !== null) return null;
  return (
    /* Início: aviso LGPD e controles de consentimento. */
    <aside className="cookie-banner" aria-label="Preferências de cookies">
      <div>
        <strong>Sua privacidade importa</strong>
        <p>
          Usamos cookies essenciais. Com sua permissão, também podemos medir
          visitas para melhorar o site.
        </p>
        <Link href="/privacidade">Saiba mais</Link>
      </div>
      {/* Início: escolhas entre cookies essenciais e medição consentida. */}
      <div className="cookie-actions">
        <button
          className="button button-ghost"
          onClick={() => choose('essential')}
        >
          Só essenciais
        </button>
        <button
          className="button button-primary"
          onClick={() => choose('accepted')}
        >
          Aceitar
        </button>
      </div>
    </aside>
  );
}
