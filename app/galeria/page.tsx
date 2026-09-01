import type { Metadata } from 'next';
import Image from 'next/image';
import { galleryPhotos } from '@/content/site';
import { createPageMetadata } from '@/lib/seo';

const description =
  'Fotos de clientes, encontros e ambientes do Chico do Peixe Santa Inês.';

export const metadata: Metadata = createPageMetadata({
  title: 'Galeria',
  description,
  path: '/galeria',
  image: '/images/real-4gde.webp',
});

/* Página com a coleção completa de fotos usadas na vitrine do site. */
export default function GalleryPage() {
  return (
    <main>
      {/* Início: apresentação da galeria. */}
      <section className="internal-hero gallery-page-hero">
        <div className="container">
          <p className="eyebrow light">#EuNoChicoDoPeixeSantaInês</p>
          <h1>Momentos no Chico</h1>
          <p>Encontros, famílias e boas histórias reunidas ao redor da mesa.</p>
        </div>
      </section>

      {/* Início: grade completa de clientes e ambientes do restaurante. */}
      <section className="section gallery-page-section">
        <div className="container full-gallery-grid">
          {galleryPhotos.map((photo, index) => (
            <Image
              key={photo}
              src={`/images/${photo}`}
              alt={`Momento no Chico do Peixe ${index + 1}`}
              width="960"
              height="650"
              loading="lazy"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
