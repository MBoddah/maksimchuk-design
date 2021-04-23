const slide = document.querySelector('.slider__slide');
let i = 0;

const rollup = setInterval( () => {
    slide.style.transform = `translateY(${(-i)*0.05}px)`;
    i++;

    if (i== 20000) clearInterval(rollup)
}, 5);

const background = document.querySelector('.separator__img');

console.log(window.screen.height);

document.addEventListener( 'scroll', () => {

    if( background.getBoundingClientRect().top < window.screen.height) {
        background.style.transform = `translateY(-${(window.pageYOffset -  background.getBoundingClientRect().top)/4}px)`
    }
})
