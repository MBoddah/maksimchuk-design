const background = document.querySelector('.separator__img');
const separator = document.querySelector('.separator');
const socials = document.querySelector('.socials');
const socialsList = document.querySelector('.socials__row')
const links = document.querySelectorAll('a[href^="#"]');

//////////////burger////////////////

const burger = document.querySelector('.menu__burger');
const menuBody = document.querySelector('.menu__wrapper') 

burger.addEventListener('click', () => {
    menuBody.classList.toggle('menu__wrapper_riseup');
    document.body.classList.toggle('_lock');
    burger.classList.toggle('_active');
})

//////smooth scroll////////

links.forEach( link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = link.getAttribute('href');
        if(document.querySelector(id)) {
            scrollSmoothTo(document.querySelector(id));
        }
    });
});

function scrollSmoothTo(elem) {
    elem.scrollIntoView({block: "center", behavior: "smooth"});

    if(burger.classList.contains('_active')) {
        menuBody.classList.remove('menu__wrapper_riseup');
        document.body.classList.remove('_lock');
        burger.classList.remove('_active');       
    }
}

document.addEventListener( 'scroll', () => {
    if(background.getBoundingClientRect().top < window.screen.height) {
        if(((window.pageYOffset -  background.getBoundingClientRect().top)/4) < (background.clientHeight - separator.clientHeight)) {
            background.style.transform = `translateY(-${(window.pageYOffset -  background.getBoundingClientRect().top)/4}px)`
        }
    }

    if(socials.getBoundingClientRect().top + 100 < window.screen.height) {
        socialsList.classList.add('_show-in');
    } else {
        socialsList.classList.remove('_show-in');
    }
})
