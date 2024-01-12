const client = {
    name: 'Ada',
    balance: 500,
    age: 26,
    type: 'premium'
};

describe('Testing al cliente', () => {

    test('Es Ada', () => {
        // expect(client.name).toBe('Ada');
        expect(client).toMatchSnapshot(); // Snapshot
    });

    test('El cliente es premium', () => {
        expect(client.type).toBe('premium');
    });

    test('No es otro cliente', () => {
        expect(client.name).not.toBe('Grace');
    });

    test('Tiene 500 de balance', () => {
        expect(client.balance).toBeGreaterThan(400);
    });

    test('Es menor de 30 años', () => {
        expect(client.age).toBeLessThan(30);
    });
});