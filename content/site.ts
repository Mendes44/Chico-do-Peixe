/*
 * CONTEÚDO EDITÁVEL DO SITE
 * --------------------------------------------------------------------------
 * Atualize textos, links, horários, cardápio e promoções neste arquivo.
 * Os componentes apenas apresentam estes dados e não precisam ser alterados.
 */

export const site = {
  name: 'Chico do Peixe Santa Inês',
  shortName: 'Chico do Peixe',
  url: 'https://www.chicodopeixe.com.br/santaines',
  description:
    'Peixes, porções generosas, cerveja gelada e ambiente para toda a família em Santa Inês, Belo Horizonte.',
  phone: '+553134850258',
  phoneLabel: '(31) 3485-0258',
  whatsapp: '+5531991536420',
  whatsappLabel: '(31) 99153-6420',
  email: 'santaines@chicodopeixe.com.br',
  instagram: 'https://instagram.com/chicodopeixesantaines',
  ifood:
    'https://www.ifood.com.br/delivery/belo-horizonte-mg/chico-do-peixe-santa-ines-santa-ines/aca302f9-c17f-46c8-a246-9f0debf8509a?utm_medium=share',
  maps: 'https://www.google.com/maps/dir//-19.8776811,-43.9091268',
  address: {
    street: 'Av. Contagem, 2165',
    neighborhood: 'Santa Inês',
    city: 'Belo Horizonte',
    state: 'MG',
    postalCode: '31080-255',
    latitude: -19.8776811,
    longitude: -43.9091268,
  },
  hours: [
    { days: 'Domingo a quinta', label: '11h às 0h' },
    { days: 'Sexta e sábado', label: '11h à 1h' },
  ],
} as const;

export const homeMenu = [
  {
    image: '/images/menu-peixes.webp',
    title: 'Peixes',
    items: 'Cascudo · Peroá · Traíra sem espinha',
  },
  {
    image: '/images/menu-moquecas.webp',
    title: 'Moquecas',
    items: 'Salmão · Surubim · Camarão',
  },
  {
    image: '/images/menu-porcoes.webp',
    title: 'Porções',
    items: 'Tilápia · Lambari · Filé de cascudo',
  },
  {
    image: '/images/menu-bebidas.webp',
    title: 'Bebidas',
    items: 'Cervejas · Drinks · Sucos',
  },
] as const;

export const menuCategories = [
  {
    title: 'Peixes',
    image: '/images/menu-peixes.webp',
    position: 'center',
    items: [
      'Cascudo — tamanhos M ao G5',
      'Peroá — tamanhos P ao GG',
      'Traíra sem espinha — tamanhos M ao G4',
      'Filé de tilápia',
      'Filé de surubim à dorê',
    ],
  },
  {
    title: 'Moquecas',
    image: '/images/menu-moquecas.webp',
    position: 'center',
    items: [
      'Moqueca de salmão',
      'Moqueca ao molho de camarão',
      'Salmão ao molho de camarão',
      'Bobó de camarão',
      'Moqueca de surubim',
    ],
  },
  {
    title: 'Pratos completos',
    image: '/images/menu-pratos.webp',
    position: 'center',
    items: [
      'Surubim à dorê com arroz e fritas',
      'Surubim com purê e molho de camarão',
      'Contra filé grelhado',
      'Picanha na grelha',
      'Traíra com arroz, salada, tropeiro e fritas',
    ],
  },
  {
    title: 'Sugestões do Chico',
    image: '/images/menu-sugestoes.webp',
    position: 'center',
    items: [
      'Camarão malucão empanado',
      'Torresmo de barriga com mandioquinha',
      'Bolinho de bacalhau',
      'Carne de sol com mandioca',
      'Fritas com bacon e queijo',
    ],
  },
  {
    title: 'Porções e carnes',
    image: '/images/menu-porcoes.webp',
    position: 'center',
    items: [
      'Lambari',
      'Filé de cascudo',
      'Picanha com fritas e queijo',
      'Picanha com mandioca',
      'Lombo suíno com fritas',
    ],
  },
  {
    title: 'Bebidas',
    image: '/images/menu-bebidas.webp',
    position: 'center',
    items: [
      'Cervejas e long necks',
      'Sucos, refrigerantes e água',
      'Caipirinhas e coquetéis',
      'Cachaças e doses',
      'Vinhos e espumantes',
    ],
  },
] as const;

