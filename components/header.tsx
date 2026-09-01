'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { site } from '@/content/site';

/* Links compartilhados pelos menus de desktop e celular. */
const links = [
  { href: '/', label: 'Home' },
  { href: '/sobre', label: 'Quem Somos' },
  { href: '/cardapio', label: 'Cardápio' },
  { href: '/atracoes', label: 'Atrações' },
  { href: '/contato', label: 'Fale Conosco' },
];

export function Header() {
  /* Controla a abertura do menu sanduíche. */
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  /* Evita que o conteúdo ao fundo role enquanto o menu móvel está aberto. */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);
  return (
    <header className="site-header">
      {/* Início: logotipo, navegação desktop e botão do menu móvel. */}
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Chico do Peixe — início">
          <Image
            src="/images/logo-oficial.webp"
            alt="Chico do Peixe Santa Inês"
            width="180"
            height="92"
          />
        </Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map((link) => (
            <Link
              key={link.href}
              className={pathname === link.href ? 'active' : ''}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          className="menu-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {/* Início: navegação exclusiva para telas menores. */}
      <nav
        id="mobile-menu"
        className={`mobile-nav ${open ? 'open' : ''}`}
        aria-label="Navegação móvel"
      >
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
        <a
          className="button"
          href={`https://wa.me/${site.whatsapp.replace('+', '')}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Reservar pelo WhatsApp
        </a>
      </nav>
    </header>
  );
}
