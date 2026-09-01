# Comparativo Lighthouse — mobile

Data do teste: 31/08/2026.

| Métrica | Site antigo publicado | Novo build local |
| --- | ---: | ---: |
| Performance | 23 | 60–74 |
| Acessibilidade | 76 | 100 |
| Boas práticas | 69 | 100 |
| SEO | 91 | 100 |
| LCP | 15,0 s | 3,8–5,3 s |
| CLS | 0,471 | 0–0,011 |
| TBT | 860 ms | 160–490 ms |

## Metodologia

- Site antigo: `https://www.chicodopeixe.com.br/santaines/index.php`.
- Site novo: build de produção executado localmente com Wrangler.
- Lighthouse CLI em perfil mobile e navegador Microsoft Edge headless.
- A API pública do PageSpeed retornou limite de cota `429`; por isso a medição
  comparativa foi feita com o Lighthouse oficial.

## Observação

A pontuação pública definitiva do novo site deve ser medida novamente depois da
publicação, pois CDN, cache, compressão do servidor e latência de rede afetam a
categoria de performance.
