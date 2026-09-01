import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Gamepad2, Wifi } from 'lucide-react';
import { LegacyHeroCarousel } from '@/components/legacy-hero-carousel';
import { MomentsCarousel } from '@/components/moments-carousel';
import { PromotionsCarousel } from '@/components/promotions-carousel';
import { TestimonialsCarousel } from '@/components/testimonials-carousel';
import { homeMenu, site } from '@/content/site';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Bar e restaurante de peixes em Santa Inês',
  description: site.description,
  path: '/',
  image: '/images/slide-01.webp',
});

export default function Home() {
  return (
    <main>
      {/* Início: carrossel principal com os banners do site antigo. */}
      <LegacyHeroCarousel />

      {/* Início: apresentação institucional e acesso à história da marca. */}
      <section className="welcome-section">
        <div className="container welcome-grid">
          <div className="welcome-copy">
            <p className="section-kicker">Bar e restaurante desde 1994</p>
            <h1>Chico do Peixe</h1>
            <p>
              Uma casa feita para reunir pessoas ao redor de peixe bem
              preparado, porções generosas e cerveja gelada. Aqui, cada mesa
              recebe o cuidado e o sabor que transformaram o Chico em tradição
              em Belo Horizonte.
            </p>
            <Link className="legacy-link" href="/sobre">
              Conheça nossa história <ArrowRight />
            </Link>
          </div>
          <div className="welcome-mark">
            <Image
              src="/images/logo-oficial.webp"
              alt="Chico do Peixe"
              width="180"
              height="92"
            />
            <span>Seja bem-vindo!</span>
          </div>
        </div>
      </section>

      {/* Início: promoções; no celular o componente funciona como carrossel. */}
      <section className="promotions-section">
        <div className="container">
          <header className="legacy-heading">
            <span>Tem sempre um motivo</span>
            <h2>Vem para o Chico</h2>
          </header>
          <PromotionsCarousel />
        </div>
      </section>

      {/* Início: comodidades oferecidas pela unidade Santa Inês. */}
      <section className="comfort-section">
        <div className="container">
          <header className="legacy-heading light">
            <span>Comodidades</span>
            <h2>Sinta-se à vontade</h2>
          </header>
          <div className="comfort-grid">
            <article>
              <Wifi />
              <h3>Rede Wi-Fi liberada</h3>
              <p>
                Compartilhe suas fotos e converse com os amigos enquanto
                preparamos seu prato e servimos aquela cerveja gelada.
              </p>
            </article>
            <article>
              <Gamepad2 />
              <h3>Diversão para a garotada</h3>
              <p>
                Enquanto você aproveita com seus amigos, seus filhos também têm
                um espaço preparado para se divertir.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Início: prévia das principais categorias do cardápio. */}
      <section className="legacy-menu-section">
        <div className="container">
          <header className="legacy-heading">
            <span>Variedade de petiscos e bebidas</span>
            <h2>Cardápio</h2>
          </header>
          <div className="legacy-menu-grid">
            {homeMenu.map((item) => (
              <article key={item.title}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width="239"
                  height="156"
                  loading="lazy"
                />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.items}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="center">
            <Link className="button" href="/cardapio">
              Cardápio completo
            </Link>
          </div>
        </div>
      </section>

      {/* Início: chamada para reservas de grupos e comemorações. */}
      <section className="booking-section">
        <div className="container booking-grid">
          <div className="booking-copy">
            <p className="section-kicker light">Reservas</p>
            <h2>Sua próxima comemoração começa aqui.</h2>
            <p>
              Reúna a família, os amigos ou o pessoal do trabalho. Para grupos a
              partir de 10 pessoas, consulte a disponibilidade pelo WhatsApp.
            </p>
            <a
              className="button light-button"
              href={`https://wa.me/${site.whatsapp.replace('+', '')}?text=Ol%C3%A1%2C%20quero%20fazer%20uma%20reserva`}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event="reservation_click"
            >
              Reservar pelo WhatsApp
            </a>
          </div>
          <div className="booking-visual">
            <Image
              src="/images/banner-comemoracao-chico.webp"
              alt="Família comemorando com peixe e acompanhamentos no Chico do Peixe"
              width="1868"
              height="875"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Início: avaliações públicas atribuídas a clientes reais. */}
      <TestimonialsCarousel />

      {/* Início: fotos do restaurante e link para a galeria completa. */}
      <section className="legacy-gallery">
        <div className="container">
          <header className="legacy-heading">
            <span>#EuNoChicoDoPeixeSantaInês</span>
            <h2>Momentos no Chico</h2>
            <p>
              Tire sua foto no Chico, publique nas redes sociais e marque a
              unidade Santa Inês.
            </p>
          </header>
          <MomentsCarousel />
          <div className="center gallery-link">
            <Link className="button" href="/galeria">
              Ver todas as fotos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
