/*
    function crearPersona(nombre, apellido){
        return{
            nombre: nombre,
            apellido: apellido
        }
    }
*/
/*
    function crearPersona(nombre, apellido){
        return{
            nombre,
            apellido
        }
    }
*/

/*
    const crearPersona = (nombre, apellido) => {
        return {nombre,apellido}
    }
*/

const crearPersona = (nombre, apellido) => ( {nombre,apellido} );

const persona = crearPersona('Juan', 'Perez');
console.log(persona);

function imprimeArgumentos(){
    console.log(arguments);
}

// Solo las funciones que no son de flecha tienen el objeto arguments
// const imprimeArgumentos2 = (...args) => console.log(args);
// Despues del parametro rest no se pueden poner mas parametros

const imprimeArgumentos2 = (edad,...args) => {
    // console.log({edad,args});
    return args;
}


// imprimeArgumentos(10, true, false, 'Juan', 'Hola');
const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Juan', 'Hola');
console.log({ casado, vivo, nombre, saludo });


const {apellido: nuevoApellido} = crearPersona('Maria', 'Perez');
console.log({nuevoApellido});

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

/*
    const imprimePropiedades = ( personaje ) => {
        console.log('nombre: ', personaje.nombre);
        console.log('codeName: ', personaje.codeName);
        console.log('vivo: ', personaje.vivo);
        console.log('edad: ', personaje.edad);
        console.log('trajes: ', personaje.trajes);
    }
*/

const imprimePropiedades = ( {nombre, codeName, vivo, edad = 15, trajes} ) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades(tony);