// Fetch API desde un JSON (Array)

const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {

    fetch('data/empleado.json')

        .then(respuesta => {
            return respuesta.json()
        })
        .then(resultado => {
            mostrarHTML(resultado);
            console.log(resultado)
        })
}

function mostrarHTML({ empresa, id, nombre, trabajo }) {
    const contenido = document.querySelector('#contenido');

    contenido.innerHTML = `
        <p>ID: ${id} </p>
        <p>Empleado: ${nombre} </p>
        <p>Trabajo: ${trabajo} </p>
        <p>Empresa: ${empresa} </p>
    `
}