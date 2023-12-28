// Fetch API desde una API

const cargarAPIBtn = document.querySelector('#cargarAPI');

cargarAPIBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {

    fetch('https://picsum.photos/list')

        .then(respuesta => {
            return respuesta.json()
        })
        .then(resultado => {
            mostrarHTML(resultado);
            console.log(resultado)
        })
}

// function mostrarHTML(datos) {

//     const contenido = document.querySelector('#contenido');

//     let html = '';

//     datos.forEach(perfil => {
//         const { author, post_url } = perfil;

//         html += `
//             <p>Autor: ${author} </p>
//             <a href="${post_url}" target="_blank">Ver Imagen</a>
//         `
//     });

//     contenido.innerHTML = html;
// }

function mostrarHTML(datos) {

    const contenido = document.querySelector('#contenido');
    let html = '';

    datos.forEach(imagen => {
        let imageUrl = `https://picsum.photos/500/300?image=${imagen.id}`;

        html += `
            <p style="display: block;">Autor: ${imagen.author}</p>
            <img src="${imageUrl}" alt="Imagen" width="200px" style="display: block; margin: 0 auto;">
            <a href="${imagen.post_url}" target="_blank">Ver Imagen</a>
        `;
    });

    contenido.innerHTML = html;
}

// Note: https://picsum.photos/v2/list esta API funciona para evitar crear una url