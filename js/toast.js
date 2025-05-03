// toast.js

// Sukuriam/fiksuojam toast’ų konteinerį
let container = null;
function getContainer() {
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  return container;
}

// Pagrindinė funkcija – eksportuojame kaip ES modulį
export function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';

  // Teksto dalis
  const text = document.createElement('div');
  text.className = 'toast-message';
  text.textContent = message;

  // Uždarymo mygtukas
  const closeBtn = document.createElement('button');
  closeBtn.className = 'toast-close';
  closeBtn.innerHTML = '&times;';
  closeBtn.addEventListener('click', () => {
    clearTimeout(timeoutId);
    hideToast(toast);
  });

  // Sudėliojam elementus
  toast.append(text, closeBtn);
  getContainer().appendChild(toast);

  // Rizatuojam animaciją
  requestAnimationFrame(() => toast.classList.add('show'));

  // Auto-hide po 15 s
  const timeoutId = setTimeout(() => {
    hideToast(toast);
  }, 150000);

  // Funkcija – paslepiam ir išimam iš DOM
  function hideToast(el) {
    el.classList.remove('show');
    setTimeout(() => {
      el.parentNode?.removeChild(el);
    }, 300); // suderinta su CSS animacijos trukme
  }
}
