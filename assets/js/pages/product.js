const reviewBtns = [...document.querySelectorAll('.product__info .review')];
const bestComment = document.querySelector('.comment-best');
const allCharacteristicsBtn = document.querySelector('.characteristics-btn');
const tabsNavBtns = [...document.querySelectorAll('.tabs__nav-btn')];
const tabBtnComment = tabsNavBtns.find((el) => el.textContent.toLowerCase().includes('отзывы'));
const tabBtnCharacteristics = tabsNavBtns.find((el) => el.textContent.toLowerCase().includes('характеристики'));
const url = Object.fromEntries(new URLSearchParams(window.location.search));
const sliderImgs = [...document.querySelectorAll('.product__slider .splide__slide')].filter((el) => !el.getAttribute('data-splide-youtube'));
const sliderModalImg = document.querySelector('.modal__content_zoom img');
const sliderImgsUrl = [...new Set(sliderImgs.map(el => el.style.backgroundImage.slice(5, -2)))];
const nextModalImgBtn = document.querySelector('.modal__zoom-btn--next');
const prevModalImgBtn = document.querySelector('.modal__zoom-btn--prev');
const commentBtns = reviewBtns.concat([...bestComment.querySelectorAll('.comment__btns .btn')]);

let modalImgSrc = '';

const showComments = () => {
  bestComment.style.display = 'none';
  characteristicsTabs.switchTabs(tabBtnComment);
}

window.addEventListener('load', () => {
  if (url.review) {
    showComments();
  }
});

commentBtns.forEach((el) => {
  el.addEventListener('click', showComments);
});

allCharacteristicsBtn.addEventListener('click', () => {
  bestComment.style.display = null;
  characteristicsTabs.switchTabs(tabBtnCharacteristics);
});

tabsNavBtns.forEach((el) => {
  el.addEventListener('click', (e) => {
    const textBtn = e.currentTarget.textContent.toLowerCase();
    if (textBtn.includes('отзывы')) {
      bestComment.style.display = 'none';
    } else {
      bestComment.style.display = 'flex';
    }
  });
});

// зумирование и перелистывание изображений слайдера

sliderImgs.forEach(el => {
  el.addEventListener('click', (e) => {
    const imgSrc = e.target.style.backgroundImage.slice(5, -2);
    sliderModalImg.src = imgSrc;
    modalImgSrc = imgSrc;
  })
});

prevModalImgBtn.addEventListener('click', () => {
  const ind = sliderImgsUrl.findIndex((el) => el === modalImgSrc);
  modalImgSrc = sliderImgsUrl.at(ind - 1);
  sliderModalImg.src = modalImgSrc;
});

nextModalImgBtn.addEventListener('click', () => {
  const ind = sliderImgsUrl.findIndex((el) => el === modalImgSrc);
  modalImgSrc = sliderImgsUrl.at((ind + 1) % sliderImgsUrl.length);
  sliderModalImg.src = modalImgSrc;
});
