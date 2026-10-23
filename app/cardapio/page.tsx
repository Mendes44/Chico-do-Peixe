import type { Metadata } from 'next';
import Imagem from 'next/image';
import { ArrowUpRight as SetaExterna } from 'lucide-react';
import { contatoCardapio, experienciasDaCasa } from '@/content/experiencia';
import { createPageMetadata } from '@/lib/seo';
export const metadata: Metadata = createPageMetadata({
  title: 'Cardápio, almoço e petiscos',
  description:
    'Self-service de segunda a sábado no almoço, peixes, petiscos e nova adega. Consulte o cardápio atualizado do Chico do Peixe Santa Inês.',
  path: '/cardapio',
  image: '/santaines/images/atualizadas/petiscos-instagram.webp',
});
export default function Cardapio() {
  return (
    <main>
      <header className="limite titulo-pagina">
        <p className="sobretitulo">Para abrir o apetite</p>
        <h1>
          Sua fome encontra
          <br />
          <em>um bom motivo para ficar.</em>
        </h1>
        <p>
          Do prato que você monta no almoço à porção que reúne a turma. Conheça
          os sabores da casa e peça à equipe o cardápio atualizado.
        </p>
      </header>
      <section className="limite grade-sabores" aria-label="Sabores da casa">
        {experienciasDaCasa.map((experiencia) => (
          <article className="cartao-sabor" key={experiencia.numero}>
            <div className="foto-sabor">
              <Imagem
                src={experiencia.imagem}
                alt={experiencia.alternativa}
                fill
                sizes="(min-width: 900px) 30vw, 90vw"
              />
              <span>{experiencia.categoria}</span>
            </div>
            <div className="legenda-sabor">
              <h2>{experiencia.titulo}</h2>
            </div>
            <p>{experiencia.descricao}</p>
          </article>
        ))}
      </section>
      <section className="limite secao">
        <div className="chamada-cardapio">
          <h2>Já deu vontade de pedir?</h2>
          <p>
            Converse com a equipe para receber o cardápio, consultar valores e
            escolher o seu favorito.
          </p>
          <a
            className="botao botao-verde"
            href={contatoCardapio}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-event="menu_click"
          >
            Receber o cardápio no WhatsApp{' '}
            <SetaExterna size={17} aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
