/*
* 2C = Two of Clubs
* 2D = Two of Diaminds
* 2H = Two of Hearts
* 2S = Two of Spades
*/

let deck = [];
let tipos = ['C', 'D', 'H', 'S'];
let especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0, puntosComputadora = 0;


// Referecias HTML

const btn_pedir = document.querySelector('#btn-pedir');

const smalls = document.querySelectorAll('small')

const divCartarPlayer = document.querySelector('#player-card')



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

// Events


btn_pedir.addEventListener('click', () => {
    const carta = pedirCarta();
    puntosJugador += valorCarta(carta);

    smalls[0].innerText = puntosJugador;


    // crear img
    const imgCard = document.createElement('img');

    imgCard.src = `assets/cartas/${carta}.png`;
    imgCard.classList.add('card');

    divCartarPlayer.append(imgCard);

    // Puntos
    if(puntosJugador > 21){
        console.warn('Perdiste :\'v');
        btn_pedir.disabled = true;
    }else if(puntosJugador === 21){
        console.warn('21, cool');
        btn_pedir.disabled = true;
    }
});