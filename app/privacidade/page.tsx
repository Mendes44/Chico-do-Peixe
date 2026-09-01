import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

const description =
  'Saiba como o site do Chico do Peixe Santa Inês utiliza cookies e protege seus dados.';

export const metadata: Metadata = createPageMetadata({
  title: 'Privacidade e cookies',
  description,
  path: '/privacidade',
  image: '/og.png',
});

/* Versão inicial; responsável, retenção e encarregado precisam de validação jurídica. */
export default function PrivacyPage() {
  return (
    <main>
      {/* Início: identificação da política de privacidade. */}
      <section className="page-hero compact">
        <div className="container">
          <p className="eyebrow">LGPD</p>
          <h1>Privacidade e cookies</h1>
        </div>
      </section>
      {/* Início: informações sobre dados, cookies, métricas e direitos. */}
      <article className="container legal">
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
          O Google Analytics, quando configurado, só deve ser carregado após
          consentimento. Recomendamos coleta anonimizada, retenção mínima e sem
          recursos de publicidade.
        </p>
        <h2>Seus direitos</h2>
        <p>
          Para dúvidas, correção ou exclusão de dados eventualmente tratados no
          atendimento, escreva para santaines@chicodopeixe.com.br.
        </p>
        <p className="fine-print">
          Versão de demonstração — revisar juridicamente antes da publicação.
        </p>
      </article>
    </main>
  );
}
