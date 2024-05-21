const navToggle = document.querySelector('.header__toggle');
const navBottonMenu = document.querySelector('.header__toggle--closed');
const navMain = document.querySelector('.navigation');

navToggle.addEventListener('click', () => {
  if (navBottonMenu.classList.contains('header__toggle--closed')) {
    navBottonMenu.classList.remove('header__toggle--closed');
    navMain.classList.add('navigation--active');
  } else {
    navBottonMenu.classList.add('header__toggle--closed');
    navMain.classList.remove('navigation--active');
  }
});
