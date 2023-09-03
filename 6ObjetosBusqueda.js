// Sentencia switch para detectar el nombre de elemntos quitando el prefijo

function buscarElementoQuimico(simbolo){

    // let elementoQuimico = "";

    let simboloQuimico = {
        "H": "Hidrógeno",
        "He": "Helio",
        "Li": "Litio",
        "Be": "Berilio",
        "B": "Boro"
    }

    /*
    switch(simbolo){
        case "H":
            elementoQuimico = "Hidrógeno";
            break;
        case "He":
            elementoQuimico = "Helio";
            break;
        case "Li":
            elementoQuimico = "Litio";
            break;
        case "Be":
            elementoQuimico = "Berilio";
            break;
        case "B":
            elementoQuimico = "Boro";
            break;
    }
    */
    // return elementoQuimico;
    return simboloQuimico[simbolo];
}

console.log(buscarElementoQuimico("H"));