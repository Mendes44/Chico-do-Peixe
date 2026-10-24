import sharp from 'sharp';
import { mkdir, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const pasta = 'C:/Users/MARCOS~1/AppData/Local/Temp';
const destino = path.resolve('public/images/atualizadas');
const imagens = [
  ['58260f1c-f90d-48cd-8f3b-a2b10342d723', 'petiscos-e-bebidas'],
  ['261af84c-5569-420d-b86f-7bafd320d887', 'happy-hour-chico'],
  ['1310f0fa-f0af-4bc8-ae56-4f9f27e278f3', 'camaroes-com-drink'],
  ['55c9cf3d-8cd4-41f0-9bb1-31a18d6ff916', 'drink-abacaxi'],
  ['544bf022-b956-4ff5-be8a-8646d34e7a95', 'chope-chico'],
  ['a7857964-f614-41e6-83a5-429ec9e29327', 'musica-ao-vivo'],
  ['a66c7528-5bf8-465a-a70a-4eb46099eb43', 'delivery-ifood'],
  ['3ece706f-72de-47bb-b498-0f5d390bd7bd', 'playground-criancas'],
];
await mkdir(destino, { recursive: true });
const relatorio = [];
for (const [identificador, nome] of imagens) {
  let conversao = sharp(
    path.join(pasta, `codex-clipboard-${identificador}.png`),
  ).rotate();
  // Retira os controles do Instagram, preservando a fotografia original.
  if (nome === 'musica-ao-vivo')
    conversao = conversao.extract({ left: 0, top: 0, width: 500, height: 680 });
  const resultado = await conversao
    .resize({ width: 1080, withoutEnlargement: true })
    .webp({ quality: 79, effort: 6 })
    .toFile(path.join(destino, `${nome}.webp`));
  relatorio.push({
    nome,
    origem: 'Imagem do Instagram enviada pelo cliente',
    ...resultado,
  });
}
const originais = await readdir('FotosNovas');
const vinho = originais.find((nome) => nome.includes('13.20.04 (2)'));
if (vinho) {
  const resultado = await sharp(path.join('FotosNovas', vinho))
    .rotate()
    .resize({ width: 960, withoutEnlargement: true })
    .webp({ quality: 78, effort: 6 })
    .toFile(path.join(destino, 'vinho-para-brindar.webp'));
  relatorio.push({ nome: 'vinho-para-brindar', origem: vinho, ...resultado });
}
await writeFile(
  'reports/imagens-enviadas.json',
  JSON.stringify(
    {
      observacao: 'A imagem duplicada de delivery foi importada uma única vez.',
      imagens: relatorio,
    },
    null,
    2,
  ),
);
console.log(
  relatorio
    .map((item) => `${item.nome}: ${Math.round(item.size / 1024)} KB`)
    .join('\n'),
);
