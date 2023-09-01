function clasificarVolumen(valor) {
    switch (valor) {
        case 1:
            console.log("Volumen bajo");
            break;
        case 2:
        case 3:
            console.log("Volumen medio");
            break;
        case 4:
        case 5:
        case 6:
            console.log("Volumen alto");
            break;
        default:
            console.log("Volumen no válido");
    }
}

clasificarVolumen(6);