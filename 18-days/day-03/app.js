const nombreUsuario = document.querySelector('.nombreUsuario');
const botonSaludar = document.querySelector('.click button');

botonSaludar.addEventListener('click', () => {
    console.log(nombreUsuario.value);
});

let saludarNombre = document.querySelector('.saludarNombre');
let saludarANombre = document.querySelector('.saludarANombre');
let btnSaludar = document.querySelector('.saludar');
let audio = document.querySelector('#audio');

btnSaludar.addEventListener('click', () => {
    setTimeout(() => {
        saludarANombre.textContent = `Tu nombre es ${saludarNombre.value}`;
        saludarANombre.style.color = 'red';
        audio.play();
    }, 2000);
});

const hora = document.querySelector('#hora');

const mostrarHora = () => {
    const fecha = new Date();
    hora.textContent = `${String(fecha.getHours()).padStart(2, '0')}:${String(fecha.getMinutes()).padStart(2, '0')}:${String(fecha.getSeconds()).padStart(2, '0')}`;
}

setInterval(mostrarHora, 1000);