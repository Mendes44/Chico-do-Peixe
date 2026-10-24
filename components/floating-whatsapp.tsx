'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { site } from '@/content/site';
/* O contato aparece somente após o visitante avançar pela página. */
export function FloatingWhatsapp() {
  const [visible, setVisible] = useState(false);
  /* Observa a rolagem e remove o ouvinte quando o componente é desmontado. */
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 420);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return (
    /* Início: atalho flutuante de atendimento. */
    <a
      className={`floating-whatsapp ${visible ? 'visible' : ''}`}
      href={`https://wa.me/${site.whatsapp.replace('+', '')}?text=Ol%C3%A1%2C%20quero%20falar%20com%20o%20Chico%20do%20Peixe%20Santa%20In%C3%AAs`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
    >
      <Image src="/images/whatsapp.webp" alt="" width="28" height="28" />
      <span>Fale com o Chico</span>
    </a>
  );
}
