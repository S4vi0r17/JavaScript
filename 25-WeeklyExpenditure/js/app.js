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

    deleteExpense(id) {
        this.expenses = this.expenses.filter(expense => expense.id !== id);
        console.log(this.expenses);
        this.substractBudget();
        // ui.addExpenseList(this.expenses);
        // ui.updateBudgetLeft(this.budgetLeft);
        // ui.checkBudget(this);
    }
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
    showExpense(expenses) {

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

            btnDelete.onclick = (evt) => {
                console.log(id);
                deleteExpense(id);
            }

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

    // Check budget
    checkBudget(budgetObj) {
        const { budget, budgetLeft } = budgetObj;

        const remaining = document.querySelector('.restante');

        // Check 25% of budget
        if ((budget / 4) >= budgetLeft) {
            remaining.classList.remove('alert-success', 'alert-warning');
            remaining.classList.add('alert-danger');
        } else if ((budget / 2) >= budgetLeft) {
            remaining.classList.remove('alert-success');
            remaining.classList.add('alert-warning');
        } else {
            remaining.classList.remove('alert-danger', 'alert-warning');
            remaining.classList.add('alert-success');
        }

        if (budgetLeft <= 0) {
            ui.printMessage('Budget exceeded', 'error');
            form.querySelector('button[type="submit"]').disabled = true;
        }
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
    ui.showExpense(budget.expenses);

    // Add budgetLeft to html
    ui.updateBudgetLeft(budget.budgetLeft);

    // Check budget
    ui.checkBudget(budget);

    form.reset();
}

function deleteExpense(id) {
    // Delete from the object
    budget.deleteExpense(id);

    // Delete from the HTML
    ui.showExpense(budget.expenses);

    // Update budget left
    ui.updateBudgetLeft(budget.budgetLeft);
    ui.checkBudget(budget);
}