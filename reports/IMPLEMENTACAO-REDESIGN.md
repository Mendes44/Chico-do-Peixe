> Esta é a etapa inicial do redesign. As melhorias posteriores de formulário, cardápio, destaques e fotos estão em [ATUALIZACAO-CONTEUDO-UX.md](ATUALIZACAO-CONTEUDO-UX.md).

# Redesign implementado — 23/10/2026

O protótipo aprovado foi integrado à aplicação Next.js. A rota principal é
`/santaines`; home, cardápio, agenda, história, galeria, contato e reservas usam
a nova identidade. A proposta estática anterior permanece como referência histórica.

## Conteúdo e fontes

O [perfil oficial](https://www.instagram.com/chicodopeixesantaines/) foi a fonte
principal dos dados comerciais, conforme orientação do cliente:

- Rua Contagem, 2165, Santa Inês, Belo Horizonte.
- Atendimento todos os dias, das 11h às 23h.
- Telefone (31) 3485-0258 e WhatsApp (31) 99153-6420.
- Música ao vivo às terças e quintas, sem inventar horário ou artista.
- [Self-service de segunda a sábado, no almoço](https://www.instagram.com/chicodopeixesantaines/reel/DerSJbFRIVc/).
- [Nova adega](https://www.instagram.com/chicodopeixesantaines/p/DeruGsikfH8/).
- [Foto de petiscos](https://www.instagram.com/chicodopeixesantaines/p/DefZySgEcN0/) importada para WebP local.

Não foram mantidos no conteúdo ativo preços, condições promocionais, mínimo de
pessoas para reserva ou listas detalhadas de pratos obtidos apenas do site antigo.
O cardápio atual é solicitado à equipe pelo WhatsApp. A origem histórica da marca
em 1994 continua identificada como história da marca em Concórdia, sem atribuir
essa data à abertura da unidade Santa Inês.

## Carrossel e ícone

Quatro fotos selecionadas: buffet, petiscos, adega e ambiente. Transição de
opacidade com Motion, intervalo de seis segundos, controles anterior/próxima,
marcadores, pausa e gesto horizontal em telas de toque. A rotação é suspensa com
foco do teclado, ponteiro sobre o carrossel, aba oculta, carrossel fora da tela ou
preferência de movimento reduzido. A navegação por teclado usa botões nativos;
setas esquerda/direita e anúncios acessíveis complementam os controles.

A referência gastronômica [Chef no Icon Museum](https://icon.museum/apps/chef-video-recipe-scanner?platform=ios)
orientou a escolha de um chapéu de chef. O desenho utilizado é o componente
`ChefHat` da biblioteca Lucide já instalada, em SVG, sem copiar o logotipo do
aplicativo exposto na galeria. As microinterações de links, botões e cartões usam CSS.

## Imagens e desempenho

- Todas as imagens raster referenciadas pelas páginas ativas estão em WebP,
  incluindo marca, fotografias, favicon e imagem social.
- O otimizador do Next.js está configurado somente para `image/webp`, com
  `sizes` responsivo, prioridade para a primeira foto e carregamento adiado
  abaixo da dobra.
- A versão otimizada de 640px da foto inicial respondeu `200 image/webp`,
  com **90.912 bytes** na verificação local. Isso não é uma medição de Core Web Vitals.
- A foto de petiscos importada tem 99.244 bytes; a marca WebP tem 7.536 bytes.
- Fontes via `next/font`, sem dependência de Google Fonts no navegador do visitante.
- Ícones SVG permanecem vetoriais; os arquivos de origem não utilizados não são
  carregados nas páginas. Os originais em `FotosNovas` estão intactos.

Inventários em `imagens-site.json` e `ativos-instagram.json`.

## SEO e rotas

`basePath: '/santaines'` alinha as rotas, links, imagens e canônicos. A base tem
oito páginas públicas no sitemap, todas com resposta 200. As páginas PHP
conhecidas redirecionam com status 308 para a página equivalente; UTMs são
preservadas. O Next.js usa 308 para redirecionamento permanente, em lugar do 301
descrito no plano conceitual.

Dados `Restaurant` usam o endereço e os horários atuais. Não há estrelas ou
avaliações agregadas inventadas. Sitemap e robots são gerados pelo framework;
as regras Vercel disponibilizam seus endereços também na raiz do domínio após
o deploy. A aplicação foi verificada localmente; a configuração do host na
raiz depende do ambiente de publicação e não foi exercida em produção.

GA4 continua condicionado à configuração da propriedade e ao consentimento.
Os eventos de conversão preservam os nomes existentes; URLs de contato enviadas
à medição não incluem o texto da mensagem de WhatsApp.

## Verificações

- Build de produção e checagem TypeScript concluídos.
- Home e sete páginas internas: HTTP 200, um H1 e canônico com `/santaines`.
- Sitemap e robots sob `/santaines`: HTTP 200.
- Cinco redirects do legado: permanentes e com destino correto.
- Navegação anterior/próxima, primeira/última, marcadores e teclado verificados.
- Menu móvel abre, fecha com Escape e devolve o foco ao botão.
- Larguras 320, 390, 768, 900 e 1440px sem rolagem horizontal.
- Imagens carregadas localmente em WebP. Nenhuma reserva ou mensagem enviada.

Capturas finais em `site-desktop.webp` e `site-mobile.webp`.

Esta etapa não publicou o site nem alterou DNS, contas de Analytics ou anúncios.
