const navToggle = document.querySelector('.header__toggle');
const navMain = document.querySelector('.navigation');

document.querySelector('.header--no-js').classList.remove('header--no-js');
document.querySelector('.contact__map--no-js').classList.remove('contact__map--no-js');

navToggle.addEventListener('click', () => {
  if (navToggle.classList.contains('header__toggle--closed')) {
    navToggle.classList.remove('header__toggle--closed');
    navMain.classList.add('navigation--active');
  } else {
    navToggle.classList.add('header__toggle--closed');
    navMain.classList.remove('navigation--active');
  }
});
