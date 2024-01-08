
// Mixins, es una forma de agregar funciones a una clase una vez que ha sido creada...

// Vamos a utilizar la clase que creamos previamente...

class Persona {

    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }

}

const funcionesPersona = {

    mostrarInformacion() {
        console.log(`Nombre Persona: ${this.nombre}, Email: ${this.email}`);
    },
    
    mostrarNombre() {
        console.log(`Mi nombre es ${this.nombre}`);
    }

}

// Añadir funciones Persona a la clase...

Object.assign(Persona.prototype, funcionesPersona);

const cliente = new Persona('Eder', 'correo@correo.com');

console.log(cliente);
cliente.mostrarInformacion();
cliente.mostrarNombre();

/*
    Al usar Object.assign()estamos asignando las funciones que se encuentran dentro del objeto funcionesPersona al Prototype de las Clases Persona y Cliente . Ahora estas funciones pasan a ser metodos de dichas Clases. Cuando se instancia (crear un objeto con el constructor de las Clase y este objeto tiene acceso a los distintos metodos que solo existen en la Clase ) las Clases Personas y Cliente y despues usamos los metodos que previamente fueron agregador con el Object.assign , y estos metodos nos imprime en la consola las distintas propiedades de las instancias gracias a que usamos el this (el this hace referencia al objeto).


    Instancia: Se refiere a la creacion de un objeto con el constructor de una Clase y esta instancia ahora tiene acceso a los diferentes metodos que la Clase posee


    Prototype: Conjunto de metodos (funciones) exclusivos para ese tipo de objeto


    Metodos: Se llaman metodos a las funciones que estan dentro de objetos
*/