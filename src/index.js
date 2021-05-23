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

menu();
slider({
    selectors, 
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

