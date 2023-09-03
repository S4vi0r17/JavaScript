let contactos = [
    {
        nombre: "Juan",
        apellido: "Vega",
        telefono: "123456789",
        email: "juanVega@unmsm.pe",
        "gustos": [

            "futbol",
            "peliculas",
            "ingles"

        ]
    },
    {
        nombre: "Pedro",
        apellido: "Suarez",
        telefono: "123456789",
        email: "colmillorojos@outlokk.com",
        "gustos": [

            "basquet",
            "libros",
            "frances"
        ]
    },
    {
        nombre: "Maria",
        apellido: "Gomez",
        telefono: "123456789",
        email: "bajoterra@unix.pe",
        "gustos": [

            "tenis",
            "programacion",
            "ruso"
        ]
    }
]

function buscarPerfil(nombre, propiedad) {
    for (let i = 0; i < contactos.length; i++) {
        if (contactos[i].nombre === nombre) {
            // En funciones se usa la notacion de corchetes para acceder a las propiedades de un objeto
            return contactos[i][propiedad] || "Propiedad no encontrada";
            // Si es que no encuentra la propiedad, retornara undefined, por eso se usa el operador logico or
        }
    }
    return "Contacto no encontrado";
}

console.log(buscarPerfil("Juan", "gustos"));
console.log(buscarPerfil("Juan", "edad"));
console.log(buscarPerfil("Nacho", "apellido"));