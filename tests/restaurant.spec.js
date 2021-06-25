const assert = require('assert');
const createMenu = require('../src/restaurant');

describe('9 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    assert.strictEqual(typeof createMenu(), 'object');
    assert.deepStrictEqual(createMenu({ food: {}, drink: {} }).fetchMenu(), { food: {}, drink: {}});
    assert.deepStrictEqual(createMenu().consumption, []);

    const returnArray = createMenu({ food: { coxinha: 1.50 }, drink: { agua: 1.70 } });
    returnArray.order('coxinha');
    assert.deepStrictEqual(returnArray.consumption, ['coxinha']);

    const return3Itens = createMenu({ food: { coxinha: 3.50, 'ovo de codorna': 0.50 }, drink: { agua: 1.50 } });
    return3Itens.order('coxinha');
    return3Itens.order('ovo de codorna');
    return3Itens.order('agua');
    assert.deepStrictEqual(return3Itens.consumption.length, 3);

    const returnRepetido = createMenu({ food: { coxinha: 3.50, 'ovo de codorna': 0.50 }, drink: { agua: 1.50 } });
    returnRepetido.order('coxinha');
    returnRepetido.order('coxinha');
    assert.deepStrictEqual(returnRepetido.consumption, ['coxinha', 'coxinha']);

    const returnPay = createMenu({ food: { coxinha: 3.50, 'ovo de codorna': 0.50 }, drink: { agua: 1.50 } });
    returnPay.order('coxinha');
    returnPay.order('coxinha');
    assert.deepStrictEqual(returnRepetido.pay(), 7.70.toFixed(2));
  });
});
