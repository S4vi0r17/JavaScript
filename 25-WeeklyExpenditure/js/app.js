// Variables and selectors
const form = document.querySelector('#agregar-gasto');
const listExpenses = document.querySelector('#gastos ul');


// Event Listeners
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', askBudget);
    form.addEventListener('submit', addExpense);
}


// Classes
class Budget {
    constructor(budget) {
        this.budget = Number(budget);
        this.budgetLeft = this.budget;
        this.expenses = [];
    }

    substractBudget() {
        // return this.budgetLeft -= amount;
        const expense = this.expenses.reduce((total, amount) => total - amount.amountExpense, 0);
        this.budgetLeft = this.budget + expense; // expense is negative
        console.log(this.budgetLeft);
    }

    addExpense(expense) {
        this.expenses = [...this.expenses, expense];
        this.substractBudget();
    }

    // addListExpenses(expenses) {
    //     expenses.forEach(expense => {
    //         console.log(expense);
    //     });
    // }
}

class UI {
    insertBudget(amount) {
        const { budget, budgetLeft } = amount;
        document.querySelector('#total').textContent = budget;
        document.querySelector('#restante').textContent = budgetLeft;
    }

    printMessage(message, type) {
        const divMessage = document.createElement('div');
        divMessage.classList.add('text-center', 'alert');

        if (type === 'error') {
            divMessage.classList.add('alert-danger');
        } else {
            divMessage.classList.add('alert-success');
        }

        divMessage.textContent = message;
        document.querySelector('.primario').insertBefore(divMessage, form);

        setTimeout(() => {
            divMessage.remove();
        }, 3000);
    }

    // Add list of expenses
    addExpenseList(expenses) {

        // Clean HTML
        this.cleanHTML();

        expenses.forEach(expense => {
            const { nameExpense, amountExpense, id } = expense;

            // Create a li
            const newExpense = document.createElement('li');
            newExpense.className = 'list-group-item d-flex justify-content-between align-items-center';
            // Diference between className and classList: className can only have one class, classList can have multiple classes
            // newExpense.setAttribute('data-id', id); // Another way to add attributes
            newExpense.dataset.id = id;
            console.log(newExpense);

            // Add the HTML of the expense
            newExpense.innerHTML = `${nameExpense} <span class="badge badge-primary badge-pill">$ ${amountExpense}</span>`;

            // Add the button to delete
            const btnDelete = document.createElement('button');
            btnDelete.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnDelete.innerHTML = 'Delete &times;'; // &times; is the html entity for the multiplication symbol, only works with innerHTML

            newExpense.appendChild(btnDelete);

            // Add to HTML
            listExpenses.appendChild(newExpense);
        });
    }

    // Clean HTML
    cleanHTML() {
        while (listExpenses.firstChild) {
            listExpenses.removeChild(listExpenses.firstChild);
        }
    }

    // Update budget left
    updateBudgetLeft(budgetLeft) {
        document.querySelector('#restante').textContent = budgetLeft;
    }
}

const ui = new UI();
let budget;

// Functions
function askBudget() {
    // const budgetUser = prompt('¿Cuál es tu presupuesto semanal?');
    const budgetUser = 500;

    if (budgetUser === '' || budgetUser === null || isNaN(budgetUser) || budgetUser <= 0) {
        window.location.reload();
    }

    // null = cancel

    budget = new Budget(budgetUser);
    console.log(budget);
    ui.insertBudget(budget);
}

function addExpense(evt) {
    evt.preventDefault();

    // Read the form values
    const nameExpense = document.querySelector('#gasto').value;
    const amountExpense = Number(document.querySelector('#cantidad').value);

    // Validate
    if (nameExpense === '' || amountExpense === '') {
        ui.printMessage('All fields are required', 'error');
    } else if (amountExpense <= 0 || isNaN(amountExpense)) {
        ui.printMessage('Invalid amount', 'error');
    } else {
        ui.printMessage('Added', 'success');
    }

    // Create the object
    const expense = { nameExpense, amountExpense, id: Date.now() }; // Object literal enhancement
    // console.log(expense);
    budget.addExpense(expense);

    // console.log(budget.expenses);
    ui.addExpenseList(budget.expenses);

    // Add budgetLeft to html
    ui.updateBudgetLeft(budget.budgetLeft);

    form.reset();
}