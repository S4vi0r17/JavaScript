let client = {
    table: '',
    time: '',
    orders: [],
}

const categoryList = {
    1: 'food',
    2: 'drink',
    3: 'dessert'
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

    // Add to object
    client = { ...client, table, time };
    // Si el spread operator va al final, se sobreescribe el objeto client y queda vacío

    // Hide modal
    const modal = document.querySelector('#formulario');
    const modalBootstrap = bootstrap.Modal.getInstance(modal);
    modalBootstrap.hide();

    // Show sections
    showSections();

    // get dishes
    getDishes();
}

// Show sections
function showSections() {

    const hiddenSections = document.querySelectorAll('.d-none');

    hiddenSections.forEach(section => section.classList.remove('d-none'));
}

// Get dishes
function getDishes() {
    const url = `http://localhost:4000/platillos`;

    fetch(url)
        .then(response => response.json())
        .then(result => showDishes(result))
        .catch(error => console.log(error));
}

// Show dishes
function showDishes(dishes) {

    const content = document.querySelector('#platillos .contenido');

    dishes.forEach(dish => {
        let { id, nombre, precio, categoria } = dish;

        // // Row
        // const row = document.createElement('tr');
        // row.innerHTML = `
        //     <td>${nombre}</td>
        //     <td>${precio}</td>
        //     <td>
        //         <input type="number" class="form-control" min="1" value="1" id="cantidad">
        //     </td>
        //     <td>
        //         <button type="button" class="btn btn-primary" data-id="${id}" data-nombre="${nombre}" data-precio="${precio}">Agregar</button>
        //     </td>
        // `;

        let row = document.createElement('div');
        row.classList.add('row', 'border-bottom', 'py-3');

        let name = document.createElement('div');
        name.classList.add('col-md-4');
        name.textContent = nombre;

        let price = document.createElement('div');
        price.classList.add('col-md-3', 'fw-bold');
        price.textContent = `$${precio}`;

        let category = document.createElement('div');
        category.classList.add('col-md-3');
        category.textContent = categoryList[categoria];

        let quantity = document.createElement('input');
        quantity.classList.add('form-control');
        quantity.type = 'number';
        quantity.min = 0;
        quantity.value = 0;
        quantity.id = `cantidad-${id}`;

        // funtion that detects changes in the input
        // Es necesrio usar una función anónima para que no se ejecute inmediatamente, ya que si pongo addDish(id) se ejecuta inmediatamente
        quantity.onchange = () => {
            let quantityValue = parseInt(quantity.value);
            // console.log(quantityValue);
            addDish({ ...dish, quantityValue })
        };

        let addQuantity = document.createElement('div');
        addQuantity.classList.add('col-md-2');
        addQuantity.appendChild(quantity);


        row.appendChild(name);
        row.appendChild(price);
        row.appendChild(category);
        row.appendChild(addQuantity);


        // Add to content
        content.appendChild(row);
    });
}

// Add dish
function addDish(product) {

    let { orders } = client;

    // check if dish is higher than 0
    if (product.quantityValue > 0) {
        // console.log('es mayor');
        // console.log(orders.some(order => order.id === product.id));

        if (orders.some(order => order.id === product.id)) {

            let ordersUpdate = orders.map(order => {
                if (order.id === product.id) {
                    order.quantityValue = product.quantityValue;
                }
                return order;
            });
            // console.log(ordersUpdate);
            // Assign to client
            client.orders = [...ordersUpdate];

        } else {
            // console.log('no existe');
            client.orders = [...orders, product];
        }

    } else {
        // console.log('no es mayor');
        // Delete element when quantity is 0
        let result = orders.filter(order => order.id !== product.id);
        client.orders = [...result];
    }

    console.log(client.orders);
}