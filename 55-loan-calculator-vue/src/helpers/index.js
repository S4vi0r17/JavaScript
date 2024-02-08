const calculateTotal = (amount, term) => {
    let total;

    // Calculate the interests based on the amount
    if (amount < 5000) {
        total = amount * 1.5;
    } else if (amount >= 5000 && amount < 10000) {
        total = amount * 1.4;
    } else if (amount >= 10000 && amount < 15000) {
        total = amount * 1.3;
    } else {
        total = amount * 1.2;
    }

    // Calculate the interests based on the term
    if (term === 6) {
        total *= 1.1;
    } else if (term === 12) {
        total *= 1.2;
    } else {
        total *= 1.3;
    }

    return total;
};

export { calculateTotal };