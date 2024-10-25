const passwordInputs = [...document.querySelectorAll('.input-password')];
const telInputs = [...document.querySelectorAll('input[type="tel"]')];
const inputMask = new Inputmask('+7 (999) 999-99-99');
telInputs.forEach((el) => inputMask.mask(el));

passwordInputs.forEach(el => {
  el.addEventListener('click', (e) => {
    if (el.value !== '' && (e.offsetX > el.offsetWidth - 40) && (e.offsetX < el.offsetWidth - 16) && (e.offsetY > el.offsetHeight / 2 - 12) && (e.offsetY < el.offsetHeight / 2 + 12)) {
      const inputType = el.getAttribute('type');
      if (inputType === 'password') {
        el.setAttribute('type', 'text');
      } else {
        el.setAttribute('type', 'password');
      }
    }
  });

  el.addEventListener('mousemove', (e) => {
    if (el.value !== '' && (e.offsetX > el.offsetWidth - 40) && (e.offsetX < el.offsetWidth - 16) && (e.offsetY > el.offsetHeight / 2 - 12) && (e.offsetY < el.offsetHeight / 2 + 12)) {
      el.style.cursor = 'pointer';
    } else {
      el.style.cursor = 'text';
    }
  });
})
