function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

describe('Operaciones matemáticas', () => {

    test('Sumar 10 y 20 y que el resultado sea 30', () => {
        expect(sumar(10, 20)).toBe(30);
    });

    test('Restar 10 y 5 y que el resultado sea 5', () => {
        expect(restar(10, 5)).toBe(5);
    });

    test('Que la suma de 10 y 20 no sea 50', () => {
        expect(sumar(10, 20)).not.toBe(50);
    });

    test('Que la resta de 10 y 5 no sea 10', () => {
        expect(restar(10, 5)).not.toBe(10);
    });
});
