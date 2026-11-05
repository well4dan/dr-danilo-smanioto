/* motion.js - camada de movimento

   Custo zero de biblioteca em qualquer aparelho, exceto o scroll suave:
   - Entrada do hero: animacao de CSS, sem JS.
   - Pilha de sinais: position sticky, sem JS, com recuo por scroll-driven
     animation nativa onde o navegador suportar.
   - Revelacoes de secao: IntersectionObserver + transicao de CSS.
   - Botao magnetico: pointermove com requestAnimationFrame, so ponteiro fino.
   - Scroll suave (Lenis): carregado sob demanda, so no desktop, depois que a
     pagina ja esta usavel.

   Regra mantida: so transform e opacity, e nenhum listener de scroll proprio. */

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
const wideScreen = window.matchMedia('(min-width: 64rem)');

/** Sem motion: tudo visivel de imediato. */
function showEverything() {
  document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-in'));
}

/** Revelacoes de secao, uma vez por elemento. */
function initReveals() {
  const targets = document.querySelectorAll('[data-reveal]');
  if (!targets.length) return;

  if (!('IntersectionObserver' in window)) {
    showEverything();
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-in');
      observer.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });

  targets.forEach((el) => observer.observe(el));
}

/** Ancoras internas: rolagem do proprio navegador e foco no destino. */
function initAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const id = link.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth', block: 'start' });
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });
}

/** Botao magnetico: deslocamento maximo de 12 px, so com ponteiro fino. */
function initMagnetic() {
  if (!finePointer.matches || reducedMotion.matches) return;
  const MAX = 12;

  document.querySelectorAll('[data-magnetic]').forEach((button) => {
    let frame = 0;

    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      button.style.transform = '';
    };

    button.addEventListener('pointermove', (event) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const box = button.getBoundingClientRect();
        const x = ((event.clientX - box.left) / box.width - 0.5) * MAX * 2;
        const y = ((event.clientY - box.top) / box.height - 0.5) * MAX * 2;
        button.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
        frame = 0;
      });
    }, { passive: true });

    button.addEventListener('pointerleave', reset);
    button.addEventListener('blur', reset);
  });
}

/** Carrega um script do proprio dominio uma unica vez. */
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const tag = document.createElement('script');
    tag.src = src;
    tag.async = true;
    tag.onload = resolve;
    tag.onerror = () => reject(new Error(`falha ao carregar ${src}`));
    document.head.appendChild(tag);
  });
}

/** Espera o navegador ficar ocioso, sem segurar a primeira interacao. */
function whenIdle() {
  return new Promise((resolve) => {
    const run = () => (window.requestIdleCallback
      ? window.requestIdleCallback(resolve, { timeout: 3000 })
      : setTimeout(resolve, 800));
    if (document.readyState === 'complete') run();
    else window.addEventListener('load', run, { once: true });
  });
}

/** Scroll suave no desktop. Entra depois que a pagina ja esta usavel. */
async function enhanceSmoothScroll() {
  if (!wideScreen.matches || !finePointer.matches || reducedMotion.matches) return;

  await whenIdle();

  try {
    await loadScript('/js/vendor/lenis.min.js');
  } catch {
    return; // sem a biblioteca o scroll continua o do navegador
  }

  if (typeof window.Lenis !== 'function') return;

  const lenis = new window.Lenis({ duration: 1.05, smoothWheel: true });
  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}

export function initMotion() {
  initAnchors();

  if (reducedMotion.matches) {
    showEverything();
    return;
  }

  initReveals();
  initMagnetic();
  enhanceSmoothScroll();
}
