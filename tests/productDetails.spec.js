const assert = require('assert');
const productDetails = require('../src/productDetails');

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    assert.ok(Array.isArray(productDetails()));
    assert.strictEqual(productDetails().length, 2);
    assert.strictEqual(productDetails().every(e => typeof e === 'object'), true);
    assert.ok(productDetails('a', 'b')[0] !== productDetails('a', 'b')[1]);
    assert.ok(productDetails().every(e => e.details.productId.endsWith(123)));
  });
});
