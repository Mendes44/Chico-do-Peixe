import type { Metadata } from 'next';
import { CardapioDigital } from '@/components/cardapio-digital';
import { BotaoModal } from '@/components/contexto-modais';
import { createPageMetadata } from '@/lib/seo';
export const metadata: Metadata = createPageMetadata({
  title: 'Cardápio de peixes, moquecas e porções',
  description:
    'Conheça os peixes, camarões, moquecas, pratos com acompanhamento e porções do Chico do Peixe Santa Inês. Consulte valores com a equipe.',
  path: '/cardapio',
  image: '/santaines/images/atualizadas/camaroes-com-drink.webp',
});
export default function Cardapio() {
  return (
    <main>
      <header className="limite titulo-pagina">
        <p className="sobretitulo">Para abrir o apetite</p>
        <h1>
          Escolha os sabores <em>do seu próximo encontro.</em>
        </h1>
        <p>
          Explore as especialidades da casa por categoria e encontre as opções
          para compartilhar. No almoço, o self-service recebe você de segunda a
          sábado.
        </p>
        <BotaoModal acao="cardapio" className="botao botao-verde">
          Abrir cardápio em tela de leitura
        </BotaoModal>
      </header>
      <section
        className="limite cardapio-na-pagina"
        aria-label="Cardápio digital da casa"
      >
        <CardapioDigital />
      </section>
    </main>
  );
}
