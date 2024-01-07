import { getClients, deleteClient } from './API.js';

(function () {
    const list = document.querySelector('#listado-clientes');

    document.addEventListener('DOMContentLoaded', showClients);

    list.addEventListener('click', deleteC);

    async function showClients() {

        const clients = await getClients(); // Se pone async/await para que espere a que se ejecute getClients() y luego se ejecute el resto del código
        // console.log(clients); // No estaba listo para ejecutarse, por eso no se mostraba en la consola
        clients.forEach(client => {

            let { name, email, phone, company, id } = client;

            let row = document.createElement('tr');
            row.innerHTML += `
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${name} </p>
                <p class="text-sm leading-10 text-gray-700"> ${email} </p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                <p class="text-gray-700">${phone}</p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                <p class="text-gray-600">${company}</p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
            </td>
            `;

            list.appendChild(row);
        });
    }

    function deleteC(evt) {

        if (evt.target.classList.contains('eliminar')) {
            const clientId = parseInt(evt.target.dataset.cliente);

            const confirmDelete = confirm('Do you want to delete this client?');

            if (confirmDelete) {
                deleteClient(clientId);
            }
        }
    }

}())