import type { Metadata } from 'next';
import { PlanejarVisita } from '@/components/planejar-visita';
import { createPageMetadata } from '@/lib/seo';
export const metadata: Metadata = createPageMetadata({
  title: 'Endereço, horários e contato',
  description:
    'Rua Contagem, 2165, Santa Inês, Belo Horizonte. Todos os dias, 11h às 23h. Veja a rota, telefone e WhatsApp do Chico do Peixe.',
  path: '/contato',
  image: '/santaines/images/atualizadas/mesa-de-sabores.webp',
});
export default function Contato() {
  return (
    <main>
      <header className="limite titulo-pagina">
        <p className="sobretitulo">Vamos combinar?</p>
        <h1>
          O próximo bom encontro
          <br />
          <em>começa por aqui.</em>
        </h1>
        <p>
          Conte com a equipe para organizar os detalhes da sua visita e encontre
          aqui o endereço, a rota e os horários para aproveitar a casa.
        </p>
      </header>
      <PlanejarVisita />
    </main>
  );
}
