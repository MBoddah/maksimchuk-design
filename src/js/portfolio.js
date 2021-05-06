function portfolio() {
    document.querySelectorAll('.portfolio__container img').forEach(img => {
        img.addEventListener('click', () =>{
            showInModal(img);
        })
    })

    function showInModal(img) {
        const modal = document.querySelector('.modal'),
            content = document.querySelector('.modal__content'),
            wrapper = document.querySelector('.modal__wrapper');
        modal.classList.remove('_hide');
        document.body.classList.add('_lock');
        content.innerHTML = `
            <img src="${img.src}" alt="" class="modal__image">
        `;

        wrapper.style.width = `${content.children[0].width}px`;

        document.querySelector('.modal__close').addEventListener('click', () => {
            closeModal(modal);
        })
    }

    function closeModal(modal) {
        modal.classList.add('_hide');
        document.body.classList.remove('_lock');
    }
}

portfolio();