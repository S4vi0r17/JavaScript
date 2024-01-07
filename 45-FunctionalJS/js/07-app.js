// Funciones que retornan una función

const obtenerCliente = () => () => console.log('Eder Benites');

const fn = obtenerCliente();

fn()