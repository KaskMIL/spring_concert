const openMenuBtn = document.getElementById('menu-open-btn');
const menuNavHamburger = document.getElementById('menu-nav-ham');
const menuNavOpen = document.getElementById('menu-nav-open');
const closeMenuBtn = document.getElementById('menu-close-btn');
const introBtn = document.getElementById('intro-btn');
const spacesBtn = document.getElementById('spaces-btn');
const bandsBtn = document.getElementById('bands-btn');
const sponsorBtn = document.getElementById('sponsor-btn');
const newsBtn = document.getElementById('news-btn');
const campBtn = document.getElementById('camp-btn');
const body = document.body;

function closeMenu() {
  menuNavHamburger.classList.remove('mobile-menu-off');
  menuNavOpen.classList.add('mobile-menu-off');
  menuNavOpen.classList.remove('mobile-menu-on');
  body.classList.remove('disable-scroll');
};

openMenuBtn.addEventListener('click', () => {
  menuNavHamburger.classList.add('mobile-menu-off');
  menuNavOpen.classList.remove('mobile-menu-off');
  menuNavOpen.classList.add('mobile-menu-on');
  body.classList.add('disable-scroll');
});

closeMenuBtn.addEventListener('click', () => {
  closeMenu();
});

introBtn.addEventListener('click', () => {
  closeMenu();
});

spacesBtn.addEventListener('click', () => {
  closeMenu();
});

bandsBtn.addEventListener('click', () => {
  closeMenu();
});

sponsorBtn.addEventListener('click', () => {
  closeMenu();
});

newsBtn.addEventListener('click', () => {
  closeMenu();
});

campBtn.addEventListener('click', () => {
  closeMenu();
});