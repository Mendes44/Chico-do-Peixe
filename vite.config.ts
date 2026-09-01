import tailwindcss from '@tailwindcss/postcss';
import vinext from 'vinext';
import { defineConfig } from 'vite';

// Alguns ambientes macOS bloqueiam FSEvents; nesse caso usamos polling para o HMR.
const needsPolling = process.env.FILE_WATCH_MODE === 'polling';

/* Bindings locais usados pelo ambiente Cloudflare durante o desenvolvimento. */
const localBindingConfig = {
  main: 'vinext/server/fetch-handler',
  compatibility_flags: ['nodejs_compat'],
  d1_databases: [],
  r2_buckets: [],
};

export default defineConfig(async () => {
  // Mantém o estado do Wrangler e do Miniflare dentro do projeto.
  // Variáveis da aplicação continuam em arquivos `.env*` ignorados pelo Git.
  process.env.WRANGLER_WRITE_LOGS ??= 'false';
  process.env.WRANGLER_LOG_PATH ??= '.wrangler/logs';
  process.env.MINIFLARE_REGISTRY_PATH ??= '.wrangler/registry';

  // O Wrangler registra o caminho de log quando o plugin é importado.
  const { cloudflare } = await import('@cloudflare/vite-plugin');

  // Configura CSS, observação de arquivos e execução Next no Cloudflare local.
  return {
    css: { postcss: { plugins: [tailwindcss()] } },
    server: needsPolling
      ? { watch: { useFsEvents: false, usePolling: true } }
      : undefined,
    plugins: [
      vinext(),
      cloudflare({
        viteEnvironment: { name: 'rsc', childEnvironments: ['ssr'] },
        config: localBindingConfig,
      }),
    ],
  };
});
