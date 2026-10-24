import type { Metadata } from 'next';
import Imagem from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight as SetaExterna,
  ArrowRight as SetaDireita,
  Wine as Vinho,
  Music2 as Musica,
  Bike as Entrega,
} from 'lucide-react';
import { CarrosselAbertura } from '@/components/carrossel-abertura';
import { PlanejarVisita } from '@/components/planejar-visita';
import { BotaoModal } from '@/components/contexto-modais';
import { DestaquesDaCasa } from '@/components/destaques-da-casa';
import { AvaliacoesGoogle } from '@/components/avaliacoes-google';
import { site } from '@/content/site';
import { experienciasDaCasa } from '@/content/experiencia';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Peixes, almoço e bons encontros em Santa Inês',
  description: site.description,
  path: '/',
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
            encontros em Santa Inês
          </p>
          <h1 id="titulo-principal">
            O sabor de estar junto <em>começa no Chico.</em>
          </h1>
          <p className="apresentacao">
            Entre peixes, porções e brindes, sempre há um motivo para reunir
            quem você gosta. Venha aproveitar uma mesa acolhedora em Santa Inês
            e fazer do seu almoço ou da sua noite um encontro para guardar.
          </p>
          <div className="acoes-abertura">
            <BotaoModal acao="reserva" className="botao botao-verde">
              Planejar minha visita
              <SetaExterna aria-hidden="true" size={17} />
            </BotaoModal>
            <BotaoModal
              acao="cardapio"
              className="ligacao-texto"
              data-analytics-event="menu_click"
            >
              Explorar o cardápio
              <SetaDireita aria-hidden="true" size={17} />
            </BotaoModal>
          </div>
          <div className="assinatura-abertura">
            <span className="selo-tradicao" aria-label="Desde 1994">
              <span>DESDE</span>
              <strong>1994</strong>
            </span>
            <p>
              Uma história de sabor em Belo Horizonte,
              <br />
              <strong>com espaço para os seus melhores momentos.</strong>
            </p>
          </div>
        </div>
        <CarrosselAbertura />
      </section>
      <div className="faixa-sabores" aria-label="Experiências no Chico">
        <div className="limite">
          <span>Peixes e porções para compartilhar</span>
          <span aria-hidden="true">✳</span>
          <span>Almoço com sabor de casa</span>
          <span aria-hidden="true">✳</span>
          <span>Vinhos e bons encontros</span>
        </div>
      </div>
      <section
        className="secao limite"
        id="sabores"
        aria-labelledby="titulo-sabores"
      >
        <div className="titulo-secao">
          <div>
            <p className="sobretitulo">Da primeira escolha ao último brinde</p>
            <h2 id="titulo-sabores">
              Encontre o sabor que combina <em>com o seu momento.</em>
            </h2>
          </div>
          <BotaoModal
            acao="cardapio"
            className="ligacao-texto"
            data-analytics-event="menu_click"
          >
            Conheça o cardápio
            <SetaExterna size={17} aria-hidden="true" />
          </BotaoModal>
        </div>
        <div className="grade-sabores">
          {experienciasDaCasa.map((experiencia) => (
            <article className="cartao-sabor" key={experiencia.numero}>
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
              </div>
              <p>{experiencia.descricao}</p>
              <BotaoModal
                acao={experiencia.modal}
                className="ligacao-texto botao-cartao-expandido"
                aria-label={`Conhecer ${experiencia.categoria.toLowerCase()}: fotos e informações`}
              >
                {experiencia.modal === 'adega'
                  ? 'Conhecer a nossa adega'
                  : 'Descobrir os sabores'}
                <SetaExterna size={16} aria-hidden="true" />
              </BotaoModal>
            </article>
          ))}
        </div>
        <div className="convite-cardapio">
          <p>
            Do almoço ao encontro que se estende pela noite, esperamos você
            <br />
            <strong>todos os dias, das 11h às 23h.</strong>
          </p>
          <BotaoModal acao="horarios" className="botao botao-contorno">
            Confira os horários
            <SetaExterna size={17} aria-hidden="true" />
          </BotaoModal>
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
              src="/images/atualizadas/salao-chico.webp"
              alt="Ambiente do bar do Chico do Peixe Santa Inês com iluminação acolhedora"
              width={1080}
              height={1440}
              sizes="(min-width: 900px) 45vw, 90vw"
            />
            <span>
              Há encontros que pedem
              <br />
              <em>um pouco mais de tempo.</em>
            </span>
          </div>
          <div className="texto-experiencia">
            <p className="sobretitulo">Um convite para se sentir em casa</p>
            <h2 id="titulo-experiencia">
              A companhia é sua, <em>o cuidado é da casa.</em>
            </h2>
            <p>
              O almoço em família, o reencontro com os amigos e aquela
              comemoração esperada merecem um lugar onde todo mundo se sinta à
              vontade. No Chico, a mesa reúne sabores e histórias que dão
              vontade de voltar.
            </p>
            <p>
              Conheça os ambientes, descubra a adega e escolha o seu jeito de
              aproveitar a casa, seja para uma pausa no dia ou para uma noite
              acompanhada de música e conversa.
            </p>
            <div className="detalhe-experiencia" id="adega">
              <Vinho size={30} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <h3>A adega acrescenta novos sabores ao encontro</h3>
                <p>
                  Descubra rótulos para acompanhar os pratos da casa e peça à
                  equipe uma sugestão para o seu próximo brinde.
                </p>
              </div>
            </div>
            <div className="detalhe-experiencia">
              <Musica size={28} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <h3>A música ao vivo faz parte da semana</h3>
                <p>
                  Às terças e quintas, acompanhe as apresentações e aproveite a
                  programação divulgada no Instagram.
                </p>
              </div>
            </div>
            <a
              className="ligacao-texto"
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Veja o que acontece no Chico
              <SetaExterna size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <DestaquesDaCasa />
      <AvaliacoesGoogle />
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
            Uma tradição que cresce <em>com cada encontro à mesa.</em>
          </h2>
          <p>
            A história da marca começou no bairro Concórdia, com o tempero de
            José Francisco, o Chico. Em Santa Inês, essa hospitalidade continua
            presente no convite para sentar à mesa, compartilhar sabores e criar
            novas lembranças.
          </p>
          <Link className="ligacao-texto" href="/sobre">
            Conheça a nossa história
            <SetaExterna size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section className="delivery limite" aria-labelledby="titulo-delivery">
        <div className="foto-delivery">
          <Imagem
            src="/images/atualizadas/happy-hour-chico.webp"
            alt="Camarões e drink apresentados na divulgação do happy hour do Chico"
            fill
            sizes="(min-width: 900px) 35vw, 90vw"
          />
        </div>
        <div>
          <Entrega size={32} strokeWidth={1.5} aria-hidden="true" />
          <p className="sobretitulo">O Chico também chega até você</p>
          <h2 id="titulo-delivery">
            Quando o encontro for em casa,{' '}
            <em>leve o nosso sabor para a sua mesa.</em>
          </h2>
          <p>
            Encontre a unidade Chico do Peixe Santa Inês no iFood e consulte as
            opções, a área de entrega e o prazo para o seu endereço.
          </p>
          <a
            className="botao botao-verde"
            href={site.ifood}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-event="delivery_click"
          >
            Ver opções no iFood
            <SetaExterna size={17} aria-hidden="true" />
          </a>
        </div>
      </section>
      <PlanejarVisita />
    </main>
  );
}
