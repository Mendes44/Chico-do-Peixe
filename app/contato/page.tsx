import type { Metadata } from 'next';
import { Clock3, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { createPageMetadata } from '@/lib/seo';
import { site } from '@/content/site';

const description =
  'Endereço, WhatsApp, telefone, reservas e mapa do Chico do Peixe Santa Inês.';

export const metadata: Metadata = createPageMetadata({
  title: 'Contato e localização',
  description,
  path: '/contato',
  image: '/images/real-6gde.webp',
});

/* Página de contatos, horários, endereço e mapa da unidade. */
export default function ContactPage() {
  return (
    <main>
      {/* Início: apresentação da página de contato. */}
      <section className="internal-hero contact-hero">
        <div className="container">
          <p className="eyebrow light">Fale conosco</p>
          <h1>
            A mesa está esperando
            <br />
            pela sua turma.
          </h1>
          <p>
            Dúvidas, reservas para grupos ou sugestões? Escolha o canal mais
            fácil para você.
          </p>
        </div>
      </section>

      {/* Início: canais de atendimento, mapa e aviso sobre reservas. */}
      <section className="section">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Contatos</p>
            <h2 className="contact-title">Estamos à disposição.</h2>
            <div className="contact-list">
              <a
                href={`https://wa.me/${site.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle />
                <span>
                  <small>WhatsApp</small>
                  {site.whatsappLabel}
                </span>
              </a>
              <a href={`tel:${site.phone}`}>
                <Phone />
                <span>
                  <small>Telefone</small>
                  {site.phoneLabel}
                </span>
              </a>
              <a href={`mailto:${site.email}`}>
                <Mail />
                <span>
                  <small>E-mail</small>
                  {site.email}
                </span>
              </a>
              <div>
                <Clock3 />
                <span>
                  <small>Horários</small>
                  {site.hours.map((period) => (
                    <span key={period.days}>
                      {period.days}: {period.label}
                      <br />
                    </span>
                  ))}
                </span>
              </div>
              <div>
                <MapPin />
                <span>
                  <small>Endereço</small>
                  {site.address.street} · {site.address.neighborhood}
                </span>
              </div>
            </div>
          </div>
          <div className="map-card">
            {/* Mapa incorporado do Google com carregamento adiado. */}
            <iframe
              title="Mapa do Chico do Peixe Santa Inês"
              src="https://www.google.com/maps?q=Av.%20Contagem%2C%202165%2C%20Santa%20In%C3%AAs%2C%20Belo%20Horizonte%20MG&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="map-info">
              <div>
                <h2>Chico do Peixe Santa Inês</h2>
                <p>Av. Contagem, 2165 · Belo Horizonte/MG</p>
              </div>
              <a
                className="button button-red"
                href={site.maps}
                target="_blank"
                rel="noopener noreferrer"
              >
                Traçar rota
              </a>
            </div>
          </div>
          <div className="reservation-note">
            {/* Observação específica para reservas de grupos. */}
            <strong>Reservas para comemorações</strong>
            <p>
              Para grupos a partir de 10 pessoas, a confirmação depende da
              disponibilidade da casa. Fale conosco pelo WhatsApp.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
