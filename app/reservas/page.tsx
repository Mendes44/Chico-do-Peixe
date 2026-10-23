import type { Metadata } from 'next';
import { PlanejarVisita } from '@/components/planejar-visita';
import { createPageMetadata } from '@/lib/seo';
export const metadata: Metadata = createPageMetadata({
  title: 'Reservas e encontros',
  description:
    'Combine sua visita ao Chico do Peixe Santa Inês pelo WhatsApp. Consulte reservas, disponibilidade e condições com a equipe.',
  path: '/reservas',
  image: '/santaines/images/atualizadas/petiscos-instagram.webp',
});
export default function Reservas() {
  return (
    <main>
      <header className="limite titulo-pagina">
        <p className="sobretitulo">O seu encontro merece Chico</p>
        <h1>
          Tem gente querida
          <br />
          <em>para reunir?</em>
        </h1>
        <p>
          Converse com a equipe sobre a data, o tamanho da sua turma e as
          condições da reserva. A confirmação é feita pelo atendimento.
        </p>
      </header>
      <PlanejarVisita />
    </main>
  );
}
