const background = document.querySelector('.separator__img');
const separator = document.querySelector('.separator');
const socials = document.querySelector('.socials');
const socialsList = document.querySelector('.socials__row')
const links = document.querySelectorAll('a[href^="#"]');

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
}

document.addEventListener( 'scroll', () => {
    if(background.getBoundingClientRect().top < window.screen.height) {
        if(((window.pageYOffset -  background.getBoundingClientRect().top)/4) < (background.clientHeight - separator.clientHeight)) {
            background.style.transform = `translateY(-${(window.pageYOffset -  background.getBoundingClientRect().top)/4}px)`
        }
    }

    if(socials.getBoundingClientRect().top + 300 < window.screen.height) {
        socialsList.classList.add('show-in');
    } else {
        socialsList.classList.remove('show-in');
    }
})