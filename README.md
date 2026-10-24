# Chico do Peixe — Santa Inês

Site institucional e responsivo do restaurante Chico do Peixe, unidade Santa
Inês. O projeto apresenta o restaurante, cardápio, atrações, galeria, contatos
e opções de reserva e atendimento pelo WhatsApp e além de redirecionar para o IFOOD.

## Tecnologias

- Next.js 16
- React 19
- TypeScript
- HTML5 e CSS responsivo
- Tailwind CSS 4
- Lucide React para ícones
- `next/image` e Sharp para otimização de imagens
- Oxlint e Oxfmt para análise e formatação do código
- Vercel para hospedagem e publicação

## Executar localmente

```bash
npm install
npm run dev
```

O site ficará disponível em `http://localhost:3000`.

Para usar uma porta alternativa: `npm run dev -- --port 3101` e abra
`http://localhost:3101`.

## Redesign atual

- Home e páginas internas integradas ao Next.js, com identidade verde e creme.
- Carrossel da abertura com quatro fotos, transições Motion, pausa, marcadores,
  navegação por teclado e gesto de toque.
- Informações comerciais do Instagram oficial: Rua Contagem, 2165; atendimento
  diário das 11h às 23h; self-service de segunda a sábado no almoço; música às
  terças e quintas; nova adega.
- Fotografias, marca e imagem de compartilhamento em WebP. Os ícones continuam
  vetoriais para manter nitidez com poucos bytes.
- Conteúdo da nova experiência em `content/experiencia.ts`; contatos e horários
  em `content/site.ts`.
- Aplicação publicada diretamente na raiz do domínio, com redirecionamentos
  permanentes 308 dos caminhos antigos sob `/santaines` e das páginas PHP conhecidas.

Os arquivos originais de `FotosNovas` são preservados. Para gerar novamente as
cinco fotos locais otimizadas e o compartilhamento: `node scripts/preparar-imagens-site.mjs`.

As novas fotos do Instagram foram importadas para o próprio projeto; o site não
depende de imagens externas ou do carregamento do Instagram para funcionar.

## Deploy na Vercel

O projeto abre diretamente em `https://chico-do-peixe.vercel.app`, sem prefixo
na URL. Não é necessário configurar `basePath`, rewrites ou redirecionamentos
da raiz na Vercel: as páginas, imagens, CSS e JavaScript usam caminhos na raiz.

Os endereços antigos sob `/santaines` redirecionam para as páginas correspondentes
na raiz, por meio de `next.config.ts`. `robots.txt` e `sitemap.xml` também são
servidos diretamente na raiz. Os metadados usam o domínio oficial configurado
em `content/site.ts`, atualmente `https://www.chicodopeixe.com.br`.

Depois de alterar os arquivos do projeto, envie as alterações para a branch conectada à
Vercel e aguarde o novo deploy ficar **Ready**. Um redeploy de um commit anterior
não inclui a correção.

Na configuração do projeto na Vercel, use o preset **Next.js**, a raiz deste
repositório como **Root Directory** e o comando de build `npm run build`.
Mantenha **Output Directory** no padrão do Next.js, sem definir `dist`, `out` ou
`public`.

Em outro provedor compatível com Next.js, mantenha os redirecionamentos do
framework e sirva a aplicação na raiz do domínio.

## Verificações

```bash
npm run lint
npx tsc --noEmit
npm run build
```
