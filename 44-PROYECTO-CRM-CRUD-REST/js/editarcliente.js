import { getClient, updateClient } from './API.js'
import { validate, showAlert } from './funciones.js'

(function () {

    const nameInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const phoneInput = document.querySelector('#telefono');
    const companyInput = document.querySelector('#empresa');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () => {

        const urlParams = new URLSearchParams(window.location.search);

        const idClient = parseInt(urlParams.get('id'));

        const client = await getClient(idClient);

        showClient(client);

        // Submit the edit form
        const editForm = document.querySelector('#formulario');
        editForm.addEventListener('submit', validateClient);
    });

    function showClient(client) {

        const { name, email, phone, company, id } = client;

        nameInput.value = name;
        emailInput.value = email;
        phoneInput.value = phone;
        companyInput.value = company;
        idInput.value = id;
    }

    function validateClient(evt) {

        evt.preventDefault();

        const client = {
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            company: companyInput.value,
            id: parseInt(idInput.value)
        }

        if (validate(client)) {
            showAlert('Todos los campos son obligatorios');
            return;
        }

        // Rewrite the object
        updateClient(client);
    }
}())