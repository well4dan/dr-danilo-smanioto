/* main.js - ponto de entrada */

import { initHeader, initMenu, initEmailLinks, initYear, initCrmv } from './ui.js';
import { initMotion } from './motion.js';
import { initCards } from './cards.js';

function start() {
  initHeader();
  initMenu();
  initEmailLinks();
  initYear();
  initCrmv();
  initMotion();
  initCards();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start, { once: true });
} else {
  start();
}
