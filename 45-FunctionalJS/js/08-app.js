
// Closure

// En JavaScript los Closures son creados cada que una función se crea...

// Pero un closure es una forma de acceder a una función o valor, desde el exterior...

const obtenerCliente = () => {

    const nombre = "Eder";

    function muestraNombre() {
        console.log(nombre);
    }

    return muestraNombre;
}

const cliente = obtenerCliente();

cliente(); 