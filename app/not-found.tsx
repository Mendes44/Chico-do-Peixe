import Link from 'next/link';
import { ArrowLeft, Fish } from 'lucide-react';
/* Página 404 oferece contexto e uma saída clara. */
export default function NotFound() { return <main className="not-found"><div><Fish size={54} /><p className="eyebrow">Erro 404</p><h1>Esse peixe escapou.</h1><p>A página que você procura mudou de endereço ou não existe.</p><Link className="button button-primary" href="/"><ArrowLeft size={18} /> Voltar ao início</Link></div></main>; }
