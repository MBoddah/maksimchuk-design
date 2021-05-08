import menu from './js/menu';
import slider from './js/slider';
import portfolio from './js/portfolio';
import form from './js/form';
import './scss/main.scss';

const selectors = {
    slide: '.slider__slide',
    container: '.slider',
};

const slidesList = [
    {imgSrc:'img/arts/slides/cyberpunk.jpg', alt: 'cyberpunk', text: 'Портреты и арты'},
    {imgSrc:'img/arts/slides/skull.jpg', alt: 'skull', text: 'Логотипы и иконки'},
    {imgSrc:'img/arts/slides/wings.png', alt: 'wings', text: '3-D графика'}
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

