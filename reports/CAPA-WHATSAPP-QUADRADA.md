# Capa quadrada para a miniatura do WhatsApp

A captura enviada pelo cliente mostra o cartão com imagem quadrada ao lado do texto. A capa anterior tinha proporção horizontal 1200 × 630: no recorte central, parte da logo e do slogan ficava fora da miniatura.

## Entrega

- `public/capa-chico-whatsapp-v3.jpg`: JPEG 1080 × 1080, cerca de 179 KiB, usado como og:image nas oito páginas.
- `public/capa-chico-whatsapp-v3.webp`: versão WebP, cerca de 150 KiB.
- `reports/capa-whatsapp-miniatura.webp`: conferência visual em 160 × 160.
- Marca centralizada, nome da unidade e margens de segurança; sem slogan pequeno ou fotografia dividindo espaço na miniatura.
- O Twitter mantém a capa horizontal gastronômica anterior.
- Nome de arquivo novo para distinguir a imagem da versão armazenada em cache. A decisão sobre cartão pequeno ou grande continua pertencendo ao aplicativo.

## Geração

Ferramenta integrada image_gen; referência: marca circular em `public/images/atualizadas/marca-instagram.webp`. Original preservado na pasta de imagens geradas. Apenas redimensionamento proporcional e exportação JPEG/WebP após a geração.

Prompt: Create ONE square 1080 x 1080 social link thumbnail for Brazilian restaurant Chico do Peixe Santa Inês, specifically optimized for a VERY SMALL 120 x 120 square thumbnail in WhatsApp. Use the reference logo as the exact existing brand identity: white crescent fish-C with green eye and the exact large condensed stacked lettering CHICO DO PEIXE, white on bright green circular disc. Preserve logo shape, spelling and arrangement faithfully. This is a clean brand cover, NOT a restaurant photograph or a web mockup. Deep forest green #174b35 background with extremely subtle premium paper grain and understated curved green line ornaments only at the far corners, very low contrast. Place one large complete circular logo centered, about 760 pixels diameter, at x540 y470. All of the white CHICO DO PEIXE brand lettering must remain sharp, bold, readable and fully visible within the circle. Under the logo, centered, add ONLY the exact text 'SANTA INÊS' in bold cream uppercase sans-serif, font around 78px, wide enough to remain readable when downscaled to 120px. No other added text. No slogan, no photographs, no food, no URLs, no shadow mockup, no side-by-side layout. Safe padding at least 90px all sides. The complete logo and subtitle must fit in the central 85% and remain visible when square-cropped. Professional polished minimal high-contrast branding matching a forest-green and cream restaurant site. Return the image as a local file.

## Verificação

Build de produção e TypeScript concluídos. Metadados do HTML gerado nas oito páginas conferidos: og:image aponta para a capa quadrada, com dimensões 1080 × 1080; twitter:image mantém o arquivo horizontal. Dimensões dos arquivos verificadas e miniatura inspecionada visualmente. A exibição real no WhatsApp requer novo deploy e nova consulta pelo aplicativo.
