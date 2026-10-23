import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const raiz = new URL('../', import.meta.url);
const destino = new URL('public/proposta/fotos/', raiz);
const fotografias = [
  {
    nome: 'buffet-principal',
    arquivo: 'WhatsApp Image 2026-10-23 at 13.20.07 (2).jpeg',
  },
  {
    nome: 'sabores-do-almoco',
    arquivo: 'WhatsApp Image 2026-10-23 at 13.20.07 (1).jpeg',
  },
  {
    nome: 'saladas-da-casa',
    arquivo: 'WhatsApp Image 2026-10-23 at 13.20.07.jpeg',
  },
  {
    nome: 'nossa-adega',
    arquivo: 'WhatsApp Image 2026-10-23 at 13.20.04 (1).jpeg',
  },
  {
    nome: 'mesa-de-sabores',
    arquivo: 'WhatsApp Image 2026-10-23 at 13.20.09 (1).jpeg',
  },
];

await mkdir(destino, { recursive: true });
const inventario = [];

for (const fotografia of fotografias) {
  const origem = new URL(`FotosNovas/${fotografia.arquivo}`, raiz);
  const metadados = await sharp(fileURLToPath(origem)).metadata();
  const versoes = [];

  for (const largura of [480, 960]) {
    const arquivo = `${fotografia.nome}-${largura}.webp`;
    const resultado = await sharp(fileURLToPath(origem))
      .rotate()
      .resize({ width: largura, withoutEnlargement: true })
      .webp({ quality: 82, effort: 5 })
      .toFile(fileURLToPath(new URL(arquivo, destino)));

    versoes.push({
      arquivo,
      largura: resultado.width,
      altura: resultado.height,
      bytes: resultado.size,
    });
  }

  inventario.push({
    origem: fotografia.arquivo,
    larguraOriginal: metadados.width,
    alturaOriginal: metadados.height,
    versoes,
  });
}

await writeFile(
  new URL('reports/fotos-proposta.json', raiz),
  JSON.stringify(inventario, null, 2) + '\n',
);
console.log(
  'Cinco fotografias preparadas em dois tamanhos WebP. Originais preservados.',
);
