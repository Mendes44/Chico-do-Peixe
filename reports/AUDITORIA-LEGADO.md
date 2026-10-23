# Auditoria inicial — Chico do Peixe

Data: 23/10/2026, horário de São Paulo. Escopo: HTML público da entrada, home de Santa Inês e história; URLs públicas encontradas na navegação/pesquisa; perfil do Instagram; código local existente. Não é uma auditoria de contas privadas nem um crawl completo do domínio.

## Evidências preservadas

| Consulta                                                                   | Resposta | Evidência local                            |
| -------------------------------------------------------------------------- | -------- | ------------------------------------------ |
| `https://www.chicodopeixe.com.br/`                                         | 200      | `legado/entrada.txt`                       |
| `https://www.chicodopeixe.com.br/santaines/`                               | 200      | `legado/santaines.txt`                     |
| `https://www.chicodopeixe.com.br/santaines/interno.php?Conteudo=quemsomos` | 200      | `legado/historia.txt`                      |
| `https://www.chicodopeixe.com.br/robots.txt`                               | 404      | Resposta HTTP da consulta; sem corpo salvo |
| `https://www.chicodopeixe.com.br/sitemap.xml`                              | 404      | Resposta HTTP da consulta; sem corpo salvo |

Os `.txt` preservam o HTML retornado, sem editar. Links em comentários do código não comprovam unidades ativas. A verificação de 404 corresponde somente aos dois endereços acima; não exclui sitemap em outro caminho.

## SEO observado

- A entrada se apresenta como marca com unidades. A navegação visível aponta para Santa Inês. Outras unidades aparecem em trechos comentados e há URLs de Concórdia encontradas na pesquisa pública; não descartar esse histórico.
- Títulos atuais usam marca, unidade e a assinatura sobre o sabor do peixe. A descrição de Santa Inês inclui o telefone `(31) 3485-0258`.
- `meta keywords` da entrada contém marca, unidades, cerveja e bares em BH; da unidade contém marca e Santa Inês. São indícios do foco editorial histórico, não dados de ranking/volume. Essas tags não substituem conteúdo, títulos e SEO local.
- A home de Santa Inês usa vários H1 para boas-vindas, comodidades, cardápio e galeria; a nova página deve ter hierarquia clara com um H1 e H2 nas seções.
- Não localizados canonical, JSON-LD ou `google-site-verification` no HTML das três páginas inspecionadas.
- Há fontes solicitadas por HTTP e uma sequência extensa de plugins JavaScript antigos. A nova versão deve servir fontes e imagens locais otimizadas e reduzir JavaScript.
- As URLs PHP e o parâmetro `Conteudo` aparecem nos links públicos e em resultados de busca; preservar a intenção de cada URL com redirects específicos.

## Medição e verificação de propriedade

| Sinal               | Resultado                                                             | Limite da conclusão                                                                |
| ------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Universal Analytics | **`UA-83961995-1`**, com `analytics.js` e chamada `ga('create', ...)` | Encontrado na entrada, linhas 24–32 do snapshot                                    |
| GA4 / GTM           | Nenhum ID localizado no HTML inspecionado                             | Não comprova ausência em scripts carregados dinamicamente ou outras páginas        |
| Google Ads          | Nenhum `AW-...` localizado no HTML inspecionado                       | Contas/campanhas não foram acessadas                                               |
| Meta Pixel          | Nenhum `fbq`/ID de pixel localizado no HTML inspecionado              | O SDK social do Facebook **está presente**, mas não é prova de pixel               |
| Search Console      | Sem metatag de verificação localizada                                 | Verificação pode ser por DNS ou arquivo; nenhum acesso à propriedade foi realizado |

