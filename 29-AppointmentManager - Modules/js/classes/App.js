import { dataAppointment, newAppointment } from '../functions.js';
import { form, nameInput, ownerInput, phoneInput, dateInput, timeInput, symptomsInput } from '../selectors.js';

class App {

    constructor() {
        this.init();
    }

    init() {
        nameInput.addEventListener('input', dataAppointment);
        ownerInput.addEventListener('input', dataAppointment);
        phoneInput.addEventListener('input', dataAppointment);
        dateInput.addEventListener('input', dataAppointment);
        timeInput.addEventListener('change', dataAppointment);
        symptomsInput.addEventListener('input', dataAppointment);

        form.addEventListener('submit', newAppointment);
    }
}

export default App;