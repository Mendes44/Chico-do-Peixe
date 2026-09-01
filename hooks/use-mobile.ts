import * as React from 'react';

const MOBILE_BREAKPOINT = 768;

function subscribe(callback: () => void) {
  const query = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
  query.addEventListener('change', callback);
  return () => query.removeEventListener('change', callback);
}

function getSnapshot() {
  return window.innerWidth < MOBILE_BREAKPOINT;
}

/* Informa aos componentes quando a janela está abaixo do breakpoint móvel. */
export function useIsMobile() {
  return React.useSyncExternalStore(subscribe, getSnapshot, () => false);
}
