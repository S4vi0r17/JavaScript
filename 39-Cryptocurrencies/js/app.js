// API docs: https://min-api.cryptocompare.com/documentation
const cryptoSelect = document.querySelector('#criptomonedas');
const currencySelect = document.querySelector('#moneda');
const form = document.querySelector('#formulario');
const result = document.querySelector('#resultado');

// Create object with all the cryptocurrencies
const objSearch = {
    currency: '',
    crypto: ''
}

// Create promise
const obtainCrypto = crypto => new Promise(resolve => {
    resolve(crypto);
});

document.addEventListener('DOMContentLoaded', () => {

    consultCrypto();

    form.addEventListener('submit', submitForm);

    cryptoSelect.addEventListener('change', readValue);
    currencySelect.addEventListener('change', readValue);
});

// Consult crypto
function consultCrypto() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

    fetch(url)
    
        .then(response => response.json())
        .then(result => obtainCrypto(result.Data))
        .then(crypto => selectCrypto(crypto))
}

// Select crypto
function selectCrypto(crypto) {

    crypto.forEach(crypto => {
        const { FullName, Name } = crypto.CoinInfo;

        const option = document.createElement('option');
        option.value = Name;
        option.textContent = `${FullName} - ${Name}`

        cryptoSelect.appendChild(option);
    });
}

// Read value
function readValue(e) {
    // console.log(e.target.name);
    objSearch[e.target.name] = e.target.value;
    // console.log(objSearch);
}

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Validate
    const { currency, crypto } = objSearch;

    if (currency === '' || crypto === '') {
        showAlert('Both fields are required');
        return;
    }

    // Consult API
    consultAPI();
}

// Show alert
function showAlert(msg) {
    const error = document.querySelector('.error');

    if (!error) {
        const divMsg = document.createElement('div');
        divMsg.classList.add('error');
        divMsg.textContent = msg;

        form.appendChild(divMsg);

        setTimeout(() => {
            divMsg.remove();
        }, 3000);
    }
}

// Consult API
function consultAPI() {
    const { currency, crypto } = objSearch;

    // Cambiamos la API para obtener más datos
    let url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`;
    // let url = `https://min-api.cryptocompare.com/data/price?fsym=${crypto}&tsyms=${currency}`;

    // Show spinner
    showSpinner();

    fetch(url)

        .then(response => response.json())
        .then(result => {
            showQuote(result.DISPLAY[crypto][currency]);
            // console.log(result.DISPLAY);
        })

}

// Show quote
function showQuote(quote) {

    cleanHTML();

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = quote;

    const price = document.createElement('p');
    price.classList.add('precio');
    price.innerHTML = `Price: <span>${PRICE}</span>`;

    const highPrice = document.createElement('p');
    highPrice.innerHTML = `Highest price of the day: <span>${HIGHDAY}</span>`;

    const lowPrice = document.createElement('p');
    lowPrice.innerHTML = `Lowest price of the day: <span>${LOWDAY}</span>`;

    const lastHours = document.createElement('p');
    lastHours.innerHTML = `Variation last 24 hours: <span>${CHANGEPCT24HOUR}%</span>`;

    const lastUpdate = document.createElement('p');
    lastUpdate.innerHTML = `Last update: <span>${LASTUPDATE}</span>`;

    result.appendChild(price);
    result.appendChild(highPrice);
    result.appendChild(lowPrice);
    result.appendChild(lastHours);
    result.appendChild(lastUpdate);
}

// Clean HTML
function cleanHTML() {
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
}

// Show spinner
function showSpinner() {

    cleanHTML();

    const spinner = document.createElement('div');
    spinner.classList.add('sk-cube-grid');

    spinner.innerHTML = `
            <div class="sk-cube sk-cube1"></div>
            <div class="sk-cube sk-cube2"></div>
            <div class="sk-cube sk-cube3"></div>
            <div class="sk-cube sk-cube4"></div>
            <div class="sk-cube sk-cube5"></div>
            <div class="sk-cube sk-cube6"></div>
            <div class="sk-cube sk-cube7"></div>
            <div class="sk-cube sk-cube8"></div>
            <div class="sk-cube sk-cube9"></div>
  `;

    result.appendChild(spinner);
}