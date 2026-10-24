'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Pause, Play } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { galleryPhotos } from '@/content/site';

/* Fotos reais do restaurante usadas na vitrine da página inicial. */
const moments = galleryPhotos.slice(0, 6);

export function MomentsCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  /*
   * No celular a troca acontece a cada 1,2 segundo, conforme solicitado.
   * No desktop o intervalo é maior para permitir observar as três fotos.
   */
  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
      return;

    const mobile = window.matchMedia('(max-width: 560px)').matches;
    const timer = window.setInterval(
      () => setCurrent((value) => (value + 1) % moments.length),
      mobile ? 1200 : 4000,
    );

    return () => window.clearInterval(timer);
  }, [paused]);

  const move = (step: number) => {
    setCurrent((value) => (value + step + moments.length) % moments.length);
  };

  const visibleMoments = [0, 1, 2].map(
    (offset) => moments[(current + offset) % moments.length],
  );

  return (
    /* Início: carrossel de fotos reais de clientes e ambientes. */
    <div
      className="moments-carousel"
      aria-roledescription="carrossel"
      aria-label="Momentos no Chico do Peixe"
    >
      <button
        className="moments-arrow previous"
        onClick={() => move(-1)}
        aria-label="Fotos anteriores"
      >
        <ChevronLeft />
      </button>

      {/* Início: trilha com três fotos; o CSS mantém uma no celular. */}
      <div className="moments-track" aria-live="polite">
        {visibleMoments.map((image, index) => (
          <figure key={`${image}-${current}-${index}`}>
            <Image
              src={`/images/${image}`}
              alt="Clientes e ambientes do Chico do Peixe"
              width="960"
              height="650"
              loading="lazy"
            />
          </figure>
        ))}
      </div>

      <button
        className="moments-arrow next"
        onClick={() => move(1)}
        aria-label="Próximas fotos"
      >
        <ChevronRight />
      </button>
      <button
        className="moments-pause"
        onClick={() => setPaused((value) => !value)}
        aria-label={
          paused ? 'Retomar carrossel de fotos' : 'Pausar carrossel de fotos'
        }
        aria-pressed={paused}
      >
        {paused ? <Play /> : <Pause />}
      </button>
    </div>
  );
}
