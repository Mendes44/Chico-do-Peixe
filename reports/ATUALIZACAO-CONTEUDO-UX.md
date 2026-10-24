# Atualização de conteúdo e experiência — 23/10/2026

## Implementação

- Fotos enviadas pelo cliente e três publicações recentes do Instagram importadas em WebP local. A imagem duplicada de delivery foi usada uma única vez. As fotos originais foram preservadas.
- A home usa fotos diferentes no carrossel, nos pratos, no ambiente, nos destaques e no convite para delivery.
- Conteúdo organizado em sabores, ambiente/adega, playground, música, aniversário, jogos, ampliação, horários, avaliações, história, delivery e contato.
- Formulário com nome, telefone, motivo, data, horário, pessoas e observações; revisão antes de abrir o WhatsApp. Dados permanecem no navegador até o usuário continuar. A reserva depende da confirmação da equipe.
- Mapa incorporado ao lado do formulário no desktop, com rota externa e telefone; empilhamento no celular.
- Cardápio digital em modal com oito categorias, navegação e ampliação do texto; rota /cardapio preservada. Os nomes e acompanhamentos vieram do Google, sem reproduzir preços antigos.
- Horários em modal: todos os dias, das 11h às 23h, conforme o Instagram oficial.
- Rodapé completo, centralizado no celular; atalhos fixos para cardápio, rota e reserva.
- Ícone de chef com contraste maior e selo 1994 em verde com anel animado, respeitando movimento reduzido.
- Métricas distinguem abertura de formulário do clique final para WhatsApp. Dados pessoais não aparecem nos atributos de métricas nem em links do DOM.

## Fontes e critérios

O [perfil oficial do Instagram](https://www.instagram.com/chicodopeixesantaines/) prevalece sobre horários e serviços divergentes do Google e do site legado.

| Destaque | Informação encontrada e tratamento |
| --- | --- |
| [Playground](https://www.instagram.com/stories/highlights/17946240580780111/) | Estrutura infantil interna com brinquedos. Sem promessa de gratuidade, monitoria ou faixa etária não confirmadas. |
| [Aniversário](https://www.instagram.com/stories/highlights/18016088645088708/) | Publicação antiga com petit gâteau para aniversariante e condições. O site convida a consultar as condições atuais, sem publicar promoção vencida. |
| [Ampliação](https://www.instagram.com/stories/highlights/17887951758162849/) | Vídeo sobre a reforma/ampliação, exibido como publicado há 71 semanas. Não é anunciado como uma inauguração atual. |
| [Jogos ao vivo](https://www.instagram.com/stories/highlights/17914935719904657/) | Futebol ao vivo e campeonatos divulgados pela casa. Promoção antiga de rodada dupla não foi reproduzida. Partidas devem ser confirmadas. |
| [Pratos da casa](https://www.instagram.com/stories/highlights/17904561611200887/) | Vídeos gastronômicos; o primeiro consultado identifica Piña Colada e seus ingredientes. Especialidades foram cruzadas com o cardápio público do Google. |
| [Horários](https://www.instagram.com/stories/highlights/18009775027362872/) | Arte do iFood com todos os dias, 11h às 23h; compatível com a bio atual. |

O [Google Maps da unidade](https://www.google.com/maps/place/Chico+do+Peixe+santa+In%C3%AAs/@-19.8776836,-43.9091697,17z/data=!3m1!4b1!4m6!3m5!1s0xa69afea20e4845:0xf00f09c1fcf43939!8m2!3d-19.8776836!4d-43.9091697!16s%2Fg%2F1yh4g8vr7) mostrava nota 4,3 e 4.980 avaliações. A seção informa a data da consulta e leva às opiniões completas. A nota é uma fotografia da consulta, sem atualização automática ou avaliações inventadas. Não foi inserido aggregateRating no schema do próprio restaurante.

O cardápio público consultado inclui peixes, moquecas, filés com acompanhamentos, camarões, porções, carnes, guarnições, sobremesas e cervejas. Os dados textuais consultados estão em cardapio-google-consulta.json; a seleção editorial está em content/cardapio.ts. Valores e disponibilidade ficam para consulta à equipe. A interação foi inspirada no modal do [Copa Cozinha](https://copacozinha.vercel.app/).

## Validação

TypeScript sem erros. Modal testado com seleção de categoria, texto maior, Escape e retorno de foco. Formulário testado com telefone inválido, data passada e mensagem válida com revisão; nenhuma mensagem de teste foi enviada.

O Turbopack falhou ao iniciar o processo de CSS no Windows. Os scripts de desenvolvimento e build usam a alternativa oficial Webpack (`npm run dev` e `npm run build`) para manter a execução estável neste ambiente. O Chrome com extensão ativa apresentou interferência em HTML (id btc_aprume); a prévia sem extensões carregou sem erros de hidratação.

Verificação final: dez rotas HTTP 200, um H1 e canonical por página, cinco redirecionamentos legados 308, imagem servida como image/webp (48.480 bytes na largura 640). Sem transbordamento horizontal em 320, 390, 768, 900 e 1440 px. Rodapé centralizado no celular. O mapa oficial foi obtido em Compartilhar → Incorporar um mapa e validado com marcador da unidade e mapa carregado. A auditoria encontrou 11 fotografias distintas na home, todas em WebP.

Telas: [abertura desktop](atualizacao-desktop.webp), [destaques](destaques-desktop.webp), [formulário e mapa](contato-desktop.webp), [cardápio mobile](cardapio-mobile.webp), [horários mobile](horarios-mobile.webp) e [rodapé mobile](rodape-mobile.webp).
