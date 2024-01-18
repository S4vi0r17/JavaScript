const formatMoney = (amount) => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});
	return formatter.format(amount);
};

const calculateTotal = (amount, term) => {
	let total;

	// Calculate the interests based on the amount
	if (amount < 5000) {
		total = amount * 1.5;
	} else if (amount >= 5000 && amount < 10000) {
		total = amount * 1.35;
	} else if (amount >= 10000 && amount < 15000) {
		total = amount * 1.25;
	} else {
		total = amount * 1.2;
	}

	// Calculate the interests based on the term
	switch (term) {
		case 6:
			total *= 1.1;
			break;
		case 12:
			total *= 1.15;
			break;
		case 24:
			total *= 1.2;
			break;
		default:
			break;
	}

	return total;
};

export { formatMoney, calculateTotal };
