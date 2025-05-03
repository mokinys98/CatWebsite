// toast.js
// ———— remove DOMContentLoaded wrapper ir formos listener’į, 
//     jei formos submit’ą valdai per form.js

export function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
  
    // įjungiam animaciją
    setTimeout(() => toast.classList.add('show'), 10);
  
    // po 3s išjungiam ir pašalinam
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => document.body.removeChild(toast), 500);
    }, 3000);
  }
  