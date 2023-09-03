let ordenesPizzas = [
    {
        "nombre": "Pizza de peperoni",
        "precio": 12.50,
        "ingredientes": [
            
            "peperoni",
            "queso",
            "salsa de tomate"

        ],
        "para llevar": true
    },
    {
        "nombre": "Pizza de jamón",
        "precio": 10.50,
        "ingredientes": [

            "jamón",
            "queso",
            "salsa de tomate"

        ],
        "para llevar": false
    },
    {
        "nombre": "Pizza de piña",
        "precio": 15.50,
        "ingredientes": [

            "piña",
            "queso",
            "salsa de tomate"

        ],
        "para llevar": true
    }
]

console.log(ordenesPizzas[0].ingredientes[0]);
console.log(ordenesPizzas[1]["para llevar"]);