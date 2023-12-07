const cart = document.querySelector('#carrito');
const cartContainer = document.querySelector('#lista-carrito tbody');
const emptyCart = document.querySelector('#vaciar-carrito');
const listCourses = document.querySelector('#lista-cursos');
let cartItems = [];

// Extra
const cartNotification = document.querySelector('.cart-notification');

addNotification(cartItems.length)

events();

function events() {

    listCourses.addEventListener('click', addCourse);

    // Eliminar cursos
    cart.addEventListener('click', removeCourse)

    // Limpiar carrito
    emptyCart.addEventListener('click', cleanCart)

}

function addCourse(evt) {
    evt.preventDefault();
    if (evt.target.classList.contains('agregar-carrito')) {
        const selectedCourse = evt.target.parentElement.parentElement;
        readCourseData(selectedCourse);
    }
    addNotification(cartItems.length)
}

function removeCourse(evt) {
    if (evt.target.classList.contains('borrar-curso')) {
        let courseId = evt.target.getAttribute('data-id');

        // Eliminar del arreglo
        cartItems = cartItems.filter(course => course.id !== courseId);

        // console.log(cartItems);
        // Insertar de nuevo al HTML
        fillCart();
    }
    addNotification(cartItems.length); // TODO
}

function cleanCart() {
    cartItems = [];
    // fillCart(); // Limpiar y Generar HTML
    cleanHTML(); // Solo limpiar
    addNotification(cartItems.length);
}

function readCourseData(course) {

    // Crear un objeto con el contenido del curso
    const courseInfo = {
        image: course.querySelector('img').src,
        title: course.querySelector('.info-card h4').textContent,
        price: course.querySelector('.precio span').textContent,
        id: course.querySelector('a').getAttribute('data-id'),
        quantity: 1
    }

    // Comprobar items duplicados
    const exist = cartItems.some(course => course.id === courseInfo.id)

    if (exist) {
        cartItems.forEach(courseData => {
            if (courseData.id === courseInfo.id) {
                courseData.quantity++;
            }
        })
        // const newArray = cartItems.map( course => {
        //     if(course.id === courseInfo.id){
        //         course.quantity +=1;
        //         return course;
        //     }else{
        //         return course;
        //     }
        // })
        // cartItems = [...newArray];
    } else {
        cartItems = [...cartItems, courseInfo]
    }

    console.log(cartItems);
    fillCart();
}

// Mostrando el carrito items en el carrito de compras
function fillCart() {

    // Limpiar HTML
    cleanHTML();

    cartItems.forEach(course => {
        const { image, title, price, quantity, id } = course;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src="${image}" alt="${title}" width="100">
        </td>
        <td>
            ${title}
        </td>
        <td>
            ${price}
        </td>
        <td>
            ${quantity}
        </td>
        <td>
            <a href="#" class="borrar-curso" data-id="${id}">X</a>
        </td>
        `;

        // Agregando el html al tbody
        cartContainer.appendChild(row);
    })
    // cartItems = []; // Otro metodo más simple
}

function cleanHTML() {
    // cartContainer.innerHTML = ''; // Forma lenta

    while (cartContainer.firstChild) {
        cartContainer.removeChild(cartContainer.firstChild);
    }
}

function addNotification(number) {
    if (number !== 0) {
        cartNotification.dataset.quantity = cartItems.length;
        cartNotification.classList.add('cart-notification--visible')
    } else {
        cartNotification.classList.remove('cart-notification--visible')
    }
}