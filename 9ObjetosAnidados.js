let miReceta = {
    titulo: 'mi postre favorito',
    porciones: 4,
    "ingredientes": {
        "masa": {
            "harina": 1,
            "levadura": 1,
            "sal": 1
        },
        "cobertura": {
            "chocolate": 1,
            "nata": 1
        }
    }
}

console.log(miReceta.ingredientes.masa.harina);

// Notacion de corchetes

console.log(miReceta["ingredientes"]["masa"]["harina"]);

// Siguiente tema: 05:52:11 Colección de discos