import Link from 'next/link';
import { ArrowLeft, Fish } from 'lucide-react';
/* Página 404 oferece contexto e uma saída clara. */
export default function PaginaNaoEncontrada() {
  return (
    /* Início: mensagem e retorno seguro quando uma rota não é encontrada. */
    <main className="limite pagina-erro">
      <div>
        <Fish size={54} />
        <p className="sobretitulo">Erro 404</p>
        <h1>Esse peixe escapou.</h1>
        <p>A página que você procura mudou de endereço ou não existe.</p>
        <Link className="botao botao-verde" href="/">
          <ArrowLeft size={18} /> Voltar ao início
        </Link>
      </div>
    </main>
  );
}
