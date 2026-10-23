import type { Metadata } from 'next';
import Imagem from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight as SetaExterna,
  ArrowRight as SetaDireita,
  Wine as Vinho,
  Music2 as Musica,
} from 'lucide-react';
import { CarrosselAbertura } from '@/components/carrossel-abertura';
import { PlanejarVisita } from '@/components/planejar-visita';
import { site } from '@/content/site';
import { contatoReserva, experienciasDaCasa } from '@/content/experiencia';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Peixes, almoço e bons encontros em Santa Inês',
  description: site.description,
  path: '/',
  image: '/santaines/images/atualizadas/buffet-principal.webp',
});
export default function Inicio() {
  return (
    <main className="pagina-inicial">
      <section
        className="abertura limite"
        id="inicio"
        aria-labelledby="titulo-principal"
      >
        <div className="abertura-texto">
          <p className="sobretitulo">
            <span className="ponto" aria-hidden="true" />O sabor dos bons
            encontros
          </p>
          <h1 id="titulo-principal">
            Comida boa.
            <br />
            Gente querida.
            <br />
            <em>Vem pro Chico.</em>
          </h1>
          <p className="apresentacao">
            Um almoço que abraça. Uma porção para dividir. Um brinde que vira
            lembrança. Seu próximo bom encontro é em Santa Inês.
          </p>
          <div className="acoes-abertura">
            <a
              className="botao botao-verde"
              href={site.maps}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event="map_click"
              data-posicao="abertura"
            >
              Quero conhecer <SetaExterna aria-hidden="true" size={17} />
            </a>
            <Link
              className="ligacao-texto"
              href="/cardapio"
              data-analytics-event="menu_click"
            >
              Explorar o cardápio <SetaDireita aria-hidden="true" size={17} />
            </Link>
          </div>
          <div className="assinatura-abertura">
            <span className="selo-tradicao" aria-hidden="true">
              BEM-VINDO
              <br />
              <Vinho size={22} strokeWidth={1.4} />
            </span>
            <p>
              Peixes, petiscos e a nossa nova adega.
              <br />
              <strong>Venha com fome. Fique à vontade.</strong>
            </p>
          </div>
        </div>
        <CarrosselAbertura />
      </section>
      <div className="faixa-sabores" aria-label="Experiências no Chico">
        <div className="limite">
          <span>Peixes & porções</span>
          <span aria-hidden="true">✳</span>
          <span>Almoço com sabor de casa</span>
          <span aria-hidden="true">✳</span>
          <span>Vinhos & bons encontros</span>
        </div>
      </div>
      <section
        className="secao limite"
        id="sabores"
        aria-labelledby="titulo-sabores"
      >
        <div className="titulo-secao">
          <div>
            <p className="sobretitulo">Deu vontade? A mesa está aqui.</p>
            <h2 id="titulo-sabores">
              Tem sabor para cada fome.
              <br />
              <em>E motivo para voltar.</em>
            </h2>
          </div>
          <Link
            className="ligacao-texto"
            href="/cardapio"
            data-analytics-event="menu_click"
          >
            Conheça o cardápio <SetaExterna size={17} aria-hidden="true" />
          </Link>
        </div>
        <div className="grade-sabores">
          {experienciasDaCasa.map((experiencia) => (
            <article className="cartao-sabor" key={experiencia.numero}>
              <Link href={experiencia.destino}>
                <div className="foto-sabor">
                  <Imagem
                    src={experiencia.imagem}
                    alt={experiencia.alternativa}
                    fill
                    sizes="(min-width: 1400px) 410px, (min-width: 900px) 30vw, (min-width: 600px) 45vw, 90vw"
                  />
                  <span>
                    {experiencia.numero} / {experiencia.categoria}
                  </span>
                </div>
                <div className="legenda-sabor">
                  <h3>{experiencia.titulo}</h3>
                  <SetaExterna size={23} aria-hidden="true" />
                </div>
                <p>{experiencia.descricao}</p>
              </Link>
            </article>
          ))}
        </div>
        <div className="convite-cardapio">
          <p>
            Do almoço ao último papo da noite.
            <br />
            <strong>Todos os dias, das 11h às 23h.</strong>
          </p>
          <a
            className="botao botao-contorno"
            href={contatoReserva}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-event="reservation_click"
            data-posicao="sabores"
          >
            Combine sua visita <SetaExterna size={17} aria-hidden="true" />
          </a>
        </div>
      </section>
      <section
        className="experiencia"
        id="experiencia"
        aria-labelledby="titulo-experiencia"
      >
        <div className="limite grade-experiencia">
          <div className="colagem-experiencia">
            <Imagem
              src="/santaines/images/atualizadas/mesa-de-sabores.webp"
              alt="Buffet do Chico do Peixe com saladas e mural verde no ambiente da casa"
              width={960}
              height={1280}
              sizes="(min-width: 900px) 45vw, 90vw"
            />
            <span>
              A conversa fica.
              <br />
              <em>A vontade de voltar também.</em>
            </span>
          </div>
          <div className="texto-experiencia">
            <p className="sobretitulo">Seu lugar de estar junto</p>
            <h2 id="titulo-experiencia">
              A melhor companhia
              <br />
              merece <em>uma boa mesa.</em>
            </h2>
            <p>
              O almoço de família. O reencontro com os amigos. Aquela pausa no
              meio da semana que acaba virando o melhor momento do dia.
            </p>
            <p>
              No Chico do Peixe Santa Inês, cada encontro tem seu ritmo. Venha
              para comer bem, descobrir novos sabores e aproveitar a companhia.
            </p>
            <div className="detalhe-experiencia" id="adega">
              <Vinho size={30} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <h3>Nossa nova adega espera por você</h3>
                <p>
                  Mais um cantinho para descobrir. Mais um motivo para o próximo
                  brinde.
                </p>
              </div>
            </div>
            <div className="detalhe-experiencia">
              <Musica size={28} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <h3>Terça e quinta têm música ao vivo</h3>
                <p>
                  Acompanhe a programação no Instagram e escolha o seu próximo
                  encontro.
                </p>
              </div>
            </div>
            <a
              className="ligacao-texto"
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Veja o que está acontecendo no Chico{' '}
              <SetaExterna size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <section
        className="historia limite secao"
        id="historia"
        aria-labelledby="titulo-historia"
      >
        <div className="historia-marca">
          <span>Uma história que começou em</span>
          <strong>1994</strong>
          <span>Belo Horizonte, Minas Gerais</span>
        </div>
        <div>
          <p className="sobretitulo">O tempero da nossa história</p>
          <h2 id="titulo-historia">
            O sabor abriu as portas.
            <br />
            <em>Os encontros fizeram a casa.</em>
          </h2>
          <p>
            A história da marca começou no bairro Concórdia, com o tempero de
            José Francisco, o Chico. Em Santa Inês, esse convite continua:
            sentar à mesa, comer bem e se sentir em casa.
          </p>
          <Link className="ligacao-texto" href="/sobre">
            Conheça a nossa história{' '}
            <SetaExterna size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <PlanejarVisita />
    </main>
  );
}
