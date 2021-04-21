const slide = document.querySelector('.slide');
let i = 0;

const rollup = setInterval( () => {
    slide.style.transform = `translateY(${(-i)*0.05}px)`;
    i++;

    if (i== 20000) clearInterval(rollup)
}, 5);