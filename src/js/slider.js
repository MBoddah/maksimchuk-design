const slide = document.querySelector('.slider__slide');
let i = 0;

const rollup = setInterval( () => {
    slide.style.transform = `translateY(${(-i)*0.05}px)`;
    i++;

    if (i== 20000) clearInterval(rollup)
}, 5);

const background = document.querySelector('.separator__img');
const form = document.querySelector('.form');
const formText = document.querySelector('.form__text');
const formBody = document.querySelector('.form__wrapper');
const socials = document.querySelector('.socials');
const socialsList = document.querySelector('.socials__row')

document.addEventListener( 'scroll', () => {
    if(background.getBoundingClientRect().top < window.screen.height) {
        background.style.transform = `translateY(-${(window.pageYOffset -  background.getBoundingClientRect().top)/4}px)`
    }

    if(form.getBoundingClientRect().top + 300< window.screen.height) {
        formText.classList.add('show-in');
        formBody.classList.add('show-in');
    } else {
        formText.classList.remove('show-in');
        formBody.classList.remove('show-in');
    }

    if(socials.getBoundingClientRect().top + 300 < window.screen.height) {
        socialsList.classList.add('show-in');
    } else {
        socialsList.classList.remove('show-in');
    }
})
