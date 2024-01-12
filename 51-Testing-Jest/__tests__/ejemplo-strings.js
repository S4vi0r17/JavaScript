const password = '123456';

describe('Valida que el password no este vacio y tenga menos de 6 caracteres', () => {

    test('Que el password tenga al menos 6 caracteres', () => {
        expect(password).toHaveLength(6);
    });

    test('Que el password no este vacio', () => {
        expect(password).not.toHaveLength(0);
    });
});