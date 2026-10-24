import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const raiz = new URL('../', import.meta.url);
const ativos = JSON.parse(
  await readFile(
    new URL(process.argv[2] || 'work/ativos-instagram.json', raiz),
    'utf8',
  ),
);
const destino = new URL('public/images/atualizadas/', raiz);
await mkdir(destino, { recursive: true });
const inventario = [];

for (const ativo of ativos) {
  const resposta = await fetch(ativo.url);
  if (!resposta.ok)
    throw new Error(`Falha ao obter ${ativo.nome}: ${resposta.status}`);
  const original = Buffer.from(await resposta.arrayBuffer());
  const metadados = await sharp(original).metadata();
  const largura = ativo.nome === 'marca-instagram' ? 240 : 1080;
  const arquivo = `${ativo.nome}.webp`;
  const resultado = await sharp(original)
    .rotate()
    .resize({ width: largura, withoutEnlargement: true })
    .webp({ quality: ativo.nome === 'marca-instagram' ? 90 : 80, effort: 6 })
    .toFile(fileURLToPath(new URL(arquivo, destino)));
  inventario.push({
    arquivo,
    fonte: ativo.origem,
    larguraOriginal: metadados.width,
    alturaOriginal: metadados.height,
    largura: resultado.width,
    altura: resultado.height,
    bytes: resultado.size,
  });
}

const caminhoInventario = new URL('reports/ativos-instagram.json', raiz);
let anteriores = [];
try {
  anteriores = JSON.parse(await readFile(caminhoInventario, 'utf8'));
} catch (erro) {
  if (erro.code !== 'ENOENT') throw erro;
}
const reunidos = new Map(
  [...anteriores, ...inventario].map((item) => [item.arquivo, item]),
);
await writeFile(
  caminhoInventario,
  JSON.stringify([...reunidos.values()], null, 2) + '\n',
);
console.log(inventario);
