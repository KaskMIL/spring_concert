const openMenuBtn = document.getElementById('menu-open-btn');
const menuNavHamburger = document.getElementById('menu-nav-ham');
const menuNavOpen = document.getElementById('menu-nav-open');
const closeMenuBtn = document.getElementById('menu-close-btn');
const body = document.body;

openMenuBtn.addEventListener('click', () => {
  menuNavHamburger.classList.add('mobile-menu-off');
  menuNavOpen.classList.remove('mobile-menu-off');
  menuNavOpen.classList.add('mobile-menu-on');
  body.classList.add('disable-scroll');
})

closeMenuBtn.addEventListener('click', () => {
  menuNavHamburger.classList.remove('mobile-menu-off');
  menuNavOpen.classList.add('mobile-menu-off');
  menuNavOpen.classList.remove('mobile-menu-on');
  body.classList.remove('disable-scroll');
})