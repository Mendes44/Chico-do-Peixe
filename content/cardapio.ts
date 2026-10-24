// Nomes e acompanhamentos consultados no perfil público do Google Maps.
// Valores e promoções antigos foram excluídos; disponibilidade é confirmada no atendimento.
export type ItemCardapio = { nome: string; descricao?: string };
export type CategoriaCardapio = {
  identificador: string;
  titulo: string;
  introducao: string;
  itens: ItemCardapio[];
};
export const categoriasCardapio: CategoriaCardapio[] = [
  {
    identificador: 'peixes',
    titulo: 'Peixes da casa',
    introducao:
      'A tradição que dá nome ao Chico, com opções para compartilhar à mesa.',
    itens: [
      {
        nome: 'Traíra sem espinha',
        descricao:
          'Opções de tamanho; consulte o atendimento para escolher a porção.',
      },
      {
        nome: 'Cascudo',
        descricao: 'Diferentes tamanhos disponíveis para consulta.',
      },
      {
        nome: 'Peroá',
        descricao: 'Consulte os tamanhos e a disponibilidade do dia.',
      },
      { nome: 'Filé de tilápia' },
      { nome: 'Filé de cascudo' },
      {
        nome: 'Filé de surubim à dorê',
        descricao: 'Opção de porção acompanhada de molho tártaro.',
      },
    ],
  },
  {
    identificador: 'pratos',
    titulo: 'Pratos com acompanhamento',
    introducao:
      'Peixes e carnes com combinações que já chegam prontas para o seu almoço ou jantar.',
    itens: [
      {
        nome: 'Filé de surubim à dorê',
        descricao:
          'Arroz ao alho e batata frita; há também opção com queijo ralado.',
      },
      {
        nome: 'Surubim ao molho de camarão',
        descricao: 'Filé à dorê com molho de camarão, purê de batata e arroz.',
      },
      { nome: 'Filé de cascudo', descricao: 'Batata frita e arroz branco.' },
      { nome: 'Filé de tilápia', descricao: 'Batata frita e arroz ao alho.' },
      {
        nome: 'Contra-filé grelhado',
        descricao: 'Batata frita e arroz ao alho.',
      },
      { nome: 'Picanha grelhada', descricao: 'Batata frita e arroz ao alho.' },
      {
        nome: 'Traíra sem espinha G',
        descricao: 'Arroz, salada, feijão tropeiro e batata frita.',
      },
    ],
  },
  {
    identificador: 'moquecas',
    titulo: 'Moquecas',
    introducao:
      'As moquecas são apresentadas com arroz, salada e pirão, com indicação de servir de duas a três pessoas.',
    itens: [
      { nome: 'Moqueca de salmão' },
      { nome: 'Moqueca de salmão ao molho de camarão' },
      { nome: 'Moqueca de surubim' },
      { nome: 'Moqueca de surubim ao molho de camarão' },
    ],
  },
  {
    identificador: 'chef',
    titulo: 'Camarões e sugestões do chef',
    introducao:
      'Sabores do mar para começar o encontro ou acompanhar a sua bebida favorita.',
    itens: [
      {
        nome: 'Camafeu de camarão com requeijão',
        descricao: 'Porção com 10 unidades.',
      },
      { nome: 'Camarão empanado' },
      { nome: 'Camarão Maluquim' },
      { nome: 'Camarão à paulista', descricao: 'Consulte as opções VG e VM.' },
      {
        nome: 'Bolinho de bacalhau do Porto',
        descricao: 'Porção com 10 unidades.',
      },
    ],
  },
  {
    identificador: 'carnes',
    titulo: 'Porções e carnes',
    introducao:
      'Escolhas para dividir enquanto a conversa rende, com acompanhamentos conforme a opção.',
    itens: [
      { nome: 'Filé de tilápia com fritas' },
      { nome: 'Contra-filé' },
      { nome: 'Contra-filé com fritas e queijo' },
      { nome: 'Picanha' },
      { nome: 'Picanha com fritas e queijo' },
    ],
  },
  {
    identificador: 'guarnicoes',
    titulo: 'Guarnições',
    introducao:
      'Complete a mesa com os acompanhamentos que combinam com o seu pedido.',
    itens: [
      { nome: 'Arroz branco ou arroz ao alho' },
      { nome: 'Feijão tropeiro' },
      { nome: 'Pirão' },
      { nome: 'Purê de batata' },
      { nome: 'Vinagrete' },
      {
        nome: 'Salada simples',
        descricao: 'Alface, tomate, cebola e pimentão.',
      },
      {
        nome: 'Salada mista',
        descricao:
          'Alface, tomate, palmito, ovo de codorna, azeitona, cebola e pimentão.',
      },
      { nome: 'Molho tártaro à parte' },
    ],
  },
  {
    identificador: 'sobremesas',
    titulo: 'Sobremesas',
    introducao:
      'Para prolongar o encontro com uma escolha doce depois da refeição.',
    itens: [
      { nome: 'Petit gâteau' },
      { nome: 'Pudim' },
      {
        nome: 'Sorvetes e picolés',
        descricao: 'Consulte os sabores disponíveis.',
      },
    ],
  },
  {
    identificador: 'bebidas',
    titulo: 'Bebidas para acompanhar',
    introducao:
      'O Instagram da casa apresenta drinks, chope e uma adega para diferentes ocasiões.',
    itens: [
      {
        nome: 'Drinks da casa',
        descricao: 'Consulte os sabores e as opções do dia com a equipe.',
      },
      {
        nome: 'Chope e cervejas',
        descricao: 'Consulte marcas, tamanhos e disponibilidade.',
      },
      {
        nome: 'Vinhos da adega',
        descricao: 'Escolha o seu rótulo com o atendimento.',
      },
    ],
  },
];
