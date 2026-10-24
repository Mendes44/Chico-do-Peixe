const pasta = '/santaines/images/atualizadas/';

export type DetalheExperiencia = {
  titulo: string;
  chamada: string;
  introducao: string;
  paragrafos: string[];
  fotos: { arquivo: string; alternativa: string; legenda: string }[];
  acao?: { destino: 'reserva' | 'aniversario' | 'cardapio'; texto: string };
  mostrarHorarios?: boolean;
};

export const detalhesExperiencias = {
  almoco: {
    titulo: 'Seu almoço começa com uma boa escolha',
    chamada: 'Self-service de segunda a sábado',
    introducao:
      'Uma pausa no dia para montar o prato do seu jeito e aproveitar, com calma, os sabores da nossa cozinha.',
    paragrafos: [
      'O buffet reúne pratos quentes, saladas e acompanhamentos para você escolher a combinação que mais gosta. Da pausa no trabalho ao almoço em família, a variedade convida a voltar e experimentar outros sabores.',
      'O self-service funciona no almoço, de segunda a sábado. As preparações podem variar; conheça as opções disponíveis quando chegar à casa.',
    ],
    fotos: [
      {
        arquivo: 'buffet-ambiente-hd.webp',
        alternativa: 'Buffet e mural de peixes no salão do Chico',
        legenda: 'O almoço servido em um ambiente com o jeito do Chico.',
      },
      {
        arquivo: 'saladas-da-casa.webp',
        alternativa: 'Variedade de saladas no buffet da casa',
        legenda: 'Saladas e acompanhamentos para completar a sua escolha.',
      },
      {
        arquivo: 'mesa-de-sabores.webp',
        alternativa: 'Preparações do self-service do Chico',
        legenda: 'Uma mesa de sabores para a sua pausa no dia.',
      },
    ],
    acao: { destino: 'cardapio', texto: 'Explorar o cardápio da casa' },
  },
  porcoes: {
    titulo: 'A conversa fica melhor com uma porção à mesa',
    chamada: 'Peixes, camarões e porções',
    introducao:
      'Escolha os sabores que a turma gosta e aproveite um encontro que não precisa ter pressa para terminar.',
    paragrafos: [
      'Peixes e camarões fazem parte da identidade do Chico, ao lado de entradas e porções que convidam a compartilhar. É o tipo de escolha que acompanha o reencontro com os amigos, o almoço em família ou um brinde depois do trabalho.',
      'Conheça o cardápio para descobrir os pratos e peça à equipe uma sugestão para o tamanho do seu grupo e para a bebida que vai acompanhar o pedido.',
    ],
    fotos: [
      {
        arquivo: 'camaroes-da-casa.webp',
        alternativa: 'Porção de camarões preparada pelo Chico do Peixe',
        legenda: 'Camarões para dividir e saborear no seu ritmo.',
      },
      {
        arquivo: 'entradas-para-compartilhar.webp',
        alternativa: 'Entradas e petiscos apresentados pela casa',
        legenda: 'O começo de um encontro cheio de sabor.',
      },
      {
        arquivo: 'petiscos-e-bebidas.webp',
        alternativa: 'Petiscos com cervejas e drinks sobre a mesa',
        legenda: 'Porções e brindes que acompanham a conversa.',
      },
    ],
    acao: { destino: 'cardapio', texto: 'Escolher no cardápio' },
  },
  adega: {
    titulo: 'Um novo rótulo para acompanhar o encontro',
    chamada: 'Conheça a nossa adega',
    introducao:
      'Entre taças, conversas e os sabores da casa, a adega acrescenta mais um motivo para prolongar a visita.',
    paragrafos: [
      'A adega da unidade Santa Inês reúne vinhos em um espaço feito para quem gosta de descobrir novas combinações. Conheça os rótulos disponíveis e encontre uma escolha para acompanhar o seu prato ou celebrar uma ocasião especial.',
      'Se quiser uma sugestão, converse com a equipe sobre o estilo de vinho que você prefere. A seleção e a disponibilidade dos rótulos podem mudar.',
    ],
    fotos: [
      {
        arquivo: 'adega-ambiente.webp',
        alternativa: 'Vista do corredor e das prateleiras da adega do Chico',
        legenda: 'Entre e conheça o espaço da nossa adega em Santa Inês.',
      },
      {
        arquivo: 'adega-rotulos.webp',
        alternativa: 'Garrafas organizadas nas prateleiras da adega',
        legenda: 'Rótulos para descobrir e compartilhar em boa companhia.',
      },
      {
        arquivo: 'nossa-adega.webp',
        alternativa: 'Interior da adega com prateleiras de madeira e vinhos',
        legenda: 'Um novo ambiente para os seus brindes na casa.',
      },
    ],
    acao: { destino: 'reserva', texto: 'Combinar um encontro no Chico' },
  },
  comemoracao: {
    titulo: 'Celebre seu aniversário com quem faz parte da sua história',
    chamada: 'Uma mesa para comemorar',
    introducao:
      'Reúna as pessoas queridas e deixe que os sabores e a hospitalidade da casa acompanhem a sua comemoração.',
    paragrafos: [
      'Do primeiro brinde às histórias que atravessam a mesa, o aniversário merece tempo para aproveitar a companhia de quem você gosta. Os ambientes do Chico recebem encontros que podem começar com uma porção e render uma noite de boas lembranças.',
      'Conte à equipe a data, o horário e o número de convidados. Pelo formulário, você pode consultar disponibilidade, acomodação do grupo e condições para aniversariantes antes de confirmar os detalhes.',
    ],
    fotos: [
      {
        arquivo: 'aniversario-sobremesa-hd.webp',
        alternativa:
          'Petit gâteau com sorvete e morangos divulgado pelo Chico no destaque de aniversário',
        legenda:
          'Um registro do destaque Aniversário da casa. Consulte as condições atuais com a equipe.',
      },
    ],
    acao: { destino: 'aniversario', texto: 'Planejar meu aniversário' },
  },
  jogos: {
    titulo: 'A emoção do jogo também reúne a turma por aqui',
    chamada: 'Futebol ao vivo no Chico',
    introducao:
      'Acompanhe seu time com os amigos, uma porção para compartilhar e o clima de uma casa que gosta de receber.',
    paragrafos: [
      'As transmissões de futebol fazem parte dos encontros no Chico. Entre um lance e outro, a mesa vira ponto de torcida e de conversa, com os sabores da casa acompanhando a partida.',
      'Antes de vir, confira com a equipe ou no Instagram quais partidas serão transmitidas e os respectivos horários. A programação acompanha a agenda de jogos divulgada pela casa.',
    ],
    fotos: [
      {
        arquivo: 'casa-em-dia-de-jogo.webp',
        alternativa:
          'Clientes reunidos nas mesas do Chico durante transmissão de futebol',
        legenda:
          'Registro real do destaque “Jogos Ao Vivo” no Instagram da casa.',
      },
    ],
  },
  espaco: {
    titulo: 'A casa cresceu para receber mais encontros',
    chamada: 'Conheça o espaço ampliado',
    introducao:
      'Novos ambientes, o cuidado de sempre e mais possibilidades para você escolher onde aproveitar a sua visita.',
    paragrafos: [
      'O espaço ampliado traz mesas, bancos estofados e um mural que traduz a identidade do Chico. A iluminação acolhedora e os detalhes do ambiente convidam a sentar e deixar a conversa acontecer.',
      'Nas fotos, conheça os ambientes da unidade Santa Inês e o bar da casa. Na sua próxima visita, descubra o cantinho que combina com a sua companhia.',
    ],
    fotos: [
      {
        arquivo: 'espaco-ampliado-hd.webp',
        alternativa: 'Espaço novo com bancos verdes, mesas e mural de peixes',
        legenda: 'O espaço ampliado, com mesas e bancos para novos encontros.',
      },
      {
        arquivo: 'bar-santa-ines-hd.webp',
        alternativa: 'Balcão verde e prateleiras iluminadas no bar do Chico',
        legenda: 'O bar e os detalhes que dão personalidade à casa.',
      },
    ],
  },
  encontro: {
    titulo: 'Escolha a companhia que a gente prepara o encontro',
    chamada: 'Todos os dias, das 11h às 23h',
    introducao:
      'Um almoço em família, um reencontro com amigos ou uma noite a dois: sempre existe um bom motivo para sentar à mesa.',
    paragrafos: [
      'A casa recebe você todos os dias, do almoço à noite. Escolha entre o self-service no almoço de segunda a sábado e os pratos, porções e bebidas que acompanham os demais momentos da visita.',
      'Se o encontro já tem data, preencha o formulário e conte à equipe o horário e o número de pessoas. O atendimento confirma a disponibilidade e ajuda a combinar os detalhes pelo WhatsApp.',
    ],
    fotos: [
      {
        arquivo: 'encontro-entre-amigas-hd.webp',
        alternativa:
          'Amigas reunidas com porções e drinks em uma mesa do Chico',
        legenda:
          'Encontro entre amigas compartilhado no destaque Clientes do Instagram oficial.',
      },
    ],
    acao: { destino: 'reserva', texto: 'Marcar meu encontro' },
    mostrarHorarios: true,
  },
  playground: {
    titulo: 'Um passeio em família com espaço para brincar',
    chamada: 'Playground para as crianças',
    introducao:
      'Enquanto a família aproveita os sabores da casa, os pequenos também encontram um motivo para gostar do passeio.',
    paragrafos: [
      'O playground faz parte da estrutura do Chico e traz mais possibilidades para os encontros em família. Antes da visita, consulte a equipe sobre condições de uso, acompanhamento e orientações para as crianças.',
    ],
    fotos: [
      {
        arquivo: 'playground-criancas-hd.webp',
        alternativa: 'Estrutura colorida do playground infantil do Chico',
        legenda: 'O espaço de diversão dos pequenos na unidade Santa Inês.',
      },
    ],
    acao: { destino: 'reserva', texto: 'Planejar um passeio em família' },
  },
  musica: {
    titulo: 'A semana ganha outra trilha quando a turma se encontra',
    chamada: 'Música ao vivo às terças e quintas',
    introducao:
      'Escolha uma porção, peça sua bebida favorita e aproveite as apresentações que acompanham os encontros na casa.',
    paragrafos: [
      'A programação de música ao vivo faz parte das terças e quintas no Chico. Confira os artistas e os horários no Instagram antes de combinar a visita e reserve um tempo para aproveitar a noite.',
    ],
    fotos: [
      {
        arquivo: 'musica-ao-vivo-hd.webp',
        alternativa: 'Músico tocando violão no Chico do Peixe',
        legenda: 'Música e boa companhia para acompanhar a sua visita.',
      },
    ],
    acao: { destino: 'reserva', texto: 'Combinar minha visita' },
  },
} satisfies Record<string, DetalheExperiencia>;

export type TipoDetalhe = keyof typeof detalhesExperiencias;
export function encontrarDetalhe(tipo: string): DetalheExperiencia | undefined {
  return Object.hasOwn(detalhesExperiencias, tipo)
    ? detalhesExperiencias[tipo as TipoDetalhe]
    : undefined;
}
export function caminhoFoto(arquivo: string) {
  return `${pasta}${arquivo}`;
}
