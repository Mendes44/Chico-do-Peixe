import Imagem from 'next/image';
import {
  ArrowUpRight as SetaExterna,
  CakeSlice as Bolo,
  Tv as Televisao,
  Maximize2 as Espaco,
  Clock3 as Relogio,
} from 'lucide-react';
import { BotaoModal } from '@/components/contexto-modais';

export const destaquesInstagram = {
  playground: 'https://www.instagram.com/stories/highlights/17946240580780111/',
  aniversario:
    'https://www.instagram.com/stories/highlights/18016088645088708/',
  ampliacao: 'https://www.instagram.com/stories/highlights/17887951758162849/',
  jogos: 'https://www.instagram.com/stories/highlights/17914935719904657/',
  pratos: 'https://www.instagram.com/stories/highlights/17904561611200887/',
  horarios: 'https://www.instagram.com/stories/highlights/18009775027362872/',
};
export function DestaquesDaCasa() {
  return (
    <section
      className="secao limite destaques-casa"
      id="momentos"
      aria-labelledby="titulo-momentos"
    >
      <div className="titulo-secao">
        <div>
          <p className="sobretitulo">Cada visita pode ter um motivo especial</p>
          <h2 id="titulo-momentos">
            Uma casa para reunir <em>todas as suas companhias.</em>
          </h2>
        </div>
        <p className="apoio-titulo">
          Do passeio com as crianças à comemoração de aniversário, conheça os
          espaços e as experiências que fazem parte do Chico.
        </p>
      </div>
      <div className="grade-momentos">
        <article className="momento-fotografico">
          <BotaoModal
            acao="playground"
            className="foto-momento foto-playground"
            aria-label="Conhecer o playground: fotos e informações"
          >
            <Imagem
              src="/santaines/images/atualizadas/playground-criancas-hd.webp"
              alt="Estrutura colorida do playground infantil do Chico do Peixe"
              fill
              quality={85}
              sizes="(min-width: 1320px) 626px, (min-width: 600px) calc((100vw - 68px) / 2), calc(100vw - 40px)"
            />
          </BotaoModal>
          <div className="texto-momento">
            <p className="sobretitulo">Para vir em família</p>
            <h3>As crianças também têm um lugar na diversão</h3>
            <p>
              O playground faz parte da estrutura da casa e é mais um motivo
              para reunir a família. Consulte a equipe sobre as condições de uso
              e organize o passeio com os pequenos.
            </p>
            <BotaoModal acao="playground" className="ligacao-texto">
              Conheça o playground
              <SetaExterna size={16} aria-hidden="true" />
            </BotaoModal>
          </div>
        </article>
        <article className="momento-fotografico">
          <BotaoModal
            acao="musica"
            className="foto-momento foto-musica"
            aria-label="Conhecer a música ao vivo: fotos e informações"
          >
            <Imagem
              src="/santaines/images/atualizadas/musica-ao-vivo-hd.webp"
              alt="Músico tocando violão no ambiente do Chico do Peixe"
              fill
              quality={85}
              sizes="(min-width: 1320px) 626px, (min-width: 600px) calc((100vw - 68px) / 2), calc(100vw - 40px)"
            />
          </BotaoModal>
          <div className="texto-momento">
            <p className="sobretitulo">Para deixar a semana mais gostosa</p>
            <h3>A música acompanha os encontros de terça e quinta</h3>
            <p>
              Escolha a companhia, peça uma porção e aproveite a música ao vivo.
              A agenda no Instagram traz os artistas e os horários de cada
              apresentação.
            </p>
            <BotaoModal acao="musica" className="ligacao-texto">
              Acompanhe a programação
              <SetaExterna size={16} aria-hidden="true" />
            </BotaoModal>
          </div>
        </article>
      </div>
      <div className="grade-informacoes">
        <article>
          <span className="icone-destaque">
            <Bolo size={28} strokeWidth={1.4} aria-hidden="true" />
          </span>
          <h3>Reúna quem você gosta no seu aniversário</h3>
          <p>
            Comemore ao redor da mesa e combine os detalhes com a equipe.
            Consulte a disponibilidade para o seu grupo e as condições para
            aniversariantes.
          </p>
          <BotaoModal
            acao="comemoracao"
            className="ligacao-texto botao-cartao-expandido"
          >
            Conhecer as possibilidades
            <SetaExterna size={16} aria-hidden="true" />
          </BotaoModal>
        </article>
        <article>
          <span className="icone-destaque">
            <Televisao size={28} strokeWidth={1.4} aria-hidden="true" />
          </span>
          <h3>Torça pelo seu time com a turma reunida</h3>
          <p>
            Reúna os amigos para acompanhar o futebol ao vivo no Chico. Confira
            a partida e o horário com o atendimento antes de combinar o
            encontro.
          </p>
          <BotaoModal
            acao="jogos"
            className="ligacao-texto botao-cartao-expandido"
          >
            Ver a casa em dia de jogo
            <SetaExterna size={16} aria-hidden="true" />
          </BotaoModal>
        </article>
        <article>
          <span className="icone-destaque">
            <Espaco size={28} strokeWidth={1.4} aria-hidden="true" />
          </span>
          <h3>Mais espaço para os encontros acontecerem</h3>
          <p>
            O espaço ampliado faz parte de uma casa que continua crescendo para
            receber novos encontros. Conheça os ambientes e combine com a equipe
            a melhor acomodação para o seu grupo.
          </p>
          <BotaoModal
            acao="espaco"
            className="ligacao-texto botao-cartao-expandido"
          >
            Veja os registros do espaço
            <SetaExterna size={16} aria-hidden="true" />
          </BotaoModal>
        </article>
        <article>
          <span className="icone-destaque">
            <Relogio size={28} strokeWidth={1.4} aria-hidden="true" />
          </span>
          <h3>Seu próximo encontro cabe em qualquer dia</h3>
          <p>
            O Chico recebe você todos os dias, das 11h às 23h. No almoço, o
            self-service funciona de segunda a sábado.
          </p>
          <BotaoModal
            acao="encontro"
            className="ligacao-texto botao-cartao-expandido"
          >
            Encontrar o melhor momento
            <SetaExterna size={16} aria-hidden="true" />
          </BotaoModal>
        </article>
      </div>
    </section>
  );
}
