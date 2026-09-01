'use client';

import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Quote,
  Star,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { reviews } from '@/content/site';

export function TestimonialsCarousel() {
  /* Guarda o depoimento atual e pausa a troca durante a interação. */
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  /* Avança sozinho, mas respeita quem prefere reduzir animações e pausa durante a interação. */
  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
      return;
    const timer = window.setInterval(
      () => setCurrent((item) => (item + 1) % reviews.length),
      4800,
    );
    return () => window.clearInterval(timer);
  }, [paused]);

  const show = (index: number) =>
    setCurrent((index + reviews.length) % reviews.length);

  return (
    /* Início: apresentação e palco dos depoimentos editoriais. */
    <section className="testimonials" aria-labelledby="testimonials-title">
      <div className="container testimonials-grid">
        <div className="testimonials-heading">
          <p className="eyebrow">Do balcão para a mesa</p>
          <h2 id="testimonials-title">
            O tipo de experiência que vira assunto.
          </h2>
          <p>
            Avaliações públicas de clientes que escolheram o Chico para reunir
            família e amigos ao redor da mesa.
          </p>
        </div>
        <div className="testimonial-stage">
          <Quote className="quote-icon" aria-hidden="true" />
          <div className="testimonial-stars">
            <span className="sr-only">
              {reviews[current].rating} de 5 estrelas
            </span>
            {Array.from({ length: reviews[current].rating }).map((_, index) => (
              <Star key={index} fill="currentColor" aria-hidden="true" />
            ))}
          </div>
          <div className="testimonial-copy" aria-live="polite" key={current}>
            <h3>{reviews[current].author}</h3>
            <blockquote>“{reviews[current].text}”</blockquote>
            <a
              href={reviews[current].sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Avaliação publicada no {reviews[current].source}
            </a>
          </div>
          {/* Início: seleção direta e setas de navegação. */}
          <div className="testimonial-controls">
            <div className="testimonial-dots" aria-label="Escolher comentário">
              {reviews.map((item, index) => (
                <button
                  key={item.author}
                  className={index === current ? 'active' : ''}
                  onClick={() => show(index)}
                  aria-label={`Mostrar comentário ${index + 1}`}
                  aria-current={index === current ? 'true' : undefined}
                />
              ))}
            </div>
            <div className="testimonial-arrows">
              <button
                onClick={() => show(current - 1)}
                aria-label="Comentário anterior"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={() => show(current + 1)}
                aria-label="Próximo comentário"
              >
                <ChevronRight />
              </button>
              <button
                onClick={() => setPaused((value) => !value)}
                aria-label={paused ? 'Retomar avaliações' : 'Pausar avaliações'}
                aria-pressed={paused}
              >
                {paused ? <Play /> : <Pause />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
