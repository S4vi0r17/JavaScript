/*
* 2C = Two of Clubs
* 2D = Two of Diaminds
* 2H = Two of Hearts
* 2S = Two of Spades
*/

let deck = [];
let tipos = ['C', 'D', 'H', 'S'];
let especiales = ['A', 'J', 'Q', 'K'];

const crearDeck = () => {
    for(let i=2; i <=10; i++){
        for(let tipo of tipos){
            deck.push(i + tipo);
        }
    }

    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push(esp + tipo)
        }
    }

    deck = _.shuffle(deck); // Mezcla aleatoriamente

    return deck;
}

deck = crearDeck();

console.log(deck);


// Tomar carta

const pedirCarta = () => {
    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    return deck.pop();
}

const valorCarta = (carta) => {
    // Extraer el numero del string
    const valor = carta.substring(0, carta.length - 1);

    return (isNaN(valor)) ? (( valor === 'A') ? 11 : 10) : parseInt(valor);
}


const valor = valorCarta(pedirCarta());
console.log(deck);
console.log(valor);