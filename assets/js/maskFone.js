const telInputs = [...document.querySelectorAll('input[type="tel"]')];
const inputMask = new Inputmask('+7 (999) 999-99-99');
telInputs.forEach((el) => inputMask.mask(el));
