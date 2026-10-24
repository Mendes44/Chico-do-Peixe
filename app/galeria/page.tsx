import type { Metadata } from 'next';
import Imagem from 'next/image';
import { fotografiasGaleria } from '@/content/experiencia';
import { createPageMetadata } from '@/lib/seo';
export const metadata: Metadata = createPageMetadata({
  title: 'Fotos do buffet, petiscos e adega',
  description:
    'Conheça os sabores e o ambiente do Chico do Peixe Santa Inês em fotos reais da casa.',
  path: '/galeria',
  image: '/images/atualizadas/petiscos-instagram.webp',
});
export default function Galeria() {
  return (
    <main>
      <header className="limite titulo-pagina">
        <p className="sobretitulo">Um gostinho da casa</p>
        <h1>
          Conheça os sabores e os espaços <em>que esperam por você.</em>
        </h1>
        <p>
          Percorra as fotos dos pratos, das bebidas e dos ambientes para
          descobrir como será o seu próximo encontro no Chico do Peixe Santa
          Inês.
        </p>
      </header>
      <section
        className="limite grade-galeria"
        aria-label="Fotos do restaurante"
      >
        {fotografiasGaleria.map((foto) => (
          <figure key={foto.imagem}>
            <Imagem
              src={foto.imagem}
              alt={foto.descricao}
              width={960}
              height={1280}
              sizes="(min-width: 900px) 30vw, (min-width: 600px) 45vw, 90vw"
            />
            <figcaption>{foto.descricao}</figcaption>
          </figure>
        ))}
      </section>
    </main>
  );
}
