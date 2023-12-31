let client = {
    table: '',
    time: '',
    orders: [],
}

const btnSaveClient = document.querySelector('#guardar-cliente');

btnSaveClient.addEventListener('click', saveClient);


// Functions
function saveClient() {

    // Read inputs
    const table = document.querySelector('#mesa').value;
    const time = document.querySelector('#hora').value;

    // Validate
    const emptyFields = [table, time].some(field => field === '');

    if (emptyFields) {

        // Alert exist
        const alertExist = document.querySelector('.invalid-feedback');

        if (alertExist) return;

        // Alert
        const alert = document.createElement('div');
        alert.classList.add('invalid-feedback', 'd-block', 'text-center');
        alert.textContent = 'All fields are required';
        document.querySelector('.modal-body form').appendChild(alert);

        setTimeout(() => {
            alert.remove();
        }, 3000);

        return;
    }

    console.log('All fields are correct');
}