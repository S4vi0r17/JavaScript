const client = {
    name: 'Ada',
    age: 26,
    address: {
        city: 'CABA',
        country: 'Argentina',
    },
    balance: 500,
};

describe('client', () => {

    test('client is premium', () => {
        expect(client.balance).toBeGreaterThan(400);
    });

    test('client is not premium', () => {
        expect(client.balance).not.toBe(400);
    });

    test('client is Ada', () => {
        expect(client).toHaveProperty('name', 'Ada');
        // expect(client.name).toBe('Ada');
    });

    test('is not other client', () => {
        // expect(client).not.toHaveProperty('name', 'Grace');
        expect(client.name).not.toBe('Grace');
    });

    test('client is not empty', () => {
        expect(client).toBeInstanceOf(Object);
    });
});