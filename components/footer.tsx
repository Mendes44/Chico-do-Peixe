import Link from 'next/link';
import Image from 'next/image';
import { Camera, Mail, MapPin, Phone } from 'lucide-react';
import { site } from '@/content/site';

export function Footer() {
  return (
    <footer className="site-footer">
      {/* Início: marca, contatos, horários e redes sociais. */}
      <div className="container footer-grid">
        <div>
          <Image
            className="footer-logo"
            src="/images/logo-oficial.webp"
            alt="Chico do Peixe"
            width="180"
            height="92"
          />
          <p>O mais saboroso peixe da cidade.</p>
        </div>
        <div>
          <h2>Contatos</h2>
          <a href={`https://wa.me/${site.whatsapp.replace('+', '')}`}>
            <Phone />
            {site.whatsappLabel}
          </a>
          <a href={`mailto:${site.email}`}>
            <Mail />
            {site.email}
          </a>
          <p className="footer-address">
            <MapPin />
            {site.address.street}
            <br />
            {site.address.neighborhood} · {site.address.city}/
            {site.address.state}
          </p>
        </div>
        <div>
          <h2>Horário de funcionamento</h2>
          {site.hours.map((period) => (
            <p key={period.days}>
              {period.days}
              <br />
              <strong>{period.label}</strong>
            </p>
          ))}
        </div>
        <div>
          <h2>Acompanhe</h2>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer">
            <Camera />
            Instagram
          </a>
          <Link href="/privacidade">Privacidade e cookies</Link>
        </div>
      </div>

      {/* Início: atalhos comerciais recuperados do site antigo. */}
      <div className="container footer-commerce">
        <a
          className="footer-ifood"
          href={site.ifood}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Comprar pelo iFood"
        >
          <Image
            src="/images/ifood.webp"
            alt="Compre pelo iFood"
            width="320"
            height="115"
          />
        </a>

        <div className="footer-payments">
          <p>Aceitamos cartões de crédito, débito e refeição.</p>
          <Image
            src="/images/bandeiras-cartoes.webp"
            alt="Mastercard, Visa, Rede Shop, Alelo, VR, Ticket e Refeição Pass"
            width="520"
            height="60"
          />
        </div>
      </div>

      {/* Início: aviso de direitos autorais com ano atualizado automaticamente. */}
      <div className="container copyright">
        © {new Date().getFullYear()} Chico do Peixe Santa Inês. Todos os
        direitos reservados.
      </div>
    </footer>
  );
}
