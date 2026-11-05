/* ui.js - cabecalho no scroll, menu mobile, e-mail montado por JS e ano do rodape */

import { CONTACT } from './config.js';

/** Cabecalho: encolhe ao descer e some; volta assim que o usuario sobe.
    Usa IntersectionObserver em uma sentinela, nao listener de scroll. */
export function initHeader() {
  const header = document.querySelector('[data-header]');
  if (!header) return;

  header.dataset.scrolled = 'false';
  header.dataset.hidden = 'false';

  const sentinel = document.createElement('div');
  sentinel.className = 'header-sentinel';
  sentinel.setAttribute('aria-hidden', 'true');
  document.body.prepend(sentinel);

  let lastY = window.scrollY;
  let past = false;
  let ticking = false;

  // Enquanto a sentinela estiver visivel, estamos no topo da pagina.
  new IntersectionObserver(([entry]) => {
    past = !entry.isIntersecting;
    header.dataset.scrolled = String(past);
    if (!past) header.dataset.hidden = 'false';
  }, { threshold: 0 }).observe(sentinel);

  // A direcao do scroll e lida dentro de um rAF, nunca a cada evento.
  const update = () => {
    ticking = false;
    const y = window.scrollY;
    if (past && !isMenuOpen()) {
      header.dataset.hidden = String(y > lastY + 4);
    }
    lastY = y;
  };

  document.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }, { passive: true });
}

function isMenuOpen() {
  const menu = document.querySelector('[data-menu]');
  return menu ? menu.dataset.open === 'true' : false;
}

/** Menu de tela cheia: hamburguer vira X, foco preso, Esc fecha. */
export function initMenu() {
  const burger = document.querySelector('[data-burger]');
  const menu = document.querySelector('[data-menu]');
  if (!burger || !menu) return;

  const label = burger.querySelector('.visually-hidden');

  const setOpen = (open) => {
    menu.dataset.open = String(open);
    burger.setAttribute('aria-expanded', String(open));
    if (label) label.textContent = open ? 'Fechar menu' : 'Abrir menu';
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) {
      const first = menu.querySelector('[data-menu-link]');
      if (first) first.focus({ preventScroll: true });
    }
  };

  burger.addEventListener('click', () => setOpen(menu.dataset.open !== 'true'));

  menu.querySelectorAll('[data-menu-link]').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.dataset.open === 'true') {
      setOpen(false);
      burger.focus();
    }
  });
}

/** Monta o e-mail em tempo de execucao para nao servir o endereco em texto puro. */
export function initEmailLinks() {
  const address = `${CONTACT.emailUser}@${CONTACT.emailDomain}`;
  document.querySelectorAll('[data-email-link]').forEach((link) => {
    link.setAttribute('href', `mailto:${address}`);
    if (link.dataset.emailLink === 'full') link.textContent = address;
  });
}

/** Ano corrente no rodape, sem depender de edicao manual. */
export function initYear() {
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
}

/** Exibe o CRMV apenas quando o numero estiver preenchido no config. */
export function initCrmv() {
  if (!CONTACT.crmv) return;
  document.querySelectorAll('[data-crmv]').forEach((el) => {
    el.textContent = `, CRMV-PR ${CONTACT.crmv}`;
    el.hidden = false;
  });
}
