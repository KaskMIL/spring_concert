const aboutNavHam = document.getElementById('about-nav-ham');
const aboutOpenBtn = document.getElementById('about-open-btn');
const mobileMenuAbout = document.getElementById('menu-mobile-about');
const aboutCloseBtn = document.getElementById('about-close-btn');
const homeBtn = document.getElementById('home-btn');
const logoBtn = document.getElementById('logo-btn');
const pastBtn = document.getElementById('past-btn');
const sponsorBtn = document.getElementById('sponsor-about-btn');
const newsBtn = document.getElementById('news-about-btn');
const campBtn = document.getElementById('camp-about-btn');
const $body = document.body;

// Functions
function closeMenu() {
  aboutNavHam.classList.remove('mobile-menu-off');
  mobileMenuAbout.classList.add('mobile-menu-off');
  mobileMenuAbout.classList.remove('mobile-menu-on');
  $body.classList.remove('disable-scroll');
}

aboutOpenBtn.addEventListener('click', () => {
  aboutNavHam.classList.add('mobile-menu-off');
  mobileMenuAbout.classList.remove('mobile-menu-off');
  mobileMenuAbout.classList.add('mobile-menu-on');
  $body.classList.add('disable-scroll');
});

aboutCloseBtn.addEventListener('click', () => {
  closeMenu();
});

homeBtn.addEventListener('click', () => {
  closeMenu();
});

logoBtn.addEventListener('click', () => {
  closeMenu();
});

pastBtn.addEventListener('click', () => {
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