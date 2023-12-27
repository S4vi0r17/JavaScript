// DataBase
let DB;

// Variables
const form = document.querySelector("#new-appointment");
const appointmentsContainer = document.querySelector("#appointments");

const nameInput = document.querySelector("#name");
const ownerInput = document.querySelector("#owner");
const phoneInput = document.querySelector("#phone");
const dateInput = document.querySelector("#date");
const timeInput = document.querySelector("#time");
const symptomsInput = document.querySelector("#symptoms");

// Edit mode
let edit;

// Classes
class Appointments {
    constructor() {
        this.appointments = [];
    }

    addAppointment(appointment) {
        this.appointments = [...this.appointments, appointment];
        console.log(this.appointments);
    }

    deleteAppointment(id) {
        this.appointments = this.appointments.filter(
            (appointment) => appointment.id !== id
        );
        // Filter returns a new array without the element that matches the condition
    }

    editAppointment(updatedAppointment) {
        this.appointments = this.appointments.map((appointment) =>
            appointment.id === updatedAppointment.id
                ? updatedAppointment
                : appointment
        );
        // Map returns a new array
    }
}

class UI {
    // constructor(appointments) {
    //     this.headingText(appointments);
    // }

    printAlert(message, type) {
        // Create div
        const divMessage = document.createElement("div");
        divMessage.classList.add("text-center", "alert", "d-block", "col-12");

        // Add class depending on type
        if (type === "error") {
            divMessage.classList.add("alert-danger");
        } else {
            divMessage.classList.add("alert-success");
        }

        // Message
        divMessage.textContent = message;

        // Add to DOM
        document
            .querySelector("#content")
            .insertBefore(divMessage, document.querySelector(".add-appointment"));

        // Remove from DOM
        setTimeout(() => {
            divMessage.remove();
        }, 3000);
    }

    printAppointments() {
        // Destructuring

        this.cleanHTML();

        // Heading text
        // this.headingText(manageAppointments);

        // Read content of the DB
        const objectStore =
            DB.transaction("appointments").objectStore("appointments");

        // 
        const total = objectStore.count();
        // total.onsuccess = function () {
        //     console.log(total.result);
        // }

        objectStore.openCursor().onsuccess = function (event) {
            const cursor = event.target.result;

            if (cursor) {
                const { name, owner, phone, date, time, symptoms, id } = cursor.value;

                const divAppointment = document.createElement("div");
                divAppointment.classList.add("appointment", "p-3");
                divAppointment.dataset.id = id;

                // Scripting
                const petName = document.createElement("h2");
                petName.classList.add("card-title", "font-weight-bolder");
                petName.textContent = name;

                const petOwner = document.createElement("p");
                petOwner.innerHTML = `
                <span class="font-weight-bolder">Owner: </span> ${owner}
            `;

                const petPhone = document.createElement("p");
                petPhone.innerHTML = `
                <span class="font-weight-bolder">Phone: </span> ${phone}
            `;

                const petDate = document.createElement("p");
                petDate.innerHTML = `
                <span class="font-weight-bolder">Date: </span> ${date}
            `;

                const petTime = document.createElement("p");
                petTime.innerHTML = `
                <span class="font-weight-bolder">Time: </span> ${time}
            `;

                const petSymptoms = document.createElement("p");
                petSymptoms.innerHTML = `
                <span class="font-weight-bolder">Symptoms: </span> ${symptoms}
            `;

                const btnDelete = document.createElement("button");
                btnDelete.classList.add("btn", "btn-danger", "mr-2");
                btnDelete.innerHTML =
                    'Delete <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6M6 6l12 12"/></svg>';

                btnDelete.onclick = () => deleteAppointment(id);

                // Edit appointment
                const btnEdit = document.createElement("button");
                btnEdit.classList.add("btn", "btn-info");
                btnEdit.innerHTML =
                    'Edit <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>';


                const appointment = cursor.value;
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

                // Continue to next element
                cursor.continue();
            }
        };
    }

    // headingText(appointments) {
    //     if (appointments.length > 0) {
    //         heading.textContent = 'Manage your appointments'
    //     } else {
    //         heading.textContent = 'There are no appointments, add one'
    //     }
    // }

    cleanHTML() {
        while (appointmentsContainer.firstChild) {
            appointmentsContainer.removeChild(appointmentsContainer.firstChild);
        }
    }
}

// Instances
const manageAppointments = new Appointments();
const ui = new UI();

window.onload = () => {
    // Event Listeners
    eventListeners();

    // Create DB
    createDB();
};

