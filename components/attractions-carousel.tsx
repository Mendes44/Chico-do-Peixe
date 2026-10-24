'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
/* Carrossel com as cinco imagens originais do site antigo. */
const attractions = [
  {
    title: 'Uma casa cheia de bons encontros.',
    kicker: 'Chico do Peixe Santa Inês',
    badge: 'Venha para o Chico',
    text: 'Área externa movimentada, ambiente familiar e aquela mesa que sempre cabe mais um.',
    image: '/images/slide-01.webp',
    position: 'center',
    href: '/sobre',
    link: 'Conhecer o Chico',
  },
  {
    title: 'Sertanejo, porção e mesa cheia.',
    kicker: 'Música ao vivo',
    badge: 'Terças e quintas',
    text: 'Sertanejo ao vivo a partir das 20h, com os clássicos da casa e a bebida sempre gelada.',
    image: '/images/slide-05.webp',
    position: 'center',
    href: '/atracoes',
    link: 'Ver programação',
  },
  {
    title: 'Do peixe crocante ao almoço completo.',
    kicker: 'Da cozinha para sua mesa',
    badge: 'Almoço todos os dias',
    text: 'Buffet com peixes, churrasco, massas, saladas e acompanhamentos para montar o prato do seu jeito.',
    image: '/images/slide-06.webp',
    position: 'right center',
    href: '/cardapio',
    link: 'Explorar sabores',
  },
  {
    title: 'O brinde chega sempre gelado.',
    kicker: 'Happy hour no Chico',
    badge: 'Itaipava no Chico',
    text: 'O acompanhamento ideal para dividir porções, colocar a conversa em dia e aproveitar sem pressa.',
    image: '/images/atracao-itaipava.webp',
    position: 'center',
    href: '/atracoes',
    link: 'Saiba mais',
  },
  {
    title: 'Porções feitas para compartilhar.',
    kicker: 'Clássicos da casa',
    badge: 'Peixe e acompanhamentos',
    text: 'Peixe crocante, fritas generosas e sabores que transformam qualquer encontro em uma boa mesa.',
    image: '/images/slide-03.webp',
    position: 'center',
    href: '/cardapio',
    link: 'Ver cardápio',
  },
];
export function AttractionsCarousel() {
  /* Guarda o item atual e pausa a rotação durante a interação. */
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
      return;
    const timer = window.setInterval(
      () => setCurrent((value) => (value + 1) % attractions.length),
      4000,
    );
    return () => window.clearInterval(timer);
  }, [paused]);
  const show = (step: number) =>
    setCurrent((current + step + attractions.length) % attractions.length);
  const item = attractions[current];
  return (
    /* Início: carrossel editorial de gastronomia e atrações. */
    <section
      className="food-story food-carousel"
      aria-label="Gastronomia e atrações"
    >
      <div
        className="container food-story-grid"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <div className="food-photo">
          <Image
            src={item.image}
            alt=""
            width="1700"
            height="714"
            loading="lazy"
            key={item.image}
            style={{ objectPosition: item.position }}
          />
          <span>{item.badge}</span>
        </div>
        <div className="food-carousel-copy" aria-live="polite" key={item.title}>
          <p className="eyebrow">{item.kicker}</p>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
          <Link className="text-link" href={item.href}>
            {item.link}
            <ArrowRight size={18} />
          </Link>
        </div>
        {/* Início: setas e indicadores do item selecionado. */}
        <div className="food-carousel-controls">
          <button onClick={() => show(-1)} aria-label="Item anterior">
            <ChevronLeft />
          </button>
          <div>
            {attractions.map((entry, index) => (
              <button
                key={entry.title}
                className={index === current ? 'active' : ''}
                onClick={() => setCurrent(index)}
                aria-label={`Mostrar item ${index + 1}`}
                aria-current={index === current ? 'true' : undefined}
              />
            ))}
          </div>
          <button onClick={() => show(1)} aria-label="Próximo item">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
