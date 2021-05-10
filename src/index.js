import menu from './js/menu';
import slider from './js/slider';
import portfolio from './js/portfolio';
import form from './js/form';
import preloader from './js/preloader';
import './scss/main.scss';

const selectors = {
    slide: '.slider__slide',
    container: '.slider',
};

const slidesList = [
    {imgSrc:'img/arts/slides/cyberpunk.jpg', alt: 'cyberpunk', text: ' '},
    {imgSrc:'img/arts/slides/skull.jpg', alt: 'skull', text: ' '},
    {imgSrc:'img/arts/slides/wings.png', alt: 'wings', text: ' '}
]

menu();
slider({
    selectors, 
    slidesList,
    leftArrowImg: 'img/arrow-left.png',
    rightArrowImg: 'img/arrow-right.png',
    activateNavigationDots: true,
    activateSlidesMoving: true,
    autoScrollSpeed: 4,
    autoScopeSpeed: 1,
    startSlideIndex: 2,
    activateAutoTurning: true,
    turningInterval: 10000
});
portfolio();
form();
preloader();

