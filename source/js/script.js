let header = document.querySelector('.page-header');
let button = header.querySelector('.toggle');
let navElement = header.querySelector('.page-header__main-nav');
let menuElement = header.querySelector('.page-header__menu-list');

//открытие-закрытие мобильного меню
function toggleMenu() {

  //кнопка доступна, когда подключен JS
  button.classList.remove('toggle--nojs');

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
