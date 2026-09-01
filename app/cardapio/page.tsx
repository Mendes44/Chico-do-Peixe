import type { Metadata } from 'next';
import Image from 'next/image';
import { menuCategories, site } from '@/content/site';
import { createPageMetadata } from '@/lib/seo';

const description =
  'Peixes, moquecas, porções, carnes, acompanhamentos e bebidas do Chico do Peixe Santa Inês.';

export const metadata: Metadata = createPageMetadata({
  title: 'Cardápio',
  description,
  path: '/cardapio',
  image: '/images/menu-peixes.webp',
});
export default function MenuPage() {
  return (
    <main>
      {/* Início: cabeçalho visual da página de cardápio. */}
      <section className="internal-hero menu-hero">
        <div className="container">
          <p className="eyebrow light">Cardápio Chico do Peixe</p>
          <h1>
            Muita variedade.
            <br />
            Um sabor inconfundível.
          </h1>
          <p>
            O cardápio clássico da casa, agora organizado para você encontrar
            seu próximo pedido com facilidade.
          </p>
        </div>
      </section>

      {/* Início: catálogo organizado por categoria. */}
      <section className="section menu-catalog">
        <div className="container">
          <div className="catalog-intro">
            <p className="eyebrow">Escolha por categoria</p>
            <h2>Da porção ao prato completo.</h2>
            <p>
              Itens baseados no cardápio divulgado pela unidade. Consulte
              valores, tamanhos e disponibilidade no atendimento.
            </p>
          </div>
          <div className="catalog-grid">
            {/* Cada grupo gera um cartão com imagem, título e lista de itens. */}
            {menuCategories.map((group) => (
              <article className="catalog-card" key={group.title}>
                <Image
                  src={group.image}
                  alt={`Categoria ${group.title}`}
                  width="1600"
                  height="650"
                  loading="lazy"
                  style={{ objectPosition: group.position }}
                />
                <div>
                  <h2>{group.title}</h2>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          {/* Chamada final para consultar preços e disponibilidade. */}
          <div className="menu-contact">
            <h2>Quer preços e disponibilidade agora?</h2>
            <a
              className="button button-red"
              href={`https://wa.me/${site.whatsapp.replace('+', '')}?text=Ol%C3%A1%2C%20quero%20consultar%20o%20card%C3%A1pio%20atualizado`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedir cardápio no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
