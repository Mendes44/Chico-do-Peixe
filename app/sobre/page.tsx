import type { Metadata } from 'next';
import Image from 'next/image';
import { Heart, Users, Utensils } from 'lucide-react';
import { createPageMetadata } from '@/lib/seo';

const description =
  'Conheça a trajetória do Chico do Peixe, iniciada em 1994 em Belo Horizonte.';

export const metadata: Metadata = createPageMetadata({
  title: 'Nossa história',
  description,
  path: '/sobre',
  image: '/images/slide-01.webp',
});

/* Imagens exibidas na seção de memórias da história do restaurante. */
const gallery = [
  'slide-01.webp',
  'ambiente.webp',
  'playground.webp',
  'real-4gde.webp',
];
export default function AboutPage() {
  return (
    <main>
      {/* Início: cabeçalho da página institucional. */}
      <section className="internal-hero history-hero">
        <div className="container">
          <p className="eyebrow light">Desde 1994</p>
          <h1>
            Uma história temperada
            <br />
            do jeito do Chico.
          </h1>
          <p>
            De um pequeno balcão na Rua Pitangui para se tornar referência entre
            os bares e restaurantes de Belo Horizonte.
          </p>
        </div>
      </section>

      {/* Início: narrativa da fundação e valores do Chico do Peixe. */}
      <section className="section history-story">
        <div className="container story-layout">
          <div className="story-photo">
            <Image
              src="/images/real-6gde.webp"
              alt="Fachada do restaurante Chico do Peixe com clientes"
              width="960"
              height="540"
            />
          </div>
          <div>
            <p className="eyebrow">Tudo começou simples</p>
            <h2>Um peixe, um tempero único e muita vontade de receber bem.</h2>
            <p>
              A trajetória começou em 1994, em um pequeno espaço na Rua
              Pitangui, no bairro Concórdia. Primeiro vieram os tira-gostos.
              Depois, José Francisco — o Chico — colocou no balcão peixes fritos
              preparados com seu tempero próprio.
            </p>
            <p>
              O sabor conquistou clientes de toda Belo Horizonte e cidades
              vizinhas. A casa cresceu, ganhou novas unidades e manteve o que
              sempre importou: produto bem feito, ambiente familiar, atendimento
              acolhedor e cerveja gelada.
            </p>
            <div className="history-values">
              <span>
                <Utensils />
                Qualidade à mesa
              </span>
              <span>
                <Users />
                Ambiente familiar
              </span>
              <span>
                <Heart />
                Carinho no atendimento
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Início: galeria histórica da unidade e de seus clientes. */}
      <section className="history-gallery">
        <div className="container">
          <div className="catalog-intro">
            <p className="eyebrow light">Memórias da casa</p>
            <h2>Gente, encontros e muito sabor.</h2>
          </div>
          <div className="gallery-grid">
            {gallery.map((image) => (
              <Image
                key={image}
                src={`/images/${image}`}
                alt="Momentos da história do Chico do Peixe"
                width="1500"
                height="800"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
