import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

const description =
  'Saiba como o site do Chico do Peixe Santa Inês utiliza cookies e protege seus dados.';

export const metadata: Metadata = createPageMetadata({
  title: 'Privacidade e cookies',
  description,
  path: '/privacidade',
  image: '/santaines/og.webp',
});

/* Versão inicial; responsável, retenção e encarregado precisam de validação jurídica. */
export default function Privacidade() {
  return (
    <main>
      {/* Início: identificação da política de privacidade. */}
      <section className="limite titulo-pagina">
        <div>
          <p className="sobretitulo">LGPD</p>
          <h1>Privacidade e cookies</h1>
        </div>
      </section>
      {/* Início: informações sobre dados, cookies, métricas e direitos. */}
      <article className="limite texto-legal">
        <h2>Dados e finalidade</h2>
        <p>
          Este site não solicita cadastro nem coleta dados por formulário. Links
          para WhatsApp, Instagram, iFood e Google Maps levam a serviços
          externos, sujeitos às políticas de cada plataforma.
        </p>
        <h2>Cookies essenciais</h2>
        <p>
          Usamos armazenamento local apenas para registrar sua escolha sobre
          cookies e manter a experiência funcionando.
        </p>
        <h2>Medição de audiência</h2>
        <p>
          A medição de audiência, quando habilitada, é carregada somente após
          sua permissão. Sem essa escolha, os recursos de medição permanecem
          desativados.
        </p>
        <h2>Seus direitos</h2>
        <p>
          Para dúvidas, correção ou exclusão de dados eventualmente tratados no
          atendimento, fale com a equipe pelo{' '}
          <a
            href="https://wa.me/5531991536420"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp do Chico do Peixe
          </a>
          .
        </p>
      </article>
    </main>
  );
}
