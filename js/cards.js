/* cards.js - spotlight que segue o cursor nos cards
   O foco de teclado mostra o mesmo estado do hover, por CSS.
   Em telas de toque nada disso e ligado. */

const canHover = window.matchMedia('(hover: hover) and (pointer: fine)');

function trackPointer(card) {
  let frame = 0;

  card.addEventListener('pointermove', (event) => {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      const box = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${(((event.clientX - box.left) / box.width) * 100).toFixed(1)}%`);
      card.style.setProperty('--my', `${(((event.clientY - box.top) / box.height) * 100).toFixed(1)}%`);
      frame = 0;
    });
  }, { passive: true });
}

export function initCards() {
  if (!canHover.matches) return;
  document.querySelectorAll('[data-card="spotlight"]').forEach(trackPointer);
}