export const promotions = [
  {
    image: '/images/atracao-aniversario.webp',
    title: 'Aniversariante',
    text: 'Você ganha um petit gâteau no dia do seu aniversário. Promoção válida para contas acima de R$ 100.',
  },
  {
    image: '/images/atracao-itaipava.webp',
    title: 'Cerveja gelada',
    text: 'De segunda a quinta, exceto feriados e vésperas. Consulte o valor atualizado no atendimento.',
  },
  {
    image: '/images/atracao-brasileirao.webp',
    title: 'Brasileirão',
    text: 'Junte os amigos e assista aos jogos do seu time do coração.',
  },
] as const;

export const attractions = [
  {
    title: 'Almoço completo',
    tag: 'Todos os dias',
    image: '/images/slide-06.webp',
    position: 'right center',
    text: 'Buffet variado com peixes, churrasco, massas, saladas e acompanhamentos. Uma opção completa para o almoço em família ou com o pessoal do trabalho.',
  },
  {
    title: 'Sertanejo no Chico',
    tag: 'Terças e quintas · 20h',
    image: '/images/slide-05.webp',
    position: 'center',
    text: 'Música sertaneja ao vivo, porções para compartilhar e cerveja gelada para aproveitar a noite com a turma.',
  },
  {
    title: 'Happy hour Itaipava',
    tag: 'Bebida gelada',
    image: '/images/atracao-itaipava.webp',
    position: 'center',
    text: 'Cerveja gelada para acompanhar os peixes e porções da casa. Consulte condições e valores atuais no atendimento.',
  },
  {
    title: 'Aniversariante',
    tag: 'Seu dia merece Chico',
    image: '/images/atracao-aniversario.webp',
    position: 'center',
    text: 'No dia do aniversário, o aniversariante ganha um petit gâteau. Promoção válida para contas acima de R$ 100.',
  },
  {
    title: 'Brasileirão',
    tag: 'Vem torcer com a gente',
    image: '/images/atracao-brasileirao.webp',
    position: 'center',
    text: 'Acompanhe os jogos do seu time com a turma, cercado por petiscos, peixe e aquele clima descontraído de bar.',
  },
] as const;

export const galleryPhotos = [
  'real-2gde.webp',
  'real-3gde.webp',
  'real-4gde.webp',
  'real-6gde.webp',
  'ambiente.webp',
  'playground.webp',
  'galeria-01.webp',
  'galeria-02.webp',
  'galeria-03.webp',
  'galeria-04.webp',
] as const;

/* Trechos curtos de avaliações públicas atribuídas aos respectivos autores. */
export const reviews = [
  {
    author: 'Ivair Alves',
    rating: 5,
    text: 'Espaço limpo, agradável e música sertaneja raiz.',
    source: 'Google',
    sourceUrl: 'https://restaurantguru.com.br/Chico-do-Peixe-Belo-Horizonte-8',
  },
  {
    author: 'João R.',
    rating: 5,
    text: 'Local amplo e arejado, com porções bem servidas e saborosas.',
    source: 'Google',
    sourceUrl:
      'https://wanderlog.com/pt/place/details/3483980/restaurante-chico-do-peixe',
  },
  {
    author: 'Irani Ramos',
    rating: 4,
    text: 'Comida boa e ambiente muito agradável.',
    source: 'Google',
    sourceUrl: 'https://restaurantguru.com.br/Chico-do-Peixe-Belo-Horizonte-8',
  },
] as const;
