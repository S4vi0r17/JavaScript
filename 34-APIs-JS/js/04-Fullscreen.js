// ejecutar el sitio web en pantalla completa...

const abrirBtn = document.querySelector('#abrir-pantalla-completa');
const salirBtn = document.querySelector('#salir-pantalla-completa');

abrirBtn.addEventListener('click', pantallaCompleta);
salirBtn.addEventListener('click', cerrarPantallaCompleta);


function pantallaCompleta() {
    document.documentElement.requestFullscreen();
    // Se puede mostrar un elemento en pantalla completa, por ejemplo: 
    // document.querySelector('h1').requestFullscreen();
}

function cerrarPantallaCompleta() {
    document.exitFullscreen();
}