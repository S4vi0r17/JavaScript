import Citas from '../js/classes/Citas';

describe('Probar la clase de Citas', () => {

    const citas = new Citas();

    const id = Date.now();

    test('Agregar una nueva cita', () => {
        const citaObj = {
            id,
            mascota: 'Minino',
            propietario: 'Eder',
            telefono: '123456789',
            fecha: '10-12-2024',
            hora: '10:30',
            sintomas: 'Solo duerme'
        };

        citas.agregarCita(citaObj);

        // Prueba
        expect(citas).toMatchSnapshot();
    });

    test('Actualizar cita', () => {
        const citaActualizada = {
            id,
            mascota: 'New Minino',
            propietario: 'New Eder',
            telefono: '123456789',
            fecha: '10-12-2020',
            hora: '10:30',
            sintomas: 'Solo duerme'
        };

        citas.editarCita(citaActualizada);

        expect(citas).toMatchSnapshot();
    });

    test('Eliminar cita', () => {
        citas.eliminarCita(id);

        expect(citas).toMatchSnapshot();
    });

    test('Mostrar un mensaje de error cuando no hay citas', () => {
        const mensaje = citas.citas;

        expect(mensaje).toMatchSnapshot();
    });

});

// Para actualizar el snapshot, ejecutar el comando:
// npm test -- -u