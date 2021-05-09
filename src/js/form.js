function form() {
    const form = document.querySelector('.form__transparent');
    const formText = document.querySelector('.form__text');
    const formBody = document.querySelector('.form__wrapper');  
    const formTitle = document.querySelector('.form__title');

    document.addEventListener( 'scroll', () => {
        if(form.getBoundingClientRect().top + 300< window.screen.height) {
            formText.classList.add('_show-in');
            formBody.classList.add('_show-in');
        } else {
            formText.classList.remove('_show-in');
            formBody.classList.remove('_show-in');
        }
    });

    form.addEventListener('submit', (e) => {sendForm(e, form)});
    
    async function sendForm(e, form) {
        e.preventDefault();

        let error = validateForm(form);

        let formData = new FormData(form);

        if (error === 0) {
            document.querySelector('.form__loader').classList.add('_sending');
            let response = await fetch('/src/php/sendmail.php', {
                method: 'POST',
                body: formData 
            });

            if (response.ok) {
                form.reset();
                document.querySelector('.form__loader').classList.remove('_sending');
            } else {
                document.querySelector('.form__loader').classList.remove('_sending');
            }
            changeFormState(formBody, formText, response.ok);
        }
    }

    function validateForm(form) {
        let error = 0;
        let inputs= form.querySelectorAll('.form__input');

        inputs.forEach( input => {
            removeFormError(input);
            if (input.classList.contains('_email')) {
                if (testEmail(input)) {
                    addFormError(input);
                    error++;
                }
            } else {
                if (input.value === '') {
                    addFormError(input);
                    error++
                }
            }
        })

        return error;
    }

    function addFormError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function removeFormError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function testEmail(input) {
        return !/^.+@.+\..+$/.test(input.value);
    }

    function changeFormState(formBody, formText, isSend) {
        if(isSend) {
            if(document.documentElement.clientWidth > 680) {
                formBody.classList.remove('_show-in')
            } else {
                formTitle.innerHTML = 'Спасибо! Запрос отправлен!';
            }
            formText.style.transform = 'scale(1.1)';
            formText.innerHTML = 'Спасибо! Я получил ваше письмо и отвечу как можно скорее!';
        } else {
            formTitle.innerHTML = 'Что-то пошло не так...';
            formText.innerHTML = 'Что-то пошло не так... Напишите мне в социальных сетях, или попробуйте позже';
        }
    }
}

export default form;