function eventListeners() {
    nameInput.addEventListener("input", dataAppointment);
    ownerInput.addEventListener("input", dataAppointment);
    phoneInput.addEventListener("input", dataAppointment);
    dateInput.addEventListener("input", dataAppointment);
    timeInput.addEventListener("change", dataAppointment);
    symptomsInput.addEventListener("input", dataAppointment);

    form.addEventListener("submit", newAppointment);
}

const appointmentObj = {
    name: "",
    owner: "",
    phone: "",
    date: "",
    time: "",
    symptoms: "",
};

// Functions

function dataAppointment(event) {
    appointmentObj[event.target.name] = event.target.value;
}

// Validate and add new appointment
function newAppointment(event) {
    event.preventDefault();

    // Extract info from appointmentObj
    const { name, owner, phone, date, time, symptoms } = appointmentObj;

    // Validate
    if (
        name === "" ||
        owner === "" ||
        phone === "" ||
        date === "" ||
        time === "" ||
        symptoms === ""
    ) {
        console.log("All fields are required");
        ui.printAlert("All fields are required", "error");
        return;
    }

    if (edit) {
        ui.printAlert("Changes saved correctly");

        // Pass the object to edit
        manageAppointments.editAppointment({ ...appointmentObj });


        // Edit in IndexedDB
        const transaction = DB.transaction(["appointments"], "readwrite");

        // Access to objectStore
        const objectStore = transaction.objectStore("appointments");

        // Insert to DB
        objectStore.put(appointmentObj);

        transaction.oncomplete = function () {
            // Change text button
            form.querySelector('button[type="submit"]').textContent =
                "Create Appointment";

            // Remove edit mode
            edit = false;
        }

        transaction.onerror = function () {
            console.log("Error");
        }

    } else {
        // Generate ID
        appointmentObj.id = Date.now();

        // Create new appointment
        manageAppointments.addAppointment({ ...appointmentObj }); // Spread operator

        // Insert to DB
        const transaction = DB.transaction(["appointments"], "readwrite");

        // Access to objectStore
        const objectStore = transaction.objectStore("appointments");

        // Insert to DB
        objectStore.add(appointmentObj);

        transaction.oncomplete = function () {
            console.log("Appointment added");

            // Message
            ui.printAlert("Appointment added correctly");
        };

        // Message
        // ui.printAlert("Appointment added correctly");
    }

    // Reset form
    form.reset();

    // reset appointmentObj
    resetAppointmentObj();

    // Show HTML
    ui.printAppointments();
}

// Reset appointmentObj
function resetAppointmentObj() {
    appointmentObj.name = "";
    appointmentObj.owner = "";
    appointmentObj.phone = "";
    appointmentObj.date = "";
    appointmentObj.time = "";
    appointmentObj.symptoms = "";
}

// Delete appointment
function deleteAppointment(id) {

    const transaction = DB.transaction(["appointments"], "readwrite");

    // Access to objectStore
    const objectStore = transaction.objectStore("appointments");

    // Delete
    objectStore.delete(id);

    transaction.oncomplete = function () {
        console.log(`Appointment ${id} deleted`);

        // Show message
        ui.printAlert("Appointment deleted correctly");

        // Refresh appointments
        ui.printAppointments();
    }

    transaction.onerror = function () {
        console.log("Error");
    }
}

// Edit appointment
function editAppointment(appointment) {
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
    form.querySelector('button[type="submit"]').textContent = "Save Changes";

    edit = true;
}

// Create DB
function createDB() {
    // Create DB version 1.0
    const createDB = window.indexedDB.open("appointments", 1);

    // If there's an error
    createDB.onerror = function () {
        console.log("There was an error");
    };

    // If everything is fine
    createDB.onsuccess = function () {
        // console.log('DB created');

        // Assign DB
        DB = createDB.result;

        // console.log(DB);
        // Show appointments from DB when loaded
        ui.printAppointments();
    };

    // Define schema
    createDB.onupgradeneeded = function (event) {
        const db = event.target.result;

        const objectStore = db.createObjectStore("appointments", {
            keyPath: "id",
            autoIncrement: true,
        });

        // Define columns
        objectStore.createIndex("name", "name", { unique: false });
        objectStore.createIndex("owner", "owner", { unique: false });
        objectStore.createIndex("phone", "phone", { unique: false });
        objectStore.createIndex("date", "date", { unique: false });
        objectStore.createIndex("time", "time", { unique: false });
        objectStore.createIndex("symptoms", "symptoms", { unique: false });
        objectStore.createIndex("id", "id", { unique: true });

        console.log("DB ready and created");
    };
}
