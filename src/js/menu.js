function menu() {
    const socials = document.querySelector('.socials'),
    socialsList = document.querySelector('.socials__row'),
    links = document.querySelectorAll('a[href^="#"]'),
    burger = document.querySelector('.menu__burger'),
    menuBody = document.querySelector('.menu__wrapper') ;
    
    burger.addEventListener('click', () => {
        menuBody.classList.toggle('menu__wrapper_riseup');
        document.body.classList.toggle('_lock');
        burger.classList.toggle('_active');
    })
    
    document.querySelector('.menu__wrapper').style.top = `${document.querySelector('.header').clientHeight}px`
    
    links.forEach( link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = link.getAttribute('href');
            if(document.querySelector(id)) {
                scrollSmoothTo(document.querySelector(id));
            }
        });
    });
    
    document.addEventListener( 'scroll', () => {
        if(socials.getBoundingClientRect().top < window.screen.height) {
            socialsList.classList.add('_show-in');
        } else {
            socialsList.classList.remove('_show-in');
        }
    })

    function scrollSmoothTo(elem) {
        elem.scrollIntoView({block: "center", behavior: "smooth"});
    
        if(burger.classList.contains('_active')) {
            menuBody.classList.remove('menu__wrapper_riseup');
            document.body.classList.remove('_lock');
            burger.classList.remove('_active');       
        }
    }
}

export default menu;
