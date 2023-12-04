// Veamos como hacer destructuring de un objeto que esta dentro de otro objeto..

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion: {
            pais: 'China'
        }
    }
}


// Desestructurar pais china
const { nombre, informacion, informacion: { fabricacion, fabricacion: { pais } } } = producto;
// para acceder a la fabricacion se debe usar una coma.

console.log(nombre)
console.log(informacion)
console.log(fabricacion)
console.log(pais)