let coleccionDeDiscos = {
    5436: {
        tituloAlbum : 'Chinese Democracy',
        artista : 'Guns N Roses',
        canciones : [
            'Chinese Democracy',
            'Shacklers Revenge',
            'Better',
            'Street of Dreams',
            'If the World',
            'There Was a Time'
        ]
    },
    4327: {
        tituloAlbum : 'The Wall',
        artista : 'Pink Floyd',
        canciones : [
            'In the Flesh?',
            'The Thin Ice',
            'Another Brick in the Wall (Part I)',
            'The Happiest Days of Our Lives',
            'Another Brick in the Wall (Part II)',
            'Mother'
        ]
    }
}

function actualizarDisco(disco, id, propiedad, valor) {
    if (valor === "") {
        delete disco[id][propiedad];
    }else if (propiedad === "canciones") {
        disco[id][propiedad] = disco[id][propiedad] || []; /* Cuando asignas un valor a una propiedad que no existe, JavaScript la crea automáticamente.
                                                              En el caso que exista se le asigna el mismo valor para no modificarlo */
        disco[id][propiedad].push(valor);
    }else{
        disco[id][propiedad] = valor;
    }
}

console.log(coleccionDeDiscos[5436].artista);

actualizarDisco(coleccionDeDiscos, 5436, "artista", "Guns N' Roses");

console.log(coleccionDeDiscos[5436].artista);

console.log(coleccionDeDiscos[4327].tituloAlbum);

actualizarDisco(coleccionDeDiscos, 4327, "tituloAlbum", "");

console.log(coleccionDeDiscos[4327].tituloAlbum);

console.log(coleccionDeDiscos);