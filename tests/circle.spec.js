/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados', () => {
    assert.ok(typeof circle(1) === 'object');
    assert.strictEqual(Object.keys(circle(1)).length, 3);
    assert.strictEqual(circle(), undefined);
    assert.strictEqual(Object.values(circle(2))[2], 12.56);
    assert.strictEqual(Object.values(circle(3))[1], 28.259999999999998);
    assert.deepStrictEqual(circle(3), { radius: 3, area: 28.259999999999998, circumference: 18.84 });
  });
});
