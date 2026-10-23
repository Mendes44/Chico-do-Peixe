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
          Escolha a companhia. A gente ajuda com o endereço, os horários e os
          detalhes da sua visita.
        </p>
      </header>
      <PlanejarVisita />
    </main>
  );
}
