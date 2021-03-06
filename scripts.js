// Dom Variables
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
const cardsContainer = document.getElementById('bands-cards-container');
const $body = document.body;

// Funtions
function closeMenu() {
  menuNavHamburger.classList.remove('mobile-menu-off');
  menuNavOpen.classList.add('mobile-menu-off');
  menuNavOpen.classList.remove('mobile-menu-on');
  $body.classList.remove('disable-scroll');
}

function loadCards(array, element) {
  for (let i = 0; i < array.length; i += 1) {
    const article = document.createElement('article');
    article.classList.add('band-container');

    article.innerHTML = `
      <img src="${array[i].image}" alt="${array[i].title}">
      <div class="grid-2">
      <h3>${array[i].title}</h3>
      <h4>${array[i].subtitle}${array[i].subtitleTwo}"</h4>
      <p>${array[i].paragraphOne}${array[i].paragraphTwo}
      ${array[i].paragraphThree}${array[i].paragraphFour}
      ${array[i].paragraphFive} </p>
     </div>`;

    element.appendChild(article);
  }
}

// DOM Manipulation
openMenuBtn.addEventListener('click', () => {
  menuNavHamburger.classList.add('mobile-menu-off');
  menuNavOpen.classList.remove('mobile-menu-off');
  menuNavOpen.classList.add('mobile-menu-on');
  $body.classList.add('disable-scroll');
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

// Cards Manipulation
const dataBands = [{
  title: 'Arctic Monkeys',
  image: './images/large-monkeys-chess.png',
  subtitle: 'Arctic Monkeys are an English rock band formed',
  subtitleTwo: ' in Sheffield in 2002.',
  paragraphOne: 'The band\'s international success increased with their ',
  paragraphTwo: 'critically acclaimed fifth album AM (2013), which was ',
  paragraphThree: 'supported by the global hit "Do I Wanna Know?". It topped',
  paragraphFour: ' four Billboard charts and was certified ',
  paragraphFive: 'platinum in the US.',
},
{
  title: 'Gorillaz',
  image: './images/large-gorillaz-chess.png',
  subtitle: 'Gorillaz are an English virtual band formed in 1998 by musician',
  subtitleTwo: ' Damon Albarn and artist Jamie Hewlett, from London, England.',
  paragraphOne: 'The band primarily consists of four animated members: 2-D ',
  paragraphTwo: '(vocals, keyboards), Murdoc Niccals (bass guitar), Noodle ',
  paragraphThree: '(guitar, keyboards, vocals), and Russel Hobbs (drums). ',
  paragraphFour: 'Their fictional universe is presented in music videos, ',
  paragraphFive: 'interviews, comic strips and short cartoons.',
},
{
  title: 'Green Day',
  image: './images/large-greenday-chess.png',
  subtitle: 'Green Day is an American rock band formed in the East Bay of',
  subtitleTwo: ' California in 1987',
  paragraphOne: 'The band\'s early releases were with the independent record',
  paragraphTwo: ' label Lookout! Records. In 1994, their major-label debut ',
  paragraphThree: 'Dookie, released through Reprise Records, became a ',
  paragraphFour: 'breakout success and eventually shipped over 10 million ',
  paragraphFive: 'copies in the U.S.',
},
{
  title: 'Jack Johnson',
  image: './images/large-jack-chess.png',
  subtitle: 'Jack Hody Johnson (born May 18, 1975) is an American ',
  subtitleTwo: 'singer-songwriter, filmmaker, and former professional surfer.',
  paragraphOne: 'Johnson has reached number one on the Billboard 200 chart ',
  paragraphTwo: 'with his albums Sing-A-Longs and Lullabies for the Film ',
  paragraphThree: 'Curious George in 2006, Sleep Through the Static in 2008,',
  paragraphFour: ' To the Sea in 2010 and From Here to Now ',
  paragraphFive: 'to You in 2013.',
},
{
  title: 'RadioHead',
  image: './images/large-radio-chess.png',
  subtitle: 'Radiohead are an English rock band formed in Abingdon,',
  subtitleTwo: ' Oxfordshire, in 1985.',
  paragraphOne: ' It became a worldwide hit after the release of their debut ',
  paragraphTwo: 'album, Pablo Honey (1993). Their popularity and critical ',
  paragraphThree: 'standing rose with the release of their second album,',
  paragraphFour: ' The Bends ',
  paragraphFive: '(1995).',
},
{
  title: 'Red Hot Chilli Peppers',
  image: './images/large-rhcp-chess.png',
  subtitle: 'The Red Hot Chili Peppers are an American rock band ',
  subtitleTwo: 'formed in Los Angeles in 1983.',
  paragraphOne: 'With over 100 million records sold worldwide, the Red Hot ',
  paragraphTwo: 'Chili Peppers are one of the best-selling bands of all ',
  paragraphThree: 'time. They are the most successful band in the history',
  paragraphFour: ' of alternative ',
  paragraphFive: 'rock.',
}];

window.addEventListener('load', loadCards(dataBands, cardsContainer));
