'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Pause, Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

/*
 * Conteúdo do carrossel principal.
 * As três legendas abaixo reproduzem os textos que eram camadas separadas
 * no slider do site antigo. Os banners de sertanejo e almoço já possuem
 * seus textos gravados na própria imagem e, por isso, não recebem legenda.
 */
const slides = [
  {
    image: '/images/slide-01.webp',
    alt: 'Área externa do Chico do Peixe',
    eyebrow: 'Seja bem vindo ao',
    title: 'Chico do Peixe',
    description: 'O mais saboroso peixe da cidade',
  },
  {
    image: '/images/slide-06.webp',
    alt: 'Almoço com churrasco no Chico do Peixe',
  },
  {
    image: '/images/slide-04.webp',
    alt: 'Chopp Itaipava gelado',
    eyebrow: 'Cerveja',
    title: 'Super Gelada',
    description: 'Conheça nossa variedade',
    button: 'Cardápio',
  },
  {
    image: '/images/slide-03.webp',
    alt: 'Peixe e porção de fritas',
    title: 'Fritas e Peixes deliciosos',
    description: 'Conheça nossa variedade',
    button: 'Cardápio',
  },
  {
    image: '/images/slide-05.webp',
    alt: 'Sertanejo ao vivo no Chico do Peixe',
  },
];

/* Releitura responsiva do carrossel principal do site original. */
export function LegacyHeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[current];

  /* Avança automaticamente, respeitando a preferência por menos animações. */
  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
      return;

    const timer = window.setInterval(
      () => setCurrent((value) => (value + 1) % slides.length),
      4500,
    );

    return () => window.clearInterval(timer);
  }, [paused]);

  const move = (step: number) => {
    setCurrent((current + step + slides.length) % slides.length);
  };

  return (
    /* Início: imagem, legenda e navegação do destaque principal. */
    <section className="legacy-slider" aria-label="Destaques do Chico do Peixe">
      <Image
        src={slide.image}
        alt={slide.alt}
        width="1600"
        height="650"
        fetchPriority="high"
        key={slide.image}
      />

      {/* As legendas continuam em HTML para permanecerem legíveis e responsivas. */}
      {slide.title && (
        <div className="legacy-slide-caption" key={`caption-${slide.image}`}>
          {slide.eyebrow && <p className="slide-eyebrow">{slide.eyebrow}</p>}
          <h2>{slide.title}</h2>
          {slide.description && (
            <p className="slide-description">{slide.description}</p>
          )}
          {slide.button && (
            <Link className="slide-button" href="/cardapio">
              {slide.button}
            </Link>
          )}
        </div>
      )}

      {/* Início: setas para navegação manual. */}
      <button
        className="slider-arrow prev"
        onClick={() => move(-1)}
        aria-label="Imagem anterior"
      >
        <ChevronLeft />
      </button>
      <button
        className="slider-arrow next"
        onClick={() => move(1)}
        aria-label="Próxima imagem"
      >
        <ChevronRight />
      </button>

      {/* Início: indicadores que permitem selecionar qualquer banner. */}
      <div className="slider-dots" aria-label="Escolher destaque">
        {slides.map((item, index) => (
          <button
            key={item.image}
            className={index === current ? 'active' : ''}
            onClick={() => setCurrent(index)}
            aria-label={`Mostrar imagem ${index + 1}`}
            aria-current={index === current ? 'true' : undefined}
          />
        ))}
        <button
          className="slider-pause"
          onClick={() => setPaused((value) => !value)}
          aria-label={
            paused ? 'Retomar rotação automática' : 'Pausar rotação automática'
          }
          aria-pressed={paused}
        >
          {paused ? <Play /> : <Pause />}
        </button>
      </div>
    </section>
  );
}
