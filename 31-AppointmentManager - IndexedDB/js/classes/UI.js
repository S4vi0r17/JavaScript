import { deleteAppointment, editAppointment } from '../functions.js';
import { appointmentsContainer } from '../selectors.js';

class UI {

    printAlert(message, type) {
        // Create div
        const divMessage = document.createElement('div');
        divMessage.classList.add('text-center', 'alert', 'd-block', 'col-12');

        // Add class depending on type
        if (type === 'error') {
            divMessage.classList.add('alert-danger');
        } else {
            divMessage.classList.add('alert-success');
        }

        // Message
        divMessage.textContent = message;

        // Add to DOM
        document.querySelector('#content').insertBefore(divMessage, document.querySelector('.add-appointment'));

        // Remove from DOM
        setTimeout(() => {
            divMessage.remove();
        }, 3000);
    }

    printAppointments({ appointments }) { // Destructuring

        this.cleanHTML();

        appointments.forEach(appointment => {
            const { name, owner, phone, date, time, symptoms, id } = appointment;

            const divAppointment = document.createElement('div');
            divAppointment.classList.add('appointment', 'p-3');
            divAppointment.dataset.id = id;

            // Scripting
            const petName = document.createElement('h2');
            petName.classList.add('card-title', 'font-weight-bolder');
            petName.textContent = name;

            const petOwner = document.createElement('p');
            petOwner.innerHTML = `
                <span class="font-weight-bolder">Owner: </span> ${owner}
            `;

            const petPhone = document.createElement('p');
            petPhone.innerHTML = `
                <span class="font-weight-bolder">Phone: </span> ${phone}
            `;

            const petDate = document.createElement('p');
            petDate.innerHTML = `
                <span class="font-weight-bolder">Date: </span> ${date}
            `;

            const petTime = document.createElement('p');
            petTime.innerHTML = `
                <span class="font-weight-bolder">Time: </span> ${time}
            `;

            const petSymptoms = document.createElement('p');
            petSymptoms.innerHTML = `
                <span class="font-weight-bolder">Symptoms: </span> ${symptoms}
            `;

            const btnDelete = document.createElement('button');
            btnDelete.classList.add('btn', 'btn-danger', 'mr-2');
            btnDelete.innerHTML = 'Delete <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6M6 6l12 12"/></svg>';

            btnDelete.onclick = () => deleteAppointment(id);

            // Edit appointment
            const btnEdit = document.createElement('button');
            btnEdit.classList.add('btn', 'btn-info');
            btnEdit.innerHTML = 'Edit <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>';

            btnEdit.onclick = () => editAppointment(appointment);

            divAppointment.appendChild(petName);
            divAppointment.appendChild(petOwner);
            divAppointment.appendChild(petPhone);
            divAppointment.appendChild(petDate);
            divAppointment.appendChild(petTime);
            divAppointment.appendChild(petSymptoms);
            divAppointment.appendChild(btnDelete);
            divAppointment.appendChild(btnEdit);
            appointmentsContainer.appendChild(divAppointment);

        });
    }

    cleanHTML() {
        while (appointmentsContainer.firstChild) {
            appointmentsContainer.removeChild(appointmentsContainer.firstChild);
        }
    }
}

export default UI;