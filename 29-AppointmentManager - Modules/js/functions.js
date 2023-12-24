import Appointments from './classes/Appointments.js';
import UI from './classes/UI.js';

import { form, nameInput, ownerInput, phoneInput, dateInput, timeInput, symptomsInput } from './selectors.js';

// Instances
const ui = new UI();
const manageAppointments = new Appointments();

// Edit mode
let edit;

const appointmentObj = {
    name: '',
    owner: '',
    phone: '',
    date: '',
    time: '',
    symptoms: ''
}

export function dataAppointment(event) {
    appointmentObj[event.target.name] = event.target.value;
}


// Functions

// Validate and add new appointment
export function newAppointment(event) {
    event.preventDefault();

    // Extract info from appointmentObj
    const { name, owner, phone, date, time, symptoms } = appointmentObj;

    // Validate
    if (name === '' || owner === '' || phone === '' || date === '' || time === '' || symptoms === '') {
        console.log('All fields are required');
        ui.printAlert('All fields are required', 'error');
        return;
    }

    if (edit) {
        ui.printAlert('Changes saved correctly');

        // Pass the object to edit
        manageAppointments.editAppointment({ ...appointmentObj });

        // Change text button
        form.querySelector('button[type="submit"]').textContent = 'Create Appointment';

        // Remove edit mode
        edit = false;
    } else {
        // Generate ID
        appointmentObj.id = Date.now();

        // Create new appointment
        manageAppointments.addAppointment({ ...appointmentObj }); // Spread operator

        // Message
        ui.printAlert('Appointment added correctly');
    }

    // Reset form
    form.reset();

    // reset appointmentObj
    resetAppointmentObj();

    // Show HTML
    ui.printAppointments(manageAppointments);
}

// Reset appointmentObj
export function resetAppointmentObj() {
    appointmentObj.name = '';
    appointmentObj.owner = '';
    appointmentObj.phone = '';
    appointmentObj.date = '';
    appointmentObj.time = '';
    appointmentObj.symptoms = '';
}

// Delete appointment
export function deleteAppointment(id) {
    // Delete appointment
    manageAppointments.deleteAppointment(id);

    // Show message
    ui.printAlert('Appointment deleted correctly');

    // Refresh appointments
    ui.printAppointments(manageAppointments);
}

// Edit appointment
export function editAppointment(appointment) {
    const { name, owner, phone, date, time, symptoms, id } = appointment;

    // Fill inputs
    nameInput.value = name;
    ownerInput.value = owner;
    phoneInput.value = phone;
    dateInput.value = date;
    timeInput.value = time;
    symptomsInput.value = symptoms;

    // Fill appointmentObj
    appointmentObj.name = name;
    appointmentObj.owner = owner;
    appointmentObj.phone = phone;
    appointmentObj.date = date;
    appointmentObj.time = time;
    appointmentObj.symptoms = symptoms;
    appointmentObj.id = id;

    // Change text button
    form.querySelector('button[type="submit"]').textContent = 'Save Changes';

    edit = true;
}