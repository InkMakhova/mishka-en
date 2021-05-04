let header = document.querySelector('.page-header');
let button = header.querySelector('.toggle');
let navElement = header.querySelector('.page-header__main-nav');
let menuElement = header.querySelector('.page-header__menu-list');

//открытие-закрытие мобильного меню
function toggleMenu() {
  //кнопка доступна, когда подключен JS
  button.classList.remove('toggle--nojs');
  //переключаем класс
  navElement.classList.toggle('main-nav--closed');
  menuElement.classList.toggle('menu--closed');
}

//меняет у кнопки aria-label
function toggleAriaLabel() {
  if (button.ariaLabel == 'Открыть меню') {
    button.ariaLabel = 'Закрыть меню';
  } else {
    button.ariaLabel = 'Открыть меню';
  }
}

//скрывает меню при открытии страницы
toggleMenu();
button.addEventListener('click', toggleMenu);
button.addEventListener('click', toggleAriaLabel);

//открытие и закрытие модального окна
//let popular = document.querySelector('.popular');
let page = document.querySelector('.page__body');
let linkOpenModal = document.querySelector('.promo-card__link');
let linkAddToCart = document.querySelectorAll('.product-card__cart-link');
let modal = document.querySelector('.modal');
let form = modal.querySelector('.modal__form');
let mouseDownInModal = false;

//открытие
linkOpenModal.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.classList.add('modal--show');
});

for (let i = 0; i < linkAddToCart.length; i++) {
  linkAddToCart[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.add('modal--show');
  });
}

//закрытие
window.addEventListener('keydown', function(evt) {
  if (evt.code === 'Escape') {
    modal.classList.remove('modal--show');
  }
});

/*page.addEventListener('mousedown', function(evt) {
  mouseDownInModal = false;
});

modal.addEventListener('mousedown', function(evt) {
  mouseDownInModal = true;
});

window.addEventListener('mousedown', function(evt) {
  if (mouseDownInModal === false) {
    modal.classList.remove('modal--show');
  }
});*/

//отправка формы
form.addEventListener('submit', function(evt) {
});
