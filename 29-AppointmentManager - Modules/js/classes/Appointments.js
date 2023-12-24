class Appointments {

    constructor() {
        this.appointments = [];
    }

    addAppointment(appointment) {
        this.appointments = [...this.appointments, appointment];
        console.log(this.appointments);
    }

    deleteAppointment(id) {
        this.appointments = this.appointments.filter(appointment => appointment.id !== id);
        // Filter returns a new array without the element that matches the condition
    }

    editAppointment(updatedAppointment) {
        this.appointments = this.appointments.map(appointment => appointment.id === updatedAppointment.id ? updatedAppointment : appointment);
        // Map returns a new array
    }
}

export default Appointments;