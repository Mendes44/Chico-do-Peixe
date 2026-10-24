# Restauração das imagens — 24/10/2026

As fotos fornecidas pelo cliente foram restauradas com a ferramenta integrada de edição de imagens (image_gen), sem uso da API/CLI externa. São versões reconstruídas por IA de fontes pequenas, não novos arquivos originais capturados em HD. As fontes anteriores permanecem preservadas.

## Arquivos finais

- [Playground restaurado](../public/images/atualizadas/playground-criancas-hd.webp): 1448 × 1086, WebP, 279.308 bytes.
- [Músico com enquadramento aberto](../public/images/atualizadas/musica-ao-vivo-hd.webp): 1448 × 1086, WebP, 152.110 bytes.
- [Músico em retrato para agenda e galeria](../public/images/atualizadas/musica-ao-vivo-retrato-hd.webp): 1105 × 1423, WebP, 166.304 bytes.

Os cartões da home passaram a respeitar a proporção 4:3 das imagens, sem a altura fixa que cortava o músico. A qualidade de entrega dessas duas fotos foi ajustada para 85, mantendo WebP e tamanhos responsivos. O playground teve a moldura de colagem removida; o músico teve os controles do Instagram removidos e o fundo desfocado estendido para acomodar o enquadramento horizontal.

## Prompts finais utilizados

### Playground

Use case: precise-object-edit. Asset type: authentic restaurant website photograph restoration. Input image 1 is the edit target, a low-resolution photograph of the real Chico do Peixe indoor playground presented in a green decorative photo collage. Restore and upscale the central playground photograph into a clean, detailed high-resolution photograph, landscape 4:3. Improve compression artifacts, edge clarity, natural lighting and fine texture without making it look artificial. Remove only the green collage background and overlapping white photo-frame borders by using the central photograph as the image. Preserve the SAME actual viewpoint, orange pillars, multicolor padded climbing structure, netting, dark tube/slide, ceiling, spatial layout and all real equipment. Keep the partially visible people as in the reference, with no invented identifiable faces. Do not add toys, change architecture, expand the facility, or invent objects or lettering. This documents a real business, so fidelity to the reference is essential. No text, no borders, no extra logos. Photorealistic faithful restoration, not a redesigned playground.

### Músico — restauração do retrato

Use case: identity-preserve. Asset type: authentic restaurant website photo restoration. Input image 1 is the edit target, a real man playing acoustic guitar in the Chico do Peixe restaurant. Restore and upscale this EXACT photo to a crisp natural high-resolution portrait, maintaining the original vertical composition around 4:5. Preserve the SAME man, facial identity, side profile, hair, beard, expression, clothing, natural skin texture, body pose, BOTH hands and their exact interaction with the SAME guitar, guitar body and full neck/headstock, warm restaurant background and umbrellas. Keep the entire head and as much of the guitar body as the original contains, with the right hand and left hand clearly visible. Do not turn this into a headshot. Remove ONLY Instagram interface artifacts: the white circular arrow near the right edge, the dots along the bottom, and the small person-tag icon at bottom-left. Reconstruct only the tiny areas occluded by these interface controls, maintaining guitar strings and fingers accurately. Reduce compression and sharpen gently; no waxy skin, no identity changes, no invented branding or text, no extra objects, no dramatic color changes. Photorealistic faithful restoration.

### Músico — composição horizontal

Use case: identity-preserve. Edit target: this restored portrait photo of the guitarist. Output: a landscape 4:3 photograph for a restaurant website card. Reframe by zooming OUT and extending only the blurred restaurant background naturally on both sides. Keep the SAME exact man with unchanged facial identity, side profile, hair, beard, skin texture, black shirt, pose, both hands and SAME guitar. It is critical that the WHOLE head with hair, BOTH hands, guitar headstock and almost all guitar body visible in the input are comfortably inside the landscape frame, with a little breathing room above the head. Do NOT crop the person into a headshot; do NOT crop the strumming hand or guitar neck. Preserve the proportions of the original person and instrument, do not stretch. The person and guitar should be fitted inside a wider landscape canvas with the extra area consisting ONLY of softly blurred restaurant colors from the input: warm wood, red umbrellas and dark vertical pillars. No new people, no new identifiable architecture, no added instruments, no text, no logos, no borders, no Instagram controls. Photorealistic, crisp and natural. Faithful outpainting for composition, not a new portrait.

## Validação

Build de produção e TypeScript aprovados. As duas imagens carregaram na prévia local usando a qualidade 85. A proporção 4:3 mantém o enquadramento sem esticar a fotografia. Os originais em baixa resolução foram preservados.

Preferência de imagens em alta definição registrada no AGENTS.md. Prévia conferida no desktop e em 390 px, sem rolagem horizontal. [Desktop](restauracao-desktop.webp) · [Celular](restauracao-mobile.webp).
