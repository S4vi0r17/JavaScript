// Constructors
function Insurance(brand, year, type) {
    this.brand = brand;
    this.year = year;
    this.type = type;
}

// Make the quote with the data
Insurance.prototype.quoteInsurance = function () { // Function because we need to access the object
    /*
        1 = American 15%
        2 = Asian 5%
        3 = European 35%
    */

    let quantity;
    const base = 2000;

    switch (this.brand) {

        case '1':
            quantity = base * 1.15;
            break;
        case '2':
            quantity = base * 1.05;
            break;
        case '3':
            quantity = base * 1.35;
            break;
    }

    // console.log(quantity);

    // Read year
    let difference = new Date().getFullYear() - this.year;
    // console.log(difference);

    // Each year of difference we have to reduce 3% the value of the insurance
    quantity -= ((difference * 0.03) * quantity);
    // console.log(quantity);

    /*
        If the insurance is basic, it increases 30%
        If the insurance is complete, it increases 50%
    */

    if (this.type === 'basico') {
        quantity *= 1.30;
    } else {
        quantity *= 1.50;
    }

    console.log(quantity);
    return quantity;
}

function UI() { }

// Usamos arrow function porque no necesitamos acceder al objeto

// Fill Years
UI.prototype.fillOptions = () => {
    const max = new Date().getFullYear(),
        min = max - 20;

    const selectYear = document.querySelector('#year');

    for (let i = max; i >= min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;

        selectYear.appendChild(option);
    }
}

// Show Alert
UI.prototype.showAlert = (message, type) => {
    const alert = document.createElement('div');

    if (type === 'error') {
        alert.classList.add('error');
    } else {
        alert.classList.add('correcto');
    }

    alert.classList.add('mensaje', 'mt-10');
    alert.textContent = message;

    // Add to HTML
    const form = document.querySelector('#cotizar-seguro');
    form.insertBefore(alert, document.querySelector('#resultado'));

    setTimeout(() => {
        alert.remove();
    }, 2000);
}

UI.prototype.showResult = (total, insurance) => {

    let { brand, year, type } = insurance;

    if (brand === '1') {
        brand = 'American';
    } else if (brand === '2') {
        brand = 'Asian';
    }
    else {
        brand = 'European';
    }

    // Create result
    const summary = document.createElement('div');
    summary.classList.add('mt-10');
    summary.innerHTML = `
        <p class="header">Summary</p>
        <p class="font-bold">Brand: <span class="font-normal">${brand}</span></p>
        <p class="font-bold">Year: <span class="font-normal">${year}</span></p>
        <p class="font-bold">Type: <span class="font-normal capitalize">${type}</span></p>
        <p class="font-bold">Total: <span class="font-normal">$ ${total.toFixed(2)}</span></p>
    `;

    const result = document.querySelector('#resultado');
    // result.appendChild(summary);

    // Show spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    setTimeout(() => {
        // spinner.remove(); // Lo elimina, pero no lo estilos persisten = null
        spinner.style.display = 'none'; // Lo elimina y los estilos también
        result.appendChild(summary); // Show the result
    }, 2000);
}

// Instancias UI
const ui = new UI();
console.log(ui);

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    ui.fillOptions();
});

// Functions
eventListeners();

function eventListeners() {
    const form = document.querySelector('#cotizar-seguro');
    form.addEventListener('submit', quoteInsurance);
}

function quoteInsurance(evt) {
    evt.preventDefault();

    // Brand selected
    const brand = document.querySelector('#marca').value;

    // Year selected
    const year = document.querySelector('#year').value;

    // Type selected
    const type = document.querySelector('input[name="tipo"]:checked').value;

    if (brand === '' || year === '' || type === '') {
        ui.showAlert('All fields are required', 'error');
        return;
    }
    // else {
    //     ui.showAlert('Quote generated', 'correcto')
    // }

    ui.showAlert('Quoting...', 'correcto');

    // Hide previous quotes
    const results = document.querySelector('#resultado div');
    if (results != null) {
        results.remove();
    }

    // Instancia Insurance
    const insurance = new Insurance(brand, year, type);
    const totalInsurance = insurance.quoteInsurance();

    // Use prototype that will quote
    ui.showResult(totalInsurance, insurance);
}