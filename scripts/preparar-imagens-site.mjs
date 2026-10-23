import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const raiz = new URL('../', import.meta.url);
const destino = new URL('public/images/atualizadas/', raiz);
const fotografias = [
  ['buffet-principal', 'WhatsApp Image 2026-10-23 at 13.20.07 (2).jpeg'],
  ['sabores-do-almoco', 'WhatsApp Image 2026-10-23 at 13.20.07 (1).jpeg'],
  ['saladas-da-casa', 'WhatsApp Image 2026-10-23 at 13.20.07.jpeg'],
  ['nossa-adega', 'WhatsApp Image 2026-10-23 at 13.20.04 (1).jpeg'],
  ['mesa-de-sabores', 'WhatsApp Image 2026-10-23 at 13.20.09 (1).jpeg'],
];
await mkdir(destino, { recursive: true });
const inventario = [];
for (const [nome, arquivo] of fotografias) {
  const original = await readFile(new URL(`FotosNovas/${arquivo}`, raiz));
  const resultado = await sharp(original)
    .rotate()
    .resize({ width: 960, withoutEnlargement: true })
    .webp({ quality: 74, effort: 6 })
    .toFile(fileURLToPath(new URL(`${nome}.webp`, destino)));
  inventario.push({
    arquivo: `${nome}.webp`,
    origem: arquivo,
    bytesOriginais: original.length,
    bytes: resultado.size,
    largura: resultado.width,
    altura: resultado.height,
  });
}

const fundo = await sharp(
  fileURLToPath(new URL('buffet-principal.webp', destino)),
)
  .resize(660, 630, { fit: 'cover' })
  .toBuffer();
const titulo = Buffer.from(
  '<svg width="540" height="630"><rect width="540" height="630" fill="#174b35"/><g fill="#f8f6ef" font-family="Georgia,serif"><text x="54" y="240" font-size="63">Chico do Peixe</text><text x="54" y="320" font-size="36" font-style="italic">O sabor dos</text><text x="54" y="370" font-size="36" font-style="italic">bons encontros.</text></g><text x="54" y="490" fill="#dce8cd" font-family="Arial,sans-serif" font-size="22">SANTA INÊS · BELO HORIZONTE</text></svg>',
);
const social = await sharp({
  create: { width: 1200, height: 630, channels: 3, background: '#174b35' },
})
  .composite([
    { input: titulo, left: 0, top: 0 },
    { input: fundo, left: 540, top: 0 },
  ])
  .webp({ quality: 78, effort: 6 })
  .toFile(fileURLToPath(new URL('public/og.webp', raiz)));
inventario.push({
  arquivo: 'og.webp',
  bytes: social.size,
  largura: social.width,
  altura: social.height,
});
await writeFile(
  new URL('reports/imagens-site.json', raiz),
  JSON.stringify(inventario, null, 2) + '\n',
);
console.log(inventario);
