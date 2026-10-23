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

O site ficará disponível em `http://localhost:3000/santaines`.

Para usar uma porta alternativa: `npm run dev -- --port 3101` e abra
`http://localhost:3101/santaines`.

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
- Aplicação montada em `/santaines`, com redirecionamentos permanentes 308 das
  páginas PHP conhecidas. O domínio e as outras unidades não foram alterados.

Os arquivos originais de `FotosNovas` são preservados. Para gerar novamente as
cinco fotos locais otimizadas e o compartilhamento: `node scripts/preparar-imagens-site.mjs`.

As novas fotos do Instagram foram importadas para o próprio projeto; o site não
depende de imagens externas ou do carregamento do Instagram para funcionar.

`vercel.json` contém as reescritas de `/robots.txt` e `/sitemap.xml` para as rotas
sob `/santaines`. Em outro provedor, aplicar essas duas regras no host do domínio.
Nenhuma alteração de DNS ou publicação foi realizada nesta etapa.

## Verificações

```bash
npm run lint
npx tsc --noEmit
npm run build
```
