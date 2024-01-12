import {sumar} from '../js/funciones.js';

describe('Operaciones matemáticas', () => {

    test('Sumar 10 y 20 y que el resultado sea 30', () => {
        expect(sumar(10, 20)).toBe(30);
    });
});