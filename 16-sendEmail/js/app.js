document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.querySelector('#email');
    const subjectInput = document.querySelector('#asunto');
    const messageInput = document.querySelector('#mensaje');
    const form = document.querySelector('#formulario');
    const submitBtn = document.querySelector('#formulario button[type="submit"]')
    const resetBtn = document.querySelector('#formulario button[type="reset"]')
    const spinner = document.querySelector('#spinner');

    // console.log(emailInput);
    // console.log(subjectInput);
    // console.log(messageInput);


    // 
    const well = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    // events

    // Diferencia entre blur e input: blur se ejecuta cuando el usuario sale del input, input se ejecuta en tiempo real
    emailInput.addEventListener('blur', validate); // validate() llama a la funcion, validate solo es la funcion

    subjectInput.addEventListener('blur', validate); // Input en tiempo real

    messageInput.addEventListener('blur', validate);


    resetBtn.addEventListener('click', evt => {
        evt.preventDefault();

        // Reinicar el objeto well
        // well.email = '';
        // well.asunto = '';
        // well.mensaje = '';
        // form.reset();
        // checkWell();
        resetForm();
    })

    form.addEventListener('submit', sendEmail);

    function sendEmail(evt) {
        evt.preventDefault();

        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');

            // Reinicar el objeto well
            resetForm();

            // Crear alerta
            const successAlert = document.createElement('p');
            successAlert.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase')
            successAlert.textContent = 'Mensaje enviado correctamente';


            form.appendChild(successAlert);

            setTimeout(() => {
                successAlert.remove();
            }, 3000);

        }, 3000)
    }

    // let nombre = 'hola       ';
    // console.log(nombre);
    // console.log(nombre.length);


    // console.log(nombre.trim());
    // console.log( nombre.trim().length);

    // trim() devuelve un string


    function validate(evt) {
        if (evt.target.value.trim() === '') {
            alert(`El campo ${evt.target.id} es obligatorio`, evt.target.parentElement);
            well[evt.target.name] = ''; // Reiniciar los valores
            checkWell(); // Para que no haya falsos
            return;
        }

        if (evt.target.id === 'email' && !validateEmail(evt.target.value)) {
            alert('El email no es valido', evt.target.parentElement);
            well[evt.target.name] = '';
            checkWell();
            return; // Si no lo pongo obviamente se limpia la alerta
        }

        cleanAlert(evt.target.parentElement);

        // Asignar valores
        well[evt.target.name] = evt.target.value.trim().toLowerCase();
        // console.log(well);
        console.log(evt.target.name);
        // comprobar email
        checkWell();
    }

    function alert(message, reference) {
        cleanAlert(reference);

        const error = document.createElement('p');
        error.textContent = message;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center', 'alert');

        // console.log(error);
        // Error al formulario

        reference.appendChild(error);
    }

    function cleanAlert(reference) {
        // comprobar alertar repetidas
        const alertMessage = reference.querySelector('.alert')
        // console.log(alertMessage);

        if (alertMessage) {
            alertMessage.remove();
        }
    }

    function validateEmail(email) {
        // RE: regular EX: expression
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const result = regex.test(email);

        return result;
    }

    function checkWell() {
        // console.log(well);
        // console.log(Object.values(well)); // Nos da un arreglo
        // console.log(Object.values(well).includes('')); // Comprobamos si hay alguno vacio
        if (!Object.values(well).includes('')) {
            submitBtn.classList.remove('opacity-50');
            submitBtn.disabled = false;
            return;
        }
        submitBtn.classList.add('opacity-50');
        submitBtn.disabled = true;
    }

    function resetForm() {
        // Reinicar el objeto well
        well.email = '';
        well.asunto = '';
        well.mensaje = '';
        form.reset();
        checkWell();
    }
});