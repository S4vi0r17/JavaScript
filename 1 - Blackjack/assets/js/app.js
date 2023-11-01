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
const btn_detener = document.querySelector('#btn-detener');
const btn_nuevo = document.querySelector('#btn-nuevo');

const smalls = document.querySelectorAll('small')

const divCartarPlayer = document.querySelector('#player-card')
const divCartarComputer = document.querySelector('#computer-card')



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

// Turno de la computadora
const turnoComputadora = (puntosMinimos) => {
    
    do {
            
        const carta = pedirCarta();
        puntosComputadora += valorCarta(carta);

        smalls[1].innerText = puntosComputadora;


        // crear img
        const imgCard = document.createElement('img');

        imgCard.src = `assets/cartas/${carta}.png`;
        imgCard.classList.add('card');

        divCartarComputer.append(imgCard);

        if (puntosMinimos > 21) {
            break;
        }

    } while (puntosComputadora < puntosMinimos && puntosMinimos <=21);

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos){
            alert('Nadia gana');
        } else if (puntosMinimos > 21){
            alert('Computadora gana');
        } else if (puntosComputadora > 21){
            alert('jugador gana');
        } else{
            alert('Computadora gana');
        }
    }, 10);


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
        btn_detener.disabled = true;
        turnoComputadora(puntosJugador);
        
    }else if(puntosJugador === 21){
        console.warn('21, cool');
        btn_pedir.disabled = true;    btn_detener.disabled = true;
        btn_detener.disabled = true;
        turnoComputadora(puntosJugador);
    }
});

btn_detener.addEventListener('click', () => {
    btn_detener.disabled = true;
    btn_pedir.disabled = true;
    turnoComputadora(puntosJugador);
})

btn_nuevo.addEventListener('click', () => {
    deck = crearDeck();

    puntosComputadora = 0;
    puntosJugador = 0;
    
    smalls[0].innerText = 0;
    smalls[1].innerText = 0;

    divCartarComputer.innerHTML = '';
    divCartarPlayer.innerHTML = '';

    btn_detener.disabled = false;
    btn_pedir.disabled = false;
})
