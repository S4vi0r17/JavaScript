// Fetch API desde un JSON (Objeto)

const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
cargarJSONArrayBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {

    fetch('data/empleados.json')

        .then(respuesta => {
            return respuesta.json()
        })
        .then(resultado => {
            mostrarHTML(resultado);
            console.log(resultado)
        })
}

function mostrarHTML(empleados) {
    const contenido = document.querySelector('#contenido');

    let html = '';

    empleados.forEach(empleado => {
        let { id, nombre, empresa, trabajo } = empleado;

        html += `
            <p>ID: ${id} </p>
            <p>Empleado: ${nombre} </p>
            <p>Trabajo: ${trabajo} </p>
            <p>Empresa: ${empresa} </p>
        `
    });

    contenido.innerHTML = html;
}