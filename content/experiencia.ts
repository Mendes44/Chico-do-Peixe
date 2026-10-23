import { site } from '@/content/site';

export const contatoReserva = `https://wa.me/${site.whatsapp.replace('+', '')}?text=${encodeURIComponent('Olá! Quero combinar uma visita ao Chico do Peixe Santa Inês. Podem me ajudar com uma reserva?')}`;
export const contatoCardapio = `https://wa.me/${site.whatsapp.replace('+', '')}?text=${encodeURIComponent('Olá! Podem me enviar o cardápio atualizado do Chico do Peixe Santa Inês?')}`;
export const consultaAvaliacoes =
  'https://www.google.com/maps/search/?api=1&query=Chico+do+Peixe+Santa+Ines+Rua+Contagem+2165+Belo+Horizonte';
export const marcaAtual = '/santaines/images/atualizadas/marca-instagram.webp';

export const fotografiasDestaque = [
  {
    identificador: 'almoco',
    imagem: '/santaines/images/atualizadas/buffet-principal.webp',
    descricao:
      'Buffet do Chico do Peixe com pratos quentes, saladas e acompanhamentos',
    chamada: 'Seu almoço, do seu jeito.',
    titulo: 'Capricho em cada escolha.',
    enquadramento: '50% 58%',
  },
  {
    identificador: 'petiscos',
    imagem: '/santaines/images/atualizadas/petiscos-instagram.webp',
    descricao: 'Porções de camarões e bolinhos sobre a mesa do Chico do Peixe',
    chamada: 'Chame quem faz o papo render.',
    titulo: 'O próximo brinde é aqui.',
    enquadramento: '50% 45%',
  },
  {
    identificador: 'adega',
    imagem: '/santaines/images/atualizadas/nossa-adega.webp',
    descricao:
      'Nova adega do Chico do Peixe Santa Inês, com vinhos em prateleiras de madeira',
    chamada: 'Um novo cantinho para descobrir.',
    titulo: 'Vinho bom pede companhia.',
    enquadramento: '50% 45%',
  },
  {
    identificador: 'ambiente',
    imagem: '/santaines/images/atualizadas/mesa-de-sabores.webp',
    descricao: 'Buffet de saladas e mural verde no ambiente do restaurante',
    chamada: 'Seu encontro tem endereço.',
    titulo: 'Sinta-se em casa, no Chico.',
    enquadramento: '50% 48%',
  },
] as const;

export const experienciasDaCasa = [
  {
    numero: '01',
    categoria: 'Almoço',
    titulo: 'Seu prato. Seu momento.',
    descricao:
      'De segunda a sábado, no almoço, o self-service tem espaço para os seus sabores favoritos. Monte o prato e aproveite a pausa.',
    imagem: '/santaines/images/atualizadas/sabores-do-almoco.webp',
    alternativa: 'Pratos quentes e acompanhamentos do self-service do Chico',
    destino: '/cardapio',
  },
  {
    numero: '02',
    categoria: 'Peixes & porções',
    titulo: 'O papo rende. A fome passa.',
    descricao:
      'Peixes e petiscos para pedir mais uma porção, dividir a mesa e deixar a conversa acontecer. Traga a turma. O sabor fica por nossa conta.',
    imagem: '/santaines/images/atualizadas/petiscos-instagram.webp',
    alternativa: 'Petiscos e camarões servidos em porções para compartilhar',
    destino: '/cardapio',
  },
  {
    numero: '03',
    categoria: 'Nossa adega',
    titulo: 'Um brinde a estar junto.',
    descricao:
      'A nova adega chegou para acompanhar os bons encontros. Escolha a companhia e venha descobrir o seu próximo vinho favorito.',
    imagem: '/santaines/images/atualizadas/nossa-adega.webp',
    alternativa: 'Seleção de vinhos na nova adega do restaurante',
    destino: '/#adega',
  },
] as const;

export const agendaAtual = [
  {
    titulo: 'Almoço sem pressa',
    detalhe: 'Self-service de segunda a sábado, no almoço.',
    imagem: '/santaines/images/atualizadas/buffet-principal.webp',
    texto:
      'Uma pausa gostosa na rotina, com variedade para escolher o que vai no seu prato.',
  },
  {
    titulo: 'Terça e quinta têm música',
    detalhe: 'Música ao vivo às terças e quintas.',
    imagem: '/santaines/images/atualizadas/petiscos-instagram.webp',
    texto:
      'O encontro fica ainda melhor com uma boa trilha sonora. Acompanhe artistas e horários na agenda do Instagram.',
  },
  {
    titulo: 'Um novo motivo para brindar',
    detalhe: 'Conheça a nova adega.',
    imagem: '/santaines/images/atualizadas/nossa-adega.webp',
    texto:
      'Vinhos, boa comida e a companhia certa. Descubra esse novo espaço na sua próxima visita.',
  },
] as const;

export const fotografiasGaleria = [
  {
    imagem: '/santaines/images/atualizadas/buffet-principal.webp',
    descricao: 'Pratos quentes do buffet',
  },
  {
    imagem: '/santaines/images/atualizadas/petiscos-instagram.webp',
    descricao: 'Petiscos para compartilhar',
  },
  {
    imagem: '/santaines/images/atualizadas/nossa-adega.webp',
    descricao: 'A nova adega da unidade Santa Inês',
  },
  {
    imagem: '/santaines/images/atualizadas/mesa-de-sabores.webp',
    descricao: 'Buffet de saladas e ambiente da casa',
  },
  {
    imagem: '/santaines/images/atualizadas/saladas-da-casa.webp',
    descricao: 'Saladas e acompanhamentos',
  },
  {
    imagem: '/santaines/images/atualizadas/sabores-do-almoco.webp',
    descricao: 'Variedade no almoço do Chico',
  },
] as const;
