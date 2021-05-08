function portfolio() {
    const modal = document.querySelector('.modal'),
    content = document.querySelector('.modal__content'),
    wrapper = document.querySelector('.modal__wrapper');

    document.querySelectorAll('.portfolio__container img').forEach(img => {
        img.addEventListener('click', () =>{
            showInModal(img, modal, content, wrapper);
        })
    })

    modal.addEventListener('click', (event) =>  {
        if((event.target == modal)&&(!modal.classList.contains('_hide'))) {
            closeModal(modal);
        }
    })

    function showInModal(img, modal, content, wrapper) {
        modal.classList.remove('_hide');
        document.body.classList.add('_lock');
        content.innerHTML = `
            <img src="${img.src}" alt="" class="modal__image">
        `;

        content.children[0].onload = function() {
            wrapper.style.width = `${content.children[0].width}px`;
        };

        document.querySelector('.modal__close').addEventListener('click', () => {
            closeModal(modal);
        });
    } 


    function closeModal(modal) {
        modal.classList.add('_hide');
        document.body.classList.remove('_lock');
    }
}

export default portfolio;