O identificador UA é um vestígio que deve constar do inventário. Encontrá-lo no código não recupera relatórios nem demonstra tráfego atual. Procurar uma propriedade GA4 existente e eventuais exportações históricas antes de definir a nova medição. [Limitações de migração do UA, pelo Google](https://support.google.com/analytics/answer/14196937?hl=pt-BR).

O código local já tem carregamento opcional de GA4 por variável de ambiente e consentimento; isso não confirma configuração em produção. O exemplo contém `G-XXXXXXXXXX`, que é apenas um placeholder. Não copiar esse valor para produção.

## Dados comerciais e divergências

| Dado     | Site antigo                                        | Instagram inspecionado                             | Diretriz                                                          |
| -------- | -------------------------------------------------- | -------------------------------------------------- | ----------------------------------------------------------------- |
| Telefone | `(31) 3485-0258`                                   | Mesmo telefone                                     | Preservar e conferir com operação                                 |
| WhatsApp | `(31) 99153-6420`                                  | Mesmo número                                       | Usado nos CTAs do protótipo                                       |
| Endereço | Entrada: Rua Contagem; unidade: Av. Contagem, 2165 | Rua Contagem, 2165, Santa Inês                     | Protótipo segue o Instagram; padronizar no site/Maps após validar |
| Horários | Domingo–quinta 11h–0h; sexta/sábado 11h–1h         | Todos os dias, 11h–23h                             | Protótipo segue o perfil atual; confirmar antes do lançamento     |
| Reservas | Mínimo de 10 pessoas e confirmação por e-mail      | Sem condições detalhadas na bio                    | CTA de consulta, sem prometer confirmação automática              |
| Almoço   | Cardápio e informações históricas                  | Post de self-service de segunda a sábado no almoço | Usado na narrativa; não presumir o mesmo serviço no domingo       |
| Adega    | Sem destaque no HTML consultado                    | Post anuncia nova adega                            | Fotos novas e referência sustentam a seção                        |

Fontes do Instagram: [perfil](https://www.instagram.com/chicodopeixesantaines/), [localização](https://www.instagram.com/chicodopeixesantaines/p/DNzEIKXYmNM/), [self-service](https://www.instagram.com/chicodopeixesantaines/reel/DerSJbFRIVc/), [nova adega](https://www.instagram.com/chicodopeixesantaines/p/DeruGsikfH8/). Acesso pelo navegador; a consulta pública de pesquisa não conseguiu carregar o perfil.

A história de 1994 se refere à origem da **marca no bairro Concórdia**, não à data comprovada de abertura da unidade Santa Inês. Evitar transformar esse dado em uma afirmação sobre a idade da unidade.

## Pontos da base local para a próxima etapa

1. Há Next.js/React/TypeScript/Tailwind instalados, imagens locais, metadados e consentimento; reaproveitar essa base.
2. `site.url` inclui `/santaines`; não existe `basePath` em `next.config.ts`. Resolver a montagem antes de publicar para que canônicos, sitemap, rotas e assets coincidam.
3. O sitemap e o cabeçalho apontam para `/atracoes`, mas essa rota não tem página no diretório `app` inspecionado.
4. Sitemap usa `new Date()` para todas as URLs; usar datas de alteração reais quando houver gestão editorial.
5. Conteúdo e JSON-LD repetem os horários antigos. Atualizar ambos a partir de fonte única após validação.
6. Não há redirects do legado na configuração Next.js inspecionada. O mapa de migração está no plano; nenhum redirect foi ativado nesta entrega.

## Limitações e próximos insumos

Não foram acessados GA4, GSC, Ads, Meta Business ou DNS autenticados. Nenhuma afirmação sobre ranking, tráfego, volume de palavras-chave, conversões, propriedade de contas ou recuperação de histórico pode ser feita só com o código público.

Para concluir a migração: exportar URLs e desempenho do GSC/logs quando disponíveis, confirmar fontes de tráfego e identificadores de contas existentes, validar dados comerciais e testar a matriz de redirecionamentos no ambiente escolhido. A ausência de metatag GSC não significa ausência de propriedade verificada.
