const background = document.querySelector('.separator__img');
const socials = document.querySelector('.socials');
const socialsList = document.querySelector('.socials__row')

document.addEventListener( 'scroll', () => {
    if(background.getBoundingClientRect().top < window.screen.height) {
        background.style.transform = `translateY(-${(window.pageYOffset -  background.getBoundingClientRect().top)/4}px)`
    }

    if(socials.getBoundingClientRect().top + 300 < window.screen.height) {
        socialsList.classList.add('show-in');
    } else {
        socialsList.classList.remove('show-in');
    }
})