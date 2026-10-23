# Chico do Peixe Santa Inês — proposta de redesign

> Atualização de 23/10/2026: o redesign foi integrado ao Next.js, com carrossel
> Motion, imagens WebP e conteúdo comercial do Instagram. Este documento mantém
> a proposta conceitual inicial. O estado implementado e a verificação estão em
> [IMPLEMENTACAO-REDESIGN.md](../reports/IMPLEMENTACAO-REDESIGN.md).

Preparado em 23/10/2026. Escopo desta entrega: estratégia, protótipo navegável e plano de implementação. Nenhuma publicação ou alteração do domínio foi realizada.

## Direção de marca

**Ideia central: “O sabor dos bons encontros”.** Uma casa de peixes que também é destino para almoço, encontro de amigos e vinho. Sofisticar a apresentação mantendo a familiaridade da marca.

O [Instagram da unidade](https://www.instagram.com/chicodopeixesantaines/) foi inspecionado no navegador. O avatar e os destaques usam verde e branco; os posts mostram madeira, iluminação quente, buffet, mural verde e adega. A paleta abaixo é uma proposta derivada dessas referências, não uma especificação oficial extraída de manual da marca.

| Papel           | Cor proposta | Aplicação                                |
| --------------- | ------------ | ---------------------------------------- |
| Verde principal | `#174B35`    | Botões, navegação, seção de visita       |
| Verde profundo  | `#123B2B`    | Estados de interação                     |
| Verde claro     | `#DCE8CD`    | Etiquetas e contraste com fundos escuros |
| Creme           | `#F8F6EF`    | Fundo principal, sensação acolhedora     |
| Areia           | `#EEEAE0`    | Alternância entre seções                 |
| Texto           | `#24382C`    | Leitura principal                        |

Tipografia: títulos com serifa expressiva e texto sem serifa. O protótipo usa Georgia/Arial, sem requisições de fontes externas. A base Next.js já tem Fraunces/DM Sans via `next/font`, adequadas para a implementação final.

Manter a identificação da marca. O protótipo conserva o logotipo disponível no repositório, ainda com a moldura de madeira. Para a versão final, substituir pelo arquivo vetorial aprovado da assinatura verde atual do Instagram; não redesenhar o símbolo a partir de uma captura.

## Estrutura e jornada de conversão

| Ordem | Seção                  | Conteúdo e função                                              | Ação principal                                     |
| ----- | ---------------------- | -------------------------------------------------------------- | -------------------------------------------------- |
| 1     | Cabeçalho compacto     | Marca, unidade e navegação curta                               | Consultar reserva                                  |
| 2     | Abertura               | Foto real grande, mensagem de encontro, localização e tradição | Traçar rota; explorar sabores                      |
| 3     | Faixa de experiências  | Peixes/porções, almoço e vinhos                                | Ajudar a reconhecer a oferta                       |
| 4     | Sabores                | Buffet, acompanhamentos e adega; acesso aos peixes e porções   | Ver cardápio completo                              |
| 5     | Ambiente               | Fotografias reais, convite para família e amigos               | Conhecer o espaço e Instagram                      |
| 6     | História               | Origem da marca em 1994, em Concórdia                          | Reforçar confiança sem confundir a data da unidade |
| 7     | Avaliações verificadas | Na implementação final: depoimentos com origem e data          | Consultar avaliações no Google                     |
| 8     | Planeje sua visita     | Endereço, horários, telefone e rota                            | Abrir Maps ou consultar reserva                    |
| 9     | Rodapé                 | Contatos, redes e privacidade                                  | Reforçar localização e atendimento                 |

No celular: conteúdo em uma coluna, menu expansível e barra fixa com **Como chegar** e **Consultar reserva**, respeitando a área segura do aparelho. Alvos de toque de pelo menos 44px, foco visível, menu operável por teclado e suporte a redução de movimento.

O botão de WhatsApp abre uma consulta. Não significa reserva confirmada. Não apresentar contadores de mesas, disponibilidade em tempo real ou “aberto agora” sem dados operacionais confiáveis.

No protótipo, a prova social é um link para a busca do estabelecimento no Maps. Não foram inventadas notas, quantidades de avaliações ou depoimentos. O mapa incorporado pode ser ativado sob demanda na versão final; a rota já abre diretamente no Google Maps.

## Curadoria das novas fotografias

Foram inspecionadas as **22 fotos** de `FotosNovas`. Predominam buffet e adega; não há ensaio de pratos de peixe empratados. A proposta usa cinco delas, sem atribuir nomes de pratos que as imagens não comprovem.

As cópias têm 480px e 960px, WebP, com orientação corrigida e metadados descartados. As fotos selecionadas têm origem de 960 × 1280px; não ampliar artificialmente para 1440px. Originais intactos. O inventário em `reports/fotos-proposta.json` registra nomes, dimensões e bytes de saída.

Para a home final, priorizar uma nova foto horizontal de peixe, com enquadramento para celular e espaço para a composição do título. Até existir esse ativo, o buffet real é uma abertura honesta e apetitosa. Não substituir comida do restaurante por imagens genéricas ou imagens geradas.

## Stack recomendada

**Manter Next.js App Router + React + TypeScript**, já instalados. Reaproveitar Tailwind CSS 4, `next/image`, Sharp e `next/font`. Não há necessidade de migrar framework para este trabalho.

- Gerar conteúdo institucional no servidor e preferir páginas estáticas. JavaScript no cliente apenas para menu, filtros de cardápio, consentimento e ações que precisarem de estado.
- CSS com variáveis de marca e classes semânticas em português. O protótipo mostra essa convenção. Se o Tailwind for usado, manter utilitários dentro de componentes e abstrações; seus nomes nativos e as APIs do framework permanecem como definidos pelas bibliotecas.
- Componentes de domínio: `Cabecalho`, `Abertura`, `CartaoSabor`, `SecaoAmbiente`, `SecaoHistoria`, `Avaliacoes`, `PlanejarVisita`, `AtalhosCelular`, `Rodape`.
- Conteúdo centralizado em um arquivo tipado, com propriedades como `nome`, `endereco`, `horarios`, `whatsapp`, `imagens` e `pratos`. Evitar repetir informações entre rodapé, metadados e JSON-LD.
- Microinterações de 150–250ms com CSS. Motion for React é opcional para interações mais complexas; não acrescentar a dependência para efeitos simples. Respeitar [redução de movimento](https://motion.dev/docs/react-accessibility).
- Hospedagem compatível com Next.js. A base já contém configuração Vercel; avaliar outro destino somente se houver necessidade operacional. Esta entrega permanece local.

O protótipo é HTML/CSS/JS independente, para revisão rápida sem alterar as páginas existentes. Seus blocos correspondem aos componentes React propostos. Na integração, os links de cardápio e história devem apontar para as novas rotas; neste protótipo, abrem as páginas reais do legado.

## SEO e migração

A [auditoria do legado](../reports/AUDITORIA-LEGADO.md) documenta as evidências e limitações. A mudança deve manter o domínio e, inicialmente, o prefixo **`/santaines`**, preservando a identificação da unidade e as URLs conhecidas.

| URL antiga                                    | Destino planejado     | Tratamento                       |
| --------------------------------------------- | --------------------- | -------------------------------- |
| `/santaines/`                                 | `/santaines/`         | Manter URL                       |
| `/santaines/index.php`                        | `/santaines/`         | 301 direto                       |
| `/santaines/interno.php?Conteudo=quemsomos`   | `/santaines/sobre`    | 301 por parâmetro                |
| `/santaines/interno.php?Conteudo=cardapio`    | `/santaines/cardapio` | 301 por parâmetro                |
| `/santaines/interno.php?Conteudo=reservas`    | `/santaines/reservas` | Criar página antes de ativar 301 |
| `/santaines/interno.php?Conteudo=faleconosco` | `/santaines/contato`  | 301 por parâmetro                |

Preservar a entrada `/` e não redirecionar páginas de Concórdia/Floramar para Santa Inês em massa. Os vínculos e a situação das outras unidades precisam ser tratados no inventário do domínio. Parâmetros desconhecidos não devem cair todos na home. Preservar UTMs/gclid quando aplicável, evitando cadeias de redirects. A configuração definitiva deve ser testada no servidor escolhido, incluindo correspondência de `Conteudo` e comportamento de query strings.

**Inconsistência atual da base:** `content/site.ts`, canônicos e sitemap assumem `/santaines`, mas as rotas App Router estão na raiz e `next.config.ts` não define `basePath`. Antes do lançamento, escolher uma estratégia coerente de montagem, links, arquivos públicos e proxy. Recomendação: montar esta aplicação em `/santaines`, ajustar os assets para o prefixo e manter a entrada do domínio sob responsabilidade do host. Não basta mudar apenas a URL canônica.

- H1 único com referência à marca e localização no contexto da página; títulos e descrições específicos por rota. Usar naturalmente “restaurante de peixe em BH”, “Chico do Peixe Santa Inês”, “peixe em Belo Horizonte”, “almoço em Santa Inês” e “bar em Santa Inês”. São alvos editoriais propostos, sem alegação de volume de busca.
- Dados estruturados `Restaurant`: nome, endereço validado, telefone, horários, imagens próprias, URL e cardápio. Gerar a partir da mesma fonte do conteúdo visível. Não adicionar avaliação agregada da própria empresa para prometer estrelas no Google. [Referência Google](https://developers.google.com/search/docs/appearance/structured-data/local-business).
- `app/sitemap.ts` já existe: corrigir a origem/prefixo e incluir somente rotas canônicas publicadas com resposta 200. `/atracoes` está listado mas não tem `page.tsx` na base inspecionada. Criar a rota ou remover a referência. Usar data editorial real em `lastModified`, evitando `new Date()` em toda geração sem mudança de conteúdo. [Referência Next.js](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap).
- `robots.txt` precisa ser servido na **raiz do domínio**. Se a aplicação estiver sob `/santaines`, hospedar o robots na raiz via host e apontar para `https://www.chicodopeixe.com.br/santaines/sitemap.xml`, ou para um sitemap índice na raiz que o inclua. O arquivo atual aponta para o sitemap da raiz: alinhar com a implantação efetiva.
- Produção: indexação liberada para páginas públicas, sem bloquear CSS/imagens. Staging: autenticação ou `noindex`; protótipo fora do sitemap. `robots.txt` não é controle de acesso e não deve impedir o crawler de ler um `noindex`.
- Validar redirect 301, destino 200, canônico final e ausência de loops para cada linha do mapa. Atualizar links internos, enviar sitemap no GSC e acompanhar cobertura, erros 404 e desempenho depois da migração. [Referência Google sobre migrações](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes).

## Medição orientada à visita

Foi encontrado **`UA-83961995-1`** na entrada do legado. É uma identificação histórica de Universal Analytics; não reativá-la como GA4. O histórico UA não é importável no GA4. Verificar se há arquivos exportados anteriormente e uma propriedade GA4 já existente antes de criar uma nova. [Referência Google](https://support.google.com/analytics/answer/14196937?hl=pt-BR).

| Evento proposto   | Disparo                          | Interpretação              |
| ----------------- | -------------------------------- | -------------------------- |
| `clique_rota`     | CTA de rota/Maps                 | Intenção de visita         |
| `clique_reserva`  | WhatsApp com contexto de reserva | Solicitação de atendimento |
| `clique_whatsapp` | WhatsApp geral                   | Início de contato          |
| `clique_cardapio` | Acesso ao cardápio               | Interesse na oferta        |
| `clique_telefone` | Link `tel:`                      | Intenção de ligação        |

Enviar `posicao` (abertura, cabeçalho, rodapé, barra móvel) e `pagina` para comparar CTAs. Evitar dados pessoais e o texto das mensagens nos eventos. O protótipo só possui atributos `data-evento`; não envia telemetria. Na aplicação final, integrar com o mecanismo de consentimento existente e validar em GA4 DebugView. Clique em rota não prova chegada física; resultado de reservas deve vir da operação para medir conversão concluída.

A medição existente usa nomes em inglês (`reservation_click`, `map_click` etc.). Se já estiver em uso, mapear relatórios e conversões antes de renomear para não quebrar a série. Não instalar GA4 duplicado via código e GTM simultaneamente.

## Plano de desenvolvimento imediato

1. **Consolidar conteúdo:** validar endereço, horários, operação de buffet, condições de reserva, cardápio vigente e assinatura de marca. O Instagram informa 11h–23h diariamente; o legado informa horários diferentes. As novas páginas devem nascer de uma fonte única validada.
2. **Preparar migração:** complementar o inventário com GSC/logs/links de entrada; decidir roteamento `/santaines`; implementar redirects específicos e canonical consistente. Preservar eventual verificação de propriedade no DNS/host.
3. **Integrar o visual:** portar os blocos do protótipo para componentes de domínio em português, reaproveitando a base Next. Atualizar home, cardápio, história e contato; criar reservas e resolver atrações.
4. **Completar conteúdo:** incluir fotos dos peixes e ambiente, preços/cardápio aprovados, depoimentos verificáveis e mapa sob demanda. Não colocar promoções antigas sem reconfirmação.
5. **Otimizar e verificar:** `next/image` com dimensões e `sizes`, prioridade só na foto inicial; lazy loading abaixo da dobra; fontes locais. Metas, medidas em produção no percentil 75: LCP ≤ 2,5s, INP ≤ 200ms, CLS ≤ 0,1. São metas, não resultados desta entrega.
6. **Publicar e acompanhar:** executar build/typecheck, verificar navegação e teclado em 320/390/768/1440px, testar contatos/rotas e consentimento, validar dados estruturados e sitemap, confirmar redirects e monitorar GSC/GA4 após a troca.

## Como revisar esta entrega

Arquivo: `public/proposta/index.html`. Abrir diretamente no navegador ou executar `npm run dev` e acessar `http://localhost:3000/proposta/index.html`. A versão estática também pode ser servida com `python -m http.server 4173 --bind 127.0.0.1 --directory public`, em `http://127.0.0.1:4173/proposta/`.

Recriar as fotos otimizadas: `node scripts/preparar-fotos-proposta.mjs`.

O protótipo contém `noindex, nofollow`, não foi incluído no sitemap e não altera as rotas atuais. Os CTAs abrem os destinos reais de Maps/WhatsApp e páginas do legado; nenhuma mensagem, reserva ou avaliação foi enviada durante a validação.

## Verificação desta entrega

- Prévia estática com resposta HTTP 200 e inspeção visual no navegador.
- Larguras de 320, 390, 768, 900 e 1440px verificadas sem rolagem horizontal.
- Menu móvel abre, fecha por Escape e devolve o foco ao botão. Navegação por âncora para ambiente e visita verificada.
- No desktop, o CTA principal aparece na primeira tela de 900px de altura. No celular, a foto aparece na primeira tela e os atalhos permanecem fixos.
- HTML com um H1, seis imagens com texto alternativo, arquivos locais existentes, âncoras resolvidas e IDs únicos.
- JavaScript com sintaxe válida e seis arquivos de código/documentação verificados pelo formatador.
- Capturas em `reports/proposta-desktop.png` e `reports/proposta-mobile.png`.

O aplicativo Next.js não recebeu alterações de implementação, portanto não foi executado um novo build dele. Esta validação é do protótipo estático; Core Web Vitals, migração e integrações de produção continuam sendo etapas do plano.
