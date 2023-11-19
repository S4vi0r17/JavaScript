const button = document.querySelector('.saludar');

function saludar() {
    console.log('Hola Mundo')
}

button.addEventListener('click', saludar);

const nombreUsuario = document.querySelector('.nombreUsuario');
const botonSaludar = document.querySelector('.click button');

botonSaludar.addEventListener('click', () => {
    console.log(nombreUsuario.value);
});