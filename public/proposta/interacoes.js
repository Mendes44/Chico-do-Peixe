const botaoMenu = document.querySelector('.alternar-menu');
const navegacao = document.querySelector('#navegacao');

function definirMenu(aberto) {
  botaoMenu.setAttribute('aria-expanded', String(aberto));
  navegacao.classList.toggle('menu-aberto', aberto);
}

botaoMenu.addEventListener('click', () => {
  definirMenu(botaoMenu.getAttribute('aria-expanded') !== 'true');
});

navegacao.addEventListener('click', (evento) => {
  if (evento.target.closest('a')) definirMenu(false);
});

document.addEventListener('keydown', (evento) => {
  if (
    evento.key === 'Escape' &&
    botaoMenu.getAttribute('aria-expanded') === 'true'
  ) {
    definirMenu(false);
    botaoMenu.focus();
  }
});

document.addEventListener('click', (evento) => {
  if (!evento.target.closest('.cabecalho')) definirMenu(false);
});

const telaAmpla = window.matchMedia('(min-width: 900px)');
telaAmpla.addEventListener('change', () => definirMenu(false));

// Os atributos data-evento documentam as conversões planejadas.
// O protótipo não carrega rastreadores nem simula uma reserva confirmada.
