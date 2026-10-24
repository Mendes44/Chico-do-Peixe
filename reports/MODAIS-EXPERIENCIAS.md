# Modais das experiências — 24/10/2026

- Ícones dos quatro destaques centralizados em círculos com a cor da marca; cartões inteiros acionáveis por mouse ou teclado.
- Fotos dos cartões de sabores, playground e música com cursor pointer e abertura de conteúdo próprio.
- Almoço, porções e adega possuem galerias com navegação e miniaturas. A adega mostra fotografias reais do espaço, provenientes de FotosNovas.
- Aniversário e encontro apresentam fotos e informações antes do formulário; o motivo correspondente é selecionado automaticamente. Há opção de voltar às fotos.
- Jogos e espaço ampliado apresentam conteúdo informativo, sem encaminhamento para formulário.

## Imagens específicas dos quatro destaques

| Tema | Imagem | Fonte |
| --- | --- | --- |
| Aniversário | Petit gâteau com sorvete e morangos | [Destaque Aniversário](https://www.instagram.com/stories/highlights/18016088645088708/) |
| Jogos | Clientes nas mesas durante transmissão | [Destaque Jogos ao Vivo](https://www.instagram.com/stories/highlights/17914935719904657/) |
| Mais espaço | Bancos verdes, mural e bar | [Publicação dos ambientes](https://www.instagram.com/chicodopeixesantaines/p/DdJ8hUPEezS/) |
| Encontro | Amigas reunidas com porções e drinks | [Destaque Clientes](https://www.instagram.com/stories/highlights/17891365529190970/) |

Cada tema usa arquivos próprios. Os registros históricos não são apresentados como programação ou promoção vigente. O enquadramento do vídeo de aniversário destaca a sobremesa e não divulga a oferta antiga. Nenhuma cena de clientes ou ambiente foi inventada.

Imagens em WebP, com carregamento responsivo pelo Next/Image. Ambientes preparados em 1920 × 2560 a partir de originais 3072 × 4096. Quadros de aniversário e encontro extraídos das versões 1080p dos vídeos públicos; jogos preserva os 720 × 1280 disponíveis. Dimensões e fontes estão em ativos-instagram.json.

## Verificação

- Build de produção Webpack e TypeScript concluídos; lint sem erros.
- Nove conteúdos de experiências conferidos no navegador, incluindo galerias e ausência de formulário em jogos/espaço.
- Aniversário → formulário com motivo aniversário; encontro → formulário com motivo reserva; retorno ao conteúdo anterior.
- Horários com os sete dias; Escape fecha e devolve foco ao acionador.
- Celular em 390 × 844: modal e formulário sem rolagem horizontal, foto proporcional e CTA acessível por rolagem.
- Cursor pointer confirmado no estilo computado das fotos e da área acionável dos cartões.
