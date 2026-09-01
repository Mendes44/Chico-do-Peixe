'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Pause, Play } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { promotions } from '@/content/site';

export function PromotionsCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  /* A rotação automática é ativada somente quando os cards viram carrossel. */
  useEffect(() => {
    if (
      paused ||
      !window.matchMedia('(max-width: 560px)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
      return;

    const timer = window.setInterval(
      () => setCurrent((value) => (value + 1) % promotions.length),
      3500,
    );

    return () => window.clearInterval(timer);
  }, [paused]);

  const move = (step: number) => {
    setCurrent(
      (value) => (value + step + promotions.length) % promotions.length,
    );
  };

  return (
    /* Início: cards promocionais e seus controles móveis. */
    <div
      className="promotions-carousel"
      aria-roledescription="carrossel"
      aria-label="Promoções do Chico do Peixe"
    >
      <div className="promo-grid" aria-live="polite">
        {promotions.map((promotion, index) => (
          <article
            className={`promo-card${index === current ? ' active' : ''}`}
            key={promotion.title}
          >
            <Image
              src={promotion.image}
              alt={promotion.title}
              width="369"
              height="269"
              loading="lazy"
            />
            <div>
              <h3>{promotion.title}</h3>
              <p>{promotion.text}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Início: navegação manual exibida apenas no modo carrossel. */}
      <div className="promo-controls">
        <button onClick={() => move(-1)} aria-label="Promoção anterior">
          <ChevronLeft />
        </button>
        <span>
          {current + 1} / {promotions.length}
        </span>
        <button onClick={() => move(1)} aria-label="Próxima promoção">
          <ChevronRight />
        </button>
        <button
          onClick={() => setPaused((value) => !value)}
          aria-label={paused ? 'Retomar promoções' : 'Pausar promoções'}
          aria-pressed={paused}
        >
          {paused ? <Play /> : <Pause />}
        </button>
      </div>
    </div>
  );
}
