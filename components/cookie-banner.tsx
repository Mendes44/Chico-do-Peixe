'use client';
import Link from 'next/link';
import { useSyncExternalStore } from 'react';
const chaveConsentimento = 'chico-cookie-consent';
function lerConsentimento() {
  try {
    return localStorage.getItem(chaveConsentimento);
  } catch {
    return null;
  }
}
function acompanharConsentimento(atualizar: () => void) {
  window.addEventListener('cookie-consent', atualizar);
  window.addEventListener('storage', atualizar);
  return () => {
    window.removeEventListener('cookie-consent', atualizar);
    window.removeEventListener('storage', atualizar);
  };
}
export function PreferenciasCookies() {
  const consentimento = useSyncExternalStore(
    acompanharConsentimento,
    lerConsentimento,
    () => 'pending',
  );
  function escolherPreferencia(valor: 'accepted' | 'essential') {
    try {
      localStorage.setItem(chaveConsentimento, valor);
      window.dispatchEvent(
        new CustomEvent('cookie-consent', { detail: valor }),
      );
    } catch {
      /* Sem armazenamento, a medição permanece desativada. */
    }
  }
  if (!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || consentimento !== null)
    return null;
  return (
    <aside
      className="preferencias-cookies"
      aria-label="Preferências de cookies"
    >
      <strong>Seu encontro com o Chico começa com privacidade.</strong>
      <p>
        Com sua permissão, usamos medição de visitas para melhorar o site. Você
        pode continuar apenas com o essencial.
      </p>
      <Link href="/privacidade">Conheça a política de privacidade</Link>
      <div className="acoes-cookies">
        <button
          type="button"
          className="botao botao-contorno"
          onClick={() => escolherPreferencia('essential')}
        >
          Só essenciais
        </button>
        <button
          type="button"
          className="botao botao-verde"
          onClick={() => escolherPreferencia('accepted')}
        >
          Permitir medição
        </button>
      </div>
    </aside>
  );
}
