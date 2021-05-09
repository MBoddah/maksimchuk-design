function preloader() {
    window.addEventListener('load', () => {
        const preloader = document.querySelector('.preloader');
        if(!preloader.classList.contains('_done')) {
            preloader.classList.add('_done');
        }
    })
}

export default preloader;