
// Constructor Pattern: Es una forma de crear objetos, pero con la diferencia de que se pueden crear varios objetos de un mismo tipo. Son las clases abstraidas de otros lenguajes de programación.

class Persona {

    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }

}

class Cliente extends Persona {

    constructor(nombre, email, empresa) {
        super(nombre, email);
        this.empresa = empresa;
    }

}

const persona = new Persona('Juan', 'correo@correo.com');
console.log(persona);

const cliente = new Cliente('Miguel', 'cliente@cliente.com', 'Código Con Juan');
console.log(cliente);