import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { attractions, site } from '@/content/site';
import { createPageMetadata } from '@/lib/seo';

const description =
  'Almoço, sertanejo, happy hour, aniversário e futebol no Chico do Peixe Santa Inês.';

export const metadata: Metadata = createPageMetadata({
  title: 'Atrações e promoções',
  description,
  path: '/atracoes',
  image: '/images/slide-05.webp',
});
export default function AttractionsPage() {
  return (
    <main>
      {/* Início: cabeçalho visual da agenda e das promoções. */}
      <section className="internal-hero attractions-hero">
        <div className="container">
          <p className="eyebrow light">Agenda do Chico</p>
          <h1>
            Comida boa é só
            <br />o começo.
          </h1>
          <p>
            Almoço, música, futebol e comemorações para transformar qualquer
            encontro em um bom motivo para ficar mais.
          </p>
        </div>
      </section>

      {/* Início: lista alternada de atrações, horários e chamadas de contato. */}
      <section className="section">
        <div className="container attraction-list">
          {attractions.map((item, index) => (
            /* Cada item preserva sua própria imagem, enquadramento e mensagem. */
            <article key={item.title} className="attraction-detail">
              <Image
                src={item.image}
                alt={item.title}
                width="900"
                height="900"
                loading="lazy"
                style={{ objectPosition: item.position }}
              />
              <div>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p className="eyebrow">{item.tag}</p>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <a
                  className="text-link"
                  href={`https://wa.me/${site.whatsapp.replace('+', '')}?text=${encodeURIComponent(`Olá, quero saber mais sobre ${item.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultar programação <ArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
