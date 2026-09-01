'use client';

import Script from 'next/script';
import { useSyncExternalStore } from 'react';

type Consent = 'accepted' | 'essential' | null;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const consentKey = 'chico-cookie-consent';

function readConsent(): Consent {
  const value = localStorage.getItem(consentKey);
  return value === 'accepted' || value === 'essential' ? value : null;
}

function subscribe(callback: () => void) {
  window.addEventListener('cookie-consent', callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener('cookie-consent', callback);
    window.removeEventListener('storage', callback);
  };
}

/* Carrega o GA4 somente depois do consentimento explícito do visitante. */
export function Analytics() {
  const consent = useSyncExternalStore(subscribe, readConsent, () => null);
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!measurementId || consent !== 'accepted') return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-consent-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', { analytics_storage: 'denied' });
          gtag('consent', 'update', { analytics_storage: 'granted' });
          gtag('js', new Date());
          gtag('config', '${measurementId}', { anonymize_ip: true });

          document.addEventListener('click', function (event) {
            var link = event.target.closest('a');
            if (!link) return;
            var href = link.href || '';
            var eventName = '';
            if (href.includes('wa.me')) eventName = link.dataset.analyticsEvent || 'whatsapp_click';
            else if (href.includes('ifood.com.br')) eventName = 'ifood_click';
            else if (href.includes('google.com/maps')) eventName = 'map_click';
            if (eventName) gtag('event', eventName, { link_url: href });
          });
        `}
      </Script>
    </>
  );
}
